import React from 'react';
import { GraduationCap, Brain, Users, Code, Target, Lightbulb, Zap, Award } from 'lucide-react';
import { cn } from "../lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Code, Users, Brain, Target, Lightbulb, GraduationCap } from "lucide-react";
import { useRef } from 'react';
const About: React.FC = () => {
const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  const skills = [
    { icon: <Code className="w-8 h-8" />, title: 'Problem Solving', description: '400+ DSA problems solved across multiple platforms', delay: '0s' },
    { icon: <Users className="w-8 h-8" />, title: 'Leadership', description: 'Led multiple technical communities and organized events', delay: '0.1s' },
    { icon: <Brain className="w-8 h-8" />, title: 'Critical Thinking', description: 'Strong analytical and logical reasoning abilities', delay: '0.2s' },
    { icon: <Target className="w-8 h-8" />, title: 'Goal-Oriented', description: 'Focused on achieving measurable results and outcomes', delay: '0.3s' },
    { icon: <Lightbulb className="w-8 h-8" />, title: 'Innovation', description: 'Creative approach to solving technical challenges', delay: '0.4s' },
    { icon: <GraduationCap className="w-8 h-8" />, title: 'Continuous Learning', description: 'Always eager to learn new technologies and concepts', delay: '0.5s' },
  ];

  const techStack = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'Express.js',
    'Python', 'C++','C', 'Git', 'Docker','MySQL','HTML','CSS','DSA'
  ];

  return (
    <section id="about" className="relative py-20 bg-white overflow-hidden">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">About Me</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Passionate computer science student with a strong foundation in software development and problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="simple-card">
              <h3 className="text-3xl font-bold text-primary mb-6 flex items-center">
                <Zap className="w-8 h-8 text-blue-600 mr-3" />
                My Journey
              </h3>
              <div className="space-y-6">
                <p className="text-secondary leading-relaxed">
                  I'm currently pursuing my <span className="font-semibold text-blue-400">B.Tech in Computer Science and Engineering</span>, 
                  where I've developed a deep passion for creating innovative solutions and tackling complex challenges. 
                </p>
                <p className="text-secondary leading-relaxed">
                  With over <span className="font-bold text-blue-400">400 Data Structures and Algorithms</span> problems solved, 
                  I've honed my problem-solving skills and logical thinking abilities.
                </p>
                <p className="text-secondary leading-relaxed">
                  I believe in the power of technology to transform ideas into reality, and I'm committed to continuous learning and contributing to the tech community through meaningful projects.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-slide-in-right space-y-8">
            {/* Education Card */}
            <div className="simple-card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">Education</h3>
                  <p className="text-blue-400 font-medium">Academic Excellence</p>
                </div>
              </div>
              <div className="p-4 bg-card rounded-xl border border-custom">
                <h4 className="font-bold text-primary text-lg">B.Tech - Computer Science & Engineering</h4>
                <p className="text-secondary font-medium">2022 - Current</p>
                <p className="text-muted mt-2">Dr. Ambedkar Institute Of Technology For Divyangjan, Kanpur, UP</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="simple-card">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <Award className="w-6 h-6 text-blue-600 mr-3" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        {/* <div>
          <h3 className="text-3xl font-bold text-center text-black mb-12">Core Strengths & Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="simple-card group"
                style={{ animationDelay: skill.delay }}
              >
                <div className="text-blue-600 p-4 bg-blue-600/10 rounded-2xl mb-6 inline-block group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {skill.title}
                </h4>
                <p className="text-secondary leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div> */}
       <section className="py-10  text-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Core Strengths & Skills
        </h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-[-4%] top-1/2 -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full shadow hidden sm:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-[-4%] top-1/2 -translate-y-1/2 z-10 text-white bg-black p-2 rounded-full shadow hidden sm:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar scroll-smooth gap-6"
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="min-w-[90%] sm:min-w-[48%] lg:min-w-[30%] bg-[#1c2333] rounded-2xl p-6 shadow-md hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="text-blue-500 p-4 bg-blue-600/10 rounded-2xl mb-4 inline-block">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


        {/* Call to Action */}
        <div className="mt-10 text-center">
          <div className="simple-card inline-block">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to collaborate?</h3>
            <p className="text-secondary mb-6">Let's build something amazing together!</p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="simple-button inline-flex items-center space-x-2"
            >
              <span>Let's Connect</span>
              <Zap className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
