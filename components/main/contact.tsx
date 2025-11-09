"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

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

  const [japanTime, setJapanTime] = useState({
    time: "",
    date: "",
    day: "",
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateJapanTime = () => {
      const now = new Date();
      const japanFormatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Tokyo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      const dateFormatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Tokyo",
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      const dayFormatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Tokyo",
        weekday: "long",
      });

      const timeString = japanFormatter.format(now);
      const timeParts = timeString.split(':');
      const hours = parseInt(timeParts[0]);
      const minutes = parseInt(timeParts[1]);
      const seconds = parseInt(timeParts[2]);

      setJapanTime({
        time: timeString,
        date: dateFormatter.format(now),
        day: dayFormatter.format(now),
        hours,
        minutes,
        seconds,
      });
    };

    updateJapanTime();
    const interval = setInterval(updateJapanTime, 1000);

    return () => clearInterval(interval);
  }, []);

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

        {/* Two Column Layout */}
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column - Contact Form */}
        <motion.div
          variants={slideInFromLeft(0.8)}
            className="p-8 rounded-xl bg-[#03001427] border border-[#7042f88b] backdrop-blur-md"
        >
            <h3 className="text-white text-2xl font-semibold mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name Field */}
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-gray-300 text-sm font-medium">
                  Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                  className="px-4 py-3 rounded-lg bg-[#0a0a1a] border border-[#7042f88b] text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-300 text-sm font-medium">
                  Your Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                  className="px-4 py-3 rounded-lg bg-[#0a0a1a] border border-[#7042f88b] text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-gray-300 text-sm font-medium">
                  Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                  rows={5}
                  className="px-4 py-3 rounded-lg bg-[#0a0a1a] border border-[#7042f88b] text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
              <motion.button
              type="submit"
                className="button-primary px-8 py-4 rounded-lg text-white font-medium text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-purple-500/50 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <span>Send Message</span>
                <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
          </form>
        </motion.div>

          {/* Right Column - Analog Clock Card */}
          <div className="flex flex-col gap-6">
            {/* Japan Analog Clock Card - Fantastic Design */}
            <motion.div
              variants={slideInFromRight(0.6)}
              className="p-8 rounded-xl bg-transparent backdrop-blur-xl transition-all duration-500 group relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 animate-gradient-xy"></div>
              </div>

              {/* Glowing Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="text-center mb-6">
                  <h3 className="text-white font-bold text-2xl mb-2">My Local Time</h3>
                  <p className="text-gray-400 text-sm">Japan Standard Time (JST)</p>
                </div>

                {/* Electronic Digital Clock - Neon Effect */}
                <div className="relative mb-6 flex flex-col items-center">
                  {/* Digital Clock Display */}
                  <div className="relative">
                    {/* Clock Container */}
                    <div className="relative px-8 py-6">
                      {/* Time Display - Neon Numbers */}
                      <div className="relative flex items-center gap-3">
                        {/* Hours */}
                        <div
                          className="font-mono text-7xl font-bold tracking-wider"
                          style={{
                            color: '#0ff',
                            textShadow: '0 0 10px #0ff, 0 0 20px #0ff'
                          }}
                        >
                          {japanTime.hours.toString().padStart(2, '0')}
                        </div>

                        {/* Separator - Blinking Colon */}
                        <motion.div
                          className="font-mono text-7xl font-bold"
                          style={{
                            color: '#a855f7',
                            textShadow: '0 0 10px #a855f7'
                          }}
                          animate={{
                            opacity: [1, 0.4, 1]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          :
                        </motion.div>

                        {/* Minutes */}
                        <div
                          className="font-mono text-7xl font-bold tracking-wider"
                          style={{
                            color: '#06b6d4',
                            textShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4'
                          }}
                        >
                          {japanTime.minutes.toString().padStart(2, '0')}
                        </div>

                        {/* Separator */}
                        <motion.div
                          className="font-mono text-7xl font-bold"
                          style={{
                            color: '#a855f7',
                            textShadow: '0 0 10px #a855f7'
                          }}
                          animate={{
                            opacity: [1, 0.4, 1]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          :
                        </motion.div>

                        {/* Seconds */}
                        <div
                          className="font-mono text-7xl font-bold tracking-wider"
                          style={{
                            color: '#ec4899',
                            textShadow: '0 0 10px #ec4899, 0 0 20px #ec4899'
                          }}
                        >
                          {japanTime.seconds.toString().padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Date Information */}
                <div className="space-y-2 text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-xl font-semibold">{japanTime.day}</span>
                  </div>
                  <div className="text-gray-400 text-lg">{japanTime.date}</div>
                </div>

                {/* Timezone Badge */}
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30">
                  <span className="text-sm text-purple-300 font-medium">🇯🇵 Tokyo, Japan (UTC+9)</span>
                </div>
              </div>
        </motion.div>
          </div>
        </div>
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

