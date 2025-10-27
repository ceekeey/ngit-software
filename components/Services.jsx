"use client";
// 1. Remove the redundant 'React' import
import { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Code, Palette, Database, Globe, Cloud } from "lucide-react";
// 💡 Import Next.js Link
import Link from "next/link";

const services = [
    {
        id: "software-dev",
        Icon: Code,
        title: "Software Development",
        description:
            "We build robust software: school portals, CBT systems, hospital & hotel management, e‑commerce, inventory apps and more — built for scale and affordability.",
    },
    {
        id: "networking",
        Icon: Globe,
        title: "Computer Networking",
        description:
            "Design, deploy and maintain wired & wireless networks. We also deliver hands-on training for students and staff.",
    },
    {
        id: "website-dev",
        Icon: Palette,
        title: "Website Development",
        description:
            "Responsive websites for government and private orgs, including hosted email and maintenance packages.",
    },
    {
        id: "mobile-apps",
        Icon: Code,
        title: "Mobile App Development",
        description:
            "Custom mobile apps tailored to your business needs with native-like performance and smooth UX.",
    },
    {
        id: "training",
        Icon: Palette,
        title: "Training & Certification",
        description:
            "Professional courses: Web Development, Networking, ArchiCAD, CorelDraw, Computer Appreciation and Maintenance.",
    },
    {
        id: "it-consultancy",
        Icon: Database,
        title: "IT Consultancy",
        description:
            "Expert advice across cybersecurity, systems design, software, and training to help your org succeed.",
    },
    {
        id: "project-assist",
        Icon: Globe,
        title: "Final Year Project Assistance",
        description:
            "Support for undergraduate & postgraduate projects — from proposal and write-up to implementation.",
    },

    // New AI/ML and data services
    {
        id: "ai-ml",
        Icon: Code,
        title: "AI & Machine Learning",
        description:
            "Model development, prototyping and production integration for predictive systems, recommendation engines, and intelligent automation.",
    },
    {
        id: "data-analytics",
        Icon: Database,
        title: "Data Analytics & BI",
        description:
            "Data ingestion, ETL, dashboards and insights — turning raw data into actionable business intelligence and KPIs.",
    },
    {
        id: "computer-vision",
        Icon: Palette,
        title: "Computer Vision",
        description:
            "Image/video analysis, object detection and OCR solutions for automation, monitoring and process improvement.",
    },
    {
        id: "nlp-conversational-ai",
        Icon: Globe,
        title: "NLP & Conversational AI",
        description:
            "Text understanding, chatbots, virtual assistants and document processing using modern language models and pipelines.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.995 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const Services = () => {
    const reduceMotion = useReducedMotion();

    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className="bg-[#F9FAFB] py-20 px-6 md:px-16"
        >
            <motion.h2
                id="services-heading"
                initial={reduceMotion ? {} : { opacity: 0, y: -20 }}
                whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-center text-3xl md:text-4xl font-bold text-[#0052CC] mb-4"
            >
                Our <span className="text-[#2E8BFD]">Services</span>
            </motion.h2>

            <motion.p
                initial={reduceMotion ? {} : { opacity: 0 }}
                whileInView={reduceMotion ? {} : { opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
            >
                We combine technology, creativity, and innovation to provide end-to-end digital solutions for businesses of all sizes.
            </motion.p>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                role="list"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
                {services.map(({ id, Icon, title, description }, idx) => (
                    <motion.article
                        key={id}
                        role="listitem"
                        variants={cardVariants}
                        className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg focus-within:shadow-lg transition-transform transform hover:-translate-y-2 focus:-translate-y-2 outline-none"
                        tabIndex={0}
                        aria-labelledby={`${id}-title`}
                    >
                        <div className="flex items-center justify-center mb-4">
                            <span className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#E6F0FF] to-white rounded-xl">
                                <Icon className="w-7 h-7 text-[#2E8BFD]" aria-hidden="true" />
                            </span>
                        </div>

                        <h3 id={`${id}-title`} className="text-lg font-semibold text-[#1C1C1E] mb-2 text-center">
                            {title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed text-left">
                            {description}
                        </p>

                        {/* 💡 CRITICAL FIX: Use Next.js Link for internal navigation */}
                        <div className="mt-4 flex justify-center">
                            <Link // Changed from <a> to <Link>
                                href="/contact" // Use /contact
                                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-[#2E8BFD] ring-1 ring-[#DCEEFF] rounded-md hover:bg-[#F0F8FF] focus:ring-2 focus:ring-offset-1 focus:ring-[#BEE0FF]"
                                aria-label={`Contact us about ${title}`}
                            >
                                Learn more
                            </Link>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
};

export default memo(Services);
