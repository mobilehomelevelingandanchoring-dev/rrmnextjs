import ContactPageContent from '@/pageComponents/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Book Your Cleaning Service',
  description:
    'Get in touch with R.R.M Exterior Cleaning for a free quote or to schedule your cleaning service today.',
};

export default function ContactPage() {
  return <ContactPageContent />;
}
