"use client"

import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import HeroSlider from "../components/Slider/HeroSlider"
import TestimonialSlider from "../components/Slider/TestimonialSlider"
import StatsSection from "../components/StatsSection/StatsSection"
import { Link } from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import meditationImg from "../assets/meditation.jpg";
import {
  Leaf,
  Sun,
  Heart,
  Focus as Lotus,
  TreePine,
  Sparkles,
  ArrowRight,
  Star,
  ChevronDown,
  ChevronUp,
  Users,
  CheckCircle,
  Clock,
  Monitor,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"


const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-amber-600 hover:bg-white hover:scale-110 transition-all duration-300"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
)

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-amber-600 hover:bg-white hover:scale-110 transition-all duration-300"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
)

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasModalBeenShown, setHasModalBeenShown] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    setHasModalBeenShown(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Show modal once after 7s
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasModalBeenShown) {
        setIsModalOpen(true)
        setHasModalBeenShown(true)
      }
    }, 7000)

    return () => clearTimeout(timer)
  }, [hasModalBeenShown])

  const slides = [
    {
      bgImage:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1274&auto=format&fit=crop",
      badge: "Spiritual Awakening",
      title: "Discover Your Inner Light",
      description:
        "Embark on a transformative journey of self-discovery through ancient wisdom, meditation practices, and sacred teachings that illuminate your path to enlightenment.",
      button1Text: "Begin Your Journey",
      button1Action: () => navigate("/programs"),
      stats: [
        { number: "1000+", label: "Souls Guided" },
        { number: "95%", label: "Transformation Rate" },
        { number: "25+", label: "Years of Wisdom" },
      ],
    },
    {
      bgImage:
        "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1170&auto=format&fit=crop",
      badge: "Sacred Practices",
      title: "Ancient Wisdom for Modern Souls",
      description:
        "Connect with timeless spiritual practices, healing modalities, and sacred rituals that nurture your soul and guide you toward inner peace and divine connection.",
      button1Text: "Explore Practices",
      button1Action: () => navigate("/programs"),
      stats: [
        { number: "50+", label: "Sacred Practices" },
        { number: "24/7", label: "Spiritual Support" },
        { number: "∞", label: "Divine Blessings" },
      ],
    },
  ];

  const freePrograms = [
    {
      title: "Unlocking the Essence of Yoga",
      duration: "5 Days | 2 Hours/Day",
      format: "Online",
      features: ["Authentic Yoga", "Myth Busting", "Yogic Paths", "Inner Peace"],
      description:
        "Discover the true essence of yoga beyond physical postures, exploring its spiritual dimensions and transformative power.",
      link: "/programs/essence-of-yoga", // 👈 add link here
    },
    {
      title: "Mantra Vidya: The Science of Sacred Sound",
      duration: "3 Days | 2 Hours/Day",
      format: "Online",
      features: ["Sacred Sound", "Energy Flow", "Vibration Science", "Chakra Activation"],
      description:
        "Learn the ancient science of mantras and how sacred sounds can transform your consciousness and energy.",
      link: "/programs/mantra-vidya", // 👈 add link here
    },
    {
      title: "The Buddha Blueprint: Life Design for Sukh, Shanti & Samriddhi",
      duration: "3 Days | 2 Hours/Day",
      format: "Online",
      features: ["Desire Control", "Mind Clarity", "Balanced Living", "Stress Release"],
      description:
        "Design a life of happiness, peace, and prosperity using Buddha's timeless teachings and practical wisdom.",
      link: "/programs/buddha-blueprint", // 👈 add link here
    },
    {
      title: "Chakra Intelligence: Decode Your Inner Energy Map",
      duration: "2 Days | 2 Hours/Day",
      format: "Online",
      features: ["Chakra Science", "Block Removal", "Emotional Balance", "Career Growth"],
      description:
        "Understand and balance your chakra system to unlock your full potential and achieve holistic well-being.",
      link: "/programs/chakra-intelligence", // 👈 add link here
    },
  ];


const programSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  centerMode: false,
  centerPadding: "0px",
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024, // <= 1024px
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // <= 768px (mobile)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
        centerPadding: "0px",
        adaptiveHeight: true,
      },
    },
  ],
}


  const spiritualServices = [
    {
      title: "Meditation & Mindfulness",
      description:
        "Discover inner peace through guided meditation, mindfulness techniques, and breathing practices that connect you with your true essence.",
      icon: Lotus,
      gradient: "from-[#F0982E] to-[#d97706]",
      delay: "0ms",
    },
    {
      title: "Natural Healing Therapies",
      description:
        "Experience the healing power of nature through herbal remedies, crystal therapy, and energy healing rooted in ancient wisdom.",
      icon: Leaf,
      gradient: "from-emerald-500 to-green-600",
      delay: "100ms",
    },
    {
      title: "Spiritual Guidance & Counseling",
      description:
        "Find your path with personalized guidance, coaching, and wisdom teachings that illuminate your journey toward enlightenment.",
      icon: Sun,
      gradient: "from-amber-400 to-orange-500",
      delay: "200ms",
    },
    {
      title: "Sacred Rituals & Ceremonies",
      description: "Participate in meaningful ceremonies and rituals that honor the cycles of nature and life.",
      icon: Star,
      gradient: "from-orange-500 to-yellow-500",
      delay: "300ms",
    },
    {
      title: "Yoga & Movement Therapy",
      description:
        "Unite body, mind, and spirit through traditional yoga, movement therapy, and body awareness practices.",
      icon: Heart,
      gradient: "from-pink-500 to-rose-600",
      delay: "400ms",
    },
    {
      title: "Nature Connection Retreats",
      description:
        "Reconnect with Mother Earth through retreats, forest bathing, and outdoor practices in natural settings.",
      icon: TreePine,
      gradient: "from-green-600 to-teal-500",
      delay: "500ms",
    },
  ]

  const offerings = [
    {
      title: "Individual Sessions",
      description: "Personal one-on-one guidance and healing sessions tailored to your unique journey.",
      features: ["Personal Consultation", "Customized Practices", "Ongoing Support", "Progress Tracking"],
      color: "from-[#F0982E] to-[#d97706]",
    },
    {
      title: "Group Workshops",
      description: "Join our community in transformative workshops and collective healing circles.",
      features: ["Community Connection", "Group Meditations", "Shared Learning", "Monthly Gatherings"],
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Retreat Programs",
      description: "Immersive retreats in nature for deep transformation and renewal.",
      features: ["Nature Immersion", "Daily Practices", "Organic Meals", "Sacred Ceremonies"],
      color: "from-orange-500 to-amber-600",
    },
  ]

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-b from-orange-50 via-white to-amber-50">
      <Helmet>
        <title>Sanatana Alok | Guiding Spiritual Awakening and Transformation</title>
        <meta
          name="description"
          content="Sanatana Lok offers meditation, natural healing, yoga, and sacred rituals to connect you with your true self and achieve inner peace."
        />
        <link rel="canonical" href="https://sanatanalok.com/" />
      </Helmet>

      {/* Hero Section */}
      <HeroSlider slides={slides} />

      {/* Services */}
      <section className="relative py-24">
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
              <Sun className="w-4 h-4 mr-2" />
              Our Sacred Practices
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pathways to{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Enlightenment
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our spiritual practices and healing modalities designed to nurture your soul and guide you toward
              inner peace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spiritualServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-amber-100 hover:-translate-y-2"
                >
                  <div className="mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-md group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  {/* <Link
                    to={`/services/${service.title.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
                    className="flex items-center text-amber-600 font-medium"
                  >
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link> */}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
              <Sparkles className="w-4 h-4 mr-2" />
              Transform Your Life Today
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Free{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Programs
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore transformative programs designed to nurture your mind, body, and spirit.
              Each offering helps you unlock inner potential, create balance, and live with
              greater clarity and purpose.
            </p>
          </div>

          {/* Desktop and Tablet Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {freePrograms.map((program, index) => (
              <div
                key={index}
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:-translate-y-3 relative overflow-hidden h-full flex flex-col"
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50/30 to-yellow-50/20 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight group-hover:text-[#F0982E] transition-colors min-h-[60px]">
                      {program.title}
                    </h3>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-[#F0982E]" />
                        <span>{program.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-sm text-gray-600">
                      <Monitor className="w-4 h-4 text-[#F0982E]" />
                      <span>{program.format}</span>
                    </div>
                  </div>

                  {/* Free Badge with fixed height */}
                  <div className="text-center my-6 min-h-[70px] flex items-center justify-center">
                    <span className="text-6xl font-black text-[#F0982E] tracking-tight">Free</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-[#F0982E] flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Enroll Button (always aligned at bottom) */}
                  <Link
                    to={program.link}
                    className="mt-auto w-full py-4 px-6 rounded-2xl font-bold bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm text-center block"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden relative">
            <Slider {...programSliderSettings}>
              {freePrograms.map((program, index) => (
                // <CHANGE> remove px-4 so each slide consumes full width
                <div key={index} className="px-0">
                  {/* <CHANGE> replace 'mx-auto max-w-sm' with 'w-full' to avoid peeking second slide */}
                  <div className="w-full bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-50"></div>

                    <div className="relative z-10">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">{program.title}</h3>
                        <div className="flex items-center justify-center gap-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-[#F0982E]" />
                            <span>{program.duration}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mb-6">
                          <Monitor className="w-4 h-4 text-[#F0982E]" />
                          <span>{program.format}</span>
                        </div>
                      </div>

                      <div className="text-center mb-6">
                        <span className="text-6xl font-black text-[#F0982E] tracking-tight">Free</span>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                            <div className="w-5 h-5 rounded-full bg-[#F0982E] flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to={program.link}
                        className="w-full py-4 px-6 rounded-2xl font-bold bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm text-center block"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>


          {/* Know More About Free Programs Button */}
          <div className="text-center mt-12">
            <Link to="/programs">
              <button className="px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white shadow-lg hover:scale-105 hover:shadow-lg transition-all duration-300">
                Know More About Free Programs
              </button>

            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative py-24 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100">
        <div className="relative container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={meditationImg}
              alt="Peaceful meditation garden"
              className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-lg"
            />
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-md">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-800">1000+</div>
                  <div className="text-xs text-gray-500">Souls Guided</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ancient Wisdom for{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Modern Souls
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Sanatana Lok is a sacred space where timeless wisdom meets modern understanding.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our mission is to guide seekers toward self-realization through spiritual practices, healing, and
              ancestral teachings.
            </p>
            <Link to="/about-us">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform">
                Discover More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Offerings
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Sacred Path
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the spiritual journey that resonates with your soul and begin your transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all border border-amber-100 flex flex-col h-full"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${offering.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                ></div>
                <div className="relative p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-3">{offering.title}</h3>
                      <p className="text-gray-600 text-sm">{offering.description}</p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {offering.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/join-program">
                    <button
                      onClick={openModal}
                      className="w-full py-3 px-6 rounded-xl font-semibold bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white hover:scale-105 transition-transform"
                    >
                      Begin Journey
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Testimonials */}
      <TestimonialSlider />

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-br via-white to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
              <Sparkles className="w-4 h-4 mr-2" />
              Guidance & Wisdom
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our practices and teachings.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "What is the essence of Sanatana Dharma?",
                answer:
                  "Sanatana Dharma represents eternal principles guiding us toward truth, righteousness, and self-realization. It is timeless wisdom that transcends religions and speaks to the human quest for connection with the divine.",
              },
              {
                question: "How can I begin my spiritual journey?",
                answer:
                  "Your journey begins with sincere intention. Start with daily meditation, mindful breathing, and connecting with nature. Our sessions can help you find your most resonant path.",
              },
              {
                question: "What role does nature play in spiritual practice?",
                answer:
                  "Nature is our greatest teacher and healer. By connecting with it, we remember our unity with all life. Our practices honor the five elements—earth, water, fire, air, and space.",
              },
              {
                question: "Are your teachings suitable for beginners?",
                answer:
                  "Absolutely. We welcome seekers at all levels, from beginners to advanced practitioners, offering gentle guidance and deeper wisdom alike.",
              },
            ].map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/contact-us">
              <button className="inline-flex items-center px-10 py-5 text-white font-bold rounded-full bg-gradient-to-r from-[#F0982E] to-[#d97706] hover:scale-105 transition-transform">
                Still have questions?
                <ArrowRight className="w-6 h-6 ml-3" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-4 border-b border-border/50 last:border-0">
      <button
        className="flex items-center justify-between w-full py-6 text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 pr-4">
          {question}
        </h3>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp className="w-6 h-6 text-primary transform transition-transform duration-300" />
          ) : (
            <ChevronDown className="w-6 h-6 text-muted-foreground group-hover:text-primary transform transition-transform duration-300" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}
      >
        <div className="text-muted-foreground leading-relaxed">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default Home
