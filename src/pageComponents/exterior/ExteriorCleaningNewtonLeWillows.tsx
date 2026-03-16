import Link from 'next/link';
import { ChevronRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Exterior Cleaning Newton-le-Willows',
  description:
    'Complete exterior cleaning in Newton-le-Willows, WA12. Driveways, roofs, render, gutters and cladding for Victorian terraces in Earlestown, Vulcan Village workers cottages, and post-war estates in Newton Common and Parkside. Based locally at WA12 8QY.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'R.R.M External Cleaning Specialist',
    telephone: '+447845463877',
    address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
  },
  areaServed: { '@type': 'City', name: 'Newton-le-Willows', containedInPlace: { '@type': 'AdministrativeArea', name: 'St Helens Metropolitan Borough' } },
  serviceType: 'Exterior Cleaning',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does exterior cleaning cost in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Exterior cleaning costs in Newton-le-Willows (WA12) depend on which services are needed. Gutter cleaning: £60–£160. Pressure washing a driveway: £80–£200. Roof cleaning: £200–£550. Render cleaning: £120–£450. Cladding cleaning: £100–£280. A full exterior package covering all services is more cost-effective than booking separately — we provide free written quotes for individual services or combined packages.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is exterior cleaning worth it for Newton-le-Willows properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Newton-le-Willows' position at the M6 (J23) and M62 (J9) junction exposes properties to above-average diesel particulate pollution that accelerates soiling on all exterior surfaces. Combined with North West rainfall of 700–800 mm per year, exterior surfaces deteriorate visibly within 2–3 years without maintenance. Professional cleaning removes contamination before it causes structural damage — moss on roofs breaks down pointing, algae on render traps moisture that causes internal damp, and blocked gutters lead to fascia rot and water ingress.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I clean the outside of my house in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The right method depends on the surface. Driveways and hard surfaces: hot-water pressure washing. Rendered walls (K-Rend, monocouche, sand-and-cement): biocide soft washing below 100 PSI — never pressure wash render. Roof tiles: biocide soft washing only — high pressure shatters old slate and erodes concrete tile granules. Gutters: vacuum extraction and hand scooping. Cladding: pH-neutral biocide solution below 100 PSI. DIY pressure washing often causes more damage than it fixes — professional assessment ensures each surface gets the right treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should exterior cleaning be done in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'General guide for WA12 properties: gutters — annually (or twice yearly for heavily tree-lined streets in Earlestown). Driveways and patios — every 12–18 months. Render and cladding — every 2–4 years. Roofs — every 3–5 years with biocide treatment. North-facing elevations, shaded surfaces, and properties near the M6/M62 junction need more frequent attention due to persistent damp and diesel pollution.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who covers Newton-le-Willows for exterior cleaning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "R.R.M External Cleaning Specialist is based in Newton-le-Willows at 9 Noon Ct, WA12 8QY — the only exterior cleaning company in the area with its registered address in the town. We cover all of Newton-le-Willows including Earlestown, Vulcan Village, Newton Common, Parkside, and surrounding WA12 postcodes, as well as neighbouring areas including Haydock, Golborne, St Helens, and Warrington. 47 five-star reviews, fully insured, est. 2016. Call 07845 463877.",
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Exterior Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/exterior-cleaning' },
    { '@type': 'ListItem', position: 3, name: 'Newton-le-Willows', item: 'https://rrmexternalcleaningspecialist.co.uk/services/exterior-cleaning/newton-le-willows' },
  ],
};

