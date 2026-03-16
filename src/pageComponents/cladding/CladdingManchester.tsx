import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

/* ── Schemas ─────────────────────────────────────────────────────────────── */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/cladding-cleaning/manchester/#service',
  name: 'Cladding Cleaning Manchester',
  serviceType: 'Cladding Cleaning',
  description:
    'Professional cladding cleaning in Manchester using soft washing and biodegradable biocide — safe for UPVC, aluminium, metal cassette, and composite cladding. R.R.M External Cleaning Specialist removes urban pollution, algae, mould, and organic staining from commercial and residential cladding across Greater Manchester without surface damage.',
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
      name: 'How much does cladding cleaning cost in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cladding cleaning costs in Manchester vary depending on the building size, cladding type, height, and level of soiling. Residential UPVC cladding on a standard semi-detached typically costs £100–£300. Commercial cladding cleaning on office and retail premises is quoted individually following a free site assessment. R.R.M provides free no-obligation quotes for all Manchester cladding cleaning jobs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is soft washing safe for UPVC cladding in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — soft washing is the safest and most effective method for cleaning UPVC cladding. High-pressure washing can cause UPVC panels to bow, crack joints, or force water behind the cladding. Soft washing uses a low-pressure application of biodegradable cleaning solution that removes organic staining, algae, mould, and urban pollution without any physical risk to the panels or fixings.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you remove algae from cladding in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most effective method for removing algae from cladding in Manchester is soft washing — applying a specialist biodegradable biocidal solution at low pressure. The biocide kills algae, moss, green mould, and black spot at the root rather than just washing the visible surface. This prevents rapid regrowth, which is common when algae is simply pressure washed off without treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should commercial cladding be cleaned in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Commercial cladding in Manchester typically needs professional cleaning every 2–4 years, depending on the building's location, aspect, and cladding material. Buildings near busy roads (such as the A57 corridor or Piccadilly) accumulate urban pollution deposits more rapidly and may need cleaning every 1–2 years to maintain the expected appearance for commercial premises. A post-clean protective treatment significantly extends intervals.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best way to clean metal cladding in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Metal cassette and aluminium composite cladding (common on commercial properties in Ancoats, NOMA, and Spinningfields) is best cleaned using soft washing with a formulation designed for non-porous metal surfaces. This removes urban pollution, diesel particulates, and organic staining without leaving surface marks. For powder-coated aluminium, we use pH-neutral cleaning solutions to avoid any risk of coating damage.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Cladding Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/cladding-cleaning/' },
    { '@type': 'ListItem', position: 3, name: 'Manchester', item: 'https://rrmexternalcleaningspecialist.co.uk/services/cladding-cleaning/manchester/' },
  ],
};

