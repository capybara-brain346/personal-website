'use client';

import { FaGithub } from "react-icons/fa";

interface GitHubLinkProps {
    href: string;
}

export default function GitHubLink({ href }: GitHubLinkProps) {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="inline-block">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                onClick={handleClick}
            >
                <FaGithub className="mr-2" />
                <span>GitHub</span>
            </a>
        </div>
    );
} 