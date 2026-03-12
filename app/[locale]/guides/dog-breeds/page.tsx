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
    Unlock,
    Heart,
    Star,
    Sparkles,
    Info,
    Dog,
    Trophy,
    Zap,
    Dumbbell,
    Bath,
    Footprints,
    UtensilsCrossed,
    Eye,
    Palette,
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
    const g = t.dogBreeds

    return {
        title: g.metaTitle,
        description: g.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/guides/dog-breeds`,
            languages: {
                "en": "https://theheartopia.com/en/guides/dog-breeds",
                "th": "https://theheartopia.com/th/guides/dog-breeds",
                "pt": "https://theheartopia.com/pt/guides/dog-breeds",
                "es": "https://theheartopia.com/es/guides/dog-breeds",
                "id": "https://theheartopia.com/id/guides/dog-breeds",
                "x-default": "https://theheartopia.com/en/guides/dog-breeds",
            },
        },
        openGraph: {
            title: g.metaTitle,
            description: g.metaDesc,
            url: `https://theheartopia.com/${locale}/guides/dog-breeds`,
            siteName: "Heartopia Guide",
            images: [
                {
                    url: "/images/guides/heartopia-dog-breeds.webp",
                    width: 1200,
                    height: 630,
                    alt: "Heartopia Dog Breeds Guide",
                },
            ],
            locale: locale === "th" ? "th_TH" : locale === "pt" ? "pt_BR" : locale === "es" ? "es_ES" : locale === "id" ? "id_ID" : "en_US",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: g.metaTitle,
            description: g.metaDesc,
            images: ["/images/guides/heartopia-dog-breeds.webp"],
        },
    }
}

