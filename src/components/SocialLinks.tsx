// SocialLinks.tsx
"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import FloatingPreview from "./FloatingPreview";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SocialLinks: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activePreview, setActivePreview] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  // Add a debounced preview state
  const [previewTimeout, setPreviewTimeout] = useState<NodeJS.Timeout | null>(null);

  const getIconSize = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024 ? 22 : 18;
    }
    return 18;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (socialType: string) => {
    if (socialType !== 'email') {
      // Clear any existing timeout
      if (previewTimeout) {
        clearTimeout(previewTimeout);
      }
      // Set a small delay before showing the preview
      const timeout = setTimeout(() => {
        setActivePreview(socialType);
      }, 100); // 100ms delay
      setPreviewTimeout(timeout);
    }
  };

  const handleMouseLeave = () => {
    // Clear any existing timeout
    if (previewTimeout) {
      clearTimeout(previewTimeout);
    }
    setActivePreview(null);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (previewTimeout) {
        clearTimeout(previewTimeout);
      }
    };
  }, [previewTimeout]);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('choudhari.piyush@gmail.com');
    setEmailCopied(true);
    // Force the tooltip to show the "copied" state
    setTooltipOpen(true);

    setTimeout(() => {
      setEmailCopied(false);
      setTooltipOpen(false);
    }, 2000);
  };

  const buttonClass = "bg-transparent border-transparent hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-500 hover:via-purple-500 hover:to-orange-500 transition-all duration-300 lg:h-12 lg:w-12";

  return (
    <>
      <div
        className="flex items-center gap-2 lg:gap-3"
        onMouseMove={handleMouseMove}
      >
        <Button
          variant="outline"
          size="icon"
          asChild
          className={buttonClass}
          onMouseEnter={() => handleMouseEnter('linkedin')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="https://www.linkedin.com/in/piyush-choudhari/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={getIconSize()} className="text-gray-400 hover:text-white transition-colors" />
          </a>
        </Button>

        <Button
          variant="outline"
          size="icon"
          asChild
          className={buttonClass}
          onMouseEnter={() => handleMouseEnter('github')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="https://github.com/capybara-brain346" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={getIconSize()} className="text-gray-400 hover:text-white transition-colors" />
          </a>
        </Button>

        <Button
          variant="outline"
          size="icon"
          asChild
          className={buttonClass}
          onMouseEnter={() => handleMouseEnter('twitter')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="https://x.com/piyush_yip" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaXTwitter size={getIconSize()} className="text-gray-400 hover:text-white transition-colors" />
          </a>
        </Button>

        <TooltipProvider>
          <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen}>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={buttonClass}
                onClick={copyEmail}
                onMouseEnter={() => setTooltipOpen(true)}
                onMouseLeave={() => !emailCopied && setTooltipOpen(false)}
              >
                <FaEnvelope size={getIconSize()} className="text-gray-400 hover:text-white transition-colors" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm font-medium">
                {emailCopied ? 'Email copied!' : 'Copy email'}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <FloatingPreview
        isVisible={!!activePreview}
        imageUrl={activePreview ? `/previews/${activePreview}.png` : ''}
        mousePosition={mousePosition}
      />
    </>
  );
};

export default SocialLinks;
