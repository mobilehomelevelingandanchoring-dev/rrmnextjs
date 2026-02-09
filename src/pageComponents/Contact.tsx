'use client';

import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-bg py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
              Ready for a free quote? Have a question about our services? 
              Contact us today and we'll get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Get in touch with R.R.M External Cleaning Specialist. We're here to answer 
                your questions and provide free, no-obligation quotes for all our services.
              </p>

              <div className="space-y-6">
                <a 
                  href="tel:+447845463877"
                  className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">Call for a free quote</p>
                  </div>
                </a>

                <a 
                  href="mailto:rrmexternalcleaning@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">rrmexternalcleaning@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Service Area</h3>
                    <p className="text-muted-foreground">Newton-le-Willows, Warrington & Greater Manchester</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Working Hours</h3>
                    <p className="text-muted-foreground">Monday - Saturday: 8am - 6pm</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="card-elevated p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Request a Free Quote
                </h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground">
                      We've received your message and will be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input 
                          id="name" 
                          placeholder="Your name" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="Your phone number" 
                          required 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email address" 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="postcode">Postcode *</Label>
                      <Input 
                        id="postcode" 
                        placeholder="Your postcode" 
                        required 
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required</Label>
                      <select 
                        id="service"
                        className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select a service...</option>
                        <option value="pressure-washing">Pressure Washing</option>
                        <option value="driveway-cleaning">Driveway Cleaning</option>
                        <option value="roof-cleaning">Roof Cleaning</option>
                        <option value="gutter-cleaning">Gutter Cleaning</option>
                        <option value="window-cleaning">Window Cleaning</option>
                        <option value="render-cleaning">Render Cleaning</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your cleaning requirements..."
                        rows={4}
                        required 
                      />
                    </div>

                    <Button type="submit" variant="highlight" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      We'll respond within 24 hours. Your information is kept private.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
