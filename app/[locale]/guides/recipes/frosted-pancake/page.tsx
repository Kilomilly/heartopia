import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
    Utensils,
    Sparkles,
    ShoppingBag,
    ChefHat,
    Flame,
    Users,
    MapPin,
    ChevronRight,
    Home,
    HelpCircle,
    ArrowRight,
    Star,
    Snowflake,
    ShieldCheck
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
    const p = t.frostedPancake

    return {
        title: p.metaTitle,
        description: p.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/guides/recipes/frosted-pancake`,
            languages: {
                "en": "https://theheartopia.com/en/guides/recipes/frosted-pancake",
                "th": "https://theheartopia.com/th/guides/recipes/frosted-pancake",
                "pt": "https://theheartopia.com/pt/guides/recipes/frosted-pancake",
                "es": "https://theheartopia.com/es/guides/recipes/frosted-pancake",
                "x-default": "https://theheartopia.com/en/guides/recipes/frosted-pancake",
            },
        },
        openGraph: {
            title: p.metaTitle,
            description: p.metaDesc,
            url: `https://theheartopia.com/${locale}/guides/recipes/frosted-pancake`,
            siteName: "Heartopia Hub",
            images: [
                {
                    url: "/images/guides/heartopia-frosted-pancakes-dish.png",
                    width: 1200,
                    height: 1200,
                    alt: p.imgAlts.showcase,
                },
            ],
            locale: locale === "th" ? "th_TH" : (locale === "pt" ? "pt_BR" : (locale === "es" ? "es_ES" : "en_US")),
            type: "article",
        },
    }
}

