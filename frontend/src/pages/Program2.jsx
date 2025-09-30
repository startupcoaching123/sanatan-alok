"use client"

import { useState } from "react"
import { Sun, Heart, Focus as Lotus, Sparkles, Star, ChevronDown, ChevronUp, Users, CheckCircle, Monitor, Calendar, Video, Award, BookOpen, Zap, Globe, MessageCircle, Target, Volume2, Brain, Waves, Music } from 'lucide-react'
import { Helmet } from "react-helmet-async"

// You'll need to add your mantra program image
import program1 from "../assets/mantra-vidya.jpg";

function MantraVidyaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const mantraTypes = [
    {
      title: "Vedic Mantras",
      description: "Ancient Sanskrit chants from the Vedic tradition",
      icon: BookOpen,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Bija Mantras",
      description: "Seed sounds that activate specific energy centers",
      icon: Sparkles,
      gradient: "from-purple-500 to-violet-600",
    },
    {
      title: "Devotional Mantras",
      description: "Sacred chants expressing love and devotion",
      icon: Heart,
      gradient: "from-rose-500 to-pink-600",
    },
    {
      title: "Healing Mantras",
      description: "Therapeutic sounds for physical and mental wellness",
      icon: Sun,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Meditation Mantras",
      description: "Repetitive sounds for deep contemplative states",
      icon: Lotus,
      gradient: "from-[#F0982E] to-[#d97706]",
    },
    {
      title: "Protection Mantras",
      description: "Sacred sounds for spiritual protection and strength",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },
  ]

  const programFeatures = [
    {
      title: "Core Principles of Mantra Science",
      description: "Learn the authentic methods and traditional foundations of mantra practice",
      icon: Brain,
    },
    {
      title: "Conscious Chanting Techniques",
      description: "Move beyond mechanical repetition to aware, transformative practice",
      icon: Volume2,
    },
    {
      title: "Traditional Wisdom",
      description: "Replace guesswork with time-tested knowledge rooted in ancient tradition",
      icon: BookOpen,
    },
    {
      title: "Community Connection",
      description: "Connect with a community of sincere seekers and practitioners",
      icon: Users,
    },
    {
      title: "Free Certification",
      description: "Receive an official certificate of participation upon completion",
      icon: Award,
    },
    {
      title: "Online Convenience",
      description: "Join from anywhere with our accessible online format",
      icon: Monitor,
    },
  ]

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-b from-orange-50 via-white to-amber-50">
      {/* seo */}
      <Helmet>
        <title>Mantra Vidya | Sanatan Alok Spiritual Program</title>
        <meta
          name="description"
          content="Join Sanatan Alok's Mantra Vidya program to explore the transformative power of sacred mantras, fostering spiritual awakening, inner peace, and holistic growth through ancient wisdom."
        />
        <meta
          name="keywords"
          content="Sanatan Alok mantra vidya, sacred mantras, spiritual practice, meditation, spiritual awakening, inner peace, holistic transformation, ancient Indian wisdom"
        />
        <link rel="canonical" href="https://sanatanalok.com/mantra-vidya" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 pt-10 md:pt-0">
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
                🕉️ Mantra Vidya –{" "}
                <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                  Awaken the Power
                </span>{" "}
                of Your Chant 🕉️
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Mantra Vidya is a free three-day online journey into the timeless science of mantras. Whether you are beginning or already practicing, this program helps you move beyond blind repetition into conscious, transformative chanting.
              </p>

              {/* Program Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-[#F0982E] to-[#d97706] bg-clip-text text-transparent mb-2">
                    3 DAYS
                  </div>
                  <div className="text-sm font-medium text-gray-600">Duration</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-[#F0982E] to-[#d97706] bg-clip-text text-transparent mb-2">
                    ONLINE
                  </div>
                  <div className="text-sm font-medium text-gray-600">Live Sessions</div>
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
                  href="https://wa.me/917827468953?text=Hello%2C%20I%20would%20like%20to%20know%20more%20details%20about%20the%20Mantra%20Vidya%20program."
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
                  src={program1 || "/placeholder.svg"}
                  alt="Mantra Vidya program - meditation and chanting"
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
              Transform your mantra practice from mechanical repetition to conscious, powerful chanting that creates real transformation in your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {programFeatures.map((feature, index) => {
              const IconComponent = feature.icon
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
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mantra Types Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-white/80 backdrop-blur-sm rounded-full">
              <Music className="w-4 h-4 mr-2" />
              Sacred Sound Traditions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Different{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Mantra Types
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the rich variety of sacred sounds and their specific applications for healing, meditation, devotion, and spiritual growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mantraTypes.map((mantra, index) => {
              const IconComponent = mantra.icon
              return (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-white/50 hover:-translate-y-2 text-center"
                >
                  <div className="mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${mantra.gradient} rounded-xl shadow-md group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-amber-600 transition-colors">{mantra.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{mantra.description}</p>
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
                Transform Your Practice
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Don't Just Chant Mantras –{" "}
                <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                  Realize Their Power
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-amber-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">🔮 For Spiritual Seekers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deepen your connection with the divine through the sacred science of sound. Learn how mantras can accelerate your spiritual journey and inner transformation.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-amber-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">⚡ For Conscious Living</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover how mantra practice can bring clarity, peace, and positive energy into your daily life, relationships, and personal growth.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#F0982E]/10 to-[#d97706]/10 rounded-3xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                🎯 Move Beyond Mechanical Repetition
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                    <span className="text-gray-700">Chant with clarity and awareness</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                    <span className="text-gray-700">Replace guesswork with traditional wisdom</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                    <span className="text-gray-700">Experience transformative devotion</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                    <span className="text-gray-700">Connect with sincere seekers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                    <span className="text-gray-700">Learn authentic methods</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                    <span className="text-gray-700">Receive expert guidance</span>
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
                Begin?
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
                  <h3 className="text-xl font-bold mb-2">Online Access</h3>
                  <p className="text-gray-600">Join from anywhere</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-600 mb-8">
                  ⚡ Seats are limited each batch. Stay connected through this website, social media, or email for the next dates.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/917827468953?text=Hello%2C%20I%20would%20like%20to%20know%20more%20details%20about%20the%20Mantra%20Vidya%20program."
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
                ✨ Don't just chant mantras—realize their power and transform your spiritual practice forever.
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
                question: "Do I need prior experience with mantras to join?",
                answer:
                  "Not at all! This program welcomes both beginners and experienced practitioners. Whether you're just starting or already chanting, you'll gain deeper understanding and authentic methods.",
              },
              {
                question: "What makes this different from just learning mantras online?",
                answer:
                  "This program goes beyond just teaching mantras. You'll learn the science behind mantra practice, traditional methods, and how to move from mechanical repetition to conscious, transformative chanting.",
              },
              {
                question: "How do I receive my certificate?",
                answer:
                  "Upon successful completion of all 3 days of the program, you'll receive an official certificate of participation via email. The certification is completely free with no additional charges.",
              },
              {
                question: "What if I miss a session?",
                answer:
                  "While we encourage attending all live sessions for the interactive experience and community connection, please contact us if you have scheduling conflicts to discuss available options.",
              },
              {
                question: "Is this program suitable for people of all backgrounds?",
                answer:
                  "Yes! The program is designed to be inclusive and beneficial for people of all backgrounds and spiritual traditions. The teachings focus on universal principles of sacred sound.",
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
                <Volume2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Join Mantra Vidya</h3>
              <p className="text-gray-600 mb-6">
                Stay connected through our website, social media, or email to get notified about the next program dates.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:info@mantravidya.com"
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

export default MantraVidyaPage