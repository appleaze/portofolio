"use client";

import { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const AboutMe: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="py-20">
      <div className={`transition-opacity duration-500 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="container mx-auto px-4">
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

            <div>
              <h2 className="font-georgia text-5xl md:text-4xl mb-2">
                Skills
              </h2>
            <Tabs defaultValue="languages">
              <TabsList>
                <TabsTrigger value="languages">Programming Languages</TabsTrigger>
                <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
                <TabsTrigger value="tools">Tools & Platforms</TabsTrigger>
              </TabsList>
              
              <TabsContent value="languages">
                <ul className="list-disc pl-5 mt-4">
                  <li>Python</li>
                  <li>PHP</li>
                  <li>TypeScript</li>
                  <li>Dart</li>
                  <li>C++</li>
                </ul>
              </TabsContent>

              <TabsContent value="frameworks">
                <ul className="list-disc pl-5 mt-4">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TensorFlow</li>
                  <li>PyTorch</li>
                </ul>
              </TabsContent>

              <TabsContent value="tools">
                <ul className="list-disc pl-5 mt-4">
                  <li>Git & GitHub</li>
                  <li>Jupyter Notebooks</li>
                  <li>VS Code</li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
