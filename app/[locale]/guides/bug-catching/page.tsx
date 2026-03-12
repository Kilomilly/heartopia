import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import {
    ChevronRight,
    BookOpen,
    HelpCircle,
    ArrowRight,
    Home,
    Bug,
    Unlock,
    Hammer,
    MapPin,
    Clock,
    Cloud,
    Star,
    Wrench,
    Zap,
    Fish,
    Bird,
    Award,
    Info,
    Flame,
    Sparkles,
    Dog,
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
import { BugTable } from "@/components/heartopia/bug-table"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const t: any = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const g = t.bugGuide

    return {
        title: g.metaTitle,
        description: g.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/guides/bug-catching`,
            languages: {
                "en": "https://theheartopia.com/en/guides/bug-catching",
                "th": "https://theheartopia.com/th/guides/bug-catching",
                "pt": "https://theheartopia.com/pt/guides/bug-catching",
                "es": "https://theheartopia.com/es/guides/bug-catching",
                "id": "https://theheartopia.com/id/guides/bug-catching",
                "x-default": "https://theheartopia.com/en/guides/bug-catching",
            },
        },
        openGraph: {
            title: g.metaTitle,
            description: g.metaDesc,
            url: `https://theheartopia.com/${locale}/guides/bug-catching`,
            siteName: "Heartopia Guide",
            images: [
                {
                    url: "/images/guides/heartopia-bug-catching.webp",
                    width: 1200,
                    height: 630,
                    alt: "Heartopia Bug Catching Guide",
                },
            ],
            locale: locale === "th" ? "th_TH" : locale === "pt" ? "pt_BR" : locale === "es" ? "es_ES" : locale === "id" ? "id_ID" : "en_US",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: g.metaTitle,
            description: g.metaDesc,
            images: ["/images/guides/heartopia-bug-catching.webp"],
        },
    }
}

