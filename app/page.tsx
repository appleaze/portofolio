import Navbar from "@/components/ui/navbar";
import HomeSection from "@/components/HomeSection";
import AboutMe from "@/components/AboutMe";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/ui/Footer";

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
