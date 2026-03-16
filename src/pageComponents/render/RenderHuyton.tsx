import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/render-cleaning/huyton/#service',
  name: 'Render Cleaning Huyton',
  serviceType: 'Render Cleaning',
  description:
    'Professional render cleaning in Huyton, Merseyside using soft washing and biodegradable biocide — safe for K-Rend, monocouche, sand-and-cement, and silicone render. R.R.M External Cleaning Specialist removes algae, green and black staining, and pollution deposits from rendered properties across Huyton and the Knowsley borough without risking surface damage.',
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
    name: 'Huyton',
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Merseyside' },
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
      name: 'Can you pressure wash K-Rend render in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — high-pressure washing should never be used on K-Rend or monocouche render. It causes delamination, surface crazing, and can force water into the render substrate, leading to moisture ingress and expensive re-rendering. The only safe method for K-Rend in Huyton is soft washing — a low-pressure application of specialist biodegradable biocide that kills biological growth without damaging the render surface.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does render cleaning cost in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Render cleaning in Huyton typically costs between £120 and £450 for a residential property, depending on the size of the rendered surface, the render type, and the extent of biological or pollution staining. R.R.M provides free no-obligation assessments and quotes for all Huyton render cleaning jobs — prices are always confirmed upfront.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you remove algae from rendered walls in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The correct method is soft washing — applying a biodegradable biocidal solution at low pressure. The biocide kills algae, moss, black spot mould, and lichen at the root across the render surface. Huyton's Merseyside climate means algae and green staining on north-facing render is particularly rapid, and a post-clean render sealer significantly slows future growth.",
      },
    },
    {
      '@type': 'Question',
      name: 'How often should render be cleaned on Huyton properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Rendered walls in Huyton typically need professional cleaning every 3–5 years, depending on aspect (north-facing walls grow algae significantly faster in Merseyside's damp climate), render type, and whether a post-clean sealer was applied. A sealed render surface stays clean considerably longer than an untreated one.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is monocouche render common in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — monocouche render is common on refurbished and renovated properties across Huyton, particularly on post-war council and social housing stock that has been updated since the 1990s. Monocouche must be cleaned using soft washing only — never pressure washing. We use specialist biocidal solutions at controlled low pressure to remove algae and staining without affecting the render colour or texture.',
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
    { '@type': 'ListItem', position: 3, name: 'Huyton', item: 'https://rrmexternalcleaningspecialist.co.uk/services/render-cleaning/huyton/' },
  ],
};

