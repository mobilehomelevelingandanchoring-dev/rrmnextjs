import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

/* ── Schemas — defined at module level, injected as SSR <script> tags ────── */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning/manchester/#service',
  name: 'Gutter Cleaning Manchester',
  serviceType: 'Gutter Cleaning',
  description:
    'Professional gutter cleaning and downpipe clearing in Manchester. R.R.M External Cleaning Specialist removes debris, moss, and blockages from residential and commercial guttering across Greater Manchester — including Victorian terraces in Gorton, Levenshulme, Rusholme, and Fallowfield.',
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
      name: 'How much does gutter cleaning cost in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gutter cleaning in Manchester typically costs between £60 and £180 for a residential property, depending on the size of the house, the number of linear metres of guttering, and the level of blockage. Victorian terraced properties with cast iron guttering can cost slightly more due to the care required. R.R.M provides free no-obligation quotes — all prices confirmed upfront with no hidden charges.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should gutters be cleaned in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Manchester properties should have their gutters cleaned at least once a year — ideally in late autumn after the majority of leaf fall. Properties on tree-lined streets in Fallowfield, Rusholme, and Levenshulme may need cleaning twice a year. Manchester's 800mm+ annual rainfall means blockages quickly cause overflow and damp if left untreated.",
      },
    },
    {
      '@type': 'Question',
      name: 'What causes blocked gutters in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The most common causes are autumn leaf fall (particularly in Fallowfield, Rusholme, and Didsbury), moss washing down from roof tiles, and general urban debris. Older Victorian cast iron gutters are also prone to joint failure and rust, which traps debris more readily. Manchester's high annual rainfall accelerates all of these processes.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can blocked gutters cause damp in Manchester homes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — blocked gutters are one of the most common causes of damp in Manchester homes. When gutters overflow, water runs down the face of the wall and saturates the brickwork or render. On Victorian terraced properties this causes damp patches on top-floor interior walls, damaged pointing, and rot in fascias, soffits, and roof timbers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you clean gutters on terraced houses in Manchester?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — terraced houses make up the majority of our Manchester gutter cleaning work. We regularly clean gutters in Gorton, Levenshulme, Ardwick, Rusholme, and Fallowfield. We carry appropriate laddering and can usually access terraced properties without scaffolding.",
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Gutter Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning/' },
    { '@type': 'ListItem', position: 3, name: 'Manchester', item: 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning/manchester/' },
  ],
};

