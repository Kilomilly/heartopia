import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { getDictionary } from "@/lib/dictionary"
import { Navbar } from "@/components/heartopia/navbar"
import { Footer } from "@/components/heartopia/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, CheckCircle2, ChevronRight, Gift, HelpCircle, Home, Info, ShieldAlert, Sparkles } from "lucide-react"

const LOCALES = ["en", "th", "pt", "es", "id"] as const
type Locale = (typeof LOCALES)[number]
const PATH = "events/pleasant-goat-and-big-big-wolf"

type Faq = { q: string; a: string }
type L = {
  metaTitle: string
  metaDescription: string
  breadcrumb: string
  h1: string
  badge: string
  intro: string
  quickTitle: string
  quickBody: string
  whatTitle: string
  whatBody: string
  officialTitle: string
  officialBody: string
  globalTitle: string
  globalBody: string
  rewardsTitle: string
  rewardsBody: string
  planningTitle: string
  planningBody: string
  confirmedTitle: string
  confirmedLabel: string
  reportedLabel: string
  confirmed: string[]
  reported: string[]
  searchTitle: string
  searchPoints: string[]
  categoryTitle: string
  categoryBody: string
  faqTitle: string
  faqs: Faq[]
  relatedTitle: string
  relatedIntro: string
  related: Array<{ label: string; href: string }>
  updateNote: string
}

