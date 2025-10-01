

import { Helmet } from "react-helmet-async"
import bhagwan from "../assets/bhagwan.jpg";
export default function FourDivineVidyas() {
    return (
        <main className="bg-white text-slate-800">
            <Helmet>
                <title>Four Divine Vidyās | Sanatan Alok Spiritual Program</title>
                <meta
                    name="description"
                    content="Discover Sanatan Alok's Four Divine Vidyās—Shiva Shakti, Hanumat Kripā, Sarasvatī Anugraha, and Aṣṭa-Lakṣmī Kripā—sacred energy-healing practices for spiritual awakening, balance, and abundance."
                />
                <meta
                    name="keywords"
                    content="Sanatan Alok Four Divine Vidyas, Shiva Shakti Vidya, Hanumat Kripa Vidya, Sarasvati Anugraha Vidya, Ashta Lakshmi Kripa Vidya, spiritual awakening, energy healing, ancient wisdom"
                />
                <link rel="canonical" href="https://sanatanalok.com/four-divine-vidyas" />
            </Helmet>
            {/* Header */}
            <header className="relative overflow-hidden border-b border-transparent bg-gradient-to-br from-amber-50 via-white to-amber-100">
                {/* Decorative background glows */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-16 -left-24 h-48 w-48 rounded-full bg-amber-200/60 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-amber-300/40 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                        Spiritual Sciences of Energy
                    </div>
                    <h1 className="text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
                        <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                            Four Divine Vidyās
                        </span>
                    </h1>
                    <p className="mt-3 max-w-3xl text-m leading-relaxed text-slate-600">
                        The Four Divine Vidyās — Shiva Shakti, Hanumat Kripā, Sarasvatī Anugraha, and Aṣṭa-Lakṣmī Kripā — are sacred
                        sciences of energy revealed through divine grace. They awaken balance, wisdom, strength, and abundance,
                        offering seekers a joyful path to self-harmony, spiritual empowerment, and the ability to radiate healing
                        vibrations for the good of all.
                    </p>
                </div>
            </header>

            {/* Image Section */}
            <section className="border-b border-slate-200">
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                    <figure className="group overflow-hidden rounded-3xl border border-amber-100 bg-white/70 shadow-lg backdrop-blur">
                        <img
                            className="w-full h-auto object-contain rounded-3xl bg-black"
                            src={bhagwan}
                            alt="Devotional image space for the Lord"
                        />
                    </figure>
                </div>
            </section>


            {/* Introduction */}
            <section className="border-b border-slate-200">
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-semibold">Introduction</h2>
                    <div className="mt-4 space-y-4 text-m leading-relaxed text-slate-700">
                        <p>
                            Energy is the very breath of the universe — the life-force flowing through every being, every thought, and
                            every action. The ancient seers knew that when this energy is awakened with devotion and guided with
                            wisdom, it becomes a stream of divine grace that uplifts both the self and others.
                        </p>
                        <p>
                            The Four Vidyās offered here — Shiva Shakti Vidyā, Hanumat Kripā Vidyā, Sarasvatī Anugraha Vidyā, and
                            Aṣṭa-Lakṣmī Kripā Vidyā — are sacred energy-healing disciplines revealed for seekers who wish to walk the
                            path of transformation, balance, wisdom, and abundance.
                        </p>
                        <p>
                            These Vidyās are not systems of medical treatment or cures for illness. Instead, they are spiritual
                            sciences of energy that help harmonize the mind, awaken inner strength, inspire learning, and attract
                            prosperity. Some are based on divine symbols, others on a blend of symbols and sacred processes — but all
                            are rooted in the grace of the Deities they invoke.
                        </p>
                        <p>
                            When you learn these Vidyās, you receive more than a practice. You receive a living connection — a
                            blessing that flows through you to nurture your life and also radiate healing vibrations to those around
                            you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vidyā Cards */}
            <section>
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Shiva Shakti Vidyā */}
                        <article className="rounded-2xl border border-amber-100 bg-white/80 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />
                            <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                                Shiva Shakti Vidyā
                            </div>
                            <h3 className="mt-1 text-lg font-semibold">शिवशक्ति विद्या</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-700">
                                The union of Shiva and Shakti is the eternal balance of pure consciousness and cosmic energy. Shiva
                                Shakti Vidyā awakens you to that divine balance through sacred symbols blessed by Lord Shiva Himself.
                                This is not a medical therapy but a spiritual science of channeling higher vibrations for harmony,
                                peace, and transformation. By learning and practicing this Vidyā, you become a channel of Shiva’s grace
                                — uplifting yourself and sharing this flow of divine energy with others.
                            </p>
                        </article>

                        {/* Hanumat Kripā Vidyā */}
                        <article className="rounded-2xl border border-amber-100 bg-white/80 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />
                            <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                                Hanumat Kripā Vidyā
                            </div>
                            <h3 className="mt-1 text-lg font-semibold">हनुमत्कृपा विद्या</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-700">
                                Lord Hanuman embodies unwavering devotion, boundless strength, and fearless service. Hanumat Kripā Vidyā
                                carries His blessings through sacred symbols charged with His divine grace. This Vidyā is not about
                                treating illnesses, but about awakening courage, resilience, and divine protection within and around
                                you. By learning this Vidyā, you invite Hanuman’s unstoppable energy into your life, becoming both
                                strengthened in spirit and a radiant source of healing vibrations for others.
                            </p>
                        </article>

                        {/* Sarasvatī Anugraha Vidyā */}
                        <article className="rounded-2xl border border-amber-100 bg-white/80 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />
                            <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                                Sarasvatī Anugraha Vidyā
                            </div>
                            <h3 className="mt-1 text-lg font-semibold">सरस्वती अनुग्रह विद्या</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-700">
                                Goddess Saraswati is the eternal source of wisdom, clarity, and eloquence. Sarasvatī Anugraha Vidyā is a
                                sacred practice of symbols and graceful processes that open the flow of learning, creativity, and pure
                                knowledge. This Vidyā is not concerned with sickness, but with refining the mind, deepening
                                concentration, and receiving the blessings of Saraswati for education and higher wisdom. By learning
                                this Vidyā, you align yourself with the river of divine knowledge, blessing both your own path and
                                inspiring others with light and clarity.
                            </p>
                        </article>

                        {/* Aṣṭa-Lakṣmī Kripā Vidyā */}
                        <article className="rounded-2xl border border-amber-100 bg-white/80 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />
                            <div className="mt-3 inline-flex items-center gap-2 rounded-md bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                                Aṣṭa-Lakṣmī Kripā Vidyā
                            </div>
                            <h3 className="mt-1 text-lg font-semibold">अष्टलक्ष्मी कृपा विद्या</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-700">
                                The eight forms of Goddess Lakshmi bestow wealth, harmony, and abundance in every aspect of life.
                                Aṣṭa-Lakṣmī Kripā Vidyā combines sacred symbols with divine processes to attune you to these streams of
                                prosperity. This Vidyā is not a cure for illness — it is a spiritual path for inviting financial
                                richness, material growth, and all-round abundance through the grace of Ashta Lakshmi. By learning this
                                Vidyā, you open the doors of prosperity for yourself and become a channel of abundance for others as
                                well.
                            </p>
                        </article>
                    </div>

                    {/* Enrollment Note */}
                    <div className="mt-10 rounded-2xl border border-amber-100 bg-amber-50/70 px-5 py-5 text-sm text-slate-700 shadow-sm">
                        ✨ Enrollment for each Vidyā opens periodically. Dates will be shared on this website and across our social
                        media platforms. You may also express your interest by filling out the form or writing to us directly, and
                        we will inform you of the next upcoming batch.
                    </div>
                </div>
            </section>
        </main>
    )
}
