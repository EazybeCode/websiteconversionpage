
import React from 'react';

const pains = [
  { icon: "📉", title: "Fuga de Ingresos", desc: "Los deals se mueren en chats individuales que nadie más puede ver." },
  { icon: "⏳", title: "Vendedores Agotados", desc: "Tu equipo pierde el 30% del tiempo copiando datos de WhatsApp al CRM manualmente." },
  { icon: "🕵️", title: "Supervisión Imposible", desc: "Como manager, no sabes qué se dijo ni por qué no se cerró el trato." },
  { icon: "🚫", title: "Propiedad de Datos", desc: "Si un vendedor borra un chat o deja la empresa, pierdes años de relación con el cliente." }
];

export const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-black uppercase tracking-[0.25em] text-[10px] px-4 py-2 bg-blue-50 rounded-full">La Realidad</span>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mt-8 mb-6 tracking-tight">Si no está en el CRM, <span className="text-gradient">no ocurrió</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">WhatsApp es donde ocurren las ventas, pero el CRM es donde vive tu negocio. El puente entre ambos está roto.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pains.map((pain, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <span className="text-8xl font-black">{i+1}</span>
              </div>
              <div className="text-4xl mb-8 bg-blue-50 w-20 h-20 flex items-center justify-center rounded-[1.5rem] group-hover:scale-110 transition-transform shadow-sm">{pain.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{pain.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium text-sm">{pain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
