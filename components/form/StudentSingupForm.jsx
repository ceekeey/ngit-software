'use client'
import { useState } from "react";
// Assuming you have a standard toast library like react-hot-toast installed
import toast from "react-hot-toast";
// Using inline SVGs instead of external react-icons to fix compilation errors

// Constants for providers
const MANUAL_PROVIDER = 'email';
const GOOGLE_PROVIDER = 'google';
const GITHUB_PROVIDER = 'github';

// Inline SVG components for visual styling
const GoogleIcon = ({ className = 'w-5 h-5' }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M22.56 12.25c0-.62-.06-1.22-.16-1.79H12v3.52h6.21c-.28 1.45-1.16 2.68-2.48 3.51v2.86h3.69c2.16-2 3.4-4.93 3.4-8.1z" fill="#4285F4" />
        <path d="M12 23c3.27 0 6.03-1.08 8.04-2.92l-3.69-2.86c-1.02.68-2.31 1.13-4.35 1.13-3.32 0-6.17-2.26-7.23-5.22H0v2.96c2.09 4.1 6.22 6.94 12 6.94z" fill="#34A853" />
        <path d="M4.77 14.11c-.24-.68-.37-1.4-.37-2.11s.13-1.43.37-2.11V6.94H1.08c-.7 1.37-1.08 2.92-1.08 4.61s.38 3.24 1.08 4.61L4.77 14.11z" fill="#FBBC04" />
        <path d="M12 4.75c1.77 0 3.39.61 4.66 1.83l3.09-3.09c-2.11-1.97-4.88-3.19-7.75-3.19C5.78 0 1.65 2.84-.44 6.94l3.69 2.96c1.06-2.96 3.91-5.22 7.23-5.22z" fill="#EA4335" />
    </svg>
);

const GithubIcon = ({ className = 'w-5 h-5 text-gray-800' }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.863 8.169 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.98-.01-1.92-2.78.6-3.37-.8-3.37-.8-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1.05.07 1.6 1.08 1.6 1.08.93 1.58 2.44 1.12 3.03.86.09-.66.36-1.12.66-1.38-2.32-.26-4.75-1.17-4.75-5.2 0-1.15.4-2.1.08-2.88-.12-.34-.5-1.36.12-2.84 0 0 .84-.27 2.75 1.05.8-.22 1.6-.33 2.4-.33.8 0 1.6.11 2.4.33 1.91-1.32 2.75-1.05 2.75-1.05.62 1.48.24 2.5.12 2.84.47.78.08 1.73.08 2.88 0 4.04-2.43 4.93-4.75 5.2.36.31.68.96.68 1.94 0 1.37-.01 2.47-.01 2.8.0 0 .18.57.68.48C19.137 20.169 22 16.419 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
);


