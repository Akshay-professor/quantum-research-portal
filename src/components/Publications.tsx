
import React, { useEffect, useState } from 'react';
import { ExternalLink, Filter, Search } from 'lucide-react';

export const Publications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('publications');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const publications = [
    {
      title: "Power factor corrected zeta converter based improved power quality switched mode power supply",
      category: "Power Electronics",
      year: "2023",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:O3NaXMp0MMsC",
      abstract: "This paper presents an innovative approach to power factor correction using zeta converter topology for enhanced power quality in SMPS applications.",
    },
    {
      title: "Trapping Fermionic 40K and Bosonic 87Rb on a Chip",
      category: "Cold Atom Physics",
      year: "2022",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:J6qkoyn5ZssC",
      abstract: "Experimental demonstration of simultaneous trapping of fermionic and bosonic atoms on a microchip for quantum sensing applications.",
    },
    {
      title: "Red blood cells from patients with sickle cell disease adhere more readily to endothelium pretreated with tumour necrosis factor (TNF)",
      category: "Biomedical Research",
      year: "2022",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:l_4PpDxvVJAC",
      abstract: "Investigation of cellular adhesion mechanisms in sickle cell disease with implications for treatment strategies.",
    },
    {
      title: "Autoconnected-transformer-based 20-pulse AC–DC converter for telecommunication power supply",
      category: "Power Electronics",
      year: "2023",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:eQOLeE2rZwMC",
      abstract: "Novel design of 20-pulse AC-DC converter using autoconnected transformer for reduced harmonic distortion in telecom applications.",
    },
    {
      title: "Laser frequency stabilization using Doppler-free bi-polarization spectroscopy",
      category: "Laser Spectroscopy",
      year: "2022",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:AdUz3-SiDfgC",
      abstract: "Advanced laser stabilization technique using bi-polarization spectroscopy for high-precision atomic spectroscopy applications.",
    },
    {
      title: "A power quality improved bridgeless converter-based computer power supply",
      category: "Power Electronics",
      year: "2021",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:J_g5lzvAfSwC",
      abstract: "Bridgeless converter design for computer applications with enhanced power quality and improved efficiency.",
    },
    {
      title: "Cooling and trapping of atoms in the ground hyperfine state",
      category: "Cold Atom Physics",
      year: "2021",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:aXQ7jtEqGowC",
      abstract: "Experimental techniques for cooling and trapping atoms in specific hyperfine states for quantum applications.",
    },
    {
      title: "Three-phase single stage medium power supply using Cuk converter",
      category: "Power Electronics",
      year: "2021",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:Se3iqnhoufwC",
      abstract: "Three-phase medium power supply design using Cuk converter topology for improved performance and efficiency.",
    },
    {
      title: "Far-infrared absorption in gaseous CH4 and CF4: A theoretical study",
      category: "Computational Physics",
      year: "2020",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:jq7mLYt49woC",
      abstract: "Theoretical investigation of far-infrared absorption properties in methane and carbon tetrafluoride gases.",
    },
    {
      title: "Improved power quality switched-mode power supply using buck–boost converter",
      category: "Power Electronics",
      year: "2020",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:2PyGcyYA7d0C",
      abstract: "Buck-boost converter implementation for SMPS applications with enhanced power quality characteristics.",
    },
    {
      title: "Effect of N and FYM application on floral characters and yield of African marigold (Tagetes erecta L.)",
      category: "Agricultural Research",
      year: "2020",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:GZelqfngyKEC",
      abstract: "Study on the effect of nitrogen and farm yard manure on growth and yield characteristics of African marigold.",
    },
    {
      title: "Improved power quality bridgeless converter based multiple output SMPS",
      category: "Power Electronics",
      year: "2020",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:Wp0gIr-vW9MC",
      abstract: "Multiple output SMPS design using bridgeless converter topology for improved power quality and efficiency.",
    },
    {
      title: "Harmonic mitigator based on 12-pulse ac–dc converter for switched mode power supply",
      category: "Power Electronics",
      year: "2019",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:d1gkVwhDpl0C",
      abstract: "12-pulse AC-DC converter design for harmonic mitigation in switched mode power supply applications.",
    },
    {
      title: "Electromagnetically induced transparency in cold 87Rb atoms trapped in the ground hyperfine F= 2 state",
      category: "Cold Atom Physics",
      year: "2019",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:8VbLR7ExW8oC",
      abstract: "Investigation of electromagnetically induced transparency phenomena in magnetically trapped cold rubidium atoms.",
    },
    {
      title: "Power factor correction in switched mode power supply for computers using canonical switching cell converter",
      category: "Power Electronics",
      year: "2019",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:RGFaLdJalmkC",
      abstract: "Canonical switching cell based approach for power factor correction in computer power supply applications.",
    },
    {
      title: "Multiple output SMPS with improved input power quality",
      category: "Power Electronics",
      year: "2018",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:u-x6o8ySG0sC",
      abstract: "Design and implementation of multiple output SMPS with enhanced input power quality characteristics.",
    },
    {
      title: "Equilibrium properties of simple molecular fluids",
      category: "Computational Physics",
      year: "2018",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:xoH8P16vUNYC",
      abstract: "Computational study of equilibrium properties and phase behavior of simple molecular fluid systems.",
    },
    {
      title: "Line shape in collision-induced absorption spectra: simulation for atomic and simple molecular species",
      category: "Computational Physics",
      year: "2017",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:jevOW3VBe2YC",
      abstract: "Simulation studies of line shapes in collision-induced absorption spectra for atomic and molecular systems.",
    },
    {
      title: "Laser frequency stabilization using a balanced bi-polarimeter",
      category: "Laser Spectroscopy",
      year: "2017",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:uCYQzKCmtZwC",
      abstract: "Implementation of balanced bi-polarimeter technique for precise laser frequency stabilization applications.",
    },
    {
      title: "Effect of pinching and nitrogen on growth, flowering and yield of African marigold cv. Pusa Narangi Gainda",
      category: "Agricultural Research",
      year: "2016",
      url: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=VEwmKAoAAAAJ&citation_for_view=VEwmKAoAAAAJ:CYCz2uKfkRAC",
      abstract: "Research on the impact of pinching and nitrogen application on growth and yield parameters of African marigold.",
    },
  ];

  const categories = ['All', 'Power Electronics', 'Cold Atom Physics', 'Laser Spectroscopy', 'Computational Physics', 'Biomedical Research', 'Agricultural Research'];

  const filteredPublications = publications.filter(pub => {
    const matchesFilter = selectedFilter === 'All' || pub.category === selectedFilter;
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Publications</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive collection of research contributions spanning power electronics, 
            cold atom physics, computational physics, and interdisciplinary fields.
          </p>
        </div>

        {/* Filters and Search */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filters */}
            <div className="flex items-center gap-2">
              <Filter className="text-slate-500" size={20} />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedFilter === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPublications.map((pub, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index % 4) * 100 + 400}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                  pub.category === 'Power Electronics' ? 'bg-blue-100 text-blue-600' :
                  pub.category === 'Cold Atom Physics' ? 'bg-purple-100 text-purple-600' :
                  pub.category === 'Laser Spectroscopy' ? 'bg-orange-100 text-orange-600' :
                  pub.category === 'Computational Physics' ? 'bg-teal-100 text-teal-600' :
                  pub.category === 'Biomedical Research' ? 'bg-red-100 text-red-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  {pub.category}
                </span>
                <span className="text-sm text-slate-500">{pub.year}</span>
              </div>

              <h3 className="text-lg font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                {pub.title}
              </h3>

              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {pub.abstract}
              </p>

              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:gap-3 transition-all duration-300"
              >
                View on Google Scholar
                <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No publications found matching your criteria.</p>
          </div>
        )}

        {/* Stats Section */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-slate-600">Total Publications</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">11+</div>
                <div className="text-slate-600">Years Research</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">6</div>
                <div className="text-slate-600">Research Areas</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-600">5+</div>
                <div className="text-slate-600">Journals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
