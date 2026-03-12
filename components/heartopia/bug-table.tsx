"use client"

import { useState, useMemo } from "react"
import { Search, X, Clock, MapPin } from "lucide-react"

interface BugRow {
    name: string
    level: string
    location: string
    time: string
    weather: string
}

interface TableUi {
    searchPlaceholder: string
    showingTemplate: string
    noResults: string
    clearAll: string
    levelLabel: string
    weatherLabel: string
    timeLabel: string
    anyTime: string
    anyWeather: string
    weatherLabels: Record<string, string>
    timeLabels: Record<string, string>
    badges: {
        event: string
        winter: string
        attractor: string
        highValue: string
    }
}

interface BugTableProps {
    rows: BugRow[]
    headers: {
        thName: string
        thLevel: string
        thLocation: string
        thTime: string
        thWeather: string
    }
    frostNote?: string
    legendNote?: string
    ui?: TableUi
}

const DEFAULT_UI: TableUi = {
    searchPlaceholder: "Search bug name or location…",
    showingTemplate: "Showing {count} of {total} insects",
    noResults: "No bugs found. Try adjusting your filters.",
    clearAll: "Clear all filters",
    levelLabel: "Lv:",
    weatherLabel: "Weather:",
    timeLabel: "Time:",
    anyTime: "Any time",
    anyWeather: "Any weather",
    weatherLabels: {
        rainy: "🌧️ Rainy", sunny: "☀️ Sunny", rainbow: "🌈 Rainbow",
        all: "🌤️ All Weather", event: "🎪 Event", winter: "❄️ Winter Season"
    },
    timeLabels: {
        all: "🕐 Any Time", night: "🌙 Night", morning: "🌅 Morning", evening: "🌆 Evening"
    },
    badges: { event: "Event", winter: "Winter", attractor: "Attractor", highValue: "💰 High $" }
}

const LEVEL_COLORS: Record<string, string> = {
    "1": "bg-green-100 text-green-700",
    "2": "bg-lime-100 text-lime-700",
    "3": "bg-yellow-100 text-yellow-700",
    "4": "bg-orange-100 text-orange-700",
    "5": "bg-red-100 text-red-700",
    "6": "bg-purple-100 text-purple-700",
}

function getWeatherIcon(weather: string) {
    const w = weather.toLowerCase()
    if (w.includes("winter")) return "❄️"
    if (w.includes("rainbow")) return "🌈"
    if (w.includes("rain")) return "🌧️"
    if (w.includes("sunny")) return "☀️"
    return "🌤️"
}

function getTimeIcon(time: string) {
    const t = time.toLowerCase()
    if (t === "all") return "🕐"
    if (t.includes("night")) return "🌙"
    if (t.includes("morning")) return "🌅"
    if (t.includes("evening")) return "🌆"
    return "☀️"
}

function getLevel(level: string) {
    const match = level.match(/^(\d)/)
    return match ? match[1] : level
}

const FILTER_LEVELS = ["1", "2", "3", "4", "5", "6"]
const FILTER_WEATHER = ["rainy", "sunny", "rainbow", "all", "event", "winter"]
const FILTER_TIME = ["all", "night", "morning", "evening"]

