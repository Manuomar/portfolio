import React, { useState, useEffect } from 'react';
import { Trophy, Award, Star, Target, Code, Users, Zap, Crown, Medal, ChevronLeft, ChevronRight,Book } from 'lucide-react';

const Achievements: React.FC = () => {
  const [counters, setCounters] = useState({
    problems: 0,
    certifications: 0,
    projects: 0,
    communities: 0,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const finalCounts = {
    problems: 400,
    certifications: 10,
    projects: 7,
    communities: 3,
  };

  // Testimonials carousel
  const testimonials = [
    {
      text: "Manu's problem-solving skills are exceptional. His approach to complex algorithms is both innovative and efficient.",
      author: "Dr. Sarah Johnson",
      role: "Computer Science Professor",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      text: "Outstanding leadership in organizing technical events. Manu brings teams together and delivers results.",
      author: "Alex Chen",
      role: "Tech Community Lead",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    },
    {
      text: "His dedication to continuous learning and helping others is truly inspiring. A natural mentor and leader.",
      author: "Priya Sharma",
      role: "Senior Developer",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    }
  ];

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const timers = Object.keys(finalCounts).map((key) => {
      const increment = finalCounts[key as keyof typeof finalCounts] / steps;
      let currentValue = 0;
      
      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalCounts[key as keyof typeof finalCounts]) {
          currentValue = finalCounts[key as keyof typeof finalCounts];
          clearInterval(timers[Object.keys(finalCounts).indexOf(key)]);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepTime);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  // Testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const achievements = [
      {
      icon: <Book className="w-10 h-10" />,
      title: 'GATE 2025',
      description: 'Qualified',
      gradient: 'gradient-3',
      delay: '0.2s',
      featured: true
    },{
      icon: <Trophy className="w-10 h-10" />,
      title: 'NEC\'23 Finalist',
      description: 'Secured 11th rank in National Entrepreneurship Challenge 2023',
      gradient: 'gradient-2',
      delay: '0s',
      featured: true
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'IIT Certifications',
      description: 'Multiple certifications from prestigious IIT institutions',
      gradient: 'gradient-1',
      delay: '0.1s',
      featured: true
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Coding Excellence',
      description: 'Active on LeetCode, GFG, and Coding NINJA',
      gradient: 'gradient-3',
      delay: '0.2s',
      featured: true
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Community Leadership',
      description: 'Led technical communities and organized successful events',
      gradient: 'gradient-1',
      delay: '0.3s',
      featured: false
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: 'Academic Excellence',
      description: 'Consistent academic performance and project recognition',
      gradient: 'gradient-2',
      delay: '0.4s',
      featured: false
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Problem Solving',
      description: 'Strong analytical skills with proven track record',
      gradient: 'gradient-3',
      delay: '0.5s',
      featured: false
    },
  ];

  const stats = [
    { 
      label: 'DSA Problems Solved', 
      value: counters.problems, 
      suffix: '+', 
      icon: <Code className="w-8 h-8" />,
      gradient: 'gradient-1'
    },
    { 
      label: 'Certifications Earned', 
      value: counters.certifications, 
      suffix: '+', 
      icon: <Award className="w-8 h-8" />,
      gradient: 'gradient-2'
    },
    { 
      label: 'Projects Completed', 
      value: counters.projects, 
      suffix: '+', 
      icon: <Target className="w-8 h-8" />,
      gradient: 'gradient-3'
    },
    { 
      label: 'Communities Led', 
      value: counters.communities, 
      suffix: '', 
      icon: <Users className="w-8 h-8" />,
      gradient: 'gradient-1'
    },
  ];

  const featuredAchievements = achievements.filter(a => a.featured);
  const otherAchievements = achievements.filter(a => !a.featured);

  return (
    <section id="achievements" className="py-20 bg-primary relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 dynamic-bg"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-simple px-6 py-3 rounded-full mb-6 shadow-lg animate-pulse-glow">
            <Crown className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-secondary">My Accomplishments</span>
          </div>
          <h2 className="text-5xl font-bold text-gradient mb-6 animate-fade-in-up">Achievements & Recognition</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Milestones and accomplishments that showcase my dedication to excellence and continuous growth
          </p>
        </div>

        {/* Enhanced Stats Counter Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`perspective-card animate-scale-in stagger-${index + 1}`}
            >
              <div className="card-3d simple-card text-center group relative overflow-hidden">
                {/* Icon */}
                <div className={`${stat.gradient} text-white p-4 rounded-2xl mb-6 inline-block group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {stat.icon}
                </div>
                
                {/* Counter */}
                <div className="text-4xl font-bold text-primary mb-2 animate-pulse-glow">
                  {stat.value}{stat.suffix}
                </div>
                
                {/* Label */}
                <div className="text-secondary font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Achievements Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-primary mb-12 flex items-center justify-center animate-fade-in-up">
            <Medal className="w-8 h-8 text-yellow-400 mr-3 animate-float" />
            Major Achievements
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredAchievements.map((achievement, index) => (
              <div
                key={index}
                className={`perspective-card animate-scale-in stagger-${index + 1}`}
              >
                <div className="card-3d simple-card group relative overflow-hidden">
                  {/* Icon */}
                  <div className={`${achievement.gradient} text-white p-4 rounded-2xl mb-6 inline-block group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {achievement.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-secondary leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
       

        {/* Other Achievements Masonry Grid */}
        {/* <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-primary mb-12 flex items-center justify-center animate-fade-in-up">
            <Zap className="w-8 h-8 text-blue-400 mr-3 animate-float" />
            Additional Recognition
          </h3>
          <div className="masonry-grid">
            {otherAchievements.map((achievement, index) => (
              <div
                key={index}
                className={`masonry-item animate-scale-in stagger-${index + 1}`}
              >
                <div className="grid-card group">
                  <div className={`${achievement.gradient} text-white p-3 rounded-xl mb-4 inline-block group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-blue-400 transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-secondary text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Special Highlight with Enhanced Design */}
        <div className="simple-card text-center relative overflow-hidden animate-fade-in-up">
          <div className="absolute inset-0 gradient-2 opacity-10"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="gradient-2 text-white p-6 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center shadow-2xl animate-float">
              <Trophy className="w-12 h-12" />
            </div>
            <h3 className="text-4xl font-bold text-primary mb-6">National Recognition</h3>
            <p className="text-xl text-secondary leading-relaxed mb-8">
              Achieved <span className="font-bold text-blue-400">11th rank</span> in the National Entrepreneurship Challenge 2023, 
              competing against thousands of participants nationwide. This achievement reflects my ability to think 
              innovatively and execute ideas effectively under pressure.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 animate-pulse-glow">1000+</div>
                <div className="text-secondary">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 animate-pulse-glow">11th</div>
                <div className="text-secondary">Final Rank</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 animate-pulse-glow">2023</div>
                <div className="text-secondary">Achievement Year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;