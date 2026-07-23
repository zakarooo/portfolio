"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "motion/react";

interface CardTiltProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glareIntensity?: number;
}

export default function CardTilt({
  children,
  className = "",
  intensity = 15,
  glareIntensity = 0.15,
}: CardTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -intensity;
      const rotateY = ((x - centerX) / centerX) * intensity;

      setTransform({ rotateX, rotateY });
      setGlare({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: glareIntensity,
      });
    },
    [intensity, glareIntensity]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform({ rotateX: 0, rotateY: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: transform.rotateX,
        rotateY: transform.rotateY,
      }}
      transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
      className={`relative ${className}`}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
      {/* Glare effect */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)`,
        }}
      />
    </motion.div>
  );
}
