import { PlaceholderImage } from './PlaceholderImage'
import type { StrengthItem } from '@/types'

type Props = {
  item: StrengthItem
  reverse?: boolean
}

export function StrengthCard({ item, reverse = false }: Props) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}>
      <div className={`w-full ${reverse ? 'lg:w-[45%]' : 'lg:w-[55%]'}`}>
        <PlaceholderImage
          width={800}
          height={500}
          label={item.imageLabel}
          className="w-full"
        />
      </div>
      <div className={`w-full ${reverse ? 'lg:w-[55%]' : 'lg:w-[45%]'}`}>
        <span className="section-label text-6xl font-bold text-primary/10 block mb-2">
          {item.number}
        </span>
        <h3 className="font-serif text-[22px] md:text-[26px] font-bold text-text mb-4">
          {item.title}
        </h3>
        <p className="text-text-light leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  )
}
