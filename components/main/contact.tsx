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
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/locales/translations";

// 7-Segment Display Component
const SevenSegmentDigit = ({ digit }: { digit: string }) => {
  const segments = {
    '0': [true, true, true, true, true, true, false],
    '1': [false, true, true, false, false, false, false],
    '2': [true, true, false, true, true, false, true],
    '3': [true, true, true, true, false, false, true],
    '4': [false, true, true, false, false, true, true],
    '5': [true, false, true, true, false, true, true],
    '6': [true, false, true, true, true, true, true],
    '7': [true, true, true, false, false, false, false],
    '8': [true, true, true, true, true, true, true],
    '9': [true, true, true, true, false, true, true],
  };

  const [a, b, c, d, e, f, g] = segments[digit as keyof typeof segments] || [false, false, false, false, false, false, false];

  return (
    <div className="relative inline-block" style={{ width: '50px', height: '80px' }}>
      {/* Segment A - Top */}
      <div
        className={`absolute transition-all duration-200 ${a ? 'bg-[#06b6d4]' : 'bg-[#0a1a1f]'}`}
        style={{
          left: '8px',
          top: '0px',
          width: '34px',
          height: '6px',
          clipPath: 'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)',
          boxShadow: a ? '0 0 8px #06b6d4, 0 0 12px #06b6d4' : 'none',
        }}
      />

      {/* Segment B - Top Right */}
      <div
        className={`absolute transition-all duration-200 ${b ? 'bg-[#06b6d4]' : 'bg-[#0a1a1f]'}`}
        style={{
          right: '0px',
          top: '8px',
          width: '6px',
          height: '30px',
          clipPath: 'polygon(0% 10%, 50% 0%, 100% 10%, 100% 90%, 50% 100%, 0% 90%)',
          boxShadow: b ? '0 0 8px #06b6d4, 0 0 12px #06b6d4' : 'none',
        }}
      />

      {/* Segment C - Bottom Right */}
      <div
        className={`absolute transition-all duration-200 ${c ? 'bg-[#06b6d4]' : 'bg-[#0a1a1f]'}`}
        style={{
          right: '0px',
          top: '42px',
          width: '6px',
          height: '30px',
          clipPath: 'polygon(0% 10%, 50% 0%, 100% 10%, 100% 90%, 50% 100%, 0% 90%)',
          boxShadow: c ? '0 0 8px #06b6d4, 0 0 12px #06b6d4' : 'none',
        }}
      />

      {/* Segment D - Bottom */}
      <div
        className={`absolute transition-all duration-200 ${d ? 'bg-[#06b6d4]' : 'bg-[#0a1a1f]'}`}
        style={{
          left: '8px',
          bottom: '0px',
          width: '34px',
          height: '6px',
          clipPath: 'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)',
          boxShadow: d ? '0 0 8px #06b6d4, 0 0 12px #06b6d4' : 'none',
        }}
      />

      {/* Segment E - Bottom Left */}
      <div
        className={`absolute transition-all duration-200 ${e ? 'bg-[#06b6d4]' : 'bg-[#0a1a1f]'}`}
        style={{
          left: '0px',
          top: '42px',
          width: '6px',
          height: '30px',
          clipPath: 'polygon(0% 10%, 50% 0%, 100% 10%, 100% 90%, 50% 100%, 0% 90%)',
          boxShadow: e ? '0 0 8px #06b6d4, 0 0 12px #06b6d4' : 'none',
        }}
      />

      {/* Segment F - Top Left */}
      <div
        className={`absolute transition-all duration-200 ${f ? 'bg-[#06b6d4]' : 'bg-[#0a1a1f]'}`}
        style={{
          left: '0px',
          top: '8px',
          width: '6px',
          height: '30px',
          clipPath: 'polygon(0% 10%, 50% 0%, 100% 10%, 100% 90%, 50% 100%, 0% 90%)',
          boxShadow: f ? '0 0 8px #06b6d4, 0 0 12px #06b6d4' : 'none',
        }}
      />

      {/* Segment G - Middle */}
      <div
        className={`absolute transition-all duration-200 ${g ? 'bg-[#06b6d4]' : 'bg-[#0a1a1f]'}`}
        style={{
          left: '8px',
          top: '37px',
          width: '34px',
          height: '6px',
          clipPath: 'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)',
          boxShadow: g ? '0 0 8px #06b6d4, 0 0 12px #06b6d4' : 'none',
        }}
      />
    </div>
  );
};

