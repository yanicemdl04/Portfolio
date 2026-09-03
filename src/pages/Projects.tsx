import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Projets | Yanice Mundele</title>
        <meta
          name="description"
          content="Découvrez les projets web réalisés et déployés par Yanice Mundele : applications full-stack pensées et livrées de bout en bout."
        />
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Réalisations"
            align="center"
            title="Mes projets"
            subtitle="Une sélection de sites et d'applications réellement conçus, développés et déployés — chaque lien mène vers le projet en ligne."
            className="mx-auto"
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal
                key={project.slug}
                delay={i * 0.08}
                className={i === 0 ? 'md:col-span-2' : ''}
              >
                <ProjectCard project={project} detailed featured={i === 0} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-sm leading-relaxed text-charcoal/50">
              D'autres projets sont en cours de développement et viendront enrichir cette
              sélection prochainement.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Projects;
