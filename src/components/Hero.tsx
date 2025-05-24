import { Github } from "lucide-react";
export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Bruno Arias
          </h1>

          <h2 className="text-xl md:text-2xl text-yellow-400 font-semibold mb-8">
            Desarrollador Web
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Desarrollador web apasionado, enfocado en crear
            soluciones digitales modernas, eficientes y visualmente atractivas.
            Transformo ideas en realidad a través del código.
          </p>

          <button
            onClick={() => scrollToSection('projects')}
            className="bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-yellow-400/25"
          >
            Ver Mis Proyectos
          </button>
          <div className="flex right-0 left-0 bottom-6 justify-center absolute">
            <a
              href="https://github.com/ariasbruno/PortfolioWeb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
            >
              <span>Ver código</span>
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
