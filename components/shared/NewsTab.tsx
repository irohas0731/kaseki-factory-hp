'use client'

import { useState } from 'react'
import type { NewsCategory } from '@/types'

const tabs: { key: NewsCategory; label: string }[] = [
  { key: 'all', label: 'すべて' },
  { key: 'news', label: 'お知らせ' },
  { key: 'topics', label: 'トピックス' },
  { key: 'recruit', label: '採用情報' },
]

export function NewsTab() {
  const [activeTab, setActiveTab] = useState<NewsCategory>('all')

  return (
    <div>
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-3 text-sm font-medium transition-colors relative ${
              activeTab === tab.key
                ? 'text-primary'
                : 'text-text-muted hover:text-text'
            }`}
          >
            {tab.label}
            {activeTab === tab.key && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>
      <div className="py-16 text-center">
        <p className="text-text-muted">現在、{tabs.find((t) => t.key === activeTab)?.label}はありません。</p>
      </div>
    </div>
  )
}
