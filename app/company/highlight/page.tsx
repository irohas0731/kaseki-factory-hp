import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/PageHero'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { BarChart } from '@/components/shared/BarChart'
import { Timeline } from '@/components/shared/Timeline'
import { ScrollAnimator } from '@/components/shared/ScrollAnimator'
import type { BarChartData, TimelineItem } from '@/types'

export const metadata: Metadata = {
  title: '業績ハイライト',
  description: '株式会社化石工業の業績ハイライト。売上推移、主要な事業実績をデータでご紹介します。',
}

const revenueData: BarChartData[] = [
  { year: '2016', value: 8.2 },
  { year: '2017', value: 9.1 },
  { year: '2018', value: 10.5 },
  { year: '2019', value: 11.3 },
  { year: '2020', value: 9.8 },
  { year: '2021', value: 10.2 },
  { year: '2022', value: 12.1 },
  { year: '2023', value: 13.5 },
  { year: '2024', value: 14.8 },
  { year: '2025', value: 15.6 },
]

const companyTimeline: TimelineItem[] = [
  { year: '2020', description: '新規事業として医療機器部品の製造を開始。' },
  { year: '2021', description: 'DX推進プロジェクトを発足。IoTによる設備稼働監視システムを導入。' },
  { year: '2022', description: '第三工場を増設。生産能力を30%拡大。' },
  { year: '2023', description: '海外（ベトナム）向け技術指導プログラムを開始。' },
  { year: '2024', description: 'カーボンニュートラル宣言。太陽光発電設備を本社工場に設置。' },
  { year: '2025', description: 'AI品質検査システムの試験運用を開始。' },
]

const industryTimeline: TimelineItem[] = [
  { year: '2020', description: '新型感染症の影響でサプライチェーンが大きく混乱。半導体不足が深刻化。' },
  { year: '2021', description: '脱炭素社会に向けた動きが加速。グリーン成長戦略が策定される。' },
  { year: '2022', description: '原材料価格・エネルギーコストの高騰。製造業のDX投資が増加。' },
  { year: '2023', description: '生成AI技術の急速な発展。製造業でもAI活用の検討が本格化。' },
  { year: '2024', description: 'EVシフトの加速に伴い、精密部品需要が拡大。' },
  { year: '2025', description: '2025年の崖（レガシーシステム問題）への対応が本格化。' },
]

export default function HighlightPage() {
  return (
    <>
      <ScrollAnimator />
      <PageHero englishTitle="HIGHLIGHT" japaneseTitle="業績ハイライト" />
      <Breadcrumb items={[{ label: '会社案内', href: '/company' }, { label: '業績ハイライト' }]} />

      {/* 売上推移 */}
      <section className="py-[120px] md:py-[160px]">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="fade-in-up">
            <SectionHeader englishLabel="REVENUE" japaneseTitle="売上推移" />
            <BarChart data={revenueData} />
          </div>
        </div>
      </section>

      {/* 社内の動き */}
      <section className="py-[120px] md:py-[160px] bg-bg-off">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="fade-in-up">
            <SectionHeader englishLabel="COMPANY MILESTONES" japaneseTitle="社内の動き" />
            <Timeline items={companyTimeline} />
          </div>
        </div>
      </section>

      {/* 業界の動き */}
      <section className="py-[120px] md:py-[160px]">
        <div className="mx-auto max-w-[900px] px-6">
          <div className="fade-in-up">
            <SectionHeader englishLabel="INDUSTRY TRENDS" japaneseTitle="業界の動き" />
            <Timeline items={industryTimeline} />
          </div>
        </div>
      </section>
    </>
  )
}
