"use client";

import React, { useState } from 'react';
import Image from "next/legacy/image";
import { ChipList } from './Chips';

const experiences = [
  {
    title: "AI Engineer Intern",
    company: "Ronin Labs Pvt Limited",
    location: "India",
    period: "Jan 2025 - Present",
    description: [
      "Reelskit",
      "    Built an AI agent that automates video creation by combining chat input, video effects, and music — making content generation fast and interactive",
      "    Designed a web tool for editing and customizing videos using intuitive timeline controls and 3D video effects",
      "    Implemented smart image expansion features that let users enhance images beyond their original size, based on simple prompts",
      "    Created tools for applying animation and special effects to videos, driven by user settings and visual depth data",
      "    Integrated an AI music tool that generates background tracks based on visuals, making every video feel unique",
      "    Optimized the system's performance, keeping task processing times under 20 seconds end-to-end",
      "Sketchbot",
      "    Developed a system that turns user photos into artistic line drawings using AI models",
      "    Set up a Raspberry Pi to run this service locally with both the website and backend, making it accessible from anywhere",
      "    Simplified and modernized the server setup, cutting memory usage by over 35% and improving reliability",
      "    Shifted the backend to a more structured, scalable design and integrated cloud storage for better asset handling",
      "OnePlus13s Quiz",
      "    Built fast and reliable APIs for a global quiz contest with over 10,000 participants",
      "    Created an admin dashboard that allows non-technical staff to manage quiz content easily",
      "    Ensured the platform ran smoothly for users across the globe by managing the cloud database infrastructure",
      "Proof of Concepts (POCs)",
      "    Built a system that detects faces in live video using AWS tools, useful for smart surveillance or live video enhancement",
      "    Prototyped a webcam feature that transforms live video into AI-generated art in real time",
      "    Developed a pipeline to create 360° panoramic images using AI, useful for virtual tours and immersive experiences"
    ],
    logo: "/orgs/ronin_labs.jpg",
    skills: ["Python", "Flask", "Pytorch", "Huggingface", "LLMs", "Stable Diffusion", "Automatic1111", "Comfy UI", "Llama LLMs"]
  },
];

const Experience: React.FC = () => {
  const [expandedJobs, setExpandedJobs] = useState<{ [key: number]: boolean }>({});

  const toggleExpanded = (jobIndex: number) => {
    setExpandedJobs(prev => ({
      ...prev,
      [jobIndex]: !prev[jobIndex]
    }));
  };

  const getVisibleDescription = (description: string[], jobIndex: number, maxItems: number = 4) => {
    const isExpanded = expandedJobs[jobIndex];
    return isExpanded ? description : description.slice(0, maxItems);
  };

  const isMainTitle = (item: string) => {
    return !item.startsWith('    ');
  };

  const getCleanText = (item: string) => {
    return item.trim();
  };

  return (
    <section id="experience" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Experience</h2>
      <div className="space-y-6">
        {experiences.map((job, index) => {
          const visibleDescription = getVisibleDescription(job.description, index);
          const hasMoreItems = job.description.length > 4;
          const isExpanded = expandedJobs[index];

          return (
            <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
              <div className="flex items-start mb-2">
                <div className="bg-white rounded-full p-2 mr-4 w-24 h-24 flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="flex-grow mb-10">
                  <h3 className="text-2xl font-semibold text-gray-100">{job.title}</h3>
                  <p className="text-lg underline text-gray-300">
                    <a href='https://www.linkedin.com/company/ronin-labs/' target="_blank" rel="noreferrer">
                      {job.company}, {job.location}
                    </a>
                  </p>
                  <p className="text-gray-400">{job.period}</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-300 mb-4">
                {visibleDescription.map((point, pointIndex) => {
                  const isTitle = isMainTitle(point);
                  const cleanText = getCleanText(point);

                  if (isTitle) {
                    return (
                      <div key={pointIndex} className="mt-4 first:mt-0">
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">
                          {cleanText}
                        </h4>
                      </div>
                    );
                  } else {
                    return (
                      <div key={pointIndex} className="ml-4 flex items-start">
                        <span className="mr-2 mt-1.5 text-gray-500 text-xs">•</span>
                        <span className="text-gray-300 leading-relaxed">
                          {cleanText}
                        </span>
                      </div>
                    );
                  }
                })}
              </div>
              {hasMoreItems && (
                <button
                  onClick={() => toggleExpanded(index)}
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-4 text-sm font-medium"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              )}
              <ChipList items={job.skills} category="frameworks" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;