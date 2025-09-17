import React, { useState } from "react";
import emailjs, { sendForm } from "emailjs-com";
import "/src/App.css";
function Home() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_74wjdmh",
        "template_df44l8m",
        e.target,
        "dS7tWE4Ud1wj1gB0j"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  const abtCard = [
    {
      icon: "fa-solid fa-book-open",
      head: "Education",
      desc: "B.Tech IT Engineering, 7th semester",
    },
    {
      icon: "fa-solid fa-award",
      head: "Academic Performance",
      desc: "SGPA of 8.95 in latest semester",
    },
    {
      icon: "fa-solid fa-user-group",
      head: "Leaderhip",
      desc: "Ex-NCC Cadet with discipline & teamwork",
    },
    {
      icon: "fa-solid fa-heart",
      head: "Interests",
      desc: "Singing, Dancing, Arts and Sports",
    },
  ];

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

  const Projects = [
    {
      img: "/ticGame.png",
      head: "TIC TAC TOE Game",
      desc: "This project is a mini project in the form a game, made with the help of HTML, CSS, Javascript",
      techSpan: ["HTML", "CSS", "Javascript"],
    },
    {
      img: "/angular.png",
      head: "Angular Counter Game",
      desc: "This project is a mini project in the form a game, made with the help of Angular JS",
      techSpan: ["Angular JS", "Typescript"],
    },
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
      img:"/notes.png",
      head: "Write notes",
      desc:"MERN stack mini project",
      techSpan: ["MongoDB", "Express", "React", "Node"]
    }
  ];

  const services = [
    {
      icon: "fa-solid fa-code",
      head: "Web Development",
      desc: "Creating responsive and interactive web applications using HTML, CSS, JavaScript and libraries like Bootstrap and JavaScript libraries like React and Express and also Backend with Node.js",
      list: ["Responsive Design", "Interactive UI", "Cross-Browser Compatibility", "Performance Optimisation",
      ],
    },
    {
      icon: "fa-solid fa-palette",
      head: "UI/UX Design",
      desc: "Designing intuitive and visually appealing user interfaces with focus on user experience.",
      list: ["Wireframing", "Prototyping", "User Friendly"],
    },
  ];
  return (
    <>
      <div className="navibar">
        <div className="head">Dhruti Kantharia</div>
        <div className="navi-button">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div id="home" className="hero">
        <div>
          <p>Heyy! I am Dhruti</p>
          <h1 className="frontend">Frontend</h1>
          <h1>Web Developer</h1>
          <p>
            I'm a passionate web developer based in India, creating
            <br />
            beautiful and functional websites that users will love.
          </p>
          <a className="hero-btn" href="#contact">
            Get In Touch
          </a>
          <a className="hero-btn" href="#projects">
            Browse Projects
          </a>
          <a
            className="hero-icons"
            target="_blank"
            href="https://github.com/KanthariaDhruti"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            className="hero-icons"
            target="_blank"
            href="https://www.linkedin.com/in/dhruti-kantharia-759700255/"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            className="hero-icons"
            target="_blank"
            href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtswJrTJzwNcnglvVgPnCJXTMXRWxDhrqHCmNWfhBfXzCxQsHxvZtphhGRkztBHNTgjZxl"
          >
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
        <div>
          <img src="/dhrutiImg.jpg" alt="" />
        </div>
      </div>
      <div id="about" className="about">
        <h1>About me</h1>
        <p>
          Get to know more about my journey, passion, and aspirations in web
          development
        </p>
        <div className="about-flex">
          <div className="about-flex1">
            <h2>Hi, I'm Dhruti Kantharia!</h2>
            <p>
              I'm an aspiring web developer currently pursuing my B.Tech in IT
              Engineering at Gandhinagar University. With a passion for creating
              beautiful and functional websites, I'm constantly learning and
              improving my skills in web development and UI/UX design.
              <br />
              <br />
              Beyond coding, I'm a creative individual who loves expressing
              myself through singing, dancing, and various forms of art. My
              background as an ex-NCC cadet has instilled in me discipline,
              leadership qualities, and the ability to work effectively in
              teams.
              <br />
              <br />I recently completed a comprehensive UI/UX course to enhance
              my design skills and understanding of user experience principles.
              I'm actively seeking internship opportunities to apply my
              knowledge and contribute to meaningful projects while continuing
              to grow as a developer.
            </p>
          </div>
          <div className="about-flex2">
            <div className="abt-cards">
              {abtCard.map((card, index) => (
                <div key={index} className="abt-card">
                  <i className={card.icon}></i>
                  <h4>{card.head}</h4>
                  <p>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="skills" className="skills">
        <h1>Skills & Expertise</h1>
        <p>
          A comprehensive overview of my technical skills and areas of expertise
        </p>
        <div className="skill-cards">
          {Skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <i className={skill.icon}></i>
              <h5>{skill.head}</h5>
              <div className="skill-wrap">
                {skill.skillSpan.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="recent">
          <h3>Recently Completed</h3>
          <p>
            UI/UX Design Course - Enhancing my design skills and user experience
            understanding
          </p>
          <span>Certificate Earned</span>
        </div>
      </div>
      <div id="projects" className="projects">
        <h1>Featured Projects</h1>
        <p>A showcase of my recent development work and creative projects</p>
        <div className="project-flex">
          {Projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.img} alt={project.head} />
              <div className="project-card-info">
                <h5>{project.head}</h5>
                <p>{project.desc}</p>
                {project.techSpan.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button>
          <a
            style={{ textDecoration: "none", color: "#333" }}
            href="https://github.com/KanthariaDhruti"
            target="_blank"
          >
            <i class="fa-brands fa-github"></i> View More on Github
          </a>
        </button>
      </div>
      <div id="services" className="services">
        <h1>Services & Expertise</h1>
        <p>
          Offering comprehensive web development and design solutions as part of
          my learning journey
        </p>
        <div className="serv-box">
          {services.map((service, index) => (
            <div key={index} className="serv">
              <i class={service.icon}></i>
              <h5>{service.head}</h5>
              <p>{service.desc}</p>
              <ul>
                {service.list.map((item, i)=>(
                    <li key={i}>{item}</li>
                ))}
                
              </ul>
            </div>
          ))}
        </div>
        <div className="ready">
          <h4>Ready to Start Your Project?</h4>
          <p>
            I'm actively seeking internship opportunities and collaborative
            projects. Let's work together to bring your ideas to life!
          </p>
          <a className="ready-button" href="#contact">
            Get In Touch
          </a>
          <a className="ready-button" href="#projects">
            View my work
          </a>
        </div>
      </div>
      <div id="contact" className="connect">
        <h1>Let's Connect</h1>
        <p>
          Have a project in mind or interested in collaboration? I'd love to
          hear from you!
        </p>
        <div className="connect-flex">
          <div className="connect-left">
            <h4>Get In Touch</h4>
            <p>
              I'm actively seeking internship opportunities in web development
              and UI/UX design. Whether you have a project proposal,
              collaboration idea, or just want to connect, I'm always excited to
              meet new people and explore new opportunities.
            </p>
            <div className="socials">
              <div className="sym">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p>Email</p>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtswJrTJzwNcnglvVgPnCJXTMXRWxDhrqHCmNWfhBfXzCxQsHxvZtphhGRkztBHNTgjZxl"
                  target="_blank"
                >
                  kanthariadhruti@gmail.com
                </a>
              </div>
            </div>
            <div className="socials">
              <div className="sym">
                <i class="fa-brands fa-linkedin"></i>
              </div>
              <div>
                <p>LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/dhruti-kantharia-759700255/"
                  target="_blank"
                >
                  Connect with me
                </a>
              </div>
            </div>
            <div className="socials">
              <div className="sym">
                <i class="fa-brands fa-github"></i>
              </div>
              <div>
                <p>GitHub</p>
                <a href="https://github.com/KanthariaDhruti" target="_blank">
                  View my Repositories
                </a>
              </div>
            </div>
            <div className="socials">
              <div className="sym">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <p>Location</p>
                <p>Ahmedabad, Gujarat</p>
              </div>
            </div>
          </div>
          <div className="connect-right">
            <form onSubmit={sendEmail}>
              <h4>Send a Message</h4>
              <p>
                Fill out the form below and I'll get back to you as soon as
                possible.
              </p>
              <div className="name-pass">
                <input
                  name="from_name"
                  type="text"
                  placeholder="Your Name"
                  class="form-control"
                  required
                />
                <input
                  type="email"
                  name="from_email"
                  class="form-control"
                  placeholder="Your Email"
                  id="inputEmail4"
                  required
                />
              </div>
              <input
                type="text"
                class="form-control"
                name="subject"
                id="inputAddress"
                placeholder="Subject"
                required
              />
              <textarea
                name="message"
                class="form-control"
                placeholder="Your Message"
                id="floatingTextarea"
                required
              ></textarea>
              <button type="submit" class="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <h4>Dhruti Kantharia</h4>
        <p>Web Developer • UI/UX Designer • B.Tech IT Student</p>
        <p>Built by Dhruti Kantharia</p>
      </div>
    </>
  );
}

export default Home;
