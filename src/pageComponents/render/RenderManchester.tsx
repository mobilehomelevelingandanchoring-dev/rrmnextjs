import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

/* ── Schemas ─────────────────────────────────────────────────────────────── */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/render-cleaning/manchester/#service',
  name: 'Render Cleaning Manchester',
  serviceType: 'Render Cleaning',
  description:
    'Professional render cleaning in Manchester using soft washing and biodegradable biocide — safe for K-Rend, monocouche, sand-and-cement, and silicone render. R.R.M External Cleaning Specialist removes algae, green staining, black spot mould, and pollution deposits from rendered properties across Greater Manchester without risking surface damage.',
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
      name: 'Can you pressure wash K-Rend render in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — high-pressure washing should never be used on K-Rend or monocouche render. It causes delamination, surface crazing, and can penetrate the render substrate, leading to moisture ingress and expensive re-rendering. The only safe cleaning method for K-Rend is soft washing — a low-pressure application of specialist biodegradable biocide that kills biological growth without damaging the render surface.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you clean exterior render on a Manchester property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The correct method is soft washing — applying a biodegradable biocidal cleaning solution at low pressure (below 100 PSI). The solution kills algae, moss, black spot mould, and lichen at the root. For heavier pollution staining on commercial properties, a specialist render cleaning pre-treatment is applied first. The surface is then rinsed at low pressure, leaving a clean, undamaged finish. Post-clean render sealing can be applied to extend results by 2–3 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does render cleaning cost in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Render cleaning in Manchester typically costs between £150 and £500 for a residential property, depending on the size of the rendered surface, the render type, and the extent of biological or pollution staining. Commercial render cleaning projects are quoted individually. R.R.M provides free no-obligation assessments and quotes for all Manchester render cleaning jobs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should rendered walls be cleaned in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Rendered walls in Manchester typically need professional cleaning every 3–5 years, depending on the render type, aspect (north-facing walls grow algae significantly faster), and whether a post-clean sealer was applied. Manchester's high annual rainfall and urban atmosphere mean biological growth develops quickly on untreated surfaces. A sealed render surface stays clean for considerably longer.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best way to clean monocouche render in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monocouche render must be cleaned using soft washing — not pressure washing. Monocouche is a through-coloured single-coat render and its surface texture is highly susceptible to damage from high pressure. We use specialist biocidal solutions applied at controlled low pressure to remove green and black algae, lichen, and pollution staining from monocouche surfaces across Manchester without affecting the render colour or texture.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Render Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/render-cleaning/' },
    { '@type': 'ListItem', position: 3, name: 'Manchester', item: 'https://rrmexternalcleaningspecialist.co.uk/services/render-cleaning/manchester/' },
  ],
};

