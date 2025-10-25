"use client";
import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Aliyu Ibrahim",
    role: "Lead Developer",
    image: "/team/ms.png",
    linkedin: "https://linkedin.com/in/aliyuibrahim",
    twitter: "https://twitter.com/aliyuibrahim",
    github: "https://github.com/aliyuibrahim",
  },
  {
    name: "Sana Yusuf",
    role: "UI/UX Designer",
    image: "/team/m.png",
    linkedin: "https://linkedin.com/in/sanayusuf",
    twitter: "https://twitter.com/sanayusuf",
    github: "https://github.com/sanayusuf",
  },
  {
    name: "Hassan Okoro",
    role: "Project Manager",
    image: "/team/ms.png",
    linkedin: "https://linkedin.com/in/hassanokoro",
    twitter: "https://twitter.com/hassanokoro",
    github: "https://github.com/hassanokoro",
  },
  {
    name: "Lilian Nwosu",
    role: "Software Engineer",
    image: "/team/m.png",
    linkedin: "https://linkedin.com/in/liliannwosu",
    twitter: "https://twitter.com/liliannwosu",
    github: "https://github.com/liliannwosu",
  },
];

const Team = () => {
  return (
    <section id="team" className="bg-white py-20 px-6 md:px-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-[#0052CC] mb-8"
      >
        Meet Our <span className="text-[#2E8BFD]">Team</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-600 max-w-2xl mx-auto mb-12"
      >
        Our success is powered by passionate minds committed to building
        innovative software solutions that make a real difference.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name + index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="bg-[#F5F7FA] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-60 object-cover object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[#1C1C1E]">
                {member.name}
              </h3>
              <p className="text-[#0052CC] text-sm mb-3">{member.role}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="text-[#2E8BFD] hover:text-[#0052CC] transition transform hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.3h-3v-4.8c0-1.14-.02-2.6-1.58-2.6-1.58 0-1.82 1.23-1.82 2.5v4.9h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v4.73z" />
                  </svg>
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on Twitter`}
                  className="text-[#2E8BFD] hover:text-[#0052CC] transition transform hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 002.16-2.72 9.86 9.86 0 01-3.12 1.19 4.92 4.92 0 00-8.38 4.48A13.97 13.97 0 011.67 3.15a4.92 4.92 0 001.52 6.57 4.9 4.9 0 01-2.23-.62v.06a4.93 4.93 0 003.95 4.83 4.93 4.93 0 01-2.21.08 4.93 4.93 0 004.6 3.42A9.87 9.87 0 010 19.54a13.93 13.93 0 007.55 2.21c9.05 0 14-7.5 14-14v-.64A9.98 9.98 0 0024 4.56z" />
                  </svg>
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on GitHub`}
                  className="text-[#2E8BFD] hover:text-[#0052CC] transition transform hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.92 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 016 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.61-5.47 5.91.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0012 .5z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
