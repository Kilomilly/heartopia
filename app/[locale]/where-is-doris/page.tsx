import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import {
    ChevronRight,
    Home,
    CloudRain,
    Snowflake,
    Rainbow,
    Sparkles,
    MapPin,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    HelpCircle,
    ArrowRight,
    CloudSun
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
        title: t.dorisLocation.metaTitle,
        description: t.dorisLocation.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/where-is-doris`,
            languages: {
                "en": "https://theheartopia.com/en/where-is-doris",
                "th": "https://theheartopia.com/th/where-is-doris",
                "pt": "https://theheartopia.com/pt/where-is-doris",
                "es": "https://theheartopia.com/es/where-is-doris",
                "id": "https://theheartopia.com/id/where-is-doris",
                "x-default": "https://theheartopia.com/en/where-is-doris",
            },
        },
        openGraph: {
            title: t.dorisLocation.metaTitle,
            description: t.dorisLocation.metaDesc,
            url: `https://theheartopia.com/${locale}/where-is-doris`,
            siteName: 'Heartopia Hub',
            locale: locale,
            type: 'article',
        },
    }
}

export default async function DorisLocationPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const d = t.dorisLocation

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": d.faq.q1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": d.faq.a1
                }
            },
            {
                "@type": "Question",
                "name": d.faq.q2,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": d.faq.a2
                }
            },
            {
                "@type": "Question",
                "name": d.faq.q3,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": d.faq.a3
                }
            },
            {
                "@type": "Question",
                "name": d.faq.q4,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": d.faq.a4
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
                "name": t.navbar.guides,
                "item": `https://theheartopia.com/${locale}/guides`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": d.heroTitle,
                "item": `https://theheartopia.com/${locale}/where-is-doris`
            }
        ]
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

            <Navbar t={t.navbar} locale={locale} />

            {/* Breadcrumbs */}
            <nav className="pt-32 pb-6 px-4">
                <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-muted-foreground">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span>{t.navbar.guides}</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{d.heroTitle}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12">
                        <Badge className="bg-heartopia-pink/10 text-heartopia-pink hover:bg-heartopia-pink/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold">
                            NPC Guide
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {d.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                            {d.heroDesc}
                        </p>
                        <p className="text-lg text-heartopia-pink-darker font-medium bg-heartopia-pink/10 p-4 rounded-2xl border border-heartopia-pink/20">
                            {d.intro}
                        </p>
                    </header>

                    {/* Quick Answer Section */}
                    <section className="mb-16 bg-white rounded-3xl p-8 shadow-sm border border-orange-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-heartopia-sky" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{d.quickAnswer.title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6">{d.quickAnswer.subtitle}</p>

                        {/* Weather Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-heartopia-cream">
                                        <th className="text-left p-4 font-bold text-foreground border-b-2 border-heartopia-pink/20">
                                            {d.quickAnswer.tableHeader1}
                                        </th>
                                        <th className="text-left p-4 font-bold text-foreground border-b-2 border-heartopia-pink/20">
                                            {d.quickAnswer.tableHeader2}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-slate-100 hover:bg-heartopia-cream/50 transition-colors">
                                        <td className="p-4 flex items-center gap-2">
                                            <CloudRain className="w-5 h-5 text-blue-500" />
                                            <span className="font-medium">🌧️ {d.quickAnswer.rain}</span>
                                        </td>
                                        <td className="p-4 text-muted-foreground">{d.quickAnswer.rainLocation}</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 hover:bg-heartopia-cream/50 transition-colors">
                                        <td className="p-4 flex items-center gap-2">
                                            <Snowflake className="w-5 h-5 text-sky-400" />
                                            <span className="font-medium">❄️ {d.quickAnswer.snowfall}</span>
                                        </td>
                                        <td className="p-4 text-muted-foreground">{d.quickAnswer.snowfallLocation}</td>
                                    </tr>
                                    <tr className="border-b border-slate-100 hover:bg-heartopia-cream/50 transition-colors">
                                        <td className="p-4 flex items-center gap-2">
                                            <Rainbow className="w-5 h-5 text-purple-500" />
                                            <span className="font-medium">🌈 {d.quickAnswer.rainbow}</span>
                                        </td>
                                        <td className="p-4 text-muted-foreground">{d.quickAnswer.rainbowLocation}</td>
                                    </tr>
                                    <tr className="hover:bg-heartopia-cream/50 transition-colors">
                                        <td className="p-4 flex items-center gap-2">
                                            <Sparkles className="w-5 h-5 text-orange-500" />
                                            <span className="font-medium">☄️ {d.quickAnswer.meteor}</span>
                                        </td>
                                        <td className="p-4 text-muted-foreground">{d.quickAnswer.meteorLocation}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="mt-6 text-sm text-muted-foreground italic bg-slate-50 p-4 rounded-xl">
                            {d.quickAnswer.noWeather}
                        </p>
                    </section>

                    {/* Detailed Explanation */}
                    <section className="mb-16">
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-8">{d.explained.title}</h2>

                        <div className="space-y-6">
                            {/* Rain/Snowfall */}
                            <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-8 border border-blue-100">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                                        <CloudRain className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-foreground mb-2">🌧️ {d.explained.rain.title}</h3>
                                        <p className="text-sm font-medium text-blue-700 mb-3">{d.explained.rain.location}</p>
                                        <p className="text-muted-foreground leading-relaxed">{d.explained.rain.desc}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Rainbow */}
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                                        <Rainbow className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-foreground mb-2">🌈 {d.explained.rainbow.title}</h3>
                                        <p className="text-sm font-medium text-purple-700 mb-3">{d.explained.rainbow.location}</p>
                                        <p className="text-muted-foreground leading-relaxed">{d.explained.rainbow.desc}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Meteor Shower */}
                            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-100">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                                        <Sparkles className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-foreground mb-2">☄️ {d.explained.meteor.title}</h3>
                                        <p className="text-sm font-medium text-orange-700 mb-3">{d.explained.meteor.location}</p>
                                        <p className="text-muted-foreground leading-relaxed">{d.explained.meteor.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Snow Warning */}
                    <section className="mb-16 bg-amber-50 border-2 border-amber-200 rounded-3xl p-8">
                        <div className="flex items-start gap-4 mb-6">
                            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
                            <div>
                                <h2 className="font-serif text-2xl font-bold text-amber-900 mb-2">{d.snowWarning.title}</h2>
                                <p className="text-amber-800 font-medium">{d.snowWarning.subtitle}</p>
                            </div>
                        </div>

                        <p className="text-lg text-amber-900 mb-6">{d.snowWarning.p1}</p>

                        <div className="space-y-4 mb-6">
                            <div className="flex items-center gap-3 bg-white p-4 rounded-xl">
                                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                                <p className="font-medium text-foreground">{d.snowWarning.snowGround}</p>
                            </div>
                            <div className="flex items-center gap-3 bg-white p-4 rounded-xl">
                                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                                <p className="font-medium text-foreground">{d.snowWarning.snowFalling}</p>
                            </div>
                        </div>

                        <p className="text-amber-900 font-medium italic">{d.snowWarning.footer}</p>
                    </section>

                    {/* Checklist */}
                    <section className="mb-16 bg-white rounded-3xl p-8 shadow-sm border border-orange-100">
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">{d.checklist.title}</h2>
                        <p className="text-lg text-muted-foreground mb-6">{d.checklist.intro}</p>

                        <div className="space-y-3 mb-6">
                            {[d.checklist.item1, d.checklist.item2, d.checklist.item3, d.checklist.item4, d.checklist.item5].map((item, index) => (
                                <div key={index} className="flex items-start gap-3 p-4 bg-heartopia-cream rounded-xl hover:bg-heartopia-pink/5 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-heartopia-pink/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-sm font-bold text-heartopia-pink-darker">{index + 1}</span>
                                    </div>
                                    <p className="text-foreground leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-muted-foreground italic bg-slate-50 p-4 rounded-xl">{d.checklist.footer}</p>
                    </section>

                    {/* What Does Doris Do */}
                    <section className="mb-16 bg-gradient-to-br from-heartopia-pink/5 to-heartopia-sky/5 rounded-3xl p-8 border border-heartopia-pink/20">
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-6">{d.whatDoes.title}</h2>
                        <p className="text-lg text-muted-foreground mb-6">{d.whatDoes.intro}</p>

                        <ul className="space-y-3 mb-6">
                            {[d.whatDoes.item1, d.whatDoes.item2, d.whatDoes.item3].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <ArrowRight className="w-5 h-5 text-heartopia-pink flex-shrink-0 mt-1" />
                                    <span className="text-foreground leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-muted-foreground italic">{d.whatDoes.footer}</p>
                    </section>

                    {/* How to Check Weather */}
                    <section className="mb-16 bg-white rounded-3xl p-8 shadow-sm border border-orange-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center">
                                <CloudSun className="w-6 h-6 text-heartopia-sky" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{d.howToCheck.title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6">{d.howToCheck.intro}</p>

                        <ol className="space-y-4 mb-6">
                            {[d.howToCheck.step1, d.howToCheck.step2, d.howToCheck.step3].map((step, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-heartopia-sky/20 flex items-center justify-center flex-shrink-0">
                                        <span className="font-bold text-heartopia-sky">{index + 1}</span>
                                    </div>
                                    <p className="text-foreground leading-relaxed pt-1">{step}</p>
                                </li>
                            ))}
                        </ol>

                        <p className="text-muted-foreground italic bg-slate-50 p-4 rounded-xl">{d.howToCheck.footer}</p>
                    </section>

                    {/* Shop Offerings Section */}
                    <section className="mb-16">
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-8">{d.shopOfferings?.title || "Doris Shop Offerings by Weather"}</h2>

                        <div className="space-y-8">
                            {/* Rain & Snowfall Shop */}
                            <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-8 border border-blue-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <CloudRain className="w-8 h-8 text-blue-600" />
                                    <h3 className="font-bold text-2xl text-foreground">{d.shopOfferings?.rain.title || "Rain & Snowfall Shop Items"}</h3>
                                </div>

                                <p className="text-muted-foreground leading-relaxed mb-4">{d.shopOfferings?.rain.subtitle}</p>
                                <p className="text-sm text-blue-700 font-medium bg-blue-100 p-3 rounded-xl mb-6">{d.shopOfferings?.rain.note}</p>

                                {/* Image */}
                                <div className="bg-white rounded-2xl p-4 mb-6 overflow-hidden">
                                    <img
                                        src="/images/guides/doris-rain-location.webp"
                                        alt={d.shopOfferings?.rain.imageAlt || "Doris location during rain in Heartopia on Art Street"}
                                        className="w-full h-auto rounded-xl"
                                        loading="lazy"
                                    />
                                    <p className="text-xs text-muted-foreground text-center mt-2 italic">
                                        (Image via XD Entertainment / Discord user vi.x)
                                    </p>
                                </div>

                                <p className="text-foreground leading-relaxed mb-4">{d.shopOfferings?.rain.intro}</p>

                                <ul className="space-y-2">
                                    {d.shopOfferings?.rain.items.map((item: string, index: number) => (
                                        <li key={index} className="flex items-start gap-3 bg-white p-3 rounded-xl">
                                            <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-xs font-bold text-blue-700">✓</span>
                                            </div>
                                            <span className="text-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Rainbow Shop */}
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <Rainbow className="w-8 h-8 text-purple-600" />
                                    <h3 className="font-bold text-2xl text-foreground">{d.shopOfferings?.rainbow.title || "Rainbow Shop Items"}</h3>
                                </div>

                                <p className="text-muted-foreground leading-relaxed mb-4">{d.shopOfferings?.rainbow.subtitle}</p>
                                <p className="text-foreground leading-relaxed mb-4">{d.shopOfferings?.rainbow.location}</p>
                                <p className="text-sm text-purple-700 font-medium bg-purple-100 p-3 rounded-xl mb-6">{d.shopOfferings?.rainbow.note}</p>

                                {/* Image */}
                                <div className="bg-white rounded-2xl p-4 mb-6 overflow-hidden">
                                    <img
                                        src="/images/guides/doris-rainbow-location.webp"
                                        alt={d.shopOfferings?.rainbow.imageAlt || "Doris location during rainbow weather in Heartopia"}
                                        className="w-full h-auto rounded-xl"
                                        loading="lazy"
                                    />
                                    <p className="text-xs text-muted-foreground text-center mt-2 italic">
                                        (Image via XD Entertainment / Discord user vi.x)
                                    </p>
                                </div>

                                <p className="text-foreground leading-relaxed mb-4">{d.shopOfferings?.rainbow.intro}</p>

                                <ul className="space-y-2">
                                    {d.shopOfferings?.rainbow.items.map((item: string, index: number) => (
                                        <li key={index} className="flex items-start gap-3 bg-white p-3 rounded-xl">
                                            <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-xs font-bold text-purple-700">✓</span>
                                            </div>
                                            <span className="text-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Meteor Shower Shop */}
                            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <Sparkles className="w-8 h-8 text-orange-600" />
                                    <h3 className="font-bold text-2xl text-foreground">{d.shopOfferings?.meteor.title || "Meteor Shower Shop Items"}</h3>
                                </div>

                                <p className="text-muted-foreground leading-relaxed mb-4">{d.shopOfferings?.meteor.subtitle}</p>

                                {/* Image */}
                                <div className="bg-white rounded-2xl p-4 mb-6 overflow-hidden">
                                    <img
                                        src="/images/guides/doris-during-meteor-shower.webp"
                                        alt={d.shopOfferings?.meteor.imageAlt || "Doris location during meteor shower in Heartopia on Onsen Mountain"}
                                        className="w-full h-auto rounded-xl"
                                        loading="lazy"
                                    />
                                    <p className="text-xs text-muted-foreground text-center mt-2 italic">
                                        (Image via XD Entertainment / Discord user vi.x)
                                    </p>
                                </div>

                                <p className="text-foreground leading-relaxed mb-4">{d.shopOfferings?.meteor.special}</p>
                                <p className="text-sm text-orange-700 font-medium bg-orange-100 p-3 rounded-xl mb-4">{d.shopOfferings?.meteor.currency}</p>

                                <ul className="space-y-2">
                                    {d.shopOfferings?.meteor.items.map((item: string, index: number) => (
                                        <li key={index} className="flex items-start gap-3 bg-white p-3 rounded-xl">
                                            <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <span className="text-xs font-bold text-orange-700">✓</span>
                                            </div>
                                            <span className="text-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center">
                                <HelpCircle className="w-6 h-6 text-heartopia-pink" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{d.faq.title}</h2>
                        </div>

                        <Accordion type="single" collapsible className="space-y-4">
                            {[
                                { q: d.faq.q1, a: d.faq.a1 },
                                { q: d.faq.q2, a: d.faq.a2 },
                                { q: d.faq.q3, a: d.faq.a3 },
                                { q: d.faq.q4, a: d.faq.a4 }
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
                        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">{d.related.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link
                                href={`/${locale}/guides/fishing`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {d.related.fishing}
                                </span>
                            </Link>
                            <Link
                                href={`/${locale}/guides/fish-locations`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {d.related.fishLocations}
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
