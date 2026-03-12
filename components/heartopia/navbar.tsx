"use client"

import { useState, useEffect } from "react"
import { Menu, X, Globe, ChevronDown, Sparkles, BookOpen, Fish, MapPin, Utensils, Home as HomeIcon, Monitor, Smartphone, Gamepad2, User, Music, FileText, Bug, Gift, Palette, Dog, TrendingUp, TreeDeciduous, Ticket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavLink {
  name: string
  href?: string
  subLinks?: {
    name: string
    href: string
    icon: any
    color: string
  }[]
}

export function Navbar({ t, locale }: { t: any; locale: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [eventsOpen, setEventsOpen] = useState(false)
  const [recipesOpen, setRecipesOpen] = useState(false)
  const [housingOpen, setHousingOpen] = useState(false)
  const [npcsOpen, setNpcsOpen] = useState(false)
  const [guidesOpen, setGuidesOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks: NavLink[] = [
    { name: t.home, href: `/${locale}` },
    {
      name: t.events,
      subLinks: [
        { name: t.guideOnsenEggAll, href: `/${locale}/events/onsen-egg-all-locations`, icon: MapPin, color: "text-red-500" },
        { name: t.guideOnsenEgg, href: `/${locale}/events/onsen-egg`, icon: Sparkles, color: "text-orange-500" },
        { name: t.guideSnowConcert, href: `/${locale}/events/heartopia-snow-concert-guide`, icon: Music, color: "text-blue-500" },
        { name: t.guideFairyBanner, href: `/${locale}/events/fairy-banner`, icon: Sparkles, color: "text-pink-500" },
        { name: t.guideAurora, href: `/${locale}/guides/aurora-weather-banquet`, icon: Sparkles, color: "text-purple-500" },
        { name: t.guideMeteor, href: `/${locale}/meteor-shower`, icon: Sparkles, color: "text-amber-500" },
      ]
    },
    {
      name: t.recipes,
      subLinks: [
        { name: t.guideRecipesAll, href: `/${locale}/guides/heartopia-recipes-cooking-guide`, icon: BookOpen, color: "text-rose-500" },
        { name: t.guideRecipes, href: `/${locale}/recipes/mushroom-pie`, icon: Utensils, color: "text-heartopia-orange" },
        { name: t.guideFrostedPancake, href: `/${locale}/guides/recipes/frosted-pancake`, icon: Utensils, color: "text-amber-500" },
        { name: t.guideIcedDrink, href: `/${locale}/guides/recipes/iced-drink`, icon: Utensils, color: "text-blue-500" },
        { name: t.guideBreadWithNoFlour, href: `/${locale}/guides/heartopia-bread-with-no-flour`, icon: Utensils, color: "text-amber-600" },
      ]
    },
    {
      name: t.housing,
      subLinks: [
        { name: t.guideHousing, href: `/${locale}/guides/housing`, icon: HomeIcon, color: "text-heartopia-pink-dark" },
        { name: t.guideBlueprints, href: `/${locale}/guides/housing#blueprints`, icon: FileText, color: "text-heartopia-sky" },
        { name: t.guideHomeEval, href: `/${locale}/guides/home-evaluation`, icon: TrendingUp, color: "text-heartopia-pink-darker" },
      ]
    },
    {
      name: t.npcs,
      subLinks: [
        { name: t.npcs, href: `/${locale}/npcs`, icon: User, color: "text-heartopia-pink" },
        { name: t.npcDoris, href: `/${locale}/where-is-doris`, icon: User, color: "text-heartopia-purple" },
      ]
    },
    {
      name: t.guides,
      subLinks: [
        { name: t.guideFishing, href: `/${locale}/guides/fishing`, icon: Fish, color: "text-heartopia-pink" },
        { name: t.guideBug, href: `/${locale}/guides/bug-catching`, icon: Bug, color: "text-green-600" },
        { name: t.guideDog, href: `/${locale}/guides/dog-breeds`, icon: Dog, color: "text-amber-600" },
        { name: t.guideRoamingOak, href: `/${locale}/guides/roaming-oak`, icon: TreeDeciduous, color: "text-emerald-600" },
        { name: t.guideAnimalTrough, href: `/${locale}/guides/animal-trough`, icon: Utensils, color: "text-orange-600" },
        { name: t.guideExhibitionPass, href: `/${locale}/guides/exhibition-pass`, icon: Ticket, color: "text-heartopia-pink" },
        { name: t.guidePenguinFood, href: `/${locale}/guides/heartopia-penguin-favorite-food`, icon: Fish, color: "text-sky-500" },
        { name: t.guidePenguinTrough, href: `/${locale}/guides/heartopia-penguin-trough`, icon: Utensils, color: "text-cyan-600" },
        { name: t.guideWinterBirds, href: `/${locale}/guides/winter-birds-location-map`, icon: MapPin, color: "text-sky-500" },
        { name: t.guidePainting, href: `/${locale}/guides/painting-tools`, icon: Palette, color: "text-heartopia-pink" },
        { name: t.redeemCodes, href: `/${locale}/guides/heartopia-redeem-codes`, icon: Gift, color: "text-amber-500" },
      ]
    },
    { name: t.community, href: "https://discord.com/invite/heartopia" },
  ]

  const changeLocale = (newLocale: string) => {
    if (newLocale === locale) return
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
    setIsOpen(false)
  }

  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-heartopia-pink/10 shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group relative z-50 shrink-0">
            <div className="relative h-12 md:h-16 w-40 md:w-56 overflow-hidden">
              <Image
                src="/images/Wordlogo.png"
                alt="Heartopia Logo"
                fill
                className="object-contain transform transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/50 shadow-sm">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group/nav">
                {"subLinks" in link ? (
                  <div className={cn(
                    "flex items-center rounded-full transition-all duration-300",
                    "text-muted-foreground hover:bg-heartopia-pink/5 group-hover/nav:text-heartopia-pink-dark"
                  )}>
                    <span className="pl-5 pr-1 py-2 text-sm font-bold transition-colors relative cursor-default">
                      {link.name}
                    </span>
                    <button className="pr-4 pl-1 py-2 text-sm font-bold transition-colors">
                      <ChevronDown className="w-4 h-4 transition-transform group-hover/nav:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className={cn(
                      "absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300 z-[60]",
                      link.subLinks && link.subLinks.length > 6 ? "w-[32rem]" : "w-64"
                    )}>
                      <div className={cn(
                        "bg-white/95 backdrop-blur-xl rounded-[32px] p-3 shadow-2xl border border-white/50",
                        link.subLinks && link.subLinks.length > 6 ? "grid grid-cols-2 gap-1" : "space-y-1"
                      )}>
                        {link.subLinks?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="flex items-center gap-3 p-3 rounded-2xl hover:bg-heartopia-pink/5 transition-all group/item hover:scale-[1.02]"
                          >
                            <div className={cn("w-10 h-10 flex-shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center transition-transform group-hover/item:scale-110", sub.color)}>
                              <sub.icon className="w-5 h-5" />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-foreground leading-tight">{sub.name}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : link.href ? (
                  <Link
                    href={link.href}
                    className={cn(
                      "px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 relative block",
                      isActive(link.href)
                        ? "text-heartopia-pink-darker bg-heartopia-pink/10"
                        : "text-muted-foreground hover:text-heartopia-pink-dark hover:bg-heartopia-pink/5"
                    )}
                  >
                    {link.name}
                    {isActive(link.href) && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-heartopia-pink rounded-full shadow-[0_0_8px_rgba(255,181,197,0.8)]" />
                    )}
                  </Link>
                ) : null}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-3 relative z-50">
            {/* Language Selection Dropdown */}
            <div className="relative group/lang">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-heartopia-pink/10 shadow-sm text-sm font-black text-heartopia-pink-darker hover:bg-white/80 transition-all duration-300">
                <Globe className="w-4 h-4 text-heartopia-pink" />
                <span>{locale.toUpperCase()}</span>
                <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover/lang:rotate-180" />
              </button>

              <div className="absolute top-full right-0 pt-2 w-40 opacity-0 translate-y-2 pointer-events-none group-hover/lang:opacity-100 group-hover/lang:translate-y-0 group-hover/lang:pointer-events-auto transition-all duration-300 z-[60]">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-white/50 space-y-1">
                  {[
                    { id: "en", label: "EN", name: "English" },
                    { id: "th", label: "TH", name: "ไทย" },
                    { id: "pt", label: "PT", name: "Português" },
                    { id: "es", label: "ES", name: "Español" },
                    { id: "id", label: "ID", name: "Bahasa Indonesia" }
                  ].map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => changeLocale(lang.id)}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200",
                        locale === lang.id
                          ? "bg-heartopia-pink text-white"
                          : "text-muted-foreground hover:bg-heartopia-pink/5 hover:text-heartopia-pink"
                      )}
                    >
                      <span className="flex flex-col items-start leading-tight">
                        <span className="text-sm">{lang.label}</span>
                        <span className={cn("text-[10px] opacity-70 font-medium", locale === lang.id ? "text-white/80" : "text-muted-foreground/60")}>{lang.name}</span>
                      </span>
                      {locale === lang.id && <Sparkles className="w-3 h-3 animate-pulse" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2 relative z-50 shrink-0">
            {/* Mobile Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-heartopia-pink/20 shadow-md text-xs font-black text-heartopia-pink-darker"
              >
                <Globe className="w-4 h-4 text-heartopia-pink" />
                <span>{locale.toUpperCase()}</span>
              </button>

              {langOpen && (
                <>
                  <div className="fixed inset-0 z-[-1]" onClick={() => setLangOpen(false)} />
                  <div className="absolute top-full right-0 mt-2 w-36 bg-white/95 backdrop-blur-xl rounded-2xl p-2 shadow-xl border border-heartopia-pink/10 z-[70] animate-in fade-in zoom-in duration-200">
                    {[
                      { id: "en", label: "EN" },
                      { id: "th", label: "TH" },
                      { id: "pt", label: "PT" },
                      { id: "es", label: "ES" },
                      { id: "id", label: "ID" }
                    ].map((l) => (
                      <button
                        key={l.id}
                        onClick={() => {
                          changeLocale(l.id);
                          setLangOpen(false);
                        }}
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-black transition-all",
                          locale === l.id ? "bg-heartopia-pink text-white" : "text-heartopia-pink-dark hover:bg-heartopia-pink/5"
                        )}
                      >
                        {l.label}
                        {locale === l.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            <button
              className={cn(
                "p-2.5 rounded-2xl transition-all duration-300 shadow-md",
                isOpen
                  ? "bg-heartopia-pink text-white"
                  : "bg-white/90 text-heartopia-pink-darker border border-heartopia-pink/30"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "fixed inset-0 top-0 left-0 w-full h-screen bg-[#FEF9F3]/98 backdrop-blur-2xl z-40 transition-all duration-500 lg:hidden",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          )}
        >
          <div className="flex flex-col h-full pt-32 pb-10 px-6 max-w-lg mx-auto overflow-y-auto">
            <div className="space-y-2 mb-10">
              {navLinks.map((link, i) => (
                <div key={link.name}>
                  {"subLinks" in link ? (
                    <div className="space-y-1">
                      <button
                        onClick={() => {
                          if (link.name === t.events) setEventsOpen(!eventsOpen)
                          else if (link.name === t.recipes) setRecipesOpen(!recipesOpen)
                          else if (link.name === t.housing) setHousingOpen(!housingOpen)
                          else if (link.name === t.npcs) setNpcsOpen(!npcsOpen)
                          else if (link.name === t.guides) setGuidesOpen(!guidesOpen)
                        }}
                        className={cn(
                          "w-full flex items-center justify-between px-6 py-4 rounded-3xl text-xl font-bold transition-all duration-300",
                          "text-muted-foreground"
                        )}
                      >
                        {link.name}
                        <ChevronDown className={cn(
                          "w-6 h-6 transition-transform",
                          link.name === t.events ? (eventsOpen ? "rotate-180" : "") :
                            link.name === t.recipes ? (recipesOpen ? "rotate-180" : "") :
                              link.name === t.housing ? (housingOpen ? "rotate-180" : "") :
                                link.name === t.npcs ? (npcsOpen ? "rotate-180" : "") :
                                  link.name === t.guides ? (guidesOpen ? "rotate-180" : "") : ""
                        )} />
                      </button>
                      <div className={cn(
                        "grid transition-all duration-300",
                        (link.name === t.events ? eventsOpen :
                          link.name === t.recipes ? recipesOpen :
                            link.name === t.housing ? housingOpen :
                              link.name === t.npcs ? npcsOpen :
                                link.name === t.guides ? guidesOpen : false) ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}>
                        <div className="overflow-hidden">
                          <div className={cn(
                            "py-2 px-4 gap-2",
                            link.subLinks && link.subLinks.length > 5 ? "grid grid-cols-2" : "flex flex-col space-y-1"
                          )}>
                            {link.subLinks?.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className={cn(
                                  "flex items-center justify-center p-4 rounded-3xl text-center transition-all border border-transparent",
                                  "bg-white/50 border-heartopia-pink/5 shadow-sm active:scale-95"
                                )}
                                onClick={() => setIsOpen(false)}
                              >
                                <span className="font-bold text-foreground text-sm">{sub.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : link.href ? (
                    <Link
                      href={link.href}
                      style={{ transitionDelay: `${i * 50}ms` }}
                      className={cn(
                        "flex items-center justify-between px-6 py-4 rounded-3xl text-xl font-bold transition-all duration-300",
                        isActive(link.href)
                          ? "bg-heartopia-pink/10 text-heartopia-pink-dark shadow-sm translate-x-2"
                          : "text-muted-foreground hover:bg-heartopia-pink/5 hover:text-heartopia-pink hover:translate-x-1",
                        isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                      <div className={cn(
                        "w-2 h-2 rounded-full transition-all duration-500",
                        isActive(link.href) ? "bg-heartopia-pink scale-100 opacity-100" : "bg-transparent scale-0 opacity-0"
                      )} />
                    </Link>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-auto space-y-4">
              <div className="rounded-[32px] bg-white border border-heartopia-pink/10 shadow-sm overflow-hidden">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="w-full flex items-center justify-between p-6 hover:bg-heartopia-pink/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-heartopia-pink" />
                    <span className="font-bold text-foreground">
                      {locale === 'en' ? 'Language' : locale === 'th' ? 'ภาษา' : locale === 'es' ? 'Idioma' : locale === 'id' ? 'Bahasa' : 'Idioma'}
                    </span>
                  </div>
                  <ChevronDown className={cn("w-5 h-5 transition-transform", langOpen ? "rotate-180" : "")} />
                </button>

                <div className={cn(
                  "grid transition-all duration-300",
                  langOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}>
                  <div className="overflow-hidden">
                    <div className="space-y-1 p-4 pt-0 border-t border-heartopia-pink/5 mt-2">
                      {[
                        { id: "en", label: "English", native: "English" },
                        { id: "th", label: "Thai", native: "ไทย" },
                        { id: "pt", label: "Portuguese", native: "Português" },
                        { id: "es", label: "Spanish", native: "Español" },
                        { id: "id", label: "Indonesian", native: "Bahasa Indonesia" }
                      ].map((lang) => (
                        <button
                          key={lang.id}
                          onClick={() => changeLocale(lang.id)}
                          className={cn(
                            "w-full flex items-center justify-between p-4 rounded-2xl text-sm font-bold transition-all",
                            locale === lang.id
                              ? "bg-heartopia-pink text-white"
                              : "text-muted-foreground hover:bg-heartopia-pink/5"
                          )}
                        >
                          <div className="flex flex-col items-start leading-tight">
                            <span>{lang.native}</span>
                            <span className={cn("text-[10px] opacity-70", locale === lang.id ? "text-white" : "")}>{lang.label}</span>
                          </div>
                          {locale === lang.id && <Sparkles className="w-4 h-4" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-[0.2em]">Crafted by Heartopia Community</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
