"use client"

import { useState } from "react"
import { Sun, Heart, Focus as Lotus, Sparkles, Star, ChevronDown, ChevronUp, Users, CheckCircle, Monitor, Calendar, Video, Award, BookOpen, Zap, Globe, MessageCircle, Target, Brain, Compass, TreePine, Lightbulb, TrendingUp, Shield } from 'lucide-react'
import { Helmet } from "react-helmet-async"

// You'll need to add your Buddha Blueprint program image
import program1 from "../assets/buddha-blueprint.jpg";

function BuddhaBlueprintPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const wisdomAspects = [
        {
            title: "Right Understanding",
            description: "Clear perspective on life's challenges and opportunities",
            icon: Lightbulb,
            gradient: "from-blue-500 to-indigo-600",
        },
        {
            title: "Right Intention",
            description: "Aligning decisions with clarity and authentic values",
            icon: Target,
            gradient: "from-purple-500 to-violet-600",
        },
        {
            title: "Right Speech",
            description: "Communication that builds trust and meaningful connections",
            icon: MessageCircle,
            gradient: "from-rose-500 to-pink-600",
        },
        {
            title: "Right Action",
            description: "Ethical choices that create positive outcomes",
            icon: CheckCircle,
            gradient: "from-green-500 to-emerald-600",
        },
        {
            title: "Right Livelihood",
            description: "Work and career aligned with purpose and integrity",
            icon: TrendingUp,
            gradient: "from-[#F0982E] to-[#d97706]",
        },
        {
            title: "Right Mindfulness",
            description: "Present-moment awareness for better decision making",
            icon: Brain,
            gradient: "from-orange-500 to-red-600",
        },
    ]

    const programBenefits = [
        {
            title: "Modern Buddhist Wisdom",
            description: "Fresh perspective on how Buddha's insights apply to today's challenges",
            icon: Compass,
        },
        {
            title: "Stress & Change Navigation",
            description: "Roadmap for navigating stress, uncertainty, and rapid change",
            icon: Shield,
        },
        {
            title: "Decision-Making Clarity",
            description: "Toolkit for aligning decisions with clarity and authentic values",
            icon: Target,
        },
        {
            title: "Wellbeing & Happiness",
            description: "Practical ways to cultivate a joyful, balanced life",
            icon: Sun,
        },
        {
            title: "Inner Peace & Resilience",
            description: "Develop calm and resilience in our busy, connected world",
            icon: Lotus,
        },
        {
            title: "Abundance & Success",
            description: "Growth strategies for personal and professional prosperity",
            icon: TrendingUp,
        },
    ]

    return (
        <div className="min-h-screen font-poppins bg-gradient-to-b from-orange-50 via-white to-amber-50">
            {/* seo */}
            <Helmet>
                <title>The Buddha Blueprint | Sanatan Alok Spiritual Program</title>
                <meta
                    name="description"
                    content="Discover The Buddha Blueprint at Sanatan Alok, a program rooted in Buddhist wisdom, guiding you toward spiritual awakening, inner peace, and holistic transformation through mindful practices."
                />
                <meta
                    name="keywords"
                    content="Sanatan Alok Buddha Blueprint, Buddhist wisdom, spiritual awakening, mindfulness, meditation, inner peace, holistic transformation, ancient wisdom"
                />
                <link rel="canonical" href="https://sanatanalok.com/buddha-blueprint" />
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
                                3-Day Free Program with Certificate
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                🌟 The Buddha Blueprint –{" "}
                                <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                                    Timeless Wisdom
                                </span>{" "}
                                for Today 🌟
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                                The Buddha Blueprint is a 3-Day Free Online Program that reinterprets the Noble Eightfold Path and Buddhist wisdom for the modern world. It is not a religious program—it is a contemporary life-management roadmap open to everyone.
                            </p>

                            {/* Program Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 text-center">
                                    <div className="text-3xl font-extrabold bg-gradient-to-r from-[#F0982E] to-[#d97706] bg-clip-text text-transparent mb-2">
                                        3 DAYS
                                    </div>
                                    <div className="text-sm font-medium text-gray-600">2 Hours Daily</div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 text-center">
                                    <div className="text-3xl font-extrabold bg-gradient-to-r from-[#F0982E] to-[#d97706] bg-clip-text text-transparent mb-2">
                                        LIVE
                                    </div>
                                    <div className="text-sm font-medium text-gray-600">Interactive</div>
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
                                    href="https://wa.me/917827468953?text=Hello%2C%20I%20would%20like%20to%20know%20more%20details%20about%20The%20Buddha%20Blueprint%20program."
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
                                    src={program1 || "/placeholder.svg?height=600&width=500&query=Buddha meditation wisdom modern life"}
                                    alt="The Buddha Blueprint program - modern Buddhist wisdom"
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

            {/* What You'll Gain Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                            <TreePine className="w-4 h-4 mr-2" />
                            What You'll Gain
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Through Guided Sessions,{" "}
                            <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                                You'll Leave With
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Practical tools, live Q&A sessions, and a comprehensive toolkit for applying Buddhist wisdom to modern challenges and opportunities.
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

            {/* Noble Eightfold Path Section */}
            <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-white/80 backdrop-blur-sm rounded-full">
                            <Compass className="w-4 h-4 mr-2" />
                            The Noble Eightfold Path
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Modern Applications of{" "}
                            <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                                Ancient Wisdom
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Discover how the Noble Eightfold Path provides a practical framework for navigating today's challenges in business, relationships, and personal growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {wisdomAspects.map((aspect, index) => {
                            const IconComponent = aspect.icon
                            return (
                                <div
                                    key={index}
                                    className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-white/50 hover:-translate-y-2 text-center"
                                >
                                    <div className="mb-4">
                                        <div
                                            className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${aspect.gradient} rounded-xl shadow-md group-hover:scale-110 transition-transform`}
                                        >
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold mb-3 group-hover:text-amber-600 transition-colors">{aspect.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{aspect.description}</p>
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
                                Universal & Practical
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">
                                Discover the Path –{" "}
                                <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                                    Live the Blueprint
                                </span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-amber-100">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">🏢 For Professionals</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Apply Buddhist principles in boardrooms and business decisions. Learn how ancient wisdom can enhance leadership, communication, and strategic thinking in modern workplaces.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-amber-100">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">🌱 For Personal Growth</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Whether you seek peace, prosperity, or success, this program equips you with clarity and practical tools to thrive in all areas of life.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#F0982E]/10 to-[#d97706]/10 rounded-3xl p-8 border border-amber-200">
                            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                                🎯 Practical Ways to Cultivate
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                                        <span className="text-gray-700">Wellbeing & Happiness – a joyful, balanced life</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                                        <span className="text-gray-700">Inner Peace – calm and resilience in a busy world</span>
                                    </li>
                                </ul>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                                        <span className="text-gray-700">Abundance & Prosperity – personal and professional growth</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                                        <span className="text-gray-700">Success – achieving your goals with confidence</span>
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
                            Program Highlights
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Ready to{" "}
                            <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                                Begin Your Journey?
                            </span>
                        </h2>

                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 mb-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Completely Free</h3>
                                    <p className="text-gray-600">Free online via Zoom</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Award className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Free Certification</h3>
                                    <p className="text-gray-600">For all participants</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Interactive Sessions</h3>
                                    <p className="text-gray-600">All questions answered</p>
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-lg text-gray-600 mb-8">
                                    🔔 This program is conducted regularly. Each batch brings fresh insights and community discussions. To know upcoming dates, visit our website, follow us on social media, or write to us by email.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href="https://wa.me/917827468953?text=Hello%2C%20I%20would%20like%20to%20know%20more%20details%20about%20The%20Buddha%20Blueprint%20program."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-bold rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center"
                                    >
                                        JOIN THE FREE PROGRAM & GET CERTIFIED
                                    </a>

                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-xl font-semibold text-gray-800 mb-4">
                                🌟 Re-engineer your life with timeless wisdom applied to modern challenges.
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
                                question: "Is this a religious program?",
                                answer:
                                    "No, The Buddha Blueprint is not a religious program. It's a contemporary life-management roadmap that reinterprets Buddhist wisdom for modern applications. It's designed to be universal, non-sectarian, and practical for people of all backgrounds.",
                            },
                            {
                                question: "Do I need prior knowledge of Buddhism to join?",
                                answer:
                                    "Not at all! This program is designed for both professionals and seekers of growth, regardless of their background with Buddhist teachings. We present the concepts in a modern, accessible way.",
                            },
                            {
                                question: "How is this different from other self-help programs?",
                                answer:
                                    "The Buddha Blueprint is based on 2,500-year-old tested principles that have helped millions find peace and success. We reinterpret these timeless teachings specifically for today's challenges in business, relationships, and personal growth.",
                            },
                            {
                                question: "What makes the sessions interactive?",
                                answer:
                                    "Each 2-hour daily session includes guided discussions, practical exercises, live Q&A where all questions are answered, and community interaction with fellow participants from diverse backgrounds.",
                            },
                            {
                                question: "How do I stay updated about upcoming batches?",
                                answer:
                                    "You can visit our website frequently, follow us on social media, or write to us by email. We conduct this program regularly, and each batch brings fresh insights and new community discussions.",
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
                                <Compass className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Join The Buddha Blueprint</h3>
                            <p className="text-gray-600 mb-6">
                                Stay connected through our website, social media, or email to get notified about the next program dates.
                            </p>
                            <div className="space-y-4">
                                <a
                                    href="mailto:info@buddhablueprintprogram.com"
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

export default BuddhaBlueprintPage