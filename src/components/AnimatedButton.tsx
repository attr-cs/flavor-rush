
import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: React.ReactNode;
  color?: 'green' | 'pink' | 'blue' | 'orange';
  onClick?: () => void;
  className?: string;
  large?: boolean;
}

const AnimatedButton = ({ 
  children, 
  color = 'green', 
  onClick, 
  className,
  large = false,
}: AnimatedButtonProps) => {
  const colorClasses = {
    green: 'bg-cyber-green text-cyber-black neon-green hover:bg-opacity-90 hover:glow-green',
    pink: 'bg-cyber-pink text-cyber-black neon-pink hover:bg-opacity-90 hover:glow-pink',
    blue: 'bg-cyber-blue text-cyber-black neon-blue hover:bg-opacity-90 hover:glow-blue',
    orange: 'bg-cyber-orange text-cyber-black neon-orange hover:bg-opacity-90 hover:glow-orange',
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        `relative overflow-hidden px-6 py-2.5 rounded-md font-semibold transition-all duration-300 ease-out transform hover:scale-105 active:scale-95`,
        large ? 'text-xl px-8 py-3.5' : 'text-base',
        colorClasses[color],
        className
      )}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 w-full h-full bg-white opacity-0 mix-blend-overlay hover:opacity-20 transition-opacity duration-300 ease-out"></div>
    </button>
  );
};

export default AnimatedButton;
