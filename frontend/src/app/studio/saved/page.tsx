'use client'

import React, { useState, useEffect } from 'react'
import { Bookmark, Trash2, Copy, Eye, X, Calendar } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'

// Define the structure for TypeScript
interface SavedItem {
  id: number
  title: string
  content: string
  type: 'Social' | 'Video'
  date: string
}

export default function SavedPage() {
  const [items, setItems] = useState<SavedItem[]>([])
  const [selectedItem, setSelectedItem] = useState<SavedItem | null>(null)

  // Load items from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('buildon_saves') || '[]')
    setItems(saved)
  }, [])

  const deleteItem = (id: number) => {
    const filtered = items.filter((item) => item.id !== id)
    setItems(filtered)
    localStorage.setItem('buildon_saves', JSON.stringify(filtered))
    toast.error('Item removed from Vault')
  }

  const copyContent = (content: string) => {
    navigator.clipboard.writeText(content)
    toast.success('Copied to clipboard!')
  }

  return (
    <div className='pb-24 max-w-5xl mx-auto'>
      <div className='mb-10'>
        <h2 className='text-3xl font-black text-white italic tracking-tighter uppercase'>
          The Vault
        </h2>
        <p className='text-slate-500 text-xs font-bold tracking-widest uppercase mt-1'>
          Archive of your AI-generated assets
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <AnimatePresence mode='popLayout'>
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className='p-6 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md group relative hover:bg-white/[0.07] transition-all'
            >
              <div className='flex justify-between items-start mb-4'>
                <div className='flex flex-col gap-1'>
                  <span
                    className={`w-fit px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-tighter ${
                      item.type === 'Video'
                        ? 'bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/20'
                        : 'bg-violet-500/20 text-violet-400 border border-violet-500/20'
                    }`}
                  >
                    {item.type} Engine
                  </span>
                  <div className='flex items-center gap-1 text-slate-600'>
                    <Calendar className='w-3 h-3' />
                    <span className='text-[9px] font-bold'>{item.date}</span>
                  </div>
                </div>

                <button
                  onClick={() => deleteItem(item.id)}
                  className='p-2 text-slate-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all'
                >
                  <Trash2 className='w-4 h-4' />
                </button>
              </div>

              <h3 className='text-white font-bold text-sm mb-2 line-clamp-1 italic'>
                {item.title}
              </h3>
              <p className='text-slate-400 text-xs line-clamp-2 mb-6 leading-relaxed'>
                {item.content}
              </p>

              <div className='flex gap-2'>
                <button
                  onClick={() => setSelectedItem(item)}
                  className='flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-[10px] text-white font-bold uppercase tracking-widest transition-all border border-white/5'
                >
                  <Eye className='w-3 h-3' /> View Full
                </button>
                <button
                  onClick={() => copyContent(item.content)}
                  className='px-4 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl text-white transition-all border border-white/5'
                >
                  <Copy className='w-3 h-3' />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {items.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='h-64 border-2 border-dashed border-white/5 rounded-[3rem] flex flex-col items-center justify-center text-slate-700'
        >
          <Bookmark className='w-12 h-12 mb-4 opacity-5' />
          <p className='text-[10px] font-black uppercase tracking-[0.3em]'>
            Vault is empty
          </p>
        </motion.div>
      )}

      {/* View Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className='bg-slate-900 border border-white/10 w-full max-w-2xl max-h-[80vh] rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl'
            >
              <div className='p-6 border-b border-white/5 flex justify-between items-center bg-white/5'>
                <h3 className='text-white font-bold italic'>
                  {selectedItem.title}
                </h3>
                <button
                  onClick={() => setSelectedItem(null)}
                  className='p-2 hover:bg-white/10 rounded-full transition-all'
                >
                  <X className='w-5 h-5 text-slate-400' />
                </button>
              </div>
              <div className='p-8 overflow-y-auto'>
                <pre className='text-slate-300 text-sm whitespace-pre-wrap font-sans leading-relaxed'>
                  {selectedItem.content}
                </pre>
              </div>
              <div className='p-4 bg-white/5 border-t border-white/5 flex justify-end'>
                <button
                  onClick={() => copyContent(selectedItem.content)}
                  className='px-6 py-2 bg-violet-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-violet-500 transition-all'
                >
                  Copy Asset
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
