import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import {
    Monitor,
    Smartphone,
    Gamepad2,
    Globe,
    ChevronRight,
    HelpCircle,
    Home,
    Download,
    CheckCircle2,
    AlertTriangle,
    Info,
    ArrowRight,
    Calendar
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
    const p = t.platforms

    return {
        title: p.metaTitle,
        description: p.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/platforms`,
            languages: {
                "en": "https://theheartopia.com/en/platforms",
                "th": "https://theheartopia.com/th/platforms",
                "pt": "https://theheartopia.com/pt/platforms",
                "es": "https://theheartopia.com/es/platforms",
                "x-default": "https://theheartopia.com/en/platforms",
            },
        },
        openGraph: {
            title: p.metaTitle,
            description: p.metaDesc,
            url: `https://theheartopia.com/${locale}/platforms`,
            siteName: "Heartopia Guide",
            images: [
                {
                    url: "/images/hero-banner.webp",
                    width: 1200,
                    height: 630,
                    alt: "Heartopia Platforms & Availability",
                },
            ],
            locale: locale === "th" ? "th_TH" : "en_US",
            type: "article",
        },
    }
}

export default async function PlatformsPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const p = t.platforms

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": p.heroTitle,
        "description": p.metaDesc,
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
            "@id": `https://theheartopia.com/${locale}/platforms`
        }
    }

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [1, 2, 3, 4].map((i) => ({
            "@type": "Question",
            "name": p.faq[`q${i}` as keyof typeof p.faq],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": p.faq[`a${i}` as keyof typeof p.faq]
            }
        }))
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
                    <span className="text-foreground font-medium">{p.heroTitle}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12">
                        <Badge className="bg-heartopia-sky/10 text-heartopia-sky hover:bg-heartopia-sky/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold uppercase tracking-wider">
                            Availability Guide
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {p.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {p.heroDesc}
                        </p>
                    </header>

                    {/* Intro */}
                    <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-16">
                        <p>{p.intro}</p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-20">
                        {/* Overview Table Section */}
                        <section id="overview" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{p.overview.title}</h2>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{p.overview.text}</p>

                            <div className="overflow-hidden rounded-[32px] border border-white bg-white/40 shadow-soft-blue">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-white/80 border-b border-heartopia-pink/10">
                                                <th className="px-6 py-5 font-bold text-foreground">{p.overview.thPlatform}</th>
                                                <th className="px-6 py-5 font-bold text-foreground text-center">{p.overview.thSupported}</th>
                                                <th className="px-6 py-5 font-bold text-foreground">{p.overview.thNotes}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-heartopia-pink/5">
                                            {p.overview.rows.map((row: any, i: number) => (
                                                <tr key={i} className="hover:bg-white/40 transition-colors">
                                                    <td className="px-6 py-5 font-bold text-foreground flex items-center gap-3">
                                                        {row.p.includes("PC") ? <Monitor className="w-5 h-5 text-heartopia-sky" /> :
                                                            row.p.includes("Play Store") ? <Smartphone className="w-5 h-5 text-heartopia-pink" /> :
                                                                row.p.includes("Nintendo") ? <Gamepad2 className="w-5 h-5 text-heartopia-orange" /> :
                                                                    <Globe className="w-5 h-5 text-heartopia-sky" />}
                                                        {row.p}
                                                    </td>
                                                    <td className="px-6 py-5 text-center">
                                                        <Badge variant="outline" className={row.s.includes("Yes") ? "border-green-200 text-green-700 bg-green-50" : "border-amber-200 text-amber-700 bg-amber-50"}>
                                                            {row.s}
                                                        </Badge>
                                                    </td>
                                                    <td className="px-6 py-5 text-muted-foreground">
                                                        {row.n}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* PC Section */}
                        <section id="pc" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                    <Monitor className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{p.pc.title}</h2>
                            </div>
                            <div className="bg-white/60 p-8 rounded-[40px] border border-white shadow-sm mb-8">
                                <p className="text-muted-foreground text-lg leading-relaxed mb-8">{p.pc.text}</p>
                                <div className="bg-amber-50/50 rounded-3xl p-8 border border-amber-100">
                                    <h3 className="font-bold text-xl mb-6 text-foreground flex items-center gap-2">
                                        <Info className="w-6 h-6 text-amber-500" /> {p.pc.notesTitle}
                                    </h3>
                                    <ul className="space-y-4">
                                        {[p.pc.li1, p.pc.li2, p.pc.li3].map((li, i) => (
                                            <li key={i} className="flex gap-4 items-start text-muted-foreground">
                                                <AlertTriangle className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                                                <span>{li}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <Link href={`/${locale}/platforms/pc`} className="inline-flex items-center gap-2 text-heartopia-pink font-bold hover:underline">
                                <ArrowRight className="w-5 h-5" /> {p.pc.cta}
                            </Link>
                        </section>

                        {/* Mobile Section */}
                        <section id="mobile" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{p.mobile.title}</h2>
                            </div>
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                <p>{p.mobile.p1}</p>
                                <p>{p.mobile.p2}</p>
                                <Link href={`/${locale}/platforms/play-store`} className="inline-flex items-center gap-2 text-heartopia-sky font-bold hover:underline">
                                    <ArrowRight className="w-5 h-5" /> {p.mobile.cta}
                                </Link>
                            </div>
                        </section>

                        {/* Switch Section */}
                        <section id="switch" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                    <Gamepad2 className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{p.switch.title}</h2>
                            </div>
                            <div className="bg-white/60 p-8 rounded-[40px] border border-white shadow-sm space-y-6 mb-8">
                                <p className="text-muted-foreground text-lg leading-relaxed">{p.switch.text}</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[p.switch.li1, p.switch.li2, p.switch.li3].map((li, i) => (
                                        <div key={i} className="bg-white/80 p-6 rounded-3xl border border-heartopia-orange/10 flex flex-col items-center text-center">
                                            <div className="w-10 h-10 rounded-full bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange mb-3">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <p className="text-sm font-medium text-muted-foreground">{li}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Link href={`/${locale}/platforms/switch`} className="inline-flex items-center gap-2 text-heartopia-orange font-bold hover:underline">
                                <ArrowRight className="w-5 h-5" /> {p.switch.cta}
                            </Link>
                        </section>

                        {/* Online Section */}
                        <section id="online" className="scroll-mt-32">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">{p.online.title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white/60 p-8 rounded-[40px] border border-heartopia-sky/10 shadow-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-sky/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-bold text-xl mb-4 text-foreground flex items-center gap-2">
                                        <Globe className="w-6 h-6 text-heartopia-sky" /> {p.online.sub1}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">{p.online.desc1}</p>
                                </div>
                                <div className="bg-white/60 p-8 rounded-[40px] border border-heartopia-pink/10 shadow-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                                    <h3 className="font-bold text-xl mb-4 text-foreground flex items-center gap-2">
                                        <CheckCircle2 className="w-6 h-6 text-heartopia-pink" /> {p.online.sub2}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">{p.online.desc2}</p>
                                </div>
                            </div>
                            <p className="text-center text-muted-foreground text-sm mt-8 opacity-70 italic">{p.online.text}</p>
                        </section>

                        {/* Download Section */}
                        <section id="download" className="scroll-mt-32">
                            <div className="bg-gradient-to-br from-heartopia-sky/10 to-heartopia-pink/10 rounded-[48px] p-8 md:p-12 border border-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                                        <Download className="w-8 h-8 text-heartopia-pink" /> {p.download.title}
                                    </h2>
                                    <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">{p.download.text}</p>
                                    <div className="bg-white/80 p-8 rounded-[32px] border border-white shadow-soft-pink">
                                        <h3 className="font-bold text-xl mb-3 text-foreground">{p.download.safetyTitle}</h3>
                                        <p className="text-heartopia-pink-darker font-medium">{p.download.safetyText}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-500">
                                    <HelpCircle className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{p.faq.title}</h2>
                            </div>

                            <div className="glass rounded-[32px] p-2 md:p-6 border border-white/50 bg-white/40 shadow-soft-blue">
                                <Accordion type="single" collapsible className="w-full">
                                    {[1, 2, 3, 4].map((i) => (
                                        <AccordionItem key={i} value={`faq-${i}`} className="border-none mb-2 bg-white/50 rounded-2xl px-6">
                                            <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-heartopia-pink-dark transition-colors py-4">
                                                {p.faq[`q${i}` as keyof typeof p.faq]}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6 text-wrap">
                                                {p.faq[`a${i}` as keyof typeof p.faq]}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </section>

                        {/* Related Guides */}
                        <section className="pt-8 mb-12 border-t border-heartopia-pink/10">
                            <h2 className="text-2xl font-bold text-foreground mb-6">Continue Your Journey</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Link href={`/${locale}/release-date`} className="group flex items-center justify-between p-6 bg-white rounded-[32px] border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/5 flex items-center justify-center text-heartopia-pink">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-foreground">Official Release Date</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
                                </Link>
                                <Link href={`/${locale}/guides/fishing`} className="group flex items-center justify-between p-6 bg-white rounded-[32px] border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                            <Monitor className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-foreground">Fishing Guide in Heartopia</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
                                </Link>
                                <Link href={`/${locale}/guides/housing`} className="group flex items-center justify-between p-6 bg-white rounded-[32px] border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/5 flex items-center justify-center text-heartopia-pink">
                                            <Home className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-foreground">House Ideas & Blueprints</span>
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
