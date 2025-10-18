import React from "react";
import Link from "next/link";

const Navigation = () => {
    return (
        <nav className="bg-[#0052CC] text-primary py-3 px-6 flex items-center justify-between shadow-md">
            {/* Left: Logo and Brand */}
            <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Logo" className="h-9 w-auto" />
                <span className="font-bold text-lg tracking-wide">Ngit Software Solutions</span>
            </div>

            {/* Right: Navigation links */}
            <ul className="flex items-center gap-5 text-sm font-medium">
                <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
                <li><Link href="/#about" className="hover:text-accent transition">About</Link></li>
                <li><Link href="/#team" className="hover:text-accent transition">Team</Link></li>
                <li><Link href="/#training" className="hover:text-accent transition">Training</Link></li>
                <li><Link href="/portpolio" className="hover:text-accent transition">Portpolio</Link></li>
                <li><Link href="/solutions" className="hover:text-accent transition">Solutions</Link></li>
                <li><Link href="/student/login" className="hover:text-accent transition">Login</Link></li>
                <li><Link href="/contact" className="hover:text-accent transition">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
