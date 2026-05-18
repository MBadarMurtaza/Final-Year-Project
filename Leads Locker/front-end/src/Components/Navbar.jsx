import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const navLinkClass =
    "text-sm font-medium text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5";

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 antialiased selection:bg-blue-500/30">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.25] mix-blend-screen"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <nav className="z-40 border-b border-white/10 bg-[#030712]/80 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link to="/" className="flex items-center gap-2.5 group">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-transform group-hover:scale-[1.02]">
                L
              </span>
              <span className="text-sm font-semibold tracking-tight text-white transition-colors group-hover:text-blue-400">
                Leads Locker
              </span>
            </Link>

            <div className="hidden items-center gap-1 md:flex">
              <Link to="/pricing" className={navLinkClass}>
                Pricing
              </Link>
              {token && (
                <Link to="/home" className={navLinkClass}>
                  Home
                </Link>
              )}
            </div>

            <div className="hidden items-center gap-4 md:flex">
              {token ? (
                <button
                  onClick={handleLogout}
                  className="rounded-lg border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-200 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white shadow-md shadow-blue-600/10 transition-all hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-blue-600/20"
                  >
                    Join Now
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Action Toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-4 w-4"
              >
                {open ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {open && (
            <div className="border-t border-white/[0.06] bg-[#030712]/95 backdrop-blur-lg md:hidden">
              <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
                <Link
                  to="/home"
                  onClick={() => setOpen(false)}
                  className={navLinkClass}
                >
                  Home
                </Link>
                <Link
                  to="/pricing"
                  onClick={() => setOpen(false)}
                  className={navLinkClass}
                >
                  Pricing
                </Link>

                {token ? (
                  <>
                    <button
                      onClick={() => {
                        setOpen(false);
                        handleLogout();
                      }}
                      className="mt-2 text-left text-sm font-medium text-rose-400 hover:text-rose-300 transition px-3 py-2 rounded-lg hover:bg-rose-500/10"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <div className="my-2 border-t border-white/5" />
                    <Link
                      to="/login"
                      onClick={() => setOpen(false)}
                      className={navLinkClass}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setOpen(false)}
                      className="mt-1 inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                    >
                      Join Now
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </nav>

        {/* View Routing Injector */}
        <main className="flex-1 px-4 sm:px-6">
          <Outlet /> {/* This is where the routed page components will be*/}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Navbar;
