"use client";

import SectionReveal from "@/components/ui/SectionReveal";
interface Platform {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

const platforms: Platform[] = [
  {
    title: "ECU Master Lab",
    subtitle: "Maîtrise du moteur électronique",
    description:
      "Plateforme d'analyse, de diagnostic et d'optimisation des calculateurs automobiles. Outils temps réel, visualisation de données capteurs, calibration avancée.",
    tags: ["FastAPI", "PostgreSQL", "WebSockets", "Next.js"],
  },
  {
    title: "Film AI",
    subtitle: "Studio de production cinématographique IA",
    description:
      "Génération, montage et post-production de films assistés par IA. Pipelines de génération vidéo, colorisation, doublage et effets spéciaux automatisés.",
    tags: ["Diffusion", "ComfyUI", "FFmpeg", "Python"],
  },
  {
    title: "Production Vidéo IA",
    subtitle: "Clips & publicités à l'échelle",
    description:
      "Production industrialisée de clips et publicités : du scénario généré au rendu final, orchestré par agents. Capacité de centaines de variantes par campagne.",
    tags: ["Sora", "Runway", "ElevenLabs", "GPT-4o"],
  },
  {
    title: "Podcasts IA",
    subtitle: "Studios vocaux autonomes",
    description:
      "Création de podcasts entièrement générés : voix, scénarios, interviews synthétiques, montages automatiques. Plusieurs chaînes publiées en continu.",
    tags: ["TTS", "Whisper", "RAG", "Audio LM"],
  },
  {
    title: "Intelligence économique",
    subtitle: "Veille & signaux stratégiques",
    description:
      "Plateforme d'intelligence économique : crawling, analyse sémantique, détection de signaux faibles, dashboards temps réel pour décideurs.",
    tags: ["NLP", "RAG", "PostgreSQL", "Cron"],
  },
  {
    title: "Agents autonomes",
    subtitle: "Workflows IA multi-agents",
    description:
      "Banc d'essai d'agents autonomes orchestrés : recherche, exécution, validation. Connectés à des outils réels pour automatiser des tâches métier complexes.",
    tags: ["LangGraph", "OpenAI", "Tools", "FastAPI"],
  },
];

function PlatformCard({ platform, index }: { platform: Platform; index: number }) {
  return (
    <SectionReveal delay={index * 0.1}>
      <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 md:p-8 h-full hover:border-blue-500/20 transition-all duration-500 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <span className="text-xs text-gray-500 mb-2 block">{platform.subtitle}</span>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {platform.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            {platform.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {platform.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

export default function Platforms() {
  return (
    <section id="platforms" className="relative py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="mb-16">
            <span className="text-xs font-mono text-blue-400 tracking-[0.3em] uppercase mb-4 block">
              Mes plateformes
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Six laboratoires, un même terrain de jeu.
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
              Chaque plateforme est une expérimentation en production — un
              produit réel, des utilisateurs réels, des itérations continues.
              Elles ne sont pas des maquettes.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <PlatformCard key={platform.title} platform={platform} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
