'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Shield, Clock } from 'lucide-react';

const trustIndicators = [
  { icon: Clock, text: 'Serving since 2016' },
  { icon: Shield, text: 'Fully insured' },
  { icon: Star, text: '5-star rated' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-bg" aria-labelledby="hero-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container-custom relative">
        {/* Flex Container: Stack on mobile, Row on Desktop */}
        <div className="py-20 md:py-28 lg:py-36 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Side: Content */}
          <div className="max-w-3xl w-full lg:w-1/2 z-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm text-accent-foreground mb-6 animate-fade-in">
              <CheckCircle className="h-4 w-4" aria-hidden="true" />
              <span className="font-medium">Trusted Local Pressure Washing Professionals</span>
            </div>

            {/* Main Heading */}
            <h1 
              id="hero-heading" 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 animate-fade-in-up leading-[1.1]"
            >
              Professional Pressure Washing & Exterior Cleaning in{' '}
              <span className="text-accent">Newton-le-Willows</span>
            </h1>

            {/* Subtitle with semantic keywords and locations */}
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 animate-fade-in-delay-1 leading-relaxed max-w-2xl">
              R.R.M Exterior Cleaning delivers expert <strong>pressure washing</strong>, <strong>driveway cleaning</strong>, 
              and <strong>roof soft washing</strong> services from our base in Newton-le-Willows. We proudly serve Warrington, St Helens, Widnes, Liverpool, Manchester, Golborne, Huyton, Lymm, Wigan, Skelmersdale, and across Greater Manchester with comprehensive exterior cleaning solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-delay-2">
              <Button variant="hero" size="xl" asChild>
              <Link href="/contact" title="Request a free pressure washing quote">Get a Free Quote</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
              <Link href="/services" title="Browse all exterior cleaning services">View Our Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 animate-fade-in-delay-3">
              {trustIndicators.map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-primary-foreground/80">
                  <item.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10 mt-8 lg:mt-0">
            {/* Decorative Glow behind image */}
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full transform translate-x-10 translate-y-10" />
            
            <img 
              src="/img1.png" 
              alt="R.R.M Exterior Cleaning Pressure Washing in action" 
              className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl border-4 border-white/10 transform hover:scale-[1.02] transition-all duration-500 object-cover"
            />
          </div>

        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path 
            d="M0 50L48 45.7C96 41.3 192 32.7 288 35.2C384 37.7 480 51.3 576 55.8C672 60.3 768 55.7 864 48.3C960 41 1056 31 1152 31.7C1248 32.3 1344 43.7 1392 49.3L1440 55V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}