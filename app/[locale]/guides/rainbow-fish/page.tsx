import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import {
    Fish,
    ChevronRight,
    Home,
    Rainbow,
    MapPin,
    Clock,
    HelpCircle,
    ArrowRight,
    BookOpen,
    Zap,
    AlertTriangle,
    CheckCircle2,
    Target,
    Route,
    Eye
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
    const rf = t.rainbowFish

    return {
        title: rf.metaTitle,
        description: rf.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/guides/rainbow-fish`,
            languages: {
                "en": "https://theheartopia.com/en/guides/rainbow-fish",
                "th": "https://theheartopia.com/th/guides/rainbow-fish",
                "pt": "https://theheartopia.com/pt/guides/rainbow-fish",
                "es": "https://theheartopia.com/es/guides/rainbow-fish",
                "id": "https://theheartopia.com/id/guides/rainbow-fish",
                "x-default": "https://theheartopia.com/en/guides/rainbow-fish",
            },
        },
        openGraph: {
            title: rf.metaTitle,
            description: rf.metaDesc,
            url: `https://theheartopia.com/${locale}/guides/rainbow-fish`,
            siteName: "Heartopia Guide",
            images: [
                {
                    url: "/images/hero-banner.webp",
                    width: 1200,
                    height: 630,
                    alt: rf.ogImageAlt,
                },
            ],
            locale: locale === "th" ? "th_TH" : locale === "pt" ? "pt_BR" : locale === "es" ? "es_ES" : locale === "id" ? "id_ID" : "en_US",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: rf.metaTitle,
            description: rf.metaDesc,
            images: ["/images/hero-banner.webp"],
        },
    }
}

