import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PreviewSection from '@/components/PreviewSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Baseball Technikák és Edzés | Hungary Baseball',
  description: 'Tanuld meg a baseball alapvető és haladó technikáit. Ütés, dobás, mezőjáték és futás útmutatók.',
}

export default function TechnikakPage() {
  const basicTechniques = [
    { title: 'Ütés Alapok', description: 'Az alapvető ütéstechnika és a swing helyes képzése.' },
    { title: 'Dobás Alapok', description: 'A dobás technikája és a kontrol fejlesztése.' },
    { title: 'Fogás Alapok', description: 'A helyes fogástechnika különböző helyzetekből.' },
  ]

  const defenseTechniques = [
    { title: 'Mezőjáték', description: 'A labda megfogása és a helyes pozicionálás a pályán.' },
    { title: 'Dobás Pontosság', description: 'Az alapok közötti pontos dobások és csapatjáték.' },
    { title: 'Helyzetesség', description: 'Az elhelyezkedés és a labda előrejelzése.' },
  ]

  const advancedTechniques = [
    { title: 'Speciális Ütések', description: 'A bunt, sacrifice és egyéb speciális ütéstechnikák.' },
    { title: 'Stratégiai Futás', description: 'Az alapok közötti intelligens futás és diezmálás.' },
    { title: 'Picsi Stratégia', description: 'A dobó stratégiája és az ütőtől való távolság kezelése.' },
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
              Tanulási Útmutató
            </p>
            <h1 className="heading-xl mb-6 slide-up">Baseball Technikák</h1>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl fade-in" style={{animationDelay: '0.2s'}}>
              A baseball sikeres játékához szükséges összes technikát tanulhatod meg itt. Az alapoktól a haladó technikákig, minden, amit tudnod kell.
            </p>
          </div>
        </section>

        <PreviewSection
          id="batting"
          imageSrc="/images/batting-advanced.jpg"
          subtitle="Alap"
          title="Alapvető Technikák"
          description="Kezdd az alapokkal. Az alapvető ütés, dobás és fogás technikák elsajátítása a baseball képességek alapja. Ezek az összes többi technika alapjául szolgálnak."
          items={basicTechniques}
        />

        <PreviewSection
          id="defense"
          imageSrc="/images/fielding-technique.jpg"
          subtitle="Védelem"
          title="Védelmi Technikák"
          description="A hatékony védekezés kulcsa a helyes pozicionálás, az anticipáció és a pontos dobások. Tanuld meg az alapvető védelmi pozíciókat."
          items={defenseTechniques}
          reverse
        />

        <PreviewSection
          id="advanced"
          imageSrc="/images/player-training.jpg"
          subtitle="Haladó"
          title="Haladó Technikák"
          description="Miután elsajátítottad az alapokat, ideje megtanulni a haladó technikákat. Ezek az egyéni készségek és stratégiai gondolkodás fejlesztésére összpontosítanak."
          items={advancedTechniques}
        />

        <section className="section-spacing">
          <div className="container-base max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-white/5 rounded-2xl p-12 glow-border">
              <h2 className="heading-md mb-4 fade-in">Edzési Tippek</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="scale-in" style={{animationDelay: '0.1s'}}>
                  <h3 className="font-semibold text-foreground mb-2">Rendszeres Edzés</h3>
                  <p className="text-foreground/70">A technika fejlesztéséhez rendszeres, fókuszált edzés szükséges. Legalább 3-4 alkalommal hetente gyakorolj.</p>
                </div>
                <div className="scale-in" style={{animationDelay: '0.2s'}}>
                  <h3 className="font-semibold text-foreground mb-2">Csapat Munka</h3>
                  <p className="text-foreground/70">A baseball egy csapatsport. Mindig csapattal gyakorolj, hogy megértsed a pozíciókat és a csapat dinamikáját.</p>
                </div>
                <div className="scale-in" style={{animationDelay: '0.3s'}}>
                  <h3 className="font-semibold text-foreground mb-2">Videó Analízis</h3>
                  <p className="text-foreground/70">Nézd meg a profik játékát és elemezd technikáikat. Ez segít megérteni a helyes forma és mozgásokat.</p>
                </div>
                <div className="scale-in" style={{animationDelay: '0.4s'}}>
                  <h3 className="font-semibold text-foreground mb-2">Fizikai Felkészítés</h3>
                  <p className="text-foreground/70">Erő, kitartás és rugalmasság gyakorlatok nélkülözhetetlenek a baseball játékához.</p>
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
