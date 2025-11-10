import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL("https://harukinakamura.dev"), // Replace with your actual domain
  title: {
    default: "Haruki Nakamura | Full Stack Developer & Blockchain Specialist",
    template: "%s | Haruki Nakamura"
  },
  description: "Haruki Nakamura (中村 晴輝) - Expert Full Stack Developer specializing in React, Next.js, TypeScript, and Blockchain Development. Building innovative web applications with Web3, Solidity, Ethereum, and Solana. Based in Tokyo, Japan.",
  keywords: [
    "Haruki Nakamura",
    "中村 晴輝",
    "Full Stack Developer",
    "Blockchain Developer",
    "Web3 Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Solidity Developer",
    "Ethereum Developer",
    "Solana Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Tokyo",
    "Software Engineer Japan",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Blockchain",
    "Web3",
    "Solidity",
    "Ethereum",
    "Solana",
    "Smart Contracts",
    "DeFi",
    "NFT Development",
    "Tailwind CSS",
    "UI/UX Design",
    "API Development",
    "Full Stack Development",
    "Portfolio Haruki Nakamura",
    "Tokyo Developer",
    "Japan Developer",
  ] as Array<string>,
  authors: {
    name: "Haruki Nakamura",
    url: "https://github.com/byte-miner",
  },
  creator: "Haruki Nakamura",
  publisher: "Haruki Nakamura",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ja_JP", "es_ES", "pt_BR", "zh_CN"],
    url: "https://harukinakamura.dev",
    siteName: "Haruki Nakamura Portfolio",
    title: "Haruki Nakamura | Full Stack Developer & Blockchain Specialist",
    description: "Expert Full Stack Developer specializing in React, Next.js, TypeScript, and Blockchain Development. Building innovative web applications with Web3, Solidity, Ethereum, and Solana.",
    images: [
      {
        url: "/images/photo.png",
        width: 1200,
        height: 630,
        alt: "Haruki Nakamura - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haruki Nakamura | Full Stack Developer & Blockchain Specialist",
    description: "Expert Full Stack Developer specializing in React, Next.js, TypeScript, and Blockchain Development.",
    creator: "@harukinakamura", // Replace with your Twitter handle
    images: ["/images/photo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://harukinakamura.dev",
    languages: {
      "en-US": "https://harukinakamura.dev",
      "ja-JP": "https://harukinakamura.dev",
      "es-ES": "https://harukinakamura.dev",
      "pt-BR": "https://harukinakamura.dev",
      "zh-CN": "https://harukinakamura.dev",
    },
  },
  category: "technology",
} as const;
