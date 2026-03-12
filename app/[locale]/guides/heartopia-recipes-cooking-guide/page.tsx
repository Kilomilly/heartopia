import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import {
    Utensils,
    Sparkles,
    ShoppingBag,
    ChefHat,
    Flame,
    Users,
    ChevronRight,
    Home,
    HelpCircle,
    ArrowRight,
    Star,
    Coffee,
    Zap,
    Fish,
    Candy,
    ShoppingBasket,
    Info,
    CheckCircle2
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
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const r = t.recipesGuide

    return {
        title: r.metaTitle,
        description: r.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/guides/heartopia-recipes-cooking-guide`,
            languages: {
                "en": "https://theheartopia.com/en/guides/heartopia-recipes-cooking-guide",
                "th": "https://theheartopia.com/th/guides/heartopia-recipes-cooking-guide",
                "pt": "https://theheartopia.com/pt/guides/heartopia-recipes-cooking-guide",
                "es": "https://theheartopia.com/es/guides/heartopia-recipes-cooking-guide",
                "x-default": "https://theheartopia.com/en/guides/heartopia-recipes-cooking-guide",
            },
        },
        openGraph: {
            title: r.metaTitle,
            description: r.metaDesc,
            url: `https://theheartopia.com/${locale}/guides/heartopia-recipes-cooking-guide`,
            siteName: "Heartopia Hub",
            images: [
                {
                    url: "/images/fish-list-banner.png",
                    width: 1200,
                    height: 630,
                    alt: "Heartopia Recipes List & Cooking Guide",
                },
            ],
            locale: locale === "th" ? "th_TH" : (locale === "pt" ? "pt_BR" : (locale === "es" ? "es_ES" : "en_US")),
            type: "article",
        },
    }
}

