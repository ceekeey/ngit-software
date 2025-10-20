"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Award, UserCheck } from "lucide-react";

export default function IssueCertificatePage() {
    const searchParams = useSearchParams();
    const programId = searchParams.get("id");

    const [program, setProgram] = useState(null);
    const [applicants, setApplicants] = useState([]);

    // Simulated database of programs and applicants
    const programsData = [
        { id: "1", title: "Frontend Development" },
        { id: "2", title: "Backend Development" },
        { id: "3", title: "Data Science" },
    ];

    const usersData = [
        { id: 1, name: "John Doe", email: "john@example.com", progress: 100, programId: "1" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", progress: 80, programId: "1" },
        { id: 3, name: "Alex Johnson", email: "alex@example.com", progress: 100, programId: "2" },
        { id: 4, name: "Mary Lee", email: "mary@example.com", progress: 60, programId: "3" },
        { id: 5, name: "David Kim", email: "david@example.com", progress: 100, programId: "3" },
    ];

    useEffect(() => {
        const selectedProgram = programsData.find((p) => p.id === programId);
        setProgram(selectedProgram);

        const programApplicants = usersData.filter((u) => u.programId === programId);
        setApplicants(programApplicants);
    }, [programId]);

    const handleIssueCertificate = (user) => {
        alert(`✅ Certificate issued to ${user.name} for ${program?.title}`);
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-[var(--text)] flex items-center gap-2">
                    <Award className="text-[var(--accent)]" /> Issue Certificates
                </h1>
                <p className="text-sm text-gray-500">
                    View all users enrolled in <strong>{program?.title || "..."}</strong> and issue their certificates.
                </p>
            </div>

            {/* Applicants List */}
            {applicants.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-2xl shadow-md overflow-hidden">
                        <thead className="bg-[var(--primary)] text-white">
                            <tr>
                                <th className="py-3 px-4 text-left">#</th>
                                <th className="py-3 px-4 text-left">Name</th>
                                <th className="py-3 px-4 text-left">Email</th>
                                <th className="py-3 px-4 text-left">Progress</th>
                                <th className="py-3 px-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applicants.map((user, index) => (
                                <tr
                                    key={user.id}
                                    className="border-b hover:bg-gray-50 transition"
                                >
                                    <td className="py-3 px-4">{index + 1}</td>
                                    <td className="py-3 px-4 font-medium text-[var(--text)]">{user.name}</td>
                                    <td className="py-3 px-4 text-gray-600">{user.email}</td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-2 rounded-full ${user.progress === 100
                                                        ? "bg-green-500"
                                                        : "bg-yellow-400"
                                                        }`}
                                                    style={{ width: `${user.progress}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-sm">{user.progress}%</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-center">
                                        {user.progress === 100 ? (
                                            <button
                                                onClick={() => handleIssueCertificate(user)}
                                                className="bg-[var(--primary)] hover:bg-[var(--accent)] text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 mx-auto transition-all"
                                            >
                                                <UserCheck size={18} /> Issue
                                            </button>
                                        ) : (
                                            <span className="text-gray-400 italic text-sm">Not completed</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center py-16 bg-white rounded-2xl shadow-md">
                    <Award className="mx-auto text-[var(--accent)] mb-4" size={40} />
                    <p className="text-gray-500">
                        No users have applied or enrolled for this program yet.
                    </p>
                </div>
            )}
        </div>
    );
}
