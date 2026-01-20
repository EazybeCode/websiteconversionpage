
import React, { useState } from 'react';

const faqs = [
  {
    q: "¿Funciona con WhatsApp Business API?",
    a: "¡Sí! Eazybe funciona con los tres: WhatsApp Personal (vía extensión), WhatsApp Business App y WhatsApp Business API."
  },
  {
    q: "¿Cuánto tiempo toma la configuración?",
    a: "Aproximadamente 5 minutos. Instalas la extensión de Chrome, conectas tu CRM con un clic y empiezas a sincronizar."
  },
  {
    q: "¿Qué sucede cuando un vendedor deja la empresa?",
    a: "Todas las conversaciones sincronizadas permanecen en tu CRM permanentemente. No se pierde historial ni contexto."
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Totalmente. Contamos con certificación SOC 2 Type II y cumplimos con la normativa GDPR."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-extrabold text-slate-900 mb-4">¿Tienes <span className="text-gradient">Preguntas?</span></h2>
           <p className="text-slate-500">Todo lo que necesitas saber sobre la integración de WhatsApp con tu CRM.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`bg-white rounded-2xl border transition-all ${openIndex === i ? 'border-blue-400 shadow-lg' : 'border-slate-200'}`}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${openIndex === i ? 'gradient-primary text-white' : 'bg-slate-100 text-blue-600'}`}>{i + 1}</span>
                  <span className="font-bold text-slate-900 text-sm sm:text-base">{faq.q}</span>
                </div>
                <svg className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 pl-16">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
