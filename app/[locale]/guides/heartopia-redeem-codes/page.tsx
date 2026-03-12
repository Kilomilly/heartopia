import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import {
    ChevronRight,
    Home,
    Sparkles,
    Gift,
    HelpCircle,
    ArrowRight,
    Clock,
    Copy,
    ExternalLink,
    Info,
    CheckCircle2,
    AlertTriangle,
    Wallet,
    Trophy,
    Layout,
    Compass
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
    const r = t.redeemCodes

    return {
        title: r.metaTitle,
        description: r.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/guides/heartopia-redeem-codes`,
            languages: {
                "en": "https://theheartopia.com/en/guides/heartopia-redeem-codes",
                "th": "https://theheartopia.com/th/guides/heartopia-redeem-codes",
                "pt": "https://theheartopia.com/pt/guides/heartopia-redeem-codes",
                "es": "https://theheartopia.com/es/guides/heartopia-redeem-codes",
                "id": "https://theheartopia.com/id/guides/heartopia-redeem-codes",
                "x-default": "https://theheartopia.com/en/guides/heartopia-redeem-codes",
            },
        },
        openGraph: {
            title: r.metaTitle,
            description: r.metaDesc,
            url: `https://theheartopia.com/${locale}/guides/heartopia-redeem-codes`,
            siteName: 'Heartopia Hub',
            locale: locale,
            type: 'article',
            images: ['/images/heartopia-preview.png'],
        },
        twitter: {
            card: 'summary_large_image',
            title: r.metaTitle,
            description: r.metaDesc,
            images: ['/images/heartopia-preview.png'],
        },
    }
}

