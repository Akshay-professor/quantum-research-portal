
import React, { useEffect, useState } from 'react';
import { Zap, Atom, Cpu, Lightbulb, Settings, Database, Car, Leaf } from 'lucide-react';

export const ResearchInterests = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('research');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const researchAreas = [
    {
      icon: Zap,
      title: 'Power Quality',
      description: 'Advanced power quality improvement techniques, harmonic mitigation, and power factor correction.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
    },
    {
      icon: Cpu,
      title: 'DC-DC Converters',
      description: 'High-efficiency DC-DC converter topologies including Zeta, Cuk, and bridgeless converters.',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
    },
    {
      icon: Settings,
      title: 'SMPS Design',
      description: 'Switched-mode power supply design optimization for various applications and power ranges.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
    },
    {
      icon: Car,
      title: 'Electric Vehicles',
      description: 'Electric vehicle charging systems, battery management, and power electronics for EVs.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
    },
    {
      icon: Leaf,
      title: 'Renewable Energy',
      description: 'Solar power systems, wind energy conversion, and renewable energy integration.',
      color: 'from-green-600 to-green-700',
      bgColor: 'from-green-50 to-green-100',
    },
    {
      icon: Atom,
      title: 'Cold Atom Physics',
      description: 'Laser cooling and trapping of fermionic and bosonic atoms for quantum sensing applications.',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'from-purple-50 to-purple-100',
    },
    {
      icon: Lightbulb,
      title: 'Laser Spectroscopy',
      description: 'Doppler-free spectroscopy and electromagnetically induced transparency in atomic systems.',
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100',
    },
    {
      icon: Database,
      title: 'Computational Physics',
      description: 'Molecular dynamics simulations and theoretical studies of complex physical systems.',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'from-teal-50 to-teal-100',
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Research Interests</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Exploring the intersection of power electronics, renewable energy, and quantum physics to develop 
            innovative solutions for modern technological challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveCard(index)}
            >
              <div className={`relative h-full bg-gradient-to-br ${area.bgColor} rounded-3xl p-6 border border-white/50 backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-transparent via-white to-transparent transform rotate-45 scale-150"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${area.color} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <area.icon className="text-white" size={20} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors text-sm">
                    {area.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Research Highlights */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Current Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">SMPS</div>
                <div className="text-slate-600">Design & Optimization</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">EV Technology</div>
                <div className="text-slate-600">Charging Systems</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">Power Quality</div>
                <div className="text-slate-600">Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
