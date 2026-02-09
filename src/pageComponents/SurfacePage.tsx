'use client';

import Link from 'next/link';
import { surfaces } from '../data/surfaces';
import { services } from '../data/services';
import { problems } from '../data/problems';
import { ContactInfo } from '@/components/ContactInfo';
import VideoEmbed from '@/components/VideoEmbed';
import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';

const SurfacePage = ({ params }: { params: { surfaceSlug: string } }) => {
  const { surfaceSlug } = params;
  const surface = surfaceSlug ? surfaces[surfaceSlug] : undefined;

  useEffect(() => {
    if (surface) {
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: surface.displayName,
        description: surface.description,
        articleBody: `${surface.whatIs}\n\nCleaning Challenges: ${surface.cleaningChallenges}`,
        url: window.location.href,
      };
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return () => script.remove();
    }
  }, [surface]);

  if (!surface) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Surface Not Found</h1>
          <Link href="/surfaces" className="text-blue-600 hover:underline">
            Back to Surfaces
          </Link>
        </div>
        </div>
      </Layout>
    );
  }

  // Get appropriate services
  const appropriateServicesList = surface.appropriateServices
    .map((slug) => services[slug])
    .filter(Boolean);

  // Get related problems
  const relatedProblems = surface.commonProblems
    .map((slug) => problems[slug])
    .filter(Boolean);

  return (
    <Layout>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">{surface.displayName}</h1>
          <p className="text-xl mb-4">{surface.description}</p>
          <div className="flex gap-4">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Schedule Cleaning
            </button>
            <a
              href="tel:+447845463877"
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Material Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">About {surface.name}</h2>
              <p className="text-gray-700 mb-4">{surface.whatIs}</p>

              {surface.materialProperties && (
                <>
                  <h3 className="text-2xl font-bold mt-6 mb-4">Material Properties</h3>
                  <p className="text-gray-700">{surface.materialProperties}</p>
                </>
              )}
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Cleaning Challenges</h3>
              <p className="text-gray-700 mb-4">{surface.cleaningChallenges}</p>

              {surface.pressureWarnings && (
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <p className="font-semibold text-amber-700 mb-2">Pressure Washing Warnings:</p>
                  <p className="text-gray-700 text-sm">{surface.pressureWarnings}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      {relatedProblems.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Common Problems on {surface.name}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedProblems.map((problem) => (
                <Link
                  key={problem.slug}
                  href={`/problems/${problem.slug}`}
                  className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-bold mb-2 text-orange-600">{problem.name}</h3>
                  <p className="text-gray-700 text-sm">{problem.description}</p>
                  <p className="text-orange-600 font-semibold mt-4">Learn More →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Seasonal Concerns */}
      {surface.seasonalConcerns && (
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Seasonal Maintenance Concerns</h2>
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <p className="text-gray-700">{surface.seasonalConcerns}</p>
            </div>
          </div>
        </section>
      )}

      {/* Maintenance Tips */}
      {surface.maintenanceTips && surface.maintenanceTips.length > 0 && (
        <section className="py-12 bg-green-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">Maintenance Tips for {surface.name}</h2>
            <div className="space-y-4">
              {surface.maintenanceTips.map((tip, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-600 text-white">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">{tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Appropriate Services */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Professional Services for {surface.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {appropriateServicesList.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2 text-blue-600">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <p className="text-blue-600 font-semibold">Learn More →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <VideoEmbed
            title={`Professional Cleaning for ${surface.name}`}
            description={`Watch our expert team safely and effectively clean ${surface.name.toLowerCase()} surfaces. See the techniques and care we use to deliver outstanding results while protecting your property. From preparation to finishing, we demonstrate our professional standards.`}
            relatedPageUrl={`/surfaces/${surface.slug}`}
            relatedPageLabel={`More about cleaning ${surface.name.toLowerCase()}`}
          />
        </div>
      </section>

      {/* Cost Considerations */}
      {surface.costConsiderations && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Cost Considerations</h2>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-700">{surface.costConsiderations}</p>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {surface.faqs && surface.faqs.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {surface.faqs.map((faq, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Keep Your {surface.name} Looking Perfect</h2>
          <p className="text-xl mb-6">Professional cleaning and maintenance protects your investment</p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
            Get Expert Care
          </button>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Expert {surface.name} Care</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional cleaning and maintenance to keep your {surface.name} in perfect condition.
          </p>
          <ContactInfo variant="default" />
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default SurfacePage;
