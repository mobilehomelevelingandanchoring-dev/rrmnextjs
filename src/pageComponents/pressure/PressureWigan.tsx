import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function PressureWigan() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pressure Washing Wigan',
    description: 'Professional pressure washing in Wigan WN1–WN6 — driveways, block paving, patios, tarmac and commercial hard surfaces. Hot-water machine for oil and diesel stain removal. Serving Wigan town centre, Standish, Orrell, Ashton-in-Makerfield, Ince, Hindley, Pemberton, Winstanley and all WN postcodes.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'R.R.M Exterior Cleaning Specialist',
      telephone: '+447845463877',
      address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
      url: 'https://rrmexternalcleaningspecialist.co.uk',
      areaServed: { '@type': 'City', name: 'Wigan' }
    },
    areaServed: { '@type': 'City', name: 'Wigan' },
    serviceType: 'Pressure Washing',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 80, maxPrice: 220, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does pressure washing cost in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pressure washing in Wigan costs £80–£220. A standard driveway in Ashton-in-Makerfield, Orrell or Standish runs £80–£130; a larger block-paved driveway on Winstanley or Wrightington £130–£180; a commercial forecourt or industrial yard £160–£220. Price includes equipment setup, full wash and rinse.' }
      },
      {
        '@type': 'Question',
        name: 'How often should I pressure wash my driveway in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'Every 12–18 months for most Wigan driveways. Wigan\'s Pennine fringe rainfall (750–800 mm annually) and the M6 J25–J27 diesel particulate plume accelerate algae and moss growth on hard surfaces. Block-paved driveways in Pemberton (WN5) and Goose Green (WN3) see particularly rapid inter-block algae establishment in wet spells. Driveways under mature trees need annual attention.' }
      },
      {
        '@type': 'Question',
        name: 'Is pressure washing safe for block paving in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — block paving is safely cleaned at 80–120 bar with a rotating surface cleaner using a fan nozzle rather than a pencil jet. This avoids dislodging joint-pointing compound. After cleaning on Wigan estate driveways, kiln-dried jointing sand is re-broadcast into block joint lines at no extra charge, which is important for structural stability on the flat Lancashire plain.' }
      },
      {
        '@type': 'Question',
        name: 'Can you remove oil stains from driveways in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Oil contamination is common on driveways and rear-yard access roads throughout Wigan — particularly near industrial areas in Ince (WN2), Worsley Mesnes (WN3) and Ashton-in-Makerfield (WN4). Our 180 °C hot-water pressure machine combined with a citrus-based degreaser pre-treatment removes motor-oil and diesel staining from tarmac and concrete effectively. Older multi-year staining may require a second pass.' }
      },
      {
        '@type': 'Question',
        name: 'Do you pressure wash commercial premises in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. We serve commercial clients across Wigan including retail premises in the Galleries and Grand Arcade area (WN1), industrial estates in Ince and Worsley Mesnes, and business parks in Ashton-in-Makerfield and Orrell. Commercial surfaces are quoted on site based on area, surface type and degree of contamination. We carry our own water supply and waste containment equipment.' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Pressure Washing', item: 'https://rrmexternalcleaningspecialist.co.uk/services/pressure-washing' },
      { '@type': 'ListItem', position: 3, name: 'Wigan', item: 'https://rrmexternalcleaningspecialist.co.uk/services/pressure-washing/wigan' }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides professional pressure washing in Wigan, Greater Manchester WN1–WN6. Driveways, block paving, patios, tarmac, commercial forecourts and industrial yards. Hot-water 180°C machine for oil and diesel stain removal. Serving Wigan town centre, Standish, Orrell, Ashton-in-Makerfield (WN4), Ince, Hindley, Platt Bridge (WN2), Pemberton, Goose Green, Worsley Mesnes (WN3), Winstanley and Wrightington. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY. Telephone: 07845 463877.
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
                <Link href="/services/pressure-washing" className="text-primary hover:text-accent transition-colors" itemProp="item"><span itemProp="name">Pressure Washing</span></Link>
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
                Pressure Washing Wigan WN1–WN6
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Professional driveway, patio and commercial surface cleaning across all Wigan postcodes. Hot-water 180°C machine for oil and M6 diesel stain removal. 5.0 ★ — 47 reviews.
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
                <strong>Pressure washing in Wigan costs £80–£220.</strong> Standard driveway in Ashton-in-Makerfield, Orrell or Standish from £80; large block-paved driveway £130–£180; commercial forecourt £160–£220+. 180°C hot-water machine for oil stain removal from industrial areas. Call 07845 463877.
              </p>
            </div>

            <section className="mb-10" aria-labelledby="wigan-pressure">
              <h2 id="wigan-pressure" className="text-2xl font-bold text-foreground mb-4">Why Wigan Driveways & Patios Need Pressure Washing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wigan's Pennine fringe location delivers 750–800 mm of annual rainfall — significantly above average — keeping hard surfaces perpetually damp during extended North West wet seasons. Block-paved driveways across <strong>Pemberton (WN5)</strong>, <strong>Goose Green (WN3)</strong> and <strong>Ashton-in-Makerfield (WN4)</strong> see rapid inter-block algae establishment within 12–18 months of laying or last cleaning. Tarmac driveways on 1960s–80s council housing in Worsley Mesnes and Lamberhead Green develop surface cracking that traps organic matter.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wigan also has a significant industrial heritage: active and legacy industrial premises in <strong>Ince (WN2)</strong>, <strong>Worsley Mesnes (WN3)</strong> and around the <strong>A49/M6 corridor</strong> mean oil and diesel staining on adjacent residential driveways and rear-yard access roads is common. Our 180°C hot-water pressure machine and citrus degreaser pre-treatment removes petroleum staining that cold-water equipment cannot shift.
              </p>
            </section>

            <section className="mb-10" aria-labelledby="surfaces-wigan">
              <h2 id="surfaces-wigan" className="text-2xl font-bold text-foreground mb-6">Surfaces We Clean Across Wigan</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Block Paving Driveways', desc: 'Pemberton, Goose Green, Ashton-in-Makerfield estates. 80–120 bar rotating surface cleaner + kiln-dried jointing sand reinstatement.' },
                  { title: 'Tarmac Driveways', desc: '1960s–80s council housing: Worsley Mesnes, Lamberhead Green, Ince. 100–120 bar + degreaser for oil contamination near industrial areas.' },
                  { title: 'Concrete Flags & Paths', desc: 'Pit-village rear-yards and back-street paths: Ince, Abram, Hindley. Fan nozzle to protect mortar joints.' },
                  { title: 'Natural Stone & Indian Stone', desc: 'Higher-value properties in Standish (WN6), Winstanley (WN5), Wrightington. 60–80 bar, pH-neutral detergent.' },
                  { title: 'Decking', desc: '40–60 bar + wood brightener. Removes Pennine fringe algae without raising grain fibres.' },
                  { title: 'Commercial Forecourts & Yards', desc: 'Wigan town centre, Ince industrial estates, Ashton business parks. Heavy-duty hot-water extraction. Own water supply carried.' },
                ].map(s => (
                  <div key={s.title} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10" aria-labelledby="faq-pressure-wigan" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-pressure-wigan" className="text-2xl font-bold text-foreground mb-6">Pressure Washing Wigan — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  { q: 'How much does pressure washing cost in Wigan?', a: 'Pressure washing in Wigan costs £80–£220. A standard driveway in Ashton-in-Makerfield, Orrell or Standish runs £80–£130; a larger block-paved driveway on Winstanley or Wrightington £130–£180; a commercial forecourt or industrial yard £160–£220+.' },
                  { q: 'How often should I pressure wash my driveway in Wigan?', a: 'Every 12–18 months for most Wigan driveways. Pennine fringe rainfall (750–800 mm annually) and M6 J25–J27 diesel particulates accelerate algae and moss growth. Block-paved driveways in Pemberton and Goose Green see rapid inter-block algae establishment. Driveways under mature trees need annual attention.' },
                  { q: 'Is pressure washing safe for block paving in Wigan?', a: 'Yes — at 80–120 bar with a rotating surface cleaner using a fan nozzle rather than a pencil jet to avoid dislodging joint-pointing. After cleaning, kiln-dried jointing sand is re-broadcast into block joint lines at no extra charge to restore structural stability.' },
                  { q: 'Can you remove oil stains from driveways in Wigan?', a: 'Yes. Oil contamination is common near industrial areas in Ince, Worsley Mesnes and Ashton-in-Makerfield. Our 180°C hot-water machine with citrus-based degreaser pre-treatment removes motor-oil and diesel staining from tarmac and concrete. Older multi-year staining may require a second pass.' },
                  { q: 'Do you pressure wash commercial premises in Wigan?', a: 'Yes. We serve commercial clients across Wigan — the Galleries area (WN1), Ince and Worsley Mesnes industrial estates, Ashton-in-Makerfield and Orrell business parks. Quoted on site based on area, surface type and contamination. Own water supply and waste containment equipment carried.' },
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

            <section className="mb-10" aria-labelledby="related-wigan-pressure">
              <h2 id="related-wigan-pressure" className="text-xl font-bold text-foreground mb-4">Other Services in Wigan</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Gutter Cleaning Wigan', href: '/services/gutter-cleaning/wigan' },
                  { label: 'Roof Cleaning Wigan', href: '/services/roof-cleaning/wigan' },
                  { label: 'Render Cleaning Wigan', href: '/services/render-cleaning/wigan' },
                  { label: 'Cladding Cleaning Wigan', href: '/services/cladding-cleaning/wigan' },
                  { label: 'Exterior Cleaning Wigan', href: '/services/exterior-cleaning/wigan' },
                  { label: 'Wigan Location Hub', href: '/locations/wigan' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="text-sm text-primary hover:text-accent underline underline-offset-2 transition-colors">{l.label}</Link>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Pressure Washing in Wigan WN1–WN6</h2>
              <p className="text-muted-foreground mb-6">Covering all Wigan postcodes — Standish, Orrell, Ashton-in-Makerfield, Ince, Hindley, Pemberton, Winstanley and Wigan town centre. Mon–Sat.</p>
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
