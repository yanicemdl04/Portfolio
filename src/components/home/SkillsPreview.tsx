import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Server, Database, GitBranch, ArrowRight } from 'lucide-react';

const SkillsPreview: React.FC = () => {
  const navigate = useNavigate();
  
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code size={36} className="text-primary" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Python"],
      description: "Création d'interfaces utilisateur modernes et réactives"
    },
    {
      title: "Backend",
      icon: <Server size={36} className="text-primary" />,
      skills: ["Node.js", "Laravel", "Symfony"],
      description: "Développement de serveurs et d'APIs robustes"
    },
    {
      title: "Base de données",
      icon: <Database size={36} className="text-primary" />,
      skills: ["MySQL", "SQLite", "PostgreSQL"],
      description: "Conception et optimisation de bases de données"
    },
    {
      title: "Outils",
      icon: <GitBranch size={36} className="text-primary" />,
      skills: ["Git", "GitHub"],
      description: "Contrôle de version et collaboration"
    }
  ];
  
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-gray-900 dark:text-text-light">
            Mes compétences
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-text-medium">
            Je maîtrise diverses technologies et outils qui me permettent de développer
            des applications web complètes, du frontend au backend.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-background-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-text-light">
                {category.title}
              </h3>
              
              <p className="text-gray-600 dark:text-text-medium mb-4 text-sm">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 bg-gray-100 dark:bg-background-100 text-gray-700 dark:text-text-light text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => navigate('/skills')}
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Voir toutes mes compétences
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;