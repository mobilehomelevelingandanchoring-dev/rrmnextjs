import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { AreasSection } from '@/components/home/AreasSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { FAQPreview } from '@/components/home/FAQPreview';
import { CTASection } from '@/components/home/CTASection';
import VideoSection from '@/components/VideoSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Professional Exterior Cleaning Services',
  description:
    'Professional pressure washing, driveway cleaning, roof soft washing, and exterior cleaning services in Newton-le-Willows, Warrington, and Greater Manchester.',
};

export default function Home() {
  return (
    <Layout>
      <Hero />
      <VideoSection />
      <ServicesOverview />
      <WhyChooseUs />
      <AreasSection />
      <FAQPreview />
      <CTASection />
    </Layout>
  );
}