export function RenderManchester() {
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
              <li><Link href="/services/render-cleaning/" className="text-primary hover:text-accent transition-colors">Render Cleaning</Link></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-muted-foreground" aria-current="page">Manchester</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">

            <span className="sr-only">
              R.R.M External Cleaning Specialist provides professional render cleaning services in Manchester, Greater Manchester. The company specialises in soft wash cleaning of K-Rend, monocouche, sand-and-cement, and silicone render on residential and commercial properties across Manchester including Gorton, Ardwick, Ancoats, Levenshulme, Rusholme, and the city centre. High-pressure washing is never used on render surfaces. Established 2016. Fully insured. Free no-obligation quotes.
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Render Cleaning Manchester — K-Rend &amp; Monocouche Specialists
            </h1>

            <p className="text-base text-foreground font-medium mb-4 max-w-3xl border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50 rounded-r">
              R.R.M External Cleaning Specialist cleans K-Rend, monocouche, sand-and-cement, and silicone render across Manchester using soft washing only — no pressure washing, no surface damage. Green streaks, black algae, and pollution staining removed safely.
            </p>

            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
              Rendered properties in Manchester turn green and black within a few years. The culprits are algae, black spot mould, and urban pollution. The fix is straightforward — but the method matters enormously. Get it wrong and you&apos;re re-rendering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" asChild className="group">
                <a href="tel:+447845463877">
                  <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Free Assessment: 07845 463877
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact/">Request Quote</Link>
              </Button>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {['K-Rend & monocouche specialists', 'Soft wash only — no pressure damage', 'Residential & commercial', 'Post-clean render sealing available', 'Fully insured'].map((item) => (
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
                Why Manchester Render Goes Green — and What to Do About It
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rendered properties are increasingly common across Manchester — K-Rend has become the finish of choice for new-builds and refurbishments across the city from Ancoats to Gorton since the 2000s, while monocouche render is widespread on 1980s–1990s refurbished housing stock. Both look striking when clean. Both turn an unappealing green-grey within a few years in Manchester&apos;s wet urban climate.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The cause is biological: algae, green and black mould, and lichen colonise the slightly porous surface of render and establish rapidly in north-facing and shaded aspects. Manchester&apos;s high annual rainfall and urban particulate pollution (from the M60 and city-centre traffic) create a nutrient-rich film on the render surface that accelerates this growth. Within 3–5 years of application, most Manchester renders are showing visible discolouration.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The solution is soft washing — but the method matters critically for render. K-Rend, monocouche, and silicone renders are <strong>all damaged by high-pressure washing</strong>. Pressure above 100 PSI causes surface crazing and can force water behind the render, leading to delamination and damp. We use purpose-formulated biocidal treatments applied at very low pressure — the chemistry does the work, not the force of the water.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Render Types We Clean in Manchester
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'K-Rend & Silicone Render',
                    desc: 'The most common modern render on Manchester new-builds and refurbishments from 2005 onwards. K-Rend is a silicone-modified through-colour render that is exceptionally soft wash-sensitive — high pressure causes permanent surface crazing. We use K-Rend approved biocidal cleaning solutions.',
                  },
                  {
                    title: 'Monocouche Render',
                    desc: 'Widespread on 1980s–1990s refurbished housing stock in Ardwick, Gorton, and Levenshulme. Through-coloured single-coat render with a high algae susceptibility due to its open texture. Soft wash with specialist monocouche cleaner restores the original colour without surface damage.',
                  },
                  {
                    title: 'Sand-and-Cement Render',
                    desc: 'Common on older Manchester properties that have been re-rendered at various points since the 1950s. More tolerant of slightly higher pressure than K-Rend, but still requires a biodegradable biocide pre-treatment for effective algae and moss removal.',
                  },
                  {
                    title: 'Commercial Rendered Facades',
                    desc: 'Office and retail premises across the Northern Quarter, NOMA, and Piccadilly Quarter increasingly feature rendered facades that pick up urban pollution staining rapidly. We offer scheduled commercial render cleaning programmes to maintain consistent appearance.',
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Render Cleaning Process</h2>
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Render type and condition assessment', desc: 'We identify the render type and assess the extent of biological growth and staining before selecting the appropriate biocide formulation. Different renders respond to different chemical approaches.' },
                  { step: '2', title: 'Pre-treatment application', desc: 'We apply the biocidal solution at very low pressure across the full render surface. For heavily stained areas, a dwell period is allowed for the chemistry to fully penetrate and kill the biological growth.' },
                  { step: '3', title: 'Gentle low-pressure rinse', desc: 'After the dwell period, we rinse the render at controlled low pressure — enough to remove the dead biological material, not enough to cause any surface damage.' },
                  { step: '4', title: 'Post-clean sealing (optional)', desc: 'A hydrophobic render sealer can be applied to the cleaned surface, creating a water-repellent barrier that significantly slows future biological growth. Results typically extend to 4–6 years between cleans.' },
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
                Render Cleaning Manchester — Your Questions Answered
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: 'Can you pressure wash K-Rend render in Manchester?',
                    a: 'No — high-pressure washing should never be used on K-Rend or monocouche render. It causes delamination, surface crazing, and can force water into the render substrate. The only safe method is soft washing — a low-pressure application of specialist biodegradable biocide that kills biological growth without damaging the render surface.',
                  },
                  {
                    q: 'How do you clean exterior render on a Manchester property?',
                    a: 'The correct method is soft washing — applying a biodegradable biocidal cleaning solution at low pressure (below 100 PSI). The solution kills algae, moss, black spot mould, and lichen at the root. The surface is then rinsed at low pressure. Post-clean render sealing can be applied to extend results by 2–3 years.',
                  },
                  {
                    q: 'How much does render cleaning cost in Manchester?',
                    a: 'Render cleaning in Manchester typically costs between £150 and £500 for a residential property, depending on the size of the rendered surface, render type, and extent of staining. Commercial projects are quoted individually. R.R.M provides free no-obligation assessments and quotes.',
                  },
                  {
                    q: 'How often should rendered walls be cleaned in Manchester?',
                    a: "Rendered walls in Manchester typically need professional cleaning every 3–5 years. North-facing walls grow algae significantly faster. Manchester's high rainfall means biological growth develops quickly on untreated surfaces. A sealed render surface stays clean for considerably longer.",
                  },
                  {
                    q: 'What is the best way to clean monocouche render in Manchester?',
                    a: 'Monocouche must be cleaned using soft washing only. Monocouche is a through-coloured single-coat render and its texture is highly susceptible to damage from high pressure. We use specialist biocidal solutions at controlled low pressure to remove algae, lichen, and pollution staining without affecting the render colour or texture.',
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
                Get a Free Render Cleaning Quote in Manchester
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                K-Rend, monocouche, or sand-and-cement — we assess and quote for free. Soft wash specialists serving all of Greater Manchester.
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
