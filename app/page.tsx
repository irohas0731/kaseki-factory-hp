import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/siteConfig'
import { IMAGES } from '@/lib/images'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ProductSlider } from '@/components/shared/ProductSlider'
import { NewsTab } from '@/components/shared/NewsTab'
import { ScrollAnimator } from '@/components/shared/ScrollAnimator'

export default function HomePage() {
  return (
    <>
      <ScrollAnimator />

      {/* ===== ヒーロー ===== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero.main}
            alt="メインビジュアル"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/40 via-primary-dark/20 to-primary-dark/60" />
        {/* 背景装飾 */}
        <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full border border-bg/5" />
        <div className="absolute bottom-40 left-10 w-[200px] h-[200px] rounded-full bg-primary/10" />

        <div className="relative z-10 text-center px-6">
          <p className="section-label text-lg md:text-xl text-bg/60 mb-6 tracking-[0.2em]">
            Crafting the Future with Precision
          </p>
          <h1 className="font-serif text-[48px] md:text-[72px] lg:text-[80px] font-bold text-bg leading-[1.2] mb-8">
            {siteConfig.catchcopy}
          </h1>
          <p className="text-bg/70 text-lg max-w-[600px] mx-auto">
            確かな技術と最新設備で、ものづくりの未来を切り拓く
          </p>
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="section-label text-xs text-bg/50 tracking-[0.3em]">SCROLL</span>
          <div className="w-px h-12 bg-bg/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-bg/80 animate-[scrollDown_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </section>

      {/* ===== 私たちの強み ===== */}
      <section className="py-[120px] md:py-[160px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-bg/30 -translate-y-1/3 translate-x-1/3" />
        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="fade-in-up">
            <SectionHeader englishLabel="STRENGTH" japaneseTitle="私たちの強み" />
            <p className="text-center text-text-light max-w-[700px] mx-auto mb-16 leading-relaxed">
              半世紀以上にわたり培ってきた加工技術と品質管理体制で、
              お客様のものづくりを支えています。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {([
              { title: '品質管理体制', src: IMAGES.homeStrength.quality },
              { title: '最新設備', src: IMAGES.homeStrength.equipment },
              { title: '技術力', src: IMAGES.homeStrength.skill },
            ] as const).map((item, i) => (
              <div key={i} className="fade-in-up relative group">
                <div className="relative w-full" style={{ aspectRatio: '600/400' }}>
                  <Image
                    src={item.src}
                    alt={`強み: ${item.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <span className="section-label text-sm text-bg/50">0{i + 1}</span>
                    <h3 className="font-serif text-xl text-bg font-bold mt-1">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/strength"
              className="inline-flex items-center gap-3 text-primary font-medium hover:gap-5 transition-all"
            >
              <span>Read More</span>
              <span className="w-8 h-px bg-primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 技術・設備紹介 ===== */}
      <section className="py-[120px] md:py-[160px] bg-bg-off relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full border border-primary/5 translate-y-1/2 -translate-x-1/4" />
        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-[55%] flex gap-4 fade-in-up">
              <div className="w-1/2 pt-12">
                <div className="relative w-full" style={{ aspectRatio: '400/500' }}>
                  <Image
                    src={IMAGES.homeTechnology.machine}
                    alt="加工機械"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <div className="relative w-full" style={{ aspectRatio: '400/500' }}>
                  <Image
                    src={IMAGES.homeTechnology.inspection}
                    alt="検査機器"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[45%] fade-in-up">
              <SectionHeader englishLabel="TECHNOLOGY" japaneseTitle="技術・設備紹介" align="left" />
              <p className="text-text-light leading-relaxed mb-8">
                最新鋭の設備を導入し、高精度な加工から品質検査まで一貫した生産体制を構築しています。
                お客様の多様なニーズにお応えするため、設備の更新・拡充を継続的に行っています。
              </p>
              <Link
                href="/technology"
                className="inline-flex items-center gap-3 text-primary font-medium hover:gap-5 transition-all"
              >
                <span>Read More</span>
                <span className="w-8 h-px bg-primary" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 製品紹介 ===== */}
      <section className="py-[120px] md:py-[160px] relative overflow-hidden">
        <div className="absolute top-20 left-20 w-[300px] h-[300px] rounded-full bg-secondary/5" />
        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="fade-in-up">
            <SectionHeader englishLabel="PRODUCTS" japaneseTitle="製品紹介" />
            <p className="text-center text-text-light max-w-[700px] mx-auto mb-16 leading-relaxed">
              多品種少量生産から量産まで、幅広いニーズに対応した製品をご提供しています。
            </p>
          </div>
          <div className="fade-in-up">
            <ProductSlider products={siteConfig.products} />
          </div>
          <div className="text-center mt-12">
            <Link
              href="/product"
              className="inline-flex items-center gap-3 text-primary font-medium hover:gap-5 transition-all"
            >
              <span>Read More</span>
              <span className="w-8 h-px bg-primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== お知らせ ===== */}
      <section className="py-[120px] md:py-[160px] bg-bg-off">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="fade-in-up">
            <SectionHeader englishLabel="NEWS" japaneseTitle="お知らせ" />
          </div>
          <div className="fade-in-up">
            <NewsTab />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/news"
              className="inline-flex items-center gap-3 text-primary font-medium hover:gap-5 transition-all"
            >
              <span>Read More</span>
              <span className="w-8 h-px bg-primary" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 会社情報 + アクセス 2カラムバナー ===== */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <Link href="/company" className="relative group overflow-hidden block">
          <div className="relative w-full min-h-[300px] md:min-h-[400px]" style={{ aspectRatio: '960/500' }}>
            <Image
              src={IMAGES.banners.company}
              alt="会社情報"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute inset-0 bg-primary-dark/60 group-hover:bg-primary-dark/70 transition-colors flex items-center justify-center">
            <div className="text-center">
              <p className="section-label text-sm text-bg/50 mb-2">COMPANY</p>
              <h2 className="font-serif text-3xl text-bg font-bold mb-4">会社情報</h2>
              <span className="inline-flex items-center gap-3 text-bg/70 text-sm group-hover:gap-5 transition-all">
                <span>Read More</span>
                <span className="w-6 h-px bg-bg/70" />
              </span>
            </div>
          </div>
        </Link>
        <Link href="/company/access" className="relative group overflow-hidden block">
          <div className="relative w-full min-h-[300px] md:min-h-[400px]" style={{ aspectRatio: '960/500' }}>
            <Image
              src={IMAGES.banners.access}
              alt="アクセス"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute inset-0 bg-primary-dark/60 group-hover:bg-primary-dark/70 transition-colors flex items-center justify-center">
            <div className="text-center">
              <p className="section-label text-sm text-bg/50 mb-2">ACCESS</p>
              <h2 className="font-serif text-3xl text-bg font-bold mb-4">アクセス</h2>
              <span className="inline-flex items-center gap-3 text-bg/70 text-sm group-hover:gap-5 transition-all">
                <span>Read More</span>
                <span className="w-6 h-px bg-bg/70" />
              </span>
            </div>
          </div>
        </Link>
      </section>

      <style>{`
        @keyframes scrollDown {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </>
  )
}
