import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from '../components/Experience';
import Projects from "../components/Projects";
import ClubExperience from "../components/ClubExperience";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col min-h-screen">
        <main className="p-4 max-w-screen-sm mx-auto flex-grow">
          <div className="mb-8">
            <Header />
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

      {/* Tablet Layout */}
      <div className="hidden md:flex lg:hidden flex-col min-h-screen">
        <main className="p-6 max-w-3xl mx-auto flex-grow">
          <div className="mb-8">
            <Header />
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
      <div className="hidden lg:block min-h-screen">
        <div className="max-w-[1440px] w-full mx-auto px-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Header Section - Spans 10 columns and centered */}
            <div className="col-span-12 xl:col-start-2 xl:col-span-10 mt-12">
              <Header />
            </div>

            {/* Main Content */}
            <div className="col-span-12 xl:col-start-2 xl:col-span-10">
              <main className="py-12 space-y-16">
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
        </div>
      </div>
    </div>
  );
}
