import type { Metadata } from 'next';
import ServiceDynamicClient from './ServiceDynamicClient';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';

// Display names for location slugs
const locationDisplayNames: Record<string, string> = {
  'skelmersdale': 'Skelmersdale',
  'warrington': 'Warrington',
  'liverpool': 'Liverpool',
  'manchester': 'Manchester',
  'st-helens': 'St Helens',
  'widnes': 'Widnes',
  'wigan': 'Wigan',
  'golborne': 'Golborne',
  'huyton': 'Huyton',
  'lymm': 'Lymm',
  'newton-le-willows': 'Newton-le-Willows',
};

// Display names for service slugs
const serviceDisplayNames: Record<string, string> = {
  'pressure-washing': 'Pressure Washing',
  'driveway-cleaning': 'Driveway Cleaning',
  'roof-cleaning': 'Roof Cleaning',
  'gutter-cleaning': 'Gutter Cleaning',
  'window-cleaning': 'Window Cleaning',
  'render-cleaning': 'Render Cleaning',
  'soft-washing': 'Soft Washing',
  'moss-removal': 'Moss Removal',
};

// Metadata for location-specific service pages
const locationMeta: Record<string, Record<string, { title: string; description: string }>> = {
  'gutter-cleaning': {
    'skelmersdale': {
      title: 'Gutter Cleaning Skelmersdale | R.R.M External Cleaning',
      description: 'Professional gutter cleaning in Skelmersdale. Fully insured gutter cleaners using vacuum systems for residential and commercial properties. Call 07845 463877.',
    },
    'warrington': {
      title: 'Gutter Cleaning Warrington | Professional Roof Gutter Cleaning',
      description: 'Professional gutter cleaning in Warrington. Expert downpipe clearing, debris removal, and roofline maintenance. Call for free quote: 07845 463877.',
    },
    'liverpool': {
      title: 'Gutter Cleaning Liverpool | R.R.M External Cleaning',
      description: 'Professional gutter cleaning in Liverpool. Fully insured service for residential and commercial properties. Call 07845 463877.',
    },
    'manchester': {
      title: 'Gutter Cleaning Manchester | R.R.M External Cleaning',
      description: 'Professional gutter cleaning in Manchester. Fully insured gutter cleaners for homes and businesses. Call 07845 463877.',
    },
    'st-helens': {
      title: 'Gutter Cleaning St Helens | R.R.M External Cleaning',
      description: 'Professional gutter cleaning in St Helens. Fully insured service with gutter vacuum systems. Call 07845 463877.',
    },
    'widnes': {
      title: 'Gutter Cleaning Widnes | R.R.M External Cleaning',
      description: 'Professional gutter cleaning in Widnes. Fully insured gutter cleaners for residential and commercial properties. Call 07845 463877.',
    },
    'wigan': {
      title: 'Gutter Cleaning Wigan | R.R.M External Cleaning',
      description: 'Professional gutter cleaning in Wigan. Fully insured service for homes and businesses. Call 07845 463877.',
    },
    'golborne': {
      title: 'Gutter Cleaning Golborne | R.R.M External Cleaning',
      description: 'Professional gutter cleaning in Golborne. Fully insured gutter cleaners using vacuum systems. Call 07845 463877.',
    },
    'huyton': {
      title: 'Gutter Cleaning Huyton | R.R.M External Cleaning',
      description: 'Professional gutter cleaning in Huyton. Fully insured service for residential and commercial properties. Call 07845 463877.',
    },
    'lymm': {
      title: 'Gutter Cleaning Lymm | R.R.M External Cleaning',
      description: 'Professional gutter cleaning in Lymm. Fully insured gutter cleaners for homes and businesses. Call 07845 463877.',
    },
    'newton-le-willows': {
      title: 'Gutter Cleaning Newton-le-Willows | R.R.M External Cleaning',
      description: 'Professional gutter cleaning in Newton-le-Willows. Fully insured local gutter cleaners since 2016. Call 07845 463877.',
    },
  },
};

