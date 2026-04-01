// 'use client'

// import { Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

// export default function Hero({ onLaunch }: { onLaunch: () => void }) {
//   return (
//     <section className='relative py-8 md:py-16 px-6 overflow-hidden bg-white'>
//       <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center'>
//         <div className='space-y-5 text-left'>
//           {/* Refined Badge */}
//           <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-50 text-fuchsia-600 text-[9px] font-black uppercase tracking-[0.2em]'>
//             <Zap className='w-3 h-3 fill-current' />
//             The Future of Creation
//           </div>

//           {/* Heading - Size adjusted for better fit */}
//           <h1 className='text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.05]'>
//             Create Content <br /> That{' '}
//             <span className='text-indigo-600'>Actually</span> <br /> Gets
//             Attention.
//           </h1>

//           {/* Subtext - Matches the provided design copy */}
//           <p className='text-slate-500 text-sm md:text-base max-w-md leading-relaxed font-medium'>
//             Generate high-performing posts, scripts, and threads tailored to
//             your platform, tone, and audience—in seconds.
//           </p>

//           {/* Actions - Reduced gap for a tighter feel */}
//           <div className='flex flex-col sm:flex-row items-center gap-3 pt-1'>
//             <button
//               onClick={onLaunch}
//               className='w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white font-black rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-700 shadow-md transition-all active:scale-95 text-xs'
//             >
//               Generate Content Now <ArrowRight className='w-4 h-4' />
//             </button>
//             <button className='w-full sm:w-auto px-8 py-3.5 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-all text-xs border border-transparent'>
//               See Examples
//             </button>
//           </div>

//           {/* Trust Indicators - Updated with design copy */}
//           <div className='flex items-center gap-6 pt-3'>
//             <div className='flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-wider'>
//               <CheckCircle2 className='w-4 h-4 text-indigo-600' /> Built for
//               creators and marketers
//             </div>
//             <div className='flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-wider'>
//               <Zap className='w-4 h-4 text-indigo-600 fill-current' /> Instant
//               results. No guesswork.
//             </div>
//           </div>
//         </div>

//         {/* Hero Visual Mockup - Matches your AI Preview design */}
//         <div className='relative hidden lg:block'>
//           <div className='relative z-10 bg-white rounded-2xl shadow-2xl border border-slate-100 p-1 max-w-lg ml-auto overflow-hidden'>
//             <div className='bg-slate-50 rounded-xl border border-slate-100 overflow-hidden flex flex-col'>
//               {/* Browser Header */}
//               <div className='h-8 bg-white border-b border-slate-100 flex items-center justify-between px-4'>
//                 <div className='flex gap-1.5'>
//                   <div className='w-2 h-2 rounded-full bg-red-400/20' />
//                   <div className='w-2 h-2 rounded-full bg-yellow-400/20' />
//                   <div className='w-2 h-2 rounded-full bg-green-400/20' />
//                 </div>
//                 <div className='text-[8px] font-black text-slate-300 uppercase tracking-widest'>
//                   Atelier AI Preview
//                 </div>
//               </div>

//               {/* Preview Content Area */}
//               <div className='p-6 space-y-5 bg-white/50'>
//                 <div className='space-y-2'>
//                   <div className='text-[9px] font-bold text-slate-400 uppercase'>
//                     Platform
//                   </div>
//                   <div className='h-9 w-full bg-slate-50 border border-slate-100 rounded-lg' />
//                 </div>
//                 <div className='space-y-2'>
//                   <div className='text-[9px] font-bold text-slate-400 uppercase'>
//                     Prompt
//                   </div>
//                   <div className='h-16 w-full bg-slate-50 border border-slate-100 rounded-lg' />
//                 </div>
//                 <div className='space-y-2'>
//                   <div className='flex justify-between text-[9px] font-bold uppercase'>
//                     <span className='text-indigo-600'>Output Generated</span>
//                     <span className='text-slate-300'>2.4s</span>
//                   </div>
//                   <div className='space-y-2 p-3 bg-indigo-50/30 rounded-lg border border-indigo-50'>
//                     <div className='h-1.5 w-3/4 bg-indigo-200 rounded-full' />
//                     <div className='h-1.5 w-full bg-indigo-100 rounded-full' />
//                     <div className='h-1.5 w-2/3 bg-indigo-100 rounded-full' />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Subtle Accent Glow */}
//           <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-50 blur-[100px] -z-10 opacity-50' />
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import {
  Zap,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Briefcase,
} from 'lucide-react'

