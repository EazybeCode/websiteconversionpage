
import React from 'react';

const testimonials = [
  {
    name: "Miguel Rivera",
    role: "VP de Ventas",
    company: "Finanzas Global",
    text: "Pasamos de tener cero visibilidad en WhatsApp a ver cada chat sin responder en un panel. Los tiempos de respuesta bajaron un 40% en el primer mes.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
  },
  {
    name: "Sara Martínez",
    role: "Gerente de Ventas",
    company: "Inmobiliaria Plus",
    text: "La configuración tomó 5 minutos. Ahora cada conversación de WhatsApp aparece en el historial del negocio. Se acabó el adivinar qué pasó con un lead.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
  },
  {
    name: "David Soto",
    role: "Ops de Ventas",
    company: "SaaS Tech",
    text: "Finalmente los managers podemos ver quién responde rápido y qué negocios necesitan atención. Ha cambiado por completo nuestras operaciones de venta.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full text-amber-600 text-xs font-bold mb-6">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          Casos de Éxito
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Por qué los equipos de ventas <span className="text-gradient">confían en Eazybe</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Únete a los miles de equipos que transformaron su flujo de trabajo en WhatsApp.</p>
      </div>

      <div className="flex w-fit overflow-hidden pause-on-hover px-4">
        <div className="flex animate-marquee items-center gap-6 pr-6">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="w-[300px] sm:w-[380px] bg-slate-50 border border-slate-200 p-8 rounded-3xl flex-shrink-0 relative group hover:border-blue-300 transition-all">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => <svg key={s} className="w-4 h-4 fill-amber-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8">"{t.text}"</p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role} • {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 flex flex-wrap justify-center gap-6">
         <div className="px-6 py-3 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold">⭐ 4.7 en HubSpot Marketplace</div>
         <div className="px-6 py-3 bg-slate-50 border border-slate-100 rounded-full text-slate-600 text-xs font-bold">🔒 Certificado SOC 2 Type II</div>
         <div className="px-6 py-3 bg-slate-50 border border-slate-100 rounded-full text-slate-600 text-xs font-bold">🇪🇺 Cumple GDPR</div>
      </div>
    </section>
  );
};
