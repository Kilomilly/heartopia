import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import {
    ChevronRight,
    BookOpen,
    ArrowRight,
    Home,
    AlertTriangle,
    Star,
    HelpCircle,
    Sparkles,
    Info,
    MapPin,
    Fish,
    Heart,
    Clock,
    Gift,
} from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/heartopia/navbar"
import { Footer } from "@/components/heartopia/footer"

const LOCALES = ["en", "th", "pt", "es", "id"] as const

export async function generateStaticParams() {
    return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const t: any = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const g = t.penguinFavoriteFood
    const url = `https://theheartopia.com/${locale}/guides/heartopia-penguin-favorite-food`

    return {
        title: g.metaTitle,
        description: g.metaDesc,
        alternates: {
            canonical: url,
            languages: {
                en: "https://theheartopia.com/en/guides/heartopia-penguin-favorite-food",
                th: "https://theheartopia.com/th/guides/heartopia-penguin-favorite-food",
                pt: "https://theheartopia.com/pt/guides/heartopia-penguin-favorite-food",
                es: "https://theheartopia.com/es/guides/heartopia-penguin-favorite-food",
                id: "https://theheartopia.com/id/guides/heartopia-penguin-favorite-food",
                "x-default": "https://theheartopia.com/en/guides/heartopia-penguin-favorite-food",
            },
        },
        openGraph: {
            title: g.metaTitle,
            description: g.metaDesc,
            url,
            siteName: "Heartopia Guide",
            type: "article",
            images: [
                {
                    url: "https://theheartopia.com/images/og/penguin-favorite-food.webp",
                    width: 1200,
                    height: 630,
                    alt: g.metaTitle,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: g.metaTitle,
            description: g.metaDesc,
            images: ["https://theheartopia.com/images/og/penguin-favorite-food.webp"],
        },
    }
}

export default async function PenguinFavoriteFoodPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t: any = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const g = t.penguinFavoriteFood

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: `https://theheartopia.com/${locale}` },
                    { "@type": "ListItem", position: 2, name: "Guides", item: `https://theheartopia.com/${locale}/guides` },
                    { "@type": "ListItem", position: 3, name: g.breadcrumb, item: `https://theheartopia.com/${locale}/guides/heartopia-penguin-favorite-food` },
                ],
            },
            {
                "@type": "Article",
                headline: g.heroTitle,
                description: g.metaDesc,
                author: { "@type": "Organization", name: "Heartopia Guide" },
                publisher: { "@type": "Organization", name: "Heartopia Guide", url: "https://theheartopia.com" },
                dateModified: "2026-02-27",
                mainEntityOfPage: `https://theheartopia.com/${locale}/guides/heartopia-penguin-favorite-food`,
            },
            {
                "@type": "HowTo",
                name: g.quest?.title,
                step: g.quest?.steps?.map((step: string, i: number) => ({
                    "@type": "HowToStep",
                    position: i + 1,
                    text: step,
                })),
            },
            {
                "@type": "FAQPage",
                mainEntity: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
                    "@type": "Question",
                    name: g.faq?.[`q${n}`],
                    acceptedAnswer: { "@type": "Answer", text: g.faq?.[`a${n}`] },
                })),
            },
        ],
    }

    const sections = [
        { id: "what", title: g.sections?.what },
        { id: "location", title: g.sections?.location },
        { id: "food", title: g.sections?.food },
        { id: "bond", title: g.sections?.bond },
        { id: "quest", title: g.sections?.quest },
        { id: "tips", title: g.sections?.tips },
        { id: "faq", title: g.sections?.faq },
    ]

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-heartopia-cream">
                <Navbar locale={locale} t={t.navbar} />

                <nav className="pt-28 pb-4 px-4" aria-label="Breadcrumb">
                    <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                        <Link href={`/${locale}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" /> {t.navbar.home}
                        </Link>
                        <ChevronRight className="w-4 h-4 shrink-0" />
                        <span>{t.navbar.guides}</span>
                        <ChevronRight className="w-4 h-4 shrink-0" />
                        <span className="text-foreground font-medium truncate">{g.breadcrumb}</span>
                    </div>
                </nav>

                <div className="max-w-5xl mx-auto px-4 pb-24">
                    {/* Hero */}
                    <header className="mb-10">
                        {/* Deadline banner */}
                        <div className="mb-4 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                            <span className="text-sm font-semibold text-amber-800">{g.deadline}</span>
                        </div>

                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                            <Badge className="bg-heartopia-pink/10 text-heartopia-pink-darker hover:bg-heartopia-pink/20 border-none px-4 py-1 rounded-full text-sm font-semibold">
                                {g.badge}
                            </Badge>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                            {g.heroTitle}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                            {g.heroDesc}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                            {[
                                { label: g.stats?.favFoods, icon: "🐟" },
                                { label: g.stats?.maxBond, icon: "❤️" },
                                { label: g.stats?.topReward, icon: "🏆" },
                                { label: g.stats?.deadline, icon: "⏰" },
                            ].map((s, i) => (
                                <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm p-3 text-center">
                                    <span className="text-xl block mb-1">{s.icon}</span>
                                    <span className="text-xs font-semibold text-foreground leading-tight block">{s.label}</span>
                                </div>
                            ))}
                        </div>

                        <blockquote className="glass rounded-2xl p-5 border border-white/50 bg-white/60 shadow-sm">
                            <p className="text-muted-foreground italic text-base leading-relaxed">
                                &ldquo;{g.quote}&rdquo;
                            </p>
                        </blockquote>
                    </header>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar TOC */}
                        <aside className="lg:w-56 shrink-0">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-5 lg:sticky lg:top-6">
                                <div className="flex items-center gap-2 mb-4 text-heartopia-pink-darker font-semibold text-sm">
                                    <BookOpen size={15} />
                                    <span>{g.tocTitle}</span>
                                </div>
                                <ul className="space-y-1.5">
                                    {sections.map(({ id, title }) => (
                                        <li key={id}>
                                            <a href={`#${id}`} className="text-sm text-muted-foreground hover:text-heartopia-pink-dark flex items-center gap-1.5 group">
                                                <ArrowRight size={11} className="text-heartopia-pink/60 group-hover:text-heartopia-pink shrink-0" />
                                                {title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>

                        <div className="flex-1 min-w-0 space-y-10">

                            {/* What Are Penguins */}
                            <section id="what" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Info size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.what?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.what?.intro}</p>
                                    <ul className="space-y-2">
                                        {g.what?.highlights?.map((item: string, i: number) => (
                                            <li key={i} className="bg-heartopia-cream/60 rounded-xl border border-white/80 px-4 py-2.5 text-sm text-foreground">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                                        <AlertTriangle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                                        <p className="text-sm text-amber-800">{g.what?.note}</p>
                                    </div>
                                </div>
                            </section>

                            {/* Location */}
                            <section id="location" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <MapPin size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.location?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.location?.intro}</p>
                                    <div className="space-y-3">
                                        {g.location?.spots?.map((spot: any, i: number) => (
                                            <div key={i} className="flex items-start gap-3 bg-heartopia-cream/60 rounded-xl border border-white/80 p-4">
                                                <span className="text-2xl shrink-0">{spot.icon}</span>
                                                <div>
                                                    <h3 className="font-semibold text-foreground text-sm mb-1">{spot.name}</h3>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">{spot.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-heartopia-sky/10 border border-heartopia-sky/30 rounded-xl p-3 flex items-start gap-2">
                                        <Info size={14} className="text-heartopia-sky-dark mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground">{g.location?.questNote}</p>
                                    </div>
                                </div>
                            </section>

                            {/* Favorite Food Table */}
                            <section id="food" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Fish size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.food?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.food?.intro}</p>

                                    {/* Food cards */}
                                    <div className="space-y-4">
                                        {g.food?.foods?.map((food: any, i: number) => (
                                            <article key={i} className="bg-heartopia-cream/60 rounded-2xl border border-white/80 p-4 space-y-3">
                                                <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                                                    <span className="text-2xl">{food.icon}</span>
                                                    <span>{food.name}</span>
                                                    <Badge className="ml-auto bg-heartopia-pink/10 text-heartopia-pink-darker border-none text-xs">
                                                        {food.level}
                                                    </Badge>
                                                </h3>
                                                <div className="grid grid-cols-3 gap-2 text-xs">
                                                    <div className="bg-white/70 rounded-lg px-2 py-1.5 text-center">
                                                        <div className="text-muted-foreground mb-0.5">{g.food?.thSea}</div>
                                                        <div className="font-semibold text-foreground text-[11px] leading-tight">{food.sea}</div>
                                                    </div>
                                                    <div className="bg-white/70 rounded-lg px-2 py-1.5 text-center">
                                                        <div className="text-muted-foreground mb-0.5">{g.food?.thTime}</div>
                                                        <div className="font-semibold text-foreground">{food.time}</div>
                                                    </div>
                                                    <div className="bg-white/70 rounded-lg px-2 py-1.5 text-center">
                                                        <div className="text-muted-foreground mb-0.5">{g.food?.thWeather}</div>
                                                        <div className="font-semibold text-foreground">{food.weather}</div>
                                                    </div>
                                                </div>
                                                <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-xs text-green-800">
                                                    💡 {food.tip}
                                                </div>
                                            </article>
                                        ))}
                                    </div>

                                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                                        <Star size={14} className="text-amber-600 mt-0.5 shrink-0" />
                                        <p className="text-sm text-amber-800">{g.food?.rarityNote}</p>
                                    </div>
                                    <div className="bg-heartopia-sky/10 border border-heartopia-sky/30 rounded-xl p-3 flex items-start gap-2">
                                        <Info size={14} className="text-heartopia-sky-dark mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground">{g.food?.farmingTip}</p>
                                    </div>
                                </div>
                            </section>

                            {/* Bond Levels */}
                            <section id="bond" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Heart size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.bond?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.bond?.intro}</p>

                                    {/* Bond table */}
                                    <div className="overflow-x-auto rounded-xl border border-white/70">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="bg-heartopia-pink/5 border-b border-white/70">
                                                    <th className="text-left px-3 py-2.5 text-xs font-bold text-foreground">{g.bond?.thLevel}</th>
                                                    <th className="text-left px-3 py-2.5 text-xs font-bold text-foreground">{g.bond?.thUnlock}</th>
                                                    <th className="text-center px-3 py-2.5 text-xs font-bold text-foreground">{g.bond?.thGift}</th>
                                                    <th className="text-center px-3 py-2.5 text-xs font-bold text-foreground hidden sm:table-cell">{g.bond?.thStorage}</th>
                                                    <th className="text-center px-3 py-2.5 text-xs font-bold text-foreground hidden md:table-cell">{g.bond?.thVisit}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {g.bond?.levels?.map((lvl: any, i: number) => (
                                                    <tr key={i} className={`border-b border-white/40 last:border-b-0 ${lvl.highlight ? "bg-heartopia-pink/5" : "bg-white/40"}`}>
                                                        <td className="px-3 py-3">
                                                            <span className={`text-sm font-bold ${lvl.highlight ? "text-heartopia-pink-darker" : "text-foreground"}`}>
                                                                {lvl.level}
                                                            </span>
                                                        </td>
                                                        <td className="px-3 py-3 text-sm text-muted-foreground leading-snug max-w-[200px]">{lvl.unlock}</td>
                                                        <td className="px-3 py-3 text-center">
                                                            <span className="text-sm font-semibold text-heartopia-pink-darker">{lvl.gift}</span>
                                                        </td>
                                                        <td className="px-3 py-3 text-center text-sm text-muted-foreground hidden sm:table-cell">{lvl.storage}</td>
                                                        <td className="px-3 py-3 text-center text-xs text-muted-foreground hidden md:table-cell">{lvl.visit}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="bg-heartopia-sky/10 border border-heartopia-sky/30 rounded-xl p-3 flex items-start gap-2">
                                        <Gift size={14} className="text-heartopia-sky-dark mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground">{g.bond?.giftTypes}</p>
                                    </div>
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-start gap-2">
                                        <Sparkles size={14} className="text-green-600 mt-0.5 shrink-0" />
                                        <p className="text-sm text-green-800">{g.bond?.rewardNote}</p>
                                    </div>
                                </div>
                            </section>

                            {/* Quest Steps */}
                            <section id="quest" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Star size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.quest?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.quest?.intro}</p>
                                    <ol className="space-y-3">
                                        {g.quest?.steps?.map((step: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-heartopia-orange/80 to-heartopia-pink/80 text-white font-bold rounded-full flex items-center justify-center shadow-sm text-sm">
                                                    {i + 1}
                                                </span>
                                                <div className="flex-1 bg-heartopia-cream/60 rounded-xl px-4 py-3 border border-white/80">
                                                    <p className="text-sm text-foreground leading-relaxed">{step}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                    <div className="bg-heartopia-sky/10 border border-heartopia-sky/30 rounded-xl p-3 flex items-start gap-2">
                                        <Info size={14} className="text-heartopia-sky-dark mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground">{g.quest?.tip}</p>
                                    </div>
                                </div>
                            </section>

                            {/* Pro Tips */}
                            <section id="tips" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Sparkles size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.tips?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                    <ul className="space-y-3">
                                        {g.tips?.items?.map((tip: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3 bg-heartopia-cream/60 rounded-xl border border-white/80 px-4 py-3">
                                                <p className="text-sm text-foreground leading-relaxed">{tip}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* FAQ */}
                            <section id="faq" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <HelpCircle size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.faq?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                    <Accordion type="single" collapsible className="space-y-2">
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                                            <AccordionItem
                                                key={n}
                                                value={`q${n}`}
                                                className="border border-white/60 rounded-xl px-4 bg-heartopia-cream/40 data-[state=open]:bg-white/60"
                                            >
                                                <AccordionTrigger className="text-sm font-semibold text-foreground text-left hover:no-underline py-3.5">
                                                    {g.faq?.[`q${n}`]}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                                                    {g.faq?.[`a${n}`]}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </section>

                            {/* Related links */}
                            <section className="border-t border-white/50 pt-8">
                                <h2 className="text-lg font-bold text-foreground mb-4">{g.related?.title}</h2>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {g.related?.items?.map((item: any, i: number) => (
                                        <Link
                                            key={i}
                                            href={`/${locale}${item.href}`}
                                            className="group flex items-center justify-between bg-white/70 hover:bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl px-5 py-4 shadow-sm transition-all"
                                        >
                                            <span className="text-sm font-medium text-foreground group-hover:text-heartopia-pink transition-colors">
                                                {item.label}
                                            </span>
                                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-heartopia-pink group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <Footer locale={locale} t={t.footer} />
            </main>
        </>
    )
}
