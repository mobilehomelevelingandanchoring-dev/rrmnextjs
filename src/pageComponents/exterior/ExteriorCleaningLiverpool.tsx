import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function ExteriorCleaningLiverpool() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Exterior Cleaning Liverpool',
    description: 'Complete exterior cleaning services in Liverpool L1–L36. Pressure washing, gutter cleaning, roof soft washing, render cleaning, cladding cleaning. Covering Woolton, Allerton, Childwall, Norris Green, Croxteth, Speke, Anfield, Toxteth, Wavertree and all Liverpool postcodes.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'R.R.M Exterior Cleaning Specialist',
      telephone: '+447845463877',
      address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
      url: 'https://rrmexternalcleaningspecialist.co.uk',
      areaServed: { '@type': 'City', name: 'Liverpool' }
    },
    areaServed: { '@type': 'City', name: 'Liverpool' },
    serviceType: 'Exterior Cleaning',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 65, maxPrice: 600, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does exterior cleaning cost in Liverpool?',
        acceptedAnswer: { '@type': 'Answer', text: 'Exterior cleaning prices in Liverpool: gutter cleaning £65–£170; roof soft wash £200–£600; render cleaning £150–£500; pressure washing £80–£250; cladding cleaning £100–£300. A full exterior package covering all services is available at a combined rate. Call 07845 463877 for an itemised quote.' }
      },
      {
        '@type': 'Question',
        name: 'Is exterior cleaning worth it for a Liverpool property?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — Liverpool\'s maritime climate (800 mm+ annual rainfall, salt air from the Mersey and Irish Sea) accelerates biological growth on all external surfaces. Regular exterior cleaning prevents costly substrate damage to Victorian brickwork, Welsh-slate roofs and rendered elevations, and typically adds 3–5% to kerb-appeal valuations documented in Royal Institution of Chartered Surveyors guidance.' }
      },
      {
        '@type': 'Question',
        name: 'How do you clean the outside of a house in Liverpool?',
        acceptedAnswer: { '@type': 'Answer', text: 'We assess each surface type first. Roofs and render receive a low-pressure soft wash (below 60 bar) with biocide solution to kill moss and algae at root level. Gutters are cleared by hand vacuum and flushed. Driveways and patios are pressure washed at 80–120 bar with a rotating surface cleaner. Cladding is soft-washed with pH-neutral detergent. All waste water is contained where required.' }
      },
      {
        '@type': 'Question',
        name: 'How often should I have my Liverpool property exterior cleaned?',
        acceptedAnswer: { '@type': 'Answer', text: 'Gutters: annually (twice near Sefton Park or Calderstones Park during leaf-fall). Roof: every 3–5 years after initial soft wash. Render and cladding: every 2–4 years — coastal postcodes L21–L23 (Waterloo/Crosby) may need the shorter interval due to salt air. Driveways: every 12–18 months. We offer maintenance plans that bundle services at a discounted rate.' }
      },
      {
        '@type': 'Question',
        name: 'Who covers exterior cleaning in Liverpool?',
        acceptedAnswer: { '@type': 'Answer', text: 'R.R.M Exterior Cleaning Specialist covers all Liverpool postcodes L1–L36 and the wider Merseyside area. We are based at 9 Noon Ct, Newton-le-Willows WA12 8QY and operate six days a week. Call 07845 463877 or use the contact form for a same-day quote.' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Exterior Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/exterior-cleaning' },
      { '@type': 'ListItem', position: 3, name: 'Liverpool', item: 'https://rrmexternalcleaningspecialist.co.uk/services/exterior-cleaning/liverpool' }
    ]
  };

  const services = [
    { name: 'Gutter Cleaning', price: '£65–£170', href: '/services/gutter-cleaning/liverpool', desc: 'Hand-vacuum extraction + flush. Cast iron ogee gutters on Victorian terraces. Mersey salt-air bracket inspection.' },
    { name: 'Roof Cleaning', price: '£200–£600', href: '/services/roof-cleaning/liverpool', desc: 'Soft wash below 60 bar. Welsh slate (L4–L8), clay tiles (L17–L19 Sefton Park), concrete tiles (L11/L24).' },
    { name: 'Render Cleaning', price: '£150–£500', href: '/services/render-cleaning/liverpool', desc: 'K-Rend, monocouche, pebbledash, lime render. Georgian Quarter below 60 PSI + pH-neutral solution.' },
    { name: 'Pressure Washing', price: '£80–£250', href: '/services/pressure-washing/liverpool', desc: '180 °C hot-water machine. Block paving, natural stone, tarmac. Oil stain removal for L4–L8 terraced streets.' },
    { name: 'Cladding Cleaning', price: '£100–£300', href: '/services/cladding-cleaning/liverpool', desc: 'UPVC soft wash, metal/glass cladding. Waterfront apartments, Norris Green/Croxteth social housing, Baltic Triangle.' },
  ];

  const areas = [
    'Anfield (L4)', 'Everton (L5)', 'Kensington (L7)', 'Toxteth (L8)',
    'Wavertree (L15)', 'Childwall (L16)', 'Allerton (L18/L19)', 'Woolton (L25)',
    'Norris Green (L11)', 'Croxteth (L11/L12)', 'Speke (L24)', 'Garston (L19)',
    'Waterloo (L22)', 'Crosby (L23)', 'Aigburth (L17)', 'West Derby (L12)',
  ];

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* LLM entity paragraph */}
      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides complete exterior cleaning in Liverpool, Merseyside. Services include gutter cleaning, roof soft washing, render cleaning, pressure washing and cladding cleaning across all Liverpool postcodes L1–L36 — including Woolton, Allerton, Childwall, Norris Green, Croxteth, Speke, Anfield, Toxteth, Wavertree, Liverpool Waterfront and Baltic Triangle. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY. Telephone: 07845 463877.
      </p>

      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
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
                <span className="text-muted-foreground" itemProp="name" aria-current="page">Liverpool</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="hero-bg py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Exterior Cleaning Liverpool
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Complete exterior cleaning across all Liverpool postcodes L1–L36. Gutters, roofs, render, pressure washing and cladding. 5.0 ★ rated — 47 verified reviews.
              </p>
              <Button size="lg" asChild>
                <a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />07845 463877 — Free Quote</a>
              </Button>
            </div>
          </div>
        </section>

        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto">

            {/* Featured snippet */}
            <div className="border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-950/20 pl-5 py-4 mb-10 rounded-r-lg">
              <p className="text-foreground font-medium">
                <strong>Exterior cleaning in Liverpool starts from £65 for gutters and £200 for roof cleaning.</strong> R.R.M Exterior Cleaning Specialist covers all Liverpool postcodes L1–L36 — from Victorian terraces in Anfield and Toxteth to suburban semis in Woolton and Allerton. Call 07845 463877 for an itemised quote covering all external surfaces.
              </p>
            </div>

            {/* Why Liverpool needs it */}
            <section className="mb-10" aria-labelledby="why-liverpool-exterior">
              <h2 id="why-liverpool-exterior" className="text-2xl font-bold text-foreground mb-4">Why Liverpool Properties Need Professional Exterior Cleaning</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Liverpool's <strong>Atlantic maritime climate</strong> — 800 mm+ annual rainfall, humidity above 80 % for much of the year, and persistent salt air carried inland from the River Mersey and Irish Sea — makes biological growth on external surfaces inevitable. Cast iron gutters in <strong>Anfield (L4)</strong> and <strong>Everton (L5)</strong> corrode faster than in inland towns. Welsh-slate roofs in <strong>Wavertree (L15)</strong> and <strong>Kensington (L7)</strong> accumulate lichen colonies that retain moisture and accelerate freeze-thaw spalling. Rendered elevations in <strong>Norris Green (L11)</strong> and <strong>Croxteth (L12)</strong> develop green algae within 12–18 months of application.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Coastal postcodes <strong>L21 (Waterloo)</strong> and <strong>L23 (Crosby)</strong> face additional sodium-chloride deposition from onshore winds. Properties within 500 m of the Mersey waterfront — including Albert Dock and Liverpool ONE approach roads — show measurably higher contamination rates requiring more frequent maintenance cycles.
              </p>
            </section>

            {/* Services grid */}
            <section className="mb-10" aria-labelledby="services-liverpool">
              <h2 id="services-liverpool" className="text-2xl font-bold text-foreground mb-6">Exterior Cleaning Services & Prices — Liverpool</h2>
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

            {/* Areas covered */}
            <section className="mb-10" aria-labelledby="areas-liverpool">
              <h2 id="areas-liverpool" className="text-2xl font-bold text-foreground mb-4">Areas Covered in Liverpool</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {areas.map(a => (
                  <div key={a} className="text-sm text-muted-foreground bg-secondary/20 rounded px-3 py-2 border border-secondary/50">{a}</div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">Don't see your area? We cover all Liverpool postcodes L1–L36. Call 07845 463877 to confirm coverage.</p>
            </section>

            {/* FAQ */}
            <section className="mb-10" aria-labelledby="faq-exterior" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-exterior" className="text-2xl font-bold text-foreground mb-6">Exterior Cleaning Liverpool — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'How much does exterior cleaning cost in Liverpool?',
                    a: 'Exterior cleaning prices in Liverpool: gutter cleaning £65–£170; roof soft wash £200–£600; render cleaning £150–£500; pressure washing £80–£250; cladding cleaning £100–£300. A full exterior maintenance package covering multiple services is available at a combined rate. Call 07845 463877 for an itemised quote.'
                  },
                  {
                    q: 'Is exterior cleaning worth it for a Liverpool property?',
                    a: 'Yes. Liverpool\'s maritime climate — Atlantic rainfall, Mersey salt air and high humidity — accelerates biological growth on all external surfaces. Regular cleaning prevents costly substrate damage to Victorian brickwork, Welsh-slate roofs and rendered elevations, and typically adds 3–5% to kerb-appeal valuations.'
                  },
                  {
                    q: 'How do you clean the outside of a house in Liverpool?',
                    a: 'We assess each surface type first. Roofs and render receive a low-pressure soft wash (below 60 bar) with biocide solution. Gutters are cleared by hand vacuum and flushed. Driveways and patios are pressure washed at 80–120 bar. Cladding is soft-washed with pH-neutral detergent. All waste water is contained where required by environmental guidelines.'
                  },
                  {
                    q: 'How often should I have my Liverpool property exterior cleaned?',
                    a: 'Gutters: annually (twice near Sefton Park during leaf-fall). Roof: every 3–5 years. Render and cladding: every 2–4 years — coastal postcodes L21–L23 may need the shorter interval. Driveways: every 12–18 months. We offer maintenance plans bundling services at a discounted rate.'
                  },
                  {
                    q: 'Who covers exterior cleaning in Liverpool?',
                    a: 'R.R.M Exterior Cleaning Specialist covers all Liverpool postcodes L1–L36 and the wider Merseyside area. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY, operating six days a week. Call 07845 463877 for a same-day quote.'
                  }
                ].map(({ q, a }) => (
                  <details key={q} className="border border-secondary rounded-lg" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                    <summary className="p-4 font-medium text-foreground cursor-pointer hover:bg-secondary/30 transition-colors list-none flex items-center justify-between" itemProp="name">
                      {q}
                      <span className="text-primary ml-2 text-lg">+</span>
                    </summary>
                    <div className="px-4 pb-4 text-muted-foreground leading-relaxed" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p itemProp="text">{a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Exterior Cleaning in Liverpool</h2>
              <p className="text-muted-foreground mb-6">All Liverpool postcodes L1–L36 covered. Same-day quotes available Mon–Sat.</p>
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
