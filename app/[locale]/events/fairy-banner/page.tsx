import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import {
    ChevronRight,
    Home,
    Sparkles,
    Calendar,
    Gift,
    Coins,
    TrendingUp,
    HelpCircle,
    Star,
    Clock,
    AlertCircle,
    CheckCircle2,
    Zap,
    Trophy,
    Users,
    Music
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
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const f = t.fairyBanner

    return {
        title: f.metaTitle,
        description: f.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/events/fairy-banner`,
            languages: {
                "en": "https://theheartopia.com/en/events/fairy-banner",
                "th": "https://theheartopia.com/th/events/fairy-banner",
                "pt": "https://theheartopia.com/pt/events/fairy-banner",
                "es": "https://theheartopia.com/es/events/fairy-banner",
                "id": "https://theheartopia.com/id/events/fairy-banner",
            },
        },
        openGraph: {
            title: f.metaTitle,
            description: f.metaDesc,
            url: `https://theheartopia.com/${locale}/events/fairy-banner`,
            siteName: "Heartopia Hub",
            images: [
                {
                    url: "https://theheartopia.com/images/heartopia-preview.png",
                    width: 1200,
                    height: 630,
                    alt: "Heartopia Fairy Banner Guide"
                }
            ],
            locale: locale,
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: f.metaTitle,
            description: f.metaDesc,
            images: ["https://theheartopia.com/images/heartopia-preview.png"],
        },
    }
}

