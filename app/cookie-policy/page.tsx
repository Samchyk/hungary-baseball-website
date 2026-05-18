import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Szabályzat | Hungary Baseball',
  description: 'A Hungary Baseball cookie szabályzata.',
}

export default function CookiePolicyPage() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <section className="section-spacing pt-8">
          <div className="container-base max-w-4xl mx-auto">
            <h1 className="heading-lg mb-4">Cookie Szabályzat</h1>
            <p className="text-sm text-foreground/60">
              Utolsó frissítés: {formattedDate}
            </p>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-base max-w-4xl mx-auto prose prose-invert max-w-none text-foreground/80">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Mi a Cookie?</h2>
            <p className="mb-6 leading-relaxed">
              A cookie-k kisméretű szövegfájlok, amelyeket a weboldalak a felhasználó böngészőjébe helyeznek. Ezek az olyan információkat tárolnak, amelyek segítik az weboldal működését és javítják a felhasználói élményt.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">2. Cookie-k Típusai</h2>
            <p className="mb-4 leading-relaxed">
              Weboldalunk a következő cookie-k típusait használja:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-foreground/80">
              <li><strong>Szükséges Cookie-k:</strong> Az az weboldal működéséhez szükséges</li>
              <li><strong>Teljesítményi Cookie-k:</strong> Az az weboldal teljesítménye monitorozása</li>
              <li><strong>Funkcionális Cookie-k:</strong> Az az felhasználói preferenciák megjegyzése</li>
              <li><strong>Marketing Cookie-k:</strong> Az az hirdetések személyre szabása</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">3. Hogyan Használjuk a Cookie-kat?</h2>
            <p className="mb-6 leading-relaxed">
              A cookie-kat a következő céloklal használjuk:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-foreground/80">
              <li>Az weboldal működésének biztosítása</li>
              <li>A felhasználói preferenciák megjegyzése</li>
              <li>A weboldal teljesítménye elemzése</li>
              <li>A hirdetések személyre szabása</li>
              <li>Az felhasználói élmény javítása</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">4. Felhasználói Kontrolla</h2>
            <p className="mb-6 leading-relaxed">
              A felhasználó kontrollálhatja a cookie-kat az böngészőjén. A legtöbb böngésző lehetőséget ad az cookie-k blokkolására vagy törlésére.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">5. Adatvédelem</h2>
            <p className="mb-6 leading-relaxed">
              Az összes szerzett adatot biztonságosan kezeljük. Az adatainkat nem osztjuk meg harmadik fél felhasználók nélküli beleegyezésük nélkül.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">6. Kapcsolatfelvétel</h2>
            <p className="mb-6 leading-relaxed">
              Ha kérdéseid vannak az cookie szabályzatról, kérjük lépj velünk kapcsolatba az <a href="/rolunk" className="text-primary hover:underline">kapcsolat</a> oldalon.
            </p>

            <div className="bg-secondary/20 border border-white/10 rounded-lg p-6 mt-8">
              <p className="text-sm text-foreground/70">
                Ez az cookie szabályzat bármikor frissítésre kerülhet az értesítés nélkül. Az felhasználó felelős az szabályzat rendszeres megtekintéséért.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
