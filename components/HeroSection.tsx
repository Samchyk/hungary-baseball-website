export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container-base max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 slide-in-left">
            <div>
              <h1 className="heading-xl mb-4 leading-tight fade-in">
                Fedezd fel a baseball <span className="text-primary">világát</span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed fade-in" style={{animationDelay: '0.2s'}}>
                A baseball nem csak egy sport, hanem egy közösség. Tanulj meg az alapoktól, fejleszd képességeidet, és csatlakozz a játékosok világához.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 fade-in" style={{animationDelay: '0.4s'}}>
              <a
                href="#technikak"
                className="button-primary text-center hover:scale-105 transition-transform"
              >
                Kezdd el a tanulást
              </a>
              <a
                href="/blog"
                className="button-secondary text-center hover:scale-105 transition-transform"
              >
                Olvasd a blogot
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center slide-in-right">
            <div className="relative w-full h-96">
              <img
                src="/images/baseball-hero.jpg"
                alt="Baseball player"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl float"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
