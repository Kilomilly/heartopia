"use client"

import { Heart, Sparkles, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer({ t, locale }: { t: any; locale: string }) {

  const footerLinks = {
    guides: [
      { name: t.linkFishing, href: `/${locale}/guides/fishing` },
      { name: t.linkCooking, href: `/${locale}/recipes/mushroom-pie` },
      { name: t.linkBuilding, href: `/${locale}/guides/housing` },
      { name: t.linkPiano, href: `/${locale}/piano` },
    ],
    events: [
      { name: t.linkEvents, href: `/${locale}/events` },
      { name: t.linkMeteorShower, href: `/${locale}/events/meteor-shower` },
      { name: t.linkOnsenEgg, href: `/${locale}/events/onsen-egg` },
      { name: t.linkAurora, href: `/${locale}/events/heartopia-aurora-weather-banquet-guide` },
      { name: t.linkSnowConcert, href: `/${locale}/events/heartopia-snow-concert-guide` },
    ],
    resources: [
      { name: t.linkPlatforms, href: `/${locale}/platforms` },
      { name: t.linkNPCs, href: `/${locale}/npcs` },
      { name: t.linkReleaseDate, href: `/${locale}/release-date` },
      { name: t.linkSupport, href: "mailto:support@theheartopia.com" },
    ],
  }

  const DiscordIcon = (props: any) => (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z" />
    </svg>
  )

  const socialLinks = [
    { name: "Discord", icon: DiscordIcon, href: "https://discord.com/invite/heartopia" },
  ]

  return (
    <footer className="bg-heartopia-warm-cream border-t border-heartopia-pink/20">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center gap-2 group">
              <Image
                src="/images/Wordlogo.png"
                alt="Heartopia Logo"
                width={338}
                height={90}
                className="h-[72px] w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              {t.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white border-2 border-heartopia-pink/20 flex items-center justify-center text-muted-foreground hover:text-heartopia-pink hover:border-heartopia-pink hover:rotate-12 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">{t.catGuides}</h4>
            <ul className="space-y-3">
              {footerLinks.guides.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-heartopia-pink-darker transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">{t.catEvents}</h4>
            <ul className="space-y-3">
              {footerLinks.events.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-heartopia-pink-darker transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">{t.catResources}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('mailto:') ? (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-heartopia-pink-darker transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-heartopia-pink-darker transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-heartopia-pink/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              © {new Date().getFullYear()} TheHeartopia.com
            </p>
            <div className="flex items-center gap-6">
              <Link href={`/${locale}/about`} className="hover:text-heartopia-pink-darker transition-colors">
                {t.linkAbout}
              </Link>
              <Link href={`/${locale}/privacy-policy`} className="hover:text-heartopia-pink-darker transition-colors">
                {t.privacy}
              </Link>
              <Link href={`/${locale}/terms-of-service`} className="hover:text-heartopia-pink-darker transition-colors">
                {t.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
