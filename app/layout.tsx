
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RegisterModal from './ui/modals/registerModal'
import ToasterProvider from './providers/toasterProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IsInSpec',
  description: 'Digital Quality Portal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider/>
        <RegisterModal/>
        
        {children}
        </body>
    </html>
  )
}
