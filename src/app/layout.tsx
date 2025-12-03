import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Quizzera - Pakistan\'s #1 MCQ & Assessment Engine',
  description: 'Pakistan\'s most powerful MCQ bank, online testing, and exam engine for PPSC, FPSC, NTS, SPSC, KPPSC, HEC, and University Entry Tests.',
  keywords: ['MCQ', 'Quiz', 'Assessment', 'Pakistan', 'PPSC', 'FPSC', 'NTS', 'Exam', 'Education'],
  authors: [{ name: 'Mentisera Private Limited' }],
  creator: 'Mentisera',
  publisher: 'Mentisera',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://quizzera.pk',
    siteName: 'Quizzera',
    title: 'Quizzera - Pakistan\'s #1 MCQ & Assessment Engine',
    description: 'Pakistan\'s most powerful MCQ bank and online testing platform',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quizzera - Pakistan\'s #1 MCQ & Assessment Engine',
    description: 'Pakistan\'s most powerful MCQ bank and online testing platform',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
