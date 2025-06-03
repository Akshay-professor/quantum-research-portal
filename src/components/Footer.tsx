
import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=YOUR_ID',
      icon: '🎓'
    },
    {
      name: 'ResearchGate',
      url: 'https://www.researchgate.net/profile/YOUR_PROFILE',
      icon: '📚'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/YOUR_PROFILE',
      icon: '💼'
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <span className="text-lg">{link.icon}</span>
                <span className="font-medium">{link.name}</span>
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-center text-gray-600 dark:text-gray-300">
            <p>© 2025 Dr. Shikha Singh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
