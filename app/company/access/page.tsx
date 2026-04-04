import type { Metadata } from 'next'
import { siteConfig, fullAddress } from '@/lib/siteConfig'
import { PageHero } from '@/components/shared/PageHero'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { PlaceholderImage } from '@/components/shared/PlaceholderImage'
import { ScrollAnimator } from '@/components/shared/ScrollAnimator'

export const metadata: Metadata = {
  title: 'アクセス',
  description: '株式会社化石工業へのアクセス。本社工場の所在地と地図をご確認いただけます。',
}

export default function AccessPage() {
  return (
    <>
      <ScrollAnimator />
      <PageHero englishTitle="ACCESS" japaneseTitle="アクセス" />
      <Breadcrumb items={[{ label: '会社案内', href: '/company' }, { label: 'アクセス' }]} />

      <section className="py-[120px] md:py-[160px]">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* 工場写真 */}
          <div className="mb-16 fade-in-up">
            <PlaceholderImage
              width={1200}
              height={500}
              label="工場外観写真"
              className="w-full"
            />
          </div>

          {/* 地図 */}
          <div className="mb-16 fade-in-up">
            <div
              className="w-full bg-bg-off border border-border flex items-center justify-center"
              style={{ height: '400px' }}
            >
              <p className="text-text-muted text-lg">ここに地図が入ります（Google Maps等）</p>
            </div>
          </div>

          {/* 所在地情報 */}
          <div className="fade-in-up">
            <h2 className="font-serif text-2xl font-bold text-text mb-8">本社工場</h2>
            <dl className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-0">
              {[
                { label: '所在地', value: fullAddress },
                { label: 'TEL', value: siteConfig.phone },
                { label: 'FAX', value: siteConfig.fax },
                { label: '敷地面積', value: 'X,XXX㎡' },
                { label: '建屋面積', value: 'X,XXX㎡' },
              ].map((item) => (
                <div key={item.label} className="contents">
                  <dt className="bg-bg-off px-6 py-4 text-sm font-medium text-text border-b border-border">
                    {item.label}
                  </dt>
                  <dd className="px-6 py-4 text-sm text-text-light border-b border-border">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  )
}
