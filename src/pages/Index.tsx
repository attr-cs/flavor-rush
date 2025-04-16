
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import MenuShowcase from '../components/MenuShowcase';
import FeaturedRestaurants from '../components/FeaturedRestaurants';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CtaFooter from '../components/CtaFooter';

const Index = () => {
  // Add scroll animation effect
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if element is in viewport
        if (rect.top < windowHeight * 0.85) {
          element.classList.add('animate-scale-fade-in');
          // Prevent opacity from going back to 0 when scrolling
          element.classList.remove('opacity-0');
        }
      });
    };
    
    // Run on initial load
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className="font-montserrat bg-cyber-black text-white overflow-hidden">
      <Hero />
      <div className="scroll-animate opacity-0">
        <MenuShowcase />
      </div>
      <div className="scroll-animate opacity-0">
        <FeaturedRestaurants />
      </div>
      <div className="scroll-animate opacity-0">
        <HowItWorks />
      </div>
      <div className="scroll-animate opacity-0">
        <Testimonials />
      </div>
      <CtaFooter />
    </div>
  );
};

export default Index;
