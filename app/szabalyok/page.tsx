import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Baseball Szabályok | Hungary Baseball',
  description: 'Tanuld meg a baseball szabályait, a pontozás rendszerét és a játékvezetés módját.',
}

export default function SzabalyokPage() {
  const positions = [
    { number: '1', name: 'Pitcher', description: 'A dobó, aki a baseballot az ütőhöz dobja' },
    { number: '2', name: 'Catcher', description: 'A fogó, aki a játékvezetővel dolgozik és fogja az ütéseket' },
    { number: '3', name: 'First Baseman', description: 'Az első alap védelmezője' },
    { number: '4', name: 'Second Baseman', description: 'A második alap védelmezője' },
    { number: '5', name: 'Third Baseman', description: 'A harmadik alap védelmezője' },
    { number: '6', name: 'Shortstop', description: 'A rövid stop, a mező közepének védelme' },
    { number: '7-9', name: 'Outfielders', description: 'A külső mező végén játszó védelmezők' },
  ]

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
              Játékszabályok
            </p>
            <h1 className="heading-xl mb-6 slide-up">A Baseball Szabályai</h1>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl fade-in" style={{animationDelay: '0.2s'}}>
              A baseball szisztematikus szabályrendszerre épül, amely biztosítja a fair play-et és a verseny szellemét. Tanulj meg az alapvető szabályokról.
            </p>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-base max-w-7xl mx-auto">
            <h2 className="heading-md mb-8 fade-in">Alapvető Szabályok</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 border border-white/5 rounded-xl p-8 scale-in hover:shadow-lg hover:border-white/10 transition-all">
                <h3 className="font-semibold text-foreground mb-4">Játékidő és Pálya</h3>
                <ul className="space-y-3 text-foreground/70 text-sm">
                  <li><span className="text-primary font-bold">Inning:</span> 9 inning egy mérkőzésben</li>
                  <li><span className="text-primary font-bold">Alaptávolság:</span> 90 láb</li>
                  <li><span className="text-primary font-bold">Dobó távolság:</span> 60 láb 6 hüvelyk</li>
                  <li><span className="text-primary font-bold">Csapat:</span> 9 játékos a pályán</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 border border-white/5 rounded-xl p-8 scale-in" style={{animationDelay: '0.1s'}} >
                <h3 className="font-semibold text-foreground mb-4">Pontozás</h3>
                <ul className="space-y-3 text-foreground/70 text-sm">
                  <li><span className="text-primary font-bold">Run (Futás):</span> 1 pont</li>
                  <li><span className="text-primary font-bold">Home Run:</span> 4 futás</li>
                  <li><span className="text-primary font-bold">Strike:</span> 3 után kimarad az ütő</li>
                  <li><span className="text-primary font-bold">Ball:</span> 4 után az ütő az első alapra mehet</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 border border-white/5 rounded-xl p-8 scale-in" style={{animationDelay: '0.2s'}}>
                <h3 className="font-semibold text-foreground mb-4">Labda Kezelés</h3>
                <ul className="space-y-3 text-foreground/70 text-sm">
                  <li><span className="text-primary font-bold">Fair ball:</span> A végzón és alapok között az ütés</li>
                  <li><span className="text-primary font-bold">Foul ball:</span> Vonal túl nagy vagy rossz helyen</li>
                  <li><span className="text-primary font-bold">Strike zone:</span> A csáp vállán és térdénél</li>
                  <li><span className="text-primary font-bold">Out:</span> Visszavéges fogás vagy bázis érintés</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 border border-white/5 rounded-xl p-8 scale-in" style={{animationDelay: '0.3s'}}>
                <h3 className="font-semibold text-foreground mb-4">Futás és Bázisok</h3>
                <ul className="space-y-3 text-foreground/70 text-sm">
                  <li><span className="text-primary font-bold">Futás:</span> Az összes alap megkerülése</li>
                  <li><span className="text-primary font-bold">Ütemesítés:</span> Az alapok sorrendben történő érkezése</li>
                  <li><span className="text-primary font-bold">Stolen base:</span> Az ütő nélkül futás az alapra</li>
                  <li><span className="text-primary font-bold">Out on a base:</span> A védelem először érinti az alapot</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-base max-w-7xl mx-auto">
            <h2 className="heading-md mb-8 fade-in">Pozíciók a Pályán</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {positions.map((pos, index) => (
                <div key={index} className="bg-gradient-to-br from-primary/10 to-accent/10 border border-white/5 rounded-xl p-6 scale-in hover:shadow-lg hover:border-white/10 transition-all" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold text-sm pulse-glow">
                        {pos.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{pos.name}</h3>
                      <p className="text-sm text-foreground/60 mt-1">{pos.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-base max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="slide-in-left">
                <h2 className="heading-md mb-6 fade-in">Tipikus Játéksituációk</h2>
                <div className="space-y-6">
                  <div className="scale-in" style={{animationDelay: '0.1s'}}>
                    <h3 className="font-semibold text-foreground mb-2">Strike Zone</h3>
                    <p className="text-foreground/70 text-sm">Az a terület, ahol az ütőnek el kell döntenie ütésről. Ez az ütő vállán és térdei között van.</p>
                  </div>
                  <div className="scale-in" style={{animationDelay: '0.2s'}}>
                    <h3 className="font-semibold text-foreground mb-2">Double Play</h3>
                    <p className="text-foreground/70 text-sm">Két kimaradás egy játékban történik. Ez gyakran bázis futás közben történik.</p>
                  </div>
                  <div className="scale-in" style={{animationDelay: '0.3s'}}>
                    <h3 className="font-semibold text-foreground mb-2">Fly Ball</h3>
                    <p className="text-foreground/70 text-sm">Az ütés a levegőbe emelkedik, és ha lebukják, az egy kimaradás.</p>
                  </div>
                  <div className="scale-in" style={{animationDelay: '0.4s'}}>
                    <h3 className="font-semibold text-foreground mb-2">Ground Ball</h3>
                    <p className="text-foreground/70 text-sm">Az ütés a talajra csapódik, és a védelem kimaradást kérdez a bázisok elérése előtt.</p>
                  </div>
                </div>
              </div>

              <div className="slide-in-right">
                <h2 className="heading-md mb-6 fade-in">Büntetések és Szabálycsalások</h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-white/5 rounded-lg p-5 scale-in hover:shadow-lg hover:border-white/10 transition-all" style={{animationDelay: '0.1s'}}>
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full pulse-glow"></span>
                      Balking
                    </h3>
                    <p className="text-sm text-foreground/70">A dobó hibás mozdulata, futó halad az alapra</p>
                  </div>
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-white/5 rounded-lg p-5 scale-in hover:shadow-lg hover:border-white/10 transition-all" style={{animationDelay: '0.2s'}}>
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full pulse-glow"></span>
                      Interference
                    </h3>
                    <p className="text-sm text-foreground/70">Az ütő vagy futó megzavarja a védelmet, kimaradás</p>
                  </div>
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-white/5 rounded-lg p-5 scale-in hover:shadow-lg hover:border-white/10 transition-all" style={{animationDelay: '0.3s'}}>
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full pulse-glow"></span>
                      Illegal Pitch
                    </h3>
                    <p className="text-sm text-foreground/70">A dobó szabályt sért, futó halad az alapra</p>
                  </div>
                  <div className="bg-gradient-to-br from-accent/10 to-accent/5 border border-white/5 rounded-lg p-5 scale-in hover:shadow-lg hover:border-white/10 transition-all" style={{animationDelay: '0.4s'}}>
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full pulse-glow"></span>
                      Ejection
                    </h3>
                    <p className="text-sm text-foreground/70">A játékos eltiltva a játékból az impertinent viselkedésért</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
