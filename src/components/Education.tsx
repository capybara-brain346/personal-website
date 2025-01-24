import React from "react";
import Image from "next/legacy/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Engineering In Artificial Intelligence & Data Science",
    university: "D.Y.Patil College Of Engineering, Akurdi",
    period: "Nov 2022 - Present",
    image: "/dypcoe-image.jpg",
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="mb-12 p-4 bg-red-200 rounded-3xl border-2 border-black hover:shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-black">Education</h2>
      <ul className="space-y-6">
        {educationData.map((edu, index) => (
          <li
            key={index}
            className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600"
          >
            <div className="flex items-start mb-2">
              <div className="bg-white rounded-full p-2 mr-4 w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <Image
                  src={edu.image}
                  alt={`${edu.university} logo`}
                  width={80}
                  height={80}
                  className="object-contain w-12 h-12 sm:w-20 sm:h-20"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl sm:text-2xl font-semibold text-black">
                  {edu.degree}
                </h3>
                <p className="text-base sm:text-lg underline text-black">
                  <a href="https://www.dypcoeakurdi.ac.in/" target="_blank">
                    {edu.university}
                  </a>
                </p>
                <p className="text-sm sm:text-base text-black">
                  {edu.period}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
