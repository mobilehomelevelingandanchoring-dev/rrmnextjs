import { Layout } from '@/components/layout/Layout';
import ProblemsIndexContent from '@/pageComponents/ProblemsIndex';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exterior Cleaning Problems & Solutions',
  description:
    'Solutions for common exterior problems including moss removal, algae removal, grime removal, and more.',
};

export default function ProblemsPage() {
  return <ProblemsIndexContent />;
}
