"use client"; // Required if you're using hooks

import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Wrapper to apply flex for side-by-side layout */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* About Me Section */}
          <div className="md:w-1/2">
            <h2 className="font-georgia text-5xl md:text-4xl mb-6">
              About Me
            </h2>
            <p className="text-lg leading-relaxed">
              I'm a Computer Science Major at BINUS Unvirversity in Intelligence System Concentration. Current in 5th semester, learning Deep Learning and Computer Vision to expand my skill. I'm  also experience in Front End Web Development, UI/UX Design, and  Video Editing.     
            </p>
          </div>

          {/* Skills Section */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h2 className="font-georgia text-5xl md:text-4xl mb-6">
              Skills
            </h2>
            <ul className="list-disc pl-5 text-lg leading-relaxed">
              <li>JavaScript / TypeScript</li>
              <li>React & Next.js</li>
              <li>Tailwind CSS</li>
              <li>Python & Machine Learning</li>
              <li>Docker & CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