export const Contact = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);

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
    month: 0,
    dayOfMonth: 0,
    year: 0,
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

      // Get Japan date parts
      const japanDate = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));
      const month = japanDate.getMonth() + 1; // 1-12
      const dayOfMonth = japanDate.getDate(); // 1-31
      const year = japanDate.getFullYear() % 100; // Last 2 digits

      setJapanTime({
        time: timeString,
        date: dateFormatter.format(now),
        day: dayFormatter.format(now),
        hours,
        minutes,
        seconds,
        month,
        dayOfMonth,
        year,
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
          <h1 className="Welcome-text text-[13px]">{t.contact.badge}</h1>
        </motion.div>

        {/* Main Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-[30px] md:text-[40px] text-white font-medium mt-[20px] text-center mb-[15px]"
        >
          {t.contact.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {t.contact.title2}
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.5)}
          className="text-center max-w-[600px] mb-12"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Contact Form */}
        <motion.div
          variants={slideInFromLeft(0.8)}
            className="p-8 rounded-xl bg-[#03001427] border border-[#7042f88b] backdrop-blur-md"
        >
            <h3 className="text-white text-2xl font-semibold mb-6">{t.contact.formTitle}</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name Field */}
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-gray-300 text-sm font-medium">
                  {t.contact.nameLabel} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                  className="px-4 py-3 rounded-lg bg-[#0a0a1a] border border-[#7042f88b] text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                placeholder={t.contact.namePlaceholder}
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-300 text-sm font-medium">
                  {t.contact.emailLabel} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                  className="px-4 py-3 rounded-lg bg-[#0a0a1a] border border-[#7042f88b] text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-gray-300 text-sm font-medium">
                  {t.contact.messageLabel} *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                  rows={5}
                  className="px-4 py-3 rounded-lg bg-[#0a0a1a] border border-[#7042f88b] text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            {/* Submit Button */}
              <motion.button
              type="submit"
                className="button-primary px-8 py-4 rounded-lg text-white font-medium text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-purple-500/50 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <span>{t.contact.sendButton}</span>
                <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
          </form>
        </motion.div>

          {/* Right Column - Analog Clock Card */}
          <div className="flex flex-col gap-6">
            {/* Clock Container */}
            <motion.div
              variants={slideInFromRight(0.6)}
              className="flex flex-col items-center"
            >
              <div className="text-center mb-6">
                <h3 className="text-white font-bold text-2xl mb-2">{t.contact.clockTitle}</h3>
                <p className="text-gray-400 text-sm">{t.contact.clockSubtitle}</p>
              </div>

                {/* Electronic Digital Calendar - 7-Segment Display */}
                <div className="relative mb-6 flex flex-col items-center gap-4">
                  {/* Time Display */}
                  <div className="flex flex-col items-center">
                    <div className="text-gray-400 text-xs mb-1 uppercase tracking-widest">{t.contact.time}</div>
                    <div className="relative flex items-center justify-center gap-4">
                      {/* Hours - First Digit */}
                      <SevenSegmentDigit digit={japanTime.hours.toString().padStart(2, '0')[0]} />
                      {/* Hours - Second Digit */}
                      <SevenSegmentDigit digit={japanTime.hours.toString().padStart(2, '0')[1]} />

                      {/* Separator - Blinking Colon */}
        <motion.div
                        className="flex flex-col gap-3 mx-2"
                        animate={{
                          opacity: [1, 0.2, 1]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div
                          className="w-3 h-3 rounded-full bg-[#06b6d4]"
                          style={{
                            boxShadow: '0 0 8px #06b6d4, 0 0 12px #06b6d4'
                          }}
                        />
                        <div
                          className="w-3 h-3 rounded-full bg-[#06b6d4]"
                          style={{
                            boxShadow: '0 0 8px #06b6d4, 0 0 12px #06b6d4'
                          }}
                        />
                      </motion.div>

                      {/* Minutes - First Digit */}
                      <SevenSegmentDigit digit={japanTime.minutes.toString().padStart(2, '0')[0]} />
                      {/* Minutes - Second Digit */}
                      <SevenSegmentDigit digit={japanTime.minutes.toString().padStart(2, '0')[1]} />

                      {/* Separator - Colon */}
                      <motion.div
                        className="flex flex-col gap-3 mx-2"
                        animate={{
                          opacity: [1, 0.2, 1]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div
                          className="w-3 h-3 rounded-full bg-[#06b6d4]"
                          style={{
                            boxShadow: '0 0 8px #06b6d4, 0 0 12px #06b6d4'
                          }}
                        />
                        <div
                          className="w-3 h-3 rounded-full bg-[#06b6d4]"
                          style={{
                            boxShadow: '0 0 8px #06b6d4, 0 0 12px #06b6d4'
                          }}
                        />
                      </motion.div>

                      {/* Seconds - First Digit */}
                      <SevenSegmentDigit digit={japanTime.seconds.toString().padStart(2, '0')[0]} />
                      {/* Seconds - Second Digit */}
                      <SevenSegmentDigit digit={japanTime.seconds.toString().padStart(2, '0')[1]} />
                    </div>
                  </div>

                  {/* Day of Week Display */}
                  <div className="flex flex-col items-center">
                    <div className="text-gray-400 text-xs mb-1 uppercase tracking-widest">{t.contact.day}</div>
                    <div className="flex items-center gap-2">
                      <div 
                        className="text-xl font-bold tracking-wider"
                        style={{
                          color: '#06b6d4',
                          textShadow: '0 0 8px #06b6d4',
                          fontFamily: "'Orbitron', monospace"
                        }}
                      >
                        {japanTime.day.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  {/* Date Display - 7-Segment Style */}
                  <div className="flex flex-col items-center">
                    <div className="text-gray-400 text-xs mb-1 uppercase tracking-widest">{t.contact.date}</div>
                    <div className="relative flex items-center justify-center gap-2" style={{ transform: 'scale(0.7)', transformOrigin: 'center' }}>
                      {/* Month - First Digit */}
                      <SevenSegmentDigit digit={japanTime.month.toString().padStart(2, '0')[0]} />
                      {/* Month - Second Digit */}
                      <SevenSegmentDigit digit={japanTime.month.toString().padStart(2, '0')[1]} />

                      {/* Separator - Slash */}
                      <div className="text-5xl font-bold text-[#06b6d4] mx-1" style={{ textShadow: '0 0 8px #06b6d4' }}>/</div>

                      {/* Day - First Digit */}
                      <SevenSegmentDigit digit={japanTime.dayOfMonth.toString().padStart(2, '0')[0]} />
                      {/* Day - Second Digit */}
                      <SevenSegmentDigit digit={japanTime.dayOfMonth.toString().padStart(2, '0')[1]} />

                      {/* Separator - Slash */}
                      <div className="text-5xl font-bold text-[#06b6d4] mx-1" style={{ textShadow: '0 0 8px #06b6d4' }}>/</div>

                      {/* Year - First Digit */}
                      <SevenSegmentDigit digit={japanTime.year.toString().padStart(2, '0')[0]} />
                      {/* Year - Second Digit */}
                      <SevenSegmentDigit digit={japanTime.year.toString().padStart(2, '0')[1]} />
                    </div>
                  </div>

                  {/* Timezone Badge */}
                  <div className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30">
                    <span className="text-sm text-purple-300 font-medium">{t.contact.location}</span>
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

