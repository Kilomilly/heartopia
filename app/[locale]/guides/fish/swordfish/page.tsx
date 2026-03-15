import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import {
    ChevronRight,
    Home,
    BookOpen,
    Target,
    MapPin,
    Clock,
    AlertTriangle,
    Coins,
    Waves,
    Fish,
    Rainbow,
    HelpCircle
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
import { getDictionary } from "@/lib/dictionary"

const LOCALES = ["en", "th", "pt", "es", "id"] as const
type Locale = (typeof LOCALES)[number]
const PAGE_SLUG = "/guides/fish/swordfish"

type Copy = {
    metaTitle: string
    metaDescription: string
    guides: string
    fish: string
    badge: string
    heroTitle: string
    heroDesc: string
    intro: string
    tocTitle: string
    quickAnswerTitle: string
    quickAnswer: string
    facts: Array<{ label: string; value: string }>
    locationTitle: string
    location: string
    requirementsTitle: string
    requirements: string[]
    routeTitle: string
    route: string[]
    worthTitle: string
    worth: string
    troubleshootingTitle: string
    troubleshooting: string[]
    faqTitle: string
    faq: Array<{ q: string; a: string }>
    relatedTitle: string
    related: Array<{ href: string; title: string; desc: string; icon: "fish" | "rainbow" | "map" | "waves" }>
}

const copyByLocale: Record<Locale, Copy> = {
    en: {
        metaTitle: "Swordfish in Heartopia: Location, Level & Weather",
        metaDescription: "Find Swordfish in Heartopia with the best sea route, Rainbow weather window, level 10 requirement, daytime timing, and fast troubleshooting tips.",
        guides: "Guides",
        fish: "Fish",
        badge: "Sea Fishing Guide",
        heroTitle: "Swordfish in Heartopia",
        heroDesc: "Swordfish in Heartopia is a late-game Rainbow ocean catch. Players usually miss it because Swordfish needs the right sea route, daytime timing, and Fishing Level 10.",
        intro: "This page explains where to catch Swordfish in Heartopia, how to reach the correct sea area, why Rainbow weather matters, and which pillar pages should support this page for stronger internal linking.",
        tocTitle: "Quick Navigation",
        quickAnswerTitle: "Quick Answer",
        quickAnswer: "Treat Swordfish in Heartopia as an advanced ocean fish. Go to Fishing Village, talk to Bill, use the sea-fishing route, fish during Rainbow weather, and stay in the daytime window.",
        facts: [
            { label: "Fish", value: "Swordfish" },
            { label: "Fishing Level", value: "Level 10" },
            { label: "Weather", value: "Rainbow" },
            { label: "Best Time", value: "Daytime, usually 6 AM to 6 PM" },
            { label: "Best Route", value: "Fishing Village > Bill > sea fishing" },
            { label: "Type", value: "High-value ocean Rainbow fish" },
        ],
        locationTitle: "Where to Catch Swordfish in Heartopia",
        location: "Swordfish in Heartopia is best treated as a deep-sea or advanced ocean target, not a normal shoreline fish. Public guides may call the area Whale Sea, deep sea, or boat-access sea fishing, but all of them point toward the same player-facing route: Fishing Village, Bill, and advanced ocean access. For broader context, link this page with the Fish Locations pillar and the main Fishing Guide.",
        requirementsTitle: "Swordfish Requirements",
        requirements: [
            "Fishing Level 10 is commonly required.",
            "Rainbow weather is consistently associated with Swordfish.",
            "Daytime is the safest timing, often around 6 AM to 6 PM.",
        ],
        routeTitle: "Fastest Route",
        route: [
            "Check your watch and confirm Rainbow weather.",
            "Fast travel to Fishing Village immediately.",
            "Find Bill and enter the sea-fishing route.",
            "Target large ocean shadows in the daytime window.",
        ],
        worthTitle: "Is Swordfish Worth Catching?",
        worth: "Yes. Swordfish in Heartopia is usually grouped with premium Rainbow ocean fish, so it is a strong priority during limited Rainbow weather windows. It is especially valuable when compared with lower-value inland catches.",
        troubleshootingTitle: "Why Swordfish Is Not Spawning",
        troubleshooting: [
            "Your Fishing Level is below 10.",
            "Rainbow weather is not active yet.",
            "You are fishing on a normal coast instead of Bill's route.",
            "You are outside the common daytime window.",
            "You are ignoring large ocean shadows.",
        ],
        faqTitle: "Swordfish FAQ",
        faq: [
            { q: "Where do you catch Swordfish in Heartopia?", a: "The safest route is Fishing Village, then Bill, then advanced sea fishing or deep-sea access." },
            { q: "Do you need Rainbow weather for Swordfish?", a: "Yes. Public guides consistently associate Swordfish with Rainbow weather." },
            { q: "What level do you need for Swordfish?", a: "Swordfish is commonly listed at Fishing Level 10." },
            { q: "Can you catch Swordfish at night?", a: "Most references point to a daytime window rather than night." },
            { q: "Is Swordfish worth prioritizing?", a: "Yes. It is one of the better Rainbow ocean targets." },
        ],
        relatedTitle: "Related Fishing Pages",
        related: [
            { href: "/guides/fishing", title: "Fishing Guide", desc: "Core mechanics, Bill access, bait, and tension tips.", icon: "fish" },
            { href: "/guides/rainbow-fish", title: "Rainbow Fish Guide", desc: "Best Rainbow route and top priority fish.", icon: "rainbow" },
            { href: "/guides/fish-locations", title: "Fish Locations", desc: "Pillar page for ocean, river, and lake fish.", icon: "map" },
            { href: "/guides/fish", title: "All Fish List", desc: "Compare Swordfish with other late-game fish.", icon: "waves" },
        ],
    },
    th: {
        metaTitle: "Swordfish ใน Heartopia: จุดตก เลเวล และอากาศ",
        metaDescription: "ดูวิธีหา Swordfish ใน Heartopia พร้อมเส้นทางทะเลที่ดีที่สุด อากาศ Rainbow เลเวล 10 ช่วงเวลา และวิธีแก้ปัญหาแบบเร็ว",
        guides: "คู่มือ",
        fish: "ปลา",
        badge: "คู่มือตกปลาทะเล",
        heroTitle: "Swordfish ใน Heartopia",
        heroDesc: "Swordfish ใน Heartopia เป็นปลาทะเลช่วงท้ายเกมที่ผูกกับอากาศ Rainbow ผู้เล่นมักพลาดเพราะต้องใช้เส้นทางที่ถูกต้อง ช่วงเวลาที่ตรง และ Fishing Level 10",
        intro: "หน้านี้สรุปว่า Swordfish ใน Heartopia ตกที่ไหน ไปยังพื้นที่ทะเลที่ถูกอย่างไร ทำไมอากาศ Rainbow จึงสำคัญ และควรเชื่อมหน้านี้กับหน้า pillar ใดเพื่อให้ internal link แข็งแรงขึ้น",
        tocTitle: "นำทางด่วน",
        quickAnswerTitle: "คำตอบด่วน",
        quickAnswer: "ให้มอง Swordfish ใน Heartopia เป็นปลาทะเลขั้นสูง ไปที่ Fishing Village คุยกับ Bill ใช้เส้นทาง sea fishing ตกปลาในช่วง Rainbow และอยู่ในช่วงเวลากลางวัน",
        facts: [
            { label: "ปลา", value: "Swordfish" },
            { label: "เลเวลตกปลา", value: "เลเวล 10" },
            { label: "อากาศ", value: "Rainbow" },
            { label: "เวลาที่ดีที่สุด", value: "กลางวัน มัก 6:00 ถึง 18:00" },
            { label: "เส้นทางที่ดีที่สุด", value: "Fishing Village > Bill > sea fishing" },
            { label: "ประเภท", value: "ปลาทะเล Rainbow มูลค่าสูง" },
        ],
        locationTitle: "Swordfish ใน Heartopia ตกที่ไหน",
        location: "Swordfish ใน Heartopia ควรถูกมองว่าเป็นเป้าหมายทะเลลึกหรือทะเลขั้นสูง ไม่ใช่ปลาชายฝั่งธรรมดา ไกด์สาธารณะอาจเรียกพื้นที่ว่า Whale Sea, deep sea หรือ sea fishing แบบเรือ แต่ทั้งหมดชี้ไปยังเส้นทางเดียวกัน คือ Fishing Village, Bill และการเข้าถึงทะเลขั้นสูง หากต้องการบริบทที่กว้างขึ้น ควรเชื่อมหน้านี้กับหน้า Fish Locations และหน้า Fishing Guide",
        requirementsTitle: "เงื่อนไขของ Swordfish",
        requirements: [
            "โดยทั่วไปต้องใช้ Fishing Level 10",
            "Swordfish เชื่อมกับอากาศ Rainbow อย่างสม่ำเสมอ",
            "ช่วงกลางวันเป็นเวลาที่ปลอดภัยที่สุด มักประมาณ 6:00 ถึง 18:00",
        ],
        routeTitle: "เส้นทางที่เร็วที่สุด",
        route: [
            "เช็กนาฬิกาและยืนยันว่าอากาศเป็น Rainbow",
            "วาร์ปไป Fishing Village ทันที",
            "หา Bill แล้วเข้าเส้นทาง sea fishing",
            "เน้นเงาปลาทะเลขนาดใหญ่ในช่วงกลางวัน",
        ],
        worthTitle: "Swordfish คุ้มค่าที่จะตกไหม",
        worth: "คุ้มค่า Swordfish ใน Heartopia มักถูกจัดอยู่ในกลุ่มปลาทะเล Rainbow มูลค่าสูง จึงควรเป็นเป้าหมายสำคัญเมื่อช่วง Rainbow มีเวลาจำกัด โดยเฉพาะเมื่อเทียบกับปลาน้ำจืดมูลค่าต่ำ",
        troubleshootingTitle: "ทำไม Swordfish ไม่เกิด",
        troubleshooting: [
            "Fishing Level ของคุณยังไม่ถึง 10",
            "อากาศ Rainbow ยังไม่เริ่มจริง",
            "คุณตกที่ชายฝั่งปกติ แทนเส้นทางของ Bill",
            "คุณตกนอกช่วงเวลากลางวัน",
            "คุณมองข้ามเงาปลาทะเลขนาดใหญ่",
        ],
        faqTitle: "คำถามที่พบบ่อยเกี่ยวกับ Swordfish",
        faq: [
            { q: "Swordfish ใน Heartopia ตกที่ไหน?", a: "เส้นทางที่ปลอดภัยที่สุดคือไป Fishing Village หา Bill แล้วเข้าสู่ sea fishing หรือทางเข้าทะเลลึก" },
            { q: "ต้องใช้อากาศ Rainbow ไหม?", a: "ใช่ ไกด์สาธารณะส่วนใหญ่เชื่อม Swordfish กับอากาศ Rainbow อย่างสม่ำเสมอ" },
            { q: "ต้องใช้เลเวลเท่าไร?", a: "โดยทั่วไป Swordfish มักระบุว่าต้องใช้ Fishing Level 10" },
            { q: "จับ Swordfish ตอนกลางคืนได้ไหม?", a: "ข้อมูลส่วนใหญ่ชี้ไปที่ช่วงกลางวันมากกว่ากลางคืน" },
            { q: "ควรให้ความสำคัญกับ Swordfish ไหม?", a: "ควร เพราะเป็นหนึ่งในเป้าหมายปลาทะเล Rainbow ที่คุ้มค่าที่สุด" },
        ],
        relatedTitle: "หน้าตกปลาที่เกี่ยวข้อง",
        related: [
            { href: "/guides/fishing", title: "Fishing Guide", desc: "กลไกหลัก การหา Bill เหยื่อ และเทคนิค tension", icon: "fish" },
            { href: "/guides/rainbow-fish", title: "Rainbow Fish Guide", desc: "เส้นทาง Rainbow ที่ดีที่สุดและลำดับความสำคัญของปลา", icon: "rainbow" },
            { href: "/guides/fish-locations", title: "Fish Locations", desc: "หน้า pillar สำหรับปลาในทะเล แม่น้ำ และทะเลสาบ", icon: "map" },
            { href: "/guides/fish", title: "All Fish List", desc: "เปรียบเทียบ Swordfish กับปลาช่วงท้ายเกมชนิดอื่น", icon: "waves" },
        ],
    },
    pt: {
        metaTitle: "Swordfish em Heartopia: local, nivel e clima",
        metaDescription: "Descubra onde pegar Swordfish em Heartopia com a melhor rota do mar, clima Rainbow, nivel 10, horario diurno e dicas rapidas",
        guides: "Guias",
        fish: "Peixes",
        badge: "Guia de pesca no mar",
        heroTitle: "Swordfish em Heartopia",
        heroDesc: "Swordfish em Heartopia e um peixe oceanico de late game ligado ao clima Rainbow. Muitos jogadores perdem esse peixe porque ele exige rota certa, horario certo e Fishing Level 10.",
        intro: "Esta pagina explica onde pegar Swordfish em Heartopia, como chegar a area correta do mar, por que o clima Rainbow importa e quais paginas pillar devem apoiar esta pagina com links internos.",
        tocTitle: "Navegacao rapida",
        quickAnswerTitle: "Resposta rapida",
        quickAnswer: "Trate Swordfish em Heartopia como um peixe oceanico avancado. Va para Fishing Village, fale com Bill, use a rota de pesca no mar, pesque durante o clima Rainbow e fique dentro do horario diurno.",
        facts: [
            { label: "Peixe", value: "Swordfish" },
            { label: "Nivel de pesca", value: "Nivel 10" },
            { label: "Clima", value: "Rainbow" },
            { label: "Melhor horario", value: "Dia, normalmente 6h as 18h" },
            { label: "Melhor rota", value: "Fishing Village > Bill > pesca no mar" },
            { label: "Tipo", value: "Peixe oceanico Rainbow de alto valor" },
        ],
        locationTitle: "Onde pegar Swordfish em Heartopia",
        location: "Swordfish em Heartopia deve ser tratado como alvo de mar profundo ou oceano avancado, nao como peixe de costa comum. Guias publicos podem chamar a area de Whale Sea, deep sea ou sea fishing por barco, mas todos apontam para a mesma rota pratica: Fishing Village, Bill e acesso oceanico avancado. Para contexto mais amplo, conecte esta pagina com Fish Locations e com o Fishing Guide.",
        requirementsTitle: "Requisitos de Swordfish",
        requirements: [
            "Fishing Level 10 e o requisito mais comum.",
            "Swordfish aparece de forma consistente junto do clima Rainbow.",
            "O horario diurno e a aposta mais segura, geralmente entre 6h e 18h.",
        ],
        routeTitle: "Rota mais rapida",
        route: [
            "Confira o relogio e confirme o clima Rainbow.",
            "Use viagem rapida para Fishing Village.",
            "Encontre Bill e entre na rota de pesca no mar.",
            "Priorize sombras grandes do oceano durante o dia.",
        ],
        worthTitle: "Vale a pena pegar Swordfish?",
        worth: "Sim. Swordfish em Heartopia costuma aparecer entre os peixes oceanicos Rainbow de maior valor, entao vale prioridade durante janelas curtas de Rainbow, especialmente em comparacao com peixes interiores de valor baixo.",
        troubleshootingTitle: "Por que Swordfish nao aparece",
        troubleshooting: [
            "Seu Fishing Level ainda esta abaixo de 10.",
            "O clima Rainbow ainda nao esta ativo.",
            "Voce esta pescando numa costa normal e nao na rota do Bill.",
            "Voce esta pescando fora do horario diurno.",
            "Voce esta ignorando sombras grandes do oceano.",
        ],
        faqTitle: "FAQ de Swordfish",
        faq: [
            { q: "Onde pegar Swordfish em Heartopia?", a: "A rota mais segura e Fishing Village, depois Bill, depois acesso a pesca no mar ou mar profundo." },
            { q: "Precisa de clima Rainbow?", a: "Sim. Guias publicos associam Swordfish ao clima Rainbow de forma consistente." },
            { q: "Qual nivel e necessario?", a: "Swordfish costuma ser listado no Fishing Level 10." },
            { q: "Da para pegar Swordfish a noite?", a: "A maioria das referencias aponta para o periodo diurno." },
            { q: "Vale priorizar Swordfish?", a: "Sim. E um dos melhores alvos oceanicos durante Rainbow." },
        ],
        relatedTitle: "Paginas relacionadas de pesca",
        related: [
            { href: "/guides/fishing", title: "Guia de Pesca", desc: "Mecanicas principais, acesso do Bill, iscas e tensao.", icon: "fish" },
            { href: "/guides/rainbow-fish", title: "Guia de Rainbow Fish", desc: "Melhor rota Rainbow e prioridades.", icon: "rainbow" },
            { href: "/guides/fish-locations", title: "Fish Locations", desc: "pagina pillar para oceano, rio e lago", icon: "map" },
            { href: "/guides/fish", title: "Lista Completa de Peixes", desc: "Compare Swordfish com outros peixes de late game.", icon: "waves" },
        ],
    },
    es: {
        metaTitle: "Swordfish en Heartopia: ubicacion, nivel y clima",
        metaDescription: "Descubre donde atrapar Swordfish en Heartopia con la mejor ruta marina, clima Rainbow, nivel 10, horario diurno y ayuda rapida",
        guides: "Guias",
        fish: "Peces",
        badge: "Guia de pesca marina",
        heroTitle: "Swordfish en Heartopia",
        heroDesc: "Swordfish en Heartopia es un pez oceanico de late game ligado al clima Rainbow. Muchos jugadores lo pierden porque requiere la ruta correcta, el horario correcto y Fishing Level 10.",
        intro: "Esta pagina explica donde capturar Swordfish en Heartopia, como llegar a la zona marina correcta, por que el clima Rainbow importa y que paginas pillar deben apoyar esta pagina con enlaces internos.",
        tocTitle: "Navegacion rapida",
        quickAnswerTitle: "Respuesta rapida",
        quickAnswer: "Trata Swordfish en Heartopia como un pez oceanico avanzado. Ve a Fishing Village, habla con Bill, usa la ruta de pesca marina, pesca durante el clima Rainbow y mantente en el horario diurno.",
        facts: [
            { label: "Pez", value: "Swordfish" },
            { label: "Nivel de pesca", value: "Nivel 10" },
            { label: "Clima", value: "Rainbow" },
            { label: "Mejor horario", value: "De dia, normalmente 6 AM a 6 PM" },
            { label: "Mejor ruta", value: "Fishing Village > Bill > pesca marina" },
            { label: "Tipo", value: "Pez oceanico Rainbow de alto valor" },
        ],
        locationTitle: "Donde capturar Swordfish en Heartopia",
        location: "Swordfish en Heartopia debe tratarse como un objetivo de mar profundo u oceano avanzado, no como un pez de costa normal. Las guias publicas pueden llamar a la zona Whale Sea, deep sea o sea fishing en barco, pero todas apuntan a la misma ruta practica: Fishing Village, Bill y acceso oceanico avanzado. Para un contexto mas amplio, conecta esta pagina con Fish Locations y con Fishing Guide.",
        requirementsTitle: "Requisitos de Swordfish",
        requirements: [
            "Fishing Level 10 es el requisito mas comun.",
            "Swordfish aparece de forma consistente con el clima Rainbow.",
            "El horario diurno es la opcion mas segura, normalmente entre 6 AM y 6 PM.",
        ],
        routeTitle: "Ruta mas rapida",
        route: [
            "Abre el reloj y confirma el clima Rainbow.",
            "Usa viaje rapido a Fishing Village.",
            "Encuentra a Bill y entra en la ruta de pesca marina.",
            "Prioriza las sombras oceanicas grandes durante el dia.",
        ],
        worthTitle: "Vale la pena capturar Swordfish?",
        worth: "Si. Swordfish en Heartopia suele agruparse con los peces oceanicos Rainbow de mayor valor, por lo que merece prioridad en ventanas Rainbow limitadas, sobre todo frente a peces interiores de valor bajo.",
        troubleshootingTitle: "Por que Swordfish no aparece",
        troubleshooting: [
            "Tu Fishing Level aun esta por debajo de 10.",
            "El clima Rainbow aun no esta activo.",
            "Estas pescando en una costa normal y no en la ruta de Bill.",
            "Estas pescando fuera del horario diurno.",
            "Estas ignorando sombras oceanicas grandes.",
        ],
        faqTitle: "FAQ de Swordfish",
        faq: [
            { q: "Donde capturar Swordfish en Heartopia?", a: "La ruta mas segura es Fishing Village, luego Bill y despues acceso a pesca marina o mar profundo." },
            { q: "Se necesita clima Rainbow?", a: "Si. Las guias publicas relacionan Swordfish con el clima Rainbow de forma constante." },
            { q: "Que nivel se necesita?", a: "Swordfish suele aparecer con Fishing Level 10." },
            { q: "Se puede capturar Swordfish de noche?", a: "La mayoria de referencias apunta al horario diurno." },
            { q: "Vale la pena priorizar Swordfish?", a: "Si. Es uno de los mejores objetivos oceanicos durante Rainbow." },
        ],
        relatedTitle: "Paginas de pesca relacionadas",
        related: [
            { href: "/guides/fishing", title: "Guia de Pesca", desc: "Mecanicas principales, acceso con Bill, cebos y tension.", icon: "fish" },
            { href: "/guides/rainbow-fish", title: "Guia de Rainbow Fish", desc: "Mejor ruta Rainbow y prioridades.", icon: "rainbow" },
            { href: "/guides/fish-locations", title: "Fish Locations", desc: "pagina pillar para oceano, rio y lago", icon: "map" },
            { href: "/guides/fish", title: "Lista completa de peces", desc: "Compara Swordfish con otros peces de late game.", icon: "waves" },
        ],
    },
    id: {
        metaTitle: "Swordfish di Heartopia: lokasi, level, dan cuaca",
        metaDescription: "Cari Swordfish di Heartopia dengan rute laut terbaik, cuaca Rainbow, syarat level 10, waktu siang, dan tips cepat mengatasinya",
        guides: "Panduan",
        fish: "Ikan",
        badge: "Panduan memancing laut",
        heroTitle: "Swordfish di Heartopia",
        heroDesc: "Swordfish di Heartopia adalah ikan laut late-game yang terkait dengan cuaca Rainbow. Banyak pemain melewatkannya karena Swordfish butuh rute yang tepat, waktu yang tepat, dan Fishing Level 10.",
        intro: "Halaman ini menjelaskan di mana menangkap Swordfish di Heartopia, cara menuju area laut yang benar, kenapa cuaca Rainbow penting, dan halaman pillar mana yang harus mendukung halaman ini lewat internal link.",
        tocTitle: "Navigasi cepat",
        quickAnswerTitle: "Jawaban cepat",
        quickAnswer: "Anggap Swordfish di Heartopia sebagai ikan laut lanjutan. Pergi ke Fishing Village, bicara dengan Bill, gunakan rute sea fishing, memancing saat cuaca Rainbow, dan tetap pada waktu siang.",
        facts: [
            { label: "Ikan", value: "Swordfish" },
            { label: "Level memancing", value: "Level 10" },
            { label: "Cuaca", value: "Rainbow" },
            { label: "Waktu terbaik", value: "Siang hari, biasanya 6 pagi sampai 6 sore" },
            { label: "Rute terbaik", value: "Fishing Village > Bill > sea fishing" },
            { label: "Tipe", value: "Ikan laut Rainbow bernilai tinggi" },
        ],
        locationTitle: "Di mana menangkap Swordfish di Heartopia",
        location: "Swordfish di Heartopia paling aman dianggap sebagai target laut dalam atau laut lanjutan, bukan ikan pantai biasa. Panduan publik mungkin menyebut areanya Whale Sea, deep sea, atau sea fishing dengan perahu, tetapi semuanya mengarah ke rute praktis yang sama: Fishing Village, Bill, dan akses laut lanjutan. Untuk konteks yang lebih luas, hubungkan halaman ini dengan Fish Locations dan Fishing Guide.",
        requirementsTitle: "Syarat Swordfish",
        requirements: [
            "Fishing Level 10 adalah syarat yang paling umum.",
            "Swordfish muncul konsisten bersama cuaca Rainbow.",
            "Waktu siang adalah pilihan paling aman, biasanya sekitar 6 pagi sampai 6 sore.",
        ],
        routeTitle: "Rute tercepat",
        route: [
            "Buka jam dan pastikan cuaca Rainbow.",
            "Gunakan fast travel ke Fishing Village.",
            "Temui Bill dan masuk ke rute sea fishing.",
            "Prioritaskan bayangan laut besar saat siang hari.",
        ],
        worthTitle: "Apakah Swordfish layak ditangkap?",
        worth: "Ya. Swordfish di Heartopia biasanya dikelompokkan dengan ikan laut Rainbow bernilai tinggi, jadi layak diprioritaskan saat jendela Rainbow terbatas, terutama dibanding tangkapan darat bernilai rendah.",
        troubleshootingTitle: "Kenapa Swordfish tidak muncul",
        troubleshooting: [
            "Fishing Level kamu masih di bawah 10.",
            "Cuaca Rainbow belum aktif.",
            "Kamu memancing di pantai biasa, bukan rute Bill.",
            "Kamu memancing di luar waktu siang.",
            "Kamu mengabaikan bayangan laut yang besar.",
        ],
        faqTitle: "FAQ Swordfish",
        faq: [
            { q: "Di mana menangkap Swordfish di Heartopia?", a: "Rute paling aman adalah Fishing Village, lalu Bill, lalu akses sea fishing atau laut dalam." },
            { q: "Apakah butuh cuaca Rainbow?", a: "Ya. Panduan publik secara konsisten mengaitkan Swordfish dengan cuaca Rainbow." },
            { q: "Level berapa yang dibutuhkan?", a: "Swordfish biasanya terdaftar pada Fishing Level 10." },
            { q: "Apakah bisa menangkap Swordfish malam hari?", a: "Sebagian besar referensi menunjuk ke waktu siang." },
            { q: "Apakah Swordfish layak diprioritaskan?", a: "Ya. Ini salah satu target laut terbaik saat Rainbow." },
        ],
        relatedTitle: "Halaman memancing terkait",
        related: [
            { href: "/guides/fishing", title: "Panduan Memancing", desc: "Mekanik utama, akses Bill, umpan, dan tension.", icon: "fish" },
            { href: "/guides/rainbow-fish", title: "Panduan Rainbow Fish", desc: "Rute Rainbow terbaik dan prioritas ikan.", icon: "rainbow" },
            { href: "/guides/fish-locations", title: "Fish Locations", desc: "halaman pillar untuk laut, sungai, dan danau", icon: "map" },
            { href: "/guides/fish", title: "Daftar Semua Ikan", desc: "Bandingkan Swordfish dengan ikan late-game lain.", icon: "waves" },
        ],
    },
}

const TH_COPY: Copy = {
    metaTitle: "Swordfish ใน Heartopia: จุดตก เลเวล และอากาศ",
    metaDescription: "ดูวิธีตก Swordfish ใน Heartopia แบบเร็วที่สุด: เส้นทางทะเลผ่าน Bill, เงื่อนไข Rainbow Weather, Fishing Level 10 และช่วงเวลากลางวันที่แนะนำ",
    guides: "ไกด์",
    fish: "ปลา",
    badge: "คู่มือตกปลาทะเล",
    heroTitle: "Swordfish ใน Heartopia",
    heroDesc: "Swordfish ใน Heartopia เป็นปลาทะเลช่วงท้ายเกมที่มักผูกกับสภาพอากาศ Rainbow ผู้เล่นจำนวนมากพลาดเพราะใช้เส้นทางผิด เวลาไม่ตรง หรือเลเวลตกปลาไม่ถึง 10",
    intro: "หน้านี้สรุปจุดตก Swordfish ใน Heartopia แบบครบ: ต้องไปที่ไหน ใช้เส้นทางทะเลอย่างไร ทำไม Rainbow Weather สำคัญ และควรเชื่อมลิงก์ไปหน้าไหนเพื่อเสริม SEO ภายในเว็บ",
    tocTitle: "สารบัญด่วน",
    quickAnswerTitle: "คำตอบแบบสั้น",
    quickAnswer: "ให้มองว่า Swordfish เป็นปลาทะเลขั้นสูง ไปที่ Fishing Village คุยกับ Bill เข้าเส้นทางตกปลาทะเล ตกในช่วง Rainbow Weather และเน้นช่วงเวลากลางวัน",
    facts: [
        { label: "ปลา", value: "Swordfish" },
        { label: "เลเวลตกปลา", value: "ระดับ 10" },
        { label: "อากาศ", value: "Rainbow" },
        { label: "เวลาที่แนะนำ", value: "กลางวัน โดยมาก 06:00-18:00" },
        { label: "เส้นทางเร็วสุด", value: "Fishing Village > Bill > sea fishing" },
        { label: "ประเภท", value: "ปลาทะเลมูลค่าสูงช่วง Rainbow" },
    ],
    locationTitle: "Swordfish อยู่ที่ไหนใน Heartopia",
    location: "Swordfish ควรตีความว่าเป็นปลาโซนทะเลลึก ไม่ใช่ปลาชายฝั่งทั่วไป บางแหล่งจะเรียก Whale Sea, deep sea หรือ sea fishing ด้วยเรือ แต่เส้นทางใช้งานจริงเหมือนกันคือ Fishing Village > Bill > เข้าโซนทะเลขั้นสูง เพื่อให้โครงสร้างเนื้อหาแข็งแรง ควรเชื่อมหน้านี้กับหน้า Fish Locations และ Fishing Guide",
    requirementsTitle: "เงื่อนไขการตก Swordfish",
    requirements: [
        "โดยทั่วไปต้องมี Fishing Level 10",
        "Swordfish มักเกิดเมื่อเป็น Rainbow Weather",
        "ช่วงเวลากลางวันปลอดภัยที่สุด มักอยู่ราว 06:00-18:00",
    ],
    routeTitle: "เส้นทางที่เร็วที่สุด",
    route: [
        "เช็กเวลาในเกมและยืนยันว่าเป็น Rainbow Weather",
        "วาร์ปไป Fishing Village ทันที",
        "คุยกับ Bill แล้วเข้าเส้นทาง sea fishing",
        "มองหาเงาปลาขนาดใหญ่ในทะเลช่วงกลางวัน",
    ],
    worthTitle: "Swordfish คุ้มค่าที่จะตกไหม",
    worth: "คุ้มค่า Swordfish มักถูกจัดอยู่ในกลุ่มปลาทะเล Rainbow มูลค่าสูง จึงเหมาะกับการเร่งฟาร์มในช่วงที่ Rainbow ขึ้น โดยเฉพาะเมื่อเทียบกับปลาน้ำจืดราคาต่ำกว่า",
    troubleshootingTitle: "ทำไม Swordfish ไม่เกิด",
    troubleshooting: [
        "เลเวลตกปลายังไม่ถึง 10",
        "ยังไม่เข้า Rainbow Weather",
        "ตกปลาที่ชายฝั่งปกติแทนเส้นทางของ Bill",
        "ตกนอกช่วงเวลากลางวันที่แนะนำ",
        "ไม่ได้โฟกัสเงาปลาทะเลขนาดใหญ่",
    ],
    faqTitle: "คำถามที่พบบ่อยเกี่ยวกับ Swordfish",
    faq: [
        { q: "Swordfish ตกที่ไหนใน Heartopia?", a: "เส้นทางที่เสถียรที่สุดคือไป Fishing Village คุยกับ Bill แล้วเข้าพื้นที่ตกปลาทะเลหรือทะเลลึก" },
        { q: "Swordfish ต้อง Rainbow Weather ไหม?", a: "โดยข้อมูลจากหลายไกด์ Swordfish มักเชื่อมกับ Rainbow Weather อย่างชัดเจน" },
        { q: "ต้องเลเวลเท่าไรถึงจะตก Swordfish ได้?", a: "โดยทั่วไปแนะนำ Fishing Level 10" },
        { q: "กลางคืนตก Swordfish ได้ไหม?", a: "ส่วนใหญ่แนะนำช่วงกลางวันมากกว่าช่วงกลางคืน" },
        { q: "ควรฟาร์ม Swordfish เป็นลำดับต้นไหม?", a: "ควร โดยเฉพาะช่วง Rainbow เพราะมูลค่าค่อนข้างสูง" },
    ],
    relatedTitle: "หน้าที่เกี่ยวข้อง",
    related: [
        { href: "/guides/fishing", title: "คู่มือการตกปลา", desc: "ระบบพื้นฐาน การเข้าถึง Bill เหยื่อ และเทคนิคดึงสาย", icon: "fish" },
        { href: "/guides/rainbow-fish", title: "คู่มือปลา Rainbow", desc: "เส้นทางฟาร์มปลา Rainbow และลำดับความสำคัญ", icon: "rainbow" },
        { href: "/guides/fish-locations", title: "ตำแหน่งปลา", desc: "หน้าหลักรวมจุดตกปลา ทะเล แม่น้ำ และทะเลสาบ", icon: "map" },
        { href: "/guides/fish", title: "รายชื่อปลาทั้งหมด", desc: "เทียบ Swordfish กับปลาอื่นในช่วงท้ายเกม", icon: "waves" },
    ],
}

function resolveLocale(locale: string): Locale {
    return LOCALES.includes(locale as Locale) ? (locale as Locale) : "en"
}

function relatedIcon(icon: Copy["related"][number]["icon"]) {
    if (icon === "rainbow") return Rainbow
    if (icon === "map") return MapPin
    if (icon === "waves") return Waves
    return Fish
}
export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const l = resolveLocale(locale)
    const copy = l === "th" ? TH_COPY : copyByLocale[l]
    const pageUrl = `https://theheartopia.com/${l}${PAGE_SLUG}`

    return {
        title: copy.metaTitle,
        description: copy.metaDescription,
        alternates: {
            canonical: pageUrl,
            languages: {
                en: `https://theheartopia.com/en${PAGE_SLUG}`,
                th: `https://theheartopia.com/th${PAGE_SLUG}`,
                pt: `https://theheartopia.com/pt${PAGE_SLUG}`,
                es: `https://theheartopia.com/es${PAGE_SLUG}`,
                id: `https://theheartopia.com/id${PAGE_SLUG}`,
                "x-default": `https://theheartopia.com/en${PAGE_SLUG}`,
            },
        },
        openGraph: {
            title: copy.metaTitle,
            description: copy.metaDescription,
            url: pageUrl,
            siteName: "Heartopia Guide",
            images: [{ url: "/images/hero-banner.webp", width: 1200, height: 630, alt: copy.heroTitle }],
            locale: l === "th" ? "th_TH" : l === "pt" ? "pt_BR" : l === "es" ? "es_ES" : l === "id" ? "id_ID" : "en_US",
            type: "article",
        },
    }
}

