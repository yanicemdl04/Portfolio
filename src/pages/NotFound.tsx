import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Page non trouvée | Yanice Mundele</title>
        <meta name="description" content="Page non trouvée - Yanice Mundele Portfolio" />
      </Helmet>

      <section className="flex min-h-[calc(100vh-80px)] items-center justify-center py-20">
        <div className="container-custom text-center">
          <Reveal>
            <p className="font-display text-display-xl font-medium leading-none text-beige-500">
              404
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 font-display text-2xl font-medium text-charcoal md:text-3xl">
              Page non trouvée
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mx-auto mt-4 max-w-md text-charcoal/60">
              La page que vous recherchez n'existe pas ou a été déplacée.
            </p>
          </Reveal>

          <Reveal delay={0.26} className="mt-10 flex justify-center">
            <Button onClick={() => navigate('/')} icon={<Home size={16} />} iconPosition="left">
              Retour à l'accueil
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default NotFound;