// Generic service metadata
const serviceMeta: Record<string, { title: string; description: string }> = {
  'pressure-washing': {
    title: 'Professional Pressure Washing Services',
    description: 'Professional high-pressure cleaning for driveways, patios, and hard surfaces. Fully insured service since 2016. Call 07845 463877.',
  },
  'driveway-cleaning': {
    title: 'Professional Driveway Cleaning Services',
    description: 'Restore your driveway to its original condition. Block paving, concrete, tarmac, and natural stone. Call 07845 463877.',
  },
  'roof-cleaning': {
    title: 'Professional Roof Cleaning Services',
    description: 'Safe moss and algae removal for all roof types using soft washing techniques. Fully insured. Call 07845 463877.',
  },
  'gutter-cleaning': {
    title: 'Professional Gutter Cleaning Services',
    description: 'Prevent water damage with professional gutter maintenance. Vacuum systems and downpipe clearing. Call 07845 463877.',
  },
  'window-cleaning': {
    title: 'Professional Window Cleaning Services',
    description: 'Crystal-clear windows using pure water technology. Residential and commercial. Call 07845 463877.',
  },
  'render-cleaning': {
    title: 'Professional Render Cleaning Services',
    description: 'Specialist soft washing for rendered walls and facades. Safe, effective algae removal. Call 07845 463877.',
  },
  'soft-washing': {
    title: 'Professional Soft Washing Services',
    description: 'Low-pressure chemical cleaning for delicate surfaces including roofs, render, and brickwork. Call 07845 463877.',
  },
  'moss-removal': {
    title: 'Professional Moss Removal Services',
    description: 'Specialist moss and algae removal from roofs and surfaces with biocidal treatment. Call 07845 463877.',
  },
};

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const serviceSlug = slug?.[0] || '';
  const locationSlug = slug?.[1];

  // Check for location-specific metadata first
  if (locationSlug && locationMeta[serviceSlug]?.[locationSlug]) {
    const meta = locationMeta[serviceSlug][locationSlug];
    const canonicalUrl = `https://rrmexternalcleaningspecialist.co.uk/services/${serviceSlug}/${locationSlug}`;
    return {
      title: meta.title,
      description: meta.description,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: meta.title,
        description: meta.description,
        url: canonicalUrl,
        type: 'website',
        locale: 'en_GB',
        siteName: 'R.R.M Exterior Cleaning',
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.title,
        description: meta.description,
      },
    };
  }

  // Fall back to generic service metadata
  if (serviceMeta[serviceSlug]) {
    const meta = serviceMeta[serviceSlug];
    const canonicalUrl = `https://rrmexternalcleaningspecialist.co.uk/services/${serviceSlug}`;
    return {
      title: meta.title,
      description: meta.description,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: meta.title,
        description: meta.description,
        url: canonicalUrl,
        type: 'website',
        locale: 'en_GB',
        siteName: 'R.R.M Exterior Cleaning',
      },
    };
  }

  return {
    title: 'Professional Cleaning Services',
    description: 'Professional exterior cleaning services by R.R.M External Cleaning Specialist.',
  };
}

export default async function ServiceDynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const serviceSlug = slug?.[0] || '';
  const locationSlug = slug?.[1];

  const serviceName = serviceDisplayNames[serviceSlug] || serviceSlug;
  const locationName = locationSlug ? locationDisplayNames[locationSlug] : null;

  // Build page-level JSON-LD schemas (server-rendered)
  const schemas: object[] = [];

  if (locationName) {
    const pageUrl = `${BASE_URL}/services/${serviceSlug}/${locationSlug}`;

    // Service schema referencing root LocalBusiness via @id
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${serviceName} ${locationName}`,
      description: locationMeta[serviceSlug]?.[locationSlug!]?.description || `Professional ${serviceName.toLowerCase()} service in ${locationName}.`,
      provider: {
        '@id': `${BASE_URL}/#localbusiness`,
      },
      areaServed: {
        '@type': 'City',
        name: locationName,
        containedInPlace: {
          '@type': 'Country',
          name: 'United Kingdom',
        },
      },
      serviceType: serviceName,
      url: pageUrl,
    });

    // BreadcrumbList schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: BASE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: serviceName,
          item: `${BASE_URL}/services/${serviceSlug}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: locationName,
          item: pageUrl,
        },
      ],
    });

    // VideoObject schema for pages with embedded video
    if (serviceSlug === 'gutter-cleaning' && locationSlug === 'skelmersdale') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Professional Gutter Cleaning and Exterior Cleaning in Skelmersdale by R.R.M External Cleaning Specialist',
        description: 'Watch R.R.M External Cleaning Specialist carry out professional gutter cleaning and exterior cleaning work in Skelmersdale, Lancashire. This video demonstrates our equipment, techniques, and the quality of results we deliver on residential and commercial properties.',
        thumbnailUrl: 'https://img.youtube.com/vi/i4B89TGkM5Y/maxresdefault.jpg',
        uploadDate: '2024-01-15',
        embedUrl: 'https://www.youtube.com/embed/i4B89TGkM5Y',
        contentUrl: 'https://www.youtube.com/watch?v=i4B89TGkM5Y',
        publisher: {
          '@id': `${BASE_URL}/#localbusiness`,
        },
        potentialAction: {
          '@type': 'WatchAction',
          target: 'https://www.youtube.com/watch?v=i4B89TGkM5Y',
        },
      });
    }
  } else {
    // Generic service page breadcrumb
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: BASE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: `${BASE_URL}/services`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: serviceName,
          item: `${BASE_URL}/services/${serviceSlug}`,
        },
      ],
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ServiceDynamicClient />
    </>
  );
}
