import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Eye,
  X
} from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  category: string;
  status: string;
};

const Projects: React.FC = () => {
  const [currentFeatured, setCurrentFeatured] = useState(0);
  const [currentOther, setCurrentOther] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Skill swap',
      description: 'Built a Skill Swap app with user profiles, skill-based matching, swap requests, feedback, and admin controls.',
      longDescription: 'Developed a Skill Swap Platform enabling users to exchange skills via public profiles, search filters, and swap requests. Included features like user availability, feedback, admin moderation, and real-time swap tracking.',
      image: 'https://i.pinimg.com/736x/75/f7/8b/75f78b7bf6905a6fd5c16988c2e295f5.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Cors', 'bCrypt', 'JWT', 'axios'],
      githubUrl: 'https://github.com/Manuomar/Odoo-project.git',
      // liveUrl: '#',
      featured: true,
      category: 'Full Stack',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'BookShop',
      description: 'Full-stack MERN application with user authentication, product management',
      longDescription: 'A BookShop e-commerce platform built with the MERN stack featuring user authentication, product management, and responsive design.',
      image: 'https://media.karanbajaj.com/karan-live/wp-content/uploads/2015/08/18160701/book-stack.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Cors', 'bCrypt', 'axios'],
      githubUrl: 'https://github.com/Manuomar/BookShop.git',
      // liveUrl: '#',
      featured: false,
      category: 'Full Stack',
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'AITD-alumni-association',
      description: 'A platform to connect AITD alumni and students for events, mentorship, and job opportunities.',
      longDescription: 'A web-based platform built for AITD to facilitate seamless interaction between alumni and students. Features include event announcements, alumni directory, job postings, and mentorship opportunities.',
      image: 'https://file.aiquickdraw.com/imgcompressed/img/compressed_82c759b9de88814678c801359a2cce24.webp',
      technologies: ['React', 'TypeScript', 'Tailwind'],
      githubUrl: 'https://github.com/Manuomar/AITD-alumni-association-project.git',
      liveUrl: 'https://aitd-alumni-association-project.vercel.app/',
      featured: false,
      category: 'Web App',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Portfolio',
      description: 'Interactive web application for visualizing sorting algorithms and data structures.',
      longDescription: 'An educational tool that helps students and developers understand complex algorithms through interactive visualizations. Features include sorting algorithms, pathfinding algorithms, data structure operations, and customizable parameters for learning optimization.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Formspree'],
      githubUrl: 'https://github.com/Manuomar/portfolio.git',
      liveUrl: 'https://portfolio-theta-pied-77.vercel.app/',
      featured: true,
      category: 'Web App',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Pw website ',
      description: 'A responsive clone of the PW Skills website built using HTML and Tailwind CSS, featuring a clean UI, hero section, course highlights, and responsive design.',
      longDescription: 'A responsive clone of the PW Skills website built using HTML and Tailwind CSS, featuring a clean UI, hero section, course highlights, and responsive design.',
      image: 'https://i.pinimg.com/736x/e2/d2/72/e2d272d31110692e952aaf1b4e753c4b.jpg',
      technologies: ['HTML', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Manuomar/PW-website.git',
      liveUrl: 'https://manuomar.github.io/PW-website/',
      featured: false,
      category: 'Web App',
      status: 'completed'
    },
    {
      id: 6,
      title: 'Tarang ',
      description: 'Tarang – Offline Emergency Communication App using PWA',
      longDescription: 'A disaster-resilient PWA enabling offline communication without internet or cellular networks, built for emergency response scenarios.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      technologies: ['React', 'Tailwind CSS', 'TypeScript', 'PWA', 'Leaflet.js', 'IndexedDB', 'Service Workers'],
      githubUrl: 'https://github.com/CodeBytes0101/Tarang.git',
      liveUrl: 'https://tarang-hgd9.vercel.app/',
      featured: true,
      category: 'PWA',
      status: 'completed'
    },
    {
      id: 7,
      title: 'LeetMetrics ',
      description: 'A simple, intuitive interface to track coding progress by difficulty level on platforms like LeetCode.',
      longDescription: 'This simple and intuitive interface provides users with an overview of their coding journey, helping track progress by difficulty level for LeetCode problems or similar coding platforms.',
      image: 'https://github.com/Manuomar/LeetMetrics/raw/main/Screenshot%202024-11-09%20020656.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Leetcode API', 'Proxy'],
      githubUrl: 'https://github.com/CodeBytes0101/Tarang.git',
      liveUrl: 'https://tarang-hgd9.vercel.app/',
      featured: false,
      category: 'Web App',
      status: 'completed'
    },
    {
      id: 8,
      title: 'temperature_convertor',
      description: 'A simple tool to convert temperatures between Celsius, Fahrenheit, and Kelvin with real-time results and a user-friendly interface.',
      longDescription: 'This simple and intuitive interface provides users with an overview of their coding journey, helping track progress by difficulty level for LeetCode problems or similar coding platforms.',
      image: 'https://i.pinimg.com/736x/51/e3/e0/51e3e01e330985fdd9347486b3d9dee8.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Leetcode API', 'Proxy'],
      githubUrl: 'https://github.com/Manuomar/temperature_convertor.git',
      liveUrl: 'https://manuomar.github.io/temperature_convertor/',
      featured: false,
      category: 'Web App',
      status: 'completed'
    },
  ];

  const featured = projects.filter(
    (p) => p.featured && (filter === 'All' || p.category === filter)
  );
  const others = projects.filter(
    (p) => !p.featured && (filter === 'All' || p.category === filter)
  );

  const totalOther = Math.ceil(others.length / itemsPerPage);
  const visibleOthers = others.slice(
    currentOther * itemsPerPage,
    currentOther * itemsPerPage + itemsPerPage
  );

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setItemsPerPage(w < 640 ? 1 : w < 1024 ? 2 : 3);
      setCurrentOther(0);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section id="Projects" className="py-20 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* 🎯 Filter Buttons (Moved to Top) */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['All', 'Full Stack', 'Web App', 'PWA', 'Backend'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setCurrentOther(0);
              }}
              className={`px-4 py-1 rounded-full text-sm transition ${filter === cat
                ? 'bg-blue-500 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🔥 Featured Projects */}
        <h2 className="text-5xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="relative rounded-2xl overflow-hidden mb-24">
          <div
            className="carousel-track flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentFeatured * 100}%)` }}
          >
            {featured.map((p) => (
              <div key={p.id} className="carousel-slide min-w-full">
                <div className="grid lg:grid-cols-2 gap-8 items-center p-8 bg-white/5 rounded-xl">
                  <img src={p.image} alt={p.title} className="w-full h-64 lg:h-80 object-cover rounded-xl" />
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-2xl font-bold text-white">{p.title}</h4>
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${p.category === 'Full Stack'
                          ? 'bg-blue-600/20 text-blue-300'
                          : p.category === 'Web App'
                            ? 'bg-purple-600/20 text-purple-300'
                            : p.category === 'PWA'
                              ? 'bg-yellow-600/20 text-yellow-300'
                              : p.category === 'Backend'
                                ? 'bg-red-600/20 text-red-300'
                                : 'bg-gray-600/20 text-gray-300'
                          }`}
                      >
                        {p.category}
                      </span>

                    </div>
                    <p className="text-gray-300">{p.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {p.technologies.map((tech, i) => (
                        <span key={i} className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={p.githubUrl} className="text-blue-400 flex items-center space-x-2">
                        <Github size={16} /> <span>Code</span>
                      </a>
                      {p.liveUrl && (
                        <a href={p.liveUrl} className="text-green-400 flex items-center space-x-2">
                          <ExternalLink size={16} /> <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {featured.length > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentFeatured((prev) =>
                    prev === 0 ? featured.length - 1 : prev - 1
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() =>
                  setCurrentFeatured((prev) => (prev + 1) % featured.length)
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* 👍 More Projects */}
        <h2 className="text-4xl font-bold text-center mb-8">More Projects</h2>
        <div className="relative mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
            {visibleOthers.map((p) => (
              <div key={p.id} className="bg-white/10 p-4 rounded-xl shadow-md">
                <img src={p.image} alt={p.title} className="w-full h-40 object-cover rounded-md mb-4" />
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <span
                    className={`text-sm px-3 py-1 rounded-full ${p.category === 'Full Stack'
                        ? 'bg-blue-600/20 text-blue-300'
                        : p.category === 'Web App'
                          ? 'bg-purple-600/20 text-purple-300'
                          : p.category === 'PWA'
                            ? 'bg-yellow-600/20 text-yellow-300'
                            : p.category === 'Backend'
                              ? 'bg-red-600/20 text-red-300'
                              : 'bg-gray-600/20 text-gray-300'
                      }`}
                  >
                    {p.category}
                  </span>

                </div>
                <p className="text-gray-400 text-sm mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a href={p.githubUrl} className="text-blue-400 flex items-center space-x-1">
                    <Github size={16} /> <span>Code</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(p)}
                    className="text-purple-400 hover:text-purple-300 transition"
                  >
                    <Eye size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {totalOther > 1 && (
            <>
              <button
                onClick={() => setCurrentOther((prev) => (prev - 1 + totalOther) % totalOther)}
                className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/10 p-2 rounded-full"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setCurrentOther((prev) => (prev + 1) % totalOther)}
                className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/10 p-2 rounded-full"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* 🔍 Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="relative bg-white/10 p-6 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-t-xl" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full"
              >
                <X size={20} />
              </button>
              <h3 className="text-2xl font-bold mt-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mt-2">{selectedProject.longDescription}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="text-sm bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full">
                    {tech}
                  </span>
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
