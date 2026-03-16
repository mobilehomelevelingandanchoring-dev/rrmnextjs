import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function RoofWigan() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Roof Cleaning Wigan',
    description: 'Professional roof cleaning in Wigan WN1–WN6 — soft wash biocide treatment for Welsh slate on pit-village terraces in Ince and Hindley, clay plain tiles on 1930s–50s semis in Standish and Orrell, and concrete interlocking tiles on 1970s–90s estates. Pennine fringe high-rainfall moss specialists. M6 J25–J27 diesel particulate removal.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'R.R.M Exterior Cleaning Specialist',
      telephone: '+447845463877',
      address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
      url: 'https://rrmexternalcleaningspecialist.co.uk',
      areaServed: { '@type': 'City', name: 'Wigan' }
    },
    areaServed: { '@type': 'City', name: 'Wigan' },
    serviceType: 'Roof Cleaning',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 200, maxPrice: 580, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does roof cleaning cost in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'Roof cleaning in Wigan costs £200–£580. A 1920s–50s terraced property in Ince, Hindley or Platt Bridge runs £200–£300; a 3–4 bed semi in Ashton-in-Makerfield, Standish or Orrell £280–£420; a larger detached on Winstanley or Wrightington £420–£580. Price includes biocide treatment, soft wash and residual growth-inhibitor coating.' }
      },
      {
        '@type': 'Question',
        name: 'Is soft washing safe for roofs in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — and it is the only method we use. High-pressure washing above 60 bar strips granules from clay and concrete tiles and can fracture Welsh slate on Wigan\'s older colliery-terrace stock. Our soft wash applies biocide at 20–40 bar, killing moss and lichen at root level without mechanical tile damage. The residual coating continues killing spores for 12–18 months after the visit.' }
      },
      {
        '@type': 'Question',
        name: 'Why is there so much moss on roofs in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'Wigan sits at the western edge of the Pennines and receives 750–800 mm of annual rainfall — significantly more than lowland areas. The M6 motorway (J25–J27) running through the borough deposits a constant stream of diesel NOx and fine particulates on north- and west-facing roof slopes, creating a nutrient film that fertilises moss and lichen. Pennine fringe postcodes WN5 and WN6 are most affected, but even lower-lying WN1–WN3 properties show faster biological growth than equivalent properties further south.' }
      },
      {
        '@type': 'Question',
        name: 'How long do roof cleaning results last in Wigan?',
        acceptedAnswer: { '@type': 'Answer', text: 'After professional soft washing, Wigan roofs typically remain clean for 3–5 years. Pennine fringe properties in WN5 (Orrell/Billinge) and WN6 (Standish/Shevington) exposed to prevailing westerlies and M6 diesel may see re-growth closer to 3 years. Our post-wash biocide residual coating extends the effective clean period by inhibiting spore germination for 12–18 months.' }
      },
      {
        '@type': 'Question',
        name: 'Does a clean roof add value to a Wigan property?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. A heavily moss-covered roof signals deferred maintenance to estate agents and surveyors. For Wigan\'s popular 1930s–50s semi-detached stock in Standish, Orrell and Ashton-in-Makerfield, a clean roof removes the most visible negative at kerb appeal and avoids survey recommendations that can trigger buyer price reductions. Wigan properties in the current market are price-sensitive — removing objections before going to market is cost-effective.' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Roof Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning' },
      { '@type': 'ListItem', position: 3, name: 'Wigan', item: 'https://rrmexternalcleaningspecialist.co.uk/services/roof-cleaning/wigan' }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides professional roof cleaning and moss removal in Wigan, Greater Manchester WN1–WN6. Welsh slate on pit-village terraces in Ince, Abram and Hindley (WN2); clay plain tiles on 1930s–50s semi-detached in Standish (WN6) and Orrell (WN5); concrete interlocking tiles on 1970s–90s estates in Pemberton, Goose Green and Ashton-in-Makerfield (WN4). Pennine fringe high-rainfall and M6 J25–J27 diesel particulate specialists. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY. Call 07845 463877.
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
                <Link href="/services/roof-cleaning" className="text-primary hover:text-accent transition-colors" itemProp="item"><span itemProp="name">Roof Cleaning</span></Link>
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
                Roof Cleaning Wigan WN1–WN6
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Soft wash moss and algae removal across all Wigan postcodes. Welsh slate, clay tiles, concrete interlocking. Pennine fringe high-rainfall and M6 diesel specialists. 5.0 ★ — 47 reviews.
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
                <strong>Roof cleaning in Wigan costs £200–£580.</strong> Pit-village terraced property in Ince, Hindley or Platt Bridge £200–£300; 3–4 bed semi in Standish, Orrell or Ashton-in-Makerfield £280–£420; large detached in Winstanley or Wrightington £420–£580. Soft wash only — biocide treatment + residual coat included. Call 07845 463877.
              </p>
            </div>

            <section className="mb-10" aria-labelledby="wigan-roofs">
              <h2 id="wigan-roofs" className="text-2xl font-bold text-foreground mb-4">Roof Types Across Wigan WN1–WN6</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { type: 'Welsh Slate', era: 'Pre-1940 pit-village terraces', where: 'Ince, Abram, Hindley, Platt Bridge (WN2), older Wigan town-centre streets (WN1)', note: 'Must not exceed 30–40 bar — slate nibs fracture under pressure. Black lichen and orange algae common. Ridge and verge mortar inspection essential — subsidence can crack pointing.' },
                  { type: 'Clay Plain Tiles', era: '1930s–1950s semi-detached', where: 'Standish (WN6), Orrell (WN5), Shevington, Winstanley, parts of Ashton-in-Makerfield (WN4)', note: 'Porous biscuit tile retains moisture on Pennine fringe. Green moss colonies up to 50 mm deep on exposed north-facing slopes. Extended biocide dwell time essential.' },
                  { type: 'Concrete Interlocking', era: '1970s–90s estates', where: 'Pemberton (WN5), Goose Green (WN3), Worsley Mesnes, Ashton estates (WN4)', note: 'Textured surface promotes heaviest moss growth. Soft wash 40–60 bar with 30-minute biocide pre-soak. Post-wash sealer reduces M6 particulate adhesion.' },
                ].map(r => (
                  <div key={r.type} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{r.type}</h3>
                    <p className="text-xs text-primary font-medium mb-1">{r.era}</p>
                    <p className="text-xs text-muted-foreground mb-2 italic">{r.where}</p>
                    <p className="text-sm text-muted-foreground">{r.note}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10 bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800" aria-labelledby="m6-pennine">
              <h2 id="m6-pennine" className="text-xl font-bold text-foreground mb-3">M6 Motorway Diesel + Pennine Rainfall — A Double Growth Accelerant</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wigan is one of the few locations in the North West where two independent growth accelerants converge on the same roof surfaces. The <strong>M6 motorway (J25–J27)</strong> passes directly through the borough — one of the UK's busiest freight corridors — depositing diesel NOx and PM2.5 particulates on roof slopes year-round. This hydrocarbon film acts as a nutrient substrate for moss and lichen. Simultaneously, Wigan's <strong>Pennine fringe position</strong> delivers 750–800 mm of annual rainfall — 15–20% above the South East average — which keeps roof surfaces damp long enough for spores to germinate. The combined effect is that Wigan roofs re-colonise with moss significantly faster than equivalent properties in drier, motorway-free locations.
              </p>
            </section>

            <section className="mb-10" aria-labelledby="faq-roof-wigan" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-roof-wigan" className="text-2xl font-bold text-foreground mb-6">Roof Cleaning Wigan — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  { q: 'How much does roof cleaning cost in Wigan?', a: 'Roof cleaning in Wigan costs £200–£580. A pit-village terrace in Ince, Hindley or Platt Bridge £200–£300; a 3–4 bed semi in Standish, Orrell or Ashton-in-Makerfield £280–£420; a large detached in Winstanley or Wrightington £420–£580. Includes biocide treatment, soft wash and residual coating.' },
                  { q: 'Is soft washing safe for roofs in Wigan?', a: 'Yes — it is the only method we use. High-pressure washing strips granules from clay and concrete tiles and can fracture Welsh slate on Wigan\'s older colliery-terrace stock. We soft wash at 20–40 bar, killing moss and lichen at root level. The residual coating kills spores for 12–18 months after the visit.' },
                  { q: 'Why is there so much moss on roofs in Wigan?', a: 'Wigan receives 750–800 mm annual Pennine rainfall — significantly above average. The M6 (J25–J27) deposits diesel NOx particulates on roof slopes as a nutrient film. These two factors combine to create some of the fastest moss-growth rates in the North West, particularly on WN5/WN6 Pennine fringe properties.' },
                  { q: 'How long do roof cleaning results last in Wigan?', a: 'Typically 3–5 years. Pennine fringe properties in WN5 and WN6 may see re-growth closer to 3 years. Our post-wash biocide residual coating extends the clean period by inhibiting spore germination for 12–18 months after treatment.' },
                  { q: 'Does a clean roof add value to a Wigan property?', a: 'Yes. A moss-covered roof signals deferred maintenance to surveyors. For Wigan\'s popular 1930s–50s semi-detached stock in Standish, Orrell and Ashton-in-Makerfield, a clean roof removes the most visible kerb-appeal negative and avoids survey recommendations that trigger buyer price reductions.' },
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

            <section className="mb-10" aria-labelledby="related-wigan-roof">
              <h2 id="related-wigan-roof" className="text-xl font-bold text-foreground mb-4">Other Services in Wigan</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Gutter Cleaning Wigan', href: '/services/gutter-cleaning/wigan' },
                  { label: 'Render Cleaning Wigan', href: '/services/render-cleaning/wigan' },
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
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Roof Cleaning in Wigan WN1–WN6</h2>
              <p className="text-muted-foreground mb-6">Covering Standish, Orrell, Ashton-in-Makerfield, Ince, Hindley, Pemberton, Winstanley and all Wigan postcodes. Mon–Sat.</p>
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
