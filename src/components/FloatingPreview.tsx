"use client";
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingPreviewProps {
    isVisible: boolean;
    imageUrl: string;
    mousePosition: { x: number; y: number };
}

const FloatingPreview = ({ isVisible, imageUrl, mousePosition }: FloatingPreviewProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    const preview = (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed z-[99999] pointer-events-none"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{
                        left: `${mousePosition.x}px`,
                        top: `${mousePosition.y + 16}px`,
                        transform: 'translate(-50%, 0)',
                        transformOrigin: 'center top'
                    }}
                >
                    <motion.div
                        className="rounded-lg overflow-hidden shadow-2xl border-2 border-white bg-black/90 backdrop-blur-lg"
                        layoutId="preview"
                        style={{
                            margin: '0 auto',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <div className="p-1 bg-black flex justify-center items-center"> {/* Added flex centering */}
                            <img
                                src={imageUrl}
                                alt="Preview"
                                className="w-[600px] h-auto rounded-md object-contain" // Increased from 400px to 600px
                                loading="lazy"
                                style={{
                                    display: 'block',
                                    margin: '0 auto' // Center the image
                                }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return createPortal(preview, document.body);
};

export default FloatingPreview; 