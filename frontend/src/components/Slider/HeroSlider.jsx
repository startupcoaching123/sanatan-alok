"use client"

import { useState } from "react"
import Slider from "react-slick"
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Star, Zap } from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Custom Prev Arrow
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 group"
    aria-label="Previous slide"
  >
    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-500 shadow-lg hover:shadow-xl group-hover:scale-105">
      <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F0982E]/30 to-[#d97706]/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  </button>
)

// Custom Next Arrow
const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 group"
    aria-label="Next slide"
  >
    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-500 shadow-lg hover:shadow-xl group-hover:scale-105">
      <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform duration-300" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#d97706]/30 to-[#F0982E]/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  </button>
)

const HeroSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    fade: true,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    dotsClass: "slick-dots ultra-modern-dots",
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            {/* Background */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                filter: "brightness(0.7) contrast(1.1)",
              }}
            >
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#F0982E]/30 via-[#d97706]/20 to-[#b45309]/30"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#F0982E]/20 via-transparent to-[#d97706]/20 animate-pulse"></div>
            </div>

            {/* Floating gradient blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#F0982E]/30 to-[#d97706]/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-br from-[#d97706]/20 to-[#b45309]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-[#F0982E]/20 to-[#b45309]/20 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center z-20 px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="w-full max-w-6xl mx-auto">
                {/* Badge */}
                {slide.badge && (
                  <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-bold text-white bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-xl border border-white/30 shadow-lg opacity-0 animate-[slideInUp_1s_ease-out_0.2s_forwards]">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></div>
                    <Sparkles className="w-4 h-4 mr-1 text-yellow-300 animate-pulse" />
                    {slide.badge}
                    <Star className="w-3 h-3 ml-1 text-yellow-300" />
                  </div>
                )}

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight">
                  <span className="block opacity-0 animate-[slideInUp_1s_ease-out_0.3s_forwards]">
                    {slide.title.split(" ").slice(0, Math.ceil(slide.title.split(" ").length / 2)).join(" ")}
                  </span>
                  <span className="block opacity-0 animate-[slideInUp_1s_ease-out_0.5s_forwards] bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                    {slide.title.split(" ").slice(Math.ceil(slide.title.split(" ").length / 2)).join(" ")}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed opacity-0 animate-[slideInUp_1s_ease-out_0.7s_forwards] font-light">
                  {slide.description}
                </p>

                {/* Button */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 opacity-0 animate-[slideInUp_1s_ease-out_0.9s_forwards]">
                  <button
                    onClick={slide.button1Action}
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-xl bg-gradient-to-r from-[#F0982E] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20"
                  >
                    <span className="relative z-10 flex items-center">
                      <Zap className="w-5 h-5 mr-2 animate-pulse" />
                      {slide.button1Text}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#d97706] via-[#F0982E] to-[#b45309] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#F0982E] to-[#d97706] rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  </button>
                </div>

                {/* Stats */}
                {slide.stats && (
                  <div className="flex flex-wrap gap-6 opacity-0 animate-[slideInUp_1s_ease-out_1.1s_forwards]">
                    {slide.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="group cursor-default">
                        <div className="relative">
                          <div className="text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F0982E] group-hover:to-[#d97706] transition-all duration-500">
                            {stat.number}
                          </div>
                          <div className="text-sm text-gray-300 font-semibold uppercase tracking-wider">
                            {stat.label}
                          </div>
                          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F0982E] to-[#d97706] rounded-full group-hover:w-full transition-all duration-500"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="absolute bottom-12 left-4 md:left-6 lg:left-8 z-20">
              <div className="flex flex-col space-y-1">
                <div className="text-white/60 text-xs font-medium">{String(index + 1).padStart(2, "0")}</div>
                <div className="w-10 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] rounded-full transition-all duration-1000"
                    style={{ width: currentSlide === index ? "100%" : "0%" }}
                  ></div>
                </div>
                <div className="text-white/40 text-xs">{String(slides.length).padStart(2, "0")}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Re-added Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        * { transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); }
      `}</style>
    </div>
  )
}

export default HeroSlider
