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
    Utensils,
    Package,
    Clock,
    Lock,
    Unlock,
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
    const g = t.penguinTrough
    const url = `https://theheartopia.com/${locale}/guides/heartopia-penguin-trough`

    return {
        title: g.metaTitle,
        description: g.metaDesc,
        alternates: {
            canonical: url,
            languages: {
                en: "https://theheartopia.com/en/guides/heartopia-penguin-trough",
                th: "https://theheartopia.com/th/guides/heartopia-penguin-trough",
                pt: "https://theheartopia.com/pt/guides/heartopia-penguin-trough",
                es: "https://theheartopia.com/es/guides/heartopia-penguin-trough",
                id: "https://theheartopia.com/id/guides/heartopia-penguin-trough",
                "x-default": "https://theheartopia.com/en/guides/heartopia-penguin-trough",
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
                    url: "https://theheartopia.com/images/og/penguin-trough.webp",
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
            images: ["https://theheartopia.com/images/og/penguin-trough.webp"],
        },
    }
}

export default async function PenguinTroughPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t: any = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const g = t.penguinTrough

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: `https://theheartopia.com/${locale}` },
                    { "@type": "ListItem", position: 2, name: "Guides", item: `https://theheartopia.com/${locale}/guides` },
                    { "@type": "ListItem", position: 3, name: g.breadcrumb, item: `https://theheartopia.com/${locale}/guides/heartopia-penguin-trough` },
                ],
            },
            {
                "@type": "Article",
                headline: g.heroTitle,
                description: g.metaDesc,
                author: { "@type": "Organization", name: "Heartopia Guide" },
                publisher: { "@type": "Organization", name: "Heartopia Guide", url: "https://theheartopia.com" },
                dateModified: "2026-02-27",
                mainEntityOfPage: `https://theheartopia.com/${locale}/guides/heartopia-penguin-trough`,
            },
            {
                "@type": "HowTo",
                name: g.unlock?.title,
                step: g.unlock?.steps?.map((step: any, i: number) => ({
                    "@type": "HowToStep",
                    position: i + 1,
                    text: `${step.npc}: ${step.action}`,
                })),
            },
            {
                "@type": "FAQPage",
                mainEntity: [1, 2, 3, 4, 5].map((n) => ({
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
        { id: "unlock", title: g.sections?.unlock },
        { id: "mechanics", title: g.sections?.mechanics },
        { id: "rewards", title: g.sections?.rewards },
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
                        <div className="mb-4 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 flex items-center gap-2 shadow-sm">
                            <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                            <span className="text-sm font-semibold text-amber-800">{g.deadline}</span>
                        </div>

                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                            <Badge className="bg-heartopia-sky/10 text-heartopia-sky-darker hover:bg-heartopia-sky/20 border-none px-4 py-1 rounded-full text-sm font-semibold">
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
                                { label: g.stats?.storage, icon: <Package className="w-4 h-4 text-heartopia-orange" /> },
                                { label: g.stats?.unlock, icon: <Lock className="w-4 h-4 text-heartopia-pink" /> },
                                { label: g.stats?.reset, icon: <Clock className="w-4 h-4 text-heartopia-sky" /> },
                                { label: g.stats?.event, icon: <Sparkles className="w-4 h-4 text-amber-500" /> },
                            ].map((s, i) => (
                                <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm p-3 text-center flex flex-col items-center justify-center">
                                    <div className="bg-white rounded-full p-2 mb-1.5 shadow-xs">
                                        {s.icon}
                                    </div>
                                    <span className="text-xs font-bold text-foreground leading-tight">{s.label}</span>
                                </div>
                            ))}
                        </div>

                        <blockquote className="glass rounded-2xl p-5 border border-white/50 bg-white/60 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-heartopia-pink/5 rounded-full -mr-12 -mt-12" />
                            <p className="text-muted-foreground italic text-base leading-relaxed relative z-10">
                                &ldquo;{g.quote}&rdquo;
                            </p>
                        </blockquote>
                    </header>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar */}
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
                            {/* What section */}
                            <section id="what" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Utensils size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.what?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.what?.intro}</p>
                                    <div className="grid sm:grid-cols-1 gap-2">
                                        {g.what?.highlights?.map((item: string, i: number) => (
                                            <div key={i} className="bg-heartopia-cream/60 rounded-xl border border-white/80 px-4 py-3 text-sm text-foreground flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-heartopia-pink shrink-0" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Location section */}
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
                                            <div key={i} className="flex items-start gap-4 bg-heartopia-cream/60 rounded-xl border border-white/80 p-4">
                                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                                                    <MapPin className="w-5 h-5 text-heartopia-pink" />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-foreground text-sm mb-1">{spot.title}</h3>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">{spot.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2 mt-4">
                                        <AlertTriangle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                                        <p className="text-sm text-amber-800 font-medium">{g.location?.tip}</p>
                                    </div>
                                </div>
                            </section>

                            {/* Unlock section */}
                            <section id="unlock" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Unlock size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.unlock?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.unlock?.intro}</p>
                                    <div className="relative space-y-4 pl-4 border-l-2 border-heartopia-pink/20 ml-2">
                                        {g.unlock?.steps?.map((step: any, i: number) => (
                                            <div key={i} className="relative">
                                                <div className="absolute -left-[2.1rem] top-1 w-6 h-6 bg-white border-2 border-heartopia-pink rounded-full flex items-center justify-center text-[10px] font-bold text-heartopia-pink">
                                                    {step.num}
                                                </div>
                                                <div className="bg-heartopia-cream/60 rounded-2xl p-4 border border-white/80 shadow-sm">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <Badge className="bg-heartopia-pink/10 text-heartopia-pink-darker border-none text-[10px] px-2 py-0">
                                                            NPC: {step.npc}
                                                        </Badge>
                                                    </div>
                                                    <p className="text-sm text-foreground leading-relaxed">{step.action}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Mechanics section */}
                            <section id="mechanics" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Star size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.mechanics?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.mechanics?.intro}</p>
                                    <div className="overflow-x-auto rounded-2xl border border-white/70">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="bg-heartopia-pink/5 border-b border-white/70">
                                                    <th className="text-left px-4 py-3 text-xs font-bold text-foreground">{g.mechanics?.table?.thLevel}</th>
                                                    <th className="text-center px-4 py-3 text-xs font-bold text-foreground">{g.mechanics?.table?.thStorage}</th>
                                                    <th className="text-left px-4 py-3 text-xs font-bold text-foreground">{g.mechanics?.table?.thStats}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {g.mechanics?.table?.rows?.map((row: any, i: number) => (
                                                    <tr key={i} className="border-b border-white/40 last:border-b-0 bg-white/40">
                                                        <td className="px-4 py-4">
                                                            <span className="font-bold text-foreground">{row.level}</span>
                                                        </td>
                                                        <td className="px-4 py-4 text-center">
                                                            <Badge variant="outline" className="text-heartopia-orange border-heartopia-orange/30 font-bold">
                                                                {row.storage}
                                                            </Badge>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm text-muted-foreground leading-snug">
                                                            {row.stats}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>

                            {/* Rewards section */}
                            <section id="rewards" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Sparkles size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.rewards?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                    <ul className="grid sm:grid-cols-2 gap-3">
                                        {g.rewards?.items?.map((item: string, i: number) => (
                                            <li key={i} className="bg-heartopia-cream/60 rounded-xl border border-white/80 px-4 py-3 flex gap-3 text-sm text-foreground">
                                                <div className="bg-heartopia-pink/10 rounded-lg p-1.5 shrink-0 h-fit">
                                                    <Package size={14} className="text-heartopia-pink-darker" />
                                                </div>
                                                <p className="leading-relaxed">{item}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* FAQ section */}
                            <section id="faq" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <HelpCircle size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.faq?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                    <Accordion type="single" collapsible className="space-y-2">
                                        {[1, 2, 3, 4, 5].map((n) => (
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
