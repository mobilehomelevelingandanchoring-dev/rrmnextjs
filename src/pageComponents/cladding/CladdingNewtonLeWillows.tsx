import Link from 'next/link';
import { ChevronRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cladding Cleaning Newton-le-Willows',
  description:
    'Professional cladding cleaning in Newton-le-Willows, WA12. Soft wash for UPVC panels on post-war estates, metal composite cladding on Newton Business Park, and timber-effect composite on new-builds. Biodegradable biocide below 100 PSI.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'R.R.M External Cleaning Specialist',
    telephone: '+447845463877',
    address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
  },
  areaServed: { '@type': 'City', name: 'Newton-le-Willows', containedInPlace: { '@type': 'AdministrativeArea', name: 'St Helens Metropolitan Borough' } },
  serviceType: 'Cladding Cleaning',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' },
  offers: { '@type': 'Offer', priceCurrency: 'GBP', priceSpecification: { '@type': 'PriceSpecification', minPrice: '100', maxPrice: '280', priceCurrency: 'GBP' } },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does cladding cleaning cost in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cladding cleaning in Newton-le-Willows (WA12) typically costs £100–£280 for a standard residential property, depending on the number of storeys, the cladding type, and the level of algae or pollution staining. Commercial cladding on Newton Business Park and along the East Lancashire Road is priced per square metre. Free written quotes after inspecting the property.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is soft washing safe for UPVC cladding in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Soft washing is the only safe method for UPVC cladding. We apply a pH-neutral biodegradable solution at below 100 PSI — lifting algae, black mould, and M6/M62 diesel staining without warping panels, cracking plastic fixings, or forcing water behind board joints. High-pressure washing on UPVC can cause permanent warping and splits at panel seams.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I remove green algae from cladding in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Green algae on WA12 cladding is driven by the North West's 700–800 mm annual rainfall, low winter sunshine hours, and diesel particulates from the M6/M62 junction that act as algae nutrients. The correct removal method is biocide soft washing — a biodegradable algaecide applied at low pressure, allowed to dwell for 10–20 minutes to kill the organism at root level, then gently rinsed. Residual biocide continues working for weeks post-cleaning.",
      },
    },
    {
      '@type': 'Question',
      name: 'How often should cladding be cleaned in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In Newton-le-Willows' North West climate, residential cladding typically needs professional cleaning every 2–3 years. North-facing panels and cladding on properties within a mile of the M6/M62 junction — where diesel particulates are heavier — may need attention every 18–24 months. Commercial cladding on Newton Business Park should be cleaned every 1–2 years to maintain a professional appearance and comply with maintenance obligations.",
      },
    },
    {
      '@type': 'Question',
      name: 'What types of cladding do you clean in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We clean all cladding types found across WA12: UPVC panel cladding on post-war residential estates (Newton Common, Parkside), metal composite and aluminium cassette cladding on Newton Business Park commercial units and along the East Lancashire Road, timber-effect composite boarding on modern self-builds in Newton-le-Willows village, and render board systems on refurbished housing. Each material gets a tailored treatment — UPVC requires pH-neutral solutions, metal needs specialist degreasers, and timber-effect composite needs a gentle biocide rinse.',
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
    { '@type': 'ListItem', position: 3, name: 'Newton-le-Willows', item: 'https://rrmexternalcleaningspecialist.co.uk/services/cladding-cleaning/newton-le-willows' },
  ],
};

