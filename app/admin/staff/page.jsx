"use client";
import { useState } from "react";
import { UserCog, Edit, Trash2, Plus, X } from "lucide-react";

export default function StaffPage() {
    const [staffList, setStaffList] = useState([
        { id: 1, name: "Alice Johnson", role: "Administrator", email: "alice@ngit.com" },
        { id: 2, name: "Mark Thompson", role: "Instructor", email: "mark@ngit.com" },
        { id: 3, name: "Linda Brown", role: "Support", email: "linda@ngit.com" },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [editingStaff, setEditingStaff] = useState(null);
    const [form, setForm] = useState({ name: "", role: "", email: "" });

    // Handle open modal for new or edit
    const openModal = (staff = null) => {
        if (staff) {
            setEditingStaff(staff);
            setForm({ name: staff.name, role: staff.role, email: staff.email });
        } else {
            setEditingStaff(null);
            setForm({ name: "", role: "", email: "" });
        }
        setShowModal(true);
    };

    // Handle save (add or update)
    const handleSave = (e) => {
        e.preventDefault();

        if (editingStaff) {
            setStaffList((prev) =>
                prev.map((s) =>
                    s.id === editingStaff.id ? { ...s, ...form } : s
                )
            );
        } else {
            const newStaff = { id: Date.now(), ...form };
            setStaffList((prev) => [...prev, newStaff]);
        }

        setShowModal(false);
    };

    // Handle delete
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this staff member?")) {
            setStaffList((prev) => prev.filter((s) => s.id !== id));
        }
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--text)] flex items-center gap-2">
                        <UserCog className="text-[var(--accent)]" /> Staff Management
                    </h1>
                    <p className="text-sm text-gray-500">
                        Manage all staff members, their roles, and access.
                    </p>
                </div>

                <button
                    onClick={() => openModal()}
                    className="bg-[var(--accent)] text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition-all flex items-center gap-2"
                >
                    <Plus size={18} /> Add Staff
                </button>
            </div>

            {/* Staff Table */}
            <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
                <table className="min-w-full border-collapse text-sm">
                    <thead className="bg-[var(--primary)] text-white">
                        <tr>
                            <th className="py-3 px-4 text-left font-medium">#</th>
                            <th className="py-3 px-4 text-left font-medium">Name</th>
                            <th className="py-3 px-4 text-left font-medium">Email</th>
                            <th className="py-3 px-4 text-left font-medium">Role</th>
                            <th className="py-3 px-4 text-left font-medium text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffList.length > 0 ? (
                            staffList.map((staff, i) => (
                                <tr
                                    key={staff.id}
                                    className="border-b hover:bg-gray-50 transition-all"
                                >
                                    <td className="py-3 px-4">{i + 1}</td>
                                    <td className="py-3 px-4 font-medium text-[var(--text)]">
                                        {staff.name}
                                    </td>
                                    <td className="py-3 px-4 text-gray-600">{staff.email}</td>
                                    <td className="py-3 px-4">{staff.role}</td>
                                    <td className="py-3 px-4 text-center flex items-center justify-center gap-3">
                                        <button
                                            onClick={() => openModal(staff)}
                                            className="text-blue-600 hover:text-blue-800"
                                        >
                                            <Edit size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(staff.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="text-center py-8 text-gray-500 italic"
                                >
                                    No staff members found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Add/Edit Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-xl font-semibold text-[var(--text)] mb-4">
                            {editingStaff ? "Edit Staff" : "Add New Staff"}
                        </h2>

                        <form onSubmit={handleSave} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({ ...form, name: e.target.value })
                                    }
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                                    placeholder="Enter full name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={(e) =>
                                        setForm({ ...form, email: e.target.value })
                                    }
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                                    placeholder="Enter email"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Role
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={form.role}
                                    onChange={(e) =>
                                        setForm({ ...form, role: e.target.value })
                                    }
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                                    placeholder="Enter role (e.g., Instructor)"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[var(--primary)] text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
                            >
                                {editingStaff ? "Update Staff" : "Add Staff"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
