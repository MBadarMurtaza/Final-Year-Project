import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Backgroundimage from "../Components/Assets/background_image.jpeg";

const LoginSignup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
    company: "Leads Locker", // Added default company state matching your input data needs
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Front-end Validation Check
    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("Passwords don't match!");
      setLoading(false);
      return;
    }

    try {
      // Determine target URL based on current active view route
      const url = isLogin
        ? "http://localhost:5000/user/login"
        : "http://localhost:5000/user/register";

      // Formulate data payload mapping
      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            company: formData.company,
          };

      // Make actual live HTTP call to your local Node server
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        // Success: Store the signed authentication JWT and user info
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Push authenticated user into your home dashboard route
        navigate("/home");
      } else {
        // Server Error: Capture message (e.g. "User already exists" or "Invalid credentials")
        setError(data.message || "An authentication error occurred.");
      }
    } catch (err) {
      console.error("Connection error:", err);
      setError(
        "Unable to reach the server. Please check your backend connection.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`OAuth stream running for target: ${provider}`);
  };

  return (
    <main className="relative min-h-[calc(100vh-64px)] bg-black text-white flex items-center justify-center px-4 py-6 sm:px-6 sm:py-10">
      <img
        src={Backgroundimage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 h-full w-full object-cover scale-105"
      />

      <div className="pointer-events-none fixed inset-0 bg-black/0" />

      <div className="pointer-events-none fixed inset-0 bg-gradient-to-br from-black/70 via-slate-900/50 to-black/70" />

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2.5 group">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-lg shadow-blue-500/30">
              L
            </span>

            <span className="text-sm font-semibold tracking-tight text-white/70 transition-colors group-hover:text-white">
              Leads Locker
            </span>
          </Link>
        </div>

        <div className="w-full bg-white/[0.04] border border-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-2">
              {isLogin ? "Welcome back" : "Create your account"}
            </h2>

            <p className="text-white/60 text-sm leading-relaxed">
              {isLogin
                ? "Sign in to access your secure dashboard"
                : "Get started free and manage your leads smarter"}
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs flex items-center gap-2.5">
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>

              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            {!isLogin && (
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1.5 uppercase tracking-wider">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 text-white placeholder-white/25 transition-all text-sm"
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-white/80 mb-1.5 uppercase tracking-wider">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="name@example.com"
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 text-white placeholder-white/25 transition-all text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium text-white/80 mb-1.5 uppercase tracking-wider">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 text-white placeholder-white/25 transition-all text-sm"
              />
            </div>

            {/* Confirm Password */}
            {!isLogin && (
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1.5 uppercase tracking-wider">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 text-white placeholder-white/25 transition-all text-sm"
                />
              </div>
            )}

            {/* Login Options */}
            {isLogin && (
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 rounded bg-white/5 border-white/10 text-blue-600"
                  />

                  <span className="ml-2 text-xs text-white/70">
                    Keep me signed in
                  </span>
                </label>

                <Link
                  to="/forgot-password"
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-[#05070d] font-semibold py-3 px-4 rounded-xl transition-all duration-300 mt-5 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_10px_40px_-10px_rgba(255,255,255,0.35)] hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.45)] text-sm"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-[#05070d]/30 border-t-[#05070d] rounded-full animate-spin"></div>
                  <span>Syncing...</span>
                </div>
              ) : isLogin ? (
                "Sign In"
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative flex items-center my-5">
              <div className="flex-1 border-t border-white/10"></div>

              <span className="px-3 text-[11px] text-white/40 uppercase tracking-wider whitespace-nowrap">
                Or continue with
              </span>

              <div className="flex-1 border-t border-white/10"></div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleSocialLogin("Google")}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-white/10 rounded-xl text-xs font-medium text-white/80 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-200"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span>Google</span>
              </button>

              <button
                onClick={() => handleSocialLogin("GitHub")}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-white/10 rounded-xl text-xs font-medium text-white/80 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-200"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.37-1.2-3.37-1.2-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.09 2.94.84.09-.66.35-1.09.64-1.34-2.24-.25-4.6-1.12-4.6-4.99 0-1.1.39-2 1.04-2.71-.1-.25-.45-1.29.1-2.68 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.43.1 2.68.65.71 1.04 1.61 1.04 2.71 0 3.88-2.36 4.74-4.62 4.99.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>GitHub</span>
              </button>
            </div>
          </div>

          {/* Bottom Navigation */}
          <p className="mt-6 text-center text-xs text-white/50">
            {isLogin ? "Don't have an account?" : "Already registered?"}
            <Link
              to={isLogin ? "/signup" : "/login"}
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors ml-1"
            >
              {isLogin ? "Create account" : "Sign in here"}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginSignup;
