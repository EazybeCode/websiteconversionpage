
import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="py-20 gradient-primary relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { val: "30,000+", label: "Líderes de Ventas" },
            { val: "2.4h", label: "Ahorro Semanal x Persona" },
            { val: "65%", label: "Más Visibilidad" },
            { val: "5 min", label: "Setup sin Código" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-white mb-3 tracking-tighter">{item.val}</div>
              <div className="text-blue-100 text-xs sm:text-sm font-bold uppercase tracking-[0.2em]">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
