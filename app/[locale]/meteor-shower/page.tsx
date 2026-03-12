import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import Image from "next/image"
import {
    ChevronRight,
    Home,
    Sparkles,
    MapPin,
    Star,
    ShoppingBag,
    Lightbulb,
    HelpCircle,
    ArrowRight,
    Mountain,
    Clock,
    Coins
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
        title: t.meteorShower.metaTitle,
        description: t.meteorShower.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/meteor-shower`,
            languages: {
                "en": "https://theheartopia.com/en/meteor-shower",
                "th": "https://theheartopia.com/th/meteor-shower",
                "pt": "https://theheartopia.com/pt/meteor-shower",
                "es": "https://theheartopia.com/es/meteor-shower",
                "x-default": "https://theheartopia.com/en/meteor-shower",
            },
        },
        openGraph: {
            title: t.meteorShower.metaTitle,
            description: t.meteorShower.metaDesc,
            url: `https://theheartopia.com/${locale}/meteor-shower`,
            siteName: 'Heartopia Hub',
            locale: locale,
            type: 'article',
            images: [
                {
                    url: 'https://theheartopia.com/images/heartopia-preview.png',
                    width: 1200,
                    height: 630,
                    alt: t.meteorShower.heroTitle,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: t.meteorShower.metaTitle,
            description: t.meteorShower.metaDesc,
            images: ['https://theheartopia.com/images/heartopia-preview.png'],
        },
    }
}

