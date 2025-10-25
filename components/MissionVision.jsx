"use client";
import React from "react";
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our <span className="text-blue-600">Mission</span> &{" "}
          <span className="text-blue-600">Vision</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-8 border-t-4 border-blue-600 transition"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              🌍 Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses and individuals through cutting-edge digital
              solutions that drive innovation, efficiency, and growth. We aim to
              bridge the gap between technology and everyday challenges by
              delivering software products that make a real-world impact.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-8 border-t-4 border-blue-600 transition"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              🚀 Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become Africa’s leading software innovation hub — inspiring a
              generation of tech-driven problem solvers and creating sustainable
              digital transformation across industries through creativity,
              quality, and reliability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
