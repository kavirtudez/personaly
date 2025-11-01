'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Bot, Calendar, Mail } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import Image from 'next/image';
import profile from '@/assets/images/profile.jpg';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export const ChatbotSection = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Add the initial greeting from the chatbot when the component mounts
    const initialMessage: Message = {
      text: "Hey there! I am an exact copy of Kazz. She fine-tuned me into knowing everything about her, so you can ask me anything! :)",
      sender: 'bot'
    };
    setMessages([initialMessage]);
  }, []);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from the chatbot.');
      }

      const data = await response.json();
      const botMessage: Message = { text: data.response, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        text: "Sorry, I'm having trouble connecting. Please try again later.",
        sender: 'bot',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\*\*\*.*?\*\*\*|\*\*.*?\*\*|\*.*?\*)/g);

    return parts.map((part, index) => {
        if (part.startsWith('***') && part.endsWith('***')) {
            return <strong key={index}><em>{part.slice(3, -3)}</em></strong>;
        }
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
            return <em key={index}>{part.slice(1, -1)}</em>;
        }
        return part;
    });
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="AI Assistant"
          title="Curious if I'd be a great fit for your team?"
          description="I built a conversational agent that knows me well. Feel free to chat with it and see if we’re a match."
        />
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-gray-900/50 border border-indigo-500/20 rounded-2xl shadow-lg shadow-indigo-500/10 backdrop-blur-lg">
            <div className="h-96 p-6 overflow-y-auto custom-scrollbar" ref={containerRef}>
              <div className="flex flex-col gap-4">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}
                  >
                    {msg.sender === 'bot' && (
                      <div className="size-8 rounded-full flex-shrink-0 overflow-hidden">
                        <Image src={profile} alt="Kazz's AI" className="rounded-full w-full h-full object-cover" />
                      </div>
                    )}
                    <div
                      className={`max-w-md px-4 py-3 rounded-2xl ${
                        msg.sender === 'user'
                          ? 'bg-indigo-600 text-white rounded-br-none'
                          : 'bg-gray-800 text-gray-300 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>
                        {msg.sender === 'bot' ? renderFormattedText(msg.text) : msg.text}
                      </p>
                    </div>
                    {msg.sender === 'user' && (
                      <div className="size-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                        <User className="text-white size-5" />
                      </div>
                    )}
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-3">
                    <div className="size-8 rounded-full flex-shrink-0 overflow-hidden">
                      <Image src={profile} alt="Kazz's AI" className="rounded-full w-full h-full object-cover" />
                    </div>
                    <div className="bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-none">
                      <div className="flex items-center gap-1.5">
                        <motion.div className="size-2 bg-indigo-400 rounded-full" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5, repeat: Infinity }} />
                        <motion.div className="size-2 bg-indigo-400 rounded-full" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5, delay: 0.1, repeat: Infinity }} />
                        <motion.div className="size-2 bg-indigo-400 rounded-full" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5, delay: 0.2, repeat: Infinity }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
            <div className="border-t border-indigo-500/20 p-4">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                  placeholder="Ask me anything about Kazz..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-full py-3 pl-5 pr-14 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white rounded-full p-2.5 hover:bg-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="size-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="https://calendly.com/kazzvirtudez/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-500 transition-colors duration-300 ease-in-out transform hover:scale-105"
            >
              <Calendar className="size-5" />
              <span>Schedule a meet</span>
            </a>
            <a
              href="mailto:kazzvirtudez@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
            >
              <Mail className="size-5" />
              <span>Send me a message</span>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(129, 140, 248, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(129, 140, 248, 0.8);
        }
      `}</style>
    </section>
  );
}; 