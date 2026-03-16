import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/huyton/#service',
  name: 'Roof Cleaning Huyton',
  serviceType: 'Roof Cleaning',
  description:
    'Professional roof cleaning and soft wash moss treatment in Huyton, Merseyside (L36). R.R.M External Cleaning Specialist removes moss, lichen, algae, and black spot from roof tiles across Huyton using low-pressure soft washing and biodegradable biocide — safe for the Victorian slate roofs of Roby and the concrete interlocking tiles found on post-war housing estates throughout Dovecot, Stockbridge Village, and Page Moss.',
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
      name: 'How much does roof cleaning cost in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Roof cleaning in Huyton typically costs between £200 and £550 for a standard residential property, depending on roof size, pitch, tile type, and the extent of moss and lichen growth. Properties with heavy lichen coverage may require a two-visit biocide treatment programme. R.R.M provides free no-obligation quotes for all Huyton roof cleaning jobs — prices are always confirmed upfront.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is soft washing safe for roof tiles in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — soft washing at low pressure (below 100 PSI) is the only safe method for cleaning roof tiles in Huyton. High-pressure washing strips the surface coating from concrete tiles and can crack or lift older slates. R.R.M uses soft wash systems and biodegradable biocide treatments that kill moss, lichen, and algae at the root without risking tile damage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do roofs in Huyton get mossy so quickly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Huyton's Merseyside location brings consistent Atlantic rainfall and humidity throughout the year, creating near-ideal conditions for moss and algae to colonise roof tiles. North and east-facing roof slopes are especially affected as they dry out less between rain events. The concrete interlocking tiles common on Huyton's post-war housing estates have a rough textured surface that retains moisture and accelerates moss growth.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does roof cleaning last in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A professional soft wash roof clean with biocide treatment typically keeps a Huyton roof free of biological growth for 3–5 years. Huyton's wet Merseyside climate means moss can return faster than in drier regions, but the residual biocide continues suppressing regrowth long after the clean. Applying a breathable tile sealer after cleaning extends this period further.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does roof cleaning add value to a Huyton property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — a clean roof significantly improves kerb appeal and buyer perception, which matters particularly in Huyton's competitive Merseyside property market. More practically, moss and lichen trap moisture against tiles and accelerate their deterioration, so regular cleaning genuinely extends the life of the roof covering and avoids costly re-roofing work.",
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
    { '@type': 'ListItem', position: 3, name: 'Huyton', item: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/huyton/' },
  ],
};

