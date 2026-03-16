import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function CladdingGolborne() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cladding Cleaning Golborne',
    description: 'Professional cladding cleaning in Golborne WA3 — soft washing for UPVC, metal composite, timber-effect and fibre-cement cladding. Algae and A580 diesel particulate removal. Serving Golborne, Lowton, Kenyon and all WA3 postcodes.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'R.R.M Exterior Cleaning Specialist',
      telephone: '+447845463877',
      address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
      url: 'https://rrmexternalcleaningspecialist.co.uk',
      areaServed: { '@type': 'City', name: 'Golborne' }
    },
    areaServed: { '@type': 'City', name: 'Golborne' },
    serviceType: 'Cladding Cleaning',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 100, maxPrice: 280, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does cladding cleaning cost in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Cladding cleaning in Golborne (WA3) costs £100–£280. A standard semi with UPVC front cladding runs £100–£150; a larger detached with full-elevation cladding £160–£220; commercial metal composite panels £200–£280+. Price depends on storey height, access method and degree of algae contamination.' }
      },
      {
        '@type': 'Question',
        name: 'Is soft washing safe for UPVC cladding in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — UPVC must never be high-pressure washed above 60 bar, which forces water behind panels and can crack or discolour the substrate. We soft wash at 20–40 bar with a pH-neutral detergent. Many 1980s–90s UPVC cladding panels on former council properties in Golborne are now 30–40 years old and especially susceptible to pressure damage.' }
      },
      {
        '@type': 'Question',
        name: 'How do you remove algae from cladding in Golborne WA3?',
        acceptedAnswer: { '@type': 'Answer', text: 'Golborne\'s Lancashire-plain climate — 700 mm+ annual rainfall, high humidity — and East Lancashire Road (A580) diesel particulates create a nutrient film on cladding surfaces that accelerates algae and biofilm growth. We apply a biocide pre-treatment with 15–20 minutes dwell time for root-level kill, then soft wash at low pressure. A residual biocide coating inhibits re-growth for 12–24 months.' }
      },
      {
        '@type': 'Question',
        name: 'How often should cladding be cleaned in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'Every 2–3 years for most Golborne cladding. Properties immediately adjacent to the A580 East Lancashire Road show faster contamination due to constant diesel NOx and particulate deposition, and typically benefit from cleaning every 18–24 months. Timber-effect cladding in Kenyon and rural Lowton should also be inspected annually for moisture ingress.' }
      },
      {
        '@type': 'Question',
        name: 'What types of cladding do you clean in Golborne?',
        acceptedAnswer: { '@type': 'Answer', text: 'We clean UPVC cladding (right-to-buy renovations on 1980s–90s council properties), metal composite panels (commercial and industrial premises near the A572/A580 junction), timber-effect boarding (self-build and newer private homes in Lowton and Kenyon), and fibre-cement cladding (housing association refurbishments in Golborne town centre).' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Cladding Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/cladding-cleaning' },
      { '@type': 'ListItem', position: 3, name: 'Golborne', item: 'https://rrmexternalcleaningspecialist.co.uk/services/cladding-cleaning/golborne' }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides professional cladding cleaning in Golborne, Wigan WA3. Specialising in UPVC cladding on former council properties converted under right-to-buy schemes, metal composite panels on commercial and industrial premises near the A572/A580 junction, and timber-effect boarding on self-build properties in Lowton and Kenyon. East Lancashire Road (A580) diesel particulate removal. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY — 3 miles from Golborne. Telephone: 07845 463877.
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
                <Link href="/services/cladding-cleaning" className="text-primary hover:text-accent transition-colors" itemProp="item"><span itemProp="name">Cladding Cleaning</span></Link>
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
                Cladding Cleaning Golborne WA3
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Professional soft washing for all cladding types in Golborne, Lowton and WA3. UPVC, metal composite, timber-effect. A580 diesel particulate specialists. 5.0 ★ — 47 reviews.
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
                <strong>Cladding cleaning in Golborne costs £100–£280.</strong> Semi-detached UPVC front elevation from £100; full detached with all-round cladding £160–£220; commercial metal composite panels £200–£280+. Soft wash only — high pressure cracks UPVC and voids warranties. R.R.M based 3 miles away in Newton-le-Willows WA12. Call 07845 463877.
              </p>
            </div>

            <section className="mb-10" aria-labelledby="golborne-cladding">
              <h2 id="golborne-cladding" className="text-2xl font-bold text-foreground mb-4">Cladding in Golborne — Why Cleaning Matters</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Golborne's high-humidity Lancashire-plain climate and the persistent diesel NOx particulate plume from the <strong>A580 East Lancashire Road</strong> combine to create one of the most challenging external surface environments in the North West. The A580 — running directly south of Golborne town centre — deposits hydrocarbon particulates on westward-facing surfaces continuously, forming a sticky film that binds atmospheric dust, pollen and algae spores into a compacted biofilm layer within 12–18 months.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                UPVC cladding panels on right-to-buy renovations from the 1980s and 1990s in <strong>Golborne town centre</strong> and the <strong>Legh Street corridor</strong> are now 30–40 years old and more vulnerable to yellowing and biofilm adhesion than newer panels. Metal composite panels on commercial premises near the <strong>A572/A580 junction</strong> show oxidation staining from salt-laden road spray in winter months.
              </p>
            </section>

            <section className="mb-10" aria-labelledby="cladding-types-golborne">
              <h2 id="cladding-types-golborne" className="text-2xl font-bold text-foreground mb-6">Cladding Types We Clean in Golborne</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'UPVC Cladding', where: 'Right-to-buy renovations: Legh Street, Stone Cross, Bridge Street', method: 'Soft wash 20–40 bar, pH-neutral detergent + biocide. No high pressure — 30–40-year panels are brittle and prone to cracking.' },
                  { title: 'Metal Composite Panels', where: 'Commercial & industrial premises near A572/A580 junction', method: 'Non-abrasive detergent removes oxidation staining and winter road-salt spray deposits. Soft wash 40–60 bar.' },
                  { title: 'Timber-Effect Cladding', where: 'Self-build and newer private homes in Lowton, Kenyon', method: 'Wood-safe biocide + 40–60 bar. Annual inspection recommended for moisture ingress behind panels in high-rainfall areas.' },
                  { title: 'Fibre-Cement Cladding', where: 'Housing association refurbs in Golborne town centre', method: 'Soft wash below 60 bar. Pre-treatment biocide dwell time essential for root-level algae kill.' },
                ].map(c => (
                  <div key={c.title} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
                    <p className="text-xs text-primary font-medium mb-2">{c.where}</p>
                    <p className="text-sm text-muted-foreground">{c.method}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10" aria-labelledby="faq-cladding-golborne" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-cladding-golborne" className="text-2xl font-bold text-foreground mb-6">Cladding Cleaning Golborne — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  { q: 'How much does cladding cleaning cost in Golborne?', a: 'Cladding cleaning in Golborne (WA3) costs £100–£280. A semi with UPVC front cladding runs £100–£150; a larger detached with full-elevation cladding £160–£220; commercial metal composite panels £200–£280+. Price depends on storey height, access required and algae contamination level.' },
                  { q: 'Is soft washing safe for UPVC cladding in Golborne?', a: 'Yes — UPVC must never be high-pressure washed above 60 bar. Many 1980s–90s UPVC panels on former council properties in Golborne are now 30–40 years old and especially susceptible to pressure damage. We soft wash at 20–40 bar with pH-neutral detergent only.' },
                  { q: 'How do you remove algae from cladding in Golborne WA3?', a: 'Golborne\'s high rainfall and A580 East Lancashire Road diesel particulates create a nutrient film on cladding that accelerates algae growth. We apply biocide pre-treatment for 15–20 minutes dwell time, then soft wash at low pressure. A residual biocide coating inhibits re-growth for 12–24 months.' },
                  { q: 'How often should cladding be cleaned in Golborne?', a: 'Every 2–3 years for most Golborne cladding. Properties adjacent to the A580 show faster contamination from diesel NOx and benefit from cleaning every 18–24 months. Timber-effect cladding in Kenyon and rural Lowton should be inspected annually for moisture ingress.' },
                  { q: 'What types of cladding do you clean in Golborne?', a: 'We clean UPVC (right-to-buy renovations on 1980s–90s council properties), metal composite (commercial near A572/A580 junction), timber-effect (self-builds in Lowton and Kenyon), and fibre-cement (housing association refurbs in Golborne town centre).' },
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

            <section className="mb-10" aria-labelledby="related-golborne-cladding">
              <h2 id="related-golborne-cladding" className="text-xl font-bold text-foreground mb-4">Other Services in Golborne</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Gutter Cleaning Golborne', href: '/services/gutter-cleaning/golborne' },
                  { label: 'Roof Cleaning Golborne', href: '/services/roof-cleaning/golborne' },
                  { label: 'Render Cleaning Golborne', href: '/services/render-cleaning/golborne' },
                  { label: 'Pressure Washing Golborne', href: '/services/pressure-washing/golborne' },
                  { label: 'Exterior Cleaning Golborne', href: '/services/exterior-cleaning/golborne' },
                  { label: 'Golborne Location Hub', href: '/locations/golborne' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="text-sm text-primary hover:text-accent underline underline-offset-2 transition-colors">{l.label}</Link>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Cladding Cleaning in Golborne WA3</h2>
              <p className="text-muted-foreground mb-6">Covering Golborne, Lowton, Kenyon, Pocket Nook and all WA3 postcodes. Based in Newton-le-Willows — 3 miles away.</p>
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
