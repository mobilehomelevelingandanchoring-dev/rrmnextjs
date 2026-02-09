import FAQPageContent from '@/pageComponents/FAQ';
import { Metadata } from 'next';

const BASE_URL = 'https://rrmexternalcleaningspecialist.co.uk';

export const metadata: Metadata = {
  title: 'FAQ | Pressure Washing, Gutter & Roof Cleaning Questions | R.R.M External Cleaning',
  description:
    'Frequently asked questions about pressure washing, driveway cleaning, gutter cleaning, roof cleaning, render cleaning, soft washing, and moss removal across Liverpool, Warrington, Manchester, St Helens, Widnes, Wigan, Skelmersdale, and Greater Manchester. Fully insured since 2016.',
  alternates: {
    canonical: `${BASE_URL}/faq`,
  },
  openGraph: {
    title: 'FAQ | Pressure Washing, Gutter & Roof Cleaning Questions | R.R.M External Cleaning',
    description:
      'Find answers to common questions about exterior cleaning services across the Northwest. Covering pressure washing, gutter cleaning, roof cleaning, render cleaning, and more.',
    url: `${BASE_URL}/faq`,
    type: 'website',
    locale: 'en_GB',
    siteName: 'R.R.M Exterior Cleaning',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | R.R.M External Cleaning Specialist',
    description:
      'Frequently asked questions about exterior cleaning services across Liverpool, Warrington, Manchester, and the Northwest.',
  },
};

/* ── Build FAQPage JSON‑LD from the same data the component uses ── */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    // General
    { '@type': 'Question', name: 'What areas do you cover for exterior cleaning?', acceptedAnswer: { '@type': 'Answer', text: 'R.R.M External Cleaning Specialist covers Newton-le-Willows, Warrington, Liverpool, Manchester, St Helens, Widnes, Wigan, Skelmersdale, Golborne, Huyton, Lymm, and the wider Greater Manchester and Merseyside areas. If your location is not listed, contact us — we may still be able to help.' } },
    { '@type': 'Question', name: 'Are you fully insured for exterior cleaning work?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. R.R.M External Cleaning Specialist carries comprehensive public liability insurance covering all residential and commercial cleaning work. We are happy to provide proof of insurance on request.' } },
    { '@type': 'Question', name: 'How do I get a free quote?', acceptedAnswer: { '@type': 'Answer', text: 'Call us on 07845 463877 or use our online contact form. We provide free, no-obligation quotes after assessing your property. The price we quote is the price you pay — no hidden charges.' } },
    { '@type': 'Question', name: 'Do you work on commercial properties?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide exterior cleaning for both residential and commercial properties including offices, retail units, warehouses, schools, car parks, and industrial premises across the Northwest.' } },
    // Pricing
    { '@type': 'Question', name: 'How much does pressure washing cost?', acceptedAnswer: { '@type': 'Answer', text: 'Pricing depends on the area size, surface type, and contamination level. A typical residential driveway clean starts from around £150. We provide free written quotes so you know the exact cost before work begins.' } },
    { '@type': 'Question', name: 'Do you offer maintenance contracts for commercial properties?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide scheduled maintenance contracts for commercial properties on monthly, quarterly, or bi-annual cycles. Regular cleaning is more cost-effective than reactive one-off cleans and keeps premises consistently presentable.' } },
    // Pressure Washing
    { '@type': 'Question', name: 'What is the difference between pressure washing and soft washing?', acceptedAnswer: { '@type': 'Answer', text: 'Pressure washing uses high-pressure water to clean hard surfaces like driveways, patios, and concrete. Soft washing uses low-pressure application of specialist biocidal chemicals to treat delicate surfaces like render, roofing, and painted walls. We assess each surface and use the appropriate method.' } },
    { '@type': 'Question', name: 'Will pressure washing damage my driveway or patio?', acceptedAnswer: { '@type': 'Answer', text: 'Not when done professionally. We assess every surface before cleaning and select the correct pressure, nozzle, and technique. Block paving, natural stone, concrete, tarmac, and render all require different approaches.' } },
    // Driveway Cleaning
    { '@type': 'Question', name: 'Do you re-sand block paving after driveway cleaning?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Pressure washing block paving displaces some jointing sand. We carry kiln-dried sand and re-fill all joints after cleaning as standard. This maintains structural integrity and prevents weed regrowth.' } },
    { '@type': 'Question', name: 'How often should I have my driveway cleaned?', acceptedAnswer: { '@type': 'Answer', text: 'In the Northwest climate, most driveways benefit from annual cleaning. Properties with heavy tree coverage, north-facing surfaces, or persistent shade may need cleaning every 6-9 months. Sealant application extends the interval.' } },
    // Roof Cleaning
    { '@type': 'Question', name: 'Is roof cleaning safe for my tiles?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We never use high-pressure water on roofs. We use low-pressure soft washing and biocide treatments that safely remove moss and algae without damaging tiles or forcing water under them.' } },
    // Gutter Cleaning
    { '@type': 'Question', name: 'How often should gutters be cleaned?', acceptedAnswer: { '@type': 'Answer', text: 'At minimum once per year in late autumn after leaves have fallen. Properties with overhanging trees or in areas with heavy leaf fall like Skelmersdale and Lymm should have gutters cleaned twice yearly.' } },
    { '@type': 'Question', name: 'Do you offer gutter cleaning in Warrington?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We provide professional gutter vacuum cleaning across all Warrington areas including Stockton Heath, Appleton, Grappenhall, Birchwood, Great Sankey, and the town centre.' } },
    // Render Cleaning
    { '@type': 'Question', name: 'How do you clean rendered walls without causing damage?', acceptedAnswer: { '@type': 'Answer', text: 'We use soft washing — low-pressure application of specialist biocidal solutions that kill algae, mould, and lichen at the cellular level. The surface is then gently rinsed. This is safe for K-rend, silicone render, and painted surfaces.' } },
    // Location
    { '@type': 'Question', name: 'What pressure washing services do you offer in Liverpool?', acceptedAnswer: { '@type': 'Answer', text: 'We provide full pressure washing services across Liverpool including driveway cleaning, patio cleaning, commercial forecourt washing, wall cleaning, and decking cleaning. We cover all Liverpool areas from Walton and Anfield to Aigburth, Woolton, and the city centre.' } },
    { '@type': 'Question', name: 'Do you provide exterior cleaning services in Manchester?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We cover Manchester and Greater Manchester for pressure washing, driveway cleaning, roof cleaning, gutter cleaning, render cleaning, and soft washing services.' } },
    // Safety
    { '@type': 'Question', name: 'Are your cleaning products safe for gardens and pets?', acceptedAnswer: { '@type': 'Answer', text: 'All cleaning agents we use are biodegradable and formulated for outdoor use. We manage runoff carefully and avoid direct contact with planted borders. We advise keeping pets off treated surfaces until dry.' } },
    { '@type': 'Question', name: 'What if it rains on the day of my booking?', acceptedAnswer: { '@type': 'Answer', text: 'Light rain does not affect our work. Heavy rain may require rescheduling for safety and quality reasons. We monitor weather forecasts and will contact you promptly if we need to adjust timing.' } },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${BASE_URL}/faq` },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <FAQPageContent />
    </>
  );
}
