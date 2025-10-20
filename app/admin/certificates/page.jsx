"use client";
import { useRouter } from "next/navigation";
import { Download, Award, FileCheck } from "lucide-react";

export default function CertificatesPage() {
    const router = useRouter();

    const programs = [
        {
            id: 1,
            title: "Frontend Development",
            description: "Master HTML, CSS, and JavaScript fundamentals.",
            image: "/certificate/cert1.png",
        },
        {
            id: 2,
            title: "Backend Development",
            description: "Learn Node.js, Express, and database management.",
            image: "/certificate/cert2.png",
        },
        {
            id: 3,
            title: "Data Science",
            description: "Explore Python, pandas, and machine learning basics.",
            image: "/certificate/cert3.png",
        },
    ];

    const certificates = [
        {
            id: 1,
            course: "Web Development Basics",
            date: "Aug 14, 2025",
            image: "/certificate/cert1.png",
        },
        {
            id: 2,
            course: "Advanced React",
            date: "Sep 10, 2025",
            image: "/certificate/cert2.png",
        },
        {
            id: 3,
            course: "Python for Data Science",
            date: "Oct 02, 2025",
            image: "/certificate/cert3.png",
        },
    ];

    const handleDownload = (cert) => {
        const link = document.createElement("a");
        link.href = cert.image;
        link.download = `${cert.course}-certificate.png`;
        link.click();
    };

    const handleIssueCertificate = (programId) => {
        router.push(`/admin/issue-certificate?id=${programId}`);
    };

    return (
        <div className="space-y-10">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-[var(--text)] flex items-center gap-2">
                    <Award className="text-[var(--accent)]" /> Certificates & Programs
                </h1>
                <p className="text-sm text-gray-500">
                    View your certificates or issue new ones for your programs 🎓
                </p>
            </div>

            {/* Certificates Section
            <section>
                <h2 className="text-xl font-semibold mb-4">Earned Certificates</h2>
                {certificates.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certificates.map((cert) => (
                            <div
                                key={cert.id}
                                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center"
                            >
                                <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden">
                                    <img
                                        src={cert.image}
                                        alt={cert.course}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-[var(--text)]">
                                        {cert.course}
                                    </h3>
                                    <p className="text-sm text-gray-500">{cert.date}</p>
                                </div>

                                <button
                                    onClick={() => handleDownload(cert)}
                                    className="mt-4 bg-[var(--primary)] text-white py-2 px-4 rounded-lg hover:bg-[var(--accent)] transition-all flex items-center gap-2"
                                >
                                    <Download size={18} /> Download
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-white rounded-2xl shadow-md">
                        <Award className="mx-auto text-[var(--accent)] mb-4" size={40} />
                        <p className="text-gray-500">
                            You haven’t earned any certificates yet.
                        </p>
                    </div>
                )}
            </section> */}

            {/* Programs Section */}
            <section>
                <h2 className="text-xl font-semibold mb-4">Available Programs</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col text-center"
                        >
                            <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden">
                                <img
                                    src={program.image}
                                    alt={program.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="mt-4 flex-1">
                                <h3 className="text-lg font-semibold text-[var(--text)]">
                                    {program.title}
                                </h3>
                                <p className="text-sm text-gray-500">{program.description}</p>
                            </div>

                            <button
                                onClick={() => handleIssueCertificate(program.id)}
                                className="mt-4 bg-[var(--primary)] text-white py-2 px-4 rounded-lg hover:bg-[var(--accent)] transition-all flex items-center justify-center gap-2"
                            >
                                <FileCheck size={18} /> Issue Certificate
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
