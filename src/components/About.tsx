import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="mb-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">About Me</h2>
      <p className="text-gray-300 mb-4">
        I&apos;m a 21-year-old Engineer pursuing a B.E Artificial Intelligence &
        Data Science Degree <a href="https://www.dypcoeakurdi.ac.in/" target="_blank" className="underline">@DYPCOE</a>.
        Currently working as an AI Engineer Intern <a href="https://www.linkedin.com/company/ronin-labs/" target="_blank" className="underline">@Ronin Labs</a>.
        <br /><br />
      </p>
    </section>
  );
};

export default About;