export default async function RecipesGuidePage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const r = t.recipesGuide

    // JSON-LD Schema
    const guideLd = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": r.heroTitle,
        "description": r.metaDesc,
        "image": "https://theheartopia.com/images/fish-list-banner.png",
        "step": [
            {
                "@type": "HowToStep",
                "text": r.howWorks.blueprintsDesc
            },
            {
                "@type": "HowToStep",
                "text": r.howWorks.qualityDesc
            }
        ],
        "author": {
            "@type": "Organization",
            "name": "Heartopia Hub Community"
        }
    }

    const faqLd = {
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

    return (
        <main className="min-h-screen bg-heartopia-cream">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([guideLd, faqLd]) }}
            />
            <Navbar t={t.navbar} locale={locale} />



            {/* Breadcrumbs */}
            <nav className="pt-32 pb-6 px-4">
                <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-muted-foreground">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href={`/${locale}/guides/fishing`} className="hover:text-heartopia-pink transition-colors">
                        Guides
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{r.breadcrumb}</span>
                </div>
            </nav>

            <article className="pb-24 px-4 overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12 relative">
                        <Badge className="bg-heartopia-pink/10 text-heartopia-pink-dark hover:bg-heartopia-pink/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold uppercase tracking-wider">
                            Global Cooking Guide 2026
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                            {r.heroTitle}
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                            {r.heroDesc}
                        </p>

                        {/* Decorative Background Blob */}
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-heartopia-pink/5 rounded-full blur-[100px] -z-10" />
                    </header>

                    {/* Intro Section */}
                    <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-16">
                        <p className="border-l-4 border-heartopia-pink pl-6 italic bg-white/40 py-4 rounded-r-2xl shadow-sm">
                            {r.intro}
                        </p>
                        <p>{r.introSecondary}</p>
                    </div>

                    <div className="space-y-24">
                        {/* Featured Winter Recipes */}
                        <section id="winter-recipes" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-500">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-slate-900">{r.winterSection.title}</h2>
                            </div>

                            <p className="text-slate-600 mb-8 leading-relaxed">
                                {r.winterSection.desc}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Frosted Pancake Card */}
                                <div className="bg-white/60 p-8 rounded-[40px] border border-white shadow-soft-pink relative group overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Flame className="w-16 h-16" />
                                    </div>
                                    <h3 className="font-bold text-2xl mb-4 text-heartopia-pink-dark flex items-center gap-2">
                                        <Utensils className="w-6 h-6" /> {r.winterSection.pancakeTitle}
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {r.winterSection.pancakeDesc}
                                    </p>
                                    <div className="space-y-3 mb-8 text-sm">
                                        <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 font-medium">
                                            {r.winterSection.pancakeIng}
                                        </div>
                                        <div className="bg-amber-50 p-3 rounded-2xl border border-amber-100 font-bold text-amber-700">
                                            {r.winterSection.pancakeBest}
                                        </div>
                                    </div>
                                    <Link
                                        href={`/${locale}/guides/recipes/frosted-pancake`}
                                        className="inline-flex items-center gap-2 text-heartopia-pink font-black hover:gap-4 transition-all"
                                    >
                                        Full Recipe Guide <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>

                                {/* Iced Latte Card */}
                                <div className="bg-white/60 p-8 rounded-[40px] border border-white shadow-soft-blue relative group overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Coffee className="w-16 h-16" />
                                    </div>
                                    <h3 className="font-bold text-2xl mb-4 text-sky-600 flex items-center gap-2">
                                        <Zap className="w-6 h-6" /> {r.winterSection.drinksTitle}
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {r.winterSection.drinksDesc}
                                    </p>
                                    <ul className="space-y-3 mb-8 text-sm">
                                        <li className="flex gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                                            <span>{r.winterSection.latte}</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                                            <span>{r.winterSection.drink}</span>
                                        </li>
                                    </ul>
                                    <p className="font-black text-sky-600 italic mb-6">
                                        {r.winterSection.drinksBenefit}
                                    </p>
                                    <Link
                                        href={`/${locale}/guides/recipes/iced-drink`}
                                        className="inline-flex items-center gap-2 text-sky-600 font-bold hover:gap-4 transition-all"
                                    >
                                        Full Recipe Guide <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </section>

                        {/* How Cooking Works Section */}
                        <section id="how-it-works" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                                    <Info className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-slate-900">{r.howWorks.title}</h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {[
                                    { icon: ShoppingBag, title: r.howWorks.blueprintsTitle, desc: r.howWorks.blueprintsDesc, color: "text-purple-600", bg: "bg-purple-50" },
                                    { icon: Star, title: r.howWorks.qualityTitle, desc: r.howWorks.qualityDesc, color: "text-amber-600", bg: "bg-amber-50" },
                                    { icon: ChefHat, title: r.howWorks.kitchenTitle, desc: r.howWorks.kitchenDesc, color: "text-rose-600", bg: "bg-rose-50" },
                                ].map((step, i) => (
                                    <div key={i} className="bg-white/40 p-8 rounded-[32px] border border-white shadow-sm hover:shadow-md transition-shadow">
                                        <div className={`w-12 h-12 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-6`}>
                                            <step.icon className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-bold text-lg mb-3 text-slate-900">{step.title}</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Permanent Categories Section */}
                        <section id="categories" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink">
                                    <Utensils className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-slate-900">{r.categories.title}</h2>
                            </div>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                {r.categories.desc}
                            </p>



                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Energy */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 font-bold text-xl text-slate-900">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                            <Zap className="w-5 h-5" />
                                        </div>
                                        {r.categories.energyTitle}
                                    </div>
                                    <div className="space-y-3">
                                        <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-sm text-slate-600">
                                            {r.categories.mushroomPie}
                                        </div>
                                        <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-sm text-slate-600">
                                            {r.categories.vegSoup}
                                        </div>
                                    </div>
                                </div>

                                {/* Fishing */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 font-bold text-xl text-slate-900">
                                        <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
                                            <Fish className="w-5 h-5" />
                                        </div>
                                        {r.categories.fishingTitle}
                                    </div>
                                    <div className="space-y-3">
                                        <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-sm text-slate-600">
                                            {r.categories.fishSoup}
                                        </div>
                                        <Link
                                            href={`/${locale}/guides/fishing`}
                                            className="block p-4 bg-sky-50 text-sky-700 rounded-2xl border border-sky-100 text-center font-bold text-xs uppercase tracking-widest hover:bg-sky-100 transition-colors"
                                        >
                                            View Fishing Guide
                                        </Link>
                                    </div>
                                </div>

                                {/* Dessert */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 font-bold text-xl text-slate-900">
                                        <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center">
                                            <Candy className="w-5 h-5" />
                                        </div>
                                        {r.categories.dessertTitle}
                                    </div>
                                    <div className="space-y-3">
                                        <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-sm text-slate-600">
                                            {r.categories.fruitTart}
                                        </div>
                                        <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-sm text-slate-600">
                                            {r.categories.cookieBox}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Efficient Cooking Tips */}
                        <section id="pro-tips" className="scroll-mt-32">
                            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">{r.tips.title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { icon: ShoppingBasket, title: r.tips.bulkTitle, desc: r.tips.bulkDesc },
                                    { icon: Sparkles, title: r.tips.dorisTitle, desc: r.tips.dorisDesc },
                                    { icon: CheckCircle2, title: r.tips.farmTitle, desc: r.tips.farmDesc },
                                ].map((tip, i) => (
                                    <div key={i} className="bg-slate-900 text-white p-8 rounded-[32px] relative overflow-hidden group">
                                        <tip.icon className="w-10 h-10 mb-6 text-heartopia-pink opacity-50 group-hover:opacity-100 transition-opacity" />
                                        <h4 className="font-bold text-xl mb-3">{tip.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {tip.desc}
                                        </p>
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                                            <Badge className="bg-white/10 text-white border-white/20">TIP #{i + 1}</Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>



                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-500">
                                    <HelpCircle className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-slate-900">{r.faq.title}</h2>
                            </div>

                            <div className="bg-white/40 rounded-[40px] p-6 md:p-10 border border-white shadow-sm">
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-white rounded-3xl px-8 transition-all hover:bg-slate-50/50">
                                            <AccordionTrigger className="text-left font-bold text-xl py-6 hover:no-underline hover:text-heartopia-pink-dark">
                                                {r.faq[`q${i}` as keyof typeof r.faq]}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-8">
                                                {r.faq[`a${i}` as keyof typeof r.faq]}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </section>

                        {/* Pillar Page Navigation */}
                        <section className="pt-20 border-t border-slate-200">
                            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-8 text-center uppercase tracking-widest">Explore More Guides</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <Link
                                    href={`/${locale}/events/onsen-egg-all-locations`}
                                    className="group flex flex-col p-8 bg-white rounded-[40px] border border-slate-100 hover:shadow-2xl hover:shadow-orange-100 transition-all text-center"
                                >
                                    <Sparkles className="w-10 h-10 mx-auto mb-4 text-orange-400 group-hover:scale-110 transition-transform" />
                                    <span className="font-black text-slate-900 group-hover:text-heartopia-pink transition-colors">Onsen Egg Tracker</span>
                                </Link>

                                <Link
                                    href={`/${locale}/guides/aurora-weather-banquet`}
                                    className="group flex flex-col p-8 bg-white rounded-[40px] border border-slate-100 hover:shadow-2xl hover:shadow-sky-100 transition-all text-center"
                                >
                                    <Zap className="w-10 h-10 mx-auto mb-4 text-sky-400 group-hover:scale-110 transition-transform" />
                                    <span className="font-black text-slate-900 group-hover:text-sky-600 transition-colors">Aurora Weather</span>
                                </Link>

                                <Link
                                    href={`/${locale}/guides/housing`}
                                    className="group flex flex-col p-8 bg-white rounded-[40px] border border-slate-100 hover:shadow-2xl hover:shadow-pink-100 transition-all text-center"
                                >
                                    <Home className="w-10 h-10 mx-auto mb-4 text-heartopia-pink-dark group-hover:scale-110 transition-transform" />
                                    <span className="font-black text-slate-900 group-hover:text-heartopia-pink-dark transition-colors">House Ideas</span>
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </article>

            <Footer t={t.footer} locale={locale} />
        </main>
    )
}
