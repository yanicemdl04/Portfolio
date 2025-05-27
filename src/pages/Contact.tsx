import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <>
      <Helmet>
        <title>Contact | Yanice Mundele</title>
        <meta name="description" content="Contactez Yanice Mundele pour discuter de projets de développement web, opportunités de collaboration ou toute autre question." />
      </Helmet>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-gray-900 dark:text-text-light">
              Me contacter
            </h1>
            
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            
            <p className="text-base md:text-lg text-gray-600 dark:text-text-medium">
              Vous avez un projet en tête ou vous souhaitez simplement me dire bonjour ?
              N'hésitez pas à me contacter. Je vous répondrai dans les plus brefs délais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-text-light">
                  Informations de contact
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="text-primary mt-1 mr-3" size={20} />
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-text-light">Email</h3>
                      <a href="mailto:contact@yanice.dev" className="text-gray-600 dark:text-text-medium hover:text-primary dark:hover:text-primary transition-colors">
                        contact@yanice.dev
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-primary mt-1 mr-3" size={20} />
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-text-light">Téléphone</h3>
                      <a href="tel:+243000000000" className="text-gray-600 dark:text-text-medium hover:text-primary dark:hover:text-primary transition-colors">
                        +243 00 000 00 00
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="text-primary mt-1 mr-3" size={20} />
                    <div>
                      <h3 className="font-medium text-gray-800 dark:text-text-light">Localisation</h3>
                      <p className="text-gray-600 dark:text-text-medium">
                        Kinshasa, République Démocratique du Congo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-text-light">
                  Réseaux sociaux
                </h2>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/yanice-mundele-35545a364" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-background-200 rounded-full text-gray-700 dark:text-text-medium hover:text-primary dark:hover:text-primary hover:shadow-md transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  
                  <a 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-background-200 rounded-full text-gray-700 dark:text-text-medium hover:text-primary dark:hover:text-primary hover:shadow-md transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-background-200 rounded-lg shadow-sm p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-text-light">
                  Envoyez-moi un message
                </h2>
                
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-md">
                    Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.
                  </div>
                )}
                
                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-md">
                    Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-text-light mb-2">
                        Nom complet
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-background-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-300 text-gray-900 dark:text-text-light"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-text-light mb-2">
                        Adresse email
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-background-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-300 text-gray-900 dark:text-text-light"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-text-light mb-2">
                      Sujet
                    </label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-background-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-300 text-gray-900 dark:text-text-light"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-text-light mb-2">
                      Message
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-background-100 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-background-300 text-gray-900 dark:text-text-light resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-primary text-background font-medium rounded-md hover:bg-primary-600 transition-colors inline-flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-background\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                          <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;