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
    ChevronRight,
    Home,
    HelpCircle,
    Star,
    Coffee,
    Zap,
    Candy,
    BookOpen,
} from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Navbar } from "@/components/heartopia/navbar"
import { Footer } from "@/components/heartopia/footer"

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const r = t.recipesIndex

    return {
        title: r.metaTitle,
        description: r.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/guides/recipes`,
            languages: {
                "en": "https://theheartopia.com/en/guides/recipes",
                "th": "https://theheartopia.com/th/guides/recipes",
                "pt": "https://theheartopia.com/pt/guides/recipes",
                "es": "https://theheartopia.com/es/guides/recipes",
                "x-default": "https://theheartopia.com/en/guides/recipes",
            },
        },
        openGraph: {
            title: r.metaTitle,
            description: r.metaDesc,
            url: `https://theheartopia.com/${locale}/guides/recipes`,
            siteName: "Heartopia Hub",
            images: [
                {
                    url: "/images/guides/heartopia-cooking-interface.png",
                    width: 1200,
                    height: 630,
                    alt: "Heartopia Recipe List Directory",
                },
            ],
            locale: locale === "th" ? "th_TH" : (locale === "pt" ? "pt_BR" : (locale === "es" ? "es_ES" : "en_US")),
            type: "article",
        },
    }
}

