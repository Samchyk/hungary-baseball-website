interface FactsGridProps {
  title?: string
  facts: Array<{ number: string; label: string; description?: string }>
}

export default function FactsSection({ title, facts }: FactsGridProps) {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container-base max-w-7xl mx-auto">
        {title && (
          <div className="mb-16 fade-in">
            <h2 className="heading-lg">{title}</h2>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-secondary/20 to-secondary/5 border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all hover:shadow-lg hover:scale-105 scale-in bounce-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl font-bold text-primary mb-3 pulse-glow">{fact.number}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{fact.label}</h3>
              {fact.description && (
                <p className="text-sm text-foreground/60">{fact.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
