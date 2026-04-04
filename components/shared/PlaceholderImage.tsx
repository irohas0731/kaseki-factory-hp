type Props = {
  width: number
  height: number
  label: string
  className?: string
  bgColor?: string
}

const colors = [
  'bg-primary/15',
  'bg-primary-light/15',
  'bg-secondary/15',
  'bg-primary-dark/15',
  'bg-text-muted/10',
]

export function PlaceholderImage({ width, height, label, className = '', bgColor }: Props) {
  const hashCode = label.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const colorClass = bgColor ?? colors[hashCode % colors.length]

  return (
    <div
      className={`relative flex items-center justify-center ${colorClass} ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
      role="img"
      aria-label={`プレースホルダー: ${label}`}
    >
      <div className="text-center px-4">
        <p className="text-text-muted text-sm font-medium">{label}</p>
        <p className="text-text-muted/60 text-xs mt-1">
          推奨サイズ: {width} × {height}px
        </p>
      </div>
    </div>
  )
}
