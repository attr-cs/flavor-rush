import React from 'react';
import AnimatedButton from './AnimatedButton';
import NeonText from './NeonText';
import GlitchEffect from './GlitchEffect';
import { Instagram, Twitter, Youtube } from 'lucide-react';

const CtaFooter = () => {
  return (
    <div className="relative py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-cyber-dark to-cyber-black">
      {/* Background elements */}
      <div 
        className="absolute inset-0 bg-cyber-black opacity-60 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff66' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Moving drones animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="drone absolute w-6 h-6 bg-cyber-green rounded-full opacity-30 animate-float" 
             style={{ 
               top: '20%', 
               left: '10%', 
               filter: 'blur(2px)', 
               animationDuration: '15s',
               boxShadow: '0 0 10px 5px rgba(0, 255, 102, 0.3)'
             }}></div>
        <div className="drone absolute w-4 h-4 bg-cyber-pink rounded-full opacity-20 animate-float" 
             style={{ 
               top: '60%', 
               left: '80%', 
               filter: 'blur(2px)', 
               animationDuration: '18s',
               animationDelay: '2s',
               boxShadow: '0 0 10px 5px rgba(255, 0, 168, 0.3)'
             }}></div>
        <div className="drone absolute w-5 h-5 bg-cyber-blue rounded-full opacity-25 animate-float" 
             style={{ 
               top: '30%', 
               left: '70%', 
               filter: 'blur(2px)', 
               animationDuration: '12s',
               animationDelay: '1s',
               boxShadow: '0 0 10px 5px rgba(0, 240, 255, 0.3)'
             }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* CTA section */}
        <div className="text-center mb-16">
          <GlitchEffect active={false}>
            <NeonText color="blue" tag="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Hungry? Download FlavorRush Now.
            </NeonText>
          </GlitchEffect>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Get started with FlavorRush today and experience the future of food delivery. Available on iOS and Android.
          </p>
          
          {/* App store buttons */}
          <div className="flex flex-row justify-center items-center gap-4 mb-12">
            <AnimatedButton color="green" className="flex items-center justify-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5227 7.39905C17.3625 7.47887 15.1252 8.77645 15.1252 11.362C15.1252 14.3576 17.8375 15.4948 17.9279 15.5246C17.9127 15.5945 17.481 16.9267 16.5802 18.2738C15.7644 19.4708 14.9037 20.6678 13.6004 20.6678C12.297 20.6678 11.9452 19.8969 10.4602 19.8969C9.00525 19.8969 8.45842 20.6678 7.27939 20.6678C5.99609 20.6678 5.09047 19.4259 4.2444 18.2439C3.1679 16.7139 2.29199 14.4254 2.29199 12.2318C2.29199 8.71424 4.65109 6.85388 6.9554 6.85388C8.22855 6.85388 9.27541 7.7195 10.0611 7.7195C10.8018 7.7195 11.9754 6.79429 13.416 6.79429C13.9027 6.79429 15.6554 6.85388 17.5227 7.39905ZM13.0194 5.69796C13.5959 5.01747 13.9927 4.08232 13.9927 3.14717C13.9927 3.04779 13.9927 2.94842 13.9776 2.86394C13.0844 2.89374 12.0226 3.42896 11.3661 4.15979C10.8347 4.73475 10.3631 5.66991 10.3631 6.62C10.3631 6.73431 10.3783 6.84862 10.3834 6.87842C10.4386 6.89327 10.5391 6.90812 10.6395 6.90812C11.4252 6.90812 12.4118 6.40264 13.0194 5.69796Z" fill="currentColor" />
              </svg>
              <span>App Store</span>
            </AnimatedButton>
            <AnimatedButton color="blue" className="flex items-center justify-center gap-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 12.16C20.5 12.37 20.75 12.75 20.75 13.17C20.75 13.59 20.5 13.97 20.15 14.18L17.3 15.81L14.89 13.4L17.3 10.99L20.16 12.16ZM6.05 4.66L16.81 10.88L14.54 13.15L6.05 4.66Z" fill="currentColor" />
              </svg>
              <span>Google Play</span>
            </AnimatedButton>
          </div>
        </div>
        
        {/* Footer content */}
        <div className="border-t border-gray-800 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="md:col-span-2">
              <NeonText color="green" tag="h3" className="text-2xl font-bold mb-4">
                FlavorRush
              </NeonText>
              <p className="text-gray-400 mb-6 max-w-md">
                Revolutionizing food delivery with cutting-edge technology and an immersive cyberpunk experience.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-full border border-gray-700 text-gray-400 hover:border-cyber-blue hover:text-cyber-blue transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full border border-gray-700 text-gray-400 hover:border-cyber-pink hover:text-cyber-pink transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-full border border-gray-700 text-gray-400 hover:border-cyber-orange hover:text-cyber-orange transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Footer links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">Partner With Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} FlavorRush. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaFooter;
