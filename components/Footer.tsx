import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/10 mt-auto">
      <div className="container-base max-w-7xl mx-auto section-spacing">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="fade-in">
            <h3 className="text-lg font-bold text-primary mb-4">hungarybaseball</h3>
            <p className="text-sm text-foreground/60">
              Fedezd fel a baseball világát. Technikák, történelem és szabályok egy helyen.
            </p>
          </div>

          <div className="fade-in" style={{animationDelay: '0.1s'}}>
            <h4 className="text-sm font-semibold text-foreground mb-4">Oldal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/technikak" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Technikák
                </Link>
              </li>
              <li>
                <Link href="/tortenet" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Történelem
                </Link>
              </li>
              <li>
                <Link href="/felszereles" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Felszerelés
                </Link>
              </li>
              <li>
                <Link href="/szabalyok" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Szabályok
                </Link>
              </li>
            </ul>
          </div>

          <div className="fade-in" style={{animationDelay: '0.2s'}}>
            <h4 className="text-sm font-semibold text-foreground mb-4">Tartalom</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/rolunk" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Rólunk
                </Link>
              </li>
            </ul>
          </div>

          <div className="fade-in" style={{animationDelay: '0.3s'}}>
            <h4 className="text-sm font-semibold text-foreground mb-4">Jogi</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/cookie-policy" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Cookie-k
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Adatvédelem
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-foreground/40 text-center">
            © {new Date().getFullYear()} Hungary Baseball. Minden jog fenntartva.
          </p>
          <p>contact@hungarybaseball.com</p>
        </div>
      </div>
    </footer>
  )
}
