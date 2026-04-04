'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { siteConfig, navigation } from '@/lib/siteConfig'

type Props = {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: Props) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const toggleExpand = (href: string) => {
    setExpandedItem(expandedItem === href ? null : href)
  }

  return (
    <div
      className={`fixed inset-0 z-[100] transition-transform duration-300 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="absolute inset-0 bg-bg-dark/50" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[400px] bg-bg overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="font-serif font-bold text-primary-dark">
            {siteConfig.companyName}
          </span>
          <button
            onClick={onClose}
            aria-label="メニューを閉じる"
            className="w-10 h-10 flex items-center justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="py-4">
          {navigation.map((item) => (
            <div key={item.href} className="border-b border-border/50">
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleExpand(item.href)}
                    className="flex items-center justify-between w-full px-6 py-4 text-left text-text font-medium"
                  >
                    <Link href={item.href} onClick={onClose}>
                      {item.label}
                    </Link>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform ${
                        expandedItem === item.href ? 'rotate-180' : ''
                      }`}
                    >
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedItem === item.href ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block px-10 py-3 text-sm text-text-light hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block px-6 py-4 text-text font-medium"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="p-6 space-y-4">
          <div className="text-center">
            <p className="text-sm text-text-light mb-1">お電話でのお問い合わせ</p>
            <p className="section-label text-xl font-bold text-primary-dark">
              {siteConfig.phone}
            </p>
          </div>
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full bg-primary text-bg text-center py-4 font-medium hover:bg-primary-dark transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  )
}
