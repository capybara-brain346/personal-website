````markdown
# 📁 Dev Plan: Project Pages for Portfolio Site (Next.js)

## 🧠 Objective

Create separate pages for each project listed on the portfolio homepage using Next.js. Each page will showcase project-specific content such as description, tech stack, images, links, and additional details. The structure should be easy to maintain, SEO-optimized, and AI-tooling friendly.

---

## ✅ Assumptions

- Each project is uniquely identified by a `slug`.
- Project metadata is stored in a JSON or Markdown-based CMS approach.
- Content will be statically generated for fast load times (SSG).
- Site is deployed on **Vercel**.

---

## 🗂️ Folder Structure

```bash
/app
  /projects
    /[slug]
      page.tsx          # Dynamic project page
      ProjectPage.tsx   # UI logic
    project-data.ts     # Array of project metadata (slugs, titles, etc.)
/content
  /projects
    project-name-1.md
    project-name-2.md
    ...
/components
  ProjectHeader.tsx
  ProjectTechStack.tsx
  ProjectGallery.tsx
  ...
```
````

---

## ⚙️ Dynamic Routing

Use Next.js dynamic route `/projects/[slug]/page.tsx` to load content:

```tsx
// /app/projects/[slug]/page.tsx
import { getProjectData, getAllSlugs } from "@/lib/projects";
import ProjectPage from "./ProjectPage";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const project = await getProjectData(params.slug);
  return <ProjectPage project={project} />;
}
```

---

## 🧾 Utility: `getProjectData.ts`

```ts
// /lib/projects.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDir = path.join(process.cwd(), "content", "projects");

export function getAllSlugs() {
  return fs.readdirSync(projectsDir).map((file) => file.replace(/\.md$/, ""));
}

export async function getProjectData(slug: string) {
  const filePath = path.join(projectsDir, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    ...data,
    content,
  };
}
```

---

## 🧩 ProjectPage Component

```tsx
// /app/projects/[slug]/ProjectPage.tsx
import { MDXRemote } from "next-mdx-remote/rsc";
import ProjectHeader from "@/components/ProjectHeader";

export default function ProjectPage({ project }: { project: any }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <ProjectHeader {...project} />
      <article className="prose prose-neutral dark:prose-invert">
        <MDXRemote source={project.content} />
      </article>
    </div>
  );
}
```

---

## 🎨 Styling Assumptions

- Use Tailwind CSS for styling.
- Use `prose` classes from Tailwind Typography for markdown formatting.

---

## 🚀 Deployment

- Ensure static generation (SSG) with `generateStaticParams`.
- Use image optimization for project thumbnails.
- Deploy to Vercel with preview environments for each project branch.

---

## 🔍 SEO & Metadata

Use `generateMetadata()` in `page.tsx`:

```ts
export async function generateMetadata({ params }) {
  const project = await getProjectData(params.slug);
  return {
    title: `${project.title} | Your Name`,
    description: project.description,
    openGraph: {
      images: [project.thumbnail],
    },
  };
}
```

---

## 🧠 AI Coding Tool Context Summary

- Project content is stored in `/content/projects/*.md`.
- Each project is mapped to a route `/projects/[slug]`.
- Metadata is extracted using `gray-matter`.
- Pages use MDX rendering for flexibility.
- Static generation ensures speed and SEO.
- All components follow a modular and composable pattern.

```

```
