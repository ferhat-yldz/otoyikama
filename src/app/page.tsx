import { Header, Footer } from '@/components/layout';
import { ExtraordinaryHero, StackedServices, Services, About, Contact, Features, Stats, CTA } from '@/components/sections';
import { WhatsAppButton, ScrollReveal } from '@/components/ui';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <ExtraordinaryHero />
        <Stats />
        <Features />
        <StackedServices />
        <ScrollReveal direction="up" delay={100}>
          <About />
        </ScrollReveal>
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
