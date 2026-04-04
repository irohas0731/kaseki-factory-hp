import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/shared/PageHero'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { PlaceholderImage } from '@/components/shared/PlaceholderImage'
import { ScrollAnimator } from '@/components/shared/ScrollAnimator'

export const metadata: Metadata = {
  title: '会社案内',
  description: '株式会社化石工業の会社案内。代表挨拶、会社概要、沿革、業績ハイライト、アクセス情報をご覧いただけます。',
}

const subPages = [
  { number: '01', title: '代表挨拶', href: '/company/message', englishLabel: 'MESSAGE', description: '代表取締役社長からのご挨拶と、当社のビジョンについてお伝えします。' },
  { number: '02', title: '会社概要', href: '/company/outline', englishLabel: 'OUTLINE', description: '商号、所在地、資本金、事業内容など、当社の基本情報をまとめています。' },
  { number: '03', title: '沿革', href: '/company/history', englishLabel: 'HISTORY', description: '創業から現在に至るまでの歩みをご紹介します。' },
  { number: '04', title: '業績ハイライト', href: '/company/highlight', englishLabel: 'HIGHLIGHT', description: '売上推移や主要な事業実績をデータでご紹介します。' },
  { number: '05', title: 'アクセス', href: '/company/access', englishLabel: 'ACCESS', description: '本社工場へのアクセス方法と所在地をご案内します。' },
]

export default function CompanyPage() {
  return (
    <>
      <ScrollAnimator />
      <PageHero englishTitle="COMPANY" japaneseTitle="会社案内" />
      <Breadcrumb items={[{ label: '会社案内' }]} />

      <section className="py-[120px] md:py-[160px]">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-24 fade-in-up">
            <p className="text-text-light leading-relaxed max-w-[800px] mx-auto">
              株式会社化石工業は、創業以来ものづくりの品質と信頼を追求し続けてまいりました。
              当社の企業理念、歴史、実績についてご紹介します。
            </p>
          </div>

          <div className="space-y-6">
            {subPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="fade-in-up group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 py-8 border-b border-border hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-6 flex-shrink-0">
                  <span className="section-label text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {page.number}
                  </span>
                  <div>
                    <span className="section-label text-xs text-text-muted block">{page.englishLabel}</span>
                    <h2 className="font-serif text-xl font-bold text-text group-hover:text-primary transition-colors">
                      {page.title}
                    </h2>
                  </div>
                </div>
                <p className="text-sm text-text-light flex-1">{page.description}</p>
                <span className="flex-shrink-0 w-8 h-px bg-primary/30 group-hover:w-12 group-hover:bg-primary transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
