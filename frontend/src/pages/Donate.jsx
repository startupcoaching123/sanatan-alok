"use client"
import {
  Heart,
  Users,
  Target,
  Gift,
  Star,
  CheckCircle,
  ArrowRight,
  Download,
  Share2,
  Copy,
} from "lucide-react"
import { useState } from "react"
import { Helmet } from "react-helmet-async"
import donation_one from "../assets/donation_one.jpg";
import donation_two from "../assets/donation_two.jpg";
import qrCode from "../assets/donation-qr.jpg";
import qrCodeHdfc from "../assets/donation-qr.jpg";

function Donation() {
  const [copied, setCopied] = useState(false)
  const [copiedBank, setCopiedBank] = useState(null)

  const upiId = "7678424144@kotak" // Replace with your actual UPI ID
  const bankDetails = {
    accountName: "Mantrenova Quest Pvt Ltd",
    accountNumber: "6051861461",
    ifscCode: "KKBK0004261",
    bankName: "Kotak Mahindra Bank",
    branchName: "GURGAON-SECTOR 10A"
  }

  const bankDetailsHdfc = {
    accountName: "MantreNova Quest Pvt Ltd",
    accountNumber: "50200114334430",
    ifscCode: "HDFC0000572",
    bankName: "HDFC Bank",
    branchName: "VATIKA ATRIUM"
  }

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

  const donationSteps = [
    {
      step: 1,
      title: "Scan QR Code",
      description: "Use any UPI app to scan the QR code",
      icon: "📱"
    },
    {
      step: 2,
      title: "Enter Amount",
      description: "Enter your desired donation amount",
      icon: "💰"
    },
    {
      step: 3,
      title: "Add Note",
      description: "Mention 'Donation for Sanatan Alok'",
      icon: "📝"
    },
    {
      step: 4,
      title: "Complete Payment",
      description: "Confirm and complete your donation",
      icon: "✅"
    }
  ]

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const shareUPI = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Donate to Sanatan Alok',
          text: `Support spiritual awakening by donating to Sanatan Alok. UPI ID: ${upiId}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      copyToClipboard(upiId)
    }
  }


  const downloadQR = () => {
    // Create a temporary link to download the QR code
    const link = document.createElement('a')
    link.href = qrCode
    link.download = 'sanatan-alok-donation-qr.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-b from-orange-50 via-white to-amber-50">
      {/* seo */}
      <Helmet>
        <title>Donate to Sanatan Alok | Support Spiritual Awakening</title>
        <meta
          name="description"
          content="Support Sanatan Alok's mission of spiritual awakening and holistic transformation. Your donation helps us guide seekers through meditation, mysticism, and ancient wisdom."
        />
        <meta
          name="keywords"
          content="Sanatan Alok donation, support spiritual growth, meditation, ancient wisdom, holistic transformation, charity, spiritual awakening"
        />
        <link rel="canonical" href="https://sanatanalok.com/donation" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-10 w-28 h-28 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-10 w-36 h-36 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-gradient-to-br from-orange-300 to-amber-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 mb-4 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                <Heart className="w-4 h-4 mr-2" />
                Make a Difference
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Support{" "}
                <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                  Spiritual
                </span>{" "}
                Awakening
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                Your generous donation helps us continue our mission of guiding souls toward inner peace,
                spiritual growth, and authentic transformation. Together, we can create a more conscious world.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-md">
                  <div className="text-xl font-bold text-[#F0982E]">5000+</div>
                  <div className="text-sm text-gray-600">Lives Touched</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-md">
                  <div className="text-xl font-bold text-[#F0982E]">100+</div>
                  <div className="text-sm text-gray-600">Programs Funded</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-md">
                  <div className="text-xl font-bold text-[#F0982E]">∞</div>
                  <div className="text-sm text-gray-600">Blessings Shared</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={donation_one}
                  alt="Spiritual community meditation"
                  className="w-full h-80 object-cover rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-3xl opacity-20"></div>
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

      {/* QR Donation Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Quick & Secure{" "}
                <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                  Donation
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Scan the QR code with any UPI app to make your donation instantly. Simple, secure, and directly supports our mission.
              </p>
            </div>

            {/* <CHANGE> Updated layout to show two QR codes side by side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* First QR Code Card - Kotak */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                    📱 Scan & Donate (Kotak)
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl shadow-inner flex justify-center items-center mb-6">
                    <img
                      src={qrCode || "/placeholder.svg"}
                      alt="Donation QR Code for Sanatan Alok - Kotak"
                      className="max-w-xs w-full h-auto rounded-xl border border-amber-100"
                    />
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-2">UPI ID</p>
                    <div className="flex items-center justify-center space-x-2">
                      <code className="text-lg font-mono font-bold text-gray-800 bg-amber-50 px-4 py-2 rounded-lg">
                        {upiId}
                      </code>
                      <button
                        onClick={() => copyToClipboard(upiId)}
                        className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                        title="Copy UPI ID"
                      >
                        <Copy className="w-5 h-5" />
                      </button>
                    </div>
                    {copied && (
                      <p className="text-green-600 text-sm mt-2">✓ UPI ID copied to clipboard!</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={downloadQR}
                      className="flex items-center justify-center px-6 py-3 bg-amber-500 text-white font-medium rounded-full hover:bg-amber-600 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download QR
                    </button>
                    <button
                      onClick={shareUPI}
                      className="flex items-center justify-center px-6 py-3 border-2 border-amber-500 text-amber-600 font-medium rounded-full hover:bg-amber-50 transition-colors"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </button>
                  </div>

                  {/* Bank Details for Kotak */}
                  <div className="bg-white rounded-2xl p-6 shadow-md mt-8">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Bank Transfer Details</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account Name:</span>
                        <span className="font-medium">{bankDetails.accountName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account Number:</span>
                        <span className="font-medium">{bankDetails.accountNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">IFSC Code:</span>
                        <span className="font-medium">{bankDetails.ifscCode}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Branch Name:</span>
                        <span className="font-medium">{bankDetails.branchName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bank:</span>
                        <span className="font-medium">{bankDetails.bankName}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(JSON.stringify(bankDetails), 'kotak')}
                      className="w-full mt-4 px-4 py-2 text-amber-600 border border-amber-300 rounded-lg hover:bg-amber-50 transition-colors"
                    >
                      {copiedBank === 'kotak' ? '✓ Copied!' : 'Copy Bank Details'}
                    </button>
                  </div>
                </div>
              </div>

              {/* <CHANGE> Added second QR Code Card - HDFC */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-600 bg-amber-100 rounded-full">
                    📱 Scan & Donate (HDFC)
                  </div>

                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl shadow-inner flex justify-center items-center mb-6">
                    <img
                      src={qrCodeHdfc || "/placeholder.svg"}
                      alt="Donation QR Code for Sanatan Alok - HDFC"
                      className="max-w-xs w-full h-auto rounded-xl border border-amber-100"
                    />
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-2">Bank Transfer Method</p>
                    <div className="text-lg font-mono font-bold text-gray-800 bg-amber-50 px-4 py-2 rounded-lg">
                      HDFC Bank
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 justify-center">
                    <button
                      onClick={() => {
                        const link = document.createElement('a')
                        link.href = qrCodeHdfc
                        link.download = 'sanatan-alok-donation-qr-hdfc.png'
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                      }}
                      className="flex items-center justify-center px-6 py-3 bg-amber-500 text-white font-medium rounded-full hover:bg-amber-600 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download QR
                    </button>
                  </div>

                  {/* Bank Details for HDFC */}
                  <div className="bg-white rounded-2xl p-6 shadow-md mt-8">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Bank Transfer Details</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account Name:</span>
                        <span className="font-medium">{bankDetailsHdfc.accountName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account Number:</span>
                        <span className="font-medium">{bankDetailsHdfc.accountNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">IFSC Code:</span>
                        <span className="font-medium">{bankDetailsHdfc.ifscCode}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Branch Name:</span>
                        <span className="font-medium">{bankDetailsHdfc.branchName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bank:</span>
                        <span className="font-medium">{bankDetailsHdfc.bankName}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(JSON.stringify(bankDetailsHdfc), 'hdfc')}
                      className="w-full mt-4 px-4 py-2 text-amber-600 border border-amber-300 rounded-lg hover:bg-amber-50 transition-colors"
                    >
                      {copiedBank === 'hdfc' ? '✓ Copied!' : 'Copy Bank Details'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation Steps */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">How to Donate in 4 Simple Steps</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {donationSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/50 backdrop-blur-sm">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">
                      {step.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
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
              <a
                href="/donate"
                className="px-8 py-4 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center"
              >
                Donate Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Donation