// ResumeButton.tsx
"use client";

import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ResumeButton: React.FC = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a
              href="https://drive.google.com/file/d/124C6O6aeoRX4TOs0gUv-N1jsel6bDmy_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileDownload size={18} />
              Resume
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Download my resume</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ResumeButton;
