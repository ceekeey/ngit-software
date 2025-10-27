"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer"; // 💡 Added Footer for page completion
import Link from "next/link"; // 💡 Import Link for internal links

const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.497606637835!2d11.156251009329207!3d10.302003089776933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10ffd18b90438b6b%3A0x2d37e90efc153243!2sNGIT%20Software%20Solutions!5e0!3m2!1sen!2sng!4v1761579071599!5m2!1sen!2sng";

const Contact = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Contact form submitted!");
    };

    return (
        <main>
            <Navigation />
            <div className="relative h-[400px] w-full shadow-lg rounded-b-3xl overflow-hidden">
                <iframe
                    src={GOOGLE_MAPS_EMBED_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Location of NGIT Software Solutions in Gombe"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 z-0"
                />
            </div>

            {/* ===== Contact Info Cards (No change needed) ===== */}
            <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-8">
                {[
                    {
                        icon: (
                            <MapPin className="w-9 h-9 text-[#0052cc] group-hover:text-white transition-colors duration-300" />
                        ),
                        title: "Location",
                        text: "Layol Plaza, Along FCE(T) Road, Tashan Dukku, Gombe, Nigeria",
                    },
                    {
                        icon: (
                            <Mail className="w-9 h-9 text-[#0052cc] group-hover:text-white transition-colors duration-300" />
                        ),
                        title: "Email",
                        text: "support@ngit.com.ng  |  info@ngit.com.ng",
                    },
                    {
                        icon: (
                            <Phone className="w-9 h-9 text-[#0052cc] group-hover:text-white transition-colors duration-300" />
                        ),
                        title: "Call",
                        text: "+2348022777887  |  +234706810018",
                    },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2, type: "spring" }}
                        whileHover={{ scale: 1.08, rotate: 1 }}
                        className="group bg-white rounded-2xl p-8 text-center shadow-lg 
                       hover:bg-gradient-to-r hover:from-[#0052cc] hover:to-[#003d99] 
                       hover:text-white transition-all duration-500 ease-in-out"
                    >
                        <div className="flex justify-center mb-4">{item.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-sm">{item.text}</p>
                    </motion.div>
                ))}
            </section>

            {/* ===== Contact Form (Optimized) ===== */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-3xl mx-auto px-6 pb-20"
            >
                <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                    <h2 className="text-3xl font-bold text-center text-[#0052cc] mb-10">
                        Send Us a Message
                    </h2>
                    <form className="grid md:grid-cols-2 gap-6" onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            // 💡 A11y and UX improvements: add name/id
                            name="name"
                            required
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0052cc] outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            required
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0052cc] outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            required
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0052cc] outline-none md:col-span-2"
                        />
                        <textarea
                            rows="4"
                            placeholder="Message"
                            name="message"
                            required
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0052cc] outline-none md:col-span-2"
                        ></textarea>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit" // 💡 Changed to submit
                            className="bg-[#0052cc] hover:bg-[#003d99] text-white py-3 px-6 rounded-xl font-semibold md:col-span-2 transition"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </div>
            </motion.section>

            <Footer />
        </main>
    );
};

export default Contact;