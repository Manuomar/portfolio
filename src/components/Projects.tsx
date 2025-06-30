
import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Star, Zap, Code, Eye, X } from 'lucide-react';

const Projects = () => {
  const [currentFeaturedSlide, setCurrentFeaturedSlide] = useState(0);
  const [currentOtherSlide, setCurrentOtherSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'BookShop',
      description: 'Full-stack MERN application with user authentication, product management',
      longDescription: 'A BookShop e-commerce platform built with the MERN stack featuring user authentication, product management, and responsive design.',
      image: 'https://media.karanbajaj.com/karan-live/wp-content/uploads/2015/08/18160701/book-stack.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Cors', 'bCrypt', 'axios'],
      githubUrl: 'https://github.com/Manuomar/BookShop.git',
      // liveUrl: '#',
      featured: true,
      category: 'Full Stack',
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'AITD-alumni-association',
      description: 'A platform to connect AITD alumni and students for events, mentorship, and job opportunities.',
      longDescription: 'A web-based platform built for AITD to facilitate seamless interaction between alumni and students. Features include event announcements, alumni directory, job postings, and mentorship opportunities.',
      image: 'https://file.aiquickdraw.com/imgcompressed/img/compressed_82c759b9de88814678c801359a2cce24.webp',
      technologies: ['React', 'TypeScript','Tailwind'],
      githubUrl: 'https://github.com/Manuomar/AITD-alumni-association-project.git',
      liveUrl: 'https://aitd-alumni-association-project.vercel.app/',
      featured: false,
      category: 'Web App',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Portfolio',
      description: 'Interactive web application for visualizing sorting algorithms and data structures.',
      longDescription: 'An educational tool that helps students and developers understand complex algorithms through interactive visualizations. Features include sorting algorithms, pathfinding algorithms, data structure operations, and customizable parameters for learning optimization.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      technologies: ['React','TypeScript','TailwindCSS','Formspree'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true,
      category: 'Web App',
      status: 'completed'
    },  
      {
      id: 4,
      title: 'Pw website ',
      description: 'A responsive clone of the PW Skills website built using HTML and Tailwind CSS, featuring a clean UI, hero section, course highlights, and responsive design.',
      longDescription: 'A responsive clone of the PW Skills website built using HTML and Tailwind CSS, featuring a clean UI, hero section, course highlights, and responsive design.',
      image: 'https://i.pinimg.com/736x/e2/d2/72/e2d272d31110692e952aaf1b4e753c4b.jpg',
      technologies: ['HTML','Tailwind CSS'],
      githubUrl: 'https://github.com/Manuomar/PW-website.git',
      liveUrl: 'https://manuomar.github.io/PW-website/',
      featured: false,
      category: 'Web App',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Tarang ',
      description: 'Tarang – Offline Emergency Communication App using PWA',
      longDescription: 'A disaster-resilient PWA enabling offline communication without internet or cellular networks, built for emergency response scenarios.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      technologies: ['React','Tailwind CSS','TypeScript' , 'PWA' , 'Leaflet.js','IndexedDB','Service Workers'],
      githubUrl: 'https://github.com/CodeBytes0101/Tarang.git',
      liveUrl: 'https://tarang-hgd9.vercel.app/',
      featured: true,
      category: 'PWA',
      status: 'completed'
    },
    {
      id: 6,
      title: 'LeetMetrics ',
      description: 'A simple, intuitive interface to track coding progress by difficulty level on platforms like LeetCode.',
      longDescription: 'This simple and intuitive interface provides users with an overview of their coding journey, helping track progress by difficulty level for LeetCode problems or similar coding platforms.',
      image: 'https://github.com/Manuomar/LeetMetrics/raw/main/Screenshot%202024-11-09%20020656.png',
      technologies: ['HTML','CSS','JavaScript' , 'Leetcode API' , 'Proxy'],
      githubUrl: 'https://github.com/CodeBytes0101/Tarang.git',
      liveUrl: 'https://tarang-hgd9.vercel.app/',
      featured: false,
      category: 'PWA',
      status: 'completed'
    },
 {
      id: 7,
      title: 'temperature_convertor',
      description: 'A simple tool to convert temperatures between Celsius, Fahrenheit, and Kelvin with real-time results and a user-friendly interface.',
      longDescription: 'This simple and intuitive interface provides users with an overview of their coding journey, helping track progress by difficulty level for LeetCode problems or similar coding platforms.',
      image: 'https://i.pinimg.com/736x/51/e3/e0/51e3e01e330985fdd9347486b3d9dee8.jpg',
      technologies: ['HTML','CSS','JavaScript' , 'Leetcode API' , 'Proxy'],
      githubUrl: 'https://github.com/Manuomar/temperature_convertor.git',
      liveUrl: 'https://manuomar.github.io/temperature_convertor/',
      featured: false,
      category: 'PWA',
      status: 'completed'
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in-progress': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'planned': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const nextFeatured = () => {
    setCurrentFeaturedSlide((prev) => (prev + 1) % featuredProjects.length);
  };
  const prevFeatured = () => {
    setCurrentFeaturedSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const itemsPerPage = 3;
  const totalSlides = Math.ceil(otherProjects.length / itemsPerPage);

  const prevSlide = () => {
    setCurrentOtherSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  const nextSlide = () => {
    setCurrentOtherSlide((prev) => (prev + 1) % totalSlides);
  };

  const visibleOtherProjects = otherProjects.slice(
    currentOtherSlide * itemsPerPage,
    currentOtherSlide * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-24">
          <div className="carousel-track" style={{ transform: `translateX(-${currentFeaturedSlide * 100}%)`, transition: 'transform 0.5s ease' }}>
            {featuredProjects.map((project) => (
              <div key={project.id} className="carousel-slide">
                <div className="grid lg:grid-cols-2 gap-8 items-center p-8 bg-white/5 rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-xl"
                  />
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={project.githubUrl} className="text-blue-400 flex items-center space-x-2">
                        <Github size={16} /> <span>Code</span>
                      </a>
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="text-green-400 flex items-center space-x-2">
                          <ExternalLink size={16} /> <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={prevFeatured} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full">
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button onClick={nextFeatured} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full">
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        <h2 className="text-4xl font-bold text-white text-center mb-12">More Projects</h2>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleOtherProjects.map((project) => (
              <div key={project.id} className="bg-white/5 p-4 rounded-xl shadow-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-blue-500/10 text-blue-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={project.githubUrl} className="text-blue-400 flex items-center space-x-1">
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Eye size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 p-2 rounded-full"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white/10 p-6 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-t-xl" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/10 rounded-full"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>
              <h3 className="text-2xl font-bold text-white mt-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mt-2">{selectedProject.description}</p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a href={selectedProject.githubUrl} className="text-blue-400 flex items-center space-x-2">
                  <Github size={20} /> <span>Code</span>
                </a>
                {selectedProject.liveUrl && (
                  <a href={selectedProject.liveUrl} className="text-green-400 flex items-center space-x-2">
                    <ExternalLink size={20} /> <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

