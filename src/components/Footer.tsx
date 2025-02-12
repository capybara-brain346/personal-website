import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer: React.FC = () => {
  return (
    <footer className="text-black py-6 mt-12">
      <div className="container mx-auto px-4">
        <Separator className="mb-6" />
        <div className="flex flex-col rounded-full items-center justify-center space-y-4">
          <p className="text-base p-2">
            Built with Next.js, Tailwind CSS, shadcn/ui and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
