import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function GutterWigan() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Gutter Cleaning Wigan',
    description: 'Professional gutter cleaning in Wigan WN1–WN6 — Victorian cast iron gutters on former colliery village terraces in Ince, Abram and Hindley; UPVC systems on 1960s–80s council housing in Pemberton and Goose Green; and larger detached on Standish and Winstanley. Pennine fringe high-rainfall specialists. Serving all Wigan postcodes.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'R.R.M Exterior Cleaning Specialist',
      telephone: '+447845463877',
      address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
      url: 'https://rrmexternalcleaningspecialist.co.uk',
      areaServed: { '@type': 'City', name: 'Wigan' }
    },
    areaServed: { '@type': 'City', name: 'Wigan' },
    serviceType: 'Gutter Cleaning',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 60, maxPrice: 170, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does gutter cleaning cost in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'Gutter cleaning in Wigan costs £60–£170. A 1920s–50s terraced property in Ince, Abram, Hindley or Platt Bridge runs £60–£90; a semi-detached in Ashton-in-Makerfield, Pemberton or Orrell £80–£120; a larger detached on Standish or Winstanley £120–£170. Price includes gutters and downpipes cleared and flushed throughout.' }
      },
      {
        '@type': 'Question',
        name: 'How often should gutters be cleaned in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'Annually for most Wigan properties — once in autumn. Wigan\'s Pennine fringe postcodes (WN5 Orrell/Billinge, WN6 Standish/Shevington) receive 750–800 mm of annual rainfall, significantly higher than the national average, accelerating organic build-up in gutter channels. Properties on the higher ground above Standish or Wrightington can benefit from twice-yearly cleaning.' }
      },
      {
        '@type': 'Question',
        name: 'What causes gutters to block in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'In Wigan the primary causes are: (1) high Pennine-fringe rainfall depositing airborne moss spores directly into gutter channels; (2) colliery-era cast iron gutters on terraces in Ince, Abram and Hindley developing joint cracks that collect sediment; (3) sagging UPVC brackets on 1960s–80s council housing in Pemberton and Goose Green; (4) M6 J25–J27 motorway diesel particulates bonding with organic debris; (5) mine subsidence-related roof movement causing gutters to pull away from fascia boards on affected properties.' }
      },
      {
        '@type': 'Question',
        name: 'Can mine subsidence affect gutters in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — and it is unique to Wigan. Former colliery workings under parts of Ince (WN2), Abram (WN2), Hindley (WN2) and Platt Bridge (WN2) have caused gradual ground movement. This can tilt roof lines over decades, pulling gutters away from fascia boards, creating negative falls (gutters sloping the wrong way) and cracking union joints. We inspect gutter fall direction on all Wigan visits and flag any subsidence-related issues.' }
      },
      {
        '@type': 'Question',
        name: 'Do you clear cast iron gutters on Wigan terraced houses?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Wigan has a large stock of pre-1950s terraced housing — particularly in the former pit villages of Ince, Abram, Hindley and Platt Bridge — where original cast iron ogee and half-round gutters survive. We hand-clear these with padded tools to avoid cracking the brittle cast iron, then flush joints, check union clips and reseal any leaking sections on the same visit.' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Gutter Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning' },
      { '@type': 'ListItem', position: 3, name: 'Wigan', item: 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning/wigan' }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides professional gutter cleaning in Wigan, Greater Manchester WN1–WN6. Serving Wigan town centre, Ince, Abram, Hindley, Platt Bridge, Pemberton, Goose Green, Ashton-in-Makerfield, Orrell, Billinge, Standish, Shevington, Winstanley and Appley Bridge. Former colliery cast iron gutter specialists. Mine subsidence gutter inspection. Pennine fringe high-rainfall areas. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY. Telephone: 07845 463877.
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
                <span className="text-muted-foreground" itemProp="name" aria-current="page">Wigan</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        <section className="hero-bg py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Gutter Cleaning Wigan WN1–WN6
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Professional gutter and downpipe clearing across all Wigan postcodes. Cast iron colliery-terrace specialists. Mine subsidence inspection. Pennine fringe high-rainfall experts. 5.0 ★ — 47 reviews.
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
                <strong>Gutter cleaning in Wigan costs £60–£170.</strong> Terraced house in Ince, Abram or Hindley from £60; semi-detached in Ashton-in-Makerfield or Orrell £80–£120; larger detached in Standish or Winstanley £120–£170. Includes gutters, downpipes, flush test and mine-subsidence fall inspection. Call 07845 463877.
              </p>
            </div>

            <section className="mb-10" aria-labelledby="wigan-gutters">
              <h2 id="wigan-gutters" className="text-2xl font-bold text-foreground mb-4">Why Wigan Properties Need Annual Gutter Cleaning</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wigan's position at the western edge of the Pennines gives it a notably wetter climate than surrounding lowland towns. The higher Pennine fringe postcodes — <strong>WN5 (Orrell, Billinge)</strong> and <strong>WN6 (Standish, Shevington, Appley Bridge)</strong> — receive 750–800 mm of annual rainfall, and exposed hilltop positions mean gutters fill quickly during the extended North West wet season. Even the lower-lying town-centre postcodes (<strong>WN1–WN3</strong>) experience frequent prolonged rainfall that overwhelms partially blocked gutters rapidly.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wigan also has a distinctive housing legacy: <strong>former colliery villages</strong> across <strong>Ince (WN2)</strong>, <strong>Abram (WN2)</strong>, <strong>Hindley (WN2)</strong> and <strong>Platt Bridge (WN2)</strong> contain large stocks of 1910s–1950s pit-village terraces, many still retaining original or early-replacement cast iron guttering. These require specialist hand-clearing to avoid cracking the brittle iron.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A further factor unique to parts of Wigan is <strong>former mine subsidence</strong>. Ground movement from historical colliery workings under Ince, Abram and Hindley can tilt roof lines gradually, causing gutters to develop negative falls (water pooling at the wrong end) or pulling away from fascia boards. We check fall direction on every Wigan visit and report any subsidence-related issues.
              </p>
            </section>

            <section className="mb-10" aria-labelledby="gutter-types-wigan">
              <h2 id="gutter-types-wigan" className="text-2xl font-bold text-foreground mb-6">Gutter Systems We Service Across Wigan</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Cast Iron Ogee & Half-Round', where: 'Pit-village terraces: Ince, Abram, Hindley, Platt Bridge (WN2)', method: 'Hand-cleared with padded tools. Joints flushed and resealed. Union clips tightened. Subsidence-related misalignment flagged.' },
                  { title: 'UPVC Square-Line & Round', where: '1960s–80s council housing: Pemberton (WN5), Goose Green (WN3), Worsley Mesnes', method: 'Vacuum extraction. Sagging bracket realignment. Fascia board moisture assessment. Downpipe rodding.' },
                  { title: 'Deep-Flow UPVC', where: 'Larger detached: Standish (WN6), Winstanley (WN5), Shevington', method: 'High-capacity channels — critical on Pennine fringe where rainfall intensity is higher. Full length cleared and flushed.' },
                  { title: 'Box & Valley Gutter', where: 'Converted properties, flat-roof extensions, commercial premises', method: 'Internal box gutters hand-excavated. Outlet guards checked. Overflow weep holes kept clear.' },
                ].map(g => (
                  <div key={g.title} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{g.title}</h3>
                    <p className="text-xs text-primary font-medium mb-2">{g.where}</p>
                    <p className="text-sm text-muted-foreground">{g.method}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10" aria-labelledby="faq-gutter-wigan" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-gutter-wigan" className="text-2xl font-bold text-foreground mb-6">Gutter Cleaning Wigan — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  { q: 'How much does gutter cleaning cost in Wigan?', a: 'Gutter cleaning in Wigan costs £60–£170. A terrace in Ince, Abram, Hindley or Platt Bridge from £60; a semi in Ashton-in-Makerfield, Pemberton or Orrell £80–£120; a larger detached on Standish or Winstanley £120–£170. Includes gutters, downpipes cleared and flushed.' },
                  { q: 'How often should gutters be cleaned in Wigan?', a: 'Annually for most Wigan properties. Pennine fringe postcodes WN5 (Orrell/Billinge) and WN6 (Standish/Shevington) receive 750–800 mm annual rainfall — significantly higher than average — accelerating build-up. Higher-ground properties above Standish or Wrightington benefit from twice-yearly cleaning.' },
                  { q: 'What causes gutters to block in Wigan?', a: 'Primary causes: high Pennine-fringe rainfall depositing moss spores into channels; cast iron joint cracks on colliery-era terraces in Ince, Abram and Hindley; sagging UPVC brackets on 1960s–80s council housing in Pemberton and Goose Green; M6 J25–J27 diesel particulates bonding with debris; and mine subsidence pulling gutters away from fascia boards.' },
                  { q: 'Can mine subsidence affect gutters in Wigan?', a: 'Yes — unique to Wigan. Former colliery workings under Ince, Abram, Hindley and Platt Bridge have caused ground movement that can tilt roof lines, pulling gutters away from fascia boards or creating negative falls. We inspect gutter fall direction on all Wigan visits and flag subsidence-related issues.' },
                  { q: 'Do you clear cast iron gutters on Wigan terraced houses?', a: 'Yes. Former pit villages across WN2 — Ince, Abram, Hindley, Platt Bridge — have large stocks of 1910s–50s terraces with original cast iron guttering. We hand-clear with padded tools to avoid cracking brittle iron, flush joints, check union clips and reseal leaking sections on the same visit.' },
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

            <section className="mb-10" aria-labelledby="related-wigan-gutter">
              <h2 id="related-wigan-gutter" className="text-xl font-bold text-foreground mb-4">Other Services in Wigan</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Roof Cleaning Wigan', href: '/services/roof-cleaning/wigan' },
                  { label: 'Render Cleaning Wigan', href: '/services/render-cleaning/wigan' },
                  { label: 'Pressure Washing Wigan', href: '/services/pressure-washing/wigan' },
                  { label: 'Cladding Cleaning Wigan', href: '/services/cladding-cleaning/wigan' },
                  { label: 'Exterior Cleaning Wigan', href: '/services/exterior-cleaning/wigan' },
                  { label: 'Wigan Location Hub', href: '/locations/wigan' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="text-sm text-primary hover:text-accent underline underline-offset-2 transition-colors">{l.label}</Link>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Gutter Cleaning in Wigan</h2>
              <p className="text-muted-foreground mb-6">Covering all Wigan postcodes WN1–WN6 including Standish, Orrell, Ashton-in-Makerfield, Ince, Hindley and Pemberton. Mon–Sat.</p>
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
