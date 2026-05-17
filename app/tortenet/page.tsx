import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FactsSection from '@/components/FactsSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Baseball Története | Hungary Baseball',
  description: 'Fedezd fel a baseball történetét, annak eredetét és fejlődését Magyarországon és világszerte.',
}

export default function TortenetPage() {
  const historyFacts = [
    { number: '1839', label: 'Évszázad', description: 'Az első baseball mérkőzés dokumentálva az USA-ban' },
    { number: '1869', label: 'Év', description: 'Az első profi baseball liga, a National League megalapítása' },
    { number: '1903', label: 'Év', description: 'Az első World Series a Boston Red Sox és Pittsburgh Pirates között' },
    { number: '130+', label: 'Ország', description: 'Több mint 130 ország játszik baseballot világszerte' },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <section className="section-spacing pt-8 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-20">
            <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          </div>
          <div className="container-base max-w-7xl mx-auto">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2 fade-in">
              Történeti Háttér
            </p>
            <h1 className="heading-xl mb-6 slide-up">A Baseball Története</h1>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl fade-in" style={{animationDelay: '0.2s'}}>
              A baseball több mint 180 éves történetű sport, amely az USA-ban kezdődött és világméretű sportággá fejlődött. Ismerkedj meg a sport egy lenyűgöző fejlődésével.
            </p>
          </div>
        </section>

        <FactsSection title="Történeti Mérföldkövek" facts={historyFacts} />

        <section className="section-spacing">
          <div className="container-base max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="slide-in-left">
                <h2 className="heading-md mb-6 fade-in">A Kezdetek</h2>
                <div className="space-y-6">
                  <p className="text-foreground/70 leading-relaxed fade-in" style={{animationDelay: '0.1s'}}>
                    A baseball az 1800-as évek közepén fejlődött ki az USA-ban, különböző brit labdajátékok, mint a cricket és a Rounders alapján. Az 1839-ben megrendezett első dokumentált mérkőzés az Abner Doubleday által Cooperstownban feltételezhetően feltalálódott.
                  </p>
                  <p className="text-foreground/70 leading-relaxed fade-in" style={{animationDelay: '0.2s'}}>
                    1869-ben az első profi baseball csapat, a Cincinnati Red Stockings megalakult, megnyitva az utat a professzionális baseball ligák számára. Ez a fordulópont felgyorsította a sport szervezett fejlődését.
                  </p>
                </div>
              </div>

              <div className="slide-in-right">
                <h2 className="heading-md mb-6 fade-in">Nemzetközi Fejlődés</h2>
                <div className="space-y-6">
                  <p className="text-foreground/70 leading-relaxed fade-in" style={{animationDelay: '0.1s'}}>
                    A 20. század második felében a baseball gyorsan terjedt a világban, különösen Japánban, Koreában, Kubában és Latin-Amerikában. A nemzetközi bajnokságok és a világbajnokság létrehozása globálisan növelte a sport népszerűségét.
                  </p>
                  <p className="text-foreground/70 leading-relaxed fade-in" style={{animationDelay: '0.2s'}}>
                    A World Baseball Classic, amelyet 2006 óta rendeznek, az egyik legpresztízsesebbé vált nemzetközi baseball verseny, amely a világ legjobb játékosait hozza össze.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-base max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="heading-md mb-6">A Baseball Magyarországon</h2>
                <div className="space-y-6">
                  <p className="text-foreground/70 leading-relaxed">
                    Magyarország baseball története az 1980-as évekre nyúlik vissza, amikor az első csapatok alakultak meg. A sport azóta jelentős fejlődésen ment keresztül az országban.
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    Ma Magyarország aktív baseball nemzetként ismert, amely versenyez a nemzetközi bajnokságokon. A magyar baseball közösség folyamatosan növekszik, és több fiatal játékos csatlakozik a sporthoz.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="heading-md mb-6">Modern Korszak</h2>
                <div className="space-y-6">
                  <p className="text-foreground/70 leading-relaxed">
                    A 21. századi baseball professzionális sportként fejlődik, nagy pénzügyi támogatással és globális közvetítéssel. A baseball ligák a világ egyik legvirtuozabb sportjává váltak.
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    A női baseball fejlődése is figyelemre méltó. Az utóbbi évtizedben a női baseball csapatok és liga fejlődése nagy figyelmet kapott, és a női játékosok egyre több felismerést kapnak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-base max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-white/5 rounded-2xl p-12">
              <h2 className="heading-md mb-4">Baseball Kultúra</h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                A baseball nem csak egy sport, hanem egy közösség és egy kultúra. Az olyan értékek, mint a csapatmunka, a tisztelet, a fizikai és szellemi kitartás, és a kamarádsság a baseball kultúra alapját képezi. A baseball közösség világszerte erős és támogató, amely támogatja a játékosokat és szurkolókat egyaránt.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
