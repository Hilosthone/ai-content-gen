// // 'use client'

// // import React, { useState, useEffect } from 'react'
// // import { motion, AnimatePresence } from 'framer-motion'
// // import {
// //   Sparkles,
// //   ArrowRight,
// //   CheckCircle2,
// //   Zap,
// //   ChevronLeft,
// // } from 'lucide-react'

// // // Components with absolute paths to @/app/components/landing/
// // import GeneratorPreview from '@/app/components/landing/GeneratorPreview'
// // import Steps from '@/app/components/landing/Steps'
// // import CTA from '@/app/components/landing/CTA'
// // import FAQ from '@/app/components/landing/FAQ'
// // import Footer from '@/app/components/landing/Footer'
// // import StudioEngine from '@/app/components/landing/StudioEngine'

// // export default function UnifiedLandingPage() {
// //   // view state handles the single-page toggle without URL change
// //   const [view, setView] = useState<'landing' | 'studio'>('landing')

// //   // Smooth scroll to top when switching to studio
// //   useEffect(() => {
// //     window.scrollTo(0, 0)
// //   }, [view])

// //   return (
// //     <main className='bg-white min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900'>
// //       <AnimatePresence mode='wait'>
// //         {view === 'landing' ? (
// //           /* --- LANDING VIEW --- */
// //           <motion.div
// //             key='landing'
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0, y: -20 }}
// //             transition={{ duration: 0.4, ease: 'easeInOut' }}
// //           >
// //             {/* 1. INTEGRATED LANDING NAV */}
// //             <nav className='flex items-center justify-between px-6 py-6 max-w-7xl mx-auto sticky top-0 bg-white/80 backdrop-blur-md z-[100]'>
// //               <div className='flex items-center gap-2'>
// //                 <div className='w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200'>
// //                   <Sparkles className='w-6 h-6 text-white' />
// //                 </div>
// //                 <span className='font-bold text-2xl tracking-tight text-slate-900'>
// //                   BuildOn<span className='text-indigo-600'>.</span>AI
// //                 </span>
// //               </div>

// //               <div className='hidden md:flex items-center gap-10 text-sm font-bold text-slate-500'>
// //                 <a
// //                   href='#features'
// //                   className='hover:text-indigo-600 transition-colors'
// //                 >
// //                   Features
// //                 </a>
// //                 <a
// //                   href='#how-it-works'
// //                   className='hover:text-indigo-600 transition-colors'
// //                 >
// //                   Process
// //                 </a>
// //                 <a
// //                   href='#faq'
// //                   className='hover:text-indigo-600 transition-colors'
// //                 >
// //                   FAQ
// //                 </a>
// //               </div>

// //               <button
// //                 onClick={() => setView('studio')}
// //                 className='bg-indigo-600 text-white px-7 py-3 rounded-xl text-sm font-black hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-100 uppercase tracking-tight'
// //               >
// //                 Get Starting
// //               </button>
// //             </nav>

// //             {/* 2. HERO SECTION */}
// //             <section className='relative pt-16 pb-24 px-6 overflow-hidden'>
// //               <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center'>
// //                 <div className='space-y-10'>
// //                   <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[12px] font-black uppercase tracking-[0.15em]'>
// //                     <Zap className='w-3.5 h-3.5 fill-current' />
// //                     The Engine is Live
// //                   </div>

// //                   <h1 className='text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95]'>
// //                     Create Content <br /> That{' '}
// //                     <span className='text-indigo-600 underline decoration-indigo-100 underline-offset-8'>
// //                       Actually
// //                     </span>{' '}
// //                     Gets Attention.
// //                   </h1>

// //                   <p className='text-slate-500 text-xl md:text-2xl max-w-lg leading-relaxed font-medium'>
// //                     Generate high-performing scripts, winning ads, and
// //                     platform-specific content in seconds with our AI Studio.
// //                   </p>