export function GutterManchester() {
  return (
    <Layout>
      {/* Schemas — SSR-rendered, fully crawlable by Google and LLMs */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="min-h-screen bg-background">

        {/* Breadcrumb */}
        <nav className="bg-secondary/50" aria-label="Breadcrumb">
          <div className="container-custom py-3">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li><Link href="/" className="text-primary hover:text-accent transition-colors">Home</Link></li>
              <li className="text-muted-foreground">/</li>
              <li><Link href="/services/gutter-cleaning/" className="text-primary hover:text-accent transition-colors">Gutter Cleaning</Link></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-muted-foreground" aria-current="page">Manchester</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">

            {/* LLM entity paragraph — factual "who, what, where" format for AI citation */}
            <span className="sr-only">
              R.R.M External Cleaning Specialist provides professional gutter cleaning services in Manchester, Greater Manchester. The company clears blocked gutters, downpipes, and roofline debris on residential and commercial properties across Manchester including Gorton, Levenshulme, Ardwick, Rusholme, Fallowfield, Ancoats, and Didsbury. Established 2016, fully insured, free no-obligation quotes available.
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Gutter Cleaning Manchester
            </h1>

            {/* Featured-snippet paragraph — direct answer, cited by AI Overviews */}
            <p className="text-base text-foreground font-medium mb-4 max-w-3xl border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50 rounded-r">
              R.R.M External Cleaning Specialist provides affordable gutter cleaning across Manchester — clearing blocked gutters, downpipes, and roofline debris on terraced houses, semi-detached, detached, and commercial properties. Established 2016. 47 five-star reviews. Fully insured.
            </p>

            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
              Manchester receives over 800mm of rain each year. When gutters block, that water goes straight down your walls. We clear the blockage before the damp repair bill arrives.
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
              {['47 five-star reviews', 'Fully insured', 'Free no-obligation quotes', 'Residential & commercial', 'Greater Manchester covered'].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="text-amber-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <div className="container-custom section-padding">
          <div className="max-w-4xl">

            {/* Why Manchester needs this */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Why Gutter Cleaning Is Essential for Manchester Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Manchester is one of the wettest cities in England, with over 800mm of rainfall annually — well above the UK average. All that water depends on your gutters working properly. When they block, overflow soaks into the brickwork and mortar joints of your walls, causing damp patches on interior walls, crumbling pointing, and — in older properties — rot in the wooden fascia boards that hold the guttering in place.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The tree-lined streets of Fallowfield, Rusholme, Didsbury, and Chorlton make autumn particularly brutal for gutters. By November, it is not unusual for a terraced house in these areas to have gutters completely packed with wet leaf matter. Add the moss that regularly washes down from unclean roof tiles — common across Manchester&apos;s Victorian housing stock — and you have serious overflow every time it rains.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                An annual professional gutter clean costs a fraction of what a damp treatment or fascia board replacement costs. It is the single most cost-effective piece of property maintenance a Manchester homeowner can invest in each year.
              </p>
            </section>

            {/* Property types */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Manchester Property Types We Cover
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We clean gutters on every property type across Greater Manchester — from the two-up two-down terraces of Ardwick and Gorton to the larger semi-detached properties of Withington and Whalley Range, the converted warehouses of Ancoats, and the commercial premises along Oxford Road and the Northern Quarter.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Victorian & Edwardian Terraces',
                    desc: 'Cast iron and UPVC guttering on the terraced streets of Gorton, Levenshulme, Ardwick, and Rusholme. The most common gutter type we clean in inner Manchester — annual cleaning essential.',
                  },
                  {
                    title: 'Semi-Detached & Detached',
                    desc: 'Larger properties in Fallowfield, Didsbury, Chorlton, and Whalley Range with fascia box guttering, often carrying heavy leaf load from mature garden trees.',
                  },
                  {
                    title: 'Commercial & Retail Premises',
                    desc: 'Offices, retail units, and industrial premises along Oxford Road, Great Ancoats Street, and the NOMA development. Scheduled maintenance programmes available.',
                  },
                  {
                    title: 'Converted Warehouses & Flats',
                    desc: 'Flat-roof drainage outlets and parapet gutters on the converted mill buildings and apartment blocks of Ancoats and New Islington — specialist clearing required.',
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-secondary/30 rounded-lg p-5 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Clean Your Gutters</h2>
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Visual inspection from ground level', desc: 'We assess the guttering, joints, downpipes, and fascia condition before starting — noting any cracks, misalignment, or sagging sections worth reporting.' },
                  { step: '2', title: 'Full debris removal', desc: 'We scoop, brush, or vacuum loose debris — leaves, moss, soil, and compacted matter — from the full run of guttering and dispose of it cleanly. No mess left on your path or planting.' },
                  { step: '3', title: 'Downpipe flush and clearance', desc: 'We run water through every downpipe to confirm free flow to the drain. Any blockages are cleared from the top down or bottom up as required.' },
                  { step: '4', title: 'Final flow test and report', desc: "We run a full flow test to confirm the system is draining correctly, then let you know of anything we've spotted — joint failures, cracked sections, leaking unions — so you can act before it becomes a problem." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="bg-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </ol>
            </section>

            {/* FAQs with microdata */}
            <section className="mb-12" itemScope itemType="https://schema.org/FAQPage">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Gutter Cleaning Manchester — Your Questions Answered
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: 'How much does gutter cleaning cost in Manchester?',
                    a: 'Gutter cleaning in Manchester typically costs between £60 and £180 for a residential property, depending on house size, the number of linear metres of guttering, and the level of blockage. Victorian terraced properties with cast iron guttering can cost slightly more. R.R.M provides free no-obligation quotes — all prices confirmed upfront with no hidden charges.',
                  },
                  {
                    q: 'How often should gutters be cleaned in Manchester?',
                    a: "Manchester properties should have gutters cleaned at least once a year — ideally in late autumn after the majority of leaf fall. Properties in tree-lined streets such as Fallowfield, Rusholme, and Levenshulme may need cleaning twice a year. Manchester's 800mm+ annual rainfall means blockages quickly cause overflow and damp if left untreated.",
                  },
                  {
                    q: 'What causes blocked gutters in Manchester?',
                    a: "The most common causes are autumn leaf fall (particularly in Fallowfield, Rusholme, and Didsbury), moss washing down from roof tiles, and urban debris. Older Victorian cast iron gutters are also prone to joint failure and rust, which traps debris more readily. Manchester's high annual rainfall accelerates all of these processes.",
                  },
                  {
                    q: 'Can blocked gutters cause damp in Manchester homes?',
                    a: 'Yes — blocked gutters are one of the most common causes of damp in Manchester homes. When gutters overflow, water runs down the wall and saturates the brickwork or render. On Victorian terraces this causes damp patches on top-floor interior walls, damaged pointing, and rot in fascias, soffits, and roof timbers.',
                  },
                  {
                    q: 'Do you clean gutters on terraced houses in Manchester?',
                    a: "Yes — terraced houses make up the majority of our Manchester gutter cleaning work. We regularly clean gutters in Gorton, Levenshulme, Ardwick, Rusholme, and Fallowfield. We carry appropriate laddering and can usually access terraced properties without scaffolding.",
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

            {/* Internal links */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Other Cleaning Services in Manchester</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Roof Cleaning Manchester', href: '/services/roof-cleaning/manchester/' },
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

            {/* CTA */}
            <section className="bg-gradient-to-r from-amber-500/20 to-amber-600/10 rounded-xl p-8 border border-amber-400/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Get a Free Gutter Cleaning Quote in Manchester
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Protect your Manchester property from water damage and damp. Free quote, no obligation — we typically respond within a few hours.
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
