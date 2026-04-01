// 'use client'

// import { usePathname } from 'next/navigation'
// import { Inter } from 'next/font/google'
// import './globals.css'
// import TopHeader from '@/app/components/navigation/TopHeader'
// import BottomNav from '@/app/components/navigation/BottomNav'
// import { Toaster } from 'sonner'
// import { cn } from '@/lib/utils'

// const inter = Inter({ subsets: ['latin'] })

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   const pathname = usePathname()

//   // Logic to hide navbars on the landing/splash page (/)
//   // so it feels like a premium entry portal.
//   const isLandingPage = pathname === '/'

//   return (
//     <html lang='en' className='dark'>
//       <body
//         className={cn(
//           inter.className,
//           'antialiased overflow-x-hidden bg-[#020617] text-slate-200',
//         )}
//       >
//         {/* Only show TopHeader if we are in the Studio/App sections */}
//         {!isLandingPage && <TopHeader />}

//         <main
//           className={cn(
//             'min-h-screen transition-all duration-500',
//             !isLandingPage ? 'pt-20 pb-32 px-4 max-w-5xl mx-auto' : 'p-0',
//           )}
//         >
//           {children}
//         </main>

//         {/* Only show BottomNav if we are in the Studio/App sections */}
//         {!isLandingPage && <BottomNav />}

//         {/* Premium Toast Notifications */}
//         <Toaster
//           position='top-center'
//           expand={false}
//           richColors
//           theme='dark'
//           closeButton
//         />
//       </body>
//     </html>
//   )
// }

'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { cn } from '@/lib/utils'

// Navigation Components
import TopHeader from '@/app/components/navigation/TopHeader'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  /**
   * isLandingPage: The long-form scroll page from your image.
   * isStudio: The interactive generation app.
   */
  const isLandingPage = pathname === '/'

  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={cn(
          inter.variable,
          inter.className,
          'antialiased transition-colors duration-500',
          // Landing page is pure white; Studio gets a very subtle slate-50 tint
          isLandingPage ? 'bg-white' : 'bg-slate-50',
        )}
      >
        {/* Only show the TopHeader on Studio pages. 
            The Landing Page usually has its own integrated Hero Nav.
        */}
        {!isLandingPage && <TopHeader />}

        <main
          className={cn(
            'min-h-screen',
            // Landing page: Full width for the sections in your image.
            // Studio: Standard padding to clear the fixed header.
            isLandingPage ? 'w-full' : 'pt-20 pb-32 px-4 max-w-7xl mx-auto',
          )}
        >
          {children}
        </main>

        {/* Global Notifications */}
        <Toaster position='top-center' richColors theme='light' closeButton />
      </body>
    </html>
  )
}