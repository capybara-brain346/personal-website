import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="mb-8 p-4 bg-red-200 border-2 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all"
    >
      <h2 className="text-3xl font-bold mb-6 text-black">About Me</h2>
      <p className="text-black text-xl mb-4">
        I&apos;m a 21-year-old Engineer pursuing a B.E Artificial Intelligence &
        Data Science Degree <a href="https://www.dypcoeakurdi.ac.in/" target="_blank" >@DYPCOE</a>.
        <br /><br />
        Currently working as an AI Engineer Intern <a href="https://www.linkedin.com/company/ronin-labs/" target="_blank" >@Ronin Labs</a>.
      </p>
    </section>
  );
};

export default About;
