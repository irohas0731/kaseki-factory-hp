import type { EquipmentItem } from '@/types'

type Props = {
  items: EquipmentItem[]
}

export function EquipmentTable({ items }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-primary text-bg">
            <th className="text-left px-6 py-4 font-medium">設備名</th>
            <th className="text-left px-6 py-4 font-medium">メーカー</th>
            <th className="text-left px-6 py-4 font-medium">型式</th>
            <th className="text-center px-6 py-4 font-medium">台数</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-bg' : 'bg-bg-off'}>
              <td className="px-6 py-4 text-text">{item.name}</td>
              <td className="px-6 py-4 text-text-light">{item.maker}</td>
              <td className="px-6 py-4 text-text-light">{item.model}</td>
              <td className="px-6 py-4 text-center text-text">{item.count}台</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
