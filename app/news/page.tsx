import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/PageHero'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { NewsTab } from '@/components/shared/NewsTab'
import { ScrollAnimator } from '@/components/shared/ScrollAnimator'

export const metadata: Metadata = {
  title: 'お知らせ',
  description: '株式会社化石工業からのお知らせ、トピックス、採用情報をご覧いただけます。',
}

export default function NewsPage() {
  return (
    <>
      <ScrollAnimator />
      <PageHero englishTitle="NEWS" japaneseTitle="お知らせ" />
      <Breadcrumb items={[{ label: 'お知らせ' }]} />

      <section className="py-[120px] md:py-[160px]">
        <div className="mx-auto max-w-[1000px] px-6 fade-in-up">
          <NewsTab />
        </div>
      </section>
    </>
  )
}
