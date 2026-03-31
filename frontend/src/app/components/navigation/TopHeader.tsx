'use client'

import { Sparkles, Search, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link' // Import Link from Next.js

export default function TopHeader() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 h-16 bg-slate-950/60 backdrop-blur-xl border-b border-white/5 px-6'>
      <div className='max-w-5xl mx-auto h-full flex items-center justify-between'>
        {/* Branding - Now Clickable */}
        <Link
          href='/'
          className='flex items-center gap-2 group transition-transform active:scale-95'
        >
          <div className='w-8 h-8 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all'>
            <Sparkles className='w-5 h-5 text-white' />
          </div>
          <span className='text-sm font-black uppercase tracking-[0.2em] text-white'>
            BuildOn<span className='text-violet-500'>.</span>AI
          </span>
        </Link>

        {/* Action Icons - WhatsApp Style */}
        <div className='flex items-center gap-4'>
          <button className='p-2 hover:bg-white/5 rounded-full transition-colors'>
            <Search className='w-5 h-5 text-slate-400' />
          </button>
          <div className='h-8 w-8 rounded-full border border-violet-500/30 p-0.5'>
            <div className='h-full w-full bg-slate-800 rounded-full flex items-center justify-center'>
              <User className='w-4 h-4 text-slate-400' />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
