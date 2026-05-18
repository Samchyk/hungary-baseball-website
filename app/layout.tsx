import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-sans'
});
const _geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Hungary Baseball - Modern Baseball az Magyarországon',
  description: 'Fedezz fel a baseball világát: technikák, történelem, felszerelés, szabályok és tippek magyar nyelven.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <body className={`${_geist.variable} ${_geistMono.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
