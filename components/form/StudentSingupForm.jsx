'use client'
import { useState } from "react";
import toast from "react-hot-toast";
import Link from 'next/link'; // 💡 Import Link
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const StudentSingupForm = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    // 💡 Combine state and add error state
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '',
        username: '', password: '', confirmPassword: '',
        gender: '', dob: '', address: ''
    });
    const [errors, setErrors] = useState({});

    // 💡 Universal change handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        setErrors(prev => ({ ...prev, [name]: undefined }));
    };

    // 💡 Rigorous step-specific validation function
    const validateStep = (currentStep) => {
        let tempErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Step 1 Validation
        if (currentStep === 1) {
            if (!formData.name) tempErrors.name = "Full Name is required.";
            if (!formData.email || !emailRegex.test(formData.email)) tempErrors.email = "Valid email is required.";
            if (!formData.phone || formData.phone.length < 10) tempErrors.phone = "Valid phone number required.";
        }

        // Step 2 Validation
        if (currentStep === 2) {
            if (!formData.username || formData.username.length < 4) tempErrors.username = "Username must be at least 4 characters.";
            if (!formData.password || formData.password.length < 8) tempErrors.password = "Password must be at least 8 characters."; // 💡 Security check
            if (formData.password !== formData.confirmPassword) {
                tempErrors.confirmPassword = "Passwords do not match.";
            } else if (!formData.confirmPassword) {
                tempErrors.confirmPassword = "Please confirm your password.";
            }
        }

        // Step 3 Validation
        if (currentStep === 3) {
            if (!formData.gender) tempErrors.gender = "Gender selection is required.";
            if (!formData.dob) tempErrors.dob = "Date of Birth is required.";
            if (!formData.address || formData.address.length < 10) tempErrors.address = "A valid address is required.";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };


    const handleRegister = async (e) => {
        e.preventDefault();

        // Final validation before API call
        if (!validateStep(3)) {
            toast.error("Please correct the errors in the form.");
            return;
        }

        try {
            setLoading(true);
            const res = await fetch('http://your-secure-api.com/auth/signup', { // 💡 Change to secure URL
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            toast.success("Registration successful! Redirecting to login.");
            // 💡 Handle successful registration (e.g., redirect to login page)
        } catch (error) {
            toast.error(error.message || "An error occurred during registration.");
        } finally {
            setLoading(false);
        }
    }

    const nextStep = () => {
        if (validateStep(step)) { // 💡 Validate current step before proceeding
            setStep((prev) => Math.min(prev + 1, 3));
            setErrors({}); // Clear global errors
        } else {
            toast.error("Please fill out the current step correctly.");
        }
    };

    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    return (
        <div className="flex w-full md:w-1/2 justify-center items-center p-8">
            <div className="w-full max-w-md space-y-6">
                {/* ... (H1 and Progress bar remain the same) ... */}
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
                            {/* Full Name */}
                            <div>
                                <label htmlFor="full-name" className="block text-sm font-medium text-[var(--text)]/80">Full Name</label>
                                <input
                                    id="full-name" // 💡 A11y Fix
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-white ${errors.name ? 'border-red-500' : 'border-gray-300 focus:ring-[var(--accent)]'}`}
                                    placeholder="John Doe"
                                    required
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[var(--text)]/80">Email</label>
                                <input
                                    id="email" // 💡 A11y Fix
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-white ${errors.email ? 'border-red-500' : 'border-gray-300 focus:ring-[var(--accent)]'}`}
                                    placeholder="you@example.com"
                                    required
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-[var(--text)]/80">Phone Number</label>
                                <input
                                    id="phone" // 💡 A11y Fix
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-white ${errors.phone ? 'border-red-500' : 'border-gray-300 focus:ring-[var(--accent)]'}`}
                                    placeholder="+1 234 567 890"
                                    required
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-[var(--text)]/80">Password</label>
                                <input
                                    id="password" // 💡 A11y Fix
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`w-full mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-white ${errors.password ? 'border-red-500' : 'border-gray-300 focus:ring-[var(--accent)]'}`}
                                    placeholder="•••••••• (Min 8 characters)"
                                    required
                                    minLength={8} // 💡 HTML validation for security
                                />
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[var(--text)]/80">Confirm Password</label>
                                <input
                                    id="confirmPassword" // 💡 A11y Fix
                                    name="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`w-full mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-white ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300 focus:ring-[var(--accent)]'}`}
                                    placeholder="••••••••"
                                    required
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                            </div>

                            {/* Username */}
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-[var(--text)]/80">Username</label>
                                <input
                                    id="username" // 💡 A11y Fix
                                    name="username"
                                    type="text"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className={`w-full mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-white ${errors.username ? 'border-red-500' : 'border-gray-300 focus:ring-[var(--accent)]'}`}
                                    placeholder="johndoe"
                                    required
                                />
                                {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            {/* Gender */}
                            <div>
                                <label htmlFor="gender" className="block text-sm font-medium text-[var(--text)]/80">Gender</label>
                                <select
                                    id="gender" // 💡 A11y Fix
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className={`w-full mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-white ${errors.gender ? 'border-red-500' : 'border-gray-300 focus:ring-[var(--accent)]'}`}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label htmlFor="dob" className="block text-sm font-medium text-[var(--text)]/80">Date of Birth</label>
                                <input
                                    id="dob" // 💡 A11y Fix
                                    name="dob"
                                    type="date"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className={`w-full mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-white ${errors.dob ? 'border-red-500' : 'border-gray-300 focus:ring-[var(--accent)]'}`}
                                    required
                                />
                                {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
                            </div>

                            {/* Address */}
                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-[var(--text)]/80">Address</label>
                                <textarea
                                    id="address" // 💡 A11y Fix
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    rows="2"
                                    className={`w-full mt-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 bg-white resize-none ${errors.address ? 'border-red-500' : 'border-gray-300 focus:ring-[var(--accent)]'}`}
                                    placeholder="Street Address, City, State/Province"
                                    required
                                />
                                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
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
                                onClick={nextStep} // 💡 Calls validation before nextStep
                                className="ml-auto px-4 py-2 text-white font-medium bg-[var(--primary)] hover:bg-[var(--accent)] rounded-lg transition-all"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={loading}
                                className="ml-auto px-4 py-2 text-white font-medium bg-[var(--primary)] hover:bg-[var(--accent)] rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Signing up..." : "Create Account"}
                            </button>
                        )}
                    </div>
                </form>

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
                    {/* 💡 Use Next.js Link */}
                    <Link href="/student-login" className="text-[var(--accent)] hover:underline">
                        Log in
                    </Link>
                </p>
                <p className="text-sm text-center text-gray-600">
                    {/* 💡 Use Next.js Link */}
                    <Link href="/" className="text-[var(--accent)] hover:underline">
                        Back To Home
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default StudentSingupForm