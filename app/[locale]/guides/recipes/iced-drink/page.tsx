import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import {
    Utensils,
    Sparkles,
    ShoppingBag,
    ChefHat,
    Flame,
    MapPin,
    ChevronRight,
    Home,
    HelpCircle,
    ArrowRight,
    Star,
    Snowflake,
    Zap,
    Coffee,
    AlertCircle
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
    const icedDrink = (t as any).icedDrink

    return {
        title: icedDrink.metaTitle,
        description: icedDrink.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/guides/recipes/iced-drink`,
            languages: {
                "en": "https://theheartopia.com/en/guides/recipes/iced-drink",
                "th": "https://theheartopia.com/th/guides/recipes/iced-drink",
                "pt": "https://theheartopia.com/pt/guides/recipes/iced-drink",
                "es": "https://theheartopia.com/es/guides/recipes/iced-drink",
                "id": "https://theheartopia.com/id/guides/recipes/iced-drink",
                "x-default": "https://theheartopia.com/en/guides/recipes/iced-drink",
            },
        },
        openGraph: {
            title: icedDrink.metaTitle,
            description: icedDrink.metaDesc,
            url: `https://theheartopia.com/${locale}/guides/recipes/iced-drink`,
            siteName: "Heartopia Hub",
            images: [
                {
                    url: "/images/heartopia-preview.png",
                    width: 1200,
                    height: 630,
                    alt: icedDrink.metaTitle,
                },
            ],
            locale: locale === "th" ? "th_TH" : (locale === "pt" ? "pt_BR" : (locale === "es" ? "es_ES" : (locale === "id" ? "id_ID" : "en_US"))),
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: icedDrink.metaTitle,
            description: icedDrink.metaDesc,
            images: ["/images/heartopia-preview.png"],
        },
    }
}

