import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Credenza, CredenzaTrigger, CredenzaContent, CredenzaHeader, CredenzaTitle, CredenzaBody, CredenzaFooter, CredenzaClose } from "@/components/ui/credenza";
import PdfViewer from "../PdfViewer";

const ViewResumeButton: React.FC = () => {
  
  const pdfUrl = "/Resume_Theo Deannata Harjanto.pdf";
  const resumeDownloadUrl = "/Resume_Theo Deannata Harjanto.pdf"; 

  return (
    <div>
      <Credenza>
        <CredenzaTrigger asChild>
          <Button>View Resume</Button>
        </CredenzaTrigger>

        <CredenzaContent className="lg:max-w-6xl max-h-full">

          <CredenzaHeader>
            <CredenzaTitle>Resume</CredenzaTitle>
          </CredenzaHeader>

          <CredenzaBody className="flex-1 overflow-auto">
            <PdfViewer pdfUrl={pdfUrl} resumeDownloadUrl={resumeDownloadUrl} /> 
          </CredenzaBody>

          <CredenzaFooter>
            <a href={resumeDownloadUrl} download="Resume_Theo Deannata Harjanto.pdf">
              <Button variant="outline">Download Resume</Button>
            </a>
            <CredenzaClose asChild>
              <Button>Close</Button>
            </CredenzaClose>
          </CredenzaFooter>

        </CredenzaContent>
      </Credenza>
    </div>
  );
};

export default ViewResumeButton;
