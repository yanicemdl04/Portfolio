import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

const facts = [
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Kinshasa, RDC',
  },
  {
    icon: GraduationCap,
    label: 'Formation',
    value: 'Licence Informatique — Université Protestante du Congo',
  },
  {
    icon: Sparkles,
    label: 'Centres d\u2019intérêt',
    value: 'UI/UX, performance web, accessibilité',
  },
];

const AboutPreview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-beige-100 py-20 md:py-28">
      <div className="container-custom grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            index="02"
            eyebrow="À propos"
            title="Un développeur curieux, rigoureux et orienté résultat."
            subtitle="Passionné par le développement web depuis mes études secondaires, je me spécialise dans la création d'applications modernes et performantes — en aimant particulièrement résoudre des problèmes complexes."
          />
          <Reveal delay={0.18} className="mt-8">
            <Button variant="outline" onClick={() => navigate('/about')} icon={<ArrowRight size={16} />}>
              En savoir plus sur mon parcours
            </Button>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {facts.map(({ icon: Icon, label, value }, i) => (
              <Reveal key={label} delay={0.08 * i} className={i === 2 ? 'sm:col-span-2' : ''}>
                <div className="h-full rounded-xl border border-charcoal/8 bg-linen p-6 transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-soft">
                  <Icon size={20} className="text-sage-500" />
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-charcoal/40">
                    {label}
                  </p>
                  <p className="mt-1.5 font-medium leading-snug text-charcoal">{value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
