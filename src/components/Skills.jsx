import React from "react";

function Skills() {
  const Skills = [
    {
      icon: "fa-solid fa-globe",
      head: "Web Development",
      desc: "Singing, Dancing, Arts and Sports",
      skillSpan: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node",
        "Angular",
        "TypeScript",
        "Express",
      ],
    },
    {
      icon: "fa-solid fa-palette",
      head: "UI/UX Design",
      desc: "Singing, Dancing, Arts and Sports",
      skillSpan: ["Figma", "Responsive Design", "Webflow", "Prototyping"],
    },
    {
      icon: "fa-solid fa-code",
      head: "Other Languages",
      desc: "Singing, Dancing, Arts and Sports",
      skillSpan: ["Python", "Java"],
    },
    {
      icon: "fa-solid fa-database",
      head: "Databases",
      desc: "Singing, Dancing, Arts and Sports",
      skillSpan: ["SQL", "MongoDB"],
    },
  ];
  return (
    <>
      <div
        id="skills"
        className="skills bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-16 lg:px-32 text-center"
      >
        {/* Section Header */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Skills & Expertise
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
          A comprehensive overview of my technical skills and areas of expertise
        </p>

        {/* Skill Cards */}
        <div className="skill-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {Skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-transform transform hover:-translate-y-1 text-center"
            >
              <i className={`${skill.icon} text-4xl text-blue-600 mb-4`}></i>
              <h5 className="text-lg font-semibold text-gray-800 mb-4">
                {skill.head}
              </h5>
              <div className="skill-wrap flex flex-wrap justify-center gap-2">
                {skill.skillSpan.map((item, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Achievement */}
        <div className="recent bg-blue-100 py-8 px-6 rounded-2xl max-w-6xl mx-auto shadow-md">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">
            Recently Completed
          </h3>
          <p className="text-gray-700 mb-2">
            UI/UX Design Course — Enhancing my design skills and user experience
            understanding
          </p>
          <span className="inline-block mt-2 text-blue-600 font-semibold text-sm bg-white border border-blue-300 rounded-full px-4 py-1 shadow-sm">
            Certificate Earned
          </span>
        </div>
      </div>
    </>
  );
}
export default Skills;