// //                   <div className='flex flex-col sm:flex-row items-center gap-5 pt-4'>
// //                     <button
// //                       onClick={() => setView('studio')}
// //                       className='w-full sm:w-auto px-10 py-5 bg-indigo-600 text-white font-black rounded-[1.25rem] flex items-center justify-center gap-3 hover:bg-indigo-700 shadow-2xl shadow-indigo-200 transition-all hover:-translate-y-1 active:scale-95 text-lg'
// //                     >
// //                       Enter the Studio
// //                       <ArrowRight className='w-5 h-5' />
// //                     </button>
// //                     <button className='w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 font-black rounded-[1.25rem] hover:bg-slate-50 transition-all text-lg'>
// //                       View Examples
// //                     </button>
// //                   </div>

// //                   <div className='flex items-center gap-8 pt-6'>
// //                     <div className='flex items-center gap-2.5 text-slate-400 text-sm font-bold'>
// //                       <CheckCircle2 className='w-5 h-5 text-indigo-500' />
// //                       100+ Content Engines
// //                     </div>
// //                     <div className='flex items-center gap-2.5 text-slate-400 text-sm font-bold'>
// //                       <CheckCircle2 className='w-5 h-5 text-indigo-500' />
// //                       Free while in Beta
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Hero Visual Mockup */}
// //                 <div className='relative group'>
// //                   <div className='relative z-10 bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(79,70,229,0.2)] border border-slate-100 p-4 transform transition-transform group-hover:scale-[1.02] duration-700'>
// //                     <div className='bg-slate-50 rounded-[2.2rem] border border-slate-100 overflow-hidden aspect-video flex flex-col'>
// //                       <div className='h-10 bg-white border-b border-slate-100 flex items-center px-6 gap-2'>
// //                         <div className='w-2.5 h-2.5 rounded-full bg-red-400/20' />
// //                         <div className='w-2.5 h-2.5 rounded-full bg-amber-400/20' />
// //                         <div className='w-2.5 h-2.5 rounded-full bg-emerald-400/20' />
// //                       </div>
// //                       <div className='p-8 space-y-6 flex-1'>
// //                         <div className='h-4 w-1/3 bg-indigo-100 rounded-full animate-pulse' />
// //                         <div className='space-y-3'>
// //                           <div className='h-3 w-full bg-slate-200 rounded-full' />
// //                           <div className='h-3 w-[90%] bg-slate-200 rounded-full' />
// //                         </div>
// //                         <div className='h-32 w-full bg-white border border-slate-100 rounded-2xl shadow-inner' />
// //                         <div className='h-12 w-full bg-indigo-600 rounded-xl shadow-lg shadow-indigo-100' />
// //                       </div>
// //                     </div>
// //                   </div>
// //                   {/* Decorative Glow */}
// //                   <div className='absolute -top-20 -right-20 w-80 h-80 bg-indigo-200/40 blur-[120px] rounded-full -z-10 animate-pulse' />
// //                   <div className='absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100/40 blur-[120px] rounded-full -z-10' />
// //                 </div>
// //               </div>
// //             </section>

// //             {/* 3. LANDING CONTENT COMPONENTS */}
// //             <div id='features'>
// //               <GeneratorPreview />
// //             </div>
// //             <div id='how-it-works'>
// //               <Steps />
// //             </div>
// //             <CTA />
// //             <div id='faq'>
// //               <FAQ />
// //             </div>
// //             <Footer />
// //           </motion.div>
// //         ) : (
// //           /* --- STUDIO VIEW (The Functional Engine) --- */
// //           <motion.div
// //             key='studio'
// //             initial={{ opacity: 0, scale: 0.98 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             exit={{ opacity: 0, scale: 1.02 }}
// //             transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
// //             className='min-h-screen bg-slate-50/50'
// //           >
// //             {/* Functional Studio Header */}
// //             <header className='h-20 bg-white border-b border-slate-100 px-8 flex items-center justify-between sticky top-0 z-[110] backdrop-blur-lg bg-white/90'>
// //               <button
// //                 onClick={() => setView('landing')}
// //                 className='group flex items-center gap-3 text-slate-500 hover:text-indigo-600 font-black text-xs uppercase tracking-widest transition-all'
// //               >
// //                 <div className='p-2 rounded-lg group-hover:bg-indigo-50 transition-colors'>
// //                   <ChevronLeft className='w-5 h-5' />
// //                 </div>
// //                 Back to Overview
// //               </button>

