"use client";
import React, { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from '../components/Experience';
import Projects from "../components/Projects";
import ClubExperience from "../components/ClubExperience";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Achievements from "@/components/Achievements";
import { FaArrowUp } from "react-icons/fa";
import { Pointer } from "@/components/magicui/pointer";
import { NyanProgress } from "@/components/ui/nyan-progress";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-neutral-920 text-white">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col min-h-screen">
        <main className="p-4 max-w-screen-sm mx-auto flex-grow">
          <AnimatedSection delay={0}>
            <div className="mb-8">
              <Header />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}><About /></AnimatedSection>
          <AnimatedSection delay={0.2}><Skills /></AnimatedSection>
          <AnimatedSection delay={0.3}><Experience /></AnimatedSection>
          <AnimatedSection delay={0.4}><Education /></AnimatedSection>
          <AnimatedSection delay={0.5}><Projects /></AnimatedSection>
          <AnimatedSection delay={0.6}><ClubExperience /></AnimatedSection>
          <AnimatedSection delay={0.7}><Achievements /></AnimatedSection>
          <AnimatedSection delay={0.8}><Footer /></AnimatedSection>
        </main>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:flex lg:hidden flex-col min-h-screen">
        <main className="p-6 max-w-3xl mx-auto flex-grow">
          <AnimatedSection delay={0}>
            <div className="mb-8">
              <Header />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}><About /></AnimatedSection>
          <AnimatedSection delay={0.2}><Skills /></AnimatedSection>
          <AnimatedSection delay={0.3}><Experience /></AnimatedSection>
          <AnimatedSection delay={0.4}><Education /></AnimatedSection>
          <AnimatedSection delay={0.5}><Projects /></AnimatedSection>
          <AnimatedSection delay={0.6}><ClubExperience /></AnimatedSection>
          <AnimatedSection delay={0.7}><Achievements /></AnimatedSection>
          <AnimatedSection delay={0.8}><Footer /></AnimatedSection>
        </main>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block min-h-screen">
        <Pointer>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="among-us" className="w-10 h-10">
            <g>
              <path fill="#770a39" d="M11.27 31a2.11 2.11 0 0 1-2.37-1.92c-.16-4-.42-16.18.58-24.55a4 4 0 0 1 4-3.53h4.93a8 8 0 0 1 8 7.73c.16 5.88.08 13.89-.25 19.4a2 2 0 0 1-2 1.87h-1.89A2.07 2.07 0 0 1 20 28v-4h-4v4a3 3 0 0 1-3 3Z"></path>
              <path fill="#770a39" d="M9.13 8v.11C9 9.27 9 10.47 8.91 11.72c-.15 3.11-.2 8.54-.15 12.26H5.84a2 2 0 0 1-2-1.87 77.13 77.13 0 0 1 .06-9.76c.09-1 .21-1.88.37-2.73A2 2 0 0 1 6.24 8h2.85Z"></path>
              <path fill="#c01701" d="M9.13 8v.11C9 9.27 9 10.47 8.91 11.72V12h-2.8a2 2 0 0 0-2 1.64c-.16.85-.28 1.77-.37 2.73v2.66c0-1.62 0-5.19.18-6.66.09-1 .21-1.88.37-2.73A2 2 0 0 1 6.24 8h2.85zm12.03 13H15.8c-1.8 0-3.39-3.17-3.89-4.89a34.61 34.61 0 0 1-1.05-13.34 1 1 0 0 1 .93-.77c1.67-.66 4.31-.64 7.13-.48a6.29 6.29 0 0 1 6.69 6.62l-.4 7.08c-.12 2.1-1.89 5.78-4.05 5.78z"></path>
              <path fill="#4a646d" d="M28.48 10.9a3.76 3.76 0 0 1-.8 2 3.62 3.62 0 0 1-2.58 1.35l-6.2.44h-.26a3.65 3.65 0 0 1-3.64-3.6V9a2 2 0 0 1 2-2h7.84a3.67 3.67 0 0 1 3.61 3.12 4.07 4.07 0 0 1 .03.78Z"></path>
              <path fill="#93c8da" d="M28.48 10.9a3.42 3.42 0 0 1-1.38.38l-6.2.44h-.26A3.65 3.65 0 0 1 17 8.09V7h7.84a3.67 3.67 0 0 1 3.61 3.12 4.07 4.07 0 0 1 .03.78Z"></path>
              <rect width="4.44" height="1.6" x="21.55" y="8.57" fill="#fff" rx=".8"></rect>
              <path d="M29.44 10A4.67 4.67 0 0 0 27 6.57 9.08 9.08 0 0 0 18.37 0h-4.93a5 5 0 0 0-4.95 4.41c-.11.86-.19 1.74-.27 2.59A1.43 1.43 0 0 0 8 7H6.24a3 3 0 0 0-3 2.46 65.54 65.54 0 0 0-.4 12.74 3 3 0 0 0 3 2.8h1.94c0 1.69.08 3.1.12 4.12A3.09 3.09 0 0 0 11.27 32H13a4 4 0 0 0 4-4v-3h2v3a3.08 3.08 0 0 0 3.27 3h1.85a3 3 0 0 0 3-2.81c.22-3.75.33-9.69.33-13.73a4.79 4.79 0 0 0 1-.9 4.7 4.7 0 0 0 .99-3.56ZM5.84 23a1 1 0 0 1-1-.94 62.15 62.15 0 0 1 .41-12.25 1 1 0 0 1 1-.81h1.81c-.29 4.22-.34 10.5-.31 14Zm19.28 5.07a1 1 0 0 1-1 .93h-1.85c-.76 0-1.27-.4-1.27-1v-3a1 1 0 0 0 0-2h-4a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-1.73c-.82 0-1.35-.37-1.37-1-.16-3.95-.43-16 .57-24.39a3 3 0 0 1 3-2.65h4.93a7 7 0 0 1 6.3 4H17a3 3 0 0 0-3 3v2.09a4.64 4.64 0 0 0 4.64 4.64H19l6.2-.44h.27c-.04 3.75-.14 9.35-.35 12.82Zm1.78-15.76a2.63 2.63 0 0 1-1.87 1l-6.2.44a2.57 2.57 0 0 1-2-.7 2.61 2.61 0 0 1-.83-1.96V9a1 1 0 0 1 1-1h7.84a2.65 2.65 0 0 1 2.06 4.31Z"></path>
            </g>
          </svg>
        </Pointer>
        <div className="max-w-[1440px] w-full mx-auto px-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Header Section - Spans 10 columns and centered */}
            <div className="col-span-12 xl:col-start-2 xl:col-span-10 mt-12">
              <AnimatedSection delay={0}>
                <Header />
              </AnimatedSection>
            </div>

            {/* Main Content */}
            <div className="col-span-12 xl:col-start-2 xl:col-span-10">
              <main className="py-12 space-y-16">
                <AnimatedSection delay={0.1}><About /></AnimatedSection>
                <AnimatedSection delay={0.2}><Skills /></AnimatedSection>
                <AnimatedSection delay={0.3}><Experience /></AnimatedSection>
                <AnimatedSection delay={0.4}><Education /></AnimatedSection>
                <AnimatedSection delay={0.5}><Projects /></AnimatedSection>
                <AnimatedSection delay={0.6}><ClubExperience /></AnimatedSection>
                <AnimatedSection delay={0.7}><Achievements /></AnimatedSection>
                <AnimatedSection delay={0.8}><Footer /></AnimatedSection>
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button - Single instance for all layouts */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 p-4 rounded-full bg-[#1a1a1a] border border-white/20 text-white transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-purple-500 hover:to-orange-500 ${showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        aria-label="Back to top"
      >
        <FaArrowUp className="h-5 w-5" />
      </button>

      {/* Nyan Cat Progress Bar */}
      <NyanProgress />
    </div>
  );
}
