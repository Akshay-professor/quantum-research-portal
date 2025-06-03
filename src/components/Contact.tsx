import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });
    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! Dr. Singh will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  const contactInfo = [{
    icon: Mail,
    label: 'Email',
    value: 'ssee@mmmut.ac.in',
    link: 'mailto:ssee@mmmut.ac.in'
  }, {
    icon: Phone,
    label: 'Phone',
    value: '+91 85746 80415',
    link: 'tel:+918574680415'
  }, {
    icon: MapPin,
    label: 'Institution',
    value: 'Madan Mohan Malaviya University of Technology, Gorakhpur',
    link: 'https://www.mmmut.ac.in/'
  }];
  const socialLinks = [{
    name: 'Google Scholar',
    url: 'https://scholar.google.co.in/citations?user=VEwmKAoAAAAJ&hl=en',
    icon: '🎓'
  }, {
    name: 'ResearchGate',
    url: '#',
    icon: '🔬'
  }, {
    name: 'LinkedIn',
    url: '#',
    icon: '💼'
  }];
  return <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Interested in collaboration, research opportunities, or have questions about my work? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <info.icon className="text-blue-600" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-500">{info.label}</div>
                      <a href={info.link} className="text-slate-700 hover:text-blue-600 transition-colors font-medium" target={info.label === 'Institution' ? '_blank' : undefined} rel={info.label === 'Institution' ? 'noopener noreferrer' : undefined}>
                        {info.value}
                      </a>
                    </div>
                  </div>)}
              </div>
            </div>

            {/* Social Links */}
            
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300" placeholder="Research collaboration, question, etc." />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none" placeholder="Tell me about your research interest, collaboration ideas, or questions..." />
                </div>
                <button type="submit" className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg">
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>;
};