import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import ProjectsPreview from '../components/home/ProjectsPreview';
import AboutPreview from '../components/home/AboutPreview';
import SkillsPreview from '../components/home/SkillsPreview';
import ContactCTA from '../components/home/ContactCTA';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Yanice Mundele | Développeur Web Full Stack</title>
        <meta
          name="description"
          content="Portfolio de Yanice Mundele Mbuni, développeur web spécialisé en React, Node.js, Laravel et Python."
        />
      </Helmet>

      <HeroSection />
      <ProjectsPreview />
      <AboutPreview />
      <SkillsPreview />
      <ContactCTA />
    </>
  );
};

export default Home;
