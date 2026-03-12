import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import {
    Home,
    ChevronRight,
    Globe,
    Info,
    Search,
    Download,
    CheckCircle2,
    Monitor,
    Smartphone,
    Layout,
    Sparkles,
    MousePointer2,
    Compass,
    HelpCircle,
    ArrowRight,
    Hammer,
    Palette,
    Clock,
    Coins,
    Box,
    TrendingUp,
    TreeDeciduous,
    Camera,
    Droplets,
    ArrowUpCircle,
    Gamepad2,
    Users,
    Layers,
    Move,
    Maximize2,
    MapPin,
    BookOpen
} from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Navbar } from "@/components/heartopia/navbar"
import { Footer } from "@/components/heartopia/footer"
import { Badge } from "@/components/ui/badge"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const h = t.housing

    return {
        title: h.metaTitle,
        description: h.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/guides/housing`,
            languages: {
                "en": "https://theheartopia.com/en/guides/housing",
                "th": "https://theheartopia.com/th/guides/housing",
                "pt": "https://theheartopia.com/pt/guides/housing",
                "es": "https://theheartopia.com/es/guides/housing",
                "x-default": "https://theheartopia.com/en/guides/housing",
            },
        },
        openGraph: {
            title: h.metaTitle,
            description: h.metaDesc,
            url: `https://theheartopia.com/${locale}/guides/housing`,
            siteName: "Heartopia Guide",
            images: [
                {
                    url: "/images/hero-banner.webp",
                    width: 1200,
                    height: 630,
                    alt: "Heartopia House Ideas and Blueprints Guide",
                },
            ],
            locale: locale === "th" ? "th_TH" : "en_US",
            type: "article",
        },
    }
}

