import React, { useEffect, useRef } from 'react';
import AnimatedButton from './AnimatedButton';
import NeonText from './NeonText';
import GlitchEffect from './GlitchEffect';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const hero = heroRef.current;
      
      // Parallax effect
      const headline = hero.querySelector('.hero-headline');
      const subheadline = hero.querySelector('.hero-subheadline');
      const foodItems = hero.querySelectorAll('.food-item');
      
      if (headline && subheadline) {
        headline.setAttribute('style', `transform: translateY(${scrollPosition * 0.1}px) scale(${1 + scrollPosition * 0.0005})`);
        subheadline.setAttribute('style', `transform: translateY(${scrollPosition * 0.05}px)`);
      }
      
      foodItems.forEach((item, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        item.setAttribute('style', `transform: translateY(${scrollPosition * 0.07 * direction}px) rotate(${scrollPosition * 0.02}deg)`);
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden bg-cyber-black">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-dark via-cyber-black to-black opacity-80"></div>
        
        {/* City grid lines */}
        <div className="absolute left-0 right-0 bottom-0 h-[30vh] w-full perspective-[1000px]">
          <div className="absolute left-0 right-0 bottom-[-10vh] h-[100vh] w-full" 
               style={{ 
                 background: 'linear-gradient(to bottom, transparent, rgba(0, 255, 102, 0.2))',
                 transform: 'rotateX(70deg)',
                 backgroundSize: '50px 50px',
                 backgroundImage: 'linear-gradient(to right, rgba(0, 255, 102, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 102, 0.1) 1px, transparent 1px)'
               }}>
          </div>
        </div>
        
        {/* Neon lights */}
        <div className="absolute top-20 left-10 w-20 h-1 bg-cyber-pink rounded-full animate-pulse-glow blur"></div>
        <div className="absolute top-40 right-20 w-16 h-1 bg-cyber-blue rounded-full animate-pulse-glow blur-sm"></div>
        <div className="absolute bottom-60 left-1/4 w-32 h-1 bg-cyber-orange rounded-full animate-pulse-glow blur-sm"></div>
        <div className="absolute bottom-80 right-1/3 w-24 h-1 bg-cyber-green rounded-full animate-pulse-glow blur"></div>
      </div>
      
      {/* Food items */}
      <div className="food-item absolute top-1/4 right-[15%] w-20 h-20 md:w-32 md:h-32 bg-[url('https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400')] bg-contain bg-no-repeat bg-center rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="food-item absolute top-2/3 left-[20%] w-16 h-16 md:w-24 md:h-24 bg-[url('https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400')] bg-contain bg-no-repeat bg-center rounded-full animate-float" style={{ animationDelay: '1.2s' }}></div>
      <div className="food-item absolute bottom-1/4 right-[25%] w-20 h-20 md:w-28 md:h-28 bg-[url('https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400')] bg-contain bg-no-repeat bg-center rounded-full animate-float" style={{ animationDelay: '0.2s' }}></div>
      
      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <GlitchEffect active={false} className="mb-3 hero-headline">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4">
            <NeonText color="green" tag="span" className="block">Order.</NeonText>
            <NeonText color="pink" tag="span" className="block">Track.</NeonText>
            <NeonText color="orange" tag="span" className="block">Delivered by</NeonText>
            <GlitchEffect className="inline-block">
              <NeonText color="blue" tag="span" className="text-4xl md:text-6xl lg:text-8xl font-black tracking-wider">
                Rush City Eats.
              </NeonText>
            </GlitchEffect>
          </h1>
        </GlitchEffect>
        
        <p className="hero-subheadline text-xl md:text-2xl font-medium text-gray-300 max-w-2xl mb-10">
          Efficient food delivery for the modern city
          <span className="inline-block ml-1 animate-pulse">.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <AnimatedButton color="green" large>Order Now</AnimatedButton>
          <AnimatedButton color="orange" large>Explore Menu</AnimatedButton>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <div className="w-0.5 h-6 bg-gradient-to-b from-cyber-blue to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
