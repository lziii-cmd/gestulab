import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import BackToTop from '@/components/shared/BackToTop';
import ProjectDetail from '@/components/projects/ProjectDetail';
import { allProjects, getProjectBySlug } from '@/lib/projects';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProjects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.titleFr,
    description: project.descFr,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
