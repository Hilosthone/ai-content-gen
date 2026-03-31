'use client'

import { usePathname } from 'next/navigation'
import { Inter } from 'next/font/google'
import './globals.css'
import TopHeader from '@/app/components/navigation/TopHeader'
import BottomNav from '@/app/components/navigation/BottomNav'
import { Toaster } from 'sonner'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  // Logic to hide navbars on the landing/splash page (/)
  // so it feels like a premium entry portal.
  const isLandingPage = pathname === '/'

  return (
    <html lang='en' className='dark'>
      <body
        className={cn(
          inter.className,
          'antialiased overflow-x-hidden bg-[#020617] text-slate-200',
        )}
      >
        {/* Only show TopHeader if we are in the Studio/App sections */}
        {!isLandingPage && <TopHeader />}

        <main
          className={cn(
            'min-h-screen transition-all duration-500',
            !isLandingPage ? 'pt-20 pb-32 px-4 max-w-5xl mx-auto' : 'p-0',
          )}
        >
          {children}
        </main>

        {/* Only show BottomNav if we are in the Studio/App sections */}
        {!isLandingPage && <BottomNav />}

        {/* Premium Toast Notifications */}
        <Toaster
          position='top-center'
          expand={false}
          richColors
          theme='dark'
          closeButton
        />
      </body>
    </html>
  )
}
