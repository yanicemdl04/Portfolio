import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'contact@yanice.dev', href: 'mailto:contact@yanice.dev' },
  { icon: Phone, label: 'Téléphone', value: '+243 00 000 00 00', href: 'tel:+243000000000' },
  { icon: MapPin, label: 'Localisation', value: 'Kinshasa, RD Congo', href: undefined },
];

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/yanice-mundele-35545a364', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/', label: 'GitHub' },
];

const inputClasses =
  'w-full rounded-lg border border-charcoal/15 bg-linen px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/35 transition-colors duration-300 focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-200';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Yanice Mundele</title>
        <meta
          name="description"
          content="Contactez Yanice Mundele pour discuter de projets de développement web, opportunités de collaboration ou toute autre question."
        />
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Contact"
            align="center"
            title="Me contacter"
            subtitle="Vous avez un projet en tête ou vous souhaitez simplement me dire bonjour ? Je vous répondrai dans les plus brefs délais."
            className="mx-auto"
          />

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              <div className="space-y-10">
                <div>
                  <h2 className="mb-6 font-display text-lg font-medium text-charcoal">
                    Informations de contact
                  </h2>
                  <div className="space-y-5">
                    {contactInfo.map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                          <Icon size={17} />
                        </span>
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-wider text-charcoal/40">
                            {label}
                          </p>
                          {href ? (
                            <a
                              href={href}
                              className="text-sm font-medium text-charcoal transition-colors hover:text-sage-500"
                            >
                              {value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-charcoal">{value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="mb-5 font-display text-lg font-medium text-charcoal">
                    Réseaux sociaux
                  </h2>
                  <div className="flex gap-3">
                    {socials.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-all duration-300 ease-soft hover:-translate-y-0.5 hover:border-sage-400 hover:text-sage-500 hover:shadow-soft"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-3">
              <div className="rounded-2xl border border-charcoal/8 bg-linen p-6 shadow-soft sm:p-8">
                <h2 className="mb-6 font-display text-lg font-medium text-charcoal">
                  Envoyez-moi un message
                </h2>

                {submitSuccess && (
                  <div className="mb-6 flex items-center gap-2 rounded-lg border border-sage-300 bg-sage-100 px-4 py-3 text-sm text-sage-600">
                    <CheckCircle2 size={16} />
                    Votre message a été envoyé avec succès. Je vous répondrai rapidement.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-charcoal">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal">
                        Adresse email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-charcoal">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-charcoal">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} icon={<Send size={16} />} className="w-full sm:w-auto">
                    {isSubmitting ? 'Envoi en cours…' : 'Envoyer le message'}
                  </Button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
