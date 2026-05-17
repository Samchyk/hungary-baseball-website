import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getAllBlogSlugs, getBlogPost } from '@/lib/blog'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Nem Található',
      description: 'A keresett cikk nem található.',
    }
  }

  return {
    title: `${post.title} | Hungary Rugby Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const allPosts = getAllBlogSlugs()
  const currentIndex = allPosts.indexOf(slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <article>
          <section className="section-spacing pt-8">
            <div className="container-base max-w-3xl mx-auto">
              <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
                <span>←</span>
                <span>Vissza a bloghoz</span>
              </Link>

              <div className="mb-8">
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary mb-4">
                  Blog
                </div>
                <h1 className="heading-xl mb-4">{post.title}</h1>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="container-base max-w-3xl mx-auto prose prose-invert max-w-none">
              <div className="prose prose-invert prose-lg text-foreground/80">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('#')) {
                    const level = paragraph.match(/^#+/)?.[0].length || 2
                    const text = paragraph.replace(/^#+\s+/, '')
                    const className = 
                      level === 2 ? 'heading-md mb-4 mt-8' :
                      level === 3 ? 'text-xl font-semibold mb-3 mt-6' :
                      'text-lg font-semibold mb-2 mt-4'
                    return <h2 key={index} className={className}>{text}</h2>
                  }

                  if (paragraph.startsWith('-')) {
                    const items = paragraph.split('\n').filter(line => line.startsWith('-'))
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 my-4 text-foreground/80">
                        {items.map((item, i) => (
                          <li key={i}>{item.replace(/^-\s+/, '')}</li>
                        ))}
                      </ul>
                    )
                  }

                  return (
                    <p key={index} className="text-foreground/80 leading-relaxed my-4">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="section-spacing">
            <div className="container-base max-w-3xl mx-auto">
              <div className="border-t border-white/10 pt-8">
                <div className="grid grid-cols-2 gap-6">
                  {prevPost ? (
                    <Link
                      href={`/blog/${prevPost}`}
                      className="group bg-secondary/10 border border-white/5 rounded-lg p-6 hover:border-primary/50 transition-all hover:bg-secondary/15 text-left"
                    >
                      <p className="text-xs text-foreground/60 mb-2">Előző Cikk</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {getBlogPost(prevPost)?.title || 'Előző'}
                      </p>
                      <p className="text-primary text-sm mt-3">← Vissza</p>
                    </Link>
                  ) : (
                    <div></div>
                  )}

                  {nextPost ? (
                    <Link
                      href={`/blog/${nextPost}`}
                      className="group bg-secondary/10 border border-white/5 rounded-lg p-6 hover:border-primary/50 transition-all hover:bg-secondary/15 text-right"
                    >
                      <p className="text-xs text-foreground/60 mb-2">Következő Cikk</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {getBlogPost(nextPost)?.title || 'Következő'}
                      </p>
                      <p className="text-primary text-sm mt-3">Tovább →</p>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  )
}
