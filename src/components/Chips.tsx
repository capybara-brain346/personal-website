import React from "react";

export type SkillCategory =
  | "languages"
  | "frameworks"
  | "backend"
  | "databases"
  | "practices"
  | "cicd";

interface ChipProps {
  text: string;
  category: SkillCategory;
}

const categoryColors: Record<SkillCategory, { bg: string; text: string }> = {
  languages: { bg: "bg-blue-500", text: "text-black" },
  frameworks: { bg: "bg-green-500", text: "text-black" },
  backend: { bg: "bg-purple-500", text: "text-black" },
  databases: { bg: "bg-red-500", text: "text-black" },
  practices: { bg: "bg-yellow-500", text: "text-black" },
  cicd: { bg: "bg-orange-400", text: "text-black" },
};

export const Chip: React.FC<ChipProps> = ({ text, category }) => {
  const { bg, text: textColor } = categoryColors[category];
  return (
    <span
      className={`inline-block ${bg} bg-opacity-30 px-3 py-1.5 font-medium ${textColor} mr-2 mb-2 rounded-full`}
    >
      {text}
    </span>
  );
};

interface ChipListProps {
  items: string[];
  category: SkillCategory;
}

export const ChipList: React.FC<ChipListProps> = ({ items, category }) => (
  <div className="flex flex-wrap">
    {items.map((item, index) => (
      <Chip key={index} text={item} category={category} />
    ))}
  </div>
);
