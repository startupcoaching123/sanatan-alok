"use client"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Globe, Heart } from "lucide-react"
import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["704, 7th Floor, Palm Court, Mehrauli-Gurgaon Road, Sector 16, Gurugram, Haryana", "India"],
      color: "from-[#F0982E] to-[#d97706]",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 78274 68953", "Mon-Sat: 9AM-6PM"],
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["light.sanatanaalok@gmail.com", "We reply within 24hrs"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Globe,
      title: "Connect Online",
      details: ["www.sanatanalok.com", "@SanatanAlok", "Join our community"],
      color: "from-purple-500 to-pink-600",
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
            <MessageCircle className="w-4 h-4 mr-2" />
            Get In Touch
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
              Sanatan Alok
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            We're here to guide you on your spiritual journey. Reach out to us for consultations, programs, or simply to
            connect with our community of seekers.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md">
              <div className="text-2xl font-bold text-[#F0982E]">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md">
              <div className="text-2xl font-bold text-[#F0982E]">24hrs</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-md">
              <div className="text-2xl font-bold text-[#F0982E]">∞</div>
              <div className="text-sm text-gray-600">Spiritual Guidance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
              <Heart className="w-4 h-4 mr-2" />
              Ways to Connect
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Reach Out to{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Our Community
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the most convenient way to connect with us. We're always here to support your spiritual journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div
                  key={index}
                  className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-amber-100 hover:-translate-y-2 text-center"
                >
                  <div className="mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl shadow-md group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-amber-600 transition-colors">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-amber-100">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Send Us a Message</h3>
                <p className="text-gray-600 leading-relaxed">
                  Share your thoughts, questions, or spiritual inquiries with us. We'd love to hear from you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="spiritual-guidance">Spiritual Guidance</option>
                      <option value="programs">Programs & Workshops</option>
                      <option value="consultation">Personal Consultation</option>
                      <option value="community">Join Community</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Share your thoughts, questions, or how we can help you on your spiritual journey..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-amber-100">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Find Us Here</h3>
                <p className="text-gray-600 leading-relaxed">
                  Visit our peaceful sanctuary where ancient wisdom meets modern comfort. We welcome all seekers.
                </p>
              </div>

              {/* Embedded Map */}
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448882.5159181279!2d77.107951!3d28.482719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ed3deb13203%3A0x2bcc17453dbd93ef!2sPalm%20Court%2C%20704%2C%20Mehrauli-Gurgaon%20Rd%2C%20DLF%20Phase%203%2C%20Sector%2016%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1758348314364!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>

              {/* Location Details */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600 text-sm">704, 7th Floor, Palm Court, Mehrauli-Gurgaon Road, Sector 16, Gurugram, Haryana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Visiting Hours</h4>
                    <p className="text-gray-600 text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm">Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
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
              Ready to Begin Your{" "}
              <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                Spiritual Journey?
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Don't wait for the perfect moment. Your transformation starts with reaching out. We're here to guide you
              every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-[#F0982E] text-[#F0982E] font-semibold rounded-full hover:bg-[#F0982E] hover:text-white transition-all">
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
