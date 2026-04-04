'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { siteConfig, navigation } from '@/lib/siteConfig'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/90 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold tracking-wide text-primary-dark">
              {siteConfig.companyName}
            </span>
            <span className="section-label text-[10px] text-text-muted">
              {siteConfig.companyNameEn}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm font-medium text-text hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                    <div className="bg-bg rounded shadow-xl border border-border py-2 min-w-[180px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2 text-sm text-text hover:bg-primary-bg hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <span className="section-label text-sm text-primary-dark font-semibold">
              {siteConfig.phone}
            </span>
            <Link
              href="/contact"
              className="bg-primary text-bg px-6 py-2.5 text-sm font-medium hover:bg-primary-dark transition-colors"
            >
              お問い合わせ
            </Link>
          </div>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="メニューを開く"
          >
            <span className="block w-6 h-0.5 bg-text" />
            <span className="block w-6 h-0.5 bg-text" />
            <span className="block w-6 h-0.5 bg-text" />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
