import SurfacePageContent from '@/pageComponents/SurfacePage';

export default async function SurfacePage({ params }: { params: Promise<{ surfaceSlug: string }> }) {
  const { surfaceSlug } = await params;
  return <SurfacePageContent params={{ surfaceSlug }} />;
}
