"use client"

import { useState } from "react"
import { Sun, Heart, Focus as Lotus, Waves, Sparkles, Star, ChevronDown, ChevronUp, Users, CheckCircle, Monitor, Calendar, Video, Award, BookOpen, Zap, Globe, MessageCircle, Target, Brain, Compass, TreePine, Lightbulb, TrendingUp, Shield, Circle, Layers } from 'lucide-react'
import { Helmet } from "react-helmet-async"

// You'll need to add your Chakra Intelligence program image
import program1 from "../assets/chakra-intelligence.jpg";

function ChakraIntelligencePage() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const sevenChakras = [
        {
            title: "Root Chakra (Muladhara)",
            description: "Foundation of security, stability, and survival instincts",
            icon: TreePine,
            gradient: "from-red-500 to-red-600",
        },
        {
            title: "Sacral Chakra (Svadhisthana)",
            description: "Center of creativity, sexuality, and emotional flow",
            icon: Waves,
            gradient: "from-orange-500 to-orange-600",
        },
        {
            title: "Solar Plexus (Manipura)",
            description: "Source of personal power, confidence, and willpower",
            icon: Sun,
            gradient: "from-yellow-500 to-yellow-600",
        },
        {
            title: "Heart Chakra (Anahata)",
            description: "Gateway to love, compassion, and emotional healing",
            icon: Heart,
            gradient: "from-green-500 to-green-600",
        },
        {
            title: "Throat Chakra (Vishuddha)",
            description: "Expression of truth, communication, and authentic voice",
            icon: MessageCircle,
            gradient: "from-blue-500 to-blue-600",
        },
        {
            title: "Third Eye (Ajna)",
            description: "Intuition, wisdom, and higher perception",
            icon: Circle,
            gradient: "from-indigo-500 to-indigo-600",
        },
        {
            title: "Crown Chakra (Sahasrara)",
            description: "Connection to divine consciousness and spiritual awakening",
            icon: Sparkles,
            gradient: "from-purple-500 to-violet-600",
        },
    ]

    const programBenefits = [
        {
            title: "Seven Chakra Foundations",
            description: "Grasp the foundations and functions of all seven chakras",
            icon: Layers,
        },
        {
            title: "Activation Practices",
            description: "Learn simple, effective practices to activate and balance each center",
            icon: Zap,
        },
        {
            title: "Inner Technology Mastery",
            description: "Discover how chakra mastery fuels clarity, abundance, and success",
            icon: Brain,
        },
        {
            title: "Peace & Well-being",
            description: "Transform your life by bringing harmony to your energy centers",
            icon: Lotus,
        },
        {
            title: "Goal Achievement Power",
            description: "Unlock the power to achieve your personal and professional goals",
            icon: Target,
        },
        {
            title: "Practical Roadmap",
            description: "Get a clear path to inner harmony and outer growth",
            icon: Compass,
        },
    ]

    return (
        <div className="min-h-screen font-poppins bg-gradient-to-b from-orange-50 via-white to-amber-50">
            {/* seo */}
            <Helmet>
                <title>Chakra Intelligence | Sanatan Alok Spiritual Program</title>
                <meta
                    name="description"
                    content="Explore Sanatan Alok's Chakra Intelligence program, designed to unlock the power of chakras for spiritual awakening, inner harmony, and holistic transformation through ancient wisdom and practices."
                />
                <meta
                    name="keywords"
                    content="Sanatan Alok chakra intelligence, chakra balancing, spiritual awakening, meditation, inner harmony, holistic transformation, ancient wisdom, energy healing"
                />
                <link rel="canonical" href="https://sanatanalok.com/chakra-intelligence" />
            </Helmet>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 pt-10 md:pt-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

                        {/* Left Content */}
                        <div className="space-y-8">
                            {/* Badge */}
                            <div className="inline-flex items-center px-6 py-3 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                                <Sparkles className="w-4 h-4 mr-2" />
                                2-Day Free Program with Certificate
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                🌟 Chakra Intelligence –{" "}
                                <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                                    Seven Centers
                                </span>{" "}
                                Infinite Possibilities 🌟
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                                Every human being is like a seven-storied building—each floor powered by a chakra, a subtle center of energy and consciousness. When these seven centers are understood, activated, and balanced, life itself transforms.
                            </p>

                            {/* Program Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 text-center">
                                    <div className="text-3xl font-extrabold bg-gradient-to-r from-[#F0982E] to-[#d97706] bg-clip-text text-transparent mb-2">
                                        2 DAYS
                                    </div>
                                    <div className="text-sm font-medium text-gray-600">2 Hours Daily</div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 text-center">
                                    <div className="text-3xl font-extrabold bg-gradient-to-r from-[#F0982E] to-[#d97706] bg-clip-text text-transparent mb-2">
                                        ZOOM
                                    </div>
                                    <div className="text-sm font-medium text-gray-600">Online</div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 text-center">
                                    <div className="text-3xl font-extrabold bg-gradient-to-r from-[#F0982E] to-[#d97706] bg-clip-text text-transparent mb-2">
                                        FREE
                                    </div>
                                    <div className="text-sm font-medium text-gray-600">Certificate</div>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="flex justify-center sm:justify-start">
                                <a
                                    href="https://wa.me/917827468953?text=Hello%2C%20I%20would%20like%20to%20know%20more%20details%20about%20the%20Chakra%20Intelligence%20program."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-bold rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-lg text-center w-full sm:w-auto"
                                >
                                    JOIN THE FREE PROGRAM & GET CERTIFIED
                                </a>
                            </div>
                        </div>

                        {/* Right Side Image */}
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={program1 || "/placeholder.svg?height=600&width=500&query=chakra meditation seven energy centers colorful spiritual"}
                                    alt="Chakra Intelligence program - seven energy centers"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-full opacity-20 blur-xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-15 blur-xl"></div>
                        </div>

                    </div>
                </div>
            </section>


            {/* What You'll Learn Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                            <Target className="w-4 h-4 mr-2" />
                            Program Benefits
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            In This Program,{" "}
                            <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                                You Will
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Unlock the inner technology of success and peace—and rise through all seven stories of life with practical tools for chakra activation and balance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {programBenefits.map((benefit, index) => {
                            const IconComponent = benefit.icon
                            return (
                                <div
                                    key={index}
                                    className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-amber-100 hover:-translate-y-2"
                                >
                                    <div className="mb-6">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl shadow-md group-hover:scale-110 transition-transform">
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-amber-600 transition-colors">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Seven Chakras Section */}
            <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-white/80 backdrop-blur-sm rounded-full">
                            <Layers className="w-4 h-4 mr-2" />
                            The Seven Energy Centers
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Explore Your{" "}
                            <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                                Seven-Storied Building
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Each chakra is a unique center of energy and consciousness. Understanding and balancing these seven centers unlocks peace, well-being, abundance, and the power to achieve your goals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {sevenChakras.map((chakra, index) => {
                            const IconComponent = chakra.icon
                            return (
                                <div
                                    key={index}
                                    className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-white/50 hover:-translate-y-2 text-center"
                                >
                                    <div className="mb-4">
                                        <div
                                            className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${chakra.gradient} rounded-xl shadow-md group-hover:scale-110 transition-transform`}
                                        >
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold mb-3 group-hover:text-amber-600 transition-colors">{chakra.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{chakra.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Why Join Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                                <Star className="w-4 h-4 mr-2" />
                                Transform Your Life
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">
                                When Seven Centers Are Balanced –{" "}
                                <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                                    Life Transforms
                                </span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-amber-100">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">🧘 For Spiritual Seekers</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Deepen your spiritual practice by understanding the subtle energy centers that govern consciousness. Learn how to activate and balance each chakra for profound inner transformation.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-amber-100">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">🎯 For Success Seekers</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Discover how chakra intelligence fuels clarity, confidence, and achievement. Master the inner technology that successful people use to manifest their goals and dreams.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#F0982E]/10 to-[#d97706]/10 rounded-3xl p-8 border border-amber-200">
                            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                                🌈 Life Transforms When You Master
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                                        <span className="text-gray-700">Peace & Well-being – inner harmony and balance</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                                        <span className="text-gray-700">Abundance – flow of prosperity and opportunities</span>
                                    </li>
                                </ul>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                                        <span className="text-gray-700">Goal Achievement – power to manifest your dreams</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                                        <span className="text-gray-700">Clarity & Success – focused energy and direction</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Details */}
            <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-white/80 backdrop-blur-sm rounded-full">
                            <Calendar className="w-4 h-4 mr-2" />
                            Program Information
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Ready to{" "}
                            <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                                Unlock Your Centers?
                            </span>
                        </h2>

                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 mb-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Completely Free</h3>
                                    <p className="text-gray-600">No cost, no hidden fees</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Award className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Free Certificate</h3>
                                    <p className="text-gray-600">Official participation certificate</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Video className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Online via Zoom</h3>
                                    <p className="text-gray-600">Join from anywhere</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-lg text-gray-600 mb-8">
                                    ⚡ Seats are limited for each batch. Stay connected through this website, social media, or email for the next dates.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="https://wa.me/917827468953?text=Hello%2C%20I%20would%20like%20to%20know%20more%20details%20about%20the%20Chakra%20Intelligence%20program."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-bold rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center"
                                    >
                                        Register Now
                                    </a>

                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-xl font-semibold text-gray-800 mb-4">
                                ✨ Unlock the inner technology of success and peace—and rise through all seven stories of life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Common Questions
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Frequently Asked{" "}
                            <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                                Questions
                            </span>
                        </h2>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        {[
                            {
                                question: "Do I need prior knowledge of chakras to join?",
                                answer:
                                    "Not at all! This introductory program is designed for both beginners and those with some experience. We'll cover the essential foundations and functions of all seven chakras in an accessible way.",
                            },
                            {
                                question: "Is this program suitable for both spiritual seekers and success-oriented people?",
                                answer:
                                    "Yes! Chakra Intelligence is designed for both spiritual seekers wanting deeper understanding and anyone striving for happiness, success, and goal achievement. The practices work for both inner transformation and outer success.",
                            },
                            {
                                question: "What makes this different from other chakra courses?",
                                answer:
                                    "This program focuses on practical application—how chakra mastery fuels clarity, abundance, and success in real life. You'll learn simple practices that you can immediately apply for both spiritual growth and achieving your goals.",
                            },
                            {
                                question: "How do the online sessions work?",
                                answer:
                                    "The program runs for 2 days with 2-hour daily sessions via Zoom. Each session includes guided instruction, practical exercises, and opportunities for questions and interaction with other participants.",
                            },
                            {
                                question: "What will I receive upon completion?",
                                answer:
                                    "All participants who complete the 2-day program will receive a certificate of participation. You'll also gain practical tools and a roadmap for continuing your chakra practice independently.",
                            },
                        ].map((item, index) => (
                            <FAQItem key={index} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Layers className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Join Chakra Intelligence</h3>
                            <p className="text-gray-600 mb-6">
                                Stay connected through our website, social media, or email to get notified about the next program dates.
                            </p>
                            <div className="space-y-4">
                                <a
                                    href="mailto:info@chakraintelligence.com"
                                    className="block w-full py-3 px-6 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-semibold rounded-full hover:scale-105 transition-transform"
                                >
                                    Get Program Updates
                                </a>
                                <button
                                    onClick={closeModal}
                                    className="block w-full py-3 px-6 text-gray-600 font-semibold rounded-full hover:bg-gray-100 transition-all"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="mb-4 border-b border-gray-200 last:border-0">
            <button
                className="flex items-center justify-between w-full py-6 text-left group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#F0982E] transition-colors duration-300 pr-4">
                    {question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                    {isOpen ? (
                        <ChevronUp className="w-6 h-6 text-[#F0982E] transform transition-transform duration-300" />
                    ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-[#F0982E] transform transition-transform duration-300" />
                    )}
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}
            >
                <div className="text-gray-600 leading-relaxed">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    )
}

export default ChakraIntelligencePage