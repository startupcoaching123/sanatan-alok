"use client"
import { Clock, Users, Monitor, CheckCircle, Sparkles, Target, Heart, Zap, Crown } from "lucide-react"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"

import one from "../assets/program_one.jpg";
import two from "../assets/program_two.jpg";

function Programs() {
    const freePrograms = [
        {
            title: "Unlocking the Essence of Yoga",
            duration: "5 Days | 2 Hours/Day",
            mode: "Online",
            price: "Free",
            features: ["Authentic Yoga", "Myth Busting", "Yogic Paths", "Inner Peace"],
            gradient: "from-emerald-500 to-green-600",
            link: "/programs/essence-of-yoga",
        },
        {
            title: "Mantra Vidya: The Science of Sacred Sound",
            duration: "3 Days | 2 Hours/Day",
            mode: "Online",
            price: "Free",
            features: ["Sacred Sound", "Energy Flow", "Vibration Science", "Chakra Activation"],
            gradient: "from-blue-500 to-indigo-600",
            link: "/programs/mantra-vidya",
        },
        {
            title: "The Buddha Blueprint: Life Design for Sukh, Shanti & Samriddhi",
            duration: "3 Days | 2 Hours/Day",
            mode: "Online",
            price: "Free",
            features: ["Desire Control", "Mind Clarity", "Balanced Living", "Stress Release"],
            gradient: "from-purple-500 to-violet-600",
            link: "/programs/buddha-blueprint",
        },
        {
            title: "Chakra Intelligence: Decode Your Inner Energy Map",
            duration: "2 Days | 2 Hours/Day",
            mode: "Online",
            price: "Free",
            features: ["Chakra Science", "Block Removal", "Emotional Balance", "Career Growth"],
            gradient: "from-pink-500 to-rose-600",
            link: "/programs/chakra-intelligence",
        },
    ];


    const paidPrograms = [
        {
            title: "Advanced Yoga Mastery: Complete Transformation",
            duration: "5 Days | 2 Hours/Day",
            mode: "Online",
            price: "₹5,000",
            features: ["Advanced Asanas", "Pranayama Mastery", "Meditation Depths", "Spiritual Awakening"],
            gradient: "from-amber-500 to-orange-600",
        },
        {
            title: "Sacred Sound Healing: Professional Certification",
            duration: "3 Days | 2 Hours/Day",
            mode: "Online",
            price: "₹5,000",
            features: ["Professional Techniques", "Healing Frequencies", "Sound Therapy", "Certification"],
            gradient: "from-teal-500 to-cyan-600",
        },
        {
            title: "Buddha Wisdom: Advanced Life Mastery",
            duration: "3 Days | 2 Hours/Day",
            mode: "Online",
            price: "₹5,000",
            features: ["Advanced Mindfulness", "Life Mastery", "Wisdom Teachings", "Personal Guidance"],
            gradient: "from-indigo-500 to-purple-600",
        },
        {
            title: "Chakra Mastery: Complete Energy Transformation",
            duration: "2 Days | 2 Hours/Day",
            mode: "Online",
            price: "₹5,000",
            features: ["Energy Mastery", "Chakra Balancing", "Spiritual Powers", "Life Transformation"],
            gradient: "from-red-500 to-pink-600",
        },
    ]

    const ProgramCard = ({ program, isPaid = false }) => (
        <div className="group flex flex-col h-full bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:-translate-y-3">
            {/* Program Content */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#F0982E] transition-colors leading-tight">
                    {program.title}
                </h3>

                {/* Duration and Mode */}
                <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-amber-500" />
                        {program.duration}
                    </div>
                    <div className="flex items-center">
                        <Monitor className="w-4 h-4 mr-1 text-amber-500" />
                        {program.mode}
                    </div>
                </div>

                {/* Price */}
                <div className="text-center py-4">
                    <div className={`text-4xl font-bold ${isPaid ? "text-[#F0982E]" : "text-emerald-600"}`}>
                        {program.price}
                    </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                    {program.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 mr-3 text-amber-500 flex-shrink-0" />
                            {feature}
                        </div>
                    ))}
                </div>
            </div>

            {/* Enroll Button pinned to bottom */}
            <div className="mt-auto pt-6">
                <Link
                    to={program.link}
                    className="w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:scale-105 shadow-lg text-center block"
                >
                    Know More
                </Link>

            </div>
        </div>
    );

    return (
        <div className="min-h-screen font-poppins bg-gradient-to-b from-orange-50 via-white to-amber-50">
            {/* seo */}
            <Helmet>
                <title>Programs at Sanatan Alok | Spiritual Growth and Transformation</title>
                <meta
                    name="description"
                    content="Explore Sanatan Alok's programs, including meditation, yoga, and sacred rituals, designed to guide you toward inner peace, spiritual awakening, and holistic transformation."
                />
                <meta
                    name="keywords"
                    content="Sanatan Alok programs, spiritual growth, meditation, yoga, sacred rituals, ancient wisdom, holistic transformation, inner peace"
                />
                <link rel="canonical" href="https://sanatanalok.com/programs" />
            </Helmet>
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-orange-300 to-amber-400 rounded-full blur-3xl"></div>
                </div>

                <div className="relative container mx-auto px-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Transformative Learning
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
                        Our{" "}
                        <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                            Programs
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                        Explore transformative programs designed to nurture your mind, body, and spirit. Each offering helps you
                        unlock inner potential, create balance, and live with greater clarity and purpose.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md">
                            <div className="text-2xl font-bold text-emerald-600">Free</div>
                            <div className="text-sm text-gray-600">Open Access</div>
                        </div>
                        {/* <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md">
                            <div className="text-2xl font-bold text-[#F0982E]">Premium</div>
                            <div className="text-sm text-gray-600">Advanced Learning</div>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Inspirational Image Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="relative">
                            <img
                                src={one}
                                alt="Peaceful meditation session"
                                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Transform Your Life Through{" "}
                                <span className="bg-gradient-to-r from-[#F0982E] to-[#d97706] bg-clip-text text-transparent">
                                    Ancient Wisdom
                                </span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our carefully curated programs blend traditional spiritual practices with modern wellness techniques.
                                Whether you're beginning your journey or seeking to deepen your practice, we have the perfect program
                                for you.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center text-sm text-gray-600">
                                    <CheckCircle className="w-5 h-5 mr-2 text-emerald-500" />
                                    Expert-led sessions
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <CheckCircle className="w-5 h-5 mr-2 text-emerald-500" />
                                    Flexible online format
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <CheckCircle className="w-5 h-5 mr-2 text-emerald-500" />
                                    Community support
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Free Programs Section */}
            <section className="py-24 bg-gradient-to-br from-emerald-50 to-green-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-emerald-600 bg-emerald-100 rounded-full">
                            <Heart className="w-4 h-4 mr-2" />
                            Free Access
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Our Free{" "}
                            <span className="bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent">
                                Programs
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Begin your spiritual journey with our complimentary programs designed to introduce you to the fundamentals
                            of ancient wisdom and modern wellness practices.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {freePrograms.map((program, index) => (
                            <ProgramCard key={index} program={program} isPaid={false} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Second Inspirational Image Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        {/* Text Section */}
                        <div className="space-y-6 order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Unlock Your Full{" "}
                                <span className="bg-gradient-to-r from-[#F0982E] to-[#d97706] bg-clip-text text-transparent">
                                    Potential
                                </span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                All our programs are currently{" "}
                                <span className="font-semibold text-[#F0982E]">completely free</span>
                                &nbsp; to join. Dive deep into ancient wisdom traditions with structured guidance,
                                transformative practices, and a supportive community — without any cost.
                            </p>

                            {/* Free Access Highlights */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-emerald-50 rounded-2xl">
                                    <div className="text-2xl font-bold text-emerald-600">Free</div>
                                    <div className="text-sm text-gray-600">Lifetime Access</div>
                                </div>
                                <div className="text-center p-4 bg-emerald-50 rounded-2xl">
                                    <div className="text-2xl font-bold text-emerald-600">100%</div>
                                    <div className="text-sm text-gray-600">No Fees Required</div>
                                </div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="relative order-1 lg:order-2">
                            <img
                                src={two}
                                alt="Free Spiritual Programs"
                                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Paid Programs Section */}
            {/* <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                            <Crown className="w-4 h-4 mr-2" />
                            Premium Access
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Premium{" "}
                            <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                                Programs
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Deepen your practice with our comprehensive premium programs featuring advanced techniques, personalized
                            guidance, and professional certifications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {paidPrograms.map((program, index) => (
                            <ProgramCard key={index} program={program} isPaid={true} />
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Features Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Why Choose Our{" "}
                            <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                                Programs?
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-center p-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Expert Guidance</h3>
                            <p className="text-gray-600">
                                Learn from experienced spiritual teachers with decades of wisdom and practice.
                            </p>
                        </div>

                        <div className="text-center p-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Community Support</h3>
                            <p className="text-gray-600">
                                Join a supportive community of like-minded individuals on their spiritual journey.
                            </p>
                        </div>

                        <div className="text-center p-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Practical Application</h3>
                            <p className="text-gray-600">Learn techniques you can immediately apply to transform your daily life.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Ready to Begin Your{" "}
                            <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                                Transformation?
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-12">
                            Choose from our free programs to get started, or dive deeper with our premium offerings. Your spiritual
                            journey awaits.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/join-program">
                                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
                                    Start with Free Programs
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Programs
