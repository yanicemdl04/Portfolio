import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', level: 91 },
      { name: 'CSS', level: 93 },
      { name: 'JavaScript', level: 75 },
      { name: 'React', level: 85 },
      { name: 'Python', level: 88 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Laravel', level: 90 },
      { name: 'Symfony', level: 76 },
    ],
  },
  {
    category: 'Base de données',
    skills: [
      { name: 'MySQL', level: 91 },
      { name: 'SQLite', level: 86 },
      { name: 'PostgreSQL', level: 78 },
    ],
  },
  {
    category: 'Outils & méthodologies',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Responsive Design', level: 93 },
      { name: 'RESTful API', level: 70 },
      { name: 'Testing', level: 70 },
    ],
  },
];

const softSkills = [
  'Résolution de problèmes',
  'Communication',
  "Travail d'équipe",
  'Organisation',
  'Adaptabilité',
  'Autonomie',
  'Créativité',
  'Attention aux détails',
];

const SkillBar: React.FC<{ name: string; level: number; delay: number }> = ({
  name,
  level,
  delay,
}) => (
  <Reveal delay={delay}>
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-sm font-medium text-charcoal">{name}</span>
        <span className="font-mono text-xs text-umber-400">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-beige-200">
        <motion.div
          className="h-full rounded-full bg-sage-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  </Reveal>
);

const Skills: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Compétences | Yanice Mundele</title>
        <meta
          name="description"
          content="Découvrez les compétences techniques de Yanice Mundele en développement web, incluant le frontend, backend, bases de données et outils."
        />
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Expertise"
            align="center"
            title="Mes compétences"
            subtitle="Une vue d'ensemble de mes compétences techniques et de mon niveau d'expertise dans différentes technologies et méthodologies."
            className="mx-auto"
          />

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2">
            {skillCategories.map((category) => (
              <div key={category.category}>
                <h2 className="mb-7 inline-block border-b-2 border-sage-400 pb-2 font-display text-xl font-medium text-charcoal">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.skills.map((skill, i) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.05} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-20 max-w-4xl">
            <h2 className="mb-8 inline-block border-b-2 border-sage-400 pb-2 font-display text-xl font-medium text-charcoal">
              Savoir-être
            </h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {softSkills.map((skill, index) => (
                <Reveal key={skill} delay={index * 0.04}>
                  <div className="flex items-center gap-3 rounded-lg border border-charcoal/8 bg-linen p-4 transition-colors duration-300 hover:border-sage-300">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage-400" />
                    <span className="text-sm text-charcoal/75">{skill}</span>
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

export default Skills;
