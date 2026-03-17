import Header from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SelectedWork } from '@/components/SelectedWork';
import { About } from '@/components/About';
import Experiences from '@/components/Experiences';
import { Footer } from '@/components/Footer';
import { SectionNav } from '@/components/SectionNav';

export default function Home() {
  return (
    <>
      <Header />
      <SectionNav />
      <main className="pb-24 pl-4 pr-4 md:pl-24 md:pr-8">
        <Hero />
        <SelectedWork />
        <About />
        <Experiences />
      </main>
      <Footer />
    </>
  );
}
