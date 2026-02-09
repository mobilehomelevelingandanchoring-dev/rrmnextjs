import FAQPageContent from '@/pageComponents/FAQ';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Exterior Cleaning Services',
  description:
    'Find answers to common questions about our exterior cleaning services, pricing, scheduling, and more.',
};

export default function FAQPage() {
  return <FAQPageContent />;
}
