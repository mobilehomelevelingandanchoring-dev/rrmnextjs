'use client';

import dynamic from 'next/dynamic';
import ServicePageContent from '@/pageComponents/ServicePage';
import { useParams } from 'next/navigation';

const LoadingFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

// Dynamic imports for code splitting - each page loaded only when needed
const locationPages: Record<string, Record<string, ReturnType<typeof dynamic>>> = {
  'pressure-washing': {
    'liverpool': dynamic(() => import('@/pageComponents/pressure/PressureLiverpool').then(m => ({ default: m.PressureLiverpool })), { loading: LoadingFallback }),
    'warrington': dynamic(() => import('@/pageComponents/pressure/PressureWarrington').then(m => ({ default: m.PressureWarrington })), { loading: LoadingFallback }),
    'manchester': dynamic(() => import('@/pageComponents/pressure/PressureManchester').then(m => ({ default: m.PressureManchester })), { loading: LoadingFallback }),
    'huyton': dynamic(() => import('@/pageComponents/pressure/PressureHuyton').then(m => ({ default: m.PressureHuyton })), { loading: LoadingFallback }),
    'newton-le-willows': dynamic(() => import('@/pageComponents/pressure/PressureNewtonLeWillows').then(m => ({ default: m.PressureNewtonLeWillows })), { loading: LoadingFallback }),
    'golborne': dynamic(() => import('@/pageComponents/pressure/PressureGolborne').then(m => ({ default: m.PressureGolborne })), { loading: LoadingFallback }),
    'lymm': dynamic(() => import('@/pageComponents/pressure/PressureLymm').then(m => ({ default: m.PressureLymm })), { loading: LoadingFallback }),
    'wigan': dynamic(() => import('@/pageComponents/pressure/PressureWigan').then(m => ({ default: m.PressureWigan })), { loading: LoadingFallback }),
  },
  'roof-cleaning': {
    'liverpool': dynamic(() => import('@/pageComponents/roof/RoofLiverpool').then(m => ({ default: m.RoofLiverpool })), { loading: LoadingFallback }),
    'manchester': dynamic(() => import('@/pageComponents/roof/RoofManchester').then(m => ({ default: m.RoofManchester })), { loading: LoadingFallback }),
    'huyton': dynamic(() => import('@/pageComponents/roof/RoofHuyton').then(m => ({ default: m.RoofHuyton })), { loading: LoadingFallback }),
    'newton-le-willows': dynamic(() => import('@/pageComponents/roof/RoofNewtonLeWillows').then(m => ({ default: m.RoofNewtonLeWillows })), { loading: LoadingFallback }),
    'golborne': dynamic(() => import('@/pageComponents/roof/RoofGolborne').then(m => ({ default: m.RoofGolborne })), { loading: LoadingFallback }),
    'lymm': dynamic(() => import('@/pageComponents/roof/RoofLymm').then(m => ({ default: m.RoofLymm })), { loading: LoadingFallback }),
    'wigan': dynamic(() => import('@/pageComponents/roof/RoofWigan').then(m => ({ default: m.RoofWigan })), { loading: LoadingFallback }),
  },
  'render-cleaning': {
    'liverpool': dynamic(() => import('@/pageComponents/render/RenderLiverpool').then(m => ({ default: m.RenderLiverpool })), { loading: LoadingFallback }),
    'manchester': dynamic(() => import('@/pageComponents/render/RenderManchester').then(m => ({ default: m.RenderManchester })), { loading: LoadingFallback }),
    'huyton': dynamic(() => import('@/pageComponents/render/RenderHuyton').then(m => ({ default: m.RenderHuyton })), { loading: LoadingFallback }),
    'newton-le-willows': dynamic(() => import('@/pageComponents/render/RenderNewtonLeWillows').then(m => ({ default: m.RenderNewtonLeWillows })), { loading: LoadingFallback }),
    'golborne': dynamic(() => import('@/pageComponents/render/RenderGolborne').then(m => ({ default: m.RenderGolborne })), { loading: LoadingFallback }),
    'lymm': dynamic(() => import('@/pageComponents/render/RenderLymm').then(m => ({ default: m.RenderLymm })), { loading: LoadingFallback }),
    'wigan': dynamic(() => import('@/pageComponents/render/RenderWigan').then(m => ({ default: m.RenderWigan })), { loading: LoadingFallback }),
  },
  'cladding-cleaning': {
    'liverpool': dynamic(() => import('@/pageComponents/cladding/CladdingLiverpool').then(m => ({ default: m.CladdingLiverpool })), { loading: LoadingFallback }),
    'manchester': dynamic(() => import('@/pageComponents/cladding/CladdingManchester').then(m => ({ default: m.CladdingManchester })), { loading: LoadingFallback }),
    'huyton': dynamic(() => import('@/pageComponents/cladding/CladdingHuyton').then(m => ({ default: m.CladdingHuyton })), { loading: LoadingFallback }),
    'newton-le-willows': dynamic(() => import('@/pageComponents/cladding/CladdingNewtonLeWillows').then(m => ({ default: m.CladdingNewtonLeWillows })), { loading: LoadingFallback }),
    'golborne': dynamic(() => import('@/pageComponents/cladding/CladdingGolborne').then(m => ({ default: m.CladdingGolborne })), { loading: LoadingFallback }),
    'lymm': dynamic(() => import('@/pageComponents/cladding/CladdingLymm').then(m => ({ default: m.CladdingLymm })), { loading: LoadingFallback }),
    'wigan': dynamic(() => import('@/pageComponents/cladding/CladdingWigan').then(m => ({ default: m.CladdingWigan })), { loading: LoadingFallback }),
  },
  'gutter-cleaning': {
    'skelmersdale': dynamic(() => import('@/pageComponents/gutter/GutterSkelmersdale').then(m => ({ default: m.GutterSkelmersdale })), { loading: LoadingFallback }),
    'warrington': dynamic(() => import('@/pageComponents/gutter/GutterWarrington').then(m => ({ default: m.GutterWarrington })), { loading: LoadingFallback }),
    'liverpool': dynamic(() => import('@/pageComponents/gutter/GutterLiverpool').then(m => ({ default: m.GutterLiverpool })), { loading: LoadingFallback }),
    'manchester': dynamic(() => import('@/pageComponents/gutter/GutterManchester').then(m => ({ default: m.GutterManchester })), { loading: LoadingFallback }),
    'st-helens': dynamic(() => import('@/pageComponents/gutter/GutterStHelens').then(m => ({ default: m.GutterStHelens })), { loading: LoadingFallback }),
    'widnes': dynamic(() => import('@/pageComponents/gutter/GutterWidnes').then(m => ({ default: m.GutterWidnes })), { loading: LoadingFallback }),
    'wigan': dynamic(() => import('@/pageComponents/gutter/GutterWigan').then(m => ({ default: m.GutterWigan })), { loading: LoadingFallback }),
    'golborne': dynamic(() => import('@/pageComponents/gutter/GutterGolborne').then(m => ({ default: m.GutterGolborne })), { loading: LoadingFallback }),
    'huyton': dynamic(() => import('@/pageComponents/gutter/GutterHuyton').then(m => ({ default: m.GutterHuyton })), { loading: LoadingFallback }),
    'lymm': dynamic(() => import('@/pageComponents/gutter/GutterLymm').then(m => ({ default: m.GutterLymm })), { loading: LoadingFallback }),
    'newton-le-willows': dynamic(() => import('@/pageComponents/gutter/GutterNewtonLeWillows').then(m => ({ default: m.GutterNewtonLeWillows })), { loading: LoadingFallback }),
  },
  'exterior-cleaning': {
    'wigan': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningWigan').then(m => ({ default: m.ExteriorCleaningWigan })), { loading: LoadingFallback }),
    'skelmersdale': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningSkelmersdale').then(m => ({ default: m.ExteriorCleaningSkelmersdale })), { loading: LoadingFallback }),
    'warrington': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningWarrington').then(m => ({ default: m.ExteriorCleaningWarrington })), { loading: LoadingFallback }),
    'liverpool': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningLiverpool').then(m => ({ default: m.ExteriorCleaningLiverpool })), { loading: LoadingFallback }),
    'manchester': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningManchester').then(m => ({ default: m.ExteriorCleaningManchester })), { loading: LoadingFallback }),
    'st-helens': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningStHelens').then(m => ({ default: m.ExteriorCleaningStHelens })), { loading: LoadingFallback }),
    'widnes': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningWidnes').then(m => ({ default: m.ExteriorCleaningWidnes })), { loading: LoadingFallback }),
    'golborne': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningGolborne').then(m => ({ default: m.ExteriorCleaningGolborne })), { loading: LoadingFallback }),
    'huyton': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningHuyton').then(m => ({ default: m.ExteriorCleaningHuyton })), { loading: LoadingFallback }),
    'lymm': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningLymm').then(m => ({ default: m.ExteriorCleaningLymm })), { loading: LoadingFallback }),
    'newton-le-willows': dynamic(() => import('@/pageComponents/exterior/ExteriorCleaningNewtonLeWillows').then(m => ({ default: m.ExteriorCleaningNewtonLeWillows })), { loading: LoadingFallback }),
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
