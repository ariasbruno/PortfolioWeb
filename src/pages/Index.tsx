import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-white text-neutral-black">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      {/* Botón flotante volver arriba */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-[#FAF3E3] text-primary-blue p-4 rounded-full shadow-lg border border-[#F6F1EB] hover:bg-primary-blue hover:text-white hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
          aria-label="Volver arriba"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;