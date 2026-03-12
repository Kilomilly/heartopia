import { getDictionary } from "@/lib/dictionary"
import HomeContent from "./HomeContent"
import Script from "next/script"
import { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")
  const h = t.home

  return {
    title: h.metaTitle,
    description: h.metaDesc,
    keywords: h.keywords,
    alternates: {
      canonical: `https://theheartopia.com/${locale}`,
      languages: {
        "en": "https://theheartopia.com/en",
        "th": "https://theheartopia.com/th",
        "pt": "https://theheartopia.com/pt",
        "es": "https://theheartopia.com/es",
        "id": "https://theheartopia.com/id",
        "x-default": "https://theheartopia.com/en",
      },
    },
    openGraph: {
      title: h.ogTitle,
      description: h.ogDesc,
      images: ["/images/hero-banner.webp"],
    },
  }
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getDictionary(locale as "en" | "th" | "pt" | "es" | "id")

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Heartopia Hub",
      "url": "https://theheartopia.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://theheartopia.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({
        "@type": "Question",
        "name": t.faq[`q${i}` as keyof typeof t.faq],
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t.faq[`a${i}` as keyof typeof t.faq]
        }
      }))
    }
  ]

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <HomeContent t={t} locale={locale} />
    </>
  )
}
