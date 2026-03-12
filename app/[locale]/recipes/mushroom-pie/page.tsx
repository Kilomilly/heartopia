import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import {
    Utensils,
    ChevronRight,
    Search,
    Clock,
    Flame,
    BookOpen,
    HelpCircle,
    ArrowRight,
    MapPin,
    Zap,
    Home,
    Droplets,
    Wind,
    Sun,
    Leaf,
    Wheat
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
    const p = t.mushroomPie

    return {
        title: p.metaTitle,
        description: p.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/recipes/mushroom-pie`,
            languages: {
                "en": "https://theheartopia.com/en/recipes/mushroom-pie",
                "th": "https://theheartopia.com/th/recipes/mushroom-pie",
                "pt": "https://theheartopia.com/pt/recipes/mushroom-pie",
                "es": "https://theheartopia.com/es/recipes/mushroom-pie",
                "x-default": "https://theheartopia.com/en/recipes/mushroom-pie",
            },
        },
        openGraph: {
            title: p.metaTitle,
            description: p.metaDesc,
            url: `https://theheartopia.com/${locale}/recipes/mushroom-pie`,
            siteName: "Heartopia Guide",
            images: [
                {
                    url: "/images/hero-banner.webp",
                    width: 1200,
                    height: 630,
                    alt: "Mushroom Pie Recipe in Heartopia",
                },
            ],
            locale: locale === "th" ? "th_TH" : "en_US",
            type: "article",
        },
    }
}

