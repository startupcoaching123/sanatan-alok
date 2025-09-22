import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Navbar/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Programs from "./pages/Programs";
import Donate from "./pages/Donate";
import Blogs from "./pages/Blogs";
import SingleBlogPage from "./pages/SingleBlogPage";
import AdminLogin from './pages/AdminLogin.jsx';
import AdminPanel from './pages/AdminPanel.jsx';

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
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<SingleBlogPage />} />

            <Route path="*" element={<Navigate to="/" replace />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />

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


function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}

export default App;
