import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from '../components/Experience';
import Projects from "../components/Projects";
import ClubExperience from "../components/ClubExperience";
import SocialLinks from "../components/SocialLinks";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Achievements from "@/components/Achievements";
import Dither from '../components/ui/Dither/Dither';



export default function Home() {
  return (
    <div className="min-h-screen bg-[#181818] text-white">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col min-h-screen">
        <main className="p-6 max-w-screen-sm mx-auto flex-grow">
          <div className="mb-6">
            <Header />
            <div className="mt-6 mb-6">
              <SocialLinks />
            </div>
            <div style={{ width: '100%', height: '175px', position: 'relative' }} className="border-2 rounded-3xl overflow-hidden">
              <Dither
                waveColor={[0.5, 0.5, 0.5]}
                disableAnimation={false}
                enableMouseInteraction={true}
                mouseRadius={0.3}
                colorNum={4}
                waveAmplitude={0.3}
                waveFrequency={3}
                waveSpeed={0.05}
              />
            </div>
          </div>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <ClubExperience />
          <Achievements />
        </main>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:flex lg:hidden flex-col min-h-screen">
        <main className="p-8 max-w-3xl mx-auto flex-grow">
          <div className="mb-8">
            <Header />
            <div className="mt-6 mb-6">
              <SocialLinks />
            </div>
            <div style={{ width: '100%', height: '200px', position: 'relative' }} className="border-2 rounded-3xl overflow-hidden">
              <Dither
                waveColor={[0.5, 0.5, 0.5]}
                disableAnimation={false}
                enableMouseInteraction={true}
                mouseRadius={0.3}
                colorNum={4}
                waveAmplitude={0.3}
                waveFrequency={3}
                waveSpeed={0.05}
              />
            </div>
          </div>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <ClubExperience />
          <Achievements />
          <Footer />
        </main>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-col xl:flex-row min-h-screen">
        {/* Left Column (Header and Social Links) */}
        <div className="xl:fixed xl:w-2/5 h-screen p-8 xl:p-12 xl:pl-[10%] flex flex-col justify-between min-w-[300px] max-w-[800px]">
          <div>
            <Header />
            <div className="mt-6 mb-6">
              <SocialLinks />
            </div>
            <div style={{ width: '100%', height: '250px', position: 'relative' }} className="border-2 rounded-3xl overflow-hidden">
              <Dither
                waveColor={[0.5, 0.5, 0.5]}
                disableAnimation={false}
                enableMouseInteraction={true}
                mouseRadius={0.3}
                colorNum={4}
                waveAmplitude={0.3}
                waveFrequency={3}
                waveSpeed={0.05}
                pixelSize={1}
              />
            </div>
          </div>
        </div>
        {/* Right Column (Main Content) */}
        <div className="xl:ml-[40%] w-full xl:w-3/5 min-h-screen min-w-[500px] max-w-[1200px] mx-auto flex flex-col">
          <main className="p-8 xl:p-12 xl:pr-[10%] flex-grow">
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <ClubExperience />
            <Achievements />
            <Footer />
          </main>
        </div>
      </div>
    </div >
  );
}
