
import React from 'react';

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/1/12/Zoho_CRM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pipedrive_logo.svg",
  "https://cdn.prod.website-files.com/64cb8fe9dae4f2e5a069eb37/67685bae06432a9005e774af_satrack.svg",
  "https://cdn.prod.website-files.com/64cb8fe9dae4f2e5a069eb37/67685961ca70cc2713405aac_pw.svg",
];

const brands = [
  "https://cdn.prod.website-files.com/64cb8fe9dae4f2e5a069eb37/676859615a3ec360e3bc5d4c_university%20living.svg",
  "https://cdn.prod.website-files.com/64cb8fe9dae4f2e5a069eb37/6768596177cb968e98f60728_wanderon.svg",
  "https://cdn.prod.website-files.com/64cb8fe9dae4f2e5a069eb37/67685ab1ca70cc27134152fa_studyin.svg",
  "https://cdn.prod.website-files.com/64cb8fe9dae4f2e5a069eb37/68d2538dfc57d68938d78ed8_habi.webp",
  "https://cdn.prod.website-files.com/64cb8fe9dae4f2e5a069eb37/68d25392e01ab88e0c9940a3_toku.webp",
  "https://cdn.prod.website-files.com/64cb8fe9dae4f2e5a069eb37/68d25390bf14e7cc65047a8e_nuvemshop.webp"
];

export const LogoMarquee: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden border-b border-slate-50">
      <div className="text-center mb-12 px-4">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Integración nativa certificada</p>
        <h2 className="text-2xl font-bold text-slate-900">
          Potenciando a equipos de <span className="text-gradient">HubSpot, Salesforce y Zoho</span>
        </h2>
      </div>

      <div className="pause-on-hover opacity-60">
        <div className="flex w-fit overflow-hidden py-6">
          <div className="flex animate-marquee items-center gap-24 pr-24">
            {[...logos, ...logos].map((src, i) => (
              <img key={i} src={src} alt="CRM" className="h-8 sm:h-10 object-contain grayscale hover:grayscale-0 transition-all cursor-default" />
            ))}
          </div>
        </div>
        <div className="flex w-fit overflow-hidden py-6">
          <div className="flex animate-marquee-reverse items-center gap-24 pr-24">
            {[...brands, ...brands].map((src, i) => (
              <img key={i} src={src} alt="Customer" className="h-6 sm:h-8 object-contain grayscale hover:grayscale-0 transition-all cursor-default" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
