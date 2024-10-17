"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/ui/ImageCarousel";

interface ProjectCardProps {
  title: string;
  description: string;
  descriptionExtended: string;
  imageUrl: string;
  images: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, descriptionExtended, imageUrl, images }) => {
  return (
    <Card className="bg-gray border-none">
      <img src={imageUrl} alt={`${title} Image`} className="w-full h-48 object-cover rounded-t-lg" />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Credenza>
          <CredenzaTrigger asChild>
            <Button>View Details</Button>
          </CredenzaTrigger>
          <CredenzaContent className="w-full max-w-4xl p-6"> 
            <CredenzaHeader>
              <CredenzaTitle className="text-2xl md:text-lg">{title}</CredenzaTitle>
              <CredenzaDescription className="text-lg md:text-md">{descriptionExtended}</CredenzaDescription>
            </CredenzaHeader>
            <CredenzaBody>
              {/* Image Carousel */}
              <ImageCarousel images={images} />
            </CredenzaBody>
            <CredenzaFooter>
              <CredenzaClose asChild>
                <Button variant="outline">Close</Button>
              </CredenzaClose>
            </CredenzaFooter>
          </CredenzaContent>
        </Credenza>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
