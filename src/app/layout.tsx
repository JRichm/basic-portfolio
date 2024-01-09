import type { Metadata } from 'next'
import { Nunito_Sans, Roboto, Inter } from 'next/font/google'
import './globals.css'

const nunito = Nunito_Sans({ subsets: ['cyrillic']})
const roboto = Roboto({ subsets: ['cyrillic'], weight: ['300']})
const inter = Inter({ subsets: ['cyrillic']})

export const metadata: Metadata = {
  title: 'James Richmond Portfolio',
  description: 'basic-portfolio made by github.com/JRichm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className + " " + roboto.className + " " + inter.className}>{children}</body>
    </html>
  )
}
