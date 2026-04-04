import Link from 'next/link'
import { siteConfig, navigation, fullAddress } from '@/lib/siteConfig'

export function Footer() {
  return (
    <footer className="bg-bg-dark text-bg/80">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 pb-16 border-b border-bg/10">
          {/* 会社情報 */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-xl font-bold text-bg block">
                {siteConfig.companyName}
              </span>
              <span className="section-label text-xs text-bg/50">
                {siteConfig.companyNameEn}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-bg/60 mb-4">
              {fullAddress}
            </p>
            <p className="text-sm text-bg/60">
              TEL: {siteConfig.phone}
            </p>
            <p className="text-sm text-bg/60">
              FAX: {siteConfig.fax}
            </p>
          </div>

          {/* ナビゲーション */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {navigation.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-bg/90 hover:text-secondary transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-3 space-y-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="text-xs text-bg/50 hover:text-secondary transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div>
              <Link
                href="/contact"
                className="text-sm font-medium text-bg/90 hover:text-secondary transition-colors"
              >
                お問い合わせ
              </Link>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-xs text-bg/50 hover:text-secondary transition-colors"
                  >
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-bg/40">
            &copy; {new Date().getFullYear()} {siteConfig.companyName} All Rights Reserved.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-bg/40 hover:text-bg/70 transition-colors"
          >
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  )
}
