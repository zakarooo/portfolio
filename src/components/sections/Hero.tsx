"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import TextReveal from "@/components/ui/TextReveal";
import GradientMesh from "@/components/effects/GradientMesh";

const Scene3D = dynamic(() => import("@/components/canvas/Scene3D"), {
  ssr: false,
  loading: () => null,
});

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 20, suffix: "+", label: "Années d'expérience" },
  { value: 6, suffix: "", label: "Plateformes IA" },
  { value: 100, suffix: "+", label: "Produits livrés" },
  { value: 999, suffix: "", label: "Idées en cours", display: "∞" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />
      <GradientMesh />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <TextReveal
            text="J'imagine, développe & transforme"
            tag="h1"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            stagger={0.04}
            delay={0.3}
          />
          <h1 className="sr-only">J&apos;imagine, développe &amp; transforme</h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-white">des idées en </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              plateformes IA
            </span>
            <span className="text-white">.</span>
          </motion.h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Laboratoire d&apos;innovation personnel de Hicham Basr — 20+ ans à
          l&apos;intersection du cinéma, de l&apos;intelligence artificielle et
          du développement logiciel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#platforms"
            className="group relative px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Explorer le laboratoire</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-medium text-gray-300 border border-white/10 hover:border-white/30 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,102,255,0.15)]"
          >
            Démarrer un projet
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.display || <AnimatedCounter target={stat.value} suffix={stat.suffix} />}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
