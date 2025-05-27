import React from 'react';
import { Helmet } from 'react-helmet-async';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", level: 91 },
        { name: "CSS", level: 93 },
        { name: "JavaScript", level: 75 },
        { name: "React", level: 85 },
        { name: "Python", level: 88 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 82 },
        { name: "Laravel", level: 90 },
        { name: "Symfony", level: 76 }
      ]
    },
    {
      category: "Base de données",
      skills: [
        { name: "MySQL", level: 91 },
        { name: "SQLite", level: 86 },
        { name: "PostgreSQL", level: 78 }
      ]
    },
    {
      category: "Outils & Méthodologies",
      skills: [
        { name: "Git & Github", level: 90 },
        { name: "Responsive Design", level: 93 },
        { name: "RESTful API", level: 70 },
        { name: "Testing", level: 70 }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Compétences | Yanice Mundele</title>
        <meta name="description" content="Découvrez les compétences techniques de Yanice Mundele en développement web, incluant le frontend, backend, bases de données et outils." />
      </Helmet>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-gray-900 dark:text-text-light">
              Mes compétences
            </h1>
            
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-text-medium">
              Une vue d'ensemble de mes compétences techniques et de mon niveau d'expertise
              dans différentes technologies et méthodologies.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-16">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-text-light inline-block border-b-2 border-primary pb-2">
                  {category.category}
                </h2>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-800 dark:text-text-light">
                          {skill.name}
                        </span>
                        <span className="text-primary font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-background-100 rounded-full h-2.5">
                        <div 
                          className="bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-text-light inline-block border-b-2 border-primary pb-2">
              Soft Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Résolution de problèmes",
                "Communication",
                "Travail d'équipe",
                "Organisation",
                "Adaptabilité",
                "Autonomie",
                "Créativité",
                "Attention aux détails"
              ].map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-4 bg-white dark:bg-background-200 rounded-lg shadow-sm"
                >
                  <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
                  <span className="text-gray-800 dark:text-text-light">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;