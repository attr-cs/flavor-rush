
import React, { useEffect, useRef } from 'react';
import NeonText from './NeonText';
import { ShoppingCart, Navigation, Utensils } from 'lucide-react';

// Steps data
const steps = [
  {
    id: 1,
    title: "Browse & Order",
    description: "Explore our extensive menu and place your order with just a few taps.",
    icon: ShoppingCart,
    color: "green"
  },
  {
    id: 2,
    title: "Track in Real-Time",
    description: "Follow your order's journey from the restaurant to your doorstep.",
    icon: Navigation,
    color: "pink"
  },
  {
    id: 3,
    title: "Enjoy Your Meal",
    description: "Savor the delicious food delivered right to your door.",
    icon: Utensils,
    color: "blue"
  }
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Initialize array with nulls
  lineRefs.current = steps.slice(0, -1).map(() => null);
  
  // Function to animate the connecting lines
  const animateLines = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class when element is in view
          entry.target.classList.add('animate-draw-line');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    // Observe all line elements
    lineRefs.current.forEach((line) => {
      if (line) observer.observe(line);
    });
    
    return () => {
      lineRefs.current.forEach((line) => {
        if (line) observer.unobserve(line);
      });
    };
  };
  
  useEffect(() => {
    const cleanup = animateLines();
    return cleanup;
  }, []);
  
  const getColorClass = (color: string) => {
    switch (color) {
      case 'green': return 'bg-cyber-green';
      case 'pink': return 'bg-cyber-pink';
      case 'blue': return 'bg-cyber-blue';
      default: return 'bg-cyber-green';
    }
  };
  
  const getGlowClass = (color: string) => {
    switch (color) {
      case 'green': return 'glow-green';
      case 'pink': return 'glow-pink';
      case 'blue': return 'glow-blue';
      default: return 'glow-green';
    }
  };
  
  return (
    <div ref={sectionRef} className="py-20 px-4 md:px-8 bg-cyber-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-dark via-cyber-black to-black opacity-80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <NeonText color="green" tag="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </NeonText>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Getting your favorite food delivered has never been easier. Follow these simple steps.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-6 mb-10 relative px-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center text-center max-w-xs">
                {/* Icon circle */}
                <div className={`relative w-24 h-24 flex items-center justify-center rounded-full mb-6 ${getColorClass(step.color)} ${getGlowClass(step.color)} bg-opacity-20 transition-all duration-300 hover:bg-opacity-30 hover:scale-110 group`}>
                  {/* Pulsing rings */}
                  <div className={`absolute inset-0 rounded-full ${getColorClass(step.color)} opacity-20 scale-[1.15] animate-pulse`}></div>
                  <div className={`absolute inset-0 rounded-full ${getColorClass(step.color)} opacity-10 scale-[1.3] animate-pulse delay-150`}></div>
                  
                  {/* Icon */}
                  <step.icon className={`w-10 h-10 text-${step.color === 'green' ? 'cyber-green' : step.color === 'pink' ? 'cyber-pink' : 'cyber-blue'}`} />
                </div>
                
                {/* Content */}
                <NeonText color={step.color as 'green' | 'pink' | 'blue'} tag="h3" className="text-xl font-bold mb-2">
                  {step.title}
                </NeonText>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
              
              {/* Connecting line (except after the last item) */}
              {index < steps.length - 1 && (
                <div
                  ref={el => lineRefs.current[index] = el}
                  className={`hidden md:block h-0.5 w-0 ${getColorClass(step.color)} opacity-70 self-start mt-12`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
