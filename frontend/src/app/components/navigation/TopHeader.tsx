'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sparkles, Search, User, Bell, LayoutGrid } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function TopHeader() {
  const pathname = usePathname()

  return (
    <header className='fixed top-0 left-0 right-0 z-[100] h-16 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6'>
      <div className='max-w-7xl mx-auto h-full flex items-center justify-between'>
        {/* Left: Branding & Context */}
        <div className='flex items-center gap-8'>
          <Link
            href='/'
            className='flex items-center gap-2 group transition-transform active:scale-95'
          >
            <div className='w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200'>
              <Sparkles className='w-5 h-5 text-white' />
            </div>
            <span className='hidden sm:block text-sm font-bold uppercase tracking-widest text-slate-900'>
              BuildOn<span className='text-indigo-600'>.</span>AI
            </span>
          </Link>

          {/* Breadcrumb / Page Title */}
          <div className='hidden md:flex items-center gap-2 py-1 px-3 bg-slate-50 rounded-full border border-slate-100'>
            <LayoutGrid className='w-3 h-3 text-slate-400' />
            <span className='text-[10px] font-bold text-slate-500 uppercase tracking-tighter'>
              Studio{' '}
              {pathname !== '/studio' && ` / ${pathname.split('/').pop()}`}
            </span>
          </div>
        </div>

        {/* Center: Search Bar (Desktop only) */}
        <div className='hidden lg:flex flex-1 max-w-md mx-8'>
          <div className='relative w-full group'>
            <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors' />
            <input
              type='text'
              placeholder='Search your library...'
              className='w-full bg-slate-50 border border-slate-100 rounded-xl py-2 pl-10 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all'
            />
          </div>
        </div>

        {/* Right: Actions & Profile */}
        <div className='flex items-center gap-3'>
          {/* Notifications */}
          <button className='relative p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400 hover:text-indigo-600'>
            <Bell className='w-5 h-5' />
            <span className='absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-white' />
          </button>

          {/* User Profile Section */}
          <div className='flex items-center gap-3 pl-3 border-l border-slate-100'>
            <div className='hidden sm:block text-right'>
              <p className='text-[10px] font-bold text-slate-900 uppercase'>
                Account
              </p>
              <p className='text-[9px] text-indigo-600 font-medium'>
                Pro Member
              </p>
            </div>
            <button className='h-9 w-9 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center hover:bg-indigo-100 transition-all'>
              <User className='w-5 h-5 text-indigo-600' />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
