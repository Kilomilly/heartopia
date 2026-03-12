
import type { Metadata } from "next"
import Link from "next/link"
import { getDictionary } from "@/lib/dictionary"
import { Navbar } from "@/components/heartopia/navbar"
import { Footer } from "@/components/heartopia/footer"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
    ArrowRight,
    BookOpen,
    CheckCircle2,
    ChevronRight,
    Home,
    Info,
    ListChecks,
    ShieldAlert,
    Sparkles,
} from "lucide-react"

const LOCALES = ["en", "th", "pt", "es", "id"] as const
const PAGE_PATH = "guides/winter-snow-memories"

type Locale = (typeof LOCALES)[number]

type FaqItem = { q: string; a: string }

type PageCopy = {
    metaTitle: string
    metaDescription: string
    breadcrumb: string
    badge: string
    h1: string
    intro: string
    quickTitle: string
    quickSteps: string[]
    categoryTitle: string
    categoryBody: string
    whatTitle: string
    whatBody1: string
    whatBody2: string
    howTitle: string
    howSteps: Array<{ title: string; desc: string }>
    journalTitle: string
    journalPoints: Array<{ title: string; desc: string }>
    confusingTitle: string
    confusingPoints: Array<{ title: string; desc: string }>
    stillTitle: string
    checklistTitle: string
    checklist: string[]
    bugsTitle: string
    bugsBody: string
    fastestTitle: string
    fastestSteps: string[]
    faqTitle: string
    faqs: FaqItem[]
    relatedTitle: string
    relatedIntro: string
    relatedLinks: Array<{ label: string; href: string }>
}

