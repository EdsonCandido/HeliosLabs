import { useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { About } from './components/About';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const scrollToContact = useCallback(() => {
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:text-slate-50 focus:shadow-soft-lg"
      >
        Ir para o conteúdo principal
      </a>

      <Header onContactClick={scrollToContact} />
      <main>
        <Hero onPrimaryCtaClick={scrollToContact} />
        <Services />
        <Differentials />
        <About />
        <CallToAction onContactClick={scrollToContact} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

