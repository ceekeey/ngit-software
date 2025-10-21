// SingleProgramPaymentsPage.js (New Component for Student List Detail View)
"use client";

import { FaCheckCircle, FaTimesCircle, FaFilter, FaArrowLeft, FaDollarSign } from "react-icons/fa";
import { useState } from "react";
import Link from 'next/link';

// Dummy data for a specific program (e.g., 'web-dev-basics')
const STUDENT_PAYMENT_LIST = [
    { id: 101, name: "Alice Johnson", email: "alice@example.com", amountDue: 0, status: "Paid" },
    { id: 102, name: "Bob Smith", email: "bob@example.com", amountDue: 49, status: "Pending" },
    { id: 103, name: "Charlie Brown", email: "charlie@example.com", amountDue: 0, status: "Paid" },
    { id: 104, name: "Dana Scully", email: "dana@example.com", amountDue: 25, status: "Payment Plan" },
    { id: 105, name: "Ethan Hunt", email: "ethan@example.com", amountDue: 0, status: "Paid" },
    { id: 106, name: "Fiona Glenn", email: "fiona@example.com", amountDue: 79, status: "Unpaid" },
];

// Helper to simulate fetching program details (replace with actual data fetching)
const getProgramDetails = (id) => {
    const nameMap = {
        'web-dev-basics': 'Web Development Basics',
        'advanced-react': 'Advanced React',
        'ui-ux-design': 'UI/UX Design Fundamentals',
        'nodejs-essentials': 'Node.js Essentials',
    };
    return {
        id,
        name: nameMap[id] || "Unknown Program",
        studentCount: STUDENT_PAYMENT_LIST.length,
        paidCount: STUDENT_PAYMENT_LIST.filter(s => s.status === 'Paid').length,
    };
};

// In a real Next.js app, you would get 'programId' from the URL params.
// For this example, we'll hardcode one.
const PROGRAM_ID = 'web-dev-basics';
const programDetails = getProgramDetails(PROGRAM_ID);


export default function SingleProgramPaymentsPage() {
    const [filter, setFilter] = useState("All");

    const filteredStudents = STUDENT_PAYMENT_LIST.filter(s =>
        filter === "All" || s.status === filter
    );

    // Status colors and icons
    const getStatusInfo = (status) => {
        switch (status) {
            case 'Paid': return { text: 'Paid', color: 'text-green-600', icon: <FaCheckCircle /> };
            case 'Pending': return { text: 'Pending', color: 'text-yellow-600', icon: <FaTimesCircle /> };
            case 'Payment Plan': return { text: 'Plan Active', color: 'text-blue-600', icon: <FaDollarSign /> };
            case 'Unpaid': return { text: 'Unpaid', color: 'text-red-660', icon: <FaTimesCircle /> };
            default: return { text: 'Unknown', color: 'text-gray-500', icon: <FaTimesCircle /> };
        }
    };

    return (
        <div className="space-y-8 p-6 md:p-8">
            {/* Header and Back Button */}
            <div className="border-b pb-4">
                <Link href="/payments" className="flex items-center text-blue-600 hover:text-blue-800 transition mb-3 font-medium">
                    <FaArrowLeft className="mr-2" /> Back to Programs Overview
                </Link>
                <h1 className="text-3xl font-extrabold text-gray-800">{programDetails.name}</h1>
                <p className="text-sm text-gray-500">
                    Detailed payment status for all enrolled students.
                </p>
            </div>

            {/* Key Stats */}
            <div className="grid gap-6 sm:grid-cols-3">
                <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-blue-500">
                    <p className="text-sm text-gray-500">Total Students</p>
                    <h3 className="text-2xl font-bold text-gray-900">{programDetails.studentCount}</h3>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-500">
                    <p className="text-sm text-gray-500">Paid Status</p>
                    <h3 className="text-2xl font-bold text-gray-900">{programDetails.paidCount}</h3>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-red-500">
                    <p className="text-sm text-gray-500">Pending/Unpaid</p>
                    <h3 className="text-2xl font-bold text-gray-900">{programDetails.studentCount - programDetails.paidCount}</h3>
                </div>
            </div>


            {/* Filter and Table */}
            <div className="flex items-center gap-3 pt-4 border-t">
                <FaFilter className="text-gray-600" />
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    <option value="All">All Statuses</option>
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                    <option value="Payment Plan">Payment Plan</option>
                    <option value="Unpaid">Unpaid</option>
                </select>
            </div>

            {/* Student List Table */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="p-4 font-medium">Student Name</th>
                            <th className="p-4 font-medium">Email</th>
                            <th className="p-4 font-medium">Amount Due ($)</th>
                            <th className="p-4 font-medium">Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((s) => {
                            const statusInfo = getStatusInfo(s.status);
                            return (
                                <tr key={s.id} className="border-t hover:bg-gray-50 transition-all">
                                    <td className="p-4 font-medium text-gray-800">{s.name}</td>
                                    <td className="p-4 text-gray-600">{s.email}</td>
                                    <td className={`p-4 font-bold ${s.amountDue > 0 ? 'text-red-500' : 'text-green-500'}`}>
                                        ${s.amountDue.toFixed(2)}
                                    </td>
                                    <td className="p-4">
                                        <span className={`flex items-center gap-1 font-medium ${statusInfo.color}`}>
                                            {statusInfo.icon}
                                            {statusInfo.text}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}