export function RoofHuyton() {
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
              <li className="text-muted-foreground" aria-current="page">Huyton</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">

            <span className="sr-only">
              R.R.M External Cleaning Specialist provides professional roof cleaning and soft wash moss treatment in Huyton, Merseyside (L36). The company removes moss, lichen, algae, and black spot from roof tiles using low-pressure soft washing and biodegradable biocide, covering Roby, Dovecot, Stockbridge Village, Page Moss, Whiston, and the wider Knowsley area. Established 2016. Fully insured. Free no-obligation quotes.
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Roof Cleaning Huyton — Soft Wash &amp; Moss Treatment
            </h1>

            <p className="text-base text-foreground font-medium mb-4 max-w-3xl border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50 rounded-r">
              R.R.M External Cleaning Specialist provides professional roof cleaning in Huyton using soft wash biocide treatment — safe for all tile types including Victorian slate and concrete interlocking. No pressure washing. Results last 3–5 years. Free no-obligation quote.
            </p>

            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
              Huyton&apos;s consistent Merseyside rainfall means moss establishes on roofs faster than most of England. Soft wash biocide treatment kills growth at the root and keeps it gone for years — without the tile damage that pressure washing causes.
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
                Why Huyton Roofs Need Professional Cleaning
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Huyton sits in the Merseyside urban area and receives consistent Atlantic rainfall throughout the year. This persistent moisture, combined with the limited drying time on north and east-facing roof slopes, creates ideal conditions for moss, algae, and lichen. Once established, biological growth holds water against the tile surface through every freeze-thaw cycle, accelerating tile deterioration.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The concrete interlocking tiles common on Huyton&apos;s post-war housing estates in Dovecot, Stockbridge Village, and Page Moss are particularly susceptible to moss — the rough textured surface provides excellent adhesion for spores. The older Victorian and Edwardian properties around Roby have natural slate roofs that require especially careful treatment, as slate is more fragile and cannot withstand any pressure washing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Soft washing is the only safe treatment</strong> for any roof tile type. We apply biodegradable biocidal solution at low pressure (below 100 PSI) — the chemistry kills the biological growth at the root, and the residual biocide continues working after the visit, with moss and lichen washing gradually away with Huyton&apos;s regular rainfall over the following weeks.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Roof Types We Clean in Huyton
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Victorian Slate Roofs (Roby area)',
                    desc: 'Natural slate on the older terraced and semi-detached properties around Roby station. Slate is fragile and cannot be pressure washed — we use very low-pressure soft wash with careful biocide selection to avoid surface staining or damage.',
                  },
                  {
                    title: 'Concrete Interlocking Tiles',
                    desc: 'The most common roof type on Huyton\'s post-war estates in Dovecot, Stockbridge Village, and Page Moss. Rough surface texture accumulates moss rapidly. Soft wash with biocide clears the full tile face and suppresses regrowth.',
                  },
                  {
                    title: 'Clay Plain Tiles',
                    desc: 'Found on some of the larger inter-war semi-detached properties in Huyton. Clay is more brittle than concrete — pressure washing risks cracking. Soft wash is the only appropriate method.',
                  },
                  {
                    title: 'Modern Profiled Tiles',
                    desc: 'Newer properties and extensions across Huyton with concrete or fibre cement profiled tiles. Algae streaks develop within 5–7 years in Merseyside\'s climate — soft wash biocide treatment prevents this.',
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
                  { step: '1', title: 'Roof inspection and condition assessment', desc: 'We inspect the roof from ground level — checking for broken, displaced, or lifting tiles and assessing the extent of moss and lichen growth before starting treatment.' },
                  { step: '2', title: 'Loose moss removal', desc: 'Where moss is thick enough to form a physical layer, we gently brush off loose deposits to ensure full biocide contact with the tile surface on the follow-up treatment step.' },
                  { step: '3', title: 'Soft wash biocide application', desc: 'We apply biodegradable biocidal solution at low pressure (below 100 PSI). The biocide penetrates and kills moss, lichen, algae, and black spot at the root across the full roof surface.' },
                  { step: '4', title: 'Residual biocide works over time', desc: "The biocide continues working after we leave. Remaining biological growth dies off and washes away with Huyton's regular rainfall over the following weeks, leaving a progressively cleaner surface." },
                  { step: '5', title: 'Optional: tile sealing', desc: 'A breathable tile sealer can be applied after cleaning, extending the period before regrowth to 5–7 years and providing additional water resistance through Merseyside freeze-thaw cycles.' },
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
                Roof Cleaning Huyton — Your Questions Answered
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: 'How much does roof cleaning cost in Huyton?',
                    a: 'Roof cleaning in Huyton typically costs between £200 and £550 for a standard residential property, depending on roof size, pitch, tile type, and extent of moss growth. R.R.M provides free no-obligation quotes — prices always confirmed upfront.',
                  },
                  {
                    q: 'Is soft washing safe for roof tiles in Huyton?',
                    a: 'Yes — soft washing at low pressure (below 100 PSI) is the only safe method. High-pressure washing strips concrete tile coatings and can crack older slates. R.R.M uses soft wash systems with biodegradable biocide that kill growth without risking tile damage.',
                  },
                  {
                    q: 'Why do roofs in Huyton get mossy so quickly?',
                    a: "Huyton's Merseyside location brings consistent Atlantic rainfall and humidity throughout the year — ideal conditions for moss and algae. North and east-facing slopes are especially affected. The rough textured concrete tiles on Huyton's post-war estates retain moisture and accelerate moss growth.",
                  },
                  {
                    q: 'How long does roof cleaning last in Huyton?',
                    a: "A professional soft wash with biocide treatment typically keeps a Huyton roof free of biological growth for 3–5 years. The residual biocide continues suppressing regrowth long after the clean. Applying a breathable tile sealer extends this period further.",
                  },
                  {
                    q: 'Does roof cleaning add value to a Huyton property?',
                    a: "Yes — a clean roof significantly improves kerb appeal and buyer perception. Moss and lichen also trap moisture and accelerate tile deterioration, so regular cleaning genuinely extends the life of the roof covering and avoids costly re-roofing.",
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
                  { label: 'Render Cleaning Huyton', href: '/services/render-cleaning/huyton/' },
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
                Get a Free Roof Cleaning Quote in Huyton
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Stop moss damaging your tiles. Soft wash specialists covering Huyton and the wider Knowsley area. Free quote, no obligation.
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
