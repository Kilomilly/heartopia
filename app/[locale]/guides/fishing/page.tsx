import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import {
    Fish,
    ChevronRight,
    Clock,
    Waves,
    BookOpen,
    HelpCircle,
    ArrowRight,
    MapPin,
    Zap,
    Utensils,
    Home,
    KeyRound,
    Rainbow,
    Award
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
        title: t.fishingGuide.metaTitle,
        description: t.fishingGuide.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/guides/fishing`,
            languages: {
                "en": "https://theheartopia.com/en/guides/fishing",
                "th": "https://theheartopia.com/th/guides/fishing",
                "pt": "https://theheartopia.com/pt/guides/fishing",
                "es": "https://theheartopia.com/es/guides/fishing",
                "id": "https://theheartopia.com/id/guides/fishing",
                "x-default": "https://theheartopia.com/en/guides/fishing",
            },
        },
    }
}

export default async function FishingGuidePage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
    const g = t.fishingGuide

    const sections = Object.entries(g.sections).map(([id, title]) => ({ id, title }))

    return (
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
                    {/* Hero Header */}
                    <header className="mb-12">
                        <Badge className="bg-heartopia-sky/10 text-heartopia-sky hover:bg-heartopia-sky/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold">
                            Complete Guide
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {g.heroTitle}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {g.heroDesc}
                        </p>
                    </header>

                    {/* Quick Info Card */}
                    <div className="glass rounded-[32px] p-8 border border-white/50 mb-12 shadow-soft-blue bg-white/60">
                        <p className="text-foreground/80 leading-relaxed italic">
                            "{g.quote}"
                        </p>
                    </div>

                    {/* Table of Contents */}
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

                    {/* Content Sections */}
                    <div className="space-y-16">
                        {"gettingStarted" in g && g.gettingStarted && (
                            <section id="getting-started" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600">
                                        <KeyRound className="w-6 h-6" />
                                    </div>
                                    <h2 className="font-serif text-3xl font-bold text-foreground">{g.gettingStarted.title}</h2>
                                </div>
                                <p className="text-muted-foreground text-lg mb-4">{g.gettingStarted.unlockIntro}</p>
                                <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
                                    <li>{g.gettingStarted.unlock1}</li>
                                    <li>{g.gettingStarted.unlock2}</li>
                                    <li>{g.gettingStarted.unlock3}</li>
                                </ol>
                                <h3 className="font-bold text-lg text-foreground mb-2">{g.gettingStarted.howToTitle}</h3>
                                <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-6">
                                    <li>{g.gettingStarted.step1}</li>
                                    <li>{g.gettingStarted.step2}</li>
                                    <li>{g.gettingStarted.step3}</li>
                                    <li>{g.gettingStarted.step4}</li>
                                </ol>
                                <div className="rounded-2xl border border-heartopia-pink/20 bg-white/60 p-4">
                                    <h4 className="font-bold text-foreground mb-2">{g.gettingStarted.lineTensionTitle}</h4>
                                    <ul className="space-y-1 text-muted-foreground text-sm">
                                        <li><span className="inline-block w-3 h-3 rounded-full bg-gray-200 border border-gray-300 mr-2 align-middle" /> {g.gettingStarted.lineWhite}</li>
                                        <li><span className="inline-block w-3 h-3 rounded-full bg-yellow-400 mr-2 align-middle" /> {g.gettingStarted.lineYellow}</li>
                                        <li><span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2 align-middle" /> <span className="font-semibold text-red-600">{g.gettingStarted.lineRed}</span></li>
                                    </ul>
                                </div>
                            </section>
                        )}

                        {/* How Fishing Works */}
                        <section id="what-is-fishing" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-pink/10 flex items-center justify-center text-heartopia-pink">
                                    <Waves className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.whatIsFishing.title}</h2>
                            </div>
                            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                                <p>{g.whatIsFishing.p1}</p>
                                <p>{g.whatIsFishing.p2}</p>
                                {"p3" in g.whatIsFishing && g.whatIsFishing.p3 && <p>{g.whatIsFishing.p3}</p>}
                            </div>
                        </section>

                        {/* All Fishing Locations */}
                        <section id="locations" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.locations.title}</h2>
                            </div>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                {g.locations.desc}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="p-6 rounded-3xl bg-white border border-heartopia-sky/20 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-xl mb-3 text-foreground flex items-center gap-2">
                                        <div className="w-2 h-6 bg-heartopia-sky rounded-full" /> {g.locations.lake.title}
                                    </h3>
                                    <p className="text-muted-foreground">{g.locations.lake.desc}</p>
                                </div>
                                <div className="p-6 rounded-3xl bg-white border border-heartopia-sky/20 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-xl mb-3 text-foreground flex items-center gap-2">
                                        <div className="w-2 h-6 bg-heartopia-pink rounded-full" /> {g.locations.river.title}
                                    </h3>
                                    <p className="text-muted-foreground">{g.locations.river.desc}</p>
                                </div>
                                <div className="p-6 rounded-3xl bg-white border border-heartopia-sky/20 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-xl mb-3 text-foreground flex items-center gap-2">
                                        <div className="w-2 h-6 bg-heartopia-orange rounded-full" /> {g.locations.ocean.title}
                                    </h3>
                                    <p className="text-muted-foreground">{g.locations.ocean.desc}</p>
                                </div>
                                <div className="p-6 rounded-3xl bg-white border border-heartopia-sky/20 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-xl mb-3 text-foreground flex items-center gap-2">
                                        <div className="w-2 h-6 bg-heartopia-green rounded-full" /> {g.locations.hidden.title}
                                    </h3>
                                    <p className="text-muted-foreground">{g.locations.hidden.desc}</p>
                                </div>
                            </div>

                            {"keySpotsRows" in g && Array.isArray(g.keySpotsRows) && g.keySpotsRows.length > 0 && "keySpotsTitle" in g.locations && (
                                <div className="mb-8">
                                    <h3 className="font-bold text-lg text-foreground mb-3">{g.locations.keySpotsTitle}</h3>
                                    <div className="overflow-x-auto rounded-2xl border border-heartopia-sky/20 bg-white/60">
                                        <table className="w-full text-left text-sm">
                                            <thead>
                                                <tr className="border-b border-heartopia-sky/20 bg-white/80">
                                                    <th className="px-4 py-3 font-bold text-foreground">{g.locations.thSpot}</th>
                                                    <th className="px-4 py-3 font-bold text-foreground">{g.locations.thType}</th>
                                                    <th className="px-4 py-3 font-bold text-foreground">{g.locations.thNotable}</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-heartopia-sky/10">
                                                {g.keySpotsRows.map((row: { spot: string; type: string; notable: string }, i: number) => (
                                                    <tr key={i}><td className="px-4 py-2 font-medium">{row.spot}</td><td className="px-4 py-2 text-muted-foreground">{row.type}</td><td className="px-4 py-2">{row.notable}</td></tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            <Link href={`/${locale}/guides/fish-locations`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-heartopia-sky/10 text-heartopia-sky-dark font-bold hover:bg-heartopia-sky/20 transition-all border border-heartopia-sky/20">
                                {g.locations.cta} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </section>

                        {"rainbowRare" in g && g.rainbowRare && "rainbowRows" in g && Array.isArray(g.rainbowRows) && (
                            <section id="rainbow-rare" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
                                        <Rainbow className="w-6 h-6" />
                                    </div>
                                    <h2 className="font-serif text-3xl font-bold text-foreground">{g.rainbowRare.title}</h2>
                                </div>
                                <p className="text-muted-foreground text-lg mb-4">{g.rainbowRare.desc}</p>
                                <h3 className="font-bold text-foreground mb-3">{g.rainbowRare.tableTitle}</h3>
                                <div className="overflow-x-auto rounded-2xl border border-white bg-white/60 shadow-sm mb-4">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-white/80 border-b border-purple-100">
                                                <th className="px-4 py-3 font-bold text-foreground">{g.rainbowRare.thFish}</th>
                                                <th className="px-4 py-3 font-bold text-foreground">{g.rainbowRare.thLocation}</th>
                                                <th className="px-4 py-3 font-bold text-foreground">{g.rainbowRare.thLevel}</th>
                                                <th className="px-4 py-3 font-bold text-foreground">{g.rainbowRare.thTime}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-purple-50">
                                            {g.rainbowRows.map((row: { fish: string; location: string; level: string; time: string }, i: number) => (
                                                <tr key={i}><td className="px-4 py-3 font-medium">{row.fish}</td><td className="px-4 py-3 text-muted-foreground">{row.location}</td><td className="px-4 py-3">{row.level}</td><td className="px-4 py-3">{row.time}</td></tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="font-semibold text-foreground mb-2">{g.rainbowRare.topPriority}</p>
                                <p className="text-muted-foreground text-sm">{g.rainbowRare.rareNote}</p>
                            </section>
                        )}

                        {"baitAndTools" in g && g.baitAndTools && (
                            <section id="bait-and-tools" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 text-xl">🪱</span>
                                    <h2 className="font-serif text-3xl font-bold text-foreground">{g.baitAndTools.title}</h2>
                                </div>
                                <p className="text-muted-foreground text-lg mb-4">{g.baitAndTools.intro}</p>
                                <ul className="space-y-2 text-muted-foreground mb-4">
                                    <li><strong className="text-foreground">Basic:</strong> {g.baitAndTools.basic}</li>
                                    <li><strong className="text-foreground">Premium:</strong> {g.baitAndTools.premium}</li>
                                    <li><strong className="text-foreground">From Bill:</strong> {g.baitAndTools.specialized}</li>
                                    <li><strong className="text-foreground">Legendary:</strong> {g.baitAndTools.legendary}</li>
                                </ul>
                                <h3 className="font-bold text-foreground mb-2">{g.baitAndTools.mermaidTitle}</h3>
                                <p className="text-muted-foreground text-sm">{g.baitAndTools.mermaidDesc}</p>
                            </section>
                        )}

                        {/* Complete Fish List */}
                        <section id="fish-list" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                    <Fish className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.fishList.title}</h2>
                            </div>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                {g.fishList.desc}
                            </p>

                            <div className="overflow-hidden rounded-3xl border border-white bg-white/40 shadow-sm mb-8">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-white/80 border-b border-heartopia-orange/10">
                                                <th className="px-6 py-4 font-bold text-foreground">{g.fishList.thName}</th>
                                                <th className="px-6 py-4 font-bold text-foreground">{g.fishList.thLoc}</th>
                                                <th className="px-6 py-4 font-bold text-foreground">{g.fishList.thTime}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-heartopia-orange/5">
                                            {"rows" in g.fishList && Array.isArray(g.fishList.rows) && g.fishList.rows.map((fish: { name: string; loc: string; time: string }, i: number) => (
                                                <tr key={i} className="hover:bg-white/40 transition-colors">
                                                    <td className="px-6 py-4 font-medium text-foreground">{fish.name}</td>
                                                    <td className="px-6 py-4 text-muted-foreground">{fish.loc}</td>
                                                    <td className="px-6 py-4">
                                                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${fish.time === 'Night' ? 'bg-indigo-100 text-indigo-600' : fish.time === 'Day' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
                                                            {fish.time === 'Night' && <Clock className="w-3 h-3" />}
                                                            {fish.time}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <Link href={`/${locale}/guides/fish`} className="inline-flex items-center gap-2 text-heartopia-pink-darker font-bold hover:gap-3 transition-all">
                                {g.fishList.cta} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </section>

                        {/* Efficiency Tips */}
                        <section id="tips" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-heartopia-green/10 flex items-center justify-center text-heartopia-green">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h2 className="font-serif text-3xl font-bold text-foreground">{g.tips.title}</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-heartopia-pink/20 flex items-center justify-center text-heartopia-pink font-bold">1</div>
                                        <div>
                                            <p className="text-muted-foreground">{g.tips.tip1}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-heartopia-sky/20 flex items-center justify-center text-heartopia-sky font-bold">2</div>
                                        <div>
                                            <p className="text-muted-foreground">{g.tips.tip2}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-heartopia-orange/20 flex items-center justify-center text-heartopia-orange font-bold">3</div>
                                        <div>
                                            <p className="text-muted-foreground">{g.tips.tip3}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-heartopia-green/20 flex items-center justify-center text-heartopia-green font-bold">4</div>
                                        <div>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{g.tips.tip4}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-heartopia-cream/50 border border-heartopia-sky/30 flex items-center justify-center text-heartopia-sky font-bold text-xl">✨</div>
                                        <div>
                                            <p className="text-muted-foreground italic">"{g.tips.quote}"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {"levelRewards" in g && g.levelRewards && "levelRows" in g && Array.isArray(g.levelRows) && (
                            <section id="level-rewards" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <h2 className="font-serif text-3xl font-bold text-foreground">{g.levelRewards.title}</h2>
                                </div>
                                <p className="text-muted-foreground text-lg mb-6">{g.levelRewards.desc}</p>
                                <div className="overflow-x-auto rounded-2xl border border-white bg-white/60 shadow-sm mb-4">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-white/80 border-b border-indigo-100">
                                                <th className="px-4 py-3 font-bold text-foreground">{g.levelRewards.thLevel}</th>
                                                <th className="px-4 py-3 font-bold text-foreground">{g.levelRewards.thUnlocks}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-indigo-50">
                                            {g.levelRows.map((row: { level: string; text: string }, i: number) => (
                                                <tr key={i}><td className="px-4 py-3 font-bold">{row.level}</td><td className="px-4 py-3 text-muted-foreground">{row.text}</td></tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-foreground font-medium text-sm">{g.levelRewards.level10Note}</p>
                            </section>
                        )}

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
                                    {[1, 2, 3, 4].map((i) => (
                                        <AccordionItem key={i} value={`faq-${i}`} className="border-none mb-2 bg-white/50 rounded-2xl px-6">
                                            <AccordionTrigger className="text-left font-bold text-lg hover:no-underline hover:text-heartopia-pink-dark transition-colors py-4">
                                                {g.faq[`q${i}` as keyof typeof g.faq]}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                                                {g.faq[`a${i}` as keyof typeof g.faq]}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </section>

                        {/* Related Guides */}
                        <section className="pt-8 mb-12 border-t border-heartopia-pink/10">
                            <h2 className="text-2xl font-bold text-foreground mb-6">{"related" in g && g.related ? g.related.title : "Related Heartopia Guides"}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <Link href={`/${locale}/guides/fish-locations`} className="group flex items-center justify-between p-6 bg-white rounded-3xl border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-foreground">{"related" in g && g.related && g.related.fishLocations ? g.related.fishLocations : "Fish Locations Guide"}</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
                                </Link>
                                <Link href={`/${locale}/guides/fish`} className="group flex items-center justify-between p-6 bg-white rounded-3xl border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                            <Fish className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-foreground">{"related" in g && g.related && g.related.fishList ? g.related.fishList : "All fish list"}</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink transition-colors" />
                                </Link>
                                <Link href={`/${locale}/recipes/mushroom-pie`} className="group flex items-center justify-between p-6 bg-white rounded-3xl border border-heartopia-pink/10 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-heartopia-orange/10 flex items-center justify-center text-heartopia-orange">
                                            <Utensils className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-foreground">{"related" in g && g.related && g.related.mushroomPie ? g.related.mushroomPie : "Mushroom Pie Recipe"}</span>
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
