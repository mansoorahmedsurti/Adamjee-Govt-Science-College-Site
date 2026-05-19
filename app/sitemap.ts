import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/admissions`,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/history`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]
}
