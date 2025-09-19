import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import toast from "react-hot-toast"
import {
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaLinkedinIn,
    FaInstagram,
    FaDiscord,
    FaGamepad,
    FaShieldAlt,
    FaHeadset,
    FaGavel,
    FaCreditCard,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaArrowUp,
    FaHeart,
} from "react-icons/fa"
import { Link } from "react-router-dom"

const BACKENDURL = import.meta.env.VITE_BACKEND_URL;
const Footer = () => {
    const [email, setEmail] = useState("")
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [loading, setLoading] = useState(false);

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            Swal.fire({
                title: "Invalid Email",
                text: "Please enter a valid email address.",
                icon: "warning",
                confirmButtonColor: "#7030A0",
            });
            return;
        }

        setLoading(true); // Start loading

        try {
            const res = await axios.post(`${BACKENDURL}/api/newsletter/subscribe`, {
                email: email.trim(),
            });

            Swal.fire({
                title: "Subscribed!",
                text: res.data.message || "You have successfully subscribed to our newsletter.",
                icon: "success",
                confirmButtonColor: "#7030A0",
            });

            setEmail("");
        } catch (err) {
            if (err.response?.data?.message === "Email already subscribed.") {
                Swal.fire({
                    title: "Already Subscribed",
                    text: "This email is already registered for our newsletter.",
                    icon: "warning",
                    confirmButtonColor: "#7030A0",
                });
            } else {
                Swal.fire({
                    title: "Oops!",
                    text: "Something went wrong. Please try again later.",
                    icon: "error",
                    confirmButtonColor: "#7030A0",
                });
            }
        } finally {
            setLoading(false); // End loading
        }
    };



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
            title: "Startup Coach",
            links: [
                { name: "About Us", href: "/about-us" },
                { name: "About Company", href: "/about-company" },
                { name: "About Founder", href: "/about-founder" },
                { name: "Blogs", href: "/blogs" },
                { name: "Contact Us", href: "/contact" },
            ],
        },
        {
            title: "Services",
            links: [
                { name: "Fund Raising", href: "/services/fund-raising" },
                { name: "Marketing Support", href: "/services/marketing-support" },
                { name: "Product Development Support", href: "/services/product-development" },
                { name: "Virtual CFO", href: "/services/virtual-cfo" },
                { name: "Legal Advisory", href: "/services/legal-advisory" },
                { name: "Gen AI and Data Science", href: "/services/gen-ai-and-ds" },
            ],
        }
    ]

    const socialLinks = [
        { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61576089756168", name: "Facebook", color: "hover:text-blue-500" },
        // { icon: <FaTwitter />, href: "#", name: "Twitter", color: "hover:text-blue-400" },
        { icon: <FaInstagram />, href: "https://www.instagram.com/startup_coach1000x/", name: "Instagram", color: "hover:text-pink-500" },
        { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/startup-coach-1000x/", name: "LinkedIn", color: "hover:text-blue-600" },
    ]

    return (
        <>
            <footer className="relative bg-gradient-to-r from-[#FFF4E0] to-[#FCE7C5] text-black overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%2300FF7F&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
                </div>

                {/* Main Footer Content */}
                <div className="relative max-w-7xl mx-auto px-6 py-12 text-center md:text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-center md:items-start">
                        {/* Brand Section */}
                        <div className="lg:col-span-2 flex flex-col items-center md:items-start">
                            <div className="flex items-center space-x-3 mb-6 justify-center md:justify-start">
                                <div>
                                    <h2 className="text-2xl font-bold text-black">Startup Coach</h2>
                                </div>
                            </div>
                            <p className="text-dark mb-6 leading-relaxed max-w-md">
                                Professional And Dedicated Consulting Solutions Facilitating client learning that is, teaching clients how to resolve similar problems in the future
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center space-x-3 text-sm justify-center md:justify-start">
                                    <FaEnvelope className="w-4 h-4 text-black" />
                                    <a href="mailto:support@startupcoaching.in"><span>support@startupcoaching.in</span></a>
                                </div>
                                <div className="flex items-center space-x-3 text-sm justify-center md:justify-start">
                                    <FaPhone className="w-4 h-4 text-black" />
                                    <a href="tel:9892450260"><span>+91 9892450260</span></a>
                                </div>
                                <div className="flex items-center space-x-3 text-sm justify-center md:justify-start">
                                    <FaMapMarkerAlt className="w-4 h-4 text-black" />
                                    <span>C-25, First Floor, Gali No 5, Near Shagun Sweets Opposite V3S Mall, Nirman Vihar, Delhi, 110092</span>
                                </div>
                            </div>
                        </div>

                        {/* Footer Links */}
                        {footerSections.map((section, index) => (
                            <div key={index} className="flex flex-col items-center md:items-start">
                                <div className="flex items-center mb-6 justify-center md:justify-start">
                                    <div className="text-black">{section.icon}</div>
                                    <h3 className="text-black font-semibold text-lg">{section.title}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link
                                                to={link.href}
                                                className="text-black hover:text-black transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Newsletter Section */}
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center space-x-2 mb-6 justify-center md:justify-start">
                                <h3 className="text-black font-semibold text-lg">Newsletter</h3>
                            </div>
                            <p className="text-black mb-4 text-sm">
                                Subscribe to our newsletter for the latest updates and offers.
                            </p>
                            <form onSubmit={handleNewsletterSubmit} className="w-full">
                                <div className="relative mb-3">
                                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black w-4 h-4" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full pl-10 pr-4 py-3 bg-white/50 border border-gray-700/50 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#F0982E]/50 focus:border-[#F0982E]/50 transition-all duration-200"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full px-6 py-3 bg-gradient-to-r from-[#F0982E] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white font-semibold rounded-lg transition-all duration-200 transform ${loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
                                        }`}
                                >
                                    {loading ? "Subscribing..." : "Subscribe"}
                                </button>

                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="relative border-t border-gray-800/50">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-4 md:space-y-0">
                            {/* Copyright */}
                            <div className="flex flex-col md:flex-row items-center space-x-2 text-sm text-black text-center">
                                <span>© 2025 Startup Coach. All rights reserved.</span>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center space-x-4 justify-center">
                                <span className="text-sm text-black mr-2">Follow us:</span>
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`w-10 h-10 bg-gray-300/50 rounded-lg flex items-center justify-center text-dark ${social.color} transition-all duration-200 transform hover:scale-110`}
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Scroll to Top Button */}
                {showScrollTop && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-6 left-8 w-12 h-12 bg-gradient-to-r from-[#F0982E] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] hover:bg-[#5A267D] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 transform hover:scale-110 z-50"
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