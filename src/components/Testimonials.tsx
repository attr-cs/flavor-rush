
import React from 'react';
import NeonText from './NeonText';
import { Star } from 'lucide-react';

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "FlavorRush changed my life! The cyberpunk interface is so cool, and my food always arrives hot and fresh. The delivery drones are next level!",
    color: "pink"
  },
  {
    id: 2,
    name: "Mia Johnson",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    text: "I love the real-time tracking feature. It's like watching a video game while I wait for my food. Delivery is consistently fast!",
    color: "green"
  },
  {
    id: 3,
    name: "Jamal Williams",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    text: "The selection of restaurants is incredible. I've discovered so many amazing places I would have never found otherwise.",
    color: "blue"
  },
  {
    id: 4,
    name: "Sofia Rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    rating: 5,
    text: "The app interface is gorgeous! And I love the little animations when my food is on the way. Makes waiting for food actually fun!",
    color: "orange"
  },
  {
    id: 5,
    name: "David Park",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 4,
    text: "Fast delivery and the food quality has always been excellent. The futuristic vibes of the app make me feel like I'm living in 2077!",
    color: "green"
  },
  {
    id: 6,
    name: "Emma Thompson",
    avatar: "https://randomuser.me/api/portraits/women/62.jpg",
    rating: 5,
    text: "Customer service is fantastic. Had an issue once and they resolved it immediately. The app looks cool too—like something from a sci-fi movie!",
    color: "pink"
  }
];

// Function to render star ratings
const renderStars = (rating: number) => {
  return Array(5).fill(0).map((_, i) => (
    <Star 
      key={i} 
      className={`w-4 h-4 ${i < rating ? "text-cyber-yellow fill-cyber-yellow" : "text-gray-600"}`} 
    />
  ));
};

const Testimonials = () => {
  return (
    <div className="py-20 px-4 md:px-8 bg-cyber-black relative overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyber-dark via-cyber-black to-black opacity-60"></div>
      
      {/* Grid lines */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 0, 168, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <NeonText color="orange" tag="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What People Are Saying
          </NeonText>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have experienced the future of food delivery.
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const bubbleColor = 
              testimonial.color === 'pink' ? 'border-cyber-pink' :
              testimonial.color === 'green' ? 'border-cyber-green' :
              testimonial.color === 'orange' ? 'border-cyber-orange' : 'border-cyber-blue';
            
            const glowClass = 
              testimonial.color === 'pink' ? 'hover:glow-pink' :
              testimonial.color === 'green' ? 'hover:glow-green' :
              testimonial.color === 'orange' ? 'hover:glow-orange' : 'hover:glow-blue';
              
            return (
              <div 
                key={testimonial.id}
                className={`cyber-glass p-6 rounded-lg border ${bubbleColor} transition-all duration-300 ${glowClass} animate-scale-fade-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* User info */}
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <div 
                      className={`absolute inset-0 rounded-full animate-pulse-glow opacity-50 ${
                        testimonial.color === 'pink' ? 'bg-cyber-pink' :
                        testimonial.color === 'green' ? 'bg-cyber-green' :
                        testimonial.color === 'orange' ? 'bg-cyber-orange' : 'bg-cyber-blue'
                      }`}
                      style={{ animationDuration: '3s', animationDelay: `${index * 0.5}s` }}
                    ></div>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="rounded-full w-12 h-12 object-cover relative z-10"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                
                {/* Testimonial text */}
                <p className="text-gray-300">"{testimonial.text}"</p>
                
                {/* Decorative glitch effect */}
                <div className="absolute top-0 right-0 w-20 h-1 opacity-50 bg-gradient-to-r from-transparent via-cyber-pink to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-20 h-1 opacity-50 bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
