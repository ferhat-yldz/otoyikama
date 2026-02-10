import { Header, Footer } from '@/components/layout';
import { Hero, Services, About, Contact } from '@/components/sections';
import { WhatsAppButton, ScrollReveal } from '@/components/ui';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScrollReveal direction="up">
          <Services />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <About />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
