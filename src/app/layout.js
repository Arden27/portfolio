import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Artem Furman',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html className="bg-gray-100 overflow-hidden" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
