"use client";

import { useState } from "react";
import { Pencil, Trash2, Users, Plus } from "lucide-react";

export default function ProgramsPage() {
    const [programs, setPrograms] = useState([
        {
            id: 1,
            title: "Frontend Development",
            description: "Master HTML, CSS, JavaScript, and React.",
            totalUsers: 125,
        },
        {
            id: 2,
            title: "Backend Development",
            description: "Learn Node.js, Express, and MongoDB.",
            totalUsers: 98,
        },
        {
            id: 3,
            title: "UI/UX Design",
            description: "Design intuitive interfaces and experiences.",
            totalUsers: 76,
        },
    ]);

    // Modal states
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [selectedProgram, setSelectedProgram] = useState(null);
    const [deleteId, setDeleteId] = useState(null);

    // Form states
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        totalUsers: 0,
    });

    // Open Add Modal
    const handleOpenAdd = () => {
        setFormData({ title: "", description: "", totalUsers: 0 });
        setShowAddModal(true);
    };

    // Add new program
    const handleAddProgram = () => {
        if (!formData.title.trim() || !formData.description.trim()) return;
        const newProgram = {
            id: Date.now(),
            ...formData,
        };
        setPrograms([...programs, newProgram]);
        setShowAddModal(false);
    };

    // Open Edit Modal
    const handleEdit = (program) => {
        setSelectedProgram(program);
        setFormData({
            title: program.title,
            description: program.description,
            totalUsers: program.totalUsers,
        });
        setShowEditModal(true);
    };

    // Save edits
    const handleSaveEdit = () => {
        setPrograms((prev) =>
            prev.map((p) =>
                p.id === selectedProgram.id ? { ...p, ...formData } : p
            )
        );
        setShowEditModal(false);
        setSelectedProgram(null);
    };

    // Delete flow
    const confirmDelete = (id) => {
        setDeleteId(id);
        setShowDeleteModal(true);
    };

    const handleDeleteConfirmed = () => {
        setPrograms(programs.filter((p) => p.id !== deleteId));
        setShowDeleteModal(false);
        setDeleteId(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-[var(--text)]">
                    Manage Programs
                </h1>
                <button
                    onClick={handleOpenAdd}
                    className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    Add Program
                </button>
            </div>

            {/* Program Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {programs.map((program) => (
                    <div
                        key={program.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-5 flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-[var(--text)]">
                                {program.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                {program.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center text-gray-600">
                                <Users className="w-5 h-5 mr-2 text-blue-600" />
                                <span className="text-sm font-medium">
                                    {program.totalUsers} applied
                                </span>
                            </div>

                            <div className="flex space-x-3">
                                <button
                                    onClick={() => handleEdit(program)}
                                    className="text-blue-600 hover:text-blue-800 transition-colors"
                                    title="Edit"
                                >
                                    <Pencil className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => confirmDelete(program.id)}
                                    className="text-red-600 hover:text-red-800 transition-colors"
                                    title="Delete"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ADD MODAL */}
            {showAddModal && (
                <Modal onClose={() => setShowAddModal(false)} title="Add Program">
                    <ProgramForm
                        formData={formData}
                        setFormData={setFormData}
                        onCancel={() => setShowAddModal(false)}
                        onSubmit={handleAddProgram}
                        actionLabel="Add"
                    />
                </Modal>
            )}

            {/* EDIT MODAL */}
            {showEditModal && (
                <Modal onClose={() => setShowEditModal(false)} title="Edit Program">
                    <ProgramForm
                        formData={formData}
                        setFormData={setFormData}
                        onCancel={() => setShowEditModal(false)}
                        onSubmit={handleSaveEdit}
                        actionLabel="Save Changes"
                    />
                </Modal>
            )}

            {/* DELETE CONFIRMATION MODAL */}
            {showDeleteModal && (
                <Modal onClose={() => setShowDeleteModal(false)} title="Confirm Deletion">
                    <div className="text-center">
                        <p className="text-gray-600 mb-6">
                            Are you sure you want to delete this program? This action
                            cannot be undone.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteConfirmed}
                                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

/* ----------------- SHARED COMPONENTS ------------------ */

function Modal({ title, children, onClose }) {
    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/10 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
                {children}
            </div>
        </div>
    );
}

function ProgramForm({ formData, setFormData, onSubmit, onCancel, actionLabel }) {
    return (
        <div>
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="Program Title"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                    value={formData.title}
                    onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                    }
                />
                <textarea
                    placeholder="Program Description"
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                    value={formData.description}
                    onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                    }
                />
                <input
                    type="number"
                    placeholder="Total Users"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                    value={formData.totalUsers}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            totalUsers: Number(e.target.value),
                        })
                    }
                />
            </div>

            <div className="flex justify-end mt-6 space-x-3">
                <button
                    onClick={onCancel}
                    className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
                >
                    Cancel
                </button>
                <button
                    onClick={onSubmit}
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
                >
                    {actionLabel}
                </button>
            </div>
        </div>
    );
}
