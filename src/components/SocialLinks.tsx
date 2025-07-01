// SocialLinks.tsx
"use client";
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const SocialLinks: React.FC = () => {
  const getIconSize = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024 ? 22 : 18;
    }
    return 18;
  };

  const buttonClass = "bg-transparent border-transparent hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:via-purple-500 hover:to-orange-500 transition-all duration-300 lg:h-12 lg:w-12";

  return (
    <div className="flex items-center gap-2 lg:gap-3">
      <Button variant="outline" size="icon" asChild className={buttonClass}>
        <a href="https://www.linkedin.com/in/piyush-choudhari/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={getIconSize()} className="text-gray-400 hover:text-white transition-colors" />
        </a>
      </Button>

      <Button variant="outline" size="icon" asChild className={buttonClass}>
        <a href="https://github.com/capybara-brain346" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={getIconSize()} className="text-gray-400 hover:text-white transition-colors" />
        </a>
      </Button>

      <Button variant="outline" size="icon" asChild className={buttonClass}>
        <a href="mailto:choudhari.piyush@gmail.com" aria-label="Email">
          <FaEnvelope size={getIconSize()} className="text-gray-400 hover:text-white transition-colors" />
        </a>
      </Button>

      <Button variant="outline" size="icon" asChild className={buttonClass}>
        <a href="https://x.com/piyush_yip" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaXTwitter size={getIconSize()} className="text-gray-400 hover:text-white transition-colors" />
        </a>
      </Button>

    </div>
  );
};

export default SocialLinks;
