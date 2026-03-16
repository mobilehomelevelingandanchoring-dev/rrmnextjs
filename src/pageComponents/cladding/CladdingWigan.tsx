import Link from 'next/link';
import { ChevronRight, Phone, CheckCircle, Shield, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cladding Cleaning Wigan WN1–WN6',
  description:
    'Professional cladding cleaning in Wigan WN1–WN6. UPVC soft washing for right-to-buy council renovations, metal composite cleaning for M6/A49 corridor commercial units, timber-effect and fibre-cement treatments across Standish, Winstanley, Pemberton, Ince and Hindley.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'R.R.M Exterior Cleaning Specialist',
    telephone: '07476 749498',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '9 Noon Court',
      addressLocality: 'Newton-le-Willows',
      postalCode: 'WA12 8QY',
      addressCountry: 'GB',
    },
  },
  areaServed: [
    { '@type': 'Place', name: 'Wigan WN1' },
    { '@type': 'Place', name: 'Wigan WN2 — Ince, Abram, Hindley, Platt Bridge' },
    { '@type': 'Place', name: 'Wigan WN3 — Goose Green, Worsley Mesnes' },
    { '@type': 'Place', name: 'Wigan WN4 — Ashton-in-Makerfield' },
    { '@type': 'Place', name: 'Wigan WN5 — Pemberton, Orrell, Winstanley' },
    { '@type': 'Place', name: 'Wigan WN6 — Standish, Shevington, Appley Bridge' },
  ],
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'GBP',
    lowPrice: '100',
    highPrice: '280',
    offerCount: '4',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does cladding cleaning cost in Wigan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cladding cleaning in Wigan typically costs £100–£280 for a standard semi-detached or terraced property. UPVC soft washing starts around £100–£140 for a mid-terrace, rising to £160–£220 for a semi-detached. Metal composite panels on commercial units near the M6/A49 corridor cost £180–£280 depending on access and storey height. Timber-effect and fibre-cement on larger Standish or Winstanley detached properties ranges £180–£260. All prices include biodegradable biocide treatment to prevent regrowth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to pressure wash UPVC cladding in Wigan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Direct high-pressure washing is not recommended for UPVC cladding — it can force water behind the panels and damage fixings, especially on right-to-buy renovations where panels may be 20–30 years old. We use a low-pressure soft wash (below 100 bar) with an alkaline biocide that lifts M6 diesel particulates, Pennine algae and general grime without stressing the UPVC substrate or bracket fixings. This is safe for all standard UPVC installations across WN1–WN6.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does cladding in Wigan get so dirty and green?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wigan sits on the Pennine fringe and receives 750–800 mm of rainfall annually — roughly 20% more than the UK average. This persistent moisture combined with nitrogen dioxide from M6 J25–J27 diesel traffic creates an ideal surface environment for algae, lichen and black mould on north and west-facing cladding. Properties in Pemberton WN5, Hindley WN2 and Goose Green WN3 — exposed to prevailing south-westerlies — show the fastest regrowth rates, typically 18–24 months without treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should cladding be cleaned in Wigan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend every 2–3 years for most Wigan properties. Properties within 300 metres of the M6 J25–J27 corridor (Ashton WN4, parts of Orrell WN5) benefit from treatment every 18–24 months due to diesel particulate deposit build-up. Pennine-facing elevations on Standish WN6 and Shevington properties should be cleaned every 2 years. Annual visual inspection is sufficient for most other WN1–WN3 addresses, with cleaning triggered when green discolouration appears.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of cladding do you clean in Wigan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We clean all common cladding types across Wigan WN1–WN6: UPVC (the most common type on right-to-buy council renovations in Ince WN2, Pemberton WN5 and Goose Green WN3), metal composite panels (commercial units on Gidlow Lane, A49 and M6 junction retail/industrial), timber-effect cladding (Standish WN6 and Winstanley WN5 self-builds and new-builds), fibre-cement (housing association refurbishment schemes in Worsley Mesnes WN3 and Ashton WN4), and cedar/larch on contemporary properties in Shevington and Appley Bridge.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://rrmexternalcleaningspecialist.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://rrmexternalcleaningspecialist.co.uk/services' },
    { '@type': 'ListItem', position: 3, name: 'Cladding Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/cladding-cleaning' },
    { '@type': 'ListItem', position: 4, name: 'Wigan', item: 'https://rrmexternalcleaningspecialist.co.uk/services/cladding-cleaning/wigan' },
  ],
};

