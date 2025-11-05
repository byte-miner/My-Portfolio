"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const SERVICES = [
  {
    icon: CodeBracketIcon,
    title: "Web Development",
    description:
      "Build responsive and modern web applications using the latest technologies like React, Next.js, and TypeScript.",
    features: ["Responsive Design", "SEO Optimization", "Fast Performance"],
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile Development",
    description:
      "Create native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    features: ["React Native", "iOS & Android", "Smooth Animations"],
  },
  {
    icon: PaintBrushIcon,
    title: "UI/UX Design",
    description:
      "Design beautiful and intuitive user interfaces that engage users and enhance the overall user experience.",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    icon: ServerIcon,
    title: "Backend Development",
    description:
      "Develop robust and scalable backend systems with modern frameworks and databases to power your applications.",
    features: ["RESTful APIs", "Database Design", "Cloud Deployment"],
  },
  {
    icon: RocketLaunchIcon,
    title: "Full Stack Solutions",
    description:
      "End-to-end development services covering everything from concept to deployment and maintenance.",
    features: ["Complete Solutions", "DevOps", "Maintenance"],
  },
  {
    icon: ShieldCheckIcon,
    title: "Security & Performance",
    description:
      "Ensure your applications are secure, performant, and optimized for the best user experience.",
    features: ["Security Audits", "Performance Tuning", "Best Practices"],
  },
];

export default function ServicesPage() {
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
              <h1 className="Welcome-text text-[13px]">Services</h1>
            </motion.div>

            {/* Main Title */}
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="text-[40px] md:text-[50px] text-white font-medium mt-[20px] text-center mb-[15px]"
            >
              What I{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Offer
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              variants={slideInFromRight(0.5)}
              className="text-center max-w-[700px]"
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Comprehensive development services tailored to bring your ideas
                to life with cutting-edge technology and innovative solutions.
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
              Ready to start your project?
            </h3>
            <a
              href="/#contact"
              className="button-primary px-10 py-4 rounded-full text-white font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50 inline-block"
            >
              Get in Touch
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

