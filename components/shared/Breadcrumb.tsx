import Link from 'next/link'
import type { BreadcrumbItem } from '@/types'

type Props = {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: Props) {
  return (
    <nav aria-label="パンくずリスト" className="bg-bg-off border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-3">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          <li>
            <Link href="/" className="text-text-muted hover:text-primary transition-colors">
              TOP
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-text-muted">/</span>
              {item.href ? (
                <Link href={item.href} className="text-text-muted hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-text">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
