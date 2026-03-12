import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import {
    ChevronRight,
    BookOpen,
    ArrowRight,
    Home,
    HelpCircle,
    Watch,
    TrendingUp,
    Star,
    Sparkles,
    Info,
    CheckCircle,
    AlertTriangle,
    Calendar,
    BarChart3,
    Wallet,
    Leaf,
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
    const t: any = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const g = t.homeEvaluation

    return {
        title: g.metaTitle,
        description: g.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/guides/home-evaluation`,
            languages: {
                en: "https://theheartopia.com/en/guides/home-evaluation",
                th: "https://theheartopia.com/th/guides/home-evaluation",
                pt: "https://theheartopia.com/pt/guides/home-evaluation",
                es: "https://theheartopia.com/es/guides/home-evaluation",
                id: "https://theheartopia.com/id/guides/home-evaluation",
                "x-default": "https://theheartopia.com/en/guides/home-evaluation",
            },
        },
        openGraph: {
            title: g.metaTitle,
            description: g.metaDesc,
            url: `https://theheartopia.com/${locale}/guides/home-evaluation`,
            siteName: "Heartopia Guide",
            images: [
                {
                    url: "/images/guides/heartopia-home-evaluation.webp",
                    width: 1200,
                    height: 630,
                    alt: "Heartopia Home Evaluation Guide",
                },
            ],
            locale:
                locale === "th" ? "th_TH" :
                locale === "pt" ? "pt_BR" :
                locale === "es" ? "es_ES" :
                locale === "id" ? "id_ID" : "en_US",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: g.metaTitle,
            description: g.metaDesc,
            images: ["/images/guides/heartopia-home-evaluation.webp"],
        },
    }
}

