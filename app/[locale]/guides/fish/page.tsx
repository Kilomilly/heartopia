import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import {
    ChevronRight,
    Home,
    HelpCircle,
    ArrowRight,
    BookOpen,
    Info
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
import FishListClient from "./FishListClient"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")

    return {
        title: t.fishList.metaTitle,
        description: t.fishList.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/guides/fish`,
            languages: {
                "en": "https://theheartopia.com/en/guides/fish",
                "th": "https://theheartopia.com/th/guides/fish",
                "pt": "https://theheartopia.com/pt/guides/fish",
                "es": "https://theheartopia.com/es/guides/fish",
                "x-default": "https://theheartopia.com/en/guides/fish",
            },
        },
        openGraph: {
            title: t.fishList.metaTitle,
            description: t.fishList.metaDesc,
            url: `https://theheartopia.com/${locale}/guides/fish`,
            siteName: "Heartopia Guide",
            images: [
                {
                    url: "https://theheartopia.com/images/fish-list-banner.png",
                    width: 1024,
                    height: 1024,
                    alt: t.fishList.metaTitle,
                },
            ],
            locale: locale === "th" ? "th_TH" : "en_US",
            type: "article",
        },
    }
}

export default async function FishListPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const f = t.fishList

    // JSON-LD for FAQ and Article
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": f.faq.q1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.faq.a1
                }
            },
            {
                "@type": "Question",
                "name": f.faq.q2,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.faq.a2
                }
            },
            {
                "@type": "Question",
                "name": f.faq.q3,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.faq.a3
                }
            },
            {
                "@type": "Question",
                "name": f.faq.q4,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.faq.a4
                }
            }
        ]
    }

    return (
        <main className="min-h-screen bg-heartopia-cream">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar t={t.navbar} locale={locale} />

            {/* Breadcrumbs */}
            <nav className="pt-32 pb-6 px-4">
                <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                    <Link href={`/${locale}/guides/fishing`} className="hover:text-heartopia-pink transition-colors">
                        {t.navbar.guides}
                    </Link>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                    <span className="text-foreground font-medium">{f.heroTitle}</span>
                </div>
            </nav>

            <article className="pb-24 px-4 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-16 flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <Badge className="bg-heartopia-pink/10 text-heartopia-pink hover:bg-heartopia-pink/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold">
                                Full Encyclopedia
                            </Badge>
                            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-[1.1] tracking-tight">
                                {f.heroTitle}
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                                {f.heroSubtitle}
                            </p>
                        </div>
                        <div className="flex-1 relative w-full aspect-square max-w-[400px]">
                            <img
                                src="/images/fish-list-banner.png"
                                alt="Heartopia Fish Encyclopedia"
                                className="rounded-[2.5rem] shadow-2xl shadow-heartopia-pink/20 animate-float"
                            />
                        </div>
                    </header>

                    {/* Client Side Fish List / Interactive Parts */}
                    <FishListClient t={t} locale={locale} />

                    {/* FAQ Section */}
                    <section className="mt-24">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-12 h-12 bg-heartopia-pink rounded-2xl flex items-center justify-center text-white shadow-lg shadow-heartopia-pink/20">
                                <HelpCircle className="w-6 h-6" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                                {f.faq.title}
                            </h2>
                        </div>

                        <div className="bg-white/40 backdrop-blur-sm rounded-[2.5rem] p-4 md:p-8 border border-white">
                            <Accordion type="single" collapsible className="w-full">
                                {[1, 2, 3, 4].map((i) => (
                                    <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-100 last:border-0 px-4 md:px-6">
                                        <AccordionTrigger className="text-left text-lg md:text-xl font-medium py-6 hover:text-heartopia-pink transition-colors">
                                            {(f.faq as any)[`q${i}`]}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-8">
                                            {(f.faq as any)[`a${i}`]}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </section>
                </div>
            </article>

            <Footer t={t.footer} locale={locale} />
        </main>
    )
}
