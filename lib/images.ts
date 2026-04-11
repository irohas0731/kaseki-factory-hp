// lib/images.ts — 全画像URLの一元管理
// ダミー → 本番への差し替えは、URLを書き換えるだけでOK

export const IMAGES = {
  // ── Hero ──
  hero: {
    main: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop",
  },

  // ── トップページ 強みセクション ──
  homeStrength: {
    quality: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
    equipment: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
    skill: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop",
  },

  // ── トップページ 技術セクション ──
  homeTechnology: {
    machine: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=500&fit=crop",
    inspection: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=500&fit=crop",
  },

  // ── トップページ バナー ──
  banners: {
    company: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=960&h=500&fit=crop",
    access: "https://images.unsplash.com/photo-1513828583688-c52571e47a09?w=960&h=500&fit=crop",
  },

  // ── 強みページ スライダー ──
  strengthSlider: {
    slide01: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop",
    slide02: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=200&fit=crop",
    slide03: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=300&h=200&fit=crop",
    slide04: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=300&h=200&fit=crop",
    slide05: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=300&h=200&fit=crop",
    slide06: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=300&h=200&fit=crop",
  },

  // ── 強みページ カード ──
  strength: {
    quality: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=500&fit=crop",
    equipment: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=500&fit=crop",
    iso: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    technician: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=500&fit=crop",
    flexible: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=500&fit=crop",
    logistics: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&h=500&fit=crop",
  },

  // ── 技術・設備ページ ──
  technology: {
    cutting01: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop",
    cutting02: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop",
    cutting03: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    grinding01: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop",
    grinding02: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    edm01: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=300&fit=crop",
    edm02: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
    inspection01: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    inspection02: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
  },

  // ── 製品ページ ──
  products: {
    productA: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=500&fit=crop",
    productB: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop",
    productC: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop",
    productD: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=500&fit=crop",
    productE: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=500&fit=crop",
  },

  // ── 製品スライダー（トップページ） ──
  productSlider: {
    productA: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=350&h=250&fit=crop",
    productB: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=350&h=250&fit=crop",
    productC: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=350&h=250&fit=crop",
    productD: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=350&h=250&fit=crop",
    productE: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=350&h=250&fit=crop",
  },

  // ── スタッフ ──
  staff: {
    ceo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=550&fit=crop",
  },

  // ── 施設・アクセス ──
  facility: {
    exterior: "https://images.unsplash.com/photo-1513828583688-c52571e47a09?w=1200&h=500&fit=crop",
  },

  // ── 共通 ──
  common: {
    ogImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=630&fit=crop",
    logo: "/images/logo.svg",
  },
} as const

// 型を自動生成（コンポーネント側で補完が効く）
export type ImageKeys = typeof IMAGES
