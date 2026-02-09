'use client';

import Link from "next/link";
import { useParams } from "next/navigation";
import { problems } from "../data/problems";
import { services } from "../data/services";
import { surfaces } from "../data/surfaces";
import { ContactInfo } from "@/components/ContactInfo";
import VideoEmbed from "@/components/VideoEmbed";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";

const ProblemPage = () => {
  const { problemSlug } = useParams<{ problemSlug: string }>();
  const problem = problemSlug ? problems[problemSlug] : undefined;

  // Inject structured data JSON-LD for Google rich results
  useEffect(() => {
    if (problem) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: problem.displayName,
        description: problem.description,
        articleBody: `${problem.whatIs}

Causes: ${problem.causes}

Risks: ${problem.risksDangers}

Prevention: ${problem.preventionTips?.join(
          " | "
        )}`,
        url: window.location.href,
        author: {
          "@type": "Organization",
          name: "R.R.M Exterior Cleaning Specialist",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": window.location.href,
        },
      };

      const faqSchema =
        problem.faqs?.length > 0
          ? {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: problem.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            }
          : null;

      const scriptArticle = document.createElement("script");
      scriptArticle.type = "application/ld+json";
      scriptArticle.textContent = JSON.stringify(schema);
      document.head.appendChild(scriptArticle);

      let scriptFAQ: HTMLScriptElement | null = null;
      if (faqSchema) {
        scriptFAQ = document.createElement("script");
        scriptFAQ.type = "application/ld+json";
        scriptFAQ.textContent = JSON.stringify(faqSchema);
        document.head.appendChild(scriptFAQ);
      }

      return () => {
        document.head.removeChild(scriptArticle);
        if (scriptFAQ) document.head.removeChild(scriptFAQ);
      };
    }
  }, [problem]);

  if (!problem) {
    return (
      <Layout>
        <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Problem Not Found</h1>
          <Link href="/problems" className="text-blue-600 hover:underline">
            Back to All Problems
          </Link>
        </div>
        </main>
      </Layout>
    );
  }

  const solutionServices = problem.solutionServices
    .map((slug) => services[slug])
    .filter(Boolean);
  const affectedSurfacesList = problem.affectedSurfaces
    .map((slug) => surfaces[slug])
    .filter(Boolean);

  return (
    <Layout>
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{problem.displayName}</h1>
          <p className="text-xl mb-4">{problem.description}</p>
          <p className="text-lg text-orange-100">
            Serving Newton-le-Willows, St Helens, Warrington, and North West UK
          </p>
          <div className="flex gap-4 justify-center mt-6 flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100"
            >
              Get Professional Treatment
            </Link>
            <a
              href="tel:+447845463877"
              className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Problem Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <article className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">What Is {problem.displayName}?</h2>
              <p className="text-gray-700 mb-4">{problem.whatIs}</p>

              <h3 className="text-2xl font-bold mt-6 mb-4">Causes & Triggers</h3>
              <p className="text-gray-700 mb-4">{problem.causes}</p>

              {problem.seasons && (
                <>
                  <h3 className="text-2xl font-bold mt-6 mb-4">When Is It Worst?</h3>
                  <p className="text-gray-700">{problem.seasons}</p>
                </>
              )}
            </div>

            <aside className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="text-2xl font-bold mb-4 text-red-700">Risks & Dangers</h3>
              <p className="text-gray-700 mb-4">{problem.risksDangers}</p>

              {problem.timelineToWorsening && (
                <div className="mt-4 pt-4 border-t border-red-200">
                  <p className="font-semibold text-red-700 mb-2">Timeline to Deterioration</p>
                  <p className="text-gray-700">{problem.timelineToWorsening}</p>
                </div>
              )}
            </aside>
          </article>
        </div>
      </section>

      {/* Affected Surfaces */}
      {affectedSurfacesList.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">
              Surfaces Affected by {problem.displayName}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {affectedSurfacesList.map((surface) => (
                <Link
                  key={surface.slug}
                  href={`/surfaces/${surface.slug}`}
                  className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                >
                  <p className="font-semibold text-blue-600">{surface.name}</p>
                  <p className="text-sm text-gray-600">
                    {surface.commonProblems?.length || 0} common problems
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solutions Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Professional Solutions</h2>
          <p className="text-gray-700 mb-6">
            Solve {problem.displayName.toLowerCase()} safely and effectively with our expert services. Prevent recurrence and protect your property's value.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-green-50 p-6 rounded-lg border-2 border-green-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2 text-green-700">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <p className="text-green-600 font-semibold">Learn More →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <VideoEmbed
            title={`Professional Treatment for ${problem.displayName}`}
            description={`Watch our expert team professionally treat ${problem.displayName.toLowerCase()} on roofs, driveways, patios, and gutters in Newton-le-Willows and North West UK.`}
            relatedPageUrl={`/problems/${problem.slug}`}
            relatedPageLabel={`More about ${problem.displayName.toLowerCase()} treatment`}
          />
        </div>
      </section>

      {/* Prevention Tips */}
      {problem.preventionTips?.length > 0 && (
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">Prevention Tips</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              {problem.preventionTips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {problem.faqs?.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {problem.faqs.map((faq, idx) => (
                <article key={idx} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stop {problem.displayName} Now</h2>
          <p className="text-xl mb-6">
            Get expert exterior cleaning treatment and protect your property long-term.
          </p>
          <Link
            href="/contact"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100"
          >
            Get Professional Treatment
          </Link>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Professional Solutions Available</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get expert treatment for {problem.displayName} and protect your property.
          </p>
          <ContactInfo variant="default" />
        </div>
      </section>
      </main>
    </Layout>
  );
};

export default ProblemPage;
