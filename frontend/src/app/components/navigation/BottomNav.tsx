'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { LayoutGrid, Video, Share2, Bookmark } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Dashboard', icon: LayoutGrid, path: '/studio' },
  { name: 'Video', icon: Video, path: '/studio/video-scripts' },
  { name: 'Social', icon: Share2, path: '/studio/social-posts' },
  { name: 'Saved', icon: Bookmark, path: '/studio/prompts' },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className='fixed bottom-0 left-0 right-0 z-50'>
      {/* Background with Heavy Blur */}
      <div className='absolute inset-0 bg-slate-950/80 backdrop-blur-2xl border-t border-white/5' />

      <div className='relative max-w-lg mx-auto px-6 h-20 flex items-center justify-between pb-[env(safe-area-inset-bottom)]'>
        {navItems.map((item) => {
          const isActive = pathname === item.path

          return (
            <Link
              key={item.path}
              href={item.path}
              className='relative flex flex-col items-center justify-center min-w-[64px] h-full group'
            >
              {/* Active Indicator Glow */}
              {isActive && (
                <motion.div
                  layoutId='nav-glow'
                  className='absolute -top-1 w-8 h-1 bg-violet-500 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]'
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}

              <motion.div
                whileTap={{ scale: 0.9 }}
                className={cn(
                  'p-2 rounded-2xl transition-all duration-300 mb-1',
                  isActive
                    ? 'text-violet-400'
                    : 'text-slate-500 group-hover:text-slate-300',
                )}
              >
                <item.icon
                  className={cn(
                    'w-6 h-6 transition-all',
                    isActive && 'drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]',
                  )}
                />
              </motion.div>

              <span
                className={cn(
                  'text-[9px] font-bold uppercase tracking-[0.15em] transition-colors',
                  isActive ? 'text-violet-400' : 'text-slate-600',
                )}
              >
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
