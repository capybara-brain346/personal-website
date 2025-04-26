import React from "react";
// import Image from "next/legacy/image";
import GlowingProfile from "./GlowingProfile";
import { SparklesText } from "@/components/magicui/sparkles-text";

const Header: React.FC = () => {
  return (
    <header className="bg-black bg-opacity-10 p-8 rounded-3xl border-2 flex flex-col items-center">
      <GlowingProfile />
      <SparklesText className="text-2xl sm:text-4xl sm:p-6"> Piyush Choudhari </SparklesText>
      <h2 className="text-base sm:text-lg text-gray-400 mb-2">AI & Backend Engineer</h2>
      <h2 className="text-base sm:text-lg text-gray-400">📍 Pune, India 🇮🇳</h2>
    </header>
  );
};

export default Header;
