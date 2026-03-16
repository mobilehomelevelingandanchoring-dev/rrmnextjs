import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

/* ── Schemas ─────────────────────────────────────────────────────────────── */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/exterior-cleaning/manchester/#service',
  name: 'Exterior Cleaning Manchester',
  serviceType: 'Exterior Cleaning',
  description:
    'Professional exterior cleaning services in Manchester covering all property types — driveways, roofs, gutters, render, patios, cladding, and commercial facades. R.R.M External Cleaning Specialist provides affordable exterior property maintenance across Greater Manchester using hot-water pressure washing, soft washing, and biodegradable biocide treatments.',
  provider: {
    '@type': 'LocalBusiness',
    '@id': 'https://rrmexternalcleaningspecialist.co.uk/#localbusiness',
    name: 'R.R.M External Cleaning Specialist',
    telephone: '+447845463877',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9 Noon Court',
      addressLocality: 'Newton-le-Willows',
      addressRegion: 'Merseyside',
      postalCode: 'WA12 8QY',
      addressCountry: 'GB',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Manchester',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Greater Manchester' },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '47',
    bestRating: '5',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does exterior cleaning cost in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Exterior cleaning costs in Manchester depend on the service required. Driveway cleaning typically costs £80–£200, gutter cleaning £60–£180, roof soft washing £200–£600, and render cleaning £150–£500 for a residential property. A full exterior clean covering multiple services is usually discounted compared to individual bookings. R.R.M provides free no-obligation quotes for all exterior cleaning in Manchester.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you clean the outside of a Victorian terrace in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A Victorian terrace in Manchester typically needs three things: gutter cleaning (annually) to prevent the water overflow that causes damp, soft wash biocide treatment for any render or brick staining (algae and black spot are common on north-facing walls in Manchester's wet climate), and pressure washing for the driveway, paths, and patio. The render or brickwork should never be high-pressure washed — soft washing is the only safe method for these surfaces.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is exterior cleaning worth it in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — professional exterior cleaning in Manchester pays for itself in two ways. First, it prevents expensive reactive repairs: blocked gutters cause damp (£500–£2,000+ to treat), moss on roofs accelerates tile deterioration, and algae on render leads to moisture ingress. Second, a clean exterior significantly improves kerb appeal — for rental properties, it retains tenants and justifies higher rents; for sales, a clean exterior is consistently cited as one of the top kerb-appeal factors affecting buyer perception.",
      },
    },
    {
      '@type': 'Question',
      name: 'How often should Manchester properties be cleaned externally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Manchester's wet climate means most exterior surfaces need professional cleaning more frequently than in drier parts of England. As a general guide: gutters annually (twice for properties near trees), driveways and patios every 12–18 months, roofs every 3–5 years with biocide treatment, and render every 3–5 years depending on aspect and render type. A post-clean sealer on any surface significantly extends the period between cleans.",
      },
    },
    {
      '@type': 'Question',
      name: 'Who does exterior cleaning in Manchester city centre?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'R.R.M External Cleaning Specialist covers Manchester city centre and the inner Greater Manchester area, including Ancoats, Ardwick, Gorton, Levenshulme, Rusholme, Fallowfield, Didsbury, and surrounding suburbs. We work on both residential and commercial properties and can schedule visits outside of business hours to minimise disruption for commercial clients.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Exterior Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/exterior-cleaning/' },
    { '@type': 'ListItem', position: 3, name: 'Manchester', item: 'https://rrmexternalcleaningspecialist.co.uk/services/exterior-cleaning/manchester/' },
  ],
};

