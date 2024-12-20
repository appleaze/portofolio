"use client"; 

import { useState, useEffect } from 'react';
import ViewResumeButton from './ui/ViewResumeButton';

const HomeSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="homepage" className="py-40">
      <div className={`transition-opacity duration-500 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between space-y-6 md:space-y-0 md:space-x-10">
          <div className="text-center md:text-left">
            <h1 className="font-georgia text-4xl md:text-6xl mb-4">Hi, I'm Theo Deannata</h1>
            <p className="font-sans text-2xl md:text-xl mb-6">
              A Computer Science Student, Intelligence System Concentration
            </p>
            <ViewResumeButton />
          </div>

          <div className="w-48 h-48 md:w-64">
            <img
              src="/Theo.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
