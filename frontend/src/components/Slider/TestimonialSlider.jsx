// Updated Testimonial Slider with images + reduced testimonial content

"use client"

import { useState } from "react"
import Slider from "react-slick"
import { Heart, Focus as Lotus, ChevronLeft, ChevronRight, Star } from "lucide-react"

import one from "../../assets/personone.jpg"
import two from "../../assets/persontwo.jpg"
import three from "../../assets/personthree.jpg"
import four from "../../assets/personfour.jpg"

const TestimonialSlider = () => {
  const [isPaused, setIsPaused] = useState(false)

  // Shortened testimonials + images
  const testimonials = [
    {
      content:
        "The meditation and stress‑management practices by Anand Ishaan ji brought clarity, balance, and inner calm into my busy professional routine.",
      clientName: "Ms. Astha Shruti",
      role: "Software Test Engineer, Gurugram",
      rating: 5,
      image: one,
    },
    {
      content:
        "Three years with Anand Ishaan ji transformed my understanding of Yoga and consciousness. His guidance brought deep peace and inner awakening.",
      clientName: "Nabaraj Antaryatri",
      role: "Teacher",
      rating: 5,
      image: two,
    },
    {
      content:
        "Balancing family, work, and inner growth became effortless with Ishaan ji’s teachings. Chakra science and initiation brought profound clarity and healing.",
      clientName: "Pratima",
      role: "Homemaker & Teacher",
      rating: 5,
      image: three,
    },
    {
      content:
        "His meditation programs opened a deeper self‑awareness within me. The practices are simple yet life‑changing, bringing grounding and inner stability.",
      clientName: "Pramod Kumar Dubey",
      role: "Real Estate Developer, Noida",
      rating: 5,
      image: four,
    },
  ]
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hidden md:flex"
    >
      <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
    </button>
  )

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hidden md:flex"
    >
      <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
    </button>
  )

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
    customPaging: () => <div className="w-3 h-3 bg-amber-300 rounded-full"></div>,
    dotsClass: "slick-dots !flex !justify-center !items-center !gap-2 !mt-12",
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50/30 to-yellow-50/20 overflow-hidden font-['Poppins']">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-16 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-5 py-2 mb-5 text-sm font-semibold text-amber-700 bg-gradient-to-r from-amber-100 via-orange-100 to-amber-100 rounded-full border border-amber-200/50 shadow-lg backdrop-blur-sm">
            <Heart className="w-4 h-4 mr-2 animate-pulse" /> Healing Testimonials
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600">Spiritual Transformation</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="testimonials-slider">
            <Slider {...settings}>
              {testimonials.map((t, i) => (
                <div key={i} className="px-3">
                  <div
                    className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-100/60 hover:border-amber-200"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <img
                      src={t.image}
                      alt={t.clientName}
                      className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full object-cover border-2 border-amber-300 shadow-md mb-4"
                    />

                    <div className="flex justify-center mb-3">
                      {[...Array(t.rating)].map((_, s) => (
                        <Star key={s} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-gray-700 text-base md:text-lg leading-relaxed font-medium text-center italic">
                      "{t.content}"
                    </blockquote>

                    <div className="text-center mt-4">
                      <p className="text-amber-600 font-semibold text-base">{t.clientName}</p>
                      <p className="text-gray-500 text-sm md:text-base">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSlider
