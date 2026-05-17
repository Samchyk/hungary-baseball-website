import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/blog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Hungary Baseball',
  description: 'Olvasd a legújabb cikkeket és útmutatókat a baseballról, technikákról, stratégiáról és számos egyéb témáról.',
}

export default function BlogPage() {
  const articles = getAllBlogPosts()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <section className="section-spacing pt-8 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-20">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          </div>
          <div className="container-base max-w-7xl mx-auto">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 fade-in">
              Cikkek és Útmutatók
            </p>
            <h1 className="heading-xl mb-6 slide-up">Blog</h1>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl fade-in" style={{animationDelay: '0.2s'}}>
              Fedezd fel a baseball világát útmutatóinkon és cikkeinken keresztül. Technikáktól a stratégiáig, mindent megtalálsz itt.
            </p>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-base max-w-7xl mx-auto">
            {articles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-foreground/60">Még nincsenek cikkek publikálva.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group bg-gradient-to-br from-secondary/20 to-secondary/5 border border-white/5 rounded-xl p-8 hover:border-primary/50 transition-all hover:bg-secondary/15 hover:shadow-lg hover:scale-105 scale-in"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="mb-4">
                      <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-xs font-semibold text-primary">
                        Blog
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-foreground/60 line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Továbbá <span className="ml-2">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
