"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const About = () => {
  return (
    <section
      id="about-me"
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
          <h1 className="Welcome-text text-[13px]">About Me</h1>
        </motion.div>

        {/* Main Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-[30px] md:text-[40px] text-white font-medium mt-[20px] text-center mb-[15px]"
        >
          Passionate{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Developer
          </span>{" "}
          & Creative Thinker
        </motion.div>

        {/* Two Column Layout: Text Left, Photo Right */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-[1200px] w-full mt-10">
          {/* Left Column - Text Content */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex-1 text-center md:text-left"
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Hello! I&apos;m Haruki Nakamura, a passionate full-stack developer 
              specializing in building exceptional digital experiences. Currently, 
              I focus on creating responsive web applications using Next.js, React, 
              and modern backend technologies.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My journey in tech started with a curiosity for how things work, which 
              evolved into a career where I get to solve real-world problems through 
              code. I believe in writing clean, maintainable code and creating 
              user-centric designs that not only look great but also provide seamless 
              functionality.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community. I&apos;m always eager to take on new challenges 
              and collaborate on innovative projects.
            </p>
            <p className="cursive text-[20px] text-gray-200 mt-8">
              Let&apos;s create something extraordinary together.
            </p>
          </motion.div>

          {/* Right Column - Photo */}
          <motion.div
            variants={slideInFromRight(0.5)}
            className="flex-shrink-0 group"
          >
            <div className="relative w-[280px] h-[340px] md:w-[350px] md:h-[420px]">
              {/* Animated Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-40 blur-3xl animate-pulse"></div>
              
              {/* Secondary Glow Layer */}
              <div className="absolute inset-[-30px] bg-gradient-to-br from-purple-600 to-cyan-600 opacity-15 blur-3xl group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Image Container with Glass Effect */}
              <div className="relative w-full h-full overflow-hidden backdrop-blur-md bg-gradient-to-br from-[#03001420] via-[#7042f815] to-[#03001420] shadow-2xl shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
                {/* Overlay gradient for better blending */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 z-10"></div>
                
                <Image
                  src="/images/photo.png"
                  alt="Profile Photo"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300 group-hover:scale-105 transform"
                  priority
                />
                
                {/* Soft edge fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/40 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Particles Effect */}
              <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-400 opacity-60 animate-ping"></div>
              <div className="absolute bottom-10 left-0 w-2 h-2 rounded-full bg-purple-400 opacity-60 animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>

        {/* Stats or Highlights */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="flex flex-row flex-wrap gap-8 justify-center mt-12"
        >
          <div className="flex flex-col items-center">
            <div className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              5+
            </div>
            <div className="text-gray-300 text-[14px] mt-2">
              Years Experience
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              50+
            </div>
            <div className="text-gray-300 text-[14px] mt-2">
              Projects Completed
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              100%
            </div>
            <div className="text-gray-300 text-[14px] mt-2">
              Client Satisfaction
            </div>
          </div>
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