export default async function BugCatchingGuidePage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t: any = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const g = t.bugGuide

    const sections = g.sections
        ? Object.entries(g.sections as Record<string, string>).map(([id, title]) => ({ id, title }))
        : []

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://theheartopia.com/${locale}` },
                    { "@type": "ListItem", "position": 2, "name": "Guides", "item": `https://theheartopia.com/${locale}/guides` },
                    { "@type": "ListItem", "position": 3, "name": g.heroTitle, "item": `https://theheartopia.com/${locale}/guides/bug-catching` }
                ]
            },
            {
                "@type": "Article",
                "headline": g.metaTitle,
                "description": g.metaDesc,
                "url": `https://theheartopia.com/${locale}/guides/bug-catching`,
                "dateModified": "2026-02-01",
                "inLanguage": locale,
                "author": { "@type": "Organization", "name": "Heartopia Guide" },
                "publisher": { "@type": "Organization", "name": "Heartopia Guide", "url": "https://theheartopia.com" }
            },
            {
                "@type": "HowTo",
                "name": "How to Unlock Bug Catching in Heartopia",
                "step": [
                    { "@type": "HowToStep", "position": 1, "text": g.unlock?.step1 },
                    { "@type": "HowToStep", "position": 2, "text": g.unlock?.step2 },
                    { "@type": "HowToStep", "position": 3, "text": g.unlock?.step3 },
                    { "@type": "HowToStep", "position": 4, "text": g.unlock?.step4 },
                    { "@type": "HowToStep", "position": 5, "text": g.unlock?.step5 },
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": g.faq ? [
                    { "@type": "Question", "name": g.faq.q1, "acceptedAnswer": { "@type": "Answer", "text": g.faq.a1 } },
                    { "@type": "Question", "name": g.faq.q2, "acceptedAnswer": { "@type": "Answer", "text": g.faq.a2 } },
                    { "@type": "Question", "name": g.faq.q3, "acceptedAnswer": { "@type": "Answer", "text": g.faq.a3 } },
                    { "@type": "Question", "name": g.faq.q4, "acceptedAnswer": { "@type": "Answer", "text": g.faq.a4 } },
                    { "@type": "Question", "name": g.faq.q5, "acceptedAnswer": { "@type": "Answer", "text": g.faq.a5 } },
                    { "@type": "Question", "name": g.faq.q6, "acceptedAnswer": { "@type": "Answer", "text": g.faq.a6 } },
                    { "@type": "Question", "name": g.faq.q7, "acceptedAnswer": { "@type": "Answer", "text": g.faq.a7 } },
                ] : []
            }
        ]
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
                <nav className="pt-28 pb-4 px-4">
                    <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-muted-foreground">
                        <Link href={`/${locale}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" /> {t.navbar.home}
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span>{t.navbar.guides}</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-foreground font-medium">{g.heroTitle}</span>
                    </div>
                </nav>

                <div className="max-w-5xl mx-auto px-4 pb-24">

                    {/* Hero */}
                    <header className="mb-10">
                        <div className="flex items-center gap-2 mb-4">
                            <Badge className="bg-heartopia-pink/10 text-heartopia-pink-darker hover:bg-heartopia-pink/20 border-none px-4 py-1 rounded-full text-sm font-semibold">
                                {g.badge}
                            </Badge>
                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Sparkles className="w-3.5 h-3.5 text-heartopia-pink" />
                                76+ Species
                            </span>
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                            {g.heroTitle}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                            {g.heroDesc}
                        </p>
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
                            <aside className="lg:w-60 shrink-0">
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-5 sticky top-6">
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
                        <div className="flex-1 space-y-10">

                            {/* Unlock */}
                            {g.unlock && (
                                <section id="unlock">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-pink/10 rounded-xl"><Unlock size={18} className="text-heartopia-pink-darker" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.unlock}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <p className="text-muted-foreground mb-4">{g.unlock.intro}</p>
                                        <div className="bg-heartopia-sky/10 border border-heartopia-sky/30 rounded-xl p-3 mb-5 flex items-start gap-2">
                                            <Info size={15} className="text-heartopia-sky-dark mt-0.5 shrink-0" />
                                            <p className="text-sm font-medium text-foreground">{g.unlock.req}</p>
                                        </div>
                                        <ol className="space-y-3">
                                            {[g.unlock.step1, g.unlock.step2, g.unlock.step3, g.unlock.step4, g.unlock.step5].filter(Boolean).map((step: string, i: number) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-heartopia-pink-dark to-heartopia-pink-darker text-white text-sm font-bold rounded-full flex items-center justify-center shadow-soft-pink">{i + 1}</span>
                                                    <span className="text-muted-foreground pt-0.5 text-sm">{step}</span>
                                                </li>
                                            ))}
                                        </ol>
                                        {g.unlock.mentorNote && (
                                            <p className="mt-5 text-sm text-muted-foreground italic border-t border-gray-100 pt-4">{g.unlock.mentorNote}</p>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* Catching Mechanics */}
                            {g.mechanics && (
                                <section id="mechanics">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-green/10 rounded-xl"><Bug size={18} className="text-heartopia-green-dark" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.mechanics}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <p className="text-muted-foreground mb-5 text-sm">{g.mechanics.intro}</p>
                                        <ol className="space-y-3 mb-5">
                                            {[g.mechanics.step1, g.mechanics.step2, g.mechanics.step3, g.mechanics.step4, g.mechanics.step5].filter(Boolean).map((step: string, i: number) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-7 h-7 bg-heartopia-green/80 text-white text-sm font-bold rounded-full flex items-center justify-center">{i + 1}</span>
                                                    <span className="text-muted-foreground pt-0.5 text-sm">{step}</span>
                                                </li>
                                            ))}
                                        </ol>
                                        {g.mechanics.fleeNote && (
                                            <div className="bg-heartopia-orange/10 border border-heartopia-orange/30 rounded-xl p-3 mb-5 flex items-start gap-2">
                                                <Info size={15} className="text-heartopia-orange-dark mt-0.5 shrink-0" />
                                                <p className="text-sm text-foreground">{g.mechanics.fleeNote}</p>
                                            </div>
                                        )}

                                        {g.mechanics.netTitle && (
                                            <>
                                                <h3 className="font-semibold text-foreground mb-2 text-sm">{g.mechanics.netTitle}</h3>
                                                <p className="text-muted-foreground text-sm mb-3">{g.mechanics.netIntro}</p>
                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-sm border-collapse">
                                                        <thead>
                                                            <tr className="bg-gradient-to-r from-heartopia-pink to-heartopia-sky text-white">
                                                                <th className="text-left p-3 rounded-tl-xl">{g.mechanics.thNet}</th>
                                                                <th className="text-left p-3">{g.mechanics.thUnlock}</th>
                                                                <th className="text-left p-3 rounded-tr-xl">{g.mechanics.thFeature}</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {(g.mechanics.netRows as Array<{ level: string; unlock: string; feature: string }>).map((row, i) => (
                                                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-heartopia-pink/5"}>
                                                                    <td className="p-3 font-medium text-heartopia-pink-darker">{row.level}</td>
                                                                    <td className="p-3 text-muted-foreground text-sm">{row.unlock}</td>
                                                                    <td className="p-3 text-muted-foreground text-sm">{row.feature}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* All Bugs — Client Component with search + filter */}
                            {g.bugTableSection && g.bugRows && (
                                <section id="bug-table">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-sky/10 rounded-xl"><MapPin size={18} className="text-heartopia-sky-dark" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.["bug-table"]}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <p className="text-muted-foreground text-sm mb-4">{g.bugTableSection.desc}</p>
                                        <BugTable
                                            rows={g.bugRows}
                                            headers={{
                                                thName: g.bugTableSection.thName,
                                                thLevel: g.bugTableSection.thLevel,
                                                thLocation: g.bugTableSection.thLocation,
                                                thTime: g.bugTableSection.thTime,
                                                thWeather: g.bugTableSection.thWeather,
                                            }}
                                            frostNote={g.bugTableSection.frostNote}
                                            legendNote="🎪 Event-only  |  🌨 Winter Frost Season only  |  ✨ Attractor only  |  ⭐ High gold value"
                                            ui={g.tableUi}
                                        />
                                    </div>
                                </section>
                            )}

                            {/* Areas Overview */}
                            {g.areas && (
                                <section id="areas">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-sky/10 rounded-xl"><MapPin size={18} className="text-heartopia-sky-dark" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.areas}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <p className="text-muted-foreground text-sm mb-4">{g.areas.intro}</p>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm border-collapse">
                                                <thead>
                                                    <tr className="bg-gradient-to-r from-heartopia-sky to-heartopia-pink text-white">
                                                        <th className="text-left p-3 rounded-tl-xl">{g.areas.thArea}</th>
                                                        <th className="text-left p-3">{g.areas.thBugs}</th>
                                                        <th className="text-left p-3 rounded-tr-xl">{g.areas.thTip}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(g.areas.rows as Array<{ area: string; bugs: string; tip: string }>).map((row, i) => (
                                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-heartopia-sky/5"}>
                                                            <td className="p-3 font-semibold text-heartopia-sky-dark whitespace-nowrap text-sm">{row.area}</td>
                                                            <td className="p-3 text-muted-foreground text-xs leading-relaxed">{row.bugs}</td>
                                                            <td className="p-3 text-muted-foreground text-xs">{row.tip}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* Time & Weather */}
                            {g.timeWeather && (
                                <section id="time-weather">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-sky/10 rounded-xl"><Cloud size={18} className="text-heartopia-sky-dark" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.["time-weather"]}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <p className="text-muted-foreground text-sm mb-4">{g.timeWeather.intro}</p>
                                        <div className="overflow-x-auto mb-5">
                                            <table className="w-full text-sm border-collapse">
                                                <thead>
                                                    <tr className="bg-gradient-to-r from-heartopia-sky to-heartopia-pink text-white">
                                                        <th className="text-left p-3 rounded-tl-xl w-44">{g.timeWeather.thCondition}</th>
                                                        <th className="text-left p-3 rounded-tr-xl">{g.timeWeather.thBugs}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(g.timeWeather.rows as Array<{ condition: string; bugs: string }>).map((row, i) => (
                                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-heartopia-sky/5"}>
                                                            <td className="p-3 font-medium text-foreground text-sm">{row.condition}</td>
                                                            <td className="p-3 text-muted-foreground text-xs leading-relaxed">{row.bugs}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        {g.timeWeather.rainbowTip && (
                                            <div className="bg-gradient-to-r from-heartopia-pink/10 to-heartopia-sky/10 border border-heartopia-pink/20 rounded-xl p-4 flex items-start gap-2">
                                                <span className="text-xl">🌈</span>
                                                <p className="text-sm text-foreground">{g.timeWeather.rainbowTip}</p>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* Star Rating */}
                            {g.starRating && (
                                <section id="star-rating">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-orange/10 rounded-xl"><Star size={18} className="text-heartopia-orange-dark" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.["star-rating"]}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <p className="text-muted-foreground text-sm mb-4">{g.starRating.intro}</p>
                                        <h3 className="font-semibold text-foreground mb-3 text-sm">{g.starRating.howTitle}</h3>
                                        <ul className="space-y-2 mb-5">
                                            {[g.starRating.how1, g.starRating.how2, g.starRating.how3, g.starRating.how4, g.starRating.how5].filter(Boolean).map((tip: string, i: number) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <Star size={13} className="text-heartopia-orange mt-0.5 shrink-0 fill-heartopia-orange/60" />
                                                    {tip}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="overflow-x-auto mb-4">
                                            <table className="w-full text-sm border-collapse">
                                                <thead>
                                                    <tr className="bg-gradient-to-r from-heartopia-orange to-heartopia-orange-dark text-white">
                                                        <th className="text-left p-3 rounded-tl-xl">{g.starRating.thAction}</th>
                                                        <th className="text-left p-3 rounded-tr-xl">{g.starRating.thResult}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(g.starRating.stratRows as Array<{ action: string; result: string }>).map((row, i) => (
                                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-heartopia-orange/5"}>
                                                            <td className="p-3 text-muted-foreground text-sm">{row.action}</td>
                                                            <td className="p-3 text-heartopia-orange-dark font-medium text-sm">{row.result}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        {g.starRating.rewardNote && (
                                            <div className="bg-heartopia-orange/10 border border-heartopia-orange/30 rounded-xl p-3 flex items-start gap-2">
                                                <Award size={14} className="text-heartopia-orange-dark mt-0.5 shrink-0" />
                                                <p className="text-sm text-foreground">{g.starRating.rewardNote}</p>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* Tools & Traps */}
                            {g.tools && (
                                <section id="tools">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-pink/10 rounded-xl"><Wrench size={18} className="text-heartopia-pink-darker" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.tools}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-6">
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-2 text-sm flex items-center gap-2">
                                                <Hammer size={14} className="text-heartopia-orange" />
                                                {g.tools.trapTitle}
                                            </h3>
                                            <p className="text-muted-foreground text-sm mb-3">{g.tools.trapIntro}</p>
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm border-collapse">
                                                    <thead>
                                                        <tr className="bg-gradient-to-r from-heartopia-orange to-heartopia-pink text-white">
                                                            <th className="text-left p-3 rounded-tl-xl">{g.tools.thTrap}</th>
                                                            <th className="text-left p-3">{g.tools.thCatches}</th>
                                                            <th className="text-left p-3 rounded-tr-xl">{g.tools.thRecipe}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {(g.tools.trapRows as Array<{ trap: string; catches: string; recipe: string }>).map((row, i) => (
                                                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-heartopia-orange/5"}>
                                                                <td className="p-3 font-medium text-heartopia-orange-dark text-sm">{row.trap}</td>
                                                                <td className="p-3 text-muted-foreground text-sm">{row.catches}</td>
                                                                <td className="p-3 text-muted-foreground text-xs">{row.recipe}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-100 pt-5">
                                            <h3 className="font-semibold text-foreground mb-2 text-sm flex items-center gap-2">
                                                <Zap size={14} className="text-heartopia-pink" />
                                                {g.tools.attractorTitle}
                                            </h3>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                <span className="text-xs bg-heartopia-pink/10 text-heartopia-pink-darker px-3 py-1 rounded-full">{g.tools.attractorCost}</span>
                                                <span className="text-xs bg-heartopia-sky/10 text-heartopia-sky-dark px-3 py-1 rounded-full">{g.tools.attractorReq}</span>
                                            </div>
                                            <p className="text-muted-foreground text-sm mb-3">{g.tools.attractorUse}</p>
                                            <div className="bg-heartopia-green/10 border border-heartopia-green/30 rounded-xl p-3 mb-2">
                                                <p className="text-sm text-foreground"><strong>Tip:</strong> {g.tools.attractorTip}</p>
                                            </div>
                                            <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                                                <p className="text-sm text-red-700"><strong>Warning:</strong> {g.tools.attractorWarning}</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* Bait the Insects Event */}
                            {g.baitEvent && (
                                <section id="bait-event">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-pink/10 rounded-xl"><Flame size={18} className="text-heartopia-pink-darker" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.["bait-event"]}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <p className="text-muted-foreground text-sm mb-4">{g.baitEvent.intro}</p>
                                        <div className="bg-gradient-to-r from-heartopia-pink/10 to-heartopia-sky/10 border border-heartopia-pink/20 rounded-xl p-4 mb-4">
                                            <p className="text-sm font-medium text-foreground">🎪 {g.baitEvent.eventBugs}</p>
                                        </div>
                                        <p className="text-muted-foreground text-sm mb-3">{g.baitEvent.howToJoin}</p>
                                        <div className="bg-heartopia-orange/10 border border-heartopia-orange/30 rounded-xl p-3">
                                            <p className="text-sm text-foreground"><strong>Note:</strong> {g.baitEvent.tip}</p>
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* Gold Farming */}
                            {g.gold && (
                                <section id="gold">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-orange/10 rounded-xl"><span className="text-lg leading-none">🪙</span></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.gold}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <p className="text-muted-foreground text-sm mb-4">{g.gold.intro}</p>
                                        <div className="overflow-x-auto mb-6">
                                            <table className="w-full text-sm border-collapse">
                                                <thead>
                                                    <tr className="bg-gradient-to-r from-heartopia-orange to-heartopia-orange-dark text-white">
                                                        <th className="text-left p-3 rounded-tl-xl">{g.gold.thBug}</th>
                                                        <th className="text-left p-3">{g.gold.thPrice}</th>
                                                        <th className="text-left p-3 rounded-tr-xl">{g.gold.thWhere}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(g.gold.topRows as Array<{ bug: string; price: string; where: string }>).map((row, i) => (
                                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-heartopia-orange/5"}>
                                                            <td className="p-3 font-medium text-foreground text-sm">{row.bug}</td>
                                                            <td className="p-3 text-heartopia-orange-dark font-bold text-sm">{row.price}</td>
                                                            <td className="p-3 text-muted-foreground text-xs">{row.where}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        {g.gold.routeTitle && (
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-2 text-sm">{g.gold.routeTitle}</h3>
                                                <div className="bg-heartopia-green/10 border border-heartopia-green/30 rounded-xl p-4">
                                                    <p className="text-sm text-foreground leading-relaxed">{g.gold.route}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* Tips */}
                            {g.tips && (
                                <section id="tips">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-sky/10 rounded-xl"><Zap size={18} className="text-heartopia-sky-dark" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.tips}</h2>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {[
                                            { title: g.tips.tip1Title, body: g.tips.tip1, icon: "🚶" },
                                            { title: g.tips.tip2Title, body: g.tips.tip2, icon: "🌳" },
                                            { title: g.tips.tip3Title, body: g.tips.tip3, icon: "🌧️" },
                                            { title: g.tips.tip4Title, body: g.tips.tip4, icon: "🌙" },
                                            { title: g.tips.tip5Title, body: g.tips.tip5, icon: "✨" },
                                            { title: g.tips.tip6Title, body: g.tips.tip6, icon: "📅" },
                                        ].filter(tip => tip.title && tip.body).map((tip, i) => (
                                            <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm p-4 hover:shadow-md hover:border-heartopia-pink/20 transition-all">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-xl">{tip.icon}</span>
                                                    <h3 className="font-semibold text-foreground text-sm">{tip.title}</h3>
                                                </div>
                                                <p className="text-muted-foreground text-sm leading-relaxed">{tip.body}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* FAQ */}
                            {g.faq && (
                                <section id="faq">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-sky/10 rounded-xl"><HelpCircle size={18} className="text-heartopia-sky-dark" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.faq.title}</h2>
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
                                            ].filter(item => item.q && item.a).map((item, i) => (
                                                <AccordionItem key={i} value={`faq-${i}`}>
                                                    <AccordionTrigger className="text-left px-4 text-sm text-foreground hover:text-heartopia-pink-dark">
                                                        {item.q}
                                                    </AccordionTrigger>
                                                    <AccordionContent className="px-4 text-muted-foreground text-sm leading-relaxed">
                                                        {item.a}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                </section>
                            )}

                            {/* Related Guides */}
                            {g.related && (
                                <section>
                                    <h2 className="text-lg font-bold text-foreground mb-4">{g.related.title}</h2>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <Link href={`/${locale}/guides/fishing`} className="bg-white/80 border border-white/50 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-heartopia-sky/30 transition-all group flex items-center gap-3">
                                            <div className="p-2 bg-heartopia-sky/10 rounded-xl group-hover:bg-heartopia-sky/20 transition-colors">
                                                <Fish size={16} className="text-heartopia-sky-dark" />
                                            </div>
                                            <span className="text-foreground font-medium text-sm group-hover:text-heartopia-sky-dark">{g.related.fishing}</span>
                                        </Link>
                                        <Link href={`/${locale}/guides/heartopia-frostspore-butterflies`} className="bg-white/80 border border-white/50 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-heartopia-pink/30 transition-all group flex items-center gap-3">
                                            <div className="p-2 bg-heartopia-sky/10 rounded-xl group-hover:bg-heartopia-sky/20 transition-colors">
                                                <span className="text-lg leading-none">🦋</span>
                                            </div>
                                            <span className="text-foreground font-medium text-sm group-hover:text-heartopia-pink-dark">{g.related.butterflies}</span>
                                        </Link>
                                        <Link href={`/${locale}/guides/winter-birds-location-map`} className="bg-white/80 border border-white/50 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-heartopia-sky/30 transition-all group flex items-center gap-3">
                                            <div className="p-2 bg-heartopia-sky/10 rounded-xl group-hover:bg-heartopia-sky/20 transition-colors">
                                                <Bird size={16} className="text-heartopia-sky-dark" />
                                            </div>
                                            <span className="text-foreground font-medium text-sm group-hover:text-heartopia-sky-dark">{g.related.birdwatching}</span>
                                        </Link>
                                        <Link href={`/${locale}/guides/dog-breeds`} className="bg-white/80 border border-white/50 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-amber-300/50 transition-all group flex items-center gap-3">
                                            <div className="p-2 bg-amber-50 rounded-xl group-hover:bg-amber-100 transition-colors">
                                                <Dog size={16} className="text-amber-600" />
                                            </div>
                                            <span className="text-foreground font-medium text-sm group-hover:text-amber-700">{g.related.dogBreeds}</span>
                                        </Link>
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
