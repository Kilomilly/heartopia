'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
    ChevronRight,
    Home,
    Search,
    Clock,
    CloudRain,
    CloudSun,
    Sparkles,
    Star,
    MapPin,
    Zap,
    Info,
    CheckCircle2,
    Lock,
    ArrowUpDown,
    Fish as FishIcon,
    Moon,
    Sun,
    Waves
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FishData {
    id: string;
    level: number;
    locId: string;
    weatherId: string;
    timeId: string;
    value: number;
    notesId?: string;
    shadow?: string;
}

const FISH_DATABASE: FishData[] = [
    // Level 1
    { id: 'seahorse', level: 1, locId: 'whaleSea', weatherId: 'all', timeId: 'early', value: 100 },
    { id: 'beltfish', level: 1, locId: 'zephyrSea', weatherId: 'all', timeId: 'all', value: 105 },
    { id: 'commonWhitefish', level: 1, locId: 'onsenLake', weatherId: 'all', timeId: 'all', value: 105 },
    { id: 'sardine', level: 1, locId: 'ocean', weatherId: 'all', timeId: 'all', value: 50 },
    { id: 'skipjackTuna', level: 1, locId: 'ocean', weatherId: 'all', timeId: 'all', value: 210 },
    { id: 'stripedRedMullet', level: 1, locId: 'village', weatherId: 'all', timeId: 'all', value: 320 },

    // Level 2-3
    { id: 'anglerfish', level: 2, locId: 'village', weatherId: 'all', timeId: 'all', value: 320 },
    { id: 'largemouthBass', level: 2, locId: 'forestLake', weatherId: 'sunnyRainbow', timeId: 'all', value: 230 },
    { id: 'mudSunfish', level: 2, locId: 'forestLake', weatherId: 'all', timeId: 'early', value: 100 },
    { id: 'zander', level: 3, locId: 'giantRiver', weatherId: 'sunnyRainbow', timeId: 'all', value: 230 },
    { id: 'tilapia', level: 3, locId: 'river', weatherId: 'all', timeId: 'all', value: 150, notesId: 'bait' },

    // Level 4-5
    { id: 'atlanticSalmon', level: 4, locId: 'whaleSea', weatherId: 'all', timeId: 'pm', value: 155 },
    { id: 'butterflyKoi', level: 4, locId: 'fieldLake', weatherId: 'rainRainbow', timeId: 'all', value: 400 },
    { id: 'europeanLobster', level: 5, locId: 'zephyrSea', weatherId: 'all', timeId: 'night', value: 450 },
    { id: 'trout', level: 5, locId: 'fieldLake', weatherId: 'sunnyRainbow', timeId: 'mixed', value: 350 },

    // Level 6-10
    { id: 'chumSalmon', level: 6, locId: 'sereneRiver', weatherId: 'rainbow', timeId: 'all', value: 800 },
    { id: 'goldfish', level: 8, locId: 'fieldLake', weatherId: 'rainRainbow', timeId: 'early', value: 600 },
    { id: 'moonfish', level: 9, locId: 'village', weatherId: 'all', timeId: 'evening', value: 750 },
    { id: 'arcticChar', level: 10, locId: 'forestLake', weatherId: 'rainRainbow', timeId: 'pm', value: 900 },
    { id: 'swordfish', level: 10, locId: 'oceanActivity', weatherId: 'all', timeId: 'all', value: 1000 }
];

