import Image from "next/image";
import StudentLoginForm from "@/components/form/StudentLoginForm";

export const metadata = {
    title: "Admin Login | NGIT Software Solutions",
    description: "Access your student dashboard for training materials, resources, and course updates.",

    // IMPORTANT: Set robots to 'noindex, nofollow'
    robots: {
        index: false,
        follow: false,
        noarchive: true,
    },
};


export default function LoginPage() {

    return (
        // 3. Use <main> for better semantics
        <main className="min-h-screen flex bg-[var(--background)]">
            {/* Left side image (Remains perfect) */}
            <div className="hidden md:flex w-1/2 relative">
                <Image
                    src="/auth4.jpg"
                    alt="Login background"
                    fill
                    // We also recommend adding a priority prop if this is one of the first elements seen.
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--primary)]/50 mix-blend-multiply" />
            </div>

            {/* Right side form */}
            <div className="flex w-full md:w-1/2 justify-center items-center p-8">
                <div className="w-full max-w-md space-y-6">
                    {/* 4. Use H1 for the main page heading for consistency and screen readers */}
                    <h1 className="text-3xl font-bold text-[var(--text)]">Welcome Back Admin 👋</h1>
                    <p className="text-[var(--text)]/70">Login to continue to your account</p>

                    <StudentLoginForm />
                </div>
            </div>
        </main>
    );
}