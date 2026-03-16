import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function RoofGolborne() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Roof Cleaning Golborne',
    description: 'Professional roof cleaning in Golborne WA3 — soft wash biocide treatment for Welsh slate terraces, clay plain tiles and concrete interlocking tiles. Moss and lichen removal for Stone Cross Lane, Harvey Lane, Legh Street and Lowton properties. East Lancashire Road diesel particulate specialists.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'R.R.M Exterior Cleaning Specialist',
      telephone: '+447845463877',
      address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
      url: 'https://rrmexternalcleaningspecialist.co.uk',
      areaServed: { '@type': 'City', name: 'Golborne' }
    },
    areaServed: { '@type': 'City', name: 'Golborne' },
    serviceType: 'Roof Cleaning',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 200, maxPrice: 550, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does roof cleaning cost in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Roof cleaning in Golborne (WA3) costs £200–£550. A standard 3-bed semi runs £200–£300; a 4-bed detached £300–£420; a large Victorian terrace on Stone Cross Lane or Harvey Lane £350–£550 depending on ridge length and degree of moss colonisation. Price includes biocide treatment, soft wash and a residual growth-inhibitor coat.' }
      },
      {
        '@type': 'Question',
        name: 'Is soft washing safe for roofs in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — and it is the only method we use. High-pressure washing above 60 bar strips granules from clay and concrete tiles and can force water behind Welsh-slate laps, causing internal leak points. Our soft wash applies a biocide at 20–40 bar, killing moss and lichen at root level without mechanical damage. The residual coating continues killing spores for 12–18 months after the visit.' }
      },
      {
        '@type': 'Question',
        name: 'Why is there so much moss on roofs in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Golborne\'s Lancashire-plain location receives 700 mm+ of annual rainfall. Combined with prevailing westerly humidity from the Irish Sea, roof surfaces stay damp for extended periods — ideal for moss, lichen and black algae. The East Lancashire Road (A580) runs south of the town centre, and diesel NOx particulates from constant A-road traffic create a nutrient film on north- and east-facing roof slopes that acts as a fertiliser for biological growth.' }
      },
      {
        '@type': 'Question',
        name: 'How long do roof cleaning results last in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'After professional soft washing, Golborne roofs typically remain clean for 3–5 years. Properties on higher-exposure positions north of Bridge Street facing prevailing westerlies may see re-growth closer to 3 years. Applying our post-wash biocide residual treatment extends the clean period by inhibiting spore germination in the 12 months after the initial treatment.' }
      },
      {
        '@type': 'Question',
        name: 'Does a clean roof add value to a Golborne property?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. A moss-covered roof signals deferred maintenance to surveyors and homebuyers. For Golborne\'s popular 1930s–50s semi-detached stock in Lowton and around Victoria Park, a freshly cleaned roof removes objections at viewing stage, supports the asking price and avoids surveyor caveats about roof condition that could trigger price renegotiation.' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Roof Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning' },
      { '@type': 'ListItem', position: 3, name: 'Golborne', item: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/golborne' }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides professional roof cleaning and moss removal in Golborne, Wigan WA3. Specialising in Welsh slate terraces on Stone Cross Lane and Harvey Lane, clay plain tiles on 1930s–50s semis in Lowton and Victoria Park area, and concrete interlocking tiles on newer Golborne estates. East Lancashire Road (A580) diesel particulate removal. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY. Call 07845 463877.
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
                Roof Cleaning Golborne WA3
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Soft wash moss and algae removal for all Golborne roof types. Welsh slate, clay tiles, concrete interlocking. No high-pressure damage. 5.0 ★ — 47 verified reviews.
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
                <strong>Roof cleaning in Golborne costs £200–£550.</strong> A 3-bed semi runs £200–£300; 4-bed detached £300–£420; large Victorian terrace on Stone Cross Lane or Harvey Lane £350–£550. Soft wash only — no high pressure. Biocide residual treatment included. R.R.M based 3 miles away in Newton-le-Willows WA12. Call 07845 463877.
              </p>
            </div>

            <section className="mb-10" aria-labelledby="golborne-roofs">
              <h2 id="golborne-roofs" className="text-2xl font-bold text-foreground mb-4">Roof Types in Golborne — What We Clean</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Golborne's housing spans over a century of construction, producing three distinct roof types that each require careful technique:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { type: 'Welsh Slate', era: 'Pre-1930 Victorian & Edwardian terraces', where: 'Bridge Street, Stone Cross Lane, Harvey Lane, Nook Lane', note: 'Natural stone — cannot tolerate pressure above 40 bar. Black lichen and orange algae are common. Re-pointing of ridge and verge mortar often needed alongside cleaning.' },
                  { type: 'Clay Plain Tiles', era: '1930s–1950s semi-detached', where: 'Victoria Park area, Lowton (WA3), Stone Cross', note: 'Porous biscuit-fired tile retains moisture and supports thick green moss colonies. Soft wash + biocide removes growth without lifting tile nibs.' },
                  { type: 'Concrete Interlocking Tiles', era: '1970s–90s council & private estates', where: 'Legh Street corridor, Golborne Road developments', note: 'Heaviest moss accumulation due to surface texture. Soft wash at 40–60 bar with extended biocide dwell time (30+ minutes) gives best results.' },
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

            <section className="mb-10 bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800" aria-labelledby="a580-pollution">
              <h2 id="a580-pollution" className="text-xl font-bold text-foreground mb-3">East Lancashire Road (A580) — Diesel Particulates Accelerate Moss Growth</h2>
              <p className="text-muted-foreground leading-relaxed">
                The <strong>A580 East Lancashire Road</strong> runs directly south of Golborne town centre, carrying heavy freight and commuter traffic between Liverpool and Manchester around the clock. Diesel NOx and particulate matter from this road — one of the busiest inter-urban A-roads in the North West — settle on north- and east-facing roof slopes as a nutrient-rich hydrocarbon film. This film combines with Lancashire's high rainfall to create near-ideal conditions for moss and lichen establishment, often reducing the effective lifespan of a roof clean by 12–18 months compared to properties further from A-road corridors. We factor this into our biocide specification for Golborne properties near the A580.
              </p>
            </section>

            <section className="mb-10" aria-labelledby="faq-roof-golborne" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-roof-golborne" className="text-2xl font-bold text-foreground mb-6">Roof Cleaning Golborne — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  { q: 'How much does roof cleaning cost in Golborne?', a: 'Roof cleaning in Golborne (WA3) costs £200–£550. A standard 3-bed semi runs £200–£300; a 4-bed detached £300–£420; a large Victorian terrace on Stone Cross Lane or Harvey Lane £350–£550. Includes biocide treatment, soft wash and residual growth-inhibitor coating.' },
                  { q: 'Is soft washing safe for roofs in Golborne?', a: 'Yes — and it is the only method we use. High-pressure washing strips granules from clay and concrete tiles and can force water behind Welsh-slate laps. Our soft wash applies biocide at 20–40 bar, killing moss and lichen at root level. The residual coating continues killing spores for 12–18 months after the visit.' },
                  { q: 'Why is there so much moss on roofs in Golborne?', a: 'Golborne receives 700 mm+ of annual rainfall on the Lancashire plain. Prevailing westerly humidity keeps roof surfaces damp. The A580 East Lancashire Road diesel NOx creates a nutrient film on north- and east-facing slopes that fertilises moss and lichen growth, compressing cleaning intervals compared to inland locations.' },
                  { q: 'How long do roof cleaning results last in Golborne?', a: 'After professional soft washing, Golborne roofs typically remain clean for 3–5 years. Properties near the A580 or facing prevailing westerlies may see re-growth closer to 3 years. The post-wash biocide residual treatment extends the clean period by inhibiting spore germination in the 12 months after treatment.' },
                  { q: 'Does a clean roof add value to a Golborne property?', a: 'Yes. A moss-covered roof signals deferred maintenance to surveyors. For Golborne\'s 1930s–50s semis in Lowton and the Victoria Park area, a clean roof removes objections at viewing stage, supports the asking price and avoids surveyor caveats that could trigger price renegotiation.' },
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

            <section className="mb-10" aria-labelledby="related-golborne-roof">
              <h2 id="related-golborne-roof" className="text-xl font-bold text-foreground mb-4">Other Services in Golborne</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Gutter Cleaning Golborne', href: '/services/gutter-cleaning/golborne' },
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
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Roof Cleaning in Golborne WA3</h2>
              <p className="text-muted-foreground mb-6">Covering Golborne, Lowton, Kenyon and all WA3 postcodes. Based in Newton-le-Willows — 3 miles away.</p>
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
