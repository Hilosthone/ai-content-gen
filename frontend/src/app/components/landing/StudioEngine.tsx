'use client'

import React, { useState } from 'react'
import {
  Sparkles,
  ChevronDown,
  Loader2,
  CheckCircle2,
  Zap,
  Layers,
} from 'lucide-react'

const API_MAP = {
  platforms: {
    'Twitter (X)': 'twitter',
    LinkedIn: 'linkedin',
    Instagram: 'instagram',
    YouTube: 'youtube',
  },
  tones: {
    Professional: 'professional',
    Casual: 'casual',
    Funny: 'funny',
    Inspirational: 'inspirational',
    Educational: 'educational',
  },
}

export default function GeneratorPreview() {
  const [topic, setTopic] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState('LinkedIn')
  const [selectedTone, setSelectedTone] = useState('Professional')
  const [targetAudience, setTargetAudience] = useState('')
  const [contentType, setContentType] = useState('Post')

  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const platforms = ['Twitter (X)', 'LinkedIn', 'Instagram', 'YouTube']
  const contentTypes = ['Post', 'Thread', 'Script', 'Caption']

  const handleGenerate = async () => {
    if (!topic) return alert('Please enter a topic')

    setIsGenerating(true)
    setResult(null)

    try {
      const response = await fetch(
        'https://ai-content-gen-b.onrender.com/generate',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            topic: topic,
            platform:
              API_MAP.platforms[
                selectedPlatform as keyof typeof API_MAP.platforms
              ] || 'linkedin',
            tone:
              API_MAP.tones[selectedTone as keyof typeof API_MAP.tones] ||
              'professional',
            length: 'medium',
          }),
        },
      )

      const data = await response.json()

      if (response.ok) {
        // Fix for "Objects are not valid as React child"
        // Extracts the string if API returns { content: "..." }
        setResult(
          typeof data === 'object'
            ? data.content || data.detail || JSON.stringify(data)
            : data,
        )
      } else {
        setResult(`Error: ${data.detail || 'Failed to generate content'}`)
      }
    } catch (error) {
      setResult('Connection error. Please ensure the API server is active.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <section id='features' className='py-24 bg-white px-6'>
      <div className='max-w-4xl mx-auto text-center space-y-4 mb-16'>
        <h2 className='text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight'>
          Generate High-Quality Content in Seconds
        </h2>
        <p className='text-slate-500 text-lg font-medium'>
          Simply fill in the blanks and let our AI engine create a masterpiece
          tailored to your audience.
        </p>
      </div>

      <div className='max-w-4xl mx-auto bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_32px_64px_-16px_rgba(79,70,229,0.1)] p-8 md:p-14 relative'>
        <div className='space-y-10'>
          {/* 1. Topic / Idea */}
          <div className='space-y-3 text-left'>
            <label className='text-sm font-black text-slate-900 ml-1'>
              Topic / Idea
            </label>
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder='Enter your topic or idea...'
              className='w-full p-6 bg-slate-50 border border-slate-100 rounded-[1.5rem] text-slate-900 text-base outline-none resize-none h-32 focus:ring-2 focus:ring-indigo-500/20 transition-all'
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10'>
            {/* 2. Platform Selection */}
            <div className='space-y-3 text-left'>
              <label className='text-sm font-black text-slate-900 ml-1'>
                Platform
              </label>
              <div className='flex flex-wrap gap-2'>
                {platforms.map((p) => (
                  <button
                    key={p}
                    onClick={() => setSelectedPlatform(p)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                      selectedPlatform === p
                        ? 'bg-indigo-50 text-indigo-600 border-indigo-200 ring-1 ring-indigo-200'
                        : 'bg-slate-50 text-slate-400 border-slate-100 hover:bg-slate-100'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Content Type Selection */}
            <div className='space-y-3 text-left'>
              <label className='text-sm font-black text-slate-900 ml-1'>
                Content Type
              </label>
              <div className='flex items-center p-1 bg-slate-50 border border-slate-100 rounded-xl w-fit'>
                {contentTypes.map((t) => (
                  <button
                    key={t}
                    onClick={() => setContentType(t)}
                    className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${
                      contentType === t
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Tone Dropdown */}
            <div className='space-y-3 text-left'>
              <label className='text-sm font-black text-slate-900 ml-1'>
                Tone
              </label>
              <div className='relative group'>
                <select
                  value={selectedTone}
                  onChange={(e) => setSelectedTone(e.target.value)}
                  className='w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 font-bold text-sm outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-indigo-500/20 transition-all'
                >
                  {Object.keys(API_MAP.tones).map((tone) => (
                    <option key={tone} value={tone}>
                      {tone}
                    </option>
                  ))}
                </select>
                <ChevronDown className='absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none group-hover:text-slate-600 transition-colors' />
              </div>
            </div>

            {/* 5. Target Audience */}
            <div className='space-y-3 text-left'>
              <label className='text-sm font-black text-slate-900 ml-1'>
                Target Audience
              </label>
              <input
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                placeholder='Who is this for? (e.g. founders)'
                className='w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm text-slate-900 font-medium outline-none focus:ring-2 focus:ring-indigo-500/20'
              />
            </div>
          </div>

          {/* Result Area */}
          {result && (
            <div className='p-8 bg-slate-900 rounded-[2rem] text-white animate-in fade-in slide-in-from-bottom-4 shadow-2xl'>
              <div className='flex items-center gap-2 mb-4 text-indigo-400 font-black text-xs uppercase tracking-[0.2em]'>
                <CheckCircle2 className='w-4 h-4' /> AI Engine Result
              </div>
              <p className='whitespace-pre-wrap text-slate-200 leading-relaxed text-lg font-medium'>
                {result}
              </p>
            </div>
          )}

          {/* Action Button & Metadata */}
          <div className='space-y-8 pt-4'>
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !topic}
              className='w-full md:w-fit px-12 py-5 bg-indigo-600 text-white font-black rounded-2xl shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all hover:-translate-y-1 active:scale-95 text-lg mx-auto disabled:opacity-50'
            >
              {isGenerating ? (
                <Loader2 className='w-6 h-6 animate-spin' />
              ) : (
                <Sparkles className='w-6 h-6 fill-indigo-300/30' />
              )}
              {isGenerating ? 'Engines Running...' : 'Generate Content'}
            </button>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-8'>
              <div className='flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest'>
                <Zap className='w-3.5 h-3.5 text-indigo-500' /> Instant results
              </div>
              <div className='flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest'>
                <Layers className='w-3.5 h-3.5 text-indigo-500' /> Multiple
                variations
              </div>
            </div>
          </div>
        </div>

        {/* Floating AI Engine Badge */}
        <div
          className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-max px-6 py-3 transition-all duration-500 ${isGenerating ? 'bg-fuchsia-500 text-white scale-105' : 'bg-fuchsia-100/80 text-fuchsia-700'} backdrop-blur-md rounded-full border border-fuchsia-200 shadow-lg flex items-center gap-3`}
        >
          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center ${isGenerating ? 'bg-white/20 animate-pulse' : 'bg-fuchsia-500'}`}
          >
            <Sparkles
              className={`w-3 h-3 ${isGenerating ? 'text-white' : 'text-white'}`}
            />
          </div>
          <span className='text-[11px] font-black uppercase tracking-wider'>
            {isGenerating
              ? 'AI Engine active: Analyzing content strategy...'
              : `AI Engine ready for ${selectedPlatform}`}
          </span>
        </div>
      </div>
    </section>
  )
}
