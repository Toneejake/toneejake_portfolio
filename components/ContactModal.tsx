import React, { useState, useRef } from 'react';
import { X, Mail, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../constants';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (serviceId && templateId && publicKey && formRef.current) {
            try {
                await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
                setIsSent(true);
            } catch (error) {
                console.error('EmailJS Error:', error);
                alert("Failed to send email automatically. Opening your email client instead.");
                // Fallback to mailto
                const subject = `Portfolio Contact from ${formData.name}`;
                const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
                window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }
        } else {
            console.warn("EmailJS keys missing in .env.local. Using mailto fallback.");
            // Fallback to mailto
            const subject = `Portfolio Contact from ${formData.name}`;
            const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
            window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            setIsSent(true); // Close modal even on fallback for better UX
        }

        setIsSubmitting(false);

        if (isSent || !serviceId) {
            setTimeout(() => {
                onClose();
                setIsSent(false);
                setFormData({ name: '', email: '', message: '' });
            }, 3000);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-full transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Left Column: Contact Info */}
                <div className="w-full md:w-5/12 bg-zinc-950 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                    <h2 className="text-3xl font-bold text-white mb-2 font-display">Contact Me</h2>
                    <h3 className="text-xl text-emerald-400 font-medium mb-6">Get In Touch</h3>
                    <p className="text-zinc-400 mb-12 leading-relaxed">
                        Feel free to contact me for any work or suggestions below.
                    </p>

                    <div className="space-y-6">
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-zinc-300 hover:text-emerald-400 transition-colors group">
                            <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-emerald-500/10 transition-colors border border-zinc-800 group-hover:border-emerald-500/20">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-medium">{PERSONAL_INFO.email}</span>
                        </a>

                        <a href="https://www.linkedin.com/in/jkevangelista/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-emerald-400 transition-colors group">
                            <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-emerald-500/10 transition-colors border border-zinc-800 group-hover:border-emerald-500/20">
                                <Linkedin className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-medium">linkedin.com/in/jkevangelista</span>
                        </a>

                        <a href="https://github.com/Toneejake" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-emerald-400 transition-colors group">
                            <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-emerald-500/10 transition-colors border border-zinc-800 group-hover:border-emerald-500/20">
                                <Github className="w-5 h-5" />
                            </div>
                            <span className="text-sm font-medium">github.com/Toneejake</span>
                        </a>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="w-full md:w-7/12 bg-zinc-900 p-8 md:p-10">
                    {isSent ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[400px]">
                            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-2">
                                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                            <p className="text-zinc-400 max-w-xs">
                                Thank you for reaching out. I'll get back to you as soon as possible.
                            </p>
                        </div>
                    ) : (
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-zinc-300 ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                    placeholder="Your name"
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-zinc-300 ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                    placeholder="Your email"
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-zinc-300 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                    placeholder="Your message"
                                    rows={4}
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                            >
                                {isSubmitting ? (
                                    <>Processing...</>
                                ) : (
                                    <>Send Message <Send className="w-4 h-4" /></>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
