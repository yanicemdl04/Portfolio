import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Briefcase, GraduationCap, User } from 'lucide-react';

const About: React.FC = () => {
  const education = [
    {
      period: "2022-2026",
      institution: "Université Protestante du Congo",
      degree: "Licence en Informatique",
      description: "Spécialisation en développement de logiciels et systèmes d'information."
    },
    {
      period: "2016-2022",
      institution: "CSC Malula",
      degree: "Diplôme d'État",
      description: "Formation secondaire avec orientation en sciences."
    },
    {
      period: "2010-2016",
      institution: "École Crep Émergence",
      degree: "Certificat d'études primaires",
      description: "Formation primaire fondamentale."
    }
  ];

  return (
    <>
      <Helmet>
        <title>À propos | Yanice Mundele</title>
        <meta name="description" content="En savoir plus sur Yanice Mundele, son parcours, ses études et sa passion pour le développement web." />
      </Helmet>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-gray-900 dark:text-text-light">
              À propos de moi
            </h1>
            
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-text-medium">
              Découvrez mon parcours, mes études et ce qui m'anime en tant que développeur web.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl transform -rotate-3"></div>
                <img 
                  src="/ymdl.JPG" 
                  alt="Yanice Mundele" 
                  className="w-full h-auto object-cover rounded-2xl relative z-10"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <User size={24} className="text-primary" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-text-light">
                  Qui suis-je
                </h2>
              </div>
              
              <p className="text-gray-600 dark:text-text-medium">
                Je m'appelle Yanice Mundele Mbuni, développeur web passionné basé à Kinshasa. 
                Spécialisé dans la création d'applications web modernes et performantes, 
                je m'efforce constamment d'améliorer mes compétences et d'explorer de 
                nouvelles technologies.
              </p>
              
              <p className="text-gray-600 dark:text-text-medium">
                J'ai commencé à m'intéresser à la programmation pendant mes études secondaires, 
                et depuis, je n'ai cessé d'approfondir mes connaissances. Je suis particulièrement 
                attiré par le développement frontend avec React, mais j'aime également travailler 
                sur des projets backend avec Node.js et Laravel.
              </p>
              
              <p className="text-gray-600 dark:text-text-medium">
                En dehors du code, je m'intéresse à la conception UI/UX, à l'optimisation des 
                performances web, et à l'accessibilité. Je crois fermement que le web devrait 
                être accessible à tous, et je m'efforce d'appliquer ce principe dans chacun 
                de mes projets.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <GraduationCap size={24} className="text-primary" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-text-light">
                Parcours éducatif
              </h2>
            </div>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-background-100">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  
                  <div className="mb-2 flex items-center space-x-2">
                    <Calendar size={16} className="text-primary" />
                    <span className="text-sm text-gray-500 dark:text-text-medium font-medium">
                      {item.period}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-text-light mb-1">
                    {item.institution}
                  </h3>
                  
                  <p className="text-primary font-medium mb-2">
                    {item.degree}
                  </p>
                  
                  <p className="text-gray-600 dark:text-text-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;