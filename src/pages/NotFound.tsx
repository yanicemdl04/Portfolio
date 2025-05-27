import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <Helmet>
        <title>Page non trouvée | Yanice Mundele</title>
        <meta name="description" content="Page non trouvée - Yanice Mundele Portfolio" />
      </Helmet>
      
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-900 dark:text-text-light">
            Page non trouvée
          </h2>
          
          <p className="text-gray-600 dark:text-text-medium mb-8 max-w-md mx-auto">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-primary text-background font-medium rounded-md hover:bg-primary-600 transition-colors inline-flex items-center"
          >
            <Home size={18} className="mr-2" />
            Retour à l'accueil
          </button>
        </div>
      </section>
    </>
  );
};

export default NotFound;