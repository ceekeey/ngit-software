"use client";

import { useState, useEffect } from "react";
import {
    FaCreditCard,
    FaCheckCircle,
    FaTimesCircle,
    FaFilter,
} from "react-icons/fa";

export default function PaymentPage() {
    const [showModal, setShowModal] = useState(false);
    const [filter, setFilter] = useState("All");

    const payments = [
        { course: "Web Development Basics", amount: 49, date: "Oct 10, 2025", status: "Paid" },
        { course: "Advanced React", amount: 79, date: "Sep 22, 2025", status: "Pending" },
        { course: "UI/UX Design Fundamentals", amount: 59, date: "Aug 12, 2025", status: "Paid" },
        { course: "Node.js Essentials", amount: 69, date: "Jul 5, 2025", status: "Paid" },
    ];

    const filteredPayments =
        filter === "All" ? payments : payments.filter((p) => p.status === filter);

    const chartData = [
        { month: "Jul", total: 69, status: "Paid" },
        { month: "Aug", total: 59, status: "Paid" },
        { month: "Sep", total: 79, status: "Pending" },
        { month: "Oct", total: 49, status: "Paid" },
    ];

    const maxAmount = Math.max(...chartData.map((d) => d.total));
    const [animateBars, setAnimateBars] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimateBars(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--text)]">Payment History</h1>
                    <p className="text-sm text-gray-500">
                        Manage your payments and view your transactions
                    </p>
                </div>

                <button
                    onClick={() => setShowModal(true)}
                    className="bg-[var(--accent)] text-white px-5 py-2 rounded-lg hover:brightness-110 transition-all flex items-center gap-2"
                >
                    <FaCreditCard />
                    Make Payment
                </button>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-3">
                <FaFilter className="text-gray-600" />
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                >
                    <option value="All">All Payments</option>
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                </select>
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-[var(--background)] text-gray-700">
                        <tr>
                            <th className="p-4 font-medium">Course</th>
                            <th className="p-4 font-medium">Amount</th>
                            <th className="p-4 font-medium">Date</th>
                            <th className="p-4 font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPayments.map((p, i) => (
                            <tr key={i} className="border-t hover:bg-gray-50 transition-all">
                                <td className="p-4">{p.course}</td>
                                <td className="p-4">${p.amount}</td>
                                <td className="p-4">{p.date}</td>
                                <td className="p-4">
                                    {p.status === "Paid" ? (
                                        <span className="flex items-center gap-1 text-green-600">
                                            <FaCheckCircle />
                                            Paid
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1 text-yellow-600">
                                            <FaTimesCircle />
                                            Pending
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Custom Bar Chart */}
            <div className="bg-white rounded-2xl shadow-md p-6 min-h-[260px]">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">
                    Payment Summary by Month
                </h2>

                <div className="flex items-end justify-between h-48 gap-4">
                    {chartData.map((data, i) => (
                        <div key={i} className="flex flex-col items-center flex-1">
                            <div
                                className={`w-full rounded-t-lg transition-all duration-700 ease-out origin-bottom ${data.status === "Paid"
                                        ? "bg-green-500 hover:bg-green-600"
                                        : "bg-yellow-500 hover:bg-yellow-600"
                                    }`}
                                style={{
                                    height: animateBars
                                        ? `${(data.total / maxAmount) * 100}%`
                                        : "0%",
                                }}
                            ></div>
                            <span className="text-sm mt-2 text-gray-600 font-medium">
                                {data.month}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Legend */}
                <div className="flex justify-center gap-6 mt-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span> Paid
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span> Pending
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50 transition-all">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl relative animate-fadeIn">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                        >
                            ✕
                        </button>

                        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
                            Make a Payment
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
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
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
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[var(--primary)] text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
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
