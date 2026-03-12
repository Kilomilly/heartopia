import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import {
    ChevronRight,
    Home,
    Music,
    Clock,
    MapPin,
    Ticket,
    Bug,
    Info,
    ArrowRight,
    Calendar,
    Sparkles,
    CheckCircle2,
    Search,
    HelpCircle
} from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
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
    const s = t.snowConcert

    return {
        title: s.metaTitle,
        description: s.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/events/heartopia-snow-concert-guide`,
            languages: {
                "en": "https://theheartopia.com/en/events/heartopia-snow-concert-guide",
                "th": "https://theheartopia.com/th/events/heartopia-snow-concert-guide",
                "pt": "https://theheartopia.com/pt/events/heartopia-snow-concert-guide",
                "es": "https://theheartopia.com/es/events/heartopia-snow-concert-guide",
                "x-default": "https://theheartopia.com/en/events/heartopia-snow-concert-guide",
            },
        },
        openGraph: {
            title: s.metaTitle,
            description: s.metaDesc,
            url: `https://theheartopia.com/${locale}/events/heartopia-snow-concert-guide`,
            siteName: 'Heartopia Hub',
            locale: locale,
            type: 'article',
            images: ['/images/heartopia-preview.png'],
        },
        twitter: {
            card: 'summary_large_image',
            title: s.metaTitle,
            description: s.metaDesc,
            images: ['/images/heartopia-preview.png'],
        },
    }
}

