'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  LayoutDashboard,
  BookOpen,
  Award,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import { FaUserCheck } from 'react-icons/fa'
import { PiStudent } from "react-icons/pi";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false); // for desktop mini mode

  const navLinks = [
    { name: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Program", href: "/admin/programs", icon: <GraduationCap size={20} /> },
    { name: "Staff", href: "/admin/staff", icon: <FaUserCheck size={20} /> },
    { name: "Students", href: "/admin/student", icon: <PiStudent size={20} /> },
    {
      name: "Payments", href: "/admin/payments", icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="1" y="4" width="22" height="16" rx="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      )
    },
    { name: "Certificates", href: "/admin/certificates", icon: <Award size={20} /> },
    { name: "Settings", href: "/admin/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--text)]">
      {/* 🔝 Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-[var(--primary)] text-white shadow-md">
        <div className="flex items-center gap-3">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden focus:outline-none"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href="/admin" className="font-semibold text-lg">
            🎓 Ngit Academy
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white">
            <Image
              src="/avatar.png"
              alt="Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        </div>
      </header>

      {/* 🧭 Sidebar + Content */}
      <div className="flex flex-1 pt-14">
        {/* Sidebar */}
        <aside
          className={`fixed md:static top-0 left-0 h-full md:h-auto bg-white border-r border-gray-200 shadow-sm transition-all duration-300 z-40 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 
          ${collapsed ? "md:w-20" : "md:w-64"}`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            {!collapsed && <h2 className="text-lg font-semibold">Dashboard</h2>}

            {/* Collapse toggle (desktop only) */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden md:flex items-center justify-center w-6 h-6 rounded-md text-gray-500 hover:text-[var(--accent)] transition"
            >
              {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[var(--text)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-all
                  ${collapsed ? "justify-center" : ""}
                `}
              >
                {link.icon}
                {!collapsed && <span>{link.name}</span>}
              </Link>
            ))}

            <button
              className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-all ${collapsed ? "justify-center" : ""
                }`}
            >
              <LogOut size={20} />
              {!collapsed && <span>Logout</span>}
            </button>
          </nav>
        </aside>

        {/* Overlay (mobile) */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
          />
        )}

        {/* Main Content */}
        <main
          className={`flex-1 px-4 md:px-6 py-6 transition-all duration-300 
            ${collapsed ? "md:ml-20" : "md:ml-10"}
          `}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
