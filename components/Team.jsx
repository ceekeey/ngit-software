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
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-[#F5F7FA] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-60 object-cover"
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
                  className="text-[#2E8BFD] hover:text-[#0052CC] transition"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  className="text-[#2E8BFD] hover:text-[#0052CC] transition"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  className="text-[#2E8BFD] hover:text-[#0052CC] transition"
                >
                  <i className="fab fa-github text-xl"></i>
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
