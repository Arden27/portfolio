import './globals.css'
import { Inter } from 'next/font/google'
import DynamicBackground from '@/components/dynamicBackground'
import Chat from '@/components/chat'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Artem Furman',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html className="overflow-hidden h-[100svh]" lang="en">
      <body className={` h-[100svh]`}>
        <div className="relative h-[100svh]">
          <div className="absolute inset-0 z-0">
            <DynamicBackground />
          </div>
          <div className="relative z-10 h-[100svh]">
            {children}
          </div>
          <div className='z-20'>
            <Chat className="z-20"/>
          </div>
        </div>
      </body>
    </html>
  );
}
