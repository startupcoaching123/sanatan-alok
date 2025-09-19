"use client"

import { useState, useEffect, useRef } from "react"
import { Leaf, Sun, Heart, Star, Sparkles, Mountain } from "lucide-react"

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    souls: 0,
    healers: 0,
    journeys: 0,
  })
  const sectionRef = useRef(null)

  const stats = [
    {
      id: "souls",
      target: 1250,
      label: "Souls Awakened",
      suffix: "+",
      icon: Sun,
      gradient: "from-[#F0982E] to-[#d97706]",
      bgGradient: "from-[#F0982E]/20 to-[#d97706]/20",
      description: "Spiritual transformations guided",
      floatingIcon: Sparkles,
    },
    {
      id: "healers",
      target: 85,
      label: "Sacred Healers",
      suffix: "+",
      icon: Heart,
      gradient: "from-[#d97706] to-[#b45309]",
      bgGradient: "from-[#d97706]/20 to-[#b45309]/20",
      description: "Certified spiritual guides",
      floatingIcon: Leaf,
    },
    {
      id: "journeys",
      target: 500,
      label: "Sacred Journeys",
      suffix: "+",
      icon: Mountain,
      gradient: "from-[#b45309] to-[#F0982E]",
      bgGradient: "from-[#b45309]/20 to-[#F0982E]/20",
      description: "Life-changing experiences",
      floatingIcon: Star,
    },
  ]

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  // Counter animation
  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60 // 60 steps for smooth animation
    const stepDuration = duration / steps

    stats.forEach((stat) => {
      let currentStep = 0
      const increment = stat.target / steps

      const timer = setInterval(() => {
        currentStep++
        const currentValue = Math.min(Math.floor(increment * currentStep), stat.target)

        setCounters((prev) => ({
          ...prev,
          [stat.id]: currentValue,
        }))

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, stepDuration)
    })
  }, [isVisible])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-[#fffbeb] via-white to-[#fff7ed] overflow-hidden font-['Poppins']"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Organic flowing shapes */}
        <div className="absolute top-10 -left-32 w-96 h-96 bg-gradient-to-br from-[#F0982E]/10 to-[#d97706]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 -right-32 w-80 h-80 bg-gradient-to-br from-[#b45309]/10 to-[#F0982E]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Floating spiritual elements */}
        <div className="absolute top-20 right-1/4 w-4 h-4 bg-[#F0982E]/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-[#d97706]/40 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#b45309]/50 rounded-full animate-bounce delay-1000"></div>

        {/* Organic pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="organic" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#F0982E" />
                <path
                  d="M5,5 Q10,2 15,5 Q18,10 15,15 Q10,18 5,15 Q2,10 5,5"
                  fill="none"
                  stroke="#d97706"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#organic)" />
          </svg>
        </div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-16">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 mb-8 text-sm font-semibold text-[#b45309] bg-gradient-to-r from-[#fef3c7] to-[#fff7ed] backdrop-blur-sm rounded-full border border-[#F0982E]/20 shadow-lg">
            <Leaf className="w-5 h-5 mr-3 text-[#F0982E] animate-pulse" />
            Sacred Achievements
            <Sun className="w-5 h-5 ml-3 text-[#d97706] animate-pulse delay-500" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-8 leading-tight">
            Journey of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] relative">
              Transformation
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#F0982E]/30 via-[#d97706]/30 to-[#b45309]/30 rounded-full"></div>
            </span>
          </h2>

          <p className="text-lg text-[#4b5563] max-w-3xl mx-auto leading-relaxed">
            Every soul we touch, every heart we heal, every journey we guide - these numbers represent real
            transformations and sacred connections
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            const FloatingIcon = stat.floatingIcon
            return (
              <div
                key={stat.id}
                className="group relative"
                style={{
                  animationDelay: `${index * 300}ms`,
                  animation: `slideInUp 1s ease-out forwards ${index * 300}ms`,
                }}
              >
                {/* Organic card shape */}
                <div className="relative bg-white/80 backdrop-blur-sm rounded-[2rem] p-10 shadow-xl hover:shadow-2xl transition-all duration-700 border border-[#F0982E]/10 hover:border-[#F0982E]/30 group-hover:-translate-y-3 group-hover:rotate-1 overflow-hidden">
                  {/* Flowing background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  ></div>

                  {/* Floating decorative icon */}
                  <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <FloatingIcon className="w-12 h-12 text-[#F0982E] animate-pulse" />
                  </div>

                  {/* Main content */}
                  <div className="relative z-10 text-center">
                    {/* Icon container with organic shape */}
                    <div className="relative mb-8 flex justify-center">
                      <div
                        className={`relative w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 flex items-center justify-center`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />

                        {/* Pulsing ring */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-[#F0982E]/30 animate-ping"></div>
                      </div>

                      {/* Floating badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#fef3c7] to-[#fff7ed] rounded-full flex items-center justify-center border-2 border-[#F0982E]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                        <Star className="w-4 h-4 text-[#F0982E]" />
                      </div>
                    </div>

                    {/* Counter with spiritual styling */}
                    <div className="mb-6">
                      <div className="text-5xl md:text-6xl font-bold text-[#111827] mb-3 font-mono tracking-tight">
                        {counters[stat.id].toLocaleString()}
                        <span className="text-[#F0982E] text-4xl">{stat.suffix}</span>
                      </div>

                      <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#b45309] transition-colors duration-300">
                        {stat.label}
                      </h3>

                      <p className="text-[#4b5563] group-hover:text-[#111827] transition-colors duration-300 leading-relaxed">
                        {stat.description}
                      </p>
                    </div>

                    {/* Progress indicator */}
                    <div className="w-full bg-[#F0982E]/10 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-1000 delay-500`}
                        style={{ width: isVisible ? "100%" : "0%" }}
                      ></div>
                    </div>
                  </div>

                  {/* Organic decorative elements */}
                  <div className="absolute bottom-4 left-4 w-3 h-3 bg-[#F0982E]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"></div>
                  <div className="absolute top-1/2 right-4 w-2 h-2 bg-[#d97706]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-bounce delay-300"></div>
                </div>

                {/* Floating number badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#F0982E] to-[#d97706] text-white text-lg font-bold rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 border-4 border-white">
                  {index + 1}
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center mb-12">
            <button className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-bold rounded-full hover:from-[#d97706] hover:to-[#b45309] transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <Sun className="w-6 h-6 mr-3 group-hover:rotate-180 transition-transform duration-500" />
              <span className="relative z-10">Begin Your Sacred Journey</span>
              <Sparkles className="w-6 h-6 ml-3 group-hover:scale-125 transition-transform duration-300" />
            </button>
          </div>

          {/* Spiritual indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-[#4b5563]">
            <div className="flex items-center group cursor-pointer">
              <div className="w-3 h-3 bg-gradient-to-r from-[#F0982E] to-[#d97706] rounded-full mr-3 animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
              <span className="text-sm font-medium group-hover:text-[#F0982E] transition-colors duration-300">
                Authentic Guidance
              </span>
            </div>
            <div className="flex items-center group cursor-pointer">
              <div className="w-3 h-3 bg-gradient-to-r from-[#d97706] to-[#b45309] rounded-full mr-3 animate-pulse delay-300 group-hover:scale-125 transition-transform duration-300"></div>
              <span className="text-sm font-medium group-hover:text-[#d97706] transition-colors duration-300">
                Sacred Wisdom
              </span>
            </div>
            <div className="flex items-center group cursor-pointer">
              <div className="w-3 h-3 bg-gradient-to-r from-[#b45309] to-[#F0982E] rounded-full mr-3 animate-pulse delay-600 group-hover:scale-125 transition-transform duration-300"></div>
              <span className="text-sm font-medium group-hover:text-[#b45309] transition-colors duration-300">
                Eternal Support
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .font-mono {
          font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
        }
      `}</style>
    </section>
  )
}

export default StatsSection
