'use client';

import ServicePageContent from '@/pageComponents/ServicePage';
import { useParams } from 'next/navigation';

// Dedicated location-specific page components
import { GutterSkelmersdale } from '@/pageComponents/gutter/GutterSkelmersdale';
import { GutterWarrington } from '@/pageComponents/gutter/GutterWarrington';
import { GutterLiverpool } from '@/pageComponents/gutter/GutterLiverpool';
import { GutterManchester } from '@/pageComponents/gutter/GutterManchester';
import { GutterStHelens } from '@/pageComponents/gutter/GutterStHelens';
import { GutterWidnes } from '@/pageComponents/gutter/GutterWidnes';
import { GutterWigan } from '@/pageComponents/gutter/GutterWigan';
import { GutterGolborne } from '@/pageComponents/gutter/GutterGolborne';
import { GutterHuyton } from '@/pageComponents/gutter/GutterHuyton';
import { GutterLymm } from '@/pageComponents/gutter/GutterLymm';
import { GutterNewtonLeWillows } from '@/pageComponents/gutter/GutterNewtonLeWillows';

// Map of service/location combinations to dedicated components
const locationPages: Record<string, Record<string, React.ComponentType>> = {
  'gutter-cleaning': {
    'skelmersdale': GutterSkelmersdale,
    'warrington': GutterWarrington,
    'liverpool': GutterLiverpool,
    'manchester': GutterManchester,
    'st-helens': GutterStHelens,
    'widnes': GutterWidnes,
    'wigan': GutterWigan,
    'golborne': GutterGolborne,
    'huyton': GutterHuyton,
    'lymm': GutterLymm,
    'newton-le-willows': GutterNewtonLeWillows,
  },
};

export default function ServiceDynamicClient() {
  const params = useParams();
  const slug = params.slug as string[];

  const serviceSlug = slug?.[0] || '';
  const locationSlug = slug?.[1];

  // Check for a dedicated location-specific component
  if (locationSlug && locationPages[serviceSlug]?.[locationSlug]) {
    const LocationComponent = locationPages[serviceSlug][locationSlug];
    return <LocationComponent />;
  }

  return (
    <ServicePageContent
      params={{
        serviceSlug,
        ...(locationSlug && { locationSlug })
      }}
    />
  );
}
