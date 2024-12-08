"use client";

import React from "react";
import ProjectCard from "./ui/ProjectCard";

const projects = [
  {
    title: " Loan Prediction Using Machine Learning Ensemble Method",
    description: " A Binary Classification task, utilize ensemble method, allow user to construct their own model.",
    imageUrl: "/machine-learning/HomePage.png", 
    descriptionExtended:"A Binary Classification task, utilize ensemble method, allow user to construct their own model. My Role are Creating EDA Page, Finding the most optimal method, Data Cleaning and Curating",
    images:["/machine-learning/HomePage.png", "/machine-learning/EDAPage.png", "/machine-learning/DescriptionPage.png", "/machine-learning/DataPreprocessingPage.png", "/machine-learning/TrainingPage.png", "/machine-learning/PredictionPage.png"],
    githubUrl: "https://github.com/appleaze/Machine_Learning_Final_Project", 
    videoUrl: "https://youtu.be/o4d9lsinqQQ?si=qTBxxrrA29dTG4-k",
    deploymentUrl: "https://german-loan-la01.streamlit.app/"
  },
  {
    title: " Detecting Fake News Using Machine Learning and Explainable AI",
    description: "A Binary Classification task on fake and real news, utilize machine learning and explainable ai.",
    imageUrl: "/fake-news/SVM-Pred.png", 
    descriptionExtended:" A Binary Classification task on fake and real news, utilize machine learning and explainable ai. My Role are creating the SVM, Naive bayes, and the explainable model",
    images:["/fake-news/SVM-matrix.png", "/fake-news/SVM-Pred.png", "/fake-news/Naive Bayes-Matrix.png","/fake-news/Naive Bayes-Pred.png","/fake-news/Decision Tree-Matrix.png", "/fake-news/Decision Tree-Pred.png","/fake-news/Random Forest - Matrix.png", "/fake-news/Random Forest-Pred.png"],
    githubUrl: "https://github.com/appleaze/Research-Method", 
    videoUrl: "https://youtu.be/chwr9UnVze0",
  },
  {
    title: "Speech Emotion Classification",
    description: "A multiclasss classifcation categorizing emotion using CNN, LSTM, and CLSTM",
    imageUrl: "/speech-recognition/matrix CNN.png", 
    descriptionExtended:"A multiclasss classifcation categorizing emotion using CNN, LSTM, and CLSTM. The following picture are the result of the experimet. My Role are creating the LSTM model and finding hyperparameter.",
    images:["/speech-recognition/matrix CNN.png", "/speech-recognition/Graphic.png", "/speech-recognition/Martix LSTM.png", "/speech-recognition/Graphic LSTM.png", "/speech-recognition/Matrix CLSTM.png", "/speech-recognition/CLSTM Graph.png"],
    githubUrl: "https://colab.research.google.com/drive/150MiRDEyVwICoPJPAnIgayPXovvvI_ri?usp=sharing",
  },
  {
    title: "Sentiment Analysis and Named Entity Recognition using DistilBERT",
    description: "A multiclass sentiment analysis with named entity recognition using DistilBERT",
    imageUrl: "/natural-language-processing/gradio-deployment.png",
    descriptionExtended: "A multiclass sentiment analysis with DistilBERT on iPhone 11 Amazon review. The following picture are the gradio deployment and the sentiment analysis result. My Role in the project is training the Sentiment Analysis Model and adding probability in the prediction",
    images: ["/natural-language-processing/gradio-deployment.png", "/natural-language-processing/postive-result.png"],
    githubUrl: "https://github.com/IdjiotSandwiches/Combining-Sentiment-Analysis-and-Named-Entity-Recognition-in-Smartphone-Reviews", 
    videoUrl: "https://youtu.be/-mjuChzPKEc",
    deploymentUrl: "https://huggingface.co/spaces/straightline777/Sentiment_Analysis_DistilBERT"
  }
];

const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="py-20">
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
              githubUrl={project.githubUrl}
              videoUrl={project.videoUrl}
              deploymentUrl={project.deploymentUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;