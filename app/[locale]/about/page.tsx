import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Home, Info, Heart, Users, Sparkles } from "lucide-react"
import { Navbar } from "@/components/heartopia/navbar"
import { Footer } from "@/components/heartopia/footer"
import { Badge } from "@/components/ui/badge"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getDictionary(locale)
    const a = t.about

    return {
        title: a.metaTitle,
        description: a.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/about`,
            languages: {
                "en": "https://theheartopia.com/en/about",
                "th": "https://theheartopia.com/th/about",
                "pt": "https://theheartopia.com/pt/about",
                "es": "https://theheartopia.com/es/about",
                "x-default": "https://theheartopia.com/en/about",
            },
        },
        openGraph: {
            title: a.metaTitle,
            description: a.metaDesc,
            url: `https://theheartopia.com/${locale}/about`,
            siteName: "Heartopia Hub",
            images: [
                {
                    url: "/images/hero-banner.webp",
                    width: 1200,
                    height: 630,
                    alt: "About Heartopia Hub",
                },
            ],
            locale: locale === "th" ? "th_TH" : (locale === "pt" ? "pt_BR" : (locale === "es" ? "es_ES" : "en_US")),
            type: "website",
        },
    }
}

export default async function AboutPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale)
    const a = t.about

    return (
        <main className="min-h-screen bg-heartopia-cream">
            <Navbar t={t.navbar} locale={locale} />

            {/* Breadcrumbs */}
            <nav className="pt-32 pb-6 px-4">
                <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-muted-foreground">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{a.title}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12 text-center">
                        <Badge className="bg-heartopia-pink/10 text-heartopia-pink hover:bg-heartopia-pink/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold uppercase tracking-wider">
                            Our Mission
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {a.title}
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-heartopia-pink to-heartopia-sky mx-auto rounded-full mb-8" />
                    </header>

                    {/* About Content */}
                    <div className="bg-white/60 p-8 md:p-12 rounded-[40px] border border-white shadow-soft-blue relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-heartopia-pink/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-heartopia-sky/5 rounded-full -ml-32 -mb-32 blur-3xl" />

                        <div className="relative z-10 space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink shrink-0">
                                    <Heart className="w-6 h-6" />
                                </div>
                                <div className="prose prose-lg prose-heartopia max-w-none">
                                    <p className="text-xl text-muted-foreground leading-relaxed whitespace-pre-wrap">
                                        {a.content}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                                <div className="bg-white/80 p-6 rounded-3xl border border-heartopia-pink/10 text-center">
                                    <div className="w-12 h-12 rounded-full bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink mx-auto mb-4">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-foreground mb-2">Community First</h3>
                                    <p className="text-sm text-muted-foreground">Built for players, by players who love the cozy life.</p>
                                </div>
                                <div className="bg-white/80 p-6 rounded-3xl border border-heartopia-sky/10 text-center">
                                    <div className="w-12 h-12 rounded-full bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky mx-auto mb-4">
                                        <Info className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-foreground mb-2">Detailed Guides</h3>
                                    <p className="text-sm text-muted-foreground">Comprehensive resources for fishing, cooking, and more.</p>
                                </div>
                                <div className="bg-white/80 p-6 rounded-3xl border border-heartopia-orange/10 text-center">
                                    <div className="w-12 h-12 rounded-full bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange mx-auto mb-4">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-foreground mb-2">Weekly Updates</h3>
                                    <p className="text-sm text-muted-foreground">The latest news and event guides for Heartopia 2026.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <Footer t={t.footer} locale={locale} />
        </main>
    )
}
