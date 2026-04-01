'use client'

import React from 'react'
import { MousePointer2, Layers, Zap, ArrowRight } from 'lucide-react'

export default function Steps() {
  const steps = [
    {
      icon: <MousePointer2 className='w-6 h-6' />,
      number: 'Step 01',
      title: 'Enter your topic',
      desc: 'Briefly describe what you want to talk about. Your content journey starts with a simple idea.',
    },
    {
      icon: <Layers className='w-6 h-6' />,
      number: 'Step 02',
      title: 'Select platform',
      desc: 'Choose where you want to post. Our AI optimizes specifically for every unique algorithm.',
    },
    {
      icon: <Zap className='w-6 h-6' />,
      number: 'Step 03',
      title: 'Generate and refine',
      desc: 'Get high-quality drafts instantly. Tweak the tone and length until it’s absolutely perfect.',
    },
  ]

  return (
    <section
      id='how-it-works'
      className='py-32 bg-white px-6 relative overflow-hidden'
    >
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-24 space-y-4'>
          <h2 className='text-4xl md:text-5xl font-black tracking-tight text-slate-900'>
            Create in <span className='text-indigo-600'>3 Simple Steps</span>
          </h2>
          <p className='text-slate-500 font-medium text-lg max-w-2xl mx-auto'>
            We’ve simplified the content creation process so you can focus on
            growing your brand.
          </p>
        </div>

        {/* Steps Grid */}
        <div className='grid md:grid-cols-3 gap-16 relative'>
          {/* Connector Line (Desktop Only) */}
          <div className='hidden md:block absolute top-12 left-0 w-full h-[2px] bg-slate-50 -z-0' />

          {steps.map((s, i) => (
            <div
              key={i}
              className='relative z-10 flex flex-col items-center text-center group'
            >
              {/* Icon Container */}
              <div className='w-24 h-24 bg-white border-4 border-slate-50 text-indigo-600 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-indigo-100/20 group-hover:scale-110 group-hover:border-indigo-50 transition-all duration-500'>
                <div className='w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500'>
                  {s.icon}
                </div>
              </div>

              {/* Step Number Tag */}
              <span className='text-xs font-black uppercase tracking-[0.2em] text-indigo-600 mb-4 px-3 py-1 bg-indigo-50 rounded-full'>
                {s.number}
              </span>

              {/* Content */}
              <h3 className='font-black text-2xl text-slate-900 mb-4 tracking-tight'>
                {s.title}
              </h3>
              <p className='text-slate-500 text-lg leading-relaxed font-medium px-4'>
                {s.desc}
              </p>

              {/* Decorative Arrow (Desktop Only, between steps) */}
              {i < 2 && (
                <div className='hidden lg:flex absolute -right-8 top-12 text-slate-100'>
                  <ArrowRight className='w-8 h-8' />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
