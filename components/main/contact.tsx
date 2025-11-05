"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useState } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 relative overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center px-10 md:px-20 mt-10 w-full z-[20]"
      >
        {/* Section Header */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Get in Touch</h1>
        </motion.div>

        {/* Main Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-[30px] md:text-[40px] text-white font-medium mt-[20px] text-center mb-[15px]"
        >
          Let&apos;s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Connect
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.5)}
          className="text-center max-w-[600px] mb-12"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Have a project in mind or just want to chat? Feel free to reach out.
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="w-full max-w-[700px]"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-gray-300 text-sm">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-lg bg-[#03001427] border border-[#7042f88b] text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors backdrop-blur-md"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-gray-300 text-sm">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-lg bg-[#03001427] border border-[#7042f88b] text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors backdrop-blur-md"
                placeholder="john@example.com"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-gray-300 text-sm">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="px-4 py-3 rounded-lg bg-[#03001427] border border-[#7042f88b] text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors backdrop-blur-md resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="button-primary px-8 py-4 rounded-full text-white font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Alternative Contact Info */}
        <motion.div
          variants={slideInFromRight(0.9)}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">Or reach me directly at</p>
          <a
            href="mailto:harukin399@gmail.com"
            className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 transition-all"
          >
            harukin399@gmail.com
          </a>
        </motion.div>
      </motion.div>

      {/* Background Video */}
      <div className="w-full h-full absolute top-0 left-0">
        <div className="w-full h-full z-[-10] opacity-20 absolute flex items-center justify-center">
          <video
            className="w-full h-auto object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/blackhole.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};

