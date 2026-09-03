import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Code2 } from 'lucide-react';
import Button from '../ui/Button';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stack = ['React', 'Node.js', 'Laravel', 'Python'];

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">
      {/* Forme géométrique discrète — pas de gradient, juste une masse de couleur */}
      <div
        className="pointer-events-none absolute -right-40 -top-24 h-[560px] w-[560px] rounded-full bg-beige-200/70 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-custom relative grid grid-cols-1 items-center gap-16 py-16 md:py-24 lg:grid-cols-12 lg:gap-8 lg:py-28">
        <motion.div
          className="lg:col-span-7"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className="mb-7 flex items-center gap-2">
            <MapPin size={14} className="text-sage-500" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-charcoal/55">
              Kinshasa, RDC
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-display-xl font-display font-medium text-charcoal"
          >
            Yanice <span className="text-umber-400">Mundele</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-display-md font-display font-normal text-charcoal/70"
          >
            Développeur Web Full&nbsp;Stack
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/65 md:text-lg"
          >
            Spécialisé en React, Node.js, Laravel et Python, je conçois et développe des
            applications web modernes, accessibles et pensées pour durer — de l'interface
            jusqu'à l'architecture serveur.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button onClick={() => navigate('/projects')} icon={<ArrowRight size={16} />}>
              Voir mes projets
            </Button>
            <Button variant="outline" onClick={() => navigate('/contact')}>
              Me contacter
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-charcoal/8 pt-6"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-charcoal/40">
              Stack principal
            </span>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {stack.map((tech) => (
                <span key={tech} className="text-sm font-medium text-charcoal/60">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative lg:col-span-5"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <div className="relative mx-auto max-w-sm">
            <div
              className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-umber-300/50"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl shadow-soft-lg">
              <img
                src="/yan.jpg"
                alt="Portrait de Yanice Mundele"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-3 rounded-xl border border-charcoal/8 bg-linen/95 p-4 shadow-soft-lg backdrop-blur-sm sm:left-6 sm:right-auto sm:w-56">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                <Code2 size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-charcoal">Full-Stack</p>
                <p className="text-xs text-charcoal/50">Front & back-end</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