const faqs = [
  {
    q: 'How much does cladding cleaning cost in Newton-le-Willows?',
    a: 'Cladding cleaning in WA12 typically costs £100–£280 for a standard home. Commercial cladding on Newton Business Park is priced per square metre. Free written quotes after inspection.',
  },
  {
    q: 'Is soft washing safe for UPVC cladding in Newton-le-Willows?',
    a: 'Yes. pH-neutral biodegradable solution applied below 100 PSI removes algae and M6/M62 diesel staining without warping panels or cracking fixings. High-pressure washing on UPVC causes permanent warping and panel seam splits.',
  },
  {
    q: 'How do I remove green algae from cladding in Newton-le-Willows?',
    a: "Green algae in WA12 is driven by 700–800 mm annual rainfall, low winter sunshine, and M6/M62 diesel particulates. Biocide soft wash kills the organism at root level at low pressure. Residual biocide continues working post-cleaning to slow re-growth.",
  },
  {
    q: 'How often should cladding be cleaned in Newton-le-Willows?',
    a: 'Every 2–3 years for residential in WA12. North-facing panels and properties near the M6/M62 junction may need attention every 18–24 months. Commercial cladding on Newton Business Park should be cleaned every 1–2 years.',
  },
  {
    q: 'What types of cladding do you clean in Newton-le-Willows?',
    a: 'UPVC panels on Newton Common and Parkside estates, metal composite and aluminium cassette on Newton Business Park, timber-effect composite on Newton-le-Willows village self-builds, and render board systems on refurbished housing — each with a tailored method.',
  },
];