const copy: Record<Locale, L> = {
  en: {
    metaTitle: "Heartopia x Pleasant Goat & Big Big Wolf Guide",
    metaDescription:
      "Track the Heartopia x Pleasant Goat and Big Big Wolf event: official status, server rollout, expected rewards, pass strategy, and launch timing updates.",
    breadcrumb: "Pleasant Goat Collab",
    h1: "Heartopia x Pleasant Goat and Big Big Wolf",
    badge: "Collaboration Event Guide",
    intro:
      "The Heartopia x Pleasant Goat and Big Big Wolf collaboration has been officially announced as coming soon. This page separates confirmed information, reported timing, and practical planning advice.",
    quickTitle: "Quick Answer",
    quickBody:
      "Heartopia x Pleasant Goat and Big Big Wolf is official. Public reports suggest CN-first availability while global timing is still pending full server-by-server confirmation.",
    whatTitle: "What Is This Collaboration?",
    whatBody:
      "Heartopia x Pleasant Goat and Big Big Wolf is a crossover event expected to include themed cosmetics and limited content. For most players, the core issue is event structure and reward access, not franchise lore.",
    officialTitle: "Is It Official?",
    officialBody:
      "Yes. Official Heartopia channels announced this collaboration as coming soon, so this is a confirmed event rather than a leak-only rumor.",
    globalTitle: "Is It Live on Global Servers Yet?",
    globalBody:
      "Official posts confirm the event is coming soon, but a complete global release calendar has not been fully published in public snippets. External guides report earlier CN timing and later global rollout.",
    rewardsTitle: "Expected Rewards and Content",
    rewardsBody:
      "Preview summaries mention themed outfits, cosmetics, and collaboration-specific content. Final reward lists and acquisition rules may vary by server and release phase.",
    planningTitle: "Pass Strategy and Resource Planning",
    planningBody:
      "Treat Heartopia x Pleasant Goat and Big Big Wolf as a planning event. If collaboration cosmetics are your priority, save passes now and avoid unrelated heavy spending before local rules are final.",
    confirmedTitle: "Confirmed vs Reported",
    confirmedLabel: "Confirmed",
    reportedLabel: "Reported",
    confirmed: [
      "Heartopia x Pleasant Goat and Big Big Wolf is official.",
      "Official channels posted that it is coming soon.",
      "This is a named collaboration crossover event.",
    ],
    reported: [
      "CN server timing and event duration details.",
      "Exact global release date by region.",
      "Final banner structure and total pass cost.",
      "Complete reward list for every server version.",
    ],
    searchTitle: "Why Players Search This So Aggressively",
    searchPoints: [
      "Confirmation intent: players want to verify the event is real.",
      "Timing intent: players need launch timing for their server.",
      "Planning intent: players need to decide whether to save passes now.",
    ],
    categoryTitle: "Recommended Main Category",
    categoryBody: "Primary category: Events. Secondary category: Guides. Keep this page linked to event pillars and redeem-code pages.",
    faqTitle: "FAQ",
    faqs: [
      { q: "Is Heartopia x Pleasant Goat and Big Big Wolf official?", a: "Yes. Official Heartopia channels announced it as coming soon." },
      { q: "Is it already live globally?", a: "Not fully confirmed for all regions yet. Official posts confirm coming soon, while external guides report CN-first timing." },
      { q: "Should I save passes now?", a: "If collaboration cosmetics are your priority, yes, saving passes is the safer strategy." },
      { q: "What rewards are expected?", a: "Previews suggest themed cosmetics and related event items, but final server rules may differ." },
      { q: "Where can I follow updates?", a: "Use the Events hub and related internal pages listed below." },
    ],
    relatedTitle: "Related Pages",
    relatedIntro: "Link this page with pillar and internal guides for stronger navigation and SEO clustering.",
    related: [
      { label: "Heartopia Events Guide", href: "/events" },
      { label: "Heartopia Redeem Codes", href: "/guides/heartopia-redeem-codes" },
      { label: "Heartopia Winter Frost Guide", href: "/guides/aurora-weather-banquet" },
      { label: "Heartopia Platform Availability", href: "/platforms" },
    ],
    updateNote: "This page tracks collaboration updates and will be revised when official global schedule details are published.",
  },
  th: {
    metaTitle: "Heartopia x Pleasant Goat และ Big Big Wolf Guide",
    metaDescription:
      "อัปเดต Heartopia x Pleasant Goat and Big Big Wolf: สถานะทางการ แผนเปิดแต่ละเซิร์ฟเวอร์ รางวัลที่คาดการณ์ และแนวทางวางแผนพาส",
    breadcrumb: "Pleasant Goat Collab",
    h1: "Heartopia x Pleasant Goat and Big Big Wolf",
    badge: "คู่มือ Collaboration Event",
    intro:
      "อีเวนต์ Heartopia x Pleasant Goat and Big Big Wolf ถูกประกาศทางการว่า coming soon แล้ว หน้านี้แยกข้อมูลที่ยืนยันแล้ว ข้อมูลที่ยังเป็นรายงาน และแนวทางวางแผนทรัพยากร",
    quickTitle: "สรุปเร็ว",
    quickBody:
      "Heartopia x Pleasant Goat and Big Big Wolf เป็นอีเวนต์ทางการแล้ว มีรายงานว่าเริ่มใน CN ก่อน ส่วน global ยังรอไทม์ไลน์ละเอียด",
    whatTitle: "คอลแลบนี้คืออะไร",
    whatBody:
      "Heartopia x Pleasant Goat and Big Big Wolf เป็น crossover ที่เน้นชุดและคอสเมติกแบบจำกัดเวลา สำหรับผู้เล่นทั่วไป สิ่งสำคัญคือโครงสร้างอีเวนต์และเงื่อนไขรับรางวัลของแต่ละเซิร์ฟ",
    officialTitle: "เป็นอีเวนต์ทางการไหม",
    officialBody: "ใช่ มีประกาศจากช่องทางทางการของ Heartopia แล้วว่า coming soon",
    globalTitle: "Global เปิดแล้วหรือยัง",
    globalBody:
      "ประกาศทางการยืนยันว่าอีเวนต์กำลังจะมา แต่ยังไม่มีปฏิทิน global แบบครบทุกภูมิภาคในโพสต์สาธารณะตอนนี้",
    rewardsTitle: "รางวัลและคอนเทนต์ที่คาดว่าได้",
    rewardsBody:
      "จากพรีวิวและสรุปภายนอก คาดว่าจะมีชุดธีม ของตกแต่ง และคอนเทนต์คอลแลบแบบจำกัดเวลา โดยรายละเอียดสุดท้ายอาจต่างกันตามเซิร์ฟเวอร์",
    planningTitle: "การวางแผนพาส",
    planningBody:
      "มองอีเวนต์นี้เป็นอีเวนต์วางแผนทรัพยากร ถ้าของคอลแลบคือเป้าหมายหลัก แนะนำเก็บพาสไว้ก่อนและรอกติกาเซิร์ฟตัวเอง",
    confirmedTitle: "ข้อมูลยืนยันแล้ว vs ยังเป็นรายงาน",
    confirmedLabel: "Confirmed",
    reportedLabel: "Reported",
    confirmed: [
      "คอลแลบนี้เป็นทางการ",
      "มีประกาศ coming soon",
      "เป็นการร่วมมือกับ Pleasant Goat and Big Big Wolf",
    ],
    reported: [
      "ช่วงเวลารัน CN และวันสิ้นสุด",
      "วันเปิด global แบบละเอียด",
      "โครงสร้างแบนเนอร์สุดท้ายและจำนวนพาสรวม",
      "ลิสต์รางวัลสุดท้ายทุกภูมิภาค",
    ],
    searchTitle: "ทำไมคนค้นหาหัวข้อนี้เยอะ",
    searchPoints: [
      "ยืนยันความจริงของอีเวนต์",
      "เช็กว่าเซิร์ฟตัวเองจะมาเมื่อไร",
      "ตัดสินใจว่าจะเก็บพาสตั้งแต่ตอนนี้หรือไม่",
    ],
    categoryTitle: "หมวดหลักที่แนะนำ",
    categoryBody: "หมวดหลัก: Events หมวดย่อย: Guides และควรเชื่อมไปหน้า pillar กับหน้าโค้ด",
    faqTitle: "FAQ",
    faqs: [
      { q: "คอลแลบนี้เป็นทางการไหม", a: "เป็นทางการ มีประกาศจากช่องทางของ Heartopia แล้ว" },
      { q: "Global มาเมื่อไร", a: "ยืนยันว่า coming soon แต่ยังไม่มีตารางครบทุกภูมิภาคในโพสต์สาธารณะ" },
      { q: "ควรเก็บพาสไหม", a: "ถ้าต้องการของคอลแลบ แนะนำเก็บพาสไว้ก่อน" },
      { q: "รางวัลจะมีอะไรบ้าง", a: "คาดว่าจะมีชุดและของตกแต่งธีมคอลแลบ แต่เงื่อนไขจริงขึ้นกับเซิร์ฟเวอร์" },
      { q: "ติดตามอัปเดตต่อที่ไหน", a: "ดูหน้า Events และลิงก์ที่เกี่ยวข้องด้านล่าง" },
    ],
    relatedTitle: "หน้าที่เกี่ยวข้อง",
    relatedIntro: "เชื่อมลิงก์ภายในไปหน้าที่เกี่ยวข้องเพื่อ UX และ SEO ที่ดีขึ้น",
    related: [
      { label: "คู่มือ Heartopia Events", href: "/events" },
      { label: "โค้ด Heartopia ล่าสุด", href: "/guides/heartopia-redeem-codes" },
      { label: "คู่มือ Winter Frost", href: "/guides/aurora-weather-banquet" },
      { label: "แพลตฟอร์มที่เล่นได้", href: "/platforms" },
    ],
    updateNote: "This page tracks collaboration updates and will be revised when official global schedule details are published.",
  },

  pt: {
    metaTitle: "Heartopia x Pleasant Goat & Big Big Wolf Guia",
    metaDescription:
      "Veja o status do evento Heartopia x Pleasant Goat and Big Big Wolf: anuncio oficial, rollout por servidor, recompensas esperadas e estrategia de passes.",
    breadcrumb: "Pleasant Goat Collab",
    h1: "Heartopia x Pleasant Goat and Big Big Wolf",
    badge: "Guia de colaboracao",
    intro: "A colaboracao foi anunciada oficialmente como coming soon. Esta pagina separa fatos confirmados de informacoes reportadas.",
    quickTitle: "Resposta rapida",
    quickBody: "A colaboracao e oficial. Guias publicos indicam CN primeiro e global depois, ainda sem calendario final completo.",
    whatTitle: "O que e esta colaboracao?",
    whatBody: "E um crossover com visuais tematicos e conteudo limitado. O ponto central para jogadores e estrutura do evento por servidor.",
    officialTitle: "E oficial?",
    officialBody: "Sim. Os canais oficiais de Heartopia anunciaram a colaboracao como coming soon.",
    globalTitle: "Ja esta no global?",
    globalBody: "Ainda sem calendario global completo nos trechos publicos atuais, apesar da confirmacao oficial de que o evento esta chegando.",
    rewardsTitle: "Recompensas esperadas",
    rewardsBody: "Previews citam roupas tematicas, cosmeticos e itens de colaboracao. A versao final pode variar por servidor.",
    planningTitle: "Planejamento de passes",
    planningBody: "Se sua prioridade e o visual da colaboracao, guarde passes e espere regras finais do seu servidor.",
    confirmedTitle: "Confirmado vs Reportado",
    confirmedLabel: "Confirmado",
    reportedLabel: "Reportado",
    confirmed: ["A colaboracao e oficial.", "Anuncio publico diz coming soon.", "Parceria foi nomeada oficialmente."],
    reported: ["Datas detalhadas de CN.", "Data global exata por regiao.", "Estrutura final de banners e custo total.", "Lista final de recompensas por servidor."],
    searchTitle: "Por que a busca esta alta",
    searchPoints: ["Confirmacao", "Timing por servidor", "Planejamento de passes"],
    categoryTitle: "Categoria principal recomendada",
    categoryBody: "Categoria principal: Events. Secundaria: Guides.",
    faqTitle: "FAQ",
    faqs: [
      { q: "A colaboracao e oficial?", a: "Sim." },
      { q: "Ja esta no global?", a: "Ainda sem calendario global completo em anuncio publico." },
      { q: "Vale guardar passes?", a: "Sim, se a colaboracao for prioridade." },
      { q: "Quais recompensas?", a: "Previews apontam roupas e cosmeticos tematicos." },
      { q: "Onde acompanhar?", a: "No hub de eventos e guias relacionados." },
    ],
    relatedTitle: "Paginas relacionadas",
    relatedIntro: "Conecte esta pagina com guias sazonais para melhor navegacao e SEO.",
    related: [
      { label: "Guia de Events", href: "/events" },
      { label: "Codigos Heartopia", href: "/guides/heartopia-redeem-codes" },
      { label: "Guia Winter Frost", href: "/guides/aurora-weather-banquet" },
      { label: "Plataformas Heartopia", href: "/platforms" },
    ],
    updateNote: "Esta pagina acompanha atualizacoes da colaboracao e sera revisada quando houver calendario global oficial.",
  },
  es: {
    metaTitle: "Heartopia x Pleasant Goat y Big Big Wolf Guia",
    metaDescription:
      "Consulta el evento Heartopia x Pleasant Goat and Big Big Wolf: estado oficial, rollout por servidor, recompensas esperadas y estrategia de pases.",
    breadcrumb: "Pleasant Goat Collab",
    h1: "Heartopia x Pleasant Goat and Big Big Wolf",
    badge: "Guia de colaboracion",
    intro: "La colaboracion fue anunciada oficialmente como coming soon. Esta guia separa datos confirmados y datos reportados.",
    quickTitle: "Respuesta rapida",
    quickBody: "La colaboracion es oficial. Reportes publicos indican salida en CN primero y global despues.",
    whatTitle: "Que es esta colaboracion?",
    whatBody: "Es un crossover con outfits tematicos y contenido limitado. Lo clave es estructura y rewards por servidor.",
    officialTitle: "Es oficial?",
    officialBody: "Si. Fue anunciada por canales oficiales de Heartopia.",
    globalTitle: "Ya esta en global?",
    globalBody: "Aun no hay calendario global completo en anuncios publicos para todas las regiones.",
    rewardsTitle: "Recompensas esperadas",
    rewardsBody: "Previews y guias externas mencionan outfits y cosmeticos tematicos; la version final puede variar por servidor.",
    planningTitle: "Estrategia de pases",
    planningBody: "Si te importan los cosmeticos de colaboracion, conviene guardar pases y esperar reglas oficiales de tu servidor.",
    confirmedTitle: "Confirmado vs Reportado",
    confirmedLabel: "Confirmado",
    reportedLabel: "Reportado",
    confirmed: ["La colaboracion es oficial.", "Anuncio publico dice coming soon.", "La alianza esta confirmada."],
    reported: ["Fechas de CN.", "Fecha global exacta.", "Estructura final de banners.", "Lista final de recompensas por servidor."],
    searchTitle: "Por que se busca tanto",
    searchPoints: ["Confirmacion", "Timing", "Planificacion"],
    categoryTitle: "Categoria principal recomendada",
    categoryBody: "Categoria principal: Events. Secundaria: Guides.",
    faqTitle: "FAQ",
    faqs: [
      { q: "Es oficial?", a: "Si." },
      { q: "Ya global?", a: "Aun no con calendario completo." },
      { q: "Ahorro pases?", a: "Si, si buscas los cosmeticos." },
      { q: "Que rewards?", a: "Outfits y cosmeticos en previews." },
      { q: "Donde ver updates?", a: "Events hub y guias relacionadas." },
    ],
    relatedTitle: "Paginas relacionadas",
    relatedIntro: "Conecta esta pagina con guias de invierno para mejorar SEO y navegacion.",
    related: [
      { label: "Guia de Events", href: "/events" },
      { label: "Codigos Heartopia", href: "/guides/heartopia-redeem-codes" },
      { label: "Guia Winter Frost", href: "/guides/aurora-weather-banquet" },
      { label: "Plataformas Heartopia", href: "/platforms" },
    ],
    updateNote: "Esta pagina sigue las novedades de la colaboracion y se actualizara cuando se publique el calendario global oficial.",
  },
  id: {
    metaTitle: "Heartopia x Pleasant Goat & Big Big Wolf Guide",
    metaDescription:
      "Pantau event Heartopia x Pleasant Goat and Big Big Wolf: status resmi, rollout server, reward yang diperkirakan, strategi pass, dan update jadwal rilis.",
    breadcrumb: "Pleasant Goat Collab",
    h1: "Heartopia x Pleasant Goat and Big Big Wolf",
    badge: "Panduan event kolaborasi",
    intro: "Kolaborasi ini sudah diumumkan resmi sebagai coming soon. Halaman ini memisahkan info terkonfirmasi dan info laporan pihak ketiga.",
    quickTitle: "Jawaban cepat",
    quickBody: "Kolaborasi resmi. Laporan publik menyebut CN lebih dulu, global menyusul setelah jadwal final.",
    whatTitle: "Apa itu kolaborasi ini?",
    whatBody: "Crossover dengan outfit tematik dan konten terbatas. Fokus utama pemain: struktur event dan reward per server.",
    officialTitle: "Apakah resmi?",
    officialBody: "Ya, diumumkan oleh kanal resmi Heartopia.",
    globalTitle: "Sudah live di global?",
    globalBody: "Belum ada kalender global lengkap di pengumuman publik saat ini.",
    rewardsTitle: "Reward yang diperkirakan",
    rewardsBody: "Preview menyebut outfit tematik, kosmetik, dan item kolaborasi. Aturan final bisa beda antar server.",
    planningTitle: "Strategi pass",
    planningBody: "Kalau kosmetik kolaborasi prioritas kamu, simpan pass sekarang dan tunggu aturan final server kamu.",
    confirmedTitle: "Terkonfirmasi vs Dilaporkan",
    confirmedLabel: "Terkonfirmasi",
    reportedLabel: "Dilaporkan",
    confirmed: ["Kolaborasi resmi.", "Ada pengumuman coming soon.", "Partnership diumumkan secara publik."],
    reported: ["Detail jadwal CN.", "Tanggal global pasti.", "Struktur banner final.", "Daftar reward final per server."],
    searchTitle: "Kenapa pencarian tinggi",
    searchPoints: ["Konfirmasi", "Waktu rilis", "Perencanaan pass"],
    categoryTitle: "Kategori utama yang direkomendasikan",
    categoryBody: "Kategori utama: Events. Sekunder: Guides.",
    faqTitle: "FAQ",
    faqs: [
      { q: "Apakah resmi?", a: "Ya." },
      { q: "Sudah global?", a: "Belum ada kalender global lengkap di pengumuman publik." },
      { q: "Perlu simpan pass?", a: "Ya, jika kosmetik kolaborasi prioritas." },
      { q: "Reward apa?", a: "Preview paling sering menyebut outfit dan kosmetik tematik." },
      { q: "Cek update di mana?", a: "Lihat Events hub dan halaman terkait." },
    ],
    relatedTitle: "Halaman terkait",
    relatedIntro: "Hubungkan halaman ini dengan pillar dan internal page untuk navigasi dan SEO.",
    related: [
      { label: "Panduan Events Heartopia", href: "/events" },
      { label: "Kode redeem Heartopia", href: "/guides/heartopia-redeem-codes" },
      { label: "Panduan Winter Frost", href: "/guides/aurora-weather-banquet" },
      { label: "Platform Heartopia", href: "/platforms" },
    ],
    updateNote: "Halaman ini melacak update kolaborasi dan akan diperbarui saat jadwal global resmi dipublikasikan.",
  },
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const l = LOCALES.includes(locale as Locale) ? (locale as Locale) : "en"
  const c = copy[l]
  const url = `https://theheartopia.com/${l}/${PATH}`
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        en: `https://theheartopia.com/en/${PATH}`,
        th: `https://theheartopia.com/th/${PATH}`,
        pt: `https://theheartopia.com/pt/${PATH}`,
        es: `https://theheartopia.com/es/${PATH}`,
        id: `https://theheartopia.com/id/${PATH}`,
        "x-default": `https://theheartopia.com/en/${PATH}`,
      },
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url,
      siteName: "Heartopia Guide",
      type: "article",
      images: [{ url: "https://theheartopia.com/images/heartopia-preview.png", width: 1200, height: 630, alt: c.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.metaTitle,
      description: c.metaDescription,
      images: ["https://theheartopia.com/images/heartopia-preview.png"],
    },
  }
}

