import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import {
    Fish,
    ChevronRight,
    Search,
    Clock,
    Waves,
    BookOpen,
    HelpCircle,
    ArrowRight,
    MapPin,
    Zap,
    Utensils,
    Home,
    Droplets,
    Wind,
    Sun
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
import { FishDatabaseCards } from "@/components/heartopia/fish-database-cards"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const fl = t.fishLocations

    return {
        title: fl.metaTitle,
        description: fl.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/guides/fish-locations`,
            languages: {
                "en": "https://theheartopia.com/en/guides/fish-locations",
                "th": "https://theheartopia.com/th/guides/fish-locations",
                "pt": "https://theheartopia.com/pt/guides/fish-locations",
                "es": "https://theheartopia.com/es/guides/fish-locations",
                "id": "https://theheartopia.com/id/guides/fish-locations",
                "x-default": "https://theheartopia.com/en/guides/fish-locations",
            },
        },
        openGraph: {
            title: fl.metaTitle,
            description: fl.metaDesc,
            url: `https://theheartopia.com/${locale}/guides/fish-locations`,
            siteName: "Heartopia Guide",
            images: [
                {
                    url: "/images/hero-banner.webp",
                    width: 1200,
                    height: 630,
                    alt: "Fish Locations in Heartopia Guide",
                },
            ],
            locale: locale === "th" ? "th_TH" : "en_US",
            type: "article",
        },
    }
}

