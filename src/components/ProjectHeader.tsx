import Link from "next/link";
import { Project } from "@/lib/projects";
import { Github, Globe } from "lucide-react";

export default function ProjectHeader({
    title,
    description,
    techStack,
    githubUrl,
    liveUrl,
}: Partial<Project>) {
    return (
        <div className="mb-8">
            <h1 className="text-4xl text-white font-bold mb-4">{title}</h1>
            <p className="text-lg text-white text-muted-foreground mb-4">{description}</p>

            {techStack && techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm text-white"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}

            <div className="flex gap-4">
                {githubUrl && (
                    <Link
                        href={githubUrl}
                        target="_blank"
                        className="flex items-center gap-2 hover:text-primary text-white"
                    >
                        <Github size={20} />
                        <span>View Source</span>
                    </Link>
                )}
                {liveUrl && (
                    <Link
                        href={liveUrl}
                        target="_blank"
                        className="flex items-center gap-2 hover:text-primary"
                    >
                        <Globe size={20} />
                        <span>Live Demo</span>
                    </Link>
                )}
            </div>
        </div>
    );
} 