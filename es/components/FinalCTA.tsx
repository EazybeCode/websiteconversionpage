
import React from 'react';

export const FinalCTA: React.FC = () => {
  const ctaUrl = "https://eazybe.info/e4a626";

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.05]">
          Deja de perder ventas en <br className="hidden sm:block" /> el <span className="text-blue-400">caos de WhatsApp</span>
        </h2>
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Toma el control total de tu pipeline. Agenda hoy una sesión estratégica para sincronizar tu WhatsApp con tu CRM.
        </p>
        
        <div className="flex flex-col items-center gap-10">
          <a 
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 bg-white text-blue-700 font-[900] text-xl sm:text-2xl py-6 px-16 rounded-[2.5rem] shadow-2xl hover:scale-105 transition-all active:scale-95"
          >
            Iniciar Prueba Gratuita
            <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          
          <div className="flex flex-wrap justify-center gap-8 text-[11px] text-slate-500 font-[900] uppercase tracking-[0.2em]">
             <div className="flex items-center gap-3">
               <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-[10px]">✓</div>
               Demos de 15 Minutos
             </div>
             <div className="flex items-center gap-3">
               <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-[10px]">✓</div>
               Setup en Vivo
             </div>
             <div className="flex items-center gap-3">
               <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-[10px]">✓</div>
               Consultoría Gratuita
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
