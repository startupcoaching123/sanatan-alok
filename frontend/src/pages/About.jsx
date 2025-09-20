"use client"
import { Sun, Heart, Users, Target, Eye, Sparkles, ChevronLeft, ChevronRight, Star, Leaf } from "lucide-react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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

function About() {
  const promoters = [
    {
      name: "Dipti Moni Verma",
      qualifications: "M.A. (Public Administration); LL.B.; B.ED.; Post-Graduate Diploma (M.A.) in Human Rights",
      image: "/professional-woman-spiritual-leader-meditation-tea.jpg",
      role: "Founder & Spiritual Guide",
    },
    {
      name: "Sanjay K.",
      qualifications: "(elder brother of Dipti), M.A. (Sociology)",
      image: "/professional-man-spiritual-teacher-meditation-guid.jpg",
      role: "Senior Advisor",
    },
    {
      name: "Saroj V.",
      qualifications: "(elder sister of both); M.A. (Sociology)",
      image: "/professional-woman-spiritual-counselor-meditation-.jpg",
      role: "Spiritual Counselor",
    },
  ]

  const promoterSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  }

  const values = [
    {
      icon: Heart,
      title: "Compassionate Guidance",
      description:
        "We approach every soul with deep compassion and understanding, honoring each person's unique spiritual journey.",
    },
    {
      icon: Leaf,
      title: "Ancient Wisdom",
      description:
        "Our teachings are rooted in timeless spiritual traditions, offering authentic practices for modern seekers.",
    },
    {
      icon: Star,
      title: "Holistic Transformation",
      description: "We believe in nurturing the complete being - mind, body, and spirit - for lasting positive change.",
    },
    {
      icon: Sun,
      title: "Inner Illumination",
      description:
        "Our mission is to help you discover your inner light and live from a place of authentic spiritual awareness.",
    },
  ]

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-b from-orange-50 via-white to-amber-50">
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
            <Users className="w-4 h-4 mr-2" />
            Our Sacred Journey
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            About{" "}
            <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
              Sanatan Alok
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            At Sanatan Alok, we strive to apply ancient knowledge to modern problems. Our goal is to help people
            understand themselves and the universe, fostering spiritual connection, self-discovery, and harmony.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md">
              <div className="text-2xl font-bold text-[#F0982E]">1000+</div>
              <div className="text-sm text-gray-600">Souls Guided</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md">
              <div className="text-2xl font-bold text-[#F0982E]">25+</div>
              <div className="text-sm text-gray-600">Years of Wisdom</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md">
              <div className="text-2xl font-bold text-[#F0982E]">∞</div>
              <div className="text-sm text-gray-600">Divine Blessings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                <Sparkles className="w-4 h-4 mr-2" />
                Our Beginning
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Where Ancient Wisdom Meets{" "}
                <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                  Modern Life
                </span>
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
              <p className="text-xl">
                We began with a simple idea: to create a space where people can find genuine harmony, where old beliefs
                and new ways of life intersect. This inspired us to create a community where people could explore their
                inner selves, connect with their spiritual side, and discover inner peace.
              </p>

              <p>
                We aim to help you discover more about yourself and the universe by creating a space that fosters
                spiritual growth and enlightenment. Join us in finding serenity when old ideas meet new ways of
                existence and awakening your highest self.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Mission */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-amber-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl flex items-center justify-center mr-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                We aim to inspire individuals to reach their full potential and lead a life filled with meaning and
                profound peace. We achieve this by providing people with easy access to real, life-changing resources
                that blend traditional spiritual wisdom with practical, modern applications. We are dedicated to
                building a global community where everyone can find the tools and help they need to start their journey
                toward true harmony.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-amber-100">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mr-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg">
                We envision a world where spirituality is an integral part of everyday life, not something separate from
                it. We aim to be a significant force in the global spiritual awakening, inspiring many people to live
                with awareness, connect deeply, and find inner peace. We aim to create a future where everyone is
                inspired to embark on the path of mystical awakening, ultimately making the world a kinder and more
                peaceful place for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
              <Heart className="w-4 h-4 mr-2" />
              Our Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Guiding{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Principles
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These fundamental values shape our approach to spiritual guidance and community building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-amber-100 hover:-translate-y-2 text-center"
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl shadow-md group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-amber-600 transition-colors">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Promoters Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Guides
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Promoters
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated souls who founded and guide Sanatan Alok with wisdom, compassion, and deep spiritual
              understanding.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {promoters.map((promoter, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:-translate-y-3 text-center"
              >
                <div className="relative mb-8">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={promoter.image || "/placeholder.svg"}
                      alt={promoter.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white px-4 py-1 rounded-full text-xs font-medium">
                      {promoter.role}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#F0982E] transition-colors">
                  {promoter.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">{promoter.qualifications}</p>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden relative">
            <Slider {...promoterSliderSettings}>
              {promoters.map((promoter, index) => (
                <div key={index} className="px-4">
                  <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 text-center mx-auto max-w-sm">
                    <div className="relative mb-8">
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg">
                        <img
                          src={promoter.image || "/placeholder.svg"}
                          alt={promoter.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white px-4 py-1 rounded-full text-xs font-medium">
                          {promoter.role}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{promoter.name}</h3>

                    <p className="text-gray-600 text-sm leading-relaxed">{promoter.qualifications}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Begin Your{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Sacred Journey
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Join us in finding serenity when old ideas meet new ways of existence and awakening your highest self.
              Your transformation begins with a single step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
                Start Your Journey
              </button>
              <button className="px-8 py-4 border-2 border-[#F0982E] text-[#F0982E] font-semibold rounded-full hover:bg-[#F0982E] hover:text-white transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
