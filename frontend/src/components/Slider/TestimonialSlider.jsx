"use client"

import { useState } from "react"
import Slider from "react-slick"
import { Heart, Focus as Lotus, ChevronLeft, ChevronRight, Star } from "lucide-react"

const TestimonialSlider = () => {
  const [isPaused, setIsPaused] = useState(false)

  const testimonials = [
    {
      content:
        "The meditation sessions and spiritual guidance transformed my inner peace. I found clarity and purpose through their holistic healing approach that touched my soul deeply.",
      clientName: "Ananya Sharma",
      role: "Yoga Instructor",
      rating: 5,
    },
    {
      content:
        "Their natural healing remedies and spiritual counseling helped me overcome years of stress and anxiety. I feel more connected to my true self than ever before.",
      clientName: "Rajesh Patel",
      role: "Wellness Seeker",
      rating: 5,
    },
    {
      content:
        "The sacred ceremonies and energy healing sessions brought profound transformation to my life. I discovered inner strength I never knew existed within me.",
      clientName: "Priya Mehta",
      role: "Spiritual Practitioner",
      rating: 5,
    },
    {
      content:
        "Through their mindfulness practices and natural therapies, I found balance between mind, body, and spirit. The journey has been truly enlightening.",
      clientName: "Arjun Gupta",
      role: "Meditation Teacher",
      rating: 5,
    },
    {
      content:
        "The herbal remedies and spiritual guidance helped me heal from within. I feel more grounded, peaceful, and connected to nature's wisdom.",
      clientName: "Kavya Singh",
      role: "Holistic Healer",
      rating: 5,
    },
    {
      content:
        "Their compassionate approach to spiritual healing and natural wellness transformed my perspective on life. I found my path to inner harmony.",
      clientName: "Vikram Desai",
      role: "Life Coach",
      rating: 5,
    },
  ]

  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hidden md:flex"
    >
      <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    </button>
  )

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hidden md:flex"
    >
      <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    </button>
  )

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: !isPaused,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: () => (
      <div className="w-3 h-3 bg-amber-300 rounded-full hover:bg-amber-500 transition-colors duration-300"></div>
    ),
    dotsClass: "slick-dots !flex !justify-center !items-center !gap-2 !mt-16",
  }

  return (
    <section className="relative py-24 bg-gradient-to-br from-amber-50 via-orange-50/30 to-yellow-50/20 overflow-hidden font-['Poppins']">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-100/10 to-orange-100/10 rounded-full blur-3xl"></div>

        <div className="absolute top-32 right-20 animate-float">
          <Lotus className="w-8 h-8 text-amber-300/30" />
        </div>
        <div className="absolute bottom-32 left-20 animate-float delay-1000">
          <Heart className="w-6 h-6 text-orange-300/30" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 mb-6 text-sm font-semibold text-amber-700 bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 rounded-full border border-amber-200/50 shadow-lg backdrop-blur-sm">
            <Heart className="w-5 h-5 mr-3 animate-pulse" />
            Healing Testimonials
            <div className="ml-3 w-2 h-2 bg-amber-500 rounded-full animate-ping"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Stories of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600">
              Spiritual Transformation
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our spiritual guidance and natural healing have touched lives and awakened inner peace.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-6xl mx-auto relative">
          <div className="testimonials-slider">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-3 sm:px-4">
                  <div
                    className="group relative bg-white/95 backdrop-blur-sm rounded-[2rem] p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-100/60 hover:border-amber-200/60 h-full min-h-[380px] flex flex-col justify-between mx-auto max-w-lg pb-6 overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 to-orange-50/40 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute top-6 right-6 opacity-15 group-hover:opacity-25 transition-opacity duration-500">
                      <Lotus className="w-12 h-12 sm:w-16 sm:h-16 text-amber-600" />
                    </div>

                    <div className="relative z-10 flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                      ))}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-1">
                      <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium group-hover:text-gray-800 transition-colors duration-300 text-center italic">
                        "{testimonial.content}"
                      </blockquote>
                    </div>

                    <div className="relative z-10 text-center mt-6">
                      <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-4 rounded-full"></div>
                      <p className="text-amber-600 font-semibold text-lg">{testimonial.clientName}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>

                    <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-orange-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-200"></div>

                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </Slider>

            <style jsx>{`
              .testimonials-slider .slick-dots li button:before {
                display: none;
              }
              .testimonials-slider .slick-dots li.slick-active div {
                background-color: #F0982E !important;
                transform: scale(1.2);
              }
              .testimonials-slider .slick-track {
                display: flex;
                align-items: stretch;
              }
              .testimonials-slider .slick-slide > div {
                height: 100%;
              }
              .testimonials-slider .slick-slide {
                padding: 0 8px;
              }
              .testimonials-slider .slick-dots {
                margin-bottom: 0 !important;
              }
              @media (max-width: 768px) {
                .testimonials-slider .slick-slide {
                  padding: 0 4px;
                }
              }
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
              }
              .animate-float {
                animation: float 3s ease-in-out infinite;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider
