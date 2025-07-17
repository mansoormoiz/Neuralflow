import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Chatbot from "./components/Chatbot";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neural Flow - Digital Excellence',
  description: 'Transforming ideas into digital excellence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Chatbot />
      </body>
    </html>
  )
} 