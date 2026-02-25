import Background from "./components/Background";

import HeroSection from "./components/Hero";

import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import { TechSkillsGrid } from "./components/ReviewCard";
import { ProjectsSection } from "./components/ProjectsSection";

function App() {
  return (
    <>
      <Background>
        <HeroSection />
        <AboutSection />
        <TechSkillsGrid />
        <ProjectsSection/>
        <ContactSection />
        <Footer />
      </Background>
    </>
  );
}

export default App;
