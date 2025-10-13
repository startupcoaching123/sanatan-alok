"use client"

import { useState } from "react"
import {
  Sparkles,
  Calendar,
  Video,
  Award,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Layers,
  Banknote,
  Wheat,
  Crown,
  Baby,
  Shield,
  Trophy,
  BookOpen,
  GraduationCap,
} from "lucide-react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import program5 from "../assets/program5.jpg";


function AshtalaxmiSadhanaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const eightLakshmi = [
    {
      title: "Adi Lakshmi",
      description: "Primordial support and inner steadiness; the ground of true abundance.",
      icon: Shield,
      gradient: "from-rose-500 to-rose-600",
    },
    {
      title: "Dhana Lakshmi",
      description: "Wealth consciousness, generosity, and responsible stewardship.",
      icon: Banknote,
      gradient: "from-amber-500 to-amber-600",
    },
    {
      title: "Dhanya Lakshmi",
      description: "Nourishment, vitality, and sustainable habits that strengthen life.",
      icon: Wheat,
      gradient: "from-lime-500 to-lime-600",
    },
    {
      title: "Gaja Lakshmi",
      description: "Dignity, presence, and grace under pressure; power without force.",
      icon: Crown,
      gradient: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Santana Lakshmi",
      description: "Creative continuation—projects, relationships, and legacy.",
      icon: Baby,
      gradient: "from-sky-500 to-sky-600",
    },
    {
      title: "Veera (Dhairya) Lakshmi",
      description: "Courage, resilience, and disciplined action aligned with purpose.",
      icon: Shield,
      gradient: "from-orange-500 to-orange-600",
    },
    {
      title: "Vijaya Lakshmi",
      description: "Victory through clarity, focus, and consistent execution.",
      icon: Trophy,
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Vidya Lakshmi",
      description: "Knowledge, insight, and learning that inform wise leadership.",
      icon: BookOpen,
      gradient: "from-indigo-500 to-indigo-600",
    },
  ]

  const whatYouGain = [
    {
      title: "Ashtalaxmi Essentials",
      description: "A practical understanding of Ashtalaxmi and her eight dimensions of prosperity.",
      icon: Layers,
    },
    {
      title: "Focus–Peace–Performance",
      description: "Tools to harmonize attention, calm, and impact in real work and life.",
      icon: Shield,
    },
    {
      title: "Guided Evolution",
      description: "Direction for continued personal and professional growth after the session.",
      icon: GraduationCap,
    },
  ]

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-b from-orange-50 via-white to-amber-50">
      {/* SEO */}
      <Helmet>
        <title>🌸 Ashtalaxmi Sadhana | Free 2-Hour Live Program (Zoom)</title>
        <meta
          name="description"
          content="Free 2-hour live Zoom program by Sanatan Alok to awaken the eight energies of inner and outer abundance—Ashtalaxmi. Mantra-led meditations, reflection, and guided insight."
        />
        <link rel="canonical" href="https://example.com/ashtalaxmi-sadhana" />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 pt-10 md:pt-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                <Sparkles className="w-4 h-4 mr-2" />
                Free 2-Hour Online Program on Zoom
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">🌸 ASHTALAXMI SADHANA 🌸</h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Have you ever felt that real success is more than achievement—it's alignment? That the deeper you
                connect within, the clearer your path in the world becomes? Ashtalaxmi Sadhana is a focused, two-hour
                live experience designed to awaken the eight energies of inner and outer abundance. Through mantra-based
                meditations, reflection, and guided insight, you'll learn how these timeless principles translate into
                clarity, resilience, confidence, and authentic leadership in today's fast-paced world. This isn't just a
                spiritual session—it's a recalibration of how you lead, work, and live.
              </p>

              {/* Program Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-[#F0982E] to-[#d97706] bg-clip-text text-transparent mb-2">
                    18 OCT 2025
                  </div>
                  <div className="text-sm font-medium text-gray-600">8:00 PM IST</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-[#F0982E] to-[#d97706] bg-clip-text text-transparent mb-2">
                    ZOOM
                  </div>
                  <div className="text-sm font-medium text-gray-600">Live Online</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-[#F0982E] to-[#d97706] bg-clip-text text-transparent mb-2">
                    FREE
                  </div>
                  <div className="text-sm font-medium text-gray-600">Hosted by Sanatan Alok</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <Link
                  to="/join-program"
                  className="px-8 py-4 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-bold rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-lg text-center w-full sm:w-auto"
                >
                  Register Now — Realign with Inner Abundance
                </Link>
                <button
                  onClick={openModal}
                  className="px-8 py-4 bg-white text-[#b45309] font-semibold rounded-full border border-amber-200 shadow-sm hover:bg-amber-50 transition-all text-lg w-full sm:w-auto"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={
                    program5
                  }
                  alt="Ashtalaxmi Sadhana - eight energies of abundance"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-15 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Gain */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
              <Layers className="w-4 h-4 mr-2" />
              What You'll Gain
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Realign Your{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Mind, Purpose, and Energy
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A focused, practical immersion into the eight dimensions of prosperity—connecting inner clarity with outer
              action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whatYouGain.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-amber-100 hover:-translate-y-2"
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl shadow-md group-hover:scale-110 transition-transform">
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

      {/* Eight Energies */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-white/80 backdrop-blur-sm rounded-full">
              <Layers className="w-4 h-4 mr-2" />
              The Eight Energies of Prosperity
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Awaken{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Ashtalaxmi
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ashtalaxmi is the integrated intelligence of abundance—support, wealth, nourishment, grace, creativity,
              courage, victory, and wisdom—expressed as your daily clarity and leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {eightLakshmi.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-white/50 hover:-translate-y-2 text-center"
                >
                  <div className="mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl shadow-md group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-amber-600 transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
              <Calendar className="w-4 h-4 mr-2" />
              Program Information
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Free Participation |{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Live on Zoom
              </span>
            </h2>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-100 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">18 Oct 2025</h3>
                  <p className="text-gray-600">8:00 PM IST</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Live on Zoom</h3>
                  <p className="text-gray-600">Join from anywhere</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Free to Attend</h3>
                  <p className="text-gray-600">Certificate eligibility as announced</p>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-8">
                Register now to realign your mind, purpose, and energy with the abundance within.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/join-program"
                  className="px-8 py-4 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-bold rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-lg text-center w-full sm:w-auto"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-white/80 backdrop-blur-sm rounded-full">
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
                question: "Do I need prior meditation or mantra experience?",
                answer:
                  "No. This session is beginner-friendly while still valuable for experienced practitioners. Practices are guided and practical.",
              },
              {
                question: "What exactly is Ashtalaxmi?",
                answer:
                  "Ashtalaxmi represents eight dimensions of prosperity. In the session, we translate these timeless principles into modern clarity, resilience, and leadership.",
              },
              {
                question: "Is the program really free?",
                answer:
                  "Yes, it’s a free 2-hour live program on Zoom. Register to receive reminders and access details.",
              },
              {
                question: "Will there be recordings?",
                answer:
                  "Recording availability may be announced during the session. We encourage attending live for best results.",
              },
              {
                question: "Who is hosting the session?",
                answer: "The program is hosted by Sanatan Alok.",
              },
            ].map((item, idx) => (
              <FAQItem key={idx} question={item.question} answer={item.answer} />
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
              <h3 className="text-2xl font-bold mb-4">About Ashtalaxmi Sadhana</h3>
              <p className="text-gray-600 mb-6">
                A focused, two-hour live experience to awaken eight energies of prosperity through mantra-based
                meditations, reflection, and guided insight.
              </p>
              <div className="space-y-4">
                <Link
                  to="/join-program"
                  className="block w-full py-3 px-6 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-semibold rounded-full hover:scale-105 transition-transform text-center"
                >
                  Register Now
                </Link>
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

export default AshtalaxmiSadhanaPage
