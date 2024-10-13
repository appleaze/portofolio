import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/ui/navbar";
import HomeSection from "@/components/ui/HomeSection";
import ProjectSection from "@/components/ui/ProjectSection";
import Footer from "@/components/ui/Footer";
import AboutMe from "@/components/ui/AboutMe";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <AboutMe />
      <ProjectSection />
      <Footer />
    </div>
  );
}
