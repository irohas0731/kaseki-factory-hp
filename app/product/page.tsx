import Image from 'next/image'
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { IMAGES } from '@/lib/images'
import { PageHero } from '@/components/shared/PageHero'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { ScrollAnimator } from '@/components/shared/ScrollAnimator'

export const metadata: Metadata = {
  title: '製品紹介',
  description: '株式会社化石工業の製品紹介。高精度な加工技術を活かした多彩な製品ラインナップをご覧いただけます。',
}

const productImageMap: Record<string, string> = {
  'product-a': IMAGES.products.productA,
  'product-b': IMAGES.products.productB,
  'product-c': IMAGES.products.productC,
  'product-d': IMAGES.products.productD,
  'product-e': IMAGES.products.productE,
}

export default function ProductPage() {
  return (
    <>
      <ScrollAnimator />
      <PageHero englishTitle="PRODUCTS" japaneseTitle="製品紹介" />
      <Breadcrumb items={[{ label: '製品紹介' }]} />

      <section className="py-[120px] md:py-[160px]">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* リード文 */}
          <div className="text-center mb-24 fade-in-up">
            <p className="text-text-light leading-relaxed max-w-[800px] mx-auto">
              多品種少量生産から量産まで、お客様の多様なニーズに対応した製品をご提供しています。
              設計段階からのVE提案も行い、品質・コスト・納期の最適なバランスを実現します。
            </p>
          </div>

          {/* 製品一覧 */}
          <div className="space-y-32">
            {siteConfig.products.map((product, i) => {
              const src = productImageMap[product.id] ?? IMAGES.products.productA
              return (
                <div
                  key={product.id}
                  id={product.id}
                  className={`fade-in-up flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
                >
                  <div className={`w-full ${i % 2 === 0 ? 'lg:w-[60%]' : 'lg:w-[55%]'}`}>
                    <div className="relative w-full" style={{ aspectRatio: '800/500' }}>
                      <Image
                        src={src}
                        alt={`${product.name}の製品画像`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>
                  </div>
                  <div className={`w-full ${i % 2 === 0 ? 'lg:w-[40%]' : 'lg:w-[45%]'}`}>
                    <span className="section-label text-5xl font-bold text-primary/10 block mb-2">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-serif text-[26px] md:text-[32px] font-bold text-text mb-6">
                      {product.name}
                    </h2>
                    <p className="text-text-light leading-relaxed">
                      {product.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
