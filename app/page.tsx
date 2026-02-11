import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { AreasSection } from '@/components/home/AreasSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { FAQPreview } from '@/components/home/FAQPreview';
import { CTASection } from '@/components/home/CTASection';
import { LazyVideoSection } from '@/components/LazyVideoSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pressure Washing Newton-le-Willows | R.R.M Cleaning',
  description:
    'Expert pressure washing and driveway cleaning in Newton-le-Willows & surrounding areas. Fully insured, 5-star rated. Free quote available. Established 2016.',
};

export default function Home() {
  return (
    <Layout>
      <Hero />
      <LazyVideoSection />
      <ServicesOverview />
      <WhyChooseUs />
      <AreasSection />
      <FAQPreview />
      <CTASection />
    </Layout>
  );
}
