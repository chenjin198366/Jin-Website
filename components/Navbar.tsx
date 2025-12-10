import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  toggleLang: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLang }) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-semibold text-lg tracking-tight text-gray-900">
          JIN CHEN
        </div>
        <button
          onClick={toggleLang}
          className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-300 text-gray-600 text-sm hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
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