"use client";
// 1. Remove redundant React import
import { useState } from "react";
import { motion } from "framer-motion";
// 💡 Import Next.js Image component
import Image from "next/image";
import Link from "next/link"; // Link is not used yet, but good to have if any internal links are added

const projects = [
  {
    title: "MediLink",
    category: "Web",
    description:
      "A HealthTech platform that helps rural health workers log and monitor community health data.",
    image: "/portfolio/1.jpg",
    link: "https://medilink.vercel.app",
  },
  {
    title: "FixItNow",
    category: "Mobile",
    description:
      "An on-demand repair marketplace connecting users with nearby repair professionals.",
    image: "/portfolio/2.jpg",
    link: "https://fixitnow.vercel.app",
  },
  {
    title: "PetroMap",
    category: "GIS",
    description:
      "Intelligent GIS mapping solution for oil and gas exploration, improving data-driven decisions.",
    image: "/portfolio/3.jpg",
    link: "#",
  },
  {
    title: "NGIT Design Suite",
    category: "Design",
    description:
      "A creative graphic design toolkit for building modern brand identities.",
    image: "/portfolio/4.jpg",
    link: "#",
  },
];

const categories = ["All", "Web", "Mobile", "Design", "GIS"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-gray-50 py-20" id="portfolio">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* 💡 CRITICAL SEO FIX: Change H2 to H1 for the main page title */}
        <motion.h1
          className="text-3xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Portfolio
        </motion.h1>

        {/* Filter Buttons (Content remains the same) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 ${activeCategory === category
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              layout
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* 💡 CRITICAL CHANGE: Use next/image with explicit dimensions */}
              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={`Project cover image for ${project.title}`}
                  width={500} // Set a reasonable width based on your design (e.g., 500px)
                  height={208} // Set a fixed height (h-52 is 208px in default Tailwind config)
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
