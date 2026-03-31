'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Send, Sparkles, Copy, RefreshCw, Share2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

export default function SocialPostsPage() {
  const [input, setInput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new content generates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [result, isGenerating])

  const handleGenerate = () => {
    if (!input.trim()) return
    setIsGenerating(true)
    setResult(null)

    // Simulate AI Generation Logic
    setTimeout(() => {
      setResult(
        "🚀 **Viral Thread Alert!** \n\n1/5: Stop building features, start solving pain points. \n\n2/5: Most creators fail because they focus on the 'What' instead of the 'Why'. \n\n3/5: Here's the framework I used to scale BuildOn.AI to 10k users in 30 days... [Click to expand]",
      )
      setIsGenerating(false)
      toast.success('Content Generated!')
    }, 2000)
  }

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result)
      toast.info('Copied to clipboard')
    }
  }

  return (
    <div className='flex flex-col min-h-[calc(100vh-180px)] relative pb-24'>
      {/* Header Info */}
      <div className='mb-8'>
        <div className='flex items-center gap-2 text-violet-500 mb-1'>
          <Share2 className='w-4 h-4' />
          <span className='text-[10px] font-black uppercase tracking-widest'>
            Social Engine 1.0
          </span>
        </div>
        <h2 className='text-2xl font-bold text-white'>Social Post Generator</h2>
      </div>

      {/* Results Area */}
      <div className='flex-1 space-y-6'>
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className='relative group'
            >
              <div className='p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl'>
                <div className='prose prose-invert text-slate-300 text-sm leading-relaxed whitespace-pre-wrap'>
                  {result}
                </div>

                {/* Action Floating Buttons */}
                <div className='flex items-center gap-2 mt-6 pt-4 border-t border-white/5'>
                  <button
                    onClick={copyToClipboard}
                    className='p-2 hover:bg-white/5 rounded-xl transition-all text-slate-400 hover:text-white'
                  >
                    <Copy className='w-4 h-4' />
                  </button>
                  <button
                    onClick={() => setResult(null)}
                    className='p-2 hover:bg-white/5 rounded-xl transition-all text-slate-400 hover:text-white'
                  >
                    <RefreshCw className='w-4 h-4' />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {isGenerating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='flex items-center gap-3 p-4 bg-violet-500/10 border border-violet-500/20 rounded-2xl w-fit'
            >
              <Sparkles className='w-4 h-4 text-violet-500 animate-pulse' />
              <span className='text-xs font-bold text-violet-400 tracking-tight'>
                AI is crafting your post...
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={scrollRef} />
      </div>

      {/* WhatsApp Style Input Bar (Fixed above BottomNav) */}
      <div className='fixed bottom-24 left-0 right-0 px-4 z-40'>
        <div className='max-w-2xl mx-auto relative group'>
          <div className='absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl blur opacity-20 group-focus-within:opacity-40 transition-opacity' />
          <div className='relative flex items-center bg-slate-900 border border-white/10 rounded-2xl p-1 shadow-2xl'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              placeholder='What topic should we write about today?'
              className='flex-1 bg-transparent border-none outline-none px-4 py-3 text-sm text-white placeholder:text-slate-600'
            />
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !input.trim()}
              className={cn(
                'p-3 rounded-xl transition-all',
                input.trim()
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/20'
                  : 'bg-slate-800 text-slate-600',
              )}
            >
              <Send className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
