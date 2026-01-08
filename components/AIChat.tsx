import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2, User, Bot } from 'lucide-react';
import { createChatSession } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm John's AI assistant. Ask me anything about his projects, skills, or resume." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      if (!chatSessionRef.current) {
        chatSessionRef.current = createChatSession();
      }

      const result = await chatSessionRef.current.sendMessageStream({ message: userMsg.text });
      
      // Add a placeholder for the model response
      setMessages(prev => [...prev, { role: 'model', text: '', isStreaming: true }]);

      let fullText = '';
      
      for await (const chunk of result) {
        const text = chunk.text; // Access .text property directly
        if (text) {
          fullText += text;
          setMessages(prev => {
            const newArr = [...prev];
            const lastIdx = newArr.length - 1;
            newArr[lastIdx] = { ...newArr[lastIdx], text: fullText };
            return newArr;
          });
        }
      }
      
      // Finalize streaming state
      setMessages(prev => {
        const newArr = [...prev];
        const lastIdx = newArr.length - 1;
        newArr[lastIdx] = { ...newArr[lastIdx], isStreaming: false };
        return newArr;
      });

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-emerald-600 text-white rounded-full shadow-2xl hover:bg-emerald-500 transition-all z-50 flex items-center gap-2 group ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap">
          Ask AI about John
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[500px] bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="p-4 bg-zinc-800/50 backdrop-blur border-b border-zinc-700 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="font-semibold text-zinc-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                John's AI Agent
              </h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-zinc-700 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-zinc-400" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && (
                  <div className="w-8 h-8 rounded-full bg-emerald-900/50 flex items-center justify-center shrink-0 border border-emerald-800">
                    <Bot className="w-4 h-4 text-emerald-400" />
                  </div>
                )}
                
                <div 
                  className={`
                    p-3 rounded-2xl text-sm max-w-[80%] 
                    ${msg.role === 'user' 
                      ? 'bg-emerald-600 text-white rounded-tr-sm' 
                      : 'bg-zinc-800 text-zinc-200 rounded-tl-sm border border-zinc-700'}
                  `}
                >
                  {msg.text}
                  {msg.isStreaming && <span className="inline-block w-1.5 h-3 ml-1 bg-emerald-400 animate-pulse"/>}
                </div>

                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-zinc-400" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-zinc-900 border-t border-zinc-800">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my thesis, skills..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 pl-4 pr-12 text-zinc-200 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all placeholder:text-zinc-600"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:hover:bg-emerald-600"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
            <div className="text-center mt-2">
              <span className="text-[10px] text-zinc-600 uppercase tracking-wider"> </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;