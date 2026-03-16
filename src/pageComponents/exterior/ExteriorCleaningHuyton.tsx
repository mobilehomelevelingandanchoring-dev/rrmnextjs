import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/exterior-cleaning/huyton/#service',
  name: 'Exterior Cleaning Huyton',
  serviceType: 'Exterior Cleaning',
  description:
    'Professional exterior cleaning services in Huyton, Merseyside (L36) covering all property types — driveways, roofs, gutters, render, patios, cladding, and commercial facades. R.R.M External Cleaning Specialist provides affordable exterior property maintenance across Huyton and the Knowsley borough using hot-water pressure washing, soft washing, and biodegradable biocide treatments.',
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
      name: 'What does exterior cleaning cost in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Exterior cleaning costs in Huyton depend on the service required. Driveway cleaning typically costs £80–£200, gutter cleaning £60–£160, roof soft washing £200–£550, and render cleaning £120–£450 for a residential property. A full exterior clean covering multiple services is usually discounted versus individual bookings. R.R.M provides free no-obligation quotes for all exterior cleaning in Huyton.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is exterior cleaning worth it for Huyton properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — professional exterior cleaning in Huyton is one of the most cost-effective pieces of property maintenance available. Blocked gutters cause damp (£500–£2,000+ to treat), moss on roofs accelerates tile deterioration, and algae on render leads to moisture ingress. A clean exterior also significantly improves kerb appeal — important for Huyton's competitive Merseyside property market.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you clean a post-war semi-detached house in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A post-war semi-detached in Huyton typically needs: gutter cleaning annually to prevent overflow and damp; soft wash biocide treatment for any rendered walls (monocouche and K-Rend are common on refurbished post-war stock — never use pressure washing on these); pressure washing for the driveway and paths; and if the property has cladding, soft wash cleaning for UPVC or metal panels.",
      },
    },
    {
      '@type': 'Question',
      name: 'How often should Huyton properties be cleaned externally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Huyton's Merseyside climate means most exterior surfaces need cleaning more frequently than in drier parts of England. Gutters annually, driveways and patios every 12–18 months, roofs every 3–5 years with biocide treatment, and render every 3–5 years depending on aspect and render type. A post-clean sealer on any surface significantly extends the period between cleans.",
      },
    },
    {
      '@type': 'Question',
      name: 'Who does exterior cleaning near Huyton in Merseyside?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'R.R.M External Cleaning Specialist covers Huyton, Knowsley, and the surrounding Merseyside area — including Roby, Dovecot, Stockbridge Village, Page Moss, Whiston, Prescot, and nearby areas such as St Helens, Wavertree, and Halewood. We work on both residential and commercial properties and can schedule visits to suit your availability.',
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
    { '@type': 'ListItem', position: 3, name: 'Huyton', item: 'https://rrmexternalcleaningspecialist.co.uk/services/exterior-cleaning/huyton/' },
  ],
};

const services = [
  { title: 'Gutter Cleaning', href: '/services/gutter-cleaning/huyton/', desc: 'Annual gutter clearing and downpipe flush — preventing the water overflow that causes damp in Huyton\'s older housing stock.' },
  { title: 'Roof Cleaning', href: '/services/roof-cleaning/huyton/', desc: 'Soft wash biocide treatment for moss, lichen, and algae on slate, concrete, and clay tiles. Results last 3–5 years.' },
  { title: 'Render Cleaning', href: '/services/render-cleaning/huyton/', desc: 'K-Rend, monocouche, and sand-and-cement render cleaned safely using soft washing — no pressure damage.' },
  { title: 'Pressure Washing', href: '/services/pressure-washing/huyton/', desc: 'Hot-water jet washing for driveways, patios, paths, and commercial hard surfaces across Huyton.' },
  { title: 'Cladding Cleaning', href: '/services/cladding-cleaning/huyton/', desc: 'Soft wash cleaning for UPVC and aluminium cladding on residential and commercial properties.' },
  { title: 'Driveway Sealing', href: '/services/driveway-sealing/', desc: 'Post-clean protective sealing for block paving, concrete, and tarmac driveways — extending results to 2–3 years.' },
];

