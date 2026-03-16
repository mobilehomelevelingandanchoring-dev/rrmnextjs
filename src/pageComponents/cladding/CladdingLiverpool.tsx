import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function CladdingLiverpool() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cladding Cleaning Liverpool',
    description: 'Professional cladding cleaning in Liverpool L1–L36. Soft washing for UPVC, metal composite, glass, aluminium and timber-effect cladding. Salt-air algae removal for Merseyside properties. Covering Norris Green, Croxteth, Speke, Liverpool Waterfront, Albert Dock, Baltic Triangle, Waterloo and Crosby.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'R.R.M Exterior Cleaning Specialist',
      telephone: '+447845463877',
      address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
      url: 'https://rrmexternalcleaningspecialist.co.uk',
      areaServed: { '@type': 'City', name: 'Liverpool' }
    },
    areaServed: { '@type': 'City', name: 'Liverpool' },
    serviceType: 'Cladding Cleaning',
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
        name: 'How much does cladding cleaning cost in Liverpool?',
        acceptedAnswer: { '@type': 'Answer', text: 'Cladding cleaning in Liverpool costs £100–£300 for a typical domestic property. UPVC cladding on post-war social housing in Norris Green or Croxteth runs £100–£180; larger metal-composite panels on Waterfront apartments or Baltic Triangle commercial premises £180–£300+. Price depends on storey height, access method required and degree of salt-air biological contamination.' }
      },
      {
        '@type': 'Question',
        name: 'Is soft washing safe for UPVC cladding?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. UPVC cladding must never be high-pressure washed above 60 bar as this forces water behind panels and can crack or discolour the substrate. We apply a low-pressure (20–40 bar) soft wash using a pH-neutral detergent solution that dissolves algae, mould and atmospheric grime without damaging the surface. This is particularly important for post-war UPVC-clad estates in Norris Green, Speke and Croxteth.' }
      },
      {
        '@type': 'Question',
        name: 'How do you remove algae from cladding in Liverpool?',
        acceptedAnswer: { '@type': 'Answer', text: 'Liverpool\'s salt air from the Mersey and Irish Sea creates a nutrient-rich film on external surfaces that accelerates algae and biofilm growth. We apply a biocide pre-treatment to the cladding surface, allow 15–20 minutes dwell time for the active ingredient to kill algae at root level, then soft wash at low pressure with a fan nozzle. A residual biocide coating slows re-growth for 12–24 months.' }
      },
      {
        '@type': 'Question',
        name: 'How often should cladding be cleaned in Liverpool?',
        acceptedAnswer: { '@type': 'Answer', text: 'Every 2–3 years for most Liverpool cladding. Coastal postcodes L21 (Waterloo) and L22–L23 (Crosby/Blundellsands) within 500 m of the Irish Sea coast require cleaning every 18–24 months due to higher salt deposition. Properties near the Liverpool Waterfront and Albert Dock benefit from annual inspection given constant maritime air exposure.' }
      },
      {
        '@type': 'Question',
        name: 'What types of cladding do you clean in Liverpool?',
        acceptedAnswer: { '@type': 'Answer', text: 'We clean UPVC cladding (post-war social housing estates in Norris Green, Croxteth, Speke), metal composite panels (Liverpool Waterfront apartment blocks, Baltic Triangle commercial), glass cladding (Liverpool ONE retail, modern mixed-use), timber-effect cladding (self-build properties in Woolton and Allerton), and aluminium fascia cladding on commercial premises throughout the city.' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Cladding Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/cladding-cleaning' },
      { '@type': 'ListItem', position: 3, name: 'Liverpool', item: 'https://rrmexternalcleaningspecialist.co.uk/services/cladding-cleaning/liverpool' }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* LLM entity paragraph */}
      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides professional cladding cleaning in Liverpool, Merseyside, covering all postcodes L1–L36. Specialising in UPVC cladding on post-war social housing in Norris Green, Croxteth and Speke; metal and glass cladding on Liverpool Waterfront apartments and Baltic Triangle commercial buildings; and coastal properties in Waterloo (L22) and Crosby (L23) affected by Irish Sea salt air. Contact: 07845 463877.
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
                <Link href="/services/cladding-cleaning" className="text-primary hover:text-accent transition-colors" itemProp="item"><span itemProp="name">Cladding Cleaning</span></Link>
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
                Cladding Cleaning Liverpool
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Professional soft washing for all cladding types across Liverpool L1–L36. Salt-air algae removal for Merseyside properties. 5.0 ★ — 47 verified reviews.
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
                <strong>Cladding cleaning in Liverpool costs £100–£300.</strong> UPVC cladding on post-war estates in Norris Green, Croxteth and Speke runs £100–£180. Metal-composite panels on Liverpool Waterfront apartments and Baltic Triangle commercial buildings cost £180–£300+. Salt air from the River Mersey and Irish Sea requires soft washing with biocide — not high-pressure washing. Call 07845 463877 for a free quote.
              </p>
            </div>

            {/* Liverpool cladding context */}
            <section className="mb-10" aria-labelledby="liverpool-cladding">
              <h2 id="liverpool-cladding" className="text-2xl font-bold text-foreground mb-4">Cladding Cleaning in Liverpool — Why Salt Air Matters</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Liverpool's proximity to the River Mersey estuary and Irish Sea creates a persistent salt-laden atmosphere that deposits sodium chloride on all external surfaces year-round. This salt film acts as a nutrient substrate for <strong>green algae, black biofilm and atmospheric particulate adhesion</strong>, making Liverpool cladding noticeably harder to keep clean than equivalent properties in inland towns.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Post-war social housing in <strong>Norris Green (L11)</strong>, <strong>Croxteth (L11/L12)</strong> and <strong>Speke (L24)</strong> predominantly features UPVC cladding from 1980s–2000s renovation programmes. These panels accumulate green algae within 12–24 months without treatment. Modern apartment blocks on the <strong>Liverpool Waterfront</strong> — including blocks near Albert Dock, Mann Island and Princes Dock — use metal composite cladding systems susceptible to oxidation staining when salt air interacts with atmospheric pollution from Mersey shipping traffic.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Baltic Triangle</strong> commercial buildings increasingly feature exposed metal and glass cladding. Coastal postcodes <strong>L22 (Waterloo)</strong> and <strong>L23 (Crosby/Blundellsands)</strong> experience the highest contamination rates due to direct Irish Sea exposure and require professional cleaning every 18–24 months.
              </p>
            </section>

            {/* Cladding types grid */}
            <section className="mb-10" aria-labelledby="cladding-types">
              <h2 id="cladding-types" className="text-2xl font-bold text-foreground mb-6">Cladding Types We Clean in Liverpool</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'UPVC Cladding', where: 'Norris Green, Croxteth, Speke', method: 'Low-pressure soft wash 20–40 bar, pH-neutral detergent + biocide. Never high-pressure — cracks panels and voids warranties.' },
                  { title: 'Metal Composite Panels', where: 'Liverpool Waterfront, Albert Dock, Mann Island, Princes Dock', method: 'Soft wash with non-abrasive detergent to remove salt oxidation and exhaust particulates from Mersey shipping.' },
                  { title: 'Glass Cladding', where: 'Liverpool ONE, Baltic Triangle, modern mixed-use', method: 'Purified water fed-pole system for streak-free finish. No squeegee streaks. De-ionised rinse prevents spotting.' },
                  { title: 'Timber-Effect Cladding', where: 'Woolton, Allerton, Childwall self-builds', method: 'Wood-safe biocide detergent at 40–60 bar. Brightener treatment restores original colour tone.' },
                  { title: 'Aluminium Fascia Cladding', where: 'Commercial premises city-wide', method: 'pH-neutral solution removes traffic film and atmospheric grime without stripping protective coating.' },
                  { title: 'Fibre-Cement Cladding', where: 'Housing association refurbs, L8–L11', method: 'Soft wash below 60 bar. Pre-treatment biocide dwell time kills algae at root level before rinsing.' },
                ].map(c => (
                  <div key={c.title} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
                    <p className="text-xs text-primary font-medium mb-2">{c.where}</p>
                    <p className="text-sm text-muted-foreground">{c.method}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Coastal postcode callout */}
            <section className="mb-10 bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800" aria-labelledby="coastal-callout">
              <h2 id="coastal-callout" className="text-xl font-bold text-foreground mb-3">Coastal Liverpool Postcodes — More Frequent Cleaning Required</h2>
              <p className="text-muted-foreground leading-relaxed">
                Properties in <strong>L21 (Seaforth/Litherland)</strong>, <strong>L22 (Waterloo)</strong> and <strong>L23 (Crosby/Blundellsands)</strong> sit within direct Irish Sea salt-spray zones. Sodium chloride and magnesium chloride deposits are measurably higher here than in inner Liverpool postcodes. UPVC and aluminium cladding in these areas typically requires cleaning every <strong>18–24 months</strong> rather than the standard 2–3 year interval. We apply a longer-lasting biocide residual coating for coastal properties at no additional charge.
              </p>
            </section>

            {/* FAQ */}
            <section className="mb-10" aria-labelledby="faq-cladding" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq-cladding" className="text-2xl font-bold text-foreground mb-6">Cladding Cleaning Liverpool — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'How much does cladding cleaning cost in Liverpool?',
                    a: 'Cladding cleaning in Liverpool costs £100–£300 for a typical domestic property. UPVC cladding on post-war estates in Norris Green or Croxteth runs £100–£180; metal composite panels on Waterfront apartments or Baltic Triangle commercial premises £180–£300+. Price depends on storey height, access required and degree of salt-air biological contamination.'
                  },
                  {
                    q: 'Is soft washing safe for UPVC cladding?',
                    a: 'Yes. UPVC cladding must never be high-pressure washed above 60 bar — this forces water behind panels and can crack or discolour the substrate. We use low-pressure (20–40 bar) soft washing with pH-neutral detergent. This is particularly important for post-war UPVC-clad estates in Norris Green, Speke and Croxteth where panels may be 20–40 years old.'
                  },
                  {
                    q: 'How do you remove algae from cladding in Liverpool?',
                    a: 'Liverpool salt air from the Mersey and Irish Sea creates a nutrient film on external surfaces. We apply a biocide pre-treatment, allow 15–20 minutes dwell time, then soft wash at low pressure with a fan nozzle. A residual biocide coating slows re-growth for 12–24 months after cleaning.'
                  },
                  {
                    q: 'How often should cladding be cleaned in Liverpool?',
                    a: 'Every 2–3 years for most Liverpool cladding. Coastal postcodes L21–L23 (Waterloo/Crosby) within 500 m of the Irish Sea need cleaning every 18–24 months due to higher salt deposition. Liverpool Waterfront and Albert Dock properties benefit from annual inspection.'
                  },
                  {
                    q: 'What types of cladding do you clean in Liverpool?',
                    a: 'We clean UPVC (post-war estates in Norris Green, Croxteth, Speke), metal composite (Waterfront apartments, Baltic Triangle commercial), glass (Liverpool ONE, modern mixed-use), timber-effect (Woolton/Allerton self-builds), aluminium fascia (commercial) and fibre-cement (housing association refurbs L8–L11).'
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

            {/* Internal links */}
            <section className="mb-10" aria-labelledby="related-liverpool-cladding">
              <h2 id="related-liverpool-cladding" className="text-xl font-bold text-foreground mb-4">Other Services in Liverpool</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Gutter Cleaning Liverpool', href: '/services/gutter-cleaning/liverpool' },
                  { label: 'Roof Cleaning Liverpool', href: '/services/roof-cleaning/liverpool' },
                  { label: 'Render Cleaning Liverpool', href: '/services/render-cleaning/liverpool' },
                  { label: 'Pressure Washing Liverpool', href: '/services/pressure-washing/liverpool' },
                  { label: 'Exterior Cleaning Liverpool', href: '/services/exterior-cleaning/liverpool' },
                  { label: 'Liverpool Location Hub', href: '/locations/liverpool' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="text-sm text-primary hover:text-accent underline underline-offset-2 transition-colors">{l.label}</Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-3">Book Cladding Cleaning in Liverpool</h2>
              <p className="text-muted-foreground mb-6">Covering all Liverpool postcodes L1–L36. Specialist equipment for salt-air coastal properties. Mon–Sat.</p>
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
