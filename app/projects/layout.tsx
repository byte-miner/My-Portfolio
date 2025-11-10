import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Haruki Nakamura's portfolio of web development and blockchain projects. Featuring innovative applications built with React, Next.js, TypeScript, Web3, Ethereum, and Solana.",
  keywords: [
    "Haruki Nakamura projects",
    "Web3 projects",
    "Blockchain projects",
    "React projects",
    "Next.js portfolio",
    "NFT marketplace",
    "DeFi applications",
    "Smart contract development",
    "Full stack projects",
  ],
  openGraph: {
    title: "Projects | Haruki Nakamura",
    description: "Explore my portfolio of innovative web and blockchain projects",
    type: "website",
  },
};

export default function ProjectsLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}

