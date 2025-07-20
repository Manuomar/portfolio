import React from "react";
import {
  Award,
  ExternalLink,
  Calendar,
  Building,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { BackgroundLines } from "../components/ui/background-lines";

const Certifications: React.FC = () => {
   const certifications = [
    // your certifications array 
    {
      title: ". NET Certification",
      issuer: "IIT Kanpur",
      date: "2024",
      credentialId: "NA",
       description: "Completed a comprehensive course on .NET framework covering C#, web development, and application deployment.",
   skills: [".net", "C#", "Web development"],
      verifyUrl: "https://media.licdn.com/dms/image/v2/D562DAQG5DeheLLRguA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720964378691?e=1751922000&v=beta&t=fovDaUaEXDApEXbnklCGGzI5Y1j0FT12Unf7h9YDfzE",
      featured: true,
    },
    {
      title: "NEC '24 Advanced Track - Top 50",
      issuer: "IIT Bombay",
      date: "2025",
      credentialId: "ecell2021",
     description: "Ranked in the Top 50 of IIT Bombay's National Entrepreneurship Challenge 2024 Advanced Track, demonstrating strong leadership, innovation, and team collaboration.",
  skills: ['Entrepreneurship',"Team work",'Communication','Connection Building'],
      verifyUrl: "https://media.licdn.com/dms/image/v2/D562DAQGRgQoTxVf_Tw/profile-treasury-image-shrink_800_800/B56ZXmfBYuGUAY-/0/1743328649019?e=1751922000&v=beta&t=H8lGLtwsUdQhvEQGjRtQ7MsyEXBn0SDfH4M_afmVOz4",
      featured: true,
    }, {
      title: "NEC '23 Advanced Track - Top 50",
      issuer: "IIT Bombay",
      date: "2025",
      credentialId: "ecell2021",
    description: "Secured Top 50 rank in IIT Bombay's National Entrepreneurship Challenge, showcasing startup strategy, leadership, and team collaboration.",
   skills: ['Entrepreneurship',"Team work",'Communication','Connection Building'],
      verifyUrl: "https://media.licdn.com/dms/image/v2/D562DAQEQMkQ3AXXx8g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720823384948?e=1751922000&v=beta&t=GWGPGr4lb5Gyy0wvM1wSzIponEnpIKbXGWbliPW1raw",
      featured: true,
    },
    {
      title: "National entrepreneurship drive",
      issuer: "IIT Guwahati",
      date: "2024",
      credentialId: "4ce14e35-007b-4cd1-ae06-bb27e633e3f1",
       description: "Participated in a national initiative focused on entrepreneurship, startup mindset, teamwork, and networking.",
       skills: ['Entrepreneurship',"Team work",'Communication','Connection Building'],
      verifyUrl: "https://certificate.givemycertificate.com/c/4ce14e35-007b-4cd1-ae06-bb27e633e3f1",
      featured: false,
    },
    {
      title: "Deloitte Australia - Data Analytics Job Simulation",
      issuer: "Forage",
      date: "2025",
      credentialId: "CnvhE4QXxGmQ2vyYK",
      description:
        "Completed a virtual job simulation focused on data cleaning, visualization, and insights using Excel, Python, and Tableau.",
      skills: ['Tableau' , 'Excel','python'],
      verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_WdevgiGF76qnyHks2_1744720219925_completion_certificate.pdf",
      featured: false,
    },
    {
      title: "AI for Beginners",
      issuer: "HP LIFE",
      date: "2025",
      credentialId: "1ec90734-33d9-40f1-8cd4-0acc804e773d",
      description: "Introduction to Artificial Intelligence concepts, applications, and its impact across industries.",
      skills: ["AI basics"],
      verifyUrl: "https://media.licdn.com/dms/image/v2/D562DAQFfkHWhG2RoQQ/profile-treasury-image-shrink_800_800/B56ZbLm7inGoAY-/0/1747172704545?e=1751922000&v=beta&t=rJihPt_eI90TktFwRHhXHuFAybimVm7TALbjBvQ-a_k",
      featured: false,
    },
    {
      title: " C++",
      issuer: "Coding Ninjas",
      date: "2024",
      credentialId: "NA",
      description: "Completed foundational C++ course covering basics, object-oriented programming, and data structures & algorithms.",
      skills: ['C++ basics' , 'DSA'],
      verifyUrl: "https://media.licdn.com/dms/image/v2/D562DAQEI5Ix_JZMLFw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720823729281?e=1751922000&v=beta&t=neSvuV8OkdfwMDnXWxvGbFE2GqlHZDMPDESI9zJwqrw",
      featured: false,
    },
    {
      title: "Python Basics ",
      issuer: "HackerRank",
      date: "2024",
      credentialId: "2A11648A99FA",
     description: "Certified by HackerRank for foundational knowledge of Python, including data types,operations, conditionals, loops, and functions.",
  skills: ['python'],
      verifyUrl: "https://www.hackerrank.com/certificates/2a11648a99fa",
      featured: false,
    },
    {
      title: "css basic",
      issuer: "HackerRank",
      date: "2024",
      credentialId: "F012139AA384",
      description: "Certified by HackerRank for foundational knowledge of CSS, including layout, selectors,styling the UI and responsive design.", skills: ["CSS5",'Responsive Design'],
      verifyUrl: "https://www.hackerrank.com/certificates/f012139aa384",
      featured: false,
    },{
      title: "SEBI-NISM",
      issuer: "SEBI",
      date: "2025",
      credentialId: "F012139AA384",
      description: "Certification in financial markets by SEBI-NISM, covering investment principles, market operations, and regulatory frameworks.",
      skills: ["financial awareness"],
      verifyUrl: "https://media.licdn.com/dms/image/v2/D5622AQFMgisv-hNc2A/feedshare-shrink_1280/B56ZeOU90JHQAk-/0/1750439551281?e=1753920000&v=beta&t=7fj0UloP-7JLAMaDL81oBvlCh5L44RTaSMPfDZwcN-I",
      featured: false,
    },{
      title: "Code Clash 2.0 Hackathon",
      issuer: "SEBI",
      date: "2025",
      credentialId: "N/A",
      description:
        "Developed Tarang, a disaster-resilient PWA for offline emergency communication, built during Code of Clash Hackathon.",
      skills: ["Web development,PWA"],
      verifyUrl: "https://drive.google.com/file/d/1bWKm77BrCll-SBiTce1ZyHRQotPT2VyJ/view?usp=sharingI",
      featured: false,
    },
  ];

  const featuredCertifications = certifications.filter((cert) => cert.featured);
  const otherCertifications = certifications.filter((cert) => !cert.featured);

  return (
    <section id="certifications" className="relative py-20 bg-[#2a354f] text-white overflow-hidden">
      <BackgroundLines className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Certifications & Learning</h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Continuous learning through prestigious institutions and industry-recognized certifications
          </p>
        </div>

        {/* Featured Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-white">Featured Certifications</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredCertifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white text-black border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <a
                    href={cert.verifyUrl}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    title="Verify Certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h4>

                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Building className="w-4 h-4" />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{cert.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="text-xs text-gray-500 border-t pt-3">
                  Credential ID: {cert.credentialId}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Certifications Carousel */}
        <div className="relative">
          <h3 className="text-2xl font-semibold text-white mb-8">Additional Certifications</h3>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev absolute -left-6 top-1/2 -translate-y-1/2 z-10 
            w-10 h-10 rounded-full bg-white text-gray-900 hidden md:flex items-center justify-center 
            hover:bg-gray-200 transition shadow-lg">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg> */}
          </div>
          <div className="swiper-button-next absolute -right-6 top-1/2 -translate-y-1/2 z-10 
            w-10 h-10 rounded-full bg-white text-gray-900 hidden md:flex items-center justify-center 
            hover:bg-gray-200 transition shadow-lg">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg> */}
          </div>

          <Swiper
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {otherCertifications.map((cert, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-black rounded-lg p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{cert.title}</h4>
                      <div className="flex items-center space-x-3 text-sm text-gray-600 mb-2">
                        <span className="flex items-center space-x-1">
                          <Building className="w-3 h-3" />
                          <span>{cert.issuer}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{cert.date}</span>
                        </span>
                      </div>
                    </div>
                    <a
                      href={cert.verifyUrl}
                      className="text-gray-400 hover:text-blue-600 transition-colors ml-2"
                      title="Verify Certificate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-gray-600 text-sm mb-3">{cert.description}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {cert.skills.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white text-gray-600 text-xs rounded border"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="text-xs text-gray-500">ID: {cert.credentialId}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
