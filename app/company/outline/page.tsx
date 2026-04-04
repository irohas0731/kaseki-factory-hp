import type { Metadata } from 'next'
import { siteConfig, fullAddress } from '@/lib/siteConfig'
import { PageHero } from '@/components/shared/PageHero'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { ScrollAnimator } from '@/components/shared/ScrollAnimator'
import type { CompanyOutlineItem } from '@/types'

export const metadata: Metadata = {
  title: '会社概要',
  description: '株式会社化石工業の会社概要。商号、創業年、資本金、事業内容、所在地などの基本情報をご覧いただけます。',
}

const outlineItems: CompanyOutlineItem[] = [
  { label: '商号', value: siteConfig.companyName },
  { label: '英文商号', value: siteConfig.companyNameEn },
  { label: '創業', value: '19XX年XX月' },
  { label: '設立', value: '19XX年XX月XX日' },
  { label: '資本金', value: 'X,XXX万円' },
  { label: '代表者', value: `${siteConfig.staff.ceo.role} ${siteConfig.staff.ceo.name}` },
  { label: '役員', value: `${siteConfig.staff.ceo.role} ${siteConfig.staff.ceo.name}\n${siteConfig.staff.factoryManager.role} ${siteConfig.staff.factoryManager.name}` },
  { label: '営業内容', value: '精密機械部品の製造・加工\n金型の設計・製作\n各種治具の設計・製作\n品質検査・試験' },
  { label: '売上高', value: 'XX億円（20XX年度実績）' },
  { label: '取引銀行', value: '〇〇銀行 △△支店\n□□銀行 ◇◇支店' },
  { label: '従業員数', value: 'XXX名（20XX年XX月現在）' },
  { label: '敷地面積', value: 'X,XXX㎡' },
  { label: '建屋面積', value: 'X,XXX㎡' },
  { label: '所在地', value: fullAddress },
  { label: 'TEL', value: siteConfig.phone },
  { label: 'FAX', value: siteConfig.fax },
  { label: 'E-mail', value: siteConfig.email },
]

export default function OutlinePage() {
  return (
    <>
      <ScrollAnimator />
      <PageHero englishTitle="OUTLINE" japaneseTitle="会社概要" />
      <Breadcrumb items={[{ label: '会社案内', href: '/company' }, { label: '会社概要' }]} />

      <section className="py-[120px] md:py-[160px]">
        <div className="mx-auto max-w-[900px] px-6">
          <dl className="fade-in-up">
            {outlineItems.map((item) => (
              <div key={item.label} className="flex flex-col md:flex-row border-b border-border">
                <dt className="w-full md:w-[180px] flex-shrink-0 bg-bg-off px-6 py-4 text-sm font-medium text-text">
                  {item.label}
                </dt>
                <dd className="flex-1 px-6 py-4 text-sm text-text-light whitespace-pre-line">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
