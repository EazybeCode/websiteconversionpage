
import React from 'react';
import { Feature } from '../types';

interface FeatureSectionProps {
  feature: Feature;
  reverse?: boolean;
}

const ZohoCRMLogo = ({ size = "sm" }: { size?: "sm" | "md" }) => (
  <div className={`flex items-center gap-1.5 sm:gap-2 ${size === 'md' ? 'scale-110' : ''}`}>
    <div className={`shrink-0 ${size === 'md' ? 'w-10 sm:w-14' : 'w-6 sm:w-8'}`}>
      <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <path d="M346.5 153.5C310.5 117.5 252 117.5 216 153.5L144 225.5C108 261.5 108 320 144 356C180 392 238.5 392 274.5 356L288 342.5M165.5 153.5C201.5 117.5 260 117.5 296 153.5L368 225.5C404 261.5 404 320 368 356C332 392 273.5 392 237.5 356L224 342.5" stroke="#0071C1" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M224 225.5L288 289.5" stroke="#0071C1" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <div className="flex flex-col items-start leading-[1] text-left">
      <span className={`${size === 'md' ? 'text-[8px] sm:text-[12px]' : 'text-[6px] sm:text-[8px]'} font-medium text-slate-900`}>Zoho</span>
      <span className={`${size === 'md' ? 'text-[12px] sm:text-[20px]' : 'text-[9px] sm:text-[14px]'} font-black text-slate-900 tracking-tighter`}>CRM</span>
    </div>
  </div>
);

