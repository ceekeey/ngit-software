"use client";

import { useState } from "react";
import {
    Pencil, Trash2, Users, Plus, BarChart3, PieChart, CheckSquare, Settings
} from "lucide-react";

// 1. Import Recharts components
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    ResponsiveContainer, Pie, PieChart as RechartsPieChart, Cell, Legend
} from 'recharts';

/* ----------------- DUMMY CHART DATA ------------------ */

// Data for Chart 1: Student Activity/Completion Rates
const activityData = [
    { name: 'Modules Completed', value: 85 },
    { name: 'Projects Submitted', value: 78 },
    { name: 'Quizzes Passed', value: 92 },
    { name: 'Certificates Claimed', value: 65 },
];
const ACTIVITY_COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

// Data for Chart 2: Program Enrollment Distribution
const enrollmentData = [
    { name: 'Frontend Dev', value: 125, fill: '#3B82F6' },
    { name: 'Backend Dev', value: 98, fill: '#10B981' },
    { name: 'UI/UX Design', value: 76, fill: '#F59E0B' },
    { name: 'Data Science', value: 55, fill: '#EF4444' },
];

/* ----------------- MAIN COMPONENT ------------------ */

export default function ProgramsPage() {
    // Initial program state with one extra program for chart diversity
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
        {
            id: 4,
            title: "Data Science & AI",
            description: "Explore Python, ML, and big data analysis.",
            totalUsers: 55,
        },
    ]);

    // Total active programs count
    const totalPrograms = programs.length;
    // Calculate total users across all programs
    const totalEnrollments = programs.reduce((sum, p) => sum + p.totalUsers, 0);

    // Modal and Form States (Kept from original)
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const [formData, setFormData] = useState({ title: "", description: "", totalUsers: 0 });

    // CRUD Handlers (Kept from original)
    const handleOpenAdd = () => {
        setFormData({ title: "", description: "", totalUsers: 0 });
        setShowAddModal(true);
    };

    const handleAddProgram = () => {
        if (!formData.title.trim() || !formData.description.trim()) return;
        const newProgram = {
            id: Date.now(),
            ...formData,
        };
        setPrograms([...programs, newProgram]);
        setShowAddModal(false);
    };

    const handleEdit = (program) => {
        setSelectedProgram(program);
        setFormData({
            title: program.title,
            description: program.description,
            totalUsers: program.totalUsers,
        });
        setShowEditModal(true);
    };

    const handleSaveEdit = () => {
        setPrograms((prev) =>
            prev.map((p) =>
                p.id === selectedProgram.id ? { ...p, ...formData } : p
            )
        );
        setShowEditModal(false);
        setSelectedProgram(null);
    };

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
        <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
            {/* Header and Add Button */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 border-b pb-4">
                <h1 className="text-3xl font-extrabold text-gray-800 flex items-center mb-4 md:mb-0">
                    <Settings className="w-7 h-7 mr-3 text-blue-600" />
                    Program Management
                </h1>
                <button
                    onClick={handleOpenAdd}
                    className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl shadow-md transition-all duration-200 text-base font-medium"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    Create New Program
                </button>
            </div>

            {/* Program Overview Stats */}
            <div className="grid gap-6 sm:grid-cols-2 mb-10">
                <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-between border-l-4 border-blue-500">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Total Active Programs</p>
                        <h3 className="text-3xl font-bold text-gray-900">{totalPrograms}</h3>
                    </div>
                    <Settings className="w-8 h-8 text-blue-500 opacity-60" />
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-between border-l-4 border-green-500">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Total Students Enrolled</p>
                        <h3 className="text-3xl font-bold text-gray-900">{totalEnrollments.toLocaleString()}</h3>
                    </div>
                    <Users className="w-8 h-8 text-green-500 opacity-60" />
                </div>
            </div>

            {/* --- CHARTS SECTION (Visual Insights) --- */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Visual Insights</h2>
            <div className="grid gap-6 lg:grid-cols-2 mb-10">

                {/* Chart 1: Student Activity/Completion Rates */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <BarChart3 className="w-5 h-5 mr-2 text-indigo-500" /> Student Engagement Metrics
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={activityData}
                            margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="name" stroke="#6B7280" angle={-15} textAnchor="end" height={50} />
                            <YAxis stroke="#6B7280" label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', fill: '#6B7280' }} />
                            <Tooltip
                                formatter={(value) => [`${value}%`, 'Success Rate']}
                                contentStyle={{ borderRadius: '8px', border: 'none' }}
                            />
                            <Bar dataKey="value" fill="#3B82F6" radius={[6, 6, 0, 0]}>
                                {activityData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={ACTIVITY_COLORS[index % ACTIVITY_COLORS.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Chart 2: Program Enrollment Distribution (Pie Chart) */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <PieChart className="w-5 h-5 mr-2 text-pink-500" /> Enrollment Distribution
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <RechartsPieChart>
                            <Pie
                                data={enrollmentData}
                                dataKey="totalUsers"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={120}
                                innerRadius={60}
                                paddingAngle={5}
                                fill="#8884d8"
                                labelLine={false}
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            >
                                {enrollmentData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={enrollmentData[index].fill} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value) => [`${value.toLocaleString()} Students`, 'Enrollments']} />
                            <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ paddingTop: '10px' }} />
                        </RechartsPieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Program Management Cards */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Program List</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {programs.map((program) => (
                    <div
                        key={program.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 p-6 flex flex-col justify-between border-t-4 border-blue-500"
                    >
                        <div>
                            <h2 className="text-xl font-bold mb-2 text-gray-800">
                                {program.title}
                            </h2>
                            <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                                {program.description}
                            </p>
                        </div>

                        <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                            <div className="flex items-center text-gray-700">
                                <Users className="w-5 h-5 mr-2 text-green-600" />
                                <span className="text-base font-semibold">
                                    {program.totalUsers.toLocaleString()} Students
                                </span>
                            </div>

                            <div className="flex space-x-3">
                                <button
                                    onClick={() => handleEdit(program)}
                                    className="text-blue-600 hover:text-blue-800 transition-colors p-1 rounded-full hover:bg-blue-50"
                                    title="Edit"
                                >
                                    <Pencil className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => confirmDelete(program.id)}
                                    className="text-red-600 hover:text-red-800 transition-colors p-1 rounded-full hover:bg-red-50"
                                    title="Delete"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODALS (Kept from original) */}
            {/* ADD MODAL */}
            {showAddModal && (
                <Modal onClose={() => setShowAddModal(false)} title="Create New Program">
                    <ProgramForm
                        formData={formData}
                        setFormData={setFormData}
                        onCancel={() => setShowAddModal(false)}
                        onSubmit={handleAddProgram}
                        actionLabel="Create"
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
                    <div className="text-center p-4">
                        <Trash2 className="w-12 h-12 text-red-500 mx-auto mb-4" />
                        <p className="text-gray-600 mb-6 text-lg">
                            Are you sure you want to delete the program "
                            <span className="font-semibold">{programs.find(p => p.id === deleteId)?.title || 'This Program'}</span>"?
                            This action cannot be undone.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition font-medium"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteConfirmed}
                                className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white transition font-medium"
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

/* ----------------- SHARED COMPONENTS (Polished) ------------------ */

function Modal({ title, children, onClose }) {
    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-[100]">

            <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-lg relative border border-gray-100 transform transition-all duration-300 scale-100 animate-in fade-in zoom-in-95">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition p-1"
                >
                    ✕
                </button>
                <h2 className="text-2xl font-bold mb-5 text-gray-800 border-b pb-3">{title}</h2>
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
                    className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    value={formData.title}
                    onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                    }
                />
                <textarea
                    placeholder="Program Description (Max 3 lines on card)"
                    rows={4}
                    className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                    value={formData.description}
                    onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                    }
                />
                <label className="block text-sm font-medium text-gray-700">Initial Enrollment Count</label>
                <input
                    type="number"
                    placeholder="Total Users"
                    min="0"
                    className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    value={formData.totalUsers}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            totalUsers: Number(e.target.value),
                        })
                    }
                />
            </div>

            <div className="flex justify-end mt-6 space-x-3 border-t pt-4">
                <button
                    onClick={onCancel}
                    className="px-5 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition font-medium text-gray-700"
                >
                    Cancel
                </button>
                <button
                    onClick={onSubmit}
                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition font-medium"
                >
                    {actionLabel}
                </button>
            </div>
        </div>
    );
}