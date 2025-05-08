'use client';

import React from "react";
import Image from "next/image";
import { ChipList } from "./Chips";
import Link from "next/link";
import GitHubLink from "./GitHubLink";

interface ProjectCardProps {
    name: string;
    description: string[];
    technologies: string[];
    image: string;
    githubLink?: string;
}

export default function ProjectCard({ name, description, technologies, image, githubLink }: ProjectCardProps) {
    return (
        <div className="group">
            <div className="block">
                <Link
                    href={`/projects/${name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                    <div className="flex flex-col md:flex-row transition-transform duration-300 group-hover:scale-[1.02]">
                        <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6 relative">
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg z-10" />
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src={image}
                                    alt={name}
                                    fill
                                    className="rounded-lg object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                                    sizes="(max-width: 768px) 100vw, 300px"
                                />
                            </div>
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-2xl font-semibold mb-3 text-gray-100 group-hover:text-primary transition-colors duration-300">
                                {name}
                            </h3>
                            <ul className="space-y-2 text-gray-300 mb-4">
                                {description.map((point, pointIndex) => (
                                    <li key={pointIndex} className="flex items-start">
                                        <span className="mr-2 mt-1.5 text-gray-500">•</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                            <ChipList items={technologies} category="frameworks" />
                            <div className="flex space-x-4 mt-4">
                                {githubLink && <GitHubLink href={githubLink} />}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
} 