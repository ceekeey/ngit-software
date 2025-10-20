"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#F8FAFF] to-white py-20 px-6 md:px-16"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image / Illustration */}
        <motion.div
          className="flex-1 w-full relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/slide/abt.jpeg"
              alt="NGIT Software Solutions team and workspace"
              className="w-full h-64 md:h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4 bg-white/95 dark:bg-black/70 text-sm font-semibold text-[#0f1724] dark:text-white px-3 py-1 rounded-full border">
              Since 2018
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <motion.div
              className="bg-white/90 rounded-lg p-3 text-center shadow"
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold text-[#0052CC]">50+</div>
              <div className="text-xs text-[#475569]">Projects</div>
            </motion.div>

            <motion.div
              className="bg-white/90 rounded-lg p-3 text-center shadow"
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold text-[#2E8BFD]">30+</div>
              <div className="text-xs text-[#475569]">Clients</div>
            </motion.div>

            <motion.div
              className="bg-white/90 rounded-lg p-3 text-center shadow"
              variants={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold text-[#06b6d4]">100%</div>
              <div className="text-xs text-[#475569]">Satisfaction</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            id="about-heading"
            className="text-3xl md:text-4xl font-extrabold mb-4"
            variants={item}
          >
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0052CC] via-[#2E8BFD] to-[#06b6d4]">NGIT</span>
          </motion.h2>

          <motion.p className="text-[#0f1724] leading-relaxed mb-4" variants={item}>
            NGIT Software Solutions is a Gombe-based software company delivering
            modern, secure, and scalable software for government and private
            organizations. We combine proven technologies with pragmatic design
            to deliver solutions that match international standards at affordable rates.
          </motion.p>

          <motion.ul className="space-y-3 mb-6" variants={item}>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#2E8BFD] mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M9 12l2 2 4-4" />
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              <span className="text-sm text-[#334155]">Custom web & mobile applications</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#06b6d4] mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2v10l3 3" />
                <path d="M21 12a9 9 0 11-9-9" />
              </svg>
              <span className="text-sm text-[#334155]">Cloud-ready, maintainable architectures</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#10b981] mt-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 1L3 5v6c0 5 3.7 9.7 9 11 5.3-1.3 9-6 9-11V5l-9-4z" />
              </svg>
              <span className="text-sm text-[#334155]">Security-first development and auditing</span>
            </li>
          </motion.ul>

          <motion.div className="flex flex-col sm:flex-row items-center gap-3" variants={item}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#0052CC] hover:bg-[#2E8BFD] text-white px-6 py-3 rounded-full shadow-md transition"
              aria-label="Contact NGIT"
            >
              Learn More About Us
            </a>

            <a
              href="/docs/NGIT-Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-gray-200 px-5 py-3 rounded-full text-sm text-[#0f1724] hover:bg-gray-50 transition"
              aria-label="Download brochure"
            >
              Download Brochure
            </a>
          </motion.div>

          <motion.p className="text-sm text-[#475569] mt-6" variants={item}>
            CAC No: <span className="font-medium">BN 4012639</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
