// CertificatesPage.js (Updated)
"use client";
import { useRouter } from "next/navigation";
import { Award, FileCheck, Users, GraduationCap } from "lucide-react";

// Dummy program data (simulating a database/API call)
const PROGRAMS_FOR_CERTIFICATION = [
    {
        id: "frontend-dev",
        title: "Frontend Development",
        description: "Master HTML, CSS, JavaScript fundamentals and React framework.",
        studentsEligible: 45,
        totalEnrolled: 120,
    },
    {
        id: "backend-dev",
        title: "Backend Development",
        description: "Learn Node.js, Express, and efficient database management (MongoDB).",
        studentsEligible: 32,
        totalEnrolled: 90,
    },
    {
        id: "data-science",
        title: "Data Science & ML",
        description: "Explore Python, data analysis with pandas, and machine learning basics.",
        studentsEligible: 21,
        totalEnrolled: 60,
    },
];

export default function CertificatesPage() {
    const router = useRouter();

    // Remove the unused student 'certificates' array and 'handleDownload' function

    const handleIssueCertificate = (programId) => {
        // Navigate to the dynamic admin page
        router.push(`certificates/${programId}`);
    };

    return (
        <div className="space-y-10 p-6 md:p-8 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                    <GraduationCap className="text-blue-600 w-7 h-7" /> Certificate Issuance Dashboard
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                    Select a program to review student eligibility and issue final certificates.
                </p>
            </div>

            {/* Programs Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Programs Ready for Review</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {PROGRAMS_FOR_CERTIFICATION.map((program) => (
                        <div
                            key={program.id}
                            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 flex flex-col border-t-4 border-blue-600"
                        >
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {program.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4 h-12 line-clamp-2">
                                    {program.description}
                                </p>
                            </div>

                            <div className="flex justify-between items-center text-sm mb-4 pt-4 border-t border-gray-100">
                                <div className="flex items-center text-gray-700">
                                    <Users size={18} className="mr-2 text-green-600" />
                                    <span>Enrolled: <span className="font-semibold">{program.totalEnrolled}</span></span>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <Award size={18} className="mr-2 text-yellow-600" />
                                    <span>Eligible: <span className="font-semibold">{program.studentsEligible}</span></span>
                                </div>
                            </div>

                            <button
                                onClick={() => handleIssueCertificate(program.id)}
                                className="mt-2 bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-all font-medium flex items-center justify-center gap-2 shadow-lg"
                            >
                                <FileCheck size={18} /> Review & Issue Certificates
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}