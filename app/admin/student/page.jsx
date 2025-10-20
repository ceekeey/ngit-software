"use client";
import { useState } from "react";
import { Search, Filter, User, UserCheck, UserX } from "lucide-react";

export default function StudentsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("All");

    const students = [
        { id: 1, name: "John Doe", email: "john@example.com", program: "Frontend Development", status: "Active" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", program: "Backend Development", status: "Inactive" },
        { id: 3, name: "Michael Brown", email: "michael@example.com", program: "Data Science", status: "Active" },
        { id: 4, name: "Emily White", email: "emily@example.com", program: "UI/UX Design", status: "Active" },
        { id: 5, name: "Chris Green", email: "chris@example.com", program: "Frontend Development", status: "Inactive" },
        { id: 6, name: "Sarah Johnson", email: "sarah@example.com", program: "Data Science", status: "Active" },
    ];

    const filteredStudents = students.filter((student) => {
        const matchesSearch =
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.email.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter = filter === "All" || student.status === filter;

        return matchesSearch && matchesFilter;
    });

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--text)] flex items-center gap-2">
                        <User className="text-[var(--accent)]" /> Students
                    </h1>
                    <p className="text-sm text-gray-500">
                        Manage your registered students and filter by status or program.
                    </p>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full sm:w-1/2 focus-within:ring-2 focus-within:ring-[var(--accent)]">
                    <Search className="text-gray-500 mr-2" size={18} />
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full focus:outline-none bg-transparent text-sm"
                    />
                </div>

                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 text-sm focus-within:ring-2 focus-within:ring-[var(--accent)]">
                    <Filter className="text-gray-500 mr-2" size={18} />
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="bg-transparent focus:outline-none text-sm"
                    >
                        <option value="All">All Students</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
            </div>

            {/* Students Table */}
            <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
                <table className="min-w-full border-collapse text-sm">
                    <thead className="bg-[var(--primary)] text-white">
                        <tr>
                            <th className="py-3 px-4 text-left font-medium">#</th>
                            <th className="py-3 px-4 text-left font-medium">Name</th>
                            <th className="py-3 px-4 text-left font-medium">Email</th>
                            <th className="py-3 px-4 text-left font-medium">Program</th>
                            <th className="py-3 px-4 text-left font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.length > 0 ? (
                            filteredStudents.map((student, index) => (
                                <tr
                                    key={student.id}
                                    className="border-b hover:bg-gray-50 transition-all"
                                >
                                    <td className="py-3 px-4">{index + 1}</td>
                                    <td className="py-3 px-4 font-medium text-[var(--text)]">
                                        {student.name}
                                    </td>
                                    <td className="py-3 px-4 text-gray-600">{student.email}</td>
                                    <td className="py-3 px-4">{student.program}</td>
                                    <td className="py-3 px-4">
                                        <span
                                            className={`flex items-center gap-1 font-medium ${student.status === "Active"
                                                ? "text-green-600"
                                                : "text-red-500"
                                                }`}
                                        >
                                            {student.status === "Active" ? (
                                                <UserCheck size={16} />
                                            ) : (
                                                <UserX size={16} />
                                            )}
                                            {student.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="text-center py-8 text-gray-500 italic"
                                >
                                    No students found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
