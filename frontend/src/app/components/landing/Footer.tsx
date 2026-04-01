'use client'

import React from 'react'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { name: 'Home', href: '/' },
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'FAQ', href: '#faq' },
    ],
    Social: [
      { name: 'Twitter', href: 'https://twitter.com' },
      { name: 'LinkedIn', href: 'https://linkedin.com' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  }

  return (
    <footer className='bg-white pt-16 md:pt-24 pb-10 px-6 border-t border-slate-50'>
      <div className='max-w-7xl mx-auto'>
        {/* Main Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16 md:mb-20'>
          {/* Brand Info - Col span 2 on mobile to avoid squishing */}
          <div className='col-span-2 md:col-span-1 space-y-4'>
            <div className='flex items-center gap-2'>
              <div className='w-6 h-6 bg-indigo-600 rounded flex items-center justify-center'>
                <Sparkles className='w-3.5 h-3.5 text-white fill-current' />
              </div>
              <h3 className='font-black text-base text-slate-900 tracking-tighter uppercase'>
                AI Content Generator
              </h3>
            </div>
            <p className='text-slate-400 text-[13px] md:text-sm leading-relaxed max-w-[220px] font-medium'>
              Scale your creativity with the power of artificial intelligence.
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className='space-y-5'>
              <h4 className='text-[11px] font-black text-slate-900 uppercase tracking-[0.2em]'>
                {category}
              </h4>
              <ul className='space-y-3'>
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-black/50 hover:text-indigo-600 transition-colors text-[13px] md:text-sm font-semibold'
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 border-t border-slate-50'>
          <p className='text-center text-slate-400 text-[10px] md:text-[11px] font-bold uppercase tracking-widest'>
            © {currentYear} AI Content Generator. Designed for the Digital
            Atelier.
          </p>
        </div>
      </div>
    </footer>
  )
}