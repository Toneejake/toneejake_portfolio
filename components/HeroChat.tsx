import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, Bot, User, ArrowRight } from 'lucide-react';
import { createChatSession } from '../services/geminiService';
import { ChatMessage } from '../types';
import { PERSONAL_INFO } from '../constants';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const SUGGESTIONS = [
    "Who are you?",
    "What are your skills?",
    "Tell me about your projects",
    "How can I contact you?"
];

const HeroChat: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isChatStarted, setIsChatStarted] = useState(false);
    const chatSessionRef = useRef<any>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Auto-scroll disabled by user request.
    // useEffect(() => {
    //    scrollToBottom();
    // }, [messages.length, isChatStarted]);

    const handleSend = async (text: string = input) => {
        if (!text.trim() || isLoading) return;

        if (!isChatStarted) setIsChatStarted(true);

        const userMsg: ChatMessage = { role: 'user', text: text };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            if (!chatSessionRef.current) {
                chatSessionRef.current = createChatSession();
            }

            const result = await chatSessionRef.current.sendMessageStream({ message: text });

            setMessages(prev => [...prev, { role: 'model', text: '', isStreaming: true }]);

            let fullText = '';

            for await (const chunk of result) {
                const chunkText = chunk.text;
                if (chunkText) {
                    fullText += chunkText;
                    setMessages(prev => {
                        const newArr = [...prev];
                        const lastIdx = newArr.length - 1;
                        newArr[lastIdx] = { ...newArr[lastIdx], text: fullText };
                        return newArr;
                    });
                }
            }

            setMessages(prev => {
                const newArr = [...prev];
                const lastIdx = newArr.length - 1;
                newArr[lastIdx] = { ...newArr[lastIdx], isStreaming: false };
                return newArr;
            });

        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to my brain right now. Please try again in a moment!" }]);
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
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[600px] text-center px-4">

            {/* Header Content - Fades out/moves up when chat starts? Or stays? Let's keep it simple. */}
            {!isChatStarted ? (
                <div className="space-y-6 mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                        <Sparkles className="w-4 h-4" />
                        <span>AI-Powered Portfolio</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight font-display">
                        Ask <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Toneejake</span>
                    </h1>

                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        I'm <span className="text-zinc-200 font-medium">{PERSONAL_INFO.name}</span>.
                        Ask me anything about my work in AI, Data Science, and Intelligent Systems.
                    </p>
                </div>
            ) : (
                <div className="w-full flex-1 overflow-y-auto mb-6 space-y-6 text-left max-h-[500px] pr-2 custom-scrollbar fade-in duration-500">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            {msg.role === 'model' && (
                                <div className="w-10 h-10 rounded-full bg-emerald-900/40 flex items-center justify-center shrink-0 border border-emerald-800/50 mt-1">
                                    <Bot className="w-5 h-5 text-emerald-400" />
                                </div>
                            )}

                            <div
                                className={`
                    p-4 rounded-2xl text-base leading-relaxed max-w-[85%]
                    ${msg.role === 'user'
                                        ? 'bg-zinc-800 text-white rounded-tr-sm'
                                        : 'bg-zinc-900/50 text-zinc-200 border border-zinc-800 rounded-tl-sm'}
                  `}
                            >
                                {msg.role === 'model' ? (
                                    <div className="prose prose-invert prose-sm max-w-none text-zinc-200 first:mt-0 prose-p:leading-relaxed prose-pre:bg-zinc-800 prose-pre:border prose-pre:border-zinc-700">
                                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
                                    </div>
                                ) : (
                                    <div>{msg.text}</div>
                                )}
                                {msg.isStreaming && <span className="inline-block w-1.5 h-4 ml-1 bg-emerald-400 animate-pulse align-middle" />}
                            </div>

                            {msg.role === 'user' && (
                                <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center shrink-0 mt-1">
                                    <User className="w-5 h-5 text-zinc-400" />
                                </div>
                            )}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            )}

            {/* Input Area */}
            <div className="w-full max-w-2xl relative z-20 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-zinc-900 border border-zinc-700 rounded-2xl p-2 flex items-center shadow-2xl">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder={isChatStarted ? "Ask a follow-up question..." : "Ask me anything..."}
                        className="flex-1 bg-transparent border-none text-lg text-white px-4 py-3 focus:ring-0 placeholder:text-zinc-500"
                        disabled={isLoading}
                        autoFocus
                    />
                    <button
                        onClick={() => handleSend()}
                        disabled={isLoading || !input.trim()}
                        className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-all disabled:opacity-50 disabled:grayscale"
                    >
                        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowRight className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Suggestions */}
            {!isChatStarted && (
                <div className="mt-8 flex flex-wrap justify-center gap-3 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
                    {SUGGESTIONS.map((suggestion) => (
                        <button
                            key={suggestion}
                            onClick={() => handleSend(suggestion)}
                            className="px-4 py-2 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 hover:border-emerald-500/30 rounded-full text-sm text-zinc-400 hover:text-emerald-400 transition-all"
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
            )}

            {/* Disclaimer */}
            <div className="mt-8 text-zinc-600 text-xs text-center max-w-lg">
                This AI answers based on Kervin's portfolio data.
            </div>
        </div>
    );
};

export default HeroChat;
