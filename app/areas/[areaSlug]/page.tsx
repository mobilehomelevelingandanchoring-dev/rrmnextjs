import AreaPageContent from '@/pageComponents/AreaPage';
import { Metadata } from 'next';

const areaMetadata: Record<string, { title: string; description: string }> = {
  'lowton': {
    title: 'Pressure Washing in Lowton | Driveway Cleaning Services',
    description: 'Professional pressure washing and driveway cleaning in Lowton. Expert exterior cleaning, roof soft washing, and gutter cleaning. Free quotes available.',
  },
  'haydock': {
    title: 'Pressure Washing Haydock | Professional Exterior Cleaning',
    description: 'Expert pressure washing and driveway cleaning in Haydock. Professional exterior cleaning services for homes and businesses. Fast, reliable, 5-star rated.',
  },
  'earlestown': {
    title: 'Pressure Washing in Earlestown | Driveway & Roof Cleaning',
    description: 'Professional pressure washing and driveway cleaning in Earlestown. Expert exterior cleaning, soft roof washing. Quick response times, local service.',
  },
  'burtonwood': {
    title: 'Pressure Washing Burtonwood | Professional Exterior Cleaning',
    description: 'Expert pressure washing and driveway cleaning in Burtonwood. Professional exterior cleaning services for residential and commercial properties.',
  },
  'ashton-in-makerfield': {
    title: 'Pressure Washing Ashton-in-Makerfield | Exterior Cleaning',
    description: 'Professional pressure washing and exterior cleaning in Ashton-in-Makerfield. Expert driveway cleaning, roof soft washing, and gutter services.',
  },
  'golborne': {
    title: 'Pressure Washing in Golborne | Driveway & Roof Cleaning',
    description: 'Professional pressure washing and exterior cleaning in Golborne. Expert driveway cleaning, soft roof washing, and gutter services in Golborne.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ areaSlug: string }> }): Promise<Metadata> {
  const { areaSlug } = await params;
  const meta = areaMetadata[areaSlug];
  
  if (!meta) {
    return {
      title: 'Service Area | R.R.M Exterior Cleaning',
      description: 'Professional exterior cleaning services in your area.',
    };
  }

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function AreaPage({ params }: { params: Promise<{ areaSlug: string }> }) {
  const { areaSlug } = await params;
  return <AreaPageContent params={{ areaSlug }} />;
}