export default async function PleasantGoatPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const l = LOCALES.includes(locale as Locale) ? (locale as Locale) : "en"
  const c = copy[l]
  const t: any = await getDictionary(l)
  const pageUrl = `https://theheartopia.com/${l}/${PATH}`

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t.navbar.home, item: `https://theheartopia.com/${l}` },
        { "@type": "ListItem", position: 2, name: t.navbar.events, item: `https://theheartopia.com/${l}/events` },
        { "@type": "ListItem", position: 3, name: c.breadcrumb, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: c.h1,
      description: c.metaDescription,
      mainEntityOfPage: pageUrl,
      author: { "@type": "Organization", name: "Heartopia Guide" },
      publisher: { "@type": "Organization", name: "Heartopia Guide", url: "https://theheartopia.com" },
      datePublished: "2026-03-11",
      dateModified: "2026-03-11",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: c.faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
    },
  ]

  return (
    <main className="min-h-screen bg-[#FEF9F3]">
      <Script id="pleasant-goat-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar t={t.navbar} locale={l} />

      <nav className="pt-28 pb-4 px-4" aria-label="Breadcrumb">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <Link href={`/${l}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1"><Home className="w-4 h-4" /> {t.navbar.home}</Link>
          <ChevronRight className="w-4 h-4 shrink-0" />
          <Link href={`/${l}/events`} className="hover:text-heartopia-pink-dark transition-colors">{t.navbar.events}</Link>
          <ChevronRight className="w-4 h-4 shrink-0" />
          <span className="text-foreground font-medium">{c.breadcrumb}</span>
        </div>
      </nav>

      <article className="max-w-5xl mx-auto px-4 pb-24">
        <header className="mb-10">
          <Badge className="bg-heartopia-pink text-white border-none px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"><Sparkles className="w-3.5 h-3.5 mr-2" /> {c.badge}</Badge>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4 leading-tight">{c.h1}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{c.intro}</p>
        </header>

        <div className="space-y-8">
          <section className="bg-white rounded-3xl border border-orange-100 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-600" />{c.quickTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{c.quickBody}</p>
          </section>

          <section className="bg-white rounded-3xl border border-orange-100 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-3">{c.whatTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{c.whatBody}</p>
          </section>

          <section className="bg-white rounded-3xl border border-orange-100 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-3">{c.officialTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{c.officialBody}</p>
          </section>

          <section className="bg-white rounded-3xl border border-orange-100 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-2"><Calendar className="w-5 h-5 text-heartopia-pink" />{c.globalTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{c.globalBody}</p>
          </section>

          <section className="bg-white rounded-3xl border border-orange-100 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-2"><Gift className="w-5 h-5 text-heartopia-pink" />{c.rewardsTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{c.rewardsBody}</p>
          </section>

          <section className="bg-white rounded-3xl border border-orange-100 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-3">{c.planningTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{c.planningBody}</p>
          </section>

          <section className="bg-white rounded-3xl border border-orange-100 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4">{c.confirmedTitle}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
                <h3 className="font-bold text-foreground mb-2">{c.confirmedLabel}</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">{c.confirmed.map((item) => <li key={item}>- {item}</li>)}</ul>
              </div>
              <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4">
                <h3 className="font-bold text-foreground mb-2">{c.reportedLabel}</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">{c.reported.map((item) => <li key={item}>- {item}</li>)}</ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-3xl border border-orange-100 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-3">{c.searchTitle}</h2>
            <ul className="space-y-1.5 text-sm text-muted-foreground">{c.searchPoints.map((p) => <li key={p}>- {p}</li>)}</ul>
          </section>

          <section className="bg-white rounded-3xl border border-orange-100 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-3">{c.categoryTitle}</h2>
            <p className="text-muted-foreground leading-relaxed">{c.categoryBody}</p>
          </section>

          <section className="bg-white rounded-3xl border border-orange-100 p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2"><HelpCircle className="w-5 h-5 text-heartopia-pink" />{c.faqTitle}</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {c.faqs.map((faq, idx) => (
                <AccordionItem key={faq.q} value={`faq-${idx}`} className="rounded-xl border border-orange-100 bg-orange-50/40 px-4">
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="border-t border-orange-100 pt-8">
            <h2 className="text-2xl font-bold text-foreground mb-3">{c.relatedTitle}</h2>
            <p className="text-sm text-muted-foreground mb-4 flex items-start gap-2"><Info className="w-4 h-4 mt-0.5 shrink-0 text-heartopia-pink-darker" />{c.relatedIntro}</p>
            <div className="grid md:grid-cols-2 gap-3">
              {c.related.map((item) => (
                <Link key={item.href} href={`/${l}${item.href}`} className="group rounded-2xl border border-orange-100 bg-white px-5 py-4 shadow-sm hover:border-heartopia-pink transition-colors flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-heartopia-pink-dark group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
            <p className="text-sm text-amber-900 leading-relaxed">{c.updateNote}</p>
          </section>
        </div>
      </article>

      <Footer t={t.footer} locale={l} />
    </main>
  )
}


