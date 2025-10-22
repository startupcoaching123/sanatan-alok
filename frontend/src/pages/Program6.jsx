import { useState } from "react"
import { Sparkles, Calendar, Video, Users, Brain, Volume2, Target, Compass, BookOpen, ChevronDown, ChevronUp, Mail, MessageCircle } from 'lucide-react'
import { useNavigate } from "react-router-dom"

import masterclassHero from "../assets/pressure-to-presence.jpg"
import anandIshaan from "../assets/anand-ishaan.jpg"
import pressureToPresence from "../assets/pressure-to-presence.jpg"
import innerStillness from "../assets/inner-stillness.jpg"
import mantraMind from "../assets/mantra-mind.jpg"
import innerLeadership from "../assets/inner-leadership.jpg"
import innerCompass from "../assets/inner-compass.jpg"
import pathsToAwakening from "../assets/paths-to-awakening.jpg"

function ExperimentalMasterclassesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProgram, setSelectedProgram] = useState(null)
    const navigate = useNavigate()

    const openModal = (program) => {
        setSelectedProgram(program)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedProgram(null)
    }

    const masterclasses = [
        {
            id: 1,
            title: "From Pressure to Presence",
            subtitle: "The Inner Science of Stress Mastery and Emotional Equilibrium",
            icon: Brain,
            gradient: "from-orange-500 to-amber-600",
            image: pressureToPresence,
            description: "Modern life constantly pulls us into chaos — deadlines, screens, and the endless chase for more. This transformative session reveals the deeper mechanics of stress and emotional imbalance.",
            highlights: [
                "Understand energy imbalances and thought patterns",
                "Learn experimental techniques of awareness and breath",
                "Shift from reaction to conscious response",
                "Guided process to dissolve anxiety and rebalance energy"
            ],
            email: "light.sanatanaalok@gmail.com"
        },
        {
            id: 2,
            title: "The Science of Inner Stillness",
            subtitle: "Awareness, Focus and the Art of Conscious Leadership",
            icon: Target,
            gradient: "from-emerald-500 to-green-600",
            image: innerStillness,
            description: "Stillness is not the absence of motion — it is the state of perfect alignment between awareness and action. This program explores how inner stillness amplifies clarity and emotional intelligence.",
            highlights: [
                "Rewire attention and reduce cognitive fatigue",
                "Unlock intuitive insight through mindful observation",
                "Experience the 'silent center' for effortless excellence",
                "Designed for leaders and professionals"
            ],
            email: "light.sanatanaalok@gmail.com"
        },
        {
            id: 3,
            title: "Mantra, Mind & Mastery",
            subtitle: "Harnessing Sacred Sound to Unlock Mental Power and Inner Transformation",
            icon: Volume2,
            gradient: "from-purple-500 to-indigo-600",
            image: mantraMind,
            description: "Mantra is more than repetition — it is the ancient technology of resonance. Learn how sound vibrations reorganize thought patterns and expand consciousness.",
            highlights: [
                "Combine ancient mantra science with modern understanding",
                "Enhance focus, memory, and emotional balance",
                "Live mantra-meditation experience",
                "Shift from scattered mind to luminous awareness"
            ],
            email: "light.sanatanaalok@gmail.com"
        },
        {
            id: 4,
            title: "Inner Leadership",
            subtitle: "Energy Intelligence for High Performance and Purposeful Living",
            icon: Users,
            gradient: "from-blue-500 to-cyan-600",
            image: innerLeadership,
            description: "True leadership begins within. Discover how managing energy determines focus, creativity, and resilience through ancient principles of pranic balance.",
            highlights: [
                "Identify energy leaks and thought loops",
                "Integrate ancient principles with modern productivity",
                "Rediscover purpose and inner alignment",
                "Lead with calm precision, compassion, and vitality"
            ],
            email: "light.sanatanaalok@gmail.com"
        },
        {
            id: 5,
            title: "The Inner Compass",
            subtitle: "Discovering the Meditative Path to Pure Consciousness — Your True Inner Guidance System",
            icon: Compass,
            gradient: "from-rose-500 to-pink-600",
            image: innerCompass,
            description: "Every human being carries an inner compass — a subtle intelligence that points toward truth, clarity, and peace. This session unveils meditation as the key to accessing that guidance.",
            highlights: [
                "Access your inner guidance system",
                "Understand stages of inner absorption",
                "Realign with self-luminous source",
                "Meditation as return to true being"
            ],
            email: "connect@sanatanalok.com"
        },
        {
            id: 6,
            title: "Paths to Awakening",
            subtitle: "Understanding the Many Roads of Spiritual Practice and Finding Your Right One",
            icon: BookOpen,
            gradient: "from-amber-500 to-orange-600",
            image: pathsToAwakening,
            description: "In a world overflowing with teachings, this session brings clarity to your spiritual journey. Explore Yoga, Tantra, Mantra, and Meditation to find your authentic path.",
            highlights: [
                "Understand different spiritual paths",
                "Explore Yoga, Tantra, Mantra, and Meditation",
                "Find what suits your temperament and lifestyle",
                "Walk with confidence and authenticity"
            ],
            email: "connect@sanatanalok.com"
        }
    ]

    const whatYouGain = [
        {
            title: "Ancient Wisdom, Modern Application",
            description: "Blend timeless spiritual principles with contemporary life challenges for practical transformation.",
            icon: Sparkles,
        },
        {
            title: "Experimental Learning",
            description: "Move beyond theory into direct experience through guided practices and meditations.",
            icon: Brain,
        },
        {
            title: "Personal Guidance",
            description: "Learn directly from Anand Ishaan, spiritual mentor with deep experimental knowledge.",
            icon: Users,
        },
        {
            title: "Community Support",
            description: "Join like-minded seekers in Delhi NCR and beyond for collective growth.",
            icon: MessageCircle,
        },
    ]

    return (
        <div className="min-h-screen font-poppins bg-gradient-to-b from-amber-50 via-white to-orange-50">
            {/* Hero Section */}
            {/* <CHANGE> Added pt-32 for top spacing and pb-16 for bottom padding */}
            <section className="relative min-h-screen flex items-start justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 pt-16 pb-8">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
                        {/* Left Content */}
                        <div className="space-y-8 mt-8">
                            <div className="inline-flex items-center px-6 py-3 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                                <Sparkles className="w-4 h-4 mr-2" />
                                Guided by Anand Ishaan
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                Sanatan Alok{" "}
                                <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                                    Experimental Masterclasses
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                                Where Ancient Wisdom Meets Modern Life. Transformative 2-hour sessions designed to harmonize
                                the modern mind with timeless spiritual wisdom. Each masterclass blends deep insight, guided
                                experience, and practical tools for daily life.
                            </p>

                            {/* Key Features */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-100">
                                    <div className="text-2xl font-extrabold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-2">
                                        2 Hours
                                    </div>
                                    <div className="text-sm font-medium text-gray-600">Focused Transformative Sessions</div>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-100">
                                    <div className="text-2xl font-extrabold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-2">
                                        Live & Interactive
                                    </div>
                                    <div className="text-sm font-medium text-gray-600">In-person across Delhi NCR</div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                                <button
                                    onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-lg text-center"
                                >
                                    Join Now
                                </button>
                                <button
                                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 bg-white text-amber-600 font-semibold rounded-full border border-amber-200 shadow-sm hover:bg-amber-50 transition-all text-lg text-center"
                                >
                                    Meet Anand Ishaan
                                </button>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={masterclassHero || "/placeholder.svg"}
                                    alt="Sanatan Alok Experimental Masterclasses"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            {/* Anand Ishaan Profile Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-amber-100 max-w-xs">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-200">
                                        <img
                                            src={anandIshaan || "/placeholder.svg"}
                                            alt="Anand Ishaan - Spiritual Mentor"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Anand Ishaan</h3>
                                        <p className="text-sm text-amber-600">Spiritual Mentor</p>
                                        <p className="text-xs text-gray-500 mt-1">Guiding your transformation</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-15 blur-xl"></div>
                        </div>
                    </div>
                </div>
            </section>


            {/* What You'll Gain */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Transformative Experience
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            What You'll{" "}
                            <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                                Gain
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Each masterclass is carefully designed to provide immediate value and lasting transformation through direct experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {whatYouGain.map((item, idx) => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={idx}
                                    className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-amber-100 hover:-translate-y-2 text-center"
                                >
                                    <div className="mb-6">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-md group-hover:scale-110 transition-transform">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 group-hover:text-amber-600 transition-colors">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Masterclasses Grid */}
            <section id="programs" className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-white/80 backdrop-blur-sm rounded-full">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Our Masterclasses
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Transformative{" "}
                            <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                                2-Hour Sessions
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Introductory Sessions & Community Offerings — Open to individuals, corporates, and communities across Delhi NCR
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {masterclasses.map((program) => {
                            const Icon = program.icon
                            return (
                                <div
                                    key={program.id}
                                    className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-100 hover:-translate-y-2 flex flex-col"
                                >
                                    {/* <CHANGE> Changed image height to h-40 for landscape aspect ratio */}
                                    <div className="relative h-72 overflow-hidden">
                                        <img
                                            src={program.image || "/placeholder.svg"}
                                            alt={program.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                        <div className="absolute top-4 left-4">
                                            <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${program.gradient} rounded-xl shadow-lg`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                    </div>


                                    {/* <CHANGE> Added flex-1 to content wrapper and flex flex-col to button container for consistent card heights */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600 transition-colors">
                                            {program.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4 font-medium">{program.subtitle}</p>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{program.description}</p>

                                        {/* <CHANGE> Changed button text to "Register Now" and added navigation to /join-program */}
                                        <button
                                            onClick={() => navigate('/join-program')}
                                            className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 shadow-md"
                                        >
                                            Register Now
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* About Anand Ishaan */}
            <section id="about" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        {/* Image */}
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={anandIshaan || "/placeholder.svg"}
                                    alt="Anand Ishaan - Spiritual Mentor"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-15 blur-xl"></div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                                <Users className="w-4 h-4 mr-2" />
                                Your Guide
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold">
                                Meet{" "}
                                <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                                    Anand Ishaan
                                </span>
                            </h2>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Spiritual mentor and guide of Sanatan Alok, Anand Ishaan brings deep experimental knowledge
                                and compassionate guidance to each masterclass. His approach blends traditional wisdom with
                                contemporary understanding, making ancient practices accessible and relevant for modern seekers.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
                                    <h4 className="font-bold text-amber-700 mb-2">Deep Experimental Knowledge</h4>
                                    <p className="text-sm text-gray-600">Years of practice and realization</p>
                                </div>
                                <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
                                    <h4 className="font-bold text-amber-700 mb-2">Compassionate Guidance</h4>
                                    <p className="text-sm text-gray-600">Personal attention to each participant</p>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed">
                                Under Anand Ishaan's guidance, thousands have discovered deeper meaning, inner peace, and
                                practical wisdom for navigating life's challenges with grace and awareness.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-white/80 backdrop-blur-sm rounded-full">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Common Questions
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Frequently Asked{" "}
                            <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-amber-700 bg-clip-text text-transparent">
                                Questions
                            </span>
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {[
                            {
                                question: "Who are these masterclasses for?",
                                answer: "These sessions are designed for individuals, corporates, and communities across Delhi NCR. They are suitable for both beginners and experienced practitioners seeking deeper understanding."
                            },
                            {
                                question: "How long is each session?",
                                answer: "Each masterclass is a focused 2-hour transformative experience, blending theory, guided practice, and interactive discussion."
                            },
                            {
                                question: "Are these sessions conducted online or in-person?",
                                answer: "These are primarily conducted in-person across Delhi NCR. For corporate and community bookings, arrangements can be made based on requirements."
                            },
                            {
                                question: "Do I need any prior experience?",
                                answer: "No prior experience is necessary. Each session is designed to be accessible while providing depth for those with existing practice."
                            },
                            {
                                question: "How do I register for a session?",
                                answer: "You can express interest through the contact information provided for each masterclass. Our program executive will contact you with details and next steps."
                            }
                        ].map((item, idx) => (
                            <FAQItem key={idx} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Begin Your Transformative Journey?
                    </h2>
                    <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
                        Join Anand Ishaan in these experimental masterclasses and discover the harmony between ancient wisdom and modern life.
                    </p>
                    {/* <CHANGE> Changed button text to "Join Now" and added navigation to /join-program */}
                    <button
                        onClick={() => navigate('/join-program')}
                        className="px-8 py-4 bg-white text-amber-600 font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
                    >
                        Join Now
                    </button>
                </div>
            </section>

            {/* Program Detail Modal */}
            {isModalOpen && selectedProgram && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="relative">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={selectedProgram.image || "/placeholder.svg"}
                                    alt={selectedProgram.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center mb-4">
                                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${selectedProgram.gradient} rounded-xl shadow-md mr-4`}>
                                        <selectedProgram.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">{selectedProgram.title}</h3>
                                        <p className="text-amber-600 font-medium">{selectedProgram.subtitle}</p>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">{selectedProgram.description}</p>

                                <div className="mb-6">
                                    <h4 className="font-bold text-gray-800 mb-3">What You'll Experience:</h4>
                                    <ul className="space-y-2">
                                        {selectedProgram.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                                    <h4 className="font-bold text-amber-700 mb-2">How to Register:</h4>
                                    <p className="text-gray-600 mb-4">
                                        To host or attend this session, please email us or message on WhatsApp. Our program executive will call back to assist you.
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Mail className="w-5 h-5 text-amber-600" />
                                            <span className="text-amber-600 font-medium">{selectedProgram.email}</span>
                                        </div>
                                        <button
                                            onClick={() => window.location.href = `mailto:${selectedProgram.email}`}
                                            className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:scale-105 transition-transform"
                                        >
                                            Send Email
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="mb-4 border-b border-amber-200 last:border-0">
            <button
                className="flex items-center justify-between w-full py-6 text-left group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300 pr-4">
                    {question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                    {isOpen ? (
                        <ChevronUp className="w-6 h-6 text-amber-600 transform transition-transform duration-300" />
                    ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-amber-600 transform transition-transform duration-300" />
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

export default ExperimentalMasterclassesPage