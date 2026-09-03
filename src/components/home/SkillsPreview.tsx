import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Server, Database, GitBranch, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import Tag from '../ui/Tag';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    description: "Interfaces utilisateur modernes, réactives et soignées jusqu'au détail.",
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Laravel', 'Symfony', 'Python'],
    description: 'Serveurs et API robustes, pensés pour la fiabilité et la clarté du code.',
  },
  {
    title: 'Base de données',
    icon: Database,
    skills: ['MySQL', 'SQLite', 'PostgreSQL'],
    description: 'Conception de schémas et optimisation des requêtes.',
  },
  {
    title: 'Outils',
    icon: GitBranch,
    skills: ['Git', 'GitHub'],
    description: 'Contrôle de version, revue de code et collaboration.',
  },
];

const SkillsPreview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-beige-100 py-20 md:py-28">
      <div className="container-custom">
        <SectionHeading
          index="03"
          eyebrow="Compétences"
          align="center"
          title="Un socle technique complet, du frontend au serveur."
          subtitle="Les technologies et outils que j'utilise au quotidien pour concevoir des applications web de bout en bout."
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map(({ title, icon: Icon, skills, description }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <div className="group h-full rounded-xl border border-charcoal/8 bg-linen p-6 transition-all duration-300 ease-soft hover:-translate-y-1.5 hover:shadow-soft-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-sage-100 text-sage-600 transition-colors duration-300 group-hover:bg-sage-500 group-hover:text-cream">
                  <Icon size={20} />
                </span>

                <h3 className="mt-5 font-display text-lg font-medium text-charcoal">{title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-charcoal/55">{description}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 flex justify-center">
          <Button variant="outline" onClick={() => navigate('/skills')} icon={<ArrowRight size={16} />}>
            Voir toutes mes compétences
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default SkillsPreview;
