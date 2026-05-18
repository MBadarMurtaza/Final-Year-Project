import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../Components/Assets/background.jpg";

const LandingPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] text-white">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
      />

      {/* Gradient overlays for depth & legibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#05070d]/40 via-[#05070d]/60 to-[#05070d]"
      />

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-4xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_2px_rgba(96,165,250,0.6)]" />
          New — Pipeline insights are live
        </span>

        <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
          Manage your leads
          <br />
          smarter with{" "}
          <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Leads Locker
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-white/65">
          Organize leads, track customers, and grow your business — all from one
          calm, powerful workspace.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
          <Link
            to="/signup"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#05070d] shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.5)]"
          >
            Get Started
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10"
          >
            Login
          </Link>
        </div>

        <p className="mt-8 text-xs text-white/40">
          Free 14-day trial · No credit card required
        </p>
      </section>
    </main>
  );
};

export default LandingPage;
