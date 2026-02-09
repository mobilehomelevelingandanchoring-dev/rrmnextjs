import LocationPageContent from '@/pageComponents/LocationPage';

export default async function LocationPage({ params }: { params: Promise<{ locationSlug: string }> }) {
  const { locationSlug } = await params;
  return <LocationPageContent params={{ locationSlug }} />;
}