export default async function MushroomPiePage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const p = t.mushroomPie

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Recipe",
        "name": p.heroTitle,
        "image": "https://theheartopia.com/images/hero-banner.webp",
        "description": p.metaDesc,
        "recipeIngredient": ["Mushroom", "Dough"],
        "recipeInstructions": [
            { "@type": "HowToStep", "text": p.steps.step1 },
            { "@type": "HowToStep", "text": p.steps.step2 },
            { "@type": "HowToStep", "text": p.steps.step3 },
            { "@type": "HowToStep", "text": p.steps.step4 }
        ],
        "recipeCategory": "Cooking",
        "recipeCuisine": "Heartopia"
    }

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [1, 2, 3, 4].map((i) => ({
            "@type": "Question",
            "name": p.faq[`q${i}` as keyof typeof p.faq],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": p.faq[`a${i}` as keyof typeof p.faq]
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
                    <span className="text-muted-foreground">{t.navbar.recipes}</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{p.heroTitle}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <header className="mb-12">
                        <Badge className="bg-heartopia-orange/10 text-heartopia-orange hover:bg-heartopia-orange/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold uppercase tracking-wider">
                            Recipe Guide
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {p.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {p.heroDesc}
                        </p>
                    </header>

                    {/* Quick Box Summary */}
                    <div className="glass rounded-[32px] p-6 md:p-8 border border-white/50 mb-12 bg-white/60 shadow-soft-orange flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-24 h-24 rounded-3xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange shrink-0">
                            <Utensils className="w-12 h-12" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-foreground mb-2">{p.summary.title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 text-muted-foreground">
                                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-heartopia-orange" /> {p.summary.dish}</div>
                                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-heartopia-orange" /> {p.summary.game}</div>
                                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-heartopia-orange" /> {p.summary.ingredients}</div>
                                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-heartopia-orange" /> {p.summary.use}</div>
                            </div>
                        </div>
                    </div>

                    {/* Intro */}
                    <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-16">
                        <p>{p.intro}</p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-16">
                        {/* What Is */}
                        <section id="what-is" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{p.whatIs.title}</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                <p>{p.whatIs.p1}</p>
                                <p>{p.whatIs.p2}</p>
                            </div>
                        </section>

                        {/* Ingredients */}
                        <section id="ingredients" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink">
                                    <Leaf className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{p.ingredients.title}</h2>
                            </div>
                            <div className="space-y-8">
                                <p className="text-muted-foreground text-lg leading-relaxed">{p.ingredients.p1}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white/60 p-8 rounded-[32px] border border-white shadow-sm hover:shadow-md transition-shadow">
                                        <h3 className="font-bold text-xl mb-4 text-foreground flex items-center gap-2">
                                            <div className="w-2 h-6 bg-heartopia-sky rounded-full" /> {p.ingredients.sourceTitle}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">{p.ingredients.sourceText}</p>
                                    </div>
                                    <div className="bg-white/60 p-8 rounded-[32px] border border-white shadow-sm hover:shadow-md transition-shadow">
                                        <h3 className="font-bold text-xl mb-4 text-foreground flex items-center gap-2">
                                            <div className="w-2 h-6 bg-heartopia-orange rounded-full" /> {p.ingredients.doughTitle}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">{p.ingredients.doughText}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    For general resource gathering, see the <Link href={`/${locale}`} className="text-heartopia-pink hover:underline">Resources and Materials Guide</Link>.
                                </p>
                            </div>
                        </section>

                        {/* Steps */}
                        <section id="steps" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                    <Flame className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{p.steps.title}</h2>
                            </div>
                            <div className="space-y-6">
                                <p className="text-muted-foreground text-lg leading-relaxed">{p.steps.p1}</p>
                                <div className="bg-white/80 p-8 rounded-[40px] border border-heartopia-orange/20 shadow-soft-orange">
                                    <div className="space-y-6">
                                        {[p.steps.step1, p.steps.step2, p.steps.step3, p.steps.step4].map((step, i) => (
                                            <div key={i} className="flex gap-6 items-start">
                                                <div className="w-10 h-10 rounded-full bg-heartopia-orange text-white flex items-center justify-center shrink-0 font-bold text-lg shadow-lg">
                                                    {i + 1}
                                                </div>
                                                <div className="pt-1.5">
                                                    <p className="text-xl font-medium text-foreground">{step}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-lg leading-relaxed italic">{p.steps.p2}</p>
                            </div>
                        </section>

                        {/* Uses */}
                        <section id="uses" className="scroll-mt-32">
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">{p.uses.title}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white/60 p-8 rounded-[32px] border border-white shadow-sm text-center">
                                    <div className="w-12 h-12 rounded-2xl bg-heartopia-sky/10 text-heartopia-sky flex items-center justify-center mx-auto mb-4">
                                        <Utensils className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-foreground">{p.uses.item1Title}</h3>
                                    <p className="text-muted-foreground text-sm">{p.uses.item1Desc}</p>
                                </div>
                                <div className="bg-white/60 p-8 rounded-[32px] border border-white shadow-sm text-center">
                                    <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/10 text-heartopia-pink flex items-center justify-center mx-auto mb-4">
                                        <Badge className="w-6 h-6 border-none p-0 flex items-center justify-center">!</Badge>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-foreground">{p.uses.item2Title}</h3>
                                    <p className="text-muted-foreground text-sm">{p.uses.item2Desc}</p>
                                </div>
                                <div className="bg-white/60 p-8 rounded-[32px] border border-white shadow-sm text-center">
                                    <div className="w-12 h-12 rounded-2xl bg-heartopia-orange/10 text-heartopia-orange flex items-center justify-center mx-auto mb-4">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 text-foreground">{p.uses.item3Title}</h3>
                                    <p className="text-muted-foreground text-sm">{p.uses.item3Desc}</p>
                                </div>
                            </div>
                            <div className="mt-8 text-center" dangerouslySetInnerHTML={{ __html: p.uses.guideLink }} />
                        </section>

                        {/* Tips */}
                        <section id="tips" className="scroll-mt-32">
                            <div className="bg-heartopia-pink/5 rounded-[40px] p-8 md:p-12 border border-heartopia-pink/10">
                                <h2 className="font-serif text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                                    <Zap className="w-8 h-8 text-heartopia-pink" /> {p.tips.title}
                                </h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    {[p.tips.tip1, p.tips.tip2, p.tips.tip3].map((tip, i) => (
                                        <li key={i} className="flex gap-4 items-start bg-white/60 p-6 rounded-3xl border border-white">
                                            <div className="w-2 h-2 rounded-full bg-heartopia-pink mt-2.5 shrink-0" />
                                            <p className="text-muted-foreground font-medium">{tip}</p>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-center text-muted-foreground italic text-lg opacity-80">
                                    &ldquo;{p.tips.footer}&rdquo;
                                </p>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-500">
                                    <HelpCircle className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{p.faq.title}</h2>
                            </div>

                            <div className="glass rounded-[32px] p-2 md:p-6 border border-white/50 bg-white/40 shadow-soft-blue">
                                <Accordion type="single" collapsible className="w-full">
                                    {[1, 2, 3, 4].map((i) => (
                                        <AccordionItem key={i} value={`faq-${i}`} className="border-none mb-2 bg-white/50 rounded-2xl px-6">
                                            <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-heartopia-pink-dark transition-colors py-4">
                                                {p.faq[`q${i}` as keyof typeof p.faq]}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                                                {p.faq[`a${i}` as keyof typeof p.faq]}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </section>

                        {/* Related Guides */}
                        <section className="pt-8 mb-12 border-t border-heartopia-pink/10">
                            <h2 className="text-2xl font-bold text-foreground mb-6">Continue Your Journey</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Link href={`/${locale}/guides/fishing`} className="group flex items-center justify-between p-6 bg-white rounded-[32px] border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                            <Flame className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-foreground">Fishing Guide in Heartopia</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
                                </Link>
                                <Link href={`/${locale}/guides/fish-locations`} className="group flex items-center justify-between p-6 bg-white rounded-[32px] border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-foreground">Fish Locations Guide</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
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
