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
        images: ["/achievements/Indovate-AI.jpg", "/achievements/Indovate-AI-2.jpg"]
    },
    {
        title: "Data Visualization Hackathon",
        description: "Second Place 🏆",
        date: "2024",
        organization: "Intellex AI Students Club",
        images: ["/achievements/Data-Visualization-Hackathon.jpg", "/achievements/Data-Visualization-Hackathon-2.jpg"]
    },
    {
        title: "VU Visionary Techfest Hackathon",
        description: "Fourth Place 🏆",
        date: "2024",
        organization: "Vishwakarma University",
        images: ["/achievements/VU-Hackathon.jpg", "/achievements/VU-Hackathon-2.jpg"]
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
        autoplaySpeed: 3000,
        arrows: false,
        adaptiveHeight: false,
        pauseOnHover: true,
        dotsClass: "slick-dots",
        className: "h-full"
    };

    return (
        <section className="w-full pb-16">
            <h2 className="text-3xl font-bold mb-8">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-[#0A0A0A] p-6 rounded-xl border border-[#1a1a1a] hover:border-blue-500/50 transition-all duration-300 flex flex-col min-h-[520px] mb-8"
                    >
                        <div className="relative w-full h-[300px] mb-8 overflow-hidden rounded-lg bg-black">
                            <div className="slick-container h-full [&_.slick-slider]:!h-full [&_.slick-list]:!h-full [&_.slick-track]:!h-full [&_.slick-slide]:!h-full [&_.slick-slide>div]:!h-full">
                                <Slider {...sliderSettings}>
                                    {achievement.images.map((image, imageIndex) => (
                                        <div key={imageIndex} className="h-full">
                                            <div className="relative h-full w-full">
                                                <Image
                                                    src={image}
                                                    alt={`${achievement.title} - Image ${imageIndex + 1}`}
                                                    fill
                                                    className="object-contain"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    priority={index === 0}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-xl font-semibold mb-3 text-gray-100">{achievement.title}</h3>
                            <p className="text-lg font-medium text-blue-400 mb-4">{achievement.description}</p>
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-400 mt-4 pt-4 border-t border-[#1a1a1a]">
                            <span>{achievement.date}</span>
                            {achievement.organization && (
                                <span className="text-right max-w-[60%]">{achievement.organization}</span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
            <style jsx global>{`
                .slick-dots {
                    bottom: -35px !important;
                }
                .slick-dots li {
                    margin: 0 4px !important;
                }
                .slick-dots li button:before {
                    color: #666 !important;
                    font-size: 8px !important;
                    opacity: 0.5;
                }
                .slick-dots li.slick-active button:before {
                    color: #fff !important;
                    opacity: 1;
                }
            `}</style>
        </section>
    );
};

export default Achievements;