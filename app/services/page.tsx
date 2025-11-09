"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  ServerIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/locales/translations";

export default function ServicesPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const SERVICES = [
    {
      icon: CodeBracketIcon,
      title: t.services.webDev.title,
      description: t.services.webDev.description,
      features: t.services.webDev.features,
    },
    {
      icon: DevicePhoneMobileIcon,
      title: t.services.mobileDev.title,
      description: t.services.mobileDev.description,
      features: t.services.mobileDev.features,
    },
    {
      icon: PaintBrushIcon,
      title: t.services.uiux.title,
      description: t.services.uiux.description,
      features: t.services.uiux.features,
    },
    {
      icon: ServerIcon,
      title: t.services.api.title,
      description: t.services.api.description,
      features: t.services.api.features,
    },
    {
      icon: CircleStackIcon,
      title: t.services.database.title,
      description: t.services.database.description,
      features: t.services.database.features,
    },
    {
      icon: RocketLaunchIcon,
      title: t.services.devops.title,
      description: t.services.devops.description,
      features: t.services.devops.features,
    },
  ];

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 pt-32 pb-20">
        {/* Header Section */}
        <section className="flex flex-col items-center justify-center px-10 md:px-20 relative z-[20]">
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center"
          >
            {/* Section Badge */}
            <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
            >
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <h1 className="Welcome-text text-[13px]">{t.services.badge}</h1>
            </motion.div>

            {/* Main Title */}
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="text-[40px] md:text-[50px] text-white font-medium mt-[20px] text-center mb-[15px]"
            >
              {t.services.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {t.services.title2}
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              variants={slideInFromRight(0.5)}
              className="text-center max-w-[700px]"
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                {t.services.subtitle}
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="px-10 md:px-20 relative z-[20]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="h-full p-8 rounded-lg bg-[#03001427] border border-[#7042f88b] backdrop-blur-md hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105">
                  {/* Icon */}
                  <div className="mb-6 inline-block p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all">
                    <service.icon className="w-8 h-8 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 transition-all">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col items-center justify-center px-10 md:px-20 relative z-[20]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl text-white mb-6">
              {t.services.ctaTitle}
            </h3>
            <p className="text-gray-300 mb-8 max-w-[600px] mx-auto">
              {t.services.ctaDescription}
            </p>
            <a
              href="/#contact"
              className="button-primary px-10 py-4 rounded-full text-white font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50 inline-block"
            >
              {t.services.ctaButton}
            </a>
          </motion.div>
        </section>
      </div>

      {/* Background Video */}
      <div className="w-full h-full fixed top-0 left-0 z-[-1]">
        <div className="w-full h-full opacity-20 absolute flex items-center justify-center">
          <video
            className="w-full h-auto object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </main>
  );
}

