import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

/**
 * Recréation stylisée (dans notre palette) de l'écran d'accueil du projet
 * Rawbank — plutôt qu'une capture d'écran externe fragile et hors charte.
 */
const RawbankPreview: React.FC = () => {
  const bars = [40, 65, 50, 80, 60, 90, 70];

  return (
    <div className="relative flex h-full w-full flex-col justify-between bg-beige-100 p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-umber-500">
            Solde du portefeuille
          </p>
          <p className="mt-1 font-display text-2xl font-medium text-charcoal">$24,850.00</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-sage-100 px-2.5 py-1 font-mono text-[10px] text-sage-600">
          +2,4%
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-[220px] rounded-2xl bg-charcoal p-4 text-cream shadow-soft-lg">
        <div className="flex items-center justify-between">
          <span className="font-display text-sm tracking-wide">Rawbank</span>
          <ShieldCheck size={14} className="text-sage-300" />
        </div>
        <p className="mt-4 font-mono text-xs tracking-[0.2em] text-cream/70">•••• •••• •••• 4821</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-[10px] text-cream/60">Jean-Marc K.</span>
          <span className="text-[10px] text-cream/60">12/28</span>
        </div>
      </div>

      <div className="flex items-end justify-between gap-1.5">
        {bars.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-sm bg-sage-400/70"
            style={{ height: `${h * 0.35}px` }}
          />
        ))}
        <ArrowUpRight size={16} className="ml-2 shrink-0 text-sage-500" />
      </div>
    </div>
  );
};

export default RawbankPreview;
