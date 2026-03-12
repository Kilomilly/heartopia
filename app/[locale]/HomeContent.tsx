"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
    Sparkles,
    Heart,
    Fish,
    Clock,
    CloudRain,
    ChevronRight,
    TrendingUp,
    Compass,
    Music,
    Palette,
    ArrowRight,
    Users,
    CloudSun,
    Play,
    BookOpen,
    MapPin,
    Star,
} from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Navbar } from "@/components/heartopia/navbar"
import { Footer } from "@/components/heartopia/footer"

// --- Trending Data ---
const trendingGuidesData = [
    { id: "guide1", category: "catFishing", rarity: "legendary", image: "🎣", href: "/guides/fishing" },
    { id: "guide2", category: "catCooking", rarity: "rare", image: "🥧", href: "/recipes/mushroom-pie" },
    { id: "guide3", category: "catFishing", rarity: "legendary", image: "🦐", href: "/guides/fish-locations" },
    { id: "guide4", category: "catExploration", rarity: "rare", image: "💻", href: "/platforms/pc" },
    { id: "guide5", category: "catExploration", rarity: "rare", image: "🌐", href: "/platforms" },
    { id: "guide6", category: "catExploration", rarity: "legendary", image: "📅", href: "/release-date" },
    { id: "guide7", category: "catBuilding", rarity: "legendary", image: "🏠", href: "/guides/housing" },
    { id: "guide8", category: "catExploration", rarity: "legendary", image: "🥚", href: "/events/onsen-egg-all-locations" },
    { id: "guide9", category: "catExploration", rarity: "rare", image: "🎹", href: "/piano" },
    { id: "guide10", category: "catExploration", rarity: "legendary", image: "❄️", href: "/events/heartopia-snow-concert-guide" },
    { id: "guide11", category: "catExploration", rarity: "legendary", image: "🦋", href: "/guides/heartopia-frostspore-butterflies" },
    { id: "guide12", category: "catExploration", rarity: "legendary", image: "🌌", href: "/guides/aurora-weather-banquet" },
    { id: "guide13", category: "catNpc", rarity: "rare", image: "🎸", href: "/guides/heartopia-kapil-guide" },
    { id: "guide14", category: "catNpc", rarity: "legendary", image: "🔮", href: "/guides/heartopia-mbti-personality-guide" },
]

const rarityConfig = {
    common: { badge: "bg-heartopia-green/20 text-[#6B9F6B]", border: "border-heartopia-green/30", glow: "" },
    rare: { badge: "bg-heartopia-sky/20 text-[#6BA8C9]", border: "border-heartopia-sky/30", glow: "shadow-soft-blue" },
    legendary: { badge: "bg-heartopia-orange/20 text-[#D4A373]", border: "border-heartopia-orange/30", glow: "shadow-soft-orange" },
}

