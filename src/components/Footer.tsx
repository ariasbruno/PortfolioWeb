import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-100 border-t border-gray-300 dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          © {currentYear} Bruno Arias. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;