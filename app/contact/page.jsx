"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";

// ✅ Dynamic import don kada Next.js ya yi SSR a leaflet
const LeafletMap = dynamic(() => import("leaflet"), { ssr: false });

const Contact = () => {
    useEffect(() => {
        (async () => {
            const L = await import("leaflet"); // Load leaflet a client side
            await import("leaflet/dist/leaflet.css"); // Import CSS bayan component ya mount

            // === Initialize OpenStreetMap using Leaflet ===
            const map = L.map("realMap").setView([10.2897, 11.1731], 13); // Gombe coordinates

            // Add OpenStreetMap layer
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution: "© OpenStreetMap contributors",
            }).addTo(map);

            // Custom blue marker icon
            const icon = L.icon({
                iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
                iconSize: [40, 40],
                iconAnchor: [20, 40],
                popupAnchor: [0, -40],
            });

            // Add marker for Gombe
            L.marker([10.2897, 11.1731], { icon })
                .addTo(map)
                .bindPopup("<b>Gombe, Nigeria</b><br>Beautiful city of peace.")
                .openPopup();
        })();
    }, []);

    return (
        <div>
            <Navigation />

            {/* ===== Real Interactive Free Map (OpenStreetMap) ===== */}
            <div className="relative h-[400px] w-full shadow-lg rounded-b-3xl overflow-hidden">
                <div id="realMap" className="w-full h-full z-0"></div>
            </div>

            {/* ===== Contact Info Cards ===== */}
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

            {/* ===== Contact Form ===== */}
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
                    <form className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0052cc] outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0052cc] outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0052cc] outline-none md:col-span-2"
                        />
                        <textarea
                            rows="4"
                            placeholder="Message"
                            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#0052cc] outline-none md:col-span-2"
                        ></textarea>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="button"
                            className="bg-[#0052cc] hover:bg-[#003d99] text-white py-3 px-6 rounded-xl font-semibold md:col-span-2 transition"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </div>
            </motion.section>
        </div>
    );
};

export default Contact;
