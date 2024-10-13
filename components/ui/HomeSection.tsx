"use client"; 

import { useState, useEffect } from 'react';
import { Button } from './button';


const HomeSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-40">
      <div className={`transition-opacity duration-500 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between space-y-6 md:space-y-0 md:space-x-10">
        {/* Left: Text Section */}
          <div className="text-center md:text-left">
              <h1 className="font-georgia text-8xl md:text-6xl mb-4">Hi, I'm Theo Deannata</h1>
              <p className="font-sans text-2xl md:text-xl mb-6">
                  A Computer Science Student, Inteligance System Concentration
              </p>
              <Button variant="outline">
                Tombol
              </Button>
          </div>
        
          <div className="w-48 h-48 md:w-64 md:h-64">
            <img
              src="/your-profile-picture.jpg" // Replace with your image path
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-white"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
