"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SkillGroup {
  title: string;
  skills: { name: string; level: number }[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "IA générative",
    skills: [
      { name: "Prompt engineering", level: 95 },
      { name: "RAG & embeddings", level: 88 },
      { name: "Fine-tuning", level: 78 },
      { name: "Agents autonomes", level: 85 },
    ],
  },
  {
    title: "Développement",
    skills: [
      { name: "FastAPI", level: 92 },
      { name: "Next.js / React", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Python", level: 94 },
    ],
  },
  {
    title: "Data & infra",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Prisma ORM", level: 85 },
      { name: "Redis", level: 78 },
      { name: "Docker / CI", level: 82 },
    ],
  },
  {
    title: "Production audiovisuelle",
    skills: [
      { name: "Réalisation", level: 92 },
      { name: "Montage / étalonnage", level: 90 },
      { name: "Génération vidéo IA", level: 88 },
      { name: "Sound design", level: 80 },
    ],
  },
];

const techStack = [
  "OpenAI", "Anthropic", "LangGraph", "ComfyUI", "Stable Diffusion", "Sora",
  "Runway", "ElevenLabs", "Whisper", "FastAPI", "PostgreSQL", "Redis",
  "Next.js", "TypeScript", "Python", "Prisma", "Docker", "GitHub Actions",
  "Vercel", "AWS", "FFmpeg", "Three.js", "GSAP", "TailwindCSS",
  "Zustand", "TanStack Query", "Socket.io", "Stripe",
];

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setWidth(level), 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, level]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-gray-500 font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/20 to-blue-400/0 animate-[shimmer_2s_ease-in-out_infinite]" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll(".skill-card");
      if (cards) {
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 40, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: i * 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="relative py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="mb-16">
            <span className="text-xs font-mono text-blue-400 tracking-[0.3em] uppercase mb-4 block">
              Compétences
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Une stack complète, de l&apos;idée au déploiement.
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
              Maîtriser toute la chaîne — du prompt à l&apos;image en passant par
              le backend, la base de données et l&apos;interface — c&apos;est ce qui
              permet de livrer des produits IA réels, pas des démos.
            </p>
          </div>
        </SectionReveal>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card">
              <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-blue-500/10 transition-colors duration-500">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
                  {group.title}
                </h3>
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <SectionReveal>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 text-center">
              Stack technologique
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-4 py-2 rounded-full bg-white/5 text-gray-400 border border-white/5 hover:border-blue-500/30 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(0,102,255,0.1)] transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
