'use client'
import { useState } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const StudentSingupForm = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    // Step 1 fields
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    // Step 2 fields
    const [username, setUsername] = useState('') // Changed to username
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('') // New state for confirm password
    // Step 3 fields (New)
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [address, setAddress] = useState('')

    // hanldle form submission
    const handleRegister = async (e) => {
        e.preventDefault();
        if (!name || !email || !phone || !username || !gender || !dob || !address) {
            toast.error("Please fill in all required fields.");
            return;
        }
        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }


        try {
            // setLoading(true);
            const res = await fetch('http://localhost/ngit-api/auth/singup.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, phone, username, password, gender, dob, address }),
            });
            const data = await res.json();
            console.log(name, email, phone, username, password, gender, dob, address)

            if (!res.ok) {
                throw new Error(data.message || 'Registration failed');
            }
        } catch (error) {
            toast.error("An error occurred during registration." || error.message);
        }
    }

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    return (
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
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[var(--text)]/80">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[var(--text)]/80">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                    placeholder="+1 234 567 890"
                                    required
                                />
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-[var(--text)]/80">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[var(--text)]/80">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>

                            {/* **CONFIRM PASSWORD will be USERNAME - as requested** */}
                            <div>
                                <label className="block text-sm font-medium text-[var(--text)]/80">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                    placeholder="johndoe"
                                    required
                                />
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            {/* **LAST STEP fields changed to GENDER, DATE OF BIRTH, ADDRESS - as requested** */}
                            <div>
                                <label className="block text-sm font-medium text-[var(--text)]/80">
                                    Gender
                                </label>
                                <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[var(--text)]/80">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[var(--text)]/80">
                                    Address
                                </label>
                                <textarea
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    rows="2"
                                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white resize-none"
                                    placeholder="Street Address, City, State/Province"
                                    required
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
    )
}

export default StudentSingupForm