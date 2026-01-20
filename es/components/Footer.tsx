
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-8">
        <img 
          src="https://cdn.prod.website-files.com/64cb8fe9dae4f2e5a069eb37/68c8ea1fa01de563ebf5b627_nav-logo.svg" 
          alt="Eazybe" 
          className="h-6 brightness-0 invert opacity-80"
        />
        <div className="flex gap-8">
           <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacidad</a>
           <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Términos</a>
           <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Contacto</a>
        </div>
        <div className="text-slate-500 text-xs">
          © {new Date().getFullYear()} Eazybe. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
