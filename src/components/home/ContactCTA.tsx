import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';

const ContactCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28">
      <div className="container-custom">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-charcoal px-8 py-16 text-center sm:px-16 sm:py-20">
            <div
              className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-sage-500/10"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-umber-400/10"
              aria-hidden="true"
            />

            <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-sage-300">
              04 — Contact
            </p>

            <h2 className="relative mx-auto mt-5 max-w-xl text-display-md font-display font-medium text-cream">
              Une idée de projet ? Parlons-en.
            </h2>

            <p className="relative mx-auto mt-5 max-w-md text-base leading-relaxed text-cream/60">
              Je suis ouvert aux opportunités de freelance, aux projets ambitieux et aux
              postes à temps plein. N'hésitez pas à me contacter.
            </p>

            <div className="relative mt-10 flex justify-center">
              <Button
                onClick={() => navigate('/contact')}
                icon={<ArrowRight size={16} />}
                size="lg"
                variant="inverse"
              >
                Me contacter
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactCTA;
