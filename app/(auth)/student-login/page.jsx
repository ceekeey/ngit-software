'use client'

import { useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
    const [loading, setLoading] = useState(false);

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

                    <form className="space-y-4">
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
                                Password
                            </label>
                            <input
                                type="password"
                                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2 rounded-lg text-white font-medium bg-[var(--primary)] hover:bg-[var(--accent)] transition-all"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
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
                        Don’t have an account?{" "}
                        <a href="/student-register" className="text-[var(--accent)] hover:underline">
                            Sign up
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
