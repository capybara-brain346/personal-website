"use client";
import React from "react";
import GlowingProfile from "./GlowingProfile";
import Silk from "@/components/ui/silk";
import SocialLinks from "./SocialLinks";

const Header: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-2">
      <header className="relative bg-[#0A0A0A] px-3 sm:px-4 py-3 rounded-[20px] border border-[#1a1a1a] overflow-hidden w-full animate-float">
        {/* Glow effect */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-t from-cyan-500/10 via-purple-500/10 to-orange-500/10 blur-2xl" />

        {/* Silk background */}
        <div className="absolute inset-0 -z-10 w-full h-full">
          <Silk
            speed={10}
            scale={1.5}
            color="#1a1a1a"
            noiseIntensity={0.8}
            rotation={0.2}
          />
        </div>

        {/* Content wrapper */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-center gap-4 sm:gap-0">
          {/* Profile and content group */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-6">
            {/* Profile */}
            <div className="flex-shrink-0">
              <GlowingProfile />
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-center items-center sm:items-start">
              <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 text-transparent bg-clip-text text-center sm:text-left">
                <h1 className="text-xl sm:text-2xl font-bold mb-0.5">Piyush Choudhari</h1>
              </div>
              <h2 className="text-gray-400 text-sm mb-2 text-center sm:text-left">AI & Backend Engineer</h2>

              {/* Social Links and Resume Button */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <div className="flex gap-1.5">
                  <SocialLinks />
                </div>
                <button
                  className="group relative px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-white/20 text-white text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:border-transparent"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <span className="relative z-10">Resume</span>
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
