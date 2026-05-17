import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import PreviewSection from '@/components/PreviewSection'
import FactsSection from '@/components/FactsSection'
import BlogPreviewSection from '@/components/BlogPreviewSection'
import CookieBanner from '@/components/CookieBanner'

export default function Home() {
  const blogArticles = [
    { slug: 'alapszabalyok', title: 'A Baseball Alapszabályai', excerpt: 'Ismerj meg minden fontos szabályt, amely a baseball játékot szabályozza.' },
    { slug: 'utobachika-technika', title: 'Ütés Technika és Swing Analysis', excerpt: 'Tanulj meg az alapvető és haladó ütéstechnikákat.' },
    { slug: 'dob-gyakorlatok', title: 'Dobás Gyakorlatok és Kontroll', excerpt: 'Fejleszd meg dobási pontosságodat és sebességedet célzott gyakorlatokkal.' },
  ]

  const technikaItems = [
    { title: 'Ütés', description: 'Megtanulni a helyes ütéstechnikát és különböző swing stílusokat.' },
    { title: 'Dobás', description: 'A pontos és gyors dobás alapelvei a védekezéshez és csapatsportban.' },
    { title: 'Fogás', description: 'A megfelelő fogástechnika és mezőjáték alapjai.' },
    { title: 'Futás', description: 'Hatékony futás alapok az alapok közötti gyors mozgásért.' },
  ]

  const tortelemItems = [
    { title: 'Eredete', description: 'A baseball fejlődése az 1800-as évek Amerikájából, és hogyan lett nemzeti sportnak.' },
    { title: 'Nemzetközi Fejlődés', description: 'Hogyan terjedt a baseball világszerte és vált nemzetközi tornák helyszínévé.' },
    { title: 'Magyarország', description: 'A baseball története és fejlődése Magyarországon az elmúlt évtizedekben.' },
    { title: 'Modern Korszak', description: 'A baseball mai helyzete, profi ligák és világbajnokságok.' },
  ]

  const felszerelesFacts = [
    { number: '9', label: 'Játékos', description: 'egy csapatban a pályán' },
    { number: '9', label: 'Inning', description: 'egy mérkőzésben' },
    { number: '90 láb', label: 'Alaptávolság', description: 'az alapok között' },
    { number: '60 láb', label: 'Dobó távolság', description: 'a dobóhalmázról' },
  ]

  const szabalyokItems = [
    { title: 'Alapszabályok', description: 'A játék alapvető szabályai és az általános játékvonalvezetés.' },
    { title: 'Pozíciók', description: 'A 9 játékos pozíciói és szerepei a pályán.' },
    { title: 'Játékvezetés', description: 'Hogyan működik a játékvezetés és a szankciók rendszere.' },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <HeroSection />
        
        <PreviewSection
          id="technikak"
          imageSrc="/images/batting-techniques.jpg"
          subtitle="Tanulj"
          title="Baseball Technikák és Edzés"
          description="Ismerkedj meg a baseball alapvető technikáival. Az ütéstől a dobáson keresztül a mezőjátékig, minden szükséges ismerettel rendelkezünk."
          items={technikaItems}
          ctaText="Tekintsd meg a teljes útmutatót"
          ctaHref="/technikak"
        />

        <PreviewSection
          imageSrc="/images/vintage-baseball.jpg"
          subtitle="Történelem"
          title="Baseball Története"
          description="A baseball egy gazdag történettel rendelkező sport. Fedezd fel annak eredetét, fejlődését és hatását Magyarországon és világszerte."
          items={tortelemItems}
          ctaText="Olvasd el a teljes történetet"
          ctaHref="/tortenet"
          reverse
        />

        <PreviewSection
          imageSrc="/images/protective-gear.jpg"
          subtitle="Felszerelés"
          title="Baseball Felszerelés Útmutató"
          description="Fedezd fel a baseballhoz szükséges teljes felszerelést. A védőfelszerelésből az alapvető eszközökig, mindent, ami szükséges a biztonságos és hatékony játékhoz."
          ctaText="Nézd meg a felszerelés útmutatót"
          ctaHref="/felszereles"
        />

        <FactsSection facts={felszerelesFacts} />

        <PreviewSection
          imageSrc="/images/diamond-field.jpg"
          subtitle="Szabályok"
          title="Baseball Szabályok"
          description="Értsd meg a baseball szabályait és játékvezetési módját. A legfontosabb szabályoktól az összetett játékhelyzetek kezeléséig."
          items={szabalyokItems}
          ctaText="Ismerkedj meg a teljes szabályokkal"
          ctaHref="/szabalyok"
          reverse
        />

        <BlogPreviewSection articles={blogArticles} />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
