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
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 mx-auto mb-8 flex items-center justify-center border-2 border-zinc-800 shadow-2xl">
        <span className="text-4xl font-bold text-white tracking-widest">JC</span>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
        {title[lang]}
      </h1>
      
      <div className="text-xl md:text-2xl text-zinc-400 font-light mb-8">
        {subtitle[lang]}
      </div>
      
      <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
        {description[lang]}
      </p>
    </div>
  );
};

export default Hero;
