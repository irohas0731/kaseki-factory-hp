import type { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { PageHero } from '@/components/shared/PageHero'
import { Breadcrumb } from '@/components/shared/Breadcrumb'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '株式会社化石工業のプライバシーポリシー。個人情報の取り扱いについてご案内します。',
}

const sections = [
  {
    title: '1. 個人情報の定義',
    content: '本プライバシーポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、メールアドレスその他の記述等により特定の個人を識別できるもの、及び他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものをいいます。',
  },
  {
    title: '2. 個人情報の収集方法',
    content: '当社は、お客様がお問い合わせフォームをご利用される際、お見積りをご依頼される際、その他当社のサービスをご利用される際に、氏名、会社名、電話番号、メールアドレス等の個人情報をお伺いすることがあります。',
  },
  {
    title: '3. 個人情報の利用目的',
    content: '当社が個人情報を収集・利用する目的は、以下のとおりです。\n\n・お問い合わせに対する回答・連絡のため\n・お見積りの作成・送付のため\n・製品・サービスに関する情報提供のため\n・当社サービスの改善・新サービスの開発のため\n・その他上記利用目的に付随する目的のため',
  },
  {
    title: '4. 個人情報の第三者提供',
    content: '当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。\n\n・法令に基づく場合\n・人の生命、身体または財産の保護のために必要がある場合\n・公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合\n・国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する場合',
  },
  {
    title: '5. 個人情報の安全管理',
    content: '当社は、個人情報の正確性及び安全性を確保するために、セキュリティ対策をはじめとする安全対策を講じ、個人情報の漏えい、滅失またはき損の防止及び是正に努めます。',
  },
  {
    title: '6. 個人情報の開示・訂正・削除',
    content: 'お客様ご自身の個人情報の開示・訂正・削除をご希望される場合は、下記のお問い合わせ窓口までご連絡ください。ご本人確認の上、合理的な範囲で速やかに対応いたします。',
  },
  {
    title: '7. プライバシーポリシーの変更',
    content: '当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点から効力を生じるものとします。',
  },
  {
    title: '8. お問い合わせ窓口',
    content: `本プライバシーポリシーに関するお問い合わせは、下記までお願いいたします。\n\n${siteConfig.companyName}\n住所: ${siteConfig.address.prefecture}${siteConfig.address.city}${siteConfig.address.street}\nTEL: ${siteConfig.phone}\nE-mail: ${siteConfig.email}`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      <PageHero englishTitle="PRIVACY POLICY" japaneseTitle="プライバシーポリシー" />
      <Breadcrumb items={[{ label: 'プライバシーポリシー' }]} />

      <section className="py-[120px] md:py-[160px]">
        <div className="mx-auto max-w-[800px] px-6">
          <p className="text-text-light leading-relaxed mb-12">
            {siteConfig.companyName}（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、
            以下のとおりプライバシーポリシーを定め、個人情報の適切な取り扱いに努めます。
          </p>

          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-serif text-lg font-bold text-text mb-4">{section.title}</h2>
                <p className="text-text-light leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>

          <p className="mt-16 text-sm text-text-muted text-right">
            制定日: 20XX年XX月XX日
          </p>
        </div>
      </section>
    </>
  )
}
