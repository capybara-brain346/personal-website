import React from "react";
import { ChipList, SkillCategory } from "./Chips";

const skills: { [key in SkillCategory]: string[] } = {
  languages: ["Python", "Java", "SQL", "C++"],
  frameworks: ["FastAPI", "Flask", "Langchain", "Django", "Spring Boot"],
  backend: ["REST APIs", "Microservices"],
  databases: ["Postgres", "MongoDB", "MySQL"],
  practices: ["Git", "GitHub"],
  cicd: [
    "Docker",
    "Vercel",
    "Supabase",
    "Neon",
    "Render",
    "GitHub Actions",
    "GCP",
  ],
};

const Skills: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-black">Skills</h2>

      {(Object.entries(skills) as [SkillCategory, string[]][]).map(
        ([category, items]) => (
          <div key={category} className="mb-4">
            <h4 className="text-xl font-semibold mb-2 text-black capitalize">
              {category === "cicd" ? category.toUpperCase() : category}
            </h4>
            <ChipList items={items} category={category} />
          </div>
        )
      )}

    </div>
  );
};

export default Skills;
