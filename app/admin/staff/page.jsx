"use client";
import { useState } from "react";
import { UserCog, Edit, Trash2, Plus, X, Search, Filter } from "lucide-react";
// Import social icons (using 'react-icons' is common practice, 
// but since we only have Lucide imported, I will use external icons for this specific purpose)
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function StaffPage() {
    const initialStaffList = [
        { id: 1, name: "Alice Johnson", role: "Administrator", email: "alice@ngit.com", github: "alice-git", linkedin: "alice-johnson" },
        { id: 2, name: "Mark Thompson", role: "Instructor", email: "mark@ngit.com", github: "mark-dev", linkedin: "mark-thompson-instructor" },
        { id: 3, name: "Linda Brown", role: "Support", email: "linda@ngit.com", github: null, linkedin: "linda-support" },
        { id: 4, name: "David Chen", role: "Instructor", email: "david@ngit.com", github: "david-fullstack", linkedin: "david-chen-prof" },
    ];

    const [staffList, setStaffList] = useState(initialStaffList);

    // --- NEW: Filter and Search States ---
    const [searchTerm, setSearchTerm] = useState("");
    const [filterRole, setFilterRole] = useState("All");

    const [showModal, setShowModal] = useState(false);
    const [editingStaff, setEditingStaff] = useState(null);
    const [form, setForm] = useState({
        name: "",
        role: "",
        email: "",
        github: "", // NEW
        linkedin: "" // NEW
    });

    // Helper to get all unique roles for the filter dropdown
    const availableRoles = Array.from(new Set(initialStaffList.map(s => s.role)));

    // Handle open modal for new or edit
    const openModal = (staff = null) => {
        if (staff) {
            setEditingStaff(staff);
            setForm({
                name: staff.name,
                role: staff.role,
                email: staff.email,
                github: staff.github || "", // Handle null links
                linkedin: staff.linkedin || ""
            });
        } else {
            setEditingStaff(null);
            setForm({ name: "", role: "", email: "", github: "", linkedin: "" });
        }
        setShowModal(true);
    };

    // Handle save (add or update)
    const handleSave = (e) => {
        e.preventDefault();

        const dataToSave = {
            ...form,
            // Convert empty strings to null for consistency
            github: form.github.trim() || null,
            linkedin: form.linkedin.trim() || null,
        };

        if (editingStaff) {
            setStaffList((prev) =>
                prev.map((s) =>
                    s.id === editingStaff.id ? { ...s, ...dataToSave } : s
                )
            );
        } else {
            const newStaff = { id: Date.now(), ...dataToSave };
            setStaffList((prev) => [...prev, newStaff]);
        }

        setShowModal(false);
    };

    // Handle delete (kept simple)
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this staff member?")) {
            setStaffList((prev) => prev.filter((s) => s.id !== id));
        }
    };

    // --- NEW: Filtering and Searching Logic ---
    const filteredAndSearchedStaff = staffList.filter(staff => {
        const matchesSearch = searchTerm === "" ||
            staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            staff.email.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter = filterRole === "All" || staff.role === filterRole;

        return matchesSearch && matchesFilter;
    });

    return (
        <div className="space-y-8 p-6 md:p-8">
            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-4 border-b pb-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                        <UserCog className="text-blue-600 w-7 h-7" /> Staff Management
                    </h1>
                    <p className="text-sm text-gray-500">
                        Manage all personnel, their roles, and contact information.
                    </p>
                </div>

                <button
                    onClick={() => openModal()}
                    className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 font-medium shadow-md"
                >
                    <Plus size={18} /> Add New Staff
                </button>
            </div>

            {/* --- NEW: Search and Filter Bar --- */}
            <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-xl shadow-md">

                {/* Search Input */}
                <div className="relative flex-grow min-w-[200px] md:min-w-[300px]">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                {/* Role Filter */}
                <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-gray-600" />
                    <select
                        value={filterRole}
                        onChange={(e) => setFilterRole(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="All">All Roles</option>
                        {availableRoles.map(role => (
                            <option key={role} value={role}>{role}</option>
                        ))}
                    </select>
                </div>

                {/* Clear Filter/Search Button */}
                {(searchTerm !== "" || filterRole !== "All") && (
                    <button
                        onClick={() => { setSearchTerm(""); setFilterRole("All"); }}
                        className="flex items-center text-red-500 hover:text-red-700 transition-colors text-sm font-medium"
                    >
                        <X className="w-4 h-4 mr-1" /> Clear
                    </button>
                )}
            </div>

            {/* Staff Table */}
            <div className="overflow-x-auto bg-white rounded-2xl shadow-xl">
                <table className="min-w-full border-collapse text-sm">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left font-medium">Name</th>
                            <th className="py-3 px-4 text-left font-medium">Role</th>
                            <th className="py-3 px-4 text-left font-medium">Email</th>
                            <th className="py-3 px-4 text-center font-medium">Social</th>
                            <th className="py-3 px-4 text-center font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAndSearchedStaff.length > 0 ? (
                            filteredAndSearchedStaff.map((staff) => (
                                <tr
                                    key={staff.id}
                                    className="border-b hover:bg-gray-50 transition-all"
                                >
                                    <td className="py-3 px-4 font-medium text-gray-800">
                                        {staff.name}
                                    </td>
                                    <td className="py-3 px-4 text-gray-600">{staff.role}</td>
                                    <td className="py-3 px-4 text-blue-600 hover:underline">
                                        <a href={`mailto:${staff.email}`}>{staff.email}</a>
                                    </td>

                                    {/* --- NEW: Social Icons --- */}
                                    <td className="py-3 px-4 text-center">
                                        <div className="flex items-center justify-center gap-3">
                                            {staff.linkedin && (
                                                <a
                                                    href={`https://linkedin.com/in/${staff.linkedin}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-700 hover:text-blue-900 transition-colors"
                                                    title="LinkedIn Profile"
                                                >
                                                    <FaLinkedin size={18} />
                                                </a>
                                            )}
                                            {staff.github && (
                                                <a
                                                    href={`https://github.com/${staff.github}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-800 hover:text-black transition-colors"
                                                    title="GitHub Profile"
                                                >
                                                    <FaGithub size={18} />
                                                </a>
                                            )}
                                            {!staff.linkedin && !staff.github && (
                                                <span className="text-gray-400 text-xs">N/A</span>
                                            )}
                                        </div>
                                    </td>

                                    {/* Actions */}
                                    <td className="py-3 px-4 text-center">
                                        <div className="flex items-center justify-center gap-3">
                                            <button
                                                onClick={() => openModal(staff)}
                                                className="text-blue-600 hover:text-blue-800 p-1 rounded-md hover:bg-blue-50"
                                                title="Edit Staff"
                                            >
                                                <Edit size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(staff.id)}
                                                className="text-red-500 hover:text-red-700 p-1 rounded-md hover:bg-red-50"
                                                title="Delete Staff"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="text-center py-8 text-gray-500 italic"
                                >
                                    No staff members match the current filter/search criteria.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Add/Edit Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[100]">
                    <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl relative animate-in fade-in zoom-in-95">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition p-1"
                        >
                            <X size={20} />
                        </button>

                        <h2 className="text-2xl font-bold text-gray-800 mb-5 border-b pb-3">
                            {editingStaff ? "Edit Staff Details" : "Add New Staff Member"}
                        </h2>

                        <form onSubmit={handleSave} className="space-y-4">
                            {/* Standard Fields */}
                            <input
                                type="text"
                                required
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                                placeholder="Full Name"
                            />
                            <input
                                type="email"
                                required
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                                placeholder="Email Address"
                            />
                            <input
                                type="text"
                                required
                                value={form.role}
                                onChange={(e) => setForm({ ...form, role: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                                placeholder="Role (e.g., Instructor, Administrator)"
                            />

                            {/* --- NEW: Social Media Fields --- */}
                            <div className="pt-2">
                                <label className="block text-sm font-medium text-gray-600 mb-2">Social Profiles (Username/Handle)</label>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <FaGithub size={24} className="text-gray-800 flex-shrink-0" />
                                        <input
                                            type="text"
                                            value={form.github}
                                            onChange={(e) => setForm({ ...form, github: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                                            placeholder="GitHub Username (Optional)"
                                        />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaLinkedin size={24} className="text-blue-700 flex-shrink-0" />
                                        <input
                                            type="text"
                                            value={form.linkedin}
                                            onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                                            placeholder="LinkedIn Handle (Optional, e.g., 'john-doe-123')"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2.5 rounded-xl hover:bg-blue-700 transition-all font-medium mt-6 shadow-lg"
                            >
                                {editingStaff ? "Save Changes" : "Add Staff Member"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}