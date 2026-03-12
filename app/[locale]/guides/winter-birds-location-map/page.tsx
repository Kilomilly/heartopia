import { getDictionary } from '@/lib/dictionary';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Bird, MapPin, Cloud, Trophy, Camera, Sparkles, ChevronRight, Info } from 'lucide-react';
import { Navbar } from '@/components/heartopia/navbar';
import { Footer } from '@/components/heartopia/footer';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const dict = await getDictionary(locale as 'en' | 'es' | 'pt' | 'id' | 'th');
    const b = dict.winterBirds;

    return {
        title: b.metaTitle,
        description: b.metaDesc,
        alternates: {
            canonical: `https://theheartopia.com/${locale}/guides/winter-birds-location-map`,
            languages: {
                'x-default': 'https://theheartopia.com/en/guides/winter-birds-location-map',
                en: 'https://theheartopia.com/en/guides/winter-birds-location-map',
                es: 'https://theheartopia.com/es/guides/winter-birds-location-map',
                pt: 'https://theheartopia.com/pt/guides/winter-birds-location-map',
                id: 'https://theheartopia.com/id/guides/winter-birds-location-map',
                th: 'https://theheartopia.com/th/guides/winter-birds-location-map',
            },
        },
        openGraph: {
            title: b.metaTitle,
            description: b.metaDesc,
            url: 'https://theheartopia.com/guides/winter-birds-location-map',
            siteName: 'Heartopia Hub',
            images: [
                {
                    url: 'https://theheartopia.com/images/guides/birds/winter-birds-map-og.webp',
                    width: 1200,
                    height: 630,
                    alt: b.ogImageAlt || 'Heartopia Winter Birds Location Map',
                },
            ],
            locale: locale,
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: b.metaTitle,
            description: b.metaDesc,
            images: ['https://theheartopia.com/images/guides/birds/winter-birds-map-og.webp'],
        },
    };
}

