import { Layout } from '@/components/layout/Layout';
import ServicesIndexContent from '@/pageComponents/ServicesIndex';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services | Pressure Washing & More',
  description:
    'Comprehensive exterior cleaning services including pressure washing, driveway cleaning, roof soft washing, gutter cleaning, and more.',
};

export default function ServicesPage() {
  return <ServicesIndexContent />;
}
