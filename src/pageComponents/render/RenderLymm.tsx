import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function RenderLymm() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Render Cleaning Lymm',
    description: 'Professional render cleaning in Lymm WA13 — soft wash for K-Rend on executive new-builds, monocouche on 1990s–2000s private developments, sand-and-cement on 1950s–60s housing, and pebbledash on inter-war semis. Lymm Dam micro-climate algae specialists. Barn conversion render assessment. Never pressure washed.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'R.R.M Exterior Cleaning Specialist',
      telephone: '+447845463877',
      address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
      url: 'https://rrmexternalcleaningspecialist.co.uk',
      areaServed: { '@type': 'City', name: 'Lymm' }
    },
    areaServed: { '@type': 'City', name: 'Lymm' },
    serviceType: 'Render Cleaning',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 150, maxPrice: 550, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does render cleaning cost in Lymm?',
        acceptedAnswer: { '@type': 'Answer', text: 'Render cleaning in Lymm WA13 costs £150–£550. A semi front elevation in Oughtrington or Statham runs £150–£220; a full medium-sized detached £250–£380; a large executive property on Brookfield Road or a gated development £380–£550. Includes biocide application, soft wash and residual treatment.' }
      },
      {
        '@type': 'Question',
        name: 'Can you pressure wash K-Rend in Lymm?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. K-Rend and monocouche renders used on Lymm\'s executive new-builds must never be high-pressure washed. Pressure above 60 bar forces water into the render substrate, can delaminate the finishing coat from the scratch coat, and strips the integrated silicone water-repellent layer. We soft wash at 20–40 bar — the manufacturer-recommended method.' }
      },
      {
        '@type': 'Question',
        name: 'Why does render go green so quickly near Lymm Dam?',
        acceptedAnswer: { '@type': 'Answer', text: 'Properties within approximately 500 metres of Lymm Dam or the Bridgewater Canal experience faster algae establishment on render. Constant evaporation from both water bodies keeps rendered walls damp for extended periods, providing near-ideal conditions for green algae and biofilm. We treat Dam-adjacent properties with stronger biocide concentration and longer dwell time as standard.' }
      },
      {
        '@type': 'Question',
        name: 'How often does rendered property need cleaning in Lymm?',
        acceptedAnswer: { '@type': 'Answer', text: 'Every 3–5 years for most Lymm render. Properties in the Lymm Dam and Bridgewater Canal moisture corridor may need cleaning every 2–3 years. K-Rend with integrated hydrophobics lasts toward the longer end; traditional sand-and-cement and pebbledash the shorter end. Post-wash biocide residual coat extends intervals.' }
      },
      {
        '@type': 'Question',
        name: 'Do you clean render on Lymm barn conversions?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Barn conversions in Warburton, Heatley and Booth often combine original sandstone or reclaimed brick with newly rendered gable ends. We assess each finish individually — rendered sections get soft wash; original sandstone and brick get low-pressure pH-neutral treatment to preserve historic substrate and lime pointing.' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Render Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/render-cleaning' },
      { '@type': 'ListItem', position: 3, name: 'Lymm', item: 'https://rrmexternalcleaningspecialist.co.uk/services/render-cleaning/lymm' }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides professional render cleaning in Lymm, Cheshire WA13. K-Rend on Beechfield and Brookfield executive developments, monocouche on 1990s–2000s Lymm and Heatley private housing, sand-and-cement on Oughtrington 1950s–70s semis, pebbledash on Reddish Lane and Higher Lane inter-war detached. Barn conversion render assessment in Warburton, Heatley and Booth. Lymm Dam moisture specialists. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY. Call 07845 463877.
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
                <Link href="/services/render-cleaning" className="text-primary hover:text-accent transition-colors" itemProp="item"><span itemProp="name">Render Cleaning</span></Link>
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
                Render Cleaning Lymm WA13
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Soft wash algae removal for all render types in Lymm. K-Rend, monocouche, pebbledash, sand-and-cement. Barn conversions. Never pressure washed. 5.0 ★ — 47 reviews.
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
                <strong>Render cleaning in Lymm costs £150–£550.</strong> Semi front elevation from £150; medium detached £250–£380; large executive property on Brookfield Road or gated development £380–£550. K-Rend and monocouche must never be pressure washed — soft wash at 20–40 bar only. Call 07845 463877.
              </p>
            </div>

            <section className="mb-10" aria-labelledby="lymm-render-types">
              <h2 id="lymm-render-types" className="text-2xl font-bold text-foreground mb-4">Render Types in Lymm — Identifying What You Have</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  { type: 'K-Rend & Through-Colour', where: 'Executive builds: Beechfield, Brookfield gated developments (2000s+)', risk: 'Max 40 bar soft wash. Never high pressure — delamination + voided warranty. Silicone water-repellent layer must be preserved.', freq: 'Every 3–5 years' },
                  { type: 'Monocouche Render', where: '1990s–2000s private developments in Lymm and Heatley', risk: '20–30 bar only. Through-coloured — pressure strips colour along with algae. 20-minute biocide dwell essential.', freq: 'Every 2–4 years' },
                  { type: 'Sand-and-Cement', where: '1950s–70s semis and detached in Oughtrington, Statham', risk: 'Up to 60 bar. Seal hairline cracks before washing to prevent water tracking behind the render coat.', freq: 'Every 2–4 years' },
                  { type: 'Pebbledash', where: 'Inter-war detached: Reddish Lane, Higher Lane, Pepper Street', risk: 'Fan nozzle only — pencil jet dislodges pebble aggregate. Biocide pre-treatment dissolves algae before wash.', freq: 'Every 3–5 years' },
                ].map(r => (
                  <div key={r.type} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{r.type}</h3>
                    <p className="text-xs text-primary font-medium mb-2">{r.where}</p>
                    <p className="text-sm text-muted-foreground mb-2">{r.risk}</p>
                    <p className="text-xs text-muted-foreground font-medium">Cleaning interval: {r.freq}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10 bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800" aria-labelledby="barn-conversions-lymm">
              <h2 id="barn-conversions-lymm" className="text-xl font-bold text-foreground mb-3">Barn Conversions & Mixed-Finish Properties — Lymm, Warburton, Heatley</h2>
              <p className="text-muted-foreground leading-relaxed">
                Lymm and the surrounding WA13 rural fringe — <strong>Warburton</strong>, <strong>Heatley</strong>, <strong>Booth</strong> — are popular locations for barn conversions combining original Cheshire sandstone or reclaimed brick with rendered gable ends and extensions. We assess each finish individually: rendered sections receive soft wash at appropriate pressure; original sandstone and brick are treated at lower pressure with pH-neutral solution to preserve the historic substrate and avoid disturbing lime pointing. Dual-finish properties receive a single itemised quote per elevation.
              </p>
            </section>

            <section className="mb-10" aria-labelledby="faq-render-lymm" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-render-lymm" className="text-2xl font-bold text-foreground mb-6">Render Cleaning Lymm — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  { q: 'How much does render cleaning cost in Lymm?', a: 'Render cleaning in Lymm WA13 costs £150–£550. A semi front elevation in Oughtrington or Statham runs £150–£220; a full medium detached £250–£380; a large executive on Brookfield Road or gated development £380–£550. Includes biocide, soft wash and residual treatment.' },
                  { q: 'Can you pressure wash K-Rend in Lymm?', a: 'No. K-Rend and monocouche on Lymm\'s executive new-builds must never be high-pressure washed — it delaminate the finish coat and strips the hydrophobic layer. We soft wash at 20–40 bar only, the manufacturer-recommended method.' },
                  { q: 'Why does render go green so quickly near Lymm Dam?', a: 'Properties within ~500m of Lymm Dam or the Bridgewater Canal stay damper because constant evaporation from both water bodies raises ambient humidity. This provides near-ideal conditions for green algae and biofilm. We use stronger biocide concentration for Dam-adjacent properties as standard.' },
                  { q: 'How often does rendered property need cleaning in Lymm?', a: 'Every 3–5 years for most Lymm render. Dam and canal corridor properties may need cleaning every 2–3 years. K-Rend lasts toward the longer end; sand-and-cement and pebbledash the shorter end.' },
                  { q: 'Do you clean render on Lymm barn conversions?', a: 'Yes. Barn conversions in Warburton, Heatley and Booth combining sandstone or brick with new render are assessed per finish — rendered sections get soft wash; original stone and brick get low-pressure pH-neutral treatment to preserve historic substrate and lime pointing.' },
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

            <section className="mb-10" aria-labelledby="related-lymm-render">
              <h2 id="related-lymm-render" className="text-xl font-bold text-foreground mb-4">Other Services in Lymm</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Gutter Cleaning Lymm', href: '/services/gutter-cleaning/lymm' },
                  { label: 'Roof Cleaning Lymm', href: '/services/roof-cleaning/lymm' },
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
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Render Cleaning in Lymm WA13</h2>
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
