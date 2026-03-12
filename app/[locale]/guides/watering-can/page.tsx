import { Metadata } from "next"
import { getDictionary } from "@/lib/dictionary"
import Link from "next/link"
import { Navbar } from "@/components/heartopia/navbar"
import { Footer } from "@/components/heartopia/footer"
import { Droplet, MapPin, Bug, Trophy, Sparkles, AlertCircle, CheckCircle2, Clock, Zap, Home as HomeIcon, Utensils, ArrowUp, Sun, Battery, RefreshCw, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const { locale } = params;
    const dict = await getDictionary(locale)
    const t = (key: string) => key.split('.').reduce((o: any, k) => o?.[k], dict.wateringCan) as string

    return {
        title: t("metaTitle"),
        description: t("metaDesc"),
        alternates: {
            canonical: `https://theheartopia.com/${locale}/guides/watering-can`,
            languages: {
                'x-default': 'https://theheartopia.com/en/guides/watering-can',
                en: "https://theheartopia.com/en/guides/watering-can",
                es: "https://theheartopia.com/es/guides/watering-can",
                pt: "https://theheartopia.com/pt/guides/watering-can",
                id: "https://theheartopia.com/id/guides/watering-can",
                th: "https://theheartopia.com/th/guides/watering-can",
            },
        },
        openGraph: {
            title: t("metaTitle"),
            description: t("metaDesc"),
            url: `https://theheartopia.com/${locale}/guides/watering-can`,
            siteName: "Heartopia Hub",
            locale: locale,
            type: "article",
            publishedTime: "2026-02-10T00:00:00Z",
            modifiedTime: "2026-02-10T00:00:00Z",
        },
        twitter: {
            card: "summary_large_image",
            title: t("metaTitle"),
            description: t("metaDesc"),
        },
    }
}