export function CladdingNewtonLeWillows() {
  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="min-h-screen bg-background">
        <nav className="bg-secondary/50" aria-label="Breadcrumb">
          <div className="container-custom py-4">
            <ol className="flex items-center gap-2 text-sm flex-wrap">
              <li><Link href="/" className="text-primary hover:text-accent transition-colors">Home</Link></li>
              <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
              <li><Link href="/services/cladding-cleaning" className="text-primary hover:text-accent transition-colors">Cladding Cleaning</Link></li>
              <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
              <li className="text-primary-foreground/70" aria-current="page">Newton-le-Willows</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">
            <p className="sr-only">
              R.R.M External Cleaning Specialist provides professional cladding cleaning in Newton-le-Willows, WA12, covering UPVC panel cladding on Newton Common and Parkside post-war estates, metal composite cladding on Newton Business Park and East Lancashire Road commercial properties, and timber-effect composite on modern self-builds. Biodegradable biocide soft washing below 100 PSI. Fully insured, 47 five-star reviews. Based at 9 Noon Ct WA12 8QY. Contact: 07845 463877.
            </p>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cladding Cleaning in Newton-le-Willows — Soft Wash Specialists WA12
            </h1>

            <p className="text-lg text-muted-foreground mb-4 border-l-4 border-amber-400 pl-4 bg-amber-50/10 py-2 rounded-r">
              <strong>Cladding cleaning in Newton-le-Willows costs £100–£280</strong> for a standard property. R.R.M uses biodegradable biocide soft washing below 100 PSI — the correct method for UPVC, metal composite, and timber-effect cladding across WA12. Pressure washing UPVC cladding warps panels and splits joints; our method removes algae, black mould, and M6/M62 diesel staining safely.
            </p>

            <p className="text-muted-foreground mb-6">
              Newton-le-Willows sits at the M6 (J23) and M62 (J9) junction — one of the busiest motorway interchanges in the North West. Diesel and NOx emissions from this corridor settle on cladding surfaces across WA12, combining with the region's high annual rainfall to accelerate algae and black mould growth. UPVC cladding on post-war estates in Newton Common and Parkside, metal composite panels on Newton Business Park, and timber-effect boarding on newer self-builds all accumulate contamination that requires tailored treatment to remove safely.
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

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Cladding Types Across Newton-le-Willows WA12</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Post-war residential estates in Newton Common and Parkside include properties with UPVC panel cladding added during 1970s–1990s refurbishments. After 30–40 years these panels carry thick green algae on north-facing elevations and black mould in shaded bay areas. pH-neutral biocide at below 100 PSI removes contamination without stressing ageing plastic fixings or forcing water behind the panels.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Commercial units at Newton Business Park and along the East Lancashire Road (A580) use metal composite cladding and aluminium cassette panels. These attract diesel soot from the M6/M62 junction and require alkaline degreaser pre-treatment followed by a neutral rinse — power washing metal panels risks denting and compromising powder-coat finishes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Modern self-builds in Newton-le-Willows village and around the Crow Lane / Haydock Lane area increasingly use timber-effect composite boarding. Despite being designed as low-maintenance, composite boarding accumulates surface algae in shaded conditions within 2–3 years. Gentle biocide at below 80 PSI preserves the embossed wood-grain texture.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Cladding We Clean Across Newton-le-Willows</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { type: 'UPVC Panel Cladding', detail: 'Newton Common, Parkside post-war estates — pH-neutral biocide below 100 PSI' },
                  { type: 'Metal Composite Cladding', detail: 'Newton Business Park, East Lancashire Road commercial units' },
                  { type: 'Timber-Effect Composite', detail: 'Newton-le-Willows village self-builds — gentle biocide preserves wood-grain texture' },
                  { type: 'Aluminium Cassette Panels', detail: 'Industrial and retail fascias near M6/M62 junction' },
                  { type: 'Fibre Cement Cladding', detail: 'Modern residential and mixed-use developments in WA12' },
                  { type: 'Render Board Systems', detail: 'Refurbished housing across Newton-le-Willows borough' },
                ].map(({ type, detail }) => (
                  <div key={type} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{type}</h3>
                    <p className="text-sm text-muted-foreground">{detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Cladding Cleaning Process</h2>
              <div className="space-y-4">
                {[
                  { n: 1, title: 'Cladding Type Assessment', body: 'We identify the material — UPVC, metal composite, timber-effect, or render board — and note contamination type (algae, diesel soot, mould) to select the correct solution and pressure.' },
                  { n: 2, title: 'Protect Surroundings', body: 'Window glazing, sill joints, planted borders, and drainage gulleys covered or wetted down before treatment begins.' },
                  { n: 3, title: 'Biocide Application', body: 'Biodegradable algaecide applied bottom-to-top at below 100 PSI. Dwell time 10–20 minutes to kill algae at root level.' },
                  { n: 4, title: 'Low-Pressure Rinse', body: 'Panels rinsed top-to-bottom at below 100 PSI using fan-pattern nozzles — no water forced behind joints or window reveals.' },
                  { n: 5, title: 'Inspection & Schedule', body: 'Final walkround, condition notes provided, and next clean recommended — 2–3 years for residential, 1–2 years for commercial WA12 properties.' },
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

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Cladding Cleaning Newton-le-Willows — Frequently Asked Questions</h2>
              <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
                {faqs.map(({ q, a }) => (
                  <details key={q} className="bg-secondary/30 rounded-lg p-6 cursor-pointer group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">All Newton-le-Willows Cleaning Services</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { href: '/services/gutter-cleaning/newton-le-willows', title: 'Gutter Cleaning Newton-le-Willows', desc: 'Cast iron and UPVC gutter clearing, downpipe flushing' },
                  { href: '/services/roof-cleaning/newton-le-willows', title: 'Roof Cleaning Newton-le-Willows', desc: 'Soft wash moss and algae removal, biocide treatment' },
                  { href: '/services/render-cleaning/newton-le-willows', title: 'Render Cleaning Newton-le-Willows', desc: 'K-Rend, monocouche and sand-cement soft washing' },
                  { href: '/services/pressure-washing/newton-le-willows', title: 'Pressure Washing Newton-le-Willows', desc: 'Driveways, block paving, oil stain removal, commercial' },
                  { href: '/services/exterior-cleaning/newton-le-willows', title: 'Exterior Cleaning Newton-le-Willows', desc: 'Full exterior package for all WA12 property types' },
                  { href: '/locations/newton-le-willows', title: 'Newton-le-Willows Location Hub', desc: 'All R.R.M services across WA12' },
                ].map(({ href, title, desc }) => (
                  <Link key={href} href={href} className="group p-5 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Free Cladding Cleaning Quote — Newton-le-Willows WA12</h2>
              <p className="text-muted-foreground mb-6">
                R.R.M is based in Newton-le-Willows (WA12 8QY). Call for a same-week assessment. Fully insured, 47 five-star reviews, est. 2016.
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
                Local to WA12 · Fully insured · Free written quote · 47 five-star reviews
              </p>
            </section>

          </div>
        </div>
      </main>
    </Layout>
  );
}
