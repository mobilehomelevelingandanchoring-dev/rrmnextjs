'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-16 md:py-20 hero-bg relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 75% 25%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            id="cta-heading" 
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
          >
            Ready to Transform Your Property?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed">
            Get in touch today for a free, no-obligation quote. We'll assess your needs 
            and provide honest advice on the best cleaning solution for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+447845463877">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/70 font-medium">
            Established 2016 • Fully Insured • 5-Star Rated • Fast Response Times
          </p>
          <p className="mt-2 text-sm text-primary-foreground/70">
            Serving Newton-le-Willows, Warrington, and Greater Manchester
          </p>
        </div>
      </div>
    </section>
  );
}
