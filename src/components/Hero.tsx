
import React, { useEffect, useState } from 'react';
import { ChevronDown, FileText, Mail } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const typewriterTexts = [
    'Associate Professor',
    'Power Electronics Expert',
    'Research Innovator',
    'SMPS Design Specialist'
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentText = typewriterTexts[currentTextIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setTypewriterText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentTextIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-indigo-200/40 rounded-full blur-lg animate-pulse delay-300"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-slate-800">Dr. </span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                  Shikha Singh
                </span>
              </h1>
              
              {/* Typewriter Effect */}
              <div className="text-xl lg:text-2xl text-slate-600 space-y-3">
                <div className="h-8 flex items-center">
                  <span className="font-medium text-blue-600">{typewriterText}</span>
                  <span className="animate-pulse text-blue-600 ml-1">|</span>
                </div>
                <p className="text-lg text-slate-500 animate-fade-in">
                  Power Electronics | SMPS Design | Electric Vehicles | Cold Atom Physics
                </p>
              </div>
            </div>

            <div className="relative">
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
                Leading research in power electronics and renewable energy systems at Madan Mohan Malaviya 
                University of Technology, with expertise in switched-mode power supplies, electric vehicles, 
                and quantum physics applications.
              </p>
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('publications')} 
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium transition-all duration-300 flex items-center gap-3 hover:scale-105 hover:shadow-2xl transform"
              >
                <FileText size={20} />
                View Publications
                <ChevronDown className="group-hover:translate-y-1 transition-transform" size={16} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white rounded-xl font-medium transition-all duration-300 flex items-center gap-3 hover:scale-105 hover:shadow-xl backdrop-blur-sm bg-white/30"
              >
                <Mail size={20} />
                Contact
              </button>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Reduced image container size */}
              <div className="w-full h-64 lg:h-80 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
                <img 
                  src="/lovable-uploads/992d0a87-b112-4e7d-98fd-fd20df940492.png" 
                  alt="Dr. Shikha Singh Profile" 
                  className="w-full h-full object-center transition-transform duration-700 hover:scale-110 object-scale-down relative z-10" 
                />
              </div>
              
              {/* Enhanced Floating Stats Cards */}
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">20+</div>
                  <div className="text-xs text-slate-600">Publications</div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">11+</div>
                  <div className="text-xs text-slate-600">Years Experience</div>
                </div>
              </div>

              {/* New floating card for specialization */}
              <div className="absolute top-1/2 -left-6 bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">SMPS</div>
                  <div className="text-xs text-slate-600">Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
          <ChevronDown className="text-blue-600" size={32} />
        </div>
      </div>
    </div>
  );
};
