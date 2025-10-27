"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react"; // Keep only the hooks you need
import { motion } from "framer-motion";

const Hero = () => {
  // Array of hero background images
  const slides = [
    // Video should still use the <video> tag
    { src: "/slide/vid.mp4", type: "video" },
    // Images must be objects for the Image component
    { src: "/slide/1.jpeg", type: "image" },
    { src: "/slide/2.jpeg", type: "image" },
    // If you use PNG, ensure it's small or Next.js converts it
    { src: "/slide/3.png", type: "image" },
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
        const isActive = index === current;

        return slide.type === "video" ? (
          // Video: remains mostly the same, ensuring it's not a performance drain
          <motion.video
            key={index}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            src={slide.src}
            autoPlay
            loop
            muted
            playsInline
            style={{ opacity: isActive ? 1 : 0 }}
          // We can simplify framer-motion here, as opacity handles the transition
          />
        ) : (
          // 💡 IMAGE OPTIMIZATION: Use next/image with 'fill' for background effect
          <motion.div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: isActive ? 1 : 0, transition: 'opacity 1.2s ease-in-out' }}
          >
            <Image
              src={slide.src}
              alt={`Background slide ${index + 1} for Ngit Software Solutions`}
              fill // Use fill to make it cover the parent motion.div
              priority={index === 0} // Mark the first image as 'priority' for LCP
              sizes="100vw" // Helps Next.js calculate best size
              className={`object-cover object-center ${isActive ? 'scale-100' : 'scale-105'}`}
            // You can apply the scale animation using framer-motion on this Image component or the parent div
            />
          </motion.div>
        );
      })}

      {/* Dark overlay for readability - Good! */}
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
          {/* 💡 UX IMPROVEMENT: Use next/link for internal navigation */}
          <Link
            href="/signup" // Use /signup here
            className="bg-[#0052CC] text-white px-6 py-3 rounded-full hover:bg-[#2E8BFD] transition shadow-md"
          >
            Register for a course
          </Link>
          <Link
            href="/about"
            className="border border-[#2E8BFD] text-[#2E8BFD] px-6 py-3 rounded-full hover:bg-[#2E8BFD] hover:text-white transition"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