export default function Hero({ onLaunch }: { onLaunch: () => void }) {
  return (
    <section className='relative py-12 md:py-20 px-6 overflow-hidden bg-white'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center'>
        {/* Left Content */}
        <div className='space-y-7 text-left'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2FF] text-[#D84CFF] text-[10px] font-black uppercase tracking-[0.15em]'>
            <Zap className='w-3 h-3 fill-current' />
            The Future of Creation
          </div>

          <h1 className='text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-[#1A1F23] leading-[0.95]'>
            Create Content <br /> That{' '}
            <span className='text-[#4F46E5]'>Actually</span> <br /> Gets
            Attention.
          </h1>

          <p className='text-[#64748B] text-base md:text-lg max-w-lg leading-relaxed font-medium'>
            Generate high-performing posts, scripts, and threads tailored to
            your platform, tone, and audience—in seconds.
          </p>

          <div className='flex flex-col sm:flex-row items-center gap-4 pt-2'>
            <button
              onClick={onLaunch}
              className='w-full sm:w-auto px-8 py-4 bg-[#4F46E5] text-white font-black rounded-xl flex items-center justify-center gap-2 hover:bg-[#4338CA] shadow-xl shadow-indigo-100 transition-all active:scale-95 text-sm'
            >
              Generate Content Now
            </button>
            <button className='w-full sm:w-auto px-8 py-4 bg-[#E2E8F0] text-[#1A1F23] font-bold rounded-xl hover:bg-[#D1D5DB] transition-all text-sm'>
              See Examples
            </button>
          </div>

          <div className='flex flex-wrap items-center gap-x-8 gap-y-4 pt-4'>
            <div className='flex items-center gap-2 text-[#64748B] text-[11px] font-bold uppercase tracking-tight'>
              <div className='w-5 h-5 rounded-full bg-[#4F46E5] flex items-center justify-center'>
                <CheckCircle2 className='w-3 h-3 text-white' />
              </div>
              Built for creators and marketers
            </div>
            <div className='flex items-center gap-2 text-[#64748B] text-[11px] font-bold uppercase tracking-tight'>
              <Zap className='w-4 h-4 text-[#4F46E5] fill-current' />
              Instant results. No guesswork.
            </div>
          </div>
        </div>

        {/* Right Visual - Browser Mockup from "Interface Preview Card.png" */}
        <div className='relative hidden lg:block'>
          <div className='relative z-10 bg-white rounded-2xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] border border-slate-100 p-1 overflow-hidden'>
            <div className='bg-white rounded-xl overflow-hidden flex flex-col'>
              {/* Browser Top Bar */}
              <div className='h-10 bg-[#F8FAFC] border-b border-slate-100 flex items-center justify-between px-5'>
                <div className='flex gap-2'>
                  <div className='w-2.5 h-2.5 rounded-full bg-[#FF605C]' />
                  <div className='w-2.5 h-2.5 rounded-full bg-[#FFBD44]' />
                  <div className='w-2.5 h-2.5 rounded-full bg-[#24C93F]' />
                </div>
                <div className='text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] opacity-70'>
                  Atelier AI Preview
                </div>
              </div>

              {/* UI Form Area */}
              <div className='p-8 space-y-6'>
                <div className='space-y-3'>
                  <div className='text-[10px] font-black text-slate-400 uppercase tracking-widest'>
                    Platform
                  </div>
                  <div className='grid grid-cols-2 gap-3'>
                    <div className='flex items-center gap-2 p-3 bg-[#EEF2FF] border border-[#C7D2FE] rounded-lg text-[11px] font-bold text-[#1E1B4B]'>
                      <MessageSquare className='w-3.5 h-3.5 text-[#4F46E5]' />{' '}
                      Twitter Thread
                    </div>
                    <div className='flex items-center gap-2 p-3 bg-[#F8FAFC] border border-slate-100 rounded-lg text-[11px] font-bold text-slate-400'>
                      <Briefcase className='w-3.5 h-3.5 text-slate-300' />{' '}
                      LinkedIn Post
                    </div>
                  </div>
                </div>

                <div className='space-y-3'>
                  <div className='text-[10px] font-black text-slate-400 uppercase tracking-widest'>
                    Prompt
                  </div>
                  <div className='p-4 bg-[#F1F5F9] rounded-xl border border-slate-100 text-[12px] text-slate-500 font-medium leading-relaxed'>
                    Explain the 5 biggest mistakes new creators make when
                    building their personal brand...
                  </div>
                </div>

                <div className='space-y-4 pt-2'>
                  <div className='flex justify-between items-end border-t border-slate-50 pt-4'>
                    <span className='text-[11px] font-black text-[#4F46E5] uppercase tracking-widest'>
                      Output Generated
                    </span>
                    <span className='text-[10px] font-bold text-slate-300'>
                      2.4s
                    </span>
                  </div>

                  {/* Skeleton Output */}
                  <div className='space-y-3 p-5 bg-[#F5F3FF] rounded-xl border border-[#EDE9FE]'>
                    <div className='h-2 w-[75%] bg-[#DDD6FE] rounded-full' />
                    <div className='h-2 w-full bg-[#EBE9FE] rounded-full' />
                    <div className='h-2 w-[85%] bg-[#EBE9FE] rounded-full' />
                    <div className='h-2 w-[60%] bg-[#EBE9FE] rounded-full' />
                  </div>

                  {/* Sub-skeleton */}
                  <div className='space-y-2 px-1'>
                    <div className='h-1.5 w-[40%] bg-slate-100 rounded-full' />
                    <div className='h-1.5 w-full bg-slate-50 rounded-full' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Glow */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-50/50 blur-[120px] -z-10' />
        </div>
      </div>
    </section>
  )
}