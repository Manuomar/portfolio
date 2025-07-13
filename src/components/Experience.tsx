import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
  Building,
  Calendar,
  MapPin,
  Users,
  Zap,
  Target,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const ExperienceCarousel: React.FC = () => {
  const experiences = [
    {
      title: 'Technical & operational Head',
      organization: 'E-Cell (Entrepreneurship Cell)',
      period: '2023 - Present',
      location: 'University Campus',
      type: 'Leadership Role',
      responsibilities: [
        'Led a team of 15+ members in organizing entrepreneurship events and workshops',
        'Coordinated with industry experts and startup founders for guest lectures',
        'Managed technical aspects of events including website development and registration systems',
        'Increased event participation by 40% through strategic marketing and outreach',
      ],
      skills: ['Team Leadership', 'Event Management', 'Strategic Planning', 'Public Speaking'],
      icon: <Building className="w-6 h-6" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Community Manager & Developer',
      organization: 'Google Developer Groups (GDG)',
      period: '2024 - Present',
      location: 'Local Chapter',
      type: 'Volunteer Leadership',
      responsibilities: [
        'Organized and facilitated technical workshops on Google technologies',
        'Coordinated event planning, logistics, and execution.',
        'Mentored junior developers in Google Cloud Platform',
        'Contributed to building an active developer ecosystem on campus.',
      ],
      skills: ['Community Building', 'Technical Mentoring', 'Web Development', 'Google Cloud'],
      icon: <Users className="w-6 h-6" />,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'President',
      organization: 'Code-D-Code Club',
      period: '2024 - 2025',
      location: 'University Campus',
      type: 'Leadership and manage tech events',
      responsibilities: [
        'Organized coding contests, hackathons, and workshops.',
        'Managed a core team and delegated responsibilities.',
        'Represented the club in fests and campus events.',
        'Promoted coding culture and student tech engagement.',
        'Collaborated with other tech clubs, communities and colleges.',
        'Introduced new learning-focused club activities.',
      ],
      skills: ['Organization Building', 'Curriculum Development', 'Partnership Management', 'DSA Teaching'],
      icon: <Zap className="w-6 h-6" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in leading technical communities and organizing impactful events
          </p>
        </div>

        {/* Custom Navigation Arrows (hidden on mobile) */}
        <div className="relative">
          <div className="swiper-button-prev absolute -left-6 top-1/2 -translate-y-1/2 z-10 
            w-10 h-10 rounded-full bg-gray-900 text-white items-center justify-center 
            hover:bg-gray-800 transition shadow-lg hidden md:flex">
            <ChevronLeft size={20} strokeWidth={2.5} />
          </div>
          <div className="swiper-button-next absolute -right-6 top-1/2 -translate-y-1/2 z-10 
            w-10 h-10 rounded-full bg-gray-900 text-white items-center justify-center 
            hover:bg-gray-800 transition shadow-lg hidden md:flex">
            <ChevronRight size={20} strokeWidth={2.5} />
          </div>

          <Swiper
            spaceBetween={30}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            className="w-full"
          >
            {experiences.map((exp, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 group h-full mx-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className={`${exp.bgColor} ${exp.color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                        <h4 className="text-lg text-blue-600 font-semibold mb-2">{exp.organization}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="mt-2 sm:mt-0 inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {exp.type}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-blue-600" />
                      Key Responsibilities
                    </h5>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Skills Developed</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Summary Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Leadership Impact</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-blue-100">Students Mentored</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">20+</div>
                <div className="text-blue-100">Events Organized</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-blue-100">Communities Led</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCarousel;