export default async function IcedDrinkPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale)
    const icedDrink = (t as any).icedDrink

    // JSON-LD Recipe Schema
    const recipeLd = {
        "@context": "https://schema.org",
        "@type": "Recipe",
        "name": icedDrink.heroTitle,
        "description": icedDrink.metaDesc,
        "image": "https://theheartopia.com/images/heartopia-preview.png",
        "recipeCategory": "Beverage",
        "recipeCuisine": "Heartopia Winter Event",
        "recipeIngredient": [
            icedDrink.icedLatte.i1,
            icedDrink.icedLatte.i2,
            icedDrink.icedLatte.i3,
            icedDrink.icedCoffee.i2,
            icedDrink.proTipDesc
        ],
        "recipeInstructions": [
            {
                "@type": "HowToStep",
                "text": icedDrink.howTo.step1Desc
            },
            {
                "@type": "HowToStep",
                "text": icedDrink.howTo.step2Desc
            },
            {
                "@type": "HowToStep",
                "text": icedDrink.howTo.step3Desc
            },
            {
                "@type": "HowToStep",
                "text": icedDrink.howTo.step4Desc
            },
            {
                "@type": "HowToStep",
                "text": icedDrink.howTo.step5Desc
            }
        ],
        "recipeYield": "1 serving",
        "author": {
            "@type": "Organization",
            "name": "Heartopia Hub"
        },
        "datePublished": "2026-02-04",
        "prepTime": "PT2M"
    }

    // FAQ Schema
    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": icedDrink.faq.q1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": icedDrink.faq.a1
                }
            },
            {
                "@type": "Question",
                "name": icedDrink.faq.q2,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": icedDrink.faq.a2
                }
            },
            {
                "@type": "Question",
                "name": icedDrink.faq.q3,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": icedDrink.faq.a3
                }
            },
            {
                "@type": "Question",
                "name": icedDrink.faq.q4,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": icedDrink.faq.a4
                }
            },
            {
                "@type": "Question",
                "name": icedDrink.faq.q5,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": icedDrink.faq.a5
                }
            }
        ]
    }

    // Breadcrumb Schema
    const breadcrumbLd = {
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
                "name": t.navbar.guides,
                "item": `https://theheartopia.com/${locale}/guides/heartopia-recipes-cooking-guide`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": t.navbar.recipes,
                "item": `https://theheartopia.com/${locale}/guides/recipes`
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": icedDrink.breadcrumb,
                "item": `https://theheartopia.com/${locale}/guides/recipes/iced-drink`
            }
        ]
    }

    const renderTextWithLinks = (text: string) => {
        if (!text) return null;
        const parts = text.split(/(\{link\w+\})/g);
        return parts.map((part, i) => {
            if (part === "{linkOnsen}") {
                return (
                    <Link key={i} href={`/${locale}/events/onsen-egg-all-locations`} className="text-heartopia-pink-darker hover:underline font-semibold">
                        {icedDrink.linkOnsen}
                    </Link>
                );
            }
            if (part === "{linkPancake}") {
                return (
                    <Link key={i} href={`/${locale}/guides/recipes/frosted-pancake`} className="text-heartopia-pink-darker hover:underline font-semibold">
                        {icedDrink.linkPancake}
                    </Link>
                );
            }
            if (part === "{linkEggLocations}") {
                return (
                    <Link key={i} href={`/${locale}/events/onsen-egg-all-locations`} className="text-heartopia-pink-darker hover:underline font-semibold">
                        {icedDrink.linkEggLocations}
                    </Link>
                );
            }
            if (part === "{linkAurora}") {
                return (
                    <Link key={i} href={`/${locale}/events/heartopia-aurora-weather-banquet-guide`} className="text-heartopia-pink-darker hover:underline font-semibold">
                        {icedDrink.linkAurora}
                    </Link>
                );
            }
            if (part === "{linkOnsenQuest}") {
                return (
                    <Link key={i} href={`/${locale}/events/onsen-egg`} className="text-heartopia-pink-darker hover:underline font-semibold">
                        {icedDrink.linkOnsenQuest}
                    </Link>
                );
            }
            return <span key={i} dangerouslySetInnerHTML={{ __html: part }} />;
        });
    };

    return (
        <main className="min-h-screen bg-heartopia-cream">
            <Script
                id="recipe-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeLd) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />

            <Navbar t={t.navbar} locale={locale} />

            {/* Breadcrumbs */}
            <nav className="pt-32 pb-6 px-4">
                <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-muted-foreground">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href={`/${locale}/guides/heartopia-recipes-cooking-guide`} className="hover:text-heartopia-pink-dark transition-colors">
                        {t.navbar.guides}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href={`/${locale}/guides/recipes`} className="hover:text-heartopia-pink-dark transition-colors">
                        {t.navbar.recipes}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{icedDrink.breadcrumb}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12">
                        <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold">
                            ❄️ {icedDrink.heroBadge}
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {icedDrink.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                            {renderTextWithLinks(icedDrink.heroDesc)}
                        </p>
                        <p className="text-lg text-blue-700 font-medium bg-blue-50 p-4 rounded-2xl border border-blue-100">
                            {renderTextWithLinks(icedDrink.updateNote)}
                        </p>
                    </header>

                    {/* Quick Recipe Cards */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                <Coffee className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{icedDrink.quickTitle}</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Iced Latte Card */}
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <Coffee className="w-8 h-8 text-blue-600" />
                                    <h3 className="font-bold text-2xl text-foreground">{icedDrink.icedLatte.title}</h3>
                                    <Badge className="bg-blue-600 text-white ml-auto">{icedDrink.icedLatte.stars}</Badge>
                                </div>
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center gap-2 text-foreground">
                                        <span className="font-semibold">{icedDrink.icedLatte.ingredientsLabel}</span>
                                    </div>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2">
                                            <Snowflake className="w-4 h-4 text-blue-500" />
                                            <span>{icedDrink.icedLatte.i1}</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Coffee className="w-4 h-4 text-amber-700" />
                                            <span>{icedDrink.icedLatte.i2}</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <ShoppingBag className="w-4 h-4 text-blue-400" />
                                            <span>{icedDrink.icedLatte.i3}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white/70 rounded-xl p-3 space-y-1 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">{icedDrink.icedLatte.energyLabel}</span>
                                        <span className="font-bold text-green-600">{icedDrink.icedLatte.energyValue}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">{icedDrink.icedLatte.sellLabel}</span>
                                        <span className="font-bold text-amber-600">{icedDrink.icedLatte.sellValue}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Iced Coffee Card */}
                            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 border-2 border-amber-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <Flame className="w-8 h-8 text-amber-600" />
                                    <h3 className="font-bold text-2xl text-foreground">{icedDrink.icedCoffee.title}</h3>
                                    <Badge className="bg-amber-600 text-white ml-auto">{icedDrink.icedCoffee.stars}</Badge>
                                </div>
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center gap-2 text-foreground">
                                        <span className="font-semibold">{icedDrink.icedCoffee.ingredientsLabel}</span>
                                    </div>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2">
                                            <Snowflake className="w-4 h-4 text-blue-500" />
                                            <span>{icedDrink.icedCoffee.i1}</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Coffee className="w-4 h-4 text-amber-700" />
                                            <span>{icedDrink.icedCoffee.i2}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white/70 rounded-xl p-3 space-y-1 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">{icedDrink.icedCoffee.energyLabel}</span>
                                        <span className="font-bold text-green-600">{icedDrink.icedCoffee.energyValue}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">{icedDrink.icedCoffee.sellLabel}</span>
                                        <span className="font-bold text-amber-600">{icedDrink.icedCoffee.sellValue}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-5 border border-purple-200">
                            <div className="flex items-start gap-3">
                                <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-foreground mb-2">{icedDrink.proTipTitle}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {renderTextWithLinks(icedDrink.proTipDesc)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* What is Iced Drink */}
                    <section className="mb-16 bg-white rounded-3xl p-8 shadow-sm border border-blue-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                                <HelpCircle className="w-6 h-6 text-blue-600" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{icedDrink.what.title}</h2>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6">
                            {renderTextWithLinks(icedDrink.what.desc)}
                        </p>

                        <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-3xl p-6 border border-blue-100">
                            <h3 className="font-bold text-xl text-foreground mb-4">{icedDrink.what.keyFactsTitle}</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <ChefHat className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground">{renderTextWithLinks(icedDrink.what.fact1)}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Zap className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground">{renderTextWithLinks(icedDrink.what.fact2)}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShoppingBag className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground">{renderTextWithLinks(icedDrink.what.fact3)}</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Star className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground">{renderTextWithLinks(icedDrink.what.fact4)}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-6 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5">
                            <p className="font-semibold text-amber-900 mb-2">{icedDrink.what.rewardsTitle}</p>
                            <p className="text-sm text-amber-800">
                                {icedDrink.what.rewardsDesc}
                            </p>
                        </div>
                    </section>

                    {/* Step-by-Step Guide */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center">
                                <Utensils className="w-6 h-6 text-heartopia-pink" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{icedDrink.howTo.title}</h2>
                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-sky-100">
                            <ol className="space-y-4">
                                {[
                                    {
                                        title: icedDrink.howTo.step1Title,
                                        desc: icedDrink.howTo.step1Desc
                                    },
                                    {
                                        title: icedDrink.howTo.step2Title,
                                        desc: icedDrink.howTo.step2Desc
                                    },
                                    {
                                        title: icedDrink.howTo.step3Title,
                                        desc: icedDrink.howTo.step3Desc
                                    },
                                    {
                                        title: icedDrink.howTo.step4Title,
                                        desc: icedDrink.howTo.step4Desc
                                    },
                                    {
                                        title: icedDrink.howTo.step5Title,
                                        desc: icedDrink.howTo.step5Desc
                                    }
                                ].map((step, index) => (
                                    <li key={index} className="flex items-start gap-4 p-4 bg-sky-50 rounded-xl">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-heartopia-sky text-white flex items-center justify-center font-bold">
                                            {index + 1}
                                        </span>
                                        <div className="pt-1">
                                            <p className="font-bold text-foreground mb-1">{step.title}</p>
                                            <div className="text-muted-foreground text-sm">{renderTextWithLinks(step.desc)}</div>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                            <div className="mt-6 text-center text-sm font-semibold text-heartopia-sky bg-sky-50 p-3 rounded-lg">
                                {icedDrink.howTo.miniGameTip}
                            </div>
                        </div>
                    </section>

                    {/* Ingredient Locations */}
                    <section className="mb-16 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 border-2 border-amber-200">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-amber-600" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{icedDrink.where.title}</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-white p-5 rounded-2xl">
                                <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                                    <Snowflake className="w-5 h-5 text-blue-500" />
                                    {icedDrink.where.frostingTitle}
                                </h3>
                                <div className="text-sm text-muted-foreground underline-links">
                                    {renderTextWithLinks(icedDrink.where.frostingDesc)}
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-2xl">
                                <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                                    <Coffee className="w-5 h-5 text-amber-700" />
                                    {icedDrink.where.coffeeTitle}
                                </h3>
                                <div className="text-sm text-muted-foreground underline-links">
                                    {renderTextWithLinks(icedDrink.where.coffeeDesc)}
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-2xl">
                                <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                                    <ShoppingBag className="w-5 h-5 text-blue-400" />
                                    {icedDrink.where.milkTitle}
                                </h3>
                                <div className="text-sm text-muted-foreground underline-links">
                                    {renderTextWithLinks(icedDrink.where.milkDesc)}
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-2xl">
                                <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                                    <ChefHat className="w-5 h-5 text-purple-600" />
                                    {icedDrink.where.stoveTitle}
                                </h3>
                                <div className="text-sm text-muted-foreground underline-links">
                                    {renderTextWithLinks(icedDrink.where.stoveDesc)}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6">
                            <div className="text-sm text-muted-foreground mb-3">
                                {renderTextWithLinks(icedDrink.where.proMapTip)}
                            </div>
                        </div>
                    </section>

                    {/* Strategic Use for Onsen Egg Hunt */}
                    <section className="mb-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-green-600" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{icedDrink.strategic.title}</h2>
                        </div>

                        <p className="text-lg text-muted-foreground mb-6">
                            {renderTextWithLinks(icedDrink.strategic.intro)}
                        </p>

                        <div className="bg-white rounded-2xl p-6 mb-6">
                            <h3 className="font-bold text-xl text-foreground mb-4">{icedDrink.strategic.problemTitle}</h3>
                            <div className="text-muted-foreground mb-4">
                                {renderTextWithLinks(icedDrink.strategic.problemDesc)}
                            </div>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500">❌</span>
                                    <span>{renderTextWithLinks(icedDrink.strategic.problem1)}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500">❌</span>
                                    <span>{renderTextWithLinks(icedDrink.strategic.problem2)}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500">❌</span>
                                    <span>{renderTextWithLinks(icedDrink.strategic.problem3)}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-300">
                            <h3 className="font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                                <Star className="w-6 h-6 text-green-600" />
                                {icedDrink.strategic.solutionTitle}
                            </h3>
                            <ul className="space-y-2 text-sm text-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✅</span>
                                    <span>{renderTextWithLinks(icedDrink.strategic.solution1)}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✅</span>
                                    <span>{renderTextWithLinks(icedDrink.strategic.solution2)}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✅</span>
                                    <span>{renderTextWithLinks(icedDrink.strategic.solution3)}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-2xl p-5">
                            <p className="font-semibold text-blue-900 mb-2">{icedDrink.strategic.loadoutTitle}</p>
                            <div className="text-sm text-blue-800">
                                {renderTextWithLinks(icedDrink.strategic.loadoutDesc)}
                            </div>
                        </div>
                    </section>

                    {/* Common Bugs & Fixes */}
                    <section className="mb-16 bg-red-50 border-2 border-red-200 rounded-3xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                                <AlertCircle className="w-6 h-6 text-red-600" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{icedDrink.bugs.title}</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white p-5 rounded-2xl">
                                <h3 className="font-bold text-lg text-foreground mb-2">{icedDrink.bugs.bug1Title}</h3>
                                <div className="text-sm text-muted-foreground">
                                    {renderTextWithLinks(icedDrink.bugs.bug1Desc)}
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-2xl">
                                <h3 className="font-bold text-lg text-foreground mb-2">{icedDrink.bugs.bug2Title}</h3>
                                <div className="text-sm text-muted-foreground">
                                    {renderTextWithLinks(icedDrink.bugs.bug2Desc)}
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-2xl">
                                <h3 className="font-bold text-lg text-foreground mb-2">{icedDrink.bugs.bug3Title}</h3>
                                <div className="text-sm text-muted-foreground">
                                    {renderTextWithLinks(icedDrink.bugs.bug3Desc)}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center">
                                <HelpCircle className="w-6 h-6 text-heartopia-pink" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-foreground">{icedDrink.faq.title}</h2>
                        </div>

                        <Accordion type="single" collapsible className="space-y-4">
                            {[
                                {
                                    q: icedDrink.faq.q1,
                                    a: icedDrink.faq.a1
                                },
                                {
                                    q: icedDrink.faq.q2,
                                    a: icedDrink.faq.a2
                                },
                                {
                                    q: icedDrink.faq.q3,
                                    a: icedDrink.faq.a3
                                },
                                {
                                    q: icedDrink.faq.q4,
                                    a: icedDrink.faq.a4
                                },
                                {
                                    q: icedDrink.faq.q5,
                                    a: icedDrink.faq.a5
                                }
                            ].map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-white rounded-2xl border border-blue-100 px-6 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-heartopia-pink-dark py-5 hover:no-underline">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                                        {renderTextWithLinks(faq.a)}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>

                    {/* Related Guides */}
                    <section className="bg-gradient-to-br from-heartopia-cream to-white rounded-3xl p-8 border border-orange-100">
                        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">{icedDrink.relatedTitle}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link
                                href={`/${locale}/guides/recipes/frosted-pancake`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {t.navbar.guideFrostedPancake}
                                </span>
                            </Link>
                            <Link
                                href={`/${locale}/guides/heartopia-recipes-cooking-guide`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {t.navbar.guideRecipesAll}
                                </span>
                            </Link>
                            <Link
                                href={`/${locale}/events/onsen-egg-all-locations`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {t.navbar.guideOnsenEggAll}
                                </span>
                            </Link>
                            <Link
                                href={`/${locale}/events/heartopia-aurora-weather-banquet-guide`}
                                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-heartopia-pink hover:shadow-md transition-all group"
                            >
                                <ArrowRight className="w-5 h-5 text-heartopia-pink group-hover:translate-x-1 transition-transform" />
                                <span className="font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                    {icedDrink.linkAurora}
                                </span>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <Footer t={t.footer} locale={locale} />
        </main>
    )
}