export default async function RecipesIndexPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es")
    const r = t.recipesIndex

    // JSON-LD Schema
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
            }
        ]
    }

    return (
        <main className="min-h-screen bg-[#FEF9F3]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
            <Navbar t={t.navbar} locale={locale} />

            {/* Breadcrumbs */}
            <nav className="pt-32 pb-6 px-4">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-muted-foreground font-medium">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-foreground">{r.breadcrumb}</span>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-16 md:py-20 px-4 overflow-hidden">
                {/* Floating decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-[10%] animate-float-slow"><Star className="w-8 h-8 text-heartopia-orange/40 fill-heartopia-orange/20" /></div>
                    <div className="absolute top-32 right-[15%] animate-float"><Sparkles className="w-6 h-6 text-heartopia-pink/50" /></div>
                    <div className="absolute bottom-32 left-[8%] animate-float-slow"><Star className="w-5 h-5 text-heartopia-sky/60 fill-heartopia-sky/30" /></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <header className="text-center relative">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-heartopia-pink/10 mb-6 text-heartopia-pink-darker text-sm font-semibold">
                            <Utensils className="w-4 h-4" />
                            <span>Recipe Directory</span>
                        </div>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {r.heroTitle}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-medium">
                            {r.heroDesc}
                        </p>

                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-heartopia-pink/10 to-transparent rounded-full blur-[120px] -z-10" />
                    </header>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 md:py-16 px-4 bg-[#FEF9F3]">
                <div className="max-w-7xl mx-auto">
                    {/* Quick Link Box */}
                    <Link
                        href={`/${locale}/guides/heartopia-recipes-cooking-guide`}
                        className="group flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 bg-white/60 backdrop-blur-sm rounded-[40px] border border-white hover:bg-white transition-all hover:shadow-lg hover:-translate-y-1 mb-16"
                    >
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-300 to-orange-300 flex items-center justify-center text-white shadow-lg shadow-amber-200 group-hover:scale-110 transition-transform">
                            <BookOpen className="w-7 h-7" />
                        </div>
                        <div className="text-center md:text-left flex-1">
                            <h4 className="font-bold text-lg mb-2 group-hover:text-heartopia-pink transition-colors">{r.linkBoxTitle}</h4>
                            <p className="text-muted-foreground leading-relaxed">{r.linkBoxLink}</p>
                        </div>
                        <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-heartopia-pink group-hover:translate-x-1 transition-all" />
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                        {/* Sections Left Column */}
                        <div className="space-y-16">
                            {/* Winter Specials */}
                            <section>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">{r.winterSection.title}</h2>
                                </div>
                                <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
                                    {r.winterSection.desc}
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { link: `/${locale}/guides/recipes/frosted-pancake`, text: r.winterSection.pancake, icon: Flame, iconColor: "text-orange-500", iconBg: "bg-orange-50" },
                                        { link: `/${locale}/guides/recipes/iced-drink`, text: r.winterSection.drinks, icon: Coffee, iconColor: "text-sky-500", iconBg: "bg-sky-50" },
                                        { link: `/${locale}/events/onsen-egg-all-locations`, text: r.winterSection.eggs, icon: Sparkles, iconColor: "text-amber-500", iconBg: "bg-amber-50" }
                                    ].map((item, i) => (
                                        <Link
                                            key={i}
                                            href={item.link}
                                            className="group flex items-center gap-4 p-5 md:p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-white hover:bg-white transition-all hover:shadow-lg hover:-translate-y-1"
                                        >
                                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                                <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.iconColor}`} />
                                            </div>
                                            <span className="font-bold text-foreground leading-tight flex-1 group-hover:text-heartopia-pink transition-colors">{item.text}</span>
                                            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* Daily Boosters */}
                            <section>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">{r.staminaSection.title}</h2>
                                </div>
                                <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
                                    {r.staminaSection.desc}
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { text: r.staminaSection.pie, icon: Utensils, color: "text-blue-500", bg: "bg-blue-50" },
                                        { text: r.staminaSection.soup, icon: ChefHat, color: "text-green-500", bg: "bg-green-50" },
                                        { text: r.staminaSection.tart, icon: Candy, color: "text-pink-500", bg: "bg-pink-50" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-5 md:p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-white group hover:bg-white transition-all">
                                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl ${item.bg} flex items-center justify-center shrink-0`}>
                                                <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.color}`} />
                                            </div>
                                            <span className="font-bold text-foreground">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sections Right Column */}
                        <div className="space-y-16">
                            {/* Expert Tips */}
                            <section className="bg-slate-900 rounded-[40px] p-8 md:p-10 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform">
                                    <ChefHat className="w-48 h-48 md:w-64 md:h-64" />
                                </div>

                                <div className="flex items-center gap-4 mb-10 relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                                        <Star className="w-6 h-6" />
                                    </div>
                                    <h2 className="font-serif text-2xl md:text-3xl font-bold">{r.expertTips.title}</h2>
                                </div>

                                <div className="space-y-8 relative z-10">
                                    <div className="relative pl-6 border-l-2 border-white/10 hover:border-heartopia-pink transition-colors">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-heartopia-pink" />
                                        <h4 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-3">
                                            <ShoppingBag className="w-5 h-5 text-heartopia-pink" />
                                            {r.expertTips.blueprints}
                                        </h4>
                                        <p className="text-slate-400 font-medium leading-relaxed text-sm md:text-base">
                                            {r.expertTips.blueprintsDesc}
                                        </p>
                                    </div>

                                    <div className="relative pl-6 border-l-2 border-white/10 hover:border-heartopia-pink transition-colors">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-heartopia-pink" />
                                        <h4 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-3">
                                            <Star className="w-5 h-5 text-amber-500" />
                                            {r.expertTips.quality}
                                        </h4>
                                        <p className="text-slate-400 font-medium leading-relaxed text-sm md:text-base">
                                            {r.expertTips.qualityDesc}
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* FAQ */}
                            <section>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                        <HelpCircle className="w-6 h-6" />
                                    </div>
                                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">{r.faq.title}</h2>
                                </div>

                                <div className="space-y-4">
                                    <Accordion type="single" collapsible className="w-full space-y-4">
                                        <AccordionItem value="faq-1" className="border-none bg-white/50 rounded-2xl px-4 transition-all duration-300 hover:bg-white/80">
                                            <AccordionTrigger className="text-left text-foreground/90 font-semibold hover:text-heartopia-pink-darker py-4 text-base md:text-lg hover:no-underline">
                                                {r.faq.q1}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                                                {r.faq.a1}
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="faq-2" className="border-none bg-white/50 rounded-2xl px-4 transition-all duration-300 hover:bg-white/80">
                                            <AccordionTrigger className="text-left text-foreground/90 font-semibold hover:text-heartopia-pink-darker py-4 text-base md:text-lg hover:no-underline">
                                                {r.faq.q2}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                                                {r.faq.a2}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            <Footer t={t.footer} locale={locale} />
        </main>
    )
}
