import React, { useState, useEffect } from 'react';
import { Code, Menu, X, Home, FolderOpen, Zap, User, MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Inicio', id: 'home', icon: <Home size={20} /> },
    { label: 'Proyectos', id: 'projects', icon: <FolderOpen size={20} /> },
    { label: 'Habilidades', id: 'skills', icon: <Zap size={20} /> },
    { label: 'Sobre Mí', id: 'about', icon: <User size={20} /> },
    { label: 'Contacto', id: 'contact', icon: <MessageCircle size={20} /> },
  ];

  return (
    <header
      className={`fixed top-2 left-0 right-0 container rounded-[2.2rem] max-w-[90%] mx-auto z-50 transition-all border border-transparent duration-500 ${isScrolled || isMobileMenuOpen
        ? 'shadow-card backdrop-blur-md bg-white/50 border-primary-yellow/10'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo mejorado */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 group">
          <div className="relative">
            <Code size={24} className="text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-neutral-black font-display">
              <span className="text-blue-400 font-bold">Dev</span>Portfolio
            </span>
          </div>
        </button>

        {/* Navegación desktop */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-shadow text-[#3B2F2F] hover:text-primary-blue transition-colors font-medium group"
            >
              {item.label}
              <div className="absolute bottom-0 left-0 h-0.5 bg-primary-blue w-0 group-hover:w-full transition-all duration-300 rounded-full"></div>
            </button>
          ))}
        </nav>

        {/* Botón móvil mejorado */}
        <button
          className="md:hidden relative p-3 transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={20} className="text-blue-400 transition-transform duration-300 rotate-90" />
          ) : (
            <Menu size={20} className="text-blue-400 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Menú móvil mejorado */}
      <div
        className={`md:hidden transition-all duration-500 ${isMobileMenuOpen
          ? 'opacity-100 translate-y-0 max-h-96'
          : 'opacity-0 -translate-y-4 max-h-0 pointer-events-none'
          } overflow-hidden`}
      >
        <nav className="flex-1 p-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-4 w-full text-left py-4 px-4 rounded-xl hover:bg-[#FFF8E1] hover:text-primary-blue transition-all duration-300 font-medium group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-[#3B2F2F] group-hover:text-primary-blue transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="text-[#3B2F2F] group-hover:text-primary-blue transition-colors duration-300">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;