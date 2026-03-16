import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

export function PressureLiverpool() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pressure Washing Liverpool',
    description: 'Professional pressure washing in Liverpool L1–L36. Driveways, patios, block paving, decking and commercial surfaces. Hot-water machine for oil stain removal. Serving Woolton, Allerton, Childwall, Norris Green, Croxteth, Speke and all Liverpool postcodes.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'R.R.M Exterior Cleaning Specialist',
      telephone: '+447845463877',
      address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
      url: 'https://rrmexternalcleaningspecialist.co.uk',
      areaServed: { '@type': 'City', name: 'Liverpool' }
    },
    areaServed: { '@type': 'City', name: 'Liverpool' },
    serviceType: 'Pressure Washing',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: 80, maxPrice: 250, priceCurrency: 'GBP' }
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does pressure washing cost in Liverpool?',
        acceptedAnswer: { '@type': 'Answer', text: 'Pressure washing in Liverpool costs £80–£250 depending on area size and surface type. A standard driveway runs £80–£140; a patio or courtyard £90–£160; larger block-paved estates in Norris Green or Croxteth £140–£250. Commercial areas such as Port of Liverpool approach roads are quoted on site.' }
      },
      {
        '@type': 'Question',
        name: 'How often should I pressure wash my driveway in Liverpool?',
        acceptedAnswer: { '@type': 'Answer', text: 'Liverpool driveways should be pressure washed every 12–18 months. The Atlantic-influenced 800 mm+ annual rainfall, combined with salt air from the River Mersey and Irish Sea, accelerates algae, moss and black-spot lichen growth. Driveways near Sefton Park or Calderstones Park benefit from twice-yearly cleaning during autumn leaf-fall.' }
      },
      {
        '@type': 'Question',
        name: 'Is pressure washing safe for block paving?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — block paving can be safely pressure washed at 80–120 bar with a rotating surface cleaner. On estates in Norris Green, Croxteth and Speke, we use a fan nozzle rather than a pencil jet to avoid dislodging pointing compound. After cleaning, kiln-dried sand is re-applied to joint lines at no extra charge.' }
      },
      {
        '@type': 'Question',
        name: 'Can pressure washing remove oil stains from driveways?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. On-street parking oil staining is common in Liverpool\'s terraced streets (L4–L6, L7, L8). Our 180 °C hot-water pressure machine combined with a citrus-based degreaser pre-treatment removes fresh and weathered motor-oil stains without damaging the substrate. Older stains may require a second pass.' }
      },
      {
        '@type': 'Question',
        name: 'How long does a pressure washing job take in Liverpool?',
        acceptedAnswer: { '@type': 'Answer', text: 'A standard Liverpool driveway takes 1–2 hours. A large natural-stone patio in Woolton, Allerton or Childwall takes 2–4 hours. Commercial surfaces such as Newton Business Park or Liverpool waterfront forecourts are typically completed within a half-day. We carry our own water supply and do not require access to your household tap.' }
      }
    ]
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
      { '@type': 'ListItem', position: 2, name: 'Pressure Washing', item: 'https://rrmexternalcleaningspecialist.co.uk/services/pressure-washing' },
      { '@type': 'ListItem', position: 3, name: 'Liverpool', item: 'https://rrmexternalcleaningspecialist.co.uk/services/pressure-washing/liverpool' }
    ]
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* LLM entity disambiguation — screen-reader only */}
      <p className="sr-only">
        R.R.M Exterior Cleaning Specialist provides professional pressure washing services in Liverpool, Merseyside, covering all postcodes L1–L36 including Woolton, Allerton, Childwall, Norris Green, Croxteth, Speke, Anfield, Toxteth, Wavertree, Kensington and Liverpool Waterfront. Contact: 07845 463877.
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
                <Link href="/services/pressure-washing" className="text-primary hover:text-accent transition-colors" itemProp="item"><span itemProp="name">Pressure Washing</span></Link>
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
                Pressure Washing Liverpool
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Professional driveway, patio and block-paving cleaning across all Liverpool postcodes L1–L36. Hot-water machine for oil stain removal. AggregateRating 5.0 ★ — 47 verified reviews.
              </p>
              <Button size="lg" asChild>
                <a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />07845 463877 — Free Quote</a>
              </Button>
            </div>
          </div>
        </section>

        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto">

            {/* Featured snippet — price anchor */}
            <div className="border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-950/20 pl-5 py-4 mb-10 rounded-r-lg">
              <p className="text-foreground font-medium">
                <strong>Pressure washing in Liverpool costs £80–£250.</strong> Standard driveways run £80–£140; block-paved estates in Norris Green or Croxteth £120–£200; large natural-stone patios in Woolton or Childwall £140–£250. Hot-water oil-stain removal available for L4–L8 terraced streets. Call 07845 463877 for a same-day quote.
              </p>
            </div>

            {/* Why Liverpool driveways need it */}
            <section className="mb-10" aria-labelledby="why-liverpool">
              <h2 id="why-liverpool" className="text-2xl font-bold text-foreground mb-4">Why Liverpool Driveways & Patios Need Regular Pressure Washing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Liverpool's maritime climate — 800 mm+ Atlantic rainfall, relative humidity consistently above 80 % and persistent salt air from the River Mersey and Irish Sea — creates near-perfect conditions for algae, moss and black-spot lichen growth on hard surfaces. Block-paved driveways in post-war estates like <strong>Norris Green (L11)</strong>, <strong>Croxteth (L11/L12)</strong> and <strong>Speke (L24)</strong> are particularly susceptible because inter-block sand channels retain moisture long after rain clears.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Natural-stone driveways and patios in <strong>Woolton (L25)</strong>, <strong>Allerton (L18/L19)</strong> and <strong>Childwall (L16)</strong> develop orange and green algae staining within 18–24 months. Victorian and Edwardian properties in <strong>Anfield (L4)</strong>, <strong>Kensington (L7)</strong> and <strong>Toxteth (L8)</strong> suffer persistent on-street parking oil staining on their front flags and shared-access ginnels. We treat all surface types with calibrated pressure — 60–150 bar — and pH-appropriate detergents.
              </p>
            </section>

            {/* Surface types grid */}
            <section className="mb-10" aria-labelledby="surfaces">
              <h2 id="surfaces" className="text-2xl font-bold text-foreground mb-6">Surfaces We Clean in Liverpool</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Block Paving Driveways', desc: 'Norris Green, Croxteth, Speke — 80–120 bar + rotating surface cleaner + joint sand reinstatement.' },
                  { title: 'Natural Stone Patios', desc: 'Woolton, Allerton, Childwall — sandstone, Indian slate, limestone — pH-neutral detergent, low pressure.' },
                  { title: 'Concrete & Tarmac', desc: 'Estate roads, rear-access lanes, commercial yards — hot-water degreaser for oil contamination.' },
                  { title: 'Decking & Timber', desc: 'Pressure at 40–60 bar with wood brightener to remove algae without raising grain fibres.' },
                  { title: 'Flags & Paviors', desc: 'Victorian sandstone flags in L4–L8 terraced streets — fan nozzle to protect mortar joints.' },
                  { title: 'Commercial Forecourts', desc: 'Liverpool Waterfront, Baltic Triangle, Speke industrial — heavy-duty hot-water extraction.' },
                ].map(s => (
                  <div key={s.title} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Oil stain section */}
            <section className="mb-10 bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800" aria-labelledby="oil-stains">
              <h2 id="oil-stains" className="text-2xl font-bold text-foreground mb-3">Oil Stain Removal — Liverpool Terraced Streets</h2>
              <p className="text-muted-foreground leading-relaxed">
                On-street parking means motor-oil drips accumulate on the flags and kerb aprons of terraced properties throughout <strong>L4 (Anfield/Walton)</strong>, <strong>L5 (Everton/Kirkdale)</strong>, <strong>L6 (Fairfield/Kensington)</strong>, <strong>L7 (Edge Hill)</strong> and <strong>L8 (Toxteth/Dingle)</strong>. Our <strong>180 °C hot-water pressure machine</strong> emulsifies petroleum residues that cold-water equipment cannot shift. Pre-treatment with a citrus-based degreaser applied 15 minutes before washing improves first-pass removal rates significantly. Older multi-year staining may require a second visit at a reduced revisit rate.
              </p>
            </section>

            {/* PAA / FAQ */}
            <section className="mb-10" aria-labelledby="faq" itemScope itemType="https://schema.org/FAQPage">
              <h2 id="faq" className="text-2xl font-bold text-foreground mb-6">Pressure Washing Liverpool — Questions & Answers</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'How much does pressure washing cost in Liverpool?',
                    a: 'Pressure washing in Liverpool costs £80–£250 depending on area size and surface type. A standard driveway runs £80–£140; a patio or courtyard £90–£160; larger block-paved estates in Norris Green or Croxteth £140–£250. Commercial forecourts at Liverpool Waterfront are quoted on site.'
                  },
                  {
                    q: 'How often should I pressure wash my driveway in Liverpool?',
                    a: 'Every 12–18 months for most Liverpool driveways. Atlantic rainfall, salt air from the Mersey and Irish Sea, and high humidity accelerate algae and moss growth. Driveways near Sefton Park or Calderstones Park benefit from twice-yearly cleaning to handle autumn leaf tannin staining.'
                  },
                  {
                    q: 'Is pressure washing safe for block paving?',
                    a: 'Yes — block paving is safely cleaned at 80–120 bar using a rotating surface cleaner with a fan nozzle rather than a pencil jet. This avoids dislodging joint-pointing compound. After cleaning, kiln-dried sand is re-broadcast into joint lines at no extra charge, which is important on Norris Green and Speke block-paved estates.'
                  },
                  {
                    q: 'Can pressure washing remove oil stains from a driveway?',
                    a: 'Yes. Our 180 °C hot-water pressure machine combined with a citrus-based degreaser pre-treatment removes fresh and weathered motor-oil stains. On-street parking oil staining in Liverpool\'s terraced streets (L4–L8) is our most common request. Older stains may require a second pass.'
                  },
                  {
                    q: 'How long does pressure washing take in Liverpool?',
                    a: 'A standard driveway takes 1–2 hours. A large natural-stone patio in Woolton or Childwall takes 2–4 hours. Commercial surfaces at Liverpool Waterfront or Baltic Triangle are typically half a day. We carry our own water supply — no household tap access needed.'
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
            <section className="mb-10" aria-labelledby="related-liverpool">
              <h2 id="related-liverpool" className="text-xl font-bold text-foreground mb-4">Other Exterior Cleaning Services in Liverpool</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { label: 'Gutter Cleaning Liverpool', href: '/services/gutter-cleaning/liverpool' },
                  { label: 'Roof Cleaning Liverpool', href: '/services/roof-cleaning/liverpool' },
                  { label: 'Render Cleaning Liverpool', href: '/services/render-cleaning/liverpool' },
                  { label: 'Cladding Cleaning Liverpool', href: '/services/cladding-cleaning/liverpool' },
                  { label: 'Exterior Cleaning Liverpool', href: '/services/exterior-cleaning/liverpool' },
                  { label: 'Liverpool Location Hub', href: '/locations/liverpool' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="text-sm text-primary hover:text-accent underline underline-offset-2 transition-colors">{l.label}</Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-3">Get a Free Pressure Washing Quote in Liverpool</h2>
              <p className="text-muted-foreground mb-6">Covering all Liverpool postcodes L1–L36. Same-day quotes available Mon–Sat.</p>
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
