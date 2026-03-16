import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function GutterLymm() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Gutter Cleaning Lymm',
    description: 'Professional gutter cleaning in Lymm WA13 — Victorian cast iron gutters on conservation-area properties, large detached with complex rooflines on Eagle Brow and Brookfield Road, and UPVC systems on Oughtrington and Statham housing. Lymm Dam woodland leaf-fall specialists. Serving Lymm, Heatley, Statham, Warburton and all WA13 postcodes.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'R.R.M Exterior Cleaning Specialist',
      telephone: '+447845463877',
      address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
      url: 'https://rrmexternalcleaningspecialist.co.uk',
      areaServed: [
        { '@type': 'City', name: 'Lymm' },
        { '@type': 'Place', name: 'Heatley' },
        { '@type': 'Place', name: 'Statham' },
        { '@type': 'Place', name: 'Warburton' }
      ]
    },
    areaServed: { '@type': 'City', name: 'Lymm' },
    serviceType: 'Gutter Cleaning',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 70, maxPrice: 180, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does gutter cleaning cost in Lymm?',
        acceptedAnswer: { '@type': 'Answer', text: 'Gutter cleaning in Lymm WA13 costs £70–£180. A standard semi-detached in Oughtrington or Statham runs £70–£100; a large detached on Brookfield Road or Reddish Lane £110–£150; a Victorian or Edwardian property with complex roofline near the village conservation area £130–£180. Price includes gutters and downpipes cleared and flushed throughout.' }
      },
      {
        '@type': 'Question',
        name: 'How often should gutters be cleaned in Lymm?',
        acceptedAnswer: { '@type': 'Answer', text: 'Annually for most Lymm properties — once in late autumn. Properties overlooking Lymm Dam or along the Bridgewater Canal corridor benefit from twice-yearly cleaning due to heavy leaf fall from mature woodland oaks, beeches and horse chestnuts. Properties on Eagle Brow and Brookfield Road, surrounded by established trees, also benefit from a spring clear-out to remove winter sediment.' }
      },
      {
        '@type': 'Question',
        name: 'What causes gutters to block in Lymm WA13?',
        acceptedAnswer: { '@type': 'Answer', text: 'The primary causes in Lymm are: (1) heavy leaf fall from the mature mixed woodland surrounding Lymm Dam and the Bridgewater Canal towpath tree line; (2) moss growth driven by the Cheshire plain\'s persistent moisture and the micro-climate created by the Dam and canal; (3) original cast iron gutters on conservation-area properties in the village centre developing joint-crack sediment build-up; (4) A56 Chester Road and M6/M56 motorway-corridor diesel particulates bonding with debris inside gutter channels.' }
      },
      {
        '@type': 'Question',
        name: 'Do you clean cast iron gutters on Lymm conservation area properties?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many Victorian and Edwardian properties in Lymm\'s conservation area — around Pepper Street, the Market Cross and Eagle Brow — retain original cast iron ogee or half-round gutters. We hand-clear with padded tools to avoid cracking the brittle iron, flush all joints, inspect union clips, and reseal any leaking sections with gutter sealant on the same visit. Cast iron gutters can last a century with proper maintenance.' }
      },
      {
        '@type': 'Question',
        name: 'Can blocked gutters cause damp on Lymm properties?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Lymm\'s sandstone-built conservation-area properties are particularly vulnerable because sandstone is more porous than brick. Overflowing gutters soak the wall face and capillary action draws moisture into interior plasterwork within weeks. For high-value properties on Eagle Brow, Brookfield Road and Reddish Lane, a damp survey triggered by blocked gutters can cost several times the price of annual gutter maintenance.' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Gutter Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning' },
      { '@type': 'ListItem', position: 3, name: 'Lymm', item: 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning/lymm' }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides professional gutter cleaning in Lymm, Cheshire WA13. Serving Lymm village conservation area, Eagle Brow, Pepper Street, Brookfield Road, Reddish Lane, Oughtrington, Statham, Heatley and Warburton. Cast iron gutter specialists for conservation-area properties. Lymm Dam and Bridgewater Canal woodland leaf-fall experts. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY. Telephone: 07845 463877.
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
                <span className="text-muted-foreground" itemProp="name" aria-current="page">Lymm</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        <section className="hero-bg py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Gutter Cleaning Lymm WA13
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Professional gutter and downpipe clearing for Lymm, Heatley, Statham and Warburton. Cast iron conservation-area specialists. Lymm Dam leaf-fall experts. 5.0 ★ — 47 verified reviews.
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
                <strong>Gutter cleaning in Lymm costs £70–£180.</strong> Semis in Oughtrington or Statham from £70; large detached on Brookfield Road or Reddish Lane £110–£150; Victorian conservation-area properties with complex rooflines £130–£180. Includes gutters and downpipes cleared, flushed and tested. Call 07845 463877 for a free quote.
              </p>
            </div>

            <section className="mb-10" aria-labelledby="lymm-gutters">
              <h2 id="lymm-gutters" className="text-2xl font-bold text-foreground mb-4">Why Lymm Properties Need Annual Gutter Cleaning</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lymm's position within the Cheshire plain, flanked by the mature woodland of <strong>Lymm Dam</strong> and the towpath tree line of the <strong>Bridgewater Canal</strong>, makes it one of the highest leaf-fall locations in the Warrington area. Mature oaks, beeches, horse chestnuts and sycamores drop enormous volumes of leaf matter directly into gutter channels each autumn — particularly on <strong>Eagle Brow</strong>, <strong>Brookfield Road</strong> and <strong>Oughtrington Lane</strong>, where established tree canopies overhang rooflines.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Dam and canal create a localised high-humidity micro-climate within a half-mile corridor that keeps gutters moist between rainfall events, accelerating moss and lichen growth on cast iron and UPVC systems alike. Compacted leaf mulch retains water against fascia boards, rotting timber over 2–3 seasons in the absence of regular maintenance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Lymm's housing ranges from sandstone-built Victorian and Edwardian cottages in the conservation area to 1930s–50s detached along Reddish Lane and Higher Lane, and executive modern builds on gated developments such as <strong>Beechfield</strong> and <strong>Brookfield</strong>. Each property type has different gutter systems requiring specific handling.
              </p>
            </section>

            <section className="mb-10" aria-labelledby="gutter-types-lymm">
              <h2 id="gutter-types-lymm" className="text-2xl font-bold text-foreground mb-6">Gutter Systems We Service in Lymm</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Cast Iron Ogee & Half-Round', where: 'Village conservation area: Pepper Street, Eagle Brow, Market Cross', method: 'Hand-cleared with padded tools. Joints flushed and inspected. Leaking sections resealed on the same visit. Union clips tightened.' },
                  { title: 'UPVC Square-Line & Fascia', where: '1970s–90s housing: Oughtrington, Statham, Heatley', method: 'Vacuum extraction of compacted leaf mulch. Bracket realignment. Fascia board moisture check. Downpipe rodding.' },
                  { title: 'Deep-Flow & Ogee UPVC', where: 'Large exec detached: Brookfield Rd, Reddish Lane, Higher Lane', method: 'High-capacity channels demand thorough clearing — a blocked deep-flow gutter can overflow within minutes in heavy Cheshire rain.' },
                  { title: 'Box & Valley Gutter', where: 'Complex-roofline properties, barn conversions, older detached', method: 'Internal box gutters hand-excavated. Lead valley liners inspected for joint lift. Outlet grids cleared.' },
                ].map(g => (
                  <div key={g.title} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{g.title}</h3>
                    <p className="text-xs text-primary font-medium mb-2">{g.where}</p>
                    <p className="text-sm text-muted-foreground">{g.method}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10" aria-labelledby="faq-gutter-lymm" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-gutter-lymm" className="text-2xl font-bold text-foreground mb-6">Gutter Cleaning Lymm — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  { q: 'How much does gutter cleaning cost in Lymm?', a: 'Gutter cleaning in Lymm WA13 costs £70–£180. A semi in Oughtrington or Statham runs £70–£100; large detached on Brookfield Road or Reddish Lane £110–£150; Victorian conservation-area property with complex roofline £130–£180. Includes gutters and downpipes cleared and flushed.' },
                  { q: 'How often should gutters be cleaned in Lymm?', a: 'Annually for most Lymm properties. Properties overlooking Lymm Dam or along the Bridgewater Canal corridor benefit from twice-yearly cleaning due to heavy leaf fall from mature woodland. Eagle Brow and Brookfield Road properties surrounded by established trees also benefit from a spring clear.' },
                  { q: 'What causes gutters to block in Lymm WA13?', a: 'The main causes in Lymm are: heavy leaf fall from mature woodland around Lymm Dam and the Bridgewater Canal; moss growth from the Dam and canal micro-climate; cast iron joint cracking on conservation-area properties; and A56/M6/M56 motorway-corridor diesel particulates bonding with debris inside channels.' },
                  { q: 'Do you clean cast iron gutters on Lymm conservation area properties?', a: 'Yes. Victorian and Edwardian properties around Pepper Street, the Market Cross and Eagle Brow often retain original cast iron ogee or half-round gutters. We hand-clear with padded tools, flush all joints, inspect union clips and reseal leaking sections on the same visit.' },
                  { q: 'Can blocked gutters cause damp on Lymm properties?', a: 'Yes — especially on sandstone conservation-area properties. Overflowing gutters soak the porous sandstone wall face and capillary action draws moisture into interior plasterwork. For high-value properties on Eagle Brow, Brookfield Road and Reddish Lane, a damp survey triggered by blocked gutters can cost far more than annual maintenance.' },
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

            <section className="mb-10" aria-labelledby="related-lymm-gutter">
              <h2 id="related-lymm-gutter" className="text-xl font-bold text-foreground mb-4">Other Services in Lymm</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Roof Cleaning Lymm', href: '/services/roof-cleaning/lymm' },
                  { label: 'Render Cleaning Lymm', href: '/services/render-cleaning/lymm' },
                  { label: 'Pressure Washing Lymm', href: '/services/pressure-washing/lymm' },
                  { label: 'Cladding Cleaning Lymm', href: '/services/cladding-cleaning/lymm' },
                  { label: 'Exterior Cleaning Lymm', href: '/services/exterior-cleaning/lymm' },
                  { label: 'Lymm Location Hub', href: '/locations/lymm' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="text-sm text-primary hover:text-accent underline underline-offset-2 transition-colors">{l.label}</Link>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Gutter Cleaning in Lymm WA13</h2>
              <p className="text-muted-foreground mb-6">Covering Lymm, Heatley, Statham, Warburton and all WA13 postcodes. Mon–Sat, same-day quotes available.</p>
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
