'use client'

import React, { useState, useRef } from 'react'
import { Send, Video, Copy, Type, Clock, Zap, RotateCcw } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

export default function VideoScriptsPage() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [script, setScript] = useState<string | null>(null)

  const handleGenerate = () => {
    if (!prompt.trim()) return
    setIsGenerating(true)

    // Simulate Studio Script Generation
    setTimeout(() => {
      setScript(
        `[HOOK - 0:00]\nStop scrolling! If you're still using basic AI prompts, you're falling behind. \n\n[BODY - 0:15]\nToday, I'm showing you the 'BuildOn' framework for 10x content output. \n\n[STEP 1]\nFirst, define your obsidian core...`,
      )
      setIsGenerating(false)
      toast.success('Script Ready for Production')
    }, 2500)
  }

  return (
    <div className='flex flex-col min-h-[calc(100vh-180px)] relative pb-32'>
      {/* Script Meta Header */}
      <div className='flex items-center justify-between mb-6'>
        <div className='space-y-1'>
          <div className='flex items-center gap-2 text-fuchsia-500'>
            <Video className='w-4 h-4' />
            <span className='text-[10px] font-black uppercase tracking-[0.2em]'>
              Director Mode 2.0
            </span>
          </div>
          <h2 className='text-2xl font-bold text-white italic'>
            Script Engine
          </h2>
        </div>

        {script && (
          <div className='flex gap-2'>
            <div className='flex flex-col items-end'>
              <span className='text-[10px] text-slate-500 font-bold uppercase'>
                Est. Time
              </span>
              <span className='text-xs text-fuchsia-400 font-mono'>01:45s</span>
            </div>
          </div>
        )}
      </div>

      {/* The "Teleprompter" Display Area */}
      <div className='flex-1 overflow-y-auto pr-2 space-y-6'>
        <AnimatePresence mode='wait'>
          {!script && !isGenerating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='h-64 border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-slate-600 gap-3'
            >
              <Type className='w-8 h-8 opacity-20' />
              <p className='text-xs font-medium uppercase tracking-widest'>
                Awaiting Storyboard...
              </p>
            </motion.div>
          )}

          {isGenerating && (
            <div className='space-y-4'>
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className='h-12 bg-white/5 rounded-xl w-full'
                />
              ))}
            </div>
          )}

          {script && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='bg-slate-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative group shadow-2xl'
            >
              <div className='absolute top-4 right-4 flex gap-2'>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(script)
                    toast.info('Copied Script')
                  }}
                  className='p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all'
                >
                  <Copy className='w-4 h-4 text-slate-400' />
                </button>
              </div>

              <pre className='font-mono text-sm text-slate-300 leading-relaxed whitespace-pre-wrap selection:bg-fuchsia-500/30'>
                {script}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Production Bar */}
      <div className='fixed bottom-24 left-0 right-0 px-4 z-40'>
        <div className='max-w-2xl mx-auto'>
          <div className='flex items-center bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'>
            <div className='p-3 bg-fuchsia-600/10 rounded-2xl text-fuchsia-500'>
              <Zap className='w-5 h-5' />
            </div>
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder='Topic for your viral video...'
              className='flex-1 bg-transparent border-none outline-none px-2 text-sm text-white placeholder:text-slate-700'
            />
            <button
              onClick={handleGenerate}
              className={cn(
                'px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all',
                prompt.trim()
                  ? 'bg-fuchsia-600 text-white'
                  : 'bg-slate-800 text-slate-500',
              )}
            >
              Action
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
