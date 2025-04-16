
import React from 'react';
import { cn } from "@/lib/utils";

interface NeonTextProps {
  children: React.ReactNode;
  color?: 'green' | 'pink' | 'blue' | 'orange';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  flickering?: boolean;
}

const NeonText = ({ 
  children, 
  color = 'green', 
  tag = 'span',
  className = '',
  flickering = false
}: NeonTextProps) => {
  const colorClasses = {
    green: 'text-cyber-green neon-green',
    pink: 'text-cyber-pink neon-pink',
    blue: 'text-cyber-blue neon-blue',
    orange: 'text-cyber-orange neon-orange',
  };

  const Tag = tag as keyof JSX.IntrinsicElements;

  return (
    <Tag 
      className={cn(
        colorClasses[color],
        flickering && 'animate-flicker',
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default NeonText;
