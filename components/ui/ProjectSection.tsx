"use client"; // Required if you're using hooks

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Importing ShadCN UI Card components

const projects = [
  {
    title: " Loan Prediction Using Machine Learning Ensemble Method",
    description: " A Binary Classification task, utilize ensemble method, allow user to construct their own model.",
    imageUrl: "/images/project1.jpg", // Path to your project image
    link: "#",
  },
  {
    title: " Detecting Fake News Using Machine Learning and Explainable AI",
    description: "A Binary Classification task on fake and real news, utilize machine learning and explainable ai.",
    imageUrl: "/images/project2.jpg", // Path to your project image
    link: "#",
  },
  {
    title: "Speech Emotion Classification",
    description: "A multiclasss classifcation categorizing emotion using CNN, LSTM, and CLSTM",
    imageUrl: "/images/project3.jpg", // Path to your project image
    link: "#",
  },
];

const ProjectSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className=" font-georgia text-5xl md:text-4xl text-center mb-12">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray border-none">
              {/* Project Image */}
              <img
                src={project.imageUrl}
                alt={`${project.title} Image`}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <a
                  href={project.link}
                  className="text-blue-400 hover:underline"
                >
                  View Details
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
