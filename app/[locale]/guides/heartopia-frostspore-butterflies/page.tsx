import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import {
    Bug,
    Sparkles,
    Calendar,
    MapPin,
    Trophy,
    Gamepad2,
    CloudSun,
    Info,
    HelpCircle,
    ArrowRight,
    Star,
    ChevronRight,
    Home,
    Search,
    Wind,
    Zap,
    AlertTriangle
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
    const t = await getDictionary(locale)
    const g = t.frostsporeButterfliesGuide

    const urlPath = "guides/heartopia-frostspore-butterflies"

    return {
        title: g.metaTitle,
        description: g.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/${urlPath}`,
            languages: {
                "en": `https://theheartopia.com/en/${urlPath}`,
                "th": `https://theheartopia.com/th/${urlPath}`,
                "pt": `https://theheartopia.com/pt/${urlPath}`,
                "es": `https://theheartopia.com/es/${urlPath}`,
                "id": `https://theheartopia.com/id/${urlPath}`,
                "x-default": `https://theheartopia.com/en/${urlPath}`,
            },
        },
        openGraph: {
            title: g.metaTitle,
            description: g.metaDesc,
            url: `https://theheartopia.com/${locale}/${urlPath}`,
            siteName: "Heartopia Guide",
            images: [
                {
                    url: "/images/hero-banner.webp",
                    width: 1200,
                    height: 630,
                    alt: "Heartopia Frostspore Butterflies Guide",
                },
            ],
            locale: locale === "th" ? "th_TH" : (locale === "pt" ? "pt_BR" : (locale === "es" ? "es_ES" : "en_US")),
            type: "article",
        },
    }
}

