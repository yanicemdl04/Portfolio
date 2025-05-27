import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] hidden lg:block" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-primary font-fira mb-4 animate-slide-right">Bonjour, je m'appelle</p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins tracking-tight leading-tight text-gray-900 dark:text-text-light animate-slide-up">
              Yanice Mundele<span className="text-primary">.</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700 dark:text-text-medium animate-slide-up" style={{animationDelay: '100ms'}}>
              Développeur Web Full Stack
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-text-medium max-w-xl animate-slide-up" style={{animationDelay: '200ms'}}>
              Spécialisé en React, Node.js, Laravel et Python. Je conçois et développe des applications web modernes, 
              accessibles et performantes.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up" style={{animationDelay: '300ms'}}>
              <button 
                onClick={() => navigate('/projects')}
                className="px-6 py-3 bg-primary text-background font-medium rounded-md hover:bg-primary-600 transition-colors inline-flex items-center"
              >
                Voir mes projets
                <ChevronRight size={18} className="ml-1" />
              </button>
              
              <button 
                onClick={() => navigate('/contact')}
                className="px-6 py-3 border border-primary bg-transparent text-gray-900 dark:text-primary font-medium rounded-md hover:bg-primary/10 transition-colors"
              >
                Me contacter
              </button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-6"></div>
              <img 
                src="/yan.jpg"
                alt="Yanice Mundele" 
                className="w-[400px] h-[500px] object-cover rounded-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;