import AreaPageContent from '@/pageComponents/AreaPage';

export default async function AreaPage({ params }: { params: Promise<{ areaSlug: string }> }) {
  const { areaSlug } = await params;
  return <AreaPageContent params={{ areaSlug }} />;
}
