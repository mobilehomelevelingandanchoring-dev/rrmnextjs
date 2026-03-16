import Link from 'next/link';
import { ChevronRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Roof Cleaning Newton-le-Willows',
  description:
    'Professional roof cleaning in Newton-le-Willows, WA12. Soft wash biocide treatment for Victorian slate, clay plain tiles and concrete interlocking tiles across Earlestown, Vulcan Village and Newton Common. Moss removal and residual biocide protection.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'R.R.M External Cleaning Specialist',
    telephone: '+447845463877',
    address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
  },
  areaServed: { '@type': 'City', name: 'Newton-le-Willows', containedInPlace: { '@type': 'AdministrativeArea', name: 'St Helens Metropolitan Borough' } },
  serviceType: 'Roof Cleaning',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' },
  offers: { '@type': 'Offer', priceCurrency: 'GBP', priceSpecification: { '@type': 'PriceSpecification', minPrice: '200', maxPrice: '550', priceCurrency: 'GBP' } },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does roof cleaning cost in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Roof cleaning in Newton-le-Willows typically costs £200–£550 for a standard semi-detached or terraced house. Victorian terraces in Earlestown with slate roofs at steep pitches are at the higher end; single-storey extensions and bungalows with concrete tiles are at the lower end. Pricing depends on roof area, pitch, moss thickness, and access requirements. Free written quotes provided after inspection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is soft washing safe for roof tiles in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Soft washing at below 100 PSI is the correct method for all roof tile types found in WA12 — Welsh slate on Victorian terraces, clay plain tiles on inter-war semis, and concrete interlocking tiles on post-war estates. High-pressure washing shatters fragile slate, erodes the granule surface of concrete tiles, and forces water under laps — causing more damage than the moss itself. Our biocide soft wash kills moss and algae at root level without mechanical abrasion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my roof have moss in Newton-le-Willows / WA12?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Newton-le-Willows receives 700–800 mm of rainfall per year, and the town's position inland between the M6 and M62 corridors means the air carries diesel particulates that accelerate biological growth. North-facing roof pitches and roofs shaded by mature trees in Earlestown and Newton Common stay damp for longer, creating ideal moss conditions. Concrete tiles on post-war estates have a slightly porous surface compared to fired clay or slate, making them particularly susceptible to green algae in North West conditions.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long do roof cleaning results last in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After professional biocide soft washing, most roofs in WA12 remain clean for 3–5 years. The residual biocide continues working for several months after application, killing moss spores as they attempt to re-establish. North-facing pitches and heavily shaded roofs in Earlestown and Newton Common may need re-treatment at the lower end of this range. Optional sealing after cleaning extends the interval further.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a clean roof add value to my property in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Mortgage surveyors and estate agents routinely flag moss-covered roofs as a maintenance concern that can reduce valuations or trigger further investigation. In Newton-le-Willows' active property market around Earlestown, a clean roof improves kerb appeal immediately and removes a common surveyor objection. It also prevents the structural damage that moss causes when rhizoids penetrate tile laps and mortar pointing — protecting the long-term value of the property.",
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
    { '@type': 'ListItem', position: 3, name: 'Newton-le-Willows', item: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/newton-le-willows' },
  ],
};

const faqs = [
  {
    q: 'How much does roof cleaning cost in Newton-le-Willows?',
    a: 'Roof cleaning in Newton-le-Willows typically costs £200–£550 for a standard home. Victorian terraces in Earlestown with steep slate pitches are at the higher end; single-storey extensions with concrete tiles are lower. Free written quotes provided after inspection.',
  },
  {
    q: 'Is soft washing safe for roof tiles in Newton-le-Willows?',
    a: 'Yes. Below 100 PSI soft washing is correct for Welsh slate on Earlestown terraces, clay tiles on inter-war semis, and concrete interlocking tiles on post-war estates. High-pressure washing shatters slate and erodes concrete tile granules. Our biocide kills moss at root level without mechanical damage.',
  },
  {
    q: 'Why does my roof have moss in Newton-le-Willows / WA12?',
    a: "WA12 receives 700–800 mm of annual rainfall and carries M6/M62 diesel particulates that accelerate biological growth. North-facing pitches and tree-shaded roofs in Earlestown and Newton Common stay damp longest. Concrete tiles on post-war estates have a more porous surface than slate, making them especially susceptible.",
  },
  {
    q: 'How long do roof cleaning results last in Newton-le-Willows?',
    a: 'Most WA12 roofs remain clean for 3–5 years after biocide soft washing. The residual biocide continues killing spores for months after application. North-facing pitches and shaded Earlestown roofs may need re-treatment at the lower end of this range.',
  },
  {
    q: 'Does a clean roof add value to my property in Newton-le-Willows?',
    a: "Yes. Mortgage surveyors flag moss-covered roofs as a maintenance concern that reduces valuations. In Newton-le-Willows' active property market, a clean roof improves kerb appeal and removes a common surveyor objection — protecting long-term value.",
  },
];

