import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/pressure-washing/huyton/#service',
  name: 'Pressure Washing Huyton',
  serviceType: 'Pressure Washing',
  description:
    'Professional pressure washing and jet washing services in Huyton, Merseyside (L36). R.R.M External Cleaning Specialist cleans driveways, patios, paths, car parks, and commercial hard surfaces across Huyton using hot-water pressure washing — removing moss, algae, oil stains, and embedded grime from block paving, concrete, tarmac, and Indian sandstone.',
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
      name: 'How much does pressure washing cost in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pressure washing costs in Huyton vary by surface type and size. A standard residential driveway typically costs £80–£200. A patio or path costs £60–£180. Commercial hard surfaces and car parks are quoted individually. R.R.M provides free no-obligation quotes — all prices confirmed upfront with no hidden charges.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should a driveway be pressure washed in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Driveways in Huyton typically need professional pressure washing every 12–18 months due to Merseyside's regular rainfall creating ideal conditions for moss and algae growth on hard surfaces. Block paving driveways may need attention annually as moss in the joints loosens the sand and can displace blocks over time. A post-clean block paving sealer significantly extends the period between cleans.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is pressure washing safe for block paving in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — hot-water pressure washing is the most effective way to clean block paving in Huyton. It removes embedded moss, algae, oil stains, and compacted grime. After cleaning, kiln-dried sand should be brushed back into the joints to stabilise the blocks, and a block paving sealer applied to protect against future staining and moss regrowth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you remove oil stains from a driveway in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — hot-water pressure washing at 180°C is significantly more effective at removing oil stains than cold pressure washing. For heavy or long-standing oil staining on concrete or block paving driveways in Huyton, we apply a specialist degreasing pre-treatment and allow a dwell time before the hot-water wash, which emulsifies and lifts the oil from the pores of the surface.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does pressure washing damage driveways in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not when done correctly. Concrete, block paving, and tarmac surfaces are robust at correct pressure settings. Softer surfaces like sandstone and Indian sandstone require lower pressure with specialist stone cleaners — using a general pressure washer on these surfaces can cause surface erosion. R.R.M always assesses the surface type before choosing the right method and pressure setting.',
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
    { '@type': 'ListItem', position: 3, name: 'Huyton', item: 'https://rrmexternalcleaningspecialist.co.uk/services/pressure-washing/huyton/' },
  ],
};

