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
    User,
    ShoppingBag,
    Users,
    MessageCircle,
    Calendar,
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
    const g = t.mbtiGuide
    const url = `https://theheartopia.com/${locale}/guides/heartopia-mbti-personality-guide`

    return {
        title: g.metaTitle,
        description: g.metaDesc,
        alternates: {
            canonical: url,
            languages: {
                en: "https://theheartopia.com/en/guides/heartopia-mbti-personality-guide",
                th: "https://theheartopia.com/th/guides/heartopia-mbti-personality-guide",
                pt: "https://theheartopia.com/pt/guides/heartopia-mbti-personality-guide",
                es: "https://theheartopia.com/es/guides/heartopia-mbti-personality-guide",
                id: "https://theheartopia.com/id/guides/heartopia-mbti-personality-guide",
                "x-default": "https://theheartopia.com/en/guides/heartopia-mbti-personality-guide",
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
                    url: "https://theheartopia.com/images/og/mbti-guide.webp",
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
            images: ["https://theheartopia.com/images/og/mbti-guide.webp"],
        },
    }
}

export default async function MBTIGuidePage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t: any = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const g = t.mbtiGuide

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: `https://theheartopia.com/${locale}` },
                    { "@type": "ListItem", position: 2, name: "Guides", item: `https://theheartopia.com/${locale}/guides` },
                    { "@type": "ListItem", position: 3, name: g.breadcrumb, item: `https://theheartopia.com/${locale}/guides/heartopia-mbti-personality-guide` },
                ],
            },
            {
                "@type": "Article",
                headline: g.heroTitle,
                description: g.metaDesc,
                author: { "@type": "Organization", name: "Heartopia Guide" },
                publisher: { "@type": "Organization", name: "Heartopia Guide", url: "https://theheartopia.com" },
                datePublished: "2026-03-07",
                dateModified: "2026-03-07",
                mainEntityOfPage: `https://theheartopia.com/${locale}/guides/heartopia-mbti-personality-guide`,
                keywords: "heartopia mbti, heartopia shape of you event, heartopia mbti outfits, heartopia npc personality types, heartopia oak-oak mbti, heartopia infj character",
            },
            {
                "@type": "FAQPage",
                mainEntity: [1, 2, 3, 4, 5, 6].map((n) => ({
                    "@type": "Question",
                    name: g.faq?.[`q${n}`],
                    acceptedAnswer: { "@type": "Answer", text: g.faq?.[`a${n}`] },
                })),
            },
            {
                "@type": "Event",
                name: "The Shape of You — Heartopia MBTI Event",
                startDate: "2026-03-13",
                endDate: "2026-04-05",
                description: "Heartopia's official MBTI personality event featuring 16 outfit sets and in-game personality quiz.",
                url: `https://theheartopia.com/${locale}/guides/heartopia-mbti-personality-guide`,
            },
        ],
    }

    const sections = [
        { id: "event", title: g.sections?.event },
        { id: "outfits", title: g.sections?.outfits },
        { id: "npcs", title: g.sections?.npcs },
        { id: "match", title: g.sections?.match },
        { id: "controversy", title: g.sections?.controversy },
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

                {/* Breadcrumb */}
                <nav className="pt-28 pb-4 px-4" aria-label="Breadcrumb">
                    <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                        <Link href={`/${locale}`} className="hover:text-purple-600 transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" /> {t.navbar.home}
                        </Link>
                        <ChevronRight className="w-4 h-4 shrink-0" />
                        <Link href={`/${locale}/guides`} className="hover:text-purple-600 transition-colors">
                            {t.navbar.guides}
                        </Link>
                        <ChevronRight className="w-4 h-4 shrink-0" />
                        <span className="text-foreground font-medium truncate">{g.breadcrumb}</span>
                    </div>
                </nav>

                <div className="max-w-5xl mx-auto px-4 pb-24">
                    {/* Hero */}
                    <header className="mb-10">
                        {/* Alert banner */}
                        <div className="mb-4 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 flex items-center gap-2 shadow-sm">
                            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                            <span className="text-sm font-semibold text-amber-800">{g.alertBanner}</span>
                        </div>

                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 border-none px-4 py-1 rounded-full text-sm font-semibold">
                                {g.badge}
                            </Badge>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                            {g.heroTitle}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                            {g.heroDesc}
                        </p>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                            {[
                                { label: g.stats?.event, icon: <Calendar className="w-4 h-4 text-purple-500" /> },
                                { label: g.stats?.outfits, icon: <Sparkles className="w-4 h-4 text-heartopia-pink" /> },
                                { label: g.stats?.npcs, icon: <Users className="w-4 h-4 text-heartopia-sky" /> },
                                { label: g.stats?.store, icon: <ShoppingBag className="w-4 h-4 text-amber-500" /> },
                            ].map((s, i) => (
                                <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm p-3 text-center flex flex-col items-center justify-center">
                                    <div className="bg-white rounded-full p-2 mb-1.5 shadow-xs">
                                        {s.icon}
                                    </div>
                                    <span className="text-xs font-bold text-foreground leading-tight">{s.label}</span>
                                </div>
                            ))}
                        </div>

                        <blockquote className="glass rounded-2xl p-5 border border-purple-100 bg-purple-50/40 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100/50 rounded-full -mr-12 -mt-12" />
                            <p className="text-muted-foreground italic text-base leading-relaxed relative z-10">
                                &ldquo;{g.quote}&rdquo;
                            </p>
                        </blockquote>
                    </header>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar TOC */}
                        <aside className="lg:w-56 shrink-0">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-5 lg:sticky lg:top-6">
                                <div className="flex items-center gap-2 mb-4 text-purple-700 font-semibold text-sm">
                                    <BookOpen size={15} />
                                    <span>{g.tocTitle}</span>
                                </div>
                                <ul className="space-y-1.5">
                                    {sections.map(({ id, title }) => (
                                        <li key={id}>
                                            <a href={`#${id}`} className="text-sm text-muted-foreground hover:text-purple-600 flex items-center gap-1.5 group">
                                                <ArrowRight size={11} className="text-purple-300 group-hover:text-purple-500 shrink-0" />
                                                {title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>

                        <div className="flex-1 min-w-0 space-y-10">

                            {/* ① Event Section */}
                            <section id="event" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-purple-100 rounded-xl shrink-0">
                                        <Calendar size={18} className="text-purple-700" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.event?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.event?.intro}</p>
                                    <div className="overflow-x-auto rounded-2xl border border-white/70">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="bg-purple-50 border-b border-white/70">
                                                    <th className="text-left px-4 py-3 text-xs font-bold text-foreground">{g.event?.thStep}</th>
                                                    <th className="text-left px-4 py-3 text-xs font-bold text-foreground">{g.event?.thAction}</th>
                                                    <th className="text-left px-4 py-3 text-xs font-bold text-foreground hidden sm:table-cell">{g.event?.thNote}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {g.event?.steps?.map((row: any, i: number) => (
                                                    <tr key={i} className="border-b border-white/40 last:border-b-0 bg-white/40">
                                                        <td className="px-4 py-3">
                                                            <span className="font-bold text-purple-700 text-sm">{row.step}</span>
                                                        </td>
                                                        <td className="px-4 py-3 text-sm text-foreground font-medium">{row.action}</td>
                                                        <td className="px-4 py-3 text-xs text-muted-foreground hidden sm:table-cell">{row.note}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 flex items-start gap-2">
                                        <Info size={14} className="text-purple-600 mt-0.5 shrink-0" />
                                        <p className="text-sm text-purple-800 font-medium">{g.event?.tip}</p>
                                    </div>
                                </div>
                            </section>

                            {/* ② Outfits Section */}
                            <section id="outfits" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Sparkles size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.outfits?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.outfits?.intro}</p>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="bg-heartopia-cream/60 rounded-2xl border border-white/80 p-4">
                                            <h3 className="font-bold text-sm text-foreground mb-2 flex items-center gap-2">
                                                <ShoppingBag className="w-4 h-4 text-heartopia-pink shrink-0" />
                                                {g.outfits?.method1Title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{g.outfits?.method1Desc}</p>
                                        </div>
                                        <div className="bg-heartopia-cream/60 rounded-2xl border border-white/80 p-4">
                                            <h3 className="font-bold text-sm text-foreground mb-2 flex items-center gap-2">
                                                <Star className="w-4 h-4 text-amber-500 shrink-0" />
                                                {g.outfits?.method2Title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{g.outfits?.method2Desc}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-sm text-foreground mb-2">{g.outfits?.priceTitle}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{g.outfits?.priceDesc}</p>
                                    </div>

                                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                                        <AlertTriangle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                                        <p className="text-sm text-amber-800 font-medium">{g.outfits?.controversyNote}</p>
                                    </div>

                                    <div className="overflow-x-auto rounded-2xl border border-white/70">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="bg-heartopia-pink/5 border-b border-white/70">
                                                    <th className="text-left px-4 py-3 text-xs font-bold text-foreground">{g.outfits?.thMethod}</th>
                                                    <th className="text-left px-4 py-3 text-xs font-bold text-foreground">{g.outfits?.thRequirement}</th>
                                                    <th className="text-left px-4 py-3 text-xs font-bold text-foreground hidden sm:table-cell">{g.outfits?.thCurrency}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {g.outfits?.rows?.map((row: any, i: number) => (
                                                    <tr key={i} className="border-b border-white/40 last:border-b-0 bg-white/40">
                                                        <td className="px-4 py-3 font-semibold text-foreground text-sm">{row.method}</td>
                                                        <td className="px-4 py-3 text-sm text-muted-foreground">{row.requirement}</td>
                                                        <td className="px-4 py-3 text-xs text-muted-foreground hidden sm:table-cell">{row.currency}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* ③ NPC Types Section */}
                            <section id="npcs" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-sky/10 rounded-xl shrink-0">
                                        <Users size={18} className="text-heartopia-sky-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.npcs?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.npcs?.intro}</p>
                                    <div className="overflow-x-auto rounded-2xl border border-white/70">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="bg-heartopia-sky/5 border-b border-white/70">
                                                    <th className="text-left px-4 py-3 text-xs font-bold text-foreground">{g.npcs?.thNpc}</th>
                                                    <th className="text-left px-4 py-3 text-xs font-bold text-foreground">{g.npcs?.thType}</th>
                                                    <th className="text-left px-4 py-3 text-xs font-bold text-foreground hidden sm:table-cell">{g.npcs?.thTitle}</th>
                                                    <th className="text-left px-4 py-3 text-xs font-bold text-foreground hidden md:table-cell">{g.npcs?.thConsensus}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {g.npcs?.rows?.map((row: any, i: number) => (
                                                    <tr key={i} className={`border-b border-white/40 last:border-b-0 ${row.highlight ? "bg-purple-50/60" : "bg-white/40"}`}>
                                                        <td className="px-4 py-4 font-bold text-foreground text-sm">{row.npc}</td>
                                                        <td className="px-4 py-4">
                                                            <span className="font-bold text-purple-700 bg-purple-100 rounded-lg px-2 py-0.5 text-xs">{row.type}</span>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-muted-foreground hidden sm:table-cell">{row.title}</td>
                                                        <td className="px-4 py-4 text-xs text-muted-foreground hidden md:table-cell">{row.consensus}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="bg-heartopia-cream/80 border border-white/80 rounded-xl p-3 flex items-start gap-2">
                                        <Info size={14} className="text-heartopia-sky-darker mt-0.5 shrink-0" />
                                        <p className="text-sm text-muted-foreground leading-relaxed">{g.npcs?.note}</p>
                                    </div>
                                </div>
                            </section>

                            {/* ④ Character Match Section */}
                            <section id="match" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <User size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.match?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.match?.intro}</p>
                                    <div className="space-y-3">
                                        {g.match?.items?.map((item: any, i: number) => (
                                            <div key={i} className={`rounded-2xl border p-4 flex gap-4 items-start ${item.highlight ? "bg-purple-50 border-purple-200" : "bg-heartopia-cream/60 border-white/80"}`}>
                                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs leading-tight text-center ${item.highlight ? "bg-purple-600 text-white" : "bg-white text-purple-700 shadow-sm border border-purple-100"}`}>
                                                    {item.type.split(" ")[0]}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                        <span className="font-bold text-foreground">{item.npc}</span>
                                                        <span className="text-xs text-muted-foreground bg-white rounded-full px-2 py-0.5 border">{item.role}</span>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.tip}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* ⑤ Controversy Section */}
                            <section id="controversy" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-amber-100 rounded-xl shrink-0">
                                        <MessageCircle size={18} className="text-amber-700" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.controversy?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                                        <p className="text-sm text-amber-900 font-semibold mb-2">{g.controversy?.what}</p>
                                        <p className="text-sm text-amber-800 leading-relaxed">{g.controversy?.whatDesc}</p>
                                    </div>
                                    <div className="space-y-3">
                                        {g.controversy?.timeline?.map((item: any, i: number) => (
                                            <div key={i} className="flex items-start gap-3 bg-heartopia-cream/60 rounded-xl border border-white/80 p-4">
                                                <div className="w-8 h-8 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-sm font-bold text-amber-700">
                                                    {i + 1}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-sm text-foreground">{item.event}</p>
                                                    <p className="text-sm text-muted-foreground mt-0.5">{item.detail}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs text-muted-foreground italic border-t border-white/60 pt-3">{g.controversy?.disclaimer}</p>
                                </div>
                            </section>

                            {/* ⑥ FAQ Section */}
                            <section id="faq" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <HelpCircle size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.faq?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                    <Accordion type="single" collapsible className="space-y-2">
                                        {[1, 2, 3, 4, 5, 6].map((n) => (
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
                                            <span className="text-sm font-medium text-foreground group-hover:text-purple-600 transition-colors">
                                                {item.label}
                                            </span>
                                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
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
