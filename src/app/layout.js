import './globals.css'
import { Inter } from 'next/font/google'
import DynamicBackground from '@/components/dynamicBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Artem Furman',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html className="overflow-hidden" lang="en">
      <body className={inter.className}>
        <div className="relative">
          <div className="absolute inset-0 z-0">
            <DynamicBackground />
          </div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
