import Link from 'next/link'

interface BlogPreviewProps {
  articles: Array<{
    slug: string
    title: string
    excerpt: string
  }>
}

export default function BlogPreviewSection({ articles }: BlogPreviewProps) {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container-base max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 fade-in">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
              Legújabb tartalom
            </p>
            <h2 className="heading-lg">Blog</h2>
          </div>
          <Link href="/blog" className="hidden md:block button-secondary hover:scale-105 transition-transform">
            Összes cikk
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-gradient-to-br from-secondary/20 to-secondary/5 border border-white/5 rounded-xl p-8 hover:border-primary/50 transition-all hover:bg-secondary/15 hover:shadow-lg hover:scale-105 scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-foreground/60 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="mt-6 flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                Továbbá <span className="ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="md:hidden fade-in">
          <Link href="/blog" className="block button-secondary text-center hover:scale-105 transition-transform">
            Összes cikk
          </Link>
        </div>
      </div>
    </section>
  )
}
