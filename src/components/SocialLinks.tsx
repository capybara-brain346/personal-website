// SocialLinks.tsx
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import ResumeButton from "../components/ResumeButton";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center space-x-4 sm:space-x-4 border-2 border-black bg-blue-300 p-2 sm:p-4 rounded-3xl overflow-x-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
      <ResumeButton />
      <div className="group relative">
        <a
          href="https://github.com/capybara-brain346"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-white transition-transform transform hover:scale-125 hover:rotate-12"
        >
          <FaGithub size={24} />
        </a>
      </div>

      <div className="group relative">
        <a
          href="mailto:choudhari.piyush@gmail.com"
          className="text-black hover:text-white transition-transform transform hover:scale-125 hover:rotate-12"
        >
          <FaEnvelope size={24} />
        </a>
      </div>

      <div className="group relative">
        <a
          href="https://x.com/piyush_yip"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-white transition-transform transform hover:scale-125 hover:rotate-12"
        >
          <FaXTwitter size={24} />
        </a>
      </div>
      <div className="group relative">
        <a
          href="https://www.linkedin.com/in/piyush-choudhari/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-white transition-transform transform hover:scale-125 hover:rotate-12"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
