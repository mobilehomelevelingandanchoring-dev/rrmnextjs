import Link from 'next/link';
import { ChevronRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Render Cleaning Newton-le-Willows',
  description:
    'Professional render cleaning in Newton-le-Willows, WA12. Soft wash treatment for K-Rend on new-builds and extensions, monocouche on refurbished properties, and sand-and-cement render on Earlestown Victorian terraces. Algae, moss and pollution removal.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'R.R.M External Cleaning Specialist',
    telephone: '+447845463877',
    address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
  },
  areaServed: { '@type': 'City', name: 'Newton-le-Willows', containedInPlace: { '@type': 'AdministrativeArea', name: 'St Helens Metropolitan Borough' } },
  serviceType: 'Render Cleaning',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' },
  offers: { '@type': 'Offer', priceCurrency: 'GBP', priceSpecification: { '@type': 'PriceSpecification', minPrice: '120', maxPrice: '450', priceCurrency: 'GBP' } },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you pressure wash K-Rend in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. K-Rend and other polymer-modified render systems should never be pressure washed. High pressure erodes the textured surface, removes colour from through-coloured coats, and — most critically — forces water into the substrate, causing delamination and internal damp. The correct method is soft washing: biodegradable biocide applied at below 100 PSI, allowed to dwell, then gently rinsed. This removes algae and pollution without touching the render structure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does render cleaning cost in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Render cleaning in Newton-le-Willows (WA12) typically costs £120–£450 depending on the property size, the number of rendered elevations, and the level of algae or pollution staining. A standard semi-detached with render on the front elevation only is at the lower end; a fully rendered detached house with ground-floor extensions is at the higher end. Free written quotes provided after inspecting the property.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I remove green algae from render in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Green algae on Newton-le-Willows render is caused by the North West's high rainfall and the diesel particulates from the M6 (Junction 23) and M62 (Junction 9) corridors that run close to WA12. The correct removal method is biocide soft washing — a biodegradable algaecide is applied at low pressure, allowed to dwell for 10–20 minutes to kill the organism at root level, then gently rinsed away. The residual biocide continues working for weeks after cleaning, slowing re-growth significantly.",
      },
    },
    {
      '@type': 'Question',
      name: 'How often should render be cleaned in Newton-le-Willows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In Newton-le-Willows' North West climate, rendered properties typically need professional cleaning every 3–5 years. North-facing elevations and walls shaded by mature trees in Earlestown may need attention every 2–3 years. Properties close to the M6/M62 junction attract more diesel particulate staining and may need more frequent cleaning. Applying a breathable sealant after cleaning can extend the interval to 5–7 years.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is monocouche render and how is it cleaned in WA12?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Monocouche (single-coat) render is a pre-coloured, ready-mix product applied in a single pass — popular on housing refurbishments and new-builds in Newton-le-Willows from the 1990s onward. The colour is integral to the mix rather than applied as a topcoat, meaning light surface cleaning doesn't remove colour. We clean monocouche with pH-neutral biocide solution at below 100 PSI — aggressive enough to remove biological growth but gentle enough to preserve the rendered surface texture and colour uniformity.",
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Render Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/render-cleaning' },
    { '@type': 'ListItem', position: 3, name: 'Newton-le-Willows', item: 'https://rrmexternalcleaningspecialist.co.uk/services/render-cleaning/newton-le-willows' },
  ],
};

const faqs = [
  {
    q: 'Can you pressure wash K-Rend in Newton-le-Willows?',
    a: 'No. High pressure erodes the textured surface, removes through-colour, and forces water into the substrate causing delamination and internal damp. Soft washing — biocide below 100 PSI, dwell, gentle rinse — removes algae without touching the render structure.',
  },
  {
    q: 'How much does render cleaning cost in Newton-le-Willows?',
    a: 'Render cleaning in WA12 typically costs £120–£450. A semi-detached with a single rendered front elevation is at the lower end; a fully rendered detached house with extensions is higher. Free written quotes after inspection.',
  },
  {
    q: 'How do I remove green algae from render in Newton-le-Willows?',
    a: "Green algae in WA12 is driven by North West rainfall and M6/M62 diesel particulates. Biocide soft wash kills the organism at root level — applied at low pressure, allowed to dwell, then gently rinsed. Residual biocide continues working for weeks post-cleaning.",
  },
  {
    q: 'How often should render be cleaned in Newton-le-Willows?',
    a: 'Every 3–5 years in North West conditions. North-facing or tree-shaded walls in Earlestown may need cleaning every 2–3 years. Properties near the M6/M62 junction attract more diesel staining. A breathable sealant after cleaning extends the interval to 5–7 years.',
  },
  {
    q: 'What is monocouche render and how is it cleaned in WA12?',
    a: 'Monocouche is a single-coat pre-coloured render popular on WA12 new-builds and refurbishments from the 1990s onwards. The integral colour is not a topcoat, so pH-neutral biocide soft wash removes biological growth without affecting colour uniformity or surface texture.',
  },
];

