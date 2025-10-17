"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
            setDark(true);
            document.documentElement.setAttribute("data-theme", "dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = dark ? "light" : "dark";
        setDark(!dark);
        document.documentElement.setAttribute("data-theme", newTheme === "dark" ? "dark" : "");
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded bg-accent text-background transition"
        >
            {dark ? "☀️" : "🌙"}
        </button>
    );
}
