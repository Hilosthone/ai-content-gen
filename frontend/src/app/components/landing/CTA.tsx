// export default function CTA() {
//   return (
//     <section className='px-6 py-12'>
//       <div className='max-w-5xl mx-auto rounded-[3rem] bg-[#0C0F10] p-12 md:p-20 text-center relative overflow-hidden'>
//         {/* Subtle glow background */}
//         <div className='absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full' />

//         <div className='relative z-10 space-y-8'>
//           <h2 className='text-4xl md:text-5xl font-bold text-white leading-tight'>
//             Ready to never run out of <br /> ideas again?
//           </h2>
//           <p className='text-slate-400 max-w-lg mx-auto'>
//             Join 10,000+ creators who use our AI to scale their content and
//             build a massive online brand.
//           </p>
//           <button className='px-10 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-100 transition-all'>
//             Start Generating For Free
//           </button>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { Sparkles, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className='px-5 py-16 md:py-24 bg-white'>
      <div className='max-w-5xl mx-auto rounded-3xl bg-[#0C0F10] p-10 md:p-20 text-center relative overflow-hidden border border-slate-800 shadow-2xl'>
        {/* Dynamic Glow Effects */}
        <div className='absolute -top-24 -right-24 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full' />
        <div className='absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full' />

        <div className='relative z-10 space-y-6 md:space-y-8'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mx-auto'>
            <Sparkles className='w-3 h-3' />
            Limited Beta Access
          </div>

          <h2 className='text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight'>
            Never run out of <br className='hidden md:block' />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200'>
              winning ideas
            </span>{' '}
            again.
          </h2>

          <p className='text-slate-400 max-w-md mx-auto text-sm md:text-base font-medium leading-relaxed'>
            Join 10,000+ creators scaling their content and building massive
            brands with our high-performance AI.
          </p>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'>
            <button className='w-full sm:w-auto px-8 py-4 bg-white text-black text-sm font-black rounded-xl hover:bg-indigo-50 transition-all active:scale-95 flex items-center justify-center gap-2'>
              Start Generating Free <ArrowRight className='w-4 h-4' />
            </button>
            <button className='w-full sm:w-auto px-8 py-4 bg-transparent text-white text-sm font-bold rounded-xl border border-white/10 hover:bg-white/5 transition-all'>
              Talk to Sales
            </button>
          </div>

          <p className='text-[10px] font-bold text-slate-500 uppercase tracking-widest'>
            No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}