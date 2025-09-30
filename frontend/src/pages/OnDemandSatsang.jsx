import { Sparkles, CheckCircle2, Calendar, MessageCircle, Users, Brain, Heart, Leaf, BookOpen } from "lucide-react"
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"

export default function OnDemandFreeSatsang() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
            {/* seo */}
            <Helmet>
                <title>On-Demand Satsang | Sanatan Alok Spiritual Gatherings</title>
                <meta
                    name="description"
                    content="Join Sanatan Alok's on-demand satsang sessions to experience spiritual teachings, meditation, and wisdom at your convenience, fostering inner peace and awakening."
                />
                <meta
                    name="keywords"
                    content="Sanatan Alok satsang, on-demand spiritual sessions, meditation, spiritual teachings, ancient wisdom, inner peace, spiritual awakening"
                />
                <link rel="canonical" href="https://sanatanalok.com/on-demand-satsang" />
            </Helmet>
            {/* Hero */}
            <section className="relative py-20 md:py-28 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-16 -left-6 w-32 h-32 bg-gradient-to-br from-[#F0982E] to-[#d97706] rounded-full blur-3xl"></div>
                    <div className="absolute bottom-8 right-10 w-40 h-40 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl"></div>
                </div>

                <div className="relative container mx-auto px-6 text-center">
                    <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-amber-700 bg-amber-100 rounded-full">
                        <Sparkles className="w-4 h-4 mr-2" />
                        On-Demand Free Satsang
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Clarity. Peace. Inspiration —{" "}
                        <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                            Together.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Every group, family, or organization faces questions: about peace, stress, relationships, health, or life’s
                        purpose. On-Demand Free Satsang is a sacred space where you can bring these questions and receive guidance —
                        absolutely free, online or on-site.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-md">
                            <div className="text-sm font-semibold text-[#F0982E]">Online or On-Site</div>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-md">
                            <div className="text-sm font-semibold text-[#F0982E]">Always Free</div>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-md">
                            <div className="text-sm font-semibold text-[#F0982E]">For Groups</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center px-4 py-2 mb-5 text-sm font-medium text-amber-700 bg-amber-100 rounded-full">
                            <BookOpen className="w-4 h-4 mr-2" />
                            How It Works
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Simple, kind, and{" "}
                            <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                                effortless
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group bg-white/80 border border-amber-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <CheckCircle2 className="w-6 h-6 text-[#F0982E]" />
                                <h3 className="font-semibold text-lg">1. Choose your topic as a group</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Align on what your group needs most right now—peace, clarity, relationships, or growth.
                            </p>
                        </div>

                        <div className="group bg-white/80 border border-amber-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <MessageCircle className="w-6 h-6 text-[#F0982E]" />
                                <h3 className="font-semibold text-lg">2. Message us with your request</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Share a brief context and your preferred format—online or on-site.
                            </p>
                        </div>

                        <div className="group bg-white/80 border border-amber-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                            <div className="flex items-center gap-3 mb-3">
                                <Calendar className="w-6 h-6 text-[#F0982E]" />
                                <h3 className="font-semibold text-lg">3. We arrange a convenient time</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                We coordinate the session and guide your group at a time that works best.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Themes */}
            <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center px-4 py-2 mb-5 text-sm font-medium text-amber-700 bg-amber-100 rounded-full">
                            <Leaf className="w-4 h-4 mr-2" />
                            Themes You Can Choose
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Guidance for{" "}
                            <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                                every path
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ThemeCard
                            icon={Heart}
                            title="Peace & Stress Relief"
                            points={["Inner calm and restful sleep", "Finding strength through struggles"]}
                        />
                        <ThemeCard
                            icon={Users}
                            title="Family & Relationships"
                            points={["Harmony at home", "Parenting with wisdom"]}
                        />
                        <ThemeCard
                            icon={BookOpen}
                            title="Practical Spirituality"
                            points={["Keeping faith alive", "Joy in serving others"]}
                        />
                        <ThemeCard
                            icon={Brain}
                            title="Mind & Emotions"
                            points={["From overthinking to clarity", "From anger to compassion"]}
                        />
                        <ThemeCard icon={Leaf} title="Health & Energy" points={["Daily pranayama", "Healing through stillness"]} />
                        <ThemeCard
                            icon={Sparkles}
                            title="Spiritual Growth"
                            points={["Meditation and bhakti", "4 pillars of balanced life"]}
                        />
                        <ThemeCard
                            icon={CheckCircle2}
                            title="Life Purpose"
                            points={["Karma, destiny, and courage", "Living with bigger meaning"]}
                        />
                    </div>

                    <div className="mt-10 max-w-3xl mx-auto text-center text-gray-700">
                        <p className="leading-relaxed">
                            Your group can also request an entirely new topic not covered in this list. If there’s an area where you
                            seek clarity and a roadmap, we are here to guide you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Join */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center px-4 py-2 mb-5 text-sm font-medium text-amber-700 bg-amber-100 rounded-full">
                            <Heart className="w-4 h-4 mr-2" />
                            Why Join?
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Unite your group in{" "}
                            <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                                wisdom and joy
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <BenefitCard
                            icon={Heart}
                            title="Strengthen Families"
                            description="Cultivate love, harmony, and meaningful communication at home."
                        />
                        <BenefitCard
                            icon={Brain}
                            title="Empower Organizations"
                            description="Bring clarity and balance to your team’s mindset and culture."
                        />
                        <BenefitCard
                            icon={Users}
                            title="Unite Communities"
                            description="Gather in shared wisdom and uplift one another through service."
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to book a{" "}
                        <span className="bg-gradient-to-r from-[#F0982E] via-[#d97706] to-[#b45309] bg-clip-text text-transparent">
                            free Satsang
                        </span>{" "}
                        for your group?
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-10">Bring your people together. Ask. Listen. Transform.</p>
                    <div className="flex justify-center">
                        <Link
                            to="/contact-us"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F0982E] to-[#d97706] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                        >
                            <Calendar className="w-5 h-5" />
                            Book a Free Satsang
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

function ThemeCard({ icon: Icon, title, points }) {
    return (
        <div className="bg-white/80 border border-amber-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F0982E] to-[#d97706] flex items-center justify-center shadow">
                    <Icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold">{title}</h4>
            </div>
            <ul className="text-gray-600 leading-relaxed list-disc ml-5 space-y-1">
                {points.map((p, i) => (
                    <li key={i}>{p}</li>
                ))}
            </ul>
        </div>
    )
}

function BenefitCard({ icon: Icon, title, description }) {
    return (
        <div className="bg-white/80 border border-amber-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F0982E] to-[#d97706] flex items-center justify-center shadow">
                    <Icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold">{title}</h4>
            </div>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    )
}
