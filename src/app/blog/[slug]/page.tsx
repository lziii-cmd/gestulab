import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import BackToTop from '@/components/shared/BackToTop';
import BlogPostDetail from '@/components/blog/BlogPostDetail';
import { blogPosts, getPostBySlug } from '@/lib/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.titleFr,
    description: post.excerptFr,
    openGraph: { title: post.titleFr, description: post.excerptFr },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main>
        <BlogPostDetail post={post} />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
