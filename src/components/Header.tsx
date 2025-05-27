import React from "react";
import GlowingProfile from "./GlowingProfile";
import { SparklesText } from "@/components/magicui/sparkles-text";


const Header: React.FC = () => {
  return (
    <header className="bg-black bg-opacity-10 p-8 rounded-3xl border-2 flex flex-col items-center">

      <GlowingProfile />
      <h1 className="text-xl sm:text-3xl text-white mt-4 mb-2">Piyush Choudhari</h1>
      <h2 className="text-base sm:text-lg text-gray-400 mb-2">AI & Backend Engineer</h2>
      <h2 className="text-base sm:text-lg text-gray-400">📍 Pune, India 🇮🇳</h2>
    </header >
  );
};

export default Header;
