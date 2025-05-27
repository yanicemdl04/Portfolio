import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

const ContactCTA: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-background to-background-300">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail size={48} className="text-primary mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-text-light">
            Intéressé par une collaboration ?
          </h2>
          
          <p className="text-base md:text-lg text-text-medium mb-8">
            Je suis ouvert aux opportunités de freelance, aux projets intéressants 
            et aux postes à temps plein. N'hésitez pas à me contacter !
          </p>
          
          <button 
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-primary text-background font-medium rounded-md hover:bg-primary-600 transition-colors inline-flex items-center"
          >
            Me contacter
            <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;