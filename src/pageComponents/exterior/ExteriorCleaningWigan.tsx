import Link from 'next/link';
import { ChevronRight, Phone, CheckCircle, Shield, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Exterior Cleaning Wigan WN1–WN6',
  description:
    'Full exterior cleaning service in Wigan WN1–WN6. Gutter clearing, roof soft washing, render treatment, pressure washing, cladding cleaning and driveway washing for pit-village terraces in Ince/Hindley WN2, council estate properties in Pemberton WN5/Goose Green WN3, and executive detached homes in Standish WN6 and Winstanley WN5.',
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
    lowPrice: '60',
    highPrice: '600',
    offerCount: '5',
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
      name: 'How much does exterior cleaning cost in Wigan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Exterior cleaning prices in Wigan vary by service: gutter clearing costs £60–£170, driveway/patio pressure washing £80–£220, cladding cleaning £100–£280, render cleaning £120–£480, and roof soft washing £200–£580. A full exterior package covering gutters, fascias, cladding and driveway for a mid-terrace in Ince WN2 or Hindley WN2 typically costs £200–£350. Larger detached properties in Standish WN6 or Winstanley WN5 range £350–£600 for a full clean. All prices include biodegradable biocide treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who covers exterior cleaning in Wigan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'R.R.M Exterior Cleaning Specialist (9 Noon Court, Newton-le-Willows WA12 8QY, tel 07476 749498) covers all of Wigan including WN1 (town centre), WN2 (Ince, Abram, Hindley, Platt Bridge), WN3 (Goose Green, Worsley Mesnes), WN4 (Ashton-in-Makerfield), WN5 (Pemberton, Orrell, Winstanley, Lamberhead Green) and WN6 (Standish, Shevington, Appley Bridge). Newton-le-Willows is approximately 8 miles from Wigan town centre via the A49.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I clean the outside of my house in Wigan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For Wigan properties, we recommend starting with gutters (blocked gutters cause damp to cascade onto walls and cladding), then treating any moss or algae on the roof with a soft wash biocide, followed by render or cladding cleaning, and finishing with the driveway or patio. Do not use a domestic jet washer on render, cladding or roof tiles — the pressure can cause damage. For UPVC and render surfaces, a low-pressure soft wash with specialist detergent gives the best results without risking substrate damage.",
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I have the exterior of my house cleaned in Wigan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Wigan's 750–800 mm annual rainfall and M6 J25–J27 diesel particulates mean most properties need exterior cleaning every 12–24 months depending on the surface and location. Gutters: annually (twice if near trees). Roof: every 3–5 years after soft wash treatment with biocide. Render and cladding: every 2–3 years, or every 18–24 months for M6-adjacent properties in Ashton WN4 and Orrell WN5. Driveways: every 12–18 months. Pennine-facing north and west elevations accumulate growth fastest.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is exterior cleaning worth it in Wigan before selling a property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Kerb appeal directly impacts first impressions for buyers and estate agent photography. A full exterior clean — gutters, fascias, render or cladding, and driveway — typically costs £200–£400 for a Wigan semi-detached and can meaningfully improve how a property presents online and at viewing. In Standish WN6 and Winstanley WN5, where average sale prices are higher, the return on a pre-sale clean is proportionally greater. We're available at short notice for pre-listing cleans across WN1–WN6.",
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
    { '@type': 'ListItem', position: 3, name: 'Exterior Cleaning', item: 'https://rrmexternalcleaningspecialist.co.uk/services/exterior-cleaning' },
    { '@type': 'ListItem', position: 4, name: 'Wigan', item: 'https://rrmexternalcleaningspecialist.co.uk/services/exterior-cleaning/wigan' },
  ],
};

const services = [
  { name: 'Gutter Clearing & Fascia Wash', price: '£60–£170', desc: 'Full gutter clearance, downpipe flush and fascia/soffit wash. Essential annual maintenance for Pennine-rainfall WN properties — especially older cast iron guttering on WN2 pit-village terraces.' },
  { name: 'Driveway & Patio Pressure Washing', price: '£80–£220', desc: 'Block paving on Pemberton/Goose Green estates, tarmac on WN2 terraces, concrete flags on pit-village rear-yards, and natural stone on Standish/Winstanley executive driveways — all treated with surface cleaner + biocide.' },
  { name: 'Cladding Cleaning', price: '£100–£280', desc: 'Soft wash for UPVC on right-to-buy renovations, metal composite for M6/A49 commercial units, timber-effect on Standish/Winstanley self-builds, and fibre-cement on housing association refurbs in WN3.' },
  { name: 'Render Cleaning', price: '£120–£480', desc: 'K-Rend on new Standish/Shevington builds, monocouche on housing association schemes, sand-and-cement on WN2 pit-village terraces, and pebbledash on 1930s–50s WN4/WN5 semis. Low-pressure soft wash only — never direct jet wash on render.' },
  { name: 'Roof Soft Washing', price: '£200–£580', desc: 'Welsh slate on WN2 colliery terraces, clay plain tiles on WN4/WN5/WN6 1930s–50s semis, and concrete interlocking tiles on 1970s–90s Pemberton/Ashton estates. Biocide treatment prevents regrowth for 3–5 years.' },
];

