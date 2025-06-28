"use client";
import React from "react";
import GlowingProfile from "./GlowingProfile";
import SocialLinks from "./SocialLinks";
import ResumeButton from "./ResumeButton";

const Header: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 pt-4">
      <header className="relative bg-white/[0.08] px-4 sm:px-6 py-4 rounded-[24px] border border-white/20 overflow-hidden w-full backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_0_0_1px_rgba(255,255,255,0.1)] before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] before:opacity-[0.05] before:pointer-events-none">
        {/* Glow effect */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-t from-cyan-500/20 via-purple-500/20 to-orange-500/20 blur-3xl opacity-40" />

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
              <div className="bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 text-transparent bg-clip-text text-center sm:text-left">
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
