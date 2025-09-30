"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import {
  Sun,
  Heart,
  Focus as Lotus,
  Sparkles,
  Star,
  ChevronDown,
  ChevronUp,
  Users,
  CheckCircle,
  Monitor,
  Calendar,
  Video,
  Award,
  BookOpen,
  Zap,
  Globe,
  MessageCircle,
  Target,
} from "lucide-react"

import program1 from "../assets/essence-yoga.jpg";

function YogaEssencePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const yogicPaths = [
    {
      title: "Karma Yoga",
      description: "The path of selfless action and service to others",
      icon: Heart,
      gradient: "from-rose-500 to-pink-600",
    },
    {
      title: "Bhakti Yoga",
      description: "The path of devotion and love for the divine",
      icon: Star,
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      title: "Jnana Yoga",
      description: "The path of knowledge and self-inquiry",
      icon: BookOpen,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Raja Yoga",
      description: "The royal path of meditation and mental control",
      icon: Lotus,
      gradient: "from-[#F0982E] to-[#d97706]",
    },
    {
      title: "Hatha Yoga",
      description: "The path of physical postures and breath control",
      icon: Target,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Tantra Yoga",
      description: "The path of energy transformation and sacred practices",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Kundalini Yoga",
      description: "The path of awakening dormant spiritual energy",
      icon: Sun,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      title: "Kriya Yoga",
      description: "The path of purification through specific techniques",
      icon: Sparkles,
      gradient: "from-teal-500 to-blue-500",
    },
    {
      title: "Mantra Yoga",
      description: "The path of sacred sound and vibration",
      icon: MessageCircle,
      gradient: "from-violet-500 to-purple-600",
    },
    {
      title: "Ashtanga Yoga",
      description: "The eight-limbed path of comprehensive practice",
      icon: Globe,
      gradient: "from-amber-500 to-yellow-600",
    },
  ]

  const programFeatures = [
    {
      title: "Live & Interactive Learning",
      description: "2 hours daily of engaging, real-time sessions with expert guidance",
      icon: Video,
    },
    {
      title: "Question & Answer Sessions",
      description: "Dedicated time to clear your doubts and deepen understanding",
      icon: MessageCircle,
    },
    {
      title: "All Major Yogic Paths",
      description: "Comprehensive exposure to 10 different yogic traditions and practices",
      icon: Globe,
    },
    {
      title: "Free Certification",
      description: "Receive an official certificate upon successful completion",
      icon: Award,
    },
    {
      title: "No Prerequisites",
      description: "Accessible to everyone, regardless of prior yoga knowledge",
      icon: Users,
    },
    {
      title: "Zoom Platform",
      description: "Convenient online learning from the comfort of your home",
      icon: Monitor,
    },
  ]

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-b from-orange-50 via-white to-amber-50">
      {/* seo */}
      <Helmet>
        <title>Discover Yoga in Its True Essence | Sanatan Alok Program</title>
        <meta
          name="description"
          content="Explore Sanatan Alok's 'Discover Yoga in Its True Essence' program, blending authentic yoga practices with spiritual wisdom to foster inner peace, balance, and holistic transformation."
        />
        <meta
          name="keywords"
          content="Sanatan Alok yoga, discover yoga, authentic yoga, spiritual yoga, meditation, inner peace, holistic transformation, ancient wisdom"
        />
        <link rel="canonical" href="https://sanatanalok.com/discover-yoga" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 pt-10 md:pt-0">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                <Sparkles className="w-4 h-4 mr-2" />
                5-Day Free Program with Certification
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                🌟 Discover Yoga in Its{" "}
                <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                  True Essence
                </span>{" "}
                🌟
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Most people think yoga means postures and breathing. But yoga is much
                more—a comprehensive science of consciousness with profound
                applications in health, clarity, goal achievement, inner peace, and
                spiritual growth.
              </p>

              {/* Program Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-[#F0982E] to-[#d97706] bg-clip-text text-transparent mb-2">
                    5 DAYS
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
                  href="https://wa.me/917827468953?text=Hello%2C%20I%20would%20like%20to%20know%20more%20details%20about%20the%20Unlocking%20the%20Essence%20of%20Yoga%20program."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-bold rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-lg text-center w-full sm:w-auto"
                >
                  JOIN THE FREE PROGRAM & GET CERTIFIED
                </a>

              </div>
            </div>

            {/* Right side image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={program1}
                  alt="Yoga essence program - woman in yoga pose"
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
              <Target className="w-4 h-4 mr-2" />
              Program Benefits
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What You'll{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Gain
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our 5-Day Online Program is designed to give you huge clarity about yoga, its manifold applications, and
              help you make an informed decision about which path resonates with you.
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

      {/* Yogic Paths Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-white/80 backdrop-blur-sm rounded-full">
              <Globe className="w-4 h-4 mr-2" />
              Comprehensive Learning
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Explore All Major{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Yogic Paths
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Gain exposure to Karma, Bhakti, Jnana, Raja, Hatha, Tantra, Kundalini, Kriya, Mantra & Ashtanga yoga
              traditions and discover which path resonates with your soul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {yogicPaths.map((path, index) => {
              const IconComponent = path.icon
              return (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border border-white/50 hover:-translate-y-2 text-center"
                >
                  <div className="mb-4">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${path.gradient} rounded-xl shadow-md group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-amber-600 transition-colors">{path.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{path.description}</p>
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
                Why Join This Program?
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Perfect for{" "}
                <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                  Everyone
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-amber-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">✨ For Spiritual Seekers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Deepen your understanding of yoga's spiritual dimensions and find the path that resonates with your
                  soul's calling for growth and enlightenment.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-amber-100">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">⚡ For Modern Life Balance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn practical applications of yogic wisdom to create balance, reduce stress, and achieve your goals
                  while living in the modern world.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#F0982E]/10 to-[#d97706]/10 rounded-3xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
                💡 The Result: Huge Clarity About Yoga
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                    <span className="text-gray-700">Understand yoga's true essence beyond postures</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                    <span className="text-gray-700">Discover which yogic path resonates with you</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                    <span className="text-gray-700">Learn practical applications for daily life</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                    <span className="text-gray-700">Gain tools for inner peace and clarity</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                    <span className="text-gray-700">Make informed decisions about your practice</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#F0982E] flex-shrink-0" />
                    <span className="text-gray-700">Connect with like-minded practitioners</span>
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
                  <h3 className="text-xl font-bold mb-2">Free Enrollment</h3>
                  <p className="text-gray-600">No cost, no hidden fees</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Free Certification</h3>
                  <p className="text-gray-600">Official certificate included</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Live on Zoom</h3>
                  <p className="text-gray-600">Interactive online sessions</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-600 mb-8">
                  ⚡ This program is conducted regularly. Keep visiting our website, follow us on social media, or email
                  us to know the next program dates.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/917827468953?text=Hello%2C%20I%20would%20like%20to%20know%20more%20details%20about%20the%20Unlocking%20the%20Essence%20of%20Yoga%20program."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-bold rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center"
                  >
                    Register Now
                  </a>

                  <Link
                    to="/contact"
                    className="px-8 py-4 border-2 border-[#F0982E] text-[#F0982E] font-semibold rounded-full hover:bg-[#F0982E] hover:text-white transition-all duration-300"
                  >
                    Get More Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl font-semibold text-gray-800 mb-4">
                ✨ Yoga is not just for the fitness enthusiast or the monk—it's for anyone ready to re-engineer life,
                find peace, and realize their potential.
              </p>
              <div className="flex items-center justify-center gap-4 text-gray-600">
                <span>📧 Contact: +917827468953</span>
                <span>•</span>
                <span>🌐 www.sanatanalok.com</span>
              </div>
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
                question: "Do I need prior yoga experience to join?",
                answer:
                  "Not at all! This program is accessible to everyone, regardless of prior yoga knowledge. We welcome complete beginners and experienced practitioners alike.",
              },
              {
                question: "What makes this different from regular yoga classes?",
                answer:
                  "This program goes beyond physical postures to explore yoga as a comprehensive science of consciousness. You'll learn about all major yogic paths and their practical applications in modern life.",
              },
              {
                question: "How do I receive my certification?",
                answer:
                  "Upon successful completion of all 5 days of the program, you'll receive an official certificate via email. The certification is completely free with no additional charges.",
              },
              {
                question: "What if I miss a session?",
                answer:
                  "While we encourage attending all live sessions for the interactive experience, recordings may be available. Contact us for specific arrangements if you have scheduling conflicts.",
              },
              {
                question: "Is this program suitable for people of all ages?",
                answer:
                  "Yes! The program is designed to be inclusive and beneficial for people of all ages and backgrounds. The teachings are universal and can be applied by anyone seeking personal growth.",
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
                <Lotus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Join the Program</h3>
              <p className="text-gray-600 mb-6">
                Contact us to get information about the next program dates and registration details.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+917827468953"
                  className="block w-full py-3 px-6 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-semibold rounded-full hover:scale-105 transition-transform"
                >
                  Call: +917827468953
                </a>
                <a
                  href="mailto:info@sanatanalok.com"
                  className="block w-full py-3 px-6 border-2 border-[#F0982E] text-[#F0982E] font-semibold rounded-full hover:bg-[#F0982E] hover:text-white transition-all"
                >
                  Email Us
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

export default YogaEssencePage
