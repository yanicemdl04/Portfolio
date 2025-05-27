import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Une plateforme complète de commerce électronique avec panier, paiement et gestion des commandes.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Manager",
      description: "Application de gestion de tâches avec fonctionnalités de collaboration et de planification.",
      image: "https://images.pexels.com/photos/6956433/pexels-photo-6956433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      category: "fullstack",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Portfolio Template",
      description: "Template de portfolio personnalisable pour développeurs et designers.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Weather App",
      description: "Application météo utilisant une API externe pour afficher les prévisions en temps réel.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "API REST", "Tailwind CSS"],
      category: "frontend",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Blog API",
      description: "API RESTful pour un blog avec authentification, gestion des articles et commentaires.",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["Node.js", "Express", "MongoDB"],
      category: "backend",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Chat Application",
      description: "Application de chat en temps réel avec WebSockets et authentification.",
      image: "https://images.pexels.com/photos/4145356/pexels-photo-4145356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      category: "fullstack",
      liveLink: "#",
      githubLink: "#"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
    
  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' }
  ];
  
  return (
    <>
      <Helmet>
        <title>Projets | Yanice Mundele</title>
        <meta name="description" content="Découvrez les projets de développement web réalisés par Yanice Mundele, incluant des applications full stack, frontend et backend." />
      </Helmet>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-gray-900 dark:text-text-light">
              Mes projets
            </h1>
            
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-text-medium">
              Découvrez une sélection de mes projets. Chaque projet reflète mon 
              approche du développement et mes compétences techniques.
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center p-1 bg-gray-100 dark:bg-background-200 rounded-lg">
              <Filter size={16} className="text-gray-500 dark:text-text-medium mx-2" />
              
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    filter === category.id 
                      ? 'bg-primary text-background shadow-sm' 
                      : 'text-gray-700 dark:text-text-medium hover:text-gray-900 dark:hover:text-text-light'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary text-background p-2 rounded-full hover:bg-primary-600 transition-colors"
                      aria-label={`Voir la démo de ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                    
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-background-400 p-2 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label={`Voir le code de ${project.title}`}
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-text-light">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-text-medium mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-gray-100 dark:bg-background-100 text-gray-700 dark:text-text-light text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 dark:text-text-medium">
                Aucun projet ne correspond à ce filtre pour le moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;