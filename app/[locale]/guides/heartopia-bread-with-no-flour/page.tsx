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
    ChefHat,
    Clock,
    Star,
    HelpCircle,
    Sparkles,
    Info,
    Dices,
    CheckCircle,
    TrendingUp,
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
    const g = t.breadWithNoFlour ?? t.breadWithNoFlour
    const url = `https://theheartopia.com/${locale}/guides/heartopia-bread-with-no-flour`

    return {
        title: g?.metaTitle ?? "Heartopia Bread with No Flour: Complete Perk Guide (2026)",
        description: g?.metaDesc ?? "What is Bread with No Flour in Heartopia? Learn how this cooking perk works, chance rates by level (2%→10%), how to trigger it for quests, and pro tips.",
        alternates: {
            canonical: url,
            languages: {
                "en": "https://theheartopia.com/en/guides/heartopia-bread-with-no-flour",
                "th": "https://theheartopia.com/th/guides/heartopia-bread-with-no-flour",
                "pt": "https://theheartopia.com/pt/guides/heartopia-bread-with-no-flour",
                "es": "https://theheartopia.com/es/guides/heartopia-bread-with-no-flour",
                "id": "https://theheartopia.com/id/guides/heartopia-bread-with-no-flour",
                "x-default": "https://theheartopia.com/en/guides/heartopia-bread-with-no-flour",
            },
        },
        openGraph: {
            title: g?.metaTitle ?? "Heartopia Bread with No Flour Guide",
            description: g?.metaDesc ?? "Complete guide to the Bread with No Flour cooking perk in Heartopia.",
            url,
            siteName: "Heartopia Guide",
            type: "article",
            images: [
                {
                    url: "https://theheartopia.com/images/og/heartopia-cooking-guide.webp",
                    width: 1200,
                    height: 630,
                    alt: "Heartopia Bread with No Flour Cooking Perk Guide",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: g?.metaTitle ?? "Heartopia Bread with No Flour Guide",
            description: g?.metaDesc ?? "Complete guide to the Bread with No Flour cooking perk.",
            images: ["https://theheartopia.com/images/og/heartopia-cooking-guide.webp"],
        },
    }
}

export default async function BreadWithNoFlourPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t: any = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const g = t.breadWithNoFlour

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://theheartopia.com/${locale}` },
                    { "@type": "ListItem", "position": 2, "name": "Guides", "item": `https://theheartopia.com/${locale}/guides/heartopia-recipes-cooking-guide` },
                    { "@type": "ListItem", "position": 3, "name": g?.metaTitle, "item": `https://theheartopia.com/${locale}/guides/heartopia-bread-with-no-flour` },
                ],
            },
            {
                "@type": "Article",
                "headline": g?.heroTitle,
                "description": g?.metaDesc,
                "author": { "@type": "Organization", "name": "Heartopia Guide" },
                "publisher": { "@type": "Organization", "name": "Heartopia Guide", "url": "https://theheartopia.com" },
                "dateModified": "2026-02-27",
                "mainEntityOfPage": `https://theheartopia.com/${locale}/guides/heartopia-bread-with-no-flour`,
            },
            {
                "@type": "HowTo",
                "name": g?.how?.title,
                "step": g?.how?.steps?.map((step: string, i: number) => ({
                    "@type": "HowToStep",
                    "position": i + 1,
                    "text": step,
                })),
            },
            {
                "@type": "FAQPage",
                "mainEntity": [1, 2, 3, 4, 5, 6, 7].map((n) => ({
                    "@type": "Question",
                    "name": g?.faq?.[`q${n}`],
                    "acceptedAnswer": { "@type": "Answer", "text": g?.faq?.[`a${n}`] },
                })),
            },
        ],
    }

    const sections = [
        { id: "what-is-it", title: g?.sections?.what },
        { id: "chance-table", title: g?.sections?.chance },
        { id: "how-to-trigger", title: g?.sections?.how },
        { id: "winter-frost-quest", title: g?.sections?.quest },
        { id: "pro-tips", title: g?.sections?.tips },
        { id: "faq", title: g?.sections?.faq },
    ]

    const chanceColor = (status: string) => {
        if (status === "Not Available") return "bg-slate-100 text-slate-500"
        if (status === "Best Odds") return "bg-green-100 text-green-700 font-bold"
        if (status === "Good Odds") return "bg-emerald-50 text-emerald-700"
        if (status === "Unlocked") return "bg-amber-50 text-amber-700"
        return "bg-heartopia-cream/80 text-foreground"
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-heartopia-cream">
                <Navbar locale={locale} t={t.navbar} />

                {/* ── BREADCRUMB ── */}
                <nav className="pt-28 pb-4 px-4" aria-label="Breadcrumb">
                    <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                        <Link href={`/${locale}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" /> {t.navbar?.home}
                        </Link>
                        <ChevronRight className="w-4 h-4 shrink-0" />
                        <Link href={`/${locale}/guides/heartopia-recipes-cooking-guide`} className="hover:text-heartopia-pink-dark transition-colors">
                            {t.navbar?.guides ?? "Guides"}
                        </Link>
                        <ChevronRight className="w-4 h-4 shrink-0" />
                        <span className="text-foreground font-medium truncate">{g?.breadcrumb}</span>
                    </div>
                </nav>

                <div className="max-w-5xl mx-auto px-4 pb-24">

                    {/* ── HERO ── */}
                    <header className="mb-10">
                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                            <Badge className="bg-heartopia-pink/10 text-heartopia-pink-darker hover:bg-heartopia-pink/20 border-none px-4 py-1 rounded-full text-sm font-semibold">
                                {g?.badge}
                            </Badge>
                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                <ChefHat className="w-3.5 h-3.5 text-heartopia-pink" />
                                {g?.lastUpdated}
                            </span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                            {g?.heroTitle}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                            {g?.heroDesc}
                        </p>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                            {[
                                { label: g?.stats?.unlockLevel, icon: "⭐" },
                                { label: g?.stats?.baseChance, icon: "🎲" },
                                { label: g?.stats?.maxChance, icon: "📈" },
                                { label: g?.stats?.questLink, icon: "❄️" },
                            ].map((s, i) => (
                                <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm p-3 text-center">
                                    <span className="text-xl block mb-1">{s.icon}</span>
                                    <span className="text-xs font-semibold text-foreground leading-tight block">{s.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="glass rounded-2xl p-5 border border-white/50 bg-white/60 shadow-sm">
                            <p className="text-muted-foreground italic text-base leading-relaxed">
                                &ldquo;{g?.quote}&rdquo;
                            </p>
                        </blockquote>
                    </header>

                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* ── SIDEBAR TOC ── */}
                        <aside className="lg:w-56 shrink-0">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-5 lg:sticky lg:top-6">
                                <div className="flex items-center gap-2 mb-4 text-heartopia-pink-darker font-semibold text-sm">
                                    <BookOpen size={15} />
                                    <span>{g?.tocTitle}</span>
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

                        {/* ── MAIN CONTENT ── */}
                        <div className="flex-1 min-w-0 space-y-10">

                            {/* ── 1. WHAT IS IT ── */}
                            <section id="what-is-it" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Info size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g?.what?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g?.what?.intro}</p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g?.what?.howItWorks}</p>

                                    {/* Also known as */}
                                    <div className="bg-heartopia-sky/10 border border-heartopia-sky/30 rounded-xl p-4 flex items-start gap-3">
                                        <span className="text-xl shrink-0">🔔</span>
                                        <p className="text-sm text-foreground leading-relaxed">{g?.what?.alsoKnownAs}</p>
                                    </div>

                                    {/* Key Facts Table */}
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-3 text-sm">{g?.what?.notTable?.title}</h3>
                                        <div className="space-y-2">
                                            {g?.what?.notTable?.rows?.map((row: any, i: number) => (
                                                <div key={i} className="flex items-center gap-3 bg-heartopia-cream/60 rounded-xl px-4 py-3 border border-white/80">
                                                    <span className="text-lg flex-shrink-0">{row.icon}</span>
                                                    <span className="text-xs font-bold text-foreground w-32 shrink-0">{row.label}</span>
                                                    <span className="text-sm text-muted-foreground">{row.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ── 2. CHANCE TABLE ── */}
                            <section id="chance-table" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <TrendingUp size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g?.chanceTable?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g?.chanceTable?.intro}</p>

                                    <div className="overflow-x-auto rounded-xl border border-white/60">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="bg-heartopia-cream/80 border-b border-white/60">
                                                    <th className="text-left px-4 py-3 font-semibold text-foreground text-xs">{g?.chanceTable?.thLevel}</th>
                                                    <th className="text-center px-4 py-3 font-semibold text-foreground text-xs">{g?.chanceTable?.thChance}</th>
                                                    <th className="text-center px-4 py-3 font-semibold text-foreground text-xs">{g?.chanceTable?.thStatus}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {g?.chanceTable?.rows?.map((row: any, i: number) => (
                                                    <tr key={i} className={`border-b border-white/40 last:border-0 transition-colors ${i === 7 ? "bg-green-50/50" : "hover:bg-heartopia-cream/30"}`}>
                                                        <td className="px-4 py-3 font-medium text-foreground text-sm">{row.level}</td>
                                                        <td className="px-4 py-3 text-center">
                                                            <span className={`inline-flex items-center gap-1 font-bold text-sm ${i === 0 ? "text-slate-400" : "text-heartopia-pink-darker"}`}>
                                                                {i > 0 && <Dices size={13} />} {row.chance}
                                                            </span>
                                                        </td>
                                                        <td className="px-4 py-3 text-center">
                                                            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${chanceColor(row.status)}`}>
                                                                {row.status}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                                        <AlertTriangle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                                        <p className="text-sm text-amber-800">{g?.chanceTable?.note}</p>
                                    </div>
                                </div>
                            </section>

                            {/* ── 3. HOW TO TRIGGER ── */}
                            <section id="how-to-trigger" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <ChefHat size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g?.how?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g?.how?.intro}</p>

                                    <ol className="space-y-3">
                                        {g?.how?.steps?.map((step: string, i: number) => (
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

                                    <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-start gap-2">
                                        <AlertTriangle size={14} className="text-red-500 mt-0.5 shrink-0" />
                                        <p className="text-sm text-red-700 font-medium">{g?.how?.warning}</p>
                                    </div>
                                </div>
                            </section>

                            {/* ── 4. WINTER FROST QUEST ── */}
                            <section id="winter-frost-quest" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-sky-100 rounded-xl shrink-0">
                                        <Sparkles size={18} className="text-sky-600" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g?.quest?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g?.quest?.intro}</p>

                                    {/* Quest Name Badge */}
                                    <div className="bg-sky-50 border border-sky-200 rounded-xl px-4 py-3 flex items-center gap-3">
                                        <Sparkles size={16} className="text-sky-500 shrink-0" />
                                        <span className="text-sm font-bold text-sky-800">{g?.quest?.questName}</span>
                                    </div>

                                    <ol className="space-y-3">
                                        {g?.quest?.steps?.map((step: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-500 text-white font-bold rounded-full flex items-center justify-center shadow-sm text-sm">
                                                    {i + 1}
                                                </span>
                                                <div className="flex-1 bg-heartopia-cream/60 rounded-xl px-4 py-3 border border-white/80">
                                                    <p className="text-sm text-foreground leading-relaxed">{step}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>

                                    <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-start gap-2">
                                        <CheckCircle size={14} className="text-green-600 mt-0.5 shrink-0" />
                                        <p className="text-sm text-green-800">{g?.quest?.tip}</p>
                                    </div>

                                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                                        <AlertTriangle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                                        <p className="text-sm text-amber-800 font-medium">{g?.quest?.warning}</p>
                                    </div>
                                </div>
                            </section>

                            {/* ── 5. PRO TIPS ── */}
                            <section id="pro-tips" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Star size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g?.tips?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                    <ul className="space-y-3">
                                        {g?.tips?.items?.map((tip: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3 bg-heartopia-cream/60 rounded-xl px-4 py-3 border border-white/80">
                                                <span className="flex-shrink-0 w-6 h-6 bg-heartopia-pink/20 text-heartopia-pink-darker rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                                                <p className="text-sm text-foreground leading-relaxed">{tip}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* ── 6. FAQ ── */}
                            <section id="faq" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <HelpCircle size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g?.faq?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                    <Accordion type="single" collapsible className="space-y-2">
                                        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                                            <AccordionItem
                                                key={n}
                                                value={`q${n}`}
                                                className="border border-white/60 rounded-xl px-4 bg-heartopia-cream/40 data-[state=open]:bg-white/60"
                                            >
                                                <AccordionTrigger className="text-sm font-semibold text-foreground text-left hover:no-underline py-3.5">
                                                    {g?.faq?.[`q${n}`]}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                                                    {g?.faq?.[`a${n}`]}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </section>

                            {/* ── RELATED GUIDES ── */}
                            <section className="border-t border-white/50 pt-8">
                                <h2 className="text-lg font-bold text-foreground mb-4">{g?.related?.title}</h2>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {g?.related?.items?.map((item: any, i: number) => (
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
