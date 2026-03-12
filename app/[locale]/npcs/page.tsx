import { Metadata } from "next"
import { getDictionary } from "@/lib/dictionary"
import Link from "next/link"
import { User, MapPin, Clock, ShoppingBag, ChevronRight, Sparkles, Home } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import Script from "next/script"
import { Navbar } from "@/components/heartopia/navbar"
import { Footer } from "@/components/heartopia/footer"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params
    const dict = await getDictionary(locale)
    const d = dict.npcsIndex

    return {
        title: d.metaTitle,
        description: d.metaDesc,
        openGraph: {
            title: d.metaTitle,
            description: d.metaDesc,
            url: `https://theheartopia.com/${locale}/npcs`,
            siteName: "Heartopia",
            locale: locale,
            type: "website",
        },
        alternates: {
            canonical: `https://theheartopia.com/${locale}/npcs`,
            languages: {
                'en': 'https://theheartopia.com/en/npcs',
                'es': 'https://theheartopia.com/es/npcs',
                'th': 'https://theheartopia.com/th/npcs',
                'pt': 'https://theheartopia.com/pt/npcs',
                'x-default': 'https://theheartopia.com/en/npcs',
            },
        },
    }
}

export default async function NPCsIndexPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    const dict = await getDictionary(locale)
    const d = dict.npcsIndex

    const npcs = [
        {
            id: "doris",
            name: "Doris",
            role: d.npcs.doris.role,
            location: d.npcs.doris.location,
            availability: d.npcs.doris.availability,
            specialty: d.npcs.doris.specialty,
            href: `/${locale}/where-is-doris`,
            icon: "🌧️",
            color: "from-blue-50 to-sky-50",
            borderColor: "border-blue-100",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-600"
        },
        {
            id: "kapil",
            name: "Kapil",
            role: d.npcs.kapil.role,
            location: d.npcs.kapil.location,
            availability: d.npcs.kapil.availability,
            specialty: d.npcs.kapil.specialty,
            href: `/${locale}/guides/heartopia-kapil-guide`,
            icon: "🎸",
            color: "from-orange-50 to-red-50",
            borderColor: "border-orange-100",
            iconBg: "bg-orange-500/10",
            iconColor: "text-orange-600"
        },
        // More NPCs can be added in the future
    ]

    const breadcrumbItems = [
        { label: dict.navbar.home, href: `/${locale}` },
        { label: dict.navbar.npcs, href: `/${locale}/npcs` },
    ]

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": d.metaTitle,
        "description": d.metaDesc,
        "url": `https://theheartopia.com/${locale}/npcs`,
        "inLanguage": locale,
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbItems.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.label,
                "item": `https://theheartopia.com${item.href}`
            }))
        }
    }

    return (
        <>
            <Script
                id="npcs-index-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Navbar t={dict.navbar} locale={locale} />

            <div className="min-h-screen bg-gradient-to-b from-[#FEF9F3] to-white pt-24 md:pt-32">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    {/* Breadcrumb */}
                    <div className="mb-4">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href={`/${locale}`} className="flex items-center gap-1">
                                            <Home className="w-3.5 h-3.5" />
                                            {dict.navbar.home}
                                        </Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{dict.navbar.npcs}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    {/* Hero Section */}
                    <div className="mb-12 mt-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-heartopia-pink to-heartopia-pink-dark flex items-center justify-center shadow-lg">
                                <User className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                                    {d.heroTitle}
                                </h1>
                                <p className="text-lg text-muted-foreground mt-2">
                                    {d.heroSubtitle}
                                </p>
                            </div>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {d.heroDesc}
                        </p>
                    </div>

                    {/* NPCs Grid */}
                    <div className="grid gap-6 md:grid-cols-2 mb-12">
                        {npcs.map((npc) => (
                            <Link
                                key={npc.id}
                                href={npc.href}
                                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 border border-gray-100 hover:border-heartopia-pink/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                {/* NPC Icon */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`w-16 h-16 rounded-2xl ${npc.iconBg} flex items-center justify-center text-3xl`}>
                                        {npc.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="font-bold text-2xl text-foreground mb-1 group-hover:text-heartopia-pink transition-colors">
                                            {npc.name}
                                        </h2>
                                        <p className="text-sm font-medium text-muted-foreground">
                                            {npc.role}
                                        </p>
                                    </div>
                                    <ChevronRight className="w-6 h-6 text-heartopia-pink opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                {/* NPC Details */}
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <MapPin className={`w-5 h-5 ${npc.iconColor} flex-shrink-0 mt-0.5`} />
                                        <div>
                                            <p className="text-sm font-medium text-foreground">{d.locationLabel}</p>
                                            <p className="text-sm text-muted-foreground">{npc.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className={`w-5 h-5 ${npc.iconColor} flex-shrink-0 mt-0.5`} />
                                        <div>
                                            <p className="text-sm font-medium text-foreground">{d.availabilityLabel}</p>
                                            <p className="text-sm text-muted-foreground">{npc.availability}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <ShoppingBag className={`w-5 h-5 ${npc.iconColor} flex-shrink-0 mt-0.5`} />
                                        <div>
                                            <p className="text-sm font-medium text-foreground">{d.specialtyLabel}</p>
                                            <p className="text-sm text-muted-foreground">{npc.specialty}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* View Details Button */}
                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <span className="text-sm font-bold text-heartopia-pink group-hover:underline">
                                        {d.viewDetails} →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Coming Soon Section */}
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 text-center">
                        <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                        <h3 className="font-bold text-2xl text-foreground mb-3">{d.comingSoon.title}</h3>
                        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            {d.comingSoon.desc}
                        </p>
                    </div>
                </div>
            </div>

            <Footer t={dict.footer} locale={locale} />
        </>
    )
}
