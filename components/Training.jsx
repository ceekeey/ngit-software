"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Training = () => {
  const trainings = [
    {
      title: "Full Stack Web Development",
      image: "/training/web.jpg",
      desc: "Become a professional web developer by mastering HTML, CSS, JavaScript, React, Node.js, and MySQL to build scalable and responsive web apps.",
      duration: "12 Weeks",
    },
    {
      title: "UI/UX Design",
      image: "/training/uiux.jpg",
      desc: "Learn to design intuitive user interfaces and seamless experiences using Figma, Adobe XD, and modern design principles.",
      duration: "8 Weeks",
    },
    {
      title: "Mobile App Development",
      image: "/training/mobile.jpg",
      desc: "Build Android and iOS apps with React Native and Flutter. Learn how to integrate APIs and optimize app performance.",
      duration: "10 Weeks",
    },
    {
      title: "Cybersecurity Fundamentals",
      image: "/training/cyber.jpg",
      desc: "Understand digital security, ethical hacking, and how to protect systems, data, and networks from cyber threats.",
      duration: "8 Weeks",
    },
    {
      title: "Data Analysis & Visualization",
      image: "/training/data.jpg",
      desc: "Master Excel, SQL, Python, and Power BI to collect, clean, and visualize data for decision-making and business insights.",
      duration: "8 Weeks",
    },
    {
      title: "Computer Networking",
      image: "/training/net4.jpg",
      desc: "Gain practical knowledge in setting up wired and wireless networks, IP configuration, and network troubleshooting.",
      duration: "6 Weeks",
    },
    {
      title: "Graphics Design",
      image: "/training/graphic.jpg",
      desc: "Learn to design professional posters, logos, and social media content using Photoshop, CorelDRAW, and Canva.",
      duration: "6 Weeks",
    },
    {
      title: "Computer Maintenance & Hardware Repair",
      image: "/training/maintenance.jpg",
      desc: "Get hands-on experience diagnosing and repairing hardware components, installing OS, and optimizing system performance.",
      duration: "6 Weeks",
    },
    {
      title: "ArchiCAD & AutoCAD Design",
      image: "/training/archicad.jpg",
      desc: "Learn architectural drawing and 3D modeling using ArchiCAD and AutoCAD for real-world design projects.",
      duration: "6 Weeks",
    },
    {
      title: "Cloud Computing Basics",
      image: "/training/cloud.jpg",
      desc: "Understand cloud concepts, deployment models, and how to work with AWS, Azure, and Google Cloud services.",
      duration: "8 Weeks",
    },
    {
      title: "AI & Machine Learning Essentials",
      image: "/training/ai.png",
      desc: "Get introduced to Artificial Intelligence and Machine Learning using Python, TensorFlow, and real-world datasets.",
      duration: "10 Weeks",
    },
    {
      title: "Industrial Training / SIWES",
      image: "/training/siwes1.jpg",
      desc: "A practical internship package where students work on real tech projects in development, networking, and IT reporting.",
      duration: "12 Weeks",
    },
  ];

  return (
    <section id="training" className="bg-gray-50 py-20 px-6 text-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-gray-800 mb-6"
      >
        Our <span className="text-blue-600">Training Programs</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-600 max-w-2xl mx-auto mb-12"
      >
        Whether you're starting your tech journey or upgrading your professional
        skills, NGIT offers hands-on, job-ready training programs that prepare
        you for success in the modern digital world.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        {trainings.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition flex flex-col transform hover:-translate-y-2 duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                <span className="font-medium">
                  <i className="fa-regular fa-clock mr-1"></i> {item.duration}
                </span>
                <Link href="/student-register" className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition">
                  Enroll Now
                </Link>

              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-12"
      >
        <a
          href="/contact"
          className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Contact Us for Custom Training
        </a>
      </motion.div>
    </section>
  );
};

export default Training;
