type Props = {
  englishTitle: string
  japaneseTitle: string
}

export function PageHero({ englishTitle, japaneseTitle }: Props) {
  return (
    <section className="relative bg-primary-dark pt-20 overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full border border-primary-light/10 translate-y-1/2 -translate-x-1/4" />
      <div className="absolute top-1/2 left-1/3 w-px h-32 bg-primary-light/10 -translate-y-1/2 rotate-12" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-16 md:py-24">
        <p className="section-label text-sm text-bg/40 mb-3">{englishTitle}</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-bg">
          {japaneseTitle}
        </h1>
      </div>
    </section>
  )
}
