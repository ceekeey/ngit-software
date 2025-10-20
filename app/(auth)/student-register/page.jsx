import Image from "next/image";
import StudentSingupForm from "@/components/form/StudentSingupForm";

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
