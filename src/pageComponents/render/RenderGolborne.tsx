import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function RenderGolborne() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Render Cleaning Golborne',
    description: 'Professional render cleaning in Golborne WA3 — soft wash for K-Rend, monocouche, sand-and-cement and pebbledash elevations. Algae, moss and A580 diesel stain removal. Never pressure washed. Serving Golborne, Lowton, Kenyon and all WA3 postcodes.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'R.R.M Exterior Cleaning Specialist',
      telephone: '+447845463877',
      address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
      url: 'https://rrmexternalcleaningspecialist.co.uk',
      areaServed: { '@type': 'City', name: 'Golborne' }
    },
    areaServed: { '@type': 'City', name: 'Golborne' },
    serviceType: 'Render Cleaning',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 120, maxPrice: 450, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does render cleaning cost in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Render cleaning in Golborne (WA3) costs £120–£450. A semi-detached front elevation runs £120–£180; a full three-bed detached £200–£320; a larger 1930s pebbledash property £280–£450 depending on surface area and degree of algae colonisation. Price includes biocide application, soft wash and residual treatment.' }
      },
      {
        '@type': 'Question',
        name: 'Can you pressure wash K-Rend in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. K-Rend and monocouche renders must never be pressure washed above 60 bar. High pressure forces water into the render substrate, can delaminate the finishing coat from the scratch coat, and may strip the silicone water-repellent layer built into through-coloured renders. We use soft washing at 20–40 bar with a diluted biocide-detergent solution — the correct method for all K-Rend and monocouche systems in Golborne.' }
      },
      {
        '@type': 'Question',
        name: 'How do you remove algae from rendered walls in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Golborne\'s high-humidity Lancashire-plain climate and A580 East Lancashire Road diesel particulates combine to accelerate algae and biofilm growth on rendered walls. We apply a sodium hypochlorite biocide at the correct dilution for the render type (lower concentration for K-Rend; stronger for sand-and-cement), allow 20–30 minutes dwell time, then soft wash at low pressure. A residual biocide coating slows re-growth for 18–24 months.' }
      },
      {
        '@type': 'Question',
        name: 'How often does rendered property need cleaning in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Every 3–5 years for most Golborne render. Properties near the A580 East Lancashire Road or in low-lying positions near Douglas Brook, where moisture lingers longer, may need cleaning every 2–3 years. K-Rend and monocouche with integrated hydrophobic agents typically last the longer end of this range; traditional sand-and-cement and pebbledash the shorter end.' }
      },
      {
        '@type': 'Question',
        name: 'What is monocouche render and is it in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Monocouche is a single-coat through-coloured render system applied 15–20 mm thick, popular on housing association and private refurbishments from the 1990s onwards. In Golborne, monocouche was used extensively in the regeneration of former council housing stock, particularly around the Legh Street corridor and Stone Cross area. It requires gentle soft washing — never pressure washing — as the finish coat is integral to the system.' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Render Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/render-cleaning' },
      { '@type': 'ListItem', position: 3, name: 'Golborne', item: 'https://rrmexternalcleaningspecialist.co.uk/services/render-cleaning/golborne' }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides professional render cleaning in Golborne, Wigan WA3. Specialising in K-Rend on newer Golborne builds, monocouche on housing association refurbs in the Legh Street corridor and Stone Cross area, sand-and-cement on Victorian terraces, and pebbledash on 1930s–50s semis in Lowton and Victoria Park area. East Lancashire Road A580 diesel stain removal. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY. Call 07845 463877.
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
                Render Cleaning Golborne WA3
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Soft wash algae and stain removal for all render types in Golborne. K-Rend, monocouche, pebbledash, sand-and-cement. Never pressure washed. 5.0 ★ — 47 verified reviews.
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
                <strong>Render cleaning in Golborne costs £120–£450.</strong> Semi-detached front elevation from £120; full detached £200–£320; large pebbledash property £280–£450. K-Rend and monocouche must never be pressure washed — we soft wash only at 20–40 bar. R.R.M based 3 miles away in Newton-le-Willows WA12. Call 07845 463877.
              </p>
            </div>

            <section className="mb-10" aria-labelledby="golborne-render-types">
              <h2 id="golborne-render-types" className="text-2xl font-bold text-foreground mb-4">Render Types in Golborne — And Why Each Needs Careful Cleaning</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Golborne's housing stock spans four distinct render types, each with different cleaning requirements. Identifying the type before treatment is essential — using the wrong pressure or chemistry can cause irreversible surface damage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { type: 'K-Rend & Through-Colour Renders', where: 'Newer builds (2000s+) on former colliery land and infill sites', risk: 'Max 40 bar soft wash. Never high pressure — delamination of finish coat from scratch coat voids manufacturer warranty.', freq: 'Every 3–5 years' },
                  { type: 'Monocouche Render', where: 'Housing association refurbs: Legh Street corridor, Stone Cross area', risk: '20–30 bar only. Through-coloured — high pressure removes colour along with algae. Biocide dwell time essential.', freq: 'Every 2–4 years' },
                  { type: 'Sand-and-Cement Render', where: 'Victorian/Edwardian terraces: Bridge St, Nook Lane, Harvey Lane', risk: 'Can tolerate 60 bar maximum. Pre-treat hairline cracks with sealant before washing to prevent water ingress.', freq: 'Every 2–4 years' },
                  { type: 'Pebbledash', where: '1930s–50s semi-detached: Lowton, Victoria Park area, Stone Cross', risk: 'Fan nozzle only — pencil jet dislodges pebble aggregate. Biocide pre-treatment dissolves algae before washing.', freq: 'Every 3–5 years' },
                ].map(r => (
                  <div key={r.type} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{r.type}</h3>
                    <p className="text-xs text-primary font-medium mb-2">{r.where}</p>
                    <p className="text-sm text-muted-foreground mb-2">{r.risk}</p>
                    <p className="text-xs text-muted-foreground font-medium">Cleaning frequency: {r.freq}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10" aria-labelledby="faq-render-golborne" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-render-golborne" className="text-2xl font-bold text-foreground mb-6">Render Cleaning Golborne — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  { q: 'How much does render cleaning cost in Golborne?', a: 'Render cleaning in Golborne (WA3) costs £120–£450. A semi-detached front elevation runs £120–£180; a full 3-bed detached £200–£320; a larger 1930s pebbledash property £280–£450. Price includes biocide application, soft wash and residual treatment.' },
                  { q: 'Can you pressure wash K-Rend in Golborne?', a: 'No. K-Rend and monocouche must never be pressure washed above 60 bar — high pressure delaminate the finishing coat and strips the hydrophobic layer. We use soft washing at 20–40 bar with biocide-detergent solution, the correct method for all K-Rend and monocouche systems.' },
                  { q: 'How do you remove algae from rendered walls in Golborne?', a: 'We apply a biocide at the correct dilution for the render type (lower for K-Rend, stronger for sand-and-cement), allow 20–30 minutes dwell time for root-level kill, then soft wash at low pressure. Golborne\'s Lancashire climate and A580 diesel particulates mean biofilm grows faster than in some other areas.' },
                  { q: 'How often does rendered property need cleaning in Golborne?', a: 'Every 3–5 years for most Golborne render. Properties near the A580 or in low-lying positions near Douglas Brook, where moisture lingers, may need cleaning every 2–3 years. K-Rend with integrated hydrophobic agents lasts toward the longer end; traditional sand-and-cement and pebbledash the shorter end.' },
                  { q: 'What is monocouche render and is it in Golborne?', a: 'Monocouche is a single-coat through-coloured render applied 15–20 mm thick, widely used in 1990s+ housing association refurbishments. In Golborne it was used in regeneration of former council stock around the Legh Street corridor and Stone Cross area. It requires gentle soft washing only — never pressure washing.' },
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

            <section className="mb-10" aria-labelledby="related-golborne-render">
              <h2 id="related-golborne-render" className="text-xl font-bold text-foreground mb-4">Other Services in Golborne</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Gutter Cleaning Golborne', href: '/services/gutter-cleaning/golborne' },
                  { label: 'Roof Cleaning Golborne', href: '/services/roof-cleaning/golborne' },
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
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Render Cleaning in Golborne WA3</h2>
              <p className="text-muted-foreground mb-6">Covering Golborne, Lowton, Kenyon and all WA3 postcodes. Based in Newton-le-Willows — 3 miles away. Mon–Sat.</p>
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