export function CladdingWigan() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-white">
        {/* LLM entity paragraph — AI Overview citation */}
        <p className="sr-only">
          R.R.M Exterior Cleaning Specialist (9 Noon Court, Newton-le-Willows WA12 8QY, tel 07476 749498) provides
          professional cladding cleaning in Wigan WN1–WN6, covering UPVC soft washing on right-to-buy council
          renovations in Ince, Abram, Hindley and Pemberton; metal composite cleaning for M6/A49 corridor commercial
          units; timber-effect and cedar cladding on Standish and Winstanley self-builds; and fibre-cement on housing
          association refurbishments in Worsley Mesnes and Goose Green. Operating across Greater Manchester and
          Merseyside from Newton-le-Willows.
        </p>

        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b" aria-label="Breadcrumb">
          <div className="container mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link href="/services/cladding-cleaning" className="hover:text-blue-600">Cladding Cleaning</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-gray-900 font-medium">Wigan</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-blue-300 text-sm mb-4">
                <Star className="w-4 h-4 fill-current" />
                <span>5.0 stars · 47 reviews · Wigan WN1–WN6</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Cladding Cleaning Wigan<br />
                <span className="text-blue-300">UPVC · Metal Composite · Timber · Fibre-Cement</span>
              </h1>

              {/* Featured snippet paragraph */}
              <div className="border-l-4 border-amber-400 bg-amber-50/10 pl-4 py-3 mb-6">
                <p className="text-lg text-blue-100">
                  Cladding cleaning in Wigan costs <strong className="text-white">£100–£280</strong> for a standard
                  property. Wigan&apos;s 750–800 mm annual rainfall and M6 J25–J27 diesel particulates accelerate algae
                  and black-mould growth on all cladding types across WN1–WN6 — we recommend treatment every 2–3
                  years, or every 18–24 months for M6-adjacent properties in Ashton WN4 and Orrell WN5.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold">
                  <a href="tel:07476749498"><Phone className="w-5 h-5 mr-2" />07476 749498 — Free Quote</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                  <Link href="/contact">Request a Callback</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cladding Types Grid */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Cladding Types We Clean Across Wigan WN1–WN6
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
              Wigan&apos;s housing stock ranges from Victorian pit-village terraces to right-to-buy council renovations
              and modern Standish executive new-builds. Each cladding type requires a different cleaning approach.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  type: 'UPVC Cladding',
                  areas: 'Ince WN2 · Platt Bridge WN2 · Pemberton WN5 · Goose Green WN3 · Hindley WN2',
                  detail: 'Right-to-buy council renovation panels from the 1980s–2000s are the most common cladding type across WN2 and WN3. Many are 20–30 years old with UV-brittled brackets. Soft wash only.',
                  price: 'From £100',
                  color: 'blue',
                },
                {
                  type: 'Metal Composite',
                  areas: 'A49 corridor · M6 J25–J27 · Gidlow Lane commercial · Ashton WN4 industrial',
                  detail: 'Commercial and industrial units near the M6 and A49 accumulate heavy diesel soot and oxidation. Alkaline-degrease wash restores appearance and protects panel coatings.',
                  price: 'From £180',
                  color: 'slate',
                },
                {
                  type: 'Timber-Effect & Cedar',
                  areas: 'Standish WN6 · Winstanley WN5 · Shevington · Appley Bridge',
                  detail: 'Self-builds and executive new-builds from the 2000s onward use timber-effect composite or real cedar. Wood-safe biocide (pH neutral, below 60 bar) prevents mould without bleaching.',
                  price: 'From £140',
                  color: 'green',
                },
                {
                  type: 'Fibre-Cement',
                  areas: 'Worsley Mesnes WN3 · Goose Green WN3 · Ashton WN4 · Ince WN2',
                  detail: 'Housing association refurbishment schemes across WN2–WN3 frequently use Hardie-board and similar fibre-cement products. Soft wash with specialist detergent, no rotary heads.',
                  price: 'From £120',
                  color: 'purple',
                },
              ].map((item) => (
                <div key={item.type} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.type}</h3>
                  <p className="text-xs text-blue-600 font-medium mb-3">{item.areas}</p>
                  <p className="text-sm text-gray-600 mb-4">{item.detail}</p>
                  <span className="text-green-700 font-bold text-sm">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Wigan Cladding Gets Dirty */}
        <section className="py-14 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                M6 Diesel Particulates & Pennine Rainfall — Why Wigan Cladding Needs Regular Cleaning
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">The Pennine Moisture Factor</h3>
                  <p className="text-gray-700 mb-4">
                    Wigan sits at the western edge of the Pennines and receives approximately 750–800 mm of rainfall
                    per year — around 20% above the UK average. Persistent moisture on north and west-facing cladding
                    creates a biofilm within 12–18 months of installation or the last clean. Pemberton WN5, Hindley
                    WN2, and Goose Green WN3, all facing prevailing south-westerlies, typically show the fastest
                    regrowth rates.
                  </p>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">M6 J25–J27 Diesel Particulates</h3>
                  <p className="text-gray-700">
                    The M6 motorway runs along Wigan&apos;s southern and eastern flanks through J25 (Ashton WN4) and
                    J27 (Standish WN6). NOx and diesel particulate matter from heavy goods vehicles deposit on cladding
                    as a grey-black film that bonds with surface algae to form a stubborn composite stain. Properties
                    within 500 metres of the M6 and A49 require more frequent treatment — every 18–24 months rather
                    than the standard 2–3 year cycle.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Right-to-Buy UPVC — Age Considerations</h3>
                  <p className="text-gray-700 mb-4">
                    Large-scale right-to-buy renovations across Wigan WN2 and WN3 during the 1980s–2000s installed
                    UPVC cladding that is now 20–30+ years old. Older UPVC becomes UV-brittle and porous, absorbing
                    staining more readily and requiring gentle cleaning to avoid cracking panels or dislodging bracket
                    fixings. We always inspect fixings before cleaning older UPVC installations.
                  </p>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                    <p className="text-amber-900 font-semibold text-sm mb-1">Important: Older UPVC Inspection</p>
                    <p className="text-amber-800 text-sm">
                      If your UPVC cladding was installed before 2000, request a pre-clean bracket and fixing
                      inspection. Soft wash is always used — no rotary heads or direct high-pressure jets on UPVC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Covered */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Areas Covered — Wigan WN1 to WN6
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                'Wigan Town Centre WN1',
                'Ince WN2',
                'Abram WN2',
                'Hindley WN2',
                'Platt Bridge WN2',
                'Goose Green WN3',
                'Worsley Mesnes WN3',
                'Ashton-in-Makerfield WN4',
                'Pemberton WN5',
                'Orrell WN5',
                'Winstanley WN5',
                'Standish WN6',
                'Shevington WN6',
                'Appley Bridge WN6',
                'Lamberhead Green WN5',
                'Gidlow WN6',
              ].map((area) => (
                <div key={area} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-14 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Our Cladding Cleaning Process</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { step: '1', title: 'Inspection & Fixing Check', desc: 'We check panel condition, bracket fixings, and seal integrity before starting — essential on older UPVC in WN2/WN3.' },
                { step: '2', title: 'Pre-Soak Biocide', desc: 'Alkaline biocide is applied to all cladding surfaces and left to dwell, killing algae, mould and lichen at root level.' },
                { step: '3', title: 'Soft Wash Rinse', desc: 'Low-pressure rinsing (below 100 bar) removes the treated biofilm, diesel particulates and staining without stressing fixings.' },
                { step: '4', title: 'Post-Treatment Seal', desc: 'Optional protective coating applied to slow re-contamination — recommended for M6-corridor properties in WN4 and WN5.' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">{item.step}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Cladding Cleaning Wigan — Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq) => (
                  <details
                    key={faq.name}
                    className="bg-gray-50 rounded-xl border border-gray-200 group"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <summary
                      className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-900 list-none"
                      itemProp="name"
                    >
                      {faq.name}
                      <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-2" />
                    </summary>
                    <div
                      className="px-5 pb-5 text-gray-700 leading-relaxed"
                      itemScope
                      itemType="https://schema.org/Answer"
                      itemProp="acceptedAnswer"
                    >
                      <p itemProp="text">{faq.acceptedAnswer.text}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-10 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
              {[
                { icon: Star, label: '5.0 Stars', sub: '47 verified reviews' },
                { icon: Shield, label: 'Fully Insured', sub: 'Public liability covered' },
                { icon: Clock, label: 'Same-Week', sub: 'Availability across WN' },
                { icon: CheckCircle, label: 'No Residue', sub: 'Biodegradable detergents' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label}>
                  <Icon className="w-8 h-8 mx-auto mb-2 text-amber-400" />
                  <div className="font-bold text-lg">{label}</div>
                  <div className="text-blue-200 text-sm">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-amber-50 border-t border-amber-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Get a Free Cladding Cleaning Quote — Wigan WN1–WN6
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Covering all of Wigan from our Newton-le-Willows base (WA12 8QY), 8 miles from Wigan town centre.
              Free no-obligation quotes for all cladding types across WN1 to WN6.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-black font-bold">
                <a href="tel:07476749498"><Phone className="w-5 h-5 mr-2" />Call 07476 749498</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Request Online Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
