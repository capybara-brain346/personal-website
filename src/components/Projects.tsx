import React from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  name: string;
  description: string[];
  technologies: string[];
  image: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    name: "AtjBot",
    description: [
      "Developed a Retrieval-Augmented Generation based chatbot for the official website of Department Of Justice India.",
    ],
    technologies: [
      "Python",
      "Langchain",
      "Flask",
      "React",
      "Webscraping",
      "Dockers",
    ],
    image: "/projects/atjbot.png",
    githubLink: "https://github.com/capybara-brain346/atjbot",
  },
  {
    name: "Mars Weather Data ETL Pipeline",
    description: [
      "An automated ETL pipeline that extracts Mars weather data from NASA's InSight API, transforms it using Java, and loads it into MongoDB for analysis.☄️",
    ],
    technologies: [
      "Java",
      "MongoDB",
      "MySQL",
      "JDBC",
      "Apache Airflow",
      "Dockers",
    ],
    image: "/projects/MarsETL.png",
    githubLink: "https://github.com/capybara-brain346/Mars-Data-ETL-Pipeline",
  },
  {
    name: "RecycleNet18",
    description: [
      "RecycleNet is a deep learning-based project designed to classify images of recyclable items into 30 distinct categories. 📦",
    ],
    technologies: ["Python", "Streamlit", "Pytorch", "Ollama", "Langchain"],
    image: "/projects/recyclenet.png",
    githubLink: "https://github.com/capybara-brain346/RecycleNet18",
  },
  {
    name: "pokedex-api",
    description: [
      "Retrieve comprehensive data on your favorite Pokémon with this Restful API. 🌟 ",
    ],
    technologies: ["Python", "FastAPI", "Sqlite3", "Pytest"],
    image: "/projects/pokemon.jpg",
    githubLink: "https://github.com/capybara-brain346/pokedex-api",
  },
  {
    name: "SAP Stocks",
    description: [
      "This application provides real-time insights into stock performance, company news, and market trends through an intuitive interface and AI-powered chatbot. ⚙️",
    ],
    technologies: ["Python", "React", "Flask", "Langchain", "Ollama"],
    image: "/projects/sap_stocks.png",
    githubLink: "https://github.com/capybara-brain346/SAP-Stocks",
  },
  {
    name: "AI Based Resume Screener",
    description: [
      "An AI-powered resume screener built using Python, React, Flask, Langchain, ChromaDB, and the Gemini API. 🤖 ",
    ],
    technologies: ["Python", "React", "Flask", "Langchain"],
    image: "/projects/resume-screener.jpg",
    githubLink: "https://github.com/capybara-brain346/resume-screener-ai",
  },
];

const Projects: React.FC = () => {
  return (
    <>
      <section id="projects" className="py-4 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-100">Projects</h2>
        <ul className="space-y-12">
          {projects.map((project, index) => (
            <li
              key={index}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600"
            >
              <ProjectCard {...project} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Projects;
