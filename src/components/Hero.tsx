
import React, { useEffect, useState } from 'react';
import { ChevronDown, FileText, Mail } from 'lucide-react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 leading-tight">
                Dr. <span className="text-blue-600">Shikha Singh</span>
              </h1>
              <div className="text-xl lg:text-2xl text-slate-600 space-y-2">
                <p>Associate Professor • Researcher • Innovator</p>
                <p className="text-lg text-slate-500">Power Electronics | SMPS Design | Electric Vehicles | Cold Atom Physics</p>
              </div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Leading research in power electronics and renewable energy systems at Madan Mohan Malaviya 
              University of Technology, with expertise in switched-mode power supplies, electric vehicles, 
              and quantum physics applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('publications')}
                className="group px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg"
              >
                <FileText size={20} />
                View Publications
                <ChevronDown className="group-hover:translate-y-1 transition-transform" size={16} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Mail size={20} />
                Contact
              </button>
            </div>
          </div>

          {/* Right Content - Professional Image */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="w-full h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-blue-200">
                <img
                  src="/lovable-uploads/992d0a87-b112-4e7d-98fd-fd20df940492.png"
                  alt="Dr. Shikha Singh Profile"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                />
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">20+</div>
                  <div className="text-sm text-slate-600">Publications</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">11+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-blue-600" size={32} />
      </div>
    </div>
  );
};
