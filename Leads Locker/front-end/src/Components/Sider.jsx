import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Sider() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menuItems = [
    {
      path: "/dashboard",
      name: "Home",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      path: "/saved-people",
      name: "Saved people",
      icon: (
        <svg
          className="w-5 h-5"
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
          className="w-5 h-5"
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

  // Sidebar content component (reused for both desktop and drawer)
  const SidebarContent = () => (
    <div className="relative flex flex-col h-full">
      {/* Logo / Brand */}
      <div className="px-4 py-6 border-b border-gray-800">
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          onClick={() => setIsDrawerOpen(false)}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-transform group-hover:scale-[1.02]">
            L
          </span>
          <span className="text-sm font-semibold tracking-tight text-white transition-colors group-hover:text-blue-400">
            Leads Locker
          </span>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="px-3 py-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => {
              setActiveItem(item.path);
              setIsDrawerOpen(false);
            }}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
              activeItem === item.path
                ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border-l-2 border-blue-500"
                : "text-gray-400 hover:text-white hover:bg-white/10"
            }`}
          >
            <span className="transition-transform group-hover:scale-110">
              {item.icon}
            </span>
            <span className="text-sm font-medium">{item.name}</span>
            {activeItem === item.path && (
              <div className="ml-auto w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            )}
          </Link>
        ))}
      </nav>

      {/* Recent Section - grows to take available space */}
      <div className="flex-1 px-3 py-4 border-t border-gray-800">
        <div className="flex items-center justify-between px-3 mb-3">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
            Recent
          </p>
          <button className="text-gray-500 hover:text-gray-300 text-xs">
            Clear
          </button>
        </div>
        <div className="space-y-1">
          {["Hi how are you", "Meeting notes", "Client details"].map(
            (item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 cursor-pointer group"
              >
                <svg
                  className="w-4 h-4 text-gray-500 group-hover:text-gray-300"
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
                <span className="text-sm truncate flex-1">{item}</span>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ),
          )}
        </div>
      </div>

      {/* User Profile / Logout - at bottom and horizontally centered */}
      {token && (
        <div className="w-full px-3 py-4 border-t border-gray-800">
          <div className="flex flex-col items-center w-full">
            <div className="w-full max-w-[90%]">
              <div className="flex items-center gap-3 px-3 py-2 mb-2 rounded-lg bg-white/5">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-medium">JD</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">
                    John Doe
                  </p>
                  <p className="text-gray-500 text-xs truncate">
                    john@example.com
                  </p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-3 px-3 py-2.5 w-full text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
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
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar - visible on large screens */}
      <div className="relative hidden md:block bg-[#1a1a1a] w-64 m-2.5 rounded-xl shadow-xl h-[calc(100vh-1.25rem)]">
        <SidebarContent />
      </div>

      {/* Mobile Menu Button - visible only on small screens */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="md:hidden fixed top-4 left-4 z-30 bg-[#1a1a1a] p-2.5 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-800 transition-all duration-200"
        aria-label="Open menu"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/70 z-40 transition-opacity duration-300"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Mobile Drawer - slides from left */}
      <div
        className={`
          md:hidden fixed top-0 left-0 h-full w-72 bg-[#1a1a1a] z-50 shadow-2xl
          transform transition-transform duration-300 ease-out
          ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close button inside drawer */}
        <button
          onClick={() => setIsDrawerOpen(false)}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-all z-10"
          aria-label="Close menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="h-full overflow-y-auto">
          <SidebarContent />
        </div>
      </div>
    </>
  );
}

export default Sider;
