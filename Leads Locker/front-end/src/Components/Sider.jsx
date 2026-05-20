import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Sider() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Controls desktop sidebar expansion (True Gemini behavior)
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Get user data from localStorage
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menuItems = [
    {
      path: "/home",
      name: "New Chat",
      icon: (
        <svg
          className="w-5 h-5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
    {
      path: "/saved-people",
      name: "Saved people",
      icon: (
        <svg
          className="w-5 h-5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      ),
    },
    {
      path: "/history",
      name: "History",
      icon: (
        <svg
          className="w-5 h-5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];

  const getUserInitials = () => {
    if (user.name) {
      const names = user.name.split(" ");
      if (names.length >= 2)
        return `${names[0][0]}${names[1][0]}`.toUpperCase();
      return names[0][0].toUpperCase();
    }
    return "U";
  };

  const SidebarContent = ({ forceOpen = false }) => {
    const showLabels = forceOpen || !isCollapsed;

    return (
      <div className="relative flex flex-col h-full justify-between select-none">
        <div>
          {/* Header Area with Brand and Sidebar Toggle Button */}
          <div
            className={`flex items-center py-4 border-b border-white/5 relative ${
              showLabels ? "px-4 justify-between" : "justify-center h-[65px]"
            }`}
          >
            {showLabels ? (
              /* --- SIDEBAR EXPANDED STATE --- */
              <>
                <Link
                  to="/"
                  className="flex items-center gap-2.5 group/logo"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-xs font-bold text-white shadow-md">
                    L
                  </span>
                  <span className="text-sm font-semibold tracking-tight text-white group-hover/logo:text-blue-400 transition-colors truncate">
                    Leads Locker
                  </span>
                </Link>

                {/* Collapse Panel Trigger (Arrow Left appears only on hover via group class) */}
                <button
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="group p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors duration-200 hidden md:block"
                  title="Collapse panel"
                >
                  <svg
                    className="w-5 h-5 transition-colors duration-200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="9"
                      y1="3"
                      x2="9"
                      y2="21"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Arrow Left hidden by default, fades in gracefully on button hover */}
                    <path
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      d="M16 15l-3-3 3-3"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            ) : (
              /* --- SIDEBAR COLLAPSED STATE --- */
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="group/header relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 transition-all duration-200"
                title="Expand panel"
              >
                {/* Static Brand Logo (Vanishes cleanly on header hover) */}
                <div className="absolute inset-0 flex items-center justify-center scale-100 opacity-100 group-hover/header:opacity-0 group-hover/header:scale-90 transition-all duration-200">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-xs font-bold text-white shadow-md">
                    L
                  </span>
                </div>

                {/* Complete Expand Panel SVG (Arrow Right fully fixed and functional when logo is hovered) */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover/header:text-white opacity-0 group-hover/header:opacity-100 scale-95 group-hover/header:scale-100 transition-all duration-200">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="5"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="9"
                      y1="3"
                      x2="9"
                      y2="21"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 9l3 3-3 3"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="px-2 py-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  setActiveItem(item.path);
                  setIsDrawerOpen(false);
                }}
                className={`flex items-center rounded-lg transition-all duration-200 group relative ${
                  showLabels ? "gap-3 px-3 py-2.5" : "justify-center p-3"
                } ${
                  activeItem === item.path
                    ? "bg-white/5 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
                title={!showLabels ? item.name : undefined}
              >
                <span className="transition-transform group-hover:scale-105">
                  {item.icon}
                </span>
                {showLabels && (
                  <span className="text-sm font-medium truncate">
                    {item.name}
                  </span>
                )}

                {/* Visual Active Status Indicators */}
                {activeItem === item.path &&
                  (showLabels ? (
                    <div className="ml-auto w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  ) : (
                    <div className="absolute left-0 w-1 h-5 bg-blue-500 rounded-r-full"></div>
                  ))}
              </Link>
            ))}
          </nav>

          {/* Recent Queries Feed Section */}
          <div className="px-2 py-4 border-t border-white/5 mt-2">
            {showLabels ? (
              <div className="flex items-center justify-between px-2 mb-2">
                <p className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">
                  Recent
                </p>
                <button className="text-gray-500 hover:text-gray-300 text-xs">
                  Clear
                </button>
              </div>
            ) : (
              <div className="w-full h-[1px] bg-white/5 my-1" />
            )}

            <div className="space-y-1">
              {["Hi how are you", "Meeting notes", "Client details"].map(
                (item, index) => (
                  <div
                    key={index}
                    className={`flex items-center text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 cursor-pointer group ${
                      showLabels ? "gap-3 px-3 py-2" : "justify-center p-3"
                    }`}
                    title={!showLabels ? item : undefined}
                  >
                    <svg
                      className="w-4 h-4 text-gray-500 flex-shrink-0 group-hover:text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                    {showLabels && (
                      <span className="text-sm truncate flex-1">{item}</span>
                    )}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* User Account Context block */}
        {token && (
          <div className="w-full px-2 py-4 border-t border-white/5">
            <div className="flex flex-col items-center w-full gap-1.5">
              <div
                className={`flex items-center w-full rounded-xl bg-white/5 ${
                  showLabels ? "gap-3 px-3 py-2" : "justify-center p-2"
                }`}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 shadow">
                  <span className="text-white text-xs font-semibold">
                    {getUserInitials()}
                  </span>
                </div>
                {showLabels && (
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-medium truncate">
                      {user.name || "User Name"}
                    </p>
                    <p className="text-gray-500 text-[11px] truncate">
                      {user.email || "user@example.com"}
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={handleLogout}
                className={`flex items-center text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200 w-full ${
                  showLabels
                    ? "justify-start gap-3 px-3 py-2.5 text-sm"
                    : "justify-center p-3"
                }`}
                title="Logout Account"
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                {showLabels && <span>Logout</span>}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* DESKTOP SIDEBAR PANEL CONTAINER */}
      <div
        className={`relative hidden md:block bg-[#131314] m-2.5 rounded-2xl shadow-2xl h-[calc(100vh-1.25rem)] border border-white/5 transition-all duration-300 ease-in-out flex-shrink-0 overflow-hidden ${
          isCollapsed ? "w-20" : "w-66"
        }`}
      >
        <SidebarContent forceOpen={false} />
      </div>

      {/* MOBILE TRIGGER - Slider Open SVG (Arrow Right Fixed) */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="md:hidden fixed top-4 left-4 z-30 bg-[#131314] p-2 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-[#1e1f20] transition-colors shadow-lg"
        aria-label="Open menu"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="9"
            y1="3"
            x2="9"
            y2="21"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 9l3 3-3 3"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* MOBILE MODAL DRAWER OVERLAY WRAPPER */}
      {isDrawerOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* MOBILE COMPACT SLIDE DRAWER VIEW */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-72 bg-[#131314] z-50 shadow-2xl transform transition-transform duration-300 ease-out p-4 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Closer Trigger Button - Fixed Arrow Left without hover effect */}
        <button
          onClick={() => setIsDrawerOpen(false)}
          className="absolute top-4 right-4 p-2 text-gray-400 rounded-lg transition-all z-50"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="9"
              y1="3"
              x2="9"
              y2="21"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Fixed arrow left path - always visible without hover */}
            <path
              d="M15 9l-3 3 3 3"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="h-full pt-10">
          <SidebarContent forceOpen={true} />
        </div>
      </div>
    </>
  );
}

export default Sider;
