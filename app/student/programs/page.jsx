// app/programs/page.tsx
"use client";

import { useState } from "react";

export default function ProgramsPage() {
    const [programs] = useState([
        {
            id: 1,
            title: "Frontend Development",
            description: "Master HTML, CSS, JavaScript, and React.",
            progress: 80,
        },
        {
            id: 2,
            title: "Backend Development",
            description: "Learn Node.js, Express, and MongoDB.",
            progress: 45,
        },
        {
            id: 3,
            title: "UI/UX Design",
            description: "Design intuitive interfaces and experiences.",
            progress: 100,
        },
    ]);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-2xl font-bold mb-6 text-[var(--text)]">
                My Programs
            </h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {programs.map((program) => (
                    <div
                        key={program.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-5"
                    >
                        <h2 className="text-xl font-semibold mb-2 text-[var(--text)]">
                            {program.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {program.description}
                        </p>

                        {/* Progress bar */}
                        <div className="mb-4">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${program.progress}%` }}
                                ></div>
                            </div>
                            <p className="text-sm mt-1 text-gray-500 dark:text-gray-400">
                                {program.progress}% complete
                            </p>
                        </div>

                        {/* Button */}
                        <button
                            className={`w-full py-2 px-4 rounded-lg font-medium text-white transition-all ${program.progress === 100
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-blue-600 hover:bg-blue-700"
                                }`}
                        >
                            {program.progress === 100
                                ? "View Certificate"
                                : "Continue Learning"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
