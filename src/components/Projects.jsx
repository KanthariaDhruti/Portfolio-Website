import React from "react";

function Projects() {
  const Projects = [
    {
      img: "/busi-card.png",
      head: "Business Card Generator and Downloader",
      desc: "React mini project of a business card generator whene user can fill the details in the form and get a copy of the business card ",
      techSpan: ["React", "Javascript"],
    },
    {
      img: "/to-do-list.png",
      head: "To do list",
      desc: "A mini project of to do list made with react and javascript ",
      techSpan: ["React", "Javascript"],
    },
    {
      img: "/notes.png",
      head: "Write notes",
      desc: "MERN stack mini project",
      techSpan: ["MongoDB", "Express", "React", "Node"],
    },
    {
      img: "/chat.png",
      head: "ChatBot",
      desc: "UI/UX project made with figma and Webflow",
      techSpan: ["Figma", "Webflow"],
      link: "https://chatbot-bc1e03.webflow.io/",
      urlDesc: "Visit the site here",
    },
    {
      img: "/team.png",
      head: "Team App",
      desc: "A platform where a team can collab - a responsive UI made with Figma and Webflow",
      techSpan: ["Figma", "Webflow"],
      link: "https://dhrutis-team-app.webflow.io/",
      urlDesc: "Visit the site here",
    },
  ];
  return (
    <>
      <div
        id="projects"
        className="projects bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-16 lg:px-32 text-center"
      >
        {/* Section Header */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Featured Projects
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
          A showcase of my recent development work and creative projects
        </p>

        {/* Project Cards */}
        <div className="project-flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {Projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-2 flex flex-col"
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.head}
                className="h-auto w-full object-contain"
              />

              {/* Card Info */}
              <div className="project-card-info flex-1 p-6 flex flex-col text-left">
                <h5 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.head}
                </h5>
                <p className="text-gray-600 mb-4">{project.desc}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium mb-4"
                >
                  {project.urlDesc}
                </a>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.techSpan.map((item, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <a
          href="https://github.com/KanthariaDhruti"
          target="_blank"
          style={{textDecoration:"none"}}
          rel="noopener noreferrer"
          className="inline-flex group rounded rounded-lg items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all shadow-md"
        >
          <i className="fa-brands fa-github text-xl group-hover:text-blue-600"></i>
          <span className="group-hover:text-blue-600">View More on GitHub</span>
        </a>
      </div>
    </>
  );
}
export default Projects;
