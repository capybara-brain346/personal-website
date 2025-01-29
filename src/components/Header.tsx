import React from "react";
// import Image from "next/legacy/image";
import GlowingProfile from "./GlowingProfile";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-300 p-8 rounded-3xl border-2 border-black flex flex-col items-center hover:shadow-2xl">
      <GlowingProfile />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-2 bg-[#ffdfdf] rounded-full p-4 border-4 border-red-300">Piyush Choudhari</h1>
      <h2 className="text-xl sm:text-2xl text-black mt-4">AI & Backend Engineer</h2>
    </header>
  );
};

export default Header;
