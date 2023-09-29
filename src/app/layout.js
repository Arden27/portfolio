import Providers from "@/redux/provider";
// import './globals.css'
import '@/style/globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
//import DynamicBackground from '@/components/dynamicBackground'
//import Chat from '@/components/chat'
//import { useSelector } from "react-redux";
import NavBar from "@/components/nav";

import dynamic from 'next/dynamic';

const DynamicBackground = dynamic(() => import("../components/dynamicBackground"), {
  ssr: false
});

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Artem Furman',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  //const knockKnock = useSelector((state) => state.knockKnock);
  return (
    <html className="overflow-hidden bg-slate-500" lang="en">
      <body className={`${inter.className} fixed`}>
        <Providers>
          <NavBar isHomeVisible={true} />
          <div className="relative">
            <div className="absolute inset-0 z-0">
              <DynamicBackground />
            </div>
            <div 
              id="mainContainer"
              className="z-20 relative box-border h-[100svh] w-screen snap-y snap-mandatory overflow-scroll scroll-smooth">
              {children}
              <Analytics />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