export function BugTable({ rows, headers, frostNote, legendNote, ui: uiProp }: BugTableProps) {
    const ui = uiProp ?? DEFAULT_UI

    const [query, setQuery] = useState("")
    const [levelFilter, setLevelFilter] = useState<string | null>(null)
    const [weatherFilter, setWeatherFilter] = useState<string | null>(null)
    const [timeFilter, setTimeFilter] = useState<string | null>(null)

    const filtered = useMemo(() => {
        return rows.filter((row) => {
            if (query && !row.name.toLowerCase().includes(query.toLowerCase()) && !row.location.toLowerCase().includes(query.toLowerCase())) {
                return false
            }
            if (levelFilter) {
                const lv = getLevel(row.level)
                if (lv !== levelFilter) return false
            }
            if (weatherFilter) {
                const w = row.weather.toLowerCase()
                if (weatherFilter === "rainy" && !w.includes("rain")) return false
                if (weatherFilter === "sunny" && !w.includes("sunny")) return false
                if (weatherFilter === "rainbow" && !w.includes("rainbow")) return false
                if (weatherFilter === "all" && w !== "all") return false
                if (weatherFilter === "event" && !row.name.includes("🎪")) return false
                if (weatherFilter === "winter" && !w.includes("winter")) return false
            }
            if (timeFilter) {
                const t = row.time.toLowerCase()
                if (timeFilter === "all" && t !== "all") return false
                if (timeFilter === "night" && !t.includes("night")) return false
                if (timeFilter === "morning" && !t.includes("morning")) return false
                if (timeFilter === "evening" && !t.includes("evening")) return false
            }
            return true
        })
    }, [rows, query, levelFilter, weatherFilter, timeFilter])

    const hasFilters = query || levelFilter || weatherFilter || timeFilter

    const showingText = ui.showingTemplate
        .replace("{count}", String(filtered.length))
        .replace("{total}", String(rows.length))

    function clearAll() {
        setQuery("")
        setLevelFilter(null)
        setWeatherFilter(null)
        setTimeFilter(null)
    }

    return (
        <div>
            {/* Search + Filters */}
            <div className="mb-5 space-y-3">
                {/* Search box */}
                <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={ui.searchPlaceholder}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-heartopia-pink/30 focus:border-heartopia-pink/50 bg-white shadow-sm"
                    />
                    {query && (
                        <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            <X size={14} />
                        </button>
                    )}
                </div>

                {/* Filter row */}
                <div className="flex flex-wrap gap-2 items-center">
                    {/* Level filters */}
                    <span className="text-xs text-gray-400 font-medium">{ui.levelLabel}</span>
                    {FILTER_LEVELS.map((lv) => (
                        <button
                            key={lv}
                            onClick={() => setLevelFilter(levelFilter === lv ? null : lv)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                                levelFilter === lv
                                    ? `${LEVEL_COLORS[lv]} border-transparent ring-2 ring-offset-1 ring-current`
                                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                            }`}
                        >
                            {lv}
                        </button>
                    ))}

                    <span className="text-xs text-gray-400 font-medium ml-1">{ui.weatherLabel}</span>
                    {FILTER_WEATHER.map((w) => (
                        <button
                            key={w}
                            onClick={() => setWeatherFilter(weatherFilter === w ? null : w)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                                weatherFilter === w
                                    ? "bg-heartopia-sky/20 border-heartopia-sky text-heartopia-sky-dark ring-1 ring-heartopia-sky"
                                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                            }`}
                        >
                            {ui.weatherLabels[w] ?? w}
                        </button>
                    ))}

                    <span className="text-xs text-gray-400 font-medium ml-1">{ui.timeLabel}</span>
                    {FILTER_TIME.map((tm) => (
                        <button
                            key={tm}
                            onClick={() => setTimeFilter(timeFilter === tm ? null : tm)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all ${
                                timeFilter === tm
                                    ? "bg-heartopia-pink/20 border-heartopia-pink text-heartopia-pink-darker ring-1 ring-heartopia-pink"
                                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                            }`}
                        >
                            {ui.timeLabels[tm] ?? tm}
                        </button>
                    ))}

                    {hasFilters && (
                        <button
                            onClick={clearAll}
                            className="ml-auto flex items-center gap-1 text-xs text-gray-500 hover:text-red-500 transition-colors"
                        >
                            <X size={12} /> {ui.clearAll}
                        </button>
                    )}
                </div>

                {/* Result count */}
                <p className="text-xs text-gray-400">{showingText}</p>
            </div>

            {/* Frost note */}
            {frostNote && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-4 flex items-start gap-2 text-sm text-blue-700">
                    <span className="shrink-0">❄️</span>
                    {frostNote}
                </div>
            )}

            {/* Bug Cards Grid */}
            {filtered.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                    <span className="text-4xl block mb-3">🐛</span>
                    <p className="text-sm">{ui.noResults}</p>
                    <button onClick={clearAll} className="mt-3 text-xs text-heartopia-pink-darker underline">{ui.clearAll}</button>
                </div>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {filtered.map((row, i) => {
                        const lv = getLevel(row.level)
                        const lvColor = LEVEL_COLORS[lv] ?? "bg-gray-100 text-gray-600"
                        const isEvent = row.name.includes("🎪")
                        const isWinter = row.name.includes("🌨")
                        const isAttractor = row.name.includes("✨")
                        const isHighValue = row.name.includes("⭐")
                        const timeVal = row.time === "All" ? ui.anyTime : row.time
                        const weatherVal = row.weather === "All" ? ui.anyWeather : row.weather

                        return (
                            <div
                                key={i}
                                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-heartopia-pink/20 transition-all p-4 flex flex-col gap-3 group"
                            >
                                {/* Name + badges */}
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="font-semibold text-gray-800 text-sm leading-snug group-hover:text-heartopia-pink-dark transition-colors">
                                        {row.name}
                                    </h3>
                                    <div className="flex gap-1 shrink-0 flex-wrap justify-end">
                                        {isEvent && <span className="text-xs bg-pink-100 text-pink-600 px-1.5 py-0.5 rounded-md font-medium">{ui.badges.event}</span>}
                                        {isWinter && <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-md font-medium">{ui.badges.winter}</span>}
                                        {isAttractor && <span className="text-xs bg-purple-100 text-purple-600 px-1.5 py-0.5 rounded-md font-medium">{ui.badges.attractor}</span>}
                                        {isHighValue && <span className="text-xs bg-yellow-100 text-yellow-600 px-1.5 py-0.5 rounded-md font-medium">{ui.badges.highValue}</span>}
                                        <span className={`text-xs px-1.5 py-0.5 rounded-md font-bold ${lvColor}`}>Lv{lv}</span>
                                    </div>
                                </div>

                                {/* Location / time / weather */}
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                        <MapPin size={11} className="text-heartopia-pink shrink-0" />
                                        <span className="leading-snug">{row.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center gap-1 text-xs text-gray-400">
                                            <Clock size={11} className="shrink-0" />
                                            {timeVal}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-gray-400">
                                            {getWeatherIcon(row.weather)} {weatherVal}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}

            {/* Legend */}
            {legendNote && (
                <p className="text-xs text-gray-400 mt-4">{legendNote}</p>
            )}
        </div>
    )
}
