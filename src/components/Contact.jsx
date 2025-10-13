import React from "react";
import emailjs, { sendForm } from "emailjs-com";

function Contact() {
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
  return (
    <>
      <div
        id="contact"
        className="connect bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-16 lg:px-32"
      >
        {/* Section Header */}
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
          Let’s Connect
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-lg">
          Have a project in mind or interested in collaboration? I'd love to
          hear from you!
        </p>

        {/* Contact Layout */}
        <div className="connect-flex flex flex-col lg:flex-row gap-12">
          {/* Left Side - Contact Info */}
          <div className="connect-left bg-white shadow-md rounded-2xl p-8 flex-1">
            <h4 className="text-2xl font-semibold text-blue-700 mb-4">
              Get In Touch
            </h4>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm actively seeking internship opportunities in web development
              and UI/UX design. Whether you have a project proposal,
              collaboration idea, or just want to connect, I'm always excited to
              meet new people and explore new opportunities.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Email */}
              <div className="socials flex border-1 bg-gray-100 rounded px-2 py-1 border-gray-200 items-center gap-4">
                <div className="sym text-blue-600 text-2xl">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtswJrTJzwNcnglvVgPnCJXTMXRWxDhrqHCmNWfhBfXzCxQsHxvZtphhGRkztBHNTgjZxl"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Email me here
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="socials flex items-center gap-4 border-1 bg-gray-100 rounded px-2 py-1 border-gray-200">
                <div className="sym text-blue-600 text-2xl">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-800">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/dhruti-kantharia-759700255/"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Connect with me
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="socials flex items-center gap-4 border-1 bg-gray-100 rounded px-2 py-1 border-gray-200">
                <div className="sym text-blue-600 text-2xl">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-800">GitHub</p>
                  <a
                    href="https://github.com/KanthariaDhruti"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    View my Repositories
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="socials flex items-center gap-4 border-1 bg-gray-100 rounded px-2 pt-1 border-gray-200">
                <div className="sym text-blue-600 text-2xl">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Location</p>
                  <p className="text-gray-600">Ahmedabad, Gujarat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="connect-right bg-white shadow-md rounded-2xl p-8 flex-1">
            <form onSubmit={sendEmail} className="space-y-6">
              <h4 className="text-2xl font-semibold text-blue-700 mb-2">
                Send a Message
              </h4>
              <p className="text-gray-600 mb-6">
                Fill out the form below and I’ll get back to you as soon as
                possible.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name="from_name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none my-4"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded font-semibold py-3 hover:bg-blue-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact