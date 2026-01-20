
import React, { useEffect } from 'react';

const ZohoCRMLogo = ({ className }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="shrink-0 w-10 sm:w-16">
      <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <path d="M346.5 153.5C310.5 117.5 252 117.5 216 153.5L144 225.5C108 261.5 108 320 144 356C180 392 238.5 392 274.5 356L288 342.5M165.5 153.5C201.5 117.5 260 117.5 296 153.5L368 225.5C404 261.5 404 320 368 356C332 392 273.5 392 237.5 356L224 342.5" stroke="#0071C1" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M224 225.5L288 289.5" stroke="#0071C1" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <div className="flex flex-col items-start leading-[1.05] text-left">
      <span className="text-[12px] sm:text-[18px] font-medium text-slate-900 tracking-tight">Zoho</span>
      <span className="text-[16px] sm:text-[28px] font-black text-slate-900 tracking-tighter">CRM</span>
    </div>
  </div>
);

export const Hero: React.FC<{ id: string }> = ({ id }) => {
  
  useEffect(() => {
    // Force re-initialization of the Calendly widget once the component is mounted
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    script.setAttribute('async', 'true');
    head?.appendChild(script);
  }, []);

  return (
    <section id={id} className="pt-28 pb-16 sm:pt-40 sm:pb-32 hero-mesh relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10 text-center">
        
        <div className="max-w-4xl mb-12 sm:mb-16 w-full">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-[900] text-slate-900 leading-[1.1] mb-6 tracking-tighter">
            Escala tus Ingresos con la Integración <span className="text-gradient">WhatsApp CRM</span> #1
          </h1>
          
          <p className="text-lg sm:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Recupera la visibilidad total de tu pipeline, elimina el trabajo manual de tu equipo y cierra negocios un 40% más rápido con control absoluto.
          </p>

          <div className="flex flex-col items-center gap-10">
            {/* CALENDLY INLINE WIDGET EMBEDDED DIRECTLY */}
            <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-3xl border border-slate-100 shadow-2xl bg-white mb-8 min-h-[700px]">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/eazybe/integra-tu-crm-con-whatsapp" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>

            {/* INTEGRATED CRM LOGOS - HUBSPOT, SALESFORCE, ZOHO CRM */}
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 py-4">
               <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" alt="HubSpot" className="h-4 sm:h-7 opacity-90" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" className="h-6 sm:h-11 opacity-90" />
               
               {/* PRECISE ZOHO CRM LOGO REPLICATION */}
               <ZohoCRMLogo className="opacity-90" />
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/100?img=${i+48}`} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-md" alt="Manager" />
                 ))}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-500">
                <span className="text-slate-900 font-black">30,000+</span> líderes en LatAm confían en Eazybe
              </div>
            </div>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full max-w-5xl relative px-2 sm:px-0 mt-8 sm:mt-12">
          <div className="relative z-10 mockup-shadow rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden bg-white border-4 sm:border-[12px] border-slate-50">
            <div className="bg-slate-50 aspect-square sm:aspect-[16/9] flex flex-col">
               <div className="h-10 sm:h-14 bg-white border-b flex items-center px-4 sm:px-6 justify-between">
                 <div className="flex gap-2">
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                 </div>
                 <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1 sm:py-1.5 rounded-full">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4" alt="WA" />
                    <span className="text-[8px] sm:text-[10px] text-emerald-600 font-black uppercase tracking-tight">CRM Sincronizado</span>
                 </div>
               </div>
               
               <div className="flex-1 flex overflow-hidden">
                 <div className="hidden md:block w-1/4 border-r bg-white p-6 space-y-6">
                    <div className="h-4 w-2/3 bg-blue-50 rounded"></div>
                    {[1,2,3,4].map(i => (
                      <div key={i} className={`h-12 rounded-2xl flex items-center px-3 gap-3 ${i===1 ? 'bg-blue-50 border border-blue-100 shadow-sm' : 'bg-slate-50'}`}>
                        <div className="w-8 h-8 rounded-xl bg-slate-200"></div>
                        <div className="h-2 flex-1 bg-slate-200 rounded"></div>
                      </div>
                    ))}
                 </div>
                 <div className="flex-1 p-4 sm:p-10 relative bg-white overflow-hidden text-left">
                    <div className="bg-emerald-500 text-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl rounded-tl-none w-[90%] sm:w-[80%] mb-4 sm:mb-8 text-[11px] sm:text-lg font-bold shadow-xl leading-snug">
                      "¡Me encanta la propuesta! Estamos listos para avanzar ahora."
                    </div>
                    
                    <div className="flex justify-end mb-8 sm:mb-12">
                       <div className="bg-blue-50 border border-blue-100 p-4 sm:p-6 rounded-2xl sm:rounded-3xl rounded-tl-none w-[80%] sm:w-[75%] shadow-md">
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 pb-2 border-b border-blue-100">
                          <ZohoCRMLogo className="scale-75 origin-left" />
                          <span className="font-black text-blue-600 uppercase text-[8px] sm:text-xs ml-1">Sincronizado</span>
                        </div>
                        <p className="font-bold text-xs sm:text-base italic text-slate-700">Etapa: Negocio Ganado</p>
                       </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-10 sm:left-10 sm:right-10 glass-card p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl border border-blue-100/50">
                      <div className="flex items-center justify-between mb-2 sm:mb-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl gradient-primary flex items-center justify-center text-white font-black text-xs sm:text-xl shadow-lg">AM</div>
                          <div>
                            <div className="text-[10px] sm:text-xl font-black text-slate-900 leading-none">Arturo Mendoza</div>
                            <div className="text-[8px] sm:text-sm text-slate-400 font-bold uppercase tracking-widest mt-1">Tech Corp • $25,000 USD</div>
                          </div>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-4 h-4 sm:w-10 sm:h-10" alt="WA" />
                      </div>
                      <div className="h-1.5 sm:h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div className="w-[90%] h-full bg-emerald-500"></div>
                      </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
