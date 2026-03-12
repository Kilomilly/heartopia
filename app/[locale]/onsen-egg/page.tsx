import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import {
    ChevronRight,
    Home,
    Sparkles,
    MapPin,
    Camera,
    Gift,
    HelpCircle,
    ArrowRight,
    Calendar,
    CheckCircle2
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
    const o = t.onsenEgg

    return {
        title: o.metaTitle,
        description: o.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/onsen-egg`,
            languages: {
                "en": "https://theheartopia.com/en/onsen-egg",
                "th": "https://theheartopia.com/th/onsen-egg",
                "pt": "https://theheartopia.com/pt/onsen-egg",
                "es": "https://theheartopia.com/es/onsen-egg",
                "x-default": "https://theheartopia.com/en/onsen-egg",
            },
        },
        openGraph: {
            title: o.metaTitle,
            description: o.metaDesc,
            url: `https://theheartopia.com/${locale}/onsen-egg`,
            siteName: 'Heartopia Hub',
            locale: locale,
            type: 'article',
            images: ['/images/heartopia-preview.png'],
        },
        twitter: {
            card: 'summary_large_image',
            title: o.metaTitle,
            description: o.metaDesc,
            images: ['/images/heartopia-preview.png'],
        },
    }
}

export default async function OnsenEggPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const o = t.onsenEgg

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": o.faq.q1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": o.faq.a1
                }
            },
            {
                "@type": "Question",
                "name": o.faq.q2,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": o.faq.a2
                }
            },
            {
                "@type": "Question",
                "name": o.faq.q3,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": o.faq.a3
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
                "name": t.navbar.eventGuides,
                "item": `https://theheartopia.com/${locale}/meteor-shower`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": o.heroTitle,
                "item": `https://theheartopia.com/${locale}/onsen-egg`
            }
        ]
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": o.heroTitle,
        "description": o.metaDesc,
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
                "url": "https://theheartopia.com/images/logo.png"
            }
        },
        "datePublished": "2026-01-31",
        "dateModified": "2026-01-31"
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
                    <span>{t.navbar.eventGuides}</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{o.breadcrumb}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12">
                        <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold">
                            {o.badge}
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {o.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                            {o.heroDesc}
                        </p>
                        <p className="text-lg text-blue-700 font-medium bg-blue-50 p-4 rounded-2xl border border-blue-100">
                            {o.intro}
                        </p>
                    </header>

                    {/* What is Section */}
                    <section className="mb-16 bg-white rounded-3xl p-8 shadow-sm border border-blue-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-blue-600" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{o.what.title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6">{o.what.desc}</p>

                        <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-6 border border-blue-100">
                            <h3 className="font-bold text-xl text-foreground mb-4">{o.what.details.title}</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground">{o.what.details.duration}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground">{o.what.details.total}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Gift className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground">{o.what.details.why}</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* How to Start */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-heartopia-pink" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{o.start.title}</h2>
                        </div>

                        <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-8 border border-pink-100 mb-6">
                            <p className="font-semibold text-foreground mb-4">{o.start.prereq}</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-heartopia-pink">1.</span>
                                    <span className="text-foreground">{o.start.step1}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-heartopia-pink">2.</span>
                                    <span className="text-foreground">{o.start.step2}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-heartopia-pink">3.</span>
                                    <span className="text-foreground">{o.start.step3}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-orange-100">
                            <p className="font-semibold text-foreground mb-4">{o.start.accept}</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 bg-orange-50 p-4 rounded-xl">
                                    <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground">{o.start.npc}</span>
                                </li>
                                <li className="flex items-start gap-3 bg-orange-50 p-4 rounded-xl">
                                    <Sparkles className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground">{o.start.interact}</span>
                                </li>
                            </ul>
                            <p className="text-sm text-muted-foreground mt-4 italic">{o.start.tracker}</p>
                        </div>
                    </section>

                    {/* Exact Location */}
                    <section className="mb-16 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 border-2 border-amber-200">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-amber-600" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{o.location.title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6">{o.location.desc}</p>

                        <div className="space-y-4 mb-6">
                            <div className="bg-white p-6 rounded-2xl border-2 border-amber-300">
                                <p className="text-foreground font-bold text-lg mb-2">📍 {o.location.primary}</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl">
                                <p className="text-muted-foreground text-sm">{o.location.alternate}</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6">
                            <h3 className="font-bold text-lg text-foreground mb-4">{o.location.directions.title}</h3>
                            <ol className="space-y-2">
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-amber-600">1.</span>
                                    <span className="text-foreground">{o.location.directions.step1}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-amber-600">2.</span>
                                    <span className="text-foreground">{o.location.directions.step2}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-amber-600">3.</span>
                                    <span className="text-foreground">{o.location.directions.step3}</span>
                                </li>
                            </ol>
                            <p className="mt-4 p-3 bg-amber-50 rounded-lg text-sm text-amber-900">
                                💡 {o.location.tip}
                            </p>
                        </div>
                    </section>

                    {/* Step-by-Step Guide */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center">
                                <Camera className="w-6 h-6 text-heartopia-sky" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{o.steps.title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6">{o.steps.intro}</p>

                        <div className="bg-white rounded-3xl p-8 border border-sky-100">
                            <ol className="space-y-4">
                                {[o.steps.step1, o.steps.step2, o.steps.step3, o.steps.step4, o.steps.step5].map((step, index) => (
                                    <li key={index} className="flex items-start gap-4 p-4 bg-sky-50 rounded-xl">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-heartopia-sky text-white flex items-center justify-center font-bold">
                                            {index + 1}
                                        </span>
                                        <span className="text-foreground pt-1">{step}</span>
                                    </li>
                                ))}
                            </ol>
                            <p className="mt-6 text-center text-sm font-semibold text-heartopia-sky bg-sky-50 p-3 rounded-lg">
                                ⏱️ {o.steps.time}
                            </p>
                        </div>
                    </section>

                    {/* Rewards */}
                    <section className="mb-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                                <Gift className="w-6 h-6 text-purple-600" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{o.rewards.title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6">{o.rewards.intro}</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-white p-6 rounded-2xl text-center">
                                <div className="text-3xl mb-2">🎫</div>
                                <p className="text-foreground font-semibold">{o.rewards.token}</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl text-center">
                                <div className="text-3xl mb-2">🎁</div>
                                <p className="text-foreground font-semibold">{o.rewards.pack}</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl text-center">
                                <div className="text-3xl mb-2">🥚</div>
                                <p className="text-foreground font-semibold">{o.rewards.ornament}</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border-2 border-purple-200">
                            <p className="text-foreground">{o.rewards.full}</p>
                        </div>
                    </section>

                    {/* Tips */}
                    <section className="mb-16 bg-green-50 border-2 border-green-200 rounded-3xl p-8">
                        <h2 className="font-serif text-2xl font-bold text-green-900 mb-6">{o.tips.title}</h2>
                        <div className="space-y-3">
                            <div className="bg-white p-4 rounded-xl">
                                <p className="text-foreground">❌ {o.tips.cantFind}</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl">
                                <p className="text-foreground">🌍 {o.tips.server}</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl">
                                <p className="text-foreground">📅 {o.tips.missed}</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl">
                                <p className="text-foreground">⚡ {o.tips.efficiency}</p>
                            </div>
                            <div className="bg-white p-4 rounded-xl">
                                <p className="text-foreground">🔮 {o.tips.future}</p>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center">
                                <HelpCircle className="w-6 h-6 text-heartopia-pink" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{o.faq.title}</h2>
                        </div>

                        <Accordion type="single" collapsible className="space-y-4">
                            {[
                                { q: o.faq.q1, a: o.faq.a1 },
                                { q: o.faq.q2, a: o.faq.a2 },
                                { q: o.faq.q3, a: o.faq.a3 }
                            ].map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-white rounded-2xl border border-blue-100 px-6 shadow-sm hover:shadow-md transition-shadow"
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
                        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">{o.relatedTitle}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link
                                href={`/${locale}/meteor-shower`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {o.relatedMeteor}
                                </span>
                            </Link>
                            <Link
                                href={`/${locale}/where-is-doris`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {o.relatedDoris}
                                </span>
                            </Link>
                            <Link
                                href={`/${locale}`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {o.relatedHome}
                                </span>
                            </Link>
                            <Link
                                href={`/${locale}/piano`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {o.relatedPiano}
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
