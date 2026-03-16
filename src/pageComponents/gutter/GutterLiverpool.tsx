import Link from 'next/link';
import { ChevronRight, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Gutter Cleaning Liverpool',
  description:
    'Professional gutter cleaning in Liverpool, Merseyside. Debris removal, downpipe flushing and flow testing for Victorian terraces in Anfield, Kensington and Wavertree, cast iron ogee gutters, and post-war UPVC systems in Norris Green and Croxteth.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'R.R.M External Cleaning Specialist',
    telephone: '+447845463877',
    address: { '@type': 'PostalAddress', streetAddress: '9 Noon Ct', addressLocality: 'Newton-le-Willows', postalCode: 'WA12 8QY', addressCountry: 'GB' },
  },
  areaServed: { '@type': 'City', name: 'Liverpool', containedInPlace: { '@type': 'AdministrativeArea', name: 'Merseyside' } },
  serviceType: 'Gutter Cleaning',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47', bestRating: '5' },
  offers: { '@type': 'Offer', priceCurrency: 'GBP', priceSpecification: { '@type': 'PriceSpecification', minPrice: '65', maxPrice: '170', priceCurrency: 'GBP' } },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does gutter cleaning cost in Liverpool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gutter cleaning in Liverpool typically costs £65–£170 for a standard residential property. Victorian terraces in Anfield, Kensington, and Wavertree with original cast iron ogee gutters require more careful handling than modern UPVC systems and sit at the higher end. Two-storey semi-detached properties with standard UPVC are at the lower end. Prices depend on linear gutter length, number of storeys, and debris level. Free written quotes after inspection.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should gutters be cleaned in Liverpool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most Liverpool properties benefit from annual gutter cleaning in autumn after leaf fall. Properties near Sefton Park — one of the largest parks in England — and along tree-lined streets in Woolton, Allerton, and Childwall may need cleaning twice yearly. Liverpool's Atlantic maritime climate delivers over 800 mm of rainfall per year, meaning blocked gutters overflow rapidly and cause fascia rot and wall damp within weeks.",
      },
    },
    {
      '@type': 'Question',
      name: 'What causes blocked gutters in Liverpool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The main causes of blocked gutters in Liverpool are leaf fall from mature trees in Sefton Park, Wavertree, and Woolton, moss growth accelerated by Liverpool's maritime climate and salt air from the River Mersey and Irish Sea, and joint sagging on ageing UPVC systems in post-war estates. Salt air in particular accelerates UPVC bracket degradation, causing gutters to lose their fall and creating low points that accumulate standing water and silt.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can blocked gutters cause damp in Liverpool houses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Overflowing gutters are one of the most common causes of damp in Liverpool homes. In the city's high-rainfall maritime climate, a blocked gutter saturates the fascia board within days during heavy rain, causing rot that spreads to rafters. Water cascading down the wall of a Victorian terrace in Toxteth or Kensington — where solid brick construction provides no cavity barrier — leads directly to internal damp patches and mould. Gutter clearing costs £65–£170; damp repair costs £1,000–£10,000+.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you clean cast iron gutters on Victorian terraces in Liverpool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Victorian terraces across Anfield, Kensington, Wavertree, Toxteth, and Everton commonly retain original cast iron ogee or half-round gutters. These accumulate compacted leaf debris and the joints — sealed with putty or lead-caulked — require careful handling. We use vacuum extraction and hand scooping rather than high-pressure tools to avoid stressing Victorian joints. Cast iron gutters in good condition can last indefinitely with proper maintenance.",
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Gutter Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning' },
    { '@type': 'ListItem', position: 3, name: 'Liverpool', item: 'https://rrmexternalcleaningspecialist.co.uk/services/gutter-cleaning/liverpool' },
  ],
};

const faqs = [
  {
    q: 'How much does gutter cleaning cost in Liverpool?',
    a: 'Gutter cleaning in Liverpool typically costs £65–£170. Victorian terraces with cast iron ogee gutters in Anfield, Kensington, and Wavertree are at the higher end; standard UPVC systems are lower. Pricing depends on gutter length, storeys, and debris level. Free written quotes after inspection.',
  },
  {
    q: 'How often should gutters be cleaned in Liverpool?',
    a: "Most Liverpool properties need annual autumn cleaning. Properties near Sefton Park and tree-lined streets in Woolton, Allerton, and Childwall may need twice-yearly cleans. Liverpool's 800mm+ annual rainfall means blocked gutters overflow rapidly, causing fascia rot and wall damp within weeks.",
  },
  {
    q: 'What causes blocked gutters in Liverpool?',
    a: "Main causes: leaf fall from Sefton Park and Wavertree/Woolton trees, moss growth accelerated by maritime climate and Mersey/Irish Sea salt air, and UPVC bracket degradation from salt air causing gutters to lose fall and collect standing water.",
  },
  {
    q: 'Can blocked gutters cause damp in Liverpool houses?',
    a: "Yes. In Liverpool's high-rainfall climate, a blocked gutter saturates fascia within days, causing rot that spreads to rafters. Victorian terraces in Toxteth and Kensington have solid brick construction with no cavity — water runs straight into interior walls causing damp and mould.",
  },
  {
    q: 'Do you clean cast iron gutters on Victorian terraces in Liverpool?',
    a: "Yes. We use vacuum extraction and hand scooping for cast iron ogee and half-round gutters across Anfield, Kensington, Wavertree, and Toxteth — preserving putty/lead-caulked joints without high-pressure tools that stress Victorian fittings.",
  },
];

