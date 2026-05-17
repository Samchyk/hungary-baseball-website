import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Baseball Felszerelés Útmutató | Hungary Baseball',
  description: 'Fedezd fel a baseballhoz szükséges teljes felszerelést. Védőfelszerelések, alapvető eszközök és biztonsági berendezések.',
}

export default function FelszerelesPage() {
  const equipment = [
    {
      category: 'Fej Védelem',
      items: [
        'Baseball sisak szájvédővel',
        'Fogvédő',
        'Fejprotektáló betét',
      ],
    },
    {
      category: 'Felsőtest Védelem',
      items: [
        'Baseball jersey',
        'Mellvédő (fogó)',
        'Váll párnák',
        'Karokon felüli védelmi felszerelés',
      ],
    },
    {
      category: 'Alsótest Védelem',
      items: [
        'Baseball rövidnadrág',
        'Térd párnák',
        'Comb védő',
        'Támogatás (cup)',
      ],
    },
    {
      category: 'Lábak és Cipők',
      items: [
        'Baseball cipők (cleats)',
        'Sportzokni',
        'Szárrögbi lábmelegítő (opcionális)',
      ],
    },
    {
      category: 'Fő Eszközök',
      items: [
        'Baseball ütő (különféle súly és méret)',
        'Baseball labda',
        'Kesztyű (különféle pozíciókhoz)',
        'Fogó kesztyű (fogó számára)',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <section className="section-spacing pt-8 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-20">
            <div className="absolute top-20 left-1/2 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          </div>
          <div className="container-base max-w-7xl mx-auto">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 fade-in">
              Felszerelés Útmutató
            </p>
            <h1 className="heading-xl mb-6 slide-up">Baseball Felszerelés</h1>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl fade-in" style={{animationDelay: '0.2s'}}>
              A biztonság az első prioritás a baseballban. Ismerkedj meg az összes szükséges védőfelszerelésekkel és sporteszközökkel, amelyek helyes választása nélkülözhetetlen.
            </p>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-base max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {equipment.map((section, index) => (
                <div key={index} className="bg-gradient-to-br from-secondary/20 to-secondary/5 border border-white/5 rounded-xl p-8 scale-in hover:shadow-lg transition-shadow" style={{animationDelay: `${index * 0.1}s`}}>
                  <h3 className="text-xl font-semibold text-foreground mb-6 fade-in">{section.category}</h3>
                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 fade-in" style={{animationDelay: `${(index * 0.1) + (itemIndex * 0.05)}s`}}>
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-base max-w-7xl mx-auto">
            <h2 className="heading-md mb-8 fade-in">Biztonsági Útmutató</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-white/5 rounded-xl p-8 scale-in">
                <h3 className="font-semibold text-foreground mb-4 fade-in">Biztonsági Szabályok</h3>
                <ul className="space-y-3 text-foreground/70 text-sm">
                  {[
                    'Mindig viselj teljes védőfelszerelést a gyakorlat vagy meccs előtt.',
                    'Ellenőrizd a felszerelésed, hogy megfelelően illeszkedik és rögzített.',
                    'Időnként cseréld az elhasználódott felszereléseket.',
                    'Figyelj az edzőid utasításaira a helyes szereléshez.'
                  ].map((rule, i) => (
                    <li key={i} className="flex gap-3 fade-in" style={{animationDelay: `${i * 0.1}s`}}>
                      <span className="text-primary font-bold">{i + 1}.</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-white/5 rounded-xl p-8 scale-in" style={{animationDelay: '0.1s'}}>
                <h3 className="font-semibold text-foreground mb-4 fade-in">Felszerelés Karbantartás</h3>
                <ul className="space-y-3 text-foreground/70 text-sm">
                  {[
                    'Rendszeresen mossd a felszereléseket a higiénia fenntartásához.',
                    'Szárítsd meg megfelelően, ne használj szárítógépet.',
                    'Ellenőrizd az eltöréseket vagy sérüléseket rendszeresen.',
                    'Tárolj száraz helyen a romlás elkerülésére.'
                  ].map((rule, i) => (
                    <li key={i} className="flex gap-3 fade-in" style={{animationDelay: `${i * 0.1 + 0.5}s`}}>
                      <span className="text-accent font-bold">{i + 1}.</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-base max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-white/5 rounded-2xl p-12 glow-border">
              <h2 className="heading-md mb-6 fade-in">Méretezés és Illeszkedés</h2>
              <p className="text-foreground/70 leading-relaxed mb-6 fade-in" style={{animationDelay: '0.1s'}}>
                A megfelelő méretezés és illeszkedés kritikus a biztonság és kényelem szempontjából. Az újoncok számára javasolt, hogy tapasztalt közösséggel konzultáljanak a helyes méretezésről. Az alulméretezett felszerelés nem adekvátvédelem, míg az túlméretezett felszerelés zavarhat a mozgásban.
              </p>
              <p className="text-foreground/70 leading-relaxed fade-in" style={{animationDelay: '0.2s'}}>
                A sisak és a fogó felszerelés különösen fontosak. Az megfelelő illeszkedés azt jelenti, hogy az elemek nem tudnak mászni, és az ütővas megfelelően kell rögzítve lennie.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
