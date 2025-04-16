
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import NeonText from './NeonText';
import { ChevronDown, Flame, Clock, DollarSign } from 'lucide-react';

// Cuisine types
const cuisines = [
  { id: 'all', name: 'All', active: true },
  { id: 'pizza', name: 'Pizza', active: false },
  { id: 'sushi', name: 'Sushi', active: false },
  { id: 'burger', name: 'Burgers', active: false },
  { id: 'dessert', name: 'Desserts', active: false },
  { id: 'asian', name: 'Asian', active: false },
];

// Food categories
const foodCategories = [
  {
    id: 'pizza',
    name: 'Pizza',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600',
    deliveryTime: '20 mins',
    popular: true,
    price: '$$',
  },
  {
    id: 'burger',
    name: 'Burgers',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600',
    deliveryTime: '15 mins',
    popular: true,
    price: '$',
  },
  {
    id: 'sushi',
    name: 'Sushi',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600',
    deliveryTime: '25 mins',
    popular: false,
    price: '$$$',
  },
  {
    id: 'dessert',
    name: 'Desserts',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600',
    deliveryTime: '18 mins',
    popular: true,
    price: '$$',
  },
  {
    id: 'asian',
    name: 'Asian',
    image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=600',
    deliveryTime: '22 mins',
    popular: false,
    price: '$$',
  },
  {
    id: 'salad',
    name: 'Salads',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600',
    deliveryTime: '12 mins',
    popular: false,
    price: '$',
  },
];

// Sort options
const sortOptions = [
  { id: 'popular', name: 'Most Popular' },
  { id: 'time', name: 'Fastest Delivery' },
  { id: 'price_low', name: 'Price: Low to High' },
  { id: 'price_high', name: 'Price: High to Low' },
];

const MenuShowcase = () => {
  const [activeCuisine, setActiveCuisine] = useState('all');
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [activeSort, setActiveSort] = useState(sortOptions[0]);

  const handleCuisineClick = (cuisineId: string) => {
    setActiveCuisine(cuisineId);
  };

  const handleSortClick = (option: typeof sortOptions[0]) => {
    setActiveSort(option);
    setSortMenuOpen(false);
  };

  return (
    <div className="py-20 px-4 md:px-8 bg-cyber-dark relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556139930-c23bda387d1a?w=1000')] bg-cover opacity-5 mix-blend-overlay"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <NeonText color="pink" tag="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Explore The Menu
          </NeonText>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our diverse selection of cuisines, each crafted to satisfy your cravings with bold flavors and fresh ingredients.
          </p>
        </div>
        
        {/* Filters and sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
          {/* Cuisine filters */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {cuisines.map((cuisine) => (
              <button
                key={cuisine.id}
                onClick={() => handleCuisineClick(cuisine.id)}
                className={cn(
                  "px-4 py-2 rounded-full border transition-all duration-300",
                  activeCuisine === cuisine.id
                    ? "border-cyber-green text-cyber-green glow-green"
                    : "border-gray-700 text-gray-400 hover:border-gray-500"
                )}
              >
                {cuisine.name}
              </button>
            ))}
          </div>
          
          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortMenuOpen(!sortMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-cyber-black rounded-full border border-gray-700 text-gray-300"
            >
              <span>Sort by: {activeSort.name}</span>
              <ChevronDown className={cn(
                "w-4 h-4 transition-transform duration-200",
                sortMenuOpen ? "transform rotate-180" : ""
              )} />
            </button>
            
            {sortMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 py-2 bg-cyber-black border border-gray-700 rounded-md shadow-xl z-20">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSortClick(option)}
                    className={cn(
                      "w-full text-left px-4 py-2 hover:bg-cyber-dark transition-colors",
                      activeSort.id === option.id ? "text-cyber-green" : "text-gray-300"
                    )}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Food categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {foodCategories.map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-lg cyber-border transform transition-all duration-300 hover:scale-[1.02] hover:z-10 hover:shadow-[0_0_30px_rgba(0,255,102,0.3)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-w-4 aspect-h-3 w-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>
              
              {/* Category name */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                
                {/* Quick stats - only show on hover */}
                <div className="max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300 ease-in-out overflow-hidden">
                  <div className="pt-3 flex flex-wrap gap-3">
                    <div className="flex items-center gap-1 text-sm">
                      <Clock className="w-4 h-4 text-cyber-green" />
                      <span className="text-gray-300">{category.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <DollarSign className="w-4 h-4 text-cyber-pink" />
                      <span className="text-gray-300">{category.price}</span>
                    </div>
                    {category.popular && (
                      <div className="flex items-center gap-1 text-sm">
                        <Flame className="w-4 h-4 text-cyber-orange" />
                        <span className="text-gray-300">Popular</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Glitchy overlay on hover */}
              <div className="absolute inset-0 bg-cyber-green opacity-0 group-hover:opacity-5 mix-blend-screen transition-opacity duration-300 pointer-events-none"></div>
              <div className="absolute inset-0 bg-cyber-pink opacity-0 group-hover:opacity-5 mix-blend-screen transition-opacity duration-300 pointer-events-none" style={{ animationDelay: '0.1s' }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuShowcase;
