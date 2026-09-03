import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import ProjectCard from '../projects/ProjectCard';
import { projects } from '../../data/projects';

const ProjectsPreview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28">
      <div className="container-custom">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            index="01"
            eyebrow="Projets"
            title="Des réalisations concrètes, en production."
            subtitle="Une sélection de sites et d'applications que j'ai conçus et déployés — chacun reflète une problématique réelle et une solution livrée."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08} className={i === 0 ? 'md:col-span-2' : ''}>
              <ProjectCard project={project} featured={i === 0} detailed={i === 0} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 flex justify-center">
          <Button variant="outline" onClick={() => navigate('/projects')} icon={<ArrowRight size={16} />}>
            Voir tous mes projets
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsPreview;
