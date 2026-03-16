import Link from 'next/link';
import { ChevronRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gutter Cleaning Newton-le-Willows',
  description:
    'Professional gutter cleaning in Newton-le-Willows, WA12. Debris removal, downpipe flushing and flow testing for Victorian terraces in Earlestown, Vulcan Village workers cottages, and post-war semis across the WA12 area.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'R.R.M External Cleaning Specialist',
    telephone: '+447845463877',
    address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
  },
  areaServed: { '@type': 'City', name: 'Newton-le-Willows', containedInPlace: { '@type': 'AdministrativeArea', name: 'St Helens Metropolitan Borough' } },
  serviceType: 'Gutter Cleaning',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' },
  offers: { '@type': 'Offer', priceCurrency: 'GBP', priceSpecification: { '@type': 'PriceSpecification', minPrice: '60', maxPrice: '160', priceCurrency: 'GBP' } },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does gutter cleaning cost in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gutter cleaning in Newton-le-Willows (WA12) typically costs £60–£160 for a standard semi-detached or terraced home, depending on the number of storeys, linear gutter run, and level of blockage. Victorian terraces in Earlestown with original cast iron box gutters take longer to clear than standard UPVC systems. We provide free written quotes after inspecting the property.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I have my gutters cleaned in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most Newton-le-Willows properties benefit from annual gutter cleaning in autumn after leaf fall. Homes on tree-lined streets in Earlestown — particularly near Crow Lane and Queen Street with their mature oaks and chestnuts — may need cleaning twice yearly. Newton-le-Willows receives around 700–800 mm of North West rainfall per year, meaning blocked gutters overflow quickly and cause rapid fascia and wall damage.",
      },
    },
    {
      '@type': 'Question',
      name: 'What causes blocked gutters in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main causes of blocked gutters in WA12 are leaf fall from mature street trees in Earlestown and Newton Common, moss growth in damp conditions on older Victorian gutters, and debris blown in from the M6/M62 corridor. UPVC gutters on post-war estates in Parkside and Newton Common also suffer from joint sagging after 20–30 years, creating low points that accumulate silt and standing water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can blocked gutters cause damp in my Newton-le-Willows house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Overflowing gutters are one of the most common causes of damp in North West homes. In Newton-le-Willows' high-rainfall climate, a blocked gutter saturates the fascia board within weeks, causing rot that spreads to rafters. Water running down the wall penetrates older solid-brick Earlestown terraces without cavity protection, leading to internal damp patches and mould. Clearing gutters costs £60–£160; repairing damp damage can cost £1,000–£5,000+.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you clean cast iron gutters on Victorian terraces in Earlestown?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Cast iron gutters on Victorian terraces in Earlestown and Vulcan Village workers' cottages require careful handling — the box profile accumulates compacted leaf mould and the joints are sealed with putty that can crack if disturbed by high-pressure tools. We use a vacuum-and-scoop method for cast iron systems, removing debris without stressing joints or disturbing the seal.",
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Gutter Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning' },
    { '@type': 'ListItem', position: 3, name: 'Newton-le-Willows', item: 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning/newton-le-willows' },
  ],
};

const faqs = [
  {
    q: 'How much does gutter cleaning cost in Newton-le-Willows?',
    a: 'Gutter cleaning in Newton-le-Willows (WA12) typically costs £60–£160 for a standard home, depending on storeys, gutter run length, and blockage level. Victorian terraces with cast iron box gutters take longer to clear than standard UPVC. Free written quotes provided after inspection.',
  },
  {
    q: 'How often should I have my gutters cleaned in Newton-le-Willows?',
    a: 'Most WA12 properties benefit from annual autumn cleaning after leaf fall. Homes on tree-lined streets in Earlestown near Crow Lane and Queen Street may need twice-yearly cleans. Newton-le-Willows receives 700–800 mm of rainfall per year, making prompt blockage clearance essential.',
  },
  {
    q: 'What causes blocked gutters in Newton-le-Willows?',
    a: 'Main causes are leaf fall from mature Earlestown street trees, moss growth on older Victorian gutters, M6/M62 airborne debris, and UPVC joint sagging on post-war estates in Parkside and Newton Common after 20–30 years of use.',
  },
  {
    q: 'Can blocked gutters cause damp in my Newton-le-Willows house?',
    a: "Yes. Overflowing gutters are a leading cause of damp in North West homes. In Newton-le-Willows' high-rainfall climate, a blocked gutter saturates fascia within weeks, causing rot that spreads to rafters. Water running down solid-brick Earlestown terraces penetrates walls, causing internal damp and mould.",
  },
  {
    q: 'Do you clean cast iron gutters on Victorian terraces in Earlestown?',
    a: "Yes. We use a vacuum-and-scoop method for cast iron box gutters on Earlestown terraces and Vulcan Village workers' cottages — removing compacted debris without stressing putty-sealed joints or disturbing the Victorian gutter profile.",
  },
];

