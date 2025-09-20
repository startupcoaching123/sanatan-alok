"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()

  const navItems = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Programs",
      path: "/programs",
    },
    {
      id: 3,
      title: "About Us",
      path: "/about-us",
    },
    {
      id: 4,
      title: "Blogs",
      path: "/blogs",
    },
    {
      id: 5,
      title: "Contact Us",
      path: "/contact-us",
    },
    {
      id: 6,
      title: "Donate Us",
      path: "/donate",
      isSpecial: true,
    },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu and modal when route changes, add loading state
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setMobileMenuOpen(false)
      setIsModalOpen(false)
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [location.pathname])

  // Prevent body scroll when mobile menu or modal is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Loading Indicator */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7030A0] to-purple-600 animate-pulse z-60" />
      )}

      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center space-x-2 group">
                <img
                  src={new URL("/src/assets/logo.png", import.meta.url).href || "/placeholder.svg"}
                  alt="Logo"
                  className="h-15 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center items-center space-x-2">
              {navItems.slice(0, -1).map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="px-4 py-2 text-gray-700 hover:text-[#F0982E] font-medium transition-colors duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to={navItems[5].path}
                className="px-6 py-2 bg-gradient-to-r from-[#F0982E] to-[#f97316] hover:from-[#f97316] hover:to-[#ea580c] text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                {navItems[5].title}
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
              <img
                src={new URL("/src/assets/logo.png", import.meta.url).href || "/placeholder.svg"}
                alt="Logo"
                className="h-15 w-auto"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-1 px-4">
              {navItems.slice(0, -1).map((item) => (
                <div key={item.id} className="border-b border-gray-100 last:border-0">
                  <Link
                    to={item.path}
                    className="block p-4 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 font-medium text-left"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="flex items-center justify-start">
                      {item.title}
                    </span>
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-100">
            <Link
              to={navItems[4].path}
              className="block w-full px-6 py-3 bg-gradient-to-r from-[#F0982E] to-[#f97316] hover:from-[#f97316] hover:to-[#ea580c] text-white font-medium rounded-full hover:from-purple-600 hover:to-purple-700 text-center transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {navItems[4].title}
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  )
}

export default Navbar