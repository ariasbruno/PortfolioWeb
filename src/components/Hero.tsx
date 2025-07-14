import { Github, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY <= 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#FAF3E3] section-pattern">
      {/* Warm Beige Texture */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(120,119,198,0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.5) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120,119,198,0.1) 0%, transparent 50%)`,
        }}
      />
      {/* Elementos decorativos flotantes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary-blue/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary-yellow/20 rounded-full animate-bounce-gentle"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent-purple/20 rounded-full animate-pulse-gentle"></div>

      <div className="max-w-4xl m-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display text-shadow">
            Bruno Arias
          </h1>
          <p className="text-lg md:text-xl text-neutral-gray mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Desarrollador web apasionado, enfocado en crear
            soluciones digitales modernas, eficientes y visualmente atractivas.
            Transformo ideas en realidad a través del código.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-[#FAF3E3] text-neutral-black font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-[#FFF8E1] hover:shadow-2xl transition-all duration-300 text-lg flex items-center gap-2"
            >
              Ver Mis Proyectos
            </button>
            <a
              href="https://github.com/ariasbruno"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAF3E3] text-primary-blue font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-primary-blue hover:text-white hover:shadow-2xl transition-all duration-300 text-lg flex items-center gap-2"
            >
              Ver código
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
      {/* Indicador de scroll */}
      <div
        className={`transition-all duration-700 flex justify-center absolute left-0 right-0 bottom-2 ${showScrollIndicator ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <button
          onClick={() => scrollToSection('projects')}
          className="flex flex-col items-center gap-2 text-neutral-gray hover:text-primary-blue transition-colors animate-bounce-gentle"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}
