
import React from 'react';

export const MMUTMap = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Find Us at MMMUT
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Madan Mohan Malaviya University of Technology, Gorakhpur
          </p>
        </div>
        
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.8264098896823!2d83.36168731504545!3d26.721436683180164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991c5c8c91ebe85%3A0x4b8f5c9d8a7c7b9a!2sMadan%20Mohan%20Malaviya%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1635950000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-96"
          />
        </div>
      </div>
    </div>
  );
};