export default async function RainbowFishPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const rf = t.rainbowFish

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": rf.heroTitle,
        "description": rf.metaDesc,
        "image": "https://theheartopia.com/images/hero-banner.webp",
        "author": {
            "@type": "Organization",
            "name": "Heartopia Guide Community"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Heartopia Guide",
            "logo": {
                "@type": "ImageObject",
                "url": "https://theheartopia.com/Wordlogo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://theheartopia.com/${locale}/guides/rainbow-fish`
        },
        "datePublished": "2026-03-14",
        "dateModified": "2026-03-14",
        "inLanguage": locale,
        "about": {
            "@type": "Thing",
            "name": "Heartopia Rainbow Fish",
            "description": "Fish that only appear or become significantly easier to catch during Rainbow weather in Heartopia."
        }
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": rf.faq.q1,
                "acceptedAnswer": { "@type": "Answer", "text": rf.faq.a1 }
            },
            {
                "@type": "Question",
                "name": rf.faq.q2,
                "acceptedAnswer": { "@type": "Answer", "text": rf.faq.a2 }
            },
            {
                "@type": "Question",
                "name": rf.faq.q3,
                "acceptedAnswer": { "@type": "Answer", "text": rf.faq.a3 }
            },
            {
                "@type": "Question",
                "name": rf.faq.q4,
                "acceptedAnswer": { "@type": "Answer", "text": rf.faq.a4 }
            },
            {
                "@type": "Question",
                "name": rf.faq.q5,
                "acceptedAnswer": { "@type": "Answer", "text": rf.faq.a5 }
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
                "name": t.navbar.guides,
                "item": `https://theheartopia.com/${locale}/guides/fishing`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": rf.heroTitle,
                "item": `https://theheartopia.com/${locale}/guides/rainbow-fish`
            }
        ]
    }

    const sections = [
        { id: "quick-answer", title: rf.toc.quickAnswer },
        { id: "exclusive-fish", title: rf.toc.exclusiveFish },
        { id: "enhanced-fish", title: rf.toc.enhancedFish },
        { id: "route", title: rf.toc.route },
        { id: "confirm-weather", title: rf.toc.confirmWeather },
        { id: "by-player-type", title: rf.toc.byPlayerType },
        { id: "troubleshooting", title: rf.toc.troubleshooting },
        { id: "best-practices", title: rf.toc.bestPractices },
        { id: "faq", title: rf.toc.faq },
    ]

    const exclusiveRows = [
        { fish: "Butterfly Koi", location: rf.table.seaBillsBoat, time: rf.table.allDay, level: "8", value: "550g", priority: rf.table.veryHigh },
        { fish: "Golden King Crab", location: rf.table.seaBillsBoat, time: rf.table.allDay, level: "9", value: "600g", priority: rf.table.veryHigh },
        { fish: "Swordfish", location: rf.table.deepSea, time: rf.table.allDay, level: "10", value: "600g", priority: rf.table.veryHigh },
        { fish: "Bluefin Tuna", location: rf.table.deepSea, time: rf.table.dawnDusk, level: "10", value: "580g", priority: rf.table.veryHigh },
        { fish: "Smooth Hammerhead", location: rf.table.deepSea, time: rf.table.allDay, level: "10", value: "535g", priority: rf.table.high },
        { fish: "Huchen", location: "Giantwood River", time: rf.table.allDay, level: "9", value: "460g", priority: rf.table.high },
    ]

    const enhancedRows = [
        { fish: "Goldfish", location: "Meadow Lake", time: rf.table.morningEveningDay, level: "6", value: "320g", alsoSpawns: rf.table.rainyDays },
        { fish: "Large Pearl Mussel", location: rf.table.lake, time: rf.table.allDay, level: "7", value: "460g", alsoSpawns: rf.table.rainyDays },
        { fish: "Zander", location: "Giantwood River", time: rf.table.allDay, level: "4", value: "230g", alsoSpawns: rf.table.sunnyDays },
        { fish: "Common Carp", location: "Rosy River", time: rf.table.noonMidnight, level: "3", value: "230g", alsoSpawns: rf.table.sunnyDays },
        { fish: "Tadpole", location: "Onsen Mountain Lake", time: rf.table.allDay, level: "2", value: "100g", alsoSpawns: rf.table.rainyDays },
    ]

    const troubleshootItems = [
        { icon: Eye, color: "bg-purple-100 text-purple-600", title: rf.troubleshoot.check1Title, desc: rf.troubleshoot.check1Desc },
        { icon: MapPin, color: "bg-heartopia-sky/10 text-heartopia-sky", title: rf.troubleshoot.check2Title, desc: rf.troubleshoot.check2Desc },
        { icon: Clock, color: "bg-amber-100 text-amber-600", title: rf.troubleshoot.check3Title, desc: rf.troubleshoot.check3Desc },
        { icon: Zap, color: "bg-heartopia-green/10 text-green-600", title: rf.troubleshoot.check4Title, desc: rf.troubleshoot.check4Desc },
        { icon: Fish, color: "bg-heartopia-pink/10 text-heartopia-pink", title: rf.troubleshoot.check5Title, desc: rf.troubleshoot.check5Desc },
    ]

    return (
        <main className="min-h-screen bg-heartopia-cream">
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
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

            <Navbar t={t.navbar} locale={locale} />

            {/* Breadcrumbs */}
            <nav aria-label="breadcrumb" className="pt-32 pb-6 px-4">
                <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href={`/${locale}/guides/fishing`} className="hover:text-heartopia-pink-dark transition-colors">
                        {t.navbar.guides}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{rf.heroTitle}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-4xl mx-auto">

                    {/* Hero Header */}
                    <header className="mb-12">
                        <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold uppercase tracking-wider">
                            🌈 {rf.badge}
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {rf.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                            {rf.heroDesc}
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {rf.heroDesc2}
                        </p>
                    </header>

                    {/* TOC */}
                    <div className="glass rounded-[32px] p-6 border border-white/50 mb-12 bg-white/60 shadow-soft-blue">
                        <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-heartopia-pink" /> {rf.tocTitle}
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {sections.map(section => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="px-4 py-2 rounded-xl bg-white/80 border border-heartopia-pink/10 text-sm hover:border-heartopia-pink hover:bg-heartopia-pink/5 transition-all text-muted-foreground hover:text-heartopia-pink-darker text-center font-medium"
                                >
                                    {section.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-16">

                        {/* Quick Answer */}
                        <section id="quick-answer" className="scroll-mt-32">
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[32px] p-8 border border-purple-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <h2 className="font-serif text-3xl font-bold text-foreground">{rf.quickAnswer.title}</h2>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{rf.quickAnswer.intro}</p>

                                <div className="bg-white/70 rounded-2xl p-6 mb-6 border border-purple-100">
                                    <p className="font-semibold text-foreground mb-4">{rf.quickAnswer.topTargetsLabel}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Swordfish", "Golden King Crab", "Bluefin Tuna", "Smooth Hammerhead", "Butterfly Koi", "Huchen"].map(fish => (
                                            <span key={fish} className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">{fish}</span>
                                        ))}
                                    </div>
                                </div>

                                <p className="font-semibold text-foreground mb-3">{rf.quickAnswer.bestRouteLabel}</p>
                                <ol className="space-y-2">
                                    {[rf.quickAnswer.route1, rf.quickAnswer.route2, rf.quickAnswer.route3].map((step, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="w-7 h-7 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold text-sm flex-shrink-0">{i + 1}</div>
                                            <span className="text-foreground font-medium">{step}</span>
                                        </li>
                                    ))}
                                </ol>

                                <p className="mt-6 text-muted-foreground italic bg-white/60 p-4 rounded-xl border border-purple-50">
                                    {rf.quickAnswer.footer}
                                </p>
                            </div>
                        </section>

                        {/* Rainbow-Exclusive Fish */}
                        <section id="exclusive-fish" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
                                    <Rainbow className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{rf.exclusive.title}</h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                {rf.exclusive.desc}
                            </p>

                            <div className="overflow-hidden rounded-[32px] border border-white bg-white/40 shadow-sm mb-6">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead>
                                            <tr className="bg-white/80 border-b border-purple-100">
                                                <th className="px-5 py-4 font-bold text-foreground">{rf.table.thFish}</th>
                                                <th className="px-5 py-4 font-bold text-foreground">{rf.table.thLocation}</th>
                                                <th className="px-5 py-4 font-bold text-foreground">{rf.table.thTime}</th>
                                                <th className="px-5 py-4 font-bold text-foreground">{rf.table.thLevel}</th>
                                                <th className="px-5 py-4 font-bold text-foreground">{rf.table.thValue}</th>
                                                <th className="px-5 py-4 font-bold text-foreground">{rf.table.thPriority}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-purple-50">
                                            {exclusiveRows.map((row, i) => (
                                                <tr key={i} className="hover:bg-white/60 transition-colors">
                                                    <td className="px-5 py-3 font-semibold text-foreground">{row.fish}</td>
                                                    <td className="px-5 py-3 text-muted-foreground">{row.location}</td>
                                                    <td className="px-5 py-3 text-muted-foreground">{row.time}</td>
                                                    <td className="px-5 py-3">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700">Lv.{row.level}</span>
                                                    </td>
                                                    <td className="px-5 py-3 font-semibold text-amber-600">{row.value}</td>
                                                    <td className="px-5 py-3">
                                                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${row.priority === rf.table.veryHigh ? "bg-red-100 text-red-700" : "bg-orange-100 text-orange-700"}`}>
                                                            {row.priority}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{rf.exclusive.footer}</p>
                        </section>

                        {/* Rainbow-Enhanced Fish */}
                        <section id="enhanced-fish" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                    <Fish className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{rf.enhanced.title}</h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                {rf.enhanced.desc}
                            </p>

                            <div className="overflow-hidden rounded-[32px] border border-white bg-white/40 shadow-sm mb-6">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead>
                                            <tr className="bg-white/80 border-b border-heartopia-sky/20">
                                                <th className="px-5 py-4 font-bold text-foreground">{rf.table.thFish}</th>
                                                <th className="px-5 py-4 font-bold text-foreground">{rf.table.thLocation}</th>
                                                <th className="px-5 py-4 font-bold text-foreground">{rf.table.thTime}</th>
                                                <th className="px-5 py-4 font-bold text-foreground">{rf.table.thLevel}</th>
                                                <th className="px-5 py-4 font-bold text-foreground">{rf.table.thValue}</th>
                                                <th className="px-5 py-4 font-bold text-foreground">{rf.table.thAlsoSpawns}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-heartopia-sky/10">
                                            {enhancedRows.map((row, i) => (
                                                <tr key={i} className="hover:bg-white/60 transition-colors">
                                                    <td className="px-5 py-3 font-semibold text-foreground">{row.fish}</td>
                                                    <td className="px-5 py-3 text-muted-foreground">{row.location}</td>
                                                    <td className="px-5 py-3 text-muted-foreground">{row.time}</td>
                                                    <td className="px-5 py-3">
                                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-700">Lv.{row.level}</span>
                                                    </td>
                                                    <td className="px-5 py-3 font-semibold text-amber-600">{row.value}</td>
                                                    <td className="px-5 py-3 text-muted-foreground">{row.alsoSpawns}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{rf.enhanced.footer}</p>
                        </section>

                        {/* Best 2-Hour Route */}
                        <section id="route" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                    <Route className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{rf.route.title}</h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{rf.route.intro}</p>

                            <div className="space-y-6">
                                {/* Phase 1 */}
                                <div className="bg-white/60 rounded-[32px] p-8 border border-heartopia-orange/20 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-heartopia-orange/20 flex items-center justify-center font-bold text-heartopia-orange">1</div>
                                        <h3 className="font-bold text-xl text-foreground">{rf.route.phase1Title}</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed mb-4">{rf.route.phase1Desc}</p>
                                    <ul className="space-y-2">
                                        {["Swordfish", "Bluefin Tuna", "Smooth Hammerhead", "Golden King Crab", "Butterfly Koi"].map(fish => (
                                            <li key={fish} className="flex items-center gap-2 text-foreground font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" />
                                                {fish}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-4 text-sm text-muted-foreground italic bg-heartopia-orange/5 p-3 rounded-xl">
                                        {rf.route.phase1Note}
                                    </p>
                                </div>

                                {/* Phase 2 */}
                                <div className="bg-white/60 rounded-[32px] p-8 border border-heartopia-sky/20 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-heartopia-sky/20 flex items-center justify-center font-bold text-heartopia-sky">2</div>
                                        <h3 className="font-bold text-xl text-foreground">{rf.route.phase2Title}</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed mb-4">{rf.route.phase2Desc}</p>
                                    <ul className="space-y-2">
                                        {[rf.route.phase2Fish1, rf.route.phase2Fish2].map((fish, i) => (
                                            <li key={i} className="flex items-center gap-2 text-foreground font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-heartopia-sky flex-shrink-0" />
                                                {fish}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Phase 3 */}
                                <div className="bg-white/60 rounded-[32px] p-8 border border-heartopia-green/30 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-heartopia-green/20 flex items-center justify-center font-bold text-green-700">3</div>
                                        <h3 className="font-bold text-xl text-foreground">{rf.route.phase3Title}</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed mb-4">{rf.route.phase3Desc}</p>
                                    <ul className="space-y-2">
                                        {[rf.route.phase3Fish1, rf.route.phase3Fish2, rf.route.phase3Fish3].map((fish, i) => (
                                            <li key={i} className="flex items-center gap-2 text-foreground font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                {fish}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-4 text-sm text-muted-foreground italic bg-heartopia-green/5 p-3 rounded-xl">
                                        {rf.route.phase3Note}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Confirm Weather */}
                        <section id="confirm-weather" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
                                    <Rainbow className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{rf.weather.title}</h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{rf.weather.intro}</p>

                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[32px] p-8 border border-purple-100 mb-6">
                                <ol className="space-y-4">
                                    {[rf.weather.step1, rf.weather.step2, rf.weather.step3, rf.weather.step4].map((step, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center font-bold text-purple-700 flex-shrink-0">{i + 1}</div>
                                            <p className="text-foreground leading-relaxed pt-1">{step}</p>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                            <p className="text-muted-foreground leading-relaxed italic">
                                {rf.weather.footer} {" "}
                                <Link href={`/${locale}/guides/fishing`} className="text-heartopia-pink-darker hover:underline font-semibold">
                                    {rf.weather.fishingGuideLink}
                                </Link>
                            </p>
                        </section>

                        {/* Best Strategy by Player Type */}
                        <section id="by-player-type" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{rf.strategy.title}</h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{rf.strategy.intro}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { icon: "🌱", title: rf.strategy.newTitle, desc: rf.strategy.newDesc, items: [rf.strategy.newTip1, rf.strategy.newTip2, rf.strategy.newTip3, rf.strategy.newTip4], color: "border-green-100 bg-green-50" },
                                    { icon: "⚡", title: rf.strategy.midTitle, desc: rf.strategy.midDesc, items: [rf.strategy.midTip1, rf.strategy.midTip2, rf.strategy.midTip3], color: "border-amber-100 bg-amber-50" },
                                    { icon: "🏆", title: rf.strategy.advancedTitle, desc: rf.strategy.advancedDesc, items: [rf.strategy.advancedTip1, rf.strategy.advancedTip2, rf.strategy.advancedTip3, rf.strategy.advancedTip4], color: "border-purple-100 bg-purple-50" },
                                    { icon: "📖", title: rf.strategy.completionistTitle, desc: rf.strategy.completionistDesc, items: [rf.strategy.completionistTip1], color: "border-heartopia-pink/20 bg-heartopia-pink/5" },
                                ].map((card, i) => (
                                    <div key={i} className={`rounded-3xl p-6 border ${card.color}`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{card.icon}</span>
                                            <h3 className="font-bold text-lg text-foreground">{card.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{card.desc}</p>
                                        <ul className="space-y-2">
                                            {card.items.map((tip, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                                                    <ArrowRight className="w-4 h-4 text-heartopia-pink flex-shrink-0 mt-0.5" />
                                                    {tip}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Troubleshooting */}
                        <section id="troubleshooting" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{rf.troubleshoot.title}</h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{rf.troubleshoot.intro}</p>

                            <div className="space-y-4">
                                {troubleshootItems.map((item, i) => {
                                    const Icon = item.icon
                                    return (
                                        <div key={i} className="flex items-start gap-4 bg-white/60 rounded-2xl p-6 border border-white shadow-sm">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>

                        {/* Best Practices */}
                        <section id="best-practices" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-green/10 flex items-center justify-center text-green-600">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{rf.practices.title}</h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{rf.practices.intro}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                {[rf.practices.tip1, rf.practices.tip2, rf.practices.tip3, rf.practices.tip4, rf.practices.tip5].map((tip, i) => (
                                    <div key={i} className="flex items-start gap-3 bg-white/60 rounded-2xl p-4 border border-heartopia-green/20 shadow-sm">
                                        <div className="w-6 h-6 rounded-full bg-heartopia-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-xs font-bold text-green-700">{i + 1}</span>
                                        </div>
                                        <p className="text-foreground text-sm leading-relaxed">{tip}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-br from-heartopia-pink/5 to-heartopia-sky/5 rounded-2xl p-5 border border-heartopia-pink/20">
                                <p className="text-foreground font-medium italic">✨ {rf.practices.sellRawNote}</p>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-500">
                                    <HelpCircle className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{rf.faq.title}</h2>
                            </div>

                            <div className="glass rounded-[32px] p-2 md:p-6 border border-white/50 bg-white/40 shadow-soft-blue">
                                <Accordion type="single" collapsible className="w-full">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <AccordionItem key={i} value={`faq-${i}`} className="border-none mb-2 bg-white/50 rounded-2xl px-6">
                                            <AccordionTrigger className="text-left font-bold text-base md:text-lg hover:no-underline hover:text-heartopia-pink-dark transition-colors py-4">
                                                {rf.faq[`q${i}` as keyof typeof rf.faq]}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed pb-6">
                                                {rf.faq[`a${i}` as keyof typeof rf.faq]}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </section>

                        {/* Related Guides */}
                        <section className="pt-8 border-t border-heartopia-pink/10">
                            <h2 className="text-2xl font-bold text-foreground mb-6">{rf.related.title}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <Link href={`/${locale}/guides/fish`} className="group flex items-center justify-between p-5 bg-white rounded-3xl border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange flex-shrink-0">
                                            <Fish className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-foreground text-sm">{rf.related.fishList}</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
                                </Link>
                                <Link href={`/${locale}/guides/fish-locations`} className="group flex items-center justify-between p-5 bg-white rounded-3xl border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky flex-shrink-0">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-foreground text-sm">{rf.related.fishLocations}</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
                                </Link>
                                <Link href={`/${locale}/guides/fishing`} className="group flex items-center justify-between p-5 bg-white rounded-3xl border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink flex-shrink-0">
                                            <Fish className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-foreground text-sm">{rf.related.fishingGuide}</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
                                </Link>
                                <Link href={`/${locale}/where-is-doris`} className="group flex items-center justify-between p-5 bg-white rounded-3xl border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-2xl bg-heartopia-green/10 flex items-center justify-center text-green-600 flex-shrink-0">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-foreground text-sm">{rf.related.doris}</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
                                </Link>
                                <Link href={`/${locale}/guides/fishing`} className="group flex items-center justify-between p-5 bg-white rounded-3xl border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all sm:col-span-2 lg:col-span-1">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                                            <Rainbow className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-foreground text-sm">{rf.related.rainbowWeather}</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
                                </Link>
                            </div>
                        </section>

                    </div>
                </div>
            </article>

            <Footer t={t.footer} locale={locale} />
        </main>
    )
}
