import type { Metadata } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactBanner } from '@/components/layout/ContactBanner'
import { PageTopButton } from '@/components/shared/PageTopButton'
import { siteConfig } from '@/lib/siteConfig'

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  display: 'swap',
})

const notoSerifJP = Noto_Serif_JP({
  variable: '--font-noto-serif-jp',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.companyName,
    template: `%s｜${siteConfig.companyName}`,
  },
  description: `${siteConfig.companyName}は、高精度な加工技術と最新設備で、お客様のものづくりを支える製造業のパートナーです。`,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: siteConfig.companyName,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} ${inter.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <ContactBanner />
        <Footer />
        <PageTopButton />
      </body>
    </html>
  )
}