export default async function DogBreedsGuidePage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t: any = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const g = t.dogBreeds

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
                    { "@type": "ListItem", "position": 3, "name": g.heroTitle, "item": `https://theheartopia.com/${locale}/guides/dog-breeds` },
                ],
            },
            {
                "@type": "Article",
                "headline": g.metaTitle,
                "description": g.metaDesc,
                "url": `https://theheartopia.com/${locale}/guides/dog-breeds`,
                "dateModified": "2026-02-13",
                "inLanguage": locale,
                "author": { "@type": "Organization", "name": "Heartopia Guide" },
                "publisher": { "@type": "Organization", "name": "Heartopia Guide", "url": "https://theheartopia.com" },
            },
            {
                "@type": "HowTo",
                "name": "How to Unlock Dog Caring in Heartopia",
                "step": [
                    { "@type": "HowToStep", "position": 1, "text": g.unlock?.step1 },
                    { "@type": "HowToStep", "position": 2, "text": g.unlock?.step2 },
                    { "@type": "HowToStep", "position": 3, "text": g.unlock?.step3 },
                ],
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
                ] : [],
            },
        ],
    }

    const BREED_EMOJI: Record<string, string> = {
        "Corgi": "🐕", "Shiba Inu": "🦊", "Poodle": "🐩", "Beagle": "🐶",
        "Rural Dog": "🌾", "Spotted Dog": "🏁", "Golden Retriever": "⭐",
        "Labrador Retriever": "🦮", "Shepherd Dog": "🚔", "Rottweiler": "🛡️", "Sled Dog": "🐺",
    }
    const SIZE_COLOR: Record<string, string> = {
        "Small": "bg-green-100 text-green-700", "เล็ก": "bg-green-100 text-green-700",
        "Pequeño": "bg-green-100 text-green-700", "Kecil": "bg-green-100 text-green-700",
        "Medium": "bg-blue-100 text-blue-700", "กลาง": "bg-blue-100 text-blue-700",
        "Mediano": "bg-blue-100 text-blue-700", "Sedang": "bg-blue-100 text-blue-700",
        "Médio": "bg-blue-100 text-blue-700",
        "Large": "bg-purple-100 text-purple-700", "ใหญ่": "bg-purple-100 text-purple-700",
        "Grande": "bg-purple-100 text-purple-700", "Besar": "bg-purple-100 text-purple-700",
    }
    const CARE_ICONS: { title: string; desc: string; icon: any; color: string }[] = [
        { title: g.care?.feedTitle, desc: g.care?.feedDesc, icon: UtensilsCrossed, color: "text-heartopia-orange" },
        { title: g.care?.playTitle, desc: g.care?.playDesc, icon: Zap, color: "text-heartopia-pink-darker" },
        { title: g.care?.batheTitle, desc: g.care?.batheDesc, icon: Bath, color: "text-heartopia-sky" },
        { title: g.care?.trainTitle, desc: g.care?.trainDesc, icon: Dumbbell, color: "text-heartopia-pink" },
        { title: g.care?.walkTitle, desc: g.care?.walkDesc, icon: Footprints, color: "text-green-600" },
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
                                <Dog className="w-3.5 h-3.5 text-heartopia-pink" />
                                11 Breeds
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
                                    { label: g.stats.breeds, icon: "🐕" },
                                    { label: g.stats.traits, icon: "✨" },
                                    { label: g.stats.maxDogs, icon: "🏠" },
                                    { label: g.stats.level, icon: "🔓" },
                                    { label: g.stats.fee, icon: "💰" },
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

                            {/* ── UNLOCK ── */}
                            {g.unlock && (
                                <section id="unlock">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0"><Unlock size={18} className="text-heartopia-pink-darker" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.unlock}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <p className="text-muted-foreground mb-5 text-sm leading-relaxed">{g.unlock.intro}</p>
                                        <ol className="space-y-3 mb-5">
                                            {[g.unlock.step1, g.unlock.step2, g.unlock.step3].filter(Boolean).map((step: string, i: number) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-heartopia-pink-dark to-heartopia-pink-darker text-white text-sm font-bold rounded-full flex items-center justify-center shadow-soft-pink">{i + 1}</span>
                                                    <span className="text-muted-foreground pt-0.5 text-sm leading-relaxed">{step}</span>
                                                </li>
                                            ))}
                                        </ol>
                                        {g.unlock.timeNote && (
                                            <div className="bg-heartopia-sky/10 border border-heartopia-sky/30 rounded-xl p-3 flex items-start gap-2">
                                                <Info size={15} className="text-heartopia-sky-dark mt-0.5 shrink-0" />
                                                <p className="text-sm text-foreground">{g.unlock.timeNote}</p>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* ── ADOPTION ── */}
                            {g.adoption && (
                                <section id="adoption">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-orange/10 rounded-xl shrink-0"><Heart size={18} className="text-heartopia-orange" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.adoption}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-6">
                                        <p className="text-muted-foreground text-sm leading-relaxed">{g.adoption.intro}</p>

                                        {/* How to adopt steps */}
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-3 text-base">{g.adoption.howTitle}</h3>
                                            <ol className="space-y-2">
                                                {[g.adoption.step1, g.adoption.step2, g.adoption.step3, g.adoption.step4].filter(Boolean).map((s: string, i: number) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span className="flex-shrink-0 w-6 h-6 bg-heartopia-orange/80 text-white text-xs font-bold rounded-full flex items-center justify-center">{i + 1}</span>
                                                        <span className="text-muted-foreground text-sm pt-0.5">{s}</span>
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>

                                        {/* Slots table */}
                                        {g.adoption.slots && (
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-3 text-base">{g.adoption.slotsTitle}</h3>
                                                <div className="overflow-x-auto rounded-xl border border-gray-100">
                                                    <table className="w-full text-sm">
                                                        <thead>
                                                            <tr className="bg-gradient-to-r from-heartopia-pink/20 to-heartopia-orange/20 text-foreground">
                                                                <th className="text-left px-4 py-2.5 font-semibold rounded-tl-xl">Milestone</th>
                                                                <th className="text-left px-4 py-2.5 font-semibold rounded-tr-xl">🐕</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {g.adoption.slots.map((row: any, i: number) => (
                                                                <tr key={i} className="border-t border-gray-50 hover:bg-heartopia-pink/3 transition-colors">
                                                                    <td className="px-4 py-2.5 text-muted-foreground">{row.milestone}</td>
                                                                    <td className="px-4 py-2.5 font-semibold text-foreground">{row.dogs}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )}

                                        {/* Warning */}
                                        {g.adoption.warning && (
                                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                                                <Info size={15} className="text-amber-600 mt-0.5 shrink-0" />
                                                <p className="text-sm text-amber-800">{g.adoption.warning}</p>
                                            </div>
                                        )}

                                        {/* Tips */}
                                        {g.adoption.tipsTitle && (
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-2 text-base">{g.adoption.tipsTitle}</h3>
                                                <ul className="space-y-1.5">
                                                    {[g.adoption.tip1, g.adoption.tip2, g.adoption.tip3, g.adoption.tip4].filter(Boolean).map((tip: string, i: number) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                            <span className="text-heartopia-pink mt-0.5 shrink-0">•</span>
                                                            {tip}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* ── ALL BREEDS ── */}
                            {g.breeds && (
                                <section id="breeds">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-green-100 rounded-xl shrink-0"><Dog size={18} className="text-green-600" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.breeds}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-5 flex items-start gap-2">
                                            <Info size={15} className="text-green-600 mt-0.5 shrink-0" />
                                            <p className="text-sm text-green-800">{g.breeds.note}</p>
                                        </div>

                                        {/* Breed cards grid */}
                                        <div className="grid sm:grid-cols-2 gap-3 mb-6">
                                            {(g.breeds.rows || []).map((row: any, i: number) => (
                                                <div key={i} className="bg-heartopia-cream/60 rounded-2xl border border-white/80 p-4 hover:border-heartopia-pink/20 hover:shadow-sm transition-all">
                                                    <div className="flex items-start justify-between gap-2 mb-2">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-xl">{BREED_EMOJI[row.breed] ?? "🐕"}</span>
                                                            <h3 className="font-bold text-foreground text-sm">{row.breed}</h3>
                                                        </div>
                                                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${SIZE_COLOR[row.size] ?? "bg-gray-100 text-gray-600"}`}>
                                                            {row.size}
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground mb-1.5">{row.desc}</p>
                                                    {row.note && (
                                                        <p className="text-xs text-heartopia-pink-darker font-medium">{row.note}</p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Best breed callout */}
                                        {g.breeds.bestTitle && (
                                            <div className="bg-gradient-to-br from-heartopia-pink/10 to-heartopia-orange/10 border border-heartopia-pink/20 rounded-2xl p-4">
                                                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                                    <Star size={16} className="text-heartopia-pink-darker" />
                                                    {g.breeds.bestTitle}
                                                </h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{g.breeds.bestDesc}</p>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* ── TRAITS ── */}
                            {g.traits && (
                                <section id="traits">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0"><Sparkles size={18} className="text-heartopia-pink-darker" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.traits}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{g.traits.intro}</p>

                                        {/* Traits grid */}
                                        <div className="grid sm:grid-cols-2 gap-3 mb-6">
                                            {(g.traits.rows || []).map((row: any, i: number) => (
                                                <div key={i} className="bg-heartopia-cream/60 rounded-xl border border-white/80 p-3.5 hover:border-heartopia-pink/20 transition-colors">
                                                    <div className="flex items-center justify-between gap-2 mb-1.5">
                                                        <span className="font-semibold text-foreground text-sm">{row.trait}</span>
                                                        <span className="text-xs text-muted-foreground shrink-0">{row.difficulty}</span>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground leading-relaxed">{row.behavior}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Trait tips */}
                                        {g.traits.tipTitle && (
                                            <div className="border-t border-gray-100 pt-4">
                                                <h3 className="font-semibold text-foreground mb-2 text-sm">{g.traits.tipTitle}</h3>
                                                <ul className="space-y-1.5">
                                                    {[g.traits.tip1, g.traits.tip2, g.traits.tip3].filter(Boolean).map((tip: string, i: number) => (
                                                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                            <span className="text-heartopia-pink shrink-0">💡</span>{tip}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* ── APPEARANCE ── */}
                            {g.appearance && (
                                <section id="appearance">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-purple-100 rounded-xl shrink-0"><Palette size={18} className="text-purple-600" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.appearance}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <p className="text-sm text-muted-foreground mb-5">{g.appearance.intro}</p>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {[
                                                { title: g.appearance.colorsTitle, value: g.appearance.colors, icon: "🎨" },
                                                { title: g.appearance.patternsTitle, value: g.appearance.patterns, icon: "🔲" },
                                                { title: g.appearance.eyeColorsTitle, value: g.appearance.eyeColors, icon: "👁️" },
                                                { title: g.appearance.eyeStylesTitle, value: g.appearance.eyeStyles, icon: "✨" },
                                            ].map((item, i) => (
                                                <div key={i} className="bg-heartopia-cream/60 rounded-xl border border-white/80 p-4">
                                                    <h3 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
                                                        <span>{item.icon}</span>{item.title}
                                                    </h3>
                                                    <p className="text-xs text-muted-foreground leading-relaxed">{item.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                        {g.appearance.note && (
                                            <div className="mt-4 bg-purple-50 border border-purple-200 rounded-xl p-3 flex items-start gap-2">
                                                <Eye size={15} className="text-purple-600 mt-0.5 shrink-0" />
                                                <p className="text-sm text-purple-800">{g.appearance.note}</p>
                                            </div>
                                        )}
                                    </div>
                                </section>
                            )}

                            {/* ── DAILY CARE ── */}
                            {g.care && (
                                <section id="care">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-sky/10 rounded-xl shrink-0"><Heart size={18} className="text-heartopia-sky-dark" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.care}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{g.care.intro}</p>
                                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                            {CARE_ICONS.map((item, i) => (
                                                <div key={i} className="bg-heartopia-cream/60 rounded-xl border border-white/80 p-4 hover:border-heartopia-pink/20 transition-colors">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <item.icon size={16} className={item.color} />
                                                        <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* ── TRAINING ── */}
                            {g.training && (
                                <section id="training">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-heartopia-green/10 rounded-xl shrink-0"><Trophy size={18} className="text-green-600" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.training}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                        <p className="text-sm text-muted-foreground leading-relaxed">{g.training.intro}</p>

                                        {/* Training commands table */}
                                        <div className="overflow-x-auto rounded-xl border border-gray-100">
                                            <table className="w-full text-sm">
                                                <thead>
                                                    <tr className="bg-gradient-to-r from-green-100 to-heartopia-sky/20 text-foreground">
                                                        <th className="text-left px-4 py-2.5 font-semibold rounded-tl-xl">{g.training.thCommand}</th>
                                                        <th className="text-left px-4 py-2.5 font-semibold">{g.training.thEffect}</th>
                                                        <th className="text-left px-4 py-2.5 font-semibold rounded-tr-xl">{g.training.thPriority}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(g.training.rows || []).map((row: any, i: number) => (
                                                        <tr key={i} className="border-t border-gray-50 hover:bg-green-50/30 transition-colors">
                                                            <td className="px-4 py-3 font-semibold text-foreground">{row.command}</td>
                                                            <td className="px-4 py-3 text-muted-foreground">{row.effect}</td>
                                                            <td className="px-4 py-3 font-medium">{row.priority}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold text-foreground mb-2 text-sm">{g.training.howTitle}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{g.training.howDesc}</p>
                                            {g.training.tip && (
                                                <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-sm text-green-800">
                                                    {g.training.tip}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </section>
                            )}

                            {/* ── LEVEL REWARDS ── */}
                            {g.levels && (
                                <section id="levels">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-amber-100 rounded-xl shrink-0"><Star size={18} className="text-amber-600" /></div>
                                        <h2 className="text-xl font-bold text-foreground">{g.sections?.levels}</h2>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6">
                                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{g.levels.intro}</p>
                                        <div className="overflow-x-auto rounded-xl border border-gray-100 mb-4">
                                            <table className="w-full text-sm">
                                                <thead>
                                                    <tr className="bg-gradient-to-r from-amber-100 to-heartopia-orange/20 text-foreground">
                                                        <th className="text-left px-4 py-2.5 font-semibold rounded-tl-xl w-20">{g.levels.thLevel}</th>
                                                        <th className="text-left px-4 py-2.5 font-semibold rounded-tr-xl">{g.levels.thReward}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(g.levels.rows || []).map((row: any, i: number) => (
                                                        <tr key={i} className={`border-t border-gray-50 transition-colors ${[1,4,5,8].includes(Number(row.level)) ? 'bg-amber-50/40 hover:bg-amber-50/60' : 'hover:bg-amber-50/20'}`}>
                                                            <td className="px-4 py-3 font-bold text-amber-700">Lv {row.level}</td>
                                                            <td className="px-4 py-3 text-muted-foreground">{row.reward}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        {g.levels.note && (
                                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                                                <Info size={15} className="text-amber-600 mt-0.5 shrink-0" />
                                                <p className="text-sm text-amber-800">{g.levels.note}</p>
                                            </div>
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
                                                    <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-heartopia-pink/60 to-heartopia-pink-darker/80 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-soft-pink">{i + 1}</span>
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
