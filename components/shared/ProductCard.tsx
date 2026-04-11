import Image from 'next/image'
import type { Product } from '@/types'
import { IMAGES } from '@/lib/images'

type Props = {
  product: Product
}

const productImageMap: Record<string, string> = {
  'product-a': IMAGES.productSlider.productA,
  'product-b': IMAGES.productSlider.productB,
  'product-c': IMAGES.productSlider.productC,
  'product-d': IMAGES.productSlider.productD,
  'product-e': IMAGES.productSlider.productE,
}

export function ProductCard({ product }: Props) {
  const src = productImageMap[product.id] ?? IMAGES.productSlider.productA

  return (
    <div className="min-w-[300px] max-w-[350px] flex-shrink-0">
      <div className="relative w-full mb-5" style={{ aspectRatio: '350/250' }}>
        <Image
          src={src}
          alt={`${product.name}の画像`}
          fill
          className="object-cover"
          sizes="350px"
        />
      </div>
      <h3 className="font-serif text-lg font-bold text-text mb-2">{product.name}</h3>
      <p className="text-sm text-text-light leading-relaxed">{product.desc}</p>
    </div>
  )
}
