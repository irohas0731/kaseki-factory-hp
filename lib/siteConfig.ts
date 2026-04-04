import type { SiteConfig, NavItem } from '@/types'

export const siteConfig: SiteConfig = {
  companyName: '株式会社化石工業',
  companyNameEn: 'KASEKI Industry Co., Ltd.',
  address: {
    zip: '540-0000',
    prefecture: '大阪府',
    city: '大阪市中央区',
    street: '化石町1丁目1番1号',
  },
  phone: '06-XXXX-XXXX',
  fax: '06-XXXX-XXXX',
  email: 'info@kaseki-industry.example.jp',
  staff: {
    ceo: { name: '化石 太郎', role: '代表取締役社長' },
    factoryManager: { name: '化石 花子', role: '工場長' },
  },
  products: [
    { id: 'product-a', name: '製品A', desc: '高精度な加工技術を活かし、お客様の要求仕様に合わせて製造する主力製品です。長年の実績と信頼に支えられています。' },
    { id: 'product-b', name: '製品B', desc: '独自の熱処理技術により、優れた耐久性と耐摩耗性を実現した製品です。過酷な環境下でも安定した性能を発揮します。' },
    { id: 'product-c', name: '製品C', desc: '最新のCAD/CAMシステムを活用し、複雑な形状にも対応可能な精密部品です。試作から量産まで柔軟に対応いたします。' },
    { id: 'product-d', name: '製品D', desc: '環境負荷を低減した素材を採用し、サステナビリティに配慮した次世代型の製品です。' },
    { id: 'product-e', name: '製品E', desc: '多品種少量生産に対応した特注品です。設計段階からのご相談も承り、最適なソリューションをご提案いたします。' },
  ],
  catchcopy: 'ここにキャッチコピーが入ります',
}

export const navigation: NavItem[] = [
  { label: 'TOP', href: '/' },
  { label: '当社の強み', href: '/strength' },
  { label: '技術・設備', href: '/technology' },
  { label: '製品紹介', href: '/product' },
  {
    label: '会社案内',
    href: '/company',
    children: [
      { label: '代表挨拶', href: '/company/message' },
      { label: '会社概要', href: '/company/outline' },
      { label: '沿革', href: '/company/history' },
      { label: '業績ハイライト', href: '/company/highlight' },
      { label: 'アクセス', href: '/company/access' },
    ],
  },
  { label: 'お知らせ', href: '/news' },
]

export const fullAddress = `${siteConfig.address.zip} ${siteConfig.address.prefecture}${siteConfig.address.city}${siteConfig.address.street}`