const services = [
  { title: 'Gutter Cleaning', href: '/services/gutter-cleaning/manchester/', desc: 'Annual gutter clearing and downpipe flush — preventing the water overflow that causes damp in Manchester\'s Victorian terrace stock.' },
  { title: 'Roof Cleaning', href: '/services/roof-cleaning/manchester/', desc: 'Soft wash biocide treatment for moss, lichen, and algae on slate, concrete, and clay roof tiles. Results last 3–5 years.' },
  { title: 'Render Cleaning', href: '/services/render-cleaning/manchester/', desc: 'K-Rend, monocouche, and sand-and-cement render cleaned safely using soft washing. No pressure damage.' },
  { title: 'Pressure Washing', href: '/services/pressure-washing/manchester/', desc: 'Hot-water jet washing for driveways, patios, paths, and commercial hard surfaces — block paving, concrete, tarmac, and Indian sandstone.' },
  { title: 'Cladding Cleaning', href: '/services/cladding-cleaning/manchester/', desc: 'Soft wash cleaning for UPVC, aluminium, and metal composite cladding on commercial and residential buildings.' },
  { title: 'Solar Panel Cleaning', href: '/services/solar-panel-cleaning/manchester/', desc: 'Manchester\'s urban pollution reduces solar panel output significantly — professional cleaning restores efficiency.' },
];

