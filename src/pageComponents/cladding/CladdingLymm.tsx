import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function CladdingLymm() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cladding Cleaning Lymm',
    description: 'Professional cladding cleaning in Lymm WA13 — soft washing for oak and timber cladding on barn conversions, metal composite on executive new-builds, UPVC on 1980s–90s housing, and glass on contemporary Cheshire village homes. Lymm Dam micro-climate algae specialists. Serving Lymm, Heatley, Statham, Warburton and all WA13 postcodes.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'R.R.M Exterior Cleaning Specialist',
      telephone: '+447845463877',
      address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
      url: 'https://rrmexternalcleaningspecialist.co.uk',
      areaServed: { '@type': 'City', name: 'Lymm' }
    },
    areaServed: { '@type': 'City', name: 'Lymm' },
    serviceType: 'Cladding Cleaning',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 120, maxPrice: 350, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does cladding cleaning cost in Lymm?',
        acceptedAnswer: { '@type': 'Answer', text: 'Cladding cleaning in Lymm WA13 costs £120–£350. A semi-detached with UPVC cladding in Oughtrington or Statham runs £120–£175; a medium detached £175–£260; a large executive property with metal composite or timber cladding on Brookfield Road or a gated development £260–£350+. Timber and barn-conversion cladding may be at the higher end due to the additional care required.' }
      },
      {
        '@type': 'Question',
        name: 'Do you clean timber and oak cladding on Lymm barn conversions?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. Barn conversions in Lymm, Warburton, Heatley and Booth often feature original oak frame sections and new-fit timber board cladding. Oak and hardwood cladding must be soft washed with a wood-safe biocide detergent at 30–50 bar — never high pressure, which raises grain fibres and drives moisture into the end grain. We follow with a wood brightener treatment to restore the original grain tone. Annual inspection is recommended for Lymm Dam-adjacent properties where the humidity accelerates fungal growth in timber.' }
      },
      {
        '@type': 'Question',
        name: 'Is soft washing safe for UPVC cladding in Lymm?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — UPVC cladding must never be high-pressure washed above 60 bar. We soft wash at 20–40 bar with pH-neutral detergent, which removes algae, biofilm and the tannin staining from Lymm\'s many mature trees without cracking or discolouring the panel surface. UPVC cladding panels yellowed by UV exposure can be treated with a specialist UPVC restorer on the same visit.' }
      },
      {
        '@type': 'Question',
        name: 'How often should cladding be cleaned in Lymm WA13?',
        acceptedAnswer: { '@type': 'Answer', text: 'Every 2–3 years for most Lymm cladding. Properties within the Lymm Dam and Bridgewater Canal moisture corridor — the Eagle Brow to Warrington Lane corridor — may need cleaning every 18–24 months. Oak and timber cladding should be inspected annually for fungal growth and moisture ingress, especially on north-facing elevations in the Dam micro-climate zone.' }
      },
      {
        '@type': 'Question',
        name: 'What types of cladding do you clean in Lymm?',
        acceptedAnswer: { '@type': 'Answer', text: 'We clean oak and hardwood timber cladding (barn conversions in Warburton, Heatley, Booth), metal composite panels (executive new-builds on Beechfield, Brookfield gated developments), UPVC cladding (1980s–90s housing in Oughtrington and Statham), glass and frameless panels (contemporary Cheshire village homes), and fibre-cement boards (private developments and self-builds throughout WA13).' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Cladding Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/cladding-cleaning' },
      { '@type': 'ListItem', position: 3, name: 'Lymm', item: 'https://rrmexternalcleaningspecialist.co.uk/services/cladding-cleaning/lymm' }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides professional cladding cleaning in Lymm, Cheshire WA13. Specialising in oak and timber cladding on barn conversions in Warburton, Heatley and Booth; metal composite panels on executive new-builds on Beechfield and Brookfield gated developments; UPVC cladding on 1980s–90s housing in Oughtrington and Statham; glass panels on contemporary Cheshire village homes. Lymm Dam high-humidity fungal growth specialists. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY. Call 07845 463877.
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
                Cladding Cleaning Lymm WA13
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Professional soft washing for all cladding types in Lymm. Oak and timber barn conversions, metal composite, UPVC, glass. Lymm Dam moisture specialists. 5.0 ★ — 47 reviews.
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
                <strong>Cladding cleaning in Lymm costs £120–£350.</strong> UPVC semi in Oughtrington from £120; medium detached £175–£260; large executive with metal composite or timber cladding £260–£350+. Oak and timber barn conversion cladding cleaned with wood-safe biocide at 30–50 bar. Call 07845 463877 for a free quote.
              </p>
            </div>

            <section className="mb-10" aria-labelledby="lymm-cladding">
              <h2 id="lymm-cladding" className="text-2xl font-bold text-foreground mb-4">Cladding Types in Lymm — A Village with Character</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lymm's combination of historic Cheshire character and high-value executive development creates a wider variety of cladding types per square mile than almost any other location in our coverage area. The Lymm Dam and Bridgewater Canal high-humidity micro-climate makes cladding maintenance here more demanding than in drier inland locations — fungal growth on timber cladding and algae on UPVC establish faster, particularly on north- and west-facing elevations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Oak & Hardwood Timber Cladding', where: 'Barn conversions: Warburton, Heatley, Booth, rural WA13 fringe', method: 'Wood-safe biocide + 30–50 bar soft wash. Wood brightener treatment restores grain tone. Annual inspection for Dam-adjacent properties — humidity accelerates fungal growth in end grain.' },
                  { title: 'Metal Composite Panels', where: 'Executive new-builds: Beechfield, Brookfield gated developments', method: 'Non-abrasive detergent removes oxidation and tannin staining from overhanging trees. Soft wash 40–60 bar. Rinse to streak-free finish.' },
                  { title: 'UPVC Cladding', where: '1980s–90s housing: Oughtrington, Statham, Heatley', method: 'Soft wash 20–40 bar, pH-neutral detergent. UV-yellowed panels treated with UPVC restorer. Tannin staining from Lymm\'s mature trees removed with specific chelating agent.' },
                  { title: 'Glass & Frameless Panels', where: 'Contemporary Cheshire village homes, extensions', method: 'Purified water fed-pole system for streak-free finish. De-ionised rinse prevents hard-water spotting from Cheshire\'s mineral-rich tap water.' },
                  { title: 'Fibre-Cement Boards', where: 'Private developments and self-builds throughout WA13', method: 'Soft wash below 60 bar. Pre-treatment biocide dwell time for root-level algae kill. Sealed end-grain joints inspected.' },
                  { title: 'Cedar & Larch Cladding', where: 'Self-builds, contemporary rural WA13 properties', method: 'Specialist wood biocide — lower concentration than hardwood boards. Cedar oil treatment optionally applied post-clean to slow greying.' },
                ].map(c => (
                  <div key={c.title} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
                    <p className="text-xs text-primary font-medium mb-2">{c.where}</p>
                    <p className="text-sm text-muted-foreground">{c.method}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10" aria-labelledby="faq-cladding-lymm" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-cladding-lymm" className="text-2xl font-bold text-foreground mb-6">Cladding Cleaning Lymm — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  { q: 'How much does cladding cleaning cost in Lymm?', a: 'Cladding cleaning in Lymm WA13 costs £120–£350. A semi with UPVC cladding in Oughtrington or Statham runs £120–£175; medium detached £175–£260; large executive with metal composite or timber cladding £260–£350+. Oak and barn-conversion timber is at the higher end due to specialist care required.' },
                  { q: 'Do you clean timber and oak cladding on Lymm barn conversions?', a: 'Yes. Barn conversions in Warburton, Heatley and Booth feature oak frame and timber board cladding. These must be soft washed with wood-safe biocide at 30–50 bar — never high pressure, which raises grain fibres and drives moisture into end grain. We follow with a wood brightener treatment to restore the original grain tone.' },
                  { q: 'Is soft washing safe for UPVC cladding in Lymm?', a: 'Yes — UPVC must never be high-pressure washed above 60 bar. We soft wash at 20–40 bar with pH-neutral detergent, removing algae, biofilm and tannin staining from Lymm\'s mature trees. UV-yellowed UPVC panels can be treated with a specialist UPVC restorer on the same visit.' },
                  { q: 'How often should cladding be cleaned in Lymm WA13?', a: 'Every 2–3 years for most Lymm cladding. The Lymm Dam and Bridgewater Canal moisture corridor means properties from Eagle Brow to Warrington Lane may need cleaning every 18–24 months. Oak and timber cladding should be inspected annually for fungal growth on north-facing elevations.' },
                  { q: 'What types of cladding do you clean in Lymm?', a: 'We clean oak and hardwood timber (barn conversions in Warburton, Heatley, Booth), metal composite (Beechfield, Brookfield gated executive developments), UPVC (1980s–90s housing in Oughtrington and Statham), glass and frameless panels (contemporary Cheshire village homes), fibre-cement and cedar/larch (self-builds throughout WA13).' },
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

            <section className="mb-10" aria-labelledby="related-lymm-cladding">
              <h2 id="related-lymm-cladding" className="text-xl font-bold text-foreground mb-4">Other Services in Lymm</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Gutter Cleaning Lymm', href: '/services/gutter-cleaning/lymm' },
                  { label: 'Roof Cleaning Lymm', href: '/services/roof-cleaning/lymm' },
                  { label: 'Render Cleaning Lymm', href: '/services/render-cleaning/lymm' },
                  { label: 'Pressure Washing Lymm', href: '/services/pressure-washing/lymm' },
                  { label: 'Exterior Cleaning Lymm', href: '/services/exterior-cleaning/lymm' },
                  { label: 'Lymm Location Hub', href: '/locations/lymm' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="text-sm text-primary hover:text-accent underline underline-offset-2 transition-colors">{l.label}</Link>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Cladding Cleaning in Lymm WA13</h2>
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
