import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

/* ── Schemas ─────────────────────────────────────────────────────────────── */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/pressure-washing/manchester/#service',
  name: 'Pressure Washing Manchester',
  serviceType: 'Pressure Washing',
  description:
    'Professional pressure washing and jet washing services in Manchester. R.R.M External Cleaning Specialist cleans driveways, patios, car parks, paths, and commercial hard surfaces across Greater Manchester using hot-water pressure washing — removing moss, algae, oil stains, and embedded grime from block paving, concrete, tarmac, and Indian sandstone.',
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
      name: 'How much does pressure washing cost in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pressure washing costs in Manchester vary by surface type and size. A standard residential driveway typically costs £80–£200. A patio costs £80–£180. Larger commercial car parks and hard standing areas are quoted individually. R.R.M provides free no-obligation quotes — prices are confirmed upfront with no hidden charges.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is pressure washing good for block paving in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — hot-water pressure washing is the most effective way to clean block paving in Manchester. It removes embedded moss, algae, oil stains, and compacted grime that weathering and regular cleaning cannot shift. After cleaning, kiln-dried sand should be brushed back into the joints, and a post-clean block paving sealer applied to protect against future staining and moss regrowth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does pressure washing damage driveways in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not when done correctly. Concrete, block paving, and tarmac surfaces are robust and handle pressure washing well when the correct nozzle, pressure setting, and angle are used. Softer surfaces like sandstone, Indian sandstone, and limestone require lower pressure combined with specialist stone cleaners — using a general pressure washer on these surfaces can cause surface erosion. R.R.M always assesses the surface type before choosing the right method and pressure setting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you pressure wash tarmac in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — tarmac driveways and car parks can be pressure washed effectively. We use hot-water pressure washing to remove moss, algae, oil stains, and embedded grime from tarmac surfaces. Tarmac is more susceptible to oil penetration than concrete, so we recommend a specialist oil stain pre-treatment for driveways with significant oil spotting before the main wash.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does pressure washing take in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most residential driveways in Manchester are completed within 1–3 hours depending on size, surface type, and level of soiling. Larger properties, commercial car parks, or heavily soiled surfaces take longer. We always complete the job in a single visit where possible and leave the site clean with no residual mess.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Pressure Washing', item: 'https://rrmexternalcleaningspecialist.co.uk/services/pressure-washing/' },
    { '@type': 'ListItem', position: 3, name: 'Manchester', item: 'https://rrmexternalcleaningspecialist.co.uk/services/pressure-washing/manchester/' },
  ],
};

