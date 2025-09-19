import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Navbar/ScrollToTop";

import Home from "./pages/Home";

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <HelmetProvider>
        <ScrollToTop />

        {/* Navbar (hidden on admin pages) */}
        {!isAdminPage && <Navbar />}

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Add more pages here later */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer (hidden on admin pages) */}
        {!isAdminPage && <Footer />}

        {/* Toastify Notifications */}
        <ToastContainer position="top-right" autoClose={3000} />

        {/* React Hot Toast */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              marginTop: "80px",
              background: "#1A1A1A",
              color: "#fff",
            },
          }}
        />
      </HelmetProvider>
    </div>
  );
}

export default App;
