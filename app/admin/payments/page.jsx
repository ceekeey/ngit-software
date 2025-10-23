// CoursePaymentsPage.js (New Component for the Program Card List)
"use client";

import { useState, useEffect } from "react";
import { FaCreditCard, FaFilter, FaBookOpen, FaUsers } from "react-icons/fa";
import Link from 'next/link'; // Import Link for navigation
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Dummy data for Programs and Chart
const PROGRAM_LIST = [
    { id: 'web-dev-basics', name: "Web Development Basics", enrollments: 350, pending: 45, color: '#0052CC' },
    { id: 'advanced-react', name: "Advanced React", enrollments: 210, pending: 20, color: '#FF8042' },
    { id: 'ui-ux-design', name: "UI/UX Design Fundamentals", enrollments: 180, pending: 12, color: '#00C49F' },
    { id: 'nodejs-essentials', name: "Node.js Essentials", enrollments: 150, pending: 8, color: '#FFBB28' },
];

const chartData = [
    { month: "Jul", Paid: 6900, Pending: 1500 },
    { month: "Aug", Paid: 5900, Pending: 1200 },
    { month: "Sep", Paid: 7900, Pending: 2000 },
    { month: "Oct", Paid: 4900, Pending: 1800 },
];

function ProgramCard({ program }) {
    return (
        // Link to the new dynamic single program page
        <Link href={`payments/${program.id}`}>
            <div
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-t-4"
                style={{ borderColor: program.color }}
            >
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-bold text-gray-800">{program.name}</h2>
                    <FaBookOpen className="text-gray-500" size={24} />
                </div>

                <p className="text-sm text-gray-500 mb-4">Total Students: <span className="font-semibold text-gray-700">{program.enrollments}</span></p>

                <div className="flex justify-between text-center border-t pt-4">
                    <div>
                        <p className="text-2xl font-bold text-green-600">
                            {program.enrollments - program.pending}
                        </p>
                        <p className="text-xs text-gray-500">Paid/Settled</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-red-600">
                            {program.pending}
                        </p>
                        <p className="text-xs text-gray-500">Pending</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}


export default function CoursePaymentsPage() {
    const [showModal, setShowModal] = useState(false);

    // We will use filter here if we had more than one category of programs, 
    // but for now, we show all.

    return (
        <div className="space-y-10 p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-800">Program Payment Overview</h1>
                    <p className="text-sm text-gray-500">
                        Select a program to view individual student payment status.
                    </p>
                </div>

                {/* <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 font-medium shadow-md"
                >
                    <FaCreditCard />
                    Record New Payment
                </button> */}
            </div>

            {/* --- RECHARTS CHART --- */}
            <div className="bg-white rounded-2xl shadow-lg p-6 min-h-[300px]">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Monthly Payment Summary (Total Value)
                </h2>
                <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" stroke="#6B7280" />
                        <YAxis stroke="#6B7280" tickFormatter={(value) => `$${value.toLocaleString()}`} />
                        <Tooltip
                            formatter={(value, name) => [`$${value.toLocaleString()}`, name]}
                            contentStyle={{ borderRadius: '8px', border: 'none' }}
                        />
                        <Legend wrapperStyle={{ paddingTop: '10px' }} />
                        <Bar dataKey="Paid" stackId="a" fill="#10B981" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="Pending" stackId="a" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Program Cards Grid */}
            <h2 className="text-2xl font-bold text-gray-800 pt-4 border-t">Programs List</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {PROGRAM_LIST.map((program) => (
                    <ProgramCard key={program.id} program={program} />
                ))}
            </div>

            {/* Modal - same as your original "Make Payment" modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 transition-all">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl relative animate-fadeIn">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
                        >
                            ✕
                        </button>

                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Record New Payment
                        </h2>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert("Payment simulated!");
                                setShowModal(false);
                            }}
                            className="space-y-4"
                        >
                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Course Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Web Development Basics"
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Amount
                                </label>
                                <input
                                    type="number"
                                    required
                                    placeholder="e.g. 49"
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all font-medium"
                            >
                                Confirm Payment
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}