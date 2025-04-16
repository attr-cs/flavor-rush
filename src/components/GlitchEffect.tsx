
import React from 'react';
import { cn } from "@/lib/utils";

interface GlitchEffectProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

const GlitchEffect = ({ 
  children, 
  className,
  active = true
}: GlitchEffectProps) => {
  return (
    <div className={cn(
      'relative inline-block',
      active && 'animate-glitch',
      className
    )}>
      {children}
      {active && (
        <>
          <div className="absolute top-0 left-0 w-full h-full opacity-50 text-cyber-pink -z-10 transform translate-x-[2px] translate-y-[-2px]">
            {children}
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-50 text-cyber-blue -z-10 transform translate-x-[-2px] translate-y-[2px]">
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default GlitchEffect;
