"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Array of hero background images
  const slides = [
    "/slide/vid.mp4",
    "/slide/1.jpeg",
    "/slide/2.png",
    "/slide/3.png",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide effect every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image Slider */}
      {slides.map((slide, index) => {
        const isVideo = typeof slide === "string" && slide.toLowerCase().endsWith(".mp4");
        return isVideo ? (
          <motion.video
            key={index}
            className="absolute inset-0 w-full h-full object-cover"
            src={slide}
            autoPlay
            loop
            muted
            playsInline
            style={{ opacity: index === current ? 1 : 0 }}
            animate={{
              opacity: index === current ? 1 : 0,
              scale: index === current ? 1 : 1.05,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        ) : (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide})`,
              opacity: index === current ? 1 : 0,
            }}
            animate={{
              opacity: index === current ? 1 : 0,
              scale: index === current ? 1 : 1.05,
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        );
      })}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          <span className="text-[#2E8BFD]">NGIT</span> Software Solution
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-2xl mb-6 tracking-wide"
        >
          <span className="text-[#2E8BFD] font-semibold">N</span>ext{" "}
          <span className="text-[#2E8BFD] font-semibold">G</span>eneration and{" "}
          <span className="text-[#2E8BFD] font-semibold">I</span>nformation{" "}
          <span className="text-[#2E8BFD] font-semibold">T</span>echnology
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-200 mb-8 leading-relaxed"
        >
          Building digital solutions that transform the future through
          innovation, technology, and creativity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#signup"
            className="bg-[#0052CC] text-white px-6 py-3 rounded-full hover:bg-[#2E8BFD] transition shadow-md"
          >
            Register for a course
          </a>
          <a
            href="#about"
            className="border border-[#2E8BFD] text-[#2E8BFD] px-6 py-3 rounded-full hover:bg-[#2E8BFD] hover:text-white transition"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
