'use client'

import React from 'react'
import { ChevronLeft, Sparkles, Radio } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StudioHeader({ onExit }: { onExit: () => void }) {
  return (
    <header className='h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-[110] shadow-sm shadow-slate-100/50'>
      {/* Left: Exit Action */}
      <div className='flex items-center gap-6'>
        <button
          onClick={onExit}
          className='group flex items-center gap-2 text-slate-400 hover:text-[#1A1F23] font-black text-[10px] uppercase tracking-[0.2em] transition-all'
        >
          <ChevronLeft className='w-4 h-4 transition-transform group-hover:-translate-x-1' />
          Exit Studio
        </button>

        <div className='h-4 w-[1px] bg-slate-200 hidden md:block' />

        {/* Status Indicator */}
        <div className='hidden md:flex items-center gap-2'>
          <div className='relative flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
          </div>
          <span className='text-[9px] font-black text-slate-500 uppercase tracking-widest'>
            Engine Live
          </span>
        </div>
      </div>

      {/* Center/Right: Logo Branding */}
      <div className='flex items-center gap-3'>
        <div className='flex flex-col items-end hidden sm:flex'>
          <span className='text-[10px] font-black text-[#1A1F23] uppercase tracking-tighter'>
            Atelier Studio
          </span>
          <span className='text-[8px] font-bold text-[#4F46E5] uppercase tracking-[0.2em]'>
            v4.0 Turbo
          </span>
        </div>
        <div className='w-9 h-9 bg-[#4F46E5] rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100 rotate-3 hover:rotate-0 transition-transform cursor-pointer'>
          <Sparkles className='w-5 h-5 text-white fill-white/20' />
        </div>
      </div>
    </header>
  )
}
