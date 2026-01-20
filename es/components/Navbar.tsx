
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const ctaUrl = "https://eazybe.info/e4a626";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 px-4 py-3 sm:py-4 ${
      scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="block">
          <img 
            src="https://cdn.prod.website-files.com/64cb8fe9dae4f2e5a069eb37/68c8ea1fa01de563ebf5b627_nav-logo.svg" 
            alt="Eazybe" 
            className="h-7 sm:h-9"
          />
        </a>
        <div className="flex items-center">
          <a 
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-primary text-white font-black text-xs sm:text-sm py-3 px-6 sm:px-8 rounded-full transition-all flex items-center gap-2 shadow-lg active:scale-95"
          >
            Iniciar Prueba Gratuita
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};
