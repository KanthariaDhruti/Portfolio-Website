import React, { useState } from "react";
import emailjs, { sendForm } from 'emailjs-com';
import "/src/App.css"
function Home() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_74wjdmh', 'template_df44l8m', e.target, 'dS7tWE4Ud1wj1gB0j')
            .then((result) => {
                console.log(result.text);
                alert("Message sent!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message.");
            });

        e.target.reset();
    }

    return (
        <div>
            <div className="navibar">
                <div className="head">
                    Dhruti Kantharia
                </div>
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
                <p>Heyy! I am Dhruti</p>
                <h1 className="frontend">Frontend</h1>
                <h1>Developer</h1>
                <p>I'm a passionate web developer based in India, creating
                    <br />
                    beautiful and functional websites that users will love.</p>
                <a className="hero-btn" href="#contact">Get In Touch</a>
                <a className="hero-btn" href="#projects" >Browse Projects</a>
                <a className="hero-icons" target="_blank" href="https://github.com/KanthariaDhruti"><i class="fa-brands fa-github"></i></a>
                <a className="hero-icons" target="_blank" href="https://www.linkedin.com/in/dhruti-kantharia-759700255/"><i class="fa-brands fa-linkedin"></i></a>
                <a className="hero-icons" target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtswJrTJzwNcnglvVgPnCJXTMXRWxDhrqHCmNWfhBfXzCxQsHxvZtphhGRkztBHNTgjZxl"><i class="fa-solid fa-envelope"></i></a>
            </div>
            <div id="about" className="about">
                <h1>About me</h1>
                <p>Get to know more about my journey, passion, and aspirations in web development</p>
                <div className="about-flex">
                    <div className="about-flex1">
                        <h2>Hi, I'm Dhruti Kantharia!</h2>
                        <p>I'm an aspiring web developer currently pursuing my B.Tech in IT Engineering at Gandhinagar University. With a passion for creating beautiful and functional websites, I'm   constantly learning and improving my skills in web development and UI/UX design.
                            <br />
                            <br />
                            Beyond coding, I'm a creative individual who loves expressing myself through singing, dancing, and various forms of art. My background as an ex-NCC cadet has instilled in me discipline, leadership qualities, and the ability to work effectively in teams.
                            <br />
                            <br />
                            I recently completed a comprehensive UI/UX course to enhance my design skills and understanding of user experience principles. I'm actively seeking internship opportunities to apply my knowledge and contribute to meaningful projects while continuing to grow as a developer.
                        </p>
                    </div>
                    <div className="about-flex2">
                        <div className="abt-cards">
                            <div className="abt-card">
                                <i class="fa-solid fa-book-open"></i>
                                <h4>Education</h4>
                                <p>B.Tech IT Engineering, 7<sup>th</sup> semester</p>
                            </div>
                            <div className="abt-card">
                                <i class="fa-solid fa-award"></i>
                                <h4>Academic Performance</h4>
                                <p>SGPA of 8.95 in latest semester</p>
                            </div>
                            <div className="abt-card">
                                <i class="fa-solid fa-user-group"></i>
                                <h4>Leaderhip</h4>
                                <p>Ex-NCC Cadet with discipline & teamwork</p>
                            </div>
                            <div className="abt-card">
                                <i class="fa-solid fa-heart"></i>
                                <h4>Interests</h4>
                                <p>Singing, Dancing, Arts and Sports</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="skills" className="skills">
                <h1>Skills & Expertise</h1>
                <p>A comprehensive overview of my technical skills and areas of expertise</p>
                <div className="skill-cards">
                    <div className="skill-card">
                        <i class="fa-solid fa-globe"></i>
                        <h5>Web Development</h5>
                        <div className="skill-wrap">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>Node</span>
                            <span>Angular</span>
                            <span>TypeScript</span>
                            <span>Express</span>
                        </div>
                    </div>
                    <div className="skill-card">
                        <i class="fa-solid fa-palette"></i>
                        <h5>UI/UX Design</h5>
                        <div className="skill-wrap">
                            <span>Figma</span>
                            <span>Responsive Design</span>
                            <span>Webflow</span>
                            <span>Prototyping</span>
                        </div>
                    </div>
                    <div className="skill-card">
                        <i class="fa-solid fa-code"></i>
                        <h5>Other Languages</h5>
                        <div className="skill-wrap">
                            <span>Python</span>
                            <span>Java</span>
                        </div>
                    </div>
                    <div className="skill-card">
                        <i class="fa-solid fa-database"></i>
                        <h5>Databases</h5>
                        <div className="skill-wrap">
                            <span>SQL</span>
                            <span>MongoDB</span>
                        </div>
                    </div>
                </div>
                <div className="recent">
                    <h3>Recently Completed</h3>
                    <p>UI/UX Design Course - Enhancing my design skills and user experience understanding</p>
                    <span>Certificate Earned</span>
                </div>
            </div>
            <div id="projects" className="projects">
                <h1>Featured Projects</h1>
                <p>A showcase of my recent development work and creative projects</p>
                <div className="project-flex">
                    <div className="project-card">
                        <img src="/ticGame.png" alt="" />
                        <div className="project-card-info">
                            <h5>TIC TAC TOE Game</h5>
                            <p>This project is a mini project in the form a game, made with the help of HTML, CSS, Javascript</p>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Javascript</span>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src="/angular.png" alt="" />
                        <div className="project-card-info">
                            <h5>Angular Counter Game</h5>
                            <p>This project is a mini project in the form a game, made with the help of Angular JS</p>
                            <span>Angular JS</span>
                            <span>Typescript</span>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src="/busi-card.png" alt="" />
                        <div className="project-card-info">
                            <h5>Business Card Generator and Downloader</h5>
                            <p>React mini project of a business card generator whene user can fill the details in the form and get a copy of the business card</p>
                            <span>React</span>
                            <span>Javascript</span>
                        </div>
                    </div>
                    <div className="project-card">
                        <img src="/to-do-list.png" alt="" />
                        <div className="project-card-info">
                            <h5>TIC TAC TOE Game</h5>
                            <p>This project is a mini project in the form a game, made with the help of HTML, CSS, Javascript</p>
                            <span>React</span>
                            <span>Javascript</span>
                        </div>
                    </div>
                </div>
                <button><a style={{ textDecoration: "none", color: "#333" }} href="https://github.com/KanthariaDhruti" target="_blank"><i class="fa-brands fa-github"></i> View More on Github</a></button>
            </div>
            <div id="services" className="services">
                <h1>Services & Expertise</h1>
                <p>Offering comprehensive web development and design solutions as part of my learning journey</p>
                <div className="serv-box">
                    <div className="serv">
                        <i class="fa-solid fa-code"></i>
                        <h5>Web Development</h5>
                        <p>Creating responsive and interactive web applications using HTML, CSS, JavaScript and libraries like Bootstrap, Tailwind and JavaScript libraries like React and Express and also Backend with Node.js and databases like SQL and MongoDB.</p>
                        <ul>
                            <li>Responsive Design</li>
                            <li>Interactive UI</li>
                            <li>Cross-Browser Compatibility</li>
                            <li>Performance Optimisation</li>
                        </ul>
                    </div>
                    <div className="serv">
                        <i class="fa-solid fa-palette"></i>
                        <h5>UI/UX Design</h5>
                        <p>Designing intuitive and visually appealing user interfaces with focus on user experience.</p>
                        <ul>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                            <li>User Friendly</li>
                        </ul>
                    </div>
                </div>
                <div className="ready">
                    <h4>Ready to Start Your Project?</h4>
                    <p>I'm actively seeking internship opportunities and collaborative projects. Let's work together to bring your ideas to life!</p>
                    <a className="ready-button" href="#contact">Get In Touch</a>
                    <a className="ready-button" href="#projects">View my work</a>
                </div>
            </div>
            <div id="contact" className="connect">
                <h1>Let's Connect</h1>
                <p>Have a project in mind or interested in collaboration? I'd love to hear from you!</p>
                <div className="connect-flex">
                    <div className="connect-left">
                        <h4>Get In Touch</h4>
                        <p>I'm actively seeking internship opportunities in web development and UI/UX design. Whether you have a project proposal, collaboration idea, or just want to connect, I'm always excited to meet new people and explore new opportunities.</p>
                        <div className="socials">
                            <div className="sym"><i class="fa-solid fa-envelope"></i></div>
                            <div>
                                <p>Email</p>
                                <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtswJrTJzwNcnglvVgPnCJXTMXRWxDhrqHCmNWfhBfXzCxQsHxvZtphhGRkztBHNTgjZxl" target="_blank">kanthariadhruti@gmail.com</a>
                            </div>
                        </div>
                        <div className="socials">
                            <div className="sym"><i class="fa-brands fa-linkedin"></i></div>
                            <div>
                                <p>LinkedIn</p>
                                <a href="https://www.linkedin.com/in/dhruti-kantharia-759700255/" target="_blank">Connect with me</a>
                            </div>
                        </div>
                        <div className="socials">
                            <div className="sym"><i class="fa-brands fa-github"></i></div>
                            <div>
                                <p>GitHub</p>
                                <a href="https://github.com/KanthariaDhruti" target="_blank">View my Repositories</a>
                            </div>
                        </div>
                        <div className="socials">
                            <div className="sym"><i class="fa-solid fa-location-dot"></i></div>
                            <div>
                                <p>Location</p>
                                <p>Ahmedabad, Gujarat</p>
                            </div>
                        </div>
                    </div>
                    <div className="connect-right">
                        <form onSubmit={sendEmail}>
                            <h4>Send a Message</h4>
                            <p>Fill out the form below and I'll get back to you as soon as possible.</p>
                            <div className="name-pass">
                                <input name="from_name" type="text" placeholder="Your Name" class="form-control" />
                                <input type="email" name="from_email" class="form-control" placeholder="Your Email" id="inputEmail4" />
                            </div>
                            <input type="text" class="form-control" name="subject" id="inputAddress" placeholder="Subject" />
                            <textarea name="message" class="form-control" placeholder="Your Message" id="floatingTextarea"></textarea>
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer">
                <h4>Dhruti Kantharia</h4>
                <p>Web Developer • UI/UX Designer • B.Tech IT Student</p>
                <p>Built by Dhruti Kantharia</p>
            </div>
        </div>
    )
}

export default Home