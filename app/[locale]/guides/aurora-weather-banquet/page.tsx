import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import {
    CloudRain,
    Sparkles,
    Calendar,
    MapPin,
    Utensils,
    Gift,
    Trophy,
    Camera,
    Thermometer,
    Users,
    ChevronRight,
    Home,
    Info,
    HelpCircle,
    ArrowRight,
    Star,
    Bug
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
    const t = await getDictionary(locale)
    const g = t.auroraGuide

    return {
        title: g.metaTitle,
        description: g.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/guides/aurora-weather-banquet`,
            languages: {
                "en": "https://theheartopia.com/en/guides/aurora-weather-banquet",
                "th": "https://theheartopia.com/th/guides/aurora-weather-banquet",
                "pt": "https://theheartopia.com/pt/guides/aurora-weather-banquet",
                "es": "https://theheartopia.com/es/guides/aurora-weather-banquet",
                "x-default": "https://theheartopia.com/en/guides/aurora-weather-banquet",
            },
        },
        openGraph: {
            title: g.metaTitle,
            description: g.metaDesc,
            url: `https://theheartopia.com/${locale}/guides/aurora-weather-banquet`,
            siteName: "Heartopia Guide",
            images: [
                {
                    url: "/images/magic-of-nature.webp",
                    width: 1200,
                    height: 630,
                    alt: "Heartopia Aurora Weather and Banquet Guide",
                },
            ],
            locale: locale === "th" ? "th_TH" : (locale === "pt" ? "pt_BR" : (locale === "es" ? "es_ES" : "en_US")),
            type: "article",
        },
    }
}

