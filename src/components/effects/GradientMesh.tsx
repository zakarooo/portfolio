"use client";

import { motion } from "motion/react";

interface GradientMeshProps {
  className?: string;
  colors?: string[];
}

export default function GradientMesh({
  className = "",
  colors = ["#0066ff", "#7c3aed", "#0ea5e9", "#6366f1"],
}: GradientMeshProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full opacity-[0.07]"
        style={{
          background: `radial-gradient(circle, ${colors[0]} 0%, transparent 70%)`,
        }}
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-1/3 -right-1/4 w-[700px] h-[700px] rounded-full opacity-[0.06]"
        style={{
          background: `radial-gradient(circle, ${colors[1]} 0%, transparent 70%)`,
        }}
        animate={{
          x: [0, -180, 120, 0],
          y: [0, 130, -80, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{
          background: `radial-gradient(circle, ${colors[2]} 0%, transparent 70%)`,
        }}
        animate={{
          x: [0, 150, -200, 0],
          y: [0, -200, 50, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/4 right-1/3 w-[400px] h-[400px] rounded-full opacity-[0.04]"
        style={{
          background: `radial-gradient(circle, ${colors[3]} 0%, transparent 70%)`,
        }}
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -150, 0],
          scale: [1, 1.05, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Noise overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
}