export default async function MeteorShowerPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const m = t.meteorShower

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": m.faq.q1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": m.faq.a1
                }
            },
            {
                "@type": "Question",
                "name": m.faq.q2,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": m.faq.a2
                }
            },
            {
                "@type": "Question",
                "name": m.faq.q3,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": m.faq.a3
                }
            },
            {
                "@type": "Question",
                "name": m.faq.q4,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": m.faq.a4
                }
            },
            {
                "@type": "Question",
                "name": m.faq.q5,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": m.faq.a5
                }
            },
            {
                "@type": "Question",
                "name": m.faq.q6,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": m.faq.a6
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
                "name": m.heroTitle,
                "item": `https://theheartopia.com/${locale}/meteor-shower`
            }
        ]
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": m.heroTitle,
        "description": m.metaDesc,
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
                    <span className="text-foreground font-medium">{t.navbar.guideMeteor}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12">
                        <Badge className="bg-orange-500/10 text-orange-600 hover:bg-orange-500/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold">
                            {m.badge}
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {m.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            {m.heroDesc}
                        </p>
                        <div className="relative aspect-video w-full mb-8 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src="/images/guides/meteor-locations/heartopia-meteor-shower-locations-page-cover-image.webp"
                                alt={m.heroTitle}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <p className="text-lg text-orange-700 font-medium bg-orange-50 p-4 rounded-2xl border border-orange-100 italic">
                            {m.intro}
                        </p>
                    </header>

                    {/* Understanding Mechanics */}
                    <section className="mb-16 bg-white rounded-3xl p-8 shadow-sm border border-orange-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                                <Clock className="w-6 h-6 text-purple-600" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{m.understanding.title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6">{m.understanding.desc}</p>

                        <div className="space-y-6">
                            {/* Predict */}
                            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-6 border border-purple-100">
                                <h3 className="font-bold text-xl text-foreground mb-3">{m.understanding.predict.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{m.understanding.predict.text}</p>
                            </div>

                            {/* Legend */}
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 border border-amber-100">
                                <h3 className="font-bold text-xl text-foreground mb-3">{m.understanding.legend.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{m.understanding.legend.text}</p>
                            </div>
                        </div>
                    </section>

                    {/* All 9 Locations */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-heartopia-sky" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{m.locations.title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-8">{m.locations.desc}</p>

                        <div className="space-y-6">
                            {/* North Hills */}
                            <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-8 border border-blue-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <Mountain className="w-6 h-6 text-blue-600" />
                                    <h3 className="font-bold text-2xl text-foreground">{m.locations.north.title}</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 bg-white p-4 rounded-xl">
                                        <Star className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-foreground">{m.locations.north.item1}</span>
                                    </li>
                                    <li className="flex items-start gap-3 bg-white p-4 rounded-xl">
                                        <Star className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-foreground">{m.locations.north.item2}</span>
                                    </li>
                                </ul>
                                <div className="grid grid-cols-1 gap-6 mt-6">
                                    {[1, 2, 3].map((num) => (
                                        <div key={num} className="relative aspect-video rounded-xl overflow-hidden shadow-sm border-2 border-white">
                                            <Image
                                                src={`/images/guides/meteor-locations/heartopia-meteor-shower-locations-${num}.webp`}
                                                alt={`${m.imageAltLocation} ${num}`}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute top-4 left-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                                                {num}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Lakeside */}
                            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 border border-teal-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <Sparkles className="w-6 h-6 text-teal-600" />
                                    <h3 className="font-bold text-2xl text-foreground">{m.locations.lakeside.title}</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 bg-white p-4 rounded-xl">
                                        <Star className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-foreground">{m.locations.lakeside.item1}</span>
                                    </li>
                                    <li className="flex items-start gap-3 bg-white p-4 rounded-xl">
                                        <Star className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-foreground">{m.locations.lakeside.item2}</span>
                                    </li>
                                </ul>
                                <div className="grid grid-cols-1 gap-6 mt-6">
                                    {[4, 5, 6, 7].map((num) => (
                                        <div key={num} className="relative aspect-video rounded-xl overflow-hidden shadow-sm border-2 border-white">
                                            <Image
                                                src={`/images/guides/meteor-locations/heartopia-meteor-shower-locations-${num}.webp`}
                                                alt={`${m.imageAltLocation} ${num}`}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute top-4 left-4 bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                                                {num}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Main Road */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <MapPin className="w-6 h-6 text-green-600" />
                                    <h3 className="font-bold text-2xl text-foreground">{m.locations.road.title}</h3>
                                </div>
                                <div className="bg-white p-4 rounded-xl mb-6">
                                    <p className="text-foreground">{m.locations.road.text}</p>
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                    {[8, 9].map((num) => (
                                        <div key={num} className="relative aspect-video rounded-xl overflow-hidden shadow-sm border-2 border-white">
                                            <Image
                                                src={`/images/guides/meteor-locations/heartopia-meteor-shower-locations-${num}.webp`}
                                                alt={`${m.imageAltLocation} ${num}`}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute top-4 left-4 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                                                {num}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Finding Doris */}
                    <section className="mb-16 bg-gradient-to-br from-heartopia-pink/5 to-heartopia-sky/5 rounded-3xl p-8 border border-heartopia-pink/20">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center">
                                <ShoppingBag className="w-6 h-6 text-heartopia-pink" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{m.doris.title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-8">{m.doris.desc}</p>

                        <div className="relative aspect-video w-full mb-8 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                            <Image
                                src="/images/guides/meteor-locations/heartopia-meteor-shower-locations-doris.webp"
                                alt={m.imageAltDoris}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-6">
                            {/* Location */}
                            <div className="bg-white rounded-2xl p-6">
                                <h3 className="font-bold text-xl text-foreground mb-3">{m.doris.location.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{m.doris.location.text}</p>
                            </div>

                            {/* Rewards */}
                            <div className="bg-white rounded-2xl p-6">
                                <h3 className="font-bold text-xl text-foreground mb-3">{m.doris.rewards.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">{m.doris.rewards.text}</p>
                                <div className="space-y-3">
                                    <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                                        <p className="font-semibold text-orange-700">⭐ {m.doris.rewards.priority}</p>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                                        <p className="font-semibold text-purple-700">🏆 {m.doris.rewards.achievement}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Price List */}
                    <section className="mb-16 bg-white rounded-3xl p-8 shadow-sm border border-orange-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                                <Coins className="w-6 h-6 text-amber-600" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{m.priceList.title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6">{m.priceList.desc}</p>

                        {/* Price Table */}
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-heartopia-cream">
                                        <th className="text-left p-4 font-bold text-foreground border-b-2 border-heartopia-pink/20">
                                            {m.priceList.thItem}
                                        </th>
                                        <th className="text-left p-4 font-bold text-foreground border-b-2 border-heartopia-pink/20">
                                            {m.priceList.thPrice}
                                        </th>
                                        <th className="text-left p-4 font-bold text-foreground border-b-2 border-heartopia-pink/20">
                                            {m.priceList.thNotes}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {m.priceList.items.map((item: any, index: number) => (
                                        <tr key={index} className="border-b border-slate-100 hover:bg-heartopia-cream/50 transition-colors">
                                            <td className="p-4 font-medium text-foreground">{item.name}</td>
                                            <td className="p-4 text-heartopia-pink-darker font-bold">{item.price}</td>
                                            <td className="p-4 text-muted-foreground text-sm">{item.note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Regular Items */}
                        <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-6 border border-slate-200">
                            <h3 className="font-bold text-xl text-foreground mb-4">{m.priceList.regular.title}</h3>
                            <p className="text-muted-foreground mb-4">{m.priceList.regular.desc}</p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-5 h-5 text-heartopia-pink flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground">{m.priceList.regular.item1}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-5 h-5 text-heartopia-pink flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground">{m.priceList.regular.item2}</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Pro Tips */}
                    <section className="mb-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
                                <Lightbulb className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{m.tips.title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6">{m.tips.desc}</p>

                        <div className="space-y-4">
                            <div className="bg-white rounded-2xl p-6">
                                <h3 className="font-bold text-lg text-foreground mb-2">💼 {m.tips.tip1.title}</h3>
                                <p className="text-muted-foreground">{m.tips.tip1.text}</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6">
                                <h3 className="font-bold text-lg text-foreground mb-2">🚴 {m.tips.tip2.title}</h3>
                                <p className="text-muted-foreground">{m.tips.tip2.text}</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6">
                                <h3 className="font-bold text-lg text-foreground mb-2">⭐ {m.tips.tip3.title}</h3>
                                <p className="text-muted-foreground">{m.tips.tip3.text}</p>
                            </div>
                        </div>
                    </section>

                    {/* Strategy */}
                    <section className="mb-16 bg-white rounded-3xl p-8 shadow-sm border border-orange-100">
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">{m.strategy.title}</h2>
                        <p className="text-lg text-muted-foreground mb-6">{m.strategy.desc}</p>

                        <div className="space-y-4">
                            <div className="bg-heartopia-cream rounded-2xl p-6">
                                <h3 className="font-bold text-lg text-foreground mb-2">🔄 {m.strategy.conversion.title}</h3>
                                <p className="text-muted-foreground">{m.strategy.conversion.text}</p>
                            </div>
                            <div className="bg-heartopia-cream rounded-2xl p-6">
                                <h3 className="font-bold text-lg text-foreground mb-2">💎 {m.strategy.stockpile.title}</h3>
                                <p className="text-muted-foreground">{m.strategy.stockpile.text}</p>
                            </div>
                            <div className="bg-heartopia-cream rounded-2xl p-6">
                                <h3 className="font-bold text-lg text-foreground mb-2">🏆 {m.strategy.achievement.title}</h3>
                                <p className="text-muted-foreground">{m.strategy.achievement.text}</p>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center">
                                <HelpCircle className="w-6 h-6 text-heartopia-pink" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{m.faq.title}</h2>
                        </div>

                        <Accordion type="single" collapsible className="space-y-4">
                            {[
                                { q: m.faq.q1, a: m.faq.a1 },
                                { q: m.faq.q2, a: m.faq.a2 },
                                { q: m.faq.q3, a: m.faq.a3 },
                                { q: m.faq.q4, a: m.faq.a4 },
                                { q: m.faq.q5, a: m.faq.a5 },
                                { q: m.faq.q6, a: m.faq.a6 }
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
                        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">{m.related.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link
                                href={`/${locale}/where-is-doris`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {m.related.doris}
                                </span>
                            </Link>
                            <Link
                                href={`/${locale}/guides/fishing`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {m.related.fishing}
                                </span>
                            </Link>
                            <Link
                                href={`/${locale}/guides/housing`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {m.related.housing}
                                </span>
                            </Link>
                            <Link
                                href={`/${locale}/npcs`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {m.related.npcs}
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
