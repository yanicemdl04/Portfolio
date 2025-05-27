import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectsPreview: React.FC = () => {
  const navigate = useNavigate();
  
  const featuredProjects = [
    {
      title: "E-commerce Platform",
      description: "Une plateforme complète de commerce électronique avec panier, paiement et gestion des commandes.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Manager",
      description: "Application de gestion de tâches avec fonctionnalités de collaboration et de planification.",
      image: "https://images.pexels.com/photos/6956433/pexels-photo-6956433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Portfolio Template",
      description: "Template de portfolio personnalisable pour développeurs et designers.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "#",
      githubLink: "#"
    }
  ];
  
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-background-300">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-gray-900 dark:text-text-light">
            Projets récents
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-text-medium">
            Découvrez une sélection de mes projets récents. Chacun d'eux reflète
            mon approche et mes compétences en développement web.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-background-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-text-light">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-text-medium mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-gray-100 dark:bg-background-100 text-gray-700 dark:text-text-light text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Live Demo
                  </a>
                  
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-700 dark:text-text-medium hover:text-primary dark:hover:text-primary"
                  >
                    <Github size={14} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/projects')}
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Voir tous mes projets
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;