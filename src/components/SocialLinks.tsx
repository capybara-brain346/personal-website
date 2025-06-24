// SocialLinks.tsx
"use client";
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import ResumeButton from "../components/ResumeButton";
import Silk from "@/components/ui/silk";

const SocialLinks: React.FC = () => {
  return (
    <div className="relative flex flex-row justify-center items-center space-x-4 sm:space-x-4 border-2 bg-black bg-opacity-10 p-2 sm:p-4 rounded-3xl overflow-hidden min-h-[80px]">
      {/* Silk background */}
      <div className="absolute inset-0 -z-10" style={{ minHeight: '80px', height: '100%' }}>
        <Silk
          speed={10}
          scale={0.7}
          color="#1a1a1a"
          noiseIntensity={0.8}
          rotation={0.1}
        />
      </div>

      <ResumeButton />
      <div className="group relative z-10">
        <a
          href="https://github.com/capybara-brain346"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-125 hover:rotate-12"
        >
          <FaGithub size={24} />
        </a>
      </div>

      <div className="group relative z-10">
        <a
          href="mailto:choudhari.piyush@gmail.com"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-125 hover:rotate-12"
        >
          <FaEnvelope size={24} />
        </a>
      </div>

      <div className="group relative z-10">
        <a
          href="https://x.com/piyush_yip"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-125 hover:rotate-12"
        >
          <FaXTwitter size={24} />
        </a>
      </div>
      <div className="group relative z-10">
        <a
          href="https://www.linkedin.com/in/piyush-choudhari/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-transform transform hover:scale-125 hover:rotate-12"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
