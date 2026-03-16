import Link from 'next/link';
import { ChevronRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cladding Cleaning Huyton',
  description:
    'Professional cladding cleaning in Huyton, Knowsley. Soft washing for UPVC, metal composite and timber-effect cladding on residential and commercial properties across L36.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'R.R.M External Cleaning Specialist',
    telephone: '+447845463877',
    address: { '@type': 'PostalAddress', addressRegion: 'North West England', addressCountry: 'GB' },
  },
  areaServed: { '@type': 'City', name: 'Huyton', containedInPlace: { '@type': 'AdministrativeArea', name: 'Knowsley' } },
  serviceType: 'Cladding Cleaning',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' },
  offers: { '@type': 'Offer', priceCurrency: 'GBP', price: '100', priceSpecification: { '@type': 'PriceSpecification', minPrice: '100', maxPrice: '280', priceCurrency: 'GBP' } },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does cladding cleaning cost in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cladding cleaning in Huyton typically costs £100–£280 for a standard semi-detached home, depending on the number of storeys, the cladding type, and the level of algae or pollution build-up. Commercial properties on Knowsley Business Park or along the Prescot Road corridor are priced per square metre. We provide free written quotes after inspecting the property.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is soft washing safe for UPVC cladding panels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Soft washing is the correct method for UPVC cladding. We apply a pH-neutral biodegradable solution at below 100 PSI — this lifts algae, black mould, and organic staining without warping the panels, cracking fixings, or forcing water behind the board joins. High-pressure washing on UPVC can cause irreversible damage to the surface and fixings.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I remove green algae from cladding in Merseyside?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Green algae on Merseyside cladding is caused by the region's high Atlantic rainfall (800 mm+ per year), low winter sunshine hours, and persistent humidity. The correct removal method is biocide soft washing — a biodegradable algaecide is applied at low pressure, allowed to dwell, then gently rinsed. The residual biocide continues killing spores for weeks after cleaning, slowing re-growth significantly.",
      },
    },
    {
      '@type': 'Question',
      name: 'How often should cladding be cleaned in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In Huyton's wet Merseyside climate, residential cladding typically needs professional cleaning every 2–3 years. North-facing elevations and shaded panels on post-war estates in Dovecot, Stockbridge Village, and Page Moss may need attention every 18–24 months due to persistent damp and limited drying time. Commercial cladding on Knowsley Business Park should be cleaned every 1–2 years to maintain a professional appearance.",
      },
    },
    {
      '@type': 'Question',
      name: 'What types of cladding do you clean in Huyton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We clean all cladding types found across Huyton and the wider Knowsley borough: UPVC panel cladding on post-war social housing estates, metal composite cladding on commercial units at Knowsley Business Park, timber-effect composite boarding on extensions and new-builds, and render board systems on refurbished properties. Each material gets a tailored treatment — UPVC requires pH-neutral solutions, metal cladding requires specialist degreasers, and composite boarding needs a gentle biocide rinse.",
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Cladding Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/cladding-cleaning' },
    { '@type': 'ListItem', position: 3, name: 'Huyton', item: 'https://rrmexternalcleaningspecialist.co.uk/services/cladding-cleaning/huyton' },
  ],
};

const faqs = [
  {
    q: 'How much does cladding cleaning cost in Huyton?',
    a: 'Cladding cleaning in Huyton typically costs £100–£280 for a standard semi-detached home, depending on storeys, cladding type, and contamination level. Commercial properties are priced per square metre. Free written quotes provided after property inspection.',
  },
  {
    q: 'Is soft washing safe for UPVC cladding panels?',
    a: 'Yes. We apply a pH-neutral biodegradable solution below 100 PSI — lifting algae, black mould, and staining without warping panels, cracking fixings, or forcing water behind board joins. High-pressure washing on UPVC risks irreversible damage.',
  },
  {
    q: 'How do I remove green algae from cladding in Merseyside?',
    a: "Green algae thrives in Merseyside's 800 mm+ annual rainfall and low sunshine hours. Correct removal uses biocide soft washing — a biodegradable algaecide applied at low pressure, allowed to dwell, then gently rinsed. Residual biocide continues killing spores for weeks, slowing re-growth.",
  },
  {
    q: 'How often should cladding be cleaned in Huyton?',
    a: 'Residential cladding in Huyton typically needs cleaning every 2–3 years. North-facing elevations on Dovecot, Stockbridge Village, and Page Moss estates may need attention every 18–24 months. Commercial cladding on Knowsley Business Park should be cleaned annually or bi-annually.',
  },
  {
    q: 'What types of cladding do you clean in Huyton?',
    a: 'We clean UPVC panels on post-war social housing estates, metal composite cladding on Knowsley Business Park commercial units, timber-effect composite boarding on extensions and new-builds, and render board systems on refurbished properties — each with a tailored treatment.',
  },
];

