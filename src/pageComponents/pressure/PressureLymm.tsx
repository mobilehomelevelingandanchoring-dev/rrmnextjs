import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function PressureLymm() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pressure Washing Lymm',
    description: 'Professional pressure washing in Lymm WA13 — long block-paved driveways on executive detached, natural sandstone and Indian stone patios, limestone and porcelain terraces, Bridgewater Canal-side paths. Agricultural mud removal for Warburton and Heatley rural properties. Serving Lymm, Heatley, Statham, Oughtrington and all WA13 postcodes.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'R.R.M Exterior Cleaning Specialist',
      telephone: '+447845463877',
      address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
      url: 'https://rrmexternalcleaningspecialist.co.uk',
      areaServed: { '@type': 'City', name: 'Lymm' }
    },
    areaServed: { '@type': 'City', name: 'Lymm' },
    serviceType: 'Pressure Washing',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 100, maxPrice: 300, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does pressure washing cost in Lymm?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pressure washing in Lymm WA13 costs £100–£300. A standard driveway in Oughtrington or Statham runs £100–£150; a large block-paved driveway on Brookfield Road or Reddish Lane £150–£220; an extensive natural-stone patio or terrace on an executive property £200–£300. Commercial surfaces and Bridgewater Canal-side paths are quoted on site.' }
      },
      {
        '@type': 'Question',
        name: 'Is pressure washing safe for Indian sandstone and limestone patios in Lymm?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — with correct technique. Natural stone patios on Lymm\'s executive properties require a lower pressure (60–80 bar) and pH-neutral detergent rather than high-alkaline cleaners. Limestone in particular must never be treated with acid-based cleaners, which etch the surface. For sandstone, we use a fan nozzle at consistent distance to clean evenly without creating tide marks on the porous surface.' }
      },
      {
        '@type': 'Question',
        name: 'How often should I pressure wash my driveway in Lymm?',
        acceptedAnswer: { '@type': 'Answer', text: 'Every 12–18 months for most Lymm driveways. Lymm\'s Cheshire-plain climate and the high-humidity micro-climate from Lymm Dam and the Bridgewater Canal accelerate algae and moss growth on hard surfaces — particularly shaded driveways under established tree canopies on Eagle Brow and Brookfield Road. Properties adjacent to agricultural land in Heatley and Warburton may need annual cleaning due to farm-track mud tracking.' }
      },
      {
        '@type': 'Question',
        name: 'Can you clean block paving on long Lymm driveways?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Long block-paved driveways — common on executive detached properties in Lymm — are cleaned using a commercial rotating surface cleaner at 80–120 bar, which delivers consistent results across the full length without streaking. After cleaning, kiln-dried jointing sand is re-broadcast into the joint lines to restore structural stability and inhibit weed germination.' }
      },
      {
        '@type': 'Question',
        name: 'Do you pressure wash around Lymm Dam and the Bridgewater Canal?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, and we take environmental precautions. When working near Lymm Dam or the Bridgewater Canal, we use biodegradable pH-neutral detergents and direct waste water away from drainage channels that flow to the Dam or canal. We carry appropriate containment equipment for properties within the immediate catchment area.' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Pressure Washing', item: 'https://rrmexternalcleaningspecialist.co.uk/services/pressure-washing' },
      { '@type': 'ListItem', position: 3, name: 'Lymm', item: 'https://rrmexternalcleaningspecialist.co.uk/services/pressure-washing/lymm' }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides professional pressure washing in Lymm, Cheshire WA13. Specialising in long block-paved driveways on executive detached properties on Brookfield Road and Reddish Lane, natural sandstone and Indian stone patios, limestone and porcelain terracing, Bridgewater Canal towpath-adjacent areas, and agricultural mud removal for Warburton and Heatley rural properties. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY. Telephone: 07845 463877.
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
                Pressure Washing Lymm WA13
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Professional driveway, patio and hard surface cleaning across Lymm. Block paving, natural sandstone, Indian stone, limestone. Bridgewater Canal environmental precautions taken. 5.0 ★ — 47 reviews.
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
                <strong>Pressure washing in Lymm costs £100–£300.</strong> Standard driveway in Oughtrington or Statham from £100; large block-paved executive driveway £150–£220; extensive natural-stone patio or terrace £200–£300. pH-neutral detergents used near Lymm Dam and Bridgewater Canal. Call 07845 463877.
              </p>
            </div>

            <section className="mb-10" aria-labelledby="lymm-pressure">
              <h2 id="lymm-pressure" className="text-2xl font-bold text-foreground mb-4">Hard Surface Cleaning for Lymm's Diverse Properties</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lymm is one of Cheshire's most affluent villages, with a property mix ranging from Victorian sandstone cottages in the conservation area to expansive executive detached on gated developments. Hard surfaces reflect this diversity: long block-paved driveways on <strong>Brookfield Road</strong> and <strong>Reddish Lane</strong>; large natural-sandstone and Indian-stone patios on <strong>Eagle Brow</strong> and <strong>Higher Lane</strong>; porcelain and limestone terracing on 2010s+ new-builds; traditional concrete flags on 1950s–60s properties in <strong>Oughtrington</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The high-humidity micro-climate created by <strong>Lymm Dam</strong> and the <strong>Bridgewater Canal</strong> means algae and moss establish on shaded driveways and patios significantly faster than in open Cheshire countryside. Properties on the Dam side of Eagle Brow — particularly north-facing flag areas and driveways under mature tree canopies — may need pressure washing every 12 months rather than the standard 18-month cycle.
              </p>
            </section>

            <section className="mb-10" aria-labelledby="surfaces-lymm">
              <h2 id="surfaces-lymm" className="text-2xl font-bold text-foreground mb-6">Surfaces We Clean in Lymm WA13</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Block Paving Driveways', desc: 'Executive detached: Brookfield Rd, Reddish Lane, Higher Lane. 80–120 bar rotating surface cleaner + kiln-dried jointing sand reinstatement.' },
                  { title: 'Natural Sandstone & Indian Stone', desc: 'Eagle Brow, Pepper St, Oughtrington Lane patios. 60–80 bar fan nozzle. pH-neutral detergent — no acid on sandstone.' },
                  { title: 'Limestone & Porcelain Terracing', desc: 'Executive new-builds (2010s+). Never acid-treated. 60 bar + alkaline-safe detergent. Fan nozzle at consistent distance.' },
                  { title: 'Concrete Flags & Paths', desc: '1950s–70s housing in Oughtrington and Statham. 100–120 bar. Moss and lichen removal from shaded back-street paths.' },
                  { title: 'Decking', desc: '40–60 bar with wood brightener. Removes algae without raising grain fibres. Common on Dam-side and canal-adjacent properties.' },
                  { title: 'Bridgewater Canal Towpath & Access', desc: 'Environmental containment taken. Biodegradable pH-neutral detergents only. Waste water directed away from canal drainage.' },
                ].map(s => (
                  <div key={s.title} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10" aria-labelledby="faq-pressure-lymm" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-pressure-lymm" className="text-2xl font-bold text-foreground mb-6">Pressure Washing Lymm — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  { q: 'How much does pressure washing cost in Lymm?', a: 'Pressure washing in Lymm WA13 costs £100–£300. A standard driveway in Oughtrington or Statham runs £100–£150; a large block-paved executive driveway £150–£220; an extensive natural-stone patio or terrace £200–£300. Bridgewater Canal-side paths quoted on site.' },
                  { q: 'Is pressure washing safe for Indian sandstone and limestone patios in Lymm?', a: 'Yes — with correct technique. Natural stone patios require lower pressure (60–80 bar) and pH-neutral detergent. Limestone must never be treated with acid-based cleaners. For sandstone, we use a fan nozzle at consistent distance to clean evenly without tide marks on the porous surface.' },
                  { q: 'How often should I pressure wash my driveway in Lymm?', a: 'Every 12–18 months for most Lymm driveways. The high-humidity micro-climate from Lymm Dam and the Bridgewater Canal accelerates algae growth — shaded driveways on Eagle Brow and Brookfield Road may need annual cleaning. Properties near agricultural land in Heatley and Warburton may also need annual treatment for farm-track mud.' },
                  { q: 'Can you clean block paving on long Lymm driveways?', a: 'Yes. Long block-paved driveways on Lymm executive detached are cleaned using a commercial rotating surface cleaner at 80–120 bar for consistent results. After cleaning, kiln-dried jointing sand is re-broadcast into joint lines to restore structural stability and inhibit weed germination.' },
                  { q: 'Do you pressure wash near Lymm Dam and the Bridgewater Canal?', a: 'Yes, and we take environmental precautions. We use biodegradable pH-neutral detergents and direct waste water away from drainage channels flowing to the Dam or canal. We carry containment equipment for properties within the immediate catchment area.' },
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

            <section className="mb-10" aria-labelledby="related-lymm-pressure">
              <h2 id="related-lymm-pressure" className="text-xl font-bold text-foreground mb-4">Other Services in Lymm</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Gutter Cleaning Lymm', href: '/services/gutter-cleaning/lymm' },
                  { label: 'Roof Cleaning Lymm', href: '/services/roof-cleaning/lymm' },
                  { label: 'Render Cleaning Lymm', href: '/services/render-cleaning/lymm' },
                  { label: 'Cladding Cleaning Lymm', href: '/services/cladding-cleaning/lymm' },
                  { label: 'Exterior Cleaning Lymm', href: '/services/exterior-cleaning/lymm' },
                  { label: 'Lymm Location Hub', href: '/locations/lymm' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="text-sm text-primary hover:text-accent underline underline-offset-2 transition-colors">{l.label}</Link>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Pressure Washing in Lymm WA13</h2>
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
