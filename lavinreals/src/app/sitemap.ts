import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://lavinreals.es', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://lavinreals.es/cartera', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://lavinreals.es/acerca', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://lavinreals.es/contacto', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://lavinreals.es/noticias', lastModified: new Date(), changeFrequency: 'daily', priority: 0.6 },
    { url: 'https://lavinreals.es/legal', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]
}
