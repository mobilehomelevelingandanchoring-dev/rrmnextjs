import { Layout } from '@/components/layout/Layout';
import LocationsIndexContent from '@/pageComponents/LocationsIndex';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Areas | Newton-le-Willows, Warrington & Greater Manchester',
  description:
    'Professional exterior cleaning services across Newton-le-Willows, Warrington, Manchester, and the surrounding areas.',
};

export default function LocationsPage() {
  return <LocationsIndexContent />;
}
