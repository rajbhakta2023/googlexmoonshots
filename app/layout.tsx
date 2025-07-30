import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moonshot Memos: Proposals for a 10x Future',
  description: 'Six radical ideas presented for the Google X Rapid Evaluation Team, designed to solve some of the world\'s most pressing problems with breakthrough technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-stone-950`}>{children}</body>
    </html>
  )
} 