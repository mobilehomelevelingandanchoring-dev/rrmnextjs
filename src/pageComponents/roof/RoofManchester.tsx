import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

/* ── Schemas ─────────────────────────────────────────────────────────────── */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/manchester/#service',
  name: 'Roof Cleaning Manchester',
  serviceType: 'Roof Cleaning',
  description:
    'Professional roof cleaning and soft wash moss treatment in Manchester. R.R.M External Cleaning Specialist removes moss, lichen, algae, and black spot from roof tiles across Greater Manchester using low-pressure soft washing and biodegradable biocide — safe for Victorian slate, concrete interlocking tiles, and modern clay tiles.',
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
      name: 'How much does roof cleaning cost in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Roof cleaning in Manchester typically costs between £200 and £600 for a standard residential property, depending on roof size, pitch, tile type, and the extent of moss and lichen growth. Properties with heavy lichen coverage or significant moss depth may require a two-visit biocide treatment programme. R.R.M provides free no-obligation quotes for all Manchester roof cleaning jobs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to clean roof tiles in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — when done correctly using soft washing at low pressure (below 100 PSI). High-pressure washing should never be used on roof tiles as it strips the surface coating from concrete tiles and can crack or lift slates. R.R.M uses soft wash systems and biodegradable biocide treatments that kill biological growth at the root without risking tile damage or voiding roof warranties.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you remove moss from a roof in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The correct method is soft washing — applying a biodegradable biocidal solution at low pressure (below 100 PSI). The biocide kills moss, lichen, and algae at the root. Thicker deposits of loose moss are first gently brushed off. The residual biocide continues working after the visit, and remaining growth gradually washes away with Manchester's rainfall over the following weeks. This approach is far safer than pressure washing, which can lift and crack tiles.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does roof cleaning last in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A professional soft wash roof clean with biocide treatment typically keeps a Manchester roof free of biological growth for 3–5 years. Manchester's wet climate means moss can return faster than in drier regions, but the residual biocide continues suppressing regrowth long after the initial clean. Applying a breathable roof tile sealer after cleaning extends this period further.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does roof cleaning add value to a Manchester property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — a clean roof significantly improves kerb appeal and first impressions, which directly affects buyer and valuation perception. More practically, moss and lichen trap moisture and accelerate tile deterioration, so regular cleaning genuinely extends the life of the roof covering. Some home insurers also require evidence of maintenance for certain roof-related claims.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Roof Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/' },
    { '@type': 'ListItem', position: 3, name: 'Manchester', item: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/manchester/' },
  ],
};

