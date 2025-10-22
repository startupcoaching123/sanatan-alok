import { useState } from 'react';
import { Link } from "react-router-dom";

// <CHANGE> Import 4 portrait images for each Vidyā
import shivaShaktiImage from '../assets/shiva-shakti.jpg';
import hanumatKripaImage from '../assets/hanumat-kripa.jpg';
import sarasvatiAnugrahImage from '../assets/sarasvati-anugraha.jpg';
import ashtaLakshmiImage from '../assets/ashta-lakshmi.jpg';

export default function FourDivineVidyas() {
    const [expandedVidya, setExpandedVidya] = useState(null);

    const vidyas = [
        {
            id: 1,
            title: 'Shiva Shakti Vidyā',
            sanskrit: 'शिवशक्ति विद्या',
            icon: '🔱',
            image: shivaShaktiImage,
            subtitle: 'The Union of Consciousness and Energy',
            description: 'The union of Shiva and Shakti represents the eternal balance of pure awareness and dynamic energy. Shiva Shakti Vidyā awakens this divine equilibrium within through sacred symbols blessed by Lord Shiva Himself.',
            fullDescription: 'It is not therapy, but a spiritual science of vibration and grace — harmonizing energy, awakening peace, and catalyzing inner transformation. By practicing this Vidyā, you become a living channel of Shiva\'s grace — uplifting yourself while transmitting serenity and strength into the world.',
            benefits: ['Inner Balance', 'Peace & Harmony', 'Spiritual Transformation', 'Energy Harmonization'],
            color: 'from-orange-500 to-amber-600'
        },
        {
            id: 2,
            title: 'Hanumat Kripā Vidyā',
            sanskrit: 'हनुमत्कृपा विद्या',
            icon: '🐒',
            image: hanumatKripaImage,
            subtitle: 'Awakening Strength, Protection & Devotion',
            description: 'Hanumat Kripā Vidyā carries the vital force (prāṇa-śakti) and blessings of Lord Hanuman — the embodiment of devotion, courage, and tireless service.',
            fullDescription: 'This Vidyā awakens resilience, fearlessness, and divine protection within and around you. Through its sacred symbols and energy processes, you invite Hanuman\'s unstoppable grace into your life — restoring vitality and radiating power to others.',
            benefits: ['Courage & Strength', 'Divine Protection', 'Resilience', 'Fearlessness'],
            color: 'from-red-500 to-orange-600'
        },
        {
            id: 3,
            title: 'Sarasvatī Anugraha Vidyā',
            sanskrit: 'सरस्वती अनुग्रह विद्या',
            icon: '🎶',
            image: sarasvatiAnugrahImage,
            subtitle: 'The Flow of Wisdom, Sound & Clarity',
            description: 'Goddess Sarasvatī is the eternal fountain of wisdom, eloquence, and intuitive knowledge. This Vidyā works through divine sound, symbol, and meditative process to open the flow of learning, insight, and refined perception.',
            fullDescription: 'It harmonizes the mind and refines the intellect, awakening inspiration and clarity. Practicing Sarasvatī Anugraha Vidyā aligns your consciousness with the rhythm of divine knowledge, blessing your thoughts, speech, and creative expression.',
            benefits: ['Wisdom & Knowledge', 'Clarity & Focus', 'Creative Expression', 'Eloquence'],
            color: 'from-blue-500 to-cyan-600'
        },
        {
            id: 4,
            title: 'Aṣṭa-Lakṣmī Kripā Vidyā',
            sanskrit: 'अष्टलक्ष्मी कृपा विद्या',
            icon: '💰',
            image: ashtaLakshmiImage,
            subtitle: 'Divine Abundance, Prosperity & Fulfilment',
            description: 'The eight forms of Maha Lakṣmī represent eight streams of divine abundance — spiritual, material, emotional, and karmic. Aṣṭa-Lakṣmī Kripā Vidyā aligns you with these sacred currents.',
            fullDescription: 'Through symbols and meditative energy practices, it dissolves scarcity and activates the flow of grace in every dimension of life. This Vidyā cultivates gratitude, generosity, and radiance — transforming prosperity into a spiritual expression of divine harmony.',
            benefits: ['Abundance & Prosperity', 'Financial Growth', 'Gratitude', 'Generosity'],
            color: 'from-yellow-500 to-amber-600'
        }
    ];

    return (
        <main className="bg-gradient-to-b from-amber-50 via-white to-amber-50 text-slate-800">
            {/* Hero Section */}
            <header className="relative overflow-hidden border-b border-amber-100">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
                    <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-amber-300/30 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 text-sm font-medium text-amber-700 shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-amber-500" />
                        Sacred Sciences of Energy
                    </div>

                    <h1 className="text-pretty text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        <span className="bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 bg-clip-text text-transparent">
                            Four Divine Vidyās
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-700 max-w-3xl leading-relaxed mb-8">
                        Sacred pathways of energy, grace, and transformation. Each Vidyā awakens a unique dimension of consciousness — balance, strength, wisdom, and abundance — guiding seekers toward harmony, empowerment, and the ability to radiate healing vibrations for the good of all.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/join-program"
                            className="inline-block px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg transition-all hover:-translate-y-1"
                        >
                            Join Program
                        </Link>
                    </div>
                </div>
            </header>

            {/* Introduction Section */}
            <section className="border-b border-amber-100">
                <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Introduction</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6 text-slate-700 leading-relaxed">
                            <p className="text-lg">
                                Energy is the very breath of the universe — the life-force flowing through every being, every thought, and every action. The ancient seers realized that when this energy is awakened with devotion and guided with wisdom, it becomes a stream of divine grace that uplifts both the self and the world.
                            </p>
                            <p className="text-lg">
                                The Four Vidyās offered through Sanatan Alok are spiritual sciences of energy, revealed for seekers who wish to walk the path of transformation, balance, wisdom, and abundance.
                            </p>
                        </div>
                        <div className="space-y-6 text-slate-700 leading-relaxed">
                            <p className="text-lg">
                                These are not systems of medical treatment or substitutes for therapy. They are pathways of higher energy harmonization — awakening inner strength, clarity, creativity, and prosperity.
                            </p>
                            <p className="text-lg">
                                To learn these Vidyās is to receive more than knowledge — it is to receive a living connection, a stream of divine blessing that flows through you, nurturing your life and radiating healing vibrations to all around you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vidyā Cards Section */}
            <section className="py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">The Four Sacred Vidyās</h2>

                    <div className="space-y-20">
                        {vidyas.map((vidya, index) => (
                            <div
                                key={vidya.id}
                                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                            >
                                {/* Image */}
                                <div className="flex-1 flex justify-center">
                                    <div className="relative w-full max-w-sm">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${vidya.color} rounded-3xl blur-2xl opacity-20`} />
                                        <img
                                            src={vidya.image || "/placeholder.svg"}
                                            alt={vidya.title}
                                            className="relative w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[3/4]"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-4xl">{vidya.icon}</span>
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900">{vidya.title}</h3>
                                            <p className="text-lg font-semibold text-amber-700">{vidya.sanskrit}</p>
                                        </div>
                                    </div>

                                    <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />

                                    <p className="text-lg font-semibold text-slate-800">{vidya.subtitle}</p>

                                    <p className="text-slate-700 leading-relaxed">
                                        {vidya.description}
                                    </p>

                                    <p className="text-slate-700 leading-relaxed">
                                        {vidya.fullDescription}
                                    </p>

                                    {/* Benefits */}
                                    <div className="grid grid-cols-2 gap-3 pt-4">
                                        {vidya.benefits.map((benefit, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-2 p-3 bg-amber-50 rounded-lg border border-amber-100"
                                            >
                                                <span className="text-amber-600 font-bold">✓</span>
                                                <span className="text-sm font-medium text-slate-700">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        to="/join-program"
                                        className={`mt-6 px-8 py-3 bg-gradient-to-r ${vidya.color} text-white font-semibold rounded-full hover:shadow-lg transition-all hover:-translate-y-1 w-full md:w-auto`}>
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Enrollment Section */}
            <section className="border-t border-amber-100 bg-gradient-to-r from-amber-50 to-orange-50 py-16">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to Begin Your Journey?</h2>
                    <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                        Enrollment for each Vidyā opens periodically. Dates and details are announced through our official website and social media platforms. You may also form a small seeker group or request personal guidance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/join-program"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg transition-all hover:-translate-y-1"
                        >
                            Express Interest
                        </Link>
                        <Link
                            to="/contact-us"
                            className="px-8 py-4 border-2 border-amber-600 text-amber-700 font-semibold rounded-full hover:bg-amber-50 transition-all">
                            Contact Us
                        </Link>
                    </div>

                    <p className="mt-8 text-sm text-slate-600">
                        📧 Email: light.sanatanaalok@gmail.com | 💬 WhatsApp: Message us to connect
                    </p>
                </div>
            </section>

            {/* Footer Note */}
            <section className="py-12 border-t border-amber-100">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm text-slate-600 leading-relaxed">
                        ✨ These Vidyās are spiritual sciences of energy and are not substitutes for medical treatment or therapy. They are pathways of higher energy harmonization designed to support your spiritual journey and overall well-being.
                    </p>
                </div>
            </section>
        </main>
    );
}