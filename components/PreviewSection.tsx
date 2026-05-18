import Link from 'next/link'

interface PreviewSectionProps {
  id?: string
  title: string
  subtitle?: string
  description: string
  ctaText?: string
  ctaHref?: string
  items?: Array<{ title: string; description: string }>
  reverse?: boolean
  imageSrc?: string
}

const imageMap: { [key: string]: string } = {
  technikak: '/images/batting-techniques.jpg',
  tortenet: '/images/vintage-baseball.jpg',
  felszereles: '/images/protective-gear.jpg',
  szabalyok: '/images/diamond-field.jpg',
  pitching: '/images/pitching-training.jpg',
  fielding: '/images/fielding-technique.jpg',
  throwing: '/images/throwing-technique.jpg',
  training: '/images/team-training.jpg',
  batting: '/images/batting-advanced.jpg',
  defense: '/images/base-running.jpg',
  advanced: '/images/player-training.jpg',
  catcher: '/images/catcher-position.jpg',
  history: '/images/baseball-history.jpg',
  equipment: '/images/baseball-equipment.jpg',
  rules: '/images/baseball-rules.jpg',
  strategy: '/images/game-strategy.jpg',
  stadium: '/images/stadium-action.jpg',
  youth: '/images/youth-baseball.jpg',
  summer: '/images/summer-baseball.jpg',
  focus: '/images/focus-training.jpg',
  celebration: '/images/celebration-moment.jpg',
  contact: '/images/contact-hero.jpg',
  blog: '/images/blog-hero.jpg',
  default: '/images/baseball-hero.jpg',
}

export default function PreviewSection({
  id,
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  items,
  reverse = false,
  imageSrc,
}: PreviewSectionProps) {
  const imageUrl = imageSrc || imageMap[id || ''] || imageMap.default

  return (
    <section id={id} className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container-base max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`${reverse ? 'lg:order-2' : ''} slide-up`}>
            {subtitle && (
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 fade-in">
                {subtitle}
              </p>
            )}
            <h2 className="heading-lg mb-6 fade-in" style={{animationDelay: '0.1s'}}>{title}</h2>
            <p className="text-base text-foreground/70 leading-relaxed mb-8 fade-in" style={{animationDelay: '0.2s'}}>
              {description}
            </p>

            {items && (
              <ul className="space-y-4 mb-8 fade-in" style={{animationDelay: '0.3s'}}>
                {items.map((item, index) => (
                  <li key={index} className="flex gap-4 scale-in" style={{animationDelay: `${0.4 + index * 0.1}s`}}>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 pulse-glow"></div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-foreground/60">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {ctaHref && ctaText && (
              <Link href={ctaHref} className="inline-block button-primary hover:scale-105 transition-transform fade-in" style={{animationDelay: '0.5s'}}>
                {ctaText}
              </Link>
            )}
          </div>

          <div className={`block ${reverse ? 'lg:order-1' : ''} slide-in-right lg:hover:scale-105 transition-transform duration-500`}>
            <div className="relative h-56 sm:h-72 lg:h-96 rounded-2xl border border-white/5 overflow-hidden shadow-2xl group">
              <img
                src={imageUrl}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block px-6 py-3 bg-primary rounded-lg text-primary-foreground font-semibold hover:bg-accent transition-colors">
                    Megtekintés
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
