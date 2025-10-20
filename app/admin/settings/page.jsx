"use client";
import { useState } from "react";
import { User, Mail, GraduationCap, Edit3 } from "lucide-react";

export default function SettingsPage() {
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState({
        name: "John Doe",
        email: "johndoe@email.com",
        program: "Computer Science",
        phone: "+234 901 234 5678",
    });

    const [formData, setFormData] = useState(user);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(formData);
        setShowModal(false);
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-[var(--text)]">Settings</h1>
                <p className="text-sm text-gray-500">Manage your profile and preferences</p>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[var(--accent)]">
                        <img
                            src="/avatar.png"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-[var(--text)]">{user.name}</h2>
                        <p className="text-sm text-gray-500">{user.program}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                </div>

                <button
                    onClick={() => setShowModal(true)}
                    className="bg-[var(--accent)] text-white px-4 py-2 rounded-lg hover:bg-blue-500 flex items-center gap-2 transition-all"
                >
                    <Edit3 size={18} />
                    Edit Profile
                </button>
            </div>

            {/* Account Details */}
            <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">
                    Account Details
                </h2>

                <div className="grid sm:grid-cols-2 gap-6 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                        <User size={18} className="text-[var(--primary)]" />
                        <span className="font-medium w-28">Full Name:</span>
                        <span>{user.name}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700">
                        <Mail size={18} className="text-[var(--primary)]" />
                        <span className="font-medium w-28">Email:</span>
                        <span>{user.email}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700">
                        <GraduationCap size={18} className="text-[var(--primary)]" />
                        <span className="font-medium w-28">Program:</span>
                        <span>{user.program}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700">
                        📞 <span className="font-medium w-28">Phone:</span>
                        <span>{user.phone}</span>
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
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
                            Edit Profile
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Program
                                </label>
                                <input
                                    type="text"
                                    name="program"
                                    value={formData.program}
                                    onChange={handleChange}
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[var(--primary)] text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
