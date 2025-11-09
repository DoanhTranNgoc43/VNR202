import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import BackgroundMusic from '../components/background-music'
// import Chatbox from '../components/chatbox'
import Ticker from '../components/ticker'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Văn hoá Việt Nam',
  description:
    'Phân tích các trầm tích, yếu kém, khuyết tật văn hoá và giải pháp để Việt Nam hội nhập kinh tế quốc tế chủ động, hiệu quả.',
  generator: 'v0.app',
  icons: {
    icon: '/VietNam.png',
   
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <Ticker />
        {children}
        <BackgroundMusic />
        {/* <Chatbox /> */}
        <Analytics />
      </body>
    </html>
  )
}
