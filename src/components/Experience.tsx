import React from 'react';
import Image from "next/legacy/image";
import { ChipList } from './Chips';

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  logo: string;
  skills: string[];
}

const experiences: Job[] = [
  {
    title: "AI Engineer Intern",
    company: "Ronin Labs Pvt Limited",
    location: "India",
    period: "Jan 2025 - Present",
    description: [
      "Multi-Modal AI Product Development: Developed high-quality image and video generation pipelines using Stable Diffusion models (SDXL, RealVisXL_V5.0_Lightning, DreamShaper, Flux1, epicRealism), combined with RunwayML, FreePic, and OpenCV for postprocessing. Integrated ElevenLabs for AI voiceovers.",
      "Advanced Video Generation Workflows: Implemented state-of-the-art text-to-video generation models including AnimeDiff, DynamicCrafter, and Step-Video T2V. Built depth-based motion effect pipelines using Depth Anything v2 and DepthFlow.",
      "Generative Agents & LLM Engineering: Built graph-based autonomous agents using LangGraph. Implemented multiple GPT models for context-aware reasoning. Fine-tuned Meta's LLaMA and OpenAI APIs for chatbots and content generation.",
      "Semantic NLP Systems: Designed semantic text matching system using BERT, LLaMA 2, and regex-based heuristics. Incorporated TrOCR for OCR-based PDF extraction and document retrieval.",
      "Object Detection & Deployment: Trained custom object detection models (YOLOv8n, YOLOv8l, YOLOv11n, MobileNetV2) using RoboFlow. Integrated YOLO models into Snap Lens Studio for real-time AR filters.",
      "Scalable API & Cloud Infrastructure: Deployed AI models via REST APIs with Flask and Django. Leveraged AWS services including Lambda, SageMaker, API Gateway, and PostgreSQL."
    ],
    logo: "/ronin_labs.jpg",
    skills: ["Python", "Flask", "Pytorch", "Huggingface", "LLMs", "Stable Diffusion", "Automatic1111", "Comfy UI", "Llama LLMs"]
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Experience</h2>
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
                <h3 className="text-2xl font-semibold text-gray-100">{job.title}</h3>
                <p className="text-lg underline text-gray-300">
                  <a href='https://www.linkedin.com/company/ronin-labs/' target="_blank" rel="noreferrer">
                    {job.company}, {job.location}
                  </a>
                </p>
                <p className="text-gray-400">{job.period}</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-300 mb-4">
              {job.description.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start">
                  <span className="mr-2 mt-1.5 text-gray-500">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <ChipList items={job.skills} category="frameworks" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;