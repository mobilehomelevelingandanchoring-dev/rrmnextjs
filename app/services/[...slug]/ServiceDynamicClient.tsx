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

// Dedicated pressure washing location-specific page components
import { PressureLiverpool } from '@/pageComponents/pressure/PressureLiverpool';
import { PressureWarrington } from '@/pageComponents/pressure/PressureWarrington';

// Dedicated exterior cleaning location-specific page components
import { ExteriorCleaningWigan } from '@/pageComponents/exterior/ExteriorCleaningWigan';
import { ExteriorCleaningSkelmersdale } from '@/pageComponents/exterior/ExteriorCleaningSkelmersdale';
import { ExteriorCleaningWarrington } from '@/pageComponents/exterior/ExteriorCleaningWarrington';
import { ExteriorCleaningLiverpool } from '@/pageComponents/exterior/ExteriorCleaningLiverpool';
import { ExteriorCleaningManchester } from '@/pageComponents/exterior/ExteriorCleaningManchester';
import { ExteriorCleaningStHelens } from '@/pageComponents/exterior/ExteriorCleaningStHelens';
import { ExteriorCleaningWidnes } from '@/pageComponents/exterior/ExteriorCleaningWidnes';
import { ExteriorCleaningGolborne } from '@/pageComponents/exterior/ExteriorCleaningGolborne';
import { ExteriorCleaningHuyton } from '@/pageComponents/exterior/ExteriorCleaningHuyton';
import { ExteriorCleaningLymm } from '@/pageComponents/exterior/ExteriorCleaningLymm';
import { ExteriorCleaningNewtonLeWillows } from '@/pageComponents/exterior/ExteriorCleaningNewtonLeWillows';

// Map of service/location combinations to dedicated components
const locationPages: Record<string, Record<string, React.ComponentType>> = {
  'pressure-washing': {
    'liverpool': PressureLiverpool,
    'warrington': PressureWarrington,
  },
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
  'exterior-cleaning': {
    'wigan': ExteriorCleaningWigan,
    'skelmersdale': ExteriorCleaningSkelmersdale,
    'warrington': ExteriorCleaningWarrington,
    'liverpool': ExteriorCleaningLiverpool,
    'manchester': ExteriorCleaningManchester,
    'st-helens': ExteriorCleaningStHelens,
    'widnes': ExteriorCleaningWidnes,
    'golborne': ExteriorCleaningGolborne,
    'huyton': ExteriorCleaningHuyton,
    'lymm': ExteriorCleaningLymm,
    'newton-le-willows': ExteriorCleaningNewtonLeWillows,
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
