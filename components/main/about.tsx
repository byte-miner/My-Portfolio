"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

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

          {/* Right Column - Photo with Ultra Fantastic 3D Effects */}
          <motion.div
            variants={slideInFromRight(0.5)}
            className="flex-shrink-0 group perspective-[1500px]"
            style={{
              perspective: "1500px"
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-[280px] h-[340px] md:w-[350px] md:h-[420px] transform-gpu">
              
              {/* Magnetic Energy Field - Outer Ring */}
              <motion.div 
                className="absolute inset-[-60px] rounded-full border-2 border-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Liquid Morphing Aurora Effect */}
              <motion.div 
                className="absolute inset-[-50px] opacity-40"
                animate={{
                  background: [
                    "radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.4) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 0%, rgba(6, 182, 212, 0.4) 0%, transparent 50%)",
                    "radial-gradient(circle at 100% 100%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 100%, rgba(147, 51, 234, 0.4) 0%, transparent 50%)",
                    "radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.4) 0%, transparent 50%)",
                  ]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ filter: "blur(40px)" }}
              />
              {/* Animated Multi-Color Rotating Glow */}
              <div className="absolute inset-[-20px] bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-50 blur-3xl animate-spin-slow"></div>
              
              {/* Pulsing Secondary Glow */}
              <div className="absolute inset-[-40px] bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-600 opacity-20 blur-[60px] animate-pulse"></div>
              
              {/* Orbiting Light Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 left-1/2 w-20 h-20 bg-cyan-400/30 rounded-full blur-2xl animate-orbit"></div>
              </div>
              
              {/* Particle Burst System */}
              {isHovered && (
                <>
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${
                          ['#a855f7', '#ec4899', '#06b6d4'][i % 3]
                        }, transparent)`,
                        left: '50%',
                        top: '50%',
                      }}
                      initial={{ scale: 0, x: 0, y: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        x: Math.cos((i * 360) / 20 * Math.PI / 180) * 120,
                        y: Math.sin((i * 360) / 20 * Math.PI / 180) * 120,
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </>
              )}
              
              {/* Energy Waves */}
              <motion.div
                className="absolute inset-[-30px] rounded-full border border-cyan-400/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute inset-[-30px] rounded-full border border-purple-400/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
              
              {/* 3D Magnetic Floating Frame Container */}
              <motion.div 
                className="relative w-full h-full"
                style={{
                  transformStyle: "preserve-3d",
                  rotateX,
                  rotateY,
                  scale: isHovered ? 1.05 : 1
                }}
                transition={{
                  scale: { duration: 0.3 }
                }}
              >
                {/* Hexagonal Border Animation */}
                <div className="absolute inset-[-3px] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 animate-gradient-xy"></div>
                </div>
                
                {/* Inner Glowing Border */}
                <div className="absolute inset-[-2px] rounded-lg bg-gradient-to-br from-purple-600/50 via-pink-500/50 to-cyan-600/50 blur-sm"></div>
                
                {/* Glass Morphism Frame */}
                <div className="relative w-full h-full rounded-lg overflow-hidden backdrop-blur-xl bg-gradient-to-br from-[#03001440] via-[#7042f825] to-[#03001440] shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/60 transition-all duration-500 border border-purple-500/20"
                  style={{
                    transform: "translateZ(20px)"
                  }}
                >
                  {/* Animated Scan Lines Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none z-20">
                    <div className="h-full w-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-scan"></div>
                  </div>
                  
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  {/* Corner Accents - Tech Frame */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-lg group-hover:border-cyan-400 transition-colors duration-300 z-20"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-purple-400/50 rounded-tr-lg group-hover:border-purple-400 transition-colors duration-300 z-20"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-400/50 rounded-bl-lg group-hover:border-purple-400 transition-colors duration-300 z-20"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400/50 rounded-br-lg group-hover:border-cyan-400 transition-colors duration-300 z-20"></div>
                  
                  {/* Main Image with Ultra Enhanced Effects */}
                  <div className="relative w-full h-full">
                    {/* DNA Helix Strands Effect */}
                    <motion.div
                      className="absolute left-0 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 opacity-20"
                      animate={{
                        y: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <motion.div
                      className="absolute right-0 w-1 h-full bg-gradient-to-b from-cyan-500 via-pink-500 to-purple-500 opacity-20"
                      animate={{
                        y: ['100%', '-100%']
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Prismatic Color Refraction */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 mix-blend-overlay"
                      style={{
                        background: "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)"
                      }}
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Lightning/Electric Effect */}
                    {isHovered && (
                      <>
                        <motion.div
                          className="absolute top-0 left-1/4 w-[2px] h-full bg-cyan-400 opacity-70"
                          initial={{ scaleY: 0, opacity: 0 }}
                          animate={{ 
                            scaleY: [0, 1, 0],
                            opacity: [0, 0.7, 0]
                          }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatDelay: 2
                          }}
                          style={{ filter: "blur(2px)", boxShadow: "0 0 10px #06b6d4" }}
                        />
                        <motion.div
                          className="absolute top-0 right-1/4 w-[2px] h-full bg-purple-400 opacity-70"
                          initial={{ scaleY: 0, opacity: 0 }}
                          animate={{ 
                            scaleY: [0, 1, 0],
                            opacity: [0, 0.7, 0]
                          }}
                          transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatDelay: 2,
                            delay: 1
                          }}
                          style={{ filter: "blur(2px)", boxShadow: "0 0 10px #a855f7" }}
                        />
                      </>
                    )}
                    
                    <Image
                      src="/images/photo.png"
                      alt="Profile Photo"
                      fill
                      className="object-cover opacity-85 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 transform"
                      priority
                      style={{
                        filter: "contrast(1.15) saturate(1.3) brightness(1.05)"
                      }}
                    />
                    
                    {/* Chromatic Aberration Effect */}
                    <motion.div 
                      className="absolute inset-0 mix-blend-screen opacity-0 group-hover:opacity-20"
                      animate={{
                        backgroundImage: [
                          "radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.3) 0%, transparent 50%)",
                          "radial-gradient(circle at 40% 40%, rgba(0, 255, 255, 0.3) 0%, transparent 50%)",
                          "radial-gradient(circle at 60% 60%, rgba(255, 255, 0, 0.3) 0%, transparent 50%)",
                          "radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.3) 0%, transparent 50%)",
                        ]
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Light Leak Effect - Enhanced */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl animate-pulse"></div>
                  </div>
                  
                  {/* Edge Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/60 via-transparent to-[#030014]/30 pointer-events-none"></div>
                  
                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                </div>
              </motion.div>
              
              {/* Floating Orbs with Different Animations - Enhanced */}
              <motion.div 
                className="absolute -top-3 -right-3 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 5, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="absolute top-1/2 -left-3 w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg shadow-purple-400/50"
                animate={{
                  y: [0, -20, 0],
                  x: [0, -5, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div 
                className="absolute -bottom-3 right-1/4 w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 shadow-lg shadow-pink-400/50"
                animate={{
                  y: [0, -25, 0],
                  scale: [1, 1.4, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              />
              
              {/* Additional Cosmic Orbs */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full opacity-40"
                  style={{
                    background: `radial-gradient(circle, ${
                      ['#a855f7', '#ec4899', '#06b6d4', '#f472b6'][i % 4]
                    }, transparent)`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
              
              {/* Tech Lines Decoration - Enhanced */}
              <motion.div 
                className="absolute -left-12 top-1/4 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
                animate={{ width: ['0px', '48px'] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              />
              <motion.div 
                className="absolute -right-12 top-2/3 h-[2px] bg-gradient-to-l from-transparent via-cyan-500/50 to-transparent"
                animate={{ width: ['0px', '48px'] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, delay: 1 }}
              />
              <motion.div 
                className="absolute -top-10 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-pink-500/50 to-transparent"
                animate={{ height: ['0px', '40px'] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, delay: 0.5 }}
              />
              <motion.div 
                className="absolute -bottom-10 left-1/2 w-[2px] bg-gradient-to-t from-transparent via-purple-500/50 to-transparent"
                animate={{ height: ['0px', '40px'] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, delay: 1.5 }}
              />
              
              {/* Constellation Pattern */}
              <svg className="absolute inset-[-50px] w-[calc(100%+100px)] h-[calc(100%+100px)] opacity-20 pointer-events-none">
                <motion.line
                  x1="10%" y1="10%" x2="30%" y2="25%"
                  stroke="url(#gradient1)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.line
                  x1="70%" y1="15%" x2="85%" y2="30%"
                  stroke="url(#gradient2)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.line
                  x1="20%" y1="80%" x2="40%" y2="90%"
                  stroke="url(#gradient3)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                    <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
                    <stop offset="50%" stopColor="#ec4899" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Particle Effects - Enhanced */}
              <div className="absolute top-1/4 right-0 w-1 h-1 rounded-full bg-cyan-400 opacity-60 animate-ping"></div>
              <div className="absolute bottom-1/4 left-0 w-1 h-1 rounded-full bg-purple-400 opacity-60 animate-ping" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-3/4 right-1/3 w-1 h-1 rounded-full bg-pink-400 opacity-60 animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/3 left-1/4 w-1 h-1 rounded-full bg-cyan-300 opacity-60 animate-ping" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-purple-300 opacity-60 animate-ping" style={{ animationDelay: '2s' }}></div>
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

