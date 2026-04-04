import type { Metadata } from 'next'
import { PageHero } from '@/components/shared/PageHero'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PlaceholderImage } from '@/components/shared/PlaceholderImage'
import { EquipmentTable } from '@/components/shared/EquipmentTable'
import { ScrollAnimator } from '@/components/shared/ScrollAnimator'
import type { EquipmentCategory, EquipmentItem } from '@/types'

export const metadata: Metadata = {
  title: '技術・設備紹介',
  description: '株式会社化石工業の技術力と保有設備をご紹介。最新鋭のマシニングセンタや検査機器を多数保有し、高精度な加工を実現します。',
}

const categories: EquipmentCategory[] = [
  {
    id: 'cutting',
    name: '設備A（切削加工設備）',
    description: '5軸マシニングセンタをはじめとする最新の切削加工設備を導入。複雑形状の高精度加工を実現し、航空宇宙・自動車・医療機器など幅広い分野のニーズにお応えしています。',
    specs: [
      { label: '最大加工サイズ', value: '1,200 × 800 × 600mm' },
      { label: '加工精度', value: '±0.005mm' },
      { label: '対応素材', value: 'アルミ・鉄・ステンレス・チタン・樹脂' },
    ],
    imageCount: 3,
  },
  {
    id: 'grinding',
    name: '設備B（研削加工設備）',
    description: 'CNC円筒研削盤、平面研削盤、内面研削盤を保有。サブミクロン単位の表面精度を達成し、金型部品や精密機械部品の仕上げ加工を行っています。',
    specs: [
      { label: '表面粗さ', value: 'Ra 0.05μm以下' },
      { label: '真円度', value: '0.001mm以下' },
      { label: '最大加工径', value: 'φ400mm' },
    ],
    imageCount: 2,
  },
  {
    id: 'edm',
    name: '設備C（放電加工設備）',
    description: 'ワイヤーカット放電加工機、型彫放電加工機を保有。導電性素材であれば硬度に関係なく加工が可能で、超硬合金や焼入れ鋼の精密加工に威力を発揮します。',
    specs: [
      { label: '加工精度', value: '±0.002mm' },
      { label: 'ワイヤー径', value: '0.05〜0.3mm' },
      { label: '最大ワーク重量', value: '500kg' },
    ],
    imageCount: 2,
  },
  {
    id: 'inspection',
    name: '設備D（検査・測定設備）',
    description: '三次元測定機、画像測定機、表面粗さ計、硬度計など、多彩な検査・測定機器を完備。出荷前の全数検査体制で、確かな品質をお届けします。',
    specs: [
      { label: '測定精度', value: '0.001mm' },
      { label: '測定範囲', value: '800 × 600 × 500mm' },
      { label: '対応規格', value: 'JIS / ISO' },
    ],
    imageCount: 2,
  },
]

const equipmentList: EquipmentItem[] = [
  { name: '5軸マシニングセンタ', maker: 'DMG MORI', model: 'DMU 50', count: 3 },
  { name: 'CNC旋盤', maker: 'オークマ', model: 'LB3000 EX II', count: 5 },
  { name: 'ワイヤーカット放電加工機', maker: 'ソディック', model: 'ALC600G', count: 2 },
  { name: 'CNC円筒研削盤', maker: 'ジェイテクト', model: 'GL4i-50A', count: 2 },
  { name: '三次元測定機', maker: 'ミツトヨ', model: 'CRYSTA-Apex S', count: 1 },
  { name: 'CNC平面研削盤', maker: '岡本工作', model: 'PSG-SA1', count: 3 },
  { name: '汎用フライス盤', maker: '牧野フライス', model: 'KE-55', count: 4 },
  { name: '画像測定機', maker: 'キーエンス', model: 'IM-8000', count: 1 },
]

export default function TechnologyPage() {
  return (
    <>
      <ScrollAnimator />
      <PageHero englishTitle="TECHNOLOGY" japaneseTitle="技術・設備紹介" />
      <Breadcrumb items={[{ label: '技術・設備紹介' }]} />

      <section className="py-[120px] md:py-[160px]">
        <div className="mx-auto max-w-[1200px] px-6">
          {/* リード文 */}
          <div className="text-center mb-24 fade-in-up">
            <p className="text-text-light leading-relaxed max-w-[800px] mx-auto">
              株式会社化石工業は、国内外の最新鋭設備を積極的に導入し、切削・研削・放電加工から
              品質検査まで一貫した生産体制を構築しています。熟練技術者と最新設備の融合により、
              お客様のあらゆる加工ニーズにお応えいたします。
            </p>
          </div>

          {/* 設備カテゴリ別紹介 */}
          <div className="space-y-32">
            {categories.map((cat, catIdx) => (
              <div key={cat.id} className="fade-in-up">
                <div className={`flex flex-col ${catIdx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20`}>
                  <div className="w-full lg:w-[55%]">
                    <div className={`grid ${cat.imageCount > 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-3`}>
                      {Array.from({ length: cat.imageCount }).map((_, imgIdx) => (
                        <PlaceholderImage
                          key={imgIdx}
                          width={imgIdx === 0 && cat.imageCount > 2 ? 600 : 400}
                          height={300}
                          label={`${cat.name}の画像${imgIdx + 1}`}
                          className={`w-full ${imgIdx === 0 && cat.imageCount > 2 ? 'col-span-2' : ''}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-full lg:w-[45%]">
                    <h3 className="font-serif text-[22px] md:text-[26px] font-bold text-text mb-6">
                      {cat.name}
                    </h3>
                    <p className="text-text-light leading-relaxed mb-8">
                      {cat.description}
                    </p>
                    <table className="w-full text-sm">
                      <tbody>
                        {cat.specs.map((spec) => (
                          <tr key={spec.label} className="border-b border-border">
                            <th className="text-left py-3 pr-4 text-text font-medium w-[130px]">
                              {spec.label}
                            </th>
                            <td className="py-3 text-text-light">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 設備一覧テーブル */}
          <div className="mt-32 fade-in-up">
            <SectionHeader englishLabel="EQUIPMENT LIST" japaneseTitle="設備一覧" />
            <EquipmentTable items={equipmentList} />
          </div>
        </div>
      </section>
    </>
  )
}
