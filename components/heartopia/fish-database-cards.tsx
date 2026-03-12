"use client"

import React, { useState, useMemo } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, X, Filter } from "lucide-react"
import { fishDatabase, Fish } from "@/lib/fish-database"

interface FishDatabaseProps {
    translations: {
        searchPlaceholder: string
        filterByLevel: string
        filterByType: string
        allLevels: string
        allTypes: string
        typeLake: string
        typeRiver: string
        typeSea: string
        noResults: string
        clearFilters: string
        showingResults: string
        legendTitle: string
        weatherIcons: string
        timeIcons: string
        sunny: string
        rainy: string
        rainbow: string
        night: string
        dawn: string
        day: string
        dusk: string
        thName: string
        thLocation: string
        thType: string
        thShadow: string
        thWeather: string
        thTime: string
        thStars: string
        fishData?: Record<string, { name: string; location: string }>
    }
}

export function FishDatabaseCards({ translations: t }: FishDatabaseProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedLevel, setSelectedLevel] = useState<number | "all">("all")
    const [selectedType, setSelectedType] = useState<string>("all")

    // Get unique levels and types
    const levels = useMemo(() => {
        return [...new Set(fishDatabase.map((fish: Fish) => fish.level))].sort((a, b) => a - b)
    }, [])

    const types = useMemo(() => {
        return [...new Set(fishDatabase.map((fish: Fish) => fish.type))].sort()
    }, [])

    // Filter fish based on search and filters
    const filteredFish = useMemo(() => {
        return fishDatabase.filter((fish: Fish) => {
            const locName = t.fishData?.[fish.id]?.name || fish.name
            const locLocation = t.fishData?.[fish.id]?.location || fish.location
            const matchesSearch = locName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                locLocation.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesLevel = selectedLevel === "all" || fish.level === selectedLevel
            const matchesType = selectedType === "all" || fish.type === selectedType

            return matchesSearch && matchesLevel && matchesType
        })
    }, [searchQuery, selectedLevel, selectedType, t.fishData])

    const hasActiveFilters = searchQuery !== "" || selectedLevel !== "all" || selectedType !== "all"

    const clearAllFilters = () => {
        setSearchQuery("")
        setSelectedLevel("all")
        setSelectedType("all")
    }

    return (
        <div className="space-y-6">
            {/* Search and Filters */}
            <div className="bg-white/60 rounded-[32px] p-6 border border-white shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Search */}
                    <div className="md:col-span-3">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder={t.searchPlaceholder}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 pr-10 h-12 rounded-2xl border-heartopia-pink/20 focus:border-heartopia-pink"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Level Filter */}
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            {t.filterByLevel}
                        </label>
                        <select
                            value={selectedLevel}
                            onChange={(e) => setSelectedLevel(e.target.value === "all" ? "all" : Number(e.target.value))}
                            className="w-full h-10 px-4 rounded-xl border border-heartopia-pink/20 focus:border-heartopia-pink focus:outline-none focus:ring-2 focus:ring-heartopia-pink/20 bg-white"
                        >
                            <option value="all">{t.allLevels}</option>
                            {levels.map(level => (
                                <option key={level} value={level}>Level {level}</option>
                            ))}
                        </select>
                    </div>

                    {/* Type Filter */}
                    <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                            {t.filterByType}
                        </label>
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="w-full h-10 px-4 rounded-xl border border-heartopia-pink/20 focus:border-heartopia-pink focus:outline-none focus:ring-2 focus:ring-heartopia-pink/20 bg-white"
                        >
                            <option value="all">{t.allTypes}</option>
                            <option value="Lake">{t.typeLake}</option>
                            <option value="River">{t.typeRiver}</option>
                            <option value="Sea">{t.typeSea}</option>
                        </select>
                    </div>

                    {/* Clear Filters Button */}
                    {hasActiveFilters && (
                        <div className="flex items-end">
                            <button
                                onClick={clearAllFilters}
                                className="w-full h-10 px-4 rounded-xl bg-heartopia-pink/10 text-heartopia-pink hover:bg-heartopia-pink/20 transition-colors font-medium text-sm flex items-center justify-center gap-2"
                            >
                                <X className="w-4 h-4" />
                                {t.clearFilters}
                            </button>
                        </div>
                    )}
                </div>

                {/* Results Count */}
                <div className="mt-4 text-sm text-muted-foreground">
                    {t.showingResults.replace('{count}', filteredFish.length.toString())}
                </div>
            </div>

            {/* Fish Cards Grid */}
            {filteredFish.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredFish.map((fish: Fish, idx: number) => {
                        const locName = t.fishData?.[fish.id]?.name || fish.name
                        const locLocation = t.fishData?.[fish.id]?.location || fish.location

                        return (
                            <div
                                key={idx}
                                className="bg-white/60 rounded-[24px] border border-white shadow-sm hover:shadow-soft-blue transition-all duration-300 overflow-hidden group"
                            >
                                {/* Card Header */}
                                <div className="bg-gradient-to-r from-heartopia-sky/10 to-heartopia-pink/10 px-5 py-4 border-b border-heartopia-pink/10">
                                    <div className="flex items-start justify-between gap-3">
                                        <h3 className="font-bold text-lg text-foreground group-hover:text-heartopia-pink transition-colors">
                                            {locName}
                                        </h3>
                                        <Badge className="bg-heartopia-sky text-white shrink-0">
                                            Lv {fish.level}
                                        </Badge>
                                    </div>
                                    {fish.note && (
                                        <p className="text-xs text-muted-foreground italic mt-2">{fish.note}</p>
                                    )}
                                </div>

                                {/* Card Body */}
                                <div className="p-5 space-y-3">
                                    {/* Location */}
                                    <div className="flex items-start gap-3">
                                        <span className="text-sm font-semibold text-muted-foreground min-w-[80px]">{t.thLocation}:</span>
                                        <span className="text-sm text-foreground">{locLocation}</span>
                                    </div>

                                    {/* Type */}
                                    <div className="flex items-start gap-3">
                                        <span className="text-sm font-semibold text-muted-foreground min-w-[80px]">{t.thType}:</span>
                                        <Badge
                                            variant="outline"
                                            className={`text-xs ${fish.type === 'Sea' ? 'border-heartopia-sky/30 text-heartopia-sky bg-heartopia-sky/5' :
                                                fish.type === 'River' ? 'border-heartopia-pink/30 text-heartopia-pink bg-heartopia-pink/5' :
                                                    'border-heartopia-green/30 text-heartopia-green bg-heartopia-green/5'
                                                }`}
                                        >
                                            {fish.type === 'Sea' ? t.typeSea : fish.type === 'River' ? t.typeRiver : t.typeLake}
                                        </Badge>
                                    </div>

                                    {/* Shadow */}
                                    <div className="flex items-start gap-3">
                                        <span className="text-sm font-semibold text-muted-foreground min-w-[80px]">{t.thShadow}:</span>
                                        <span className="text-sm text-foreground">{fish.shadow}</span>
                                    </div>

                                    {/* Weather & Time */}
                                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-heartopia-pink/10">
                                        <div>
                                            <span className="text-xs font-semibold text-muted-foreground block mb-1">{t.thWeather}</span>
                                            <span className="text-xl">{fish.weather}</span>
                                        </div>
                                        <div>
                                            <span className="text-xs font-semibold text-muted-foreground block mb-1">{t.thTime}</span>
                                            <span className="text-xl">{fish.time}</span>
                                        </div>
                                    </div>

                                    {/* Star Ratings */}
                                    <div className="pt-3 border-t border-heartopia-pink/10">
                                        <span className="text-xs font-semibold text-muted-foreground block mb-2">{t.thStars}</span>
                                        {typeof fish.stars[1] === 'string' ? (
                                            <Badge className="bg-heartopia-orange text-white">
                                                {fish.stars[1]}
                                            </Badge>
                                        ) : (
                                            <div className="flex flex-wrap gap-1 text-xs text-muted-foreground">
                                                <span>⭐ {fish.stars[1]}</span>
                                                <span>⭐⭐ {fish.stars[2]}</span>
                                                <span>⭐⭐⭐ {fish.stars[3]}</span>
                                                {fish.stars[4] !== "N/A" && <span>⭐⭐⭐⭐ {fish.stars[4]}</span>}
                                                {fish.stars[5] !== "N/A" && <span>⭐⭐⭐⭐⭐ {fish.stars[5]}</span>}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div className="bg-white/60 rounded-[32px] p-12 border border-white text-center">
                    <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                    <p className="text-lg text-muted-foreground">{t.noResults}</p>
                    {hasActiveFilters && (
                        <button
                            onClick={clearAllFilters}
                            className="mt-4 px-6 py-2 rounded-xl bg-heartopia-pink text-white hover:bg-heartopia-pink-dark transition-colors"
                        >
                            {t.clearFilters}
                        </button>
                    )}
                </div>
            )}

            {/* Legend */}
            <div className="bg-white/60 rounded-2xl p-6 border border-white">
                <h4 className="font-bold text-foreground mb-4">{t.legendTitle}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div>
                        <p className="font-semibold text-foreground mb-2">{t.weatherIcons}:</p>
                        <ul className="space-y-1">
                            <li>☀️ = {t.sunny}</li>
                            <li>🌧️ = {t.rainy}</li>
                            <li>🌈 = {t.rainbow}</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-foreground mb-2">{t.timeIcons}:</p>
                        <ul className="space-y-1">
                            <li>🌙 = {t.night}</li>
                            <li>🌅 = {t.dawn}</li>
                            <li>☀️ = {t.day}</li>
                            <li>🌇 = {t.dusk}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