export default async function RedeemCodesPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const r = t.redeemCodes

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": r.faq.q1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": r.faq.a1
                }
            },
            {
                "@type": "Question",
                "name": r.faq.q2,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": r.faq.a2
                }
            },
            {
                "@type": "Question",
                "name": r.faq.q3,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": r.faq.a3
                }
            }
        ]
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
                "name": r.breadcrumb,
                "item": `https://theheartopia.com/${locale}/guides/heartopia-redeem-codes`
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
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <Navbar t={t.navbar} locale={locale} />

            {/* Breadcrumbs */}
            <nav className="pt-32 pb-6 px-4">
                <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap overflow-x-auto no-scrollbar">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1 shrink-0">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-4 h-4 shrink-0" />
                    <span className="text-foreground font-medium truncate">{r.breadcrumb}</span>
                </div>
            </nav>

            <article className="pb-24 px-4 overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Section */}
                    <header className="mb-12">
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <Badge variant="outline" className="py-1 px-4 border-heartopia-pink text-heartopia-pink bg-pink-50 rounded-full">
                                <Sparkles className="w-3 h-3 mr-2" />
                                {r.badge}
                            </Badge>
                            <Badge variant="secondary" className="py-1 px-4 bg-amber-100 text-amber-700 border-none rounded-full flex items-center gap-2">
                                <Clock className="w-3 h-3" />
                                {r.lastUpdated}
                            </Badge>
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {r.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            {r.heroDesc}
                        </p>

                        <div className="bg-white rounded-3xl p-8 border border-heartopia-pink/10 shadow-sm mb-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-heartopia-pink/5 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform" />
                            <p className="text-lg text-foreground leading-relaxed relative z-10">
                                {r.intro}
                            </p>
                        </div>
                    </header>

                    {/* Active Codes Section */}
                    <section id="active-codes" className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-2xl bg-heartopia-pink flex items-center justify-center text-white shadow-lg shadow-heartopia-pink/20">
                                <Gift className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">{r.activeCodes.title}</h2>
                                <p className="text-muted-foreground">{r.activeCodes.subtitle}</p>
                            </div>
                        </div>

                        <div className="bg-white border-2 border-slate-100 rounded-[40px] p-6 mb-8 shadow-xl shadow-slate-200/50 overflow-hidden">
                            <div className="overflow-x-auto no-scrollbar">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-100">
                                            {r.activeCodes.tableCols.map((col: string, i: number) => (
                                                <th key={i} className="py-4 px-6 text-xs font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                                                    {col}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {r.activeCodes.codes.map((row: string[], i: number) => (
                                            <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                                <td className="py-5 px-6">
                                                    <div className="flex items-center gap-2">
                                                        <code className="bg-slate-900 text-slate-50 px-3 py-1.5 rounded-xl font-mono text-sm font-bold tracking-wider group-hover:bg-heartopia-pink transition-colors">
                                                            {row[0]}
                                                        </code>
                                                    </div>
                                                </td>
                                                <td className="py-5 px-6 text-sm text-slate-700 font-semibold leading-relaxed min-w-[200px]">
                                                    {row[1]}
                                                </td>
                                                <td className="py-5 px-6 text-sm text-slate-500 font-medium">
                                                    {row[2]}
                                                </td>
                                                <td className="py-5 px-6">
                                                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-lg uppercase">
                                                        {row[3]}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-heartopia-pink/10 to-transparent rounded-3xl border border-heartopia-pink/20 flex items-start gap-4">
                            <Trophy className="w-6 h-6 text-heartopia-pink shrink-0 mt-1" />
                            <p className="text-heartopia-pink-dark font-bold leading-relaxed">
                                {r.activeCodes.totalValue}
                            </p>
                        </div>
                    </section>

                    {/* How to Redeem Section */}
                    <section id="how-to-redeem" className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-2xl bg-amber-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                                <Layout className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">{r.howToRedeem.title}</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                {[r.howToRedeem.step1, r.howToRedeem.step2, r.howToRedeem.step3, r.howToRedeem.step4, r.howToRedeem.step5].map((step, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100 group">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold shrink-0 group-hover:bg-heartopia-pink group-hover:text-white transition-colors">
                                            {i + 1}
                                        </div>
                                        <p className="text-foreground leading-relaxed pt-1" dangerouslySetInnerHTML={{ __html: step.replace(/\*\*(.*?)\*\*/g, '<strong class="text-heartopia-pink">$1</strong>') }} />
                                    </div>
                                ))}
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-heartopia-pink/10 blur-3xl rounded-full" />
                                <div className="relative bg-white p-4 rounded-[40px] shadow-2xl border border-slate-100 overflow-hidden group">
                                    <div className="aspect-[4/3] bg-slate-100 rounded-[32px] overflow-hidden">
                                        <img
                                            src="/images/guides/redeem-codes-guide.webp"
                                            alt={r.howToRedeem.imgAlt}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Expired Codes Section */}
                    <section id="expired-codes" className="mb-16">
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="expired" className="border-2 border-slate-100 rounded-[32px] bg-white overflow-hidden px-6">
                                <AccordionTrigger className="hover:no-underline py-6">
                                    <div className="flex items-center gap-3">
                                        <AlertTriangle className="w-5 h-5 text-slate-400" />
                                        <span className="font-serif text-xl font-bold text-slate-700">{r.expiredCodes.title}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="pb-8">
                                    <p className="text-slate-500 mb-6">{r.expiredCodes.desc}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {r.expiredCodes.list.map((code: string, i: number) => (
                                            <span key={i} className="px-4 py-2 bg-slate-50 text-slate-400 rounded-2xl font-mono text-sm line-through decoration-slate-300">
                                                {code}
                                            </span>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>

                    {/* FAQ Section */}
                    <section id="faq" className="mb-20">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                                <HelpCircle className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">{r.faq.title}</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { q: r.faq.q1, a: r.faq.a1 },
                                { q: r.faq.q2, a: r.faq.a2 },
                                { q: r.faq.q3, a: r.faq.a3 }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-[32px] p-8 border border-slate-100 hover:border-heartopia-pink/30 transition-colors shadow-sm">
                                    <h3 className="text-lg font-bold text-foreground mb-3 flex items-start gap-3">
                                        <span className="text-heartopia-pink px-2 py-0.5 bg-heartopia-pink/10 rounded-lg text-xs mt-1 shrink-0">Q</span>
                                        {item.q}
                                    </h3>
                                    <div className="flex items-start gap-3">
                                        <span className="text-emerald-500 px-2 py-0.5 bg-emerald-500/10 rounded-lg text-xs mt-1 shrink-0">A</span>
                                        <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Navigation Section */}
                    <section className="border-t-2 border-slate-100 pt-16">
                        <h2 className="font-serif text-2xl font-bold text-center mb-10">{r.nav.title}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { title: r.nav.onsen, icon: <Sparkles />, href: `/${locale}/events/onsen-egg-all-locations` },
                                { title: r.nav.recipes, icon: <Layout />, href: `/${locale}/guides/recipes` },
                                { title: r.nav.aurora, icon: <Compass />, href: `/${locale}/guides/aurora-weather-banquet` },
                                { title: r.nav.housing, icon: <Home />, href: `/${locale}/guides/housing` }
                            ].map((link, i) => (
                                <Link
                                    key={i}
                                    href={link.href}
                                    className="flex flex-col items-center gap-3 p-6 rounded-[32px] bg-white border border-slate-100 hover:border-heartopia-pink hover:shadow-xl hover:shadow-heartopia-pink/10 transition-all text-center group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-heartopia-pink group-hover:text-white transition-colors">
                                        {React.cloneElement(link.icon as React.ReactElement<any>, { className: "w-6 h-6" } as any)}
                                    </div>
                                    <span className="text-sm font-bold text-slate-600 group-hover:text-heartopia-pink transition-colors">
                                        {link.title}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <div className="mt-16 p-8 bg-slate-50 rounded-[32px] border border-slate-200 text-center">
                        <p className="text-sm text-slate-400 leading-relaxed italic">
                            {r.disclaimer}
                        </p>
                    </div>
                </div>
            </article>

            <Footer t={t.footer} locale={locale} />
        </main>
    )
}
