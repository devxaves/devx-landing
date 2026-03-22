import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import CustomCursor from './components/CustomCursor'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Team DEVX — Premium Web Development Agency',
  description:
    'Team DEVX crafts high-performance websites and web applications that merge aesthetic precision with engineering excellence — for brands that demand the extraordinary.',
  keywords: ['web development', 'agency', 'Next.js', 'React', 'UI/UX design', 'web applications'],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Team DEVX — Premium Web Development Agency',
    description: 'Crafting digital experiences that endure. Premium web development for brands that demand the extraordinary.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
