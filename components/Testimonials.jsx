"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const feedbacks = [
    {
      name: "Amina Yusuf",
      role: "CEO, Gombe AgroTech",
      text: "NGIT Software Solutions transformed our business with a custom web app that streamlined our operations. Their professionalism and attention to detail are unmatched!",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Ibrahim Musa",
      role: "Founder, LearnSmart Academy",
      text: "Their team built our e-learning platform from scratch and provided full technical training. We’ve seen a 60% increase in engagement since launch!",
      img: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Grace Johnson",
      role: "Marketing Manager, NovaTech",
      text: "Working with NGIT was seamless. They understood our brand perfectly and delivered a high-performing website that elevated our digital presence.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from businesses and organizations that have partnered with NGIT Software Solutions to achieve digital success.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {feedbacks.map((fb, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-left relative overflow-hidden"
            >
              <FaQuoteLeft className="text-blue-500 text-2xl mb-3" />
              <p className="text-gray-600 mb-6 italic leading-relaxed">"{fb.text}"</p>

              <div className="flex items-center gap-4">
                <img
                  src={fb.img}
                  alt={fb.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{fb.name}</h4>
                  <p className="text-sm text-gray-500">{fb.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition"
          >
            Start Your Project With Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
