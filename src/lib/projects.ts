import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDir = path.join(process.cwd(), "src/content/projects");

export function getAllSlugs() {
  if (!fs.existsSync(projectsDir)) {
    return [];
  }
  return fs.readdirSync(projectsDir).map((file) => file.replace(/\.md$/, ""));
}

export async function getProjectData(slug: string) {
  const filePath = path.join(projectsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    ...data,
    content,
  };
}

export type Project = {
  slug: string;
  title: string;
  description: string;
  thumbnail?: string;
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
  content: string;
};
