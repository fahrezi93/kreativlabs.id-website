"use client";

import { Particles } from "@/components/ui/shadcn-io/particles";
import { useIsMobile } from "@/hooks/useIsMobile";

interface OptimizedParticlesProps {
  quantity?: number;
  ease?: number;
  staticity?: number;
  color?: string;
  size?: number;
  className?: string;
}

export default function OptimizedParticles({
  quantity = 50,
  ease = 80,
  staticity = 50,
  color = "#FFFFFF",
  size = 0.6,
  className = "absolute inset-0",
}: OptimizedParticlesProps) {
  const isMobile = useIsMobile();

  // Don't render particles on mobile for better performance
  if (isMobile) {
    return null;
  }

  return (
    <Particles
      className={className}
      quantity={quantity}
      ease={ease}
      staticity={staticity}
      color={color}
      size={size}
    />
  );
}
