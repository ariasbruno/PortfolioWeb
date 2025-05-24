import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <p className="text-yellow-400 font-medium mb-2">{subtitle}</p>
      <h2 className="text-3xl md:text-4xl font-bold">
        {title}
      </h2>
      <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionHeading;