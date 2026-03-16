import Link from 'next/link';
import { ChevronRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pressure Washing Newton-le-Willows',
  description:
    'Professional pressure washing in Newton-le-Willows, WA12. Hot-water driveway cleaning, block paving, Indian sandstone, and commercial hard surfaces across Earlestown, Newton Common, Parkside and Newton Business Park. Oil stain removal with 180°C hot water machine.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'R.R.M External Cleaning Specialist',
    telephone: '+447845463877',
    address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
  },
  areaServed: { '@type': 'City', name: 'Newton-le-Willows', containedInPlace: { '@type': 'AdministrativeArea', name: 'St Helens Metropolitan Borough' } },
  serviceType: 'Pressure Washing',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' },
  offers: { '@type': 'Offer', priceCurrency: 'GBP', priceSpecification: { '@type': 'PriceSpecification', minPrice: '80', maxPrice: '200', priceCurrency: 'GBP' } },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does pressure washing a driveway cost in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Driveway pressure washing in Newton-le-Willows (WA12) typically costs £80–£200 for a standard residential driveway, depending on surface area, material, and level of staining. Block paving is at the higher end due to the time needed for re-sanding joints after cleaning. Indian sandstone on extensions requires careful pressure calibration. Larger commercial car parks and estate roads are priced per square metre. Free written quotes provided after inspection.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I pressure wash my driveway in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most Newton-le-Willows driveways benefit from cleaning every 12–18 months. North West rainfall and M6/M62 airborne diesel particulates accelerate algae and moss growth in WA12. Block paving on estates in Newton Common and Parkside, where cars park over the same area daily, accumulates oil residue quickly and may need annual cleaning. Applying a surface sealant after cleaning extends the interval significantly.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is pressure washing safe for block paving in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, when done correctly. We set machine pressure to 1,200–1,800 PSI for block paving — high enough to remove moss, algae, and soiling but low enough not to dislodge blocks or erode jointing sand excessively. After cleaning, we re-fill all joints with kiln-dried sand as standard. This step is essential: without sand in the joints, block paving loses structural integrity and individual blocks can rock or shift under vehicle loads.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you remove oil stains from a driveway in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We use a combination of specialist alkaline degreaser pre-treatment and 180°C hot water pressure washing to remove oil and fuel stains from concrete, tarmac, and block paving driveways in WA12. Cold water alone cannot emulsify aged engine oil — the combination of heat and degreaser breaks down the hydrocarbon chain, allowing it to be flushed from the surface. Fresh oil stains respond in one treatment; older, oxidised staining may require a second application.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does pressure washing take in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard residential driveway in Newton-le-Willows takes 1–3 hours depending on size, surface type, and contamination level. Block paving takes longer than concrete due to joint re-sanding. A full exterior clean including driveway, patio, and paths typically takes half a day. Commercial car parks and estate roads are quoted on site and typically completed in a single day.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Pressure Washing', item: 'https://rrmexternalcleaningspecialist.co.uk/services/pressure-washing' },
    { '@type': 'ListItem', position: 3, name: 'Newton-le-Willows', item: 'https://rrmexternalcleaningspecialist.co.uk/services/pressure-washing/newton-le-willows' },
  ],
};

const faqs = [
  {
    q: 'How much does pressure washing a driveway cost in Newton-le-Willows?',
    a: 'Driveway pressure washing in WA12 typically costs £80–£200. Block paving is higher due to joint re-sanding; Indian sandstone requires careful pressure calibration. Commercial surfaces priced per square metre. Free written quotes after inspection.',
  },
  {
    q: 'How often should I pressure wash my driveway in Newton-le-Willows?',
    a: 'Every 12–18 months for most WA12 driveways. M6/M62 diesel particulates and North West rainfall accelerate algae growth. Block paving on high-traffic estate roads in Newton Common and Parkside accumulates oil residue quickly and may need annual cleaning.',
  },
  {
    q: 'Is pressure washing safe for block paving in Newton-le-Willows?',
    a: 'Yes. We set 1,200–1,800 PSI for block paving — removing moss and soiling without dislodging blocks. We re-fill all joints with kiln-dried sand as standard after every clean. Without re-sanding, blocks can rock and shift under vehicle loads.',
  },
  {
    q: 'Can you remove oil stains from a driveway in Newton-le-Willows?',
    a: 'Yes. Alkaline degreaser pre-treatment combined with 180°C hot water pressure washing emulsifies and flushes oil and fuel stains from concrete, tarmac, and block paving in WA12. Fresh stains respond in one treatment; older oxidised staining may need two applications.',
  },
  {
    q: 'How long does pressure washing take in Newton-le-Willows?',
    a: 'A standard residential driveway takes 1–3 hours. Block paving takes longer due to joint re-sanding. A full exterior clean (driveway, patio, paths) typically takes half a day. Commercial car parks quoted on site, usually completed in one day.',
  },
];