export function GutterLiverpool() {
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
              <li><Link href="/services/gutter-cleaning" className="text-primary hover:text-accent transition-colors">Gutter Cleaning</Link></li>
              <li className="text-primary-foreground/50"><ChevronRight className="h-4 w-4" /></li>
              <li className="text-primary-foreground/70" aria-current="page">Liverpool</li>
            </ol>
          </div>
        </nav>

        <article className="border-b border-secondary bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom section-padding">
            <p className="sr-only">
              R.R.M External Cleaning Specialist provides professional gutter cleaning across Liverpool, Merseyside, covering Victorian terraces with cast iron ogee gutters in Anfield, Kensington, Wavertree, Toxteth and Everton, post-war UPVC gutter systems in Norris Green, Croxteth and Speke, and semi-detached properties in Woolton, Allerton and Childwall. Services include debris removal, downpipe flushing and flow testing. Fully insured, 47 five-star reviews. Contact: 07845 463877.
            </p>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Gutter Cleaning Liverpool — Victorian Terraces &amp; Modern Homes
            </h1>

            <p className="text-lg text-muted-foreground mb-4 border-l-4 border-amber-400 pl-4 bg-amber-50/10 py-2 rounded-r">
              <strong>Gutter cleaning in Liverpool costs £65–£170.</strong> R.R.M clears leaf debris, moss, and silt from cast iron and UPVC gutters across Merseyside — flushing downpipes and testing flow to confirm water moves freely away from the property. Victorian cast iron gutters handled with vacuum extraction, not pressure tools.
            </p>

            <p className="text-muted-foreground mb-6">
              Liverpool's Atlantic maritime climate delivers over 800 mm of rainfall per year, with persistent salt air from the River Mersey and Irish Sea accelerating corrosion and biological growth on gutter systems. Victorian terraces across Anfield, Kensington, Wavertree, and Toxteth carry original cast iron ogee gutters dating from the 1880s–1910s — these require careful vacuum-and-scoop clearing to avoid stressing lead-caulked or putty-sealed joints. Post-war estates in Norris Green, Croxteth, and Speke have UPVC guttering whose brackets degrade faster than inland properties due to salt-laden air. Regular annual clearing prevents the fascia rot and damp ingress that Liverpool's solid-brick Victorian terraces are particularly vulnerable to.
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Gutter Systems Across Liverpool</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Cast iron ogee and half-round gutters</strong> are the dominant style on Victorian terraces throughout L4, L5, L6, L7, and L8. These were installed from the 1870s onwards and, with proper maintenance, can last indefinitely. The key risk is compacted debris that holds moisture against the iron, causing rust from inside the channel. We vacuum-clear cast iron gutters and flush downpipes to confirm the internal channel is clear to the outlet.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>UPVC half-round and square-line systems</strong> on inter-war and post-war properties across Wavertree, Woolton, Allerton, Norris Green, and Croxteth are vulnerable to bracket fatigue in Liverpool's salt air. After 25–30 years, UPVC brackets can crack, causing gutter sections to drop and lose their fall toward outlets. We note any failed brackets or misaligned sections during cleaning and report them to the property owner.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Aluminium and steel gutters</strong> appear on newer developments across the Liverpool Waterfront and city-centre apartment conversions. These require alkaline degreaser pre-treatment to remove salt-deposit scaling before clearing debris from internal channels.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Liverpool Gutter Cleaning Process</h2>
              <div className="space-y-4">
                {[
                  { n: 1, title: 'Visual Inspection', body: 'Gutter profile, material, bracket condition and downpipe positions assessed before starting. Cast iron systems checked for rust patches that indicate internal corrosion.' },
                  { n: 2, title: 'Debris Removal', body: 'All leaves, moss, silt, and compacted material removed. Cast iron gutters cleared by hand and vacuum; UPVC systems cleared by vacuum extraction with soft brush where needed.' },
                  { n: 3, title: 'Downpipe Flushing', body: 'Every downpipe flushed with water to confirm clear passage. Liverpool\'s clay soil can cause underground drain connections to block — identified at this stage.' },
                  { n: 4, title: 'Flow Testing', body: 'Gutters filled with water to check correct fall toward outlets. Low points and reverse falls noted — common on salt-degraded UPVC brackets.' },
                  { n: 5, title: 'Condition Report', body: 'Written summary of gutter condition, any cracked brackets, failed joints, or misalignment. Next clean recommended — annual for most Liverpool properties.' },
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
              <h2 className="text-2xl font-bold text-foreground mb-6">Gutter Cleaning Liverpool — Frequently Asked Questions</h2>
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
                  { href: '/services/roof-cleaning/liverpool', title: 'Roof Cleaning Liverpool', desc: 'Soft wash moss removal for Victorian slate and concrete tiles' },
                  { href: '/services/render-cleaning/liverpool', title: 'Render Cleaning Liverpool', desc: 'K-Rend, monocouche and Georgian render soft washing' },
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

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Areas We Cover in Liverpool</h2>
              <div className="flex flex-wrap gap-2">
                {['Anfield', 'Kensington', 'Wavertree', 'Toxteth', 'Everton', 'Sefton Park', 'Woolton', 'Allerton', 'Childwall', 'Norris Green', 'Croxteth', 'Speke', 'Aigburth', 'Mossley Hill', 'West Derby'].map((a) => (
                  <span key={a} className="px-3 py-1 bg-secondary/50 rounded-full text-sm text-muted-foreground border border-secondary">{a}</span>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-8 border border-accent/30 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Free Gutter Cleaning Quote — Liverpool</h2>
              <p className="text-muted-foreground mb-6">
                R.R.M covers all Liverpool postcodes (L1–L40). Fully insured, 47 five-star reviews, free written quotes. Call for a same-week appointment.
              </p>
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
