import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import {
    Calendar,
    Home,
    ChevronRight,
    Globe,
    AlertTriangle,
    Info,
    ShieldCheck,
    HelpCircle,
    ArrowRight,
    Search,
    Download,
    CheckCircle2,
    Monitor,
    Smartphone,
    Gamepad2
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
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const r = t.releaseDate

    return {
        title: r.metaTitle,
        description: r.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/release-date`,
            languages: {
                "en": "https://theheartopia.com/en/release-date",
                "th": "https://theheartopia.com/th/release-date",
                "pt": "https://theheartopia.com/pt/release-date",
                "es": "https://theheartopia.com/es/release-date",
                "id": "https://theheartopia.com/id/release-date",
                "x-default": "https://theheartopia.com/en/release-date",
            },
        },
        openGraph: {
            title: r.metaTitle,
            description: r.metaDesc,
            url: `https://theheartopia.com/${locale}/release-date`,
            siteName: "Heartopia Guide",
            images: [
                {
                    url: "/images/hero-banner.webp",
                    width: 1200,
                    height: 630,
                    alt: "Heartopia Release Date and Launch Timeline",
                },
            ],
            locale: locale === "th" ? "th_TH" : "en_US",
            type: "article",
        },
    }
}

export default async function ReleaseDatePage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const r = t.releaseDate

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": r.heroTitle,
        "description": r.metaDesc,
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
            "@id": `https://theheartopia.com/${locale}/release-date`
        }
    }

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [1, 2, 3, 4].map((i: number) => ({
            "@type": "Question",
            "name": r.faq[`q${i}` as keyof typeof r.faq],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": r.faq[`a${i}` as keyof typeof r.faq]
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
                    <span className="text-foreground font-medium">{r.heroTitle}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12">
                        <Badge className="bg-heartopia-pink/10 text-heartopia-pink hover:bg-heartopia-pink/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold uppercase tracking-wider">
                            Official Timeline
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {r.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {r.intro}
                        </p>
                    </header>

                    {/* Intro Alert */}
                    <div className="bg-white/60 rounded-[32px] p-8 border border-white shadow-sm mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed italic">
                            {r.detailIntro}
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-20">
                        {/* Section 1: When */}
                        <section id="when" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{r.when.title}</h2>
                            </div>
                            <div className="space-y-6">
                                <p className="text-muted-foreground text-lg leading-relaxed">{r.when.text}</p>
                                <p className="text-muted-foreground text-lg leading-relaxed">{r.when.subText}</p>
                            </div>
                        </section>

                        {/* Section 2: Timeline Table */}
                        <section id="timeline" className="scroll-mt-32">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">{r.timeline.title}</h2>
                            <p className="text-muted-foreground text-center mb-8">{r.timeline.desc}</p>
                            <div className="overflow-hidden rounded-[32px] border border-white bg-white/40 shadow-soft-blue">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-white/80 border-b border-heartopia-pink/10">
                                                <th className="px-6 py-5 font-bold text-foreground">{r.timeline.thStage}</th>
                                                <th className="px-6 py-5 font-bold text-foreground text-center">{r.timeline.thStatus}</th>
                                                <th className="px-6 py-5 font-bold text-foreground">{r.timeline.thNotes}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-heartopia-pink/5">
                                            {r.timeline.rows.map((row: string[], i: number) => (
                                                <tr key={i} className="hover:bg-white/40 transition-colors">
                                                    <td className="px-6 py-5 font-medium text-foreground">{row[0]}</td>
                                                    <td className="px-6 py-5 text-center">
                                                        <Badge variant="outline" className={row[1] === "Released" || row[1] === "เปิดให้บริการแล้ว" || row[1] === "Dirilis" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}>
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
                            <p className="mt-4 text-center text-sm text-muted-foreground opacity-70 italic">{r.timeline.footer}</p>
                        </section>

                        {/* Section 3: Regional */}
                        <section id="regional" className="scroll-mt-32">
                            <div className="bg-gradient-to-br from-heartopia-sky/5 to-heartopia-pink/5 rounded-[48px] p-8 md:p-12 border border-white">
                                <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                                    <Globe className="w-8 h-8 text-heartopia-sky" /> {r.regional.title}
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed mb-8">{r.regional.text}</p>
                                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    {[r.regional.li1, r.regional.li2, r.regional.li3].map((li, i) => (
                                        <li key={i} className="bg-white/80 p-6 rounded-3xl border border-white shadow-sm flex flex-col gap-3">
                                            <div className="w-10 h-10 rounded-full bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <span className="font-medium text-foreground">{li}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-muted-foreground leading-relaxed p-6 bg-white/40 rounded-3xl border border-white/50 italic">
                                    {r.regional.footer}
                                </p>
                            </div>
                        </section>

                        {/* Section 4: Platforms */}
                        <section id="platforms" className="scroll-mt-32">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-12">{r.platforms.title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Mobile */}
                                <div className="bg-white/80 p-8 rounded-[40px] border border-white shadow-soft-blue flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-[24px] bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky mb-6">
                                        <Smartphone className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-4 text-foreground">{r.platforms.mobileTitle}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{r.platforms.mobileText}</p>
                                </div>

                                {/* PC */}
                                <div className="bg-white/80 p-8 rounded-[40px] border border-white shadow-soft-pink flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-[24px] bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink mb-6">
                                        <Monitor className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-4 text-foreground">{r.platforms.pcTitle}</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-6">{r.platforms.pcText}</p>
                                    <Link href={`/${locale}/platforms/pc`} className="mt-auto inline-flex items-center gap-2 text-heartopia-pink font-bold hover:underline">
                                        {r.platforms.pcCta} <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>

                                {/* Switch */}
                                <div className="bg-white/80 p-8 rounded-[40px] border border-white shadow-soft-orange flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-[24px] bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange mb-6">
                                        <Gamepad2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-4 text-foreground">{r.platforms.switchTitle}</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-6">{r.platforms.switchText}</p>
                                    <Link href={`/${locale}/platforms`} className="mt-auto inline-flex items-center gap-2 text-heartopia-orange font-bold hover:underline">
                                        {r.platforms.switchCta} <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Why Different */}
                        <section id="why-different" className="scroll-mt-32">
                            <div className="bg-white/60 p-12 rounded-[48px] border border-white">
                                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">{r.whyDifferent.title}</h2>
                                <p className="text-muted-foreground text-lg mb-8">{r.whyDifferent.text}</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    {[r.whyDifferent.li1, r.whyDifferent.li2, r.whyDifferent.li3].map((li, i) => (
                                        <div key={i} className="flex gap-4 items-start p-6 bg-white rounded-3xl border border-heartopia-pink/10">
                                            <div className="w-2 h-2 rounded-full bg-heartopia-pink mt-2.5 shrink-0" />
                                            <span className="text-muted-foreground">{li}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-center text-sm text-muted-foreground opacity-60 italic">{r.whyDifferent.footer}</p>
                            </div>
                        </section>

                        {/* Section 6: How to Check */}
                        <section id="check-updates" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-500">
                                    <Search className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{r.howToCheck.title}</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[r.howToCheck.li1, r.howToCheck.li2, r.howToCheck.li3].map((li, i) => (
                                    <div key={i} className="bg-white/80 p-8 rounded-[32px] border border-white shadow-soft-blue">
                                        <p className="font-bold text-foreground leading-relaxed">{li}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 p-6 bg-amber-50/50 rounded-3xl border border-amber-100 flex items-center gap-4 text-amber-700">
                                <AlertTriangle className="w-6 h-6 shrink-0" />
                                <p className="font-medium">{r.howToCheck.footer}</p>
                            </div>
                        </section>

                        {/* Myths & FAQ */}
                        <section id="faq-myths" className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Myths */}
                            <div>
                                <h2 className="font-serif text-3xl font-bold text-foreground mb-8">{r.myths.title}</h2>
                                <div className="space-y-6">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="bg-white/80 p-6 rounded-[32px] border border-white">
                                            <p className="font-bold text-foreground mb-2">{r.myths[`q${i}` as keyof typeof r.myths]}</p>
                                            <p className="text-muted-foreground">{r.myths[`a${i}` as keyof typeof r.myths]}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ */}
                            <div>
                                <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                                    <HelpCircle className="w-8 h-8 text-heartopia-sky" /> {r.faq.title}
                                </h2>
                                <Accordion type="single" collapsible className="w-full">
                                    {[1, 2, 3, 4].map((i) => (
                                        <AccordionItem key={i} value={`faq-${i}`} className="border-none mb-4 bg-white/80 rounded-[32px] px-8 border border-white">
                                            <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-heartopia-pink-dark transition-colors py-6">
                                                {r.faq[`q${i}` as keyof typeof r.faq]}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8">
                                                {r.faq[`a${i}` as keyof typeof r.faq]}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </section>

                        {/* Related Guides */}
                        <section className="pt-8 mb-12 border-t border-heartopia-pink/10">
                            <h2 className="text-2xl font-bold text-foreground mb-6">{r.related.title}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { name: r.related.link1, href: `/${locale}/platforms`, icon: Monitor },
                                    { name: r.related.link2, href: `/${locale}/platforms/pc`, icon: Search },
                                    { name: t.housing.heroTitle, href: `/${locale}/guides/housing`, icon: Home },
                                    { name: t.switch.heroTitle, href: `/${locale}/platforms/switch`, icon: Gamepad2 }
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
