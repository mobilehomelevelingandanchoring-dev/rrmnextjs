import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function GutterGolborne() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Gutter Cleaning Golborne',
    description: 'Professional gutter cleaning in Golborne WA3 — blocked gutters and downpipes cleared for Victorian terraces on Stone Cross Lane and Harvey Lane, 1960s council estates off Legh Street, and newer builds. Serving Golborne, Lowton, Kenyon, Pocket Nook and all WA3 postcodes.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'R.R.M Exterior Cleaning Specialist',
      telephone: '+447845463877',
      address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
      url: 'https://rrmexternalcleaningspecialist.co.uk',
      areaServed: [
        { '@type': 'City', name: 'Golborne' },
        { '@type': 'Place', name: 'Lowton' },
        { '@type': 'Place', name: 'Kenyon' }
      ]
    },
    areaServed: { '@type': 'City', name: 'Golborne' },
    serviceType: 'Gutter Cleaning',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 60, maxPrice: 160, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does gutter cleaning cost in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Gutter cleaning in Golborne (WA3) costs £60–£160. A standard semi-detached on Stone Cross Lane or Harvey Lane runs £60–£90; a detached property or large Victorian terrace £90–£130; a two-storey plus dormer or commercial premises £130–£160. Price includes both gutters and downpipes cleared and flushed.' }
      },
      {
        '@type': 'Question',
        name: 'How often should gutters be cleaned in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Annually for most Golborne properties — once in autumn after leaf fall from the mature horse chestnuts and oaks along Bridge Street and Stone Cross Lane. Properties on the edge of the agricultural belt south of the A580 (Kenyon, Pocket Nook) benefit from twice-yearly cleaning due to increased organic matter from field runoff and wind-blown debris.' }
      },
      {
        '@type': 'Question',
        name: 'What causes gutters to block in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'In Golborne the main causes are: (1) leaf fall from mature trees along Stone Cross Lane, Harvey Lane and Victoria Park; (2) moss and lichen growth accelerated by the Lancashire plain\'s 700 mm+ annual rainfall and prevailing westerly winds; (3) UPVC bracket degradation on 1970s–80s council housing off Legh Street, causing gutters to sag and pool standing water; (4) East Lancashire Road (A580) diesel particulates bonding with organic debris inside the gutter channel.' }
      },
      {
        '@type': 'Question',
        name: 'Can blocked gutters cause damp in Golborne homes?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — and it is a common problem in Golborne\'s older terraced stock. Overflowing gutters on Victorian and Edwardian solid-brick properties on Bridge Street, Nook Lane and Stone Cross Lane allow water to saturate wall faces directly, bypassing the cavity that modern homes rely on. Persistent damp patches on internal chimney-breast walls and ground-floor ceilings often trace back to a blocked or sagging gutter 2–3 metres above.' }
      },
      {
        '@type': 'Question',
        name: 'Do you clear cast iron gutters in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Pre-1960 properties in Golborne town centre — particularly on Harvey Lane, Stone Cross Lane and Nook Lane — frequently retain original cast iron ogee and half-round gutters. We hand-clear these with padded tools to avoid cracking the brittle cast iron, then flush joints and inspect union clips. Deteriorating sections can be resealed with gutter and flashing sealant on the same visit.' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Gutter Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning' },
      { '@type': 'ListItem', position: 3, name: 'Golborne', item: 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning/golborne' }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides professional gutter cleaning in Golborne, Wigan WA3. Serving Stone Cross Lane, Harvey Lane, Bridge Street, Nook Lane, Legh Street estate, Lowton, Kenyon and Pocket Nook. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY — approximately 3 miles from Golborne town centre. Telephone: 07845 463877.
      </p>

      <main className="min-h-screen bg-background">
        <nav className="bg-secondary/50 border-b border-secondary" aria-label="Breadcrumb">
          <div className="container-custom py-3">
            <ol className="flex items-center gap-2 text-sm flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link href="/" className="text-primary hover:text-accent transition-colors" itemProp="item"><span itemProp="name">Home</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li className="text-muted-foreground">/</li>
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link href="/services/gutter-cleaning" className="text-primary hover:text-accent transition-colors" itemProp="item"><span itemProp="name">Gutter Cleaning</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <li className="text-muted-foreground">/</li>
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <span className="text-muted-foreground" itemProp="name" aria-current="page">Golborne</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        <section className="hero-bg py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Gutter Cleaning Golborne WA3
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Professional gutter and downpipe clearing across Golborne, Lowton and all WA3 postcodes. Cast iron gutter specialists. 5.0 ★ — 47 verified reviews.
              </p>
              <Button size="lg" asChild>
                <a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />07845 463877 — Free Quote</a>
              </Button>
            </div>
          </div>
        </section>

        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto">

            <div className="border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-950/20 pl-5 py-4 mb-10 rounded-r-lg">
              <p className="text-foreground font-medium">
                <strong>Gutter cleaning in Golborne costs £60–£160.</strong> Semis on Stone Cross Lane or Harvey Lane from £60; Victorian terraces in the town centre £70–£100; larger detached or commercial premises £130–£160. Price includes gutters, downpipes, and flush test. R.R.M is based 3 miles away in Newton-le-Willows WA12. Call 07845 463877.
              </p>
            </div>

            <section className="mb-10" aria-labelledby="golborne-gutters">
              <h2 id="golborne-gutters" className="text-2xl font-bold text-foreground mb-4">Why Golborne Properties Need Regular Gutter Cleaning</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Golborne sits on the Lancashire plain between Leigh and Newton-le-Willows, receiving 700 mm+ of annual rainfall carried on prevailing westerlies from the Irish Sea. Mature horse chestnuts and oaks line <strong>Stone Cross Lane</strong>, <strong>Harvey Lane</strong> and the perimeter of <strong>Victoria Park</strong>, shedding substantial quantities of leaf matter each autumn directly into gutter channels.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The town's housing stock spans three distinct eras: <strong>Victorian and Edwardian terraces</strong> in the town centre (Bridge Street, Nook Lane, Stone Cross Lane) with original or early-replacement cast iron guttering; <strong>1950s–70s council housing</strong> off Legh Street and the Lowton Road corridor with ageing UPVC that sags at union clips; and <strong>1990s–2000s newer builds</strong> on former colliery land with standard fascia and soffit systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Agricultural land south and east of the A572 means wind-blown organic debris from surrounding fields adds a second seasonal peak — spring — when ploughing and crop growth release fine particles that accumulate in gutter channels and downpipe heads.
              </p>
            </section>

            <section className="mb-10" aria-labelledby="gutter-types-golborne">
              <h2 id="gutter-types-golborne" className="text-2xl font-bold text-foreground mb-6">Gutter Systems We Service in Golborne</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Cast Iron Ogee & Half-Round', where: 'Town centre terraces: Bridge St, Harvey Lane, Stone Cross Lane', method: 'Hand-cleared with padded tools to protect brittle iron. Joints inspected and resealed. Union clips tightened.' },
                  { title: 'UPVC Square-Line & Round', where: '1970s–80s council estates: Legh Street, Lowton Road', method: 'Vacuum extraction of leaf compaction. Sag and bracket realignment. Fascia board condition assessed.' },
                  { title: 'Deep-Flow & Ogee UPVC', where: 'Larger 1990s detached housing, Lowton (WA3)', method: 'High-flow capacity maintained — critical for properties on the flat Lancashire plain with no natural fall.' },
                  { title: 'Box Gutter (Flat Roof)', where: 'Commercial premises, bungalows', method: 'Internal box gutter fully hand-excavated. Outlet guards checked. Overflow weep holes kept clear.' },
                ].map(g => (
                  <div key={g.title} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{g.title}</h3>
                    <p className="text-xs text-primary font-medium mb-2">{g.where}</p>
                    <p className="text-sm text-muted-foreground">{g.method}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10" aria-labelledby="faq-gutter-golborne" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-gutter-golborne" className="text-2xl font-bold text-foreground mb-6">Gutter Cleaning Golborne — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  { q: 'How much does gutter cleaning cost in Golborne?', a: 'Gutter cleaning in Golborne (WA3) costs £60–£160. A standard semi on Stone Cross Lane or Harvey Lane runs £60–£90; a detached property £90–£130; a large Victorian terrace or commercial premises £130–£160. Price includes gutters and downpipes cleared and flushed.' },
                  { q: 'How often should gutters be cleaned in Golborne?', a: 'Annually for most Golborne properties — once in autumn after leaf fall from mature trees along Bridge Street and Victoria Park. Properties near agricultural land south of the A580 (Kenyon, Pocket Nook) benefit from twice-yearly cleaning due to wind-blown field debris.' },
                  { q: 'What causes gutters to block in Golborne?', a: 'The main causes in Golborne are: leaf fall from mature oaks and horse chestnuts; moss and lichen accelerated by 700 mm+ annual Lancashire rainfall; UPVC bracket degradation on 1970s–80s council housing off Legh Street causing gutters to sag; and East Lancashire Road (A580) diesel particulates bonding with organic debris inside gutter channels.' },
                  { q: 'Can blocked gutters cause damp in Golborne homes?', a: 'Yes — especially in Golborne\'s older solid-brick terraces on Bridge Street, Nook Lane and Stone Cross Lane. Overflowing gutters saturate wall faces directly, bypassing cavity protection. Internal damp patches on chimney-breast walls and ground-floor ceilings often trace back to a blocked gutter above.' },
                  { q: 'Do you clear cast iron gutters in Golborne?', a: 'Yes. Pre-1960 properties in Golborne town centre frequently retain original cast iron ogee and half-round gutters. We hand-clear with padded tools to avoid cracking, then flush joints and inspect union clips. Deteriorating joints can be resealed on the same visit.' },
                ].map(({ q, a }) => (
                  <details key={q} className="border border-secondary rounded-lg" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                    <summary className="p-4 font-medium text-foreground cursor-pointer hover:bg-secondary/30 transition-colors list-none flex items-center justify-between" itemProp="name">
                      {q}<span className="text-primary ml-2 text-lg">+</span>
                    </summary>
                    <div className="px-4 pb-4 text-muted-foreground leading-relaxed" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p itemProp="text">{a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="mb-10" aria-labelledby="related-golborne-gutter">
              <h2 id="related-golborne-gutter" className="text-xl font-bold text-foreground mb-4">Other Services in Golborne</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Roof Cleaning Golborne', href: '/services/roof-cleaning/golborne' },
                  { label: 'Render Cleaning Golborne', href: '/services/render-cleaning/golborne' },
                  { label: 'Pressure Washing Golborne', href: '/services/pressure-washing/golborne' },
                  { label: 'Cladding Cleaning Golborne', href: '/services/cladding-cleaning/golborne' },
                  { label: 'Exterior Cleaning Golborne', href: '/services/exterior-cleaning/golborne' },
                  { label: 'Golborne Location Hub', href: '/locations/golborne' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="text-sm text-primary hover:text-accent underline underline-offset-2 transition-colors">{l.label}</Link>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Gutter Cleaning in Golborne</h2>
              <p className="text-muted-foreground mb-6">Covering Golborne, Lowton, Kenyon and all WA3 postcodes. 3 miles from Newton-le-Willows. Mon–Sat.</p>
              <Button size="lg" asChild>
                <a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />07845 463877</a>
              </Button>
            </section>

          </div>
        </div>
      </main>
    </Layout>
  );
}
