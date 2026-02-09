'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: 'What is the difference between pressure washing and soft washing?',
    answer: 'Pressure washing uses high-pressure water to clean hard surfaces like driveways and patios. Soft washing uses lower pressure combined with cleaning solutions, making it safer for delicate surfaces like roofs and render. We assess each surface and use the appropriate method to ensure effective cleaning without damage.',
  },
  {
    question: 'How often should I have my driveway cleaned?',
    answer: 'For most properties, we recommend driveway cleaning every 12-18 months. However, this varies depending on factors like tree coverage, shade, and local conditions. Areas with heavy moss or algae growth may benefit from more frequent cleaning.',
  },
  {
    question: 'Is pressure washing safe for all surfaces?',
    answer: 'No, different surfaces require different approaches. High-pressure washing is ideal for concrete, block paving, and some natural stones. However, softer surfaces, painted areas, and roofing materials need gentler methods. We always assess the surface first and use appropriate techniques.',
  },
  {
    question: 'Do you offer services for commercial properties?',
    answer: 'Yes, we provide exterior cleaning services for both residential and commercial properties. This includes office buildings, retail units, car parks, and industrial premises. Contact us to discuss your commercial cleaning requirements.',
  },
];

export function FAQPreview() {
  return (
    <section className="section-padding bg-secondary/30" aria-labelledby="faq-preview-heading">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Header */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Common Questions
            </span>
            <h2 id="faq-preview-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              We understand you may have questions about our exterior cleaning services. 
              Here are answers to some of the most common queries we receive from customers.
            </p>
            <Button variant="outline" asChild>
              <Link href="/faq">
                View All FAQs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
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
        </div>
      </div>
    </section>
  );
}
