import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Code, } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const roles = ['MERN Stack Developer', 'Problem Solver', 'Tech Leader'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingElements = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className={`absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
      }}
    />
  ));

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      <div className="absolute inset-0 dynamic-bg"></div>
      {floatingElements}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-green-500/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-responsive-3xl font-bold mb-6 leading-tight mt-[80px]">
            <span className="block mb-2 text-primary">Hi, I'm</span>
            <span className='text-yellow-600'>Manu Omar</span>
          </h1>

          {/* FIXED TEXT BLOCK FOR "I'm a ..." */}
          <div className="text-responsive-xl mb-8 h-auto flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
            <span className="text-secondary mb-1 sm:mb-0 sm:mr-3">I'm a</span>
            <div className="relative">
              <span className="text-blue-400 font-semibold">
                {displayText}
                <span className={`inline-block w-0.5 h-8 bg-blue-600 ml-1 ${isTyping ? 'animate-pulse' : ''}`}></span>
              </span>
            </div>
          </div>

          <p className="text-xl text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            B.Tech CSE student passionate about building <span className="text-blue-400 font-semibold">innovative solutions</span> and solving complex problems. 
            With <span className="text-blue-400 font-bold">400+ DSA problems</span> solved and experience leading technical communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="simple-button group"
            >
              <span className="flex items-center space-x-2">
                <span>Get In Touch</span>
                <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
            </a>

            <a
              href="#Projects"
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById('Projects');
                projectsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="simple-button-outline group"
            >
              <span className="flex items-center space-x-2">
                <Code className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>View My Work</span>
              </span>
            </a>

            <a
              href="public\resume.pdf"
              download="resume.pdf"
              className="simple-button-outline group"
            >
              <span className="flex items-center space-x-2">
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                <span>Resume</span>
              </span>
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            {[
              { icon: Github, href: 'https://github.com/manuomar', label: 'GitHub', color: 'hover:text-gray-300' },
              { icon: Linkedin, href: 'https://linkedin.com/in/manuomar', label: 'LinkedIn', color: 'hover:text-blue-300' },
              { icon: Mail, href: 'mailto:manuomar0126@gmail.com', label: 'Email', color: 'hover:text-red-300' },
              { icon: Code, href: 'https://leetcode.com/manuomar', label: 'LeetCode', color: 'hover:text-orange-300' },
            ].map((social, index) => (
              <div key={index} className={`perspective-card animate-scale-in stagger-${index + 1}`}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                >
                  <social.icon size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce glass-simple p-3 rounded-full hover-lift group"
      >
        <ChevronDown size={24} className="text-secondary group-hover:text-primary transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
