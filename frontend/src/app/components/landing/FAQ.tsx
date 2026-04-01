'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First one open by default

  const faqs = [
    {
      q: 'Who is this tool designed for?',
      a: "It's built for content creators, marketers, and founders who want to scale their personal brands without spending hours writing. Whether you're a solo creator or a growing team, BuildOn.AI streamlines your workflow.",
    },
    {
      q: 'Is the content original?',
      a: 'Yes, every output is uniquely generated based on your specific inputs and our fine-tuned content models. We ensure the tone and structure are optimized for high engagement on your chosen platform.',
    },
    {
      q: 'Can I cancel my subscription?',
      a: 'Absolutely. You can manage your plan at any time within your account settings. There are no hidden fees or long-term contracts—we want you to stay because you love the results.',
    },
    {
      q: 'Which platforms are supported?',
      a: 'Currently, we offer specialized engines for Twitter/X, LinkedIn, Instagram, YouTube, and long-form Blogs. We are constantly updating our models to match changing platform algorithms.',
    },
  ]

  return (
    <section id='faq' className='py-32 bg-white px-6'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center mb-16 space-y-4'>
          <h2 className='text-4xl md:text-5xl font-black tracking-tight text-slate-900'>
            Got <span className='text-indigo-600'>Questions?</span>
          </h2>
          <p className='text-slate-500 font-medium text-lg'>
            Everything you need to know about the Content Engine.
          </p>
        </div>

        <div className='space-y-4'>
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={cn(
                  'group rounded-[2rem] border transition-all duration-300 overflow-hidden',
                  isOpen
                    ? 'bg-indigo-50/30 border-indigo-100 shadow-xl shadow-indigo-100/20'
                    : 'bg-slate-50 border-slate-100 hover:border-slate-200',
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className='w-full p-8 flex items-center justify-between text-left outline-none'
                >
                  <span
                    className={cn(
                      'font-bold text-lg md:text-xl tracking-tight transition-colors',
                      isOpen ? 'text-indigo-600' : 'text-slate-900',
                    )}
                  >
                    {f.q}
                  </span>
                  <div
                    className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300',
                      isOpen
                        ? 'bg-indigo-600 text-white rotate-180'
                        : 'bg-white text-slate-400 shadow-sm',
                    )}
                  >
                    {isOpen ? (
                      <Minus className='w-5 h-5' />
                    ) : (
                      <Plus className='w-5 h-5' />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className='px-8 pb-8'>
                        <div className='h-px w-full bg-indigo-100/50 mb-6' />
                        <p className='text-slate-600 text-lg leading-relaxed font-medium'>
                          {f.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
