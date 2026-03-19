
import React, { useEffect, useState } from 'react';

const StickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroCta = document.getElementById('hero-cta');
      const pricingSection = document.getElementById('preco');

      if (!heroCta) return;

      const heroCtaRect = heroCta.getBoundingClientRect();
      const heroCtaPassed = heroCtaRect.bottom < 0;

      let inPricingZone = false;
      if (pricingSection) {
        const pricingRect = pricingSection.getBoundingClientRect();
        // Hide when pricing section is visible (top is in viewport or above, bottom is below viewport top)
        inPricingZone = pricingRect.top < window.innerHeight && pricingRect.bottom > 0;
      }

      setVisible(heroCtaPassed && !inPricingZone);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}
      aria-hidden={!visible}
    >
      <div className="bg-white/95 backdrop-blur-xl border-t border-master-light/50 px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-xs font-black text-master-deep font-heading">12x R$34,70</span>
          <span className="text-[10px] text-master-slate/50 font-normal">ou R$347 à vista</span>
        </div>
        <a
          href="https://pay.hotmart.com/O104206161Q" target="_blank" rel="noopener noreferrer"
          className="btn-shine flex-shrink-0 px-6 py-3 bg-master-primary text-white text-[10px] font-black rounded-xl uppercase tracking-[0.2em] font-heading hover:bg-master-deep transition-all active:scale-95"
        >
          Quero começar
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;
