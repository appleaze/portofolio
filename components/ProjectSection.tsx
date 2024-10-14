"use client";

import React from "react";
import ProjectCard from "./ui/ProjectCard";

const projects = [
  {
    title: " Loan Prediction Using Machine Learning Ensemble Method",
    description: " A Binary Classification task, utilize ensemble method, allow user to construct their own model.",
    imageUrl: "/machine-learning/HomePage.png", 
    descriptionExtended:"To Be Written",
    images:["/machine-learning/HomePage.png", "/machine-learning/EDAPage.png", "/machine-learning/DescriptionPage.png", "/machine-learning/DataPreprocessingPage.png", "/machine-learning/TrainingPage.png", "/machine-learning/PredictionPage.png"]
  },
  {
    title: " Detecting Fake News Using Machine Learning and Explainable AI",
    description: "A Binary Classification task on fake and real news, utilize machine learning and explainable ai.",
    imageUrl: "/fake-news/SVM-Pred.png", 
    descriptionExtended:"To Be Written",
    images:["/fake-news/SVM-matrix.png", "/fake-news/SVM-Pred.png", "/fake-news/Naive Bayes-Matrix.png","/fake-news/Naive Bayes-Pred.png","/fake-news/Decision Tree-Matrix.png", "/fake-news/Decision Tree-Pred.png","/fake-news/Random Forest - Matrix.png", "/fake-news/Random Forest-Pred.png"]
  },
  {
    title: "Speech Emotion Classification",
    description: "A multiclasss classifcation categorizing emotion using CNN, LSTM, and CLSTM",
    imageUrl: "/speech-recognition/matrix CNN.png", 
    descriptionExtended:"To Be Written",
    images:["/speech-recognition/matrix CNN.png", "/speech-recognition/Graphic.png", "/speech-recognition/Confusion Marix LSTM.png", "/speech-recognition/Graphic LSTM.png", "/speech-recognition/Matrix CLSTM.png", "/speech-recognition/CLSTM Graph.png"]
  },
];

const ProjectSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="font-georgia text-5xl md:text-4xl text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              descriptionExtended={project.descriptionExtended}
              imageUrl={project.imageUrl}
              images={project.images} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;