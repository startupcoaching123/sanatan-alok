"use client"

import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowUp } from "react-icons/fa"
import { Link } from "react-router-dom"

import logo from '../../assets/logo.png';

const BACKENDURL = import.meta.env.VITE_BACKEND_URL
const Footer = () => {
    const [email, setEmail] = useState("")
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault()

        if (!email) {
            Swal.fire({
                title: "Invalid Email",
                text: "Please enter a valid email address.",
                icon: "warning",
                confirmButtonColor: "#7030A0",
            })
            return
        }

        setLoading(true) // Start loading

        try {
            const res = await axios.post(`${BACKENDURL}/api/newsletter/subscribe`, {
                email: email.trim(),
            })

            Swal.fire({
                title: "Subscribed!",
                text: res.data.message || "You have successfully subscribed to our newsletter.",
                icon: "success",
                confirmButtonColor: "#F0982E",
            })

            setEmail("")
        } catch (err) {
            if (err.response?.data?.message === "Email already subscribed.") {
                Swal.fire({
                    title: "Already Subscribed",
                    text: "This email is already registered for our newsletter.",
                    icon: "warning",
                    confirmButtonColor: "#F0982E",
                })
            } else {
                Swal.fire({
                    title: "Oops!",
                    text: "Something went wrong. Please try again later.",
                    icon: "error",
                    confirmButtonColor: "#F0982E",
                })
            }
        } finally {
            setLoading(false) // End loading
        }
    }

    // Scroll to top functionality
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    // Show scroll to top button when user scrolls down
    useState(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const footerSections = [
        {
            title: "Quick Links",
            links: [
                { name: "Home", href: "/about-us" },
                { name: "Programs", href: "/programsy" },
                { name: "About Us", href: "/about-us" },
                { name: "Four Divine Vidyas", href: "/four-divine-vidyas" },
                { name: "Blogs", href: "/blogs" },
                { name: "Contact Us", href: "/contact-us" },
                { name: "Donate Us", href: "/donate" },
            ],
        },
        {
            title: "Free Programs",
            links: [
                { name: "Essence of Yoga", href: "/programs/essence-of-yoga" },
                { name: "Mantra Vidya", href: "/programs/mantra-vidya" },
                { name: "Buddha Blueprint", href: "/programs/buddha-blueprint" },
                { name: "Chakra Intelligence", href: "/programs/chakra-intelligence" },
                { name: "On Demand Satsang", href: "/on-demand-satsang" },
            ],
        },
    ]

    const socialLinks = [
        {
            icon: <FaFacebookF />,
            href: "https://www.facebook.com/profile.php?id=61579737838622",
            name: "Facebook",
            color: "hover:text-blue-500",
        },
        {
            icon: <FaInstagram />,
            href: "https://www.instagram.com/sanatanalokofficial/",
            name: "Instagram",
            color: "hover:text-pink-500",
        },
    ]

    return (
        <>
            <footer className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 text-gray-800 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23F59E0B&quot; fillOpacity=&quot;0.3&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-amber-300/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-amber-200/30 to-orange-300/30 rounded-full blur-3xl"></div>

                {/* Main Footer Content */}
                <div className="relative max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {/* Brand Section */}
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
                                <img
                                    src={logo}
                                    alt="Sanatan Alok Logo"
                                    className="h-16 sm:h-12 object-contain"
                                />
                            </div>
                            <p className="text-gray-700 mb-8 leading-relaxed max-w-md text-center md:text-left">
                                Professional and dedicated consulting solutions facilitating client learning that is, teaching clients
                                how to resolve similar problems in the future through spiritual wisdom and ancient practices.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center justify-center md:justify-start space-x-3 text-sm group">
                                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                                        <FaEnvelope className="w-3 h-3 text-white" />
                                    </div>
                                    <a
                                        href="mailto:light.sanatanaalok@gmail.com"
                                        className="text-gray-700 hover:text-orange-600 transition-colors"
                                    >
                                        light.sanatanaalok@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center justify-center md:justify-start space-x-3 text-sm group">
                                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                                        <FaPhone className="w-3 h-3 text-white" />
                                    </div>
                                    <a href="https://wa.me/917827468953" className="text-gray-700 hover:text-orange-600 transition-colors">
                                        +91 7827468953
                                    </a>
                                </div>
                                <div className="flex items-start justify-center md:justify-start space-x-3 text-sm">
                                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center mt-0.5">
                                        <FaMapMarkerAlt className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-700 leading-relaxed">
                                        Gurugram, Haryana, India
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center justify-center md:justify-start mb-6">
                                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center mr-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <h3 className="text-gray-800 font-bold text-xl">Quick Links</h3>
                            </div>
                            <ul className="space-y-4 text-center md:text-left">
                                {footerSections[0].links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            to={link.href}
                                            className="text-gray-700 hover:text-orange-600 transition-all duration-200 text-sm hover:translate-x-2 transform inline-block group flex items-center justify-center md:justify-start"
                                        >
                                            <span className="w-1 h-1 bg-orange-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center justify-center md:justify-start mb-6">
                                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center mr-3">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                <h3 className="text-gray-800 font-bold text-xl">Programs</h3>
                            </div>
                            <ul className="space-y-4 text-center md:text-left">
                                {footerSections[1].links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            to={link.href}
                                            className="text-gray-700 hover:text-orange-600 transition-all duration-200 text-sm hover:translate-x-2 transform inline-block group flex items-center justify-center md:justify-start"
                                        >
                                            <span className="w-1 h-1 bg-orange-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter Section */}
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center justify-center md:justify-start mb-6">
                                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center mr-3">
                                    <FaEnvelope className="w-3 h-3 text-white" />
                                </div>
                                <h3 className="text-gray-800 font-bold text-xl">Newsletter</h3>
                            </div>
                            <p className="text-gray-700 mb-6 text-sm leading-relaxed text-center md:text-left">
                                Subscribe to our newsletter for the latest spiritual insights, program updates, and transformative
                                content.
                            </p>
                            <form onSubmit={handleNewsletterSubmit} className="w-full">
                                <div className="relative mb-4">
                                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full pl-12 pr-4 py-4 bg-white/80 border border-orange-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 shadow-sm"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl transition-all duration-200 transform shadow-lg ${loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105 hover:shadow-xl"
                                        }`}
                                >
                                    {loading ? "Subscribing..." : "Subscribe Now"}
                                </button>
                            </form>

                            {/* Social Links */}
                            <div className="mt-8">
                                <h4 className="text-gray-800 font-semibold mb-4 text-center md:text-left">Follow Us</h4>
                                <div className="flex items-center justify-center md:justify-start space-x-3">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 rounded-xl flex items-center justify-center text-white transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
                                            aria-label={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="relative border-t border-orange-200/50 bg-gradient-to-r from-orange-100/50 to-amber-100/50">
                    <div className="max-w-7xl mx-auto px-6 py-8">
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-4 md:space-y-0">
                            {/* Copyright */}
                            <div className="flex items-center space-x-2 text-sm text-gray-700">
                                <span>© 2025 Sanatan Alok. All rights reserved.</span>
                                {/* <FaHeart className="w-4 h-4 text-orange-500 animate-pulse" />
                                <span>Made with love for spiritual growth</span> */}
                            </div>

                            {/* Additional Links */}
                            {/* <div className="flex items-center space-x-6 text-sm">
                                <Link to="/privacy" className="text-gray-700 hover:text-orange-600 transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link to="/terms" className="text-gray-700 hover:text-orange-600 transition-colors">
                                    Terms of Service
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Scroll to Top Button */}
                {showScrollTop && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-200 transform hover:scale-110 z-50 border-2 border-white/20"
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp className="w-5 h-5" />
                    </button>
                )}
            </footer>
        </>
    )
}

export default Footer