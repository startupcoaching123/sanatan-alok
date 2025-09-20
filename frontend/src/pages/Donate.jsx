"use client"
import {
  Heart,
  Users,
  Target,
  Gift,
  Star,
  CheckCircle,
  ArrowRight,
  DollarSign,
  CreditCard,
  Smartphone,
  Building,
} from "lucide-react"
import { useState } from "react"

import donation_one from "../assets/donation_one.jpg";
import donation_two from "../assets/donation_two.jpg";

function Donation() {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState("")
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [paymentMethod, setPaymentMethod] = useState("card")

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000, 25000]

  const impactAreas = [
    {
      icon: Heart,
      title: "Spiritual Guidance",
      description: "Support free spiritual counseling sessions for those in need",
      impact: "₹1000 sponsors 5 guidance sessions",
    },
    {
      icon: Users,
      title: "Community Programs",
      description: "Fund workshops and community gatherings for spiritual growth",
      impact: "₹2500 supports a full workshop",
    },
    {
      icon: Target,
      title: "Educational Resources",
      description: "Create and distribute spiritual learning materials",
      impact: "₹5000 develops new course content",
    },
    {
      icon: Gift,
      title: "Outreach Initiatives",
      description: "Expand our reach to help more souls find their path",
      impact: "₹10000 launches new outreach program",
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      message: "My donation helped create the meditation program that changed my life. Giving back feels amazing!",
      amount: "₹5000",
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      message: "Supporting Sanatan Alok means supporting spiritual awakening for countless souls.",
      amount: "₹2500",
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad",
      message: "Every rupee donated creates ripples of positive change in our community.",
      amount: "₹10000",
    },
  ]

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value)
    setSelectedAmount(null)
  }

  const handleInputChange = (e) => {
    setDonorInfo({
      ...donorInfo,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle donation submission
    console.log("Donation submitted:", {
      amount: selectedAmount || customAmount,
      donorInfo,
      paymentMethod,
    })
  }

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

        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                <Heart className="w-4 h-4 mr-2" />
                Make a Difference
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
                Support{" "}
                <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                  Spiritual
                </span>{" "}
                Awakening
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Your generous donation helps us continue our mission of guiding souls toward inner peace, spiritual
                growth, and authentic transformation. Together, we can create a more conscious world.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md">
                  <div className="text-2xl font-bold text-[#F0982E]">5000+</div>
                  <div className="text-sm text-gray-600">Lives Touched</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md">
                  <div className="text-2xl font-bold text-[#F0982E]">100+</div>
                  <div className="text-sm text-gray-600">Programs Funded</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md">
                  <div className="text-2xl font-bold text-[#F0982E]">∞</div>
                  <div className="text-sm text-gray-600">Blessings Shared</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={donation_one}
                  alt="Spiritual community meditation"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
              <Target className="w-4 h-4 mr-2" />
              Your Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Where Your{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Donation
              </span>{" "}
              Goes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every contribution directly supports our mission to spread spiritual wisdom and create positive change in
              the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {impactAreas.map((area, index) => {
              const IconComponent = area.icon
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-amber-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-amber-100 hover:-translate-y-2"
                >
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-2xl shadow-md group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-amber-600 transition-colors">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">{area.description}</p>
                  <div className="text-xs font-medium text-amber-600 bg-amber-100 px-3 py-1 rounded-full inline-block">
                    {area.impact}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Make Your{" "}
                <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                  Donation
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Choose an amount that resonates with your heart and join our mission of spiritual transformation.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Amount Selection */}
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-6">Select Donation Amount</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountSelect(amount)}
                        className={`p-4 rounded-2xl border-2 font-semibold transition-all ${
                          selectedAmount === amount
                            ? "border-[#F0982E] bg-[#F0982E] text-white shadow-lg"
                            : "border-gray-200 bg-white hover:border-[#F0982E] hover:bg-amber-50"
                        }`}
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>

                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[#F0982E] focus:outline-none text-lg"
                    />
                  </div>
                </div>

                {/* Donor Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={donorInfo.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F0982E] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={donorInfo.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F0982E] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={donorInfo.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F0982E] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                    <textarea
                      name="message"
                      rows="3"
                      value={donorInfo.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#F0982E] focus:outline-none resize-none"
                      placeholder="Share your thoughts or dedication..."
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-lg font-semibold text-gray-800 mb-4">Payment Method</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("card")}
                      className={`p-4 rounded-2xl border-2 flex items-center justify-center space-x-3 transition-all ${
                        paymentMethod === "card"
                          ? "border-[#F0982E] bg-amber-50"
                          : "border-gray-200 bg-white hover:border-[#F0982E]"
                      }`}
                    >
                      <CreditCard className="w-5 h-5" />
                      <span className="font-medium">Credit/Debit Card</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("upi")}
                      className={`p-4 rounded-2xl border-2 flex items-center justify-center space-x-3 transition-all ${
                        paymentMethod === "upi"
                          ? "border-[#F0982E] bg-amber-50"
                          : "border-gray-200 bg-white hover:border-[#F0982E]"
                      }`}
                    >
                      <Smartphone className="w-5 h-5" />
                      <span className="font-medium">UPI</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("bank")}
                      className={`p-4 rounded-2xl border-2 flex items-center justify-center space-x-3 transition-all ${
                        paymentMethod === "bank"
                          ? "border-[#F0982E] bg-amber-50"
                          : "border-gray-200 bg-white hover:border-[#F0982E]"
                      }`}
                    >
                      <Building className="w-5 h-5" />
                      <span className="font-medium">Net Banking</span>
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all text-lg"
                  >
                    Donate Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    Your donation is secure and helps create positive change in the world.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
              <Star className="w-4 h-4 mr-2" />
              Donor Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Donors
              </span>{" "}
              Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from the generous souls who have joined our mission and experienced the joy of giving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-amber-50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-amber-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">"{testimonial.message}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                  <div className="text-[#F0982E] font-bold">{testimonial.amount}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Image Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Creating{" "}
                  <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                    Lasting Impact
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Your donation creates ripples of positive change that extend far beyond what you can imagine.
                  Together, we're building a community of conscious souls dedicated to spiritual growth and service.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">100% of donations go directly to programs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">Transparent reporting on fund usage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">Regular updates on program impact</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={donation_two}
                  alt="Community impact through donations"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-full h-full bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-3xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Join Our{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Sacred Mission
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Every donation, no matter the size, contributes to a greater awakening. Be part of the transformation that
              touches countless lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
                Donate Now
              </button>
              <button className="px-8 py-4 border-2 border-[#F0982E] text-[#F0982E] font-semibold rounded-full hover:bg-[#F0982E] hover:text-white transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donation
