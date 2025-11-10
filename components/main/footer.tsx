"use client";

import Link from "next/link";
import { 
  RxGithubLogo, 
  RxDiscordLogo,
  RxLinkedinLogo
} from "react-icons/rx";
import { 
  FaTelegram, 
  FaStackOverflow, 
  FaDev 
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/locales/translations";

export const Footer = () => {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const FOOTER_DATA = [
    {
      title: t.footer.developer,
      data: [
        {
          name: t.footer.github,
          icon: RxGithubLogo,
          link: "https://github.com/byte-miner",
        },
        {
          name: t.footer.stackoverflow,
          icon: FaStackOverflow,
          link: "https://stackoverflow.com/users/31847039/haruki-nakamura",
        },
        {
          name: t.footer.devCommunity,
          icon: FaDev,
          link: "https://dev.to/harukin399",
        },
        {
          name: t.footer.linkedin,
          icon: RxLinkedinLogo,
          link: "https://www.linkedin.com/in/haruki-nakamura-384669398/",
        },
      ],
    },
    {
      title: t.footer.connect,
      data: [
        {
          name: t.footer.email,
          icon: HiMail,
          link: "mailto:harukin399@gmail.com",
        },
        {
          name: t.footer.telegram,
          icon: FaTelegram,
          link: "https://t.me/yourusername",
        },
        {
          name: t.footer.discord,
          icon: RxDiscordLogo,
          link: "https://discord.gg/yourinvite",
        },
      ],
    },
    {
      title: t.footer.about,
      data: [
        {
          name: t.footer.aboutMe,
          icon: null,
          link: "/#about-me",
        },
        {
          name: t.footer.myProjects,
          icon: null,
          link: "/projects",
        },
        {
          name: t.footer.contactMe,
          icon: null,
          link: "/#contact",
        },
      ],
    },
  ];

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px]">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target={link.startsWith('http') ? "_blank" : undefined}
                  rel={link.startsWith('http') ? "noreferrer noopener" : undefined}
                  className="flex flex-row items-center my-[15px]"
                >
                  {Icon && <Icon />}
                  <span className="text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; {t.name} {new Date().getFullYear()}. {t.footer.copyright}.
        </div>
      </div>
    </div>
  );
};