export default async function WateringCanPage(props: Props) {
    const params = await props.params;
    const { locale } = params;
    const dict = await getDictionary(locale)
    const t = (key: string) => key.split('.').reduce((o: any, k) => o?.[k], dict.wateringCan) as string
    const nav = dict.navbar
    const footer = dict.footer

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": t("metaTitle"),
                "description": t("metaDesc"),
                "datePublished": "2026-02-10T00:00:00Z",
                "dateModified": "2026-02-10T00:00:00Z",
                "author": {
                    "@type": "Organization",
                    "name": "Heartopia Hub"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Heartopia Hub",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://theheartopia.com/images/logo.png"
                    }
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": `https://theheartopia.com/${locale}`
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Guides",
                        "item": `https://theheartopia.com/${locale}/guides`
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Watering Can Guide",
                        "item": `https://theheartopia.com/${locale}/guides/watering-can`
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": t("faq.q1"),
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": t("faq.a1")
                        }
                    },
                    {
                        "@type": "Question",
                        "name": t("faq.q2"),
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": t("faq.a2")
                        }
                    },
                    {
                        "@type": "Question",
                        "name": t("faq.q3"),
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": t("faq.a3")
                        }
                    },
                    {
                        "@type": "Question",
                        "name": t("faq.q4"),
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": t("faq.a4")
                        }
                    },
                    {
                        "@type": "Question",
                        "name": t("faq.q5"),
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": t("faq.a5")
                        }
                    },
                    {
                        "@type": "Question",
                        "name": t("faq.q6"),
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": t("faq.a6")
                        }
                    },
                    {
                        "@type": "Question",
                        "name": t("faq.q7"),
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": t("faq.a7")
                        }
                    }
                ]
            },
            {
                "@type": "HowTo",
                "name": "How to Water Crops in Heartopia",
                "description": "Step-by-step guide to watering crops with the watering can in Heartopia",
                "step": [
                    {
                        "@type": "HowToStep",
                        "name": "Equip Watering Can",
                        "text": "Open Toolbox (right side) → Select watering can icon → Equip"
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Approach Garden Plot",
                        "text": "Walk near dry garden plot until sparkle indicator shows you're in range"
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Water the Plot",
                        "text": "Tap watering can icon (mobile) or right-click (PC) → Plot sparkles = success"
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Use Lv3 Multi-Water (Optional)",
                        "text": "Hold icon for 2-3 seconds (Lv3 unlocked) → Waters 3-5 adjacent plots at once"
                    },
                    {
                        "@type": "HowToStep",
                        "name": "Check Quest Progress",
                        "text": "Quest log updates when sparkling plots are counted"
                    }
                ]
            }
        ]
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-[#FEF9F3] via-white to-[#FEF9F3]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Navbar t={nav} locale={locale} />

            <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink transition-colors">
                        {t("breadcrumbHome")}
                    </Link>
                    <span>/</span>
                    <Link href={`/${locale}/guides`} className="hover:text-heartopia-pink transition-colors">
                        {t("breadcrumbGuides")}
                    </Link>
                    <span>/</span>
                    <span className="text-foreground font-medium">{t("breadcrumb")}</span>
                </nav>

                {/* Header */}
                <header className="mb-16 text-center">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <Badge className="bg-heartopia-sky/10 text-heartopia-sky border-heartopia-sky/20 px-4 py-1.5 text-sm font-bold">
                            <Droplet className="w-4 h-4 mr-2" />
                            {t("badge")}
                        </Badge>
                        <Badge className="bg-green-100 text-green-700 border-green-200 px-4 py-1.5 text-sm font-bold">
                            <Clock className="w-4 h-4 mr-2" />
                            {t("lastUpdated")}
                        </Badge>
                    </div>

                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                        {t("heroTitle")}
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        {t("heroDesc")}
                    </p>
                </header>

                <div className="space-y-16">
                    {/* What is Watering Crops */}
                    <section>
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-heartopia-sky" />
                            </div>
                            {t("whatIs.title")}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            {t("whatIs.desc")}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center mb-4">
                                    <Droplet className="w-6 h-6 text-amber-600" />
                                </div>
                                <h3 className="font-bold text-foreground mb-2">{t("whatIs.fact1Title")}</h3>
                                <p className="text-sm text-muted-foreground">{t("whatIs.fact1")}</p>
                            </div>
                            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
                                    <Sparkles className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-foreground mb-2">{t("whatIs.fact2Title")}</h3>
                                <p className="text-sm text-muted-foreground">{t("whatIs.fact2")}</p>
                            </div>
                            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center mb-4">
                                    <Zap className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="font-bold text-foreground mb-2">{t("whatIs.fact3Title")}</h3>
                                <p className="text-sm text-muted-foreground">{t("whatIs.fact3")}</p>
                            </div>
                        </div>
                    </section>

                    {/* Step-by-Step Guide & Basics */}
                    <section className="bg-gradient-to-br from-heartopia-pink/5 to-heartopia-sky/5 rounded-[40px] p-8 md:p-12 border border-heartopia-pink/10">
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-heartopia-pink flex items-center justify-center">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            {t("basics.title")}
                        </h2>

                        {/* Basics Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-heartopia-pink/10">
                                <div className="flex items-center gap-2 mb-2 font-bold text-heartopia-pink-darker">
                                    <User className="w-4 h-4" />
                                    <span>NPC</span>
                                </div>
                                <p className="text-sm text-foreground">{t("basics.npc")}</p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-heartopia-pink/10">
                                <div className="flex items-center gap-2 mb-2 font-bold text-heartopia-pink-darker">
                                    <Sparkles className="w-4 h-4" />
                                    <span>Visual</span>
                                </div>
                                <p className="text-sm text-foreground">{t("basics.visual")}</p>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-heartopia-pink/10">
                                <div className="flex items-center gap-2 mb-2 font-bold text-heartopia-pink-darker">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>Feedback</span>
                                </div>
                                <p className="text-sm text-foreground">{t("basics.feedback")}</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {[1, 2, 3, 4, 5].map((step) => (
                                <div key={step} className="flex gap-4 bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-10 h-10 rounded-full bg-heartopia-pink text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                                        {step}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-2">{t(`steps.step${step}Title`)}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{t(`steps.step${step}Desc`)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* How to Refill */}
                    <section>
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center">
                                <RefreshCw className="w-6 h-6 text-blue-600" />
                            </div>
                            {t("refill.title")}
                        </h2>
                        <div className="bg-white rounded-[40px] p-8 md:p-10 border border-slate-100 shadow-sm">
                            <p className="text-lg text-muted-foreground mb-6 font-medium">{t("refill.desc")}</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-3xl">
                                    <span className="text-3xl mb-2">💧</span>
                                    <span className="font-bold text-foreground">{t("refill.source1")}</span>
                                </div>
                                <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-3xl">
                                    <span className="text-3xl mb-2">🌊</span>
                                    <span className="font-bold text-foreground">{t("refill.source2")}</span>
                                </div>
                                <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-3xl">
                                    <span className="text-3xl mb-2">🚰</span>
                                    <span className="font-bold text-foreground">{t("refill.source3")}</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center p-4 bg-blue-50 rounded-2xl border border-blue-100 text-blue-800 font-bold text-center">
                                {t("refill.action")}
                            </div>
                        </div>
                    </section>

                    {/* Upgrades Table */}
                    <section>
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center">
                                <ArrowUp className="w-6 h-6 text-amber-600" />
                            </div>
                            {t("upgrades.title")}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {t("upgrades.desc")}
                        </p>

                        <div className="bg-white rounded-[32px] p-6 border border-slate-100 shadow-sm overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-100">
                                        <th className="py-4 px-4 text-sm font-bold text-slate-600 uppercase tracking-wider">{t("upgrades.colLevel")}</th>
                                        <th className="py-4 px-4 text-sm font-bold text-slate-600 uppercase tracking-wider">{t("upgrades.colMat")}</th>
                                        <th className="py-4 px-4 text-sm font-bold text-slate-600 uppercase tracking-wider">{t("upgrades.colAoe")}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {[1, 2, 3, 4].map((lv) => (
                                        <tr key={lv} className="hover:bg-slate-50 transition-colors">
                                            <td className="py-4 px-4 font-bold text-foreground">{t(`upgrades.lv${lv}`)}</td>
                                            <td className="py-4 px-4 text-muted-foreground">{t(`upgrades.val${lv}Mat`)}</td>
                                            <td className="py-4 px-4 text-heartopia-pink font-bold">{t(`upgrades.val${lv}Aoe`)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Garden Plot Locations */}
                    <section>
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-green-100 flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-green-600" />
                            </div>
                            {t("locations.title")}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {t("locations.desc")}
                        </p>

                        <div className="bg-white rounded-[32px] p-6 border border-slate-100 shadow-sm overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-100">
                                        <th className="py-4 px-4 text-sm font-bold text-slate-600 uppercase tracking-wider">{t("locations.tableArea")}</th>
                                        <th className="py-4 px-4 text-sm font-bold text-slate-600 uppercase tracking-wider">{t("locations.tablePlots")}</th>
                                        <th className="py-4 px-4 text-sm font-bold text-slate-600 uppercase tracking-wider">{t("locations.tableNotes")}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-4 font-bold text-foreground">{t("locations.area1")}</td>
                                        <td className="py-4 px-4 text-muted-foreground">20+</td>
                                        <td className="py-4 px-4 text-muted-foreground">{t("locations.notes1")}</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-4 font-bold text-foreground">{t("locations.area2")}</td>
                                        <td className="py-4 px-4 text-muted-foreground">4-16</td>
                                        <td className="py-4 px-4 text-muted-foreground">{t("locations.notes2")}</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-4 font-bold text-foreground">{t("locations.area3")}</td>
                                        <td className="py-4 px-4 text-muted-foreground">{t("locations.seasonal")}</td>
                                        <td className="py-4 px-4 text-muted-foreground">{t("locations.notes3")}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Common Bugs & Fixes */}
                    <section>
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-red-100 flex items-center justify-center">
                                <Bug className="w-6 h-6 text-red-600" />
                            </div>
                            {t("bugs.title")}
                        </h2>

                        <div className="bg-white rounded-[32px] p-6 border border-slate-100 shadow-sm overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-100">
                                        <th className="py-4 px-4 text-sm font-bold text-slate-600 uppercase tracking-wider">{t("bugs.tableBug")}</th>
                                        <th className="py-4 px-4 text-sm font-bold text-slate-600 uppercase tracking-wider">{t("bugs.tableCause")}</th>
                                        <th className="py-4 px-4 text-sm font-bold text-slate-600 uppercase tracking-wider">{t("bugs.tableFix")}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {[1, 2, 3, 4, 5].map((bug) => (
                                        <tr key={bug} className="hover:bg-slate-50 transition-colors">
                                            <td className="py-4 px-4 font-bold text-foreground">{t(`bugs.bug${bug}`)}</td>
                                            <td className="py-4 px-4 text-muted-foreground">{t(`bugs.cause${bug}`)}</td>
                                            <td className="py-4 px-4 text-muted-foreground">{t(`bugs.fix${bug}`)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Lv3 Multi-Water Tips */}
                    <section className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-[40px] p-8 md:p-12 border border-purple-100">
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-purple-500 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            {t("lv3.title")}
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                                <p className="text-lg text-foreground">{t("lv3.tip1")}</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                                <p className="text-lg text-foreground">{t("lv3.tip2")}</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                                <p className="text-lg text-foreground">{t("lv3.tip3")}</p>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-amber-50 rounded-2xl border border-amber-200">
                            <div className="flex items-center gap-2 mb-2">
                                <AlertCircle className="w-5 h-5 text-amber-600" />
                                <span className="font-bold text-amber-900">{t("lv3.unlockTitle")}</span>
                            </div>
                            <p className="text-amber-800 text-sm">{t("lv3.unlockDesc")}</p>
                        </div>
                    </section>

                    {/* Rewards */}
                    <section>
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center">
                                <Trophy className="w-6 h-6 text-amber-600" />
                            </div>
                            {t("rewards.title")}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm text-center">
                                <div className="w-16 h-16 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center mx-auto mb-4">
                                    <Trophy className="w-8 h-8 text-heartopia-pink" />
                                </div>
                                <h3 className="font-bold text-foreground mb-2">{t("rewards.reward1Title")}</h3>
                                <p className="text-muted-foreground">{t("rewards.reward1")}</p>
                            </div>
                            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm text-center">
                                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                                    <Utensils className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="font-bold text-foreground mb-2">{t("rewards.reward2Title")}</h3>
                                <p className="text-muted-foreground">{t("rewards.reward2")}</p>
                            </div>
                            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm text-center">
                                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                                    <Sparkles className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="font-bold text-foreground mb-2">{t("rewards.reward3Title")}</h3>
                                <p className="text-muted-foreground">{t("rewards.reward3")}</p>
                            </div>
                        </div>
                    </section>

                    {/* Pro Tips */}
                    <section>
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-purple-600" />
                            </div>
                            {t("proTips.title")}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link href={`/${locale}/guides/aurora-weather-banquet`} className="group bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-6 border border-indigo-100 hover:border-indigo-300 transition-all">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                    <Sun className="w-6 h-6 text-indigo-500" />
                                </div>
                                <h3 className="font-bold text-foreground mb-2 group-hover:text-indigo-600 transition-colors">{t("proTips.aurora")}</h3>
                                <p className="text-sm text-muted-foreground">{t("proTips.auroraDesc")}</p>
                            </Link>

                            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-6 border border-rose-100">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm">
                                    <Sparkles className="w-6 h-6 text-rose-500" />
                                </div>
                                <h3 className="font-bold text-foreground mb-2">{t("proTips.hybrid")}</h3>
                                <p className="text-sm text-muted-foreground">{t("proTips.hybridDesc")}</p>
                            </div>

                            <Link href={`/${locale}/guides/heartopia-recipes-cooking-guide`} className="group bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-6 border border-amber-100 hover:border-amber-300 transition-all">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                    <Battery className="w-6 h-6 text-amber-500" />
                                </div>
                                <h3 className="font-bold text-foreground mb-2 group-hover:text-amber-600 transition-colors">{t("proTips.stamina")}</h3>
                                <p className="text-sm text-muted-foreground">{t("proTips.staminaDesc")}</p>
                            </Link>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-heartopia-pink flex items-center justify-center">
                                <AlertCircle className="w-6 h-6 text-white" />
                            </div>
                            {t("faq.title")}
                        </h2>

                        <div className="bg-white rounded-[40px] p-6 md:p-10 border border-slate-100 shadow-sm">
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {[1, 2, 3, 4, 5, 6, 7].map((q) => (
                                    <AccordionItem key={q} value={`q${q}`} className="border-none bg-slate-50 rounded-2xl px-6 transition-all hover:bg-slate-100">
                                        <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline">
                                            {t(`faq.q${q}`)}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                                            {t(`faq.a${q}`)}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </section>

                    {/* Related Guides */}
                    <section className="bg-gradient-to-br from-heartopia-pink/5 to-heartopia-sky/5 rounded-[40px] p-8 md:p-12 border border-heartopia-pink/10">
                        <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
                            {t("related.title")}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Link
                                href={`/${locale}/events/onsen-egg-all-locations`}
                                className="flex items-center justify-center gap-2 p-4 bg-white rounded-2xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <Sparkles className="w-5 h-5 text-heartopia-pink" />
                                <span className="font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                    {t("related.eggHunt")}
                                </span>
                            </Link>
                            <Link
                                href={`/${locale}/guides/heartopia-recipes-cooking-guide`}
                                className="flex items-center justify-center gap-2 p-4 bg-white rounded-2xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <Utensils className="w-5 h-5 text-heartopia-orange" />
                                <span className="font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                    {t("related.recipes")}
                                </span>
                            </Link>
                            <Link
                                href={`/${locale}/guides/housing`}
                                className="flex items-center justify-center gap-2 p-4 bg-white rounded-2xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <HomeIcon className="w-5 h-5 text-heartopia-sky" />
                                <span className="font-bold text-foreground group-hover:text-heartopia-pink transition-colors">
                                    {t("related.housing")}
                                </span>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <Footer t={footer} locale={locale} />
        </main>
    )
}
