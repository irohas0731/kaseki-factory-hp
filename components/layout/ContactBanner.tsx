import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'

export function ContactBanner() {
  return (
    <section className="relative bg-primary py-20 overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-light/10 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-dark/20 translate-y-1/2 -translate-x-1/4" />

      <div className="relative mx-auto max-w-[1000px] px-6 text-center">
        <p className="section-label text-sm text-bg/60 mb-3">CONTACT</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-bg mb-8">
          お問い合わせ
        </h2>
        <p className="text-bg/80 mb-10 leading-relaxed">
          製品に関するご質問、お見積りのご依頼など、<br className="hidden sm:block" />
          お気軽にお問い合わせください。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div>
            <p className="text-sm text-bg/60 mb-1">お電話でのお問い合わせ</p>
            <p className="section-label text-3xl font-bold text-bg">
              {siteConfig.phone}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-bg text-primary px-10 py-4 font-medium text-lg hover:bg-bg-off transition-colors"
          >
            お問い合わせフォーム
          </Link>
        </div>
      </div>
    </section>
  )
}
