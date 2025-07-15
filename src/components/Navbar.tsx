import React, { useState, useEffect } from 'react';
import { Code, Sun, Moon, Home, FolderOpen, Zap, User, MessageCircle } from 'lucide-react';

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
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(newTheme);
      });
    } else {
      // Fallback si el navegador no soporta la API
      setTheme(newTheme);
    }
  };

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
    { label: 'Contacto', id: 'contact', icon: <MessageCircle size={20} /> }
  ];

  return (
    <header
      className={`fixed top-2 left-0 right-0 container rounded-[2.2rem] max-w-[90%] mx-auto z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? 'bg-white/95 shadow-lg backdrop-blur-sm dark:bg-gray-900/95'
        : 'bg-transparent'
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
        className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen
          ? 'opacity-100 translate-y-0 max-h-96'
          : 'opacity-0 -translate-y-4 max-h-0 pointer-events-none'
          }`}
      >
        <nav className="flex-1 p-6">
          <div className='flex flex-col gap-2'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-4 w-full text-left py-4 px-4 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-300 last:border-0 dark:text-gray-300 dark:hover:text-yellow-400 dark:border-gray-700"
              >
                <div className="transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="transition-colors duration-300">
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