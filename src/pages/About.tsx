import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, GraduationCap, User } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';

const education = [
  {
    period: '2022 — 2026',
    institution: 'Université Protestante du Congo',
    degree: 'Licence en Informatique',
    description: 'Spécialisation en développement de logiciels et systèmes d\u2019information.',
  },
  {
    period: '2016 — 2022',
    institution: 'CSC Malula',
    degree: "Diplôme d'État",
    description: 'Formation secondaire avec orientation en sciences.',
  },
  {
    period: '2010 — 2016',
    institution: 'École Crep Émergence',
    degree: "Certificat d'études primaires",
    description: 'Formation primaire fondamentale.',
  },
];

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>À propos | Yanice Mundele</title>
        <meta
          name="description"
          content="En savoir plus sur Yanice Mundele, son parcours, ses études et sa passion pour le développement web."
        />
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <SectionHeading
            eyebrow="À propos"
            align="center"
            title="Qui suis-je"
            subtitle="Découvrez mon parcours, mes études et ce qui m'anime en tant que développeur web."
            className="mx-auto"
          />

          <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm">
                <div
                  className="absolute -bottom-4 -left-4 h-full w-full rounded-2xl border border-umber-300/50"
                  aria-hidden="true"
                />
                <img
                  src="/mundele.jpg"
                  alt="Yanice Mundele"
                  className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-soft-lg"
                  style={{ objectPosition: '50% 25%' }}
                />
              </div>
            </Reveal>

            <div className="space-y-6 lg:col-span-7">
              <Reveal className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                  <User size={18} />
                </span>
                <h2 className="font-display text-xl font-medium text-charcoal">
                  Développeur passionné, basé à Kinshasa
                </h2>
              </Reveal>

              <Reveal delay={0.06}>
                <p className="leading-relaxed text-charcoal/65">
                  Je m'appelle Yanice Mundele Mbuni, développeur web passionné basé à Kinshasa.
                  Spécialisé dans la création d'applications web modernes et performantes, je
                  m'efforce constamment d'améliorer mes compétences et d'explorer de nouvelles
                  technologies.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="leading-relaxed text-charcoal/65">
                  J'ai commencé à m'intéresser à la programmation pendant mes études
                  secondaires, et depuis, je n'ai cessé d'approfondir mes connaissances. Je suis
                  particulièrement attiré par le développement frontend avec React, mais j'aime
                  également travailler sur des projets backend avec Node.js et Laravel.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="leading-relaxed text-charcoal/65">
                  En dehors du code, je m'intéresse à la conception UI/UX, à l'optimisation des
                  performances web, et à l'accessibilité. Je crois fermement que le web devrait
                  être accessible à tous, et je m'efforce d'appliquer ce principe dans chacun de
                  mes projets.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="mx-auto mt-24 max-w-3xl">
            <Reveal className="mb-10 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                <GraduationCap size={18} />
              </span>
              <h2 className="font-display text-xl font-medium text-charcoal">
                Parcours éducatif
              </h2>
            </Reveal>

            <div className="space-y-10">
              {education.map((item, index) => (
                <Reveal key={index} delay={index * 0.08}>
                  <div className="relative border-l-2 border-charcoal/10 pl-8">
                    <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-cream bg-sage-500" />

                    <div className="mb-2 flex items-center gap-2">
                      <Calendar size={14} className="text-umber-400" />
                      <span className="font-mono text-xs uppercase tracking-wider text-charcoal/45">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-medium text-charcoal">
                      {item.institution}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-sage-600">{item.degree}</p>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