// //               <div className='flex items-center gap-3'>
// //                 <div className='text-right hidden sm:block'>
// //                   <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest'>
// //                     Environment
// //                   </p>
// //                   <p className='text-xs font-bold text-indigo-600'>
// //                     Production v1.0
// //                   </p>
// //                 </div>
// //                 <div className='w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200'>
// //                   <Sparkles className='w-5 h-5 text-white' />
// //                 </div>
// //               </div>
// //             </header>

// //             {/* Content Studio Engine Wrapper */}
// //             <div className='max-w-7xl mx-auto pt-12 px-6'>
// //               <StudioEngine />
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </main>
// //   )
// // }

// 'use client'

// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import {
//   Sparkles,
//   ArrowRight,
//   CheckCircle2,
//   Zap,
//   ChevronLeft,
// } from 'lucide-react'

// // Components
// import GeneratorPreview from '@/app/components/landing/GeneratorPreview'
// import Steps from '@/app/components/landing/Steps'
// import CTA from '@/app/components/landing/CTA'
// import FAQ from '@/app/components/landing/FAQ'
// import Footer from '@/app/components/landing/Footer'
// import StudioEngine from '@/app/components/landing/StudioEngine'

// export default function UnifiedLandingPage() {
//   const [view, setView] = useState<'landing' | 'studio'>('landing')

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [view])

//   return (
//     <main className='bg-white min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden'>
//       <AnimatePresence mode='wait'>
//         {view === 'landing' ? (
//           <motion.div
//             key='landing'
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             {/* 1. NAVIGATION - Tighter Padding */}
//             <nav className='flex items-center justify-between px-6 py-4 max-w-7xl mx-auto sticky top-0 bg-white/90 backdrop-blur-md z-[100] border-b border-slate-50'>
//               <div className='flex items-center gap-2'>
//                 <div className='w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200'>
//                   <Sparkles className='w-5 h-5 text-white' />
//                 </div>
//                 <span className='font-bold text-xl tracking-tight text-slate-900'>
//                   BuildOn<span className='text-indigo-600'>.</span>AI
//                 </span>
//               </div>

//               <div className='hidden md:flex items-center gap-8 text-[13px] font-bold text-slate-500 uppercase tracking-wide'>
//                 <a
//                   href='#features'
//                   className='hover:text-indigo-600 transition-colors'
//                 >
//                   Features
//                 </a>
//                 <a
//                   href='#how-it-works'
//                   className='hover:text-indigo-600 transition-colors'
//                 >
//                   Process
//                 </a>
//                 <a
//                   href='#faq'
//                   className='hover:text-indigo-600 transition-colors'
//                 >
//                   FAQ
//                 </a>
//               </div>

//               <button
//                 onClick={() => setView('studio')}
//                 className='bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-xs font-black hover:bg-indigo-700 transition-all active:scale-95 uppercase tracking-tighter'
//               >
//                 Launch App
//               </button>
//             </nav>

//             {/* 2. HERO SECTION - Scaled Down for better fit */}
//             <section className='relative pt-12 pb-16 px-6'>
//               <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center'>
//                 <div className='space-y-6'>
//                   <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest'>
//                     <Zap className='w-3 h-3 fill-current' />
//                     The Engine is Live
//                   </div>

//                   <h1 className='text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[1.05]'>
//                     Create Content <br /> That{' '}
//                     <span className='text-indigo-600'>Actually</span> <br />{' '}
//                     Gets Attention.
//                   </h1>

//                   <p className='text-slate-500 text-lg max-w-md leading-relaxed font-medium'>
//                     Generate winning scripts and platform-specific content in
//                     seconds with our professional AI Studio.
//                   </p>

//                   <div className='flex flex-col sm:flex-row items-center gap-4 pt-2'>
//                     <button
//                       onClick={() => setView('studio')}
//                       className='w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-black rounded-xl flex items-center justify-center gap-3 hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all active:scale-95'
//                     >
//                       Enter Studio <ArrowRight className='w-4 h-4' />
//                     </button>
//                     <button className='w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-all'>
//                       View Examples
//                     </button>
//                   </div>

