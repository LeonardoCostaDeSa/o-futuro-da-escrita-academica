
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Modules from './components/Modules';
import Instructor from './components/Instructor';
import Audience from './components/Audience';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PainDivider from './components/PainDivider';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        <PainDivider
          message="Será que vou conseguir entregar a tempo?"
          caption="o que passa pela cabeça de quem escreve sem estrutura"
        />

        <Features />
        <Modules />
        <Instructor />
        <Testimonials />
        <Audience />

        <PainDivider
          message="Será que a banca vai me reprovar?"
        />

        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;