export function PressureHuyton() {
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
              <li className="text-muted-foreground" aria-current="page">Huyton</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">

            <span className="sr-only">
              R.R.M External Cleaning Specialist provides professional pressure washing and jet washing services in Huyton, Merseyside (L36). The company cleans driveways, patios, paths, car parks, and commercial hard surfaces across Huyton — including Roby, Dovecot, Stockbridge Village, Page Moss, and the Prescot Road corridor. Services include hot-water pressure washing, block paving cleaning, concrete cleaning, tarmac cleaning, and Indian sandstone cleaning. Established 2016. Fully insured. Free no-obligation quotes.
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Pressure Washing Huyton — Driveways, Patios &amp; Hard Surfaces
            </h1>

            <p className="text-base text-foreground font-medium mb-4 max-w-3xl border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50 rounded-r">
              R.R.M External Cleaning Specialist provides affordable hot-water pressure washing in Huyton for block paving driveways, concrete patios, tarmac, Indian sandstone, and commercial hard surfaces. Free quote. Established 2016. 47 five-star reviews.
            </p>

            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
              Huyton&apos;s Merseyside rainfall turns driveways and patios green within 12–18 months. Hot-water jet washing lifts the moss, algae, oil stains, and embedded grime that garden hosepipes cannot touch — and with a sealer applied, results last years.
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
                Why Huyton Driveways and Patios Need Professional Pressure Washing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Huyton&apos;s position in the Merseyside urban area means consistent rainfall, relatively low sunshine hours, and shaded streets — all of which make conditions ideal for moss and algae to colonise hard surfaces rapidly. Block paving driveways across Dovecot, Stockbridge Village, and Page Moss go dark green within a single wet winter without regular treatment. Indian sandstone patios, increasingly popular on Huyton extensions and rear gardens, develop a slippery algae film that is a genuine slip hazard after a few months of Merseyside weather.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                On-street parking pressure across Huyton means most residential driveways see heavy vehicle use — leading to oil spotting on concrete and tarmac surfaces that domestic pressure washers cannot shift. Hot-water pressure washing at 180°C emulsifies oil staining that cold water simply moves around. For block paving with moss in the joints, the hot water also kills biological growth rather than just dislodging it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Commercial properties on the Prescot Road corridor and near Knowsley retail park also accumulate heavy surface soiling from vehicle traffic. We offer commercial pressure washing programmes and can schedule visits to minimise business disruption.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Surfaces We Pressure Wash in Huyton
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Block Paving Driveways',
                    desc: 'The most common driveway type across Huyton\'s residential estates — Dovecot, Stockbridge Village, and Page Moss. Hot-water pressure washing with a rotary surface cleaner removes moss, algae, and oil. Kiln-dried sand re-bedded into joints after cleaning.',
                  },
                  {
                    title: 'Concrete Driveways & Paths',
                    desc: 'Concrete surfaces on older Huyton properties and newer developments. Robust and responsive to hot-water pressure washing. Oil stain pre-treatment applied before the main wash for driveways with significant oil spotting.',
                  },
                  {
                    title: 'Tarmac Driveways & Car Parks',
                    desc: 'Tarmac on residential driveways and commercial car parks near Knowsley retail park and the Prescot Road corridor. Hot-water washing removes moss and oil effectively. Tarmac sealing after cleaning prevents future oil penetration.',
                  },
                  {
                    title: 'Indian Sandstone & Natural Stone Patios',
                    desc: 'Indian sandstone and limestone patios require lower pressure (500–800 PSI) combined with a specialist stone cleaner to prevent surface pitting. Common on extensions across Huyton\'s newer properties.',
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
                  { step: '1', title: 'Surface assessment and method selection', desc: 'We assess the surface type, soiling level, and any sensitive areas (planted borders, adjacent render, drainage) before selecting the correct pressure setting and cleaning solution.' },
                  { step: '2', title: 'Pre-treatment for oil and biological growth', desc: 'Biocide pre-treatment applied to biological growth. For surfaces with oil staining, a specialist degreaser is applied and allowed to dwell before the hot-water wash.' },
                  { step: '3', title: 'Hot-water pressure wash', desc: 'We use hot-water pressure washing at 180°C with a rotary surface cleaner for driveways and patios, and a lance for edges, steps, and textured areas. Hot water emulsifies oil and lifts biological matter far more effectively than cold pressure.' },
                  { step: '4', title: 'Re-sand and edge clean', desc: 'Block paving joints re-sanded with kiln-dried sand after washing to stabilise blocks and prevent weed regrowth. All edges, borders, and abutments cleaned by hand lance.' },
                  { step: '5', title: 'Optional: protective sealing', desc: 'A penetrating surface sealer applied after cleaning locks in the result and protects against staining, frost damage, and moss regrowth for 2–3 years.' },
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
                Pressure Washing Huyton — Your Questions Answered
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: 'How much does pressure washing cost in Huyton?',
                    a: 'A standard residential driveway typically costs £80–£200. A patio or path costs £60–£180. Commercial hard surfaces are quoted individually. R.R.M provides free no-obligation quotes — all prices confirmed upfront.',
                  },
                  {
                    q: 'How often should a driveway be pressure washed in Huyton?',
                    a: "Driveways in Huyton typically need professional pressure washing every 12–18 months due to Merseyside's regular rainfall creating rapid moss and algae growth. Block paving may need attention annually. A post-clean sealer significantly extends the period between cleans.",
                  },
                  {
                    q: 'Is pressure washing safe for block paving in Huyton?',
                    a: 'Yes — hot-water pressure washing is the most effective way to clean block paving. It removes embedded moss, algae, and oil stains. After cleaning, kiln-dried sand should be brushed back into joints and a block paving sealer applied to protect against future staining.',
                  },
                  {
                    q: 'Can you remove oil stains from a driveway in Huyton?',
                    a: 'Yes — hot-water pressure washing at 180°C is significantly more effective at removing oil stains than cold pressure washing. For heavy or long-standing oil staining, we apply a specialist degreasing pre-treatment before the hot-water wash.',
                  },
                  {
                    q: 'Does pressure washing damage driveways in Huyton?',
                    a: 'Not when done correctly. Concrete, block paving, and tarmac handle pressure washing well at the correct settings. Softer surfaces like sandstone require lower pressure with specialist stone cleaners. R.R.M always assesses surface type before choosing the right method.',
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
                  { label: 'Render Cleaning Huyton', href: '/services/render-cleaning/huyton/' },
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
                Get a Free Pressure Washing Quote in Huyton
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Driveways, patios, car parks, and paths across Huyton and Knowsley. Free quote — no obligation.
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