export default async function FrostsporeButterfliesPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t: any = await getDictionary(locale)
    const g: any = t.frostsporeButterfliesGuide

    const urlPath = "guides/heartopia-frostspore-butterflies"

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": g.heroTitle,
        "description": g.metaDesc,
        "image": "https://theheartopia.com/images/hero-banner.webp",
        "step": [
            {
                "@type": "HowToStep",
                "text": g.catchStep1
            },
            {
                "@type": "HowToStep",
                "text": g.catchStep2
            },
            {
                "@type": "HowToStep",
                "text": g.catchStep3
            },
            {
                "@type": "HowToStep",
                "text": g.catchStep4
            }
        ],
        "author": {
            "@type": "Organization",
            "name": "Heartopia Hub Community"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Heartopia Hub",
            "logo": {
                "@type": "ImageObject",
                "url": "https://theheartopia.com/Wordlogo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://theheartopia.com/${locale}/${urlPath}`
        }
    }

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": g.faqQ1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": g.faqA1
                }
            },
            {
                "@type": "Question",
                "name": g.faqQ2,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": g.faqA2
                }
            },
            {
                "@type": "Question",
                "name": g.faqQ3,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": g.faqA3
                }
            }
        ]
    }

    return (
        <main className="min-h-screen bg-[#FEF9F3]">
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
                    <Link href={`/${locale}/guides/fishing`} className="hover:text-heartopia-pink-dark transition-colors">
                        Guides
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{g.breadcrumb}</span>
                </div>
            </nav>

            <article className="pb-24 px-4 overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12 relative">
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-heartopia-pink/10 rounded-full blur-3xl opacity-50 -z-10 animate-pulse" />
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-heartopia-sky/10 rounded-full blur-3xl opacity-50 -z-10 animate-pulse" />

                        <Badge className="bg-heartopia-pink/10 text-heartopia-pink hover:bg-heartopia-pink/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold uppercase tracking-wider">
                            <Sparkles className="w-3 h-3 mr-2 inline" /> {g.badge}
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {g.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed italic">
                            {g.heroDesc}
                        </p>
                        <p className="mt-4 text-sm text-muted-foreground font-medium">
                            {g.lastUpdated}
                        </p>

                        {/* Cover Image */}
                        <div className="mt-8 rounded-[40px] overflow-hidden border-4 border-white shadow-2xl">
                            <img
                                src="/images/guides/butterfly/heartopia-frostspore-butterflies-cover-image.webp"
                                alt="Heartopia Frostspore Butterflies Collection - All 4 Variants"
                                className="w-full h-auto"
                                loading="eager"
                            />
                        </div>
                    </header>

                    {/* Intro Section */}
                    <section id="what-are-they" className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-green/10 flex items-center justify-center text-heartopia-green">
                                <Bug className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{g.introTitle}</h2>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-[40px] border border-white shadow-soft-pink">
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                {g.introDesc}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[g.variant1, g.variant2, g.variant3, g.variant4].map((v, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-white/40 rounded-2xl border border-white/50">
                                        <div className="w-8 h-8 rounded-full bg-heartopia-pink/20 flex items-center justify-center text-xs font-bold text-heartopia-pink">
                                            {i + 1}
                                        </div>
                                        <span className="font-medium text-foreground">{v}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-heartopia-pink-darker font-semibold flex items-center gap-2">
                                <CloudSun className="w-5 h-5" /> {g.spawnConditions}
                            </p>
                        </div>
                    </section>

                    {/* Locations Section */}
                    <section id="locations" className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{g.locationsTitle}</h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-muted-foreground text-lg">{g.locationsDesc}</p>

                            {/* Visual Location Cards */}
                            <div className="grid grid-cols-1 gap-8">
                                {[
                                    {
                                        name: g.loc1Name,
                                        spot: g.loc1Spot,
                                        tip: g.loc1Tip,
                                        image: "/images/guides/butterfly/Frostspore Sulkowsky's Morpho.webp",
                                        color: "from-blue-400 to-cyan-300"
                                    },
                                    {
                                        name: g.loc2Name,
                                        spot: g.loc2Spot,
                                        tip: g.loc2Tip,
                                        image: "/images/guides/butterfly/Frostspore QueenAlexandra's Birdwing.webp",
                                        color: "from-teal-400 to-green-300"
                                    },
                                    {
                                        name: g.loc3Name,
                                        spot: g.loc3Spot,
                                        tip: g.loc3Tip,
                                        image: "/images/guides/butterfly/Frostspore Mother-of-Pearl.webp",
                                        color: "from-pink-400 to-rose-300"
                                    },
                                    {
                                        name: g.loc4Name,
                                        spot: g.loc4Spot,
                                        tip: g.loc4Tip,
                                        image: "/images/guides/butterfly/Frostspore Purple SpottedSwallowtail.webp",
                                        color: "from-purple-400 to-violet-300"
                                    },
                                ].map((loc, i) => (
                                    <div key={i} className="group bg-white rounded-[32px] overflow-hidden border-2 border-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                                        {/* Image Container */}
                                        <div className="relative overflow-hidden aspect-video">
                                            <img
                                                src={loc.image}
                                                alt={`${loc.name} location in Heartopia`}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${loc.color}`} />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 space-y-4">
                                            <h3 className="font-bold text-xl text-foreground flex items-center gap-2">
                                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${loc.color}`} />
                                                {loc.name}
                                            </h3>

                                            <div className="flex items-start gap-3">
                                                <MapPin className="w-5 h-5 text-heartopia-pink shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-semibold text-foreground">{loc.spot}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100">
                                                <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                                <p className="text-sm text-amber-900 leading-relaxed">{loc.tip}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 bg-amber-50 rounded-3xl border border-amber-100/50 flex items-start gap-4">
                                <Info className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                                <p className="text-amber-800 text-sm leading-relaxed">
                                    {g.hotspots} Make sure to check the <Link href={`/${locale}/events/onsen-egg-all-locations`} className="font-bold underline decoration-amber-200 hover:decoration-amber-500 transition-all">{t.frostsporeButterfliesGuide.linkEggHunt}</Link> while you're at Onsen Mountain!
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Farm Route Section */}
                    {g.routeTitle && (
                        <section id="farm-route" className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.routeTitle}</h2>
                            </div>
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-[40px] border border-amber-100 shadow-sm">
                                <p className="text-amber-900 text-lg mb-8 font-medium italic">{g.routeDesc}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {[
                                        { step: g.routeStep1, color: "bg-blue-500" },
                                        { step: g.routeStep2, color: "bg-pink-500" },
                                        { step: g.routeStep3, color: "bg-purple-500" },
                                        { step: g.routeStep4, color: "bg-green-600" }
                                    ].map((route: any, i: number) => (
                                        <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                                            <div className={`w-8 h-8 rounded-full ${route.color} text-white flex items-center justify-center font-bold mb-4 shadow-sm text-sm`}>
                                                {i + 1}
                                            </div>
                                            <p className="text-foreground font-semibold leading-relaxed">{route.step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Catching Guide Section */}
                    <section id="how-to-catch" className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                <Gamepad2 className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{g.catchTitle}</h2>
                        </div>
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[g.catchStep1, g.catchStep2, g.catchStep3, g.catchStep4, g.catchStep5].map((step, i) => (
                                    <div key={i} className="relative p-6 bg-white rounded-3xl border border-white shadow-sm hover:shadow-md transition-shadow group">
                                        <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-heartopia-orange to-heartopia-orange-dark text-white flex items-center justify-center font-bold shadow-lg">
                                            {i + 1}
                                        </div>
                                        <p className="pl-4 text-foreground leading-relaxed">{step}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="p-6 bg-heartopia-pink/5 rounded-3xl border border-heartopia-pink/10 flex items-center gap-4">
                                <Wind className="w-6 h-6 text-heartopia-pink animate-float" />
                                <p className="text-heartopia-pink-darker font-medium">{g.catchNote}</p>
                            </div>
                        </div>
                    </section>

                    {/* Rewards Section */}
                    <section id="rewards" className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600">
                                <Trophy className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{g.rewardsTitle}</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { use: g.rewardUse1, val: g.rewardVal1, color: "bg-blue-50 text-blue-600" },
                                { use: g.rewardUse2, val: g.rewardVal2, color: "bg-green-50 text-green-600" },
                                { use: g.rewardUse3, val: g.rewardVal3, color: "bg-purple-50 text-purple-600" },
                                { use: g.rewardUse4, val: g.rewardVal4, color: "bg-pink-50 text-pink-600" },
                            ].map((reward, i) => (
                                <div key={i} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:translate-y-[-4px] transition-all">
                                    <h4 className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 ${reward.color}`}>
                                        {reward.use}
                                    </h4>
                                    <p className="text-foreground font-semibold text-lg">{reward.val}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Tips Section */}
                    <section id="tips" className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                                <Search className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{g.tipsTitle}</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: g.tip1Title, desc: g.tip1Desc },
                                { title: g.tip2Title, desc: g.tip2Desc },
                                { title: g.tip3Title, desc: g.tip3Desc },
                                { title: g.tip4Title, desc: g.tip4Desc },
                            ].map((tip, i) => (
                                <div key={i} className="p-8 bg-white/40 border border-white rounded-[40px] shadow-soft-blue group hover:bg-white/80 transition-all">
                                    <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-heartopia-pink-darker transition-colors">{tip.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{tip.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Bug Fixes Section */}
                    {g.bugsTitle && (
                        <section id="bugs" className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.bugsTitle}</h2>
                            </div>
                            <div className="bg-white/40 border border-white rounded-[40px] overflow-hidden shadow-soft-pink">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-red-50/50 border-b border-white">
                                                <th className="p-6 font-bold text-foreground w-1/3">Issue / Bug</th>
                                                <th className="p-6 font-bold text-foreground">Recommended Fix</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white">
                                            {[
                                                { bug: g.bug1Name, fix: g.bug1Fix },
                                                { bug: g.bug2Name, fix: g.bug2Fix },
                                                { bug: g.bug3Name, fix: g.bug3Fix }
                                            ].map((item, i) => (
                                                <tr key={i} className="hover:bg-white/40 transition-colors">
                                                    <td className="p-6 font-bold text-red-900">{item.bug}</td>
                                                    <td className="p-6 text-muted-foreground">{item.fix}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* FAQ Section */}
                    <section id="faq" className="mb-16 scroll-mt-32">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink">
                                <HelpCircle className="w-6 h-6" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{g.faqTitle}</h2>
                        </div>
                        <div className="glass rounded-[32px] p-2 md:p-6 border border-white/50 bg-white/40 shadow-soft-pink">
                            <Accordion type="single" collapsible className="w-full">
                                {[1, 2, 3].map((i) => (
                                    <AccordionItem key={i} value={`faq-${i}`} className="border-none mb-2 bg-white/50 rounded-2xl px-6">
                                        <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-heartopia-pink-dark transition-colors py-4">
                                            {g[`faqQ${i}` as keyof typeof g]}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6 text-wrap">
                                            {g[`faqA${i}` as keyof typeof g]}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </section>

                    {/* Related Guides */}
                    <section className="pt-12 border-t border-heartopia-pink/10">
                        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">{g.relatedTitle}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            <Link href={`/${locale}/events/onsen-egg-all-locations`} className="group flex flex-col p-6 bg-white rounded-[32px] border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/5 flex items-center justify-center text-heartopia-pink mb-4 group-hover:scale-110 transition-transform">
                                    <Calendar className="w-6 h-6" />
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="font-bold text-foreground group-hover:text-heartopia-pink-dark transition-colors">{g.linkEggHunt}</span>
                                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-heartopia-pink transition-colors group-hover:translate-x-1" />
                                </div>
                            </Link>
                            <Link href={`/${locale}/guides/fish-locations`} className="group flex flex-col p-6 bg-white rounded-[32px] border border-heartopia-sky/10 hover:border-heartopia-sky/30 hover:shadow-soft-blue transition-all">
                                <div className="w-12 h-12 rounded-2xl bg-heartopia-sky/5 flex items-center justify-center text-heartopia-sky mb-4 group-hover:scale-110 transition-transform">
                                    <Search className="w-6 h-6" />
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="font-bold text-foreground group-hover:text-heartopia-sky-dark transition-colors">{g.linkInsectHub}</span>
                                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-heartopia-sky transition-colors group-hover:translate-x-1" />
                                </div>
                            </Link>
                            <Link href={`/${locale}/guides/aurora-weather-banquet`} className="group flex flex-col p-6 bg-white rounded-[32px] border border-amber-100 hover:border-amber-300 hover:shadow-soft-orange transition-all">
                                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                                    <Star className="w-6 h-6" />
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <span className="font-bold text-foreground group-hover:text-amber-700 transition-colors">{g.linkWinterEvents}</span>
                                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-amber-500 transition-colors group-hover:translate-x-1" />
                                </div>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <Footer t={t.footer} locale={locale} />
        </main>
    )
}
