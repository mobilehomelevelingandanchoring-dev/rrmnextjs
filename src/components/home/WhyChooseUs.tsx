import { Shield, Clock, Award, ThumbsUp, Leaf, Users } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Established Since 2016',
    description: 'Years of experience delivering quality exterior cleaning services to homes and businesses.',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description: 'Complete public liability insurance for your peace of mind on every job we undertake.',
  },
  {
    icon: Award,
    title: 'Professional Standards',
    description: 'We use industry-leading equipment and techniques for superior, lasting results.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description: 'We don\'t consider a job done until you\'re completely happy with the outcome.',
  },
  {
    icon: Leaf,
    title: 'Surface-Safe Methods',
    description: 'Appropriate cleaning methods for each surface type, preventing damage while maximising cleanliness.',
  },
  {
    icon: Users,
    title: 'Local & Trusted',
    description: 'A local business built on recommendations and repeat customers across the region.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-background" aria-labelledby="why-us-heading">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Why Choose Us
            </span>
            <h2 id="why-us-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Local Exterior Cleaning Experts
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At R.R.M External Cleaning Specialist, we combine years of experience with 
              professional equipment and a genuine commitment to customer satisfaction. 
              We understand that your property is an investment, and we treat every job 
              with the care and attention it deserves.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="h-3.5 w-3.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-foreground">
                  <strong>Free, no-obligation quotes</strong> – We assess your needs and provide honest pricing.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="h-3.5 w-3.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-foreground">
                  <strong>Flexible scheduling</strong> – We work around your availability.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="h-3.5 w-3.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-foreground">
                  <strong>Residential & commercial</strong> – From home driveways to business premises.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="p-5 rounded-xl bg-secondary/50 border border-border/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <reason.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
