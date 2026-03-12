'use client';

import React from "react"
import Link from "next/link"
import Image from "next/image"
import {
    Utensils, Sparkles, ChefHat, Flame, Users,
    MapPin, ChevronRight, Home, Star, Snowflake, ShieldCheck
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

interface RecipeData {
    breadcrumb: string;
    heroTitle: string;
    heroDesc: string;
    imgAlts: { showcase: string };
    unlock: { title: string; desc: string; whereTitle: string; whereDesc: string };
    ingredients: {
        title: string; desc: string; base: string; dairy: string; sweetener: string; twist: string;
        banquetTitle: string; banquetDesc: string
    };
    benefits: {
        title: string; desc: string; benefit1Title: string; benefit1Desc: string;
        benefit2Title: string; benefit2Desc: string
    };
    tips: { title: string; tip1Title: string; tip1Desc: string };
    faq: { title: string; q1: string; a1: string; q2: string; a2: string };
}

interface RecipeTemplateProps {
    data: RecipeData;
    navbar: any;
    footer: any;
    locale: string;
}

export const RecipeGuideTemplate = ({ data, navbar, footer, locale }: RecipeTemplateProps) => {
    const p = data;

    return (
        <main className="min-h-screen bg-[#FEF9F3]">
            <Navbar t={navbar} locale={locale} />

            {/* Breadcrumbs */}
            <nav className="pt-32 pb-6 px-4">
                <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-muted-foreground font-medium">
                    <Link href={`/${locale}`} className="hover:text-heartopia-pink transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" /> {navbar.home}
                    </Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href={`/${locale}/guides/recipes`} className="hover:text-heartopia-pink transition-colors">{p.breadcrumb}</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-foreground">{p.heroTitle}</span>
                </div>
            </nav>

            <article className="pb-24 px-4 overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Section */}
                    <header className="mb-16 text-center">
                        <Badge className="bg-heartopia-pink/10 text-heartopia-pink-darker border-heartopia-pink/20 px-6 py-2 mb-8 rounded-full text-xs font-bold uppercase tracking-widest">
                            Official Recipes
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                            {p.heroTitle}
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
                            {p.heroDesc}
                        </p>
                    </header>



                    {/* Main Image */}
                    <div className="relative aspect-[4/3] md:aspect-video rounded-[40px] overflow-hidden shadow-2xl mb-16 group">
                        <Image
                            src="/images/guides/heartopia-frosted-pancakes-dish.png"
                            alt={p.imgAlts.showcase}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-10">
                            <div className="flex flex-wrap gap-4 text-white">
                                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20">
                                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> 5-Star Recipe
                                </div>
                                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/20">
                                    <Snowflake className="w-4 h-4 text-sky-400" /> Winter Edition
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Sections... */}
                    <div className="space-y-16">
                        <section className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-slate-100">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-black text-slate-900">{p.unlock.title}</h2>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed mb-10">{p.unlock.desc}</p>

                            <div className="grid md:grid-cols-2 gap-8 bg-blue-50/50 rounded-3xl p-8 border border-blue-100/50">
                                <div className="space-y-4">
                                    <h4 className="font-bold text-blue-900 text-lg flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-heartopia-pink" /> 1. {p.unlock.whereTitle}
                                    </h4>
                                    <p className="text-blue-800/80 font-medium leading-relaxed">{p.unlock.whereDesc}</p>
                                </div>
                                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-inner bg-white">
                                    <Image src="/images/guides/heartopia-cooking-interface.png" alt="Merchant Location" fill className="object-cover opacity-80" />
                                </div>
                            </div>
                        </section>



                        {/* Ingredients Section */}
                        <section className="bg-slate-900 rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                                        <Utensils className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-3xl font-bold">{p.ingredients.title}</h2>
                                </div>
                                <p className="text-slate-400 text-lg mb-10 font-medium leading-relaxed">{p.ingredients.desc}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[p.ingredients.base, p.ingredients.dairy, p.ingredients.sweetener, p.ingredients.twist].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-3xl group hover:bg-white/10 transition-colors">
                                            <div className="w-10 h-10 rounded-xl bg-heartopia-pink/20 flex items-center justify-center text-heartopia-pink font-bold group-hover:scale-110 transition-transform">
                                                {i + 1}
                                            </div>
                                            <span className="font-bold text-lg">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* 更多章节... */}

                    </div>
                </div>
            </article>

            <Footer t={footer} locale={locale} />
        </main>
    );
};
