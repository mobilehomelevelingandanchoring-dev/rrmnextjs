'use client';

import Link from 'next/link';

interface VideoEmbedProps {
  title: string;
  description: string;
  relatedPageUrl?: string;
  relatedPageLabel?: string;
  location?: string;
  service?: string;
}

const VideoEmbed = ({
  title,
  description,
  relatedPageUrl,
  relatedPageLabel,
  location,
  service,
}: VideoEmbedProps) => {
  const embedUrl = 'https://www.youtube.com/embed/YGLP1Hm5MFE?si=ciF9QTxBfTjJU7Jv';
  const ariaLabel = `${title}${location ? ` in ${location}` : ''}${service ? ` - ${service}` : ''}`;

  return (
    <article className="my-12 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
      <figure className="flex flex-col">
        <div className="relative w-full pt-[56.25%] bg-black overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={embedUrl}
            title={title}
            aria-label={ariaLabel}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <figcaption className="p-6 bg-gray-50">
          <h3 className="text-lg font-semibold text-primary mb-2">
            {title}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {description}
          </p>
          {relatedPageUrl && relatedPageLabel && (
            <div className="pt-3 border-t border-gray-200">
              <Link
                href={relatedPageUrl}
                className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
              >
                {relatedPageLabel}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          )}
        </figcaption>
      </figure>
    </article>
  );
};

export default VideoEmbed;
