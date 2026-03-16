import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning/huyton/#service',
  name: 'Gutter Cleaning Huyton',
  serviceType: 'Gutter Cleaning',
  description:
    'Professional gutter cleaning and downpipe clearing in Huyton, Merseyside. R.R.M External Cleaning Specialist removes debris, moss, and blockages from residential and commercial guttering across Huyton and the Knowsley borough — including the post-war estates of Dovecot, Stockbridge Village, and Page Moss, and the older Victorian terraces around Roby.',
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
      name: 'How much does gutter cleaning cost in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gutter cleaning in Huyton typically costs between £60 and £160 for a residential property, depending on property size, the number of linear metres of guttering, and the level of blockage. Victorian terraces around Roby and post-war semis in Dovecot and Stockbridge Village are among the most common types we clean. R.R.M provides free no-obligation quotes — all prices confirmed upfront with no hidden charges.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should gutters be cleaned in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Huyton properties should have gutters cleaned at least once a year — ideally in late autumn after leaf fall. Huyton's Merseyside location means Atlantic rainfall arrives regularly, and blocked gutters can cause rapid water overflow down walls. Properties with overhanging trees in the Roby and Whiston areas may benefit from twice-yearly cleaning.",
      },
    },
    {
      '@type': 'Question',
      name: 'What causes blocked gutters in Huyton homes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The most common causes of blocked gutters in Huyton are leaf matter (particularly in autumn from the mature trees lining residential streets), moss washing down from roof tiles, and general organic debris accumulation. Post-war properties in Dovecot and Stockbridge Village often have plastic fascia guttering that is quicker to block as joints age and sag. Huyton's Merseyside rainfall means blockages develop and overflow rapidly.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can blocked gutters cause damp in Huyton properties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — overflowing gutters are a leading cause of penetrating damp in Huyton homes. When gutters overflow, water saturates the brickwork or render of the wall below. On the Victorian terraces around Roby and older housing stock near Prescot Road, this causes damp patches on interior walls, crumbling pointing, and rot in fascia boards. Catching a blocked gutter early prevents much costlier damp treatment work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you clean gutters on post-war estate homes in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes — post-war semi-detached and detached properties in Dovecot, Stockbridge Village, and Page Moss make up a significant part of our Huyton gutter cleaning work. These properties typically have UPVC fascia guttering with push-fit joints that are prone to sagging with age. We check joint condition during cleaning and flag any sections that are leaking or misaligned.",
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
    { '@type': 'ListItem', position: 3, name: 'Huyton', item: 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning/huyton/' },
  ],
};

