"use client"
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const StudentLoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()

        if (!email && !password) {
            console.log('field are empty')
        }
    }

    const googleLogin = () => {
        console.log('google singup')
    }

    const githubLogin = () => {
        console.log('github login');
    }

    return (
        <>
            <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                    <label className="block text-sm font-medium text-[var(--text)]/80">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                        placeholder="you@example.com"
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
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
                    onClick={googleLogin}
                    type="button"
                    className="flex-1 py-2 border border-gray-300 rounded-lg flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-all"
                >
                    <FcGoogle className="text-xl" />
                    Google
                </button>
                <button
                    onClick={githubLogin}
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
        </>
    )
}

export default StudentLoginForm