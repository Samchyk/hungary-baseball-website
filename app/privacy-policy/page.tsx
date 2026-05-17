import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adatvédelmi szabályzat | Hungary Rugby',
  description: 'A Hungary Rugby adatvédelmi szabályzata.',
}

export default function PrivacyPolicyPage() {
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
            <h1 className="heading-lg mb-4">Adatvédelmi Szabályzat</h1>
            <p className="text-sm text-foreground/60">
              Utolsó frissítés: {formattedDate}
            </p>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-base max-w-4xl mx-auto prose prose-invert max-w-none text-foreground/80">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Bevezetés</h2>
            <p className="mb-6 leading-relaxed">
              A Hungary Rugby (így tovább: a "weboldal") fontosnak tartja a felhasználó adatait az a biztonságát. Ez az adatvédelmi szabályzat megmagyarázza, hogy hogyan gyűjtjük, használjuk és védjük az adatokat.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">2. Szerzett Adatok</h2>
            <p className="mb-4 leading-relaxed">
              Az weboldal a következő adatokat szerzett:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-foreground/80">
              <li>Név és e-mail cím az az kapcsolati forma által</li>
              <li>IP-cím és böngésző adatok</li>
              <li>Felhasználói viselkedés az weboldal használat során</li>
              <li>Cookie-k és hasonló tracking technológiák</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">3. Adatok Használata</h2>
            <p className="mb-4 leading-relaxed">
              Az szerzett adatokat a következő céloklal használjuk:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-foreground/80">
              <li>Az weboldal működésének biztosítása</li>
              <li>Az felhasználói kérdések megválaszolása</li>
              <li>Az weboldal teljesítménye javítása</li>
              <li>Az hirdetések személyre szabása</li>
              <li>Az jogi kötelezettségek teljesítése</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">4. Adatok Megosztása</h2>
            <p className="mb-6 leading-relaxed">
              Az adatokat nem megosztjuk harmadik fél felhasználók nélküli az kifejezett beleegyezésünk nélkül. A bizonyos helyzetekben (pl. jogi kötelezettségek) szükség lehet az adatok közlésére.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">5. Adatok Biztonsága</h2>
            <p className="mb-6 leading-relaxed">
              Az az összes adatot az megfelelő technikai és szervezeti intézkedésekkel védjük az illetéktelen hozzáférésből és az adatvédelmi sérülésektől.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">6. Felhasználó Jogai</h2>
            <p className="mb-4 leading-relaxed">
              A felhasználó az az következő jogokkal rendelkezik:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 text-foreground/80">
              <li>Hozzáférés az szerzett adatokhoz</li>
              <li>Az adatok korrigálása</li>
              <li>Az adatok törlése</li>
              <li>Az adatok feldolgozásának korlátozása</li>
              <li>Az adatok hordozhatósága</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">7. Adatmegőrzési Idő</h2>
            <p className="mb-6 leading-relaxed">
              Az adatokat az addig tartjuk meg, amíg szükséges az az az megjelölt célra. Ha már nem szükséges az az az adatok, akkor biztonságosan töröljük.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">8. Kapcsolatfelvétel</h2>
            <p className="mb-6 leading-relaxed">
              Ha kérdéseid vannak az adatvédelem szabályzatról vagy az felhasználó jogairól, kérjük lépj velünk kapcsolatba az <a href="/rolunk" className="text-primary hover:underline">kapcsolat</a> oldalon.
            </p>

            <div className="bg-secondary/20 border border-white/10 rounded-lg p-6 mt-8">
              <p className="text-sm text-foreground/70">
                Ez az adatvédelmi szabályzat bármikor frissítésre kerülhet az értesítés nélkül. Az felhasználó felelős az szabályzat rendszeres megtekintéséért.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
