import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import {
    ChevronRight,
    BookOpen,
    ArrowRight,
    Home,
    CheckCircle,
    AlertTriangle,
    Star,
    HelpCircle,
    Sparkles,
    Info,
    Ticket,
    Gift,
    Bug,
    Zap,
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
    const g = t.exhibitionPass
    const url = `https://theheartopia.com/${locale}/guides/exhibition-pass`

    return {
        title: g.metaTitle,
        description: g.metaDesc,
        alternates: {
            canonical: url,
            languages: {
                en: "https://theheartopia.com/en/guides/exhibition-pass",
                th: "https://theheartopia.com/th/guides/exhibition-pass",
                pt: "https://theheartopia.com/pt/guides/exhibition-pass",
                es: "https://theheartopia.com/es/guides/exhibition-pass",
                id: "https://theheartopia.com/id/guides/exhibition-pass",
                "x-default": "https://theheartopia.com/en/guides/exhibition-pass",
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
                    url: "https://theheartopia.com/images/og/exhibition-pass.webp",
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
            images: ["https://theheartopia.com/images/og/exhibition-pass.webp"],
        },
    }
}

export default async function ExhibitionPassGuidePage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t: any = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const g = t.exhibitionPass

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: `https://theheartopia.com/${locale}` },
                    { "@type": "ListItem", position: 2, name: "Guides", item: `https://theheartopia.com/${locale}/guides` },
                    { "@type": "ListItem", position: 3, name: g.metaTitle, item: `https://theheartopia.com/${locale}/guides/exhibition-pass` },
                ],
            },
            {
                "@type": "Article",
                headline: g.heroTitle,
                description: g.metaDesc,
                author: { "@type": "Organization", name: "Heartopia Guide" },
                publisher: { "@type": "Organization", name: "Heartopia Guide", url: "https://theheartopia.com" },
                dateModified: "2026-02-22",
                mainEntityOfPage: `https://theheartopia.com/${locale}/guides/exhibition-pass`,
            },
            {
                "@type": "HowTo",
                name: g.methods?.title,
                step: g.methods?.items?.map((item: any, i: number) => ({
                    "@type": "HowToStep",
                    position: i + 1,
                    name: item.title,
                    itemListElement: item.steps?.map((step: string) => ({
                        "@type": "HowToDirection",
                        text: step,
                    })),
                })),
            },
            {
                "@type": "FAQPage",
                mainEntity: [1, 2, 3, 4, 5, 6, 7].map((n) => ({
                    "@type": "Question",
                    name: g.faq?.[`q${n}`],
                    acceptedAnswer: { "@type": "Answer", text: g.faq?.[`a${n}`] },
                })),
            },
        ],
    }

    const sections = [
        { id: "what", title: g.sections?.what },
        { id: "methods", title: g.sections?.methods },
        { id: "value", title: g.sections?.value },
        { id: "bugs", title: g.sections?.bugs },
        { id: "faq", title: g.sections?.faq },
    ]

    const badgeColorMap: Record<string, string> = {
        green: "bg-green-100 text-green-700 border-green-200",
        purple: "bg-purple-100 text-purple-700 border-purple-200",
        blue: "bg-blue-100 text-blue-700 border-blue-200",
        amber: "bg-amber-100 text-amber-700 border-amber-200",
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-heartopia-cream">
                <Navbar locale={locale} t={t.navbar} />

                {/* Breadcrumb */}
                <nav className="pt-28 pb-4 px-4" aria-label="Breadcrumb">
                    <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                        <Link href={`/${locale}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" /> {t.navbar.home}
                        </Link>
                        <ChevronRight className="w-4 h-4 shrink-0" />
                        <span>{t.navbar.guides}</span>
                        <ChevronRight className="w-4 h-4 shrink-0" />
                        <span className="text-foreground font-medium truncate">{g.sections?.methods}</span>
                    </div>
                </nav>

                <div className="max-w-5xl mx-auto px-4 pb-24">
                    {/* Hero Header */}
                    <header className="mb-10">
                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                            <Badge className="bg-heartopia-pink/10 text-heartopia-pink-darker hover:bg-heartopia-pink/20 border-none px-4 py-1 rounded-full text-sm font-semibold">
                                {g.badge}
                            </Badge>
                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Ticket className="w-3.5 h-3.5 text-heartopia-pink" />
                                {g.stats?.free}
                            </span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                            {g.heroTitle}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                            {g.heroDesc}
                        </p>

                        {/* Stats Bar */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
                            {[
                                { label: g.stats?.free, icon: "🎟️" },
                                { label: g.stats?.methods, icon: "🗂️" },
                                { label: g.stats?.pity, icon: "🎯" },
                                { label: g.stats?.time, icon: "⏱️" },
                                { label: g.stats?.events, icon: "🎪" },
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

                                {/* Quick internal links */}
                                <div className="mt-6 pt-5 border-t border-white/60">
                                    <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide mb-2">Quick Links</p>
                                    <ul className="space-y-1.5">
                                        <li>
                                            <Link href={`/${locale}/guides/heartopia-redeem-codes`} className="text-xs text-heartopia-pink-dark hover:underline flex items-center gap-1">
                                                <Gift size={10} /> Redeem Codes
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`/${locale}/events/fairy-banner`} className="text-xs text-heartopia-pink-dark hover:underline flex items-center gap-1">
                                                <Sparkles size={10} /> Fairy Banner
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={`/${locale}/guides/home-evaluation`} className="text-xs text-heartopia-pink-dark hover:underline flex items-center gap-1">
                                                <Star size={10} /> Home Evaluation
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="flex-1 min-w-0 space-y-10">

                            {/* Section 1: What Are Exhibition Passes */}
                            <section id="what" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Ticket size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.what?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.what?.intro}</p>

                                    <div>
                                        <h3 className="text-sm font-semibold text-foreground mb-3">{g.what?.tableTitle}</h3>
                                        <div className="overflow-x-auto rounded-xl border border-white/70 bg-white/60">
                                            <table className="w-full text-sm">
                                                <thead>
                                                    <tr className="border-b border-white/70 bg-heartopia-cream/40">
                                                        <th className="text-left px-4 py-2.5 text-xs font-semibold text-foreground">{g.what?.thSource}</th>
                                                        <th className="text-left px-4 py-2.5 text-xs font-semibold text-foreground">{g.what?.thPasses}</th>
                                                        <th className="text-left px-4 py-2.5 text-xs font-semibold text-foreground">{g.what?.thTime}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {g.what?.rows?.map((row: any, i: number) => (
                                                        <tr
                                                            key={i}
                                                            className={`border-b border-white/40 last:border-b-0 ${row.highlight ? "bg-heartopia-pink/5 font-semibold" : ""}`}
                                                        >
                                                            <td className="px-4 py-2.5 text-sm text-foreground">
                                                                {row.highlight && <span className="mr-1">✨</span>}
                                                                {row.source}
                                                            </td>
                                                            <td className={`px-4 py-2.5 text-sm ${row.highlight ? "text-heartopia-pink-dark font-bold" : "text-muted-foreground"}`}>
                                                                {row.passes}
                                                            </td>
                                                            <td className="px-4 py-2.5 text-sm text-muted-foreground">{row.time}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="bg-heartopia-sky/10 border border-heartopia-sky/30 rounded-xl p-3 flex items-start gap-2">
                                        <Info size={14} className="text-heartopia-sky-dark mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground">
                                            Exhibition Passes are used for{" "}
                                            <Link href={`/${locale}/events/fairy-banner`} className="text-heartopia-pink-dark font-semibold hover:underline">
                                                Fairy Banner
                                            </Link>{" "}
                                            and MLP — not the standard permanent gacha. Value is highest when saved for pity.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 2: All Free Methods */}
                            <section id="methods" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Gift size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.methods?.title}</h2>
                                </div>
                                <div className="space-y-4">
                                    {g.methods?.items?.map((item: any, i: number) => (
                                        <article key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                            <div className="flex items-start gap-3">
                                                <span className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-heartopia-orange/80 to-heartopia-pink/80 text-white font-bold rounded-full flex items-center justify-center shadow-sm text-sm">
                                                    {item.num}
                                                </span>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 flex-wrap mb-1">
                                                        <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                                                        <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${badgeColorMap[item.badgeColor] || "bg-gray-100 text-gray-600"}`}>
                                                            {item.badge}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>

                                            <ol className="space-y-2 ml-12">
                                                {item.steps?.map((step: string, j: number) => (
                                                    <li key={j} className="flex items-start gap-2.5">
                                                        <span className="flex-shrink-0 w-5 h-5 bg-heartopia-cream/80 border border-heartopia-pink/20 text-heartopia-pink-dark font-bold rounded-full flex items-center justify-center text-xs mt-0.5">
                                                            {j + 1}
                                                        </span>
                                                        <p className="text-sm text-foreground leading-relaxed">{step}</p>
                                                    </li>
                                                ))}
                                            </ol>

                                            {item.id === "codes" && (
                                                <div className="ml-12">
                                                    <Link
                                                        href={`/${locale}/guides/heartopia-redeem-codes`}
                                                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-heartopia-pink-dark bg-heartopia-pink/8 hover:bg-heartopia-pink/15 px-4 py-2 rounded-xl transition-colors border border-heartopia-pink/20"
                                                    >
                                                        <Gift size={13} /> View All Redeem Codes →
                                                    </Link>
                                                </div>
                                            )}

                                            <div className="ml-12 bg-heartopia-cream/60 border border-white/80 rounded-xl px-4 py-3 text-sm text-muted-foreground leading-relaxed">
                                                {item.note}
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </section>

                            {/* Section 3: Value & Tips */}
                            <section id="value" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Star size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.value?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.value?.intro}</p>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {g.value?.items?.map((item: any, i: number) => (
                                            <div key={i} className="bg-heartopia-cream/60 rounded-2xl border border-white/80 p-4 space-y-1.5">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-2xl">{item.icon}</span>
                                                    <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                                                </div>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Internal link callout */}
                                    <div className="bg-heartopia-pink/5 border border-heartopia-pink/20 rounded-xl p-4 flex items-start gap-3">
                                        <Sparkles size={16} className="text-heartopia-pink-dark mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground">
                                            <span className="font-semibold">Best banner to target:</span> The{" "}
                                            <Link href={`/${locale}/events/fairy-banner`} className="text-heartopia-pink-dark font-semibold hover:underline">
                                                Fairy Banner
                                            </Link>{" "}
                                            — Fairy Wings score significantly higher in the{" "}
                                            <Link href={`/${locale}/guides/home-evaluation`} className="text-heartopia-pink-dark font-semibold hover:underline">
                                                Home Evaluation
                                            </Link>{" "}
                                            system, giving both cosmetic and gameplay value.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 4: Bugs & Fixes */}
                            <section id="bugs" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Bug size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.bugs?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.bugs?.intro}</p>
                                    <div className="overflow-x-auto rounded-xl border border-white/70 bg-white/60">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-white/70 bg-heartopia-cream/40">
                                                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-foreground w-1/2">{g.bugs?.thBug}</th>
                                                    <th className="text-left px-4 py-2.5 text-xs font-semibold text-foreground w-1/2">{g.bugs?.thFix}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {g.bugs?.rows?.map((row: any, i: number) => (
                                                    <tr key={i} className="border-b border-white/40 last:border-b-0">
                                                        <td className="px-4 py-3 text-sm text-foreground">
                                                            <div className="flex items-start gap-2">
                                                                <AlertTriangle size={13} className="text-amber-500 mt-0.5 shrink-0" />
                                                                {row.bug}
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-muted-foreground">
                                                            <div className="flex items-start gap-2">
                                                                <CheckCircle size={13} className="text-green-500 mt-0.5 shrink-0" />
                                                                {/* Internal link for code-related fix */}
                                                                {row.bug.toLowerCase().includes("code") || row.bug.toLowerCase().includes("kode") || row.bug.toLowerCase().includes("código") || row.bug.toLowerCase().includes("โค้ด") ? (
                                                                    <span>
                                                                        {row.fix.split(" — ")[0]} —{" "}
                                                                        <Link href={`/${locale}/guides/heartopia-redeem-codes`} className="text-heartopia-pink-dark font-medium hover:underline">
                                                                            {row.fix.split(" — ")[1] || "Codes List"}
                                                                        </Link>
                                                                    </span>
                                                                ) : (
                                                                    row.fix
                                                                )}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Section 5: FAQ */}
                            <section id="faq" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <HelpCircle size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.faq?.title}</h2>
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

                            {/* Pillar Internal Links — Related Guides */}
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

                            {/* Update Note */}
                            <div className="bg-heartopia-cream/80 border border-white/60 rounded-2xl p-4 flex items-start gap-3">
                                <Zap size={16} className="text-heartopia-pink-dark mt-0.5 shrink-0" />
                                <p className="text-xs text-muted-foreground">
                                    <span className="font-semibold text-foreground">Updated February 22, 2026</span> — MLP event passes confirmed active.
                                    Need updated codes? See our{" "}
                                    <Link href={`/${locale}/guides/heartopia-redeem-codes`} className="text-heartopia-pink-dark font-medium hover:underline">
                                        Heartopia Redeem Codes
                                    </Link>{" "}
                                    guide.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer locale={locale} t={t.footer} />
            </main>
        </>
    )
}
