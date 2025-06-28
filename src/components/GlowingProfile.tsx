"use client";

import React from "react";
import Image from "next/legacy/image";

const GlowingProfile = () => {
  return (
    <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px]">
      {/* Outer glow */}
      <div className="absolute -inset-1 lg:-inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 rounded-full blur-md opacity-50" />

      {/* Gradient border */}
      <div className="absolute inset-0 rounded-full p-[2px] lg:p-[3px] bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500">
        {/* Inner gradient glow */}
        <div className="absolute inset-[1px] lg:inset-[2px] rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 blur-sm" />

        {/* Profile picture container */}
        <div className="relative w-full h-full overflow-hidden rounded-full bg-[#0A0A0A] ring-1 ring-white/10">
          <Image
            src="/profile-pic.png"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            priority
            className="relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default GlowingProfile;
