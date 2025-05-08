import Link from "next/link";

export default function ProjectNotFound() {
    return (
        <div className="container max-w-4xl mx-auto px-6 py-12 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
                The project you're looking for doesn't exist or has been moved.
            </p>
            <Link
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90"
            >
                Return Home
            </Link>
        </div>
    );
} 