import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/contexts/LanguageContext";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  // Structured Data for SEO (JSON-LD)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Haruki Nakamura",
    alternateName: "中村 晴輝",
    url: "https://harukinakamura.dev",
    image: "https://harukinakamura.dev/images/photo.png",
    jobTitle: "Full Stack Developer & Blockchain Specialist",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    description: "Expert Full Stack Developer specializing in React, Next.js, TypeScript, and Blockchain Development. Building innovative web applications with Web3, Solidity, Ethereum, and Solana.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tokyo",
      addressCountry: "Japan",
    },
    sameAs: [
      "https://github.com/byte-miner",
      "https://stackoverflow.com/users/31847039/haruki-nakamura",
      "https://dev.to/harukin399",
      "https://www.linkedin.com/in/haruki-nakamura-384669398/",
      "https://t.me/yourusername",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Blockchain Development",
      "Web3",
      "Solidity",
      "Ethereum",
      "Solana",
      "Smart Contracts",
      "Full Stack Development",
      "UI/UX Design",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Haruki Nakamura Portfolio",
    url: "https://harukinakamura.dev",
    description: "Professional portfolio of Haruki Nakamura, Full Stack Developer and Blockchain Specialist",
    author: {
      "@type": "Person",
      name: "Haruki Nakamura",
    },
    inLanguage: ["en", "ja", "es", "pt", "zh"],
  };

  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <LanguageProvider>
          <StarsCanvas />
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