export function PressureManchester() {
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
              <li><Link href="/services/pressure-washing/" className="text-primary hover:text-accent transition-colors">Pressure Washing</Link></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-muted-foreground" aria-current="page">Manchester</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">

            <span className="sr-only">
              R.R.M External Cleaning Specialist provides professional pressure washing and jet washing services in Manchester, Greater Manchester. The company cleans driveways, patios, paths, car parks, and commercial hard surfaces across Manchester including Gorton, Levenshulme, Fallowfield, Ardwick, Didsbury, and the city centre. Services include hot-water pressure washing, block paving cleaning, tarmac cleaning, concrete cleaning, and Indian sandstone cleaning. Established 2016. Fully insured. Free no-obligation quotes.
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Pressure Washing Manchester — Driveways, Patios &amp; Commercial
            </h1>

            <p className="text-base text-foreground font-medium mb-4 max-w-3xl border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50 rounded-r">
              R.R.M External Cleaning Specialist provides affordable hot-water pressure washing in Manchester for block paving driveways, concrete patios, tarmac car parks, Indian sandstone, and commercial hard surfaces. Free quote. Established 2016. 47 five-star reviews.
            </p>

            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
              Manchester&apos;s wet climate turns driveways and patios green within 12–18 months. Hot-water jet washing lifts the moss, algae, oil stains, and embedded grime that regular cleaning simply cannot shift — and the results last years, not weeks.
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
              {['Hot-water pressure washing', 'All surface types covered', 'Post-clean sealing available', 'Residential & commercial', 'Fully insured'].map((item) => (
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
                Pressure Washing in Manchester — Why Properties Here Need It
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Driveways and patios in Manchester have a harder time staying clean than most of England. The city&apos;s 800mm+ annual rainfall and the shade from closely-packed terraced streets create ideal conditions for moss and algae to colonise any hard surface. Block paving driveways in Levenshulme, Gorton, and Fallowfield go dark green within 12–18 months without regular treatment. Indian sandstone patios, popular on extensions across Didsbury and Chorlton, develop a slippery algae film that is a genuine slip hazard.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                On-street parking is scarce across most of inner Manchester, so many properties use their driveway heavily — which means oil spotting from vehicles is common on concrete and tarmac. Standard domestic pressure washers, even on full power, cannot shift oil that has soaked into a porous surface. Hot-water pressure washing at 180°C lifts and emulsifies oil staining that cold water simply moves around.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Commercial properties — car parks on retail parks off the A57, loading bays, and industrial yard surfaces — also accumulate heavy soiling rapidly in Manchester&apos;s urban environment. We offer commercial pressure washing programmes across the city.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Surfaces We Pressure Wash Across Manchester
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Block Paving Driveways',
                    desc: 'The most common driveway surface in Manchester suburbs — Levenshulme, Gorton, Fallowfield, and Whalley Range. Hot-water pressure washing with a rotary surface cleaner removes moss, algae, oil, and weed matter. Kiln-dried sand re-bedded into joints after cleaning.',
                  },
                  {
                    title: 'Concrete Driveways & Paths',
                    desc: 'Concrete surfaces are robust and respond well to high-pressure washing. Common on older properties across Ardwick and inner Manchester. Oil stain pre-treatment applied before the main wash for heavily stained areas.',
                  },
                  {
                    title: 'Tarmac Driveways & Car Parks',
                    desc: 'Tarmac is common on commercial properties and some residential driveways across Manchester. Hot-water washing removes moss and oil effectively. Tarmac sealing after cleaning protects against future oil penetration and UV degradation.',
                  },
                  {
                    title: 'Indian Sandstone & Natural Stone Patios',
                    desc: 'Indian sandstone and limestone patios require lower pressure (500–800 PSI) combined with a specialist stone cleaner to prevent surface pitting. Common on garden extensions in Didsbury, Chorlton, and Fallowfield.',
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
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Pressure Wash Your Surface</h2>
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Surface assessment and method selection', desc: 'We assess the surface type, soiling level, and any sensitive areas (planted borders, drainage, adjacent render) before selecting the correct pressure setting and cleaning solution.' },
                  { step: '2', title: 'Pre-treatment for oil and biological growth', desc: 'A biodegradable biocide pre-treatment is applied to biological growth (moss, algae, lichen). For surfaces with oil staining, a specialist degrease is applied and allowed to dwell before washing.' },
                  { step: '3', title: 'Hot-water pressure wash', desc: 'We use a hot-water pressure washer at 180°C with a rotary surface cleaner for driveways and patios, or a lance for edges, steps, and textured areas. The hot water emulsifies oil and lifts biological matter far more effectively than cold pressure alone.' },
                  { step: '4', title: 'Re-sand (block paving) and edge clean', desc: 'Block paving joints are re-sanded with kiln-dried sand after washing to stabilise the blocks and prevent weed regrowth. All edges, borders, and abutments are cleaned by hand lance.' },
                  { step: '5', title: 'Optional: protective sealing', desc: 'A penetrating surface sealer can be applied to block paving, concrete, tarmac, or sandstone after cleaning to lock in the result and protect against staining, frost damage, and moss regrowth for 2–3 years.' },
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
                Pressure Washing Manchester — Your Questions Answered
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: 'How much does pressure washing cost in Manchester?',
                    a: 'Pressure washing costs in Manchester vary by surface type and size. A standard residential driveway typically costs £80–£200. A patio costs £80–£180. Larger commercial areas are quoted individually. R.R.M provides free no-obligation quotes — all prices confirmed upfront.',
                  },
                  {
                    q: 'Is pressure washing good for block paving in Manchester?',
                    a: 'Yes — hot-water pressure washing is the most effective way to clean block paving in Manchester. It removes embedded moss, algae, oil stains, and grime. After cleaning, kiln-dried sand should be brushed back into the joints, and a post-clean sealer applied to protect against future staining and moss regrowth.',
                  },
                  {
                    q: 'Does pressure washing damage driveways in Manchester?',
                    a: 'Not when done correctly. Concrete, block paving, and tarmac handle pressure washing well at the correct settings. Softer surfaces like sandstone and Indian sandstone require lower pressure with specialist stone cleaners. R.R.M always assesses surface type before choosing the right method.',
                  },
                  {
                    q: 'Can you pressure wash tarmac in Manchester?',
                    a: 'Yes — tarmac driveways and car parks can be pressure washed effectively. We use hot-water pressure washing to remove moss, algae, and oil stains. For driveways with significant oil spotting, a specialist oil pre-treatment is applied before the main wash.',
                  },
                  {
                    q: 'How long does pressure washing take in Manchester?',
                    a: 'Most residential driveways in Manchester are completed within 1–3 hours depending on size, surface type, and level of soiling. We always complete the job in a single visit where possible and leave the site clean.',
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
                  { label: 'Roof Cleaning Manchester', href: '/services/roof-cleaning/manchester/' },
                  { label: 'Render Cleaning Manchester', href: '/services/render-cleaning/manchester/' },
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
                Get a Free Pressure Washing Quote in Manchester
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Driveways, patios, car parks, and paths across Greater Manchester. Free quote — no obligation.
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
