// components/Footer.js

"use client";
import { useState } from "react"; // Removed redundant React import
import { motion } from "framer-motion";
import Link from "next/link"; // 💡 Import Link
import Image from "next/image"; // 💡 Import Image
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubscribe = (e) => {
    // ... (logic remains the same)
  };

  const navLinks = ["Home", "About", "Services", "Training", "Contact"];

  return (
    <footer className="bg-gray-900 text-gray-300 py-14 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 sm:grid-cols-2 gap-10 md:gap-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-4 items-start">
            {/* 💡 Use Next.js Link for the brand link */}
            <Link href="/" className="flex items-center gap-3">
              {/* 💡 Use Next.js Image for optimization */}
              <Image
                src="/favicon.ico"
                alt="NGIT Software Solutions"
                width={48} // w-12 is 48px
                height={48} // h-12 is 48px
                loading="lazy"
                className="object-contain"
              />
              <div>
                <h2 className="text-2xl font-bold text-white">NGIT Software</h2>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((item, i) => (
              <li key={i}>
                {/* 💡 Use Next.js Link for navigation */}
                <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="hover:text-blue-400 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info (Remains the same as it has no links) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
          {/* ... (SVG content remains the same) ... */}
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
              </svg>
              <span>Gombe, Nigeria</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-green-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C9.16 21 3 14.84 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.05l-2.2 2.2z" />
              </svg>
              <span>+234 812 345 6789</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-pink-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>info@ngitsoftwaresolutions.com</span>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-3">
            Get the latest updates, tech insights, and offers delivered to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="you@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 py-2 rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white font-medium transition"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, color: "hover:bg-blue-600", href: "#" },
                { icon: <FaInstagram />, color: "hover:bg-pink-600", href: "#" },
                { icon: <FaTwitter />, color: "hover:bg-sky-500", href: "#" },
                { icon: <FaLinkedinIn />, color: "hover:bg-blue-700", href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-800 p-3 rounded-full transition ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} NGIT Software Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;