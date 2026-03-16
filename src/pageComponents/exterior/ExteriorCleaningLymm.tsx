import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function ExteriorCleaningLymm() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Exterior Cleaning Lymm',
    description: 'Complete exterior cleaning in Lymm WA13 — gutter cleaning, roof soft washing, render cleaning, pressure washing and cladding cleaning. Serving Lymm village, Eagle Brow, Pepper Street, Brookfield Road, Oughtrington, Heatley, Statham, Warburton and all WA13 postcodes. Lymm Dam and Bridgewater Canal moisture specialists.',
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
    serviceType: 'Exterior Cleaning',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 70, maxPrice: 650, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does exterior cleaning cost in Lymm?',
        acceptedAnswer: { '@type': 'Answer', text: 'Exterior cleaning prices in Lymm WA13: gutter cleaning £70–£180; roof soft wash £250–£650; render cleaning £150–£550; pressure washing £100–£300; cladding cleaning £120–£350. A full exterior maintenance bundle covering all services is available at a combined rate. Call 07845 463877 for an itemised quote.' }
      },
      {
        '@type': 'Question',
        name: 'Who covers exterior cleaning in Lymm WA13?',
        acceptedAnswer: { '@type': 'Answer', text: 'R.R.M Exterior Cleaning Specialist covers Lymm WA13 and surrounding areas including Heatley, Statham, Warburton, Oughtrington, Booth and the rural WA13 fringe. We are based at 9 Noon Ct, Newton-le-Willows WA12 8QY and operate six days a week. Call 07845 463877 for a same-day quote.' }
      },
      {
        '@type': 'Question',
        name: 'Why does exterior cleaning cost more in Lymm than average?',
        acceptedAnswer: { '@type': 'Answer', text: 'Lymm properties typically cost more to clean than average because: (1) properties are larger — longer driveways, bigger roofs, more gutter run; (2) the Lymm Dam and Bridgewater Canal micro-climate increases biological contamination rates requiring stronger biocide concentrations; (3) conservation-area and barn-conversion properties require specialist approaches (cast iron gutters, lime pointing inspection, timber cladding care). Prices reflect actual surface area and complexity.' }
      },
      {
        '@type': 'Question',
        name: 'How often should I have my Lymm property exterior cleaned?',
        acceptedAnswer: { '@type': 'Answer', text: 'Gutters: annually (twice for Dam-adjacent properties on Eagle Brow and Bridgewater Canal corridor). Roof: every 3–5 years — Dam-adjacent every 3 years. Render and cladding: every 2–3 years for most Lymm properties; 18–24 months within 500m of the Dam or canal. Driveways: every 12–18 months. We offer Lymm maintenance plans bundling all services at a discounted rate.' }
      },
      {
        '@type': 'Question',
        name: 'Is exterior cleaning worth it before selling a Lymm property?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — significantly. Lymm is one of Cheshire\'s most desirable villages with properties regularly achieving top Warrington/Cheshire prices. A comprehensive exterior clean ahead of marketing removes moss, algae, staining and biological growth that would otherwise trigger survey comments or buyer price reductions. For properties on Eagle Brow, Brookfield Road or in the conservation area, exterior cleaning is one of the highest kerb-appeal ROI investments available.' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Exterior Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/exterior-cleaning' },
      { '@type': 'ListItem', position: 3, name: 'Lymm', item: 'https://rrmexternalcleaningspecialist.co.uk/services/exterior-cleaning/lymm' }
    ]
  };

  const services = [
    { name: 'Gutter Cleaning', price: '£70–£180', href: '/services/gutter-cleaning/lymm', desc: 'Cast iron ogee on conservation-area properties. Deep-flow UPVC on exec detached. Lymm Dam woodland leaf-fall specialists. Bridgewater Canal corridor.' },
    { name: 'Roof Cleaning', price: '£250–£650', href: '/services/roof-cleaning/lymm', desc: 'Soft wash only. Welsh slate (Pepper St, Eagle Brow), clay plain tiles (Reddish Lane), concrete interlocking (Heatley/Statham). Dam micro-climate moss.' },
    { name: 'Render Cleaning', price: '£150–£550', href: '/services/render-cleaning/lymm', desc: 'K-Rend (Beechfield/Brookfield exec), monocouche (1990s–2000s private), pebbledash (inter-war). Barn conversion render. Never pressure washed.' },
    { name: 'Pressure Washing', price: '£100–£300', href: '/services/pressure-washing/lymm', desc: 'Block-paved exec driveways. Natural sandstone & Indian stone patios. Limestone & porcelain. pH-neutral — no acid near Lymm Dam drainage.' },
    { name: 'Cladding Cleaning', price: '£120–£350', href: '/services/cladding-cleaning/lymm', desc: 'Oak & timber barn conversions (Warburton/Heatley). Metal composite (exec new-builds). UPVC, glass, cedar & larch. Wood brightener treatment.' },
  ];

  const areas = [
    'Lymm Village & Conservation Area', 'Eagle Brow', 'Pepper Street', 'Brookfield Road',
    'Reddish Lane & Higher Lane', 'Oughtrington', 'Statham', 'Heatley (WA13)',
    'Warburton (WA13)', 'Booth', 'Lymm Dam area', 'Bridgewater Canal corridor',
  ];

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides complete exterior cleaning in Lymm, Cheshire WA13. Services include gutter cleaning, roof soft washing, render cleaning, pressure washing and cladding cleaning. Serving Lymm village conservation area, Eagle Brow, Pepper Street, Market Cross, Brookfield Road, Reddish Lane, Higher Lane, Oughtrington, Statham, Heatley, Warburton and Booth. Lymm Dam and Bridgewater Canal micro-climate specialists. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY. Telephone: 07845 463877.
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
                <Link href="/services/exterior-cleaning" className="text-primary hover:text-accent transition-colors" itemProp="item"><span itemProp="name">Exterior Cleaning</span></Link>
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
                Exterior Cleaning Lymm WA13
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Complete exterior cleaning for Lymm's conservation-area cottages, executive detached, and barn conversions. Gutters, roofs, render, driveways, cladding. 5.0 ★ — 47 verified reviews.
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
                <strong>Exterior cleaning in Lymm starts from £70 for gutters and £250 for roof cleaning.</strong> R.R.M Exterior Cleaning Specialist covers all Lymm WA13 postcodes — conservation area, Eagle Brow, Oughtrington, Heatley, Statham, Warburton and the Bridgewater Canal corridor. Lymm Dam micro-climate specialists. Call 07845 463877 for an itemised quote.
              </p>
            </div>

            <section className="mb-10" aria-labelledby="why-lymm-exterior">
              <h2 id="why-lymm-exterior" className="text-2xl font-bold text-foreground mb-4">The Lymm Exterior Cleaning Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lymm presents a unique exterior cleaning challenge that sets it apart from other Cheshire locations. The village sits in a shallow natural bowl centred on <strong>Lymm Dam</strong>, with the <strong>Bridgewater Canal</strong> adding a second water body along the northern edge. The evaporation from both creates a persistent high-humidity micro-climate that keeps roofs, render and cladding significantly wetter than equivalent properties 2 miles away in open Cheshire farmland. Biological growth — moss, lichen, green algae, black biofilm — establishes and spreads measurably faster as a result.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Layered on top is the diversity of Lymm's property stock: Victorian and Edwardian sandstone cottages in the conservation area requiring heritage-grade care; large 1930s–50s detached with aging UPVC systems; executive modern builds on gated Cheshire developments; and a population of barn conversions in the rural WA13 fringe combining historic stone with new timber and render finishes. Each property type demands specific technique, chemistry and pressure settings.
              </p>
            </section>

            <section className="mb-10" aria-labelledby="services-lymm">
              <h2 id="services-lymm" className="text-2xl font-bold text-foreground mb-6">Exterior Cleaning Services & Prices — Lymm WA13</h2>
              <div className="space-y-4">
                {services.map(s => (
                  <div key={s.name} className="flex flex-col md:flex-row md:items-start gap-3 bg-secondary/30 rounded-lg p-5 border border-secondary">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-foreground">{s.name}</h3>
                        <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{s.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                    <Link href={s.href} className="text-sm text-primary hover:text-accent underline underline-offset-2 whitespace-nowrap transition-colors">View service →</Link>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10" aria-labelledby="areas-lymm">
              <h2 id="areas-lymm" className="text-2xl font-bold text-foreground mb-4">Areas Covered in and Around Lymm WA13</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {areas.map(a => (
                  <div key={a} className="text-sm text-muted-foreground bg-secondary/20 rounded px-3 py-2 border border-secondary/50">{a}</div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">We also cover Knutsford (WA16), Altrincham (WA14/WA15), Warrington (WA1–WA5) and Newton-le-Willows (WA12). Call 07845 463877 to confirm coverage.</p>
            </section>

            <section className="mb-10" aria-labelledby="faq-exterior-lymm" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-exterior-lymm" className="text-2xl font-bold text-foreground mb-6">Exterior Cleaning Lymm — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  { q: 'How much does exterior cleaning cost in Lymm?', a: 'Exterior cleaning prices in Lymm WA13: gutter cleaning £70–£180; roof soft wash £250–£650; render cleaning £150–£550; pressure washing £100–£300; cladding cleaning £120–£350. Full exterior maintenance bundles available at a combined rate. Call 07845 463877 for an itemised quote.' },
                  { q: 'Who covers exterior cleaning in Lymm WA13?', a: 'R.R.M Exterior Cleaning Specialist covers Lymm WA13 and surrounding areas including Heatley, Statham, Warburton, Oughtrington and Booth. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY. Operating six days a week. Call 07845 463877.' },
                  { q: 'Why does exterior cleaning cost more in Lymm than average?', a: 'Lymm properties are typically larger, the Lymm Dam/canal micro-climate increases contamination rates requiring stronger biocide, and conservation-area and barn-conversion properties require specialist techniques. Prices reflect actual surface area and complexity.' },
                  { q: 'How often should I have my Lymm property exterior cleaned?', a: 'Gutters: annually (twice for Dam-adjacent properties). Roof: every 3–5 years — Dam-adjacent every 3 years. Render and cladding: every 2–3 years; 18–24 months within 500m of the Dam or canal. Driveways: every 12–18 months.' },
                  { q: 'Is exterior cleaning worth it before selling a Lymm property?', a: 'Yes — significantly. Lymm is one of Cheshire\'s most desirable villages. A comprehensive exterior clean removes moss, algae and staining that triggers survey comments or buyer price reductions. For Eagle Brow, Brookfield Road or conservation-area properties, exterior cleaning is one of the highest kerb-appeal ROI investments available.' },
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

            <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Exterior Cleaning in Lymm WA13</h2>
              <p className="text-muted-foreground mb-6">Covering Lymm, Heatley, Statham, Warburton, Oughtrington, Booth and all WA13 postcodes. Mon–Sat, same-day quotes available.</p>
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
