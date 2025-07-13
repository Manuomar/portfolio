import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="mb-8 p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 hover:scale-110 transform"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>

          {/* Logo/Name */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Manu Omar
          </div>

          {/* Tagline */}
          <p className="text-gray-400 text-center mb-8 max-w-2xl">
            MERN Stack Developer | Problem Solver | Leader
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#Projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#achievements" className="text-gray-400 hover:text-white transition-colors">Achievements</a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
            <a href="#certifications" className="text-gray-400 hover:text-white transition-colors">Certifications</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-700 mb-8"></div>

          {/* Copyright and Credits */}
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">
              © {currentYear} Manu Omar. All rights reserved.
            </p>
            <p className="flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of ☕</span>
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center text-xs text-gray-500">
            <p>This portfolio showcases my journey as a developer and leader.</p>
            <p>Always open to new opportunities and collaborations.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;