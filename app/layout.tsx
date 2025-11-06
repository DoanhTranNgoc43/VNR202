import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Trầm tích văn hoá Việt Nam · Hội nhập kinh tế quốc tế',
  description:
    'Phân tích các trầm tích, yếu kém, khuyết tật văn hoá và giải pháp để Việt Nam hội nhập kinh tế quốc tế chủ động, hiệu quả.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
