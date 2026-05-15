import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Backgroundimage from "../Components/Assets/background_image.jpeg";
import Footer from "./Footer";

const Layout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image - Fixed so it stays in place while scrolling */}
      <div
        className="absolute top-0 left-0 right-0 z-0 min-h-full"
        style={{
          backgroundImage: `url(${Backgroundimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "scroll", // This ensures it scrolls
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Transparent Navbar with blur effect */}
        <nav className=" top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div>
                <Link
                  to="/"
                  className="text-gray-200 hover:text-white transition px-3 py-2 rounded-lg hover:bg-white/10"
                >
                  Home
                </Link>
                <Link
                  to="/pricing"
                  className="text-gray-200 hover:text-white transition px-3 py-2 rounded-lg hover:bg-white/10"
                >
                  Pricing
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  to="/"
                  className="text-2xl font-bold text-white bg-clip-text"
                >
                  Leads Locker
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                {token ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="text-gray-200 hover:text-white transition px-3 py-2 rounded-lg hover:bg-white/10"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-gray-200 hover:text-white transition px-3 py-2 rounded-lg hover:bg-white/10"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-gray-200 hover:text-white transition px-3 py-2 rounded-lg hover:bg-white/10"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2 rounded-lg transition shadow-lg"
                    >
                      Join Now
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
