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
    MapPin,
    CloudSun,
    Route,
    Utensils,
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
    const g = t.animalTrough
    const url = `https://theheartopia.com/${locale}/guides/animal-trough`

    return {
        title: g.metaTitle,
        description: g.metaDesc,
        alternates: {
            canonical: url,
            languages: {
                en: "https://theheartopia.com/en/guides/animal-trough",
                th: "https://theheartopia.com/th/guides/animal-trough",
                pt: "https://theheartopia.com/pt/guides/animal-trough",
                es: "https://theheartopia.com/es/guides/animal-trough",
                id: "https://theheartopia.com/id/guides/animal-trough",
                "x-default": "https://theheartopia.com/en/guides/animal-trough",
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
                    url: "https://theheartopia.com/images/og/animal-trough.webp",
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
            images: ["https://theheartopia.com/images/og/animal-trough.webp"],
        },
    }
}

export default async function AnimalTroughGuidePage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t: any = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const g = t.animalTrough

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: `https://theheartopia.com/${locale}` },
                    { "@type": "ListItem", position: 2, name: "Guides", item: `https://theheartopia.com/${locale}/guides` },
                    { "@type": "ListItem", position: 3, name: g.metaTitle, item: `https://theheartopia.com/${locale}/guides/animal-trough` },
                ],
            },
            {
                "@type": "Article",
                headline: g.heroTitle,
                description: g.metaDesc,
                author: { "@type": "Organization", name: "Heartopia Guide" },
                publisher: { "@type": "Organization", name: "Heartopia Guide", url: "https://theheartopia.com" },
                dateModified: "2026-02-13",
                mainEntityOfPage: `https://theheartopia.com/${locale}/guides/animal-trough`,
            },
            {
                "@type": "HowTo",
                name: g.route?.title,
                step: g.route?.steps?.map((step: string, i: number) => ({
                    "@type": "HowToStep",
                    position: i + 1,
                    text: step,
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
        { id: "clarify", title: g.sections?.clarify },
        { id: "unlock", title: g.sections?.unlock },
        { id: "animals", title: g.sections?.animals },
        { id: "food", title: g.sections?.food },
        { id: "bond", title: g.sections?.bond },
        { id: "weather", title: g.sections?.weather },
        { id: "route", title: g.sections?.route },
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
                        <span className="text-foreground font-medium truncate">{g.sections?.animals}</span>
                    </div>
                </nav>

                <div className="max-w-5xl mx-auto px-4 pb-24">
                    <header className="mb-10">
                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                            <Badge className="bg-heartopia-pink/10 text-heartopia-pink-darker hover:bg-heartopia-pink/20 border-none px-4 py-1 rounded-full text-sm font-semibold">
                                {g.badge}
                            </Badge>
                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Utensils className="w-3.5 h-3.5 text-heartopia-pink" />
                                {g.stats?.animals}
                            </span>
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                            {g.heroTitle}
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                            {g.heroDesc}
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
                            {[
                                { label: g.stats?.animals, icon: "🧭" },
                                { label: g.stats?.reset, icon: "🔄" },
                                { label: g.stats?.bond, icon: "⭐" },
                                { label: g.stats?.stars, icon: "✨" },
                                { label: g.stats?.weather, icon: "⛅" },
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
                            <section id="clarify" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Info size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.clarify?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.clarify?.intro}</p>
                                    <div className="bg-heartopia-cream/60 border border-white/80 rounded-xl p-3 text-sm text-foreground leading-relaxed">
                                        {g.clarify?.item1}
                                    </div>
                                    <div className="bg-heartopia-cream/60 border border-white/80 rounded-xl p-3 text-sm text-foreground leading-relaxed">
                                        {g.clarify?.item2}
                                    </div>
                                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                                        <AlertTriangle size={14} className="text-amber-600 mt-0.5 shrink-0" />
                                        <p className="text-sm text-amber-800">{g.clarify?.note}</p>
                                    </div>
                                </div>
                            </section>

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
                                    <div className="bg-heartopia-sky/10 border border-heartopia-sky/30 rounded-xl p-3 flex items-start gap-2">
                                        <Info size={14} className="text-heartopia-sky-dark mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground">{g.unlock?.tip}</p>
                                    </div>
                                </div>
                            </section>

                            <section id="animals" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <MapPin size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.animalsTitle}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-5">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.animalsIntro}</p>

                                    <div className="space-y-4">
                                        {g.animals?.map((animal: any, i: number) => (
                                            <article key={i} className="bg-heartopia-cream/60 rounded-2xl border border-white/80 p-4 space-y-3">
                                                <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                                                    <span>{animal.emoji}</span>
                                                    <span>{animal.name}</span>
                                                </h3>

                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    <span className="font-semibold text-foreground">{g.labels?.location}:</span> {animal.location}
                                                </p>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    <span className="font-semibold text-foreground">{g.labels?.weather}:</span> {animal.weatherIcon}
                                                </p>

                                                <div className="overflow-x-auto rounded-xl border border-white/70 bg-white/60">
                                                    <table className="w-full text-sm">
                                                        <thead>
                                                            <tr className="border-b border-white/70">
                                                                <th className="text-left px-3 py-2 text-xs font-semibold text-foreground">{g.table?.thFood}</th>
                                                                <th className="text-left px-3 py-2 text-xs font-semibold text-foreground">{g.table?.thSource}</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {animal.foods?.map((food: string, idx: number) => (
                                                                <tr key={idx} className="border-b border-white/40 last:border-b-0">
                                                                    <td className="px-3 py-2 text-sm text-foreground">{food}</td>
                                                                    <td className="px-3 py-2 text-sm text-muted-foreground">{animal.foodSources?.[idx]}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className="bg-white/70 rounded-xl px-3 py-2 border border-white/80 text-sm text-muted-foreground">
                                                    {animal.tip}
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <section id="food" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Utensils size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.foodGuide?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.foodGuide?.intro}</p>

                                    <div className="space-y-3">
                                        <div>
                                            <h3 className="text-sm font-semibold text-foreground mb-2">{g.foodGuide?.tierEasy}</h3>
                                            <ul className="space-y-2">
                                                {g.foodGuide?.easyItems?.map((item: string, i: number) => (
                                                    <li key={i} className="bg-green-50 border border-green-200 rounded-xl px-3 py-2 text-sm text-green-800">{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-foreground mb-2">{g.foodGuide?.tierMed}</h3>
                                            <ul className="space-y-2">
                                                {g.foodGuide?.medItems?.map((item: string, i: number) => (
                                                    <li key={i} className="bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 text-sm text-amber-800">{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-semibold text-foreground mb-2">{g.foodGuide?.tierHard}</h3>
                                            <ul className="space-y-2">
                                                {g.foodGuide?.hardItems?.map((item: string, i: number) => (
                                                    <li key={i} className="bg-red-50 border border-red-200 rounded-xl px-3 py-2 text-sm text-red-800">{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-heartopia-sky/10 border border-heartopia-sky/30 rounded-xl p-3 flex items-start gap-2">
                                        <Info size={14} className="text-heartopia-sky-dark mt-0.5 shrink-0" />
                                        <p className="text-sm text-foreground">{g.foodGuide?.note}</p>
                                    </div>
                                </div>
                            </section>

                            <section id="bond" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Sparkles size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.bond?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.bond?.intro}</p>
                                    <ul className="space-y-2">
                                        {g.bond?.tiers?.map((tier: any, i: number) => (
                                            <li key={i} className="bg-heartopia-cream/60 rounded-xl border border-white/80 p-3">
                                                <h3 className="text-sm font-semibold text-foreground mb-1">{tier.tier}</h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{tier.rewards}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                                        <Star size={14} className="text-amber-600 mt-0.5 shrink-0" />
                                        <p className="text-sm text-amber-800">{g.bond?.tip}</p>
                                    </div>
                                </div>
                            </section>

                            <section id="weather" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <CloudSun size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.weather?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.weather?.intro}</p>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        <div className="bg-heartopia-cream/60 rounded-xl border border-white/80 p-3">
                                            <h3 className="text-sm font-semibold text-foreground mb-2">{g.weather?.sunLabel}</h3>
                                            <ul className="space-y-1.5">
                                                {g.weather?.sunAnimals?.map((item: string, i: number) => (
                                                    <li key={i} className="text-sm text-muted-foreground">{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-heartopia-cream/60 rounded-xl border border-white/80 p-3">
                                            <h3 className="text-sm font-semibold text-foreground mb-2">{g.weather?.rainLabel}</h3>
                                            <ul className="space-y-1.5">
                                                {g.weather?.rainAnimals?.map((item: string, i: number) => (
                                                    <li key={i} className="text-sm text-muted-foreground">{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bg-heartopia-sky/10 border border-heartopia-sky/30 rounded-xl p-3 text-sm text-foreground">
                                        {g.weather?.tip}
                                    </div>
                                </div>
                            </section>

                            <section id="route" className="scroll-mt-20">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-heartopia-pink/10 rounded-xl shrink-0">
                                        <Route size={18} className="text-heartopia-pink-darker" />
                                    </div>
                                    <h2 className="text-xl font-bold text-foreground">{g.route?.title}</h2>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 p-6 space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{g.route?.intro}</p>
                                    <ol className="space-y-3">
                                        {g.route?.steps?.map((step: string, i: number) => (
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
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-start gap-2">
                                        <CheckCircle size={14} className="text-green-600 mt-0.5 shrink-0" />
                                        <p className="text-sm text-green-800">{g.route?.tip}</p>
                                    </div>
                                </div>
                            </section>

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
