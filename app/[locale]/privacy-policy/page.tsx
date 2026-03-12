import React from "react"
import { getDictionary } from "@/lib/dictionary"
import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Home, ShieldCheck, Lock, Eye, FileText } from "lucide-react"
import { Navbar } from "@/components/heartopia/navbar"
import { Footer } from "@/components/heartopia/footer"
import { Badge } from "@/components/ui/badge"
import ReactMarkdown from 'react-markdown'

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const t = await getDictionary(locale)
    const l = t.legal.privacy

    return {
        title: l.metaTitle,
        description: t.about.metaDesc, // Reusing about desc as privacy policy often has generic meta desc
        alternates: {
            canonical: `https://theheartopia.com/${locale}/privacy-policy`,
            languages: {
                "en": "https://theheartopia.com/en/privacy-policy",
                "th": "https://theheartopia.com/th/privacy-policy",
                "pt": "https://theheartopia.com/pt/privacy-policy",
                "es": "https://theheartopia.com/es/privacy-policy",
                "x-default": "https://theheartopia.com/en/privacy-policy",
            },
        },
    }
}

export default async function PrivacyPolicyPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const t = await getDictionary(locale)
    const l = t.legal.privacy

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
                    <span className="text-foreground font-medium">{l.title}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <Badge className="bg-heartopia-sky/10 text-heartopia-sky hover:bg-heartopia-sky/20 border-none px-4 py-1 mb-6 rounded-full text-sm font-semibold uppercase tracking-wider">
                            Legal Information
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            {l.title}
                        </h1>
                        <p className="text-muted-foreground">Last Updated: January 30, 2026</p>
                    </header>

                    {/* Content Section */}
                    <div className="bg-white/60 p-8 md:p-12 rounded-[40px] border border-white shadow-soft-blue">
                        <div className="prose prose-lg prose-heartopia max-w-none">
                            <ReactMarkdown
                                components={{
                                    h3: ({ node, ...props }: any) => <h3 className="font-serif text-2xl font-bold text-foreground mt-12 mb-6" {...props} />,
                                    p: ({ node, ...props }: any) => <p className="text-muted-foreground leading-relaxed mb-6" {...props} />,
                                    li: ({ node, ...props }: any) => <li className="text-muted-foreground mb-2" {...props} />,
                                    ul: ({ node, ...props }: any) => <ul className="list-disc list-inside mb-6" {...props} />,
                                }}
                            >
                                {l.content}
                            </ReactMarkdown>
                        </div>
                    </div>

                    {/* Security Icons */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                        <div className="flex items-center gap-4 bg-white/40 p-6 rounded-3xl border border-white">
                            <ShieldCheck className="w-10 h-10 text-heartopia-pink" />
                            <div>
                                <h4 className="font-bold text-foreground text-sm">Data Protection</h4>
                                <p className="text-xs text-muted-foreground">We value your privacy</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-white/40 p-6 rounded-3xl border border-white">
                            <Lock className="w-10 h-10 text-heartopia-sky" />
                            <div>
                                <h4 className="font-bold text-foreground text-sm">Secure Site</h4>
                                <p className="text-xs text-muted-foreground">Industry standard security</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-white/40 p-6 rounded-3xl border border-white">
                            <Eye className="w-10 h-10 text-heartopia-orange" />
                            <div>
                                <h4 className="font-bold text-foreground text-sm">Transparency</h4>
                                <p className="text-xs text-muted-foreground">Open about data usage</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <Footer t={t.footer} locale={locale} />
        </main>
    )
}
