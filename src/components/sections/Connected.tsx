"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import { motion } from "motion/react";
import { ExternalLink, Activity, Bot, TrendingUp, Clock } from "lucide-react";

interface LivePlatform {
  name: string;
  category: string;
  description: string;
  metrics: { icon: React.ReactNode; label: string; value: string }[];
  tags: string[];
  url: string;
}

const livePlatforms: LivePlatform[] = [
  {
    name: "SaaS ECU Master",
    category: "Automotive SaaS",
    description:
      "Plateforme SaaS dédiée à l'analyse, la calibration et la gestion des calculateurs automobiles (ECU). Upload de fichiers, analyse automatisée par agent IA, métriques de performance en temps réel.",
    metrics: [
      { icon: <Bot size={14} />, label: "Agent IA opérationnel", value: "24/7" },
      { icon: <Activity size={14} />, label: "Fichiers ECU traités", value: "10K+" },
      { icon: <TrendingUp size={14} />, label: "Précision IA", value: "98%" },
      { icon: <Clock size={14} />, label: "Temps moyen", value: "45s" },
    ],
    tags: ["Next.js", "FastAPI", "PostgreSQL", "IA Agent", "Vercel"],
    url: "https://frontend-beige-rho-83.vercel.app",
  },
  {
    name: "Météo & Data Science",
    category: "Data Science",
    description:
      "Application d'analyse de données météorologiques. Sélection géographique, plage de dates historiques, paramètres multiples et génération automatique de rapports d'analyse.",
    metrics: [
      { icon: <Activity size={14} />, label: "Analyse multi-paramètres", value: "✓" },
      { icon: <TrendingUp size={14} />, label: "Données historiques", value: "Longues" },
      { icon: <Bot size={14} />, label: "Génération de rapports", value: "✓" },
      { icon: <Clock size={14} />, label: "Visualisations", value: "Data Viz" },
    ],
    tags: ["Next.js", "Python", "Pandas", "Data Viz", "Vercel"],
    url: "https://meteo-orpin.vercel.app/",
  },
];

function LiveCard({ platform }: { platform: LivePlatform }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-[#111111] border border-white/5 rounded-2xl overflow-hidden hover:border-green-500/20 transition-all duration-500 group"
    >
      <div className="relative h-48 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5" />
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform">
            <span className="text-2xl font-bold text-white">{platform.name.charAt(0)}</span>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
            En production
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <span className="text-xs text-gray-500 mb-1 block">{platform.category}</span>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
          {platform.name}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-6">
          {platform.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {platform.metrics.map((m) => (
            <div key={m.label} className="flex items-center gap-2 text-sm">
              <span className="text-green-400">{m.icon}</span>
              <span className="text-gray-500">{m.label}</span>
              <span className="text-white font-medium ml-auto">{m.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {platform.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-4 py-2 transition-colors"
          >
            Aperçu intégré
          </a>
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white bg-blue-600 hover:bg-blue-500 rounded-full px-4 py-2 transition-colors"
          >
            Ouvrir <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Connected() {
  return (
    <section id="connected" className="relative py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="mb-16">
            <span className="text-xs font-mono text-blue-400 tracking-[0.3em] uppercase mb-4 block">
              En production
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Deux plateformes, déployées et vivantes.
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
              Ce ne sont pas des maquettes. Ce sont des produits réels, hébergés
              sur Vercel, qui tournent et servent des utilisateurs.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {livePlatforms.map((p) => (
            <LiveCard key={p.name} platform={p} />
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 text-center">
            <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
              <Activity size={18} className="text-green-400" />
            </div>
            <p className="text-sm text-gray-400 max-w-xl mx-auto">
              Un écosystème interconnecté — auth centralisée, observabilité,
              déploiement continu sur Vercel. De l&apos;automobile à la
              météo, la même rigueur d&apos;ingénierie.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Monitoring live
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
