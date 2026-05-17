import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Backgroundimage from "../Components/Assets/background.jpg";
import Sider from "../Components/Sider";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [activeTab, setActiveTab] = useState("Home");

  if (!token) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const navItems = [
    {
      name: "Home",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      name: "Saved people",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0",
    },
    { name: "History", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];

  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-[#05070d] text-white">
      {/* Shared Background Mechanics */}
      <img
        src={Backgroundimage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 h-full w-full object-cover opacity-20 mix-blend-screen"
      />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_50%)]" />

      {/* --- SIDEBAR --- */}
      <Sider />

      {/* --- MAIN CONTENT AREA --- */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-8 overflow-y-auto">
        <div className="w-full max-w-3xl text-center animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
            Hello,{" "}
            <span className="text-blue-400">
              {user.name?.split(" ")[0] || "Leader"}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/40 font-medium mb-12 italic">
            Who can I help you manage today?
          </p>

          {/* Search Box with Glow */}
          <div className="relative group max-w-2xl mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000" />
            <div className="relative bg-[#0d0f14]/90 border border-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center shadow-2xl">
              <textarea
                rows="2"
                className="flex-1 bg-transparent border-none outline-none focus:outline-none ring-0 focus:ring-0 focus:border-none placeholder-white/20 resize-none text-sm md:text-base py-2 px-2"
                placeholder="Describe your audience or paste a lead's email..."
              />
              <button className="h-10 w-10 flex items-center justify-center bg-white text-[#05070d] rounded-xl hover:scale-105 transition-transform shadow-lg">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Find email", "Verify leads", "Track clicks"].map((tag) => (
              <button
                key={tag}
                className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/50 hover:border-white/30 hover:text-white transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
