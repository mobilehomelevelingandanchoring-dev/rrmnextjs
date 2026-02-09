'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { videoObjectSchema } from '@/lib/schema';

const VIDEOS_DATA = [
  {
    id: '5t2gaYNzQFQ',
    title: 'Professional Driveway Cleaning Demo – Newton-le-Willows by R.R.M Exterior Cleaning',
    description: 'Watch our professional driveway cleaning transformation. Expert pressure washing removes dirt, moss, and stains from driveways in Newton-le-Willows and surrounding areas.',
    embedUrl: 'https://www.youtube.com/embed/5t2gaYNzQFQ?si=sG_RbsfMtYLac1Oo',
    relatedPage: '/services/driveway-cleaning',
    relatedLabel: 'Explore Driveway Cleaning Services',
  },
  {
    id: '83ZS3cX5cQ0',
    title: 'Professional Roof Soft Washing – R.R.M Exterior Cleaning Greater Manchester',
    description: 'See specialized roof soft washing techniques in action. Safe, effective moss and algae removal for all roof types across Greater Manchester.',
    embedUrl: 'https://www.youtube.com/embed/83ZS3cX5cQ0?si=CgILBBjjVA7esiph',
    relatedPage: '/services/roof-cleaning',
    relatedLabel: 'Learn About Roof Cleaning',
  },
  {
    id: 'ACgJ89XF79c',
    title: 'Patio and Outdoor Space Restoration – R.R.M Exterior Cleaning',
    description: 'Discover how professional patio cleaning transforms outdoor spaces. Chemical-free methods deliver safe, lasting results for patios and decking.',
    embedUrl: 'https://www.youtube.com/embed/ACgJ89XF79c?si=6a61pHdNUHeE85UP',
    relatedPage: '/services',
    relatedLabel: 'View Patio Cleaning Services',
  },
  {
    id: 'lvgqQkgdgqo',
    title: 'Comprehensive Exterior Cleaning Services – Pressure Washing & Soft Washing',
    description: 'Experience our complete exterior cleaning solutions. From pressure washing to soft washing, we provide professional results for residential and commercial properties.',
    embedUrl: 'https://www.youtube.com/embed/lvgqQkgdgqo?si=kkrWcGiLikLVM2lC',
    relatedPage: '/services',
    relatedLabel: 'View All Services',
  },
];