export function RoofManchester() {
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
              <li><Link href="/services/roof-cleaning/" className="text-primary hover:text-accent transition-colors">Roof Cleaning</Link></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-muted-foreground" aria-current="page">Manchester</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">

            <span className="sr-only">
              R.R.M External Cleaning Specialist provides professional roof cleaning and soft wash moss treatment in Manchester, Greater Manchester. The company removes moss, lichen, algae, and black spot from roof tiles using low-pressure soft washing and biodegradable biocide. Services cover Victorian slate roofs in Gorton, Levenshulme, and Ardwick, as well as concrete and clay tile roofs across Fallowfield, Didsbury, Chorlton, and the wider Greater Manchester area. Established 2016. Fully insured. Free no-obligation quotes.
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Roof Cleaning Manchester — Soft Wash &amp; Moss Treatment
            </h1>

            <p className="text-base text-foreground font-medium mb-4 max-w-3xl border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50 rounded-r">
              R.R.M External Cleaning Specialist offers professional roof cleaning in Manchester using soft wash biocide treatment — the only method safe for slate, concrete, and clay tiles. No pressure washing. No tile damage. Results last 3–5 years.
            </p>

            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
              Manchester&apos;s 800mm+ annual rainfall is the single biggest reason roofs here grow moss faster than almost anywhere else in England. We treat the growth at the root — not just blast it off the surface.
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
              {['Low-pressure soft wash only', 'Biodegradable biocide', 'Safe for all tile types', '3–5 year results', 'Fully insured'].map((item) => (
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
                Why Manchester Roofs Need Professional Cleaning
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Manchester is one of the wettest major cities in England. That persistent moisture, combined with the shade from closely-packed Victorian terraces and mature suburban trees, creates near-perfect conditions for moss, algae, and lichen to colonise roof tiles. Once established, biological growth accelerates tile deterioration — moss roots work into the surface coating of concrete tiles and into the joints of slate, progressively lifting and cracking them.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Victorian and Edwardian slate roofs on the terraces of Gorton, Levenshulme, and Ardwick are particularly vulnerable. Slate is a premium material that lasts 100+ years when maintained, but becomes fragile when saturated moss holds moisture against the surface through freeze-thaw cycles. The concrete interlocking tiles on 1970s–1990s properties in Fallowfield, Rusholme, and Whalley Range also show rapid moss growth — the rough textured surface is ideal for spore attachment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>The only safe treatment is soft washing</strong> — a low-pressure application of biodegradable biocide (below 100 PSI). High-pressure washing strips the surface coating from concrete tiles, cracks aging slates, and can lift ridge tiles. It also blasts living moss spores across the roof, accelerating regrowth. Soft washing kills the biological growth at the root, and the residual biocide continues working long after we leave.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Roof Types We Clean Across Manchester
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Victorian & Edwardian Slate Roofs',
                    desc: 'The classic terraced housing stock of Gorton, Levenshulme, Ardwick, and Hulme. Natural slate requires very low pressure and careful biocide selection to avoid surface staining. We have extensive experience with Manchester\'s heritage roofing.',
                  },
                  {
                    title: 'Concrete Interlocking Tiles',
                    desc: '1970s–1990s housing in Fallowfield, Rusholme, and Chorlton typically has concrete interlocking tiles — a rough surface that traps moss spores readily. Soft wash clears the full tile face including recessed edges.',
                  },
                  {
                    title: 'Clay Plain Tiles',
                    desc: 'Common on larger Victorian and Edwardian semis in Didsbury and Whalley Range. Clay is more fragile than concrete — pressure washing risks cracking. Soft wash is the only appropriate method.',
                  },
                  {
                    title: 'Modern Profiled Tiles',
                    desc: 'New-build and refurbished properties across Greater Manchester with modern concrete or fibre cement profiled tiles. Fast-growing algae streaks develop within 5–7 years in Manchester\'s climate — regular soft wash treatment prevents this.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-secondary/30 rounded-lg p-5 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">How Roof Cleaning Works</h2>
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Roof inspection and tile condition assessment', desc: 'We inspect the roof from ground level and, where appropriate, from a safe access position — checking for broken, cracked, or displaced tiles and assessing the extent of biological growth before treatment.' },
                  { step: '2', title: 'Loose moss removal (where required)', desc: 'Where moss is thick enough to form a physical layer, we gently brush off the loose deposits before biocide application. This ensures full contact between the biocide and the tile surface.' },
                  { step: '3', title: 'Soft wash biocide application', desc: 'We apply a biodegradable biocidal solution at low pressure (below 100 PSI) across the entire roof surface. The biocide penetrates and kills moss, lichen, algae, and black spot mould at the root.' },
                  { step: '4', title: 'Residual treatment period', desc: "The biocide continues working after we leave. Remaining biological growth dies off and washes away with Manchester's rainfall over the following weeks, leaving a progressively cleaner surface without requiring a second high-pressure visit." },
                  { step: '5', title: 'Optional: tile sealing', desc: 'A breathable tile sealer can be applied after the surface is clean and dry, extending the period before regrowth to 5–7 years and providing additional water resistance through freeze-thaw cycles.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">{item.step}</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </ol>
            </section>

            <section className="mb-12" itemScope itemType="https://schema.org/FAQPage">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Roof Cleaning Manchester — Your Questions Answered
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: 'How much does roof cleaning cost in Manchester?',
                    a: 'Roof cleaning in Manchester typically costs between £200 and £600 for a standard residential property, depending on roof size, pitch, tile type, and the extent of moss and lichen growth. Heavy lichen coverage may require a two-visit biocide treatment programme. R.R.M provides free no-obligation quotes for all Manchester roof cleaning jobs.',
                  },
                  {
                    q: 'Is it safe to clean roof tiles in Manchester?',
                    a: 'Yes — when done correctly using soft washing at low pressure (below 100 PSI). High-pressure washing should never be used on roof tiles as it strips the surface coating from concrete tiles and can crack or lift slates. R.R.M uses soft wash systems and biodegradable biocide that kill biological growth without risking tile damage.',
                  },
                  {
                    q: 'How do you remove moss from a roof in Manchester?',
                    a: "The correct method is soft washing — applying a biodegradable biocidal solution at low pressure. The biocide kills moss, lichen, and algae at the root. Thicker deposits of loose moss are first gently brushed off. The residual biocide continues working after the visit, and remaining growth washes away with Manchester's rainfall over the following weeks.",
                  },
                  {
                    q: 'How long does roof cleaning last in Manchester?',
                    a: "A professional soft wash roof clean with biocide treatment typically keeps a Manchester roof free of biological growth for 3–5 years. Manchester's wet climate means moss can return faster than in drier regions, but the residual biocide continues suppressing regrowth long after the clean. Applying a breathable tile sealer extends this period further.",
                  },
                  {
                    q: 'Does roof cleaning add value to a Manchester property?',
                    a: 'Yes — a clean roof significantly improves kerb appeal and buyer perception. More practically, moss and lichen trap moisture and accelerate tile deterioration, so regular cleaning genuinely extends the life of the roof covering. Some insurers also require evidence of maintenance for certain roof-related claims.',
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

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Other Manchester Cleaning Services</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Gutter Cleaning Manchester', href: '/services/gutter-cleaning/manchester/' },
                  { label: 'Render Cleaning Manchester', href: '/services/render-cleaning/manchester/' },
                  { label: 'Pressure Washing Manchester', href: '/services/pressure-washing/manchester/' },
                  { label: 'Exterior Cleaning Manchester', href: '/services/exterior-cleaning/manchester/' },
                  { label: 'Cladding Cleaning Manchester', href: '/services/cladding-cleaning/manchester/' },
                  { label: 'All Manchester Services', href: '/locations/manchester/' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block p-4 bg-secondary/30 rounded-lg border border-secondary hover:border-amber-400 hover:bg-amber-50/30 transition-colors text-sm font-medium text-foreground hover:text-amber-700"
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-amber-500/20 to-amber-600/10 rounded-xl p-8 border border-amber-400/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Get a Free Roof Cleaning Quote in Manchester
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Stop moss damaging your tiles. Free quote, no obligation — soft wash specialists covering all of Greater Manchester.
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
