"use client"

import { useState } from "react"
import Swal from "sweetalert2"
import { Helmet } from "react-helmet-async"
import programImg from "../assets/yoga-program.jpg"
import qrCode from "../assets/donation-qr.jpg"

const BACKENDURL = import.meta.env.VITE_BACKEND_URL

export default function TrueScienceOfYogaProgram() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "The True Science of Yoga: Beyond Postures, Into the Depth of Life",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === "phone") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData((p) => ({ ...p, [name]: value }))
      }
      return
    }
    setFormData((p) => ({ ...p, [name]: value }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = "Full name is required."
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address."
    }
    if (!formData.phone.trim()) {
      nextErrors.phone = "Mobile number is required."
    } else if (!/^\d{10}$/.test(formData.phone)) {
      nextErrors.phone = "Mobile number must be exactly 10 digits."
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)

    try {
      const response = await fetch(`${BACKENDURL}/api/program-register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to submit registration")
      }
      const data = await response.json()
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "The True Science of Yoga: Beyond Postures, Into the Depth of Life",
      })
      setErrors({})

      await Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: "Your registration was submitted successfully. Please complete the payment to confirm your spot.",
        confirmButtonColor: "#F0982E",
        timer: 3000,
        timerProgressBar: true,
      })
    } catch (err) {
      console.error("[true-science-yoga] registration error:", err.message)
      await Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: err.message || "There was an issue submitting your registration. Please try again later.",
        confirmButtonColor: "#F0982E",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen font-poppins bg-white">
      {/* SEO */}
      <Helmet>
        <title>The True Science of Yoga | Sanatan Alok</title>
        <meta
          name="description"
          content="Join The True Science of Yoga: Beyond Postures, Into the Depth of Life - A 4-day online immersion exploring Yoga as a sacred journey from doing to being."
        />
        <meta
          name="keywords"
          content="True Science of Yoga, Yoga immersion, Karma Yoga, Bhakti Yoga, Jnana Yoga, Tantra, Hatha Yoga, Kriya Yoga, Kundalini, Mantra, Sankhya Yoga, spiritual awakening"
        />
        <link rel="canonical" href="https://sanatanalok.com/programs/true-science-of-yoga" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-10 left-5 md:top-16 md:left-10 w-20 md:w-28 h-20 md:h-28 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-5 md:bottom-16 md:right-10 w-24 md:w-36 h-24 md:h-36 bg-gradient-to-br from-orange-300 to-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center px-3 md:px-4 py-2 mb-4 md:mb-6 text-xs md:text-sm font-medium text-orange-700 bg-orange-100 rounded-full">
            Exclusive Program Registration
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-balance">
            The True Science of{" "}
            <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
              Yoga
            </span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            Beyond Postures, Into the Depth of Life • A 4-Day Online Immersion
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Program Details */}
          <div className="mb-12 md:mb-16">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl md:rounded-3xl p-6 md:p-10 border border-orange-200 shadow-lg">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                ✨ The True Science of Yoga: Beyond Postures, Into the Depth of Life ✨
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="flex items-center gap-3 text-base md:text-lg text-gray-700">
                  <span className="text-xl md:text-2xl">🗓</span>
                  <span>
                    <strong>Dates:</strong> Nov 1–4, 2025
                  </span>
                </div>
                <div className="flex items-center gap-3 text-base md:text-lg text-gray-700">
                  <span className="text-xl md:text-2xl">⏰</span>
                  <span>
                    <strong>Time:</strong> 8–10 PM (Zoom)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-base md:text-lg text-gray-700">
                  <span className="text-xl md:text-2xl">🎁</span>
                  <span>
                    <strong>Type:</strong> Free Community Offering
                  </span>
                </div>
                <div className="flex items-center gap-3 text-base md:text-lg text-gray-700">
                  <span className="text-xl md:text-2xl">👨‍🏫</span>
                  <span>
                    <strong>By:</strong> Sanatan Alok
                  </span>
                </div>
              </div>

              <div className="space-y-4 md:space-y-5 text-gray-700 leading-relaxed">
                <p className="text-lg md:text-xl italic font-semibold text-orange-700">
                  "Yoga is not a posture — it is a pilgrimage. A sacred journey from the periphery of doing to the
                  stillness of being."
                </p>

                <p>It is the eternal science that unites the human and the divine — the transient and the timeless.</p>

                <p>
                  In this rare 4-day online immersion, under the guidance of an enlightened master, you are invited to
                  explore Yoga as a living revelation — a flowering of consciousness beyond mind and matter.
                </p>

                <p>
                  Journey through the luminous paths of Karma, Bhakti, Jnana, Tantra, Hatha, Kriya, Kundalini, Mantra,
                  and Sankhya Yoga, and experience how each stream leads toward the same ocean of awakening.
                </p>

                <p className="font-semibold text-gray-800 bg-orange-100 p-4 rounded-lg">
                  Through wisdom, silence, and self-inquiry, this offering opens the door to Yoga as the sages
                  envisioned — not as an exercise, but as a sacred remembrance of your own divine essence.
                </p>
              </div>

              <div className="mt-8 md:mt-10">
                <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4 border border-orange-200 shadow-md max-w-md mx-auto">
                  <img
                    src={programImg || "/placeholder.svg"}
                    alt="Yoga Program"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Registration & Payment Section */}
          <div id="registration" className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {/* Registration Form */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-orange-200 shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Register Now</h2>
              <p className="text-gray-600 text-sm md:text-base mb-6">
                Secure your spot in this transformative 4-day yoga immersion.
              </p>

              {submitted && (
                <div className="mb-6 rounded-lg border border-green-300 bg-green-50 text-green-800 px-4 py-3 text-sm md:text-base">
                  ✓ Registration successful! Please complete the payment below.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full px-4 py-2.5 md:py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm md:text-base ${errors.name ? "border-red-300 bg-red-50" : "border-gray-300 bg-white"}`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs md:text-sm text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full px-4 py-2.5 md:py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm md:text-base ${errors.email ? "border-red-300 bg-red-50" : "border-gray-300 bg-white"}`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs md:text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      pattern="\d{10}"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleInputChange}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={`w-full px-4 py-2.5 md:py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm md:text-base ${errors.phone ? "border-red-300 bg-red-50" : "border-gray-300 bg-white"}`}
                      placeholder="9876543210"
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-xs md:text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Program (Read-only) */}
                <div>
                  <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mb-2">
                    Program
                  </label>
                  <input
                    id="program"
                    type="text"
                    value={formData.program}
                    readOnly
                    className="w-full px-4 py-2.5 md:py-3 border border-gray-300 bg-gray-100 rounded-lg text-gray-600 text-sm md:text-base"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 md:py-3.5 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-semibold rounded-lg shadow-lg transition-all text-sm md:text-base ${isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:shadow-xl hover:scale-105"}`}
                >
                  {isSubmitting ? "Registering..." : "Register & Proceed to Payment"}
                </button>
              </form>
            </div>

            {/* Payment QR Section */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-orange-200 shadow-xl flex flex-col items-center justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">Complete Payment</h3>

              <div className="bg-white p-4 md:p-6 rounded-xl border-3 border-orange-300 shadow-lg mb-6">
                <img
                  src={qrCode || "/placeholder.svg"}
                  alt="Payment QR Code"
                  className="w-48 md:w-56 h-48 md:h-56 rounded-lg"
                />
              </div>

              <div className="text-center space-y-4 w-full">
                <div>
                  <p className="text-sm md:text-base text-gray-700 font-semibold mb-2">Scan to Pay</p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Use any UPI app or payment method to scan and complete your payment
                  </p>
                </div>

                <div className="bg-orange-100 border-l-4 border-orange-600 p-4 rounded-lg">
                  <p className="text-sm md:text-base text-orange-900 font-semibold">
                    💫 Your journey begins with this step
                  </p>
                  <p className="text-xs md:text-sm text-orange-800 mt-1">
                    After payment, you'll receive confirmation via email
                  </p>
                </div>

                <div className="pt-4 border-t border-orange-200">
                  <p className="text-xs md:text-sm text-gray-600">
                    <strong>Need help?</strong> Contact us at support@sanatanalok.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">Ready to Transform Your Understanding of Yoga?</h3>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Join this exclusive 4-day immersion and experience yoga as the ancient sages intended.
          </p>
          <a
            href="#registration"
            className="inline-block px-8 py-3 md:py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-all shadow-lg"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  )
}
