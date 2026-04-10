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
    <Background>
      <Navbar />

      {/* 1. Use <main> instead of a <div> for SEO/A11y
          2. Add id="main-content" so the skip link works
          3. tabIndex="-1" ensures focus moves correctly
      */}
      <main id="main-content" tabIndex="-1" className="outline-none">
        <HeroSection />
        <AboutSection />
        <TechSkillsGrid />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </Background>
  );
}

export default App;
