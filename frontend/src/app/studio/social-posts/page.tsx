'use client'

import React, { useState, useRef, useEffect } from 'react'
import {
  Send,
  Sparkles,
  Copy,
  RefreshCw,
  Share2,
  Bookmark,
  CheckCircle,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

export default function SocialPostsPage() {
  const [input, setInput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [isSaved, setIsSaved] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  const BACKEND_URL =
    process.env.NEXT_PUBLIC_API_URL || 'http://44.222.98.52:8002'

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [result, isGenerating])

  const handleGenerate = async () => {
    if (!input.trim()) return

    setIsGenerating(true)
    setResult(null)
    setIsSaved(false) // Reset save state for new content

    try {
      const response = await fetch(`${BACKEND_URL}/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: input,
          platform: 'linkedin',
          tone: 'professional',
          length: 'medium',
        }),
      })

      if (!response.ok) throw new Error('Failed to reach AI engine')

      const data = await response.json()
      setResult(
        typeof data === 'string' ? data : data.content || JSON.stringify(data),
      )
      toast.success('AI Content Ready!')
    } catch (error) {
      console.error('Generation Error:', error)
      toast.error('Engine error. Check if backend is awake.')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleSave = () => {
    if (!result) return

    const newEntry = {
      id: Date.now(),
      title: input,
      content: result,
      type: 'Social',
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

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result)
      toast.info('Copied to clipboard')
    }
  }

  return (
    <div className='flex flex-col min-h-[calc(100vh-180px)] relative pb-24'>
      <div className='mb-8'>
        <div className='flex items-center gap-2 text-violet-500 mb-1'>
          <Share2 className='w-4 h-4' />
          <span className='text-[10px] font-black uppercase tracking-widest'>
            Social Engine 1.0
          </span>
        </div>
        <h2 className='text-2xl font-bold text-white'>Social Post Generator</h2>
        <p className='text-slate-500 text-[10px] mt-1'>
          SYSTEM ONLINE: {BACKEND_URL.replace('https://', '')}
        </p>
      </div>

      <div className='flex-1 space-y-6'>
        <AnimatePresence mode='wait'>
          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className='relative group'
            >
              <div className='p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl'>
                <div className='prose prose-invert text-slate-200 text-sm leading-relaxed whitespace-pre-wrap font-medium mb-6'>
                  {result}
                </div>

                <div className='flex items-center gap-2 pt-4 border-t border-white/5'>
                  <button
                    onClick={copyToClipboard}
                    className='flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-slate-300 hover:text-white border border-white/5'
                  >
                    <Copy className='w-3 h-3' />
                    <span className='text-[10px] font-bold uppercase'>
                      Copy
                    </span>
                  </button>

                  <button
                    onClick={handleSave}
                    disabled={isSaved}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2 rounded-xl transition-all border font-bold uppercase text-[10px]',
                      isSaved
                        ? 'bg-green-500/10 border-green-500/20 text-green-400'
                        : 'bg-violet-500/10 border-violet-500/20 text-violet-400 hover:bg-violet-500/20',
                    )}
                  >
                    {isSaved ? (
                      <CheckCircle className='w-3 h-3' />
                    ) : (
                      <Bookmark className='w-3 h-3' />
                    )}
                    <span>{isSaved ? 'Saved' : 'Save to Vault'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setResult(null)
                      setInput('')
                      setIsSaved(false)
                    }}
                    className='p-2 hover:bg-white/5 rounded-xl transition-all text-slate-500 hover:text-white'
                  >
                    <RefreshCw className='w-4 h-4' />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {isGenerating && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className='flex items-center gap-3 p-4 bg-violet-500/10 border border-violet-500/20 rounded-2xl w-fit mx-auto'
            >
              <Sparkles className='w-5 h-5 text-violet-500 animate-pulse' />
              <span className='text-xs font-bold text-violet-400 tracking-tight'>
                Crafting viral content...
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={scrollRef} />
      </div>

      {/* Input Bar */}
      <div className='fixed bottom-24 left-0 right-0 px-4 z-40'>
        <div className='max-w-2xl mx-auto relative group'>
          <div className='absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition-opacity' />
          <div className='relative flex items-center bg-slate-900 border border-white/10 rounded-2xl p-1 shadow-2xl'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' && !isGenerating && handleGenerate()
              }
              placeholder='Describe the topic for your viral post...'
              className='flex-1 bg-transparent border-none outline-none px-4 py-3 text-sm text-white placeholder:text-slate-600'
              disabled={isGenerating}
            />
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !input.trim()}
              className={cn(
                'p-3 rounded-xl transition-all',
                input.trim() && !isGenerating
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/20 active:scale-95'
                  : 'bg-slate-800 text-slate-600',
              )}
            >
              {isGenerating ? (
                <RefreshCw className='w-4 h-4 animate-spin' />
              ) : (
                <Send className='w-4 h-4' />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
