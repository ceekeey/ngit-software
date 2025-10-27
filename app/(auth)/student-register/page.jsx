import Image from "next/image";
import StudentSingupForm from "@/components/form/StudentSingupForm";

// 1. CRITICAL SEO/Security Fix: Define specific metadata and prevent indexing
export const metadata = {
    title: "Student Registration | Create Your NGIT Account",
    description: "Start your tech journey today. Register for access to training resources and exclusive course content.",

    // IMPORTANT: Set robots to 'noindex, nofollow'
    robots: {
        index: false,
        follow: false,
        noarchive: true,
    },
};

export default function SignupPage() {
    return (
        <div className="min-h-screen flex bg-[var(--background)]">
            {/* Left side image */}
            <div className="hidden md:flex w-1/2 relative">
                <Image
                    src="/auth1.jpg"
                    alt="Signup background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--primary)]/50 mix-blend-multiply" />
            </div>

            <StudentSingupForm />
        </div>
    );
}
