import React from 'react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/components/Projects';

interface ProjectPageProps {
    params: {
        slug: string;
    }
}

const ProjectPage = ({ params }: ProjectPageProps) => {
    const project = projects.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === params.slug);

    if (!project) {
        notFound();
    }

    const YouTubeEmbed = ({ url }: { url: string }) => {
        // Extract video ID from various YouTube URL formats
        const getYouTubeVideoId = (url: string) => {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = url.match(regExp);
            return (match && match[2].length === 11) ? match[2] : null;
        };

        const videoId = getYouTubeVideoId(url);
        if (!videoId) return null;

        return (
            <div className="relative w-full pt-[56.25%] mb-8">
                <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center mb-8 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back to Home
                </Link>

                <div className="mb-8">
                    <Image
                        src={project.image}
                        alt={project.name}
                        width={800}
                        height={400}
                        className="rounded-lg shadow-xl"
                    />
                </div>

                <h1 className="text-4xl font-bold text-white mb-4">{project.name}</h1>

                <div className="flex gap-4 mb-8">
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                            </svg>
                            GitHub
                        </a>
                    )}
                </div>

                {project.demoVideo && (
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Demo Video</h2>
                        <YouTubeEmbed url={project.demoVideo} />
                    </div>
                )}

                <div className="prose prose-invert max-w-none">
                    <ReactMarkdown
                        components={{
                            img: ({ src, alt }) => (
                                <Image
                                    src={src || ''}
                                    alt={alt || ''}
                                    width={800}
                                    height={400}
                                    className="rounded-lg"
                                />
                            )
                        }}
                    >
                        {project.longDescription || project.description.join('\n\n')}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage; 