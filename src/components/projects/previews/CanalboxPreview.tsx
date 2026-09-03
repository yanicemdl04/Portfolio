import React from 'react';
import { Download, FileDown } from 'lucide-react';

/**
 * Recréation stylisée de l'interface de téléchargement Canalbox DL.
 */
const CanalboxPreview: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-4 bg-beige-100 p-5">
      <div className="rounded-xl border border-charcoal/8 bg-linen p-4 shadow-soft">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-600">
            <FileDown size={14} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-medium text-charcoal">ressource-canalbox.zip</p>
            <p className="font-mono text-[10px] text-charcoal/45">4,2 Mo/s</p>
          </div>
          <Download size={14} className="text-umber-500" />
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-beige-300">
          <div className="h-full w-[58%] rounded-full bg-sage-400" />
        </div>
        <p className="mt-2 text-right font-mono text-[10px] text-charcoal/45">58%</p>
      </div>
      <p className="text-center font-mono text-[10px] text-charcoal/35">
        &gt;_ optimisation du transfert en cours…
      </p>
    </div>
  );
};

export default CanalboxPreview;
