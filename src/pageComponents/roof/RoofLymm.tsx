import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function RoofLymm() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Roof Cleaning Lymm',
    description: 'Professional roof cleaning in Lymm WA13 — soft wash biocide treatment for Welsh slate on conservation-area properties, clay plain tiles on 1930s–50s detached, and concrete interlocking tiles on estate housing. Lymm Dam micro-climate and Bridgewater Canal corridor moss specialists. Serving Lymm, Heatley, Statham, Oughtrington and all WA13 postcodes.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'R.R.M Exterior Cleaning Specialist',
      telephone: '+447845463877',
      address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
      url: 'https://rrmexternalcleaningspecialist.co.uk',
      areaServed: { '@type': 'City', name: 'Lymm' }
    },
    areaServed: { '@type': 'City', name: 'Lymm' },
    serviceType: 'Roof Cleaning',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 250, maxPrice: 650, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does roof cleaning cost in Lymm?',
        acceptedAnswer: { '@type': 'Answer', text: 'Roof cleaning in Lymm WA13 costs £250–£650. A 3-bed semi in Oughtrington or Statham runs £250–£350; a large 4–5 bed detached on Brookfield Road, Reddish Lane or Higher Lane £400–£550; a large Victorian or Edwardian property in the conservation area with complex roofline £500–£650. Price includes biocide treatment, soft wash and residual growth-inhibitor coating.' }
      },
      {
        '@type': 'Question',
        name: 'Is soft washing safe for Lymm\'s conservation area roofs?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — soft washing is the only safe method for any roof, and is especially important for conservation-area properties in Lymm. Original Welsh slate on Victorian cottages around Pepper Street, Eagle Brow and the Market Cross must never be high-pressure washed: pressure above 40 bar lifts slate nibs, forces water behind laps and can crack century-old stone tiles. We apply biocide at 20–30 bar maximum, allowing the chemistry to do the work rather than the pressure.' }
      },
      {
        '@type': 'Question',
        name: 'Why is there moss on my roof in Lymm?',
        acceptedAnswer: { '@type': 'Answer', text: 'Lymm sits in a natural moisture bowl created by Lymm Dam, the Bridgewater Canal and the surrounding Cheshire plain. The Dam and canal create a persistent high-humidity micro-climate within a half-mile radius — roof surfaces in the Eagle Brow, Pepper Street and Oughtrington Lane corridor stay significantly damper than equivalent roofs 2 miles away. This sustained moisture, combined with shade from mature woodland, provides near-ideal conditions for moss, lichen and black algae establishment on north- and east-facing slopes.' }
      },
      {
        '@type': 'Question',
        name: 'How long do roof cleaning results last in Lymm?',
        acceptedAnswer: { '@type': 'Answer', text: 'After professional soft washing, Lymm roofs typically remain clean for 3–5 years. Properties in the Lymm Dam and Bridgewater Canal moisture corridor may see re-growth closer to 3 years due to the localised humidity. Our post-wash biocide residual coating continues killing spores for 12–18 months after treatment, extending the effective clean period.' }
      },
      {
        '@type': 'Question',
        name: 'Does a clean roof help sell a Lymm property?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — significantly. Lymm is one of Cheshire\'s most sought-after villages and properties command premium prices. A moss-covered roof is a visible kerb-appeal negative and can trigger negative survey comments that reduce offers. For high-value properties on Eagle Brow, Brookfield Road or the conservation area, roof cleaning ahead of marketing is one of the highest ROI exterior improvements available.' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Roof Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning' },
      { '@type': 'ListItem', position: 3, name: 'Lymm', item: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/lymm' }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides professional roof cleaning in Lymm, Cheshire WA13. Specialising in Welsh slate on Victorian and Edwardian conservation-area properties around Pepper Street, Eagle Brow and the Market Cross; clay plain tiles on 1930s–50s detached in Oughtrington and Reddish Lane; and concrete interlocking tiles on Heatley and Statham estate housing. Lymm Dam and Bridgewater Canal micro-climate moss specialists. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY. Call 07845 463877.
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
                <Link href="/services/roof-cleaning" className="text-primary hover:text-accent transition-colors" itemProp="item"><span itemProp="name">Roof Cleaning</span></Link>
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
                Roof Cleaning Lymm WA13
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Soft wash moss and algae removal for all Lymm roof types. Conservation area Welsh slate, clay tiles, concrete interlocking. No high-pressure damage. 5.0 ★ — 47 verified reviews.
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
                <strong>Roof cleaning in Lymm costs £250–£650.</strong> A 3-bed semi in Oughtrington or Statham from £250; large 4–5 bed detached on Brookfield Road or Higher Lane £400–£550; Victorian conservation-area property £500–£650. Soft wash only — biocide + residual treatment included. Call 07845 463877 for a free quote.
              </p>
            </div>

            <section className="mb-10" aria-labelledby="lymm-roofs">
              <h2 id="lymm-roofs" className="text-2xl font-bold text-foreground mb-4">Roof Types in Lymm — The Moisture Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Lymm's geography creates a unique roofing maintenance challenge. The village sits in a shallow bowl centred on <strong>Lymm Dam</strong>, with the <strong>Bridgewater Canal</strong> running along the northern edge. Both water bodies evaporate year-round, creating a persistent high-humidity micro-climate that keeps roof surfaces wet for hours longer than properties in open Cheshire countryside. North-facing slopes in the Eagle Brow and Pepper Street area barely dry between autumn and spring.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {[
                  { type: 'Welsh Slate', era: 'Victorian & Edwardian', where: 'Conservation area: Pepper St, Eagle Brow, Market Cross, Higher Lane', note: 'Must not exceed 30 bar — slate nibs fracture under pressure. Black lichen and orange algae common. Ridge and verge re-pointing often needed alongside the clean.' },
                  { type: 'Clay Plain Tiles', era: '1930s–1950s detached', where: 'Reddish Lane, Oughtrington Lane, Higher Lane, Statham', note: 'Porous biscuit tile retains moisture. Green moss colonies can reach 50 mm deep on older Cheshire properties. Extended biocide dwell time essential.' },
                  { type: 'Concrete Interlocking', era: '1970s–2000s housing', where: 'Heatley, parts of Statham, newer Lymm estates', note: 'Heavy surface texture promotes fastest moss growth. Soft wash at 40–60 bar with 30+ minute biocide pre-treatment. Post-wash sealer optional.' },
                ].map(r => (
                  <div key={r.type} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{r.type}</h3>
                    <p className="text-xs text-primary font-medium mb-1">{r.era}</p>
                    <p className="text-xs text-muted-foreground mb-2 italic">{r.where}</p>
                    <p className="text-sm text-muted-foreground">{r.note}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10 bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800" aria-labelledby="lymm-dam-moisture">
              <h2 id="lymm-dam-moisture" className="text-xl font-bold text-foreground mb-3">Lymm Dam & Bridgewater Canal — Why Your Roof Grows Moss Faster</h2>
              <p className="text-muted-foreground leading-relaxed">
                Properties within approximately 500 metres of <strong>Lymm Dam</strong> or the <strong>Bridgewater Canal</strong> experience measurably higher rates of biological growth on roofs, render and cladding compared to equivalent properties 2 miles away in open Cheshire countryside. The constant evaporation from both water bodies keeps ambient relative humidity elevated even on dry days, preventing roof surfaces from fully drying. Moss and lichen — which require moisture to establish — colonise roof tiles within 12–18 months on properties overlooking the Dam or along the canal corridor between <strong>Lymm Warrington Lane</strong> and <strong>Statham</strong>. We increase biocide concentration and dwell time for properties in the moisture corridor as standard.
              </p>
            </section>

            <section className="mb-10" aria-labelledby="faq-roof-lymm" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-roof-lymm" className="text-2xl font-bold text-foreground mb-6">Roof Cleaning Lymm — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  { q: 'How much does roof cleaning cost in Lymm?', a: 'Roof cleaning in Lymm WA13 costs £250–£650. A 3-bed semi in Oughtrington or Statham runs £250–£350; a large detached on Brookfield Road or Higher Lane £400–£550; a Victorian conservation-area property with complex roofline £500–£650. Includes biocide treatment, soft wash and residual coating.' },
                  { q: 'Is soft washing safe for Lymm\'s conservation area roofs?', a: 'Yes — it is the only safe method. Original Welsh slate on Victorian cottages around Pepper Street, Eagle Brow and the Market Cross must never be pressure washed above 40 bar. We apply biocide at 20–30 bar maximum, letting the chemistry kill moss at root level without mechanical tile damage.' },
                  { q: 'Why is there moss on my roof in Lymm?', a: 'Lymm Dam and the Bridgewater Canal create a persistent high-humidity micro-climate within a half-mile radius. Roof surfaces in the Eagle Brow, Pepper Street and Oughtrington Lane corridor stay significantly damper than roofs 2 miles away, providing near-ideal conditions for moss, lichen and black algae on north- and east-facing slopes.' },
                  { q: 'How long do roof cleaning results last in Lymm?', a: 'Typically 3–5 years. Properties in the Lymm Dam and Bridgewater Canal moisture corridor may see re-growth closer to 3 years. Our post-wash biocide residual coating kills spores for 12–18 months after treatment, extending the effective clean period.' },
                  { q: 'Does a clean roof help sell a Lymm property?', a: 'Yes — significantly. Lymm is one of Cheshire\'s most sought-after villages and properties command premium prices. A moss-covered roof triggers negative survey comments that reduce offers. For high-value properties on Eagle Brow, Brookfield Road or the conservation area, roof cleaning ahead of marketing is one of the highest ROI exterior improvements available.' },
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

            <section className="mb-10" aria-labelledby="related-lymm-roof">
              <h2 id="related-lymm-roof" className="text-xl font-bold text-foreground mb-4">Other Services in Lymm</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Gutter Cleaning Lymm', href: '/services/gutter-cleaning/lymm' },
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
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Roof Cleaning in Lymm WA13</h2>
              <p className="text-muted-foreground mb-6">Covering Lymm, Heatley, Statham, Warburton, Oughtrington and all WA13 postcodes. Mon–Sat.</p>
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
