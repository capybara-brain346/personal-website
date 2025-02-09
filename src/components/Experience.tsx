import React from 'react';
import Image from "next/legacy/image";
import { ChipList } from './Chips';

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  // description: string[];
  logo: string;
  skills: string[];
}

const experiences: Job[] = [
  {
    title: "AI Engineer Intern",
    company: "Ronin Labs Pvt Limited",
    location: "India",
    period: "Jan 2025 - Present",
    // description: [
    //   "",
    // ],
    logo: "/ronin_labs.jpg",
    skills: ["Python", "Flask", "Pytorch", "Huggingface", "LLMs", "Stable Diffusion", "Automatic1111", "Comfy UI", "Llama LLMs"]
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-12 p-4 bg-red-200 rounded-3xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
      <h2 className="text-3xl font-bold mb-6 text-black">Experience</h2>
      <div className="space-y-6">
        {experiences.map((job, index) => (
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
                <h3 className="text-2xl font-semibold text-black"><a href='https://www.linkedin.com/company/ronin-labs/'>{job.title}</a></h3>
                <p className="text-lg text-black"><a href='https://www.linkedin.com/company/ronin-labs/' target="_blank">{job.company}, {job.location}</a></p>
                <p className="text-black">{job.period}</p>
              </div>
            </div>
            {/* <ul className="space-y-2 text-gray-300 mb-4">
              {job.description.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start">
                  <span className="mr-2 mt-1.5 text-gray-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul> */}
            <ChipList items={job.skills} category="frameworks" />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Experience;