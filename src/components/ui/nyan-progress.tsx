"use client";
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const NyanProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed bottom-11 left-8 z-50 hidden lg:flex items-center">
            <div className="relative h-8 w-[150px] bg-[#1a1a1a] rounded-full border border-white/20 overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 h-full w-full bg-white"
                    style={{ scaleX, transformOrigin: "left" }}
                />
            </div>
        </div>
    );
}; 