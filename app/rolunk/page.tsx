import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rólunk | Hungary Baseball',
  description: 'Ismerjedj meg a Hungary Baseball misszióját és célját. Csatlakozz hozzánk a baseball közösséghez.',
}

export default function RolunkPage() {
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
              Rólunk
            </p>
            <h1 className="heading-xl mb-6 slide-up">Rólunk</h1>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl fade-in" style={{ animationDelay: '0.2s' }}>
              A Hungary Baseball célja, hogy népszerűsítse és fejlessze a baseballot Magyarországon. Hiszünk a baseball értékeiben és közösségében.
            </p>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container-base max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="slide-in-left">
                <h2 className="heading-md mb-6 fade-in">Misszió</h2>
                <p className="text-foreground/70 leading-relaxed mb-6 fade-in" style={{ animationDelay: '0.1s' }}>
                  A baseball egy megreformáló sport, amely erőt, csapatmunkát és tiszteletet tanít. A mi missziónk az, hogy megalkossunk egy vibráló baseball közösséget Magyarországon.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-6 fade-in" style={{ animationDelay: '0.2s' }}>
                  Azt akarjuk, hogy a baseball hozzáférhető legyen mindenkinek, kortól, képességtől vagy tapasztalattól függetlenül. Platformunk célja, hogy a játékosok tanuljanak, fejlődjenek és összekapcsolódjanak.
                </p>
              </div>

              <div className="slide-in-right hover:scale-105 transition-transform duration-500">
                <h2 className="heading-md mb-6 fade-in">Értékek</h2>
                <div className="space-y-6">
                  <div className="scale-in p-6 bg-gradient-to-br from-primary/10 to-transparent border border-white/5 rounded-lg hover:border-primary/50 transition-colors cursor-pointer" style={{ animationDelay: '0.1s' }}>
                    <h3 className="font-semibold text-foreground mb-2">Csapatmunka</h3>
                    <p className="text-foreground/70 text-sm">A baseball csapatsport. A csapattársak együtt küzdenek a közös sikerért.</p>
                  </div>
                  <div className="scale-in p-6 bg-gradient-to-br from-accent/10 to-transparent border border-white/5 rounded-lg hover:border-accent/50 transition-colors cursor-pointer" style={{ animationDelay: '0.2s' }}>
                    <h3 className="font-semibold text-foreground mb-2">Tisztelet</h3>
                    <p className="text-foreground/70 text-sm">Az ellenfél, a társak és önmagunk tiszteletét értékeljük. A tisztelet a baseball alapja.</p>
                  </div>
                  <div className="scale-in p-6 bg-gradient-to-br from-primary/10 to-transparent border border-white/5 rounded-lg hover:border-primary/50 transition-colors cursor-pointer" style={{ animationDelay: '0.3s' }}>
                    <h3 className="font-semibold text-foreground mb-2">Kitartás</h3>
                    <p className="text-foreground/70 text-sm">A baseball kitartást tanít. Szükséges a nehéz helyzetekben és a pihenőkben is.</p>
                  </div>
                  <div className="scale-in p-6 bg-gradient-to-br from-accent/10 to-transparent border border-white/5 rounded-lg hover:border-accent/50 transition-colors cursor-pointer" style={{ animationDelay: '0.4s' }}>
                    <h3 className="font-semibold text-foreground mb-2">Integritás</h3>
                    <p className="text-foreground/70 text-sm">A fair play a baseball szíve. Az integritás szükséges a játékban és az életben egyaránt.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-gradient-to-br from-secondary/10 to-transparent relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-20">
            <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          </div>
          <div className="container-base max-w-3xl mx-auto">
            <h2 className="heading-md mb-8 text-center fade-in">Lépj Velünk Kapcsolatba</h2>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
