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
  'patio-cleaning': 'Patio Cleaning',
  'gutter-cleaning': 'Gutter Cleaning',
  'window-cleaning': 'Window Cleaning',
  'render-cleaning': 'Render Cleaning',
  'commercial-exterior-cleaning': 'Commercial Exterior Cleaning',
  'jet-washing': 'Jet Washing',
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

// Generic service metadata — title (≤60 chars), description (150–160 chars), keywords
const serviceMeta: Record<string, { title: string; description: string; keywords: string[] }> = {
  'pressure-washing': {
    title: 'Affordable Jet Washing Near You | R.R.M Specialist',
    description:
      'Stubborn grime, stains & algae no match for our professional jet washing. R.R.M offers affordable jet washing services near Warrington & North West. Book today!',
    keywords: [
      'pressure washing near me', 'jet washing North West', 'affordable pressure washing',
      'pressure washing Warrington', 'pressure washing Newton-le-Willows',
      'driveway pressure washing North West', 'R.R.M pressure washing',
    ],
  },
  'driveway-cleaning': {
    title: 'Affordable Driveway Cleaning Near You | R.R.M',
    description:
      'Oil stains, moss & grime on your driveway? R.R.M External Cleaning Specialist delivers affordable jet washing near Warrington & North West. Book today!',
    keywords: [
      'driveway cleaning near me', 'affordable driveway cleaning',
      'driveway cleaning Warrington', 'driveway cleaning Newton-le-Willows',
      'driveway cleaning Manchester', 'oil stain removal driveway',
      'moss removal driveway', 'block paving cleaning North West',
    ],
  },
  'roof-cleaning': {
    title: 'Affordable Roof Cleaning Near You | R.R.M',
    description:
      'Moss & algae destroying your roof tiles? R.R.M offers affordable soft wash roof cleaning across Newton-le-Willows, Warrington & Manchester. Book today!',
    keywords: [
      'roof cleaning near me', 'affordable roof cleaning North West',
      'soft wash roof cleaning Warrington', 'roof moss removal Newton-le-Willows',
      'roof cleaning Manchester', 'roof tile cleaning', 'affordable roof soft wash',
    ],
  },
  'patio-cleaning': {
    title: 'Affordable Patio Cleaning Near You | R.R.M',
    description:
      'Green algae, moss & black stains spoiling your patio? R.R.M offers affordable patio jet washing near Warrington, Newton-le-Willows & Manchester. Book today!',
    keywords: [
      'patio cleaning near me', 'affordable patio cleaning North West',
      'patio jet washing Warrington', 'patio cleaning Newton-le-Willows',
      'patio cleaning Manchester', 'patio moss removal', 'black stain removal patio',
    ],
  },
  'gutter-cleaning': {
    title: 'Affordable Gutter Cleaning Near You | R.R.M',
    description:
      'Blocked gutters causing damp & damage? R.R.M External Cleaning Specialist clears gutters affordably across Newton-le-Willows, Warrington & Manchester. Book now!',
    keywords: [
      'gutter cleaning near me', 'blocked gutters North West',
      'affordable gutter cleaning Warrington', 'gutter cleaning Newton-le-Willows',
      'gutter unblocking Manchester', 'fascia cleaning North West',
      'residential gutter cleaning North West',
    ],
  },
  'window-cleaning': {
    title: 'Affordable Window Cleaning Near You | R.R.M',
    description:
      'Grime, bird mess & streaks dulling your windows? R.R.M External Cleaning Specialist offers affordable window cleaning across the North West. Book today!',
    keywords: [
      'window cleaning near me', 'affordable window cleaning North West',
      'window cleaning Warrington', 'window cleaning Newton-le-Willows',
      'window cleaning Manchester', 'water-fed pole window cleaning',
      'commercial window cleaning North West',
    ],
  },
  'render-cleaning': {
    title: 'Affordable Render Cleaning & Sealing | R.R.M',
    description:
      "Stained, green or cracked render damaging your home's appearance? R.R.M offers affordable render cleaning & sealing across the North West. Book today!",
    keywords: [
      'render cleaning near me', 'affordable render cleaning North West',
      'render cleaning Warrington', 'render sealing Newton-le-Willows',
      'render cleaning Manchester', 'K-rend cleaning North West',
      'green render cleaning', 'exterior wall cleaning North West',
    ],
  },
  'commercial-exterior-cleaning': {
    title: 'Affordable Commercial Exterior Cleaning | R.R.M',
    description:
      'Grimy facades, stained car parks & blocked gutters costing you clients? R.R.M delivers affordable commercial exterior cleaning across North West. Get a quote!',
    keywords: [
      'commercial exterior cleaning North West', 'commercial pressure washing Warrington',
      'commercial jet washing Manchester', 'affordable commercial cleaning North West',
      'car park cleaning North West', 'facade cleaning North West',
      'industrial cleaning North West',
    ],
  },
  'jet-washing': {
    title: 'Affordable Jet Washing Near You | R.R.M Specialist',
    description:
      'Stubborn grime, stains & algae no match for our professional jet washing. R.R.M offers affordable jet washing services near Warrington & North West. Book today!',
    keywords: [
      'jet washing near me', 'affordable jet washing North West',
      'jet washing Warrington', 'jet washing Newton-le-Willows',
      'jet washing Manchester', 'jet wash driveway North West',
      'jet wash patio North West', 'professional jet washing North West',
    ],
  },
  'soft-washing': {
    title: 'Professional Soft Washing Services',
    description: 'Low-pressure chemical cleaning for delicate surfaces including roofs, render, and brickwork. Call 07845 463877.',
    keywords: ['soft washing North West', 'soft wash roof', 'soft wash render', 'low pressure cleaning North West'],
  },
  'moss-removal': {
    title: 'Professional Moss Removal Services',
    description: 'Specialist moss and algae removal from roofs and surfaces with biocidal treatment. Call 07845 463877.',
    keywords: ['moss removal near me', 'moss removal North West', 'roof moss removal', 'biocidal treatment North West'],
  },
  'exterior-cleaning': {
    title: 'Expert Exterior Cleaning North West | R.R.M Specialist',
    description:
      'Moss, grime or blocked gutters? R.R.M External Cleaning Specialist restores driveways, roofs, patios & render. Affordable & local, North West. Book now!',
    keywords: [
      'exterior cleaning North West', 'exterior cleaning near me',
      'affordable exterior cleaning', 'exterior cleaning Warrington',
      'exterior cleaning Newton-le-Willows', 'exterior cleaning Manchester',
    ],
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
      keywords: meta.keywords,
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
