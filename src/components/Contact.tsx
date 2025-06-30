// // isme mera form submit hone ke baad dusre page me redirect kr deta hai

// // import React from 'react';
// // import { Mail, Phone, Github, Linkedin, Send, Code } from 'lucide-react';

// // const Contact: React.FC = () => {
// //   const contactInfo = [
// //     {
// //       icon: <Mail className="w-6 h-6" />,
// //       label: 'Email',
// //       value: 'manuomar0126@gmail.com',
// //       href: 'mailto:manuomar0126@gmail.com',
// //       color: 'text-red-600',
// //       bgColor: 'bg-red-100',
// //     },
// //     {
// //       icon: <Phone className="w-6 h-6" />,
// //       label: 'Phone',
// //       value: '+91 8303935766',
// //       href: 'tel:+918303935766',
// //       color: 'text-green-600',
// //       bgColor: 'bg-green-100',
// //     },
// //   ];

// //   const socialLinks = [
// //     {
// //       icon: <Github className="w-6 h-6" />,
// //       label: 'GitHub',
// //       username: '@manuomar',
// //       href: 'https://github.com/manuomar',
// //       color: 'text-gray-900',
// //       bgColor: 'bg-gray-100',
// //     },
// //     {
// //       icon: <Linkedin className="w-6 h-6" />,
// //       label: 'LinkedIn',
// //       username: 'manuomar',
// //       href: 'https://linkedin.com/in/manuomar',
// //       color: 'text-blue-600',
// //       bgColor: 'bg-blue-100',
// //     },
// //     {
// //       icon: <Code className="w-6 h-6" />,
// //       label: 'LeetCode',
// //       username: 'manuomar',
// //       href: 'https://leetcode.com/manuomar',
// //       color: 'text-orange-600',
// //       bgColor: 'bg-orange-100',
// //     },
// //   ];

// //   return (
// //     <section id="contact" className="py-20 bg-gray-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
// //           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //             Let's connect and discuss opportunities, collaborations, or just have a conversation about technology
// //           </p>
// //         </div>

// //         <div className="grid lg:grid-cols-2 gap-12">
// //           {/* Contact Info */}
// //           <div>
// //             <h3 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h3>
// //             <div className="space-y-6 mb-8">
// //               {contactInfo.map((info, index) => (
// //                 <a
// //                   key={index}
// //                   href={info.href}
// //                   className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
// //                 >
// //                   <div className={`${info.bgColor} ${info.color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
// //                     {info.icon}
// //                   </div>
// //                   <div>
// //                     <div className="text-sm text-gray-600">{info.label}</div>
// //                     <div className="text-gray-900 font-medium">{info.value}</div>
// //                   </div>
// //                 </a>
// //               ))}
// //             </div>

// //             <h4 className="text-xl font-semibold text-gray-900 mb-6">Find Me Online</h4>
// //             <div className="space-y-4">
// //               {socialLinks.map((social, index) => (
// //                 <a
// //                   key={index}
// //                   href={social.href}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group hover:scale-105"
// //                 >
// //                   <div className={`${social.bgColor} ${social.color} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
// //                     {social.icon}
// //                   </div>
// //                   <div>
// //                     <div className="text-sm text-gray-600">{social.label}</div>
// //                     <div className="text-gray-900 font-medium">{social.username}</div>
// //                   </div>
// //                 </a>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Contact Form - using Formspree */}
// //           <div>
// //             <h3 className="text-2xl font-semibold text-gray-900 mb-8">Send a Message</h3>
// //             <form
// //               action="https://formspree.io/f/xwpbypbw"
// //               method="POST"
// //               className="space-y-6"
// //             >
// //               <div className="grid md:grid-cols-2 gap-6">
// //                 <div>
// //                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
// //                     Name *
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="name"
// //                     name="name"
// //                     required
// //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors color-black"
// //                     placeholder="Your full name"
// //                   />
// //                 </div>
// //                 <div>
// //                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
// //                     Email *
// //                   </label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     required
// //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
// //                     placeholder="your.email@example.com"
// //                   />
// //                 </div>
// //               </div>

// //               <div>
// //                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
// //                   Subject *
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="subject"
// //                   name="subject"
// //                   required
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
// //                   placeholder="What's this about?"
// //                 />
// //               </div>

// //               <div>
// //                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
// //                   Message *
// //                 </label>
// //                 <textarea
// //                   id="message"
// //                   name="message"
// //                   required
// //                   rows={6}
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
// //                   placeholder="Tell me about your project, opportunity, or just say hello!"
// //                 />
// //               </div>

// //               <button
// //                 type="submit"
// //                 className="w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white transition-all duration-300"
// //               >
// //                 <Send className="w-5 h-5" />
// //                 <span>Send Message</span>
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;






import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, MessageCircle, Code } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch("https://formspree.io/f/xwpbypbw", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(e.target as HTMLFormElement),
    });

    if (response.ok) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);

    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "manuomar0126@gmail.com",
      href: "mailto:manuomar0126@gmail.com",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8303935766",
      href: "tel:+918303935766",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      username: "@manuomar",
      href: "https://github.com/manuomar",
      color: "text-gray-900",
      bgColor: "bg-gray-100",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      username: "manuomar",
      href: "https://linkedin.com/in/manuomar",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: <Code className="w-6 h-6" />,
      label: "LeetCode",
      username: "manuomar",
      href: "https://leetcode.com/manuomar",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-gray-100 overflow-hidden">
      {/* Dot Background */}
      <div
        className="absolute inset-0 z-0 [background-size:20px_20px] [background-image:radial-gradient(black_1px,transparent_1px)]"
      />
      <div className="absolute inset-0 z-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a conversation about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 rounded-lg border hover:shadow-lg transition"
                >
                  <div className={`${info.bgColor} ${info.color} p-3 rounded-lg`}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">{info.label}</div>
                    <div className="text-gray-900 font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-6">Find Me Online</h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg border hover:shadow-md transition"
                >
                  <div className={`${social.bgColor} ${social.color} p-3 rounded-lg`}>
                    {social.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">{social.label}</div>
                    <div className="text-gray-900 font-medium">{social.username}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-600 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-600 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-600 focus:outline-none"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-600 focus:outline-none resize-none"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-4 rounded-lg font-semibold transition-all ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : submitStatus === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700 hover:scale-105"
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                    Sending...
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="text-center text-green-700 bg-green-100 border border-green-300 p-4 rounded-lg mt-4">
                  ✅ Your message has been sent successfully!
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-center text-red-700 bg-red-100 border border-red-300 p-4 rounded-lg mt-4">
                  ❌ Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