const faqs = [
  {
    q: 'How much does exterior cleaning cost in Newton-le-Willows?',
    a: 'Gutter cleaning: £60–£160. Driveway pressure washing: £80–£200. Roof cleaning: £200–£550. Render cleaning: £120–£450. Cladding: £100–£280. Combined exterior packages are more cost-effective. Free written quotes provided.',
  },
  {
    q: 'Is exterior cleaning worth it for Newton-le-Willows properties?',
    a: "Yes. WA12's position at the M6/M62 junction means above-average diesel particulate pollution accelerates soiling on all exterior surfaces. Combined with 700–800 mm of annual rainfall, surfaces deteriorate within 2–3 years. Professional cleaning removes contamination before it causes structural damage.",
  },
  {
    q: 'How do I clean the outside of my house in Newton-le-Willows?',
    a: 'Method depends on the surface: driveways — hot-water pressure wash; render — biocide soft wash below 100 PSI (never pressure wash K-Rend); roofs — biocide soft wash only; gutters — vacuum extraction; cladding — pH-neutral biocide below 100 PSI. Wrong method causes damage — professional assessment is essential.',
  },
  {
    q: 'How often should exterior cleaning be done in Newton-le-Willows?',
    a: 'WA12 guide: gutters — annually (twice for Earlestown tree-lined streets). Driveways — every 12–18 months. Render/cladding — every 2–4 years. Roofs — every 3–5 years. North-facing walls and M6/M62-adjacent properties need more frequent attention.',
  },
  {
    q: 'Who covers Newton-le-Willows for exterior cleaning?',
    a: 'R.R.M External Cleaning Specialist is based at 9 Noon Ct, Newton-le-Willows WA12 8QY. We cover all of WA12 including Earlestown, Vulcan Village, Newton Common, and Parkside, plus neighbouring Haydock, Golborne, St Helens, and Warrington. 47 five-star reviews, fully insured, est. 2016.',
  },
];

