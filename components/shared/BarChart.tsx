import type { BarChartData } from '@/types'

type Props = {
  data: BarChartData[]
  unit?: string
}

export function BarChart({ data, unit = '億円' }: Props) {
  const maxValue = Math.max(...data.map((d) => d.value))
  const chartHeight = 300
  const barWidth = 40
  const gap = 16

  return (
    <div className="overflow-x-auto">
      <svg
        width={data.length * (barWidth + gap) + 80}
        height={chartHeight + 80}
        viewBox={`0 0 ${data.length * (barWidth + gap) + 80} ${chartHeight + 80}`}
        className="min-w-full"
      >
        {/* Y軸ガイドライン */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
          const y = chartHeight - chartHeight * ratio + 20
          const value = Math.round(maxValue * ratio)
          return (
            <g key={ratio}>
              <line
                x1="60"
                y1={y}
                x2={data.length * (barWidth + gap) + 60}
                y2={y}
                stroke="var(--color-border)"
                strokeWidth="1"
                strokeDasharray={ratio === 0 ? '0' : '4,4'}
              />
              <text
                x="55"
                y={y + 4}
                textAnchor="end"
                fill="var(--color-text-muted)"
                fontSize="11"
                fontFamily="var(--font-inter)"
              >
                {value}
              </text>
            </g>
          )
        })}

        {/* バー */}
        {data.map((d, i) => {
          const barHeight = (d.value / maxValue) * chartHeight
          const x = i * (barWidth + gap) + 70
          const y = chartHeight - barHeight + 20

          return (
            <g key={d.year}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill="var(--color-primary)"
                rx="2"
              />
              <text
                x={x + barWidth / 2}
                y={chartHeight + 40}
                textAnchor="middle"
                fill="var(--color-text-muted)"
                fontSize="11"
                fontFamily="var(--font-inter)"
              >
                {d.year}
              </text>
              <text
                x={x + barWidth / 2}
                y={y - 8}
                textAnchor="middle"
                fill="var(--color-text)"
                fontSize="11"
                fontWeight="600"
                fontFamily="var(--font-inter)"
              >
                {d.value}
              </text>
            </g>
          )
        })}

        {/* 単位 */}
        <text
          x="10"
          y="15"
          fill="var(--color-text-muted)"
          fontSize="11"
        >
          ({unit})
        </text>
      </svg>
    </div>
  )
}
