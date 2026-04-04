type Props = {
  englishLabel: string
  japaneseTitle: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeader({ englishLabel, japaneseTitle, align = 'center', light = false }: Props) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <p className={`section-label text-sm mb-2 ${light ? 'text-bg/50' : 'text-primary'}`}>
        {englishLabel}
      </p>
      <h2
        className={`font-serif text-[36px] md:text-[44px] font-bold leading-tight ${
          light ? 'text-bg' : 'text-text'
        }`}
      >
        {japaneseTitle}
      </h2>
    </div>
  )
}
