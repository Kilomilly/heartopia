import React from "react"
import Link from "next/link"
import Image from "next/image"
import { getDictionary } from "@/lib/dictionary"
import { Navbar } from "@/components/heartopia/navbar"
import { Footer } from "@/components/heartopia/footer"
import { Home, Fish, Utensils, Sparkles, ArrowRight, Search } from "lucide-react"

export default async function NotFound({ params }: { params: { locale: string } }) {
    const locale = params?.locale || "en";
    const t = await getDictionary(locale as "en" | "th" | "pt" | "es");
    const n = t.notFound;

    return (
        <main className="min-h-screen bg-heartopia-cream overflow-hidden">
            <Navbar t={t.navbar} locale={locale} />

            <div className="pt-32 pb-20 px-4 flex flex-col items-center">
                <div className="max-w-4xl w-full text-center">
                    {/* Illustration Container */}
                    <div className="relative w-full max-w-lg mx-auto mb-12 aspect-[16/9] animate-float">
                        <div className="absolute inset-0 bg-heartopia-pink/10 blur-[100px] rounded-full scale-75" />
                        <Image
                            src="/images/404-illustration.png"
                            alt={n.alt404}
                            fill
                            className="object-contain relative z-10 drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Text Content */}
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
                        {n.title}
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
                        {n.message}
                    </p>

                    {/* Primary Action */}
                    <Link
                        href={`/${locale}`}
                        className="inline-flex items-center gap-2 bg-heartopia-pink text-white px-10 py-5 rounded-full font-black text-lg shadow-soft-pink hover:scale-105 transition-all duration-300 active:scale-95 group mb-20"
                    >
                        <Home className="w-5 h-5" />
                        {n.goHome}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Suggested Links */}
                    <div className="pt-12 border-t border-heartopia-pink/10">
                        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-heartopia-pink-dark mb-8">
                            {n.popularGuides}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
                            <Link
                                href={`/${locale}/guides/fishing`}
                                className="p-6 bg-white/60 rounded-[32px] border border-white hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all group"
                            >
                                <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Fish className="w-6 h-6" />
                                </div>
                                <span className="font-bold text-foreground block mb-1">{n.fishing}</span>
                                <span className="text-xs text-muted-foreground">{(n as any).fishingSub}</span>
                            </Link>

                            <Link
                                href={`/${locale}/recipes/mushroom-pie`}
                                className="p-6 bg-white/60 rounded-[32px] border border-white hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all group"
                            >
                                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Utensils className="w-6 h-6" />
                                </div>
                                <span className="font-bold text-foreground block mb-1">{n.recipes}</span>
                                <span className="text-xs text-muted-foreground">{(n as any).recipesSub}</span>
                            </Link>

                            <Link
                                href={`/${locale}/guides/housing`}
                                className="p-6 bg-white/60 rounded-[32px] border border-white hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all group"
                            >
                                <div className="w-12 h-12 bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <span className="font-bold text-foreground block mb-1">{n.housing}</span>
                                <span className="text-xs text-muted-foreground">{(n as any).housingSub}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer t={t.footer} locale={locale} />
        </main>
    )
}
