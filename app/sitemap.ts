import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.kaseki-industry.example.jp'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/strength',
    '/technology',
    '/product',
    '/company',
    '/company/message',
    '/company/outline',
    '/company/history',
    '/company/highlight',
    '/company/access',
    '/news',
    '/contact',
    '/privacy',
  ]

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/news' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : 0.8,
  }))
}
