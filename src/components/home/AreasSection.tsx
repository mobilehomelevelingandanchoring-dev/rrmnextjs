'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';

const areas = [
  {
    name: 'Newton-le-Willows',
    description: 'Our base office location. Pressure washing, driveway cleaning, and full exterior cleaning services for residential and commercial properties.',
    href: '/locations/newton-le-willows',
  },
  {
    name: 'Warrington',
    description: 'Professional pressure washing and exterior cleaning across Warrington and surrounding areas.',
    href: '/locations/warrington',
  },
  {
    name: 'St Helens',
    description: 'Expert driveway cleaning and pressure washing services for St Helens residents and businesses.',
    href: '/locations/st-helens',
  },
  {
    name: 'Widnes',
    description: 'Complete roof soft washing and exterior cleaning solutions for Widnes properties.',
    href: '/locations/widnes',
  },
  {
    name: 'Liverpool',
    description: 'Professional pressure washing and driveway cleaning services across Liverpool and Merseyside.',
    href: '/locations/liverpool',
  },
  {
    name: 'Manchester',
    description: 'Comprehensive exterior cleaning and roof soft washing for Manchester and surrounding areas.',
    href: '/locations/manchester',
  },
  {
    name: 'Golborne',
    description: 'Professional pressure washing and exterior cleaning services for Golborne.',
    href: '/locations/golborne',
  },
  {
    name: 'Lowton',
    description: 'Expert pressure washing and driveway cleaning services for Lowton residents and businesses.',
    href: '/locations/lowton',
  },
  {
    name: 'Haydock',
    description: 'Professional exterior cleaning and pressure washing services across Haydock.',
    href: '/locations/haydock',
  },
  {
    name: 'Earlestown',
    description: 'Expert pressure washing and driveway cleaning services for Earlestown homes and businesses.',
    href: '/locations/earlestown',
  },
  {
    name: 'Burtonwood',
    description: 'Professional pressure washing and exterior cleaning services in Burtonwood.',
    href: '/locations/burtonwood',
  },
  {
    name: 'Ashton-in-Makerfield',
    description: 'Expert exterior cleaning and pressure washing services for Ashton-in-Makerfield.',
    href: '/locations/ashton-in-makerfield',
  },
  {
    name: 'Huyton',
    description: 'Expert driveway cleaning and roof soft washing services for Huyton residents.',
    href: '/locations/huyton',
  },
  {
    name: 'Lymm',
    description: 'Professional pressure washing and exterior cleaning for Lymm properties.',
    href: '/locations/lymm',
  },
  {
    name: 'Wigan',
    description: 'Comprehensive exterior cleaning and driveway cleaning services across Wigan.',
    href: '/locations/wigan',
  },
  {
    name: 'Skelmersdale',
    description: 'Professional pressure washing and exterior cleaning for Skelmersdale properties.',
    href: '/locations/skelmersdale',
  },
  {
    name: 'Greater Manchester',
    description: 'Extended coverage across Greater Manchester including all surrounding areas and towns.',
    href: '/locations/greater-manchester',
  },
];

export function AreasSection() {
  return (
    <section className="section-padding bg-secondary/50" aria-labelledby="areas-heading">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Service Areas
          </span>
          <h2 id="areas-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pressure Washing & Exterior Cleaning Across the North West
          </h2>
          <p className="text-muted-foreground text-lg">
            Based in Newton-le-Willows, we've built our reputation serving the wider Wigan Borough and surrounding areas. We regularly help customers across Earlestown, Golborne, Lowton, Haydock, Burtonwood, and Ashton-in-Makerfield. Expand your search below to see if we cover your area, or get in touch to discuss your postcode (WA12, WA11, WA3).
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="group flex items-start gap-3 p-5 rounded-xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-md transition-all"
              aria-label={`${area.name} - Pressure Washing and Exterior Cleaning Services`}
            >
              <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                  {area.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {area.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see your area listed? We may still be able to help.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link href="/contact">
              Check Your Area
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
