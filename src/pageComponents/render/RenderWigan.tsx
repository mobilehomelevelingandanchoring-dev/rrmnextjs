import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function RenderWigan() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Render Cleaning Wigan',
    description: 'Professional render cleaning in Wigan WN1–WN6 — soft wash for K-Rend on newer Wigan builds, monocouche on housing association refurbs, sand-and-cement on pit-village terraces, and pebbledash on inter-war semis. M6 J25–J27 diesel and Pennine fringe algae removal. Never pressure washed.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'R.R.M Exterior Cleaning Specialist',
      telephone: '+447845463877',
      address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
      url: 'https://rrmexternalcleaningspecialist.co.uk',
      areaServed: { '@type': 'City', name: 'Wigan' }
    },
    areaServed: { '@type': 'City', name: 'Wigan' },
    serviceType: 'Render Cleaning',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 120, maxPrice: 480, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does render cleaning cost in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'Render cleaning in Wigan costs £120–£480. A semi-detached front elevation in Ashton-in-Makerfield, Orrell or Pemberton runs £120–£180; a full detached £220–£340; a larger property on Standish or Winstanley £320–£480 depending on surface area and algae degree. Price includes biocide application, soft wash and residual treatment.' }
      },
      {
        '@type': 'Question',
        name: 'Can you pressure wash K-Rend in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. K-Rend and monocouche renders used on Wigan\'s newer housing stock must never be high-pressure washed. Pressure above 60 bar forces water into the render substrate, can delaminate the finishing coat from the scratch coat, and strips the integrated silicone water-repellent layer. We use soft washing at 20–40 bar with biocide-detergent solution — the correct method for all K-Rend and monocouche systems.' }
      },
      {
        '@type': 'Question',
        name: 'How do you remove algae from rendered walls in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'Wigan\'s Pennine fringe high rainfall and M6 J25–J27 diesel NOx particulates combine to create rapid algae and biofilm growth on rendered elevations. We apply a biocide pre-treatment at the correct concentration for the render type, allow 20–30 minutes dwell time for root-level kill, then soft wash at low pressure. A residual biocide coating slows re-growth for 18–24 months.' }
      },
      {
        '@type': 'Question',
        name: 'Can mine subsidence crack render in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — and it is a known issue in parts of Wigan. Ground movement from former colliery workings under Ince (WN2), Abram (WN2), Hindley (WN2) and parts of Wigan town centre (WN1) can cause stepped hairline cracking in sand-and-cement render. Before washing, we inspect rendered elevations for subsidence-related cracking and seal active hairline cracks with flexible filler to prevent water ingress during and after the clean.' }
      },
      {
        '@type': 'Question',
        name: 'How often does rendered property need cleaning in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'Every 2–4 years for most Wigan render. Pennine fringe properties in WN5 (Orrell/Billinge) and WN6 (Standish/Shevington) exposed to prevailing westerlies and high rainfall may need cleaning every 2–3 years. Properties near the M6 corridor (WN3–WN5) show faster re-contamination from diesel particulates. K-Rend with integrated hydrophobics lasts toward the longer end; traditional sand-and-cement the shorter end.' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Render Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/render-cleaning' },
      { '@type': 'ListItem', position: 3, name: 'Wigan', item: 'https://rrmexternalcleaningspecialist.co.uk/services/render-cleaning/wigan' }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides professional render cleaning in Wigan, Greater Manchester WN1–WN6. K-Rend on newer Standish and Winstanley builds; monocouche on housing association refurbs in Pemberton and Worsley Mesnes; sand-and-cement on pit-village terraces in Ince, Abram and Hindley; pebbledash on 1930s–50s semis in Orrell, Ashton-in-Makerfield and Shevington. Mine subsidence render crack inspection. Never pressure washed. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY. Call 07845 463877.
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
                Render Cleaning Wigan WN1–WN6
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Soft wash algae removal for all render types across Wigan. K-Rend, monocouche, pebbledash, sand-and-cement. Mine subsidence crack inspection. Never pressure washed. 5.0 ★ — 47 reviews.
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
                <strong>Render cleaning in Wigan costs £120–£480.</strong> Semi front elevation in Ashton-in-Makerfield, Orrell or Pemberton from £120; full detached £220–£340; large property in Standish or Winstanley £320–£480. Mine subsidence crack inspection included. Soft wash only — never high pressure. Call 07845 463877.
              </p>
            </div>

            <section className="mb-10" aria-labelledby="wigan-render-types">
              <h2 id="wigan-render-types" className="text-2xl font-bold text-foreground mb-4">Render Types Across Wigan WN1–WN6</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {[
                  { type: 'K-Rend & Through-Colour', where: 'Newer builds (2000s+): Standish (WN6), Winstanley (WN5), Shevington, Appley Bridge', risk: 'Max 40 bar soft wash. Never high pressure — delamination and voided warranty. Hydrophobic layer must be preserved.', freq: 'Every 3–5 years' },
                  { type: 'Monocouche Render', where: 'Housing association refurbs: Pemberton (WN5), Worsley Mesnes, Goose Green (WN3)', risk: '20–30 bar only. Through-coloured — high pressure strips colour with algae. 20-minute biocide dwell essential.', freq: 'Every 2–4 years' },
                  { type: 'Sand-and-Cement', where: 'Pit-village terraces: Ince, Abram, Hindley, Platt Bridge (WN2)', risk: 'Up to 60 bar. Inspect and seal subsidence hairline cracks before washing. Water tracking through cracks causes internal damp.', freq: 'Every 2–3 years' },
                  { type: 'Pebbledash', where: '1930s–50s semis: Orrell (WN5), Ashton-in-Makerfield (WN4), Shevington (WN6)', risk: 'Fan nozzle only — pencil jet dislodges pebble aggregate. Biocide pre-treatment dissolves algae before wash.', freq: 'Every 3–4 years' },
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

            <section className="mb-10 bg-amber-50 dark:bg-amber-950/20 rounded-lg p-6 border border-amber-200 dark:border-amber-800" aria-labelledby="subsidence-render">
              <h2 id="subsidence-render" className="text-xl font-bold text-foreground mb-3">Mine Subsidence & Render Cracking — A Wigan-Specific Issue</h2>
              <p className="text-muted-foreground leading-relaxed">
                Former colliery workings beneath <strong>Ince (WN2)</strong>, <strong>Abram (WN2)</strong>, <strong>Hindley (WN2)</strong> and parts of <strong>Wigan town centre (WN1)</strong> have caused gradual ground movement over decades. This subsidence manifests as stepped or diagonal hairline cracking in sand-and-cement render on affected properties — a pattern distinct from normal thermal cracking. Before we apply any cleaning solution, we walk every elevation and seal active hairline cracks with a flexible filler compatible with the render type. This prevents cleaning solution tracking into the wall cavity and water ingress during subsequent rainfall. If significant structural cracking is observed, we recommend a structural survey before proceeding.
              </p>
            </section>

            <section className="mb-10" aria-labelledby="faq-render-wigan" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-render-wigan" className="text-2xl font-bold text-foreground mb-6">Render Cleaning Wigan — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  { q: 'How much does render cleaning cost in Wigan?', a: 'Render cleaning in Wigan costs £120–£480. A semi front elevation in Ashton-in-Makerfield, Orrell or Pemberton runs £120–£180; full detached £220–£340; large property in Standish or Winstanley £320–£480. Includes biocide, soft wash and residual treatment.' },
                  { q: 'Can you pressure wash K-Rend in Wigan?', a: 'No. K-Rend and monocouche on Wigan\'s newer housing must never be high-pressure washed — it delaminate the finish coat and strips the hydrophobic layer. We soft wash at 20–40 bar with biocide-detergent solution, the correct method.' },
                  { q: 'How do you remove algae from rendered walls in Wigan?', a: 'Wigan\'s Pennine fringe rainfall and M6 J25–J27 diesel NOx create rapid algae growth on rendered elevations. We apply biocide pre-treatment at the correct concentration, allow 20–30 minutes dwell time, then soft wash at low pressure. A residual coating slows re-growth for 18–24 months.' },
                  { q: 'Can mine subsidence crack render in Wigan?', a: 'Yes — a known issue in Ince, Abram, Hindley and parts of Wigan town centre. Ground movement from former colliery workings causes stepped hairline cracking in sand-and-cement render. We inspect and seal active cracks before washing to prevent water ingress.' },
                  { q: 'How often does rendered property need cleaning in Wigan?', a: 'Every 2–4 years for most Wigan render. Pennine fringe WN5/WN6 properties may need every 2–3 years. Properties near the M6 corridor show faster diesel re-contamination. K-Rend lasts toward the longer end; sand-and-cement the shorter end.' },
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

            <section className="mb-10" aria-labelledby="related-wigan-render">
              <h2 id="related-wigan-render" className="text-xl font-bold text-foreground mb-4">Other Services in Wigan</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Gutter Cleaning Wigan', href: '/services/gutter-cleaning/wigan' },
                  { label: 'Roof Cleaning Wigan', href: '/services/roof-cleaning/wigan' },
                  { label: 'Pressure Washing Wigan', href: '/services/pressure-washing/wigan' },
                  { label: 'Cladding Cleaning Wigan', href: '/services/cladding-cleaning/wigan' },
                  { label: 'Exterior Cleaning Wigan', href: '/services/exterior-cleaning/wigan' },
                  { label: 'Wigan Location Hub', href: '/locations/wigan' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="text-sm text-primary hover:text-accent underline underline-offset-2 transition-colors">{l.label}</Link>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Render Cleaning in Wigan WN1–WN6</h2>
              <p className="text-muted-foreground mb-6">Covering all Wigan postcodes including Standish, Orrell, Ashton-in-Makerfield, Ince, Hindley, Pemberton and Winstanley. Mon–Sat.</p>
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
