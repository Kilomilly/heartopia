import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import {
    Smartphone,
    Home,
    ChevronRight,
    Globe,
    AlertTriangle,
    Info,
    ShieldCheck,
    HelpCircle,
    ArrowRight,
    Download,
    CheckCircle2,
    Monitor,
    Gamepad2,
    Search
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
    const p = t.playStore

    return {
        title: p.metaTitle,
        description: p.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/platforms/play-store`,
            languages: {
                "en": "https://theheartopia.com/en/platforms/play-store",
                "th": "https://theheartopia.com/th/platforms/play-store",
                "pt": "https://theheartopia.com/pt/platforms/play-store",
                "es": "https://theheartopia.com/es/platforms/play-store",
                "x-default": "https://theheartopia.com/en/platforms/play-store",
            },
        },
        openGraph: {
            title: p.metaTitle,
            description: p.metaDesc,
            url: `https://theheartopia.com/${locale}/platforms/play-store`,
            siteName: "Heartopia Guide",
            images: [
                {
                    url: "/images/hero-banner.webp",
                    width: 1200,
                    height: 630,
                    alt: "Heartopia Play Store Official Download and Availability",
                },
            ],
            locale: locale === "th" ? "th_TH" : "en_US",
            type: "article",
        },
    }
}

export default async function PlayStorePage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const p = t.playStore

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
            "@id": `https://theheartopia.com/${locale}/platforms/play-store`
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
                    <Link href={`/${locale}/platforms`} className="hover:text-heartopia-pink-dark transition-colors">
                        {t.navbar.platforms}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{p.heroTitle}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12">
                        <Badge className="bg-heartopia-pink/10 text-heartopia-pink hover:bg-heartopia-pink/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold uppercase tracking-wider">
                            Official Mobile
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {p.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {p.intro}
                        </p>
                    </header>

                    {/* Intro Alert */}
                    <div className="bg-white/60 rounded-[32px] p-8 border border-white shadow-sm mb-12">
                        <div className="flex gap-4 items-start">
                            <Info className="w-6 h-6 text-heartopia-pink mt-1 shrink-0" />
                            <p className="text-lg text-muted-foreground leading-relaxed italic">
                                {p.detailIntro}
                            </p>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-20">
                        {/* Section 1: Availability */}
                        <section id="availability" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{p.availability.title}</h2>
                            </div>
                            <div className="bg-white/60 p-8 rounded-[40px] border border-white shadow-sm transition-all hover:shadow-soft-pink">
                                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{p.availability.text}</p>
                                <p className="font-bold text-foreground mb-4">{p.availability.subText}</p>
                                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[p.availability.li1, p.availability.li2, p.availability.li3].map((li, i) => (
                                        <li key={i} className="flex gap-3 items-center p-4 bg-white/40 rounded-2xl border border-white/50">
                                            <CheckCircle2 className="w-5 h-5 text-heartopia-pink" />
                                            <span className="text-muted-foreground text-sm font-medium">{li}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 p-6 bg-amber-50/50 rounded-[24px] border border-amber-100 flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                                    <p className="text-muted-foreground italic text-sm">{p.availability.footer}</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Regional */}
                        <section id="regional" className="scroll-mt-32">
                            <div className="bg-gradient-to-br from-heartopia-sky/5 to-heartopia-pink/5 rounded-[48px] p-8 md:p-12 border border-white">
                                <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                                    <Globe className="w-8 h-8 text-heartopia-sky" /> {p.regional.title}
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-8">{p.regional.text}</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    {[p.regional.li1, p.regional.li2, p.regional.li3].map((li, i) => (
                                        <div key={i} className="bg-white/80 p-6 rounded-3xl border border-white shadow-sm flex flex-col gap-3">
                                            <div className="w-10 h-10 rounded-full bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky font-bold text-xl">
                                                {i + 1}
                                            </div>
                                            <span className="font-medium text-foreground">{li}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-6">
                                    <p className="text-muted-foreground leading-relaxed p-6 bg-white/40 rounded-3xl border border-white/50 italic">
                                        {p.regional.p}
                                    </p>
                                    <Link href={`/${locale}/platforms`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-heartopia-sky text-white font-bold hover:bg-heartopia-sky/90 transition-all shadow-lg hover:scale-105 active:scale-95">
                                        <ArrowRight className="w-5 h-5" /> {p.regional.cta}
                                    </Link>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Compatibility */}
                        <section id="compatibility" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{p.compatibility.title}</h2>
                            </div>
                            <div className="bg-white/80 p-8 rounded-[40px] border border-white shadow-soft-blue">
                                <p className="text-muted-foreground text-lg leading-relaxed mb-8">{p.compatibility.text}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    {[p.compatibility.li1, p.compatibility.li2, p.compatibility.li3].map((li, i) => (
                                        <div key={i} className="p-4 bg-white rounded-2xl border border-heartopia-sky/10 flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-heartopia-sky shrink-0" />
                                            <span className="text-muted-foreground font-medium">{li}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="p-6 bg-heartopia-sky/5 rounded-3xl border border-heartopia-sky/10 text-muted-foreground italic">
                                    {p.compatibility.footer}
                                </p>
                            </div>
                        </section>

                        {/* Section 4: How To & Safety */}
                        <section id="download" className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* How To */}
                            <div className="bg-white/80 p-8 rounded-[40px] border border-white shadow-soft-pink">
                                <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                                    <Download className="w-8 h-8 text-heartopia-pink" /> {p.howTo.title}
                                </h2>
                                <p className="text-muted-foreground mb-8">{p.howTo.text}</p>
                                <div className="space-y-4">
                                    {[p.howTo.li1, p.howTo.li2, p.howTo.li3, p.howTo.li4].map((li, i) => (
                                        <div key={i} className="flex gap-4 items-start group">
                                            <div className="w-8 h-8 rounded-lg bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink font-bold group-hover:bg-heartopia-pink group-hover:text-white transition-colors">
                                                {i + 1}
                                            </div>
                                            <p className="text-muted-foreground font-medium pt-1 text-lg leading-tight group-hover:text-foreground transition-colors">{li}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Safety */}
                            <div className="bg-white/80 p-8 rounded-[40px] border border-white shadow-soft-orange">
                                <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                                    <ShieldCheck className="w-8 h-8 text-heartopia-orange" /> {p.safety.title}
                                </h2>
                                <div className="space-y-6">
                                    {[p.safety.li1, p.safety.li2, p.safety.li3].map((li, i) => (
                                        <div key={i} className="flex gap-4 items-center p-6 bg-red-50/30 rounded-3xl border border-red-100/50">
                                            <AlertTriangle className="w-6 h-6 text-red-500 shrink-0" />
                                            <span className="font-bold text-red-700/80">{li}</span>
                                        </div>
                                    ))}
                                    <p className="p-6 bg-heartopia-orange/5 rounded-3xl border border-heartopia-orange/10 text-muted-foreground text-center font-bold">
                                        {p.safety.footer}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Not Showing */}
                        <section id="not-showing" className="scroll-mt-32">
                            <div className="bg-white/60 p-12 rounded-[48px] border border-white">
                                <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                                    <Search className="w-8 h-8 text-heartopia-pink" /> {p.notShowing.title}
                                </h2>
                                <p className="text-muted-foreground text-lg mb-8">{p.notShowing.text}</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    {[p.notShowing.li1, p.notShowing.li2, p.notShowing.li3].map((li, i) => (
                                        <div key={i} className="flex gap-4 items-start p-6 bg-white rounded-3xl border border-heartopia-pink/10">
                                            <CheckCircle2 className="w-5 h-5 text-heartopia-pink mt-1 shrink-0" />
                                            <span className="text-muted-foreground font-medium">{li}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-center text-sm text-muted-foreground opacity-60 italic">{p.notShowing.footer}</p>
                            </div>
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison" className="scroll-mt-32">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">{p.comparison.title}</h2>
                            <div className="overflow-hidden rounded-[32px] border border-white bg-white/40 shadow-soft-blue">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-white/80 border-b border-heartopia-pink/10">
                                                <th className="px-6 py-5 font-bold text-foreground">{p.comparison.thPlatform}</th>
                                                <th className="px-6 py-5 font-bold text-foreground text-center">{p.comparison.thStatus}</th>
                                                <th className="px-6 py-5 font-bold text-foreground">{p.comparison.thNotes}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-heartopia-pink/5">
                                            {p.comparison.rows.map((row: any, i: number) => (
                                                <tr key={i} className="hover:bg-white/40 transition-colors">
                                                    <td className="px-6 py-5 font-bold text-foreground flex items-center gap-3">
                                                        {row[0].includes("Play Store") ? <Smartphone className="w-5 h-5 text-heartopia-pink" /> :
                                                            row[0].includes("PC") ? <Monitor className="w-5 h-5 text-heartopia-sky" /> :
                                                                <Gamepad2 className="w-5 h-5 text-heartopia-orange" />}
                                                        {row[0]}
                                                    </td>
                                                    <td className="px-6 py-5 text-center">
                                                        <Badge variant="outline" className={row[1].includes("Yes") || row[1].includes("ใช่") ? "border-green-200 text-green-700 bg-green-50" : "border-amber-200 text-amber-700 bg-amber-50"}>
                                                            {row[1]}
                                                        </Badge>
                                                    </td>
                                                    <td className="px-6 py-5 text-muted-foreground">{row[2]}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-32">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                                <HelpCircle className="w-8 h-8 text-heartopia-sky" /> {p.faq.title}
                            </h2>
                            <Accordion type="single" collapsible className="w-full">
                                {[1, 2, 3, 4].map((i) => (
                                    <AccordionItem key={i} value={`faq-${i}`} className="border-none mb-4 bg-white/80 rounded-[32px] px-8 border border-white">
                                        <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-heartopia-pink-dark transition-colors py-6">
                                            {p.faq[`q${i}` as keyof typeof p.faq]}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8">
                                            {p.faq[`a${i}` as keyof typeof p.faq]}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>

                        {/* Related Guides */}
                        <section className="pt-8 mb-12 border-t border-heartopia-pink/10">
                            <h2 className="text-2xl font-bold text-foreground mb-6">{p.related.title}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { name: p.related.link1, href: `/${locale}/platforms`, icon: Globe },
                                    { name: p.related.link2, href: `/${locale}/platforms/pc`, icon: Monitor },
                                    { name: p.related.link3, href: `/${locale}/release-date`, icon: Smartphone },
                                    { name: p.related.link4, href: `/${locale}/guides/fishing`, icon: CheckCircle2 }
                                ].map((link, i) => (
                                    <Link key={i} href={link.href} className="group flex items-center justify-between p-6 bg-white rounded-[32px] border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/5 flex items-center justify-center text-heartopia-pink">
                                                <link.icon className="w-6 h-6" />
                                            </div>
                                            <span className="font-bold text-foreground">{link.name}</span>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </article>

            <Footer t={t.footer} locale={locale} />
        </main>
    )
}
