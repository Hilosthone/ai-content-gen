'use client'

import React, { useState, useRef, useEffect } from 'react'
import {
  Video,
  Copy,
  Type,
  Zap,
  RotateCcw,
  Loader2,
  Bookmark,
  CheckCircle,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'
import { cn } from '../../../lib/utils'

export default function VideoScriptsPage() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [script, setScript] = useState<string | null>(null)
  const [isSaved, setIsSaved] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const BACKEND_URL =
    process.env.NEXT_PUBLIC_API_URL || 'https://ai-content-gen-b.onrender.com'

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [script, isGenerating])

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    setIsGenerating(true)
    setScript(null)
    setIsSaved(false)

    try {
      const response = await fetch(`${BACKEND_URL}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: prompt,
          platform: 'youtube',
          tone: 'educational',
          length: 'long',
        }),
      })

      if (!response.ok) throw new Error('API Sync Failed')

      const data = await response.json()
      setScript(
        typeof data === 'string' ? data : data.content || JSON.stringify(data),
      )
      toast.success('Script Ready for Production')
    } catch (error) {
      console.error('Director Engine Error:', error)
      toast.error('Engine error. Check backend status.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleSave = () => {
    if (!script) return

    const newEntry = {
      id: Date.now(),
      title: prompt,
      content: script,
      type: 'Video',
      date: new Date().toLocaleDateString(),
    }

    const existingSaves = JSON.parse(
      localStorage.getItem('buildon_saves') || '[]',
    )
    localStorage.setItem(
      'buildon_saves',
      JSON.stringify([newEntry, ...existingSaves]),
    )

    setIsSaved(true)
    toast.success('Saved to Vault!')
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
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className='flex gap-2'
          >
            <div className='flex flex-col items-end'>
              <span className='text-[10px] text-slate-500 font-bold uppercase'>
                Est. Time
              </span>
              <span className='text-xs text-fuchsia-400 font-mono tracking-tighter'>
                {script.split(' ').length > 200 ? '03:15s' : '01:45s'}
              </span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Display Area */}
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
              {[1, 2, 3, 4].map((i) => (
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
              <p className='text-center text-[10px] text-fuchsia-500/50 uppercase font-bold tracking-widest animate-pulse pt-4'>
                AI Directing in progress...
              </p>
            </div>
          )}

          {script && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='bg-slate-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative group shadow-2xl'
            >
              <div className='absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(script)
                    toast.info('Copied Script')
                  }}
                  className='p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all border border-white/5'
                >
                  <Copy className='w-4 h-4 text-slate-400' />
                </button>
                <button
                  onClick={handleSave}
                  disabled={isSaved}
                  className={cn(
                    'p-2 rounded-lg transition-all border border-white/5',
                    isSaved
                      ? 'bg-green-500/10 text-green-400 border-green-500/20'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10',
                  )}
                >
                  {isSaved ? (
                    <CheckCircle className='w-4 h-4' />
                  ) : (
                    <Bookmark className='w-4 h-4' />
                  )}
                </button>
                <button
                  onClick={() => {
                    setScript(null)
                    setPrompt('')
                    setIsSaved(false)
                  }}
                  className='p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all border border-white/5'
                >
                  <RotateCcw className='w-4 h-4 text-slate-400' />
                </button>
              </div>

              <pre className='font-mono text-sm text-slate-300 leading-relaxed whitespace-pre-wrap selection:bg-fuchsia-500/30'>
                {script}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={scrollRef} />
      </div>

      {/* Input Bar */}
      <div className='fixed bottom-24 left-0 right-0 px-4 z-40'>
        <div className='max-w-2xl mx-auto'>
          <div className='flex items-center bg-black/60 backdrop-blur-3xl border border-white/10 rounded-3xl p-2 gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]'>
            <div className='p-3 bg-fuchsia-600/10 rounded-2xl text-fuchsia-500'>
              <Zap className='w-5 h-5' />
            </div>
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' && !isGenerating && handleGenerate()
              }
              placeholder='Topic for your viral video...'
              className='flex-1 bg-transparent border-none outline-none px-2 text-sm text-white placeholder:text-slate-700'
              disabled={isGenerating}
            />
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className={cn(
                'px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2',
                prompt.trim() && !isGenerating
                  ? 'bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-600/20 active:scale-95'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed',
              )}
            >
              {isGenerating ? (
                <Loader2 className='w-4 h-4 animate-spin' />
              ) : (
                'Action'
              )}
            </button>
          </div>
          <p className='text-[9px] text-center text-slate-600 mt-3 font-bold uppercase tracking-tighter'>
            Powered by BuildOn.AI Director Engine
          </p>
        </div>
      </div>
    </div>
  )
}