export default async function FishLocationsPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const fl = t.fishLocations

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": fl.heroTitle,
        "description": fl.metaDesc,
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
            "@id": `https://theheartopia.com/${locale}/guides/fish-locations`
        }
    }

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [1, 2, 3, 4].map((i) => ({
            "@type": "Question",
            "name": fl.faq[`q${i}` as keyof typeof fl.faq],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": fl.faq[`a${i}` as keyof typeof fl.faq]
            }
        }))
    }

    const sections = [
        { id: "overview", title: fl.overviewTitle },
        { id: "lakes", title: fl.lake.title },
        { id: "rivers", title: fl.river.title },
        { id: "coastal", title: fl.ocean.title },
        { id: "hidden", title: fl.hidden.title },
        { id: "rare", title: fl.rare.title },
        ...("completeDatabase" in fl && fl.completeDatabase ? [{ id: "complete-database", title: fl.completeDatabase.title }] : [])
    ]

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
                    <Link href={`/${locale}/guides/fishing`} className="hover:text-heartopia-pink-dark transition-colors">
                        {t.navbar.guides}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{fl.heroTitle}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12">
                        <Badge className="bg-heartopia-pink/10 text-heartopia-pink hover:bg-heartopia-pink/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold uppercase tracking-wider">
                            Location Guide
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {fl.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {fl.heroDesc}
                        </p>
                    </header>

                    {/* Intro Section */}
                    <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
                        <p>{fl.intro}</p>
                        <p dangerouslySetInnerHTML={{ __html: fl.mechanicsLink }} />
                    </div>

                    {/* Quick Access Sidebar-style TOC */}
                    <div className="glass rounded-[32px] p-6 border border-white/50 mb-12 bg-white/60 shadow-soft-blue">
                        <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-heartopia-pink" /> Quick Navigation
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

                    {/* Content Sections */}
                    <div className="space-y-16">
                        {/* Overview */}
                        <section id="overview" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                    <Search className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{fl.overviewTitle}</h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {fl.overviewDesc}
                            </p>
                        </section>

                        {/* Lakes and Ponds */}
                        <section id="lakes" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                    <Waves className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{fl.lake.title}</h2>
                            </div>
                            <div className="space-y-6">
                                <p className="text-muted-foreground text-lg leading-relaxed">{fl.lake.desc1}</p>
                                <div className="bg-white/60 p-8 rounded-[32px] border border-white shadow-sm">
                                    <h3 className="font-bold text-xl mb-4 text-foreground">{fl.lake.subTitle}</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">{fl.lake.text}</p>
                                </div>
                            </div>
                        </section>

                        {/* Rivers and Streams */}
                        <section id="rivers" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink">
                                    <Droplets className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{fl.river.title}</h2>
                            </div>
                            <div className="space-y-6">
                                <p className="text-muted-foreground text-lg leading-relaxed">{fl.river.desc1}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white/60 p-8 rounded-[32px] border border-white shadow-sm">
                                        <h3 className="font-bold text-xl mb-4 text-foreground">{fl.river.subTitle}</h3>
                                        <ul className="space-y-3">
                                            {[fl.river.li1, fl.river.li2, fl.river.li3].map((li, i) => (
                                                <li key={i} className="flex gap-3 items-start text-muted-foreground">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-heartopia-pink mt-2.5 shrink-0" />
                                                    <span>{li}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-white/60 p-8 rounded-[32px] border border-white shadow-sm flex flex-col justify-center">
                                        <h3 className="font-bold text-xl mb-4 text-foreground">{fl.river.listTitle}</h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed">{fl.river.text}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Coastal Waters */}
                        <section id="coastal" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                    <Droplets className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{fl.ocean.title}</h2>
                            </div>
                            <div className="space-y-6">
                                <p className="text-muted-foreground text-lg leading-relaxed">{fl.ocean.desc1}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white/60 p-8 rounded-[32px] border border-white shadow-sm">
                                        <h3 className="font-bold text-xl mb-4 text-foreground">{fl.ocean.subTitle}</h3>
                                        <ul className="space-y-3">
                                            {[fl.ocean.li1, fl.ocean.li2, fl.ocean.li3].map((li, i) => (
                                                <li key={i} className="flex gap-3 items-start text-muted-foreground">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-heartopia-sky mt-2.5 shrink-0" />
                                                    <span>{li}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-white/60 p-8 rounded-[32px] border border-white shadow-sm">
                                        <h3 className="font-bold text-xl mb-4 text-foreground">{fl.ocean.listTitle}</h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed">{fl.ocean.text}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Hidden Spots */}
                        <section id="hidden" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                    <Wind className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{fl.hidden.title}</h2>
                            </div>
                            <div className="space-y-6">
                                <p className="text-muted-foreground text-lg leading-relaxed">{fl.hidden.desc1}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white/60 p-8 rounded-[32px] border border-white shadow-sm">
                                        <h3 className="font-bold text-xl mb-4 text-foreground">{fl.hidden.subTitle}</h3>
                                        <ul className="space-y-3">
                                            {[fl.hidden.li1, fl.hidden.li2, fl.hidden.li3, fl.hidden.li4].map((li, i) => (
                                                <li key={i} className="flex gap-3 items-start text-muted-foreground">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-heartopia-orange mt-2.5 shrink-0" />
                                                    <span>{li}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-white/60 p-8 rounded-[32px] border border-white shadow-sm">
                                        <h3 className="font-bold text-xl mb-4 text-foreground">{fl.hidden.uniqueTitle}</h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed">{fl.hidden.text}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Rare Fish Locations */}
                        <section id="rare" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{fl.rare.title}</h2>
                            </div>
                            <div className="space-y-6">
                                <p className="text-muted-foreground text-lg leading-relaxed">{fl.rare.desc1}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white/60 p-8 rounded-[32px] border border-white shadow-sm">
                                        <h3 className="font-bold text-xl mb-4 text-foreground">{fl.rare.subTitle}</h3>
                                        <ul className="space-y-3">
                                            {[fl.rare.li1, fl.rare.li2, fl.rare.li3].map((li, i) => (
                                                <li key={i} className="flex gap-3 items-start text-muted-foreground">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-heartopia-pink mt-2.5 shrink-0" />
                                                    <span>{li}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-white/60 p-8 rounded-[32px] border border-white shadow-sm">
                                        <h3 className="font-bold text-xl mb-4 text-foreground">{fl.rare.useTitle}</h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: fl.rare.text }} />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Quick Reference Table */}
                        <section className="scroll-mt-32">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">{fl.table.title}</h2>
                            <div className="overflow-hidden rounded-[32px] border border-white bg-white/40 shadow-soft-blue">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-white/80 border-b border-heartopia-pink/10">
                                                <th className="px-6 py-5 font-bold text-foreground">{fl.table.thType}</th>
                                                <th className="px-6 py-5 font-bold text-foreground text-center">{fl.table.thVariety}</th>
                                                <th className="px-6 py-5 font-bold text-foreground text-center">{fl.table.thDiff}</th>
                                                <th className="px-6 py-5 font-bold text-foreground">{fl.table.thBest}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-heartopia-pink/5">
                                            {fl.table.rows.map((row: any, i: number) => (
                                                <tr key={i} className="hover:bg-white/40 transition-colors">
                                                    <td className="px-6 py-5 font-bold text-foreground">{row.type}</td>
                                                    <td className="px-6 py-5 text-center">
                                                        <Badge variant="outline" className="border-heartopia-sky/30 text-heartopia-sky-dark bg-heartopia-sky/5">
                                                            {row.variety}
                                                        </Badge>
                                                    </td>
                                                    <td className="px-6 py-5 text-center text-muted-foreground">{row.diff}</td>
                                                    <td className="px-6 py-5 text-muted-foreground">{row.best}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* Complete Fish Database */}
                        {"completeDatabase" in fl && fl.completeDatabase && (
                            <section id="complete-database" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                        <Fish className="w-6 h-6" />
                                    </div>
                                    <h2 className="font-serif text-3xl font-bold text-foreground">{fl.completeDatabase.title}</h2>
                                </div>
                                <p className="text-muted-foreground text-lg mb-4 leading-relaxed">{fl.completeDatabase.subtitle}</p>
                                <div className="bg-heartopia-pink/5 border border-heartopia-pink/20 rounded-2xl p-4 mb-8">
                                    <p className="text-sm text-muted-foreground italic">{fl.completeDatabase.note}</p>
                                </div>

                                {/* Interactive Fish Database Cards */}
                                <FishDatabaseCards translations={fl.completeDatabase} />
                            </section>
                        )}

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-500">
                                    <HelpCircle className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{fl.faq.title}</h2>
                            </div>

                            <div className="glass rounded-[32px] p-2 md:p-6 border border-white/50 bg-white/40 shadow-soft-blue">
                                <Accordion type="single" collapsible className="w-full">
                                    {[1, 2, 3, 4].map((i) => (
                                        <AccordionItem key={i} value={`faq-${i}`} className="border-none mb-2 bg-white/50 rounded-2xl px-6">
                                            <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-heartopia-pink-dark transition-colors py-4">
                                                {fl.faq[`q${i}` as keyof typeof fl.faq]}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                                                {fl.faq[`a${i}` as keyof typeof fl.faq]}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </section>

                        {/* Related Guides Footer */}
                        <section className="pt-8 mb-12 border-t border-heartopia-pink/10">
                            <h2 className="text-2xl font-bold text-foreground mb-6">Continue Your Journey</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Link href={`/${locale}/guides/fishing`} className="group flex items-center justify-between p-6 bg-white rounded-[32px] border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                            <Fish className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-foreground">Fishing Guide in Heartopia</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
                                </Link>
                                <Link href={`/${locale}/recipes/mushroom-pie`} className="group flex items-center justify-between p-6 bg-white rounded-[32px] border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                            <Utensils className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-foreground">Mushroom Pie Recipe</span>
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
