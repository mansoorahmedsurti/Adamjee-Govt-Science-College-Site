import type { MetadataRoute } from 'next'

const defaultSiteUrl = 'https://agsckarachi.edu.pk'
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || defaultSiteUrl

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/admissions`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/history`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
