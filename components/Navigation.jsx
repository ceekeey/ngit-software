"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Team", path: "/#team" },
        { name: "Training", path: "/#training" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Solutions", path: "/solutions" },
        { name: "Login", path: "/student-login" },
    ];

    return (
        <nav className="bg-[#0052CC] text-white py-4 px-6 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left: Logo and Brand */}
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="NGIT Logo" className="h-9 w-auto" />
                    <span className="font-semibold text-lg md:text-xl tracking-wide">
                        NGIT Software Solution
                    </span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.path;
                        return (
                            <li key={link.name} className="relative group">
                                {/* removed text color changes; text stays white */}
                                <Link href={link.path} className="transition duration-200 pb-1">
                                    {link.name}
                                </Link>
                                {/* underline only (no text color change). uses white so it's visible on the blue bar */}
                                <span
                                    className={`absolute left-0 bottom-0 h-[2px] w-full bg-white transform origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                        }`}
                                ></span>
                            </li>
                        );
                    })}
                    <li>
                        <Link
                            href="/contact"
                            className="bg-white text-[#0052CC] hover:bg-white/90 px-4 py-2 rounded-full transition"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden mt-3 bg-[#0052CC] rounded-lg shadow-lg">
                    <ul className="flex flex-col space-y-4 py-4 px-6 text-sm font-medium">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.path;
                            return (
                                <li key={link.name} className="relative group">
                                    <Link href={link.path} className="transition duration-200 pb-1">
                                        {link.name}
                                    </Link>
                                    <span
                                        className={`absolute left-0 bottom-0 h-[2px] w-full bg-white transform origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                    ></span>
                                </li>
                            );
                        })}
                        <li>
                            <Link
                                href="/contact"
                                className="bg-white text-[#0052CC] px-4 py-2 rounded-full transition inline-block text-center"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
