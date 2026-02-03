import { Header, Footer } from '@/components/layout';
import { Hero, Services, About, Contact } from '@/components/sections';
import { WhatsAppButton } from '@/components/ui';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
