import Image from 'next/image'
import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { IMAGES } from '@/lib/images'
import { PageHero } from '@/components/shared/PageHero'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { ScrollAnimator } from '@/components/shared/ScrollAnimator'

export const metadata: Metadata = {
  title: '代表挨拶',
  description: '株式会社化石工業 代表取締役社長 化石太郎からのご挨拶。当社の理念とビジョンについてお伝えします。',
}

export default function MessagePage() {
  return (
    <>
      <ScrollAnimator />
      <PageHero englishTitle="MESSAGE" japaneseTitle="代表挨拶" />
      <Breadcrumb items={[{ label: '会社案内', href: '/company' }, { label: '代表挨拶' }]} />

      <section className="py-[120px] md:py-[160px]">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 fade-in-up">
            <div className="w-full lg:w-[40%] flex-shrink-0">
              <div className="relative w-full" style={{ aspectRatio: '400/550' }}>
                <Image
                  src={IMAGES.staff.ceo}
                  alt="代表取締役社長の写真"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="w-full lg:w-[60%]">
              <h2 className="font-serif text-[26px] md:text-[32px] font-bold text-text mb-8 leading-relaxed">
                技術の力で、<br />
                社会に貢献し続ける。
              </h2>
              <div className="space-y-6 text-text-light leading-[2]">
                <p>
                  平素は格別のお引き立てを賜り、厚く御礼申し上げます。
                </p>
                <p>
                  当社は創業以来、「品質第一」を企業理念に掲げ、精密加工技術を通じて
                  日本のものづくりに貢献してまいりました。お客様からお預かりする一つ一つの
                  製品に誠意を込め、確かな技術と品質でお応えすることが、私たちの使命です。
                </p>
                <p>
                  急速に変化する社会環境の中で、製造業にも新たな挑戦が求められています。
                  当社では最新設備の積極的な導入、デジタル技術の活用、そして次世代を担う
                  人材の育成に注力し、常に進化し続ける企業を目指しています。
                </p>
                <p>
                  また、環境負荷の低減やSDGsへの取り組みにも力を入れ、
                  持続可能な社会の実現に向けた製造活動を推進しています。
                </p>
                <p>
                  これからも「技術の力で社会に貢献する」という志のもと、
                  お客様のご期待に応え続けてまいります。
                  今後とも変わらぬご支援を賜りますよう、よろしくお願い申し上げます。
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-text-muted mb-1">{siteConfig.staff.ceo.role}</p>
                <p className="font-serif text-2xl font-bold text-text">{siteConfig.staff.ceo.name}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
