
import React, { useEffect, useState } from 'react';
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      year: '2013-Present',
      title: 'Associate Professor',
      institution: 'Madan Mohan Malaviya University of Technology',
      description: 'Department of Electrical Engineering - Leading research in power electronics and renewable energy',
      icon: Award,
    },
    {
      year: '2008-2013',
      title: 'Assistant Professor',
      institution: 'Department of Electrical Engineering',
      description: 'Teaching and research in power systems, SMPS design, and electric vehicles',
      icon: GraduationCap,
    },
    {
      year: '2005-2008',
      title: 'Ph.D. in Electrical Engineering',
      institution: 'Power Electronics and Power Quality',
      description: 'Research focus on switched-mode power supplies and harmonic mitigation',
      icon: BookOpen,
    },
    {
      year: '2003-2005',
      title: 'M.Tech in Power Electronics',
      institution: 'Specialization in Power Systems',
      description: 'Advanced studies in power conversion and renewable energy integration',
      icon: Users,
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">About Dr. Shikha Singh</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Associate Professor at Madan Mohan Malaviya University of Technology, dedicated to advancing 
            power electronics, renewable energy systems, and electric vehicle technologies through innovative research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Research Focus</h3>
              <div className="space-y-4 text-slate-600">
                <p>
                  Specializing in power quality improvement through advanced switched-mode power supply designs, 
                  DC-DC converters, and renewable energy integration. Leading research in electric vehicle 
                  charging systems and energy storage solutions.
                </p>
                <p>
                  Active in interdisciplinary research including cold atom physics, laser cooling techniques, 
                  and quantum sensing applications. Published extensively in power electronics, 
                  electromagnetically induced transparency, and computational physics.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-slate-600">Publications</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">11+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-semibold text-slate-800 mb-8">Career Timeline</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <item.icon className="text-blue-600" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-blue-600 font-medium">{item.year}</div>
                    <div className="text-lg font-semibold text-slate-800">{item.title}</div>
                    <div className="text-slate-600 font-medium">{item.institution}</div>
                    <div className="text-slate-500 text-sm mt-1">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
