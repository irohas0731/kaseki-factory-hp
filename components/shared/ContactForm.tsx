'use client'

export function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-medium text-text mb-2">
            会社名 <span className="text-red-500 text-xs">必須</span>
          </label>
          <input
            type="text"
            placeholder="株式会社〇〇"
            className="w-full border border-border px-4 py-3 text-sm bg-bg focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-2">
            担当者名 <span className="text-red-500 text-xs">必須</span>
          </label>
          <input
            type="text"
            placeholder="山田 太郎"
            className="w-full border border-border px-4 py-3 text-sm bg-bg focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm font-medium text-text mb-2">
            電話番号
          </label>
          <input
            type="tel"
            placeholder="06-0000-0000"
            className="w-full border border-border px-4 py-3 text-sm bg-bg focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-2">
            メールアドレス <span className="text-red-500 text-xs">必須</span>
          </label>
          <input
            type="email"
            placeholder="info@example.co.jp"
            className="w-full border border-border px-4 py-3 text-sm bg-bg focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-2">
          お問い合わせ種別 <span className="text-red-500 text-xs">必須</span>
        </label>
        <select className="w-full border border-border px-4 py-3 text-sm bg-bg focus:outline-none focus:border-primary transition-colors text-text-muted">
          <option value="">選択してください</option>
          <option value="product">製品について</option>
          <option value="estimate">お見積りのご依頼</option>
          <option value="recruit">採用について</option>
          <option value="other">その他</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-text mb-2">
          お問い合わせ内容 <span className="text-red-500 text-xs">必須</span>
        </label>
        <textarea
          rows={6}
          placeholder="お問い合わせ内容をご記入ください"
          className="w-full border border-border px-4 py-3 text-sm bg-bg focus:outline-none focus:border-primary transition-colors resize-vertical"
        />
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-primary text-bg px-16 py-4 text-sm font-medium hover:bg-primary-dark transition-colors"
        >
          送信する
        </button>
      </div>
    </form>
  )
}
