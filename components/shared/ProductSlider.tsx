'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { ProductCard } from './ProductCard'
import type { Product } from '@/types'

type Props = {
  products: Product[]
}

export function ProductSlider({ products }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener('scroll', checkScroll, { passive: true })
    checkScroll()
    return () => el.removeEventListener('scroll', checkScroll)
  }, [checkScroll])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const amount = direction === 'left' ? -370 : 370
    el.scrollBy({ left: amount, behavior: 'smooth' })
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0)
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current?.offsetLeft ?? 0)
    const walk = (x - startX.current) * 1.5
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft.current - walk
    }
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          aria-label="前へ"
          className="w-12 h-12 border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-bg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5l-5 5 5 5" />
          </svg>
        </button>
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          aria-label="次へ"
          className="w-12 h-12 border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-bg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 5l5 5-5 5" />
          </svg>
        </button>
      </div>
    </div>
  )
}
