import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ServiceAreas from '../components/ServiceAreas';
import About from '../components/About';
import Contact from '../components/Contact';
import BookkeeperCostCalculator from '../components/BookkeeperCostCalculator';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <BookkeeperCostCalculator />
      <About />
      <Services />
      <Testimonials />
      <ServiceAreas />
      <Contact />
    </>
  );
};

export default HomePage;