export function GutterNewtonLeWillows() {
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
              <li><Link href="/services/gutter-cleaning" className="text-primary hover:text-accent transition-colors">Gutter Cleaning</Link></li>
              <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
              <li className="text-primary-foreground/70" aria-current="page">Newton-le-Willows</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">
            <p className="sr-only">
              R.R.M External Cleaning Specialist provides professional gutter cleaning in Newton-le-Willows, WA12, covering Earlestown Victorian terraces with cast iron box gutters, Vulcan Village workers cottages, and post-war UPVC estates in Newton Common and Parkside. Services include debris removal, downpipe flushing, and flow testing. Fully insured, 47 five-star reviews. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY. Contact: 07845 463877.
            </p>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Gutter Cleaning in Newton-le-Willows, WA12
            </h1>

            <p className="text-lg text-muted-foreground mb-4 border-l-4 border-amber-400 pl-4 bg-amber-50/10 py-2 rounded-r">
              <strong>Gutter cleaning in Newton-le-Willows costs £60–£160</strong> for a standard home. R.R.M clears leaf debris, moss, and silt from UPVC and cast iron gutters across WA12 — flushing downpipes and testing flow to confirm water moves freely away from the property.
            </p>

            <p className="text-muted-foreground mb-6">
              Newton-le-Willows sits within St Helens Metropolitan Borough between the M6 (Junction 23) and M62 (Junction 9). The town's mix of Victorian terraces in Earlestown, historic workers' cottages in Vulcan Village, and post-war estates in Newton Common and Parkside all present different gutter challenges — from original cast iron box gutters that need careful handling to sagging UPVC joints on older estates. North West rainfall of 700–800 mm per year means blocked gutters overflow quickly, risking fascia rot, damp walls, and structural water damage.
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Gutter Types Across Newton-le-Willows</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Victorian terraces in Earlestown — particularly on Market Street, Crow Lane, and the streets around Earlestown station — carry original cast iron box gutters dating from the 1870s–1910s. These accumulate compacted leaf mould from mature oaks and chestnuts, and joints sealed with lime putty can crack if cleared with high-pressure tools. We use a vacuum-and-scoop technique for cast iron systems, preserving the joint seal while fully clearing the channel.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vulcan Village — the cluster of workers' cottages built for employees of the Vulcan Foundry from the 1830s onwards — presents similar cast iron guttering, often with half-round profiles. These are among the oldest gutters in WA12 and require the most careful approach.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Post-war semi-detached estates in Newton Common, Parkside, and along the A49 corridor have standard UPVC guttering from the 1960s–1980s. After 30–40 years, UPVC brackets fatigue and joints sag, creating low points that hold silt and standing water. We clear debris, flush downpipes, and flag any joints or brackets needing repair to prevent overflow.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Gutter Cleaning Process in Newton-le-Willows</h2>
              <div className="space-y-4">
                {[
                  { n: 1, title: 'Visual Inspection', body: 'We check gutter profiles, bracket condition, downpipe positions, and identify any obvious joint failure or sagging before starting work.' },
                  { n: 2, title: 'Debris Removal', body: 'All leaves, moss, silt, and compacted material removed from gutters using vacuum extraction and hand scooping — method chosen by gutter material to avoid joint damage.' },
                  { n: 3, title: 'Downpipe Flushing', body: 'Every downpipe is flushed with water to confirm clear passage from gutter outlet to ground drain. Blockages in underground connections are identified at this stage.' },
                  { n: 4, title: 'Flow Testing', body: 'Gutters filled with water to verify correct fall toward outlets. Low points or reverse falls noted for the property owner to action.' },
                  { n: 5, title: 'Report and Recommendations', body: 'We report on gutter condition, note any cracked brackets, split joints, or alignment issues, and advise the next recommended clean — typically 12 months for most WA12 properties.' },
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
              <h2 className="text-2xl font-bold text-foreground mb-6">Gutter Cleaning Newton-le-Willows — Frequently Asked Questions</h2>
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
              <h2 className="text-2xl font-bold text-foreground mb-6">All Newton-le-Willows Cleaning Services</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { href: '/services/roof-cleaning/newton-le-willows', title: 'Roof Cleaning Newton-le-Willows', desc: 'Soft wash moss and algae removal, biocide treatment' },
                  { href: '/services/render-cleaning/newton-le-willows', title: 'Render Cleaning Newton-le-Willows', desc: 'K-Rend, monocouche and sand-cement soft washing' },
                  { href: '/services/pressure-washing/newton-le-willows', title: 'Pressure Washing Newton-le-Willows', desc: 'Driveways, block paving, commercial hard surfaces' },
                  { href: '/services/cladding-cleaning/newton-le-willows', title: 'Cladding Cleaning Newton-le-Willows', desc: 'UPVC, metal composite and timber-effect soft washing' },
                  { href: '/services/exterior-cleaning/newton-le-willows', title: 'Exterior Cleaning Newton-le-Willows', desc: 'Full exterior package for all WA12 property types' },
                  { href: '/locations/newton-le-willows', title: 'Newton-le-Willows Location Hub', desc: 'All R.R.M services across WA12' },
                ].map(({ href, title, desc }) => (
                  <Link key={href} href={href} className="group p-5 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">We Clean Gutters Across WA12</h2>
              <div className="flex flex-wrap gap-2">
                {['Earlestown', 'Vulcan Village', 'Newton Common', 'Parkside', 'Newton-le-Willows Village', 'Clock Face', 'Haydock', 'Golborne Road', 'Warrington Road'].map((area) => (
                  <span key={area} className="px-3 py-1 bg-secondary/50 rounded-full text-sm text-muted-foreground border border-secondary">{area}</span>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Free Gutter Cleaning Quote in Newton-le-Willows</h2>
              <p className="text-muted-foreground mb-6">
                R.R.M is based in Newton-le-Willows (WA12 8QY). Call for a same-week appointment. Fully insured, 47 five-star reviews.
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
                Local to WA12 · Fully insured · Free written quote · Same-week availability
              </p>
            </section>

          </div>
        </div>
      </main>
    </Layout>
  );
}