//                   <div className='flex items-center gap-6 pt-2'>
//                     <div className='flex items-center gap-2 text-slate-400 text-xs font-bold'>
//                       <CheckCircle2 className='w-4 h-4 text-indigo-500' /> 100+
//                       Engines
//                     </div>
//                     <div className='flex items-center gap-2 text-slate-400 text-xs font-bold'>
//                       <CheckCircle2 className='w-4 h-4 text-indigo-500' /> Beta
//                       Access
//                     </div>
//                   </div>
//                 </div>

//                 {/* Hero Visual Mockup - Tighter aspect ratio */}
//                 <div className='relative hidden lg:block'>
//                   <div className='relative z-10 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-3'>
//                     <div className='bg-slate-50 rounded-[1.8rem] border border-slate-100 overflow-hidden aspect-[16/10] flex flex-col'>
//                       <div className='h-8 bg-white border-b border-slate-100 flex items-center px-5 gap-1.5'>
//                         <div className='w-2 h-2 rounded-full bg-slate-200' />
//                         <div className='w-2 h-2 rounded-full bg-slate-200' />
//                         <div className='w-2 h-2 rounded-full bg-slate-200' />
//                       </div>
//                       <div className='p-6 space-y-4 flex-1'>
//                         <div className='h-3 w-1/4 bg-indigo-100 rounded-full animate-pulse' />
//                         <div className='space-y-2'>
//                           <div className='h-2 w-full bg-slate-200 rounded-full' />
//                           <div className='h-2 w-[90%] bg-slate-200 rounded-full' />
//                         </div>
//                         <div className='h-20 w-full bg-white border border-slate-100 rounded-xl' />
//                         <div className='h-10 w-full bg-indigo-600 rounded-lg shadow-md' />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* 3. CONTENT SECTIONS */}
//             <div id='features'>
//               <GeneratorPreview />
//             </div>
//             <div id='how-it-works'>
//               <Steps />
//             </div>
//             <CTA />
//             <div id='faq'>
//               <FAQ />
//             </div>
//             <Footer />
//           </motion.div>
//         ) : (
//           /* --- STUDIO VIEW --- */
//           <motion.div
//             key='studio'
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className='min-h-screen bg-slate-50/50'
//           >
//             <header className='h-16 bg-white border-b border-slate-100 px-6 flex items-center justify-between sticky top-0 z-[110]'>
//               <button
//                 onClick={() => setView('landing')}
//                 className='flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold text-[11px] uppercase tracking-widest'
//               >
//                 <ChevronLeft className='w-4 h-4' /> Back
//               </button>
//               <div className='w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg'>
//                 <Sparkles className='w-4 h-4 text-white' />
//               </div>
//             </header>

//             <div className='max-w-6xl mx-auto py-8 px-6'>
//               <StudioEngine />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   )
// }

'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Modular Components
import Navbar from '@/app/components/landing/Navbar'
import Hero from '@/app/components/landing/Hero'
import FeatureGrid from '@/app/components/landing/FeatureGrid'
import GeneratorPreview from '@/app/components/landing/GeneratorPreview'
import Steps from '@/app/components/landing/Steps'
import CTA from '@/app/components/landing/CTA'
import FAQ from '@/app/components/landing/FAQ'
import Footer from '@/app/components/landing/Footer'
import StudioEngine from '@/app/components/landing/StudioEngine'
import StudioHeader from '@/app/components/landing/StudioHeader'

export default function UnifiedLandingPage() {
  const [view, setView] = useState<'landing' | 'studio'>('landing')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [view])

  return (
    <main className='bg-white min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900'>
      <AnimatePresence mode='wait'>
        {view === 'landing' ? (
          <motion.div
            key='landing'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Navbar onLaunch={() => setView('studio')} />
            <Hero onLaunch={() => setView('studio')} />
            <FeatureGrid />

            <div id='features'>
              <GeneratorPreview />
            </div>
            <div id='how-it-works'>
              <Steps />
            </div>

            <CTA />

            <div id='faq'>
              <FAQ />
            </div>
            <Footer />
          </motion.div>
        ) : (
          <motion.div
            key='studio'
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            className='min-h-screen bg-slate-50'
          >
            <StudioHeader onExit={() => setView('landing')} />
            <div className='max-w-6xl mx-auto py-8 px-6'>
              <StudioEngine />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}