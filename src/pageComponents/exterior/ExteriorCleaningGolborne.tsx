import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function ExteriorCleaningGolborne() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Exterior Cleaning Golborne',
    description: 'Complete exterior cleaning in Golborne WA3 — gutter cleaning, roof soft washing, render cleaning, pressure washing and cladding cleaning. Serving Golborne, Lowton, Kenyon, Pocket Nook, Stone Cross and all WA3 postcodes. East Lancashire Road A580 diesel specialists.',
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
    serviceType: 'Exterior Cleaning',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 60, maxPrice: 550, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does exterior cleaning cost in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Exterior cleaning prices in Golborne (WA3): gutter cleaning £60–£160; roof soft wash £200–£550; render cleaning £120–£450; pressure washing £80–£200; cladding cleaning £100–£280. A full exterior maintenance bundle covering all services is available at a combined rate. Call 07845 463877 for an itemised quote.' }
      },
      {
        '@type': 'Question',
        name: 'Who covers exterior cleaning in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'R.R.M Exterior Cleaning Specialist covers Golborne (WA3) and surrounding areas including Lowton, Kenyon, Pocket Nook, Stone Cross and Abram. We are based at 9 Noon Ct, Newton-le-Willows WA12 8QY — approximately 3 miles from Golborne town centre — and operate six days a week. Call 07845 463877 for a same-day quote.' }
      },
      {
        '@type': 'Question',
        name: 'How do you clean the outside of a house in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'We assess each surface type first. Roofs and render receive a low-pressure soft wash (below 60 bar) with biocide solution to kill moss and algae at root level. Gutters are cleared by hand vacuum and flushed. Driveways and patios are pressure washed at 80–120 bar with a rotating surface cleaner. Cladding is soft-washed with pH-neutral detergent. Waste water is contained where required.' }
      },
      {
        '@type': 'Question',
        name: 'How often should I have my Golborne property exterior cleaned?',
        acceptedAnswer: { '@type': 'Answer', text: 'Gutters: annually (twice if near mature trees on Stone Cross Lane or Harvey Lane). Roof: every 3–5 years. Render and cladding: every 2–3 years — properties near the A580 East Lancashire Road may need the shorter interval due to diesel particulate contamination. Driveways: every 12–18 months. We offer maintenance plans bundling all services at a discounted rate.' }
      },
      {
        '@type': 'Question',
        name: 'Is exterior cleaning worth it for a Golborne property?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Golborne\'s Lancashire-plain climate — 700 mm+ annual rainfall, high humidity and A580 diesel particulates — accelerates biological growth on all external surfaces faster than in many inland locations. Regular cleaning prevents costly substrate damage and maintains kerb appeal for Golborne\'s popular 1930s–50s semi-detached stock in Lowton and the Victoria Park area.' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Exterior Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/exterior-cleaning' },
      { '@type': 'ListItem', position: 3, name: 'Golborne', item: 'https://rrmexternalcleaningspecialist.co.uk/services/exterior-cleaning/golborne' }
    ]
  };

  const services = [
    { name: 'Gutter Cleaning', price: '£60–£160', href: '/services/gutter-cleaning/golborne', desc: 'Hand-vacuum extraction + flush. Cast iron ogee gutters on Stone Cross Lane/Harvey Lane terraces. UPVC bracket realignment.' },
    { name: 'Roof Cleaning', price: '£200–£550', href: '/services/roof-cleaning/golborne', desc: 'Soft wash only. Welsh slate (pre-1930 terraces), clay plain tiles (1930s–50s semis), concrete interlocking (1970s–90s estates).' },
    { name: 'Render Cleaning', price: '£120–£450', href: '/services/render-cleaning/golborne', desc: 'K-Rend, monocouche, sand-cement, pebbledash. Never high-pressure washed. A580 diesel particulate removal.' },
    { name: 'Pressure Washing', price: '£80–£200', href: '/services/pressure-washing/golborne', desc: '180 °C hot-water machine. Block paving, tarmac, concrete. Agricultural mud removal for Kenyon/Pocket Nook properties.' },
    { name: 'Cladding Cleaning', price: '£100–£280', href: '/services/cladding-cleaning/golborne', desc: 'UPVC soft wash, metal composite, timber-effect. Right-to-buy council renovations and commercial A572/A580 premises.' },
  ];

  const areas = [
    'Golborne Town Centre (WA3)', 'Stone Cross', 'Harvey Lane area', 'Bridge Street',
    'Nook Lane', 'Legh Street estate', 'Lowton (WA3)', 'Kenyon',
    'Pocket Nook', 'Victoria Park area', 'Golborne Road', 'Abram (WA2)',
  ];

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides complete exterior cleaning in Golborne, Wigan WA3. Services include gutter cleaning, roof soft washing, render cleaning, pressure washing and cladding cleaning across Golborne town centre, Lowton, Kenyon, Pocket Nook, Stone Cross, Harvey Lane, Bridge Street, Nook Lane and Legh Street estate. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY — 3 miles from Golborne. Telephone: 07845 463877.
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
                Exterior Cleaning Golborne WA3
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Complete exterior cleaning across Golborne, Lowton and all WA3 postcodes. Gutters, roofs, render, pressure washing and cladding. Based 3 miles away in Newton-le-Willows. 5.0 ★ — 47 reviews.
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
                <strong>Exterior cleaning in Golborne starts from £60 for gutters and £200 for roof cleaning.</strong> R.R.M Exterior Cleaning Specialist is based at Newton-le-Willows WA12 — just 3 miles from Golborne town centre — and covers all WA3 postcodes including Lowton, Kenyon, Stone Cross and Pocket Nook. Call 07845 463877 for a same-day itemised quote.
              </p>
            </div>

            <section className="mb-10" aria-labelledby="why-golborne-exterior">
              <h2 id="why-golborne-exterior" className="text-2xl font-bold text-foreground mb-4">Why Golborne Properties Need Regular Exterior Cleaning</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Golborne's position on the Lancashire plain between Leigh, Newton-le-Willows and Ashton-in-Makerfield creates a distinctly challenging environment for exterior surfaces. Annual rainfall of 700 mm+, carried on prevailing westerly winds, keeps roof tiles, rendered walls and gutter channels perpetually damp between dry spells. This sustained moisture is the primary driver of moss, algae and lichen colonisation on virtually all building types.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A secondary and often-overlooked factor is the <strong>East Lancashire Road (A580)</strong>, which runs immediately south of Golborne town centre. One of the UK's busiest inter-urban A-roads, the A580 generates a continuous plume of diesel NOx and particulate matter that settles on north- and west-facing elevations, gutters and cladding. This hydrocarbon film acts as a nutrient substrate for algae and biofilm, measurably accelerating re-contamination rates compared to properties further from A-road corridors.
              </p>
            </section>

            <section className="mb-10" aria-labelledby="services-golborne">
              <h2 id="services-golborne" className="text-2xl font-bold text-foreground mb-6">Exterior Cleaning Services & Prices — Golborne WA3</h2>
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

            <section className="mb-10" aria-labelledby="areas-golborne">
              <h2 id="areas-golborne" className="text-2xl font-bold text-foreground mb-4">Areas Covered in and Around Golborne</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {areas.map(a => (
                  <div key={a} className="text-sm text-muted-foreground bg-secondary/20 rounded px-3 py-2 border border-secondary/50">{a}</div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">We also cover Newton-le-Willows (WA12), Leigh (WN7), Ashton-in-Makerfield (WN4) and surrounding areas. Call 07845 463877 to confirm coverage.</p>
            </section>

            <section className="mb-10" aria-labelledby="faq-exterior-golborne" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-exterior-golborne" className="text-2xl font-bold text-foreground mb-6">Exterior Cleaning Golborne — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  { q: 'How much does exterior cleaning cost in Golborne?', a: 'Exterior cleaning prices in Golborne (WA3): gutter cleaning £60–£160; roof soft wash £200–£550; render cleaning £120–£450; pressure washing £80–£200; cladding cleaning £100–£280. A full exterior maintenance bundle is available at a combined rate. Call 07845 463877 for an itemised quote.' },
                  { q: 'Who covers exterior cleaning in Golborne?', a: 'R.R.M Exterior Cleaning Specialist covers Golborne WA3 and surrounding areas including Lowton, Kenyon, Pocket Nook and Stone Cross. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY — approximately 3 miles from Golborne town centre. Operating six days a week. Call 07845 463877.' },
                  { q: 'How do you clean the outside of a house in Golborne?', a: 'We assess each surface type first. Roofs and render receive a low-pressure soft wash with biocide. Gutters are hand-vacuumed and flushed. Driveways are pressure washed at 80–120 bar with a rotating surface cleaner. Cladding is soft-washed with pH-neutral detergent. Waste water is contained where required.' },
                  { q: 'How often should I have my Golborne property exterior cleaned?', a: 'Gutters: annually (twice near mature trees on Stone Cross Lane or Harvey Lane). Roof: every 3–5 years. Render and cladding: every 2–3 years — A580-adjacent properties may need the shorter interval. Driveways: every 12–18 months. We offer maintenance plans bundling all services at a discount.' },
                  { q: 'Is exterior cleaning worth it for a Golborne property?', a: 'Yes. Golborne\'s Lancashire climate and A580 diesel particulates accelerate biological growth on all surfaces faster than in many inland locations. Regular cleaning prevents substrate damage and maintains kerb appeal for Golborne\'s 1930s–50s semi-detached stock in Lowton and the Victoria Park area.' },
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
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Exterior Cleaning in Golborne WA3</h2>
              <p className="text-muted-foreground mb-6">Covering all WA3 postcodes: Golborne, Lowton, Kenyon, Stone Cross, Pocket Nook. Same-day quotes Mon–Sat.</p>
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
