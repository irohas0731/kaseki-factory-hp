import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/PageHero'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { Timeline } from '@/components/shared/Timeline'
import { ScrollAnimator } from '@/components/shared/ScrollAnimator'
import type { TimelineItem } from '@/types'

export const metadata: Metadata = {
  title: '沿革',
  description: '株式会社化石工業の沿革。創業から現在に至るまでの歩みをご紹介します。',
}

const historyItems: TimelineItem[] = [
  { year: '19XX', month: '4月', description: '大阪市中央区にて個人事業として創業。精密部品の切削加工を開始。' },
  { year: '19XX', month: '10月', description: '法人化し、株式会社化石工業を設立。工場を現在の所在地に移転。' },
  { year: '19XX', month: '6月', description: 'NC工作機械を導入し、量産体制を確立。自動車部品の加工を本格的に開始。' },
  { year: '20XX', month: '3月', description: 'ISO 9001（品質マネジメントシステム）の認証を取得。品質管理体制を強化。' },
  { year: '20XX', month: '8月', description: '第二工場を増設。5軸マシニングセンタを導入し、複雑形状加工に対応。' },
  { year: '20XX', month: '1月', description: 'ISO 14001（環境マネジメントシステム）の認証を取得。環境に配慮した製造活動を推進。' },
]

export default function HistoryPage() {
  return (
    <>
      <ScrollAnimator />
      <PageHero englishTitle="HISTORY" japaneseTitle="沿革" />
      <Breadcrumb items={[{ label: '会社案内', href: '/company' }, { label: '沿革' }]} />

      <section className="py-[120px] md:py-[160px]">
        <div className="mx-auto max-w-[900px] px-6 fade-in-up">
          <Timeline items={historyItems} />
        </div>
      </section>
    </>
  )
}
