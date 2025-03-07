"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Achievement {
    title: string;
    description: string;
    date: string;
    organization?: string;
    images: string[];
}

const achievements: Achievement[] = [
    {
        title: "Indovate AI Sprint Hackathon",
        description: "First Place 🏆",
        date: "2025",
        organization: "IEEE CIS CCEW",
        images: ["/Indovate-AI.jpg", "/Indovate-AI-2.jpg"]
    },
    {
        title: "Data Visualization Hackathon",
        description: "Second Place 🏆",
        date: "2024",
        organization: "Intellex AI Students Club",
        images: ["/Data-Visualization-Hackathon.jpg", "/Data-Visualization-Hackathon-2.jpg"]
    },
    {
        title: "VU Visionary Techfest Hackathon",
        description: "Fourth Place 🏆",
        date: "2024",
        organization: "Vishwakarma University",
        images: ["/VU-Hackathon.jpg", "/VU-Hackathon-2.jpg"]
    },
];

const Achievements: React.FC = () => {
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
        <section className="w-full max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-black bg-opacity-10 p-6 rounded-xl border-2 hover:border-blue-500 transition-all duration-300"
                    >
                        <div className="mb-4 w-full h-64 md:h-48 relative overflow-hidden rounded-lg">
                            <Slider {...sliderSettings}>
                                {achievement.images.map((image, imageIndex) => (
                                    <div key={imageIndex} className="relative h-64 md:h-48">
                                        <Image
                                            src={image}
                                            alt={`${achievement.title} - Image ${imageIndex + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                        <p className="text-gray-400 mb-3">{achievement.description}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500">
                            <span>{achievement.date}</span>
                            {achievement.organization && (
                                <span>{achievement.organization}</span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;