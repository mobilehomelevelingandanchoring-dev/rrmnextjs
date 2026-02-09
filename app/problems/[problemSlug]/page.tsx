import ProblemPageContent from '@/pageComponents/ProblemPage';

export default async function ProblemPage({ params }: { params: Promise<{ problemSlug: string }> }) {
  const { problemSlug } = await params;
  return <ProblemPageContent params={{ problemSlug }} />;
}
