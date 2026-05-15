import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6">
      <div className="max-w-3xl text-center animate-fadeInUp">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight animate-fadeInUp delay-100">
          Manage Your Leads
          <br />
          Smarter with{" "}
          <span className="text-blue-400 animate-pulse">Leads Locker</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg mt-6 leading-relaxed animate-fadeInUp delay-200">
          Organize leads, track customers, and grow your business using a clean
          and powerful lead management platform.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fadeInUp delay-300">
          <Link
            to="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition transform hover:scale-105"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