export default async function FairyBannerPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const f = t.fairyBanner

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": f.faq.q1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.faq.a1
                }
            },
            {
                "@type": "Question",
                "name": f.faq.q2,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.faq.a2
                }
            },
            {
                "@type": "Question",
                "name": f.faq.q3,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.faq.a3
                }
            },
            {
                "@type": "Question",
                "name": f.faq.q4,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.faq.a4
                }
            },
            {
                "@type": "Question",
                "name": f.faq.q5,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.faq.a5
                }
            }
        ]
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": f.heroTitle,
        "description": f.metaDesc,
        "image": "https://theheartopia.com/images/heartopia-preview.png",
        "author": {
            "@type": "Organization",
            "name": "Heartopia Hub"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Heartopia Hub",
            "logo": {
                "@type": "ImageObject",
                "url": "https://theheartopia.com/logo.png"
            }
        },
        "datePublished": "2026-02-07",
        "dateModified": new Date().toISOString()
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
                "name": t.navbar.events,
                "item": `https://theheartopia.com/${locale}/events`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": f.breadcrumb,
                "item": `https://theheartopia.com/${locale}/events/fairy-banner`
            }
        ]
    }

    const eventSchema = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "Heartopia Fairy Banner - Forestbell Spell",
        "description": f.metaDesc,
        "startDate": "2026-02-07T00:00:00Z",
        "endDate": "2026-02-21T23:59:59Z",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
        "location": {
            "@type": "VirtualLocation",
            "url": "https://theheartopia.com"
        },
        "organizer": {
            "@type": "Organization",
            "name": "Heartopia",
            "url": "https://theheartopia.com"
        }
    }

    return (
        <main className="min-h-screen bg-[#FEF9F3]">
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="event-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
            />

            <Navbar t={t.navbar} locale={locale} />

            {/* Breadcrumbs */}
            <nav className="pt-32 pb-6 px-4">
                <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap overflow-x-auto no-scrollbar">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1 shrink-0">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                    <Link href={`/${locale}/events`} className="hover:text-heartopia-pink-dark transition-colors shrink-0">
                        {t.navbar.events}
                    </Link>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                    <span className="text-heartopia-pink font-medium shrink-0">{f.breadcrumb}</span>
                </div>
            </nav>

            <div className="max-w-4xl mx-auto px-4 pb-16">
                <article>
                    {/* Hero Section */}
                    <header className="mb-12">
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <Badge className="bg-heartopia-pink text-white border-none px-4 py-1.5 flex items-center gap-2 animate-pulse">
                                <Sparkles className="w-4 h-4" /> {f.badge}
                            </Badge>
                            <div className="px-4 py-1.5 bg-slate-100 rounded-full text-sm text-slate-600 flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {f.lastUpdated}
                            </div>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            {f.heroTitle}
                        </h1>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            {f.heroDesc}
                        </p>

                        <div className="bg-white rounded-3xl p-8 border border-heartopia-pink/10 shadow-sm mb-8">
                            <p className="text-lg text-foreground leading-relaxed mb-6">
                                {f.intro}
                            </p>
                            <p className="text-lg text-foreground leading-relaxed italic border-l-4 border-heartopia-pink pl-6">
                                {f.introSecondary}
                            </p>
                        </div>
                    </header>

                    {/* Release Info Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-2xl bg-heartopia-pink flex items-center justify-center text-white">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{f.releaseInfo.title}</h2>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[32px] p-8 border-2 border-purple-200">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="flex gap-3 p-4 bg-white/80 rounded-2xl">
                                    <Sparkles className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-foreground mb-1">{f.releaseInfo.globalRelease}</p>
                                        <p className="text-sm text-muted-foreground">{f.releaseInfo.duration}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 p-4 bg-white/80 rounded-2xl">
                                    <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                    <p className="text-sm text-muted-foreground">{f.releaseInfo.note}</p>
                                </div>
                            </div>

                            <div className="bg-white/80 rounded-2xl p-6">
                                <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-heartopia-pink" />
                                    {f.releaseInfo.serverTimes}
                                </h3>
                                <div className="grid gap-3">
                                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                                        <span className="text-sm font-medium">🇨🇳 {f.releaseInfo.beijing.split(':')[0]}</span>
                                        <span className="text-sm text-muted-foreground">{f.releaseInfo.beijing.split(':').slice(1).join(':')}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                                        <span className="text-sm font-medium">🌏 {f.releaseInfo.sea.split(':')[0]}</span>
                                        <span className="text-sm text-muted-foreground">{f.releaseInfo.sea.split(':').slice(1).join(':')}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                                        <span className="text-sm font-medium">🇺🇸 {f.releaseInfo.us.split(':')[0]}</span>
                                        <span className="text-sm text-muted-foreground">{f.releaseInfo.us.split(':').slice(1).join(':')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Featured Items Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-2xl bg-heartopia-pink flex items-center justify-center text-white">
                                <Gift className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{f.featuredItems.title}</h2>
                        </div>

                        <p className="text-lg text-muted-foreground mb-8">{f.featuredItems.subtitle}</p>

                        <div className="grid gap-6">
                            {/* Wings */}
                            <div className="bg-white rounded-[32px] p-8 border-2 border-purple-100 hover:border-purple-300 transition-colors">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center shrink-0">
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{f.featuredItems.wings.title}</h3>
                                        <p className="text-muted-foreground">{f.featuredItems.wings.desc}</p>
                                    </div>
                                </div>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {f.featuredItems.wings.items.map((item: string, i: number) => (
                                        <li key={i} className="flex items-center gap-2 p-3 bg-purple-50 rounded-xl">
                                            <Star className="w-4 h-4 text-purple-500 shrink-0" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Furniture */}
                            <div className="bg-white rounded-[32px] p-8 border-2 border-green-100 hover:border-green-300 transition-colors">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center shrink-0">
                                        <Home className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{f.featuredItems.furniture.title}</h3>
                                        <p className="text-muted-foreground">{f.featuredItems.furniture.desc}</p>
                                    </div>
                                </div>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {f.featuredItems.furniture.items.map((item: string, i: number) => (
                                        <li key={i} className="flex items-center gap-2 p-3 bg-green-50 rounded-xl">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Cosmetics */}
                            <div className="bg-white rounded-[32px] p-8 border-2 border-pink-100 hover:border-pink-300 transition-colors">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center shrink-0">
                                        <Sparkles className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{f.featuredItems.cosmetics.title}</h3>
                                        <p className="text-muted-foreground">{f.featuredItems.cosmetics.desc}</p>
                                    </div>
                                </div>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {f.featuredItems.cosmetics.items.map((item: string, i: number) => (
                                        <li key={i} className="flex items-center gap-2 p-3 bg-pink-50 rounded-xl">
                                            <Star className="w-4 h-4 text-pink-500 shrink-0" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Pets */}
                            <div className="bg-white rounded-[32px] p-8 border-2 border-amber-100 hover:border-amber-300 transition-colors">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shrink-0">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{f.featuredItems.pets.title}</h3>
                                        <p className="text-muted-foreground">{f.featuredItems.pets.desc}</p>
                                    </div>
                                </div>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {f.featuredItems.pets.items.map((item: string, i: number) => (
                                        <li key={i} className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl">
                                            <Star className="w-4 h-4 text-amber-500 shrink-0" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Pull Mechanics Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-2xl bg-heartopia-pink flex items-center justify-center text-white">
                                <Coins className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{f.pullMechanics.title}</h2>
                        </div>

                        <p className="text-lg text-muted-foreground mb-8">{f.pullMechanics.subtitle}</p>

                        <div className="bg-white rounded-[32px] p-8 border-2 border-slate-100">
                            <div className="grid gap-4 mb-6">
                                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl">
                                    <Coins className="w-5 h-5 text-blue-500 shrink-0" />
                                    <p className="text-foreground font-medium">{f.pullMechanics.currency}</p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-50 rounded-2xl">
                                        <p className="text-sm text-muted-foreground mb-1">Single Pull</p>
                                        <p className="text-lg font-bold text-foreground">{f.pullMechanics.singlePull.split(':')[1]}</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-2xl">
                                        <p className="text-sm text-muted-foreground mb-1">10-Pull</p>
                                        <p className="text-lg font-bold text-foreground">{f.pullMechanics.tenPull.split(':')[1]}</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-amber-50 rounded-2xl border-2 border-amber-200">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Trophy className="w-5 h-5 text-amber-600" />
                                        <p className="font-bold text-amber-900">{f.pullMechanics.pity.split(':')[0]}</p>
                                    </div>
                                    <p className="text-sm text-amber-800">{f.pullMechanics.pity.split(':')[1]}</p>
                                </div>
                                <div className="p-4 bg-purple-50 rounded-2xl">
                                    <div className="flex items-center gap-2">
                                        <Star className="w-5 h-5 text-purple-500" />
                                        <p className="text-foreground font-medium">{f.pullMechanics.rateUp}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-slate-200 pt-6">
                                <h3 className="font-bold text-foreground mb-4">{f.pullMechanics.rates.title}</h3>
                                <div className="grid gap-3">
                                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl">
                                        <span className="text-sm font-medium flex items-center gap-2">
                                            <Star className="w-4 h-4 text-yellow-500" />
                                            {f.pullMechanics.rates.fiveStar.split(':')[0]}
                                        </span>
                                        <span className="text-sm font-bold text-amber-600">{f.pullMechanics.rates.fiveStar.split(':')[1]}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-xl">
                                        <span className="text-sm font-medium">{f.pullMechanics.rates.fourStar.split(':')[0]}</span>
                                        <span className="text-sm font-bold text-purple-600">{f.pullMechanics.rates.fourStar.split(':')[1]}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                                        <span className="text-sm font-medium">{f.pullMechanics.rates.threeStar.split(':')[0]}</span>
                                        <span className="text-sm font-bold text-slate-600">{f.pullMechanics.rates.threeStar.split(':')[1]}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Worth It Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-2xl bg-heartopia-pink flex items-center justify-center text-white">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{f.worthIt.title}</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            {/* Collectors */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-[32px] p-8 border-2 border-green-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                                    <div>
                                        <h3 className="font-serif text-xl font-bold text-foreground">{f.worthIt.collectors.title}</h3>
                                        <Badge className="bg-green-600 text-white border-none mt-1">{f.worthIt.collectors.verdict}</Badge>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {f.worthIt.collectors.reasons.map((reason: string, i: number) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                            <span className="text-sm text-foreground">{reason}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Casual Players */}
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-[32px] p-8 border-2 border-amber-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <AlertCircle className="w-8 h-8 text-amber-600" />
                                    <div>
                                        <h3 className="font-serif text-xl font-bold text-foreground">{f.worthIt.casual.title}</h3>
                                        <Badge className="bg-amber-600 text-white border-none mt-1">{f.worthIt.casual.verdict}</Badge>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {f.worthIt.casual.reasons.map((reason: string, i: number) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                            <span className="text-sm text-foreground">{reason}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-heartopia-pink/10 to-purple-100/50 rounded-[32px] p-6 border-2 border-heartopia-pink/20">
                            <div className="flex items-start gap-3">
                                <Sparkles className="w-6 h-6 text-heartopia-pink shrink-0 mt-1" />
                                <p className="text-foreground font-medium">{f.worthIt.recommendation}</p>
                            </div>
                        </div>
                    </section>

                    {/* Resource Guide Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-2xl bg-heartopia-pink flex items-center justify-center text-white">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{f.resourceGuide.title}</h2>
                        </div>

                        <p className="text-lg text-muted-foreground mb-8">{f.resourceGuide.subtitle}</p>

                        <div className="grid gap-6">
                            {/* Daily Sources */}
                            <div className="bg-white rounded-[32px] p-8 border-2 border-blue-100">
                                <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-blue-500" />
                                    {f.resourceGuide.daily.title}
                                </h3>
                                <ul className="space-y-3">
                                    {f.resourceGuide.daily.tasks.map((task: string, i: number) => (
                                        <li key={i} className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                                            <Coins className="w-4 h-4 text-blue-500 shrink-0" />
                                            <span className="text-sm font-medium">{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Weekly Sources */}
                            <div className="bg-white rounded-[32px] p-8 border-2 border-purple-100">
                                <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                    <Trophy className="w-5 h-5 text-purple-500" />
                                    {f.resourceGuide.weekly.title}
                                </h3>
                                <ul className="space-y-3">
                                    {f.resourceGuide.weekly.tasks.map((task: string, i: number) => (
                                        <li key={i} className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                                            <Star className="w-4 h-4 text-purple-500 shrink-0" />
                                            <span className="text-sm font-medium">{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Codes */}
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-[32px] p-8 border-2 border-amber-200">
                                <h3 className="font-serif text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                                    <Gift className="w-5 h-5 text-amber-600" />
                                    {f.resourceGuide.codes.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-3">{f.resourceGuide.codes.note}</p>
                                <p className="text-lg font-bold text-amber-600">{f.resourceGuide.codes.estimate}</p>
                            </div>

                            {/* Total */}
                            <div className="bg-gradient-to-r from-heartopia-pink to-purple-500 rounded-[32px] p-6 text-white">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Zap className="w-8 h-8" />
                                        <span className="font-bold text-lg">{f.resourceGuide.total.split(':')[0]}</span>
                                    </div>
                                    <span className="text-2xl font-bold">{f.resourceGuide.total.split(':')[1]}</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pro Tips Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-2xl bg-heartopia-pink flex items-center justify-center text-white">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{f.tips.title}</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-[32px] p-6 border-2 border-slate-100 hover:border-heartopia-pink transition-colors">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-heartopia-pink/10 flex items-center justify-center shrink-0">
                                        <Trophy className="w-5 h-5 text-heartopia-pink" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-2">{f.tips.tip1.title}</h3>
                                        <p className="text-sm text-muted-foreground">{f.tips.tip1.desc}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-[32px] p-6 border-2 border-slate-100 hover:border-heartopia-pink transition-colors">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-heartopia-pink/10 flex items-center justify-center shrink-0">
                                        <AlertCircle className="w-5 h-5 text-heartopia-pink" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-2">{f.tips.tip2.title}</h3>
                                        <p className="text-sm text-muted-foreground">{f.tips.tip2.desc}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-[32px] p-6 border-2 border-slate-100 hover:border-heartopia-pink transition-colors">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-heartopia-pink/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-heartopia-pink" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-2">{f.tips.tip3.title}</h3>
                                        <p className="text-sm text-muted-foreground">{f.tips.tip3.desc}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-[32px] p-6 border-2 border-slate-100 hover:border-heartopia-pink transition-colors">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-heartopia-pink/10 flex items-center justify-center shrink-0">
                                        <Clock className="w-5 h-5 text-heartopia-pink" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-2">{f.tips.tip4.title}</h3>
                                        <p className="text-sm text-muted-foreground">{f.tips.tip4.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Event Synergy Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-2xl bg-heartopia-pink flex items-center justify-center text-white">
                                <Users className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{f.eventSynergy.title}</h2>
                        </div>

                        <div className="grid gap-6">
                            <div className="bg-white rounded-[32px] p-8 border-2 border-slate-100">
                                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{f.eventSynergy.onsenEgg.title}</h3>
                                <p className="text-muted-foreground">
                                    {f.eventSynergy.onsenEgg.desc.includes('{link}') ? (
                                        <>
                                            {f.eventSynergy.onsenEgg.desc.split('{link}')[0]}
                                            <Link href={`/${locale}/events/onsen-egg-all-locations`} className="text-heartopia-pink hover:underline font-medium">
                                                {f.linkOnsenEgg}
                                            </Link>
                                            {f.eventSynergy.onsenEgg.desc.split('{link}')[1]}
                                        </>
                                    ) : (
                                        f.eventSynergy.onsenEgg.desc
                                    )}
                                </p>
                            </div>

                            <div className="bg-white rounded-[32px] p-8 border-2 border-slate-100">
                                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{f.eventSynergy.exhibition.title}</h3>
                                <p className="text-muted-foreground">
                                    {f.eventSynergy.exhibition.desc}
                                    <Link href={`/${locale}/guides/fish-locations`} className="text-heartopia-pink hover:underline font-sm ml-2">
                                        → {f.linkExhibition}
                                    </Link>
                                </p>
                            </div>

                            <div className="bg-white rounded-[32px] p-8 border-2 border-slate-100">
                                <h3 className="font-serif text-xl font-bold text-foreground mb-3">{f.eventSynergy.aurora.title}</h3>
                                <div className="text-muted-foreground">
                                    {f.eventSynergy.aurora.desc.includes('{link1}') ? (
                                        <>
                                            {f.eventSynergy.aurora.desc.split('{link1}')[0]}
                                            <Link href={`/${locale}/guides/recipes/iced-drink`} className="text-heartopia-pink hover:underline font-medium">
                                                {t.navbar.guideIcedDrink}
                                            </Link>
                                            {f.eventSynergy.aurora.desc.split('{link1}')[1].split('{link2}')[0]}
                                            <Link href={`/${locale}/guides/recipes/frosted-pancake`} className="text-heartopia-pink hover:underline font-medium">
                                                {t.navbar.guideFrostedPancake}
                                            </Link>
                                            {f.eventSynergy.aurora.desc.split('{link2}')[1]}
                                        </>
                                    ) : (
                                        f.eventSynergy.aurora.desc
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-2xl bg-heartopia-pink flex items-center justify-center text-white">
                                <HelpCircle className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{f.faq.title}</h2>
                        </div>

                        <Accordion type="single" collapsible className="space-y-4">
                            <AccordionItem value="item-1" className="bg-white rounded-[32px] border-2 border-slate-100 px-8 overflow-hidden">
                                <AccordionTrigger className="text-left font-bold text-foreground hover:text-heartopia-pink py-6">
                                    {f.faq.q1}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6">
                                    {f.faq.a1}
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="bg-white rounded-[32px] border-2 border-slate-100 px-8 overflow-hidden">
                                <AccordionTrigger className="text-left font-bold text-foreground hover:text-heartopia-pink py-6">
                                    {f.faq.q2}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6">
                                    {f.faq.a2}
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="bg-white rounded-[32px] border-2 border-slate-100 px-8 overflow-hidden">
                                <AccordionTrigger className="text-left font-bold text-foreground hover:text-heartopia-pink py-6">
                                    {f.faq.q3}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6">
                                    {f.faq.a3}
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="bg-white rounded-[32px] border-2 border-slate-100 px-8 overflow-hidden">
                                <AccordionTrigger className="text-left font-bold text-foreground hover:text-heartopia-pink py-6">
                                    {f.faq.q4}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6">
                                    {f.faq.a4}
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5" className="bg-white rounded-[32px] border-2 border-slate-100 px-8 overflow-hidden">
                                <AccordionTrigger className="text-left font-bold text-foreground hover:text-heartopia-pink py-6">
                                    {f.faq.q5}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6">
                                    {f.faq.a5}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>

                    {/* Related Guides */}
                    <section className="mb-16">
                        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">{f.relatedTitle}</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link
                                href={`/${locale}/events/onsen-egg-all-locations`}
                                className="p-6 bg-white rounded-[32px] border-2 border-slate-100 hover:border-heartopia-pink transition-colors group"
                            >
                                <div className="flex items-center gap-3">
                                    <Gift className="w-6 h-6 text-heartopia-pink" />
                                    <span className="font-medium text-foreground group-hover:text-heartopia-pink transition-colors">
                                        {f.linkOnsenEgg}
                                    </span>
                                </div>
                            </Link>

                            <Link
                                href={`/${locale}/events/heartopia-aurora-weather-banquet-guide`}
                                className="p-6 bg-white rounded-[32px] border-2 border-slate-100 hover:border-heartopia-pink transition-colors group"
                            >
                                <div className="flex items-center gap-3">
                                    <Sparkles className="w-6 h-6 text-heartopia-pink" />
                                    <span className="font-medium text-foreground group-hover:text-heartopia-pink transition-colors">
                                        {f.linkAurora}
                                    </span>
                                </div>
                            </Link>

                            <Link
                                href={`/${locale}/events/heartopia-snow-concert-guide`}
                                className="p-6 bg-white rounded-[32px] border-2 border-slate-100 hover:border-heartopia-pink transition-colors group"
                            >
                                <div className="flex items-center gap-3">
                                    <Music className="w-6 h-6 text-heartopia-pink" />
                                    <span className="font-medium text-foreground group-hover:text-heartopia-pink transition-colors">
                                        {f.linkSnowConcert}
                                    </span>
                                </div>
                            </Link>

                            <Link
                                href={`/${locale}`}
                                className="p-6 bg-white rounded-[32px] border-2 border-slate-100 hover:border-heartopia-pink transition-colors group"
                            >
                                <div className="flex items-center gap-3">
                                    <Home className="w-6 h-6 text-heartopia-pink" />
                                    <span className="font-medium text-foreground group-hover:text-heartopia-pink transition-colors">
                                        {t.navbar.home}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </section>
                </article>
            </div>

            <Footer t={t.footer} locale={locale} />
        </main>
    )
}
