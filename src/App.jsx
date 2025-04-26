import { useState, useEffect } from 'react';
import './App.css';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Services";
import FAQ from "./components/FAQ";
import Bio from "./components/Bio";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import MetaTags from "./components/MetaTags";

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'bio', 'services', 'contact', 'FAQ'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-amber-50 font-sans">
      {/* Add default meta tags in your index.html or root layout */}
      <MetaTags section={activeSection} />
      
      <NavBar activeSection={activeSection} />
      <section id="hero" className="scroll-mt-16"><Hero /></section>
      <section id="bio" className="scroll-mt-16"><Bio /></section>
      <section id="services" className="scroll-mt-16"><Services /></section>
      <section id="contact" className="scroll-mt-16"><Contact /></section>
      <section id="FAQ" className="scroll-mt-16"><FAQ /></section>
      <Footer />
    </div>
  );
}

export default App;