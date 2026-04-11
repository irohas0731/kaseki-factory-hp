import Image from 'next/image'
import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/PageHero'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { StrengthCard } from '@/components/shared/StrengthCard'
import { IMAGES } from '@/lib/images'
import { ScrollAnimator } from '@/components/shared/ScrollAnimator'
import type { StrengthItem } from '@/types'

export const metadata: Metadata = {
  title: '当社の強み',
  description: '株式会社化石工業の強み。品質管理体制、最新設備、技術力、ISO認証など、半世紀以上にわたり培ってきた製造力をご紹介します。',
}

const strengths: StrengthItem[] = [
  {
    number: '01',
    title: '徹底した品質管理体制',
    description: '受入検査から出荷検査まで、各工程ごとに厳格な品質チェックを実施。三次元測定機をはじめとする最新の検査機器を導入し、ミクロン単位の精度を保証しています。不良率の低減と品質の安定化に努め、お客様に安心をお届けします。',
    imageLabel: '品質管理・検査工程の様子',
    imageSrc: IMAGES.strength.quality,
  },
  {
    number: '02',
    title: '最新鋭の設備と生産能力',
    description: '国内外の最新鋭加工機を多数保有し、高精度な切削・研削・プレス加工に対応。5軸マシニングセンタやワイヤーカット放電加工機など、難加工にも対応できる設備体制を整えています。24時間稼働体制により、短納期のご要望にもお応えします。',
    imageLabel: '最新設備・加工機械の外観',
    imageSrc: IMAGES.strength.equipment,
  },
  {
    number: '03',
    title: 'ISO認証取得の信頼性',
    description: '品質マネジメントシステムISO 9001、環境マネジメントシステムISO 14001を取得。国際規格に基づいた管理体制のもと、品質と環境への配慮を両立した製造活動を推進しています。',
    imageLabel: 'ISO認証・品質保証体制',
    imageSrc: IMAGES.strength.iso,
  },
  {
    number: '04',
    title: '熟練の技術力と人材育成',
    description: '50年以上にわたり蓄積してきた加工技術と、それを支える熟練技術者の存在が私たちの最大の財産です。若手技術者への技能伝承プログラムを通じ、世代を超えた技術の継承に取り組んでいます。',
    imageLabel: '技術者・製造現場の様子',
    imageSrc: IMAGES.strength.technician,
  },
  {
    number: '05',
    title: '多品種少量生産への対応力',
    description: '試作品1個から量産品まで、柔軟な生産体制で幅広いご要望に対応します。設計段階からのVE提案やコストダウン提案も積極的に行い、お客様のものづくりを総合的にサポートいたします。',
    imageLabel: '多品種少量生産ラインの様子',
    imageSrc: IMAGES.strength.flexible,
  },
  {
    number: '06',
    title: '迅速な納期対応と物流体制',
    description: '独自の生産管理システムにより、受注から出荷までの工程を一元管理。急な納期変更や増産にも柔軟に対応できる体制を構築しています。全国への配送ネットワークも整備しています。',
    imageLabel: '物流・出荷体制の様子',
    imageSrc: IMAGES.strength.logistics,
  },
]

const sliderImages = [
  IMAGES.strengthSlider.slide01,
  IMAGES.strengthSlider.slide02,
  IMAGES.strengthSlider.slide03,
  IMAGES.strengthSlider.slide04,
  IMAGES.strengthSlider.slide05,
  IMAGES.strengthSlider.slide06,
]

const isoData = [
  { label: '規格名', value: 'ISO 9001:2015' },
  { label: '登録証番号', value: 'XXXXXX' },
  { label: '審査機構', value: '〇〇認証機関' },
  { label: '初回登録日', value: '20XX年XX月XX日' },
  { label: '有効期限', value: '20XX年XX月XX日' },
]

export default function StrengthPage() {
  return (
    <>
      <ScrollAnimator />
      <PageHero englishTitle="STRENGTH" japaneseTitle="当社の強み" />
      <Breadcrumb items={[{ label: '当社の強み' }]} />

      <section className="py-[120px] md:py-[160px]">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* リード文 + スライダー */}
          <div className="text-center mb-20 fade-in-up">
            <p className="text-text-light leading-relaxed max-w-[800px] mx-auto mb-12">
              私たち{' '}株式会社化石工業は、創業以来半世紀以上にわたり製造業の第一線で
              技術を磨き続けてまいりました。品質・設備・人材のすべてにおいて高い水準を維持し、
              お客様のものづくりパートナーとして選ばれ続ける理由をご紹介します。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {sliderImages.map((src, n) => (
                <div key={n} className="relative w-full" style={{ aspectRatio: '300/200' }}>
                  <Image
                    src={src}
                    alt={`スライダー画像${n + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 強み6項目 */}
          <div className="space-y-24">
            {strengths.map((item, i) => (
              <div key={item.number} className="fade-in-up">
                <StrengthCard item={item} reverse={i % 2 === 1} />

                {/* 03にISO認証テーブル */}
                {item.number === '03' && (
                  <div className="mt-10 ml-0 lg:ml-[60%]">
                    <h4 className="font-serif text-lg font-bold text-text mb-4">ISO認証情報</h4>
                    <table className="w-full text-sm">
                      <tbody>
                        {isoData.map((row) => (
                          <tr key={row.label} className="border-b border-border">
                            <th className="text-left py-3 px-4 bg-bg-off text-text font-medium w-[140px]">
                              {row.label}
                            </th>
                            <td className="py-3 px-4 text-text-light">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
