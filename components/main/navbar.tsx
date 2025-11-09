'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { SOCIALS } from "@/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/locales/translations";
import { LanguageSwitcher } from "./language-switcher";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = getTranslation(language);

  const navLinks = [
    { title: t.nav.aboutMe, link: "/#about-me" },
    { title: t.nav.skills, link: "/#skills" },
    { title: t.nav.projects, link: "/projects" },
    { title: t.nav.services, link: "/services" },
  ];

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link
          href="/"
          className="flex items-center"
        >
          <div className="hidden md:flex md:selffont-bold ml-[10px] text-gray-300">{t.name}</div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[650px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-sm"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Language Switcher & Social Icons (Web) */}
        <div className="hidden md:flex flex-row items-center gap-5">
          <LanguageSwitcher />
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Language Switcher */}
          <div className="mb-4">
            <LanguageSwitcher />
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};