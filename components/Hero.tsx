import React, { useState } from 'react';
import { Language } from '../types';
import { RESUME_CONTENT } from '../constants';
import { User } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const title = RESUME_CONTENT.header.name;
  const subtitle = RESUME_CONTENT.header.title;
  const description = RESUME_CONTENT.summary.text;
  
  const [imgError, setImgError] = useState(false);

  return (
    <div className="pt-40 pb-20 px-6 text-center max-w-4xl mx-auto animate-[fadeIn_1s_ease-out]">
      <div className="relative w-40 h-40 mx-auto mb-8 group">
        <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="relative w-full h-full rounded-full p-1 bg-white shadow-2xl shadow-blue-200 ring-1 ring-gray-100 overflow-hidden flex items-center justify-center bg-gray-50">
             {!imgError ? (
               <img 
                  // Converted blob URL to raw URL to ensure it renders as an image
                  src="https://raw.githubusercontent.com/chenjin198366/Jin-Website/main/profile.jpg" 
                  alt="Jin Chen" 
                  onError={(e) => {
                    console.error("Image failed to load from GitHub.");
                    setImgError(true);
                  }}
                  className="w-full h-full rounded-full object-cover hover:scale-105 transition-transform duration-500"
               />
             ) : (
               <div className="flex flex-col items-center justify-center text-gray-400 w-full h-full bg-gray-100">
                  <User size={48} className="mb-1 opacity-50" />
               </div>
             )}
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