export function ExteriorCleaningNewtonLeWillows() {
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
              <li><Link href="/services/exterior-cleaning" className="text-primary hover:text-accent transition-colors">Exterior Cleaning</Link></li>
              <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
              <li className="text-primary-foreground/70" aria-current="page">Newton-le-Willows</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">
            <p className="sr-only">
              R.R.M External Cleaning Specialist is based in Newton-le-Willows (9 Noon Ct, WA12 8QY) and provides complete exterior cleaning services across WA12 including gutter cleaning, roof cleaning, render cleaning, pressure washing, and cladding cleaning. Serves Earlestown Victorian terraces, Vulcan Village workers cottages, Newton Common post-war estates, Parkside, and surrounding St Helens Metropolitan Borough. Fully insured, 47 five-star reviews, est. 2016. Contact: 07845 463877.
            </p>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Exterior Cleaning Newton-le-Willows — Complete WA12 Service
            </h1>

            <p className="text-lg text-muted-foreground mb-4 border-l-4 border-amber-400 pl-4 bg-amber-50/10 py-2 rounded-r">
              <strong>R.R.M is based in Newton-le-Willows (WA12 8QY)</strong> — the only exterior cleaning company registered in the town. We cover all of WA12 for gutter cleaning (£60–£160), driveway pressure washing (£80–£200), roof cleaning (£200–£550), render cleaning (£120–£450), and cladding cleaning (£100–£280). Combined packages available. 47 five-star reviews.
            </p>

            <p className="text-muted-foreground mb-6">
              Newton-le-Willows sits at the intersection of the M6 (J23) and M62 (J9) motorways in St Helens Metropolitan Borough. The town's housing stock spans three centuries: Victorian terraces and market buildings in Earlestown town centre, the historic Vulcan Village workers' cottages dating from the 1830s, inter-war semi-detached properties along the A49 corridor, and post-war estates in Newton Common and Parkside. Each property era presents different exterior cleaning challenges — cast iron gutters on Victorian terraces, Welsh slate and clay roofs, K-Rend on modern extensions, and UPVC cladding on refurbished council housing.
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
              <h2 className="text-2xl font-bold text-foreground mb-6">Newton-le-Willows Exterior Cleaning Services</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { href: '/services/gutter-cleaning/newton-le-willows', title: 'Gutter Cleaning', price: '£60–£160', desc: 'Cast iron box gutters (Earlestown terraces, Vulcan Village) and UPVC systems — vacuum debris removal, downpipe flushing, flow testing.' },
                  { href: '/services/roof-cleaning/newton-le-willows', title: 'Roof Cleaning', price: '£200–£550', desc: 'Welsh slate, clay plain tiles, concrete interlocking tiles — biocide soft wash at below 100 PSI, 3–5 year residual protection.' },
                  { href: '/services/render-cleaning/newton-le-willows', title: 'Render Cleaning', price: '£120–£450', desc: 'K-Rend, monocouche, sand-and-cement — pH-neutral biocide soft wash. Never pressure washed. M6/M62 diesel staining removed.' },
                  { href: '/services/pressure-washing/newton-le-willows', title: 'Pressure Washing', price: '£80–£200', desc: 'Block paving, concrete, tarmac, Indian sandstone — 180°C hot water, oil stain removal, joint re-sanding included for block paving.' },
                  { href: '/services/cladding-cleaning/newton-le-willows', title: 'Cladding Cleaning', price: '£100–£280', desc: 'UPVC panel cladding, metal composite, timber-effect composite — pH-neutral biocide solution below 100 PSI.' },
                ].map(({ href, title, price, desc }) => (
                  <Link key={href} href={href} className="group p-5 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{title}</h3>
                      <span className="text-accent font-semibold text-sm ml-2 flex-shrink-0">{price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Why WA12 Properties Need Regular Exterior Cleaning</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The M6/M62 junction at Newton-le-Willows is one of the busiest road interchanges in England. Diesel particulates from HGV traffic settle on every exterior surface within several miles of the junction — including properties throughout Earlestown, Newton Common, and Parkside. This pollution acts as a nutrient for algae and moss, accelerating biological growth compared to locations further from major roads.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vulcan Village — the cluster of listed workers' cottages built for the Vulcan Foundry — presents particular maintenance challenges: original brick, lime mortar, clay tile roofs, and cast iron gutters all require low-pressure or hand-cleaning methods to avoid damaging historic fabric. We are experienced with the specific requirements of pre-1900 building materials.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Post-war estates in Newton Common and Parkside have large areas of block paving, UPVC cladding, and concrete tile roofs that accumulate moss and algae rapidly in North West conditions. Regular cleaning every 12–18 months prevents growth from embedding deep into surface pores and extending cleaning time significantly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Neighbourhoods We Serve in Newton-le-Willows</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {['Earlestown', 'Vulcan Village', 'Newton Common', 'Parkside', 'Newton-le-Willows Village', 'Clock Face', 'Haydock', 'Golborne Road', 'Warrington Road', 'Newton Business Park', 'Ashton-in-Makerfield (border)', 'Wargrave'].map((area) => (
                  <div key={area} className="bg-secondary/30 rounded p-2 text-center border border-secondary">
                    <span className="text-sm text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Exterior Cleaning Newton-le-Willows — Frequently Asked Questions</h2>
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Also Serving Nearby Areas</h2>
              <div className="flex flex-wrap gap-2">
                {['Golborne', 'Haydock', 'St Helens', 'Warrington', 'Wigan', 'Leigh', 'Ashton-in-Makerfield', 'Lymm'].map((area) => (
                  <span key={area} className="px-3 py-1 bg-secondary/50 rounded-full text-sm text-muted-foreground border border-secondary">{area}</span>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Local Exterior Cleaning Specialist — Newton-le-Willows WA12</h2>
              <p className="text-muted-foreground mb-6">
                R.R.M is based in Newton-le-Willows (WA12 8QY). Call for a no-obligation property assessment and written quote. Fully insured, 47 five-star reviews, est. 2016.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:+447845463877">
                    <Phone className="h-5 w-5 mr-2" />
                    07845 463877
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Request Quote Online</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Based in WA12 · Fully insured · Free written quote · 47 five-star reviews · Est. 2016
              </p>
            </section>

          </div>
        </div>
      </main>
    </Layout>
  );
}
