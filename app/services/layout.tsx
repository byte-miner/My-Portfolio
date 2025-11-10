import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional web development and blockchain services by Haruki Nakamura. Offering full stack development, Web3 integration, smart contract development, UI/UX design, API development, and DevOps solutions.",
  keywords: [
    "Web development services",
    "Blockchain development services",
    "Full stack developer for hire",
    "Web3 development",
    "Smart contract development",
    "React development services",
    "Next.js development",
    "TypeScript development",
    "UI/UX design services",
    "API development",
    "DevOps services",
  ],
  openGraph: {
    title: "Services | Haruki Nakamura",
    description: "Professional web development and blockchain services",
    type: "website",
  },
};

export default function ServicesLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}

