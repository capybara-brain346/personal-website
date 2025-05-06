"use client";

import React from "react";
import { ChipList } from "./Chips";
import Image from "next/image";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ClubRole {
    title: string;
    organization: string;
    period: string;
    description: string[];
    technologies: string[];
    projects: {
        name: string;
        description: string;
        github_url?: string;
    }[];
    testimonials: {
        images: string[];
        caption: string;
    }[];
}

const clubExperience: ClubRole[] = [
    {
        title: "AIML Team Lead",
        organization: "Intel AI Students Club",
        period: "2024 - 2025",
        description: [
            "Led a team of AI/ML enthusiasts in developing projects and organizing technical workshops.",
            "Mentored junior members in AI/ML concepts, computer vision, and LLM applications.",
            "Organized hands-on workshops and technical sessions on emerging AI technologies.",
        ],
        technologies: [
            "Python",
            "OpenCV",
            "MediaPipe",
            "Gemini LLM",
            "FastAPI",
            "Streamlit",
        ],
        projects: [
            {
                name: "Gesture-based TicTacToe",
                description: "Interactive game using computer vision with OpenCV and MediaPipe, featuring an AI opponent.",
                github_url: "https://github.com/IASC-DYPCOE/OpenCV-Tic-Tac-Toe"
            },
            {
                name: "AI Dungeon Master",
                description: "Dynamic D&D game utilizing Gemini LLM for story generation and character interactions.",
                github_url: "https://github.com/IASC-DYPCOE/LLM-Role-Playing-Game"
            },
        ],
        testimonials: [
            {
                images: ["/club/hacktoberfest_2.jpg", "/club/hacktoberfest_1.png"],
                caption: "Leading AI workshop sessions"
            },
            {
                images: ["/club/techfest_1.jpg", "/club/techfest_2.jpg"],
                caption: "Showcasing Games For Techfest"
            },
        ]
    },
];

const ClubExperience = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 650,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    };

    return (
        <section id="club-experience" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-100">Club Experience</h2>
            <div className="space-y-6">
                {clubExperience.map((role, index) => (
                    <div
                        key={index}
                        className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600"
                    >
                        <div className="flex-grow mb-6">
                            <h3 className="text-2xl font-semibold text-gray-100">
                                {role.title}
                            </h3>
                            <p className="text-lg text-gray-300">{role.organization}</p>
                            <p className="text-gray-400">{role.period}</p>
                        </div>

                        <ul className="space-y-2 text-gray-300 mb-4">
                            {role.description.map((point, pointIndex) => (
                                <li key={pointIndex} className="flex items-start">
                                    <span className="mr-2 mt-1.5 text-gray-500">•</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {role.testimonials.map((testimonial, idx) => (
                                <div key={idx} className="relative">
                                    <div className="relative h-48 mb-2">
                                        <Slider {...sliderSettings}>
                                            {testimonial.images.map((image, imageIndex) => (
                                                <div key={imageIndex} className="relative h-48">
                                                    <Image
                                                        src={image}
                                                        alt={`${testimonial.caption} - Image ${imageIndex + 1}`}
                                                        fill
                                                        className="rounded-lg object-contain scale-90"
                                                    />
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                    <p className="text-sm text-gray-400 text-center italic">
                                        {testimonial.caption}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mb-4">
                            <h4 className="text-xl font-semibold mb-3 text-gray-200">
                                Key Projects
                            </h4>
                            <ul className="space-y-3">
                                {role.projects.map((project, projectIndex) => (
                                    <li
                                        key={projectIndex}
                                        className="bg-black bg-opacity-10 p-4 rounded-lg border border-gray-800"
                                    >
                                        <h5 className="text-lg font-medium text-gray-100 mb-2">
                                            {project.name}
                                        </h5>
                                        <p className="text-gray-300 mb-4">{project.description}</p>
                                        {project.github_url && (
                                            <a
                                                href={project.github_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 hover:underline"
                                            >
                                                View on GitHub
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-2 text-gray-200">
                                Technologies Used
                            </h4>
                            <ChipList items={role.technologies} category="frameworks" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClubExperience;