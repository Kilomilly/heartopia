import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
    ChevronRight,
    BookOpen,
    HelpCircle,
    ArrowRight,
    Home,
    Palette,
    KeyRound,
    Layers,
    Shirt,
    Sofa,
    ImageIcon,
    DollarSign,
    Zap,
    Fish,
    Utensils,
    Award,
    Info
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

    return {
        title: t.paintingGuide.metaTitle,
        description: t.paintingGuide.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/guides/painting-tools`,
            languages: {
                "en": "https://theheartopia.com/en/guides/painting-tools",
                "th": "https://theheartopia.com/th/guides/painting-tools",
                "pt": "https://theheartopia.com/pt/guides/painting-tools",
                "es": "https://theheartopia.com/es/guides/painting-tools",
                "id": "https://theheartopia.com/id/guides/painting-tools",
                "x-default": "https://theheartopia.com/en/guides/painting-tools",
            },
        },
        openGraph: {
            title: t.paintingGuide.metaTitle,
            description: t.paintingGuide.metaDesc,
            url: `https://theheartopia.com/${locale}/guides/painting-tools`,
            siteName: "Heartopia Guide",
            images: [
                {
                    url: "/images/guides/heartopia-painting-tools.webp",
                    width: 1200,
                    height: 630,
                    alt: "Heartopia Painting Tools Guide",
                },
            ],
            locale: locale === "th" ? "th_TH" : locale === "pt" ? "pt_BR" : locale === "es" ? "es_ES" : locale === "id" ? "id_ID" : "en_US",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: t.paintingGuide.metaTitle,
            description: t.paintingGuide.metaDesc,
            images: ["/images/guides/heartopia-painting-tools.webp"],
        },
    }
}