const VideoSection = () => {
  useEffect(() => {
    // Add VideoObject schema for each video
    VIDEOS_DATA.forEach((video) => {
      const videoSchema = videoObjectSchema(video.id, video.title, video.description);
      const schemaEl = document.createElement('script');
      schemaEl.type = 'application/ld+json';
      schemaEl.innerHTML = JSON.stringify(videoSchema);
      schemaEl.className = `video-schema-${video.id}`;
      document.head.appendChild(schemaEl);
    });

    return () => {
      VIDEOS_DATA.forEach((video) => {
        const schemaEl = document.querySelector(`.video-schema-${video.id}`);
        if (schemaEl) schemaEl.remove();
      });
    };
  }, []);

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="videos-heading">
      <div className="container-custom max-w-6xl">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 id="videos-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-3 md:mb-4 text-primary">
            Pressure Washing & Exterior Cleaning Videos
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch professional exterior cleaning transformations. Our video gallery showcases real customer results from <strong>pressure washing</strong>, <strong>soft washing</strong>, 
            <strong> driveway cleaning</strong>, and specialized services across Greater Manchester.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 px-4 md:px-0">
          {VIDEOS_DATA.map((video, index) => (
            <article 
              key={video.id} 
              className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <figure className="flex-shrink-0">
                <div className="relative w-full pt-[56.25%] bg-black overflow-hidden rounded-t-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={video.embedUrl}
                    title={video.title}
                    aria-label={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <figcaption className="p-3 md:p-4 bg-accent-50 border-t border-accent-100">
                  <h3 className="font-semibold text-xs md:text-sm text-primary mb-2">
                    {video.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                    {video.description}
                  </p>
                  <Link
                    href={video.relatedPage}
                    className="inline-flex items-center text-xs font-semibold text-accent hover:text-accent-dark transition-colors"
                  >
                    {video.relatedLabel}
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 rounded text-center mx-4 md:mx-0">
          <p className="text-xs md:text-sm text-gray-700 mb-3">
            These videos showcase actual R.R.M External Cleaning projects across Greater Manchester, 
            demonstrating our commitment to professional standards and customer satisfaction.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-4 md:px-6 py-2 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors"
          >
            Explore All Services
          </Link>
        </div>

        {/* Featured Videos Section - Semantic SEO Optimized */}
        <section className="mt-12 md:mt-16 lg:mt-20 border-t-2 border-gray-200 pt-8 md:pt-12">
          <article className="text-center mb-8 md:mb-12 px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-3 md:mb-4 text-primary">
              Featured Videos
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out our latest YouTube content and tutorials featuring real R.R.M Exterior Cleaning projects across Greater Manchester and surrounding areas.
            </p>
          </article>

          {/* Featured Videos Grid - 2 columns desktop, 1 mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-0">
            {/* Video 1: Pressure Washing Demo - Newton-le-Willows */}
            <figure className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full pt-[56.25%] bg-black overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/5t2gaYNzQFQ?si=sG_RbsfMtYLac1Oo"
                  title="R.R.M Exterior Cleaning – Professional Pressure Washing Demo Newton-le-Willows"
                  aria-label="Pressure washing demonstration by R.R.M Exterior Cleaning in Newton-le-Willows"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <figcaption className="p-4 md:p-5 bg-accent-50">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Pressure Washing Demo</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Professional pressure washing of driveways and concrete surfaces in Newton-le-Willows. Watch as R.R.M Exterior Cleaning removes deep-set dirt, moss, and stains effectively, restoring surfaces to like-new condition with our expert pressure washing techniques.
                </p>
              </figcaption>
            </figure>

            {/* Video 2: Driveway Cleaning - Golborne */}
            <figure className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full pt-[56.25%] bg-black overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/b8npdce0TuY?si=azX0WfOgo_BC8MOq"
                  title="R.R.M Exterior Cleaning – Professional Driveway Cleaning Demo Golborne"
                  aria-label="Driveway cleaning demonstration by R.R.M Exterior Cleaning in Golborne"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <figcaption className="p-4 md:p-5 bg-accent-50">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Driveway Cleaning Demo</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Expert driveway cleaning in Golborne using advanced pressure washing methods. See how R.R.M Exterior Cleaning transforms stained, weathered driveways into pristine surfaces, removing algae, moss, and accumulated grime while preserving your driveway's integrity.
                </p>
              </figcaption>
            </figure>

            {/* Video 3: Roof Cleaning - Huyton */}
            <figure className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full pt-[56.25%] bg-black overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/ACgJ89XF79c?si=6a61pHdNUHeE85UP"
                  title="R.R.M Exterior Cleaning – Professional Roof Cleaning Tutorial Huyton"
                  aria-label="Roof cleaning tutorial by R.R.M Exterior Cleaning in Huyton"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <figcaption className="p-4 md:p-5 bg-accent-50">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Roof Cleaning Tutorial</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Safe and effective roof cleaning techniques demonstrated in Huyton by R.R.M Exterior Cleaning. Learn how professional soft washing removes moss, algae, and lichen from roof tiles without causing damage, extending your roof's lifespan.
                </p>
              </figcaption>
            </figure>

            {/* Video 4: Gutter & Patio Cleaning - Warrington */}
            <figure className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative w-full pt-[56.25%] bg-black overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/YGLP1Hm5MFE?si=ciF9QTxBfTjJU7Jv"
                  title="R.R.M Exterior Cleaning – Professional Gutter & Patio Cleaning Guide Warrington"
                  aria-label="Gutter and patio cleaning guide by R.R.M Exterior Cleaning in Warrington"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <figcaption className="p-4 md:p-5 bg-accent-50">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Gutter & Patio Cleaning Guide</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Complete gutter and patio cleaning guide from R.R.M Exterior Cleaning in Warrington. Discover professional methods for clearing blocked gutters, cleaning patio surfaces, and maintaining outdoor spaces to prevent damage and extend durability.
                </p>
              </figcaption>
            </figure>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8 md:mt-10 px-4 md:px-0">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-primary text-white rounded-lg font-semibold text-sm md:text-base hover:bg-primary-dark transition-colors"
            >
              View All Services
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default VideoSection;
