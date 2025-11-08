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

const PROJECTS = [
  {
    title: "MUNITY Ecosystem",
    description:
      "Explore our vibrant marketplace where you can buy and sell NFT horses, game consumables, and items using MUNITY tokens! Join the community and dive into a world of endless possibilities.",
    image: "/projects/nftmarketplace.png",
    link: "https://example.com",
    tags: ["React.js", "Web3", "Smart Contracts", "Blockchain"],
    featured: true,
  },
  {
    title: "Goldencity",
    description:
      "GoldenCity is a modern real estate investment platform that combines traditional property investing with cryptocurrency payments. Built with React and Tailwind CSS, it mirrors the functionality of Arrived.com while adding blockchain-based transaction capabilities.",
    image: "/projects/goldencity.png",
    link: "https://example.com",
    tags: ["React", "Tailwind CSS", "Blockchain", "Web3"],
    featured: true,
  },
  {
    title: "Digital Hero",
    description:
      "A mesmerizing space-themed website that invites exploration of cosmic wonders. Features immersive visual effects, 3D elements, and interactive components.",
    image: "/projects/digital-hero.png",
    link: "https://www.digi-hero.com/",
    tags: ["Next.js", "Three.js", "WebGL", "CSS"],
    featured: true,
  },
  {
    title: "CryptoLand",
    description:
      "CryptoLand is a blockchain game on XRPL where players grow kingdoms and turn gameplay into real on-chain value.",
    image: "/projects/cryptoland.png",
    link: "https://game.cryptoland.io/",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    featured: false,
  },
  {
    title: "Snargons",
    description:
      "Discover Snargons, where NFTs meet purpose. Join us in building a thriving community of adventurers and creators.",
    image: "/projects/snargons.png",
    link: "https://www.snargons.xyz/",
    tags: ["React", "Firebase", "Material UI", "WebSocket"],
    featured: false,
  },
  {
    title: "Flaregods",
    description:
      "This promotes an NFT collection that promises passive income through cashback and token distribution to holders.",
    image: "/projects/flaregods.png",
    link: "https://flaregods.xyz/",
    tags: ["Next.js", "TypeScript", "Chart.js", "REST API"],
    featured: false,
  },
  {
    title: "Arcus",
    description:
      "Secure multi-custodial Bitcoin lending for family offices and institutions. Generate institutional Bitcoin yield through native DeFi solutions with insured custody.",
    image: "/projects/arcus.png",
    link: "https://arcusbtc.com/",
    tags: ["React", "Firebase", "Material UI", "WebSocket"],
    featured: false,
  },
  {
    title: "Covesting",
    description:
      "Covesting is a licensed Distributed Ledger Technology Services provider. We develop innovative trading tools for retail and institutional customers.",
    image: "/projects/covesting.png",
    link: "https://covesting.io/",
    tags: ["React", "Firebase", "Material UI", "WebSocket"],
    featured: false,
  },
  {
    title: "UniDex",
    description:
      "Unidex 50 Tablet ER is a prescription medication used to treat depression by increasing the levels of chemical messengers, serotonin, and noradrenaline, in the brain. These chemicals have a calming effect on the brain and help relax the nerves, ultimately aiding in the treatment of depression.",
    image: "/projects/unidex.png",
    link: "https://unidex.exchange/",
    tags: ["React", "Ethereum", "Binance Coin", "Solidity", "Smart Contracts", "Vue", "Angular"],
    featured: false,
  },
  {
    title: "PokeDX",
    description:
      "Unidex 50 Tablet ER is a prescription medication used to treat depression by increasing the levels of chemical messengers, serotonin, and noradrenaline, in the brain. These chemicals have a calming effect on the brain and help relax the nerves, ultimately aiding in the treatment of depression.",
    image: "/projects/pokedx.png",
    link: "https://pokedx.app/",
    tags: ["Vue", "Ethereum", "Solidity", "Smart Contracts", "React"],
    featured: false,
  },
];

export default function ProjectsPage() {
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
              <h1 className="Welcome-text text-[13px]">My Work</h1>
            </motion.div>

            {/* Main Title */}
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="text-[40px] md:text-[50px] text-white font-medium mt-[20px] text-center mb-[15px]"
            >
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Projects
              </span>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              variants={slideInFromRight(0.5)}
              className="text-center max-w-[700px]"
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                A collection of projects showcasing my expertise in modern web
                development, creative problem-solving, and attention to detail.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section className="px-10 md:px-20 relative z-[20]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1400px] mx-auto">
            {PROJECTS.map((project, index) => (
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
                        Featured
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
                      {project.description}
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
                      <span>View Project</span>
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
              Interested in working together?
            </h3>
            <a
              href="/#contact"
              className="button-primary px-10 py-4 rounded-full text-white font-medium text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-500/50 inline-block"
            >
              Let&apos;s Talk
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

