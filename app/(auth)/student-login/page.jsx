import Image from "next/image";

import StudentLoginForm from "@/components/form/StudentLoginForm";

export default function LoginPage() {

    return (
        <div className="min-h-screen flex bg-[var(--background)]">
            {/* Left side image */}
            <div className="hidden md:flex w-1/2 relative">
                <Image
                    src="/auth3.png"
                    alt="Login background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--primary)]/50 mix-blend-multiply" />
            </div>

            {/* Right side form */}
            <div className="flex w-full md:w-1/2 justify-center items-center p-8">
                <div className="w-full max-w-md space-y-6">
                    <h1 className="text-3xl font-bold text-[var(--text)]">Welcome Back 👋</h1>
                    <p className="text-[var(--text)]/70">Login to continue to your account</p>

                    <StudentLoginForm />

                </div>
            </div>
        </div>
    );
}
