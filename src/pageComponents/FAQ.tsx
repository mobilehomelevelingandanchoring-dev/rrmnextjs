'use client';

import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ContactInfo } from '@/components/ContactInfo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight } from 'lucide-react';

const faqCategories = [
  {
    title: 'General Questions',
    faqs: [
      {
        question: 'What areas do you cover?',
        answer: 'We\'re based in Newton-le-Willows and cover Golborne, Huyton, Warrington, Lymm, and the wider Greater Manchester area. If you\'re unsure whether we cover your location, please contact usâ€”we may be able to accommodate areas not listed.',
      },
      {
        question: 'How do I get a quote?',
        answer: 'Contact us through our website, by phone, or by email. We can provide estimates based on your description, but for an accurate quote we prefer to assess the property in person. All quotes are free and without obligation.',
      },
      {
        question: 'Are you insured?',
        answer: 'Yes, we carry full public liability insurance. This protects you and your property in the unlikely event of any issues. We\'re happy to provide proof of insurance on request.',
      },
      {
        question: 'Do you work for commercial properties?',
        answer: 'Yes, we provide exterior cleaning services for both residential and commercial properties. This includes office buildings, retail units, car parks, and industrial premises.',
      },
    ],
  },
  {
    title: 'Service-Specific Questions',
    faqs: [
      {
        question: 'What is the difference between pressure washing and soft washing?',
        answer: 'Pressure washing uses high-pressure water to clean hard surfaces like driveways and patios. Soft washing uses lower pressure combined with cleaning solutions, making it safer for delicate surfaces like roofs and render. We assess each surface and use the appropriate method.',
      },
      {
        question: 'Will pressure washing damage my paving?',
        answer: 'When performed correctly by professionals, pressure washing is safe for most hard surfaces. We adjust the pressure based on the surface typeâ€”lower pressure for older or softer materials, higher pressure for tough concrete surfaces.',
      },
      {
        question: 'Do you re-sand block paving after driveway cleaning?',
        answer: 'Yes, we offer kiln-dried sand re-sanding as part of our driveway cleaning service. This stabilises the blocks and helps prevent weed growth. We\'ll advise you if your driveway would benefit from re-sanding.',
      },
      {
        question: 'Is roof cleaning safe for my tiles?',
        answer: 'Yes, when done properly. We never use high-pressure washing on roofs. Instead, we use low-pressure soft washing and biocide treatments that safely remove moss and algae without damaging tiles or forcing water under them.',
      },
      {
        question: 'How does pure water window cleaning work?',
        answer: 'Pure water has had all minerals removed, so when it evaporates it leaves no spots or streaks. We use water-fed poles to apply pure water to your windows, which attracts and removes dirt before drying perfectly clean.',
      },
    ],
  },
  {
    title: 'Pricing & Scheduling',
    faqs: [
      {
        question: 'How much does exterior cleaning cost?',
        answer: 'Pricing depends on the size of the area, the type of surface, and the level of soiling. We provide free quotes so you know exactly what to expect. There are no hidden costsâ€”the price we quote is the price you pay.',
      },
      {
        question: 'How long does a typical job take?',
        answer: 'Time varies depending on the service and area size. A typical driveway takes 2-4 hours. Roof cleaning may take a full day. We\'ll give you an estimated duration when we provide your quote.',
      },
      {
        question: 'Do I need to be home during the work?',
        answer: 'Not necessarily. As long as we have access to the areas needing cleaning and any necessary water/power connections, you don\'t need to be present. Many customers give us access and go about their day.',
      },
      {
        question: 'How far in advance should I book?',
        answer: 'We recommend booking 1-2 weeks in advance, though we can sometimes accommodate shorter notice. Spring and summer are our busiest periods, so earlier booking is advisable during these months.',
      },
    ],
  },
  {
    title: 'Maintenance & Care',
    faqs: [
      {
        question: 'How often should I have my driveway cleaned?',
        answer: 'For most properties, we recommend driveway cleaning every 12-18 months. Properties with heavy tree coverage, in shaded areas, or with high vehicle traffic may benefit from more frequent cleaning.',
      },
      {
        question: 'How often should gutters be cleaned?',
        answer: 'Gutters should be cleaned at least once per year, ideally in late autumn after leaves have fallen. Properties with overhanging trees may need cleaning twice yearly.',
      },
      {
        question: 'How long do the results last?',
        answer: 'This depends on the service and environmental factors. Driveways typically stay clean for 12-18 months. Roof treatments with biocide can prevent regrowth for 1-2 years. We\'ll advise you on what to expect for your specific situation.',
      },
      {
        question: 'Is there anything I can do to maintain the results?',
        answer: 'Regular sweeping helps prevent buildup on driveways. Keeping gutters clear of debris extends the time between professional cleans. For surfaces treated with biocide, avoiding hosing off the treatment helps it work longer.',
      },
    ],
  },
  {
    title: 'Safety & Concerns',
    faqs: [
      {
        question: 'Will cleaning damage my plants or garden?',
        answer: 'We take care to protect adjacent plants and garden areas. We can use barriers and adjust our techniques near flower beds and shrubs. The cleaning solutions we use are biodegradable and safe when used correctly.',
      },
      {
        question: 'Are the chemicals you use safe?',
        answer: 'Yes. We use professional-grade cleaning products that are designed to be effective yet safe when used correctly. All products are applied by trained operatives following safety guidelines.',
      },
      {
        question: 'Can you remove oil stains?',
        answer: 'Yes, we use specialist degreasing agents that effectively remove most oil and petroleum stains. Very old or deep stains may lighten significantly rather than disappear completelyâ€”we\'ll set realistic expectations.',
      },
      {
        question: 'What if it rains on the day of my booking?',
        answer: 'Light rain typically doesn\'t affect our work. Heavy rain may require rescheduling for safety and quality reasons. We\'ll contact you if we need to reschedule and find an alternative date that works for you.',
      },
    ],
  },
];

export default function FAQ() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-bg py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
              Find answers to common questions about our exterior cleaning services. 
              Can't find what you're looking for? Get in touch and we'll be happy to help.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border-border/50"
                    >
                      <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-accent">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-bg">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-primary-foreground/85 mb-8 max-w-xl mx-auto">
            We're happy to answer any questions about our services. Get in touch 
            and we'll provide the information you need.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-secondary/10">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-2">
            Still Have Questions?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Reach out directly to our team for personalized assistance and free quotes.
          </p>
          <ContactInfo variant="default" />
        </div>
      </section>
    </Layout>
  );
}
