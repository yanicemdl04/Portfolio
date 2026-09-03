import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../../data/projects';
import BrowserFrame from '../ui/BrowserFrame';
import Tag from '../ui/Tag';
import RawbankPreview from './previews/RawbankPreview';
import BueriPreview from './previews/BueriPreview';
import CanalboxPreview from './previews/CanalboxPreview';

const previewMap = {
  rawbank: RawbankPreview,
  bueri: BueriPreview,
  canalbox: CanalboxPreview,
};

interface ProjectCardProps {
  project: Project;
  detailed?: boolean;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, detailed = false, featured = false }) => {
  const Preview = previewMap[project.preview];
  const domain = project.link.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <article
      className={`group relative flex h-full overflow-hidden rounded-xl border border-charcoal/8 bg-linen shadow-soft transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-soft-lg ${
        featured ? 'flex-col md:flex-row' : 'flex-col'
      }`}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ouvrir ${project.title} dans un nouvel onglet`}
        className={`block shrink-0 ${featured ? 'md:w-1/2' : ''}`}
      >
        <BrowserFrame
          url={domain}
          className={`rounded-b-none border-b-0 ${
            featured ? 'rounded-t-xl md:h-full md:rounded-tr-none md:rounded-bl-xl' : 'rounded-t-xl'
          }`}
        >
          <div
            className={`overflow-hidden transition-transform duration-700 ease-premium group-hover:scale-[1.03] ${
              featured ? 'h-56 sm:h-72 md:h-auto md:flex-1 md:min-h-[19rem]' : 'h-48 sm:h-56'
            }`}
          >
            <Preview />
          </div>
        </BrowserFrame>
      </a>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-sage-500">
              {project.tagline}
            </p>
            <h3
              className={`mt-1 font-display font-medium text-charcoal ${
                featured ? 'text-2xl' : 'text-xl'
              }`}
            >
              {project.title}
            </h3>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-all duration-300 ease-soft group-hover:border-sage-400 group-hover:bg-sage-500 group-hover:text-cream"
            aria-label={`Voir le site de ${project.title}`}
          >
            <ArrowUpRight size={16} />
          </a>
        </div>

        <p className={`leading-relaxed text-charcoal/65 ${featured ? 'text-[15px] md:text-base' : 'text-sm'}`}>
          {detailed ? project.longDescription : project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2 pt-1">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
