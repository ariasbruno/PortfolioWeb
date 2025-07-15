import React, { useState, useEffect } from 'react';
import { Code, Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Inicio', id: 'home' },
    { label: 'Proyectos', id: 'projects' },
    { label: 'Habilidades', id: 'skills' },
    { label: 'Sobre Mí', id: 'about' },
    { label: 'Contacto', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 shadow-lg backdrop-blur-sm dark:bg-gray-900/95' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-xl font-bold group">
          <Code size={24} className="text-blue-600 group-hover:rotate-12 transition-transform dark:text-yellow-400" />
          <span><span className='text-blue-600 dark:text-yellow-400'>Dev</span>Portfolio</span>
        </a>
        
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all dark:text-gray-300 dark:hover:text-yellow-400 dark:after:bg-yellow-400"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Botón de modo claro/oscuro */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors text-gray-700 dark:border-gray-700 dark:text-yellow-400 dark:hover:bg-gray-800"
          aria-label="Alternar modo claro/oscuro"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button 
          className="md:hidden text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-yellow-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      <div 
        className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'fixed w-full opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 border-b border-gray-300 last:border-0 dark:text-gray-300 dark:hover:text-yellow-400 dark:border-gray-700"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;