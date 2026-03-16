import Link from 'next/link';
import { ChevronRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Roof Cleaning Liverpool',
  description:
    'Professional roof cleaning in Liverpool, Merseyside. Biocide soft wash for Victorian Welsh slate in Wavertree and Toxteth, clay plain tiles on Sefton Park-area Edwardian semis, and concrete interlocking tiles on post-war estates in Norris Green, Croxteth and Speke.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'R.R.M External Cleaning Specialist',
    telephone: '+447845463877',
    address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
  },
  areaServed: { '@type': 'City', name: 'Liverpool', containedInPlace: { '@type': 'AdministrativeArea', name: 'Merseyside' } },
  serviceType: 'Roof Cleaning',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' },
  offers: { '@type': 'Offer', priceCurrency: 'GBP', priceSpecification: { '@type': 'PriceSpecification', minPrice: '200', maxPrice: '600', priceCurrency: 'GBP' } },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does roof cleaning cost in Liverpool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Roof cleaning in Liverpool typically costs £200–£600 for a standard residential property. Victorian terraces in Anfield, Wavertree, and Toxteth with steep Welsh slate roofs are at the higher end. Post-war semis with concrete interlocking tiles in Norris Green and Speke are lower. Price depends on roof area, pitch, access requirements, and moss thickness. Free written quotes after inspection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is soft washing safe for roof tiles in Liverpool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Soft washing at below 100 PSI is the only safe method for all Liverpool roof types — Welsh slate on Victorian terraces, clay plain tiles on Edwardian semis around Sefton Park, and concrete interlocking tiles on post-war estates. High-pressure washing shatters aged Welsh slate along natural cleavage lines, erodes the granule surface of concrete tiles, and forces water under laps — causing more damage than the moss itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my roof have moss in Liverpool / Merseyside?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Liverpool's Atlantic maritime climate delivers over 800 mm of rainfall per year with persistent low cloud cover and humidity from the Irish Sea. Salt particles in the air from the River Mersey and coastal areas act as a growth accelerant for algae and lichen. North-facing pitches on Victorian terraces in Toxteth, Kensington, and Everton stay damp for days after rain in winter — creating ideal moss conditions. Concrete tiles on post-war estates are more porous than Welsh slate, making them especially susceptible.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long do roof cleaning results last in Liverpool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "After biocide soft washing, most Liverpool roofs remain clean for 3–5 years. The residual biocide continues killing spores for months post-application. Liverpool's maritime climate means coastal postcodes (L21, L22, L23 in the Waterloo/Crosby area) and north-facing pitches in inner-city areas may be at the lower end of this range. An optional sealant applied after the residual period extends protection further.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does a clean roof add value to a Liverpool property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Mortgage surveyors regularly flag moss-covered roofs as a maintenance concern that triggers valuation reductions or further investigation — particularly on Liverpool's many Victorian and Edwardian properties where surveyors check roof condition carefully. A clean roof improves kerb appeal and removes a common objection in the active Liverpool property market. It also prevents the structural damage moss causes when rhizoids penetrate Welsh slate laps or mortar pointing.",
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Roof Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning' },
    { '@type': 'ListItem', position: 3, name: 'Liverpool', item: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/liverpool' },
  ],
};

const faqs = [
  {
    q: 'How much does roof cleaning cost in Liverpool?',
    a: 'Roof cleaning in Liverpool costs £200–£600. Steep Victorian slate roofs in Anfield, Wavertree, and Toxteth are at the higher end; post-war concrete tile semis in Norris Green and Speke are lower. Free written quotes after inspection.',
  },
  {
    q: 'Is soft washing safe for roof tiles in Liverpool?',
    a: 'Yes. Below 100 PSI soft washing is correct for Welsh slate, Edwardian clay tiles, and concrete interlocking tiles. High-pressure washing shatters aged slate, erodes concrete tile granules, and forces water under laps — causing more damage than the moss itself.',
  },
  {
    q: 'Why does my roof have moss in Liverpool / Merseyside?',
    a: "Liverpool's 800mm+ Atlantic rainfall, Irish Sea humidity, and salt particles from the Mersey accelerate moss growth. North-facing Victorian terrace pitches in Toxteth, Kensington, and Everton stay damp for days in winter. Concrete post-war tiles are more porous than Welsh slate — especially susceptible.",
  },
  {
    q: 'How long do roof cleaning results last in Liverpool?',
    a: "Most Liverpool roofs stay clean 3–5 years after biocide soft washing. Coastal postcodes (L21–L23, Waterloo/Crosby) and north-facing inner-city pitches may be at the lower end. Optional post-treatment sealant extends protection further.",
  },
  {
    q: 'Does a clean roof add value to a Liverpool property?',
    a: "Yes. Surveyors regularly flag moss-covered roofs on Liverpool's Victorian and Edwardian stock as maintenance concerns that trigger valuation reductions. A clean roof removes this objection and prevents structural damage from moss rhizoids penetrating Welsh slate laps.",
  },
];

