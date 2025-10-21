// IssueCertificatePage.js (New Admin Detail Page)
"use client";
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { ArrowLeft, User, CheckCircle, Clock, DollarSign, Award } from 'lucide-react';
import Link from 'next/link';

// Helper function to simulate fetching data based on Program ID
const fetchProgramAndStudents = (programId) => {
    const programName = programId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    // Simulated Student Data with Eligibility and Payment Status
    const students = [
        { id: 1, name: "Alice Johnson", email: "alice@example.com", progress: 100, paymentStatus: 'Paid', isIssued: false },
        { id: 2, name: "Bob Smith", email: "bob@example.com", progress: 95, paymentStatus: 'Paid', isIssued: true },
        { id: 3, name: "Charlie Brown", email: "charlie@example.com", progress: 100, paymentStatus: 'Pending', isIssued: false },
        { id: 4, name: "Dana Scully", email: "dana@example.com", progress: 80, paymentStatus: 'Paid', isIssued: false },
        { id: 5, name: "Ethan Hunt", email: "ethan@example.com", progress: 100, paymentStatus: 'Paid', isIssued: false },
    ];

    return { programName, students };
};

export default function IssueCertificatePage() {
    const params = useParams();
    const programId = params.programId;

    const { programName, students: initialStudents } = fetchProgramAndStudents(programId);
    const [students, setStudents] = useState(initialStudents);

    // Determines if the student is ready for issuance
    const isReadyToIssue = (student) => {
        // Criteria: 100% Progress AND Payment Status is 'Paid'
        return student.progress >= 100 && student.paymentStatus === 'Paid' && !student.isIssued;
    };

    const handleIssue = (studentId) => {
        setStudents(prevStudents =>
            prevStudents.map(s =>
                s.id === studentId ? { ...s, isIssued: true } : s
            )
        );
        // In a real application, you would send an API request here
        alert(`Certificate issued to student ${studentId} for ${programName}!`);
    };

    return (
        <div className="space-y-8 p-6 md:p-8 bg-gray-50 min-h-screen">
            {/* Header and Back Button */}
            <div className="border-b pb-4">
                <Link href="/certificates" className="flex items-center text-gray-500 hover:text-blue-600 transition mb-3 text-sm">
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back to Program List
                </Link>
                <h1 className="text-3xl font-bold text-gray-800">
                    Issuance: {programName}
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                    Review and issue certificates for students who meet completion and payment requirements.
                </p>
            </div>

            {/* Student List Table */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="p-4 font-semibold">Student</th>
                            <th className="p-4 font-semibold">Progress</th>
                            <th className="p-4 font-semibold">Payment Status</th>
                            <th className="p-4 font-semibold text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((s, i) => {
                            const ready = isReadyToIssue(s);
                            const rowClass = ready ? 'bg-green-50/50' : s.isIssued ? 'bg-blue-50/50' : 'hover:bg-gray-50';

                            return (
                                <tr key={s.id} className={`border-t border-gray-100 transition-all ${rowClass}`}>
                                    <td className="p-4 flex items-center gap-3">
                                        <User className="w-5 h-5 text-gray-500" />
                                        <span className="font-medium text-gray-800">{s.name}</span>
                                    </td>

                                    <td className="p-4">
                                        <span className={`font-semibold ${s.progress === 100 ? 'text-green-600' : 'text-yellow-600'}`}>
                                            {s.progress}%
                                        </span>
                                    </td>

                                    <td className="p-4">
                                        <span className={`flex items-center gap-1 font-medium ${s.paymentStatus === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
                                            {s.paymentStatus === 'Paid' ? <CheckCircle className='w-4 h-4' /> : <Clock className='w-4 h-4' />}
                                            {s.paymentStatus}
                                        </span>
                                    </td>

                                    <td className="p-4 text-center">
                                        {s.isIssued ? (
                                            <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                                                <Award className='w-4 h-4 mr-1' /> Certificate Sent
                                            </span>
                                        ) : (
                                            <button
                                                onClick={() => handleIssue(s.id)}
                                                disabled={!ready}
                                                className={`py-2 px-4 rounded-lg text-white font-medium transition-all text-sm
                                                    ${ready
                                                        ? 'bg-green-600 hover:bg-green-700 shadow-md'
                                                        : 'bg-gray-400 cursor-not-allowed'
                                                    }`
                                                }
                                                title={ready ? "Issue Certificate" : "Requires 100% progress and 'Paid' status"}
                                            >
                                                {ready ? 'Issue Now' : 'Not Eligible'}
                                            </button>
                                        )}
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