import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '', delay = '0s' }) => {
  return (
    <div 
      className={`bg-white rounded-[30px] p-8 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl border border-gray-200 shadow-sm ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};

export default Card;