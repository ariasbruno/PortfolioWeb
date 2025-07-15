import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <p className="text-blue-600 font-medium mb-2 dark:text-yellow-400">{subtitle}</p>
      <h2 className="text-3xl md:text-4xl font-bold">
        {title}
      </h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full dark:bg-yellow-400"></div>
    </div>
  );
};

export default SectionHeading;