export function RoofNewtonLeWillows() {
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
              <li className="text-primary-foreground/70" aria-current="page">Newton-le-Willows</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">
            <p className="sr-only">
              R.R.M External Cleaning Specialist provides professional roof cleaning in Newton-le-Willows, WA12, serving Earlestown Victorian terraces with Welsh slate, Vulcan Village workers cottages, inter-war clay-tile semis, and post-war concrete tile estates in Newton Common and Parkside. Services include soft wash biocide treatment, loose moss removal, and optional sealing. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY. 47 five-star reviews. Contact: 07845 463877.
            </p>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Roof Cleaning in Newton-le-Willows — Soft Wash Specialists
            </h1>

            <p className="text-lg text-muted-foreground mb-4 border-l-4 border-amber-400 pl-4 bg-amber-50/10 py-2 rounded-r">
              <strong>Roof cleaning in Newton-le-Willows costs £200–£550</strong> for a typical home. R.R.M uses biodegradable biocide soft washing below 100 PSI — safe for Welsh slate, clay tiles, and concrete interlocking tiles across WA12 — removing moss and algae at root level and leaving a residual treatment that protects the surface for 3–5 years.
            </p>

            <p className="text-muted-foreground mb-6">
              Newton-le-Willows' mix of property ages means roofs across WA12 span three centuries of tile types. Victorian terraces in Earlestown and Vulcan Village carry original Welsh slate and clay plain tiles that require careful biocide-only treatment — high pressure on these materials causes irreversible splitting. Post-war semis in Newton Common and Parkside have concrete interlocking tiles from the 1960s–1980s which accumulate thick moss layers rapidly in North West conditions. All tile types benefit from the same fundamental approach: loose moss removed by hand, biocide applied at low pressure, residual treatment left to work over following months.
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Roof Types in Newton-le-Willows and WA12</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Welsh slate</strong> on Victorian terraces in Earlestown (Market Street, Church Street, Queen Street) is the most common older roof type in WA12. Slate is hard-wearing but brittle when aged — any tile struck by high-pressure water can crack along natural cleavage lines. We treat slate with biocide only, allowing natural weathering to shed dead moss over subsequent months.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Clay plain tiles</strong> appear on inter-war semi-detached properties along the A49 corridor and around Newton-le-Willows village. These carry hand-pressed surfaces that hold moisture and encourage green algae in the damp North West climate. Soft washing with a residual biocide eliminates growth and restores the original tile colour.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Concrete interlocking tiles</strong> on post-war estates in Newton Common and Parkside are the tile type most affected by moss in WA12. Their textured surface and porous concrete body absorb moisture, and the deep interlocking profile accumulates debris that retains damp year-round. These roofs typically need cleaning every 3–4 years without biocide treatment, extending to 5+ years after soft washing.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Roof Cleaning Process</h2>
              <div className="space-y-4">
                {[
                  { n: 1, title: 'Roof Inspection', body: 'We identify tile type, assess moss thickness and coverage, check ridge and hip pointing, and note any cracked or slipped tiles that need attention before cleaning begins.' },
                  { n: 2, title: 'Loose Moss Removal', body: 'Thick moss mats removed by soft brush from ground level or using a low-profile roof rake — never by walking on the tiles. This prevents damp from being trapped under dead moss during the biocide treatment phase.' },
                  { n: 3, title: 'Biocide Soft Wash', body: 'Biodegradable algaecide applied at below 100 PSI from ridge to eave, ensuring full coverage including hip tiles, valleys, and north-facing sections that carry the heaviest growth.' },
                  { n: 4, title: 'Residual Period', body: 'The biocide continues working for 4–12 weeks post-application, killing spores embedded in the tile surface and providing ongoing protection. Remaining moss falls naturally as it dies.' },
                  { n: 5, title: 'Optional Sealing', body: 'A breathable silicone sealant can be applied after the residual period to reduce water absorption and extend the time before re-treatment is needed — particularly effective on concrete tiles in WA12.' },
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
              <h2 className="text-2xl font-bold text-foreground mb-6">Roof Cleaning Newton-le-Willows — Frequently Asked Questions</h2>
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

            <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Free Roof Cleaning Quote — Newton-le-Willows WA12</h2>
              <p className="text-muted-foreground mb-6">
                R.R.M is based in Newton-le-Willows. Call for a no-obligation roof inspection and written quote. Fully insured, 47 five-star reviews.
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