export function RenderHuyton() {
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
              <li className="text-muted-foreground" aria-current="page">Huyton</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">

            <span className="sr-only">
              R.R.M External Cleaning Specialist provides professional render cleaning services in Huyton, Merseyside (L36). The company specialises in soft wash cleaning of K-Rend, monocouche, sand-and-cement, and silicone render on residential and commercial properties across Huyton — covering Roby, Dovecot, Stockbridge Village, Page Moss, Whiston, and the Prescot Road corridor. High-pressure washing is never used on render. Established 2016. Fully insured. Free no-obligation quotes.
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Render Cleaning Huyton — K-Rend &amp; Soft Wash Specialists
            </h1>

            <p className="text-base text-foreground font-medium mb-4 max-w-3xl border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50 rounded-r">
              R.R.M External Cleaning Specialist cleans K-Rend, monocouche, sand-and-cement, and silicone render across Huyton using soft washing only. Green streaks, black algae, and weather staining removed safely — no pressure damage. Free no-obligation quote.
            </p>

            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
              Rendered properties in Huyton turn green and grey within a few years in Merseyside&apos;s damp climate. The fix is soft washing — but using the wrong method on K-Rend or monocouche causes expensive surface damage. We&apos;ve cleaned hundreds of rendered properties in Merseyside without a single claim.
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
                Why Render in Huyton Gets Dirty — and What to Do About It
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rendered properties in Huyton face a specific combination of conditions that accelerates biological growth on external walls: consistent Atlantic rainfall from Merseyside&apos;s climate, relatively low levels of direct sunlight on north and east-facing aspects, and a humid urban atmosphere that keeps moisture in contact with the render surface for longer. The result is the familiar green and black staining that affects most rendered Huyton properties within 3–5 years of application.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                K-Rend has become increasingly common on refurbished and extended Huyton properties since the 2000s, while monocouche render is widespread on social and council housing stock that has been updated across the borough. Both these modern renders look clean and contemporary when new — and both are permanently damaged by high-pressure washing. K-Rend and monocouche are through-coloured renders with surface textures that delaminate or craze when subjected to pressure above 100 PSI.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Soft washing does the cleaning work through chemistry, not force. A biodegradable biocidal solution applied at low pressure kills algae, moss, and black spot mould at the root without touching the render surface mechanically. The result is a genuinely clean render that stays cleaner for longer — particularly when a post-clean hydrophobic sealer is applied afterwards.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Render Types We Clean in Huyton
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'K-Rend & Silicone Render',
                    desc: 'Increasingly common on Huyton new-builds, refurbishments, and house extensions from 2005 onwards. K-Rend is a silicone-modified through-colour render that is permanently damaged by high pressure. We use biocidal solutions approved for K-Rend surfaces.',
                  },
                  {
                    title: 'Monocouche Render',
                    desc: 'Common on refurbished post-war housing stock across the Knowsley borough. Through-coloured single-coat render with high algae susceptibility due to its textured surface. Soft wash with specialist monocouche cleaner restores original colour without damage.',
                  },
                  {
                    title: 'Sand-and-Cement Render',
                    desc: 'Common on older Huyton properties re-rendered at various points since the 1950s, particularly around Roby and Prescot Road. Slightly more tolerant of pressure, but still requires biocide pre-treatment for effective algae and moss removal.',
                  },
                  {
                    title: 'Pebbledash & Roughcast',
                    desc: "Common on inter-war properties and some post-war social housing across Huyton. Pebbledash's rough texture traps biological growth deeply — thorough biocide treatment followed by low-pressure rinsing is the only effective approach.",
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
                  { step: '1', title: 'Render type and condition assessment', desc: 'We identify the render type and assess the extent of biological growth and staining before selecting the correct biocide formulation. K-Rend, monocouche, and sand-and-cement each respond to different chemical approaches.' },
                  { step: '2', title: 'Pre-treatment application', desc: 'We apply biocidal solution at very low pressure across the full render surface. For heavily stained areas, a dwell period is allowed for the chemistry to fully penetrate and kill the biological growth.' },
                  { step: '3', title: 'Gentle low-pressure rinse', desc: 'After the dwell period, we rinse at controlled low pressure — enough to remove dead biological material, not enough to cause any surface damage.' },
                  { step: '4', title: 'Post-clean sealing (optional)', desc: 'A hydrophobic render sealer applied to the clean surface creates a water-repellent barrier that significantly slows future biological growth. Results typically extend to 4–6 years between cleans.' },
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
                Render Cleaning Huyton — Your Questions Answered
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: 'Can you pressure wash K-Rend render in Huyton?',
                    a: 'No — high-pressure washing should never be used on K-Rend or monocouche render. It causes delamination, surface crazing, and can force water into the render substrate. The only safe method is soft washing — a low-pressure application of specialist biodegradable biocide.',
                  },
                  {
                    q: 'How much does render cleaning cost in Huyton?',
                    a: 'Render cleaning in Huyton typically costs between £120 and £450 for a residential property, depending on the rendered surface area, render type, and extent of staining. R.R.M provides free no-obligation assessments and quotes — prices always confirmed upfront.',
                  },
                  {
                    q: 'How do you remove algae from rendered walls in Huyton?',
                    a: "The correct method is soft washing — applying a biodegradable biocidal solution at low pressure. The biocide kills algae, moss, and black spot at the root. Huyton's Merseyside climate means algae on north-facing render is particularly rapid. A post-clean render sealer significantly slows future growth.",
                  },
                  {
                    q: 'How often should render be cleaned on Huyton properties?',
                    a: "Rendered walls in Huyton typically need cleaning every 3–5 years. North-facing walls in Merseyside's damp climate grow algae significantly faster. A sealed render surface stays clean considerably longer than an untreated one.",
                  },
                  {
                    q: 'Is monocouche render common in Huyton?',
                    a: "Yes — monocouche render is common on refurbished post-war housing stock across Huyton and the Knowsley borough. Monocouche must be cleaned using soft washing only. We use specialist biocidal solutions at controlled low pressure to remove algae without affecting the render colour or texture.",
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Other Cleaning Services in Huyton</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Gutter Cleaning Huyton', href: '/services/gutter-cleaning/huyton/' },
                  { label: 'Roof Cleaning Huyton', href: '/services/roof-cleaning/huyton/' },
                  { label: 'Pressure Washing Huyton', href: '/services/pressure-washing/huyton/' },
                  { label: 'Exterior Cleaning Huyton', href: '/services/exterior-cleaning/huyton/' },
                  { label: 'Cladding Cleaning Huyton', href: '/services/cladding-cleaning/huyton/' },
                  { label: 'All Huyton Services', href: '/locations/huyton/' },
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
                Get a Free Render Cleaning Quote in Huyton
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                K-Rend, monocouche, or sand-and-cement — we assess and quote for free. Soft wash specialists covering Huyton and Knowsley.
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
