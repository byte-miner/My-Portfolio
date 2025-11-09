"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/locales/translations";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const PROJECTS_WITH_TRANSLATIONS = [
    {
      id: 'munity',
      title: "MUNITY Ecosystem",
      image: "/projects/nftmarketplace.png",
      link: "https://example.com",
      tags: ["React.js", "Web3", "Smart Contracts", "Blockchain"],
      featured: true,
    },
    {
      id: 'goldencity',
      title: "Goldencity",
      image: "/projects/goldencity.png",
      link: "https://example.com",
      tags: ["React", "Tailwind CSS", "Blockchain", "Web3"],
      featured: true,
    },
    {
      id: 'digitalHero',
      title: "Digital Hero",
      image: "/projects/digital-hero.png",
      link: "https://www.digi-hero.com/",
      tags: ["Next.js", "Three.js", "WebGL", "CSS"],
      featured: true,
    },
    {
      id: 'cryptoland',
      title: "CryptoLand",
      image: "/projects/cryptoland.png",
      link: "https://game.cryptoland.io/",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      featured: false,
    },
    {
      id: 'snargons',
      title: "Snargons",
      image: "/projects/snargons.png",
      link: "https://www.snargons.xyz/",
      tags: ["React", "Firebase", "Material UI", "WebSocket"],
      featured: false,
    },
    {
      id: 'flaregods',
      title: "Flaregods",
      image: "/projects/flaregods.png",
      link: "https://flaregods.xyz/",
      tags: ["Next.js", "TypeScript", "Chart.js", "REST API"],
      featured: false,
    },
    {
      id: 'arcus',
      title: "Arcus",
      image: "/projects/arcus.png",
      link: "https://arcusbtc.com/",
      tags: ["React", "Firebase", "Material UI", "WebSocket"],
      featured: false,
    },
    {
      id: 'covesting',
      title: "Covesting",
      image: "/projects/covesting.png",
      link: "https://covesting.io/",
      tags: ["React", "Firebase", "Material UI", "WebSocket"],
      featured: false,
    },
    {
      id: 'unidex',
      title: "UniDex",
      image: "/projects/unidex.png",
      link: "https://unidex.exchange/",
      tags: ["React", "Ethereum", "Binance Coin", "Solidity", "Smart Contracts", "Vue", "Angular"],
      featured: false,
    },
    {
      id: 'pokedx',
      title: "PokeDX",
      image: "/projects/pokedx.png",
      link: "https://pokedx.app/",
      tags: ["Vue", "Ethereum", "Solidity", "Smart Contracts", "React"],
      featured: false,
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
              <h1 className="Welcome-text text-[13px]">{t.projects.badge}</h1>
            </motion.div>

            {/* Main Title */}
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="text-[40px] md:text-[50px] text-white font-medium mt-[20px] text-center mb-[15px]"
            >
              {t.projects.title}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {t.projects.title2}
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              variants={slideInFromRight(0.5)}
              className="text-center max-w-[700px]"
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                {t.projects.subtitle}
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section className="px-10 md:px-20 relative z-[20]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1400px] mx-auto">
            {PROJECTS_WITH_TRANSLATIONS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="h-full rounded-lg overflow-hidden bg-[#03001427] border border-[#7042f88b] backdrop-blur-md hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02]">
                  {/* Project Image */}
                  <div className="relative w-full h-[250px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60"></div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-semibold">
                        {t.projects.featured}
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 transition-all">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {t.projects.descriptions[project.id as keyof typeof t.projects.descriptions]}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-[#7042f820] text-purple-300 border border-[#7042f850]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                        {/* Link */}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-purple-400 hover:text-cyan-400 transition-colors group/link"
                        >
                          <span>{t.projects.viewProject}</span>
                          <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </a>
                  </div>
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
              {t.projects.ctaTitle}
            </h3>
            <p className="text-gray-300 mb-8 max-w-[600px] mx-auto">
              {t.projects.ctaDescription}
            </p>
            <a
              href="/#contact"
              className="button-primary px-10 py-4 rounded-full text-white font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50 inline-block"
            >
              {t.projects.ctaButton}
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
            <source src="/videos/encryption-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </main>
  );
}

