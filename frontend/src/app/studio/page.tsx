// // src/app/studio/page.tsx
// 'use client'

// import { Sparkles, ArrowUpRight, Video, Share2 } from 'lucide-react'
// import Link from 'next/link'

// export default function StudioPage() {
//   return (
//     <div className='space-y-8 py-4'>
//       {/* Hero Welcome */}
//       <section className='space-y-2'>
//         <h1 className='text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent'>
//           Create something <br /> extraordinary.
//         </h1>
//         <p className='text-slate-400 text-sm font-medium'>
//           Select a studio engine to begin generating.
//         </p>
//       </section>

//       {/* Quick Actions Grid */}
//       <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//         <StudioCard
//           title='Video Scripts'
//           desc='Viral hooks and full-length YouTube or TikTok scripts.'
//           icon={Video}
//           href='/studio/video-scripts'
//           color='border-violet-500/20'
//         />
//         <StudioCard
//           title='Social Posts'
//           desc='Platform-optimized threads and engaging captions.'
//           icon={Share2}
//           href='/studio/social-posts'
//           color='border-fuchsia-500/20'
//         />
//       </div>
//     </div>
//   )
// }

// function StudioCard({ title, desc, icon: Icon, href, color }: any) {
//   return (
//     <Link href={href}>
//       <div
//         className={`group relative p-6 rounded-3xl bg-slate-900/40 border ${color} backdrop-blur-sm transition-all duration-300 hover:bg-slate-900/60 hover:scale-[1.02] active:scale-[0.98]`}
//       >
//         <div className='flex justify-between items-start mb-4'>
//           <div className='p-3 bg-white/5 rounded-2xl'>
//             <Icon className='w-6 h-6 text-white group-hover:text-violet-400 transition-colors' />
//           </div>
//           <ArrowUpRight className='w-5 h-5 text-slate-600 group-hover:text-white transition-all' />
//         </div>
//         <h3 className='text-lg font-bold text-white mb-1'>{title}</h3>
//         <p className='text-sm text-slate-400 leading-relaxed'>{desc}</p>
//       </div>
//     </Link>
//   )
// }

'use client'

import React, { useState } from 'react'
import { api, GenerateRequest } from '@/lib/api'
import { toast } from 'sonner'
import { Sparkles, Send, Copy, RefreshCw } from 'lucide-react'

export default function StudioPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [form, setForm] = useState<GenerateRequest>({
    topic: '',
    platform: 'twitter',
    tone: 'professional',
    length: 'medium',
  })

  const handleGenerate = async () => {
    if (!form.topic) return toast.error('Please enter a topic')
    setLoading(true)
    try {
      const data = await api.generateContent(form)
      setResult(data)
      toast.success('Content generated!')
    } catch (err: any) {
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result)
    toast.success('Copied to clipboard')
  }

  return (
    <div className='max-w-4xl mx-auto space-y-8 py-6'>
      <header>
        <h1 className='text-3xl font-bold text-slate-900'>Content Studio</h1>
        <p className='text-slate-500'>
          Configure your engine and generate viral content.
        </p>
      </header>

      <div className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
        {/* Left: Configuration */}
        <div className='lg:col-span-2 space-y-6'>
          <div className='bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4'>
            <div>
              <label className='text-xs font-bold uppercase tracking-wider text-slate-400'>
                Topic
              </label>
              <textarea
                className='w-full mt-2 p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none resize-none'
                placeholder='What are we writing about?'
                rows={3}
                value={form.topic}
                onChange={(e) => setForm({ ...form, topic: e.target.value })}
              />
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label className='text-xs font-bold uppercase tracking-wider text-slate-400'>
                  Platform
                </label>
                <select
                  className='w-full mt-2 p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none'
                  value={form.platform}
                  onChange={(e) =>
                    setForm({ ...form, platform: e.target.value as any })
                  }
                >
                  <option value='twitter'>Twitter</option>
                  <option value='linkedin'>LinkedIn</option>
                  <option value='instagram'>Instagram</option>
                  <option value='youtube'>YouTube</option>
                  <option value='blog'>Blog</option>
                </select>
              </div>
              <div>
                <label className='text-xs font-bold uppercase tracking-wider text-slate-400'>
                  Tone
                </label>
                <select
                  className='w-full mt-2 p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none'
                  value={form.tone}
                  onChange={(e) =>
                    setForm({ ...form, tone: e.target.value as any })
                  }
                >
                  <option value='professional'>Professional</option>
                  <option value='casual'>Casual</option>
                  <option value='funny'>Funny</option>
                  <option value='inspirational'>Inspirational</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className='w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2'
            >
              {loading ? (
                <RefreshCw className='w-5 h-5 animate-spin' />
              ) : (
                <Sparkles className='w-5 h-5' />
              )}
              {loading ? 'Generating...' : 'Generate Content'}
            </button>
          </div>
        </div>

        {/* Right: Result Display */}
        <div className='lg:col-span-3'>
          <div className='bg-white h-full min-h-[400px] rounded-3xl border border-slate-200 shadow-sm flex flex-col'>
            <div className='p-4 border-b border-slate-100 flex justify-between items-center'>
              <span className='text-xs font-bold text-slate-400 uppercase tracking-widest'>
                Output
              </span>
              {result && (
                <button
                  onClick={copyToClipboard}
                  className='p-2 hover:bg-slate-50 rounded-lg transition-colors'
                >
                  <Copy className='w-4 h-4 text-slate-400' />
                </button>
              )}
            </div>
            <div className='p-8 flex-1'>
              {result ? (
                <p className='text-slate-700 leading-relaxed whitespace-pre-wrap'>
                  {result}
                </p>
              ) : (
                <div className='h-full flex flex-col items-center justify-center text-slate-300 space-y-4'>
                  <div className='w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center'>
                    <Send className='w-6 h-6' />
                  </div>
                  <p className='text-sm font-medium'>
                    Your generated content will appear here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}