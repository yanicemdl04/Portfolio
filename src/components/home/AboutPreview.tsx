import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPreview: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-background-300">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-gray-900 dark:text-text-light">
            À propos de moi
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-text-medium mb-8">
            Passionné par le développement web depuis mes études secondaires, je me spécialise 
            dans la création d'applications web modernes et performantes. J'aime résoudre des 
            problèmes complexes et apprendre constamment de nouvelles technologies.
          </p>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-text-medium mb-8">
            Actuellement étudiant à l'Université Protestante du Congo, je développe mes compétences 
            en programmation et en conception de systèmes informatiques.
          </p>
          
          <button 
            onClick={() => navigate('/about')}
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            En savoir plus
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;