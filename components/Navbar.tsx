import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  toggleLang: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLang }) => {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-semibold text-lg tracking-tight text-white">
          JIN CHEN
        </div>
        <button
          onClick={toggleLang}
          className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500 text-blue-400 text-sm hover:bg-blue-600 hover:text-white transition-all duration-300"
          aria-label="Toggle Language"
        >
          <Globe size={14} />
          <span>{lang === 'en' ? 'EN / 中文' : '中文 / EN'}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