export function RenderNewtonLeWillows() {
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
              <li><Link href="/services/render-cleaning" className="text-primary hover:text-accent transition-colors">Render Cleaning</Link></li>
              <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
              <li className="text-primary-foreground/70" aria-current="page">Newton-le-Willows</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">
            <p className="sr-only">
              R.R.M External Cleaning Specialist provides professional render cleaning in Newton-le-Willows, WA12, serving K-Rend on new-builds and extensions, monocouche on refurbished properties, and sand-and-cement render on Earlestown Victorian terraces. Service uses biodegradable biocide soft washing below 100 PSI. Fully insured, 47 five-star reviews. Based at 9 Noon Ct, Newton-le-Willows WA12 8QY. Contact: 07845 463877.
            </p>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Render Cleaning in Newton-le-Willows — K-Rend & Monocouche Specialists
            </h1>

            <p className="text-lg text-muted-foreground mb-4 border-l-4 border-amber-400 pl-4 bg-amber-50/10 py-2 rounded-r">
              <strong>Render cleaning in Newton-le-Willows costs £120–£450</strong>. R.R.M uses biodegradable biocide soft washing below 100 PSI — the only safe method for K-Rend, monocouche and sand-and-cement render across WA12. Pressure washing K-Rend causes delamination; our method removes algae and M6/M62 pollution staining without touching the render structure.
            </p>

            <p className="text-muted-foreground mb-6">
              Newton-le-Willows sits at the junction of the M6 (J23) and M62 (J9) — two of the busiest motorway corridors in the North West. Diesel particulates from these roads settle on rendered facades and combine with 700–800 mm of annual rainfall to create the dark streaking and green algae growth seen on rendered properties across WA12. K-Rend was widely specified on Newton-le-Willows new-builds and extensions from the early 2000s; monocouche appears on housing association refurbishments across the town; and sand-and-cement render covers the Victorian terraces in Earlestown that were modernised through the mid-20th century.
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Render Types Across Newton-le-Willows WA12</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>K-Rend</strong> and other acrylic silicone render systems were specified extensively on Newton-le-Willows new-builds and self-build extensions from approximately 2003 onwards. These polymer-modified renders are flexible and crack-resistant, but their textured surface collects airborne spores rapidly. They must never be pressure washed — the acrylic binders can be partially dissolved by aggressive detergents and the render body can delaminate from the substrate if water is forced in under pressure.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Monocouche single-coat render</strong> was used on housing association and local authority refurbishment schemes in WA12 through the 1990s and 2000s. The colour is integral throughout the material. Cleaning with the correct pH-neutral biocide removes biological growth without bleaching or fading the surface colour.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Sand-and-cement render</strong> on Earlestown Victorian terraces — often applied as a modernisation coat over the original brick facade — is more porous than modern acrylic systems and absorbs more moisture, making it particularly prone to algae in North West conditions. These elevations benefit from a slightly higher biocide concentration and a longer dwell time before rinsing.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Render Cleaning Process</h2>
              <div className="space-y-4">
                {[
                  { n: 1, title: 'Render Type Assessment', body: 'We identify the render system — K-Rend, monocouche, sand-and-cement, or pebbledash — and note the contamination type (algae, pollution, efflorescence) to select the correct biocide concentration and pressure setting.' },
                  { n: 2, title: 'Protect Surroundings', body: 'Window glazing, sills, planted borders, and drainage gulleys are covered or wetted down before application to prevent chemical contact with sensitive surfaces.' },
                  { n: 3, title: 'Biocide Pre-Treatment', body: 'A biodegradable algaecide is applied bottom-to-top at below 100 PSI, allowed to dwell for 10–20 minutes. The active ingredient penetrates the render surface to kill algae and mould at root level.' },
                  { n: 4, title: 'Low-Pressure Rinse', body: 'Render is rinsed top-to-bottom using fan-pattern nozzles, removing loosened biological matter without gouging the surface or forcing water into the substrate.' },
                  { n: 5, title: 'Optional Sealant', body: 'A breathable silicone impregnator can be applied after cleaning to reduce water absorption and extend the time before re-treatment — particularly effective on older sand-and-cement render on Earlestown terraces.' },
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
              <h2 className="text-2xl font-bold text-foreground mb-6">Render Cleaning Newton-le-Willows — Frequently Asked Questions</h2>
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
                  { href: '/services/pressure-washing/newton-le-willows', title: 'Pressure Washing Newton-le-Willows', desc: 'Driveways, block paving, commercial hard surfaces' },
                  { href: '/services/cladding-cleaning/newton-le-willows', title: 'Cladding Cleaning Newton-le-Willows', desc: 'UPVC, metal composite and timber-effect soft washing' },
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Free Render Cleaning Quote — Newton-le-Willows WA12</h2>
              <p className="text-muted-foreground mb-6">
                Based in Newton-le-Willows, R.R.M covers all of WA12 and surrounding areas. Fully insured, 47 five-star reviews, free written quotes.
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
