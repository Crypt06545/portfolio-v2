import Background from "./components/Background";

import HeroSection from "./components/Hero";

import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import { TechSkillsGrid } from "./components/ReviewCard";

import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";


function App() {
  return (
    <>
      <Background>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <TechSkillsGrid />
        {/* <EnvironmentSection/> */}
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </Background>
    </>
  );
}

export default App;
