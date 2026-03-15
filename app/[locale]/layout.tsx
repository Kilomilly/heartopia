import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Heartopia Companion - Game Guide & Wiki',
  description: 'Your cozy companion to the world of Heartopia. Discover secrets, fishing tips, and recipes.',
  metadataBase: new URL('https://theheartopia.com'),
  generator: 'Heartopia Guide',
  icons: {
    icon: '/weblogo.png',
    apple: '/weblogo.png',
  },
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <head />
      <body className="font-sans antialiased">
        {children}

        <Analytics />

        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-JRBMYSSMS9"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
    
                gtag('config', 'G-JRBMYSSMS9');
              `}
            </Script>
            <Script id="microsoft-clarity" strategy="afterInteractive">
              {`
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "v8bpfnknl9");
              `}
            </Script>
            <Script id="google-adsense" strategy="afterInteractive" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4422615944166295" crossOrigin="anonymous" />

          </>
        )}
      </body>
    </html>
  )
}
