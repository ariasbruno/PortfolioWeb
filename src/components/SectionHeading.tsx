import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  showDecoration?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
}) => {
  return (
    <div className="text-center mb-16 relative">
      <div className="animate-slide-up">
        <p className="text-primary-blue font-medium mb-3 text-lg font-serif">
          {subtitle}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
          {title}
        </h2>
        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="inline-block w-44 h-1 bg-primary-yellow rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;