export default function FishListClient({ t, locale }: { t: any, locale: string }) {
    const [filter, setFilter] = useState('all');
    const [currentTime, setCurrentTime] = useState<number | null>(null);

    useEffect(() => {
        // Simple hour-based time for "LIVE" status
        const interval = setInterval(() => {
            setCurrentTime(new Date().getHours());
        }, 60000);
        setCurrentTime(new Date().getHours());
        return () => clearInterval(interval);
    }, []);

    const isLive = (timeId: string) => {
        if (currentTime === null) return false;
        switch (timeId) {
            case 'early': return currentTime >= 0 && currentTime < 18;
            case 'all': return true;
            case 'night': return currentTime >= 18 || currentTime < 6;
            case 'evening': return currentTime >= 18 && currentTime <= 24;
            case 'pm': return currentTime >= 12 && currentTime < 24;
            case 'mixed': return (currentTime >= 18 && currentTime < 24) || (currentTime >= 0 && currentTime < 6);
            default: return false;
        }
    };

    const filteredFish = useMemo(() => {
        let list = [...FISH_DATABASE];
        if (filter === 'rain') list = list.filter(f => f.weatherId.includes('rain'));
        if (filter === 'rainbow') list = list.filter(f => f.weatherId === 'rainbow');
        if (filter === 'night') list = list.filter(f => f.timeId === 'night' || f.timeId === 'evening' || f.timeId === 'mixed');
        if (filter === 'money') list = list.sort((a, b) => b.value - a.value).slice(0, 10);
        return list;
    }, [filter]);

    const levels = [
        { id: 'l1', data: filteredFish.filter(f => f.level === 1) },
        { id: 'l2', data: filteredFish.filter(f => f.level === 2 || f.level === 3) },
        { id: 'l3', data: filteredFish.filter(f => f.level === 4 || f.level === 5) },
        { id: 'l4', data: filteredFish.filter(f => f.level >= 6) },
    ];

    const WeatherIcon = ({ id }: { id: string }) => {
        if (id === 'all') return <Sun className="w-4 h-4 text-orange-400" />;
        if (id === 'rainRainbow') return <CloudRain className="w-4 h-4 text-blue-400" />;
        if (id === 'sunnyRainbow') return <CloudSun className="w-4 h-4 text-amber-500" />;
        if (id === 'rainbow') return <Sparkles className="w-4 h-4 text-pink-500 animate-pulse" />;
        return <Sun className="w-4 h-4 text-orange-400" />;
    };

    return (
        <div className="pb-24">
            {/* Quick Answer Block */}
            <section className="bg-white/60 backdrop-blur-md rounded-3xl p-8 mb-12 border border-heartopia-pink/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <Search className="w-32 h-32 text-heartopia-pink" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Info className="w-6 h-6 text-heartopia-pink" />
                    {t.fishList.quickAnswer.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                    {t.fishList.quickAnswer.text}
                </p>
            </section>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3 mb-12">
                {['all', 'rain', 'rainbow', 'night', 'money'].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={cn(
                            "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border shadow-sm",
                            filter === f
                                ? "bg-heartopia-pink text-white border-heartopia-pink shadow-heartopia-pink/20"
                                : "bg-white/80 text-muted-foreground border-slate-200 hover:border-heartopia-pink/30 hover:bg-white"
                        )}
                    >
                        {(t.fishList.filter as any)[f]}
                    </button>
                ))}
            </div>

            {/* How Organized (H2) */}
            <section className="mb-16">
                <h2 className="font-serif text-3xl font-bold mb-8">{t.fishList.org.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: <Zap className="text-amber-500" />, title: t.fishList.org.level, bg: "bg-amber-50" },
                        { icon: <Clock className="text-sky-500" />, title: t.fishList.org.time, bg: "bg-sky-50" },
                        { icon: <Star className="text-pink-500" />, title: t.fishList.org.value, bg: "bg-pink-50" }
                    ].map((item, i) => (
                        <div key={i} className={cn("p-6 rounded-2xl border border-white flex items-center gap-4 shadow-sm", item.bg)}>
                            <div className="p-3 bg-white rounded-xl shadow-sm">
                                {item.icon}
                            </div>
                            <span className="font-medium text-foreground">{item.title}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Level Sections */}
            {levels.map((lvl) => (
                <section key={lvl.id} className="mb-16">
                    <header className="mb-8">
                        <h2 className="font-serif text-3xl font-bold mb-3">{t.fishList.sections[lvl.id].title}</h2>
                        <p className="text-muted-foreground">{t.fishList.sections[lvl.id].text}</p>
                    </header>

                    {lvl.data.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {lvl.data.map((fish) => (
                                <div key={fish.id} className="group bg-white rounded-3xl p-6 border border-slate-100 hover:border-heartopia-pink/20 hover:shadow-xl hover:shadow-heartopia-pink/5 transition-all duration-500 relative overflow-hidden">
                                    {/* LIVE Badge */}
                                    {isLive(fish.timeId) && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <Badge className="bg-emerald-500 text-white border-none px-2 py-0.5 animate-pulse flex items-center gap-1 text-[10px]">
                                                <span className="w-1 h-1 bg-white rounded-full"></span>
                                                {t.fishList.live}
                                            </Badge>
                                        </div>
                                    )}

                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex flex-col">
                                            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-heartopia-pink transition-colors">
                                                {(t.fishList.fish as any)[fish.id]}
                                            </h3>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <Badge variant="outline" className="border-slate-200 text-slate-500 py-0 px-2 rounded-md">
                                                    LV.{fish.level}
                                                </Badge>
                                                <span className="flex items-center gap-1">
                                                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                                                    {fish.value}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="w-12 h-12 bg-heartopia-pink/5 rounded-2xl flex items-center justify-center text-heartopia-pink group-hover:bg-heartopia-pink group-hover:text-white transition-all duration-500">
                                            <FishIcon className="w-6 h-6" />
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-4 border-t border-slate-50">
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="w-7 h-7 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
                                                <MapPin className="w-4 h-4" />
                                            </div>
                                            <span className="text-slate-600 font-medium">
                                                {(t.fishList.locs as any)[fish.locId]}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="w-7 h-7 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
                                                <Clock className="w-4 h-4" />
                                            </div>
                                            <span className="text-slate-600">
                                                {(t.fishList.times as any)[fish.timeId]}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="w-7 h-7 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
                                                <WeatherIcon id={fish.weatherId} />
                                            </div>
                                            <span className="text-slate-600">
                                                {(t.fishList.weather as any)[fish.weatherId]}
                                            </span>
                                        </div>
                                    </div>

                                    {fish.notesId && (
                                        <div className="mt-4 p-3 bg-pink-50/50 rounded-xl flex items-start gap-2 border border-pink-100/50">
                                            <Sparkles className="w-4 h-4 text-heartopia-pink shrink-0 mt-0.5" />
                                            <p className="text-xs text-heartopia-pink-dark leading-relaxed">
                                                {(t.fishList as any)[fish.notesId]}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-12 text-center bg-white/50 rounded-3xl border border-dashed border-slate-200">
                            <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                            <p className="text-slate-500">No fish match current filter.</p>
                        </div>
                    )}
                </section>
            ))}

            {/* Rare Fish Highlight */}
            <section className="bg-slate-900 rounded-[2.5rem] p-10 md:p-14 mb-16 relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-l from-heartopia-pink/40 to-transparent"></div>
                    <Sparkles className="absolute top-1/4 right-1/4 w-32 h-32 text-heartopia-pink animate-pulse" />
                </div>

                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                    {t.fishList.highlight.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-pink-400 mb-4">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">{t.fishList.highlight.rainbow}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Legendary fish like the <strong>{t.fishList.fish.chumSalmon}</strong> ONLY appear during the rare Rainbow weather effect. Keep your rod ready!
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 mb-4">
                            <Lock className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">{t.fishList.highlight.level}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Progression is key. <strong>{t.fishList.fish.arcticChar}</strong> requires Fishing Level 10, the highest achievement for island anglers.
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center text-sky-400 mb-4">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">{t.fishList.highlight.time}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Many deep-sea rarities like the <strong>{t.fishList.fish.europeanLobster}</strong> only come out at night. Check the LIVE badge!
                        </p>
                    </div>
                </div>
            </section>

            {/* Best for Purpose (H2) */}
            <section className="mb-16">
                <h2 className="font-serif text-3xl font-bold mb-8">{t.fishList.purpose.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-amber-400/5 to-amber-400/10 p-8 rounded-3xl border border-amber-200/30">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm mb-6">
                            <Star className="w-6 h-6 fill-current" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{t.fishList.purpose.money}</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                                <CheckCircle2 className="w-4 h-4 text-amber-500" /> {t.fishList.fish.swordfish} (1000⭐)
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                                <CheckCircle2 className="w-4 h-4 text-amber-500" /> {t.fishList.fish.arcticChar} (900⭐)
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                                <CheckCircle2 className="w-4 h-4 text-amber-500" /> {t.fishList.fish.chumSalmon} (800⭐)
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-400/5 to-emerald-400/10 p-8 rounded-3xl border border-emerald-200/30">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-500 shadow-sm mb-6">
                            <Zap className="w-6 h-6 fill-current" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{t.fishList.purpose.early}</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {t.fishList.fish.stripedRedMullet}
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {t.fishList.fish.skipjackTuna}
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {t.fishList.fish.beltfish}
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-indigo-400/5 to-indigo-400/10 p-8 rounded-3xl border border-indigo-200/30">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-500 shadow-sm mb-6">
                            <Moon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{t.fishList.purpose.night}</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                                <CheckCircle2 className="w-4 h-4 text-indigo-500" /> {t.fishList.fish.moonfish}
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                                <CheckCircle2 className="w-4 h-4 text-indigo-500" /> {t.fishList.fish.europeanLobster}
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                                <CheckCircle2 className="w-4 h-4 text-indigo-500" /> {t.fishList.fish.atlanticSalmon}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