export default function HomeContent({ t, locale }: { t: any; locale: string }) {
    // Hero State
    const [timeLeft, setTimeLeft] = useState(600)
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 600))
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible")
                }
            })
        }, observerOptions)

        const revealElements = document.querySelectorAll(".scroll-reveal")
        revealElements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, "0")}`
    }

    return (
        <main className="min-h-screen">
            <Navbar t={t.navbar} locale={locale} />

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-screen pt-20 md:pt-28 overflow-hidden flex items-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={t.hero.image}
                        alt="Heartopia Hero Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[#FEF9F3]" />
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-32 left-[10%] animate-float-slow"><Star className="w-8 h-8 text-heartopia-orange/40 fill-heartopia-orange/20" /></div>
                    <div className="absolute top-48 right-[15%] animate-float"><Sparkles className="w-6 h-6 text-heartopia-pink/50" /></div>
                    <div className="absolute top-64 left-[20%] animate-float-slow"><div className="w-4 h-4 rounded-full bg-heartopia-green/30" /></div>
                    <div className="absolute bottom-32 left-[8%] animate-float-slow"><Star className="w-5 h-5 text-heartopia-sky/60 fill-heartopia-sky/30" /></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-heartopia-pink/30 mb-6 shadow-sm">
                                <Sparkles className="w-4 h-4 text-heartopia-pink animate-sparkle" />
                                <span className="text-sm font-medium text-foreground">{t.hero.badge}</span>
                            </div>
                            <h1 className="animate-float font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">
                                <span className="text-white text-shadow-soft drop-shadow-md">{t.hero.titlePrefix}</span><br />
                                <span className="bg-gradient-to-r from-heartopia-pink-dark to-heartopia-pink-darker bg-clip-text text-transparent drop-shadow-sm">{t.hero.titleMain}</span>
                            </h1>
                            <p className="mt-6 text-lg md:text-xl text-foreground font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow-lg bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30">{t.hero.description}</p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button className="btn-bouncy px-8 py-4 rounded-full bg-gradient-to-r from-heartopia-pink-dark to-heartopia-pink-darker text-white font-semibold text-lg shadow-soft-pink min-h-[44px]">{t.hero.startExploring}</button>
                                <button className="btn-bouncy px-8 py-4 rounded-full bg-white/80 backdrop-blur-md border-2 border-heartopia-pink/30 text-foreground font-semibold text-lg hover:border-heartopia-pink hover:bg-heartopia-pink/10 min-h-[44px]">{t.hero.joinCommunity}</button>
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-md">
                            <div className="relative bg-white/90 backdrop-blur-xl rounded-[32px] p-6 shadow-2xl border border-white/50">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-heartopia-green animate-pulse-soft" />
                                    <span className="font-serif font-semibold text-foreground">{t.hero.gameStatus}</span>
                                </div>
                                <div className="bg-gradient-to-br from-heartopia-sky/30 to-heartopia-sky/10 rounded-3xl p-4 mb-4 border border-white/50">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-muted-foreground">{t.hero.currentWeather}</p>
                                            <p className="font-serif text-2xl font-bold text-foreground flex items-center gap-2"><CloudRain className="w-6 h-6 text-heartopia-sky" />{t.hero.weatherRain}</p>
                                        </div>
                                        <div className="text-4xl animate-bounce-subtle">{"🌧️"}</div>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-2">{t.hero.weatherDesc}</p>
                                </div>
                                <div className="bg-gradient-to-br from-heartopia-pink/30 to-heartopia-pink/10 rounded-3xl p-4 border border-white/50">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-muted-foreground">{t.hero.nextRareSpawn}</p>
                                            <p className="font-serif text-xl font-bold text-foreground flex items-center gap-2"><Fish className="w-5 h-5 text-heartopia-pink" />{t.hero.rareSpawnName}</p>
                                        </div>
                                    </div>
                                    <div className="mt-3 flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-heartopia-pink-dark" />
                                        <span className="font-mono font-bold text-heartopia-pink-darker">{formatTime(timeLeft)}</span>
                                        <span className="text-sm text-muted-foreground">{t.hero.untilSpawn}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FEF9F3] to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 120" fill="none" className="w-full"><path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FEF9F3" /></svg></div>
            </section>

            {/* --- INTRODUCTION SECTION --- */}
            <section className="py-20 bg-[#FEF9F3] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section 1: Image on Right with Tilt */}
                    <div className="mb-32 flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-heartopia-pink/10 mb-4 text-heartopia-pink-darker text-sm font-semibold"><Heart className="w-4 h-4" /><span>Introduction</span></div>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{t.intro.section1.title}</h2>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">{t.intro.section1.content}</p>
                        </div>
                        <div className="flex-1 relative group">
                            <div className="absolute inset-0 bg-heartopia-pink/20 rounded-[40px] blur-2xl group-hover:bg-heartopia-pink/30 transition-colors duration-500" />
                            <div className="relative transform rotate-[4deg] transition-transform duration-500 hover:rotate-0">
                                <Image
                                    src={t.intro.section1.image}
                                    alt="Heartopia World Preview"
                                    width={600}
                                    height={400}
                                    className="rounded-[40px] shadow-2xl border-8 border-white object-cover aspect-[4/3]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 2: YouTube Video */}
                    <div className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{t.intro.section2.title}</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{t.intro.section2.content}</p>
                        </div>

                        {/* Video Container */}
                        <div className="relative max-w-4xl mx-auto mb-16 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-white">
                            <div className="aspect-video w-full">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={t.intro.section2.videoUrl}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {t.intro.section2.hobbies.map((hobby: any, i: number) => (
                                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-orange-100 hover:shadow-md transition-all hover:-translate-y-1">
                                    <div className="w-12 h-12 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky mb-4">
                                        {i === 0 && <Compass className="w-6 h-6" />}{i === 1 && <Palette className="w-6 h-6" />}{i === 2 && <Music className="w-6 h-6" />}{i === 3 && <Sparkles className="w-6 h-6" />}
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{hobby.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{hobby.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- QUICK ACCESS SECTION --- */}
            <section className="bg-heartopia-cream pt-10 md:pt-16 pb-16 md:pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-shadow-soft">{t.quick.title}</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{t.quick.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { id: "fish", icon: Fish, color: "#FFB5C5", bg: "bg-heartopia-pink/10", g: 47 },
                            { id: "cook", icon: ChefHat, color: "#A8D4ED", bg: "bg-heartopia-sky/10", g: 83 },
                            { id: "decorate", icon: Sofa, color: "#A89BC8", bg: "bg-[#E5E3EE]", g: 156 },
                            { id: "explore", icon: Compass, color: "#FFB74D", bg: "bg-[#FFD4A3]/30", g: 62 },
                        ].map((card) => {
                            const Icon = card.icon;
                            return (
                                <a
                                    key={card.id}
                                    href={
                                        card.id === "fish" ? `/${locale}/guides/fishing` :
                                            card.id === "cook" ? `/${locale}/recipes/mushroom-pie` :
                                                card.id === "decorate" ? `/${locale}/guides/housing` :
                                                    card.id === "explore" ? `/${locale}/guides/fish-locations` : "#"
                                    }
                                    className="group relative bg-white rounded-3xl p-6 border-2 transition-all duration-300 btn-bouncy overflow-hidden hover:shadow-xl hover:translate-y-[-4px]"
                                    style={{ borderColor: `${card.color}66` }} // 40% opacity border
                                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = card.color)}
                                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${card.color}66`)}
                                >
                                    <div
                                        className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${card.bg}`}
                                    >
                                        <Icon className="w-7 h-7" style={{ color: card.color }} />
                                    </div>
                                    <h3 className="font-serif text-xl font-bold mb-2 text-foreground transition-colors">{t.quick[card.id as keyof typeof t.quick]}</h3>
                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{t.quick[`${card.id}Desc` as keyof typeof t.quick]}</p>
                                    <div className="flex items-center justify-end">
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" style={{ color: card.color }} />
                                    </div>
                                    {/* Subtle background glow on hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none"
                                        style={{ backgroundColor: card.color }}
                                    />
                                </a>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* --- TRENDING GUIDES SECTION --- */}
            <section className="bg-gradient-to-b from-heartopia-cream to-white py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-heartopia-pink/10 mb-3"><TrendingUp className="w-4 h-4 text-heartopia-pink" /><span className="text-sm font-medium text-heartopia-pink-darker">{t.trending.badge}</span></div>
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-shadow-soft">{t.trending.titlePrefix} <span className="bg-gradient-to-r from-heartopia-pink-dark to-heartopia-pink-darker bg-clip-text text-transparent">{t.trending.titleMain}</span></h2>
                        </div>
                        <Link href={`/${locale}/platforms`} className="btn-bouncy px-6 py-3 rounded-full bg-heartopia-cream border-2 border-heartopia-pink/30 text-foreground font-semibold hover:border-heartopia-pink hover:bg-heartopia-pink/10 min-h-[44px]">{t.trending.viewAll}</Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {trendingGuidesData.map((guide, index) => {
                            const config = rarityConfig[guide.rarity as keyof typeof rarityConfig];
                            return (
                                <Link key={`${guide.id}-${index}`} href={`/${locale}${guide.href}`} className={`group relative bg-white rounded-3xl p-5 border-2 ${config.border} hover:border-heartopia-pink transition-all duration-300 btn-bouncy hover:-translate-y-2 ${config.glow}`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${config.badge} capitalize`}>{t.trending[guide.rarity as keyof typeof t.trending]}</span>
                                        {guide.rarity === "legendary" && <Sparkles className="w-5 h-5 text-heartopia-orange animate-sparkle" />}
                                    </div>
                                    <div className="relative w-full aspect-square max-w-[120px] mx-auto mb-4">
                                        <div className="absolute inset-0 bg-gradient-to-br from-heartopia-pink/10 to-heartopia-sky/10 rounded-2xl" />
                                        <div className="relative w-full h-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">{guide.image}</div>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{t.trending[guide.category as keyof typeof t.trending]}</span>
                                        <h3 className="font-serif text-lg font-bold text-foreground mt-1 group-hover:text-heartopia-pink-darker transition-colors">{t.trending[guide.id as keyof typeof t.trending]}</h3>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* --- RESIDENTS SECTION --- */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-heartopia-sky/10 mb-4 text-heartopia-sky-darker text-sm font-semibold">
                            <Users className="w-4 h-4" />
                            <span>Community</span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{t.residents.title}</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.residents.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: t.residents.npc1Name, desc: t.residents.npc1Desc, emoji: "👵", color: "bg-blue-50" },
                            { name: t.residents.npc2Name, desc: t.residents.npc2Desc, emoji: "👩‍🎨", color: "bg-pink-50" },
                            { name: t.residents.npc3Name, desc: t.residents.npc3Desc, emoji: "🕵️", color: "bg-purple-50" }
                        ].map((npc, i) => (
                            <div key={i} className="group relative bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <div className={`w-20 h-20 ${npc.color} rounded-3xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform`}>
                                    {npc.emoji}
                                </div>
                                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">{npc.name}</h3>
                                <p className="text-muted-foreground leading-relaxed italic">"{npc.desc}"</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button className="btn-bouncy px-8 py-4 rounded-full bg-white border-2 border-heartopia-sky/30 text-heartopia-sky-darker font-bold hover:bg-heartopia-sky/5 transition-colors">
                            {t.residents.button}
                        </button>
                    </div>
                </div>
            </section>

            {/* --- EVENTS SECTION --- */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-heartopia-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-heartopia-orange/10 mb-6 text-heartopia-orange text-sm font-semibold">
                                <CloudSun className="w-4 h-4" />
                                <span>Weather & Nature</span>
                            </div>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">{t.events.title}</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-10">{t.events.description}</p>

                            <div className="space-y-8">
                                <Link href={`/${locale}/events/onsen-egg-all-locations`} className="flex gap-6 p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-white hover:bg-white transition-all hover:shadow-lg hover:-translate-y-1 block group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-300 to-orange-300 flex items-center justify-center text-white shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 group-hover:text-heartopia-pink transition-colors">{t.events.item1Title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{t.events.item1Desc}</p>
                                    </div>
                                </Link>

                                <Link href={`/${locale}/events/meteor-shower`} className="flex gap-6 p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-white hover:bg-white transition-all hover:shadow-lg hover:-translate-y-1 block group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-green-300 to-emerald-400 flex items-center justify-center text-white shadow-lg shadow-green-200 group-hover:scale-110 transition-transform">
                                        <Compass className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 group-hover:text-heartopia-pink transition-colors">{t.events.item2Title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{t.events.item2Desc}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="flex-1 w-full max-w-lg aspect-square relative group">
                            <div className="absolute inset-0 bg-heartopia-sky/20 rounded-[60px] blur-3xl animate-pulse group-hover:bg-heartopia-sky/30 transition-colors" />
                            <div className="relative w-full h-full rounded-[60px] border-8 border-white shadow-2xl overflow-hidden">
                                <Image
                                    src={t.events.image}
                                    alt="Heartopia Magic of Nature"
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MASTERY SECTION --- */}
            <section className="py-20 bg-heartopia-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{t.mastery.title}</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.mastery.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: t.mastery.item1Title, desc: t.mastery.item1Desc, icon: Fish, color: "text-blue-500", bg: "bg-blue-50", href: `/${locale}/guides/fishing` },
                            { title: t.mastery.item2Title, desc: t.mastery.item2Desc, icon: Play, color: "text-orange-500", bg: "bg-orange-50", href: `/${locale}/recipes/mushroom-pie` },
                            { title: t.mastery.item3Title, desc: t.mastery.item3Desc, icon: Palette, color: "text-pink-500", bg: "bg-pink-50", href: `/${locale}/guides/housing` }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <Link key={i} href={item.href} className="bg-white p-8 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group block">
                                    <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-4 text-foreground group-hover:text-heartopia-pink transition-colors">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                                    <div className="mt-6 pt-6 border-t border-slate-50 flex items-center text-sm font-bold text-foreground group-hover:gap-2 transition-all">
                                        <span>Learn More</span>
                                        <ArrowRight className="w-4 h-4 ml-2 text-heartopia-pink" />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* --- ROADMAP SECTION --- */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-heartopia-pink/10 mb-4 text-heartopia-pink-darker text-sm font-semibold">
                            <MapPin className="w-4 h-4" />
                            <span>Beginner Guide</span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{t.roadmap.title}</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.roadmap.subtitle}</p>
                    </div>

                    <div className="relative">
                        {/* Connection Line (Desktop) */}


                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                            {[
                                { title: t.roadmap.step1Title, desc: t.roadmap.step1Desc, icon: BookOpen, color: "bg-heartopia-pink" },
                                { title: t.roadmap.step2Title, desc: t.roadmap.step2Desc, icon: Compass, color: "bg-heartopia-sky" },
                                { title: t.roadmap.step3Title, desc: t.roadmap.step3Desc, icon: Users, color: "bg-heartopia-orange" }
                            ].map((step, i) => {
                                const Icon = step.icon;
                                return (
                                    <div key={i} className="flex flex-col items-center text-center">
                                        <div className="w-20 h-20 rounded-full bg-white border-8 border-heartopia-cream shadow-xl flex items-center justify-center relative z-10 mb-8">
                                            <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-white flex items-center justify-center text-sm font-bold border-4 border-white">
                                                {i + 1}
                                            </div>
                                        </div>
                                        <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed max-w-xs">{step.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- APPEALING SECTION (Relocated) --- */}
            <section className="py-20 bg-[#FEF9F3]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{t.intro.section3.title}</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.intro.section3.content}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {t.intro.section3.points.map((point: any, i: number) => (
                            <div key={i} className="flex gap-4 p-6 bg-white rounded-3xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-heartopia-pink/20 flex items-center justify-center text-heartopia-pink-darker font-bold">{i + 1}</div>
                                <div><h3 className="font-bold text-lg mb-1">{point.title}</h3><p className="text-muted-foreground leading-relaxed">{point.desc}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="faq" className="py-16 md:py-24 relative overflow-hidden">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-heartopia-pink/10 mb-4 text-heartopia-pink-darker font-semibold text-sm">
                            <Sparkles className="w-4 h-4" />
                            <span>Common Questions</span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {t.faq.title}
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">{t.faq.subtitle}</p>
                    </div>
                    <div className="glass rounded-3xl p-6 md:p-8 shadow-soft-blue border border-white/40 dark:border-white/10 dark:bg-card/40 backdrop-blur-md">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                <AccordionItem key={i} value={`it-${i}`} className="border-none bg-white/50 dark:bg-card/50 rounded-2xl px-4 transition-all duration-300 hover:bg-white/80 dark:hover:bg-card/80">
                                    <AccordionTrigger className="text-left text-foreground/90 font-semibold hover:text-heartopia-pink-darker py-4 text-base md:text-lg hover:no-underline">{t.faq[`q${i}` as keyof typeof t.faq]}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                                        <div dangerouslySetInnerHTML={{ __html: t.faq[`a${i}` as keyof typeof t.faq] }} />
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            <Footer t={t.footer} locale={locale} />
        </main >
    )
}

function Sofa(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
            <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="M2 16v3" />
            <path d="M22 16v3" />
            <path d="M7 9v1" />
            <path d="M17 9v1" />
        </svg>
    )
}

function ChefHat(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M6 13.8a4.41 4.41 0 1 1 2.5-7.6 5 5 0 0 1 7 0 4.41 4.41 0 1 1 2.5 7.6 4.41 4.41 0 0 1-12 0" />
            <path d="M6 17h12" />
            <path d="M6 13v4" />
            <path d="M18 13v4" />
        </svg>
    )
}
