import Link from 'next/link';
import { ChevronRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Render Cleaning Liverpool',
  description:
    'Professional render cleaning in Liverpool, Merseyside. Soft wash for K-Rend on new-builds, monocouche on social housing refurbishments, sand-and-cement on Georgian Quarter terraces, and pebbledash on post-war properties. Safe algae and salt-air stain removal.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'R.R.M External Cleaning Specialist',
    telephone: '+447845463877',
    address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
  },
  areaServed: { '@type': 'City', name: 'Liverpool', containedInPlace: { '@type': 'AdministrativeArea', name: 'Merseyside' } },
  serviceType: 'Render Cleaning',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' },
  offers: { '@type': 'Offer', priceCurrency: 'GBP', priceSpecification: { '@type': 'PriceSpecification', minPrice: '150', maxPrice: '500', priceCurrency: 'GBP' } },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you pressure wash K-Rend in Liverpool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. K-Rend and other acrylic silicone render systems must never be pressure washed. High pressure erodes the textured surface finish, removes colour from through-coloured coats, and — most critically — forces water into the render substrate, causing delamination and internal damp. The correct method for Liverpool K-Rend is biodegradable biocide applied at below 100 PSI, dwelled, and gently rinsed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does render cleaning cost in Liverpool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Render cleaning in Liverpool typically costs £150–£500 depending on property size, number of rendered elevations, and contamination level. A semi-detached with a single rendered front elevation is at the lower end; a fully rendered detached or large terraced property is at the higher end. Georgian Quarter properties with historic render require extra care and are priced accordingly. Free written quotes after inspection.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I remove green algae from render in Liverpool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Green algae on Liverpool render is driven by the city's Atlantic maritime climate — over 800 mm of rainfall per year, persistent humidity from the Irish Sea, and salt particles from the River Mersey that act as algae nutrients. The correct removal method is biocide soft washing: a biodegradable algaecide applied at low pressure, allowed to dwell for 10–20 minutes to kill the organism at root level, then gently rinsed. The residual biocide continues working for weeks after cleaning.",
      },
    },
    {
      '@type': 'Question',
      name: 'How often should render be cleaned in Liverpool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In Liverpool's maritime climate, rendered properties typically need professional cleaning every 2–4 years. Properties in coastal postcodes (L21, L22, L23 — Waterloo, Crosby, Blundellsands) exposed to direct Irish Sea wind and salt spray may need cleaning every 18–24 months. North-facing elevations on Toxteth and Kensington terraces in the shadow of taller buildings accumulate algae fastest. A breathable sealant after cleaning can extend the interval to 4–6 years.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is soft washing safe for historic Georgian Quarter render in Liverpool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The Georgian Quarter (L1/L3 — Rodney Street, Falkner Square, Percy Street) carries rendered facades over original Georgian brick with lime mortar. These lime-based renders are more water-sensitive than modern acrylic systems and require particularly low pressure — typically below 60 PSI — with pH-neutral biocide solutions. We have experience cleaning historic Liverpool properties and select solutions specifically compatible with lime-based render and historic masonry.",
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
    { '@type': 'ListItem', position: 3, name: 'Liverpool', item: 'https://rrmexternalcleaningspecialist.co.uk/services/render-cleaning/liverpool' },
  ],
};

const faqs = [
  {
    q: 'Can you pressure wash K-Rend in Liverpool?',
    a: 'No. High pressure erodes K-Rend texture, removes through-colour, and forces water into the substrate causing delamination and damp. Correct method: biodegradable biocide below 100 PSI, dwelled, gently rinsed.',
  },
  {
    q: 'How much does render cleaning cost in Liverpool?',
    a: 'Render cleaning in Liverpool costs £150–£500. A semi-detached with one rendered elevation is lower; a fully rendered detached or Georgian Quarter property is higher. Free written quotes after inspection.',
  },
  {
    q: 'How do I remove green algae from render in Liverpool?',
    a: "Liverpool's 800mm+ rainfall, Irish Sea humidity, and Mersey salt particles act as algae nutrients. Biocide soft wash kills at root level — applied at low pressure, dwelled 10–20 min, gently rinsed. Residual biocide continues working for weeks.",
  },
  {
    q: 'How often should render be cleaned in Liverpool?',
    a: 'Every 2–4 years in Liverpool. Coastal postcodes (L21–L23, Waterloo/Crosby) with direct Irish Sea exposure may need cleaning every 18–24 months. North-facing Toxteth and Kensington elevations accumulate algae fastest. Sealant extends interval to 4–6 years.',
  },
  {
    q: 'Is soft washing safe for historic Georgian Quarter render in Liverpool?',
    a: 'Yes. Georgian Quarter lime-based render (Rodney Street, Falkner Square) requires below 60 PSI with pH-neutral biocide compatible with lime mortar and historic masonry. We have specific experience cleaning Liverpool heritage properties.',
  },
];

