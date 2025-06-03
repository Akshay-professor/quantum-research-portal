
import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, ExternalLink, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Message sent successfully! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'researcher@university.edu',
      link: 'mailto:researcher@university.edu',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 XXXX XXXXXX',
      link: 'tel:+91XXXXXXXXXX',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Madan Mohan Malaviya University of Technology, Gorakhpur',
      link: '#',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://linkedin.com/in/researcher',
    },
  ];

  const academicProfiles = [
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.co.in/citations?user=VEwmKAoAAAAJ&hl=en',
      color: 'bg-red-500',
    },
    {
      name: 'ResearchGate',
      url: '#',
      color: 'bg-teal-500',
    },
    {
      name: 'ORCID',
      url: '#',
      color: 'bg-green-500',
    },
    {
      name: 'Academia.edu',
      url: '#',
      color: 'bg-blue-600',
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Interested in collaboration, research opportunities, or have questions about my work? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                    className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={6}
                    required
                    className="w-full border-slate-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  <Send size={20} />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Contact Details */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-blue-50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <info.icon className="text-blue-600" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-slate-500">{info.label}</div>
                      <div className="text-slate-800 font-medium group-hover:text-blue-600 transition-colors">
                        {info.value}
                      </div>
                    </div>
                    <ExternalLink className="text-slate-400 group-hover:text-blue-600 transition-colors" size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Academic Profiles */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Academic Profiles</h3>
              <div className="grid grid-cols-2 gap-4">
                {academicProfiles.map((profile, index) => (
                  <a
                    key={index}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center p-4 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className={`w-3 h-3 ${profile.color} rounded-full mr-3`}></div>
                    <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">
                      {profile.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Research Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-blue-100 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-blue-100 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