export function RoofLiverpool() {
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="min-h-screen bg-background">
        <nav className="bg-secondary/50" aria-label="Breadcrumb">
          <div className="container-custom py-4">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li><Link href="/" className="text-primary hover:text-accent transition-colors">Home</Link></li>
              <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
              <li><Link href="/services/roof-cleaning" className="text-primary hover:text-accent transition-colors">Roof Cleaning</Link></li>
              <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
              <li className="text-primary-foreground/70" aria-current="page">Liverpool</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">
            <p className="sr-only">
              R.R.M External Cleaning Specialist provides professional roof cleaning across Liverpool, Merseyside, covering Victorian Welsh slate roofs in Wavertree, Anfield, Kensington, Toxteth and Everton, Edwardian clay plain tiles in the Sefton Park area, and concrete interlocking tile roofs on post-war estates in Norris Green, Croxteth and Speke. Biodegradable biocide soft washing below 100 PSI, residual biocide protection 3–5 years. Fully insured, 47 five-star reviews. Contact: 07845 463877.
            </p>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Roof Cleaning Liverpool — Soft Wash Specialists Merseyside
            </h1>

            <p className="text-lg text-muted-foreground mb-4 border-l-4 border-amber-400 pl-4 bg-amber-50/10 py-2 rounded-r">
              <strong>Roof cleaning in Liverpool costs £200–£600.</strong> R.R.M uses biodegradable biocide soft washing below 100 PSI — safe for Welsh slate, Edwardian clay tiles, and concrete interlocking tiles across Merseyside. Liverpool's Atlantic maritime climate and Mersey salt air mean roofs accumulate moss faster than inland areas; residual biocide protects the surface for 3–5 years post-treatment.
            </p>

            <p className="text-muted-foreground mb-6">
              Liverpool's housing stock spans Victorian Welsh slate terraces in Anfield, Wavertree, Kensington, Toxteth, and Everton; Edwardian semi-detached clay tile properties around Sefton Park, Mossley Hill, and Aigburth; and post-war concrete interlocking tile estates in Norris Green, Croxteth, and Speke. All three tile types accumulate moss and lichen rapidly in Liverpool's maritime climate, where over 800 mm of Atlantic rainfall per year combines with persistent Mersey/Irish Sea humidity. High-pressure washing is never appropriate — it shatters aged Welsh slate, erodes concrete tile granules, and forces water under laps. Biocide soft washing removes growth, kills spores, and leaves residual protection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <a href="tel:+447845463877">
                  <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Call: 07845 463877
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Free Quote</Link>
              </Button>
            </div>
          </div>
        </article>

        <div className="container-custom section-padding">
          <div className="max-w-4xl">

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Roof Types Across Liverpool</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Welsh slate</strong> covers the vast majority of Victorian terraces in inner Liverpool — L4 (Anfield/Everton), L6 (Kensington), L7 (Wavertree/Edge Hill), L8 (Toxteth/Dingle). These roofs were laid from the 1870s–1910s and the slate itself is extremely durable, but aged laps become brittle. Any tile struck by high-pressure water can shatter along natural cleavage lines. We treat Liverpool slate exclusively with biocide: the dead moss falls naturally over subsequent months without mechanical intervention.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Clay plain tiles</strong> appear on Edwardian semi-detached properties across L17 (Sefton Park), L18 (Mossley Hill), L19 (Aigburth), and L15 (Wavertree). These hand-pressed tiles carry a slightly porous surface that holds moisture in Liverpool's damp climate. Green algae establishes quickly in shaded north-facing valleys. Biocide soft wash removes growth and penetrates the surface to kill embedded spores.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Concrete interlocking tiles</strong> dominate post-war estates in L11 (Norris Green), L14 (West Derby), and L24 (Speke). Their textured surface and porous concrete body accumulate thick moss in Liverpool's wet climate. These roofs benefit most from soft washing — the biocide penetrates the tile body to provide residual protection that slows re-growth significantly compared to untreated roofs.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Liverpool Roof Cleaning Process</h2>
              <div className="space-y-4">
                {[
                  { n: 1, title: 'Roof Inspection', body: 'Tile type, moss coverage, ridge/hip pointing condition, and access assessed. Any cracked, slipped, or missing tiles noted before cleaning — treating a damaged roof without flagging issues first risks hidden water ingress.' },
                  { n: 2, title: 'Loose Moss Removal', body: 'Thick moss mats removed by soft brush or low-profile roof rake from ground level. Never walked on Welsh slate — surface pressure causes micro-fractures in aged tiles.' },
                  { n: 3, title: 'Biocide Soft Wash', body: 'Biodegradable algaecide applied at below 100 PSI ridge-to-eave, covering all tile faces, hip tiles, and valley areas where biological growth is heaviest.' },
                  { n: 4, title: 'Residual Treatment Period', body: 'Biocide works for 4–12 weeks post-application, killing embedded spores. Remaining moss drops naturally in subsequent rain. No need to return for pressure rinsing.' },
                  { n: 5, title: 'Optional Sealing', body: 'Breathable silicone sealant reduces water absorption and extends protection — particularly effective on Liverpool\'s porous concrete tile estates in Norris Green and Speke.' },
                ].map(({ n, title, body }) => (
                  <div key={n} className="flex gap-4">
                    <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">{n}</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                      <p className="text-muted-foreground text-sm">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Roof Cleaning Liverpool — Frequently Asked Questions</h2>
              <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
                {faqs.map(({ q, a }) => (
                  <details key={q} className="bg-secondary/30 rounded-lg p-6 cursor-pointer group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <summary className="font-semibold text-foreground flex justify-between items-center list-none" itemProp="name">
                      {q}
                      <span className="text-accent group-open:rotate-180 transition-transform ml-2 flex-shrink-0">▼</span>
                    </summary>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-muted-foreground mt-4 text-sm" itemProp="text">{a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">All Liverpool Cleaning Services</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { href: '/services/gutter-cleaning/liverpool', title: 'Gutter Cleaning Liverpool', desc: 'Cast iron and UPVC gutter clearing, downpipe flushing' },
                  { href: '/services/render-cleaning/liverpool', title: 'Render Cleaning Liverpool', desc: 'K-Rend, monocouche and Georgian render soft washing' },
                  { href: '/services/pressure-washing/liverpool', title: 'Pressure Washing Liverpool', desc: 'Driveways, block paving and commercial hard surfaces' },
                  { href: '/services/cladding-cleaning/liverpool', title: 'Cladding Cleaning Liverpool', desc: 'UPVC, metal composite and waterfront cladding soft wash' },
                  { href: '/services/exterior-cleaning/liverpool', title: 'Exterior Cleaning Liverpool', desc: 'Full exterior package for all Liverpool property types' },
                  { href: '/locations/liverpool', title: 'Liverpool Location Hub', desc: 'All R.R.M services across Merseyside' },
                ].map(({ href, title, desc }) => (
                  <Link key={href} href={href} className="group p-5 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Free Roof Cleaning Quote — Liverpool Merseyside</h2>
              <p className="text-muted-foreground mb-6">R.R.M covers all Liverpool postcodes. Fully insured, 47 five-star reviews, free written quotes.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />07845 463877</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Request Quote Online</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">All Liverpool postcodes · Fully insured · Free written quote · 47 five-star reviews</p>
            </section>

          </div>
        </div>
      </main>
    </Layout>
  );
}