export function PressureNewtonLeWillows() {
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
              <li><Link href="/services/pressure-washing" className="text-primary hover:text-accent transition-colors">Pressure Washing</Link></li>
              <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
              <li className="text-primary-foreground/70" aria-current="page">Newton-le-Willows</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">
            <p className="sr-only">
              R.R.M External Cleaning Specialist provides professional pressure washing in Newton-le-Willows, WA12, covering residential driveways in Newton Common and Parkside, Indian sandstone patios on extensions in Newton-le-Willows village, and commercial hard surfaces at Newton Business Park and Haydock Industrial Estate. Hot-water 180°C machine used for oil stain removal. Fully insured, 47 five-star reviews. Based at 9 Noon Ct WA12 8QY. Contact: 07845 463877.
            </p>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pressure Washing in Newton-le-Willows — Driveways &amp; Hard Surfaces WA12
            </h1>

            <p className="text-lg text-muted-foreground mb-4 border-l-4 border-amber-400 pl-4 bg-amber-50/10 py-2 rounded-r">
              <strong>Driveway pressure washing in Newton-le-Willows costs £80–£200.</strong> R.R.M uses commercial-grade hot-water machines at up to 180°C — removing oil stains, moss, algae, and diesel particulate build-up from block paving, concrete, tarmac, and Indian sandstone across WA12. Block paving joints re-sanded as standard after every clean.
            </p>

            <p className="text-muted-foreground mb-6">
              Newton-le-Willows is based at the M6 (J23) and M62 (J9) junction — one of the busiest motorway intersections in the North West. On-street parking and driveway surfaces across Earlestown, Newton Common, and Parkside accumulate tyre deposits, engine oil, and diesel soot from this high-traffic corridor. Post-war residential estates with block paving from the 1990s and 2000s build-up compacted moss and algae in joint sand over time. Commercial operators at Newton Business Park and along the East Lancashire Road benefit from scheduled maintenance contracts that keep car park and service yard surfaces clean and HSE-compliant.
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Hard Surface Types We Clean in Newton-le-Willows</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { type: 'Block Paving', detail: 'Newton Common, Parkside estates — re-sanded after every clean as standard' },
                  { type: 'Concrete Driveways', detail: 'Earlestown terraces and post-war semis — oil stain removal with hot water + degreaser' },
                  { type: 'Tarmac Driveways', detail: 'Correct pressure to avoid aggregate loss — moss and algae removed safely' },
                  { type: 'Indian Sandstone', detail: 'Extensions in Newton-le-Willows village — 800 PSI maximum to prevent surface etching' },
                  { type: 'Patios & Paths', detail: 'Porcelain, natural stone, concrete slab — surface-specific pressure and technique' },
                  { type: 'Commercial Car Parks', detail: 'Newton Business Park, East Lancashire Road retail — scheduled maintenance contracts' },
                ].map(({ type, detail }) => (
                  <div key={type} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{type}</h3>
                    <p className="text-sm text-muted-foreground">{detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Pressure Washing Process in Newton-le-Willows</h2>
              <div className="space-y-4">
                {[
                  { n: 1, title: 'Surface Assessment', body: 'We identify the surface material and contamination type — oil, moss, algae, general soiling — and calibrate machine pressure accordingly. Indian sandstone is treated at below 800 PSI; concrete and tarmac can take up to 2,500 PSI.' },
                  { n: 2, title: 'Pre-Treatment', body: 'Oil stains receive an alkaline degreaser application 15–30 minutes before washing. Moss-heavy surfaces receive a biocide pre-treatment to kill growth at root level before blasting begins.' },
                  { n: 3, title: 'Hot-Water Pressure Wash', body: 'Our commercial machine runs at up to 180°C — the combination of heat and pressure emulsifies oil, kills biological growth on contact, and removes years of compacted surface soiling in a single pass.' },
                  { n: 4, title: 'Joint Re-Sanding', body: 'Block paving joints are topped up with kiln-dried sand after cleaning. This step is non-negotiable — it restores structural integrity to the paved area and prevents edge creep.' },
                  { n: 5, title: 'Optional Sealing', body: 'A surface sealant applied after cleaning locks in the colour, repels future oil and moss, and extends the time before re-cleaning is needed — typically doubling the interval between professional cleans.' },
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
              <h2 className="text-2xl font-bold text-foreground mb-6">Pressure Washing Newton-le-Willows — Frequently Asked Questions</h2>
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
                  { href: '/services/gutter-cleaning/newton-le-willows', title: 'Gutter Cleaning Newton-le-Willows', desc: 'Cast iron and UPVC gutter clearing, downpipe flushing' },
                  { href: '/services/roof-cleaning/newton-le-willows', title: 'Roof Cleaning Newton-le-Willows', desc: 'Soft wash moss and algae removal, biocide treatment' },
                  { href: '/services/render-cleaning/newton-le-willows', title: 'Render Cleaning Newton-le-Willows', desc: 'K-Rend, monocouche and sand-cement soft washing' },
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

            <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Free Pressure Washing Quote — Newton-le-Willows WA12</h2>
              <p className="text-muted-foreground mb-6">
                R.R.M is based in Newton-le-Willows. Same-week appointments across WA12. Fully insured, 47 five-star reviews.
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
                Local to WA12 · Fully insured · Free written quote · 47 five-star reviews
              </p>
            </section>

          </div>
        </div>
      </main>
    </Layout>
  );
}
