"use client";
import React from "react";
import GlowingProfile from "./GlowingProfile";
import Silk from "@/components/ui/silk";

const Header: React.FC = () => {
  return (
    <header className="relative bg-black bg-opacity-10 p-8 rounded-3xl border-2 flex flex-col items-center overflow-hidden min-h-[300px]">
      {/* Silk background */}
      <div className="absolute inset-0 -z-10" style={{ minHeight: '300px', height: '100%' }}>
        <Silk
          speed={10}
          scale={1.5}
          color="#1a1a1a"
          noiseIntensity={1.2}
          rotation={0.2}
        />
      </div>

      <GlowingProfile />
      <h1 className="text-xl sm:text-3xl text-white mt-4 mb-2">Piyush Choudhari</h1>
      <h2 className="text-base sm:text-lg text-gray-400 mb-2">AI & Backend Engineer</h2>
      <h2 className="text-base sm:text-lg text-gray-400">📍 Pune, India 🇮🇳</h2>
    </header>
  );
};

export default Header;
