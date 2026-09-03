import React from 'react';
import { Users, GraduationCap, BookOpen, AlertTriangle } from 'lucide-react';

/**
 * Recréation stylisée du tableau de bord SIS Bueri Angeli.
 */
const BueriPreview: React.FC = () => {
  const stats = [
    { label: 'Élèves actifs', value: '1 248', icon: Users, accent: false },
    { label: 'Enseignants', value: '86', icon: GraduationCap, accent: false },
    { label: 'Classes', value: '42', icon: BookOpen, accent: false },
    { label: 'Risque élevé', value: '12', icon: AlertTriangle, accent: true },
  ];

  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 bg-beige-100 p-5">
      <div className="grid grid-cols-2 gap-2.5">
        {stats.map(({ label, value, icon: Icon, accent }) => (
          <div
            key={label}
            className={`rounded-lg border p-3 ${
              accent ? 'border-sage-300 bg-sage-100' : 'border-charcoal/8 bg-linen'
            }`}
          >
            <Icon size={14} className={accent ? 'text-sage-600' : 'text-umber-500'} />
            <p className="mt-2 font-display text-lg font-medium leading-none text-charcoal">
              {value}
            </p>
            <p className="mt-1 truncate font-mono text-[9px] uppercase tracking-wide text-charcoal/50">
              {label}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-charcoal/8 bg-linen px-3 py-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-beige-300">
          <div className="h-full w-[72%] rounded-full bg-sage-400" />
        </div>
        <span className="font-mono text-[10px] text-charcoal/50">72%</span>
      </div>
    </div>
  );
};

export default BueriPreview;
