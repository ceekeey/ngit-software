"use client";
import { useState } from "react";
import { CreditCard, CheckCircle, XCircle } from "lucide-react";

export default function PaymentPage() {
    const [showModal, setShowModal] = useState(false);

    const payments = [
        {
            course: "Web Development Basics",
            amount: "$49",
            date: "Oct 10, 2025",
            status: "Paid",
        },
        {
            course: "Advanced React",
            amount: "$79",
            date: "Sep 22, 2025",
            status: "Pending",
        },
        {
            course: "UI/UX Design Fundamentals",
            amount: "$59",
            date: "Aug 12, 2025",
            status: "Paid",
        },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--text)]">
                        Payment History
                    </h1>
                    <p className="text-sm text-gray-500">
                        Manage your payments and view your transactions
                    </p>
                </div>

                <button
                    onClick={() => setShowModal(true)}
                    className="bg-[var(--accent)] text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition-all flex items-center gap-2"
                >
                    <CreditCard size={18} />
                    Make Payment
                </button>
            </div>

            {/* Payment History Table */}
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
                        {payments.map((p, i) => (
                            <tr key={i} className="border-t hover:bg-gray-50">
                                <td className="p-4">{p.course}</td>
                                <td className="p-4">{p.amount}</td>
                                <td className="p-4">{p.date}</td>
                                <td className="p-4">
                                    {p.status === "Paid" ? (
                                        <span className="flex items-center gap-1 text-green-600">
                                            <CheckCircle size={16} />
                                            Paid
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1 text-yellow-600">
                                            <XCircle size={16} />
                                            Pending
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Payment Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl relative">
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
