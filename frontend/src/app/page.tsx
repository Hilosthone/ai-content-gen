'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Zap, Shield, Globe } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020617] px-6'>
      {/* Dynamic Background Gradients */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none'>
        <div className='absolute top-[-10%] left-[-20%] w-[70%] h-[60%] bg-violet-600/20 blur-[140px] rounded-full' />
        <div className='absolute bottom-[10%] right-[-20%] w-[60%] h-[50%] bg-fuchsia-600/10 blur-[120px] rounded-full' />
      </div>

      {/* Main Content */}
      <div className='relative z-10 text-center space-y-8 max-w-3xl'>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md'
        >
          <Sparkles className='w-3.5 h-3.5 text-violet-400' />
          <span className='text-[10px] font-black uppercase tracking-[0.3em] text-slate-300'>
            Next-Gen Content Engine
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className='text-5xl md:text-7xl font-bold tracking-tight text-white'
        >
          buildON <br />
          <span className='bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent'>
            Pure Intelligence.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium'
        >
          The premium generative studio for elite creators. Craft viral video
          scripts and optimized social content with a single tap.
        </motion.p>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'
        >
          <Link href='/studio'>
            <button className='group relative px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2'>
              Enter Studio
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </button>
          </Link>

          <div className='flex items-center gap-6 px-6 py-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm'>
            <div className='flex flex-col items-center'>
              <span className='text-white font-bold text-sm'>1.0</span>
              <span className='text-[8px] text-slate-500 uppercase font-black'>
                Engine
              </span>
            </div>
            <div className='w-[1px] h-6 bg-white/10' />
            <div className='flex flex-col items-center'>
              <span className='text-white font-bold text-sm'>PRO</span>
              <span className='text-[8px] text-slate-500 uppercase font-black'>
                Tier
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Footer */}
      <footer className='absolute bottom-12 left-0 right-0 text-center'>
        <p className='text-[9px] font-black uppercase tracking-[0.5em] text-slate-700'>
          Powered by Ai Engine
        </p>
      </footer>
    </div>
  )
}