export default async function WinterBirdsPage({ params }: Props) {
    const { locale } = await params;
    const dict = await getDictionary(locale as 'en' | 'es' | 'pt' | 'id' | 'th');
    const b = dict.winterBirds;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: 'https://theheartopia.com',
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Guides',
                        item: 'https://theheartopia.com/guides',
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: b.breadcrumb,
                    },
                ],
            },
            {
                '@type': 'Article',
                headline: b.metaTitle,
                description: b.metaDesc,
                image: 'https://theheartopia.com/images/guides/birds/winter-birds-map-og.webp',
                datePublished: '2026-02-09T00:00:00+08:00',
                dateModified: '2026-02-09T00:00:00+08:00',
                author: {
                    '@type': 'Organization',
                    name: 'Heartopia Hub',
                },
            },
            {
                '@type': 'FAQPage',
                mainEntity: b.faq?.questions?.map((q: any, i: number) => ({
                    '@type': 'Question',
                    name: q.question || b.faq[`q${i + 1}`],
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: q.answer || b.faq[`a${i + 1}`],
                    },
                })) || [
                        {
                            '@type': 'Question',
                            name: b.faq?.q1 || 'Where can I find Winter Smew in Heartopia?',
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: b.faq?.a1 || 'Winter Smew spawns at Forest Lake shore, Deer Tower Lake, and near houses 5-6 in suburban areas during winter season.',
                            },
                        },
                        {
                            '@type': 'Question',
                            name: b.faq?.q2 || 'What level do I need for birdwatching?',
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: b.faq?.a2 || 'You need Birdwatching Level 2 and a Level 2+ net to catch winter birds effectively.',
                            },
                        },
                        {
                            '@type': 'Question',
                            name: b.faq?.q3 || 'How do I get 3-star bird info cards?',
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: b.faq?.a3 || 'Take photos when birds are feeding or preening, at medium distance for optimal clarity.',
                            },
                        },
                    ],
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="min-h-screen bg-[#FEF9F3]">
                <Navbar t={dict.navbar} locale={locale} />

                {/* Breadcrumb */}
                <div className="container mx-auto px-4 pt-32 pb-6">
                    <nav className="flex items-center gap-2 text-sm text-slate-600">
                        <Link href={`/${locale}`} className="hover:text-heartopia-pink transition-colors">
                            {b.breadcrumbHome || 'Home'}
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href={`/${locale}/guides`} className="hover:text-heartopia-pink transition-colors">
                            {b.breadcrumbGuides || 'Guides'}
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-heartopia-pink font-medium">{b.breadcrumb}</span>
                    </nav>
                </div>

                {/* Hero Section */}
                <section className="container mx-auto px-4 py-12 md:py-20">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-heartopia-pink/30 rounded-full shadow-sm">
                            <Sparkles className="w-4 h-4 text-heartopia-pink animate-sparkle" />
                            <span className="text-sm font-medium text-foreground">{b.badge || 'Winter Event'}</span>
                        </div>
                        <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground leading-tight">
                            {b.heroTitle}
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            {b.heroDesc}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-white/50">
                                <Bird className="w-5 h-5 text-heartopia-sky" />
                                <span className="text-sm font-medium text-foreground">{b.birdCount || '4+ Species'}</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-white/50">
                                <MapPin className="w-5 h-5 text-heartopia-pink" />
                                <span className="text-sm font-medium text-foreground">{b.locationCount || '5+ Locations'}</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-white/50">
                                <Trophy className="w-5 h-5 text-heartopia-orange" />
                                <span className="text-sm font-medium text-foreground">{b.rewardInfo || 'Festival Tokens'}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="container mx-auto px-4 py-8">
                    <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-xl rounded-[32px] shadow-2xl p-8 md:p-12 border border-white/50">
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                            {b.intro}
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            {b.introSecondary}
                        </p>
                    </div>
                </section>

                {/* Interactive Map Section */}
                <section className="container mx-auto px-4 py-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                                {b.mapTitle}
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                {b.mapDesc}
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">
                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-sky-100 to-green-100">
                                <Image
                                    src="/images/guides/winter-birds-location-map.webp"
                                    alt={b.imgAlts?.mapImage || 'Heartopia Winter Birds spawn map showing all locations'}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Map Legend */}
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {b.mapLocations?.map((loc: any, i: number) => (
                                    <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-br from-sky-50 to-pink-50 rounded-xl">
                                        <MapPin className="w-5 h-5 text-heartopia-pink flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-slate-800">{loc.name}</h3>
                                            <p className="text-sm text-slate-600">{loc.birds}</p>
                                        </div>
                                    </div>
                                )) || (
                                        <>
                                            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-sky-50 to-pink-50 rounded-xl">
                                                <MapPin className="w-5 h-5 text-heartopia-pink flex-shrink-0 mt-1" />
                                                <div>
                                                    <h3 className="font-semibold text-slate-800">Deer Tower Lake</h3>
                                                    <p className="text-sm text-slate-600">Wonga Pigeon, Winter Smew</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-sky-50 to-pink-50 rounded-xl">
                                                <MapPin className="w-5 h-5 text-heartopia-pink flex-shrink-0 mt-1" />
                                                <div>
                                                    <h3 className="font-semibold text-slate-800">Forest Lake Shore</h3>
                                                    <p className="text-sm text-slate-600">Winter Smew, Mallards, Flamingos</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-sky-50 to-pink-50 rounded-xl">
                                                <MapPin className="w-5 h-5 text-heartopia-pink flex-shrink-0 mt-1" />
                                                <div>
                                                    <h3 className="font-semibold text-slate-800">Panda Forest</h3>
                                                    <p className="text-sm text-slate-600">Eurasian Wigeon</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-sky-50 to-pink-50 rounded-xl">
                                                <MapPin className="w-5 h-5 text-heartopia-pink flex-shrink-0 mt-1" />
                                                <div>
                                                    <h3 className="font-semibold text-slate-800">Spirit Oak Pine Forest</h3>
                                                    <p className="text-sm text-slate-600">Wonga Pigeon variants</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-sky-50 to-pink-50 rounded-xl">
                                                <MapPin className="w-5 h-5 text-heartopia-pink flex-shrink-0 mt-1" />
                                                <div>
                                                    <h3 className="font-semibold text-slate-800">Town Center Lakes</h3>
                                                    <p className="text-sm text-slate-600">Winter Flamingos, Mallards with hats</p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Birds Table */}
                <section className="container mx-auto px-4 py-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                                {b.tableTitle}
                            </h2>
                            <p className="text-slate-600">
                                {b.tableDesc}
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gradient-to-r from-heartopia-pink to-sky-400 text-white">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-sm font-semibold">{b.tableCols?.bird || 'Bird Variant'}</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold">{b.tableCols?.rarity || 'Rarity'}</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold">{b.tableCols?.location || 'Locations'}</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold">{b.tableCols?.weather || 'Weather'}</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold">{b.tableCols?.notes || 'Notes'}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {b.birds?.map((bird: any, i: number) => (
                                            <tr key={i} className="hover:bg-sky-50/50 transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <Bird className="w-5 h-5 text-heartopia-pink" />
                                                        <div>
                                                            <div className="font-semibold text-slate-800 group-hover:text-heartopia-pink transition-colors">
                                                                {bird.name}
                                                            </div>
                                                            <div className="text-xs text-slate-500">{bird.description}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-sm text-slate-700">{bird.rarity}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-sm text-slate-700">{bird.location}</span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <Cloud className="w-4 h-4 text-sky-400" />
                                                        <span className="text-sm text-slate-700">{bird.weather}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="text-sm text-slate-600">{bird.notes}</span>
                                                </td>
                                            </tr>
                                        )) || (
                                                <>
                                                    <tr className="hover:bg-sky-50/50 transition-colors group">
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-3">
                                                                <Bird className="w-5 h-5 text-heartopia-pink" />
                                                                <div>
                                                                    <div className="font-semibold text-slate-800 group-hover:text-heartopia-pink transition-colors">
                                                                        Wonga Pigeon
                                                                    </div>
                                                                    <div className="text-xs text-slate-500">Brown with white chest</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4"><span className="text-sm text-slate-700">Lv2</span></td>
                                                        <td className="px-6 py-4"><span className="text-sm text-slate-700">Forest (Spirit Oak, Deer Tower)</span></td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-2">
                                                                <Cloud className="w-4 h-4 text-sky-400" />
                                                                <span className="text-sm text-slate-700">Sunny/Rainy</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4"><span className="text-sm text-slate-600">Ground foraging, wet forests</span></td>
                                                    </tr>
                                                    <tr className="hover:bg-sky-50/50 transition-colors group bg-pink-50/30">
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-3">
                                                                <Bird className="w-5 h-5 text-heartopia-pink" />
                                                                <div>
                                                                    <div className="font-semibold text-slate-800 group-hover:text-heartopia-pink transition-colors">
                                                                        Winter Smew ⭐
                                                                    </div>
                                                                    <div className="text-xs text-slate-500">White duck, black eye patch, pink hat</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4"><span className="text-sm text-slate-700">Lv2 (Rare)</span></td>
                                                        <td className="px-6 py-4"><span className="text-sm text-slate-700">Forest Lake, Houses 5-6</span></td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-2">
                                                                <Cloud className="w-4 h-4 text-sky-400" />
                                                                <span className="text-sm text-slate-700">Any Winter</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4"><span className="text-sm text-slate-600">Cute winter hat, suburban lakes</span></td>
                                                    </tr>
                                                    <tr className="hover:bg-sky-50/50 transition-colors group">
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-3">
                                                                <Bird className="w-5 h-5 text-heartopia-pink" />
                                                                <div>
                                                                    <div className="font-semibold text-slate-800 group-hover:text-heartopia-pink transition-colors">
                                                                        Eurasian Wigeon
                                                                    </div>
                                                                    <div className="text-xs text-slate-500">Gray duck, brown head</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4"><span className="text-sm text-slate-700">Lv2</span></td>
                                                        <td className="px-6 py-4"><span className="text-sm text-slate-700">Panda Forest, River</span></td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-2">
                                                                <Cloud className="w-4 h-4 text-sky-400" />
                                                                <span className="text-sm text-slate-700">Rainy preferred</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4"><span className="text-sm text-slate-600">Winter variant in forests</span></td>
                                                    </tr>
                                                    <tr className="hover:bg-sky-50/50 transition-colors group">
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-3">
                                                                <Bird className="w-5 h-5 text-heartopia-pink" />
                                                                <div>
                                                                    <div className="font-semibold text-slate-800 group-hover:text-heartopia-pink transition-colors">
                                                                        Winter Mallard/Flamingo
                                                                    </div>
                                                                    <div className="text-xs text-slate-500">With winter hats/accessories</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4"><span className="text-sm text-slate-700">Lv1-2</span></td>
                                                        <td className="px-6 py-4"><span className="text-sm text-slate-700">Town center, Suburbs</span></td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex items-center gap-2">
                                                                <Cloud className="w-4 h-4 text-sky-400" />
                                                                <span className="text-sm text-slate-700">Snowing/Any</span>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4"><span className="text-sm text-slate-600">Wear little hats, easy to spot</span></td>
                                                    </tr>
                                                </>
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Catch Guide */}
                <section className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                                {b.guideTitle}
                            </h2>
                            <p className="text-slate-600">
                                {b.guideDesc}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {b.steps?.map((step: any, i: number) => (
                                <div key={i} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-heartopia-pink to-sky-400 flex items-center justify-center text-white font-bold">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-800 mb-2">{step.title}</h3>
                                            <p className="text-sm text-slate-600">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )) || (
                                    <>
                                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-heartopia-pink to-sky-400 flex items-center justify-center text-white font-bold">1</div>
                                                <div>
                                                    <h3 className="font-semibold text-slate-800 mb-2">Unlock Birdwatching Lv2</h3>
                                                    <p className="text-sm text-slate-600">Complete basic scans at the Research Lab to unlock advanced birdwatching abilities.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-heartopia-pink to-sky-400 flex items-center justify-center text-white font-bold">2</div>
                                                <div>
                                                    <h3 className="font-semibold text-slate-800 mb-2">Upgrade Net Lv2+</h3>
                                                    <p className="text-sm text-slate-600">Purchase or craft a Level 2+ net from the shop or Research Lab for better catch rates.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-heartopia-pink to-sky-400 flex items-center justify-center text-white font-bold">3</div>
                                                <div>
                                                    <h3 className="font-semibold text-slate-800 mb-2">Check Weather</h3>
                                                    <p className="text-sm text-slate-600">Use your Watch app to check weather. Sunny/Rainy is best, Snowing for special variants.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-heartopia-pink to-sky-400 flex items-center justify-center text-white font-bold">4</div>
                                                <div>
                                                    <h3 className="font-semibold text-slate-800 mb-2">Visit Hotspots</h3>
                                                    <p className="text-sm text-slate-600">Go to lakes and forests. Catch common birds first to encourage rare spawns.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-heartopia-pink to-sky-400 flex items-center justify-center text-white font-bold">5</div>
                                                <div>
                                                    <h3 className="font-semibold text-slate-800 mb-2">Approach & Catch</h3>
                                                    <p className="text-sm text-slate-600">Crouch/sneak, then swing net or use camera to scan/photo when close enough.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-heartopia-pink to-sky-400 flex items-center justify-center text-white font-bold">6</div>
                                                <div>
                                                    <h3 className="font-semibold text-slate-800 mb-2">Submit to Bailey</h3>
                                                    <p className="text-sm text-slate-600">Visit Bailey NPC or use the Collections app to submit and claim rewards.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                        </div>

                        <div className="mt-8 p-6 bg-gradient-to-br from-sky-50 to-pink-50 rounded-2xl">
                            <div className="flex items-start gap-3">
                                <Info className="w-5 h-5 text-heartopia-pink flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-sm text-slate-700">
                                        <strong>Time Required:</strong> 10-20 minutes for all birds. <strong>Respawn Tip:</strong> Catch common birds to encourage rare spawns.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rewards Section */}
                <section className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                                {b.rewardsTitle}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                                <Trophy className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                                <h3 className="font-semibold text-slate-800 mb-2">{b.rewards?.perBird || 'Per Bird'}</h3>
                                <p className="text-sm text-slate-600">100-300 Festival Tokens + Bird Info Card progress</p>
                            </div>
                            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                                <Sparkles className="w-12 h-12 text-heartopia-pink mx-auto mb-4" />
                                <h3 className="font-semibold text-slate-800 mb-2">{b.rewards?.fullCollection || 'Full Collection'}</h3>
                                <p className="text-sm text-slate-600">Achievement + bird cage furniture + exhibition bonus</p>
                            </div>
                            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                                <Camera className="w-12 h-12 text-sky-400 mx-auto mb-4" />
                                <h3 className="font-semibold text-slate-800 mb-2">{b.rewards?.quests || 'Quests'}</h3>
                                <p className="text-sm text-slate-600">"On Duty" tasks (scan 5 birds) → Tokens + decor</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tips & Troubleshooting */}
                <section className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                                {b.tipsTitle}
                            </h2>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl p-8">
                            <div className="space-y-6">
                                {b.tips?.map((tip: any, i: number) => (
                                    <div key={i} className="flex items-start gap-4 p-4 bg-gradient-to-br from-sky-50 to-pink-50 rounded-xl">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-heartopia-pink text-white flex items-center justify-center text-sm font-bold">
                                            !
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-800 mb-1">{tip.title}</h3>
                                            <p className="text-sm text-slate-600">{tip.description}</p>
                                        </div>
                                    </div>
                                )) || (
                                        <>
                                            <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-sky-50 to-pink-50 rounded-xl">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-heartopia-pink text-white flex items-center justify-center text-sm font-bold">!</div>
                                                <div>
                                                    <h3 className="font-semibold text-slate-800 mb-1">No Spawns?</h3>
                                                    <p className="text-sm text-slate-600">Catch common mallards/flamingos first, then relog or change weather/area to trigger rare spawns.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-sky-50 to-pink-50 rounded-xl">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-heartopia-pink text-white flex items-center justify-center text-sm font-bold">!</div>
                                                <div>
                                                    <h3 className="font-semibold text-slate-800 mb-1">Hard to Catch?</h3>
                                                    <p className="text-sm text-slate-600">Use crouch/sneak approach. Level 2+ net is essential for winter birds.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-sky-50 to-pink-50 rounded-xl">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-heartopia-pink text-white flex items-center justify-center text-sm font-bold">!</div>
                                                <div>
                                                    <h3 className="font-semibold text-slate-800 mb-1">Missed Season?</h3>
                                                    <p className="text-sm text-slate-600">Visit friends' houses with bird ornaments placed to scan for collection progress.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-sky-50 to-pink-50 rounded-xl">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-heartopia-pink text-white flex items-center justify-center text-sm font-bold">!</div>
                                                <div>
                                                    <h3 className="font-semibold text-slate-800 mb-1">Best Route</h3>
                                                    <p className="text-sm text-slate-600">Start at Forest Lake (Smew) → Deer Tower (Wonga) → Panda Forest (Wigeon) for efficient collection.</p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                                {b.faq?.title || 'Frequently Asked Questions'}
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {b.faq?.questions?.map((q: any, i: number) => (
                                <details key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                                    <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-800 hover:text-heartopia-pink transition-colors flex items-center justify-between">
                                        {q.question || b.faq[`q${i + 1}`]}
                                        <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                                    </summary>
                                    <div className="px-6 pb-4 text-slate-600">
                                        {q.answer || b.faq[`a${i + 1}`]}
                                    </div>
                                </details>
                            )) || (
                                    <>
                                        <details className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                                            <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-800 hover:text-heartopia-pink transition-colors flex items-center justify-between">
                                                {b.faq?.q1 || 'Where can I find Winter Smew in Heartopia?'}
                                                <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                                            </summary>
                                            <div className="px-6 pb-4 text-slate-600">
                                                {b.faq?.a1 || 'Winter Smew spawns at Forest Lake shore, Deer Tower Lake, and near houses 5-6 in suburban areas during the winter season. They prefer quieter lake sections and appear in any winter weather.'}
                                            </div>
                                        </details>
                                        <details className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                                            <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-800 hover:text-heartopia-pink transition-colors flex items-center justify-between">
                                                {b.faq?.q2 || 'What level do I need for birdwatching?'}
                                                <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                                            </summary>
                                            <div className="px-6 pb-4 text-slate-600">
                                                {b.faq?.a2 || 'You need Birdwatching Level 2 and a Level 2+ net to catch winter birds effectively. Complete basic scans at the Research Lab to unlock Level 2, then upgrade your net at the shop or lab.'}
                                            </div>
                                        </details>
                                        <details className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                                            <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-800 hover:text-heartopia-pink transition-colors flex items-center justify-between">
                                                {b.faq?.q3 || 'How do I get 3-star bird info cards?'}
                                                <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                                            </summary>
                                            <div className="px-6 pb-4 text-slate-600">
                                                {b.faq?.a3 || 'To get 3-star bird info cards, take photos when birds are feeding or preening. Maintain medium distance—too close will scare them, too far reduces clarity. Perfect timing and distance are key!'}
                                            </div>
                                        </details>
                                        <details className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                                            <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-800 hover:text-heartopia-pink transition-colors flex items-center justify-between">
                                                {b.faq?.q4 || 'Can I trade duplicate bird info cards?'}
                                                <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                                            </summary>
                                            <div className="px-6 pb-4 text-slate-600">
                                                {b.faq?.a4 || 'Yes! Visit Bailey J NPC to exchange duplicate bird info cards for gold coins and upgrade materials. This is a great way to monetize your extra cards.'}
                                            </div>
                                        </details>
                                        {b.faq?.q5 && (
                                            <details className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                                                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-800 hover:text-heartopia-pink transition-colors flex items-center justify-between">
                                                    {b.faq.q5}
                                                    <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                                                </summary>
                                                <div className="px-6 pb-4 text-slate-600">
                                                    {b.faq.a5}
                                                </div>
                                            </details>
                                        )}
                                    </>
                                )}
                        </div>
                    </div>
                </section>

                {/* Related Guides */}
                <section className="container mx-auto px-4 py-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                                {b.relatedTitle || 'Related Heartopia Guides'}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link href={`/${locale}/events/onsen-egg-all-locations`} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                                <div className="aspect-video bg-gradient-to-br from-orange-100 to-pink-100 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Sparkles className="w-16 h-16 text-heartopia-pink" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-slate-800 group-hover:text-heartopia-pink transition-colors mb-2">
                                        {b.relatedEgg || 'Onsen Egg Hunt'}
                                    </h3>
                                    <p className="text-sm text-slate-600">Complete 16-day winter egg collection guide</p>
                                </div>
                            </Link>

                            <Link href={`/${locale}/events/meteor-shower`} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                                <div className="aspect-video bg-gradient-to-br from-purple-100 to-sky-100 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Sparkles className="w-16 h-16 text-sky-500" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-slate-800 group-hover:text-heartopia-pink transition-colors mb-2">
                                        {b.relatedMeteor || 'Meteor Shower Guide'}
                                    </h3>
                                    <p className="text-sm text-slate-600">Collect starfall shards and exclusive rewards</p>
                                </div>
                            </Link>

                            <Link href={`/${locale}/events`} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                                <div className="aspect-video bg-gradient-to-br from-green-100 to-orange-100 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Trophy className="w-16 h-16 text-orange-400" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-slate-800 group-hover:text-heartopia-pink transition-colors mb-2">
                                        {b.relatedEvents || 'All Winter Events'}
                                    </h3>
                                    <p className="text-sm text-slate-600">Explore all active winter season events</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Update Notice */}
                <section className="container mx-auto px-4 py-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm text-slate-500">
                            {b.lastUpdated || 'Last Updated: February 9, 2026 - All winter bird locations confirmed'}
                        </p>
                    </div>
                </section>

                <Footer t={dict.footer} locale={locale} />
            </main>
        </>
    );
}
