"use client";
// 1. Remove redundant React import
import { motion } from "framer-motion";
// 💡 Import Next.js Image component
import Image from "next/image"

const clients = [
  { name: "Africa", logo: "/clients/2.png" },
  { name: "Gombe State University", logo: "/clients/27.png" },
  { name: "Consultancy", logo: "/clients/12.png" },
  { name: "FixItNow", logo: "/clients/11.png" },
  { name: "Consults", logo: "/clients/43.png" },
  { name: "Medi", logo: "/clients/26.png" },
];

const Client = () => {
  return (
    <section className="relative py-20 text-center overflow-hidden">
      {/* Animated gradient background (Assumes .animate-gradient-slow is in globals.css) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-cyan-100 dark:from-blue-950 dark:via-purple-900 dark:to-cyan-900 animate-gradient-slow"></div>

      <div className="relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6"
        >
          Trusted by{" "}
          <span className="text-blue-600 dark:text-blue-400">Our Clients</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          We’ve worked with reputable organizations in education, technology, and
          business to deliver innovative, result-driven solutions.
        </motion.p>

        {/* Infinite scrolling logos */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md border border-blue-100 dark:border-gray-700 p-4 min-w-[120px] sm:min-w-[140px] md:min-w-[160px] hover:shadow-lg hover:-translate-y-1 transition-transform"
              >
                {/* 💡 CRITICAL CHANGE: Use next/image for optimization */}
                <Image
                  src={client.logo}
                  alt={`Client logo: ${client.name}`} // Descriptive alt text
                  width={80} // Explicit width (matching w-20)
                  height={80} // Explicit height (matching h-20)
                  loading="lazy" // Auto-lazy loading
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Client;