export function CladdingHuyton() {
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <nav className="bg-secondary/50" aria-label="Breadcrumb">
          <div className="container-custom py-4">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li><Link href="/" className="text-primary hover:text-accent transition-colors">Home</Link></li>
              <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
              <li><Link href="/services/cladding-cleaning" className="text-primary hover:text-accent transition-colors">Cladding Cleaning</Link></li>
              <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
              <li className="text-primary-foreground/70" aria-current="page">Huyton</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">
            {/* LLM entity paragraph — machine-readable context for AI Overviews */}
            <p className="sr-only">
              R.R.M External Cleaning Specialist provides professional cladding cleaning in Huyton, Knowsley (postcode L36), serving post-war residential estates including Dovecot, Stockbridge Village, and Page Moss, as well as commercial properties on Knowsley Business Park. Services include UPVC panel soft washing, metal composite cladding cleaning, timber-effect boarding treatment, and render board systems. The company uses biodegradable biocide solutions applied below 100 PSI, is fully insured, and holds 47 five-star reviews. Contact: 07845 463877.
            </p>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cladding Cleaning in Huyton — Soft Wash Specialists
            </h1>

            {/* Featured snippet paragraph */}
            <p className="text-lg text-muted-foreground mb-4 border-l-4 border-amber-400 pl-4 bg-amber-50/10 py-2 rounded-r">
              <strong>Cladding cleaning in Huyton costs £100–£280</strong> for a typical residential property. R.R.M uses biodegradable biocide soft washing below 100 PSI — safe for UPVC, metal composite, and timber-effect boarding — removing green algae, black mould, and Merseyside pollution build-up without risk of panel warping or fixing damage.
            </p>

            <p className="text-muted-foreground mb-6">
              Huyton sits within Knowsley borough and carries a diverse housing stock spanning Victorian terraces near Roby, post-war UPVC-clad estates in Dovecot, Stockbridge Village, and Page Moss, and modern commercial units on Knowsley Business Park. All of these cladding types accumulate algae, lichens, and black mould in Merseyside's consistently wet climate — the region receives over 800 mm of Atlantic rainfall per year with low winter sunshine hours that prevent surfaces drying naturally. Professional soft washing removes biological growth and applies a residual biocide that protects the surface for 2–3 years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <a href="tel:+447845463877">
                  <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Call: 07845 463877
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Free Quote</Link>
              </Button>
            </div>
          </div>
        </article>

        <div className="container-custom section-padding">
          <div className="max-w-4xl">

            {/* Huyton Cladding Context */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cladding Types Across Huyton and Knowsley</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Post-war social housing estates in Dovecot, Stockbridge Village, and Page Moss were built with UPVC panel cladding during 1960s–1980s refurbishments, replacing original brick with low-maintenance plastic boarding. Decades of Merseyside humidity have caused these panels to accumulate thick layers of green algae and black mould in north-facing bays — unsightly and accelerating surface degradation if left untreated. Soft washing lifts contamination and applies a biocide that prevents re-growth for 24–36 months.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                On Knowsley Business Park and along the Prescot Road commercial corridor, metal composite and aluminium cassette cladding on industrial units and retail premises accumulates diesel particulates from the M62 motorway corridor and biological growth from standing water on flat rooflines. These materials require specialist alkaline degreasers followed by a neutral rinse — power washing metal cladding risks denting panels and compromising powder-coat finishes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Newer extensions and self-builds in Huyton Village, Tarbock, and Cronton increasingly use timber-effect composite boarding — a low-maintenance alternative to natural wood that still accumulates surface algae in shaded conditions. We treat composite boarding with a gentle biocide at below 80 PSI, preserving the embossed wood-grain finish.
              </p>
            </section>

            {/* Why Soft Wash */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Why Soft Washing — Not Pressure Washing — for Cladding</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Prevents Panel Damage',
                    body: 'High-pressure water forces behind UPVC joints and can warp or crack panels. Below 100 PSI, soft washing cleans the surface without stressing fixings or board edges.',
                  },
                  {
                    title: 'Kills Algae at the Root',
                    body: 'Pressure alone blasts surface algae but leaves spores embedded in the cladding. Our biocide kills the organism at root level, so surfaces stay clean 3–4× longer than pressure-washed panels.',
                  },
                  {
                    title: 'Protects Powder-Coat and UPVC Colour',
                    body: 'High pressure abrades powder-coated metal and oxidises UPVC, causing fading and chalking. pH-neutral solutions clean without removing the protective surface layer.',
                  },
                  {
                    title: 'Safe Around Glazing and Seals',
                    body: 'Cladding panels sit adjacent to window frames and silicone seals. Low pressure prevents water ingress behind window reveals, protecting interior walls and insulation from damp.',
                  },
                ].map(({ title, body }) => (
                  <div key={title} className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                      <p className="text-muted-foreground text-sm">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Cladding Cleaning Process in Huyton</h2>
              <div className="space-y-4">
                {[
                  { n: 1, title: 'Cladding Type Assessment', body: 'We identify the cladding material — UPVC, metal composite, timber-effect, or render board — and note contamination type (algae, mould, oxidisation, pollution) to select the correct solution and pressure setting.' },
                  { n: 2, title: 'Protect Surroundings', body: 'Neighbouring windows, soffit vents, and planted borders are covered or wetted down before treatment begins, preventing chemical contact with sensitive surfaces.' },
                  { n: 3, title: 'Biocide Application', body: 'A biodegradable algaecide is applied from the bottom upward at low pressure, allowed to dwell for 10–20 minutes to penetrate the organic growth and kill spores at root level.' },
                  { n: 4, title: 'Low-Pressure Rinse', body: 'Panels are rinsed top-to-bottom at below 100 PSI, removing loosened contamination without forcing water behind board joints or window reveals.' },
                  { n: 5, title: 'Inspection and Schedule', body: 'We carry out a final walkround inspection and advise on the next recommended clean — typically 2–3 years for residential and 1–2 years for commercial properties in the Knowsley area.' },
                ].map(({ n, title, body }) => (
                  <div key={n} className="flex gap-4">
                    <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center font-semibold flex-shrink-0">{n}</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                      <p className="text-muted-foreground text-sm">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Property Types */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Cladding We Clean Across Knowsley</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { type: 'UPVC Panel Cladding', detail: 'Post-war estates — Dovecot, Stockbridge Village, Page Moss' },
                  { type: 'Metal Composite Cladding', detail: 'Knowsley Business Park, Prescot Road commercial units' },
                  { type: 'Timber-Effect Composite', detail: 'Huyton Village, Tarbock, Cronton extensions & new-builds' },
                  { type: 'Render Board Systems', detail: 'Refurbished council and social housing across Knowsley' },
                  { type: 'Aluminium Cassette Panels', detail: 'Industrial and retail fascias off the M62 corridor' },
                  { type: 'Fibre Cement Cladding', detail: 'Modern residential developments in Whiston and Prescot' },
                ].map(({ type, detail }) => (
                  <div key={type} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{type}</h3>
                    <p className="text-sm text-muted-foreground">{detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ — PAA targets with microdata */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Cladding Cleaning Huyton — Frequently Asked Questions</h2>
              <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
                {faqs.map(({ q, a }) => (
                  <details
                    key={q}
                    className="bg-secondary/30 rounded-lg p-6 cursor-pointer group"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <summary className="font-semibold text-foreground flex justify-between items-center list-none" itemProp="name">
                      {q}
                      <span className="text-accent group-open:rotate-180 transition-transform ml-2 flex-shrink-0">▼</span>
                    </summary>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-muted-foreground mt-4 text-sm" itemProp="text">{a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Huyton Services Grid */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">All Huyton Cleaning Services</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { href: '/services/gutter-cleaning/huyton', title: 'Gutter Cleaning Huyton', desc: 'Debris removal, downpipe flushing, flow testing' },
                  { href: '/services/roof-cleaning/huyton', title: 'Roof Cleaning Huyton', desc: 'Soft wash moss and algae removal, biocide treatment' },
                  { href: '/services/render-cleaning/huyton', title: 'Render Cleaning Huyton', desc: 'K-Rend, monocouche and pebbledash soft washing' },
                  { href: '/services/pressure-washing/huyton', title: 'Pressure Washing Huyton', desc: 'Driveways, block paving, commercial hard surfaces' },
                  { href: '/services/exterior-cleaning/huyton', title: 'Exterior Cleaning Huyton', desc: 'Full exterior package across all Huyton property types' },
                  { href: '/locations/huyton', title: 'Huyton Location Hub', desc: 'All R.R.M services in the Huyton and Knowsley area' },
                ].map(({ href, title, desc }) => (
                  <Link key={href} href={href} className="group p-5 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Nearby Locations */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Also Serving Nearby Areas</h2>
              <div className="flex flex-wrap gap-2">
                {['Wavertree', 'Halewood', 'St Helens', 'Prescot', 'Widnes', 'Warrington', 'Liverpool'].map((area) => (
                  <span key={area} className="px-3 py-1 bg-secondary/50 rounded-full text-sm text-muted-foreground border border-secondary">{area}</span>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Free Cladding Cleaning Quote in Huyton</h2>
              <p className="text-muted-foreground mb-6">
                Call R.R.M for a no-obligation assessment of your cladding. We cover all of Huyton, Knowsley, and surrounding Merseyside postcodes. Fully insured, 47 five-star reviews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:+447845463877">
                    <Phone className="h-5 w-5 mr-2" />
                    07845 463877
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Request Quote Online</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Huyton &amp; Knowsley specialists · Fully insured · Free written quote · 47 five-star reviews
              </p>
            </section>

          </div>
        </div>
      </main>
    </Layout>
  );
}