const pageCopy: Record<Locale, PageCopy> = {
    en: {
        metaTitle: "Winter Snow Memories in Heartopia - How to Complete It",
        metaDescription:
            "Learn how to complete Winter Snow Memories in Heartopia, including how to edit the journal, add photos, complete a chapter, and fix common issues.",
        breadcrumb: "Winter Snow Memories",
        badge: "Winter Frost Season Guide",
        h1: "Winter Snow Memories in Heartopia",
        intro:
            "If you are stuck on Winter Snow Memories in Heartopia, the problem is usually not the task itself, it is the interface. This guide explains what to do, where to click, and how to troubleshoot journal issues.",
        quickTitle: "Quick Answer",
        quickSteps: [
            "Open your inventory.",
            "Select the Snow Fashionwave Memory Journal.",
            "Enter edit mode using the pencil or pen icon.",
            "Open or select a valid memory page.",
            "Add photos, stickers, or text until one chapter is completed.",
        ],
        categoryTitle: "Recommended Main Category",
        categoryBody:
            "Primary category: Events. Secondary category: Guides. This page should stay linked with related winter event pillar and internal pages.",
        whatTitle: "What Is Winter Snow Memories?",
        whatBody1:
            "Winter Snow Memories is part of Heartopia's Winter Frost Season content. It is tied to the Fashionwave Memory Journal system rather than being a standard collection quest.",
        whatBody2:
            "In practical terms, you need to open the seasonal memory journal, edit a valid page, and fill enough content to complete one chapter page.",
        howTitle: "How to Complete Winter Snow Memories",
        howSteps: [
            { title: "Step 1: Open Your Inventory", desc: "Locate the Snow Fashionwave Memory Journal in your inventory." },
            { title: "Step 2: Select the Journal", desc: "Open the journal item. Viewing alone is usually not enough." },
            { title: "Step 3: Enter Edit Mode", desc: "Tap the pencil or pen icon so the editing controls appear." },
            { title: "Step 4: Choose the Correct Page", desc: "Use an editable page. Pre-made pages and blank pages may behave differently." },
            { title: "Step 5: Add Content", desc: "Add photos, stickers, and text until one chapter page is meaningfully completed." },
            { title: "Step 6: Save and Recheck", desc: "Save changes, return to the task panel, and confirm progress updates." },
        ],
        journalTitle: "How the Snow Fashionwave Memory Journal Works",
        journalPoints: [
            { title: "The Journal Has Multiple Pages", desc: "Player reports commonly describe four pages in total." },
            { title: "The First Pages Are More Structured", desc: "Early pages are often pre-made templates with tighter layout rules." },
            { title: "Additional Pages Are More Flexible", desc: "Later pages are better for custom photos, stickers, and text." },
            { title: "Edit Mode Matters", desc: "Viewing mode is different from editing mode and often causes confusion." },
        ],
        confusingTitle: "Why Winter Snow Memories Is So Confusing",
        confusingPoints: [
            { title: "1. The Name Does Not Explain the Action", desc: "It sounds like a passive objective, but it requires active journal editing." },
            { title: "2. The Edit Button Is Easy to Miss", desc: "Many players miss the pencil icon and think the feature is bugged." },
            { title: "3. Winter Event Systems Feel Overloaded", desc: "Multiple seasonal systems overlap, increasing UI confusion." },
        ],
        stillTitle: "Why You Still Cannot Complete It",
        checklistTitle: "Troubleshooting Checklist",
        checklist: [
            "Did you enter edit mode using the pencil icon?",
            "Are you editing the journal instead of only opening it?",
            "Did you add content to a valid chapter page?",
            "Did you save and reopen the journal?",
            "Is the journal bugged after reopening?",
        ],
        bugsTitle: "Known Bugs and Journal Issues",
        bugsBody:
            "Common reports include images replacing content on other pages, unstable layouts, and missing photo options. If this happens, save and reopen, try another editable page, relaunch the game, and check maintenance notes.",
        fastestTitle: "Fastest Way to Finish Winter Snow Memories",
        fastestSteps: [
            "Open the Snow Fashionwave Memory Journal.",
            "Tap the pencil icon.",
            "Open an editable page.",
            "Add several photos or decorations.",
            "Save and recheck task progress.",
        ],
        faqTitle: "FAQ: Winter Snow Memories",
        faqs: [
            {
                q: "How do I edit Winter Snow Memories in Heartopia?",
                a: "Open the Snow Fashionwave Memory Journal from your inventory and use the pencil or pen icon to enter edit mode.",
            },
            {
                q: "Why can't I add photos to the journal?",
                a: "You may still be in viewing mode or on a less editable page. Enter edit mode first, then try a different page.",
            },
            {
                q: "How many pages does the Snow Fashionwave Memory Journal have?",
                a: "Players commonly report four pages: earlier pages are more fixed, and later pages are more customizable.",
            },
            {
                q: "Is Winter Snow Memories bugged?",
                a: "Some players report layout and image placement bugs. If progress fails after correct steps, check maintenance updates.",
            },
            {
                q: "Do I need one photo or a full chapter?",
                a: "A fuller chapter page usually works better than a single minimal edit.",
            },
        ],
        relatedTitle: "Related Heartopia Guides",
        relatedIntro: "Connect this page with related pillar and internal pages for better navigation and SEO clustering.",
        relatedLinks: [
            { label: "Winter Frost Season Guide (Events Hub)", href: "/events" },
            { label: "Heartopia Event Guide: Aurora and Banquet", href: "/guides/aurora-weather-banquet" },
            { label: "Heartopia Snow Concert Guide", href: "/events/heartopia-snow-concert-guide" },
            { label: "Heartopia Beginner Guide", href: "/" },
        ],
    },
    th: {
        metaTitle: "Winter Snow Memories ใน Heartopia วิธีผ่านเควสต์",
        metaDescription:
            "คู่มือ Winter Snow Memories ใน Heartopia: วิธีเข้าโหมดแก้ไข journal เพิ่มรูปภาพ ทำ chapter ให้ผ่าน และแก้ปัญหาที่พบบ่อย",
        breadcrumb: "Winter Snow Memories",
        badge: "คู่มือกิจกรรม Winter Frost",
        h1: "Winter Snow Memories ใน Heartopia",
        intro: "ถ้าคุณติด Winter Snow Memories ปัญหาส่วนใหญ่ไม่ใช่ตัวเควสต์ แต่เป็นการใช้งานหน้า Journal หน้านี้สรุปขั้นตอนแบบชัดเจนและวิธีเช็กปัญหา",
        quickTitle: "คำตอบแบบเร็ว",
        quickSteps: [
            "เปิดคลังไอเทม (Inventory)",
            "เลือก Snow Fashionwave Memory Journal",
            "กดไอคอนดินสอหรือปากกาเพื่อเข้าโหมดแก้ไข",
            "เลือกหน้าที่แก้ไขได้",
            "เพิ่มรูป สติกเกอร์ หรือข้อความให้ครบ 1 chapter",
        ],
        categoryTitle: "หมวดหลักที่แนะนำ",
        categoryBody: "หมวดหลัก: Events หมวดย่อย: Guides และควรเชื่อมลิงก์ภายในไปหน้ากิจกรรมฤดูหนาวที่เกี่ยวข้อง",
        whatTitle: "Winter Snow Memories คืออะไร",
        whatBody1: "Winter Snow Memories เป็นส่วนหนึ่งของ Winter Frost Season และผูกกับระบบ Fashionwave Memory Journal ไม่ใช่เควสต์เก็บของทั่วไป",
        whatBody2: "ในทางปฏิบัติ คุณต้องเข้าไปแก้ไขหน้าที่ถูกต้องของ Journal และใส่คอนเทนต์ให้เพียงพอจน chapter นับผล",
        howTitle: "วิธีผ่าน Winter Snow Memories",
        howSteps: [
            { title: "ขั้นตอน 1: เปิด Inventory", desc: "หา Snow Fashionwave Memory Journal" },
            { title: "ขั้นตอน 2: เปิด Journal", desc: "การเปิดดูเฉยๆ มักยังไม่ทำให้เควสต์นับผล" },
            { title: "ขั้นตอน 3: เข้าโหมดแก้ไข", desc: "กดไอคอนดินสอหรือปากกาให้เครื่องมือแก้ไขแสดงขึ้น" },
            { title: "ขั้นตอน 4: เลือกหน้าที่ถูกต้อง", desc: "หน้าสำเร็จรูปกับหน้าว่างอาจทำงานต่างกัน" },
            { title: "ขั้นตอน 5: เพิ่มคอนเทนต์", desc: "ใส่รูป สติกเกอร์ และข้อความให้ครบหนึ่งหน้าที่นับ chapter" },
            { title: "ขั้นตอน 6: บันทึกและเช็ก", desc: "บันทึกแล้วกลับไปเช็กความคืบหน้าเควสต์อีกครั้ง" },
        ],
        journalTitle: "Snow Fashionwave Memory Journal ทำงานอย่างไร",
        journalPoints: [
            { title: "Journal มีหลายหน้า", desc: "ผู้เล่นส่วนใหญ่รายงานว่ามีประมาณ 4 หน้า" },
            { title: "หน้าช่วงแรกมีโครงสร้างมากกว่า", desc: "หน้าต้นๆ มักเป็นเทมเพลตสำเร็จรูป" },
            { title: "หน้าหลังยืดหยุ่นกว่า", desc: "เหมาะกับการเพิ่มรูป สติกเกอร์ และข้อความ" },
            { title: "โหมดแก้ไขสำคัญมาก", desc: "โหมดดูและโหมดแก้ไขไม่เหมือนกัน และทำให้สับสนได้ง่าย" },
        ],
        confusingTitle: "ทำไม Winter Snow Memories ถึงสับสน",
        confusingPoints: [
            { title: "1. ชื่อเควสต์ไม่บอกวิธีทำ", desc: "ชื่อดูเหมือนเควสต์ทั่วไป แต่จริงๆ ต้องแก้ไข Journal" },
            { title: "2. ปุ่มแก้ไขมองไม่ง่าย", desc: "หลายคนไม่เห็นไอคอนดินสอและคิดว่าเกมบั๊ก" },
            { title: "3. ระบบกิจกรรมฤดูหนาวซ้อนกัน", desc: "หลายระบบทำงานพร้อมกัน ทำให้ผู้เล่นใหม่งง" },
        ],
        stillTitle: "ทำไมยังไม่ผ่าน",
        checklistTitle: "เช็กลิสต์แก้ปัญหา",
        checklist: [
            "คุณเข้าโหมดแก้ไขด้วยไอคอนดินสอแล้วหรือยัง",
            "คุณกำลังแก้ไข Journal จริง ไม่ใช่แค่เปิดดู",
            "คุณเพิ่มคอนเทนต์ในหน้าที่นับ chapter แล้วหรือยัง",
            "คุณบันทึกและปิดเปิด Journal ใหม่แล้วหรือยัง",
            "ยังมีอาการบั๊กหลังเปิดใหม่หรือไม่",
        ],
        bugsTitle: "ปัญหาและบั๊กที่พบบ่อย",
        bugsBody: "อาการที่พบบ่อยคือรูปสลับหน้า เลย์เอาต์เพี้ยน หรือไม่เห็นปุ่มเพิ่มรูป ลองเปลี่ยนหน้า บันทึกใหม่ เปิดเกมใหม่ และตรวจประกาศอัปเดตล่าสุด",
        fastestTitle: "วิธีผ่านเร็วที่สุด",
        fastestSteps: [
            "เปิด Snow Fashionwave Memory Journal",
            "กดไอคอนดินสอ",
            "เลือกหน้าที่แก้ไขได้",
            "เพิ่มรูปหรือของตกแต่งหลายรายการ",
            "บันทึกแล้วกลับไปเช็กเควสต์",
        ],
        faqTitle: "FAQ: Winter Snow Memories",
        faqs: [
            { q: "จะแก้ไข Winter Snow Memories ยังไง", a: "เปิด Journal จาก Inventory แล้วกดไอคอนดินสอหรือปากกาเพื่อเข้าโหมดแก้ไข" },
            { q: "ทำไมเพิ่มรูปไม่ได้", a: "อาจยังอยู่โหมดดู หรืออยู่หน้าที่แก้ไขได้น้อย ให้ลองเปลี่ยนหน้าและเข้าโหมดแก้ไขอีกครั้ง" },
            { q: "Journal มีกี่หน้า", a: "ผู้เล่นส่วนใหญ่รายงานว่ามีประมาณ 4 หน้า" },
            { q: "เควสต์นี้บั๊กไหม", a: "มีรายงานบั๊กเรื่องเลย์เอาต์และตำแหน่งรูป ควรเช็กประกาศแพตช์ล่าสุด" },
            { q: "ใส่รูปเดียวพอไหม", a: "แนะนำให้เติมคอนเทนต์ให้ครบหนึ่งหน้าหรือหนึ่ง chapter เพื่อให้ระบบนับผลชัดเจน" },
        ],
        relatedTitle: "คู่มือที่เกี่ยวข้อง",
        relatedIntro: "เชื่อมลิงก์ภายในไปหน้าที่เกี่ยวข้องเพื่อให้ผู้ใช้ไปต่อได้ง่ายและช่วย SEO",
        relatedLinks: [
            { label: "รวมกิจกรรม Winter Frost", href: "/events" },
            { label: "คู่มือ Aurora และ Banquet", href: "/guides/aurora-weather-banquet" },
            { label: "คู่มือ Snow Concert", href: "/events/heartopia-snow-concert-guide" },
            { label: "คู่มือเริ่มต้น Heartopia", href: "/" },
        ],
    },
    pt: {
        metaTitle: "Winter Snow Memories em Heartopia: como concluir",
        metaDescription:
            "Aprenda a concluir Winter Snow Memories em Heartopia, editar o journal, adicionar fotos, completar um chapter e corrigir problemas comuns.",
        breadcrumb: "Winter Snow Memories",
        badge: "Guia da temporada Winter Frost",
        h1: "Winter Snow Memories em Heartopia",
        intro: "Se voce travou em Winter Snow Memories, o problema costuma ser a interface do Journal. Este guia mostra o passo a passo e a solucao de erros comuns.",
        quickTitle: "Resposta rapida",
        quickSteps: [
            "Abra o inventario",
            "Selecione Snow Fashionwave Memory Journal",
            "Entre no modo de edicao pelo icone de lapis",
            "Abra uma pagina valida",
            "Adicione fotos, adesivos ou texto ate completar um chapter",
        ],
        categoryTitle: "Categoria principal recomendada",
        categoryBody: "Categoria principal: Events. Secundaria: Guides. Mantenha links internos para paginas sazonais relacionadas.",
        whatTitle: "O que e Winter Snow Memories?",
        whatBody1: "Winter Snow Memories faz parte do Winter Frost Season e depende do sistema Fashionwave Memory Journal.",
        whatBody2: "Na pratica, voce precisa editar uma pagina valida do journal e preencher conteudo suficiente para concluir um chapter.",
        howTitle: "Como concluir Winter Snow Memories",
        howSteps: [
            { title: "Passo 1: Abra o inventario", desc: "Encontre Snow Fashionwave Memory Journal." },
            { title: "Passo 2: Abra o journal", desc: "So visualizar normalmente nao basta." },
            { title: "Passo 3: Entre no modo de edicao", desc: "Toque no icone de lapis/caneta." },
            { title: "Passo 4: Escolha a pagina certa", desc: "Paginas pre-definidas e paginas em branco podem se comportar diferente." },
            { title: "Passo 5: Adicione conteudo", desc: "Use fotos, adesivos e texto ate completar de forma real uma pagina." },
            { title: "Passo 6: Salve e confira", desc: "Salve e volte ao painel da tarefa para confirmar o progresso." },
        ],
        journalTitle: "Como funciona o Snow Fashionwave Memory Journal",
        journalPoints: [
            { title: "O journal tem varias paginas", desc: "Relatos de jogadores citam 4 paginas no total." },
            { title: "As primeiras sao mais estruturadas", desc: "As paginas iniciais costumam ser mais fixas." },
            { title: "As ultimas sao mais flexiveis", desc: "Sao melhores para personalizacao com fotos e adesivos." },
            { title: "Modo de edicao e essencial", desc: "Modo de visualizacao e diferente e causa muita confusao." },
        ],
        confusingTitle: "Por que Winter Snow Memories confunde tanto",
        confusingPoints: [
            { title: "1. O nome nao explica a acao", desc: "Parece objetivo passivo, mas exige edicao ativa do journal." },
            { title: "2. Botao de edicao e facil de perder", desc: "Muitos jogadores nao veem o lapis." },
            { title: "3. Sistema de inverno esta carregado", desc: "Muitas atividades ao mesmo tempo aumentam a confusao." },
        ],
        stillTitle: "Por que ainda nao completa",
        checklistTitle: "Checklist de solucao",
        checklist: ["Voce entrou no modo de edicao?", "Voce realmente editou o journal?", "Voce adicionou conteudo em pagina valida?", "Voce salvou e reabriu?", "Pode ser bug apos reabrir?"],
        bugsTitle: "Bugs conhecidos do Journal",
        bugsBody: "Problemas comuns: imagem trocando de pagina, layout instavel e opcao de foto ausente. Tente outra pagina, salve novamente e reinicie o jogo.",
        fastestTitle: "Caminho mais rapido",
        fastestSteps: ["Abra o journal", "Entre em edicao", "Use pagina editavel", "Adicione varios itens", "Salve e confira"],
        faqTitle: "FAQ: Winter Snow Memories",
        faqs: [
            { q: "Como editar Winter Snow Memories?", a: "Abra o journal e toque no lapis para entrar no modo de edicao." },
            { q: "Por que nao consigo adicionar fotos?", a: "Voce pode estar em modo visualizacao ou em pagina menos editavel." },
            { q: "Quantas paginas o journal tem?", a: "Relatos mais comuns falam em 4 paginas." },
            { q: "Winter Snow Memories esta bugado?", a: "Ha relatos de bugs de layout e posicionamento de imagem." },
            { q: "Uma foto basta?", a: "Melhor preencher uma pagina de chapter com mais conteudo." },
        ],
        relatedTitle: "Guias relacionados",
        relatedIntro: "Conecte esta pagina com guias sazonais para melhorar navegacao e SEO.",
        relatedLinks: [
            { label: "Hub de eventos Winter Frost", href: "/events" },
            { label: "Guia Aurora e Banquet", href: "/guides/aurora-weather-banquet" },
            { label: "Guia Snow Concert", href: "/events/heartopia-snow-concert-guide" },
            { label: "Guia para iniciantes", href: "/" },
        ],
    },
    es: {
        metaTitle: "Winter Snow Memories en Heartopia: como completarlo",
        metaDescription:
            "Aprende a completar Winter Snow Memories en Heartopia: editar el journal, agregar fotos, completar un chapter y resolver errores comunes.",
        breadcrumb: "Winter Snow Memories",
        badge: "Guia de temporada Winter Frost",
        h1: "Winter Snow Memories en Heartopia",
        intro: "Si te atascaste en Winter Snow Memories, casi siempre el problema es la interfaz del Journal. Esta guia te da pasos claros y solucion de errores.",
        quickTitle: "Respuesta rapida",
        quickSteps: ["Abre el inventario", "Selecciona Snow Fashionwave Memory Journal", "Entra al modo edicion con el icono de lapiz", "Abre una pagina valida", "Agrega fotos, stickers o texto hasta completar un chapter"],
        categoryTitle: "Categoria principal recomendada",
        categoryBody: "Categoria principal: Events. Secundaria: Guides. Mantener enlaces internos a paginas de invierno relacionadas.",
        whatTitle: "Que es Winter Snow Memories?",
        whatBody1: "Winter Snow Memories forma parte de Winter Frost Season y depende del sistema Fashionwave Memory Journal.",
        whatBody2: "En la practica debes editar una pagina valida del journal y llenarla con suficiente contenido para completar un chapter.",
        howTitle: "Como completar Winter Snow Memories",
        howSteps: [
            { title: "Paso 1: Abre inventario", desc: "Encuentra Snow Fashionwave Memory Journal." },
            { title: "Paso 2: Abre el journal", desc: "Solo mirar no suele contar para progreso." },
            { title: "Paso 3: Entra a modo edicion", desc: "Pulsa el icono de lapiz o pluma." },
            { title: "Paso 4: Elige la pagina correcta", desc: "Paginas pre-hechas y paginas en blanco pueden funcionar distinto." },
            { title: "Paso 5: Agrega contenido", desc: "Usa fotos, stickers y texto para completar una pagina real." },
            { title: "Paso 6: Guarda y revisa", desc: "Guarda y vuelve al panel de tarea para confirmar progreso." },
        ],
        journalTitle: "Como funciona Snow Fashionwave Memory Journal",
        journalPoints: [
            { title: "El journal tiene varias paginas", desc: "Los jugadores suelen reportar 4 paginas." },
            { title: "Las primeras son mas estructuradas", desc: "Las paginas iniciales suelen ser mas fijas." },
            { title: "Las ultimas son mas flexibles", desc: "Sirven mejor para personalizar con fotos y stickers." },
            { title: "El modo edicion es clave", desc: "Modo vista y modo edicion son distintos." },
        ],
        confusingTitle: "Por que Winter Snow Memories confunde tanto",
        confusingPoints: [
            { title: "1. El nombre no explica la accion", desc: "Parece objetivo pasivo, pero exige edicion activa del journal." },
            { title: "2. El boton de edicion se pierde facil", desc: "Muchos jugadores no ven el lapiz." },
            { title: "3. El sistema de invierno esta cargado", desc: "Hay varias actividades a la vez y eso aumenta la confusion." },
        ],
        stillTitle: "Por que aun no se completa",
        checklistTitle: "Checklist de solucion",
        checklist: ["Entraste al modo edicion?", "Editaste de verdad el journal?", "Agregaste contenido en pagina valida?", "Guardaste y reabriste el journal?", "Puede ser bug despues de reabrir?"],
        bugsTitle: "Bugs conocidos del Journal",
        bugsBody: "Problemas comunes: imagen que salta de pagina, layout inestable y opcion de foto ausente. Prueba otra pagina, guarda de nuevo y reinicia el juego.",
        fastestTitle: "Ruta mas rapida",
        fastestSteps: ["Abre el journal", "Entra a edicion", "Usa pagina editable", "Agrega varios elementos", "Guarda y revisa"],
        faqTitle: "FAQ: Winter Snow Memories",
        faqs: [
            { q: "Como edito Winter Snow Memories?", a: "Abre el journal y pulsa el lapiz para entrar al modo edicion." },
            { q: "Por que no puedo agregar fotos?", a: "Puede que sigas en modo vista o en una pagina menos editable." },
            { q: "Cuantas paginas tiene el journal?", a: "Lo mas reportado por jugadores son 4 paginas." },
            { q: "Winter Snow Memories tiene bugs?", a: "Hay reportes de bugs de layout y posicion de imagen." },
            { q: "Una foto alcanza?", a: "Mejor completar una pagina de chapter con contenido real." },
        ],
        relatedTitle: "Guias relacionadas",
        relatedIntro: "Conecta esta pagina con guias de invierno para mejorar navegacion y SEO.",
        relatedLinks: [
            { label: "Hub de eventos Winter Frost", href: "/events" },
            { label: "Guia Aurora y Banquet", href: "/guides/aurora-weather-banquet" },
            { label: "Guia Snow Concert", href: "/events/heartopia-snow-concert-guide" },
            { label: "Guia para principiantes", href: "/" },
        ],
    },
    id: {
        metaTitle: "Winter Snow Memories di Heartopia: cara menyelesaikan",
        metaDescription:
            "Pelajari cara menyelesaikan Winter Snow Memories di Heartopia, edit journal, tambah foto, selesaikan chapter, dan perbaiki masalah umum.",
        breadcrumb: "Winter Snow Memories",
        badge: "Panduan musim Winter Frost",
        h1: "Winter Snow Memories di Heartopia",
        intro: "Jika kamu stuck di Winter Snow Memories, masalahnya biasanya ada di UI Journal. Panduan ini memberi langkah jelas dan troubleshooting.",
        quickTitle: "Jawaban cepat",
        quickSteps: ["Buka inventory", "Pilih Snow Fashionwave Memory Journal", "Masuk edit mode lewat ikon pensil", "Buka halaman yang valid", "Tambahkan foto, stiker, atau teks sampai 1 chapter selesai"],
        categoryTitle: "Kategori utama yang direkomendasikan",
        categoryBody: "Kategori utama: Events. Sekunder: Guides. Pertahankan internal link ke halaman musim dingin terkait.",
        whatTitle: "Apa itu Winter Snow Memories?",
        whatBody1: "Winter Snow Memories adalah bagian dari Winter Frost Season dan terhubung ke sistem Fashionwave Memory Journal.",
        whatBody2: "Secara praktik, kamu harus mengedit halaman journal yang valid dan mengisi konten cukup agar chapter terhitung selesai.",
        howTitle: "Cara menyelesaikan Winter Snow Memories",
        howSteps: [
            { title: "Langkah 1: Buka inventory", desc: "Cari Snow Fashionwave Memory Journal." },
            { title: "Langkah 2: Buka journal", desc: "Hanya membuka tampilan biasanya belum cukup." },
            { title: "Langkah 3: Masuk edit mode", desc: "Tap ikon pensil atau pen." },
            { title: "Langkah 4: Pilih halaman yang benar", desc: "Halaman template dan halaman kosong bisa berperilaku berbeda." },
            { title: "Langkah 5: Tambah konten", desc: "Isi foto, stiker, dan teks sampai satu halaman chapter benar-benar lengkap." },
            { title: "Langkah 6: Simpan dan cek", desc: "Simpan lalu cek progress quest lagi." },
        ],
        journalTitle: "Cara kerja Snow Fashionwave Memory Journal",
        journalPoints: [
            { title: "Journal punya beberapa halaman", desc: "Laporan pemain paling umum menyebut total 4 halaman." },
            { title: "Halaman awal lebih terstruktur", desc: "Halaman awal biasanya template yang lebih fixed." },
            { title: "Halaman berikutnya lebih fleksibel", desc: "Lebih cocok untuk kustom foto, stiker, dan teks." },
            { title: "Edit mode sangat penting", desc: "View mode dan edit mode berbeda dan sering bikin bingung." },
        ],
        confusingTitle: "Kenapa Winter Snow Memories membingungkan",
        confusingPoints: [
            { title: "1. Nama task tidak menjelaskan aksi", desc: "Terlihat pasif, padahal butuh edit aktif di journal." },
            { title: "2. Tombol edit mudah terlewat", desc: "Banyak pemain tidak sadar ikon pensil wajib." },
            { title: "3. Sistem event musim dingin padat", desc: "Banyak sistem berjalan bersamaan sehingga UI membingungkan." },
        ],
        stillTitle: "Kenapa masih belum selesai",
        checklistTitle: "Checklist troubleshooting",
        checklist: ["Sudah masuk edit mode pakai ikon pensil?", "Sudah benar-benar mengedit journal, bukan hanya membuka?", "Sudah menambah konten di halaman chapter yang valid?", "Sudah simpan lalu buka ulang journal?", "Mungkin ada bug journal setelah dibuka ulang?"],
        bugsTitle: "Bug journal yang sering dilaporkan",
        bugsBody: "Masalah umum: gambar pindah halaman, layout tidak stabil, atau opsi tambah foto hilang. Coba halaman lain, simpan ulang, lalu restart game.",
        fastestTitle: "Cara tercepat",
        fastestSteps: ["Buka journal", "Masuk edit mode", "Pilih halaman editable", "Tambah beberapa item", "Simpan dan cek progress"],
        faqTitle: "FAQ: Winter Snow Memories",
        faqs: [
            { q: "Bagaimana edit Winter Snow Memories?", a: "Buka journal lalu tap ikon pensil untuk masuk edit mode." },
            { q: "Kenapa tidak bisa tambah foto?", a: "Mungkin masih di view mode atau halaman kurang editable." },
            { q: "Journal ada berapa halaman?", a: "Laporan pemain paling umum: 4 halaman." },
            { q: "Winter Snow Memories bug?", a: "Ada laporan bug layout dan posisi gambar." },
            { q: "Cukup satu foto?", a: "Lebih aman isi satu halaman chapter dengan konten yang jelas." },
        ],
        relatedTitle: "Panduan terkait",
        relatedIntro: "Hubungkan halaman ini dengan pillar dan internal page terkait untuk navigasi dan SEO.",
        relatedLinks: [
            { label: "Hub event Winter Frost", href: "/events" },
            { label: "Panduan Aurora dan Banquet", href: "/guides/aurora-weather-banquet" },
            { label: "Panduan Snow Concert", href: "/events/heartopia-snow-concert-guide" },
            { label: "Panduan pemula Heartopia", href: "/" },
        ],
    },
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const l = LOCALES.includes(locale as Locale) ? (locale as Locale) : "en"
    const c = pageCopy[l]
    const url = `https://theheartopia.com/${l}/${PAGE_PATH}`

    return {
        title: c.metaTitle,
        description: c.metaDescription,
        keywords: [
            "winter snow memories heartopia",
            "snow fashionwave memory journal",
            "heartopia winter frost season",
            "winter snow memories how to complete",
            "heartopia journal edit mode",
        ],
        alternates: {
            canonical: url,
            languages: {
                en: `https://theheartopia.com/en/${PAGE_PATH}`,
                th: `https://theheartopia.com/th/${PAGE_PATH}`,
                pt: `https://theheartopia.com/pt/${PAGE_PATH}`,
                es: `https://theheartopia.com/es/${PAGE_PATH}`,
                id: `https://theheartopia.com/id/${PAGE_PATH}`,
                "x-default": `https://theheartopia.com/en/${PAGE_PATH}`,
            },
        },
        openGraph: {
            title: c.metaTitle,
            description: c.metaDescription,
            url,
            siteName: "Heartopia Guide",
            type: "article",
            images: [
                {
                    url: "https://theheartopia.com/images/heartopia-preview.png",
                    width: 1200,
                    height: 630,
                    alt: c.h1,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: c.metaTitle,
            description: c.metaDescription,
            images: ["https://theheartopia.com/images/heartopia-preview.png"],
        },
    }
}

export default async function WinterSnowMemoriesPage({
    params,
}: {
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const l = LOCALES.includes(locale as Locale) ? (locale as Locale) : "en"
    const c = pageCopy[l]
    const t: any = await getDictionary(l)
    const pageUrl = `https://theheartopia.com/${l}/${PAGE_PATH}`

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: `https://theheartopia.com/${l}` },
                    { "@type": "ListItem", position: 2, name: "Guides", item: `https://theheartopia.com/${l}/guides` },
                    { "@type": "ListItem", position: 3, name: c.breadcrumb, item: pageUrl },
                ],
            },
            {
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
                "@type": "FAQPage",
                mainEntity: c.faqs.map((item) => ({
                    "@type": "Question",
                    name: item.q,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: item.a,
                    },
                })),
            },
        ],
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="min-h-screen bg-heartopia-cream">
                <Navbar locale={l} t={t.navbar} />

                <nav className="pt-28 pb-4 px-4" aria-label="Breadcrumb">
                    <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                        <Link href={`/${l}`} className="hover:text-heartopia-pink-dark transition-colors flex items-center gap-1">
                            <Home className="w-4 h-4" /> {t.navbar.home}
                        </Link>
                        <ChevronRight className="w-4 h-4 shrink-0" />
                        <Link href={`/${l}/guides`} className="hover:text-heartopia-pink-dark transition-colors">
                            {t.navbar.guides}
                        </Link>
                        <ChevronRight className="w-4 h-4 shrink-0" />
                        <span className="text-foreground font-medium">{c.breadcrumb}</span>
                    </div>
                </nav>

                <article className="max-w-5xl mx-auto px-4 pb-24">
                    <header className="mb-10">
                        <Badge className="bg-heartopia-pink/10 text-heartopia-pink-darker hover:bg-heartopia-pink/20 border-none px-4 py-1 rounded-full text-sm font-semibold mb-4">
                            <Sparkles className="w-3.5 h-3.5 mr-2" />
                            {c.badge}
                        </Badge>
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">{c.h1}</h1>
                        <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">{c.intro}</p>
                    </header>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        <div className="bg-white/80 border border-white/60 rounded-2xl p-5 shadow-sm">
                            <h2 className="text-lg font-bold text-foreground flex items-center gap-2 mb-3">
                                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                                {c.quickTitle}
                            </h2>
                            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                                {c.quickSteps.map((step) => (
                                    <li key={step}>{step}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/80 border border-white/60 rounded-2xl p-5 shadow-sm">
                            <h2 className="text-lg font-bold text-foreground flex items-center gap-2 mb-3">
                                <BookOpen className="w-5 h-5 text-heartopia-sky-darker" />
                                {c.categoryTitle}
                            </h2>
                            <p className="text-sm text-muted-foreground leading-relaxed">{c.categoryBody}</p>
                        </div>
                    </section>

                    <div className="space-y-8">
                        <section className="bg-white/80 border border-white/60 rounded-2xl p-6 shadow-sm">
                            <h2 className="text-2xl font-bold text-foreground mb-4">{c.whatTitle}</h2>
                            <p className="text-muted-foreground leading-relaxed mb-3">{c.whatBody1}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{c.whatBody2}</p>
                        </section>

                        <section className="bg-white/80 border border-white/60 rounded-2xl p-6 shadow-sm">
                            <h2 className="text-2xl font-bold text-foreground mb-4">{c.howTitle}</h2>
                            <div className="space-y-4">
                                {c.howSteps.map((item) => (
                                    <div key={item.title}>
                                        <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white/80 border border-white/60 rounded-2xl p-6 shadow-sm">
                            <h2 className="text-2xl font-bold text-foreground mb-4">{c.journalTitle}</h2>
                            <div className="space-y-3">
                                {c.journalPoints.map((item) => (
                                    <div key={item.title}>
                                        <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white/80 border border-white/60 rounded-2xl p-6 shadow-sm">
                            <h2 className="text-2xl font-bold text-foreground mb-4">{c.confusingTitle}</h2>
                            <div className="space-y-3">
                                {c.confusingPoints.map((item) => (
                                    <div key={item.title}>
                                        <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="bg-white/80 border border-white/60 rounded-2xl p-6 shadow-sm">
                            <h2 className="text-2xl font-bold text-foreground mb-4">{c.stillTitle}</h2>
                            <h3 className="text-base font-bold text-foreground mb-2 flex items-center gap-2">
                                <ListChecks className="w-4 h-4 text-heartopia-pink-darker" />
                                {c.checklistTitle}
                            </h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {c.checklist.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="bg-white/80 border border-white/60 rounded-2xl p-6 shadow-sm">
                            <h2 className="text-2xl font-bold text-foreground mb-4">{c.bugsTitle}</h2>
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                                <ShieldAlert className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
                                <p className="text-sm text-amber-900 leading-relaxed">{c.bugsBody}</p>
                            </div>
                        </section>

                        <section className="bg-white/80 border border-white/60 rounded-2xl p-6 shadow-sm">
                            <h2 className="text-2xl font-bold text-foreground mb-4">{c.fastestTitle}</h2>
                            <ol className="list-decimal pl-5 space-y-1.5 text-sm text-muted-foreground">
                                {c.fastestSteps.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                        </section>

                        <section className="bg-white/80 border border-white/60 rounded-2xl p-6 shadow-sm">
                            <h2 className="text-2xl font-bold text-foreground mb-4">{c.faqTitle}</h2>
                            <Accordion type="single" collapsible className="space-y-2">
                                {c.faqs.map((item, index) => (
                                    <AccordionItem
                                        key={item.q}
                                        value={`faq-${index + 1}`}
                                        className="border border-white/60 rounded-xl px-4 bg-heartopia-cream/40 data-[state=open]:bg-white/70"
                                    >
                                        <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-3.5">
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>

                        <section className="border-t border-white/70 pt-8">
                            <h2 className="text-xl font-bold text-foreground mb-3">{c.relatedTitle}</h2>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex items-start gap-2">
                                <Info className="w-4 h-4 mt-0.5 shrink-0 text-heartopia-pink-darker" />
                                {c.relatedIntro}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {c.relatedLinks.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={`/${l}${item.href}`}
                                        className="group flex items-center justify-between bg-white/70 hover:bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl px-5 py-4 shadow-sm transition-all"
                                    >
                                        <span className="text-sm font-medium text-foreground group-hover:text-heartopia-pink-dark transition-colors">
                                            {item.label}
                                        </span>
                                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-heartopia-pink-dark group-hover:translate-x-1 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </div>
                </article>

                <Footer locale={l} t={t.footer} />
            </main>
        </>
    )
}
