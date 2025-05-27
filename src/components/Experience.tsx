import React from 'react';
import Image from "next/legacy/image";
import { ChipList } from './Chips';

const experiences = [
  {
    title: "AI Engineer Intern",
    company: "Ronin Labs Pvt Limited",
    location: "India",
    period: "Jan 2025 - Present",
    description: [
      "Multi-Modal AI Development: Built image/video generation pipelines using Stable Diffusion models (SDXL, DreamShaper, RealVisXL, Flux1, epicRealism). Created advanced ComfyUI workflows and integrated RunwayML, FreePic, OpenCV, and ElevenLabs for post-processing and voice synthesis.",
      "Text-to-Video & Motion Effects: Implemented T2V models (AnimeDiff, DynamicCrafter, Step-Video T2V) and depth-based motion effects using Depth Anything v2 and DepthFlow.",
      "LLM Engineering & Generative Agents: Developed autonomous agents using LangGraph and multi-GPT pipelines. Fine-tuned LLaMA and OpenAI APIs for conversational AI and content generation.",
      "Semantic NLP & Document Processing: Designed semantic search systems with BERT, LLaMA 2, and regex heuristics. Used TrOCR for OCR and structured PDF extraction.",
      "Object Detection & AR Integration: Trained custom models (YOLOv8n/l, YOLOv11n, MobileNetV2) using Roboflow. Deployed real-time AR filters via Snap Lens Studio.",
      "API & Cloud Deployment: Delivered scalable REST APIs with Flask and Django. Deployed models on AWS (Lambda, SageMaker, API Gateway, PostgreSQL)."
    ],
    logo: "/orgs/ronin_labs.jpg",
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