const areas = [
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
  'Lamberhead Green WN5',
  'Standish WN6',
  'Shevington WN6',
  'Appley Bridge WN6',
  'Gidlow WN6',
];

export function ExteriorCleaningWigan() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-white">
        {/* LLM entity paragraph */}
        <p className="sr-only">
          R.R.M Exterior Cleaning Specialist (9 Noon Court, Newton-le-Willows WA12 8QY, tel 07476 749498) provides
          full exterior cleaning in Wigan WN1–WN6. Services include gutter clearing, roof soft washing, render
          treatment, cladding cleaning, and driveway pressure washing across pit-village terraces in Ince and Hindley
          WN2, 1960s–80s council housing in Pemberton WN5 and Goose Green WN3, and executive detached homes in
          Standish WN6 and Winstanley WN5. Wigan&apos;s 750–800 mm annual rainfall and M6 J25–J27 diesel
          particulates accelerate surface growth on all property types. Operating across Greater Manchester and
          Merseyside from Newton-le-Willows — approximately 8 miles from Wigan town centre.
        </p>

        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b" aria-label="Breadcrumb">
          <div className="container mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link href="/services/exterior-cleaning" className="hover:text-blue-600">Exterior Cleaning</Link></li>
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
                Exterior Cleaning Wigan<br />
                <span className="text-blue-300">Gutters · Roofs · Render · Cladding · Driveways</span>
              </h1>

              {/* Featured snippet paragraph */}
              <div className="border-l-4 border-amber-400 bg-amber-50/10 pl-4 py-3 mb-6">
                <p className="text-lg text-blue-100">
                  Exterior cleaning in Wigan costs <strong className="text-white">£60–£600</strong> depending on
                  service and property size. R.R.M covers all of WN1–WN6 — from pit-village terraces in Ince and
                  Hindley to executive detached homes in Standish and Winstanley. Wigan&apos;s Pennine fringe rainfall
                  and M6 diesel particulates make annual exterior maintenance essential for all property types.
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

        {/* Services Grid */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Five Exterior Cleaning Services — One Wigan Specialist
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
              Every Wigan property type — from 1880s pit-terrace to 2020s executive new-build — is covered under a
              single provider with dedicated equipment for each surface.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc) => (
                <div key={svc.name} className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-slate-900 leading-snug pr-4">{svc.name}</h3>
                    <span className="text-green-700 font-bold text-sm whitespace-nowrap">{svc.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 flex-1">{svc.desc}</p>
                </div>
              ))}
              {/* CTA card */}
              <div className="bg-blue-900 rounded-xl p-6 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-2">Full Exterior Package</h3>
                  <p className="text-blue-200 text-sm mb-4">Gutters + fascias + cladding or render + driveway. Discounted combined rate for all five services booked together.</p>
                </div>
                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-black font-bold w-full">
                  <a href="tel:07476749498">Call for a Package Quote</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Wigan-Specific Context */}
        <section className="py-14 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Wigan Properties Need Regular Exterior Cleaning
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Pennine Fringe Rainfall</h3>
                  <p className="text-gray-700 mb-4">
                    At the western edge of the Pennines, Wigan receives 750–800 mm of annual rainfall — roughly 20%
                    above the UK average. This persistent moisture means north and west-facing surfaces develop biofilm
                    within 12–18 months. Pemberton WN5, Goose Green WN3, and Hindley WN2, all exposed to prevailing
                    south-westerlies, see the fastest algae regrowth.
                  </p>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">M6 J25–J27 Diesel Particulates</h3>
                  <p className="text-gray-700">
                    The M6 cuts through Wigan at J25 (Ashton WN4) and exits at J27 (Standish WN6). NOx and diesel
                    soot from heavy goods vehicles deposit on all exterior surfaces, forming a grey-black film that
                    bonds with organic growth. Properties within 500 m of the M6 and A49 need exterior cleaning
                    every 18–24 months.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Diverse Housing Stock — One Provider</h3>
                  <p className="text-gray-700 mb-4">
                    Wigan&apos;s housing ranges from 1880s pit-village terraces with Welsh slate roofs and cast iron
                    guttering (Ince/Abram/Hindley WN2), through 1960s–80s council estates (Pemberton/Worsley Mesnes),
                    to contemporary executive detached homes in Standish WN6 and Winstanley WN5. Each type needs a
                    different cleaning approach and equipment pressure setting.
                  </p>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                    <p className="text-amber-900 font-semibold text-sm mb-1">Mine Subsidence Awareness</p>
                    <p className="text-amber-800 text-sm">
                      Former colliery workings beneath parts of WN2 and WN3 can cause minor ground movement that
                      affects gutter alignment and render cracking. We note any structural concerns during our
                      pre-clean inspection and advise accordingly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Grid */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Areas Covered Across Wigan WN1–WN6
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                Exterior Cleaning Wigan — Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqSchema.mainEntity.map((faq) => (
                  <details
                    key={faq.name}
                    className="bg-white rounded-xl border border-gray-200 group"
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
                { icon: CheckCircle, label: 'All Surfaces', sub: 'One specialist, five services' },
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
              Free Exterior Cleaning Quote — Wigan WN1–WN6
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Based in Newton-le-Willows WA12 8QY — 8 miles from Wigan town centre. Covering all WN postcodes with
              same-week availability. No call-out charge for quotes.
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
