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
      <div className="relative w-40 h-40 mx-auto mb-8 group">
        <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="relative w-full h-full rounded-full p-1 bg-white shadow-2xl shadow-blue-200 ring-1 ring-gray-100 overflow-hidden">
             <img 
                src="/profile.jpg" 
                alt="Jin Chen" 
                className="w-full h-full rounded-full object-cover hover:scale-105 transition-transform duration-500"
             />
        </div>
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
