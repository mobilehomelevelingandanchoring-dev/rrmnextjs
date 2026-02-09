'use client';

import ServicePageContent from '@/pageComponents/ServicePage';
import { useParams } from 'next/navigation';

export default function ServiceDynamicPage() {
  const params = useParams();
  const slug = params.slug as string[];
  
  // Convert slug array to params object
  // For /services/gutter-cleaning -> serviceSlug = "gutter-cleaning"
  // For /services/gutter-cleaning/newton-le-willows -> serviceSlug = "gutter-cleaning", locationSlug = "newton-le-willows"
  
  const serviceSlug = slug?.[0] || '';
  const locationSlug = slug?.[1];

  return (
    <ServicePageContent 
      params={{ 
        serviceSlug, 
        ...(locationSlug && { locationSlug }) 
      }} 
    />
  );
}
