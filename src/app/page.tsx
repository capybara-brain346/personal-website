import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
// import Experience from '../components/Experience';
import Projects from "../components/Projects";
import SocialLinks from "../components/SocialLinks";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Script from "next/script";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen">
        <main className="p-6 max-w-screen-sm mx-auto flex-grow">
          <div className="mb-6">
            <Header />
            <div className="mt-6">
              <SocialLinks />
            </div>
            <div className="mt-6">
              <div className="flex justify-center">
                <div className="w-full max-w-[280px] md:max-w-[400px] aspect-[4/3] relative">
                  <Image
                    src="/f1.gif"
                    alt="F1 Car"
                    width={400}
                    height={300}
                    sizes="(max-width: 768px) 280px, 400px"
                    className="w-full h-full rounded-3xl object-cover border-2 rounded-3xl"
                    priority
                  />
                  <div className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-xl border-2 border-black backdrop-blur-sm">
                    ❤️ F1
                  </div>
                </div>
              </div>
            </div>
          </div>
          <About />
          <Skills />
          <Education />
          <Projects />
        </main>
        <Footer />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-col xl:flex-row min-h-screen">
        {/* Left Column (Header and Social Links) */}
        <div className="xl:fixed xl:w-2/5 h-screen p-8 xl:p-12 xl:pl-[10%] flex flex-col justify-between min-w-[300px] max-w-[800px]">
          <div>
            <Header />
            <div className="mt-6">
              <SocialLinks />
            </div>
            <div className="mt-6">
              <div className="flex justify-center">
                <div className="w-full max-w-[280px] md:max-w-[400px] aspect-[4/3] relative">
                  <Image
                    src="/f1.gif"
                    alt="F1 Car"
                    width={400}
                    height={300}
                    sizes="(max-width: 768px) 280px, 400px"
                    className="w-full h-full rounded-3xl object-cover border-2 rounded-3xl"
                    priority
                  />
                  <div className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-xl border-2 border-black backdrop-blur-sm">
                    ❤️ F1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column (Main Content) */}
        <div className="xl:ml-[40%] w-full xl:w-3/5 min-h-screen min-w-[500px] max-w-[1200px] mx-auto flex flex-col">
          <main className="p-8 xl:p-12 xl:pr-[10%] flex-grow">
            <About />
            <Skills />
            <Education />
            <Projects />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