export function GutterHuyton() {
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
              <li><Link href="/services/gutter-cleaning/" className="text-primary hover:text-accent transition-colors">Gutter Cleaning</Link></li>
              <li className="text-muted-foreground">/</li>
              <li className="text-muted-foreground" aria-current="page">Huyton</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">

            <span className="sr-only">
              R.R.M External Cleaning Specialist provides professional gutter cleaning services in Huyton, Merseyside (L36). The company clears blocked gutters, downpipes, and roofline debris on residential and commercial properties across Huyton — including Roby, Dovecot, Stockbridge Village, Page Moss, Whiston, and the Prescot Road corridor. Established 2016. Fully insured. Free no-obligation quotes.
            </span>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Gutter Cleaning Huyton
            </h1>

            <p className="text-base text-foreground font-medium mb-4 max-w-3xl border-l-4 border-amber-500 pl-4 py-2 bg-amber-50/50 rounded-r">
              R.R.M External Cleaning Specialist provides affordable gutter cleaning across Huyton and the Knowsley borough — clearing blocked gutters, downpipes, and debris on Victorian terraces, post-war semis, and commercial premises. Free quote. Established 2016. 47 five-star reviews.
            </p>

            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
              Huyton&apos;s Merseyside rainfall means gutters block fast and overflow faster. An annual clean prevents the damp, rot, and expensive masonry repairs that blocked gutters eventually cause.
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
              {['47 five-star reviews', 'Fully insured', 'Free no-obligation quotes', 'Residential & commercial', 'Huyton & Knowsley covered'].map((item) => (
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
                Why Gutter Cleaning Matters for Huyton Properties
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Huyton sits in the Merseyside urban area and shares the elevated Atlantic rainfall that characterises the region. When gutters block — with leaf matter, moss from roof tiles, or general organic debris — rainwater overflows directly down the face of the wall. For the Victorian terraces around Roby and the post-war housing estates of Dovecot, Stockbridge Village, and Page Moss, this overflow soaks into brickwork and causes penetrating damp inside the property.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Post-war properties across Huyton&apos;s estates typically have UPVC fascia and guttering. As these systems age, push-fit joints sag and begin to leak at the connection points — a problem that a professional clean reveals before it becomes a full fascia replacement. On the older Victorian stock near Roby station and Prescot Road, cast iron guttering is still common; it requires careful cleaning to avoid dislodging sections that have corroded at their brackets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                An annual gutter clean is the most cost-effective piece of property maintenance a Huyton homeowner can do. The cost is a fraction of a damp treatment or fascia replacement, and it takes less than two hours for most residential properties.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Property Types We Cover in Huyton
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Victorian Terraces (Roby & Prescot Road)',
                    desc: 'Older terraced properties near Roby station and the Prescot Road corridor — often with cast iron or older plastic guttering. Annual cleaning prevents the overflow that saturates Merseyside brick and causes interior damp.',
                  },
                  {
                    title: 'Post-War Semis (Dovecot & Stockbridge Village)',
                    desc: 'The large post-war estates of Dovecot, Stockbridge Village, and Page Moss — UPVC fascia guttering that is prone to joint sagging with age. We clean and flag any sections needing repair.',
                  },
                  {
                    title: 'Modern Detached & Estates',
                    desc: 'Newer residential developments across Huyton with modern fascia box guttering. Leaf-filter guards are available after cleaning to reduce maintenance frequency on properties near trees.',
                  },
                  {
                    title: 'Commercial Premises',
                    desc: 'Retail and commercial properties along the Prescot Road corridor and near Knowsley retail park. Scheduled maintenance programmes available for commercial landlords and property managers.',
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
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Clean Your Gutters</h2>
              <ol className="space-y-5">
                {[
                  { step: '1', title: 'Ground-level inspection', desc: 'We assess the guttering, joints, downpipes, and fascia condition before starting — noting any cracks, sagging, leaking joints, or bracket failures to flag in our report.' },
                  { step: '2', title: 'Full debris removal', desc: 'We scoop, brush, or vacuum loose debris — leaves, moss, soil, and compacted matter — from the full gutter run and dispose of it cleanly. No mess left on your path or planting.' },
                  { step: '3', title: 'Downpipe flush', desc: 'We run water through every downpipe to confirm free flow to the drain. Any blockages are cleared from the top down as required.' },
                  { step: '4', title: 'Flow test and report', desc: "We run a full flow test to confirm the system drains correctly and let you know of anything we've spotted — joint failures, cracked sections, or misaligned brackets — before leaving." },
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
                Gutter Cleaning Huyton — Your Questions Answered
              </h2>
              <div className="space-y-3">
                {[
                  {
                    q: 'How much does gutter cleaning cost in Huyton?',
                    a: 'Gutter cleaning in Huyton typically costs between £60 and £160 for a residential property, depending on property size, the number of linear metres of guttering, and the level of blockage. R.R.M provides free no-obligation quotes — all prices confirmed upfront with no hidden charges.',
                  },
                  {
                    q: 'How often should gutters be cleaned in Huyton?',
                    a: "Huyton properties should have gutters cleaned at least once a year — ideally in late autumn after leaf fall. Huyton's Merseyside location means regular Atlantic rainfall and blocked gutters overflow quickly. Properties with overhanging trees in Roby and Whiston may benefit from twice-yearly cleaning.",
                  },
                  {
                    q: 'What causes blocked gutters in Huyton homes?',
                    a: "The most common causes are leaf matter in autumn, moss washing down from roof tiles, and organic debris accumulation. Post-war properties in Dovecot and Stockbridge Village often have plastic fascia guttering with ageing joints that trap debris more readily.",
                  },
                  {
                    q: 'Can blocked gutters cause damp in Huyton properties?',
                    a: 'Yes — overflowing gutters are a leading cause of penetrating damp in Huyton homes. Water saturates brickwork and render below the overflow point, causing interior damp patches, crumbling pointing, and rot in fascia boards.',
                  },
                  {
                    q: 'Do you clean gutters on post-war estate homes in Huyton?',
                    a: "Yes — post-war semi-detached and detached properties in Dovecot, Stockbridge Village, and Page Moss make up a significant part of our Huyton work. These properties typically have UPVC fascia guttering with push-fit joints prone to sagging with age. We check joint condition during cleaning and flag any sections that are leaking.",
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
                  { label: 'Roof Cleaning Huyton', href: '/services/roof-cleaning/huyton/' },
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
                Get a Free Gutter Cleaning Quote in Huyton
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Protect your Huyton property from water damage and damp. Free quote, no obligation — we typically respond within a few hours.
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