export function CladdingManchester() {
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
              <li><Link href="/services/cladding-cleaning/" className="text-primary hover:text-accent transition-colors">Cladding Cleaning</Link></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-muted-foreground" aria-current="page">Manchester</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">

            <span className="sr-only">
              R.R.M External Cleaning Specialist provides professional cladding cleaning services in Manchester, Greater Manchester. The company specialises in soft wash cleaning of UPVC, aluminium, metal cassette, and composite cladding on residential and commercial buildings across Manchester — including Ancoats, the Northern Quarter, NOMA, Ardwick, Gorton, and the city centre. Established 2016. Fully insured. Free no-obligation quotes.
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cladding Cleaning Manchester — UPVC, Metal &amp; Aluminium
            </h1>

            <p className="text-base text-foreground font-medium mb-4 max-w-3xl border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50 rounded-r">
              R.R.M External Cleaning Specialist cleans UPVC, aluminium composite, and metal cassette cladding across Manchester using soft washing only — no pressure damage to panels or fixings. Urban pollution, algae, mould, and organic staining removed safely.
            </p>

            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
              Manchester&apos;s urban environment is particularly aggressive on external cladding. Diesel particulates from the M60 and city centre, combined with the city&apos;s high rainfall, create a pollution-and-moisture film that turns cladding grey and green within a few years. We reverse that.
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
              {['UPVC, metal & aluminium', 'Soft wash — no panel damage', 'Residential & commercial', 'Scheduled programmes available', 'Fully insured'].map((item) => (
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
                Why Cladding Gets Dirty Faster in Manchester
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Manchester&apos;s atmosphere is tougher on external cladding than almost anywhere else in the North West. The city&apos;s high traffic density — particularly along the M60, the A57(M), and the inner ring road — means diesel particulate and nitrogen oxide deposits settle on building surfaces rapidly. Unlike brick or render, cladding panels have smooth or lightly textured surfaces that show this pollution film clearly: UPVC turns from white to grey, powder-coated aluminium loses its lustre, and metal cassette cladding develops visible streaking from rain washing pollution deposits down the face.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                On top of pollution, Manchester&apos;s high rainfall and urban humidity mean biological growth — green algae, black spot mould, and lichen — colonises cladding surfaces within a few years, particularly on shaded north and east-facing aspects. On residential properties across Ardwick, Gorton, and social housing developments in Hulme and Moss Side, UPVC overcladding is particularly susceptible: the slightly porous joints between panels provide ideal conditions for algae to establish.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The correct cleaning method for all cladding types is soft washing — not pressure washing. High-pressure washing risks bowing UPVC panels, forcing water behind fixings, and scratching powder-coated surfaces. Soft washing applies biodegradable cleaning solution at very low pressure, doing the cleaning work chemically rather than physically.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Cladding Types We Clean in Manchester
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'UPVC Cladding',
                    desc: 'The most common cladding type on residential properties across Manchester — widespread on ex-council housing stock in Ardwick, Gorton, Hulme, and Moss Side. Soft washing removes the grey pollution film and green algae that develops in Manchester\'s climate, restoring the original white finish.',
                  },
                  {
                    title: 'Aluminium Composite Cladding (ACM)',
                    desc: 'Common on commercial office and retail premises across Ancoats, NOMA, and the city centre fringe. ACM panels accumulate urban pollution rapidly near major roads. We use pH-neutral solutions compatible with powder-coated aluminium finishes.',
                  },
                  {
                    title: 'Metal Cassette Cladding',
                    desc: 'Steel and aluminium cassette cladding on commercial and industrial premises around Manchester city centre and the inner ring road. Soft washing removes diesel staining and organic growth from the panel face and panel joints.',
                  },
                  {
                    title: 'Timber & Fibre Cement Cladding',
                    desc: 'Increasingly common on new residential developments across Manchester from 2010 onwards. Soft washing with specialist timber or fibre cement cleaner removes algae and biological growth without raising the grain or damaging the surface finish.',
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Cladding Cleaning Process</h2>
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Assessment of cladding type and soiling', desc: 'We identify the cladding material, fixing system, and soiling type before selecting the appropriate cleaning solution — pollution-focused for city-centre commercial, biocide-focused for residential with algae and mould growth.' },
                  { step: '2', title: 'Protect surrounding areas', desc: 'We protect planted borders, vehicles, and ground-level surfaces below the cladding before any cleaning solution is applied.' },
                  { step: '3', title: 'Soft wash application', desc: 'Biodegradable cleaning solution applied at low pressure to all cladding surfaces. For taller buildings, we use water-fed pole systems or cherry picker access to reach upper floors safely without scaffolding.' },
                  { step: '4', title: 'Low-pressure rinse', desc: 'A thorough low-pressure rinse removes the cleaning solution and loosened soiling, leaving panels clean and streak-free. Joints and recessed areas are given specific attention to avoid residue.' },
                  { step: '5', title: 'Inspection and maintenance schedule', desc: 'Final inspection confirms the clean result. For commercial clients, we recommend a scheduled maintenance programme — typically annual or bi-annual — to maintain the expected appearance consistently.' },
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
                Cladding Cleaning Manchester — Your Questions Answered
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: 'How much does cladding cleaning cost in Manchester?',
                    a: 'Costs vary depending on building size, cladding type, height, and level of soiling. Residential UPVC cladding on a standard semi-detached typically costs £100–£300. Commercial projects are quoted following a free site assessment. R.R.M provides free no-obligation quotes.',
                  },
                  {
                    q: 'Is soft washing safe for UPVC cladding in Manchester?',
                    a: 'Yes — soft washing is the safest and most effective method for cleaning UPVC cladding. High-pressure washing can bow UPVC panels, crack joints, or force water behind the cladding. Soft washing uses biodegradable cleaning solution at low pressure, removing staining without any physical risk to panels or fixings.',
                  },
                  {
                    q: 'How do you remove algae from cladding in Manchester?',
                    a: 'The most effective method is soft washing with a biodegradable biocidal solution. The biocide kills algae, moss, and black spot mould at the root rather than washing off the visible surface only. This prevents rapid regrowth, which is common when algae is simply pressure washed without treatment.',
                  },
                  {
                    q: 'How often should commercial cladding be cleaned in Manchester?',
                    a: "Commercial cladding in Manchester typically needs cleaning every 2–4 years. Buildings near busy roads accumulate pollution more rapidly and may need cleaning every 1–2 years. A post-clean protective treatment significantly extends intervals between cleans.",
                  },
                  {
                    q: 'What is the best way to clean metal cladding in Manchester?',
                    a: 'Metal cassette and aluminium composite cladding is best cleaned using soft washing with a formulation designed for non-porous metal surfaces. For powder-coated aluminium, we use pH-neutral cleaning solutions to avoid any risk of coating damage.',
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
                  { label: 'Render Cleaning Manchester', href: '/services/render-cleaning/manchester/' },
                  { label: 'Pressure Washing Manchester', href: '/services/pressure-washing/manchester/' },
                  { label: 'Roof Cleaning Manchester', href: '/services/roof-cleaning/manchester/' },
                  { label: 'Gutter Cleaning Manchester', href: '/services/gutter-cleaning/manchester/' },
                  { label: 'Exterior Cleaning Manchester', href: '/services/exterior-cleaning/manchester/' },
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
                Get a Free Cladding Cleaning Quote in Manchester
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                UPVC, aluminium, or metal — we assess and quote for free. Soft wash specialists covering all of Greater Manchester.
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