export default async function PaintingToolsGuidePage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const g = t.paintingGuide

    const sections = Object.entries(g.sections).map(([id, title]) => ({ id, title }))

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://theheartopia.com/${locale}` },
                    { "@type": "ListItem", "position": 2, "name": "Guides", "item": `https://theheartopia.com/${locale}/guides` },
                    { "@type": "ListItem", "position": 3, "name": g.heroTitle, "item": `https://theheartopia.com/${locale}/guides/painting-tools` },
                ],
            },
            {
                "@type": "Article",
                "headline": g.metaTitle,
                "description": g.metaDesc,
                "image": "https://theheartopia.com/images/guides/heartopia-painting-tools.webp",
                "datePublished": "2026-02-13T00:00:00+08:00",
                "dateModified": "2026-02-13T00:00:00+08:00",
                "author": { "@type": "Organization", "name": "Heartopia Hub" },
                "publisher": { "@type": "Organization", "name": "Heartopia Hub", "url": "https://theheartopia.com" },
            },
            {
                "@type": "HowTo",
                "name": g.unlock.title,
                "description": g.unlock.intro,
                "image": "https://theheartopia.com/images/guides/heartopia-painting-tools.webp",
                "step": [
                    { "@type": "HowToStep", "position": 1, "name": g.unlock.quest1Title, "text": `${g.unlock.quest1Step1} ${g.unlock.quest1Step2} ${g.unlock.quest1Step3} ${g.unlock.quest1Step4}` },
                    { "@type": "HowToStep", "position": 2, "name": g.unlock.quest2Title, "text": `${g.unlock.quest2Step1} ${g.unlock.quest2Step2}` },
                ],
            },
            {
                "@type": "FAQPage",
                "mainEntity": [1, 2, 3, 4, 5, 6, 7].map((i) => ({
                    "@type": "Question",
                    "name": g.faq[`q${i}` as keyof typeof g.faq],
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": g.faq[`a${i}` as keyof typeof g.faq],
                    },
                })),
            },
        ],
    }

    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="min-h-screen bg-heartopia-cream">
            <Navbar t={t.navbar} locale={locale} />

            {/* Breadcrumbs */}
            <nav className="pt-32 pb-6 px-4">
                <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-muted-foreground">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span>{t.navbar.guides}</span>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{g.heroTitle}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero */}
                    <header className="mb-12">
                        <Badge className="bg-heartopia-pink/10 text-heartopia-pink-darker hover:bg-heartopia-pink/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold">
                            {g.badge}
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {g.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            {g.heroDesc}
                        </p>
                        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-soft-blue">
                            <Image
                                src="/images/guides/heartopia-painting-tools.webp"
                                alt="Heartopia Painting Tools Guide"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Main tutorial video */}
                        <div className="mt-8 rounded-3xl overflow-hidden shadow-soft-blue">
                            <div className="relative w-full aspect-video">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/Y1jLC-t9x5E?si=WkkmJ7RDCtMSr4ee"
                                    title="Design Your OWN Clothes & Furniture in Heartopia! | Full Tutorial"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </header>

                    {/* Quote card */}
                    <div className="glass rounded-[32px] p-8 border border-white/50 mb-12 shadow-soft-blue bg-white/60">
                        <p className="text-foreground/80 leading-relaxed italic">&ldquo;{g.quote}&rdquo;</p>
                    </div>

                    {/* TOC */}
                    <div className="mb-12">
                        <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-heartopia-pink" /> {g.tocTitle}
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {sections.map(section => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="px-4 py-2 rounded-full bg-white border border-heartopia-pink/20 text-sm hover:border-heartopia-pink hover:bg-heartopia-pink/5 transition-all text-muted-foreground hover:text-heartopia-pink-darker"
                                >
                                    {section.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-16">
                        {/* Unlock */}
                        <section id="unlock" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600">
                                    <KeyRound className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.unlock.title}</h2>
                            </div>
                            <p className="text-muted-foreground text-lg mb-6">{g.unlock.intro}</p>

                            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 mb-6 flex items-start gap-3">
                                <Info className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                                <p className="text-amber-800 text-sm">{g.unlock.req}</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Quest 1 */}
                                <div className="p-6 rounded-2xl bg-white border border-heartopia-pink/15 shadow-sm">
                                    <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                                        <span className="w-7 h-7 rounded-full bg-heartopia-pink/20 text-heartopia-pink text-sm font-bold flex items-center justify-center">1</span>
                                        {g.unlock.quest1Title}
                                    </h3>
                                    <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside mb-4">
                                        <li>{g.unlock.quest1Step1}</li>
                                        <li>{g.unlock.quest1Step2}</li>
                                        <li>{g.unlock.quest1Step3}</li>
                                        <li>{g.unlock.quest1Step4}</li>
                                    </ol>
                                    <div className="p-3 rounded-xl bg-heartopia-pink/5 border border-heartopia-pink/15 text-sm text-heartopia-pink-darker mb-3">
                                        ⚠️ {g.unlock.quest1Note}
                                    </div>
                                    <p className="text-sm font-semibold text-foreground">🎁 {g.unlock.quest1Reward}</p>
                                </div>
                                {/* Quest 2 */}
                                <div className="p-6 rounded-2xl bg-white border border-heartopia-sky/15 shadow-sm">
                                    <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                                        <span className="w-7 h-7 rounded-full bg-heartopia-sky/20 text-heartopia-sky text-sm font-bold flex items-center justify-center">2</span>
                                        {g.unlock.quest2Title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-3">{g.unlock.quest2Giver}</p>
                                    <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside mb-4">
                                        <li>{g.unlock.quest2Step1}</li>
                                        <li>{g.unlock.quest2Step2}</li>
                                    </ol>
                                    <p className="text-sm font-semibold text-foreground">🎁 {g.unlock.quest2Reward}</p>
                                </div>
                            </div>
                        </section>

                        {/* All Tools */}
                        <section id="tools" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink">
                                    <Palette className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.tools.title}</h2>
                            </div>
                            <p className="text-muted-foreground text-lg mb-6">{g.tools.intro}</p>

                            <div className="overflow-x-auto rounded-2xl border border-white bg-white/60 shadow-sm mb-6">
                                <table className="w-full text-left text-sm">
                                    <thead>
                                        <tr className="bg-white/80 border-b border-heartopia-pink/10">
                                            <th className="px-4 py-3 font-bold text-foreground">{g.tools.thTool}</th>
                                            <th className="px-4 py-3 font-bold text-foreground">{g.tools.thDoes}</th>
                                            <th className="px-4 py-3 font-bold text-foreground">{g.tools.thTip}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-heartopia-pink/5">
                                        {g.tools.toolRows.map((row: { tool: string; does: string; tip: string }, i: number) => (
                                            <tr key={i} className="hover:bg-white/60 transition-colors">
                                                <td className="px-4 py-3 font-semibold text-foreground whitespace-nowrap">{row.tool}</td>
                                                <td className="px-4 py-3 text-muted-foreground">{row.does}</td>
                                                <td className="px-4 py-3 text-heartopia-pink-darker text-xs">{row.tip}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-start gap-3">
                                <Info className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                                <p className="text-indigo-700 text-sm">{g.tools.pixelNote}</p>
                            </div>
                        </section>

                        {/* Canvas Types */}
                        <section id="canvas" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.canvas.title}</h2>
                            </div>
                            <p className="text-muted-foreground text-lg mb-6">{g.canvas.intro}</p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                {g.canvas.rows.map((row: { type: string; bestFor: string; notes: string }, i: number) => (
                                    <div key={i} className="p-5 rounded-2xl bg-white border border-heartopia-sky/15 shadow-sm">
                                        <p className="font-bold text-foreground mb-1">{row.type}</p>
                                        <p className="text-sm text-heartopia-sky-dark font-medium mb-1">{row.bestFor}</p>
                                        <p className="text-xs text-muted-foreground">{row.notes}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 rounded-2xl bg-white/60 border border-heartopia-sky/20">
                                <p className="font-semibold text-foreground text-sm mb-1">{g.canvas.sizesTitle}</p>
                                <p className="text-muted-foreground text-sm">{g.canvas.sizes}</p>
                            </div>
                        </section>

                        {/* Custom Clothes */}
                        <section id="clothing" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                    <Shirt className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.clothing.title}</h2>
                            </div>

                            <ol className="space-y-3 mb-6">
                                {[g.clothing.step1, g.clothing.step2, g.clothing.step3, g.clothing.step4, g.clothing.step5].map((step, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-heartopia-orange/20 text-heartopia-orange text-sm font-bold flex items-center justify-center">{i + 1}</span>
                                        <span className="text-muted-foreground">{step}</span>
                                    </li>
                                ))}
                            </ol>

                            <div className="p-4 rounded-2xl bg-heartopia-orange/5 border border-heartopia-orange/20 mb-4">
                                <p className="font-semibold text-foreground text-sm mb-1">{g.clothing.wearTitle}</p>
                                <p className="text-muted-foreground text-sm">{g.clothing.wear}</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                <div className="p-4 rounded-2xl bg-white border border-heartopia-orange/15 shadow-sm">
                                    <p className="font-bold text-foreground text-sm mb-2">{g.clothing.ticketTitle}</p>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        <li>✅ {g.clothing.ticketFree}</li>
                                        <li>💎 {g.clothing.ticketBuy}</li>
                                    </ul>
                                    <p className="text-xs text-heartopia-orange mt-3">{g.clothing.ticketTip}</p>
                                </div>
                            </div>
                            {/* Clothing inspiration video */}
                            <div className="rounded-3xl overflow-hidden shadow-soft-blue">
                                <div className="relative w-full aspect-video">
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/kQKLaG7LDus?si=c4j6D5RiginztEnP"
                                        title="HEARTOPIA | HOW TO CUSTOMIZE CLOTHES FT. SANRIO OUTFIT PATTERNS"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Custom Furniture */}
                        <section id="furniture" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-green/10 flex items-center justify-center text-heartopia-green">
                                    <Sofa className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.furniture.title}</h2>
                            </div>

                            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 mb-6 flex items-start gap-3">
                                <Info className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                                <p className="text-amber-800 text-sm">{g.furniture.supportedNote}</p>
                            </div>

                            <ol className="space-y-3 mb-6">
                                {[g.furniture.step1, g.furniture.step2, g.furniture.step3, g.furniture.step4, g.furniture.step5].map((step, i) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-heartopia-green/20 text-heartopia-green text-sm font-bold flex items-center justify-center">{i + 1}</span>
                                        <span className="text-muted-foreground">{step}</span>
                                    </li>
                                ))}
                            </ol>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-white border border-heartopia-green/15 shadow-sm">
                                    <p className="font-bold text-foreground text-sm mb-2">{g.furniture.inkTitle}</p>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        <li>✅ {g.furniture.inkFree}</li>
                                        <li>💎 {g.furniture.inkBuy}</li>
                                    </ul>
                                </div>
                                <div className="p-4 rounded-2xl bg-white border border-heartopia-green/15 shadow-sm">
                                    <p className="font-bold text-foreground text-sm mb-2">{g.furniture.dyeTitle}</p>
                                    <p className="text-sm text-muted-foreground">{g.furniture.dye}</p>
                                </div>
                            </div>
                        </section>

                        {/* Gallery */}
                        <section id="gallery" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
                                    <ImageIcon className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.gallery.title}</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm">
                                    <p className="font-semibold text-foreground mb-1">📂 {g.gallery.galleryAccess}</p>
                                </div>
                                <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm">
                                    <p className="text-muted-foreground text-sm mb-1">{g.gallery.galleryOrganized}</p>
                                    <p className="text-muted-foreground text-sm">{g.gallery.galleryManage}</p>
                                </div>
                                <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-sm">
                                    <p className="font-semibold text-foreground mb-1">{g.gallery.displayTitle}</p>
                                    <p className="text-muted-foreground text-sm">{g.gallery.display}</p>
                                </div>
                            </div>
                        </section>

                        {/* Costs */}
                        <section id="costs" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-600">
                                    <DollarSign className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.costs.title}</h2>
                            </div>

                            <div className="overflow-x-auto rounded-2xl border border-white bg-white/60 shadow-sm">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-white/80 border-b border-yellow-100">
                                            <th className="px-4 py-3 font-bold text-foreground">{g.costs.thItem}</th>
                                            <th className="px-4 py-3 font-bold text-foreground">{g.costs.thCost}</th>
                                            <th className="px-4 py-3 font-bold text-foreground">{g.costs.thWhere}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-yellow-50">
                                        {g.costs.rows.map((row: { item: string; cost: string; where: string }, i: number) => (
                                            <tr key={i} className="hover:bg-white/40 transition-colors">
                                                <td className="px-4 py-3 font-medium text-foreground">{row.item}</td>
                                                <td className="px-4 py-3 text-muted-foreground">{row.cost}</td>
                                                <td className="px-4 py-3 text-muted-foreground text-sm">{row.where}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Pro Tips */}
                        <section id="tips" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-green/10 flex items-center justify-center text-heartopia-green">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.tips.title}</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                {[
                                    { title: g.tips.tip1Title, body: g.tips.tip1, color: "bg-heartopia-pink/5 border-heartopia-pink/15" },
                                    { title: g.tips.tip2Title, body: g.tips.tip2, color: "bg-heartopia-sky/5 border-heartopia-sky/15" },
                                    { title: g.tips.tip3Title, body: g.tips.tip3, color: "bg-heartopia-orange/5 border-heartopia-orange/15" },
                                    { title: g.tips.tip4Title, body: g.tips.tip4, color: "bg-purple-50 border-purple-100" },
                                    { title: g.tips.tip5Title, body: g.tips.tip5, color: "bg-heartopia-green/5 border-heartopia-green/15" },
                                    { title: g.tips.tip6Title, body: g.tips.tip6, color: "bg-indigo-50 border-indigo-100" },
                                ].map((tip, i) => (
                                    <div key={i} className={`p-5 rounded-2xl border ${tip.color}`}>
                                        <p className="font-bold text-foreground mb-2">{tip.title}</p>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{tip.body}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-500">
                                    <HelpCircle className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.faq.title}</h2>
                            </div>

                            <div className="glass rounded-[32px] p-2 md:p-6 border border-white/50 bg-white/40 shadow-soft-blue">
                                <Accordion type="single" collapsible className="w-full">
                                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                                        <AccordionItem key={i} value={`faq-${i}`} className="border-none mb-2 bg-white/50 rounded-2xl px-6">
                                            <AccordionTrigger className="text-left font-bold text-base hover:no-underline hover:text-heartopia-pink-dark transition-colors py-4">
                                                {g.faq[`q${i}` as keyof typeof g.faq]}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                                                {g.faq[`a${i}` as keyof typeof g.faq]}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </section>

                        {/* Related */}
                        <section className="pt-8 border-t border-heartopia-pink/10">
                            <h2 className="text-2xl font-bold text-foreground mb-6">{g.related.title}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <Link href={`/${locale}/guides/fishing`} className="group flex items-center justify-between p-6 bg-white rounded-3xl border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                            <Fish className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-foreground">{g.related.fishing}</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
                                </Link>
                                <Link href={`/${locale}/guides/housing`} className="group flex items-center justify-between p-6 bg-white rounded-3xl border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink">
                                            <Award className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-foreground">{g.related.housing}</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
                                </Link>
                                <Link href={`/${locale}/guides/heartopia-recipes-cooking-guide`} className="group flex items-center justify-between p-6 bg-white rounded-3xl border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                            <Utensils className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-foreground">{g.related.recipes}</span>
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
        </>
    )
}
