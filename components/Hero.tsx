import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const { title, subtitle, description } = CONTENT.hero;

  return (
    <div className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto animate-[fadeIn_1s_ease-out]">
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 mx-auto mb-8 flex items-center justify-center shadow-xl shadow-blue-200 ring-4 ring-white">
        <span className="text-4xl font-bold text-white tracking-widest">JC</span>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-gray-900">
        {title[lang]}
      </h1>
      
      <div className="text-xl md:text-2xl text-gray-500 font-normal mb-8">
        {subtitle[lang]}
      </div>
      
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        {description[lang]}
      </p>
    </div>
  );
};

export default Hero;