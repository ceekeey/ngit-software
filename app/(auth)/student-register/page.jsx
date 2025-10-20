'use client'

import { useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SignupPage() {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    // hanldle form submission
    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true);
    }

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

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

            {/* Right side form */}
            <div className="flex w-full md:w-1/2 justify-center items-center p-8">
                <div className="w-full max-w-md space-y-6">
                    <h1 className="text-3xl font-bold text-[var(--text)]">
                        Create Your Account ✨
                    </h1>
                    <p className="text-[var(--text)]/70">
                        Step {step} of 3 — Let’s get you set up!
                    </p>

                    {/* Progress bar */}
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[var(--accent)] transition-all duration-300"
                            style={{ width: `${(step / 3) * 100}%` }}
                        />
                    </div>

                    <form className="space-y-4" onSubmit={handleRegister}>
                        {step === 1 && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-[var(--text)]/80">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--text)]/80">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--text)]/80">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                        placeholder="+1 234 567 890"
                                    />
                                </div>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-[var(--text)]/80">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                        placeholder="johndoe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--text)]/80">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                        placeholder="••••••••"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--text)]/80">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-[var(--text)]/80">
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                        placeholder="e.g. Nigeria"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--text)]/80">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                        placeholder="e.g. Lagos"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-[var(--text)]/80">
                                        Referral Code (optional)
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                        placeholder="Enter code if any"
                                    />
                                </div>
                            </>
                        )}

                        <div className="flex justify-between items-center pt-2">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="px-4 py-2 text-[var(--text)] border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
                                >
                                    Back
                                </button>
                            )}
                            {step < 3 ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="ml-auto px-4 py-2 text-white font-medium bg-[var(--primary)] hover:bg-[var(--accent)] rounded-lg transition-all"
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="ml-auto px-4 py-2 text-white font-medium bg-[var(--primary)] hover:bg-[var(--accent)] rounded-lg transition-all"
                                >
                                    {loading ? "Signing up..." : "Create Account"}
                                </button>
                            )}
                        </div>
                    </form>

                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <span className="text-sm text-gray-500">or</span>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Social login buttons */}
                    <div className="flex gap-4">
                        <button
                            type="button"
                            className="flex-1 py-2 border border-gray-300 rounded-lg flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-all"
                        >
                            <FcGoogle className="text-xl" />
                            Google
                        </button>
                        <button
                            type="button"
                            className="flex-1 py-2 border border-gray-300 rounded-lg flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-all"
                        >
                            <FaGithub className="text-xl text-gray-800" />
                            GitHub
                        </button>
                    </div>

                    <p className="text-sm text-center text-gray-600">
                        Already have an account?{" "}
                        <a href="/student-login" className="text-[var(--accent)] hover:underline">
                            Log in
                        </a>
                    </p>
                    <p className="text-sm text-center text-gray-600">
                        <a href="/" className="text-[var(--accent)] hover:underline">
                            Back To Home
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