export default async function HomeEvaluationPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t: any = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const g = t.homeEvaluation

    const sections = g.sections
        ? Object.entries(g.sections as Record<string, string>).map(([id, title]) => ({ id, title }))
        : []

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: `https://theheartopia.com/${locale}` },
                    { "@type": "ListItem", position: 2, name: "Guides", item: `https://theheartopia.com/${locale}/guides` },
                    { "@type": "ListItem", position: 3, name: g.heroTitle, item: `https://theheartopia.com/${locale}/guides/home-evaluation` },
                ],
            },
            {
                "@type": "Article",
                headline: g.metaTitle,
                description: g.metaDesc,
                url: `https://theheartopia.com/${locale}/guides/home-evaluation`,
                dateModified: "2026-02-13",
                inLanguage: locale,
                author: { "@type": "Organization", name: "Heartopia Guide" },
                publisher: { "@type": "Organization", name: "Heartopia Guide", url: "https://theheartopia.com" },
            },
            {
                "@type": "HowTo",
                name: "How to Submit Home Evaluation in Heartopia",
                step: [
                    { "@type": "HowToStep", position: 1, text: g.how?.step1 },
                    { "@type": "HowToStep", position: 2, text: g.how?.step2 },
                    { "@type": "HowToStep", position: 3, text: g.how?.step3 },
                    { "@type": "HowToStep", position: 4, text: g.how?.step4 },
                ],
            },
            {
                "@type": "FAQPage",
                mainEntity: g.faq ? [
                    { "@type": "Question", name: g.faq.q1, acceptedAnswer: { "@type": "Answer", text: g.faq.a1 } },
                    { "@type": "Question", name: g.faq.q2, acceptedAnswer: { "@type": "Answer", text: g.faq.a2 } },
                    { "@type": "Question", name: g.faq.q3, acceptedAnswer: { "@type": "Answer", text: g.faq.a3 } },
                    { "@type": "Question", name: g.faq.q4, acceptedAnswer: { "@type": "Answer", text: g.faq.a4 } },
                    { "@type": "Question", name: g.faq.q5, acceptedAnswer: { "@type": "Answer", text: g.faq.a5 } },
                    { "@type": "Question", name: g.faq.q6, acceptedAnswer: { "@type": "Answer", text: g.faq.a6 } },
                    { "@type": "Question", name: g.faq.q7, acceptedAnswer: { "@type": "Answer", text: g.faq.a7 } },
                ] : [],
            },
        ],
    }

    const PRIORITY_COLOR: Record<string, string> = {
        "🔴": "bg-red-100 text-red-700",
        "🟠": "bg-orange-100 text-orange-700",
        "🟡": "bg-yellow-100 text-yellow-700",
        "🟢": "bg-green-100 text-green-700",
        "⚪": "bg-gray-100 text-gray-500",
    }
    const getPriorityColor = (priority: string) => {
        for (const [emoji, cls] of Object.entries(PRIORITY_COLOR)) {
            if (priority.startsWith(emoji)) return cls
        }
        return "bg-gray-100 text-gray-500"
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
                        <span className="text-foreground font-medium truncate">{g.heroTitle}</span>
                    </div>
                </nav>

                <div className="max-w-5xl mx-auto px-4 pb-24">

                    {/* Hero */}
                    <header className="mb-10">
                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                            <Badge className="bg-heartopia-pink/10 text-heartopia-pink-darker hover:bg-heartopia-pink/20 border-none px-4 py-1 rounded-full text-sm font-semibold">
                                {g.badge}
                            </Badge>
                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                <TrendingUp className="w-3.5 h-3.5 text-heartopia-pink" />
                                {g.stats?.reset}
                            </span>
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                            {g.heroTitle}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                            {g.heroDesc}
                        </p>

                        {/* Quick stats */}
                        {g.stats && (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
                                {[
                                    { label: g.stats.submit,     icon: "📋" },
                                    { label: g.stats.reset,      icon: "🔄" },
                                    { label: g.stats.formula,    icon: "✨" },
                                    { label: g.stats.duplicate,  icon: "♻️" },
                                    { label: g.stats.maxHobbies, icon: "🏆" },
                                ].map((s, i) => (
                                    <div key={i} className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm p-3 text-center">
                                        <span className="text-xl block mb-1">{s.icon}</span>
                                        <span className="text-xs font-semibold text-foreground leading-tight block">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {g.quote && (
                            <blockquote className="glass rounded-2xl p-5 border border-white/50 bg-white/60 shadow-sm">
                                <p className="text-muted-foreground italic text-base leading-relaxed">
                                    &ldquo;{g.quote}&rdquo;
                                </p>
                            </blockquote>
                        )}
                    </header>

                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Sidebar TOC */}
                        {sections.length > 0 && (
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
                        )}

                        {/* Main content */}
                        <div className="flex-1 min-w-0 space-y-10">

                            {/* ── WHAT IS ── */}
                            {g.what && (
                                <section id="what">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0"><Home size={18} className="text-heartopia-pink-darker" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.what}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                        <p className="text-muted-foreground text-sm leading-relaxed">{g.what.intro}</p>

                                        {/* Rewards */}
                                        {g.what.rewardsTitle && (
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-3 text-base flex items-center gap-2">
                                                    <Star size={15} className="text-amber-500" />
                                                    {g.what.rewardsTitle}
                                                </h3>
                                                <ul className="grid sm:grid-cols-2 gap-2">
                                                    {(g.what.rewards || []).map((r: string, i: number) => (
                                                        <li key={i} className="flex items-center gap-2 bg-heartopia-cream/60 rounded-xl px-3 py-2.5 text-sm text-muted-foreground border border-white/80">
                                                            <CheckCircle size={14} className="text-green-500 shrink-0" />
                                                            {r}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {g.what.note && (
                                            <div className="bg-heartopia-sky/10 border border-heartopia-sky/30 rounded-xl p-3 flex items-start gap-2">
                                                <Info size={15} className="text-heartopia-sky-dark mt-0.5 shrink-0" />
                                                <p className="text-sm text-foreground">{g.what.note}</p>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* ── HOW TO SUBMIT ── */}
                            {g.how && (
                                <section id="how">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-orange/10 rounded-xl shrink-0"><Watch size={18} className="text-heartopia-orange" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.how}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                        <p className="text-sm text-muted-foreground">{g.how.intro}</p>

                                        {/* Steps */}
                                        <ol className="space-y-3">
                                            {[g.how.step1, g.how.step2, g.how.step3, g.how.step4].filter(Boolean).map((step: string, i: number) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-heartopia-orange/80 to-heartopia-pink/80 text-white font-bold rounded-full flex items-center justify-center shadow-sm text-sm">{i + 1}</span>
                                                    <div className="flex-1 bg-heartopia-cream/60 rounded-xl px-4 py-3 border border-white/80">
                                                        <p className="text-sm text-foreground leading-relaxed">{step}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>

                                        {g.how.tip && (
                                            <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-sm text-green-800">
                                                {g.how.tip}
                                            </div>
                                        )}
                                        {g.how.warning && (
                                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                                                <AlertTriangle size={15} className="text-amber-600 mt-0.5 shrink-0" />
                                                <p className="text-sm text-amber-800">{g.how.warning}</p>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* ── SCORING ── */}
                            {g.scoring && (
                                <section id="scoring">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-purple-100 rounded-xl shrink-0"><BarChart3 size={18} className="text-purple-600" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.scoring}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                        <p className="text-sm text-muted-foreground leading-relaxed">{g.scoring.intro}</p>

                                        {/* Core rule */}
                                        <div className="bg-gradient-to-br from-purple-50 to-heartopia-pink/5 border border-purple-200/50 rounded-2xl p-5">
                                            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2 text-sm">
                                                <Sparkles size={15} className="text-purple-600" />
                                                {g.scoring.ruleTitle}
                                            </h3>
                                            <ul className="space-y-2">
                                                {[g.scoring.rule1, g.scoring.rule2, g.scoring.rule3].filter(Boolean).map((r: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm">
                                                        <span className={`font-bold shrink-0 ${i === 0 ? 'text-green-600' : i === 1 ? 'text-red-500' : 'text-foreground'}`}>
                                                            {i === 0 ? '✅' : i === 1 ? '❌' : '💡'}
                                                        </span>
                                                        <span className="text-muted-foreground">{r}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* What it scans */}
                                        {g.scoring.categoryTitle && (
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-3 text-sm">{g.scoring.categoryTitle}</h3>
                                                <div className="grid sm:grid-cols-2 gap-2.5">
                                                    {(g.scoring.categories || []).map((cat: any, i: number) => (
                                                        <div key={i} className="flex items-start gap-3 bg-heartopia-cream/60 rounded-xl p-3 border border-white/80">
                                                            <span className="text-xl shrink-0">{cat.icon}</span>
                                                            <div>
                                                                <p className="font-semibold text-foreground text-sm">{cat.label}</p>
                                                                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{cat.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Misconceptions */}
                                        {g.scoring.warnTitle && (
                                            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                                                <h3 className="font-semibold text-red-700 mb-2 text-sm">{g.scoring.warnTitle}</h3>
                                                <ul className="space-y-1.5">
                                                    {[g.scoring.warn1, g.scoring.warn2, g.scoring.warn3].filter(Boolean).map((w: string, i: number) => (
                                                        <li key={i} className="text-sm text-red-700">{w}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* ── BOOST ── */}
                            {g.boost && (
                                <section id="boost">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-green-100 rounded-xl shrink-0"><TrendingUp size={18} className="text-green-600" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.boost}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <div className="space-y-5">
                                            {[
                                                { title: g.boost.furTitle,    desc: g.boost.furDesc,    icon: "🛋️", color: "bg-heartopia-pink/5 border-heartopia-pink/20" },
                                                { title: g.boost.flowerTitle, desc: g.boost.flowerDesc, icon: "🌸", color: "bg-pink-50 border-pink-200/50" },
                                                { title: g.boost.collectTitle,desc: g.boost.collectDesc,icon: "⭐", color: "bg-amber-50 border-amber-200/50" },
                                                { title: g.boost.paidTitle,   desc: g.boost.paidDesc,   icon: "💎", color: "bg-purple-50 border-purple-200/50" },
                                                { title: g.boost.foodTitle,   desc: g.boost.foodDesc,   icon: "🍱", color: "bg-orange-50 border-orange-200/50" },
                                                { title: g.boost.structTitle, desc: g.boost.structDesc, icon: "🏗️", color: "bg-sky-50 border-sky-200/50" },
                                            ].filter(item => item.title).map((item, i) => (
                                                <div key={i} className={`rounded-2xl border p-4 ${item.color}`}>
                                                    <h3 className="font-bold text-foreground mb-1.5 flex items-center gap-2 text-sm">
                                                        <span className="text-lg">{item.icon}</span>
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* ── WEEKLY STRATEGY ── */}
                            {g.weekly && (
                                <section id="weekly">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-blue-100 rounded-xl shrink-0"><Calendar size={18} className="text-blue-600" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.weekly}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                        <p className="text-sm text-muted-foreground">{g.weekly.intro}</p>

                                        {/* Rules */}
                                        <ul className="space-y-2">
                                            {[g.weekly.rule1, g.weekly.rule2, g.weekly.rule3].filter(Boolean).map((r: string, i: number) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="text-blue-500 mt-0.5 shrink-0">•</span>
                                                    {r}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Schedule */}
                                        {g.weekly.scheduleTitle && (
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-3 text-sm">{g.weekly.scheduleTitle}</h3>
                                                <div className="space-y-2">
                                                    {(g.weekly.schedule || []).map((s: any, i: number) => (
                                                        <div key={i} className={`flex items-start gap-3 rounded-xl p-3 ${i === 2 ? 'bg-heartopia-pink/10 border border-heartopia-pink/20' : 'bg-heartopia-cream/60 border border-white/80'}`}>
                                                            <span className={`text-xs font-bold px-2 py-1 rounded-lg shrink-0 ${i === 2 ? 'bg-heartopia-pink text-white' : 'bg-white text-foreground border border-gray-200'}`}>
                                                                {s.day}
                                                            </span>
                                                            <p className={`text-sm pt-0.5 ${i === 2 ? 'text-heartopia-pink-darker font-medium' : 'text-muted-foreground'}`}>{s.action}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {g.weekly.tip && (
                                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-sm text-blue-800">
                                                💡 {g.weekly.tip}
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* ── FREE vs PAID ── */}
                            {g.ftp && (
                                <section id="ftp">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-amber-100 rounded-xl shrink-0"><Wallet size={18} className="text-amber-600" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.ftp}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                                            {/* Free path */}
                                            <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
                                                <h3 className="font-bold text-green-800 mb-3 text-sm">{g.ftp.freeTitle}</h3>
                                                <ul className="space-y-1.5">
                                                    {(g.ftp.freeItems || []).map((item: string, i: number) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                                                            <CheckCircle size={13} className="text-green-500 mt-0.5 shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            {/* Paid path */}
                                            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
                                                <h3 className="font-bold text-purple-800 mb-3 text-sm">{g.ftp.paidTitle}</h3>
                                                <ul className="space-y-1.5">
                                                    {(g.ftp.paidItems || []).map((item: string, i: number) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-purple-800">
                                                            <Star size={13} className="text-purple-500 mt-0.5 shrink-0" />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        {g.ftp.note && (
                                            <div className="bg-heartopia-sky/10 border border-heartopia-sky/30 rounded-xl p-3 flex items-start gap-2">
                                                <Info size={15} className="text-heartopia-sky-dark mt-0.5 shrink-0" />
                                                <p className="text-sm text-foreground">{g.ftp.note}</p>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* ── PRIORITY TABLE ── */}
                            {g.table && (
                                <section id="table">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0"><Leaf size={18} className="text-heartopia-pink-darker" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.table}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <p className="text-sm text-muted-foreground mb-4">{g.table.intro}</p>
                                        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
                                            <table className="w-full text-sm">
                                                <thead>
                                                    <tr className="bg-gradient-to-r from-heartopia-pink/20 to-purple-100 text-foreground">
                                                        <th className="text-left px-4 py-2.5 font-semibold rounded-tl-xl">{g.table.thCategory}</th>
                                                        <th className="text-left px-4 py-2.5 font-semibold">{g.table.thPerItem}</th>
                                                        <th className="text-left px-4 py-2.5 font-semibold rounded-tr-xl">{g.table.thPriority}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(g.table.rows || []).map((row: any, i: number) => (
                                                        <tr key={i} className="border-t border-gray-50 hover:bg-heartopia-pink/3 transition-colors">
                                                            <td className="px-4 py-3 text-muted-foreground">{row.category}</td>
                                                            <td className="px-4 py-3 font-semibold text-foreground">{row.perItem}</td>
                                                            <td className="px-4 py-3">
                                                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getPriorityColor(row.priority)}`}>
                                                                    {row.priority}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        {g.table.note && (
                                            <p className="text-xs text-muted-foreground italic">{g.table.note}</p>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* ── PRO TIPS ── */}
                            {g.tips && (
                                <section id="tips">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0"><Sparkles size={18} className="text-heartopia-pink-darker" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.tips}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <ol className="space-y-3">
                                            {(g.tips.items || []).map((tip: string, i: number) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-heartopia-pink/60 to-heartopia-pink-darker/80 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-soft-pink">
                                                        {i + 1}
                                                    </span>
                                                    <span className="text-muted-foreground text-sm leading-relaxed pt-0.5">{tip}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </section>
                            )}

                            {/* ── FAQ ── */}
                            {g.faq && (
                                <section id="faq">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-sky/10 rounded-xl shrink-0"><HelpCircle size={18} className="text-heartopia-sky-dark" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.faq}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-2">
                                        <Accordion type="single" collapsible className="w-full">
                                            {[
                                                { q: g.faq.q1, a: g.faq.a1 },
                                                { q: g.faq.q2, a: g.faq.a2 },
                                                { q: g.faq.q3, a: g.faq.a3 },
                                                { q: g.faq.q4, a: g.faq.a4 },
                                                { q: g.faq.q5, a: g.faq.a5 },
                                                { q: g.faq.q6, a: g.faq.a6 },
                                                { q: g.faq.q7, a: g.faq.a7 },
                                            ].filter(({ q }) => q).map(({ q, a }, i) => (
                                                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-gray-100 last:border-0">
                                                    <AccordionTrigger className="px-4 py-4 text-sm font-semibold text-foreground hover:text-heartopia-pink-dark hover:no-underline text-left">
                                                        {q}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                                                        {a}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                </section>
                            )}

                            {/* ── RELATED GUIDES ── */}
                            {g.related && (
                                <section>
                                    <h2 className="text-lg font-bold text-foreground mb-4">{g.related.title}</h2>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {(g.related.items || []).map((item: any, i: number) => (
                                            <Link
                                                key={i}
                                                href={`/${locale}${item.href}`}
                                                className="flex items-center justify-between gap-3 bg-white/80 hover:bg-white border border-white/50 hover:border-heartopia-pink/20 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all group"
                                            >
                                                <span className="font-semibold text-sm text-foreground group-hover:text-heartopia-pink-dark">{item.label}</span>
                                                <ArrowRight size={15} className="text-heartopia-pink/60 group-hover:text-heartopia-pink shrink-0 transition-colors" />
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            )}

                        </div>
                    </div>
                </div>

                <Footer locale={locale} t={t.footer} />
            </main>
        </>
    )
}
