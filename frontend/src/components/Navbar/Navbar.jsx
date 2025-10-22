"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown, ChevronUp, ChevronRight } from "lucide-react"

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [mobileDropdowns, setMobileDropdowns] = useState({})
  const [desktopDropdowns, setDesktopDropdowns] = useState({})
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
      subItems: [
        { id: 1, title: "Unlocking the Essence of Yoga", path: "/programs/essence-of-yoga" },
        { id: 2, title: "Mantra Vidya", path: "/programs/mantra-vidya" },
        { id: 3, title: "The Buddha Blueprint", path: "/programs/buddha-blueprint" },
        { id: 4, title: "Chakra Intelligence", path: "/programs/chakra-intelligence" },
        { id: 5, title: "Experiential Masterclass", path: "/programs/experiential-masterclass" },
        { id: 5, title: "Four Divine Vidyas", path: "/programs/four-divine-vidyas" },
        // { id: 5, title: "Ashtalaxmi Sadhana", path: "/programs/ashtalaxmi-sadhana" },
        { id: 7, title: "On Demand Satsang", path: "/on-demand-satsang" },
      ],
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
      title: "Support Us",
      path: "/support-us",
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

  // Close mobile menu, modal, and dropdowns when route changes, add loading state
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setMobileMenuOpen(false)
      setMobileDropdowns({})
      setDesktopDropdowns({})
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

  // Close desktop dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setDesktopDropdowns({})
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  // Toggle mobile dropdowns
  const toggleMobileDropdown = (itemId) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }))
  }

  // Toggle desktop dropdowns
  const toggleDesktopDropdown = (itemId, event) => {
    event.stopPropagation()
    setDesktopDropdowns((prev) => ({
      [itemId]: !prev[itemId],
    }))
  }

  return (
    <>
      {/* Loading Indicator */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] animate-pulse z-[60]" />
      )}

      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white"
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
                <div key={item.id} className="relative">
                  {item.subItems ? (
                    <>
                      <button
                        className="flex items-center px-4 py-2 text-gray-700 hover:text-[#F0982E] font-medium transition-colors duration-200"
                        onClick={(e) => toggleDesktopDropdown(item.id, e)}
                      >
                        {item.title}
                        <ChevronDown
                          className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                            desktopDropdowns[item.id] ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {desktopDropdowns[item.id] && (
                        <div className="absolute left-0 mt-2 w-56 origin-top-right bg-white rounded-lg shadow-xl ring-1 ring-gray-200 focus:outline-none z-50">
                          <div className="py-2">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.id}
                                to={subItem.path}
                                className="block px-4 py-3 text-gray-700 hover:bg-[#F0982E]/10 hover:text-[#F0982E] transition-colors duration-200 text-sm font-medium"
                                onClick={() => setDesktopDropdowns({})}
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="px-4 py-2 text-gray-700 hover:text-[#F0982E] font-medium transition-colors duration-200"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to={navItems[5].path}
                className="relative px-6 py-2 bg-gradient-to-r from-[#F0982E] to-[#f97316] hover:from-[#f97316] hover:to-[#ea580c] text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                {navItems[5].title}
                {navItems[5].isSpecial && (
                  <>
                  </>
                )}
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#F0982E] focus:outline-none"
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
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
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
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.id)}
                        className="flex items-center justify-between w-full p-4 text-gray-700 hover:text-[#F0982E] hover:bg-[#F0982E]/10 transition-all duration-200 font-medium"
                      >
                        <span>{item.title}</span>
                        {mobileDropdowns[item.id] ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                      {mobileDropdowns[item.id] && (
                        <div className="ml-4 mb-2 space-y-1 bg-gray-50 rounded-lg p-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.id}
                              to={subItem.path}
                              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-[#F0982E] hover:bg-[#F0982E]/10 transition-colors duration-200 text-sm font-medium"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <div className="flex items-center">
                                <ChevronRight className="w-4 h-4 mr-2 text-[#F0982E]" />
                                {subItem.title}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block p-4 rounded-lg text-gray-700 hover:text-[#F0982E] hover:bg-[#F0982E]/10 transition-all duration-200 font-medium text-left"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="flex items-center justify-start">{item.title}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-100">
            <Link
              to={navItems[5].path}
              className="relative block w-full px-6 py-3 bg-gradient-to-r from-[#F0982E] to-[#f97316] hover:from-[#f97316] hover:to-[#ea580c] text-white font-medium rounded-full text-center transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              {navItems[5].title}
              {navItems[5].isSpecial}
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