import React from "react";
import { Viewer } from '@react-pdf-viewer/core';
import { Worker } from "@react-pdf-viewer/core"; 
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Button } from "./ui/button";

interface PdfViewerProps {
  pdfUrl: string;
  resumeDownloadUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl, resumeDownloadUrl  }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin(
      {
        sidebarTabs: () => [],
        renderToolbar: (Toolbar) => (
          <Toolbar>
              {(slots) => (
                  <>
                      {slots.Download} 
                  </>
              )}
          </Toolbar>
      ),
      }
    );
    return (
        <div style={{
          border: '1px solid rgba(0, 0, 0, 0.3)',
          height: '750px',
          }}>
            <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.111/pdf.worker.min.js">
                <Viewer
                fileUrl={pdfUrl}
                plugins={[defaultLayoutPluginInstance]}
                
                />
            </Worker>
            <a href={resumeDownloadUrl} download="Resume_Theo Deannata Harjanto.pdf">
              <Button variant="outline">Download Resume</Button>
            </a>
        </div>
  );
};

export default PdfViewer;
