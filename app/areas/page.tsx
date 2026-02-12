import { Layout } from '@/components/layout/Layout';
import AreasIndexContent from '@/pageComponents/AreasIndex';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Areas We Cover | UK Exterior Cleaning Services',
  description:
    'Comprehensive list of areas we service for exterior cleaning including local neighborhoods and regions.',
  alternates: {
    canonical: 'https://rrmexternalcleaningspecialist.co.uk/locations',
  },
};

export default function AreasPage() {
  return <AreasIndexContent />;
}
