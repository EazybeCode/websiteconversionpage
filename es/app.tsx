
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { PainPoints } from './components/PainPoints';
import { FeatureSection } from './components/FeatureSection';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { featuresData } from './constants';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const ctaUrl = "https://eazybe.info/e4a626";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />
      
      <main className="pb-24 sm:pb-0">
        <Hero id="hero" />
        
        <LogoMarquee />
        
        <PainPoints />

        {/* Strategic Mid-Page CTA */}
        <div className="py-16 bg-white text-center px-4">
           <a 
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 gradient-primary text-white font-black py-5 px-14 rounded-2xl shadow-xl hover:scale-105 transition-all active:scale-95 text-lg"
          >
            Iniciar Prueba Gratuita
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
        
        {featuresData.map((feature, index) => (
          <FeatureSection 
            key={feature.id} 
            feature={feature} 
            reverse={index % 2 !== 0} 
          />
        ))}
        
        <Stats />
        
        <Testimonials />
        
        <FAQ />
        
        <FinalCTA />
      </main>
      
      <Footer />

      {/* FIXED STATIC MOBILE CTA - Optimizes for conversion */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 p-4 z-[9999] bg-white/90 backdrop-blur-xl border-t border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.15)]">
        <a 
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full gradient-primary text-white font-black text-sm py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
        >
          Iniciar Prueba Gratuita
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;
