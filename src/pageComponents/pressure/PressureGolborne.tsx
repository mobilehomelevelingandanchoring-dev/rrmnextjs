import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function PressureGolborne() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pressure Washing Golborne',
    description: 'Professional pressure washing in Golborne WA3 — driveways, block paving, patios, tarmac and commercial hard surfaces. Hot-water machine for oil and diesel stain removal. Serving Golborne, Lowton, Kenyon, Pocket Nook and all WA3 postcodes.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'R.R.M Exterior Cleaning Specialist',
      telephone: '+447845463877',
      address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
      url: 'https://rrmexternalcleaningspecialist.co.uk',
      areaServed: { '@type': 'City', name: 'Golborne' }
    },
    areaServed: { '@type': 'City', name: 'Golborne' },
    serviceType: 'Pressure Washing',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 80, maxPrice: 200, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does pressure washing cost in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pressure washing in Golborne (WA3) costs £80–£200. A standard driveway runs £80–£120; a patio or rear courtyard £90–£140; larger block-paved areas on Golborne Road or Lowton developments £140–£200. Commercial surfaces and industrial yards are quoted on site. Price includes equipment setup, wash, and a final rinse.' }
      },
      {
        '@type': 'Question',
        name: 'How often should I pressure wash my driveway in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Every 12–18 months for most Golborne driveways. The Lancashire plain\'s 700 mm+ annual rainfall and prevailing westerly winds mean algae and moss establish on damp surfaces quickly. Properties near agricultural land south of the A580 (Kenyon, Pocket Nook) may need annual cleaning due to soil and organic matter tracking from surrounding farmland.' }
      },
      {
        '@type': 'Question',
        name: 'Is pressure washing safe for block paving?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — block paving can be safely cleaned at 80–120 bar with a rotating surface cleaner. We use a fan nozzle rather than a pencil jet to avoid dislodging joint-pointing compound. After cleaning on Golborne Road and Lowton new-build estates, kiln-dried sand is re-broadcast into block joint lines at no extra charge to restore structural stability.' }
      },
      {
        '@type': 'Question',
        name: 'Can you remove oil stains from driveways in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our 180 °C hot-water pressure machine combined with a citrus-based degreaser pre-treatment removes motor-oil and diesel staining from both tarmac and concrete surfaces. Oil contamination from parked vehicles is common on Golborne\'s terraced streets and cul-de-sac driveways. Older multi-year staining may require a second pass at a reduced revisit rate.' }
      },
      {
        '@type': 'Question',
        name: 'Can pressure washing remove mud from farm track runoff in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Golborne borders agricultural land and properties in Kenyon, Pocket Nook and parts of Lowton see seasonal mud contamination tracked from surrounding farm tracks and field gateways. Our commercial-grade rotary surface cleaner removes compacted clay-heavy mud effectively from tarmac, block paving and concrete at 100–140 bar with hot-water assist.' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Pressure Washing', item: 'https://rrmexternalcleaningspecialist.co.uk/services/pressure-washing' },
      { '@type': 'ListItem', position: 3, name: 'Golborne', item: 'https://rrmexternalcleaningspecialist.co.uk/services/pressure-washing/golborne' }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides professional pressure washing in Golborne, Wigan WA3. Driveways, block paving, patios, tarmac, commercial hard surfaces and agricultural mud removal. Serving Golborne town centre, Lowton, Kenyon, Pocket Nook and all WA3 postcodes. Hot-water 180 °C machine for oil and diesel stain removal. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY — 3 miles from Golborne. Telephone: 07845 463877.
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
                Pressure Washing Golborne WA3
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Professional driveway, patio and hard surface cleaning across Golborne, Lowton and all WA3 postcodes. Hot-water machine for oil and agricultural mud removal. 5.0 ★ — 47 verified reviews.
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
                <strong>Pressure washing in Golborne costs £80–£200.</strong> Standard driveway £80–£120; patio or courtyard £90–£140; larger block-paved areas £140–£200. Hot-water 180 °C machine for oil and farm-track mud stain removal. R.R.M based 3 miles away in Newton-le-Willows WA12. Call 07845 463877.
              </p>
            </div>

            <section className="mb-10" aria-labelledby="golborne-pressure">
              <h2 id="golborne-pressure" className="text-2xl font-bold text-foreground mb-4">Why Golborne Driveways Need Pressure Washing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Golborne's position on the Lancashire plain means 700 mm+ of annual rainfall keeps hard surfaces perpetually damp, accelerating moss and green algae growth on driveways, patios and paths. Block-paved driveways on <strong>Golborne Road</strong> and newer <strong>Lowton (WA3)</strong> estates see rapid inter-block algae establishment in wet spells. Tarmac driveways on 1960s–80s housing off <strong>Legh Street</strong> and <strong>Bridge Street</strong> develop surface cracking that traps organic matter and provides purchase for moss colonisation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Properties in <strong>Kenyon</strong> and <strong>Pocket Nook</strong> — on Golborne's rural southern edge — face additional contamination from agricultural mud tracking off surrounding farm tracks, particularly in autumn and spring. Our commercial-grade hot-water pressure washer handles compacted clay-heavy mud that cold-water equipment cannot shift.
              </p>
            </section>

            <section className="mb-10" aria-labelledby="surfaces-golborne">
              <h2 id="surfaces-golborne" className="text-2xl font-bold text-foreground mb-6">Surfaces We Clean in Golborne</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Block Paving', desc: 'Golborne Road & Lowton new-build estates. 80–120 bar rotating surface cleaner + kiln-dried sand joint reinstatement.' },
                  { title: 'Tarmac Driveways', desc: '1960s–80s housing: Legh Street, Bridge Street. 100–120 bar + degreaser pre-treatment for oil contamination.' },
                  { title: 'Concrete & Flags', desc: 'Victorian terraced rear-yards and back-street footpaths — fan nozzle to protect mortar joints.' },
                  { title: 'Natural Stone Patios', desc: 'Indian sandstone, limestone and slate — pH-neutral detergent, 60–80 bar. No acid wash on limestone.' },
                  { title: 'Decking', desc: '40–60 bar with wood brightener treatment. Removes algae without raising grain fibres.' },
                  { title: 'Farm Track & Agricultural Mud', desc: 'Kenyon, Pocket Nook — 180 °C hot water + clay-breaking detergent for compacted soil contamination.' },
                ].map(s => (
                  <div key={s.title} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10" aria-labelledby="faq-pressure-golborne" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-pressure-golborne" className="text-2xl font-bold text-foreground mb-6">Pressure Washing Golborne — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  { q: 'How much does pressure washing cost in Golborne?', a: 'Pressure washing in Golborne (WA3) costs £80–£200. A standard driveway runs £80–£120; a patio or courtyard £90–£140; larger block-paved areas £140–£200. Commercial surfaces and industrial yards are quoted on site.' },
                  { q: 'How often should I pressure wash my driveway in Golborne?', a: 'Every 12–18 months for most Golborne driveways. Lancashire plain rainfall and westerly winds mean algae establish quickly. Properties near agricultural land in Kenyon and Pocket Nook may need annual cleaning due to soil and organic matter from surrounding farmland.' },
                  { q: 'Is pressure washing safe for block paving?', a: 'Yes — at 80–120 bar with a rotating surface cleaner using a fan nozzle rather than a pencil jet to avoid dislodging joint-pointing. After cleaning on Golborne Road and Lowton estates, kiln-dried sand is re-broadcast into joint lines at no extra charge.' },
                  { q: 'Can you remove oil stains from driveways in Golborne?', a: 'Yes. Our 180 °C hot-water pressure machine with a citrus-based degreaser pre-treatment removes motor-oil and diesel staining from tarmac and concrete. Older multi-year staining may require a second pass at a reduced revisit rate.' },
                  { q: 'Can pressure washing remove mud from farm track runoff in Golborne?', a: 'Yes. Properties in Kenyon, Pocket Nook and parts of Lowton see seasonal mud contamination from surrounding farm tracks. Our commercial rotary surface cleaner removes compacted clay-heavy mud at 100–140 bar with hot-water assist from tarmac, block paving and concrete.' },
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

            <section className="mb-10" aria-labelledby="related-golborne-pressure">
              <h2 id="related-golborne-pressure" className="text-xl font-bold text-foreground mb-4">Other Services in Golborne</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Gutter Cleaning Golborne', href: '/services/gutter-cleaning/golborne' },
                  { label: 'Roof Cleaning Golborne', href: '/services/roof-cleaning/golborne' },
                  { label: 'Render Cleaning Golborne', href: '/services/render-cleaning/golborne' },
                  { label: 'Cladding Cleaning Golborne', href: '/services/cladding-cleaning/golborne' },
                  { label: 'Exterior Cleaning Golborne', href: '/services/exterior-cleaning/golborne' },
                  { label: 'Golborne Location Hub', href: '/locations/golborne' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="text-sm text-primary hover:text-accent underline underline-offset-2 transition-colors">{l.label}</Link>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Pressure Washing in Golborne WA3</h2>
              <p className="text-muted-foreground mb-6">Covering Golborne, Lowton, Kenyon, Pocket Nook and all WA3 postcodes. 3 miles from Newton-le-Willows. Mon–Sat.</p>
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
