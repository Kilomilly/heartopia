import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
    CloudRain,
    Moon,
    Sun,
    MapPin,
    Info,
    Search,
    Filter,
    Droplets,
    Wind
} from "lucide-react"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/heartopia/navbar"
import { Footer } from "@/components/heartopia/footer"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")

    return {
        title: t.fishLocations.metaTitle,
        description: t.fishLocations.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/fishing`,
            languages: {
                "en": "https://theheartopia.com/en/fishing",
                "th": "https://theheartopia.com/th/fishing",
                "pt": "https://theheartopia.com/pt/fishing",
                "es": "https://theheartopia.com/es/fishing",
                "id": "https://theheartopia.com/id/fishing",
                "x-default": "https://theheartopia.com/en/fishing",
            },
        },
        openGraph: {
            title: t.fishLocations.metaTitle,
            description: t.fishLocations.metaDesc,
            url: `/${locale}/fishing`,
            siteName: "Heartopia Guide",
            images: [
                {
                    url: "/images/hero-banner.webp",
                    width: 1200,
                    height: 630,
                    alt: "Fishing in Heartopia Guide",
                },
            ],
            locale: locale === "th" ? "th_TH" : (locale === "id" ? "id_ID" : "en_US"),
            type: "article",
        },
    }
}

// JSON-LD Schema
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Fishing in Heartopia: Complete Fish Locations & Time Guide",
            "image": ["https://theheartopia.com/fishing-hero.jpg"],
            "author": {
                "@type": "Organization",
                "name": "Heartopia Guide"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Heartopia Guide",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://theheartopia.com/logo.png"
                }
            },
            "datePublished": "2024-03-20T08:00:00+08:00",
            "description": "Master Heartopia fishing with our guide. Discover all Heartopia fish locations, rare catches, and how time and weather affect your success."
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Where is the best place to fish in Heartopia?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "There isn’t a single best spot — each water type favors different fish. Start with nearby lakes for steady catches, then explore rivers and coastal waters for rarer silhouettes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do fish locations work?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most fish are tied to a mix of water type, time windows, and weather. If a fish feels “missing,” check the conditions rather than the bait."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I catch Seahorse in Heartopia?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Seahorse sightings are typically linked to special conditions. Look for the right weather, fish during the recommended time window, and focus on calm coastal waters if available."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does rain or rainbow weather matter?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Certain rare encounters are more likely when the weather shifts. If you see rain or a rainbow, it’s worth visiting your favorite spot again."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why doesn’t my game match this guide?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Heartopia may change across updates, events, and progress states. This guide aims to be helpful, not strict — if you notice differences, we’ll keep refining it."
                    }
                }
            ]
        }
    ]
}

export default async function FishingPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")

    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-heartopia-pink/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar t={t.navbar} locale={locale} />

            {/* Decorative background blobs */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-heartopia-sky/20 rounded-full blur-[100px] animate-pulse-soft" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-heartopia-pink/10 rounded-full blur-[100px] animate-pulse-soft delay-1000" />
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 overflow-hidden">
                <div className="container mx-auto max-w-4xl text-center space-y-6 animate-float">
                    <Badge variant="outline" className="px-4 py-1 border-heartopia-sky/50 text-heartopia-sky bg-heartopia-sky/5 backdrop-blur-sm rounded-full text-sm font-medium uppercase tracking-wider">
                        Game Guide
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-heartopia-sky to-heartopia-pink-darker pb-2 leading-tight">
                        Fishing in Heartopia
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        A quiet guide to the waters of <Link href="/" className="text-heartopia-pink-darker hover:underline decoration-heartopia-pink/50 underline-offset-4">Heartopia</Link> — when to fish, where to look, and what you might meet along the way.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                        <Button variant="outline" className="rounded-full border-heartopia-sky/30 hover:bg-heartopia-sky/10 text-foreground btn-bouncy h-12 px-6">
                            <Search className="mr-2 h-4 w-4 text-heartopia-sky" /> Explore fish
                        </Button>
                        <Button variant="outline" className="rounded-full border-heartopia-green/30 hover:bg-heartopia-green/10 text-foreground btn-bouncy h-12 px-6">
                            <MapPin className="mr-2 h-4 w-4 text-heartopia-green" /> Find locations
                        </Button>
                        <Button variant="outline" className="rounded-full border-heartopia-orange/30 hover:bg-heartopia-orange/10 text-foreground btn-bouncy h-12 px-6">
                            <Info className="mr-2 h-4 w-4 text-heartopia-orange" /> Learn the basics
                        </Button>
                    </div>
                </div>
            </section>

            {/* Today's Guide Section */}
            <section className="py-8 px-4">
                <div className="container mx-auto max-w-4xl">
                    <Card className="border-none shadow-soft-blue bg-white/60 dark:bg-card/40 backdrop-blur-md overflow-hidden relative group hover:shadow-lg transition-all duration-500">
                        <div className="absolute top-0 left-0 w-2 h-full bg-heartopia-sky" />
                        <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8 items-center">
                            <div className="md:col-span-2 space-y-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Sun className="h-5 w-5 text-heartopia-orange animate-spin-slow" />
                                    <h2 className="text-xl font-bold text-foreground">Today's Guide</h2>
                                </div>
                                <p className="text-muted-foreground">
                                    Time and weather shape what you’ll see. Use this as a gentle reference — availability can vary by <Link href="/updates" className="text-heartopia-sky hover:underline">updates</Link> and your progress.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                                    <div className="flex items-center gap-3 bg-white/50 dark:bg-black/10 p-3 rounded-xl">
                                        <div className="bg-heartopia-sky/20 p-2 rounded-full text-heartopia-sky">
                                            <Moon className="h-4 w-4" />
                                        </div>
                                        <div className="text-sm">
                                            <span className="font-semibold block text-foreground">Time</span>
                                            <span className="text-muted-foreground text-xs">Night waters tend to reveal rarer silhouettes.</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/50 dark:bg-black/10 p-3 rounded-xl">
                                        <div className="bg-heartopia-sky/20 p-2 rounded-full text-heartopia-sky">
                                            <CloudRain className="h-4 w-4" />
                                        </div>
                                        <div className="text-sm">
                                            <span className="font-semibold block text-foreground">Weather</span>
                                            <span className="text-muted-foreground text-xs">Rain can open up special encounters.</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/50 dark:bg-black/10 p-3 rounded-xl">
                                        <div className="bg-heartopia-sky/20 p-2 rounded-full text-heartopia-sky">
                                            <Search className="h-4 w-4" />
                                        </div>
                                        <div className="text-sm">
                                            <span className="font-semibold block text-foreground">Look for</span>
                                            <span className="text-muted-foreground text-xs">Rare sightings may appear under specific conditions.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Featured Fish Card */}
                            <div className="bg-gradient-to-br from-heartopia-sky/20 to-heartopia-pink/20 rounded-2xl p-4 text-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                                <div className="absolute -right-4 -top-4 bg-white/80 dark:bg-black/20 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider text-heartopia-pink-darker shadow-sm z-10">
                                    Rare Spotlight
                                </div>
                                <div className="relative h-24 w-full mb-3 flex items-center justify-center">
                                    {/* Placeholder for Seahorse Image */}
                                    <div className="text-6xl animate-bounce-subtle">🐡</div>
                                </div>
                                <h3 className="font-bold text-lg text-foreground">Seahorse</h3>
                                <p className="text-xs text-muted-foreground mt-1">Often tied to special weather and calm waters.</p>
                            </div>
                        </div>
                        <div className="px-6 pb-4 md:px-8">
                            <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest text-right">
                                Disclaimer: Conditions may differ depending on your save, events, and game version.
                            </p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-12 px-4 relative">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-8 space-y-2">
                        <h2 className="text-3xl font-bold text-foreground">Fishing Locations</h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">Choose a spot, then check the conditions. Every place has its own rhythm.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {["All fish", "Rain-only", "Night-only", "Rare sightings", "Show: Seahorse"].map((filter, i) => (
                            <button key={i} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-heartopia-sky text-white shadow-soft-blue' : 'bg-white/50 text-foreground/70 hover:bg-white hover:text-foreground'}`}>
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Static Map Visual Phase 1 */}
                    <div className="aspect-[16/9] w-full bg-heartopia-green/10 rounded-3xl relative overflow-hidden shadow-inner border border-white/50 group">
                        <div className="absolute inset-0 bg-[url('/placeholder-map.jpg')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>

                        {/* Decorative Map Markers */}
                        <div className="absolute top-1/3 left-1/4 animate-float cursor-pointer">
                            <div className="bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                                <MapPin className="text-heartopia-pink h-6 w-6" />
                            </div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white/90 dark:bg-card/90 backdrop-blur-md p-3 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                                <h4 className="font-bold text-sm text-foreground">Misty Lake</h4>
                                <p className="text-xs text-muted-foreground mt-1">Common: Carp, Bass</p>
                                <p className="text-xs text-heartopia-pink-dark font-medium mt-1">Rec. Bait: Worms</p>
                            </div>
                        </div>

                        <div className="absolute bottom-1/3 right-1/3 animate-float delay-700 cursor-pointer">
                            <div className="bg-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                                <MapPin className="text-heartopia-sky h-6 w-6" />
                            </div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white/90 dark:bg-card/90 backdrop-blur-md p-3 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                                <h4 className="font-bold text-sm text-foreground">Crystal River</h4>
                                <p className="text-xs text-muted-foreground mt-1">Common: Trout, Salmon</p>
                                <p className="text-xs text-heartopia-sky font-medium mt-1">Rec. Bait: Fly</p>
                            </div>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <p className="text-foreground/30 font-bold text-4xl uppercase tracking-[1em] select-none">World Map</p>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <Button variant="ghost" className="text-muted-foreground hover:text-heartopia-sky font-medium">
                            View this location’s details →
                        </Button>
                    </div>
                </div>
            </section>

            {/* Intro Text for SEO */}
            <section className="py-8 px-4">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl font-bold mb-4 text-foreground">How Fishing Works in Heartopia</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Fishing in <strong className="text-heartopia-pink-darker">Heartopia</strong> is based on water type, time of day, and weather conditions. Understanding how <strong className="text-heartopia-sky">Heartopia fishing</strong> works will help you locate fish more consistently and recognize rare encounters.
                    </p>
                </div>
            </section>

            {/* Fish Database */}
            <section className="py-16 px-4 bg-gradient-to-b from-transparent to-white/40 dark:to-transparent">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground">Fish Index</h2>
                            <p className="text-muted-foreground mt-2">Browse by water type, time, and weather. Tap any fish to see where it appears and what conditions it prefers.</p>
                        </div>
                        <div className="relative w-full md:w-72">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input className="pl-10 bg-white/70 dark:bg-card/70 border-white/50 backdrop-blur-sm rounded-full" placeholder="Search fish by name…" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {/* Fish Cards Placeholder Generator */}
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div key={i} className="group relative bg-white/60 dark:bg-card/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-sm hover:shadow-soft-pink transition-all hover:-translate-y-1 cursor-pointer">
                                <div className="absolute top-3 right-3">
                                    <div className={`w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-heartopia-green' : i % 2 === 0 ? 'bg-heartopia-sky' : 'bg-heartopia-orange'}`}></div>
                                </div>
                                <div className="aspect-square flex items-center justify-center text-4xl mb-2 group-hover:scale-110 transition-transform">
                                    {['🐟', '🐠', '🐡', '🦈', '🦀'][i % 5]}
                                </div>
                                <h3 className="font-bold text-foreground text-center">Fish Name {i + 1}</h3>
                                <div className="flex flex-wrap gap-1 justify-center mt-2">
                                    <span className="text-[10px] px-2 py-0.5 bg-muted rounded-full text-muted-foreground uppercase tracking-wide">
                                        {['River', 'Ocean', 'Pond'][i % 3]}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location List Fallback */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold mb-6 text-foreground">All Fishing Spots</h2>
                    <p className="text-muted-foreground mb-6">Prefer a list? Here are all known spots — each links to a detailed breakdown.</p>

                    <div className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex flex-col md:flex-row items-center gap-4 bg-white/50 dark:bg-card/50 p-4 rounded-2xl border border-border/50 hover:bg-white/80 transition-colors">
                                <div className="h-16 w-16 bg-muted rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="text-muted-foreground h-6 w-6" />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="font-bold text-lg text-foreground">Sunny Bay {i + 1}</h3>
                                    <p className="text-sm text-muted-foreground">Detailed notes about <strong className="text-heartopia-sky">Heartopia fish locations</strong> in this area.</p>
                                </div>
                                <div className="flex gap-4 text-sm text-muted-foreground">
                                    <div className="flex flex-col items-center md:items-end">
                                        <span className="text-xs uppercase font-bold text-heartopia-pink-darker">Best Conditions</span>
                                        <span>Clear • Day</span>
                                    </div>
                                    <div className="flex flex-col items-center md:items-end">
                                        <span className="text-xs uppercase font-bold text-heartopia-sky">Water Type</span>
                                        <span>Ocean</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Basics Section */}
            <section className="py-12 px-4 text-center">
                <div className="container mx-auto max-w-3xl bg-heartopia-warm-cream/50 dark:bg-card/30 p-8 rounded-3xl border border-orange-100 dark:border-white/5">
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Fishing Basics</h2>
                    <ul className="space-y-4 text-left inline-block max-w-xl">
                        <li className="flex gap-3 items-start">
                            <div className="bg-heartopia-orange/20 p-1 rounded-full mt-1 shrink-0">
                                <div className="w-2 h-2 bg-heartopia-orange rounded-full" />
                            </div>
                            <span className="text-muted-foreground">Fish shadows hint at size, not certainty. Keep an eye on the water surface.</span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="bg-heartopia-sky/20 p-1 rounded-full mt-1 shrink-0">
                                <div className="w-2 h-2 bg-heartopia-sky rounded-full" />
                            </div>
                            <span className="text-muted-foreground">Some encounters only appear during specific weather to encourage checking back often.</span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <div className="bg-heartopia-pink/20 p-1 rounded-full mt-1 shrink-0">
                                <div className="w-2 h-2 bg-heartopia-pink rounded-full" />
                            </div>
                            <span className="text-muted-foreground">If something feels rare, it usually is — take your time and enjoy the scenery.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Fishing FAQ</h2>

                    <div className="glass rounded-3xl p-6 md:p-8 shadow-soft-green border border-white/40 dark:border-white/10 dark:bg-card/40 backdrop-blur-md">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {[
                                {
                                    id: "faq-1",
                                    q: "Where is the best place to fish in Heartopia?",
                                    a: "There isn’t a single best spot — each water type favors different fish. Start with nearby lakes for steady catches, then explore rivers and coastal waters for rarer silhouettes."
                                },
                                {
                                    id: "faq-2",
                                    q: "How do fish locations work?",
                                    a: "Most fish are tied to a mix of water type, time windows, and weather. If a fish feels “missing,” check the conditions rather than the bait."
                                },
                                {
                                    id: "faq-3",
                                    q: "How do I catch Seahorse in Heartopia?",
                                    a: "Seahorse sightings are typically linked to special conditions. Look for the right weather, fish during the recommended time window, and focus on calm coastal waters if available."
                                },
                                {
                                    id: "faq-4",
                                    q: "Does rain or rainbow weather matter?",
                                    a: "Yes. Certain rare encounters are more likely when the weather shifts. If you see rain or a rainbow, it’s worth visiting your favorite spot again."
                                },
                                {
                                    id: "faq-5",
                                    q: "Why doesn’t my game match this guide?",
                                    a: "Heartopia may change across updates, events, and progress states. This guide aims to be helpful, not strict — if you notice differences, we’ll keep refining it."
                                }
                            ].map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="border-none bg-white/50 dark:bg-card/50 rounded-2xl px-4 transition-all duration-300 hover:bg-white/80 dark:hover:bg-card/80 hover:shadow-sm"
                                >
                                    <AccordionTrigger className="text-left text-foreground/90 font-semibold hover:text-heartopia-green transition-colors py-4 text-base md:text-lg hover:no-underline">
                                        {item.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                                        {item.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            <Footer t={t.footer} locale={locale} />
        </main>
    )
}
