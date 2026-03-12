import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import {
    ChevronRight,
    Home,
    Music,
    Piano as PianoIcon,
    Sparkles,
    Users,
    Volume2,
    HelpCircle,
    ArrowRight,
    Settings
} from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Navbar } from "@/components/heartopia/navbar"
import { Footer } from "@/components/heartopia/footer"
import { Badge } from "@/components/ui/badge"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")

    return {
        title: t.piano.metaTitle,
        description: t.piano.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/piano`,
            languages: {
                "en": "https://theheartopia.com/en/piano",
                "th": "https://theheartopia.com/th/piano",
                "pt": "https://theheartopia.com/pt/piano",
                "es": "https://theheartopia.com/es/piano",
                "x-default": "https://theheartopia.com/en/piano",
            },
        },
        openGraph: {
            title: t.piano.metaTitle,
            description: t.piano.metaDesc,
            url: `https://theheartopia.com/${locale}/piano`,
            siteName: 'Heartopia Hub',
            locale: locale,
            type: 'article',
            images: ['/images/guides/piano-room.webp'],
        },
    }
}

export default async function PianoPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const p = t.piano

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": p.faq.q1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": p.faq.a1
                }
            },
            {
                "@type": "Question",
                "name": p.faq.q2,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": p.faq.a2
                }
            },
            {
                "@type": "Question",
                "name": p.faq.q3,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": p.faq.a3
                }
            },
            {
                "@type": "Question",
                "name": p.faq.q4,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": p.faq.a4
                }
            },
            {
                "@type": "Question",
                "name": p.faq.q5,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": p.faq.a5
                }
            }
        ]
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": t.navbar.home,
                "item": `https://theheartopia.com/${locale}`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": t.navbar.hobbyGuides,
                "item": `https://theheartopia.com/${locale}/guides/fishing`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": p.breadcrumb,
                "item": `https://theheartopia.com/${locale}/piano`
            }
        ]
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": p.heroTitle,
        "description": p.metaDesc,
        "image": "https://theheartopia.com/images/guides/piano-room.webp",
        "author": {
            "@type": "Organization",
            "name": "Heartopia Hub"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Heartopia Hub",
            "logo": {
                "@type": "ImageObject",
                "url": "https://theheartopia.com/images/logo.png"
            }
        },
        "datePublished": "2026-01-30",
        "dateModified": "2026-01-30"
    }

    return (
        <main className="min-h-screen bg-heartopia-cream">
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <Navbar t={t.navbar} locale={locale} />

            {/* Breadcrumbs */}
            <nav className="pt-32 pb-6 px-4">
                <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-muted-foreground">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span>{t.navbar.hobbyGuides}</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{p.breadcrumb}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12">
                        <Badge className="bg-heartopia-pink/10 text-heartopia-pink hover:bg-heartopia-pink/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold">
                            {p.badgeMusic}
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {p.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                            {p.heroDesc}
                        </p>
                        <p className="text-lg text-heartopia-pink-darker font-medium bg-heartopia-pink/10 p-4 rounded-2xl border border-heartopia-pink/20 mb-8">
                            {p.intro}
                        </p>
                        <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white mb-12">
                            <Image
                                src="/images/guides/piano-room.webp"
                                alt="Heartopia Piano Guide - Cozy Room with Grand Piano"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </header>

                    {/* How to Get Your First Piano */}
                    <section className="mb-16 bg-white rounded-3xl p-8 shadow-sm border border-orange-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center">
                                <PianoIcon className="w-6 h-6 text-heartopia-pink" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{p.howToGet.title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6">{p.howToGet.desc}</p>

                        <div className="space-y-6">
                            {/* Purchasing from Store */}
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 border border-purple-100">
                                <h3 className="font-bold text-xl text-foreground mb-3">{p.howToGet.store.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{p.howToGet.store.desc}</p>
                            </div>

                            {/* Leveling Up */}
                            <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-6 border border-blue-100">
                                <h3 className="font-bold text-xl text-foreground mb-3">{p.howToGet.leveling.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{p.howToGet.leveling.desc}</p>
                            </div>
                        </div>
                    </section>

                    {/* Mastering Piano Mechanics */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center">
                                <Settings className="w-6 h-6 text-heartopia-sky" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{p.mechanics.title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6">{p.mechanics.desc}</p>

                        <div className="space-y-6">
                            {/* Basic vs Free Play */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100">
                                <h3 className="font-bold text-xl text-foreground mb-3">{p.mechanics.modes.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{p.mechanics.modes.desc}</p>
                            </div>

                            {/* Key Mapping */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-orange-100">
                                <h3 className="font-bold text-xl text-foreground mb-3">{p.mechanics.mapping.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">{p.mechanics.mapping.desc}</p>
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        src="/images/guides/girl playing piano.webp"
                                        alt="Anime girl playing piano in Heartopia"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Sheet Music Section */}
                    <section className="mb-16 bg-gradient-to-br from-heartopia-pink/5 to-heartopia-sky/5 rounded-3xl p-8 border border-heartopia-pink/20">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center">
                                <Music className="w-6 h-6 text-heartopia-pink" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{p.sheetMusic.title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-8">{p.sheetMusic.desc}</p>

                        <div className="bg-white rounded-2xl p-6 mb-6">
                            <h3 className="font-bold text-xl text-foreground mb-4">{p.sheetMusic.popular.title}</h3>
                            <p className="text-muted-foreground mb-4">{p.sheetMusic.popular.desc}</p>

                            <div className="space-y-3 mb-6">
                                <div className="bg-heartopia-cream p-4 rounded-xl">
                                    <p className="font-mono text-sm text-foreground">{p.sheetMusic.popular.twinkle}</p>
                                </div>
                                <div className="bg-heartopia-cream p-4 rounded-xl">
                                    <p className="text-sm text-muted-foreground">{p.sheetMusic.popular.lullaby}</p>
                                </div>
                            </div>

                            <p className="text-sm text-muted-foreground italic">{p.sheetMusic.popular.footer}</p>
                        </div>
                    </section>

                    {/* Interactive Piano Simulator */}
                    <section className="mb-16">
                        <div className="heartopia-piano-container bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg border-2 border-heartopia-pink/20">
                            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">{p.simulator.title}</h3>

                            <div className="piano-row high flex justify-center gap-3 mb-4">
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-blue-200 hover:bg-blue-50 active:translate-y-1"><span>1̇</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-blue-200 hover:bg-blue-50 active:translate-y-1"><span>2̇</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-blue-200 hover:bg-blue-50 active:translate-y-1"><span>3̇</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-blue-200 hover:bg-blue-50 active:translate-y-1"><span>4̇</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-blue-200 hover:bg-blue-50 active:translate-y-1"><span>5̇</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-blue-200 hover:bg-blue-50 active:translate-y-1"><span>6̇</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-blue-200 hover:bg-blue-50 active:translate-y-1"><span>7̇</span></div>
                            </div>

                            <div className="piano-row middle flex justify-center gap-3 mb-4">
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-heartopia-pink hover:bg-heartopia-pink/10 active:translate-y-1"><span>1</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-heartopia-pink hover:bg-heartopia-pink/10 active:translate-y-1"><span>2</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-heartopia-pink hover:bg-heartopia-pink/10 active:translate-y-1"><span>3</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-heartopia-pink hover:bg-heartopia-pink/10 active:translate-y-1"><span>4</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-heartopia-pink hover:bg-heartopia-pink/10 active:translate-y-1"><span>5</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-heartopia-pink hover:bg-heartopia-pink/10 active:translate-y-1"><span>6</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-heartopia-pink hover:bg-heartopia-pink/10 active:translate-y-1"><span>7</span></div>
                            </div>

                            <div className="piano-row low flex justify-center gap-3 mb-6">
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-gray-300 hover:bg-gray-50 active:translate-y-1"><span>1̣</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-gray-300 hover:bg-gray-50 active:translate-y-1"><span>2̣</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-gray-300 hover:bg-gray-50 active:translate-y-1"><span>3̣</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-gray-300 hover:bg-gray-50 active:translate-y-1"><span>4̣</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-gray-300 hover:bg-gray-50 active:translate-y-1"><span>5̣</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-gray-300 hover:bg-gray-50 active:translate-y-1"><span>6̣</span></div>
                                <div className="piano-btn w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:shadow-lg transition-all cursor-pointer border-2 border-gray-300 hover:bg-gray-50 active:translate-y-1"><span>7̣</span></div>
                            </div>

                            <p className="piano-tip text-center text-sm text-muted-foreground italic bg-white/50 p-3 rounded-xl">
                                {p.simulator.tip}
                            </p>
                        </div>
                    </section>

                    {/* Trending Song Codes */}
                    <section className="mb-16 bg-white rounded-3xl p-8 shadow-sm border border-orange-100">
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-4">{p.trending.title}</h2>
                        <p className="text-muted-foreground mb-6">{p.trending.desc}</p>

                        <div className="space-y-4">
                            {p.trending.songs.map((song: any, index: number) => (
                                <div key={index} className="bg-heartopia-cream p-5 rounded-2xl hover:bg-heartopia-pink/5 transition-colors border border-heartopia-pink/10">
                                    <h4 className="font-bold text-foreground mb-2">{song.name}</h4>
                                    <p className="font-mono text-sm text-muted-foreground bg-white p-3 rounded-lg">{song.code}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Designing Perfect Piano Room */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-purple-600" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{p.designing.title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6">{p.designing.desc}</p>

                        <div className="space-y-6">
                            {/* Acoustic Layouts */}
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 border border-amber-100">
                                <h3 className="font-bold text-xl text-foreground mb-3">{p.designing.acoustic.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">{p.designing.acoustic.desc}</p>
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        src="/images/guides/piano-room.webp"
                                        alt="Cozy room design with piano in Heartopia"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Group Jam Sessions */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 border border-green-100">
                                <div className="flex items-start gap-3">
                                    <Users className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-xl text-foreground mb-3">{p.designing.group.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{p.designing.group.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Troubleshooting */}
                    <section className="mb-16 bg-amber-50 border-2 border-amber-200 rounded-3xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Volume2 className="w-8 h-8 text-amber-600" />
                            <h2 className="font-serif text-2xl font-bold text-amber-900">{p.troubleshooting.title}</h2>
                        </div>
                        <p className="text-amber-800 mb-6">{p.troubleshooting.desc}</p>

                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded-xl">
                                <p className="text-foreground">{p.troubleshooting.latency}</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl">
                                <p className="text-foreground">{p.troubleshooting.missing}</p>
                            </div>
                        </div>
                    </section>

                    {/* Why Piano is Must-Have */}
                    <section className="mb-16 bg-gradient-to-br from-heartopia-pink/10 to-heartopia-sky/10 rounded-3xl p-8 border-2 border-heartopia-pink/30">
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-4">{p.why.title}</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{p.why.desc}</p>
                        <p className="text-heartopia-pink-darker font-medium text-lg">{p.why.cta}</p>
                    </section>

                    {/* FAQ Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center">
                                <HelpCircle className="w-6 h-6 text-heartopia-pink" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{p.faq.title}</h2>
                        </div>

                        <Accordion type="single" collapsible className="space-y-4">
                            {[
                                { q: p.faq.q1, a: p.faq.a1 },
                                { q: p.faq.q2, a: p.faq.a2 },
                                { q: p.faq.q3, a: p.faq.a3 },
                                { q: p.faq.q4, a: p.faq.a4 },
                                { q: p.faq.q5, a: p.faq.a5 }
                            ].map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-white rounded-2xl border border-orange-100 px-6 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-heartopia-pink-dark py-5 hover:no-underline">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>

                    {/* Related Guides */}
                    <section className="bg-gradient-to-br from-heartopia-cream to-white rounded-3xl p-8 border border-orange-100">
                        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">{p.relatedTitle}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link
                                href={`/${locale}/guides/fishing`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {p.relatedFishing}
                                </span>
                            </Link>
                            <Link
                                href={`/${locale}/where-is-doris`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {p.relatedDoris}
                                </span>
                            </Link>
                            <Link
                                href={`/${locale}`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {p.relatedHome}
                                </span>
                            </Link>
                            <Link
                                href={`/${locale}/recipes`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {p.relatedRecipes}
                                </span>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <Footer t={t.footer} locale={locale} />
        </main>
    )
}
