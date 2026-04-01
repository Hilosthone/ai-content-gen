'use client'

import { Share2, Sliders, Layout, Users, Layers } from 'lucide-react'

export default function FeatureGrid() {
  const features = [
    {
      icon: <Share2 className='w-4 h-4' />,
      title: 'Platform-Specific Content',
      desc: 'Our AI understands the cultural nuances and algorithm quirks of Twitter, LinkedIn, and Instagram.',
      tags: ['#Twitter', '#LinkedIn', '#YouTube'],
    },
    {
      icon: <Sliders className='w-4 h-4' />,
      title: 'Tone Customization',
      desc: 'From bold and provocative to professional and empathetic. You define the voice.',
    },
    {
      icon: <Layout className='w-4 h-4' />,
      title: 'Threads & Scripts',
      desc: 'Generate high-retention viral threads and scripts that keep viewers hooked.',
    },
    {
      icon: <Users className='w-4 h-4' />,
      title: 'Audience Targeting',
      desc: 'Target your messaging to specific niches like SaaS founders or digital nomads.',
    },
    {
      icon: <Layers className='w-4 h-4' />,
      title: 'Multiple Variations',
      desc: 'Get 5+ unique angles for every prompt instantly and pick the winner.',
    },
  ]

  return (
    <section className='py-12 md:py-16 px-5 sm:px-10 bg-white overflow-hidden'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='mb-12 md:mb-16'>
          <h2 className='text-2xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight leading-[1.1]'>
            Supercharge Your <br className='hidden sm:block' /> Creative
            Workflow
          </h2>
          <p className='text-slate-500 max-w-lg text-[13px] md:text-sm font-medium leading-relaxed'>
            Everything you need to stop staring at a blank screen and start
            shipping content that resonates across every feed.
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-14'>
          {features.map((f, i) => (
            <div key={i} className='group flex flex-col items-start'>
              {/* Refined Icon Container: Single trigger for color swap */}
              <div className='w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 ease-in-out'>
                {f.icon}
              </div>

              <h3 className='text-base md:text-lg font-bold text-slate-900 mb-1.5 tracking-tight'>
                {f.title}
              </h3>

              <p className='text-slate-500 text-[12px] md:text-[13px] leading-relaxed mb-4 max-w-[280px]'>
                {f.desc}
              </p>

              {f.tags && (
                <div className='flex flex-wrap gap-1.5 mt-auto'>
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-2 py-0.5 bg-slate-50 text-slate-400 text-[8px] md:text-[9px] font-black uppercase tracking-wider rounded border border-slate-100'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