const StudentSingupForm = () => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    // Core state fields matching the student table schema
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');

    // 'provider' tracks how the user is signing up
    const [provider, setProvider] = useState(MANUAL_PROVIDER);

    // Mapped fields:
    // User's form 'Country' -> PHP's 'state' (renamed to stateValue)
    const [stateValue, setStateValue] = useState('');
    // User's form 'City' -> PHP's 'lga' (renamed to lgaValue)
    const [lgaValue, setLgaValue] = useState('');
    // Referral code is not in the DB schema, so we keep it separate
    const [referralCode, setReferralCode] = useState('');


    // --- Helper functions to advance steps ---
    const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    // --- Social Login Simulation Functions ---
    const socialLoginHandler = (providerType) => {
        setLoading(true);

        // --- Mocking the data returned by Google/GitHub OAuth ---
        const mockUser = {
            // These would be retrieved from the OAuth token/profile
            email: `${providerType}_test@example.com`,
            name: `${providerType} User`,
            // Use a simple mock username for demonstration
            username: `${providerType}_user_123`,
        };
        // --------------------------------------------------------

        // 1. Set the provider and pre-fill fields
        setProvider(providerType);
        setName(mockUser.name);
        setEmail(mockUser.email);
        setUsername(mockUser.username);
        // Set a placeholder password since the 'password' field is NOT NULL in your database
        setPassword('SOCIAL_LOGIN_PLACEHOLDER');
        setConfirmPassword('SOCIAL_LOGIN_PLACEHOLDER');

        // 2. Skip to Step 3 (Completion Step)
        setStep(3);
        setLoading(false);
        toast.success(`Signed in with ${providerType}. Please complete your profile!`);
    };

    const githubLogin = () => socialLoginHandler(GITHUB_PROVIDER);
    const goggleLogin = () => socialLoginHandler(GOOGLE_PROVIDER);


    // --- Final Form Submission Handler ---
    const handleRegister = async (e) => {
        e.preventDefault();

        // 1. Client-Side Validation (Manual)
        const isManual = provider === MANUAL_PROVIDER;

        if (!name || !email || !phone || !stateValue || !lgaValue || !gender) {
            toast.error("Please fill in all mandatory profile fields.");
            return;
        }

        if (isManual && (!username || !password)) {
            toast.error("Please enter a username and password.");
            return;
        }

        if (isManual && password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        const payload = {
            name,
            // Prefix the username for social users to ensure uniqueness against manual signups
            username: isManual ? username : `${provider}_${username}`,
            email,
            phone,
            // Mapping fields to PHP endpoint expectations
            state: stateValue,
            lga: lgaValue,
            gender,
            provider,
            // Send the actual password or the placeholder
            password: password,
        };

        try {
            setLoading(true);

            // NOTE: Using the assumed updated PHP endpoint path for student registration
            const res = await fetch('http://localhost/ngit-api/auth/singup.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                // PHP error responses are caught here (e.g., Error 500, 400, 409 from your backend)
                throw new Error(data.message || 'Registration failed on server.');
            }

            toast.success(data.message || "Registration successful! Welcome.");
            // Optional: Redirect the user here

        } catch (error) {
            console.error("Registration Error:", error);
            // Display error message from the PHP backend
            toast.error(error.message || "An unexpected error occurred during registration.");
        } finally {
            setLoading(false);
        }
    }

    // Conditional step flow: Social users skip step 2 (password)
    const currentStep = provider === MANUAL_PROVIDER ? step : (step === 2 ? 3 : step);


    return (
        <div className="flex w-full md:w-1/2 justify-center items-center p-8">
            <div className="w-full max-w-md space-y-6">
                <h1 className="text-3xl font-bold text-[var(--text)]">
                    Create Your Account ✨
                </h1>
                <p className="text-[var(--text)]/70">
                    Step {currentStep} of 3 — Let’s get you set up!
                </p>

                {/* Progress bar */}
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[var(--accent)] transition-all duration-300"
                        style={{ width: `${(currentStep / 3) * 100}%` }}
                    />
                </div>

                <form className="space-y-4" onSubmit={handleRegister}>
                    {/* --- STEP 1: Basic Contact Info --- */}
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

                    {/* --- STEP 2: Credentials (Manual Only) --- */}
                    {step === 2 && provider === MANUAL_PROVIDER && (
                        <>
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
                        </>
                    )}

                    {/* --- STEP 3: Geographic and Profile Details (Final Step) --- */}
                    {step === 3 && (
                        <>
                            {/* NEW FIELD: Gender */}
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
                                    <option value="" disabled>Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="custom">Custom</option>
                                </select>
                            </div>

                            {/* Mapped Field: Country -> State */}
                            <div>
                                <label className="block text-sm font-medium text-[var(--text)]/80">
                                    State
                                </label>
                                <input
                                    type="text"
                                    value={stateValue}
                                    onChange={(e) => setStateValue(e.target.value)}
                                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                    placeholder="e.g. Lagos, California"
                                    required
                                />
                            </div>

                            {/* Mapped Field: City -> LGA (Local Government Area/District) */}
                            <div>
                                <label className="block text-sm font-medium text-[var(--text)]/80">
                                    LGA / District
                                </label>
                                <input
                                    type="text"
                                    value={lgaValue}
                                    onChange={(e) => setLgaValue(e.target.value)}
                                    className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] bg-white"
                                    placeholder="e.g. Ikeja, Downtown"
                                    required
                                />
                            </div>

                            {/* Referral Code (Optional, not sent to DB) */}
                            <div>
                                <label className="block text-sm font-medium text-[var(--text)]/80">
                                    Referral Code (optional)
                                </label>
                                <input
                                    type="text"
                                    value={referralCode}
                                    onChange={(e) => setReferralCode(e.target.value)}
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

                        {/* Conditional Next/Submit button based on the current logical step */}
                        {currentStep < 3 ? (
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
                                {loading ? "Registering..." : "Create Account"}
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
                        onClick={goggleLogin}
                        type="button"
                        className="flex-1 py-2 border border-gray-300 rounded-lg flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-all"
                        disabled={loading}
                    >
                        <GoogleIcon className="w-5 h-5 mr-2" />
                        Google
                    </button>
                    <button
                        onClick={githubLogin}
                        type="button"
                        className="flex-1 py-2 border border-gray-300 rounded-lg flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-all"
                        disabled={loading}
                    >
                        <GithubIcon className="w-5 h-5 mr-2 text-gray-800" />
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
