"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaHandshake, FaRocket, FaUsers, FaGlobe } from "react-icons/fa";

const CoreValuesAndCTA = () => {
  const values = [
    {
      icon: <FaLightbulb className="text-yellow-400 text-3xl" />,
      title: "Innovation",
      desc: "We constantly push boundaries, using creativity and technology to deliver smarter and more efficient digital solutions.",
    },
    {
      icon: <FaHandshake className="text-green-400 text-3xl" />,
      title: "Integrity",
      desc: "We believe in transparency, honesty, and doing the right thing — always.",
    },
    {
      icon: <FaRocket className="text-blue-400 text-3xl" />,
      title: "Excellence",
      desc: "We strive for perfection in every line of code, every design, and every project we deliver.",
    },
    {
      icon: <FaUsers className="text-purple-400 text-3xl" />,
      title: "Collaboration",
      desc: "We grow together — by working closely with our clients and empowering our team to share ideas and knowledge.",
    },
    {
      icon: <FaGlobe className="text-pink-400 text-3xl" />,
      title: "Impact",
      desc: "Our goal is to create technology that improves lives and drives positive change in businesses and communities.",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-800 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At NGIT Software Solutions, our values define who we are — shaping every project, partnership, and innovation we deliver.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4">
                {/* Normalize icon rendering so sizing and accessibility are consistent */}
                {React.isValidElement(value.icon)
                  ? React.cloneElement(value.icon, {
                      className: `${value.icon.props?.className ?? ""} text-3xl`,
                      "aria-hidden": true,
                    })
                  : value.icon}
                <h3 className="text-lg font-semibold text-gray-900">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center rounded-2xl p-10 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-3 flex items-center justify-center gap-3">
            <span>Let’s Build the Future Together</span>
            <FaRocket className="text-red-400 text-2xl inline-block" aria-hidden="true" />
          </h2>
          <p className="max-w-2xl mx-auto text-gray-200 mb-6">
            Whether you need a web app, mobile solution, or digital transformation strategy,
            NGIT Software Solutions is ready to bring your ideas to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValuesAndCTA;
