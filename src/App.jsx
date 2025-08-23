import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import { useEffect } from "react";
import { logVisit } from "./firebase";
import SecretVisitsModal from './components/SecretVisitsModal';

function App() {
  useEffect(() => {
    logVisit();
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-gray-800 text-white">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
      <BackToTopButton />
      <SecretVisitsModal />
    </div>
  );
}

export default App;