export const FeatureSection: React.FC<FeatureSectionProps> = ({ feature, reverse }) => {
  const isSecond = feature.id === 'revenue-inbox';
  const ctaUrl = "https://eazybe.info/e4a626";

  return (
    <>
    <section className={`py-12 sm:py-24 ${reverse ? 'bg-white' : 'bg-slate-50/50'}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}>
        
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-[10px] font-[900] uppercase tracking-widest mb-4">
            {feature.tag}
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-[900] text-slate-900 mb-6 leading-tight tracking-tight">
            {feature.title}
          </h2>
          <p className="text-sm sm:text-xl text-slate-600 mb-8 leading-relaxed font-medium">
            {feature.description}
          </p>
          
          <ul className="space-y-4 text-left max-w-lg mx-auto lg:mx-0">
            {feature.points.map((point, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200 shadow-sm">
                   <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <span className="text-sm sm:text-base text-slate-800 leading-snug font-bold" dangerouslySetInnerHTML={{ __html: point }} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 w-full max-w-xl px-2 sm:px-0">
          <div className="relative group">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-emerald-500/5 blur-3xl rounded-[3rem] -z-10 transition-all duration-700"></div>
             
             <div className="bg-white rounded-[1.5rem] sm:rounded-[3rem] shadow-2xl border border-slate-100 p-2 sm:p-4 overflow-visible mockup-shadow transition-transform duration-500 hover:-translate-y-3">
                <div className="bg-slate-50 rounded-[1rem] sm:rounded-[2rem] overflow-hidden min-h-[320px] sm:min-h-[480px] flex flex-col">
                   {feature.visualType === 'timeline' && <TimelineMockup />}
                   {feature.visualType === 'inbox' && <InboxMockup />}
                   {feature.visualType === 'workflow' && <WorkflowMockup />}
                   {feature.visualType === 'properties' && <PropertiesMockup />}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    {isSecond && (
      <div className="py-16 sm:py-24 gradient-primary text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl sm:text-5xl font-[900] text-white mb-10 sm:mb-12 leading-tight tracking-tighter">
            ¿Listo para escalar tus ingresos con control absoluto?
          </h3>
          <a 
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-white text-blue-700 font-[900] py-4 sm:py-7 px-10 sm:px-20 rounded-2xl sm:rounded-[2rem] shadow-2xl hover:scale-105 transition-all active:scale-95 text-lg sm:text-2xl"
          >
            Iniciar Prueba Gratuita
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    )}
    </>
  );
};

const TimelineMockup = () => (
  <div className="p-4 sm:p-12 flex-1 flex flex-col justify-center bg-white h-full text-left">
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl border border-slate-100 space-y-4 sm:space-y-10 relative overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 sm:pb-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl gradient-primary flex items-center justify-center text-white font-black text-xs sm:text-2xl">AM</div>
          <div className="min-w-0">
            <div className="text-[11px] sm:text-xl font-black text-slate-900 leading-tight truncate">Arturo Mendoza</div>
            <div className="text-[8px] sm:text-xs font-bold text-emerald-600 mt-1 uppercase tracking-widest truncate">Sincronización CRM</div>
          </div>
        </div>
        <ZohoCRMLogo />
      </div>
      <div className="space-y-3 sm:space-y-8">
        <div className="flex gap-2 sm:gap-4 items-start">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6 sm:w-12 sm:h-12 p-1.5 sm:p-2 bg-emerald-50 rounded-lg sm:rounded-2xl shadow-sm border border-emerald-100" alt="WA" />
          <div className="bg-emerald-50 border border-emerald-100 p-3 sm:p-6 rounded-xl sm:rounded-3xl rounded-tl-none flex-1 shadow-sm">
            <p className="text-[10px] sm:text-lg text-emerald-900 font-bold italic leading-tight">"Confirmo la compra, ¿puedes enviar el link?"</p>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-4 items-start justify-end">
          <div className="bg-blue-50 border border-blue-100 p-3 sm:p-6 rounded-xl sm:rounded-3xl rounded-tr-none flex-1 shadow-sm">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
               <ZohoCRMLogo />
               <span className="text-[7px] sm:text-[10px] font-black text-blue-600 uppercase ml-1">Registrado</span>
            </div>
            <p className="text-[8px] sm:text-sm text-blue-800 font-black">Sincronizado al Pipeline</p>
          </div>
          <div className="w-6 h-6 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-blue-600 flex items-center justify-center text-white text-[8px] font-black shrink-0 shadow-lg">CRM</div>
        </div>
      </div>
    </div>
  </div>
);

const InboxMockup = () => (
  <div className="flex flex-col h-full bg-white text-left">
    <div className="bg-slate-900 p-4 sm:p-8 flex justify-between items-center">
       <div className="flex items-center gap-3 sm:gap-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 h-5 sm:w-8 sm:h-8" alt="WA" />
          <h4 className="text-white font-black text-[10px] sm:text-lg uppercase tracking-widest">Revenue Inbox</h4>
       </div>
       <div className="bg-blue-600 text-white text-[7px] sm:text-xs font-black px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl shadow-lg">MAX ROI</div>
    </div>
    <div className="p-3 sm:p-10 space-y-3 sm:space-y-8 bg-slate-50/50 flex-1 overflow-hidden">
      {[
        { name: "Sofía Torres", value: "$85k", time: "1m", urgent: true, logo: "hubspot" },
        { name: "Juan Pérez", value: "$12k", time: "12m", urgent: false, logo: "zoho" }
      ].map((chat, i) => (
        <div key={i} className={`bg-white p-4 sm:p-8 rounded-2xl sm:rounded-3xl border-2 transition-all shadow-xl ${chat.urgent ? 'border-blue-400 scale-[1.02]' : 'border-slate-100 opacity-90'}`}>
          <div className="flex justify-between items-start">
             <div className="flex items-center gap-3 sm:gap-6">
               <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-xs sm:text-xl bg-blue-50 text-blue-700 shadow-inner">{chat.name.substring(0,2)}</div>
               <div className="min-w-0">
                 <div className="text-[11px] sm:text-xl font-black text-slate-900 truncate">{chat.name}</div>
                 <div className="text-[9px] sm:text-sm font-bold text-emerald-600 flex items-center gap-1 sm:gap-2 mt-1">
                    VALOR: {chat.value} 
                    {chat.logo === 'hubspot' ? <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" className="h-2.5 sm:h-5 ml-1" alt="CRM" /> : <div className="ml-1 scale-75"><ZohoCRMLogo /></div>}
                 </div>
               </div>
             </div>
             <div className="text-[7px] sm:text-xs font-black text-slate-400 bg-slate-100 px-2 py-1 rounded-lg border border-slate-200 uppercase">WAIT: {chat.time}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const WorkflowMockup = () => (
  <div className="p-6 sm:p-16 h-full flex flex-col justify-center items-center bg-white text-left">
    <div className="w-full max-w-sm space-y-8 sm:space-y-12 relative">
      <div className="absolute left-[31px] sm:left-[55px] top-10 bottom-10 w-0.5 sm:w-1 bg-slate-100"></div>
      
      <div className="flex items-center gap-4 sm:gap-10 relative z-10">
         <div className="w-16 h-16 sm:w-28 sm:h-28 bg-white border border-slate-100 rounded-2xl sm:rounded-[2.5rem] flex items-center justify-center shadow-lg p-2">
            <ZohoCRMLogo size="md" />
         </div>
         <div>
            <div className="text-[8px] sm:text-sm font-black text-slate-900 uppercase tracking-widest leading-none">Trigger Zoho CRM</div>
            <div className="text-[7px] sm:text-xs text-slate-400 font-bold italic mt-1">Lead Calificado</div>
         </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-10 relative z-10 ml-5 sm:ml-10">
         <div className="w-16 h-16 sm:w-28 sm:h-28 bg-emerald-500 border-4 border-emerald-400 rounded-2xl sm:rounded-[3rem] flex items-center justify-center shadow-2xl">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-10 h-10 sm:w-18 sm:h-18" alt="WA" />
         </div>
         <div>
            <div className="text-[8px] sm:text-sm font-black text-emerald-600 uppercase tracking-widest leading-none">Auto Message</div>
            <div className="text-[7px] sm:text-xs text-slate-700 font-black mt-1">Setup Agendado</div>
         </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-10 relative z-10">
         <div className="w-16 h-16 sm:w-28 sm:h-28 bg-blue-600 rounded-2xl sm:rounded-[2.5rem] flex items-center justify-center shadow-xl">
            <span className="font-black text-white text-lg sm:text-4xl">$$$</span>
         </div>
         <div className="bg-white p-2 sm:p-4 rounded-xl border border-blue-100 shadow-md">
            <div className="text-[8px] sm:text-sm font-black text-blue-600 uppercase tracking-widest leading-none">Deal Ganado</div>
         </div>
      </div>
    </div>
  </div>
);

const PropertiesMockup = () => (
  <div className="p-4 sm:p-12 flex-1 flex flex-col justify-center text-left">
    <div className="bg-white rounded-[2rem] sm:rounded-[3.5rem] shadow-2xl border border-slate-100 overflow-hidden relative">
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 flex gap-2 sm:gap-4 items-center">
         <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" className="h-3 sm:h-6" alt="HS" />
         <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" className="h-3 sm:h-7" alt="SF" />
         <ZohoCRMLogo />
      </div>
      
      <div className="gradient-primary p-5 sm:p-10 text-white">
         <div className="flex items-center gap-4 sm:gap-8">
            <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-sm sm:text-3xl font-black shadow-inner">RG</div>
            <div>
               <div className="text-sm sm:text-2xl font-[900] tracking-tight">Roberto Gómez</div>
               <div className="text-[7px] sm:text-xs font-black opacity-80 uppercase tracking-widest mt-1">Manager • LatAm</div>
            </div>
         </div>
      </div>
      
      <div className="p-5 sm:p-10 space-y-4 sm:space-y-8">
         <div className="flex justify-between items-center py-2 border-b border-slate-50">
            <span className="text-[8px] sm:text-sm font-black text-slate-400 uppercase tracking-widest">WhatsApp Score</span>
            <span className="text-xs sm:text-lg font-[900] text-emerald-600">+45% ROI</span>
         </div>
         
         <div className="mt-4 sm:mt-8 p-4 sm:p-8 bg-slate-50 rounded-2xl sm:rounded-[2.5rem] border border-slate-100 shadow-inner">
            <div className="flex items-center gap-1.5 sm:gap-3 mb-2 sm:mb-3">
               <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-3 h-3 sm:w-6 sm:h-6" alt="WA" />
               <span className="text-[7px] sm:text-[11px] font-black text-slate-400 uppercase tracking-widest">IA Summary</span>
            </div>
            <p className="text-[9px] sm:text-base text-slate-700 leading-relaxed font-bold italic">
              "Lead confirmed by WA. El negocio está listo para envío de contrato mañana."
            </p>
         </div>
      </div>
    </div>
  </div>
);
