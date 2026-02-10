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
  'exterior-cleaning': 'Exterior Cleaning',
};

// Metadata for location-specific service pages
const locationMeta: Record<string, Record<string, { title: string; description: string }>> = {
  'pressure-washing': {
    'liverpool': {
      title: 'Pressure Washing Liverpool | R.R.M External Cleaning',
      description: 'Professional pressure washing in Liverpool. Driveway cleaning, patio cleaning, commercial pressure washing, and exterior cleaning across Merseyside. Fully insured since 2016. Call 07845 463877.',
    },
    'warrington': {
      title: 'Pressure Washing Warrington | R.R.M External Cleaning',
      description: 'Professional pressure washing in Warrington. Driveway cleaning, patio cleaning, commercial pressure washing, and exterior cleaning across Cheshire. Fully insured since 2016. Call 07845 463877.',
    },
  },
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
  'exterior-cleaning': {
    'wigan': {
      title: 'Exterior Cleaning Services in Wigan | Professional Property Maintenance',
      description: 'Professional exterior cleaning in Wigan. Pressure washing, soft washing, driveway, roof & gutter cleaning. Free quote: 07845 463877',
    },
    'skelmersdale': {
      title: 'Exterior Cleaning Skelmersdale | R.R.M External Cleaning',
      description: 'Professional exterior cleaning in Skelmersdale. Pressure washing, soft washing, and property maintenance. Call 07845 463877.',
    },
    'warrington': {
      title: 'Exterior Cleaning Warrington | R.R.M External Cleaning',
      description: 'Professional exterior cleaning in Warrington. Pressure washing, soft washing, driveway and roof cleaning. Call 07845 463877.',
    },
    'liverpool': {
      title: 'Exterior Cleaning Liverpool | R.R.M External Cleaning',
      description: 'Professional exterior cleaning in Liverpool. Pressure washing, soft washing, and complete property maintenance. Call 07845 463877.',
    },
    'manchester': {
      title: 'Exterior Cleaning Manchester | R.R.M External Cleaning',
      description: 'Professional exterior cleaning in Manchester. Pressure washing, soft washing, driveway and roof cleaning. Call 07845 463877.',
    },
    'st-helens': {
      title: 'Exterior Cleaning St Helens | R.R.M External Cleaning',
      description: 'Professional exterior cleaning in St Helens. Pressure washing, soft washing, and gutter cleaning services. Call 07845 463877.',
    },
    'widnes': {
      title: 'Exterior Cleaning Widnes | R.R.M External Cleaning',
      description: 'Professional exterior cleaning in Widnes. Pressure washing, soft washing, and property maintenance. Call 07845 463877.',
    },
    'golborne': {
      title: 'Exterior Cleaning Golborne | R.R.M External Cleaning',
      description: 'Professional exterior cleaning in Golborne. Pressure washing, soft washing, and driveway cleaning. Call 07845 463877.',
    },
    'huyton': {
      title: 'Exterior Cleaning Huyton | R.R.M External Cleaning',
      description: 'Professional exterior cleaning in Huyton. Pressure washing, soft washing, and complete property maintenance. Call 07845 463877.',
    },
    'lymm': {
      title: 'Exterior Cleaning Lymm | R.R.M External Cleaning',
      description: 'Professional exterior cleaning in Lymm. Pressure washing, soft washing, and property maintenance. Call 07845 463877.',
    },
    'newton-le-willows': {
      title: 'Exterior Cleaning Newton-le-Willows | R.R.M External Cleaning',
      description: 'Professional exterior cleaning in Newton-le-Willows. Pressure washing, soft washing, and driveway cleaning. Call 07845 463877.',
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
  'exterior-cleaning': {
    title: 'Professional Exterior Cleaning Services',
    description: 'Complete exterior cleaning including pressure washing, soft washing, driveway, roof, and gutter cleaning. Call 07845 463877.',
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
    if (serviceSlug === 'pressure-washing' && locationSlug === 'warrington') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Professional Pressure Washing and Exterior Cleaning in Warrington by R.R.M External Cleaning Specialist',
        description: 'Watch R.R.M External Cleaning Specialist carry out professional pressure washing and exterior cleaning work in Warrington, Cheshire. This video demonstrates our commercial-grade equipment, careful technique, and quality results on residential and commercial properties.',
        thumbnailUrl: 'https://img.youtube.com/vi/t8QfsOEQrgM/maxresdefault.jpg',
        uploadDate: '2024-01-15',
        embedUrl: 'https://www.youtube.com/embed/t8QfsOEQrgM',
        contentUrl: 'https://www.youtube.com/watch?v=t8QfsOEQrgM',
        publisher: {
          '@id': `${BASE_URL}/#localbusiness`,
        },
        potentialAction: {
          '@type': 'WatchAction',
          target: 'https://www.youtube.com/watch?v=t8QfsOEQrgM',
        },
      });

      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does pressure washing cost in Warrington?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pricing depends on the area size, surface type, and contamination level. A typical residential driveway clean in Warrington starts from around £150, with larger or heavily contaminated areas costing more. We provide free, written quotes after assessing your property.',
            },
          },
          {
            '@type': 'Question',
            name: 'Will pressure washing damage my driveway or patio?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not when carried out by experienced professionals. We assess every surface before cleaning and select the correct pressure, nozzle, and technique for the material. Block paving, natural stone, concrete, tarmac, and render each require a different approach.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between pressure washing and soft washing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pressure washing uses high-pressure water to physically remove contamination from hard surfaces such as driveways, patios, and concrete. Soft washing applies specialist cleaning chemicals at low pressure to treat surfaces that high pressure would damage, such as render, roofing, and painted walls.',
            },
          },
          {
            '@type': 'Question',
            name: 'How often should I have my driveway pressure washed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "In Warrington's climate, most driveways benefit from annual cleaning. Properties with heavy tree coverage, north-facing surfaces, or persistent shade may need cleaning every six to nine months. Applying a protective sealant after cleaning extends the interval between cleans significantly.",
            },
          },
          {
            '@type': 'Question',
            name: 'Do you re-sand block paving after cleaning?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Pressure washing block paving inevitably displaces some jointing sand. We carry kiln-dried sand and re-fill all joints after cleaning as standard. This is essential for maintaining the structural integrity of the paving.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer commercial pressure washing contracts in Warrington?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We provide scheduled maintenance contracts for commercial properties across Warrington, including business parks, retail units, and industrial estates. Regular cleaning on a monthly, quarterly, or bi-annual schedule keeps premises consistently presentable.',
            },
          },
        ],
      });
    }

    if (serviceSlug === 'pressure-washing' && locationSlug === 'liverpool') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'Professional Pressure Washing and Exterior Cleaning in Liverpool by R.R.M External Cleaning Specialist',
        description: 'Watch R.R.M External Cleaning Specialist carry out professional pressure washing and exterior cleaning work in Liverpool, Merseyside. This video demonstrates our commercial-grade equipment, careful technique, and quality results on residential and commercial properties.',
        thumbnailUrl: 'https://img.youtube.com/vi/t8QfsOEQrgM/maxresdefault.jpg',
        uploadDate: '2024-01-15',
        embedUrl: 'https://www.youtube.com/embed/t8QfsOEQrgM',
        contentUrl: 'https://www.youtube.com/watch?v=t8QfsOEQrgM',
        publisher: {
          '@id': `${BASE_URL}/#localbusiness`,
        },
        potentialAction: {
          '@type': 'WatchAction',
          target: 'https://www.youtube.com/watch?v=t8QfsOEQrgM',
        },
      });

      // FAQPage schema for pressure washing Liverpool
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does pressure washing cost in Liverpool?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Prices depend on the size of the area, the surface type, and the level of contamination. A typical residential driveway clean in Liverpool starts from around £150, while larger or heavily contaminated areas cost more. We provide free, written quotes after assessing your property.',
            },
          },
          {
            '@type': 'Question',
            name: 'Will pressure washing damage my driveway or patio?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Not when done professionally. We assess every surface before cleaning and select the correct pressure, nozzle, and technique for the material. Block paving, natural stone, concrete, tarmac, and render all require different approaches.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the difference between pressure washing and soft washing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Pressure washing uses high-pressure water to physically remove contamination from hard surfaces like driveways, patios, and concrete. Soft washing uses low-pressure application of specialist cleaning chemicals to treat surfaces that high pressure would damage, such as render, roofing, and painted walls.',
            },
          },
          {
            '@type': 'Question',
            name: 'How often should I have my driveway pressure washed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "In Liverpool's climate, most driveways benefit from annual cleaning. Properties with heavy tree coverage, north-facing surfaces, or persistent shade may need cleaning every six to nine months. Applying a sealant after cleaning extends the interval between cleans significantly.",
            },
          },
          {
            '@type': 'Question',
            name: 'Do you re-sand block paving after cleaning?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Pressure washing block paving inevitably removes some of the jointing sand. We carry kiln-dried sand and re-fill all joints after cleaning as standard. This is essential for maintaining the structural integrity of the paving.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you offer commercial pressure washing contracts in Liverpool?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We provide scheduled maintenance contracts for commercial properties across Liverpool. Regular cleaning on a monthly, quarterly, or bi-annual basis keeps premises consistently clean and typically costs less per visit than one-off reactive cleans.',
            },
          },
        ],
      });
    }

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