export default async function SwordfishPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const l = resolveLocale(locale)
    const t = await getDictionary(l)
    const copy = l === "th" ? TH_COPY : copyByLocale[l]
    const pageUrl = `https://theheartopia.com/${l}${PAGE_SLUG}`

    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: t.navbar.home, item: `https://theheartopia.com/${l}` },
                { "@type": "ListItem", position: 2, name: copy.guides, item: `https://theheartopia.com/${l}/guides/fishing` },
                { "@type": "ListItem", position: 3, name: copy.fish, item: `https://theheartopia.com/${l}/guides/fish` },
                { "@type": "ListItem", position: 4, name: copy.heroTitle, item: pageUrl },
            ],
        },
        {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: copy.metaTitle,
            description: copy.metaDescription,
            image: "https://theheartopia.com/images/hero-banner.webp",
            datePublished: "2026-03-15",
            dateModified: "2026-03-15",
            mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
            inLanguage: l,
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: copy.faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
        },
    ]

    return (
        <main className="min-h-screen bg-heartopia-cream">
            <Script id="swordfish-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
            <Navbar t={t.navbar} locale={l} />

            <nav aria-label="breadcrumb" className="pt-32 pb-6 px-4">
                <div className="max-w-5xl mx-auto flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <Link href={`/${l}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1">
                        <Home className="w-4 h-4" /> {t.navbar.home}
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href={`/${l}/guides/fishing`} className="hover:text-heartopia-pink-dark transition-colors">{copy.guides}</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href={`/${l}/guides/fish`} className="hover:text-heartopia-pink-dark transition-colors">{copy.fish}</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-foreground font-medium">{copy.heroTitle}</span>
                </div>
            </nav>

            <article className="pb-24 px-4">
                <div className="max-w-5xl mx-auto">
                    <header className="rounded-[36px] border border-white/70 bg-gradient-to-br from-white via-heartopia-warm-cream to-heartopia-sky/20 px-6 py-10 md:px-10 md:py-14 shadow-soft-blue mb-10">
                        <Badge className="bg-heartopia-pink/15 text-heartopia-pink-darker hover:bg-heartopia-pink/20 border-none px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider mb-5">
                            {copy.badge}
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5">{copy.heroTitle}</h1>
                        <p className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">{copy.heroDesc}</p>
                        <p className="max-w-3xl text-base md:text-lg text-muted-foreground leading-relaxed">{copy.intro}</p>
                    </header>
                    <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_280px] gap-8">
                        <div className="space-y-8">
                            <section className="glass rounded-[32px] p-6 border border-white/60 shadow-soft-blue">
                                <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-heartopia-pink" /> {copy.tocTitle}
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                                    {[
                                        ["quick-answer", copy.quickAnswerTitle],
                                        ["location", copy.locationTitle],
                                        ["requirements", copy.requirementsTitle],
                                        ["route", copy.routeTitle],
                                        ["worth", copy.worthTitle],
                                        ["troubleshooting", copy.troubleshootingTitle],
                                        ["faq", copy.faqTitle],
                                    ].map(([id, label]) => (
                                        <a key={id} href={`#${id}`} className="rounded-2xl bg-white/80 border border-heartopia-pink/10 px-4 py-3 text-center font-medium text-muted-foreground hover:text-heartopia-pink-darker hover:border-heartopia-pink transition-all">
                                            {label}
                                        </a>
                                    ))}
                                </div>
                            </section>

                            <section id="quick-answer" className="scroll-mt-32 rounded-[32px] border border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50 p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-11 h-11 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600"><Target className="w-6 h-6" /></div>
                                    <h2 className="font-serif text-3xl font-bold text-foreground">{copy.quickAnswerTitle}</h2>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{copy.quickAnswer}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {copy.facts.map((fact) => (
                                        <div key={fact.label} className="rounded-2xl border border-white/80 bg-white/70 p-4">
                                            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">{fact.label}</p>
                                            <p className="font-semibold text-foreground">{fact.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section id="location" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-11 h-11 rounded-2xl bg-heartopia-sky/10 flex items-center justify-center text-heartopia-sky"><MapPin className="w-6 h-6" /></div>
                                    <h2 className="font-serif text-3xl font-bold text-foreground">{copy.locationTitle}</h2>
                                </div>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{copy.location}</p>
                            </section>

                            <section id="requirements" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-11 h-11 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600"><Clock className="w-6 h-6" /></div>
                                    <h2 className="font-serif text-3xl font-bold text-foreground">{copy.requirementsTitle}</h2>
                                </div>
                                <div className="rounded-[28px] border border-white bg-white/70 p-6 shadow-sm">
                                    <ul className="space-y-3 text-muted-foreground">
                                        {copy.requirements.map((item) => (
                                            <li key={item} className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-heartopia-pink shrink-0" /><span>{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            <section id="route" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-11 h-11 rounded-2xl bg-heartopia-green/10 flex items-center justify-center text-green-600"><MapPin className="w-6 h-6" /></div>
                                    <h2 className="font-serif text-3xl font-bold text-foreground">{copy.routeTitle}</h2>
                                </div>
                                <div className="rounded-[28px] border border-heartopia-green/20 bg-white/70 p-6 shadow-soft-green">
                                    <ol className="space-y-4">
                                        {copy.route.map((step, index) => (
                                            <li key={step} className="flex items-start gap-4">
                                                <div className="w-8 h-8 rounded-full bg-heartopia-green/15 text-green-700 font-bold flex items-center justify-center shrink-0">{index + 1}</div>
                                                <span className="text-foreground">{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </section>

                            <section id="worth" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-11 h-11 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-700"><Coins className="w-6 h-6" /></div>
                                    <h2 className="font-serif text-3xl font-bold text-foreground">{copy.worthTitle}</h2>
                                </div>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{copy.worth}</p>
                            </section>

                            <section id="troubleshooting" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-11 h-11 rounded-2xl bg-red-100 flex items-center justify-center text-red-600"><AlertTriangle className="w-6 h-6" /></div>
                                    <h2 className="font-serif text-3xl font-bold text-foreground">{copy.troubleshootingTitle}</h2>
                                </div>
                                <div className="space-y-4">
                                    {copy.troubleshooting.map((item, index) => (
                                        <div key={item} className="flex items-start gap-4 rounded-[28px] border border-white bg-white/70 p-5 shadow-sm">
                                            <div className="w-9 h-9 rounded-full bg-red-50 text-red-600 font-bold flex items-center justify-center shrink-0">{index + 1}</div>
                                            <p className="text-muted-foreground leading-relaxed">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section id="faq" className="scroll-mt-32">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-11 h-11 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-500"><HelpCircle className="w-6 h-6" /></div>
                                    <h2 className="font-serif text-3xl font-bold text-foreground">{copy.faqTitle}</h2>
                                </div>
                                <div className="glass rounded-[32px] p-2 md:p-6 border border-white/50 bg-white/40 shadow-soft-blue">
                                    <Accordion type="single" collapsible className="w-full">
                                        {copy.faq.map((item, index) => (
                                            <AccordionItem key={item.q} value={`faq-${index}`} className="border-none mb-2 bg-white/50 rounded-2xl px-6">
                                                <AccordionTrigger className="text-left font-bold text-base md:text-lg hover:no-underline hover:text-heartopia-pink-dark transition-colors py-4">{item.q}</AccordionTrigger>
                                                <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed pb-6">{item.a}</AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </section>
                            <section className="pt-8 border-t border-heartopia-pink/10">
                                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">{copy.relatedTitle}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {copy.related.map((item) => {
                                        const Icon = relatedIcon(item.icon)
                                        const color = item.icon === "rainbow" ? "bg-purple-100 text-purple-600" : item.icon === "map" ? "bg-heartopia-sky/10 text-heartopia-sky" : item.icon === "waves" ? "bg-heartopia-orange/10 text-heartopia-orange" : "bg-heartopia-pink/10 text-heartopia-pink"
                                        return (
                                            <Link key={item.href} href={`/${l}${item.href}`} className="group flex items-center justify-between gap-4 rounded-[28px] border border-heartopia-pink/10 bg-white p-5 hover:border-heartopia-pink/30 hover:shadow-soft-pink transition-all">
                                                <div className="flex items-center gap-4 min-w-0">
                                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${color}`}>
                                                        <Icon className="w-6 h-6" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <h3 className="font-bold text-foreground">{item.title}</h3>
                                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                                    </div>
                                                </div>
                                                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-heartopia-pink shrink-0 transition-colors" />
                                            </Link>
                                        )
                                    })}
                                </div>
                            </section>
                        </div>

                        <aside className="space-y-5">
                            <div className="rounded-[28px] border border-white bg-white/80 p-5 shadow-soft-blue xl:sticky xl:top-28">
                                <h2 className="font-bold text-foreground mb-4 flex items-center gap-2">
                                    <Waves className="w-5 h-5 text-heartopia-sky" /> {copy.heroTitle}
                                </h2>
                                <div className="space-y-3 text-sm">
                                    {copy.facts.slice(1, 5).map((fact) => (
                                        <div key={fact.label} className="rounded-2xl bg-heartopia-sky/10 p-4">
                                            <p className="text-muted-foreground mb-1">{fact.label}</p>
                                            <p className="font-semibold text-foreground">{fact.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            <Footer t={t.footer} locale={l} />
        </main>
    )
}
