import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://abhaybansal.in',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add other pages
  ]
}