import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import {
    Gamepad2,
    Home,
    ChevronRight,
    Globe,
    AlertTriangle,
    Info,
    ShieldCheck,
    HelpCircle,
    ArrowRight,
    Calendar,
    Search,
    Download,
    CheckCircle2,
    Monitor,
    Smartphone
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
    const s = t.switch

    return {
        title: s.metaTitle,
        description: s.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/platforms/switch`,
            languages: {
                "en": "https://theheartopia.com/en/platforms/switch",
                "th": "https://theheartopia.com/th/platforms/switch",
                "pt": "https://theheartopia.com/pt/platforms/switch",
                "es": "https://theheartopia.com/es/platforms/switch",
                "x-default": "https://theheartopia.com/en/platforms/switch",
            },
        },
        openGraph: {
            title: s.metaTitle,
            description: s.metaDesc,
            url: `https://theheartopia.com/${locale}/platforms/switch`,
            siteName: "Heartopia Guide",
            images: [
                {
                    url: "/images/hero-banner.webp",
                    width: 1200,
                    height: 630,
                    alt: "Heartopia Nintendo Switch Release Status and Availability",
                },
            ],
            locale: locale === "th" ? "th_TH" : "en_US",
            type: "article",
        },
    }
}

export default async function SwitchPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const s = t.switch

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": s.heroTitle,
        "description": s.metaDesc,
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
            "@id": `https://theheartopia.com/${locale}/platforms/switch`
        }
    }

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [1, 2, 3, 4].map((i) => ({
            "@type": "Question",
            "name": s.faq[`q${i}` as keyof typeof s.faq],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": s.faq[`a${i}` as keyof typeof s.faq]
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
                    <span className="text-foreground font-medium">{s.heroTitle}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12 text-center md:text-left">
                        <Badge className="bg-heartopia-pink/10 text-heartopia-pink hover:bg-heartopia-pink/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold uppercase tracking-wider">
                            Platform Status
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {s.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                            {s.intro}
                        </p>
                    </header>

                    {/* Intro Alert */}
                    <div className="bg-white/60 rounded-[32px] p-8 border border-white shadow-sm mb-12">
                        <div className="flex gap-4 items-start">
                            <Info className="w-6 h-6 text-heartopia-sky mt-1 shrink-0" />
                            <p className="text-lg text-muted-foreground leading-relaxed italic">
                                {s.detailIntro}
                            </p>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-20">
                        {/* Section 1: Is Available */}
                        <section id="availability" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                    <Gamepad2 className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{s.isAvailable.title}</h2>
                            </div>
                            <div className="bg-white/80 p-8 rounded-[40px] border border-white shadow-soft-orange">
                                <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-bold">{s.isAvailable.text}</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    {[s.isAvailable.li1, s.isAvailable.li2, s.isAvailable.li3].map((li, i) => (
                                        <div key={i} className="flex gap-4 items-center p-6 bg-amber-50/50 rounded-3xl border border-amber-100/50">
                                            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
                                            <span className="font-medium text-amber-900/80">{li}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-muted-foreground opacity-60 italic text-center">
                                    {s.isAvailable.footer}
                                </p>
                            </div>
                        </section>

                        {/* Section 2: Announced */}
                        <section id="announced" className="scroll-mt-32">
                            <div className="bg-white/60 p-12 rounded-[48px] border border-white">
                                <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                                    <Search className="w-8 h-8 text-heartopia-pink" /> {s.announced.title}
                                </h2>
                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{s.announced.text}</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    {[s.announced.li1, s.announced.li2, s.announced.li3].map((li, i) => (
                                        <div key={i} className="flex gap-4 items-start p-6 bg-white rounded-3xl border border-heartopia-pink/10 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-heartopia-pink mt-2 shrink-0" />
                                            <span className="text-muted-foreground font-medium">{li}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 bg-heartopia-pink/5 rounded-3xl border border-heartopia-pink/10 text-center">
                                    <p className="text-heartopia-pink-dark font-bold font-serif italic text-lg">{s.announced.footer}</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Expectations */}
                        <section id="expectations" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{s.expectations.title}</h2>
                            </div>
                            <div className="bg-gradient-to-br from-heartopia-sky/5 to-heartopia-pink/5 rounded-[40px] p-8 md:p-12 border border-white">
                                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{s.expectations.text}</p>
                                <p className="text-muted-foreground italic">{s.expectations.footer}</p>
                            </div>
                        </section>

                        {/* Section 4: Release Date */}
                        <section id="release-date" className="scroll-mt-32">
                            <div className="bg-white/80 p-10 rounded-[48px] border border-white shadow-soft-pink">
                                <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                                    <Calendar className="w-8 h-8 text-heartopia-pink" /> {s.release.title}
                                </h2>
                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{s.release.text}</p>
                                <div className="flex flex-col md:flex-row gap-6 items-center">
                                    <div className="p-6 bg-red-50/50 rounded-3xl border border-red-100 flex items-center gap-4 text-red-700">
                                        <AlertTriangle className="w-6 h-6 shrink-0" />
                                        <p className="font-medium text-sm">{s.release.footer}</p>
                                    </div>
                                    <Link href={`/${locale}/release-date`} className="whitespace-nowrap inline-flex items-center gap-2 px-8 py-4 rounded-full bg-heartopia-pink text-white font-bold hover:bg-heartopia-pink/90 transition-all shadow-lg hover:scale-105 active:scale-95">
                                        <ArrowRight className="w-5 h-5" /> {s.release.cta}
                                    </Link>
                                </div>
                            </div>
                        </section>

                        {/* Comparison Table */}
                        <section id="comparison" className="scroll-mt-32">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">{s.comparison.title}</h2>
                            <div className="overflow-hidden rounded-[32px] border border-white bg-white/40 shadow-soft-blue mb-8">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-white/80 border-b border-heartopia-sky/10">
                                                <th className="px-6 py-5 font-bold text-foreground">{s.comparison.thPlatform}</th>
                                                <th className="px-6 py-5 font-bold text-foreground text-center">{s.comparison.thStatus}</th>
                                                <th className="px-6 py-5 font-bold text-foreground">{s.comparison.thNotes}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-heartopia-sky/5">
                                            {s.comparison.rows.map((row: any, i: number) => (
                                                <tr key={i} className="hover:bg-white/40 transition-colors">
                                                    <td className="px-6 py-5 font-bold text-foreground flex items-center gap-3">
                                                        {row[0].includes("Switch") ? <Gamepad2 className="w-5 h-5 text-heartopia-orange" /> :
                                                            row[0].includes("Play Store") ? <Smartphone className="w-5 h-5 text-heartopia-pink" /> :
                                                                <Monitor className="w-5 h-5 text-heartopia-sky" />}
                                                        {row[0]}
                                                    </td>
                                                    <td className="px-6 py-5 text-center">
                                                        <Badge variant="outline" className={row[1].includes("Yes") || row[1].includes("ใช่") ? "border-green-200 text-green-700 bg-green-50" : "border-amber-200 text-amber-700 bg-amber-50"}>
                                                            {row[1]}
                                                        </Badge>
                                                    </td>
                                                    <td className="px-6 py-5 text-muted-foreground text-sm">{row[2]}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="text-center">
                                <Link href={`/${locale}/platforms`} className="inline-flex items-center gap-2 text-heartopia-sky font-bold hover:underline">
                                    <ArrowRight className="w-5 h-5" /> {s.comparison.cta}
                                </Link>
                            </div>
                        </section>

                        {/* Avoid Claims */}
                        <section id="avoid-claims" className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white/80 p-8 rounded-[40px] border border-white shadow-soft-orange">
                                <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                                    <ShieldCheck className="w-8 h-8 text-heartopia-orange" /> {s.avoid.title}
                                </h2>
                                <p className="text-muted-foreground mb-8 italic">{s.avoid.text}</p>
                                <div className="space-y-4">
                                    {[s.avoid.li1, s.avoid.li2, s.avoid.li3].map((li, i) => (
                                        <div key={i} className="flex gap-4 items-center p-6 bg-red-50/20 rounded-3xl border border-red-100/30 group hover:border-red-200 transition-all">
                                            <XIcon className="w-6 h-6 text-red-500 shrink-0" />
                                            <span className="font-bold text-red-800/70 group-hover:text-red-800 transition-colors">{li}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/80 p-8 rounded-[40px] border border-white shadow-soft-blue flex flex-col justify-center text-center">
                                <Download className="w-16 h-16 text-heartopia-sky mx-auto mb-6" />
                                <p className="text-xl text-muted-foreground font-serif italic max-w-sm mx-auto leading-relaxed">
                                    {s.avoid.footer}
                                </p>
                            </div>
                        </section>

                        {/* Future */}
                        <section id="future" className="scroll-mt-32">
                            <div className="bg-gradient-to-br from-heartopia-sky/5 to-indigo-50/5 p-12 rounded-[48px] border border-white text-center">
                                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">{s.future.title}</h2>
                                <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                                    {s.future.text}
                                </p>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-32">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                                <HelpCircle className="w-8 h-8 text-heartopia-sky" /> {s.faq.title}
                            </h2>
                            <Accordion type="single" collapsible className="w-full">
                                {[1, 2, 3, 4].map((i) => (
                                    <AccordionItem key={i} value={`faq-${i}`} className="border-none mb-4 bg-white/80 rounded-[32px] px-8 border border-white">
                                        <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-heartopia-sky transition-colors py-6">
                                            {s.faq[`q${i}` as keyof typeof s.faq]}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8">
                                            {s.faq[`a${i}` as keyof typeof s.faq]}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>

                        {/* Related Guides */}
                        <section className="pt-8 mb-12 border-t border-heartopia-pink/10">
                            <h2 className="text-2xl font-bold text-foreground mb-6">{s.related.title}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { name: s.related.link1, href: `/${locale}/platforms`, icon: Globe },
                                    { name: s.related.link2, href: `/${locale}/release-date`, icon: Calendar },
                                    { name: s.related.link3, href: `/${locale}/platforms/pc`, icon: Monitor },
                                    { name: s.related.link4, href: `/${locale}/platforms/play-store`, icon: Smartphone }
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

function XIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}
