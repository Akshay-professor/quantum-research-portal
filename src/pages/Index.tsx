
import React, { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ResearchInterests } from '../components/ResearchInterests';
import { Publications } from '../components/Publications';
import { Contact } from '../components/Contact';
import { Navigation } from '../components/Navigation';
import { ParticleBackground } from '../components/ParticleBackground';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'research', 'publications', 'contact'];
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
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <ParticleBackground />
      <Navigation activeSection={activeSection} />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="research">
        <ResearchInterests />
      </section>
      
      <section id="publications">
        <Publications />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
