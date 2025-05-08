import { getProjectData, getAllSlugs } from "@/lib/projects";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectHeader from "@/components/ProjectHeader";
import { MDXRemote } from "next-mdx-remote/rsc";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const project = await getProjectData(params.slug);
    return {
      title: `${project.title} | Portfolio`,
      description: project.description,
      openGraph: project.thumbnail
        ? {
          images: [project.thumbnail],
        }
        : undefined,
    };
  } catch (error) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }
}

export default async function ProjectPage({ params }: PageProps) {
  try {
    const project = await getProjectData(params.slug);

    return (
      <div className="min-h-screen bg-[#0e0e0e]">
        <main className="container max-w-4xl mx-auto px-6 py-12">
          <ProjectHeader {...project} />
          <article className="prose prose-invert max-w-none [&>*]:text-gray-300 [&>h1]:text-gray-100 [&>h2]:text-gray-100 [&>h3]:text-gray-100 [&>h4]:text-gray-100">
            <MDXRemote source={project.content} />
          </article>
        </main>
      </div>
    );
  } catch (error) {
    notFound();
  }
} 