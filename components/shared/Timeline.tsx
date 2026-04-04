import type { TimelineItem } from '@/types'

type Props = {
  items: TimelineItem[]
}

export function Timeline({ items }: Props) {
  return (
    <div className="relative">
      {/* 縦線 */}
      <div className="absolute left-[100px] md:left-[140px] top-0 bottom-0 w-px bg-border" />

      <div className="space-y-8">
        {items.map((item, i) => (
          <div key={i} className="flex gap-6 md:gap-10 relative">
            <div className="flex-shrink-0 w-[80px] md:w-[120px] text-right">
              <span className="section-label text-lg font-bold text-primary">{item.year}</span>
              {item.month && (
                <span className="text-sm text-text-muted ml-1">{item.month}</span>
              )}
            </div>
            {/* ドット */}
            <div className="absolute left-[96px] md:left-[136px] top-2 w-3 h-3 rounded-full bg-primary border-2 border-bg z-10" />
            <div className="flex-1 pt-0.5 pl-4">
              <p className="text-text leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