export function RenderLiverpool() {
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
              <li className="text-primary-foreground/70" aria-current="page">Liverpool</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">
            <p className="sr-only">
              R.R.M External Cleaning Specialist provides professional render cleaning across Liverpool, Merseyside, covering K-Rend on new-builds and extensions, monocouche on Norris Green and Croxteth social housing refurbishments, sand-and-cement render on Georgian Quarter properties in Rodney Street and Falkner Square, and pebbledash on post-war housing. Biodegradable biocide soft washing below 100 PSI. Fully insured, 47 five-star reviews. Contact: 07845 463877.
            </p>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Render Cleaning Liverpool — K-Rend, Monocouche &amp; Georgian Render
            </h1>

            <p className="text-lg text-muted-foreground mb-4 border-l-4 border-amber-400 pl-4 bg-amber-50/10 py-2 rounded-r">
              <strong>Render cleaning in Liverpool costs £150–£500.</strong> R.R.M uses biodegradable biocide soft washing — the only safe method for K-Rend, monocouche, sand-and-cement, and historic lime render across Merseyside. Liverpool's Atlantic maritime climate and Mersey salt air accelerate algae growth; pressure washing causes delamination on modern render and damage to historic lime finishes.
            </p>

            <p className="text-muted-foreground mb-6">
              Liverpool's rendered facades span every era from the Georgian Quarter's lime-rendered brick townhouses on Rodney Street and Falkner Square to K-Rend on 2000s+ new-builds and extensions across the suburbs. Monocouche single-coat render covers large areas of Norris Green and Croxteth social housing refurbished in the 1990s and 2000s. Pebbledash finishes the majority of inter-war semis in Wavertree, Childwall, and Allerton. All render types accumulate green algae and black streaking in Liverpool's persistently wet climate — the city receives over 800 mm of Atlantic rainfall per year with salt particles from the Irish Sea adding an additional biological growth accelerant unique to coastal Merseyside.
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Render Types Across Liverpool</h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { type: 'K-Rend / Acrylic Silicone', detail: 'New-builds and extensions across L12–L18 suburbs (2000s onwards). Never pressure washed — biocide only.' },
                  { type: 'Monocouche Single-Coat', detail: 'Social housing refurbishments in Norris Green (L11), Croxteth (L11), Speke (L24) — pH-neutral biocide preserves integral colour.' },
                  { type: 'Sand-and-Cement Render', detail: 'Mid-20th century re-render on Victorian terraces in Toxteth (L8), Kensington (L6) — slightly higher biocide concentration, longer dwell.' },
                  { type: 'Historic Lime Render', detail: 'Georgian Quarter properties (Rodney Street, Falkner Square, Percy Street) — below 60 PSI with lime-compatible pH-neutral solution.' },
                  { type: 'Pebbledash', detail: 'Inter-war semis in Wavertree (L15), Childwall (L16), Allerton (L18) — biocide pre-treatment penetrates textured aggregate surface.' },
                  { type: 'Tyrolean / Roughcast', detail: 'Post-war housing across L12–L14 — low-pressure gentle rinse to avoid aggregate displacement.' },
                ].map(({ type, detail }) => (
                  <div key={type} className="bg-secondary/30 rounded-lg p-4 border border-secondary">
                    <h3 className="font-semibold text-foreground mb-1">{type}</h3>
                    <p className="text-sm text-muted-foreground">{detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Liverpool Render Cleaning Process</h2>
              <div className="space-y-4">
                {[
                  { n: 1, title: 'Render Type Assessment', body: 'We identify the render system and note whether it is lime-based, polymer-modified, or aggregate-finish. This determines the biocide concentration, dwell time, and maximum safe pressure.' },
                  { n: 2, title: 'Protect Surroundings', body: 'Window glazing, sills, planted borders, and drainage gulleys covered or wetted down before application — important given Liverpool\'s urban density and close-quarter terrace properties.' },
                  { n: 3, title: 'Biocide Pre-Treatment', body: 'Biodegradable algaecide applied bottom-to-top at below 100 PSI (below 60 PSI for lime renders). Dwell time 10–20 minutes to kill algae and mould at root level.' },
                  { n: 4, title: 'Low-Pressure Rinse', body: 'Render rinsed top-to-bottom using fan nozzles. Liverpool\'s textured pebbledash and K-Rend finishes flushed clear without aggregate displacement or surface erosion.' },
                  { n: 5, title: 'Optional Sealant', body: 'Breathable silicone impregnator applied after cleaning to reduce moisture absorption — particularly effective in Liverpool\'s coastal postcodes where salt-laden air re-stains render faster than inland areas.' },
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
              <h2 className="text-2xl font-bold text-foreground mb-6">Render Cleaning Liverpool — Frequently Asked Questions</h2>
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
              <h2 className="text-2xl font-bold text-foreground mb-6">All Liverpool Cleaning Services</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { href: '/services/gutter-cleaning/liverpool', title: 'Gutter Cleaning Liverpool', desc: 'Cast iron and UPVC gutter clearing, downpipe flushing' },
                  { href: '/services/roof-cleaning/liverpool', title: 'Roof Cleaning Liverpool', desc: 'Soft wash for Welsh slate, Edwardian clay and concrete tiles' },
                  { href: '/services/pressure-washing/liverpool', title: 'Pressure Washing Liverpool', desc: 'Driveways, block paving and commercial hard surfaces' },
                  { href: '/services/cladding-cleaning/liverpool', title: 'Cladding Cleaning Liverpool', desc: 'UPVC, metal composite and waterfront cladding soft wash' },
                  { href: '/services/exterior-cleaning/liverpool', title: 'Exterior Cleaning Liverpool', desc: 'Full exterior package for all Liverpool property types' },
                  { href: '/locations/liverpool', title: 'Liverpool Location Hub', desc: 'All R.R.M services across Merseyside' },
                ].map(({ href, title, desc }) => (
                  <Link key={href} href={href} className="group p-5 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors border border-secondary">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Free Render Cleaning Quote — Liverpool Merseyside</h2>
              <p className="text-muted-foreground mb-6">R.R.M covers all Liverpool postcodes (L1–L40). Fully insured, 47 five-star reviews, free written quotes.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:+447845463877"><Phone className="h-5 w-5 mr-2" />07845 463877</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Request Quote Online</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">All Liverpool postcodes · Fully insured · Free written quote · 47 five-star reviews</p>
            </section>

          </div>
        </div>
      </main>
    </Layout>
  );
}
