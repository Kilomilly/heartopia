import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Home, Calendar, Sparkles, ArrowRight } from "lucide-react"
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
    const ep = t.eventsPage

    return {
        title: ep.metaTitle,
        description: ep.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/events`,
            languages: {
                "en": "https://theheartopia.com/en/events",
                "th": "https://theheartopia.com/th/events",
                "pt": "https://theheartopia.com/pt/events",
                "es": "https://theheartopia.com/es/events",
                "x-default": "https://theheartopia.com/en/events",
            },
        },
        openGraph: {
            title: ep.metaTitle,
            description: ep.metaDesc,
            url: `https://theheartopia.com/${locale}/events`,
            siteName: 'Heartopia Hub',
            locale: locale,
            type: 'website',
            images: ['/images/heartopia-preview.png'],
        },
    }
}

export default async function EventsIndexPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const ep = t.eventsPage

    // Event colors mapping
    const eventStyles = [
        {
            statusColor: "bg-green-500",
            badgeColor: "bg-blue-500/10 text-blue-600",
            icon: "🥚"
        },
        {
            statusColor: "bg-purple-500",
            badgeColor: "bg-orange-500/10 text-orange-600",
            icon: "⭐"
        }
    ]

    return (
        <main className="min-h-screen bg-heartopia-cream">
            <Navbar t={t.navbar} locale={locale} />

            {/* Breadcrumbs */}
            <nav className="pt-32 pb-6 px-4">
                <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-muted-foreground">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{ep.breadcrumb}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-16 text-center">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <Calendar className="w-8 h-8 text-heartopia-pink" />
                            <Sparkles className="w-6 h-6 text-heartopia-orange animate-sparkle" />
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {ep.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            {ep.heroDesc}
                        </p>
                    </header>

                    {/* Active Events */}
                    <section className="mb-16">
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-heartopia-pink rounded-full"></span>
                            {ep.sectionTitle}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {ep.list.map((event: any, index: number) => (
                                <Link
                                    key={index}
                                    href={`/${locale}${event.href}`}
                                    className="group bg-white rounded-3xl p-8 border-2 border-slate-100 hover:border-heartopia-pink hover:shadow-xl transition-all duration-300"
                                >
                                    {/* Status Badge */}
                                    <div className="flex items-center justify-between mb-4">
                                        <Badge className={`${eventStyles[index]?.badgeColor || "bg-slate-100"} border-none px-3 py-1 rounded-full text-sm font-semibold`}>
                                            {event.badge}
                                        </Badge>
                                        <div className="flex items-center gap-2">
                                            <span className={`w-2 h-2 ${eventStyles[index]?.statusColor || "bg-slate-400"} rounded-full animate-pulse`}></span>
                                            <span className="text-sm font-medium text-muted-foreground">{event.status}</span>
                                        </div>
                                    </div>

                                    {/* Icon & Title */}
                                    <div className="mb-4">
                                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {eventStyles[index]?.icon || "📅"}
                                        </div>
                                        <h3 className="font-serif text-2xl font-bold text-foreground mb-2 group-hover:text-heartopia-pink-dark transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="text-sm text-heartopia-pink-darker font-medium mb-3">
                                            📅 {event.dates}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted-foreground leading-relaxed mb-6 whitespace-pre-wrap">
                                        {event.description}
                                    </p>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-heartopia-pink font-semibold group-hover:gap-3 transition-all">
                                        <span>{ep.viewGuide}</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Coming Soon */}
                    <section className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-12 border border-slate-200 text-center">
                        <Sparkles className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                        <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                            {ep.comingSoonTitle}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {ep.comingSoonDesc}
                        </p>
                    </section>
                </div>
            </article>

            <Footer t={t.footer} locale={locale} />
        </main>
    )
}
