'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar({ onLaunch }: { onLaunch: () => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Home')

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <nav className='w-full border-b border-slate-100 bg-white/95 backdrop-blur-md sticky top-0 z-[100]'>
      <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
        {/* Brand */}
        <div className='flex items-center gap-2 group cursor-pointer'>
          <div className='w-8 h-8 bg-[#4F46E5] rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300'>
            <Sparkles className='w-5 h-5 text-white fill-current' />
          </div>
          <span className='font-black text-[22px] tracking-[-0.03em] text-[#1A1F23]'>
            AI Content Generator
          </span>
        </div>

        {/* Desktop Links with Sliding Underline */}
        <div className='hidden md:flex items-center gap-2 relative'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              className={`relative px-4 py-2 text-[15px] font-bold tracking-tight transition-all duration-300 ${
                activeTab === link.name
                  ? 'text-[#4F46E5]'
                  : 'text-[#475569] hover:text-[#1A1F23]'
              }`}
            >
              {link.name}
              {/* Animated Underline */}
              {activeTab === link.name && (
                <div
                  className='absolute bottom-0 left-4 right-4 h-0.5 bg-[#4F46E5] rounded-full'
                  style={{ layoutId: 'underline' } as any} // For Framer Motion users, or purely CSS transition
                />
              )}
            </a>
          ))}
        </div>

        {/* Action Button & Hamburger */}
        <div className='flex items-center gap-4'>
          <button
            onClick={onLaunch}
            className='hidden md:block bg-[#4F46E5] text-white px-7 py-3 rounded-xl text-[15px] font-bold hover:bg-[#4338CA] hover:shadow-lg hover:shadow-indigo-100 transition-all active:scale-95'
          >
            Start Creating
          </button>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay with Staggered Animation */}
      {isOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300 ease-out'>
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveTab(link.name)
                setIsOpen(false)
              }}
              style={{ animationDelay: `${i * 50}ms` }}
              className={`block text-lg font-bold transition-all ${
                activeTab === link.name
                  ? 'text-[#4F46E5] translate-x-2'
                  : 'text-[#475569]'
              } animate-in fade-in slide-in-from-left-4`}
            >
              {link.name}
            </a>
          ))}
          <div className='pt-4 border-t border-slate-50'>
            <button
              onClick={() => {
                onLaunch()
                setIsOpen(false)
              }}
              className='w-full bg-[#4F46E5] text-white py-4 rounded-xl text-lg font-bold active:scale-[0.98] transition-transform'
            >
              Start Creating
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
