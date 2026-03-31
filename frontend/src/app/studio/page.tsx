'use client'

import { Sparkles, ArrowUpRight, Video, Share2 } from 'lucide-react'
import Link from 'next/link'

export default function StudioPage() {
  return (
    <div className='space-y-8 py-4'>
      {/* Hero Welcome */}
      <section className='space-y-2'>
        <h1 className='text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent'>
          Create something <br /> extraordinary.
        </h1>
        <p className='text-slate-400 text-sm font-medium'>
          Select a studio engine to begin generating.
        </p>
      </section>

      {/* Quick Actions Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <StudioCard
          title='Video Scripts'
          desc='Viral hooks and full-length YouTube or TikTok scripts.'
          icon={Video}
          href='/studio/video-scripts'
          color='border-violet-500/20'
        />
        <StudioCard
          title='Social Posts'
          desc='Platform-optimized threads and engaging captions.'
          icon={Share2}
          href='/studio/social-posts'
          color='border-fuchsia-500/20'
        />
      </div>
    </div>
  )
}

function StudioCard({ title, desc, icon: Icon, href, color }: any) {
  return (
    <Link href={href}>
      <div
        className={`group relative p-6 rounded-3xl bg-slate-900/40 border ${color} backdrop-blur-sm transition-all duration-300 hover:bg-slate-900/60 hover:scale-[1.02] active:scale-[0.98]`}
      >
        <div className='flex justify-between items-start mb-4'>
          <div className='p-3 bg-white/5 rounded-2xl'>
            <Icon className='w-6 h-6 text-white group-hover:text-violet-400 transition-colors' />
          </div>
          <ArrowUpRight className='w-5 h-5 text-slate-600 group-hover:text-white transition-all' />
        </div>
        <h3 className='text-lg font-bold text-white mb-1'>{title}</h3>
        <p className='text-sm text-slate-400 leading-relaxed'>{desc}</p>
      </div>
    </Link>
  )
}
