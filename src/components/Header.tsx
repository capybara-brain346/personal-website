import React from "react";
// import Image from "next/legacy/image";
import GlowingProfile from "./GlowingProfile";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-300 p-8 rounded-3xl flex flex-col items-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
      <GlowingProfile />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-2">Piyush Choudhari</h1>
      <h2 className="text-base sm:text-lg text-gray-400 mb-2">AI & Backend Engineer</h2>
      <h2 className="text-base sm:text-lg text-gray-400">📍 Pune, India 🇮🇳</h2>
    </header>
  );
};

export default Header;
