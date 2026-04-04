import { PlaceholderImage } from './PlaceholderImage'
import type { Product } from '@/types'

type Props = {
  product: Product
}

export function ProductCard({ product }: Props) {
  return (
    <div className="min-w-[300px] max-w-[350px] flex-shrink-0">
      <PlaceholderImage
        width={350}
        height={250}
        label={`${product.name}の画像`}
        className="w-full mb-5"
      />
      <h3 className="font-serif text-lg font-bold text-text mb-2">{product.name}</h3>
      <p className="text-sm text-text-light leading-relaxed">{product.desc}</p>
    </div>
  )
}
