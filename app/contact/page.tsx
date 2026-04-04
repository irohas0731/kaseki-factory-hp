import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { PageHero } from '@/components/shared/PageHero'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { ContactForm } from '@/components/shared/ContactForm'
import { ScrollAnimator } from '@/components/shared/ScrollAnimator'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '株式会社化石工業へのお問い合わせ。製品に関するご質問、お見積りのご依頼など、お気軽にご連絡ください。',
}

export default function ContactPage() {
  return (
    <>
      <ScrollAnimator />
      <PageHero englishTitle="CONTACT" japaneseTitle="お問い合わせ" />
      <Breadcrumb items={[{ label: 'お問い合わせ' }]} />

      <section className="py-[120px] md:py-[160px]">
        <div className="mx-auto max-w-[900px] px-6">
          {/* 電話番号 */}
          <div className="text-center mb-20 fade-in-up">
            <p className="text-text-light mb-4">お電話でのお問い合わせ</p>
            <p className="section-label text-4xl md:text-5xl font-bold text-primary">
              {siteConfig.phone}
            </p>
            <p className="text-sm text-text-muted mt-3">受付時間: 平日 8:30〜17:30</p>
          </div>

          {/* 区切り線 */}
          <div className="flex items-center gap-6 mb-20">
            <span className="flex-1 h-px bg-border" />
            <span className="text-sm text-text-muted">または</span>
            <span className="flex-1 h-px bg-border" />
          </div>

          {/* フォーム */}
          <div className="fade-in-up">
            <h2 className="font-serif text-2xl font-bold text-text text-center mb-12">
              フォームでのお問い合わせ
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
