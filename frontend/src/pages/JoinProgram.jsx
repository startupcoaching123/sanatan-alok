"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { Helmet } from "react-helmet-async"

const BACKENDURL = import.meta.env.VITE_BACKEND_URL;


export default function JoinFreePrograms() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        program: "",
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const programs = ["Unlocking the Essence of Yoga", "Mantra Vidya", "The Buddha Blueprint", "Chakra Intelligence", "Experiential Masterclass", "Four Divine Vidyas", "On Demand Satsang"]

    const handleInputChange = (e) => {
        const { name, value } = e.target
        if (name === "phone") {
            // Allow only digits, limit to 10
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
        if (!formData.program) nextErrors.program = "Please select a program."
        setErrors(nextErrors)
        return Object.keys(nextErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitted(false)
        if (!validate()) return
        setIsSubmitting(true)

        try {
            const response = await fetch(`${BACKENDURL}/api/free-program-apply`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })
            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || 'Failed to submit application')
            }
            const data = await response.json()
            setSubmitted(true)
            setFormData({ name: "", email: "", phone: "", program: "" })
            setErrors({})
            // Show SweetAlert2 success message
            await Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your application was submitted successfully.',
                confirmButtonColor: '#F0982E',
                timer: 3000,
                timerProgressBar: true,
            })
        } catch (err) {
            console.error("[join-free-programs] submit error:", err.message)
            // Show SweetAlert2 error message
            await Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: err.message || 'There was an issue submitting your application. Please try again later.',
                confirmButtonColor: '#F0982E',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen font-poppins bg-gradient-to-b from-orange-50 via-white to-amber-50">
            {/* seo */}
            <Helmet>
                <title>Join Sanatan Alok Programs | Begin Your Spiritual Journey</title>
                <meta
                    name="description"
                    content="Join Sanatan Alok's transformative programs, including meditation, yoga, and sacred rituals, to embark on a journey of spiritual awakening, inner peace, and holistic growth."
                />
                <meta
                    name="keywords"
                    content="Sanatan Alok programs, join spiritual programs, meditation, yoga, sacred rituals, spiritual awakening, inner peace, holistic transformation"
                />
                <link rel="canonical" href="https://sanatanalok.com/join-program" />
            </Helmet>
            {/* Hero */}
            <section className="relative py-20 lg:py-28 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
                {/* Decorative blobs (match contact theme) */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-16 left-10 w-28 h-28 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-16 right-10 w-36 h-36 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-orange-300 to-amber-400 rounded-full blur-3xl"></div>
                </div>

                <div className="relative container mx-auto px-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                        Join Free Programs
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
                        Apply for{" "}
                        <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                            Transformative Learning
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Submit your application to join our free programs and begin your journey with guidance rooted in timeless
                        wisdom.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl border border-amber-100">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-gray-800 mb-3">Join for Free</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Fill in your details and select the program you’re interested in. We’ll reach out with next steps.
                                </p>
                            </div>

                            {submitted && (
                                <div
                                    role="status"
                                    className="mb-6 rounded-xl border border-green-200 bg-green-50 text-green-700 px-4 py-3"
                                >
                                    Thank you! Your application was submitted successfully.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        aria-invalid={!!errors.name}
                                        aria-describedby={errors.name ? "name-error" : undefined}
                                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${errors.name ? "border-red-300" : "border-gray-200"
                                            }`}
                                        placeholder="Your full name"
                                    />
                                    {errors.name && (
                                        <p id="name-error" className="mt-2 text-sm text-red-600">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            aria-invalid={!!errors.email}
                                            aria-describedby={errors.email ? "email-error" : undefined}
                                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${errors.email ? "border-red-300" : "border-gray-200"
                                                }`}
                                            placeholder="you@example.com"
                                        />
                                        {errors.email && (
                                            <p id="email-error" className="mt-2 text-sm text-red-600">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Mobile Number *
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
                                            className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${errors.phone ? "border-red-300" : "border-gray-200"
                                                }`}
                                            placeholder="9876543210"
                                        />
                                        {errors.phone && (
                                            <p id="phone-error" className="mt-2 text-sm text-red-600">
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2">
                                        Program Selection *
                                    </label>
                                    <select
                                        id="program"
                                        name="program"
                                        value={formData.program}
                                        onChange={handleInputChange}
                                        aria-invalid={!!errors.program}
                                        aria-describedby={errors.program ? "program-error" : undefined}
                                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all ${errors.program ? "border-red-300" : "border-gray-200"
                                            }`}
                                    >
                                        <option value="">Select a program</option>
                                        {programs.map((p) => (
                                            <option key={p} value={p}>
                                                {p}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.program && (
                                        <p id="program-error" className="mt-2 text-sm text-red-600">
                                            {errors.program}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full px-8 py-4 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-semibold rounded-xl shadow-lg transition-transform ${isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:scale-105"
                                        }`}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Application"}
                                </button>
                            </form>
                        </div>

                        {/* Programs Panel */}
                        <aside className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl border border-amber-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">What You Can Join</h3>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Choose from our curated free programs designed to deepen understanding, cultivate presence, and unlock
                                inner wisdom.
                            </p>

                            <ul className="space-y-4">
                                {programs.map((p, i) => (
                                    <li key={i} className="flex items-start gap-3 rounded-2xl border border-amber-100 bg-white/60 p-4">
                                        <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F0982E] to-[#d97706] text-white text-sm font-semibold">
                                            {i + 1}
                                        </span>
                                        <div>
                                            <p className="font-semibold text-gray-800">{p}</p>
                                            <p className="text-sm text-gray-600">
                                                Join live sessions, reflective practices, and Q&amp;A to support your journey.
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 text-amber-800 p-4">
                                Seats are limited. Submit your application to reserve your spot.
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h4 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Start Your{" "}
                        <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                            Journey?
                        </span>
                    </h4>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Submit the form above and we’ll email you the next steps to join the free program of your choice.
                    </p>
                    <Link
                        to="/programs"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-[#F0982E] text-[#F0982E] font-semibold hover:bg-[#F0982E] hover:text-white transition-all"
                    >
                        Explore Free Programs
                    </Link>
                </div>
            </section>
        </div>
    )
}