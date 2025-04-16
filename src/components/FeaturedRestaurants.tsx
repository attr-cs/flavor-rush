
import React, { useRef, useState } from 'react';
import { cn } from "@/lib/utils";
import NeonText from './NeonText';
import AnimatedButton from './AnimatedButton';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const restaurants = [
  {
    id: 1,
    name: "Neon Ramen",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
    logo: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200",
    cuisine: "Japanese",
    rating: 4.8,
    deliveryTime: "25 min",
    description: "Authentic Japanese ramen with a cyberpunk twist. Neon-lit bowls and futuristic flavors."
  },
  {
    id: 2,
    name: "Byte Burger",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800",
    logo: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=200",
    cuisine: "American",
    rating: 4.6,
    deliveryTime: "18 min",
    description: "Digital-age burgers with holographic toppings and quantum-crafted patties."
  },
  {
    id: 3,
    name: "Pixel Pizza",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800",
    logo: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=200",
    cuisine: "Italian",
    rating: 4.7,
    deliveryTime: "22 min",
    description: "8-bit inspired pizzas with retro gaming aesthetics and modern Italian taste."
  },
  {
    id: 4,
    name: "Virtual Sushi",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
    logo: "https://images.unsplash.com/photo-1533450718592-29d45635f0a9?w=200",
    cuisine: "Japanese",
    rating: 4.9,
    deliveryTime: "30 min",
    description: "Augmented reality sushi that combines traditional technique with futuristic presentation."
  },
  {
    id: 5,
    name: "Circuit Cafe",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    logo: "https://images.unsplash.com/photo-1518057111178-44a106bad636?w=200", 
    cuisine: "Cafe",
    rating: 4.5,
    deliveryTime: "15 min",
    description: "Tech-inspired coffee and pastries for the digital nomad in a neon dystopia."
  }
];

const FeaturedRestaurants = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useIsMobile();
  
  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.clientWidth || 0;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setScrollPosition(container.scrollLeft + scrollAmount);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-cyber-yellow text-cyber-yellow" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <Star className="absolute w-4 h-4 text-cyber-yellow" />
          <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
            <Star className="w-4 h-4 fill-cyber-yellow text-cyber-yellow" />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-600" />);
    }
    
    return stars;
  };
  
  return (
    <div className="py-16 sm:py-20 px-4 md:px-6 lg:px-0 bg-cyber-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1000')] bg-cover bg-center opacity-10"></div>
      
      <div className="absolute inset-0" 
           style={{
             backgroundImage: 'linear-gradient(to right, rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 240, 255, 0.05) 1px, transparent 1px)',
             backgroundSize: '50px 50px'
           }}>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <NeonText color="blue" tag="h2" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured Restaurants
          </NeonText>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Discover top-rated eateries that are revolutionizing food delivery with their visionary culinary creations.
          </p>
        </div>
        
        <div className="flex justify-end gap-4 mb-6 px-4 md:px-8">
          <button 
            onClick={() => handleScroll('left')}
            className="p-2 rounded-full bg-cyber-dark border border-gray-700 text-gray-300 hover:bg-cyber-blue hover:text-cyber-black transition-colors duration-300 hover:glow-blue"
            aria-label="Previous restaurants"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="p-2 rounded-full bg-cyber-dark border border-gray-700 text-gray-300 hover:bg-cyber-pink hover:text-cyber-black transition-colors duration-300 hover:glow-pink"
            aria-label="Next restaurants"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-4 sm:gap-6 pb-8 px-4 md:px-8 -mx-2 sm:mx-0"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {restaurants.map((restaurant) => (
            <div 
              key={restaurant.id}
              className="snap-start flex-shrink-0 w-[85%] sm:w-[calc(100%/2-16px)] lg:w-[calc(100%/3-16px)] group px-2 sm:px-0"
            >
              <div className="h-full rounded-xl overflow-hidden cyber-border bg-cyber-dark transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                <div className="relative h-36 sm:h-48 overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black to-transparent opacity-60"></div>
                  
                  <div className="absolute -bottom-10 left-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-cyber-dark cyber-glass">
                    <img 
                      src={restaurant.logo} 
                      alt={`${restaurant.name} logo`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="pt-10 sm:pt-12 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{restaurant.name}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">{restaurant.cuisine}</p>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm">
                      <div className="flex mr-1">
                        {renderStars(restaurant.rating)}
                      </div>
                      <span className="text-cyber-yellow">{restaurant.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-xs sm:text-sm mb-4 line-clamp-2">
                    {restaurant.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-cyber-green">
                      {restaurant.deliveryTime} delivery
                    </span>
                    <AnimatedButton color="blue" className="text-xs sm:text-sm py-1 sm:py-1.5 px-3 sm:px-4">
                      View Menu
                    </AnimatedButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>
        {`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        `}
      </style>
    </div>
  );
};

export default FeaturedRestaurants;
