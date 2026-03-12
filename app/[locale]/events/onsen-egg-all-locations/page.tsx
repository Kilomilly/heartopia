import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import {
    ChevronRight,
    Home,
    Sparkles,
    Compass,
    Trophy,
    Construction,
    Music,
    MapPin,
    Camera,
    Gift,
    HelpCircle,
    ArrowRight,
    Calendar,
    CheckCircle2,
    Clock,
    AlertCircle,
    List
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
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const o = t.onsenEggAllLocations

    return {
        title: o.metaTitle,
        description: o.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/events/onsen-egg-all-locations`,
            languages: {
                "en": "https://theheartopia.com/en/events/onsen-egg-all-locations",
                "th": "https://theheartopia.com/th/events/onsen-egg-all-locations",
                "pt": "https://theheartopia.com/pt/events/onsen-egg-all-locations",
                "es": "https://theheartopia.com/es/events/onsen-egg-all-locations",
                "id": "https://theheartopia.com/id/events/onsen-egg-all-locations",
                "x-default": "https://theheartopia.com/en/events/onsen-egg-all-locations",
            },
        },
        openGraph: {
            title: o.metaTitle,
            description: o.metaDesc,
            url: `https://theheartopia.com/${locale}/events/onsen-egg-all-locations`,
            siteName: 'Heartopia Hub',
            locale: locale,
            type: 'article',
            images: ['/images/heartopia-preview.png'],
        },
        twitter: {
            card: 'summary_large_image',
            title: o.metaTitle,
            description: o.metaDesc,
            images: ['/images/heartopia-preview.png'],
        },
    }
}

export default async function OnsenEggAllLocationsPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const o = t.onsenEggAllLocations

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": o.faq.q1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": o.faq.a1
                }
            },
            {
                "@type": "Question",
                "name": o.faq.q2,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": o.faq.a2
                }
            },
            {
                "@type": "Question",
                "name": o.faq.q3,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": o.faq.a3
                }
            },
            {
                "@type": "Question",
                "name": o.faq.q4,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": o.faq.a4
                }
            }
        ]
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": o.heroTitle,
        "description": o.metaDesc,
        "image": "https://theheartopia.com/images/heartopia-preview.png",
        "author": {
            "@type": "Organization",
            "name": "Heartopia Hub"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Heartopia Hub",
            "logo": {
                "@type": "ImageObject",
                "url": "https://theheartopia.com/images/Wordlogo.png"
            }
        },
        "datePublished": "2026-01-31",
        "dateModified": new Date().toISOString()
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": t.navbar.home,
                "item": `https://theheartopia.com/${locale}`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": t.eventsPage.breadcrumb,
                "item": `https://theheartopia.com/${locale}/events`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": o.breadcrumb,
                "item": `https://theheartopia.com/${locale}/events/onsen-egg-all-locations`
            }
        ]
    }

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": o.howWorks.title,
        "description": o.howWorks.desc,
        "step": [
            {
                "@type": "HowToStep",
                "name": o.howWorks.step1Title,
                "text": o.howWorks.step1Desc,
                "url": `https://theheartopia.com/${locale}/events/onsen-egg-all-locations#how-it-works`
            },
            {
                "@type": "HowToStep",
                "name": o.howWorks.step2Title,
                "text": o.howWorks.step2Desc,
                "url": `https://theheartopia.com/${locale}/events/onsen-egg-all-locations#how-it-works`
            }
        ]
    }

    return (
        <main className="min-h-screen bg-[#FEF9F3]">
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="howto-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />

            <Navbar t={t.navbar} locale={locale} />

            {/* Breadcrumbs */}
            <nav className="pt-32 pb-6 px-4">
                <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap overflow-x-auto no-scrollbar">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1 shrink-0">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                    <Link href={`/${locale}/events`} className="hover:text-heartopia-pink-dark transition-colors shrink-0">
                        {t.eventsPage.breadcrumb}
                    </Link>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                    <span className="text-foreground font-medium truncate">{o.breadcrumb}</span>
                </div>
            </nav>

            <article className="pb-24 px-4 overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Section */}
                    <header className="mb-12">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Badge variant="outline" className="py-1 px-4 border-heartopia-pink text-heartopia-pink bg-pink-50 rounded-full">
                                <Sparkles className="w-3 h-3 mr-2" />
                                {o.badge}
                            </Badge>
                            <Badge variant="secondary" className="py-1 px-4 bg-amber-100 text-amber-700 border-none rounded-full flex items-center gap-2 animate-pulse">
                                <Clock className="w-3 h-3" />
                                {o.dailyUpdate}
                            </Badge>
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {o.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            {o.heroDesc}
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
                            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-slate-50 rounded-2xl text-sm font-bold shadow-sm">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                {o.lastUpdated}
                            </div>
                            <a
                                href="#day-16"
                                className="group flex items-center gap-2 px-6 py-2 bg-heartopia-pink text-white rounded-2xl text-sm font-bold hover:bg-heartopia-pink-dark transition-all shadow-md shadow-heartopia-pink/20"
                            >
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                {o.jumpToToday}
                            </a>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-heartopia-pink/10 shadow-sm mb-12">
                            <p className="text-lg text-foreground leading-relaxed mb-6">
                                {o.intro}
                            </p>
                            <p className="text-lg text-foreground leading-relaxed italic border-l-4 border-heartopia-pink pl-6">
                                {o.introSecondary.split('Heartopia Home Page').map((part: string, i: number, arr: string[]) => (
                                    <React.Fragment key={i}>
                                        {part}
                                        {i < arr.length - 1 && (
                                            <Link href={`/${locale}`} className="text-heartopia-pink hover:underline font-semibold">
                                                Heartopia Home Page
                                            </Link>
                                        )}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                    </header>


                    {/* Daily Tracker Section */}
                    <section className="mb-16">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-pink flex items-center justify-center text-white">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{o.tracker.title}</h2>
                            </div>
                            <div className="px-4 py-2 bg-heartopia-pink/10 border border-heartopia-pink/20 rounded-2xl flex items-center gap-3 text-heartopia-pink font-semibold text-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-heartopia-pink opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-heartopia-pink"></span>
                                </span>
                                {o.dailyUpdate}
                            </div>
                        </div>
                        <p className="text-lg text-muted-foreground mb-10">
                            {o.tracker.subtitle}
                        </p>

                        {/* Event Summary Table */}
                        <div className="bg-white border border-slate-200 rounded-[32px] p-6 mb-12 shadow-sm overflow-hidden">
                            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2 px-2">
                                <List className="w-5 h-5 text-heartopia-pink" />
                                {o.summaryTable.title}
                            </h3>
                            <div className="overflow-x-auto overflow-y-hidden">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-100">
                                            {o.summaryTable.cols.map((col: string, i: number) => (
                                                <th key={i} className="py-4 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                                                    {col}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {o.summaryTable.rows.map((row: string[], i: number) => (
                                            <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                                {row.map((cell: string, j: number) => (
                                                    <td key={j} className="py-4 px-4 text-sm text-slate-600 font-medium whitespace-nowrap">
                                                        {j === 5 ? (
                                                            <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${cell.includes('Latest') || cell.includes('ล่าสุด') || cell.includes('reciente') || cell.includes('recente') || cell.includes('Terbaru') || cell.includes('Último')
                                                                ? 'bg-heartopia-pink/10 text-heartopia-pink animate-pulse'
                                                                : cell.includes('Tomorrow') || cell.includes('พรุ่งนี้') || cell.includes('Mañana') || cell.includes('amanhã')
                                                                    ? 'bg-slate-100 text-slate-400'
                                                                    : 'bg-green-100 text-green-600'
                                                                }`}>
                                                                {cell}
                                                            </span>
                                                        ) : j === 0 ? (
                                                            <span className="text-slate-800 font-bold group-hover:text-heartopia-pink transition-colors">
                                                                {cell}
                                                            </span>
                                                        ) : cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Quick Day Navigation */}
                        <div className="bg-slate-50 border border-slate-200 rounded-[32px] p-6 mb-12">
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 px-2 flex items-center gap-2">
                                <Compass className="w-4 h-4 text-heartopia-pink" />
                                {o.tracker.selectDay}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {[...Array(16)].map((_, i) => {
                                    const dayNum = i + 1;
                                    const isAvailable = dayNum <= 16;
                                    const isCurrent = dayNum === 16;

                                    return (
                                        <a
                                            key={dayNum}
                                            href={isAvailable ? `#day-${dayNum}` : undefined}
                                            className={`
                                                w-12 h-12 rounded-2xl flex items-center justify-center font-bold transition-all
                                                ${isCurrent ? 'bg-heartopia-pink text-white shadow-lg shadow-heartopia-pink/30 scale-110 z-10' :
                                                    isAvailable ? 'bg-white text-slate-700 hover:bg-heartopia-pink hover:text-white border border-slate-200 shadow-sm' :
                                                        'bg-slate-100 text-slate-400 cursor-not-allowed'}
                                            `}
                                            title={isAvailable ? `${o.tracker.dayPrefix} ${dayNum}` : 'Coming Soon'}
                                        >
                                            {dayNum}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="space-y-12">
                            {/* Day 1 */}
                            <div id="day-1" className="bg-white rounded-[40px] p-8 md:p-10 border-2 border-slate-100 relative overflow-hidden group hover:border-heartopia-pink transition-colors scroll-mt-24">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                                {o.tracker.day1Title}
                                            </h3>
                                            <Badge className="bg-green-100 text-green-700 border-none px-3 py-1 flex items-center gap-1">
                                                <CheckCircle2 className="w-3 h-3" /> {o.tracker.completed}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <Camera className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day1Egg.split('Onsen Mountain Peak').map((part: string, i: number, arr: string[]) => (
                                                        <React.Fragment key={i}>
                                                            {part}
                                                            {i < arr.length - 1 && (
                                                                <Link href={`/${locale}/guides/fishing`} className="text-heartopia-pink hover:underline font-medium">Onsen Mountain Peak</Link>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </p>
                                            </div>
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day1Bubble}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-amber-900 text-sm flex items-center gap-3 mb-6">
                                            <AlertCircle className="w-5 h-5 shrink-0" />
                                            {o.tracker.quickTip}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img src="/images/guides/egg/day1-egg.webp" alt={o.imgAlts.day1Egg} loading="lazy" className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500" />

                                        </div>
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img src="/images/guides/egg/naughty-location.webp" alt={o.imgAlts.day1Bubble} loading="lazy" className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500" />

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Day 2 */}
                            <div id="day-2" className="bg-white rounded-[40px] p-8 md:p-10 border-2 border-slate-100 relative overflow-hidden group hover:border-heartopia-pink transition-colors scroll-mt-24">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                                {o.tracker.day2Title}
                                            </h3>
                                            <Badge className="bg-slate-100 text-slate-500 border-none px-3 py-1 flex items-center gap-1">
                                                <CheckCircle2 className="w-3 h-3" /> {o.tracker.completed}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <Camera className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day2Egg.split('Winter Festival').map((part: string, i: number, arr: string[]) => (
                                                        <React.Fragment key={i}>
                                                            {part}
                                                            {i < arr.length - 1 && (
                                                                <Link href={`/${locale}/events`} className="text-heartopia-pink hover:underline font-medium">Winter Festival</Link>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </p>
                                            </div>
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day2Bubble}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 text-sky-900 text-sm flex items-center gap-3 mb-6">
                                            <Sparkles className="w-5 h-5 shrink-0" />
                                            {o.tracker.visualCue}
                                        </div>
                                    </div>

                                    <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm">
                                        <img src="/images/guides/egg/day2-egg-location.webp" alt={o.imgAlts.day2Location} loading="lazy" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" />

                                    </div>
                                </div>
                            </div>

                            {/* Day 3 */}
                            <div id="day-3" className="bg-white rounded-[40px] p-8 md:p-10 border-2 border-heartopia-pink/20 relative overflow-hidden group hover:border-heartopia-pink transition-colors shadow-xl shadow-heartopia-pink/5 scroll-mt-24">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                                {o.tracker.day3Title}
                                            </h3>
                                            <Badge className="bg-green-100 text-green-700 border-none px-3 py-1 flex items-center gap-1">
                                                <CheckCircle2 className="w-3 h-3" /> {o.tracker.completed}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <Camera className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day3Egg.split('Fashionwave').map((part: string, i: number, arr: string[]) => (
                                                        <React.Fragment key={i}>
                                                            {part}
                                                            {i < arr.length - 1 && (
                                                                <Link href={`/${locale}/events`} className="text-heartopia-pink hover:underline font-medium">Fashionwave</Link>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </p>
                                            </div>
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day3Bubble}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-green-900 text-sm flex items-center gap-3 mb-6">
                                            <Trophy className="w-5 h-5 shrink-0 text-green-600" />
                                            {o.tracker.completed}: 300 Token + Penguin Material Pack!
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {/* Large Map Image */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/day3-egg-location-map.webp"
                                                alt={o.imgAlts.day3Map}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />

                                        </div>

                                        {/* Two Columns for Detail Images */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="w-full aspect-[4/3] rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                                <img
                                                    src="/images/guides/egg/day3-egg-location-under-stair.webp"
                                                    alt={o.imgAlts.day3Detail1}
                                                    loading="lazy"
                                                    className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                                />

                                            </div>
                                            <div className="w-full aspect-[4/3] rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                                <img
                                                    src="/images/guides/egg/day3-egg-location-picture.webp"
                                                    alt={o.imgAlts.day3Detail2}
                                                    loading="lazy"
                                                    className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Day 4 */}
                            <div id="day-4" className="bg-white rounded-[40px] p-8 md:p-10 border-2 border-heartopia-pink/20 relative overflow-hidden group hover:border-heartopia-pink transition-colors shadow-xl shadow-heartopia-pink/5 scroll-mt-24">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                                {o.tracker.day4Title}
                                            </h3>
                                            <Badge className="bg-slate-100 text-slate-500 border-none px-3 py-1 flex items-center gap-1">
                                                <CheckCircle2 className="w-3 h-3" /> {o.tracker.completed}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <Camera className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day4Egg.split('Onsen Mountain').map((part: string, i: number, arr: string[]) => (
                                                        <React.Fragment key={i}>
                                                            {part}
                                                            {i < arr.length - 1 && (
                                                                <Link href={`/${locale}/guides/fishing`} className="text-heartopia-pink hover:underline font-medium">Onsen Mountain</Link>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </p>
                                            </div>
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day4Bubble}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-green-900 text-sm flex items-center gap-3 mb-6">
                                            <Trophy className="w-5 h-5 shrink-0 text-green-600" />
                                            {o.tracker.completed}: 300 Token + Penguin Material Pack!
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {/* Large Map Image */}
                                    <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                        <img
                                            src="/images/guides/egg/heartopia-day4-egg-location.webp"
                                            alt={o.imgAlts.day4Map}
                                            loading="lazy"
                                            className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                        />

                                    </div>

                                    {/* Detail Image */}
                                    <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                        <img
                                            src="/images/guides/egg/heartopia-day4-egg-picture.webp"
                                            alt={o.imgAlts.day4Detail}
                                            loading="lazy"
                                            className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                        />

                                    </div>
                                </div>
                            </div>
                            {/* Day 5 */}
                            <div id="day-5" className="bg-white rounded-[40px] p-8 md:p-10 border-2 border-heartopia-pink/20 relative overflow-hidden group hover:border-heartopia-pink transition-colors shadow-xl shadow-heartopia-pink/5 scroll-mt-24">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                                {o.tracker.day5Title}
                                            </h3>
                                            <Badge className="bg-heartopia-pink text-white border-none px-3 py-1 flex items-center gap-1 animate-pulse">
                                                <Sparkles className="w-3 h-3" /> {o.badge}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <Camera className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day5Egg.split('Onsen Mountain').map((part: string, i: number, arr: string[]) => (
                                                        <React.Fragment key={i}>
                                                            {part}
                                                            {i < arr.length - 1 && (
                                                                <Link href={`/${locale}/guides/fishing`} className="text-heartopia-pink hover:underline font-medium">Onsen Mountain</Link>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </p>
                                            </div>
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day5Bubble}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-green-900 text-sm flex items-center gap-3 mb-6">
                                            <Trophy className="w-5 h-5 shrink-0 text-green-600" />
                                            {o.tracker.completed}: 300 Token + Penguin Material Pack!
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {/* Large Map Image */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Onsen-Egg-Locations-day5.webp"
                                                alt={o.imgAlts.day5Map}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />

                                        </div>

                                        {/* Two Columns for Detail Images */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                                <img
                                                    src="/images/guides/egg/Heartopia-Onsen-Egg-Locations-day5-spot.webp"
                                                    alt={o.imgAlts.day5Detail2}
                                                    loading="lazy"
                                                    className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                                />

                                            </div>

                                            <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                                <img
                                                    src="/images/guides/egg/Heartopia-Onsen-Egg-Locations-day5-photo-shooting.webp"
                                                    alt={o.imgAlts.day5Detail1}
                                                    loading="lazy"
                                                    className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Day 6 */}
                            <div id="day-6" className="bg-white rounded-[40px] p-8 md:p-10 border-2 border-heartopia-pink/20 relative overflow-hidden group hover:border-heartopia-pink transition-colors shadow-xl shadow-heartopia-pink/5 scroll-mt-24">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                                {o.tracker.day6Title}
                                            </h3>
                                            <Badge className="bg-heartopia-pink text-white border-none px-3 py-1 flex items-center gap-1 animate-pulse">
                                                <Sparkles className="w-3 h-3" /> {o.badge}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <Camera className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day6Egg?.split('Fashionwave').map((part: string, i: number, arr: string[]) => (
                                                        <React.Fragment key={i}>
                                                            {part}
                                                            {i < arr.length - 1 && (
                                                                <Link href={`/${locale}/events`} className="text-heartopia-pink hover:underline font-medium">Fashionwave</Link>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </p>
                                            </div>
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day6Bubble}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-green-900 text-sm flex items-center gap-3 mb-6">
                                            <Trophy className="w-5 h-5 shrink-0 text-green-600" />
                                            {o.tracker.completed}: 300 Token + Penguin Material Pack!
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {/* Large Map Image */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-6-Egg-Location.webp"
                                                alt={o.imgAlts.day6Map}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />

                                        </div>

                                        {/* Two Columns for Detail Images */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                                <img
                                                    src="/images/guides/egg/Heartopia-Day-6-Egg-picture.webp"
                                                    alt={o.imgAlts.day6Detail1}
                                                    loading="lazy"
                                                    className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                                />

                                            </div>

                                            <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                                <img
                                                    src="/images/guides/egg/Heartopia-Day-6-snow-bubble-furniture-Location.webp"
                                                    alt={o.imgAlts.day6Detail2}
                                                    loading="lazy"
                                                    className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Day 7 */}
                            <div id="day-7" className="bg-white rounded-[40px] p-8 md:p-10 border-2 border-heartopia-pink/20 relative overflow-hidden group hover:border-heartopia-pink transition-colors shadow-xl shadow-heartopia-pink/5 scroll-mt-24">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                                {o.tracker.day7Title}
                                            </h3>
                                            <Badge className="bg-heartopia-pink text-white border-none px-3 py-1 flex items-center gap-1 animate-pulse">
                                                <Sparkles className="w-3 h-3" /> {o.badge}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <Camera className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day7Egg?.split('Atara').map((part: string, i: number, arr: string[]) => (
                                                        <React.Fragment key={i}>
                                                            {part}
                                                            {i < arr.length - 1 && (
                                                                <span className="text-heartopia-pink font-medium">Atara</span>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </p>
                                            </div>
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day7Bubble}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-green-900 text-sm flex items-center gap-3 mb-6">
                                            <Trophy className="w-5 h-5 shrink-0 text-green-600" />
                                            {o.tracker.completed}: 300 Token + Penguin Material Pack!
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {/* 1. Egg Location (Map) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-7-Egg-Location.webp"
                                                alt={o.imgAlts.day7Map}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 2. Egg Picture (Detail) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-7-Egg-picture.webp"
                                                alt={o.imgAlts.day7Egg}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 3. Furniture Location (Bubble) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-7-snow-bubble-furniture-Location.webp"
                                                alt={o.imgAlts.day7Bubble}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 4. Furniture Picture (Result) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-7-snow-bubble-furniture.webp"
                                                alt={o.imgAlts.day7Furniture}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Day 8 */}
                            <div id="day-8" className="bg-white rounded-[40px] p-8 md:p-10 border-2 border-heartopia-pink/20 relative overflow-hidden group hover:border-heartopia-pink transition-colors shadow-xl shadow-heartopia-pink/5 scroll-mt-24">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                                {o.tracker.day8Title}
                                            </h3>
                                            <Badge className="bg-heartopia-pink text-white border-none px-3 py-1 flex items-center gap-1 animate-pulse">
                                                <Sparkles className="w-3 h-3" /> {o.badge}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <Camera className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day8Egg?.split('Winter Utopia').map((part: string, i: number, arr: string[]) => (
                                                        <React.Fragment key={i}>
                                                            {part}
                                                            {i < arr.length - 1 && (
                                                                <span className="text-heartopia-pink font-medium">Winter Utopia</span>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </p>
                                            </div>
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day8Bubble}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-green-900 text-sm flex items-center gap-3 mb-6">
                                            <Trophy className="w-5 h-5 shrink-0 text-green-600" />
                                            {o.tracker.completed}: 300 Token + Penguin Material Pack!
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {/* 1. Map Location */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-8-Egg-Location.webp"
                                                alt={o.imgAlts.day8Map}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 2. Egg Picture (Detail) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-8-Egg-picture.webp"
                                                alt={o.imgAlts.day8Egg}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 3. Furniture Location (Bubble) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-8-snow-bubble-furniture-Location.webp"
                                                alt={o.imgAlts.day8Bubble}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 4. Furniture Picture (Result) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-8-snow-bubble-furniture.webp"
                                                alt={o.imgAlts.day8Furniture}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Day 9 */}
                            <div id="day-9" className="bg-white rounded-[40px] p-8 md:p-10 border-2 border-heartopia-pink/20 relative overflow-hidden group hover:border-heartopia-pink transition-colors shadow-xl shadow-heartopia-pink/5 scroll-mt-24">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                                {o.tracker.day9Title}
                                            </h3>
                                            <Badge className="bg-heartopia-pink text-white border-none px-3 py-1 flex items-center gap-1 animate-pulse">
                                                <Sparkles className="w-3 h-3" /> {o.badge}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <Camera className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day9Egg?.split('Onsen Mountain Desert').map((part: string, i: number, arr: string[]) => (
                                                        <React.Fragment key={i}>
                                                            {part}
                                                            {i < arr.length - 1 && (
                                                                <span className="text-heartopia-pink font-medium">Onsen Mountain Desert</span>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </p>
                                            </div>
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day9Bubble}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-green-900 text-sm flex items-center gap-3 mb-6">
                                            <Trophy className="w-5 h-5 shrink-0 text-green-600" />
                                            {o.tracker.completed}: 300 Token + Penguin Material Pack!
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {/* 1. Map Location */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-9-Egg-Location.webp"
                                                alt={o.imgAlts.day9Map}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 2. Egg Picture (Detail) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-9-Egg-picture.webp"
                                                alt={o.imgAlts.day9Egg}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 3. Furniture Location (Bubble) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-9-snow-bubble-furniture-Location.webp"
                                                alt={o.imgAlts.day9Bubble}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 4. Furniture Picture (Result) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-9-snow-bubble-furniture.webp"
                                                alt={o.imgAlts.day9Furniture}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Day 10 */}
                            <div id="day-10" className="bg-white rounded-[40px] p-8 md:p-10 border-2 border-heartopia-pink/20 relative overflow-hidden group hover:border-heartopia-pink transition-colors shadow-xl shadow-heartopia-pink/5 scroll-mt-24">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                                {o.tracker.day10Title || "Day 10 - Yellow Cracked Egg"}
                                            </h3>
                                            <Badge className="bg-heartopia-pink text-white border-none px-3 py-1 flex items-center gap-1 animate-pulse">
                                                <Sparkles className="w-3 h-3" /> {o.badge}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <Camera className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day10Egg?.split('Fashionwave').map((part: string, i: number, arr: string[]) => (
                                                        <React.Fragment key={i}>
                                                            {part}
                                                            {i < arr.length - 1 && (
                                                                <span className="text-heartopia-pink font-medium">Fashionwave</span>
                                                            )}
                                                        </React.Fragment>
                                                    )) || "📍 Egg Location: Fashionwave Event area, Blanc's stall right side, behind Blanc. No jumping needed, directly visible for photo."}
                                                </p>
                                            </div>
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day10Bubble || "🎈 Bubble Location: Garden Street, in front of Blanc's house. From heart-shaped archway → rose sign building, bubble is in front of the sign by the roof."}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-green-900 text-sm flex items-center gap-3 mb-6">
                                            <Trophy className="w-5 h-5 shrink-0 text-green-600" />
                                            {o.tracker.completed}: 300 Token + Penguin Material Pack + Yellow Ornament (10/16)!
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {/* 1. Map Location */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-10-Egg-Location.webp"
                                                alt={o.imgAlts?.day10Map || "Heartopia Day 10 Egg Location at Fashionwave Blanc's Stall"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 2. Egg Picture (Detail) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-10-Egg-picture.webp"
                                                alt={o.imgAlts?.day10Egg || "Heartopia Day 10 Yellow Cracked Egg behind Blanc"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 3. Furniture Location (Bubble) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-10-snow-bubble-furniture-location.webp"
                                                alt={o.imgAlts?.day10Bubble || "Heartopia Day 10 Bubble Location at Garden Street Blanc's House"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 4. Furniture Picture (Result) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-10-snow-bubble-furniture-picture.webp"
                                                alt={o.imgAlts?.day10Furniture || "Heartopia Day 10 Yellow Ornament Furniture"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Day 11 */}
                            <div id="day-11" className="bg-white rounded-[40px] p-8 md:p-10 border-2 border-heartopia-pink/20 relative overflow-hidden group hover:border-heartopia-pink transition-colors shadow-xl shadow-heartopia-pink/5 scroll-mt-24">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                                {o.tracker.day11Title || "Day 11 - Emerald Cracked Egg"}
                                            </h3>
                                            <Badge className="bg-heartopia-pink text-white border-none px-3 py-1 flex items-center gap-1 animate-pulse">
                                                <Sparkles className="w-3 h-3" /> {o.badge}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <Camera className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day11Egg?.split('Winter Utopia').map((part: string, i: number, arr: string[]) => (
                                                        <React.Fragment key={i}>
                                                            {part}
                                                            {i < arr.length - 1 && (
                                                                <span className="text-heartopia-pink font-medium">Winter Utopia</span>
                                                            )}
                                                        </React.Fragment>
                                                    )) || "📍 Egg Location: Winter Utopia between the palm trees in front of Massimo, or Onsen Mountain near House Lot 8 at Stone Cliff."}
                                                </p>
                                            </div>
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day11Bubble || "🎈 Bubble Location: Onsen area, near the egg location or around House Lot 8 Stone Cliff."}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-green-900 text-sm flex items-center gap-3 mb-6">
                                            <Trophy className="w-5 h-5 shrink-0 text-green-600" />
                                            {o.tracker.completed}: 300 Token + Penguin Material Pack + Emerald Ornament (11/16)!
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {/* 1. Map Location */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-11-Egg-Location.webp"
                                                alt={o.imgAlts?.day11Map || "Heartopia Day 11 Egg Location at Winter Utopia Palm Trees"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 2. Egg Picture (Detail) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-11-Egg-picture.webp"
                                                alt={o.imgAlts?.day11Egg || "Heartopia Day 11 Emerald Cracked Egg"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 3. Furniture Location (Bubble) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-11-snow-bubble-furniture-location.webp"
                                                alt={o.imgAlts?.day11Bubble || "Heartopia Day 11 Bubble Location at Onsen Area"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 4. Furniture Picture (Result) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-11-snow-bubble-furniture-picture.webp"
                                                alt={o.imgAlts?.day11Furniture || "Heartopia Day 11 Emerald Ornament Furniture"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Day 12 */}
                            <div id="day-12" className="bg-white rounded-[40px] p-8 md:p-10 border-2 border-heartopia-pink/20 relative overflow-hidden group hover:border-heartopia-pink transition-colors shadow-xl shadow-heartopia-pink/5 scroll-mt-24">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                                {o.tracker.day12Title || "Day 12 - Aquamarine Cracked Egg"}
                                            </h3>
                                            <Badge className="bg-heartopia-pink text-white border-none px-3 py-1 flex items-center gap-1 animate-pulse">
                                                <Sparkles className="w-3 h-3" /> {o.badge}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <Camera className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day12Egg?.split('Winter Utopia').map((part: string, i: number, arr: string[]) => (
                                                        <React.Fragment key={i}>
                                                            {part}
                                                            {i < arr.length - 1 && (
                                                                <span className="text-heartopia-pink font-medium">Winter Utopia</span>
                                                            )}
                                                        </React.Fragment>
                                                    )) || "📍 Egg Location: Onsen region [Winter Utopia site] – near Azure NPC. Head to the left side of the rock near the Azure NPC, and you will find the 12th-day egg behind the plant."}
                                                </p>
                                            </div>
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day12Bubble || "🎈 Bubble Location: Behind Andrew NPC in the Suburban Lake region. Go behind Andrew, and you will find two big trees with a hanging signboard. The 12th-day furniture bubble is floating around this tree."}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-green-900 text-sm flex items-center gap-3 mb-6">
                                            <Trophy className="w-5 h-5 shrink-0 text-green-600" />
                                            {o.tracker.completed}: 300 Token + Penguin Material Pack + Day 12 Ornament (12/16)!
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {/* 1. Map Location */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-12-Egg-Location.webp"
                                                alt={o.imgAlts?.day12Map || "Heartopia Day 12 Egg Location at Winter Utopia near Azure NPC"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 2. Egg Picture (Detail) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-12-Egg-picture.webp"
                                                alt={o.imgAlts?.day12Egg || "Heartopia Day 12 Cracked Egg behind plant near Azure NPC"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 3. Furniture Location (Bubble) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-12-snow-bubble-furniture-location.webp"
                                                alt={o.imgAlts?.day12Bubble || "Heartopia Day 12 Bubble Location at Suburban Lake behind Andrew NPC"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 4. Furniture Picture (Result) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-12-snow-bubble-furniture-picture.webp"
                                                alt={o.imgAlts?.day12Furniture || "Heartopia Day 12 Ornament Furniture"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="day-13" className="bg-white rounded-[40px] p-8 md:p-10 border-2 border-heartopia-pink/20 relative overflow-hidden group hover:border-heartopia-pink transition-colors shadow-xl shadow-heartopia-pink/5 scroll-mt-24">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                                {o.tracker.day13Title || "Day 13 - Blue Cracked Egg"}
                                            </h3>
                                            <Badge className="bg-heartopia-pink text-white border-none px-3 py-1 flex items-center gap-1 animate-pulse">
                                                <Sparkles className="w-3 h-3" /> {o.badge}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <Camera className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day13Egg?.split('Crater Lake').map((part: string, i: number, arr: string[]) => (
                                                        <React.Fragment key={i}>
                                                            {part}
                                                            {i < arr.length - 1 && (
                                                                <span className="text-heartopia-pink font-medium">Crater Lake</span>
                                                            )}
                                                        </React.Fragment>
                                                    )) || "📍 Egg Location: Top left corner of Crater Lake on Onsen Mountain. Blue Cracked Egg is on the roof of the fish stall."}
                                                </p>
                                            </div>
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day13Bubble || "🎈 Bubble Location: Amethyst Beach, floating around the Lifeguard Tower."}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-green-900 text-sm flex items-center gap-3 mb-6">
                                            <Trophy className="w-5 h-5 shrink-0 text-green-600" />
                                            {o.tracker.completed}: 300 Token + Penguin Material Pack + Day 13 Ornament (13/16)!
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-13-Egg-Location.webp"
                                                alt={o.imgAlts?.day13Map || "Heartopia Day 13 Egg Location at Crater Lake fish stall"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-13-Egg-picture.webp"
                                                alt={o.imgAlts?.day13Egg || "Heartopia Day 13 Blue Cracked Egg on Fish Stall Roof"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-13-snow-bubble-furniture-location.webp"
                                                alt={o.imgAlts?.day13Bubble || "Heartopia Day 13 Bubble Location at Amethyst Beach Lifeguard Tower"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-13-snow-bubble-furniture-picture.webp"
                                                alt={o.imgAlts?.day13Furniture || "Heartopia Day 13 Blue Egg Ornament Furniture"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Day 14 */}
                            <div id="day-14" className="bg-white rounded-[40px] p-8 md:p-10 border-2 border-heartopia-pink/20 relative overflow-hidden group hover:border-heartopia-pink transition-colors shadow-xl shadow-heartopia-pink/5 scroll-mt-24">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                                {o.tracker.day14Title || "Day 14 - Snowman Egg"}
                                            </h3>
                                            <Badge className="bg-heartopia-pink text-white border-none px-3 py-1 flex items-center gap-1 animate-pulse">
                                                <Sparkles className="w-3 h-3" /> {o.badge}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <Camera className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day14Egg || "📍 Egg Location: Purple cracked egg finale on top of Massimo's Cooking Stall / Winter Frost stall roof in the Fashionwave event area. From the Winter Utopia bus stop, head straight to Massimo's stall and climb to the very top roof edge. Variants reported behind Naughty boy at the Onsen entrance, near sculptures in front of the ice skating rink, under the stairs to the event area, or behind the rock next to NPC Azura (west beach/Fashionwave). Visible purple glow from the ground."}
                                                </p>
                                            </div>
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day14Bubble || "🎈 Bubble / Furniture Location: Primary bubble at the Azure Fashionwave Store entrance (front door/sign area, floating bubble), with some reports near the ice skating rink sculptures or Naughty area. Reward: Day 14 Purple Egg Ornament (special finale furniture) – place it in your home for friends to photo-complete. Respawn is usually 1–5 minutes after the egg photo; try relogging if it seems missing."}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-green-900 text-sm flex items-center gap-3 mb-6">
                                            <Trophy className="w-5 h-5 shrink-0 text-green-600" />
                                            {o.tracker.completed}: 300 Token + Penguin Material Pack + Day 14 Ornament (14/16)!
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {/* 1. Map Location */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-14-Egg-Location.webp"
                                                alt={o.imgAlts?.day14Map || "Heartopia Day 14 Egg Location on top of Massimo's shop"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 2. Egg Picture (Detail) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-14-Egg-picture.webp"
                                                alt={o.imgAlts?.day14Egg || "Heartopia Day 14 Snowman Egg on top of Massimo's shop"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 3. Furniture Location (Bubble) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-14-snow-bubble-furniture-location.webp"
                                                alt={o.imgAlts?.day14Bubble || "Heartopia Day 14 Snowman bubble furniture location in the flower field"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* 4. Furniture Picture (Result) */}
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-14-snow-bubble-furniture-picture.webp"
                                                alt={o.imgAlts?.day14Furniture || "Heartopia Day 14 Snowman ornament furniture"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Day 15 */}
                            <div id="day-15" className="bg-white rounded-[40px] p-8 md:p-10 border-2 border-heartopia-pink/20 relative overflow-hidden group hover:border-heartopia-pink transition-colors shadow-xl shadow-heartopia-pink/5 scroll-mt-24">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                                {o.tracker.day15Title || "Day 15 - Rosy Cracked Egg (Finale)"}
                                            </h3>
                                            <Badge className="bg-heartopia-pink text-white border-none px-3 py-1 flex items-center gap-1 animate-pulse">
                                                <Sparkles className="w-3 h-3" /> {o.badge}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <Camera className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day15Egg?.split('Winter Utopia').map((part: string, i: number, arr: string[]) => (
                                                        <React.Fragment key={i}>
                                                            {part}
                                                            {i < arr.length - 1 && (
                                                                <span className="text-heartopia-pink font-medium">Winter Utopia</span>
                                                            )}
                                                        </React.Fragment>
                                                    )) || "📍 Egg Location: Rosy/pink glowing cracked egg (finale variant) at Winter Utopia, North-end of the Ice Rink on the benches. From Naughty NPC quest, follow snowman map icon to Fashionwave Winter Utopia ice rink, then head to north end benches/platform (ground level, visible rosy glow). Easy access, no climb needed (★★☆☆)."}
                                                </p>
                                            </div>
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day15Bubble || "🎈 Bubble Location: Near the Windmill and Ferret Trough at flower field junction/center. Bubble floating in front of windmill at benches or Rosy River edge. Pop for Day 15 Rosy Egg Ornament (finale furniture). Respawns 1-5 mins after egg photo; place in home public for friends to photo-complete."}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-green-900 text-sm flex items-center gap-3 mb-6">
                                            <Trophy className="w-5 h-5 shrink-0 text-green-600" />
                                            {o.tracker.completed}: 300 Token + Penguin Material Pack + Day 15 Rosy Ornament (15/16)!
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-15-Egg-Location.webp"
                                                alt={o.imgAlts?.day15Map || "Heartopia Day 15 Egg Location at Winter Utopia Ice Rink North End"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-15-Egg-picture.webp"
                                                alt={o.imgAlts?.day15Egg || "Heartopia Day 15 Rosy Cracked Egg on Ice Rink Benches"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-15-snow-bubble-furniture-location.webp"
                                                alt={o.imgAlts?.day15Bubble || "Heartopia Day 15 Bubble Location near Windmill and Ferret Trough"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-15-snow-bubble-furniture-picture.webp"
                                                alt={o.imgAlts?.day15Furniture || "Heartopia Day 15 Rosy Egg Ornament Furniture"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Day 16 */}
                            <div id="day-16" className="bg-white rounded-[40px] p-8 md:p-10 border-2 border-heartopia-pink/20 relative overflow-hidden group hover:border-heartopia-pink transition-colors shadow-xl shadow-heartopia-pink/5 scroll-mt-24">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />

                                <div className="flex flex-col gap-6 relative z-10">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                                {o.tracker.day16Title || "Day 16 - Finale Egg"}
                                            </h3>
                                            <Badge className="bg-heartopia-pink text-white border-none px-3 py-1 flex items-center gap-1 animate-pulse">
                                                <Sparkles className="w-3 h-3" /> {o.badge}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <Camera className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day16Egg || "📍 Egg Location: Near the igloo beside the wooden ramp at the top of the small stone in the Onsen Mountain Fashionwave igloo village. Climb the wooden ramp to the small stone top—egg perched on the edge. Variants: behind Naughty at Onsen entrance, sculptures in front of ice skating rink, under stairs to event area. Naughty NPC quest → snowman map icon to igloo village → wooden ramp/small stone top (egg glow visible from ground). Difficulty ★★☆☆."}
                                                </p>
                                            </div>
                                            <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                                <p className="text-foreground leading-relaxed">
                                                    {o.tracker.day16Bubble || "🎈 Bubble / Furniture Location: Primary spot near the capybara feeder at Onsen Mountain (floating bubble by trough/feeder). Variants: Art Street or Azure store entrance. Pop for Day 16 Finale Ornament (exhibition furniture). Respawns 1–5 mins after egg photo; relog or server hop if missing."}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-2xl border border-green-100 text-green-900 text-sm flex items-center gap-3 mb-6">
                                            <Trophy className="w-5 h-5 shrink-0 text-green-600" />
                                            {o.tracker.completed}: 300 Token + Penguin Material Pack + Day 16 Finale Ornament (16/16)!
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-16-Egg-Location.webp"
                                                alt={o.imgAlts?.day16Map || "Heartopia Day 16 Egg Location at Fashionwave igloo village wooden ramp"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-16-Egg-picture.webp"
                                                alt={o.imgAlts?.day16Egg || "Heartopia Day 16 Finale Egg on small stone top at igloo village"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-16-snow-bubble-furniture-location.webp"
                                                alt={o.imgAlts?.day16Bubble || "Heartopia Day 16 Bubble Location near capybara feeder at Onsen Mountain"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="w-full aspect-video rounded-3xl bg-slate-100 overflow-hidden relative border-4 border-white shadow-sm group/img">
                                            <img
                                                src="/images/guides/egg/Heartopia-Day-16-snow-bubble-furniture-picture.webp"
                                                alt={o.imgAlts?.day16Furniture || "Heartopia Day 16 Finale Ornament exhibition furniture"}
                                                loading="lazy"
                                                className="object-cover w-full h-full transform group-hover/img:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>     {/* Reset Times & Tips */}
                    <section className="mb-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[40px] p-10 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-heartopia-pink/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10">
                            <h2 className="font-serif text-3xl font-bold mb-8 flex items-center gap-3">
                                <Clock className="w-8 h-8 text-heartopia-pink" />
                                {o.times.title}
                            </h2>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-heartopia-pink/20 flex items-center justify-center text-heartopia-pink shrink-0 mt-1 font-bold text-sm">1</div>
                                    <p className="text-slate-200 leading-relaxed text-lg">{o.times.reset}</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-heartopia-pink/20 flex items-center justify-center text-heartopia-pink shrink-0 mt-1 font-bold text-sm">2</div>
                                    <p className="text-slate-200 leading-relaxed text-lg">{o.times.variations}</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full bg-heartopia-pink/20 flex items-center justify-center text-heartopia-pink shrink-0 mt-1 font-bold text-sm">3</div>
                                    <p className="text-slate-200 leading-relaxed text-lg">{o.times.limited.split('Heartopia Winter Event').map((part: string, i: number, arr: string[]) => (
                                        <React.Fragment key={i}>
                                            {part}
                                            {i < arr.length - 1 && (
                                                <Link href={`/${locale}/events/onsen-egg`} className="text-heartopia-pink hover:underline font-semibold">Heartopia Winter Event</Link>
                                            )}
                                        </React.Fragment>
                                    ))}</p>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* How It Works Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-2xl bg-heartopia-pink flex items-center justify-center text-white">
                                <HelpCircle className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{o.howWorks.title}</h2>
                        </div>

                        <p className="text-lg text-muted-foreground mb-10">
                            {o.howWorks.desc}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6">
                                    <Camera className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-foreground">{o.howWorks.step1Title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {o.howWorks.step1Desc}
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-foreground">{o.howWorks.step2Title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {o.howWorks.step2Desc}
                                </p>
                            </div>
                        </div>

                        <div className="bg-sky-50 rounded-3xl p-8 border border-sky-100">
                            <h3 className="font-bold text-xl mb-4 text-sky-900 flex items-center gap-2">
                                <CheckCircle2 className="w-6 h-6" />
                                {o.howWorks.trackingTitle}
                            </h3>
                            <p className="text-sky-800 leading-relaxed">
                                {o.howWorks.trackingDesc}
                            </p>
                        </div>
                    </section>

                    {/* Extra Snowman Bubbles Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-2xl bg-heartopia-orange flex items-center justify-center text-white">
                                <Compass className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{o.extraBubbles.title}</h2>
                        </div>

                        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                            {o.extraBubbles.desc}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            {o.extraBubbles.list.map((bubble: any, idx: number) => (
                                <div key={idx} className="bg-white p-6 rounded-[32px] border border-slate-100 hover:border-heartopia-orange hover:shadow-md transition-all group">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-heartopia-orange/10 group-hover:text-heartopia-orange shrink-0">
                                            <span className="font-bold">{idx + 1}</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-heartopia-orange transition-colors">
                                                {bubble.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                                {bubble.pos}
                                            </p>
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-xs font-semibold text-slate-600 border border-slate-100">
                                                <Gift className="w-3 h-3" />
                                                {bubble.reward}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Why Important Section */}
                        <div className="bg-white rounded-[40px] p-8 md:p-12 border-2 border-heartopia-pink/5 shadow-xl shadow-heartopia-pink/5">
                            <h3 className="font-serif text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-3">
                                <Trophy className="w-6 h-6 text-heartopia-orange" />
                                {o.extraBubbles.whyTitle}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-pink-50 text-heartopia-pink flex items-center justify-center mx-auto mb-6 shadow-sm">
                                        <Gift className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-bold text-lg mb-3">{o.extraBubbles.points[0].title}</h4>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {o.extraBubbles.points[0].desc}
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
                                        <Construction className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-bold text-lg mb-3">{o.extraBubbles.points[1].title}</h4>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {o.extraBubbles.points[1].desc}
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
                                        <Music className="w-8 h-8" />
                                    </div>
                                    <h4 className="font-bold text-lg mb-3">{o.extraBubbles.points[2].title}</h4>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {o.extraBubbles.points[2].desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section id="faq" className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-2xl bg-heartopia-pink flex items-center justify-center text-white">
                                <HelpCircle className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{o.faq.title}</h2>
                        </div>

                        <div className="bg-white rounded-[40px] p-6 md:p-10 border border-slate-100 shadow-sm">
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                <AccordionItem value="q1" className="border-none bg-slate-50 rounded-2xl px-6 transition-all hover:bg-slate-100">
                                    <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline">
                                        {o.faq.q1}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                                        {o.faq.a1}
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="q2" className="border-none bg-slate-50 rounded-2xl px-6 transition-all hover:bg-slate-100">
                                    <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline">
                                        {o.faq.q2}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                                        {o.faq.a2}
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="q3" className="border-none bg-slate-50 rounded-2xl px-6 transition-all hover:bg-slate-100">
                                    <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline">
                                        {o.faq.q3}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                                        {o.faq.a3}
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="q4" className="border-none bg-slate-50 rounded-2xl px-6 transition-all hover:bg-slate-100">
                                    <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline">
                                        {o.faq.q4}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                                        {o.faq.a4}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </section>
                </div>
            </article >

            <Footer t={t.footer} locale={locale} />
        </main >
    )
}
