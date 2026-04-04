export type SiteConfig = {
  companyName: string
  companyNameEn: string
  address: {
    zip: string
    prefecture: string
    city: string
    street: string
  }
  phone: string
  fax: string
  email: string
  staff: {
    ceo: StaffMember
    factoryManager: StaffMember
  }
  products: Product[]
  catchcopy: string
}

export type StaffMember = {
  name: string
  role: string
}

export type Product = {
  id: string
  name: string
  desc: string
}

export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export type NewsCategory = 'all' | 'news' | 'topics' | 'recruit'

export type NewsItem = {
  id: string
  date: string
  category: NewsCategory
  title: string
}

export type StrengthItem = {
  number: string
  title: string
  description: string
  imageLabel: string
}

export type EquipmentItem = {
  name: string
  maker: string
  model: string
  count: number
}

export type EquipmentCategory = {
  id: string
  name: string
  description: string
  specs: { label: string; value: string }[]
  imageCount: number
}

export type TimelineItem = {
  year: string
  month?: string
  description: string
}

export type CompanyOutlineItem = {
  label: string
  value: string
}

export type BarChartData = {
  year: string
  value: number
}

export type BreadcrumbItem = {
  label: string
  href?: string
}
