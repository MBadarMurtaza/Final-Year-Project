import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05070d] text-white/70">
      {/* Glow Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.12),transparent_60%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 text-center sm:text-left">
            <Link
              to="/"
              className="inline-flex items-center gap-3 group justify-center sm:justify-start"
            >
              <span className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 text-base font-bold text-white shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-105">
                L
              </span>

              <span className="text-base sm:text-lg font-semibold tracking-wide text-white">
                Leads Locker
              </span>
            </Link>

            <p className="mt-4 sm:mt-5 max-w-md text-xs sm:text-sm leading-6 sm:leading-7 text-white/55 mx-auto sm:mx-0">
              The calm, powerful workspace for managing leads, tracking
              customers, and growing your business with clarity and speed.
            </p>
          </div>

          {/* Product Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Product
            </h4>

            <ul className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              {[
                { label: "Features", path: "/features" },
                { label: "Pricing", path: "/pricing" },
                { label: "Login", path: "/login" },
                { label: "Get Started", path: "/signup" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="inline-block transition duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
              Company
            </h4>

            <ul className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              {[
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
                { label: "Privacy", path: "/privacy" },
                { label: "Terms", path: "/terms" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="inline-block transition duration-300 hover:translate-x-1 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 sm:my-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 sm:gap-5 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] xs:text-xs sm:text-sm text-white/45 order-2 sm:order-1">
            © {year} Leads Locker. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 order-1 sm:order-2">
            {/* Twitter/X */}
            <a
              href="#"
              aria-label="Twitter"
              className="group grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/10 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
              >
                <path d="M18.244 2H21l-6.52 7.45L22 22h-6.79l-4.74-6.2L4.8 22H2l7.01-8.01L2 2h6.91l4.28 5.66L18.244 2Zm-1.19 18h1.84L7.04 4H5.1l11.954 16Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="group grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/10 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.25 8h4.5V23H.25V8Zm7.5 0h4.31v2.05h.06c.6-1.13 2.07-2.32 4.26-2.32 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.5c0-1.55-.03-3.55-2.16-3.55-2.16 0-2.49 1.69-2.49 3.43V23h-4.5V8Z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="#"
              aria-label="GitHub"
              className="group grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/10 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3.5 w-3.5 sm:h-4 sm:w-4"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.39.97.01 1.95.14 2.86.39 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;