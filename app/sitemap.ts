import type { MetadataRoute } from 'next';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/locations`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/areas`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/problems`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/surfaces`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms-conditions`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Service pages
  const services = [
    'pressure-washing',
    'driveway-cleaning',
    'roof-cleaning',
    'gutter-cleaning',
    'window-cleaning',
    'render-cleaning',
    'soft-washing',
    'moss-removal',
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Location-specific service pages (gutter cleaning)
  const gutterLocations = [
    'skelmersdale',
    'warrington',
    'liverpool',
    'manchester',
    'st-helens',
    'widnes',
    'wigan',
    'golborne',
    'huyton',
    'lymm',
    'newton-le-willows',
  ];

  const gutterLocationPages: MetadataRoute.Sitemap = gutterLocations.map((location) => ({
    url: `${BASE_URL}/services/gutter-cleaning/${location}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Location pages
  const locations = [
    'newton-le-willows',
    'warrington',
    'st-helens',
    'widnes',
    'liverpool',
    'manchester',
    'golborne',
    'huyton',
    'lymm',
    'wigan',
    'skelmersdale',
    'greater-manchester',
  ];

  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${BASE_URL}/locations/${location}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Area pages
  const areaPages: MetadataRoute.Sitemap = locations.map((area) => ({
    url: `${BASE_URL}/areas/${area}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...gutterLocationPages,
    ...locationPages,
    ...areaPages,
  ];
}