export default async function FrostedPancakePage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const p = t.frostedPancake

    // JSON-LD Schema
    const recipeLd = {
        "@context": "https://schema.org",
        "@type": "Recipe",
        "name": p.heroTitle,
        "description": p.metaDesc,
        "image": "https://theheartopia.com/images/guides/heartopia-frosted-pancakes-dish.png",
        "recipeCategory": "Dessert",
        "recipeCuisine": "Heartopia Winter Event",
        "recipeIngredient": [
            "2x Wheat",
            "1x Milk",
            "1x Sugar",
            "1x Winter Berry"
        ],
        "recipeInstructions": [
            {
                "@type": "HowToStep",
                "text": p.unlock.whereDesc
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
                "name": p.faq.q1,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": p.faq.a1
                }
            },
            {
                "@type": "Question",
                "name": p.faq.q2,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": p.faq.a2
                }
            }
        ]
    }

    return (
        <main className="min-h-screen bg-[#FDFCFB]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([recipeLd, faqLd]) }}
            />
            <Navbar t={t.navbar} locale={locale} />

            {/* Breadcrumbs */}
            <nav className="pt-32 pb-6 px-4">
                <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-muted-foreground">
                    <Link href={`/${locale}`} className="hover:text-heartopia-orange transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href={`/${locale}/recipes`} className="hover:text-heartopia-orange transition-colors">
                        {t.navbar.recipes}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{p.breadcrumb}</span>
                </div>
            </nav>

            <article className="pb-24 px-4 overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12 relative">
                        <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold uppercase tracking-wider">
                            5-Star Winter Recipe
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                            {p.heroTitle}
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                            {p.heroDesc}
                        </p>

                        {/* Decorative Element */}
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-50 rounded-full blur-3xl -z-10 opacity-60" />
                    </header>

                    {/* Intro */}
                    <div className="space-y-6 text-slate-600 text-lg leading-relaxed mb-16">
                        <p>{p.intro}</p>
                        <p>{p.introSecondary}</p>
                    </div>

                    <div className="space-y-20">
                        {/* Ingredients & Ratio Section */}
                        <section id="ingredients" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                                    <Utensils className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-slate-900">{p.ingredients.title}</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-6">
                                    <p className="text-slate-600">{p.ingredients.desc}</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: p.ingredients.base, icon: Snowflake, bg: "bg-blue-50", text: "text-blue-600" },
                                            { label: p.ingredients.dairy, icon: Snowflake, bg: "bg-slate-50", text: "text-slate-600" },
                                            { label: p.ingredients.sweetener, icon: Snowflake, bg: "bg-pink-50", text: "text-pink-600" },
                                            { label: p.ingredients.twist, icon: Flame, bg: "bg-amber-50", text: "text-amber-600" }
                                        ].map((ing, i) => (
                                            <div key={i} className={`${ing.bg} p-4 rounded-2xl border border-white/50 flex flex-col gap-2`}>
                                                <ing.icon className={`w-5 h-5 ${ing.text}`} />
                                                <span className="font-bold text-sm text-slate-800">{ing.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-sky-50 p-6 rounded-3xl border border-sky-100 mt-6 shadow-sm">
                                        <h4 className="font-bold text-sky-900 mb-2 flex items-center gap-2">
                                            <Sparkles className="w-5 h-5 text-sky-500" /> {p.ingredients.banquetTitle}
                                        </h4>
                                        <p className="text-sky-800 text-sm leading-relaxed">
                                            {p.ingredients.banquetDesc}
                                        </p>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-amber-100 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                                    <Image
                                        src="/images/guides/heartopia-cooking-interface.png"
                                        alt={p.imgAlts.interface}
                                        width={500}
                                        height={500}
                                        className="relative rounded-[2rem] shadow-2xl border-4 border-white transition-transform group-hover:scale-[1.02]"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* How to Unlock Section */}
                        <section id="unlock" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                                    <ShoppingBag className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-slate-900">{p.unlock.title}</h2>
                            </div>
                            <div className="bg-slate-900 text-white rounded-[40px] p-8 md:p-12 relative overflow-hidden">
                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                            {p.unlock.desc}
                                        </p>
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                                                <Star className="w-6 h-6 text-amber-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-xl mb-2">{p.unlock.whereTitle}</h4>
                                                <p className="text-slate-400 leading-relaxed">
                                                    {p.unlock.whereDesc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-sm">
                                            <h4 className="text-amber-400 font-bold mb-4 flex items-center gap-2">
                                                <ArrowRight className="w-5 h-5" /> Quick Checklist
                                            </h4>
                                            <ul className="space-y-3 text-slate-300">
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Map: Winter Festival</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400" /> NPC: Food Vendor</li>
                                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Price: Event Currency / Gold</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Background Glow */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] -z-1" />
                            </div>
                        </section>

                        {/* Why You Need It (Benefits) */}
                        <section id="benefits" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-slate-900">{p.benefits.title}</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Snowflake className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-4 text-slate-900">{p.benefits.benefit1Title}</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {p.benefits.benefit1Desc}
                                    </p>
                                </div>
                                <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                    <div className="w-14 h-14 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <Users className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-bold text-xl mb-4 text-slate-900">{p.benefits.benefit2Title}</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {p.benefits.benefit2Desc}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Showcase Image */}
                        <div className="bg-white p-4 rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden group">
                            <Image
                                src="/images/guides/heartopia-frosted-pancakes-dish.png"
                                alt={p.imgAlts.showcase}
                                width={1200}
                                height={600}
                                className="w-full h-auto rounded-[2.5rem] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                        </div>

                        {/* Pro Tips Section */}
                        <section id="tips" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                                    <ChefHat className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-slate-900">{p.tips.title}</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-white to-amber-50/30 p-8 rounded-[32px] border border-amber-100/50 relative group">
                                    <h4 className="font-bold text-xl mb-3 text-slate-900 flex items-center gap-2">
                                        <Flame className="w-5 h-5 text-orange-500" /> {p.tips.tip1Title}
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {p.tips.tip1Desc}
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-white to-sky-50/30 p-8 rounded-[32px] border border-sky-100/50 relative group">
                                    <h4 className="font-bold text-xl mb-3 text-slate-900 flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-sky-500" /> {p.tips.tip2Title}
                                    </h4>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {p.tips.tip2Desc}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500">
                                    <HelpCircle className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-slate-900">{p.faq.title}</h2>
                            </div>

                            <div className="bg-white rounded-[40px] p-6 md:p-10 border border-slate-100 shadow-sm">
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {[1, 2].map((i) => (
                                        <AccordionItem key={i} value={`faq-${i}`} className="border-none bg-slate-50 rounded-2xl px-6 transition-all hover:bg-slate-100">
                                            <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline">
                                                {p.faq[`q${i}` as keyof typeof p.faq]}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6">
                                                {p.faq[`a${i}` as keyof typeof p.faq]}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </section>

                        {/* Internal Linking / Related */}
                        <section className="pt-20 border-t border-slate-200">
                            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-8 text-center uppercase tracking-widest">More Cooking Insights</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Link
                                    href={`/${locale}/guides/heartopia-recipes-cooking-guide`}
                                    className="group flex flex-col p-8 bg-white rounded-[40px] border border-slate-100 hover:shadow-2xl transition-all text-center"
                                >
                                    <Utensils className="w-10 h-10 mx-auto mb-4 text-heartopia-pink group-hover:scale-110 transition-transform" />
                                    <span className="font-black text-slate-900 group-hover:text-heartopia-pink transition-colors">Complete Recipes List</span>
                                </Link>

                                <Link
                                    href={`/${locale}/guides/aurora-weather-banquet`}
                                    className="group flex flex-col p-8 bg-white rounded-[40px] border border-slate-100 hover:shadow-2xl transition-all text-center"
                                >
                                    <Sparkles className="w-10 h-10 mx-auto mb-4 text-sky-400 group-hover:scale-110 transition-transform" />
                                    <span className="font-black text-slate-900 group-hover:text-sky-600 transition-colors">Aurora Weather Guide</span>
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </article >

            <Footer t={t.footer} locale={locale} />
        </main >
    )
}
