"use client";
import React from "react";
import GlowingProfile from "./GlowingProfile";
import SocialLinks from "./SocialLinks";
import ResumeButton from "./ResumeButton";

const Header: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 pt-4">
      <header className="relative bg-white/[0.03] px-4 sm:px-6 py-4 rounded-[24px] border border-white/20 overflow-hidden w-full backdrop-blur-3xl backdrop-saturate-150 shadow-[inset_0_0_1px_rgba(255,255,255,0.2)] before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] before:opacity-[0.07] before:pointer-events-none">
        {/* Frosty background layers */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-t from-white/[0.15] via-white/[0.05] to-white/[0.15] blur-3xl opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/[0.15] via-purple-500/[0.15] to-orange-500/[0.15] blur-3xl opacity-60 animate-gradient-x" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/[0.1] via-purple-500/[0.1] to-orange-500/[0.1] blur-2xl opacity-40 animate-gradient-x" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />

        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center sm:justify-center gap-4 sm:gap-0">
          {/* Profile and content group */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-6">
            {/* Profile */}
            <div className="flex-shrink-0">
              <GlowingProfile />
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-center items-center sm:items-start">
              <div className="bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 text-transparent bg-clip-text animate-gradient-x">
                <h1 className="text-2xl sm:text-3xl font-bold mb-1">Piyush Choudhari</h1>
              </div>
              <h2 className="text-gray-400 text-sm sm:text-base mb-1 text-center sm:text-left">AI & Backend Engineer</h2>
              <p className="text-gray-400 text-sm mb-3 text-center sm:text-left">📍 Pune, Maharashtra</p>

              {/* Social Links and Resume Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex gap-2">
                  <SocialLinks />
                </div>
                <ResumeButton />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