export default async function HousingPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const h = t.housing

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": h.heroTitle,
        "description": h.metaDesc,
        "image": "https://theheartopia.com/images/hero-banner.webp",
        "author": {
            "@type": "Organization",
            "name": "Heartopia Guide Community"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Heartopia Guide",
            "logo": {
                "@type": "ImageObject",
                "url": "https://theheartopia.com/Wordlogo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://theheartopia.com/${locale}/guides/housing`
        }
    }

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [1, 2, 3, 4, 5].map((i) => ({
            "@type": "Question",
            "name": h.faq[`q${i}` as keyof typeof h.faq],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": h.faq[`a${i}` as keyof typeof h.faq]
            }
        }))
    }

    return (
        <main className="min-h-screen bg-heartopia-cream">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqLd]) }}
            />
            <Navbar t={t.navbar} locale={locale} />

            {/* Breadcrumbs */}
            <nav className="pt-32 pb-6 px-4">
                <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-muted-foreground">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{h.heroTitle}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12">
                        <Badge className="bg-heartopia-pink/10 text-heartopia-pink hover:bg-heartopia-pink/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold uppercase tracking-wider">
                            Housing Master Guide
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {h.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                            {h.intro}
                        </p>
                    </header>

                    {/* Table of Contents */}
                    <div className="bg-white/40 p-8 rounded-[32px] border border-white/60 mb-12">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                            <Layout className="w-4 h-4" /> Table of Contents
                        </h2>
                        <nav className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { id: "how-it-works", title: h.howItWorks.title },
                                { id: "upgrades", title: h.upgrades.title },
                                { id: "blueprints", title: h.blueprintsSystem.title },
                                { id: "popular-ideas", title: h.popularIdeas.title },
                                { id: "furniture", title: h.furniture.title },
                                { id: "how-to-create", title: h.howToCreate.title },
                                { id: "gameplay-impact", title: h.gameplayImpact.title },
                                { id: "faq", title: h.faq.title }
                            ].map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="text-muted-foreground hover:text-heartopia-pink transition-colors flex items-center gap-2 group"
                                >
                                    <div className="w-1 h-1 rounded-full bg-heartopia-pink/20 group-hover:bg-heartopia-pink transition-colors" />
                                    {item.title}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Detail Intro */}
                    <div className="bg-white/60 p-8 rounded-[32px] border border-white shadow-sm mb-12">
                        <div className="flex gap-4 items-start">
                            <Info className="w-6 h-6 text-heartopia-sky mt-1 shrink-0" />
                            <p className="text-lg text-muted-foreground leading-relaxed italic">
                                {h.detailIntro}
                            </p>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-24">
                        {/* Section 1: How it works */}
                        <section id="how-it-works" className="scroll-mt-32">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                                <Hammer className="w-8 h-8 text-heartopia-pink" /> {h.howItWorks.title}
                            </h2>
                            <div className="bg-white/80 p-8 rounded-[40px] border border-white shadow-soft-pink space-y-6">
                                <p className="text-muted-foreground text-lg leading-relaxed">{h.howItWorks.text}</p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[h.howItWorks.li1, h.howItWorks.li2, h.howItWorks.li3].map((li, i) => (
                                        <div key={i} className="flex gap-3 items-start p-4 bg-heartopia-pink/5 rounded-2xl border border-heartopia-pink/10">
                                            <CheckCircle2 className="w-5 h-5 text-heartopia-pink shrink-0 mt-0.5" />
                                            <span className="font-medium text-foreground/80">{li}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-muted-foreground italic opacity-70 border-t border-heartopia-pink/5 pt-4">
                                    {h.howItWorks.footer}
                                </p>
                            </div>
                        </section>

                        {/* Section 2: Upgrades */}
                        <section id="upgrades" className="scroll-mt-32">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                                <ArrowUpCircle className="w-8 h-8 text-heartopia-orange" /> {h.upgrades.title}
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-3xl">{h.upgrades.text}</p>
                            <div className="bg-white rounded-[40px] border border-white shadow-sm overflow-hidden">
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader className="bg-slate-50">
                                            <TableRow>
                                                <TableHead className="font-bold py-4 min-w-[120px]">{h.upgrades.thLevel}</TableHead>
                                                <TableHead className="font-bold py-4 min-w-[180px]">{h.upgrades.thPlots}</TableHead>
                                                <TableHead className="font-bold py-4 min-w-[150px]">{h.upgrades.thCost}</TableHead>
                                                <TableHead className="font-bold py-4">{h.upgrades.thFeatures}</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {h.upgrades.rows.map((row: any, i: number) => (
                                                <TableRow key={i}>
                                                    <TableCell className="font-bold text-heartopia-pink-dark py-6">{row.level}</TableCell>
                                                    <TableCell className="font-medium">{row.plots}</TableCell>
                                                    <TableCell className="text-muted-foreground">{row.cost}</TableCell>
                                                    <TableCell className="text-muted-foreground">{row.features}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                                <div className="p-6 bg-slate-50/50 border-t border-slate-100 italic text-sm text-muted-foreground">
                                    {h.upgrades.tip}
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Blueprint System - Expanded */}
                        <section id="blueprints" className="scroll-mt-32">
                            <div className="bg-white/80 p-10 md:p-12 rounded-[56px] border border-white shadow-soft-pink relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-heartopia-pink/5 rounded-full -mr-32 -mt-32" />
                                <div className="relative z-10 space-y-12">
                                    {/* Main Title & Intro */}
                                    <div>
                                        <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                                            <Compass className="w-8 h-8 text-heartopia-sky" /> {h.blueprintsSystem.title}
                                        </h2>
                                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed max-w-3xl">{h.blueprintsSystem.text}</p>

                                        {/* What Is Blueprint */}
                                        <div className="bg-heartopia-sky/5 p-6 rounded-3xl border border-heartopia-sky/10 mb-8">
                                            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                                                <Layout className="w-5 h-5 text-heartopia-sky" />
                                                {t.blueprints.whatIs.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">{t.blueprints.whatIs.text}</p>
                                        </div>

                                        {/* Why Matters */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                            <div className="p-6 bg-red-50/50 rounded-3xl border border-red-100">
                                                <div className="flex items-start gap-3 mb-2">
                                                    <span className="text-2xl">❌</span>
                                                    <h4 className="font-bold text-foreground">{h.labels.withoutPlanning}</h4>
                                                </div>
                                                <p className="text-sm text-muted-foreground italic">{t.blueprints.whyMatters.text1}</p>
                                            </div>
                                            <div className="p-6 bg-green-50/50 rounded-3xl border border-green-100">
                                                <div className="flex items-start gap-3 mb-2">
                                                    <span className="text-2xl">✅</span>
                                                    <h4 className="font-bold text-foreground">{h.labels.withPlanning}</h4>
                                                </div>
                                                <p className="text-sm text-muted-foreground italic">{t.blueprints.whyMatters.text2}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Core Principles */}
                                    <div>
                                        <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                            <Sparkles className="w-6 h-6 text-heartopia-pink" />
                                            {t.blueprints.principles.title}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {[t.blueprints.principles.p1, t.blueprints.principles.p2, t.blueprints.principles.p3].map((p, i) => (
                                                <div key={i} className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm text-center">
                                                    <div className="w-14 h-14 rounded-2xl bg-heartopia-sky/10 text-heartopia-sky flex items-center justify-center mx-auto mb-4">
                                                        {i === 0 ? <Layers className="w-7 h-7" /> : i === 1 ? <Move className="w-7 h-7" /> : <Maximize2 className="w-7 h-7" />}
                                                    </div>
                                                    <h4 className="font-bold text-foreground mb-2">{p.title}</h4>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Blueprint Layout Concepts */}
                                    <div>
                                        <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                            <MapPin className="w-6 h-6 text-heartopia-orange" />
                                            {t.blueprints.layouts.title}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {[t.blueprints.layouts.starter, t.blueprints.layouts.functional, t.blueprints.layouts.aesthetic, t.blueprints.layouts.hybrid].map((layout, i) => (
                                                <div key={i} className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm hover:shadow-soft-pink transition-all">
                                                    <Badge className="mb-3 bg-heartopia-pink/10 text-heartopia-pink border-none text-xs">
                                                        {layout.usage}
                                                    </Badge>
                                                    <h4 className="text-lg font-bold text-foreground mb-2">{layout.title}</h4>
                                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{layout.desc}</p>
                                                    <div className="flex items-center gap-2 text-xs text-heartopia-sky">
                                                        <CheckCircle2 className="w-4 h-4" />
                                                        <span className="font-medium">{layout.features}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* How to Create & Mistakes */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Steps */}
                                        <div className="bg-heartopia-sky/5 p-8 rounded-3xl border border-heartopia-sky/10">
                                            <h4 className="font-bold text-foreground mb-6 flex items-center gap-2">
                                                <BookOpen className="w-5 h-5 text-heartopia-sky" />
                                                {t.blueprints.steps.title}
                                            </h4>
                                            <ul className="space-y-3">
                                                {[t.blueprints.steps.li1, t.blueprints.steps.li2, t.blueprints.steps.li3, t.blueprints.steps.li4, t.blueprints.steps.li5].map((li, i) => (
                                                    <li key={i} className="flex gap-3 items-center">
                                                        <div className="w-7 h-7 rounded-full bg-heartopia-sky/20 text-heartopia-sky flex items-center justify-center font-bold text-sm shrink-0">
                                                            {i + 1}
                                                        </div>
                                                        <span className="text-sm text-muted-foreground font-medium">{li}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Mistakes */}
                                        <div className="bg-red-50/30 p-8 rounded-3xl border border-red-100">
                                            <h4 className="font-bold text-foreground mb-6 flex items-center gap-2">
                                                <Info className="w-5 h-5 text-red-500" />
                                                {t.blueprints.mistakes.title}
                                            </h4>
                                            <ul className="space-y-3">
                                                {[t.blueprints.mistakes.li1, t.blueprints.mistakes.li2, t.blueprints.mistakes.li3, t.blueprints.mistakes.li4].map((li, i) => (
                                                    <li key={i} className="flex gap-3 items-start">
                                                        <XIcon className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                                                        <span className="text-sm text-muted-foreground font-medium">{li}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Basic System Steps */}
                                    <div>
                                        <h3 className="font-serif text-xl font-bold text-foreground mb-6">{h.labels.basics}</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {h.blueprintsSystem.steps.map((step: any, i: number) => (
                                                <div key={i} className="flex gap-4 p-6 bg-white rounded-3xl border border-black/5 shadow-sm group hover:border-heartopia-sky transition-colors">
                                                    <div className="w-12 h-12 rounded-2xl bg-heartopia-sky/10 text-heartopia-sky flex items-center justify-center font-bold text-xl shrink-0">
                                                        {i + 1}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Advanced Tip */}
                                    <div className="p-6 bg-gradient-to-r from-heartopia-sky/10 to-heartopia-pink/10 rounded-3xl border border-heartopia-sky/20">
                                        <p className="text-heartopia-sky font-bold text-center italic">
                                            💡 {h.blueprintsSystem.advanced}
                                        </p>
                                    </div>

                                    {/* Performance Impact */}
                                    <div className="bg-gradient-to-br from-heartopia-pink/5 to-heartopia-orange/5 p-8 rounded-3xl border border-heartopia-pink/10 text-center">
                                        <Gamepad2 className="w-12 h-12 text-heartopia-pink mx-auto mb-4" />
                                        <h4 className="font-serif text-xl font-bold text-foreground mb-3">{t.blueprints.performance.title}</h4>
                                        <p className="text-muted-foreground italic max-w-2xl mx-auto leading-relaxed">
                                            {t.blueprints.performance.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Popular Ideas */}
                        <section id="popular-ideas" className="scroll-mt-32">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                                <Palette className="w-8 h-8 text-heartopia-pink" /> {h.popularIdeas.title}
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-3xl">{h.popularIdeas.text}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[h.popularIdeas.style1, h.popularIdeas.style2, h.popularIdeas.style3, h.popularIdeas.style4].map((style, i) => (
                                    <div key={i} className="bg-white/60 p-6 rounded-[40px] border border-white shadow-sm flex flex-col h-full group hover:shadow-soft-pink transition-all">
                                        <div className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center ${i === 0 ? "bg-heartopia-pink/10 text-heartopia-pink" : i === 1 ? "bg-heartopia-orange/10 text-heartopia-orange" : i === 2 ? "bg-heartopia-sky/10 text-heartopia-sky" : "bg-heartopia-green/10 text-heartopia-green"}`}>
                                            {i === 0 ? <Sparkles className="w-6 h-6" /> : i === 1 ? <Box className="w-6 h-6" /> : i === 2 ? <Layout className="w-6 h-6" /> : <Droplets className="w-6 h-6" />}
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground mb-2">{style.title}</h3>
                                        <p className="text-sm text-muted-foreground mb-6 flex-grow">{style.desc}</p>
                                        <div className="space-y-4 pt-4 border-t border-black/5 mt-auto">
                                            <div className="text-xs">
                                                <span className="font-bold text-foreground block mb-1">{h.labels.bestFor}</span>
                                                <span className="text-muted-foreground">{style.bestFor}</span>
                                            </div>
                                            <div className="text-xs">
                                                <span className="font-bold text-foreground block mb-1">{h.labels.keyTraits}</span>
                                                <span className="text-muted-foreground">{style.traits}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 5: Furniture Sets */}
                        <section id="furniture" className="scroll-mt-32">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                                <Box className="w-8 h-8 text-heartopia-orange" /> {h.furniture.title}
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-3xl">{h.furniture.text}</p>
                            <div className="bg-white rounded-[40px] border border-white shadow-sm overflow-hidden mb-8">
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHeader className="bg-slate-50">
                                            <TableRow>
                                                <TableHead className="font-bold py-4">{h.furniture.thType}</TableHead>
                                                <TableHead className="font-bold py-4">{h.furniture.thExample}</TableHead>
                                                <TableHead className="font-bold py-4">{h.furniture.thUnlock}</TableHead>
                                                <TableHead className="font-bold py-4">{h.furniture.thBonus}</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {h.furniture.rows.map((row: any, i: number) => (
                                                <TableRow key={i}>
                                                    <TableCell className="font-bold py-6">{row.type}</TableCell>
                                                    <TableCell>{row.ex}</TableCell>
                                                    <TableCell className="text-muted-foreground">{row.unlock}</TableCell>
                                                    <TableCell className="text-heartopia-pink-dark font-medium">{row.bonus}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                            <div className="bg-white/60 p-6 rounded-3xl border border-white flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-heartopia-sky/10 text-heartopia-sky flex items-center justify-center shrink-0">
                                    <Palette className="w-5 h-5" />
                                </div>
                                <p className="text-muted-foreground font-medium">{h.furniture.dyeTip}</p>
                            </div>
                        </section>

                        {/* Section 6: How to create */}
                        <section id="how-to-create" className="scroll-mt-32">
                            <div className="bg-white/60 p-12 rounded-[56px] border border-white">
                                <h2 className="font-serif text-3xl font-bold text-foreground mb-8">{h.howToCreate.title}</h2>
                                <p className="text-muted-foreground text-lg mb-8">{h.howToCreate.text}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
                                    {[h.howToCreate.li1, h.howToCreate.li2, h.howToCreate.li3, h.howToCreate.li4].map((li, i) => (
                                        <div key={i} className="flex gap-4 items-center group">
                                            <div className="w-10 h-10 rounded-full bg-heartopia-sky/10 text-heartopia-sky flex items-center justify-center font-bold group-hover:scale-110 transition-transform shrink-0">
                                                {i + 1}
                                            </div>
                                            <span className="text-foreground/80 font-medium">{li}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-muted-foreground italic border-t border-black/5 pt-8">
                                    {h.howToCreate.footer}
                                </p>
                            </div>
                        </section>

                        {/* Section 7: Gameplay Impact */}
                        <section id="gameplay-impact" className="scroll-mt-32">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1">
                                    <h2 className="font-serif text-3xl font-bold text-foreground mb-6">{h.gameplayImpact.title}</h2>
                                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">{h.gameplayImpact.text}</p>
                                    <div className="space-y-4">
                                        {[h.gameplayImpact.li1, h.gameplayImpact.li2, h.gameplayImpact.li3].map((li, i) => (
                                            <div key={i} className="flex gap-4 items-center p-6 bg-white/80 rounded-[32px] border border-white">
                                                <div className="w-3 h-3 rounded-full bg-heartopia-sky shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                                                <span className="font-bold text-foreground/70">{li}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-heartopia-sky/10 to-heartopia-pink/10 p-12 rounded-[56px] border border-white text-center">
                                    <Sparkles className="w-16 h-16 text-heartopia-sky mx-auto mb-6" />
                                    <p className="text-xl text-muted-foreground font-serif italic max-w-xs mx-auto">
                                        {h.gameplayImpact.footer}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                                <HelpCircle className="w-8 h-8 text-heartopia-sky" /> {h.faq.title}
                            </h2>
                            <Accordion type="single" collapsible className="w-full">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <AccordionItem key={i} value={`faq-${i}`} className="border-none mb-4 bg-white/80 rounded-[32px] px-8 border border-white shadow-sm">
                                        <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-heartopia-pink transition-colors py-6">
                                            {h.faq[`q${i}` as keyof typeof h.faq]}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8">
                                            {h.faq[`a${i}` as keyof typeof h.faq]}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>

                        {/* Related Guides */}
                        <section className="pt-8 mb-12 border-t border-heartopia-pink/10">
                            <h2 className="text-2xl font-bold text-foreground mb-6">{h.related.title}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { name: h.related.link1, href: `/${locale}/guides/home-evaluation`, icon: TrendingUp },
                                    { name: h.related.link2, href: `/${locale}/guides/roaming-oak`, icon: TreeDeciduous },
                                    { name: h.related.link3, href: `/${locale}/guides/dog-breeds`, icon: Sparkles },
                                    { name: h.related.link4, href: `/${locale}/guides/fishing`, icon: Compass }
                                ].map((link, i) => (
                                    <Link key={i} href={link.href} className="group flex items-center justify-between p-6 bg-white rounded-[32px] border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/5 flex items-center justify-center text-heartopia-pink">
                                                <link.icon className="w-6 h-6" />
                                            </div>
                                            <span className="font-bold text-foreground">{link.name}</span>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </article>

            <Footer t={t.footer} locale={locale} />
        </main>
    )
}

function XIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}