export default async function SnowConcertPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const s = t.snowConcert

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": s.faqs.items.map((item: any) => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
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
                "item": `https://theheartopia.com/${locale}/events`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": s.breadcrumb,
                "item": `https://theheartopia.com/${locale}/events/heartopia-snow-concert-guide`
            }
        ]
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": s.heroTitle,
        "description": s.metaDesc,
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
        "datePublished": "2026-02-06",
        "dateModified": "2026-02-06"
    }

    return (
        <main className="min-h-screen bg-[#FEF9F3]">
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
                <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap overflow-x-auto no-scrollbar">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <Link href={`/${locale}/events`} className="hover:text-heartopia-pink-dark transition-colors">
                        {t.navbar.eventGuides}
                    </Link>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    <span className="text-foreground font-medium">{s.breadcrumb}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12">
                        <div className="flex items-center gap-2 mb-6">
                            <Badge className="bg-heartopia-sky/20 text-heartopia-sky-darker hover:bg-heartopia-sky/30 border-none px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                                {s.eventZone}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{s.lastUpdated}</span>
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-[1.1]">
                            {s.heroTitle}
                        </h1>

                        <div className="relative aspect-video md:aspect-[21/9] w-full mb-10 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl bg-orange-50/50">
                            <Image
                                src="/images/guides/snow-concert/heartopia-snow-concert.webp"
                                alt="Heartopia Snow Concert"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                            {s.heroDesc}
                        </p>
                        <div className="bg-white p-8 rounded-[2rem] border border-orange-100 shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-heartopia-pink/20 transition-colors duration-500" />
                            <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                                {s.intro}
                            </p>
                        </div>
                    </header>

                    {/* Time Converter Section */}
                    <section id="time" className="mb-16 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-pink flex items-center justify-center shadow-lg shadow-heartopia-pink/30">
                                <Clock className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{s.timeSection.title}</h2>
                        </div>

                        <div className="bg-white rounded-[2rem] border border-orange-100 shadow-sm overflow-hidden mb-8">
                            <div className="p-8 border-b border-orange-50">
                                <p className="text-lg text-muted-foreground leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: s.timeSection.desc.replace(/\*\*(.*?)\*\*/g, '<strong class="text-heartopia-pink-darker font-bold">$1</strong>') }}
                                />
                            </div>
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader className="bg-orange-50/50">
                                        <TableRow>
                                            {s.timeSection.table.cols.map((col: string, idx: number) => (
                                                <TableHead key={idx} className="font-bold text-foreground h-14">{col}</TableHead>
                                            ))}
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {s.timeSection.table.rows.map((row: string[], idx: number) => (
                                            <TableRow key={idx} className="hover:bg-heartopia-pink/5 transition-colors">
                                                {row.map((cell, cellIdx) => (
                                                    <TableCell key={cellIdx} className={cellIdx === 0 ? "font-bold text-foreground" : "text-muted-foreground"}>
                                                        {cell}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                            <div className="bg-gradient-to-r from-heartopia-pink to-heartopia-pink-dark p-6 text-white text-center font-medium">
                                <p className="flex items-center justify-center gap-2">
                                    <Info className="w-5 h-5 flex-shrink-0" />
                                    {s.timeSection.weeklyNote}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Location Section */}
                    <section id="location" className="mb-16 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-sky flex items-center justify-center shadow-lg shadow-heartopia-sky/30">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{s.locationSection.title}</h2>
                        </div>

                        <div className="bg-white rounded-[2rem] border border-orange-100 p-8 shadow-sm">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8"
                                dangerouslySetInnerHTML={{ __html: s.locationSection.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-heartopia-sky-darker">$1</strong>') }}
                            />

                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-orange-50/50 border-4 border-white shadow-lg mb-4">
                                <Image
                                    src="/images/guides/snow-concert/heartopia-snow-concert-map.webp"
                                    alt="Heartopia Snow Concert Location Map"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>
                            <p className="text-sm text-center text-muted-foreground italic">
                                Looking for the big colorful stage next to the Onsen Ice Rink.
                            </p>
                        </div>
                    </section>

                    {/* Quest Steps */}
                    <section id="steps" className="mb-16 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-orange flex items-center justify-center shadow-lg shadow-heartopia-orange/30">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{s.questSteps.title}</h2>
                        </div>

                        <div className="space-y-4">
                            {s.questSteps.steps.map((step: string, idx: number) => (
                                <div key={idx} className="flex gap-6 p-6 bg-white rounded-3xl border border-orange-100 hover:border-heartopia-orange hover:shadow-md transition-all group">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-heartopia-orange/20 text-heartopia-orange flex items-center justify-center font-black text-lg group-hover:bg-heartopia-orange group-hover:text-white transition-colors">
                                        {idx + 1}
                                    </div>
                                    <p className="text-[1.05rem] text-muted-foreground leading-relaxed pt-1.5 font-medium">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Bug Fixes */}
                    <section id="bugs" className="mb-16 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-pink flex items-center justify-center shadow-lg shadow-heartopia-pink/30">
                                <Bug className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{s.bugFixes.title}</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {s.bugFixes.list.map((item: any, idx: number) => (
                                <div key={idx} className="bg-white rounded-[2rem] border border-orange-100 p-8 hover:border-heartopia-pink/30 hover:shadow-md transition-all">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Badge className="bg-heartopia-pink/20 text-heartopia-pink-darker hover:bg-heartopia-pink/30 rounded-md uppercase text-[10px] tracking-tighter border-none">Issue</Badge>
                                        <h3 className="font-bold text-foreground">{item.issue}</h3>
                                    </div>
                                    <div className="bg-heartopia-pink/5 p-4 rounded-xl border border-heartopia-pink/20">
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            <strong className="text-heartopia-pink-darker uppercase text-[11px] block mb-1">Solution:</strong>
                                            {item.solution}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Rewards */}
                    <section id="rewards" className="mb-16 scroll-mt-24">
                        <div className="bg-gradient-to-br from-heartopia-pink to-heartopia-pink-dark rounded-[3rem] p-12 text-white shadow-xl shadow-heartopia-pink/20 relative overflow-hidden">
                            <Sparkles className="absolute top-8 right-12 w-16 h-16 text-white/10" />
                            <div className="flex items-center gap-3 mb-10 relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                                    <Ticket className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold">{s.rewards.title}</h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                                {s.rewards.list.map((reward: string, idx: number) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors group">
                                        <div className="w-10 h-10 rounded-full bg-white text-heartopia-pink-darker flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                                            {idx + 1}
                                        </div>
                                        <p className="font-bold text-lg leading-tight">{reward}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Pro Tips */}
                    <section id="tips" className="mb-16 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-sky flex items-center justify-center shadow-lg shadow-heartopia-sky/30">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{s.tips.title}</h2>
                        </div>

                        <ul className="space-y-4">
                            {s.tips.list.map((tip: string, idx: number) => (
                                <li key={idx} className="flex items-center gap-4 p-5 bg-heartopia-sky/10 rounded-2xl border border-heartopia-sky/20 text-heartopia-sky-darker font-medium">
                                    <div className="w-2 h-2 rounded-full bg-heartopia-sky flex-shrink-0" />
                                    {tip}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* FAQ Section */}
                    <section id="faq" className="mb-16 scroll-mt-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-orange flex items-center justify-center shadow-lg shadow-heartopia-orange/30">
                                <HelpCircle className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{s.faqs.title}</h2>
                        </div>

                        <Accordion type="single" collapsible className="space-y-4">
                            {s.faqs.items.map((faq: any, index: number) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-white rounded-3xl border border-orange-100 px-8 shadow-sm hover:shadow-md transition-all overflow-hidden"
                                >
                                    <AccordionTrigger className="text-left font-bold text-foreground hover:text-heartopia-pink-dark py-6 hover:no-underline text-lg">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-[1.05rem]">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>

                    {/* Internal Linking */}
                    <section className="bg-orange-50/50 rounded-[3rem] p-12 border border-orange-100">
                        <h2 className="font-serif text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                            <ArrowRight className="w-6 h-6 text-heartopia-pink" />
                            Discover More Heartopia Guides
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link
                                href={`/${locale}/events/onsen-egg`}
                                className="group p-6 bg-white rounded-3xl border border-orange-100 hover:border-heartopia-pink hover:shadow-md transition-all"
                            >
                                <span className="block text-sm text-muted-foreground font-bold uppercase mb-1 tracking-widest">Seasonal Event</span>
                                <span className="text-lg font-bold text-foreground group-hover:text-heartopia-pink-dark transition-colors">Onsen Egg Guide</span>
                            </Link>
                            <Link
                                href={`/${locale}/recipes/heartopia-recipes-cooking-guide`}
                                className="group p-6 bg-white rounded-3xl border border-orange-100 hover:border-heartopia-pink hover:shadow-md transition-all"
                            >
                                <span className="block text-sm text-muted-foreground font-bold uppercase mb-1 tracking-widest">Mastery</span>
                                <span className="text-lg font-bold text-foreground group-hover:text-heartopia-pink-dark transition-colors">Recipes Hub</span>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <Footer t={t.footer} locale={locale} />
        </main>
    )
}


