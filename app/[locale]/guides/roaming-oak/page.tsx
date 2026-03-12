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
    MapPin,
    TreeDeciduous,
    Clock,
    Star,
    HelpCircle,
    Sparkles,
    Info,
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
    const g = t.roamingOak
    const url = `https://theheartopia.com/${locale}/guides/roaming-oak`

    return {
        title: g.metaTitle,
        description: g.metaDesc,
        alternates: {
            canonical: url,
            languages: {
                "en": "https://theheartopia.com/en/guides/roaming-oak",
                "th": "https://theheartopia.com/th/guides/roaming-oak",
                "pt": "https://theheartopia.com/pt/guides/roaming-oak",
                "es": "https://theheartopia.com/es/guides/roaming-oak",
                "id": "https://theheartopia.com/id/guides/roaming-oak",
                "x-default": "https://theheartopia.com/en/guides/roaming-oak",
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
                    url: "https://theheartopia.com/images/og/roaming-oak.webp",
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
            images: ["https://theheartopia.com/images/og/roaming-oak.webp"],
        },
    }
}

export default async function RoamingOakPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t: any = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const g = t.roamingOak

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://theheartopia.com/${locale}` },
                    { "@type": "ListItem", "position": 2, "name": "Guides", "item": `https://theheartopia.com/${locale}/guides` },
                    { "@type": "ListItem", "position": 3, "name": g.metaTitle, "item": `https://theheartopia.com/${locale}/guides/roaming-oak` },
                ],
            },
            {
                "@type": "Article",
                "headline": g.heroTitle,
                "description": g.metaDesc,
                "author": { "@type": "Organization", "name": "Heartopia Guide" },
                "publisher": { "@type": "Organization", "name": "Heartopia Guide", "url": "https://theheartopia.com" },
                "dateModified": "2026-02-13",
                "mainEntityOfPage": `https://theheartopia.com/${locale}/guides/roaming-oak`,
            },
            {
                "@type": "HowTo",
                "name": g.today?.title,
                "step": g.today?.checks?.map((check: string, i: number) => ({
                    "@type": "HowToStep",
                    "position": i + 1,
                    "text": check,
                })),
            },
            {
                "@type": "FAQPage",
                "mainEntity": [1,2,3,4,5,6,7].map((n) => ({
                    "@type": "Question",
                    "name": g.faq?.[`q${n}`],
                    "acceptedAnswer": { "@type": "Answer", "text": g.faq?.[`a${n}`] },
                })),
            },
        ],
    }

    const sections = [
        { id: "find-today", title: g.sections?.today },
        { id: "appearance", title: g.sections?.looks },
        { id: "unlock",     title: g.sections?.unlock },
        { id: "spawn",      title: g.sections?.spawn },
        { id: "crafting",   title: g.sections?.craft },
        { id: "tips",       title: g.sections?.tips },
        { id: "faq",        title: g.sections?.faq },
    ]

    const priorityColor = (p: string) => {
        if (p?.startsWith("⭐")) return "bg-amber-50 text-amber-700 border border-amber-200"
        if (p?.startsWith("✅")) return "bg-green-50 text-green-700 border border-green-200"
        return "bg-heartopia-cream/80 text-foreground border border-white/80"
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
                            <Home className="w-4 h-4" /> {t.navbar.home}
                        </Link>
                        <ChevronRight className="w-4 h-4 shrink-0" />
                        <span>{t.navbar.guides}</span>
                        <ChevronRight className="w-4 h-4 shrink-0" />
                        <span className="text-foreground font-medium truncate">{g.sections?.today}</span>
                    </div>
                </nav>

                <div className="max-w-5xl mx-auto px-4 pb-24">

                    {/* ── HERO ── */}
                    <header className="mb-10">
                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                            <Badge className="bg-heartopia-pink/10 text-heartopia-pink-darker hover:bg-heartopia-pink/20 border-none px-4 py-1 rounded-full text-sm font-semibold">
                                {g.badge}
                            </Badge>
                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                <TreeDeciduous className="w-3.5 h-3.5 text-heartopia-pink" />
                                {g.stats?.timber}
                            </span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                            {g.heroTitle}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                            {g.heroDesc}
                        </p>

                        {/* Quick stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
                            {[
                                { label: g.stats?.timber,   icon: "🪵" },
                                { label: g.stats?.reset,    icon: "🔄" },
                                { label: g.stats?.level,    icon: "⭐" },
                                { label: g.stats?.recipes,  icon: "✨" },
                                { label: g.stats?.missed,   icon: "⚠️" },
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

                        {/* ── SIDEBAR TOC ── */}
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

                        {/* ── MAIN CONTENT ── */}
                        <div className="flex-1 min-w-0 space-y-10">

                            {/* ── 1. FIND TODAY ── */}
                            <section id="find-today" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <MapPin size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.today?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.today?.intro}</p>

                                    {/* Numbered checklist */}
                                    <ol className="space-y-3">
                                        {g.today?.checks?.map((check: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-heartopia-orange/80 to-heartopia-pink/80 text-white font-bold rounded-full flex items-center justify-center shadow-sm text-sm">
                                                    {i + 1}
                                                </span>
                                                <div className="flex-1 bg-heartopia-cream/60 rounded-xl px-4 py-3 border border-white/80">
                                                    <p className="text-sm text-foreground leading-relaxed">{check}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>

                                    {/* Tips row */}
                                    <div className="space-y-2">
                                        <div className="bg-heartopia-cream/60 border border-white/80 rounded-xl p-3 text-sm text-muted-foreground">{g.today?.timeNote}</div>
                                        <div className="bg-heartopia-cream/60 border border-white/80 rounded-xl p-3 text-sm text-muted-foreground">{g.today?.axeNote}</div>
                                        <div className="bg-heartopia-sky/10 border border-heartopia-sky/30 rounded-xl p-3 flex items-start gap-2">
                                            <Info size={14} className="text-heartopia-sky-dark mt-0.5 shrink-0" />
                                            <p className="text-sm text-foreground">{g.today?.discordNote}</p>
                                        </div>
                                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                                            <AlertTriangle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                                            <p className="text-sm text-amber-800">{g.today?.noFastNote}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ── 2. APPEARANCE ── */}
                            <section id="appearance" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <TreeDeciduous size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.looks?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.looks?.intro}</p>

                                    <ul className="grid sm:grid-cols-2 gap-2">
                                        {g.looks?.items?.map((item: any, i: number) => (
                                            <li key={i} className="flex items-start gap-2 bg-heartopia-cream/60 rounded-xl px-3 py-2.5 border border-white/80">
                                                <span className="text-lg flex-shrink-0">{item.icon}</span>
                                                <div>
                                                    <p className="text-xs font-semibold text-foreground">{item.label}</p>
                                                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="bg-heartopia-cream/60 border border-white/80 rounded-xl px-4 py-3 flex items-start gap-2">
                                        <CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground leading-relaxed">{g.looks?.action}</p>
                                    </div>
                                </div>
                            </section>

                            {/* ── 3. UNLOCK ── */}
                            <section id="unlock" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Star size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.unlock?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.unlock?.intro}</p>

                                    <ol className="space-y-3">
                                        {g.unlock?.steps?.map((step: string, i: number) => (
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

                                    <div className="space-y-2">
                                        <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-sm text-green-800">{g.unlock?.note}</div>
                                        <div className="bg-heartopia-cream/60 border border-white/80 rounded-xl p-3 flex items-start gap-2">
                                            <Clock size={14} className="text-heartopia-pink mt-0.5 shrink-0" />
                                            <p className="text-sm text-muted-foreground">{g.unlock?.timeNote}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* ── 4. SPAWN MECHANICS ── */}
                            <section id="spawn" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Sparkles size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.spawn?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.spawn?.intro}</p>

                                    <ul className="space-y-2">
                                        {g.spawn?.rules?.map((rule: any, i: number) => (
                                            <li key={i} className="flex items-start gap-3 bg-heartopia-cream/60 rounded-xl px-4 py-3 border border-white/80">
                                                <span className="text-lg flex-shrink-0">{rule.icon}</span>
                                                <div>
                                                    <p className="text-sm font-semibold text-foreground">{rule.title}</p>
                                                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{rule.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                                        <AlertTriangle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                                        <p className="text-sm text-amber-800 font-medium">{g.spawn?.tip}</p>
                                    </div>
                                </div>
                            </section>

                            {/* ── 5. CRAFTING ── */}
                            <section id="crafting" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <TreeDeciduous size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.craft?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-6">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.craft?.intro}</p>

                                    {/* Table */}
                                    <div className="overflow-x-auto rounded-xl border border-white/60">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="bg-heartopia-cream/80 border-b border-white/60">
                                                    <th className="text-left px-4 py-3 font-semibold text-foreground text-xs">{g.craft?.thItem}</th>
                                                    <th className="text-center px-4 py-3 font-semibold text-foreground text-xs whitespace-nowrap">{g.craft?.thTimber}</th>
                                                    <th className="text-left px-4 py-3 font-semibold text-foreground text-xs whitespace-nowrap hidden sm:table-cell">{g.craft?.thOther}</th>
                                                    <th className="text-center px-4 py-3 font-semibold text-foreground text-xs whitespace-nowrap">{g.craft?.thDays}</th>
                                                    <th className="text-center px-4 py-3 font-semibold text-foreground text-xs">{g.craft?.thPriority}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {g.craft?.rows?.map((row: any, i: number) => (
                                                    <tr key={i} className="border-b border-white/40 last:border-0 hover:bg-heartopia-cream/30 transition-colors">
                                                        <td className="px-4 py-3 font-medium text-foreground text-sm">{row.item}</td>
                                                        <td className="px-4 py-3 text-center">
                                                            <span className="inline-flex items-center gap-1 font-semibold text-heartopia-pink-darker text-sm">
                                                                🪵 {row.timber}
                                                            </span>
                                                        </td>
                                                        <td className="px-4 py-3 text-muted-foreground text-sm hidden sm:table-cell">{row.other}</td>
                                                        <td className="px-4 py-3 text-center font-semibold text-foreground text-sm">{row.days}d</td>
                                                        <td className="px-4 py-3 text-center">
                                                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${priorityColor(row.priority)}`}>
                                                                {row.priority}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Priority guide */}
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-3 text-sm flex items-center gap-2">
                                            <Star size={14} className="text-amber-500" />
                                            {g.craft?.planTitle}
                                        </h3>
                                        <ul className="space-y-2">
                                            {g.craft?.plan?.map((p: any, i: number) => (
                                                <li key={i} className="flex items-start gap-3 bg-heartopia-cream/60 rounded-xl px-4 py-3 border border-white/80">
                                                    <span className="text-xs font-bold text-heartopia-pink shrink-0 w-10 mt-0.5">{p.rank}</span>
                                                    <div>
                                                        <p className="text-sm font-semibold text-foreground">{p.item}</p>
                                                        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{p.reason}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                                        <AlertTriangle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                                        <p className="text-sm text-amber-800 font-medium">{g.craft?.note}</p>
                                    </div>
                                </div>
                            </section>

                            {/* ── 6. PRO TIPS ── */}
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
                                            <li key={i} className="flex items-start gap-3 bg-heartopia-cream/60 rounded-xl px-4 py-3 border border-white/80">
                                                <span className="flex-shrink-0 w-6 h-6 bg-heartopia-pink/20 text-heartopia-pink-darker rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                                                <p className="text-sm text-foreground leading-relaxed">{tip}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* ── 7. FAQ ── */}
                            <section id="faq" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <HelpCircle size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.faq?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                    <Accordion type="single" collapsible className="space-y-2">
                                        {[1,2,3,4,5,6,7].map((n) => (
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

                            {/* ── RELATED GUIDES ── */}
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
