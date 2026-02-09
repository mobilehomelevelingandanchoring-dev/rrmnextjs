'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { locations, LocationEntity } from '../data/locations';
import { services } from '../data/services';
import { ContactInfo } from '@/components/ContactInfo';
import VideoEmbed from '@/components/VideoEmbed';
import { useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';

const LocationPage = () => {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  const location = locationSlug ? locations[locationSlug] : undefined;

  useEffect(() => {
    if (location) {
      // Inject schema markup
      const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: `${location.displayName} Cleaning Services`,
        description: location.description,
        areaServed: {
          '@type': 'City',
          name: location.displayName,
          region: location.region,
        },
        url: window.location.href,
        telephone: '+447845463877',
      };
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return () => script.remove();
    }
  }, [location]);

  if (!location) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
          <Link href="/locations" className="text-blue-600 hover:underline">
            Back to Locations
          </Link>
        </div>
        </div>
      </Layout>
    );
  }

  // Get services available in this location
  const availableServices = location.allServices
    .map((slug) => services[slug])
    .filter(Boolean);

  // Get nearby locations
  const nearbyLocationsList = (location.nearbyLocations || [])
    .map((slug) => locations[slug])
    .filter(Boolean);

  return (
    <Layout>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">{location.displayName}</h1>
          <p className="text-xl mb-4">{location.description}</p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Get Free Quote
            </button>
            <a
              href="tel:+447845463877"
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why {location.displayName} Needs Professional Cleaning</h2>
              <p className="text-gray-700 mb-4">{location.localContext}</p>
              <p className="text-gray-700">{location.whyCleaningNeeded}</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Common Issues in {location.displayName}</h3>
              <ul className="space-y-3">
                {location.commonProblems?.map((problem) => (
                  <li key={problem} className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span className="text-gray-700 capitalize">{problem.replace('-', ' ')}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Services Available in {location.displayName}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2 text-blue-600">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <VideoEmbed
            title={`Professional Exterior Cleaning Services in ${location.displayName}`}
            description={`See our expert cleaning techniques in action in ${location.displayName}. Watch us deliver professional exterior cleaning results using specialized equipment and proven methods. This video demonstrates the quality and care we bring to every project in ${location.displayName} and across ${location.region}.`}
            relatedPageUrl={`/locations/${location.slug}`}
            relatedPageLabel={`More about cleaning services in ${location.displayName}`}
            location={location.displayName}
          />
        </div>
      </section>

      {/* Nearby Locations */}
      {nearbyLocationsList.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">We Also Serve Nearby Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {nearbyLocationsList.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/locations/${nearby.slug}`}
                  className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <p className="font-semibold text-blue-600">{nearby.displayName}</p>
                  <p className="text-sm text-gray-600">{nearby.region}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {location.faqs && location.faqs.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {location.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Property?</h2>
          <p className="text-xl mb-6">Get your free, no-obligation quote from our {location.displayName} experts</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
            Request Free Quote
          </button>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Serving {location.displayName}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Contact our local team for professional exterior cleaning services in {location.displayName}.
          </p>
          <ContactInfo variant="default" />
        </div>
      </section>
      </div>
    </Layout>
  );
};

export default LocationPage;
