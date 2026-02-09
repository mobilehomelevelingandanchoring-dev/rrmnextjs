import AboutPageContent from '@/pageComponents/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | R.R.M Exterior Cleaning Specialist',
  description:
    'Learn about R.R.M Exterior Cleaning Specialist, our mission, values, and commitment to quality exterior cleaning services.',
};

export default function AboutPage() {
  return <AboutPageContent />;
}
