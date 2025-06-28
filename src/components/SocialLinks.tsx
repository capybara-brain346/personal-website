// SocialLinks.tsx
"use client";
import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const SocialLinks: React.FC = () => {
  const getIconSize = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024 ? 22 : 18;
    }
    return 18;
  };

  const buttonClass = "bg-transparent border-[#1a1a1a] hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:via-purple-500 hover:to-orange-500 transition-all duration-300 lg:h-12 lg:w-12";

  return (
    <div className="flex items-center gap-2 lg:gap-3">
      <Button variant="outline" size="icon" asChild className={buttonClass}>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <svg width={getIconSize()} height={getIconSize()} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 hover:text-white transition-colors">
            <path d="M23 12L1 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 4L1 12L9 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </Button>

      <Button variant="outline" size="icon" asChild className={buttonClass}>
        <a href="mailto:example@email.com" aria-label="Email">
          <FaEnvelope size={getIconSize()} className="text-gray-400 hover:text-white transition-colors" />
        </a>
      </Button>

      <Button variant="outline" size="icon" asChild className={buttonClass}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaXTwitter size={getIconSize()} className="text-gray-400 hover:text-white transition-colors" />
        </a>
      </Button>

      <Button variant="outline" size="icon" asChild className={buttonClass}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={getIconSize()} className="text-gray-400 hover:text-white transition-colors" />
        </a>
      </Button>
    </div>
  );
};

export default SocialLinks;
