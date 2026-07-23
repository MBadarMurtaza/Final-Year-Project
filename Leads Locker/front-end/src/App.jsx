import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import LoginSignup from "./Pages/LoginSignup";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import DashboardAnalysis from "./Pages/DashboardAnalysis";
import SavedPeople from "./Pages/SavedPeople";
import History from "./Pages/History"; // Imported History Page

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Layout */}
        <Route element={<Navbar />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>

        {/* Routes without Layout */}
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/signup" element={<LoginSignup />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardAnalysis />
            </ProtectedRoute>
          }
        />

        {/* Saved People Route */}
        <Route
          path="/saved-people"
          element={
            <ProtectedRoute>
              <SavedPeople />
            </ProtectedRoute>
          }
        />

        {/* History Route */}
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
