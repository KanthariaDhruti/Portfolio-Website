import React from "react";

function Services() {
  const services = [
    {
      icon: "fa-solid fa-code",
      head: "Web Development",
      desc: "Creating responsive and interactive web applications using HTML, CSS, JavaScript and libraries like Bootstrap and JavaScript libraries like React and Express and also Backend with Node.js",
      list: [
        "Responsive Design",
        "Interactive UI",
        "Cross-Browser Compatibility",
        "Performance Optimisation",
      ],
    },
    {
      icon: "fa-solid fa-palette",
      head: "UI/UX Design",
      desc: "Designing intuitive and visually appealing user interfaces with focus on user experience using Figma and Webflow.",
      list: ["Wireframing", "Prototyping", "User Friendly"],
    },
  ];
  return (
    <>
      <div
        id="services"
        className="services bg-gradient-to-b from-blue-50 to-white py-20 px-6 md:px-16 lg:px-32 text-center"
      >
        {/* Section Header */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Services & Expertise
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
          Offering comprehensive web development and design solutions as part of
          my learning journey
        </p>

        {/* Services Grid */}
        <div className="serv-box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="serv bg-white shadow-md rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-left"
            >
              <div className="text-blue-600 text-4xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h5 className="text-xl font-semibold text-gray-900 mb-3">
                {service.head}
              </h5>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {service.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="ready bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl py-8 px-8 max-w-6xl mx-auto shadow-lg">
          <h4 className="text-2xl font-bold mb-3">
            Ready to Start Your Project?
          </h4>
          <p className="text-blue-100 mb-8">
            I'm actively seeking internship opportunities and collaborative
            projects. Let's work together to bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              style={{ textDecoration: "none" }}
              className="ready-button bg-white text-blue-700 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-blue-100 transition-all"
            >
              Get In Touch
            </a>

            <a
              href="#projects"
              style={{ textDecoration: "none" }}
              className="ready-button bg-transparent border-2 border-white text-white font-semibold px-4 py-2 rounded-full hover:bg-white hover:text-blue-700 transition-all"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
