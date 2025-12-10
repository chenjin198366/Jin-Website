import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Bot, Loader2, Minimize2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am Jin\'s virtual assistant. Ask me anything about his skills or experience.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    // Filter history for API context (exclude error messages if any)
    const history = messages
        .filter(m => !m.isError)
        .map(m => ({ role: m.role, text: m.text }));

    const responseText = await sendMessageToGemini(userMsg.text, history);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl w-[90vw] max-w-[360px] h-[500px] mb-4 flex flex-col overflow-hidden animate-[fadeIn_0.3s_ease-out]">
          {/* Header */}
          <div className="bg-zinc-800 p-4 border-b border-zinc-700 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-600 rounded-lg">
                <Bot size={18} className="text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Assistant</h3>
                <p className="text-xs text-zinc-400">Powered by Gemini 2.5</p>
              </div>
            </div>
            <div className="flex gap-2">
                 <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-zinc-700 rounded text-zinc-400 hover:text-white transition-colors"
                >
                  <Minimize2 size={18} />
                </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-zinc-800 text-zinc-200 rounded-bl-none border border-zinc-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-2xl rounded-bl-none border border-zinc-700 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-blue-500" />
                  <span className="text-xs text-zinc-400">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-zinc-800 border-t border-zinc-700">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Jin's experience..."
                className="w-full bg-zinc-900 text-white text-sm rounded-xl py-3 pl-4 pr-12 border border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-zinc-600"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-blue-600 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-4 rounded-full shadow-lg shadow-blue-900/20 transition-all duration-300 hover:scale-105"
        >
          <MessageSquare size={24} />
          <span className="font-medium pr-1">Chat with AI</span>
        </button>
      )}
    </div>
  );
};

export default ChatWidget;