export default async function AuroraGuidePage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale)
    const g = t.auroraGuide

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Guide",
        "headline": g.heroTitle,
        "description": g.metaDesc,
        "image": "https://theheartopia.com/images/magic-of-nature.webp",
        "author": {
            "@type": "Organization",
            "name": "Heartopia Hub Community"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Heartopia Hub",
            "logo": {
                "@type": "ImageObject",
                "url": "https://theheartopia.com/Wordlogo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://theheartopia.com/${locale}/guides/aurora-weather-banquet`
        }
    }

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": g.faqQ1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": g.faqA1
                }
            },
            {
                "@type": "Question",
                "name": g.faqQ2,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": g.faqA2
                }
            },
            {
                "@type": "Question",
                "name": g.faqQ3,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": g.faqA3
                }
            }
        ]
    }

    return (
        <main className="min-h-screen bg-heartopia-cream">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqLd]) }}
            />
            <Navbar t={t.navbar} locale={locale} />

            {/* Breadcrumbs */}
            <nav className="pt-32 pb-6 px-4">
                <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-muted-foreground">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href={`/${locale}/events`} className="hover:text-heartopia-pink-dark transition-colors">
                        Events
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{g.predictTitle}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12">
                        <Badge className="bg-heartopia-sky/10 text-heartopia-sky hover:bg-heartopia-sky/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold uppercase tracking-wider">
                            Weather & Social Guide
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {g.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {g.heroDesc}
                        </p>
                    </header>

                    {/* Intro */}
                    <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-16">
                        <p>{g.intro}</p>
                        <p>{g.intro2}</p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-20">
                        {/* Predicting Section */}
                        <section id="predicting" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                    <CloudRain className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.predictTitle}</h2>
                            </div>
                            <div className="bg-white/60 p-8 rounded-[40px] border border-white shadow-soft-blue mb-8">
                                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                                    {g.predictDesc} Understanding the <strong>Heartopia aurora weather</strong> patterns is key to unlocking the winter's best secrets.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <h3 className="font-bold text-xl text-foreground flex items-center gap-2">
                                            <Star className="w-5 h-5 text-amber-400" /> {g.forecastTitle}
                                        </h3>
                                        <p className="text-muted-foreground">{g.forecastDesc}</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="font-bold text-xl text-foreground flex items-center gap-2">
                                            <Camera className="w-5 h-5 text-heartopia-pink" /> {g.visualTitle}
                                        </h3>
                                        <p className="text-muted-foreground">{g.visualDesc}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Banquet Section */}
                        <section id="banquet" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.aboutBanquetTitle}</h2>
                            </div>
                            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                                <p>{g.aboutBanquetDesc}</p>

                                <div className="bg-gradient-to-br from-heartopia-pink/5 to-heartopia-sky/5 p-8 rounded-[40px] border border-white">
                                    <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                        <MapPin className="w-6 h-6 text-heartopia-pink" /> {g.locationsTitle}
                                    </h3>
                                    <ul className="space-y-4">
                                        {[g.location1, g.location2, g.location3].map((loc, i) => (
                                            <li key={i} className="flex gap-4 items-start">
                                                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                                                    <span className="text-xs font-bold text-heartopia-pink">{i + 1}</span>
                                                </div>
                                                <span>{loc} Ensure you check the <Link href={`/${locale}/npcs`} className="text-heartopia-pink-dark font-bold hover:underline">NPC Guide</Link> to see when Doris is present.</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-8">
                                    <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                        <Utensils className="w-6 h-6 text-heartopia-orange" /> {g.activitiesTitle}
                                    </h3>
                                    <p className="mb-6">{g.activitiesDesc}</p>
                                    <div className="bg-amber-50/50 p-6 rounded-3xl border border-amber-100 italic">
                                        "Hosting or joining an <strong>Aurora Banquet Heartopia</strong> is the fastest way to gain social friendship points during the winter season!"
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Rewards Section */}
                        <section id="rewards" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                    <Gift className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.rewardsTitle}</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white/60 p-8 rounded-[40px] border border-white shadow-soft-blue">
                                    <h3 className="font-bold text-xl mb-6 text-foreground">{g.itemsTitle}</h3>
                                    <ul className="space-y-4 text-muted-foreground">
                                        {[g.item1, g.item2, g.item3].map((item, i) => (
                                            <li key={i} className="flex gap-3">
                                                <ArrowRight className="w-5 h-5 text-heartopia-orange shrink-0 mt-1" />
                                                <span>{item} Some materials are also used in <Link href={`/${locale}/guides/housing`} className="text-heartopia-orange font-bold hover:underline">House Ideas</Link>.</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-heartopia-sky/5 p-8 rounded-[40px] border border-heartopia-sky/10">
                                    <h3 className="font-bold text-xl mb-6 text-foreground flex items-center gap-2">
                                        <Trophy className="w-6 h-6 text-heartopia-sky" /> {g.hiddenTitle}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {g.hiddenDesc} Tracking the <strong>Heartopia aurora weather</strong> is your way to this prestigious winter title.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Tips Section */}
                        <section id="tips" className="scroll-mt-32">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">{g.tipsTitle}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {[
                                    { icon: Camera, color: "text-heartopia-pink", title: "Photo Mode", desc: g.tip1 },
                                    { icon: Thermometer, color: "text-blue-500", title: "Stay Warm", desc: g.tip2 },
                                    { icon: Users, color: "text-heartopia-sky", title: "Group Up", desc: g.tip3 },
                                ].map((tip, i) => (
                                    <div key={i} className="bg-white/40 p-6 rounded-[32px] border border-white transition-all hover:shadow-soft-blue group">
                                        <div className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center ${tip.color} mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                                            <tip.icon className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-bold text-foreground mb-2">{tip.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{tip.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-500">
                                    <HelpCircle className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.faqTitle}</h2>
                            </div>

                            <div className="glass rounded-[32px] p-2 md:p-6 border border-white/50 bg-white/40 shadow-soft-blue">
                                <Accordion type="single" collapsible className="w-full">
                                    {[1, 2, 3].map((i) => (
                                        <AccordionItem key={i} value={`faq-${i}`} className="border-none mb-2 bg-white/50 rounded-2xl px-6">
                                            <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-heartopia-pink-dark transition-colors py-4">
                                                {g[`faqQ${i}` as keyof typeof g]}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6 text-wrap">
                                                {g[`faqA${i}` as keyof typeof g]}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </section>

                        {/* Related Guides */}
                        <section className="pt-8 mb-12 border-t border-heartopia-pink/10">
                            <h2 className="text-2xl font-bold text-foreground mb-6">Continue Your Winter Journey</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Link href={`/${locale}/events/onsen-egg`} className="group flex items-center justify-between p-6 bg-white rounded-[32px] border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/5 flex items-center justify-center text-heartopia-pink">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-foreground">Onsen Egg Tracker</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
                                </Link>
                                <Link href={`/${locale}/guides/fishing`} className="group flex items-center justify-between p-6 bg-white rounded-[32px] border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                            <Utensils className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-foreground">Fishing & Recipes</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
                                </Link>
                                <Link href={`/${locale}/guides/heartopia-frostspore-butterflies`} className="group flex items-center justify-between p-6 bg-white rounded-[32px] border border-heartopia-orange/10 hover:border-heartopia-orange/30 hover:shadow-soft-orange transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                            <Bug className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-foreground">Frostspore Butterflies</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-orange transition-colors" />
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
