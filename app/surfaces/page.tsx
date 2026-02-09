import { Layout } from '@/components/layout/Layout';
import SurfacesIndexContent from '@/pageComponents/SurfacesIndex';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cleaning by Surface Type | Block Paving, Render, Roofs & More',
  description:
    'Professional cleaning solutions tailored to different surfaces including block paving, render, roof tiles, and more.',
};

export default function SurfacesPage() {
  return <SurfacesIndexContent />;
}
