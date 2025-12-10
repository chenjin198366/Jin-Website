import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', delay = '0s' }) => {
  return (
    <div 
      className={`bg-[#1c1c1e] rounded-[30px] p-8 transition-all duration-300 hover:scale-[1.02] hover:bg-[#2c2c2e] hover:shadow-2xl border border-white/5 ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};

export default Card;
