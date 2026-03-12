import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import {
    Monitor,
    Home,
    ChevronRight,
    AlertTriangle,
    Info,
    ShieldCheck,
    HelpCircle,
    ArrowRight,
    Search,
    Download,
    CheckCircle2,
    X,
    Globe,
    Smartphone,
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
    const p = t.platformsPc

    return {
        title: p.metaTitle,
        description: p.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/platforms/pc`,
            languages: {
                "en": "https://theheartopia.com/en/platforms/pc",
                "th": "https://theheartopia.com/th/platforms/pc",
                "pt": "https://theheartopia.com/pt/platforms/pc",
                "es": "https://theheartopia.com/es/platforms/pc",
                "x-default": "https://theheartopia.com/en/platforms/pc",
            },
        },
        openGraph: {
            title: p.metaTitle,
            description: p.metaDesc,
            url: `https://theheartopia.com/${locale}/platforms/pc`,
            siteName: "Heartopia Guide",
            images: [
                {
                    url: "/images/hero-banner.webp",
                    width: 1200,
                    height: 630,
                    alt: "Heartopia on PC and Windows",
                },
            ],
            locale: locale === "th" ? "th_TH" : "en_US",
            type: "article",
        },
    }
}

export default async function PlatformsPcPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const p = t.platformsPc

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
            "@id": `https://theheartopia.com/${locale}/platforms/pc`
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
                        <Badge className="bg-heartopia-sky/10 text-heartopia-sky hover:bg-heartopia-sky/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold uppercase tracking-wider">
                            PC & Windows Guide
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {p.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {p.intro}
                        </p>
                    </header>

                    {/* Alert Box */}
                    <div className="bg-amber-50/50 rounded-[32px] p-6 md:p-8 border border-amber-100 mb-12 flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-500 shrink-0">
                            <Info className="w-6 h-6" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed italic text-lg">
                            {p.safetyIntro}
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-20">
                        {/* Section 1: Availability */}
                        <section id="is-available" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                    <Monitor className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{p.isAvailable.title}</h2>
                            </div>
                            <div className="space-y-8">
                                <p className="text-muted-foreground text-lg leading-relaxed">{p.isAvailable.text}</p>
                                <div className="bg-white/60 p-8 rounded-[40px] border border-white shadow-sm">
                                    <h3 className="font-bold text-xl mb-6 text-foreground">{p.isAvailable.meansTitle}</h3>
                                    <ul className="space-y-4">
                                        {[p.isAvailable.li1, p.isAvailable.li2, p.isAvailable.li3, p.isAvailable.li4].map((li, i) => (
                                            <li key={i} className="flex gap-4 items-start text-muted-foreground">
                                                <div className="w-2 h-2 rounded-full bg-heartopia-sky mt-2.5 shrink-0" />
                                                <span>{li}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Windows */}
                        <section id="windows" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink">
                                    <Monitor className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{p.windows.title}</h2>
                            </div>
                            <div className="space-y-6">
                                <p className="text-muted-foreground text-lg leading-relaxed">{p.windows.text}</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[p.windows.li1, p.windows.li2, p.windows.li3].map((li, i) => (
                                        <div key={i} className="bg-white/80 p-6 rounded-3xl border border-heartopia-pink/10 flex flex-col items-center text-center">
                                            <div className="w-10 h-10 rounded-full bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink mb-3">
                                                <X className="w-5 h-5" />
                                            </div>
                                            <p className="text-sm font-medium text-muted-foreground">{li}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-center text-muted-foreground text-sm opacity-70 italic">{p.windows.footer}</p>
                            </div>
                        </section>

                        {/* Section 3: Safety */}
                        <section id="safety" className="scroll-mt-32">
                            <div className="bg-gradient-to-br from-heartopia-sky/10 to-heartopia-pink/10 rounded-[48px] p-8 md:p-12 border border-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                                        <ShieldCheck className="w-8 h-8 text-heartopia-pink" /> {p.safety.title}
                                    </h2>
                                    <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">{p.safety.text}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="bg-white/80 p-8 rounded-[32px] border border-white shadow-soft-blue">
                                            <h3 className="font-bold text-xl mb-4 text-foreground flex items-center gap-2">
                                                <Download className="w-5 h-5 text-heartopia-sky" /> {p.safety.policyTitle}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">{p.safety.policyText}</p>
                                        </div>
                                        <div className="bg-white/80 p-8 rounded-[32px] border border-white shadow-soft-pink">
                                            <h3 className="font-bold text-xl mb-4 text-foreground flex items-center gap-2">
                                                <AlertTriangle className="w-5 h-5 text-heartopia-pink" /> {p.safety.avoidTitle}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed text-sm">{p.safety.avoidText}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Why Not & Future */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">{p.whyNot.title}</h2>
                                <p className="text-muted-foreground leading-relaxed">{p.whyNot.text}</p>
                            </div>
                            <div>
                                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">{p.future.title}</h2>
                                <p className="text-muted-foreground leading-relaxed">{p.future.text}</p>
                            </div>
                        </section>

                        {/* Section 5: Comparison Table */}
                        <section id="comparison" className="scroll-mt-32">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">{p.comparison.title}</h2>
                            <div className="overflow-hidden rounded-[32px] border border-white bg-white/40 shadow-soft-blue">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-white/80 border-b border-heartopia-pink/10">
                                                <th className="px-6 py-5 font-bold text-foreground">{p.comparison.thFeature}</th>
                                                <th className="px-6 py-5 font-bold text-foreground text-center">{p.comparison.thPc}</th>
                                                <th className="px-6 py-5 font-bold text-foreground text-center">{p.comparison.thSupported}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-heartopia-pink/5">
                                            {p.comparison.rows.map((row: any, i: number) => (
                                                <tr key={i} className="hover:bg-white/40 transition-colors">
                                                    <td className="px-6 py-5 font-medium text-foreground">{row[0]}</td>
                                                    <td className="px-6 py-5 text-center">
                                                        <Badge variant="outline" className={row[1] === "Yes" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}>
                                                            {row[1]}
                                                        </Badge>
                                                    </td>
                                                    <td className="px-6 py-5 text-center">
                                                        <Badge variant="outline" className={row[2] === "Yes" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}>
                                                            {row[2]}
                                                        </Badge>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: FAQ */}
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
                                            <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                                                {p.faq[`a${i}` as keyof typeof p.faq]}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </section>

                        {/* CTA: Back to Platforms */}
                        <section className="bg-white/60 p-12 rounded-[48px] border border-white text-center">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">{p.canPlay.title}</h2>
                            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">{p.canPlay.text}</p>
                            <Link href={`/${locale}/platforms`} className="btn-bouncy inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-heartopia-pink-dark to-heartopia-pink-darker text-white font-bold shadow-soft-pink">
                                <ArrowRight className="w-5 h-5" /> {p.canPlay.cta}
                            </Link>
                        </section>

                        {/* Related Guides */}
                        <section className="pt-8 mb-12 border-t border-heartopia-pink/10">
                            <h2 className="text-2xl font-bold text-foreground mb-6">{p.related.title}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { name: p.related.link1, href: `/${locale}/platforms`, icon: Globe, color: "text-heartopia-sky", bg: "bg-heartopia-sky/10" },
                                    { name: p.related.link2, href: `/${locale}/platforms/play-store`, icon: Smartphone, color: "text-heartopia-pink", bg: "bg-heartopia-pink/10" },
                                    { name: p.related.link4, href: `/${locale}/release-date`, icon: Calendar, color: "text-heartopia-orange", bg: "bg-heartopia-orange/10" },
                                    { name: t.navbar.guides, href: `/${locale}/guides/fishing`, icon: CheckCircle2, color: "text-heartopia-sky", bg: "bg-heartopia-sky/10" }
                                ].map((link, i) => (
                                    <Link key={i} href={link.href} className="group flex items-center justify-between p-6 bg-white rounded-[32px] border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-2xl ${link.bg} flex items-center justify-center ${link.color}`}>
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
