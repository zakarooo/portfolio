"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import CardTilt from "@/components/ui/CardTilt";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const categories = ["Tous", "Films", "Publicités", "Clips", "Interviews", "Logiciels"];

interface Work {
  title: string;
  category: string;
  year: string;
  description: string;
}

const works: Work[] = [
  {
    title: "Court-métrage expérimental",
    category: "Films",
    year: "2024",
    description:
      "Court-métrage hybride mêlant prises de vue réelles et séquences entièrement générées par IA. Direction artistique, scénario, montage et post-production.",
  },
  {
    title: "Campagne multi-variantes",
    category: "Publicités",
    year: "2024",
    description:
      "120 publicités vidéo déclinées automatiquement à partir d'un brief. Chaque variante générée, montée et doublée par agents autonomes.",
  },
  {
    title: "Clip musical IA",
    category: "Clips",
    year: "2023",
    description:
      "Clip de 4 minutes entièrement généré, synchronisé à une partition musicale. Pipelines de génération vidéo et de transition temporelle.",
  },
  {
    title: "Série d'interviews",
    category: "Interviews",
    year: "2023",
    description:
      "Série de 24 interviews filmées et post-produites. Direction, captation, montage, étalonnage et diffusion multi-plateformes.",
  },
  {
    title: "SaaS d'intelligence économique",
    category: "Logiciels",
    year: "2024",
    description:
      "Plateforme SaaS complète : auth, multi-tenant, dashboards temps réel, pipelines de crawling et NLP. Architecture FastAPI + PostgreSQL + Next.js.",
  },
  {
    title: "ECU Master Lab Suite",
    category: "Logiciels",
    year: "2022",
    description:
      "Suite logicielle complète pour l'analyse et la calibration de calculateurs automobiles. Outils temps réel, visualisation 3D des données capteurs.",
  },
  {
    title: "Documentaire long format",
    category: "Films",
    year: "2022",
    description:
      "Documentaire de 52 minutes : enquête, tournage, montage, étalonnage et mixage. Diffusion festival et plateforme de streaming.",
  },
  {
    title: "Clip publicitaire luxe",
    category: "Clips",
    year: "2024",
    description:
      "Clip de marque haut de gamme : direction artistique, casting, tournage cinématographique, post-production IA pour les extensions de décors.",
  },
];

function WorkCard({ work, index }: { work: Work; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <CardTilt intensity={8} glareIntensity={0.1}>
        <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 group">
          <div className="flex items-start justify-between mb-3">
            <span className="text-xs font-mono text-blue-400">{work.year}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-500">
              {work.category}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {work.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">{work.description}</p>
        </div>
      </CardTilt>
    </motion.div>
  );
}

export default function Works() {
  const [active, setActive] = useState("Tous");

  const filtered = active === "Tous" ? works : works.filter((w) => w.category === active);

  return (
    <section id="works" className="relative py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="mb-12">
            <span className="text-xs font-mono text-blue-400 tracking-[0.3em] uppercase mb-4 block">
              Mes réalisations
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Sélection de projets récents.
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                  active === cat
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-gray-400 border-white/10 hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </SectionReveal>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((work, i) => (
            <WorkCard key={work.title} work={work} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