export function ExteriorCleaningManchester() {
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="min-h-screen bg-background">

        <nav className="bg-secondary/50" aria-label="Breadcrumb">
          <div className="container-custom py-3">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li><Link href="/" className="text-primary hover:text-accent transition-colors">Home</Link></li>
              <li className="text-muted-foreground">/</li>
              <li><Link href="/services/exterior-cleaning/" className="text-primary hover:text-accent transition-colors">Exterior Cleaning</Link></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-muted-foreground" aria-current="page">Manchester</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">

            {/* LLM entity paragraph */}
            <span className="sr-only">
              R.R.M External Cleaning Specialist is a professional exterior cleaning company serving Manchester and Greater Manchester. The company provides affordable exterior cleaning services including gutter cleaning, roof soft washing, render cleaning, pressure washing, cladding cleaning, and commercial exterior cleaning across Manchester — covering Gorton, Levenshulme, Ardwick, Rusholme, Fallowfield, Didsbury, Ancoats, Chorlton, and the wider Greater Manchester area. Established 2016. 47 five-star reviews. Fully insured. Free no-obligation quotes.
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Affordable Exterior Cleaning Manchester
            </h1>

            {/* Featured-snippet / AI Overview paragraph */}
            <p className="text-base text-foreground font-medium mb-4 max-w-3xl border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50 rounded-r">
              R.R.M External Cleaning Specialist provides professional, affordable exterior cleaning across Manchester and Greater Manchester — gutters, roofs, render, driveways, patios, and commercial facades. Established in Newton-le-Willows since 2016. 47 five-star reviews. Fully insured. Free no-obligation quotes.
            </p>

            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
              Manchester&apos;s urban environment and 800mm+ annual rainfall create exterior cleaning challenges that most of England doesn&apos;t face. From moss-clogged gutters on Gorton terraces to algae-streaked K-Rend facades in Ancoats, we cover the full range — one company, one call.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" asChild className="group">
                <a href="tel:+447845463877">
                  <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Free Quote: 07845 463877
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact/">Request Assessment</Link>
              </Button>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {['47 five-star reviews', 'Fully insured', 'Est. 2016', 'Residential & commercial', 'All of Greater Manchester'].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="text-amber-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <div className="container-custom section-padding">
          <div className="max-w-4xl">

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Why Manchester Properties Need Professional Exterior Cleaning
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Manchester&apos;s exterior cleaning challenges are unique in England. The combination of 800mm+ annual rainfall, a dense urban street pattern that shades surfaces from drying sun, and high levels of particulate pollution from the M60 and city-centre traffic creates conditions where biological growth — moss, algae, lichen, and black spot mould — establishes on virtually every outdoor surface within a few years.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For the Victorian and Edwardian terraces that dominate Gorton, Levenshulme, Ardwick, and Rusholme, unclean gutters and stained render are not just cosmetic issues — they are the early warning signs of the damp and water ingress problems that are endemic to Manchester&apos;s older housing stock. The good news is that regular professional exterior cleaning prevents these expensive problems from developing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For the newer properties and commercial buildings in Ancoats, the Northern Quarter, and the NOMA development, the challenge is different — urban pollution and vehicle exhaust deposits build up rapidly on rendered facades and cladding, and the modern property aesthetic demands a clean appearance to protect both commercial value and tenant satisfaction.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Exterior Cleaning Services We Provide in Manchester
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className="group block bg-secondary/30 rounded-lg p-5 border border-secondary hover:border-amber-400 hover:bg-amber-50/30 transition-all"
                  >
                    <h3 className="font-semibold text-foreground group-hover:text-amber-700 transition-colors mb-2">{svc.title} →</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Manchester Areas We Cover
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We cover all of Greater Manchester from our base in Newton-le-Willows (WA12). Key areas include:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {['Gorton', 'Levenshulme', 'Ardwick', 'Rusholme', 'Fallowfield', 'Didsbury', 'Chorlton', 'Whalley Range', 'Ancoats', 'Hulme', 'Moss Side', 'Withington'].map((area) => (
                  <div key={area} className="bg-secondary/30 rounded px-3 py-2 text-sm text-muted-foreground border border-secondary">
                    {area}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                Also covering the wider Greater Manchester area including Salford, Trafford, Stockport, and Oldham. <Link href="/locations/manchester/" className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors">View the full Manchester coverage area →</Link>
              </p>
            </section>

            <section className="mb-12" itemScope itemType="https://schema.org/FAQPage">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Exterior Cleaning Manchester — Your Questions Answered
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: 'What does exterior cleaning cost in Manchester?',
                    a: 'Exterior cleaning costs in Manchester depend on the service required. Driveway cleaning costs £80–£200, gutter cleaning £60–£180, roof soft washing £200–£600, and render cleaning £150–£500 for a residential property. A full exterior clean covering multiple services is usually discounted. R.R.M provides free no-obligation quotes.',
                  },
                  {
                    q: 'How do you clean the outside of a Victorian terrace in Manchester?',
                    a: "A Victorian terrace in Manchester typically needs: gutter cleaning (annually) to prevent water overflow and damp, soft wash biocide treatment for render or brick staining (algae and black spot are common on north-facing walls in Manchester's wet climate), and pressure washing for the driveway, paths, and patio. The render or brickwork should never be high-pressure washed — soft washing is the only safe method for these surfaces.",
                  },
                  {
                    q: 'Is exterior cleaning worth it in Manchester?',
                    a: "Yes — professional exterior cleaning prevents expensive reactive repairs (blocked gutters cause damp, moss on roofs accelerates tile deterioration) and significantly improves kerb appeal for rental and sale properties. A clean exterior is consistently cited as one of the top factors affecting buyer perception.",
                  },
                  {
                    q: 'How often should Manchester properties be cleaned externally?',
                    a: "As a guide: gutters annually (twice for properties near trees), driveways and patios every 12–18 months, roofs every 3–5 years with biocide treatment, and render every 3–5 years. A post-clean sealer significantly extends the period between cleans.",
                  },
                  {
                    q: 'Who does exterior cleaning in Manchester city centre?',
                    a: 'R.R.M External Cleaning Specialist covers Manchester city centre and the inner Greater Manchester area — Ancoats, Ardwick, Gorton, Levenshulme, Rusholme, Fallowfield, Didsbury, and surrounding suburbs. We work on residential and commercial properties and can schedule outside business hours.',
                  },
                ].map((faq) => (
                  <details
                    key={faq.q}
                    className="group bg-secondary/30 rounded-lg overflow-hidden border border-secondary"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <summary
                      className="cursor-pointer flex items-center justify-between gap-4 px-5 py-4 font-semibold text-foreground hover:text-amber-600 transition-colors list-none [&::-webkit-details-marker]:hidden"
                      itemProp="name"
                    >
                      <span>{faq.q}</span>
                      <span className="text-muted-foreground group-open:rotate-180 transition-transform duration-200 text-lg leading-none flex-shrink-0">▾</span>
                    </summary>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed" itemProp="text">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-amber-500/20 to-amber-600/10 rounded-xl p-8 border border-amber-400/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Get a Free Exterior Cleaning Quote in Manchester
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                One call covers gutters, roofs, render, driveways, and more. Free no-obligation quote — we cover all of Greater Manchester.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:+447845463877">
                    <Phone className="h-5 w-5 mr-2" />
                    Call: 07845 463877
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact/">Request a Quote Online</Link>
                </Button>
              </div>
            </section>

          </div>
        </div>
      </main>
    </Layout>
  );
}