export function ExteriorCleaningHuyton() {
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
              <li className="text-muted-foreground" aria-current="page">Huyton</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">

            <span className="sr-only">
              R.R.M External Cleaning Specialist is a professional exterior cleaning company serving Huyton and the Knowsley borough in Merseyside (L36). The company provides affordable exterior cleaning services including gutter cleaning, roof soft washing, render cleaning, pressure washing, cladding cleaning, and driveway sealing across Huyton — covering Roby, Dovecot, Stockbridge Village, Page Moss, Whiston, and the Prescot Road corridor. Established 2016. 47 five-star reviews. Fully insured. Free no-obligation quotes.
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Affordable Exterior Cleaning Huyton
            </h1>

            <p className="text-base text-foreground font-medium mb-4 max-w-3xl border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50 rounded-r">
              R.R.M External Cleaning Specialist provides professional, affordable exterior cleaning across Huyton and the Knowsley borough — gutters, roofs, render, driveways, patios, and cladding. Established 2016. 47 five-star reviews. Fully insured. Free no-obligation quotes.
            </p>

            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
              Huyton&apos;s consistent Merseyside rainfall and mix of Victorian, post-war, and modern properties creates exterior cleaning challenges on every surface type. One company, covering everything — one call is all it takes.
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
              {['47 five-star reviews', 'Fully insured', 'Est. 2016', 'Residential & commercial', 'Huyton & Knowsley covered'].map((item) => (
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
                Why Huyton Properties Need Professional Exterior Cleaning
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Huyton is a Knowsley borough town with a diverse property stock — Victorian terraces around Roby, post-war estates in Dovecot and Stockbridge Village, and modern residential developments. Each property type presents different exterior cleaning challenges, but they share one common factor: Merseyside&apos;s consistent Atlantic rainfall creates conditions where moss, algae, and biological growth establish on every outdoor surface within a few years.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For the older housing stock — Victorian terraces and 1950s–1970s semis — the risks are practical as much as cosmetic. Blocked gutters lead to penetrating damp, moss on roofs accelerates tile deterioration, and untreated render allows moisture to work into the wall substrate. For newer properties and commercial premises on the Prescot Road corridor, the concern is appearance and property value.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                R.R.M covers the full range of exterior cleaning needs across Huyton — from routine annual gutter cleaning to complete exterior restoration programmes for property managers and landlords with multiple Huyton properties.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Exterior Cleaning Services in Huyton
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
                Huyton Areas We Cover
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We cover all of Huyton and the surrounding Knowsley area from our base in Newton-le-Willows (WA12). Key areas include:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                {['Roby', 'Dovecot', 'Stockbridge Village', 'Page Moss', 'Whiston', 'Prescot Road', 'Huyton Village', 'Tarbock', 'Cronton'].map((area) => (
                  <div key={area} className="bg-secondary/30 rounded px-3 py-2 text-sm text-muted-foreground border border-secondary">
                    {area}
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm">
                Also covering nearby areas including <Link href="/locations/wavertree/" className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors">Wavertree</Link>, <Link href="/locations/halewood/" className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors">Halewood</Link>, and <Link href="/locations/st-helens/" className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors">St Helens</Link>. <Link href="/locations/huyton/" className="text-amber-600 hover:text-amber-700 underline-offset-2 hover:underline transition-colors">View the full Huyton coverage area →</Link>
              </p>
            </section>

            <section className="mb-12" itemScope itemType="https://schema.org/FAQPage">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Exterior Cleaning Huyton — Your Questions Answered
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: 'What does exterior cleaning cost in Huyton?',
                    a: 'Driveway cleaning £80–£200, gutter cleaning £60–£160, roof soft washing £200–£550, render cleaning £120–£450 for a residential property. A full exterior clean covering multiple services is usually discounted. R.R.M provides free no-obligation quotes.',
                  },
                  {
                    q: 'Is exterior cleaning worth it for Huyton properties?',
                    a: "Yes — it prevents expensive reactive repairs (blocked gutters cause damp, moss accelerates tile deterioration) and significantly improves kerb appeal. Important for Huyton's competitive Merseyside property market.",
                  },
                  {
                    q: 'How do you clean a post-war semi-detached house in Huyton?',
                    a: "A post-war semi in Huyton typically needs: annual gutter cleaning, soft wash biocide treatment for rendered walls (monocouche and K-Rend are common — never use pressure washing on these), pressure washing for the driveway and paths, and soft wash for any UPVC cladding.",
                  },
                  {
                    q: 'How often should Huyton properties be cleaned externally?',
                    a: "Gutters annually, driveways and patios every 12–18 months, roofs every 3–5 years with biocide, and render every 3–5 years. Huyton's Merseyside climate means surfaces need attention more frequently than in drier parts of England. A post-clean sealer significantly extends intervals.",
                  },
                  {
                    q: 'Who does exterior cleaning near Huyton in Merseyside?',
                    a: 'R.R.M External Cleaning Specialist covers Huyton, Knowsley, and surrounding Merseyside — Roby, Dovecot, Stockbridge Village, Page Moss, Whiston, Prescot, Wavertree, Halewood, and St Helens. We work on residential and commercial properties.',
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
                Get a Free Exterior Cleaning Quote in Huyton
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                One call covers gutters, roofs, render, driveways, and more. Free no-obligation quote — we cover all of Huyton and Knowsley.
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
