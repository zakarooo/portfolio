"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Camera, Code, Brain } from "lucide-react";

const disciplines = [
  {
    icon: <Camera size={24} />,
    title: "Audiovisuel",
    since: "Depuis 2003",
    description:
      "Réalisation, montage et production de films, publicités, clips musicaux et interviews. Une histoire de 20+ ans à raconter des histoires à l'écran, avec le sens du cadre, du rythme et de la lumière.",
  },
  {
    icon: <Code size={24} />,
    title: "Développement logiciel",
    since: "Depuis 2008",
    description:
      "Architecte full-stack : FastAPI, PostgreSQL, Next.js, TypeScript. Conception de SaaS, automatisations, pipelines data et plateformes web scalables déployées en production.",
  },
  {
    icon: <Brain size={24} />,
    title: "Intelligence artificielle",
    since: "Depuis 2020",
    description:
      "Prompt engineering avancé, RAG, fine-tuning, agents autonomes, génération vidéo & audio IA. Mise en production de pipelines IA générative appliqués au cinéma et à l'entreprise.",
  },
];

const timeline = [
  { year: "2003", title: "Débuts audiovisuels", description: "Caméra, montage, premier studio de production. Apprentissage du récit visuel et de la direction artistique." },
  { year: "2008", title: "Logiciel & design graphique", description: "Conception d'identités, d'interfaces et de produits numériques. Premiers logiciels déployés pour des clients." },
  { year: "2015", title: "ECU Master Lab", description: "Lancement d'une plateforme dédiée à l'analyse et la maîtrise du moteur électronique automobile." },
  { year: "2020", title: "Pivot IA", description: "Intégration massive de l'IA générative dans les workflows créatifs et logiciels. Premiers agents autonomes." },
  { year: "2023", title: "Film AI & Production IA", description: "Industrialisation de la production vidéo par IA : clips, publicités, podcasts génératifs, doublages multilingues." },
  { year: "2026", title: "AI Innovation Lab", description: "Fusion finale : cinéma, IA et développement logiciel réunis en un seul laboratoire d'innovation." },
];

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex gap-6 group"
    >
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-xs font-mono text-blue-400 group-hover:bg-blue-600/40 transition-colors shrink-0">
          {item.year.slice(2)}
        </div>
        {index < timeline.length - 1 && (
          <div className="w-px flex-1 bg-white/10 my-2" />
        )}
      </div>
      <div className="pb-8">
        <span className="text-xs font-mono text-blue-400 mb-1 block">{item.year}</span>
        <h4 className="text-base font-semibold text-white mb-1">{item.title}</h4>
        <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="mb-20">
            <span className="text-xs font-mono text-blue-400 tracking-[0.3em] uppercase mb-4 block">
              Qui suis-je
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Trois disciplines, une seule vision.
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
              Je ne suis pas un généraliste de bureau. Je suis un artisan qui a
              passé deux décennies à expérimenter, casser, reconstruire —
              d&apos;abord avec des caméras, puis avec du code, et aujourd&apos;hui
              avec des modèles d&apos;intelligence artificielle. Chaque discipline
              nourrit les deux autres.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {disciplines.map((disc, i) => (
            <SectionReveal key={disc.title} delay={i * 0.15}>
              <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:border-blue-500/20 transition-colors duration-500 group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors">
                  {disc.icon}
                </div>
                <span className="text-xs font-mono text-blue-400 mb-2 block">{disc.since}</span>
                <h3 className="text-xl font-bold text-white mb-3">{disc.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{disc.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div className="mb-12">
            <span className="text-xs font-mono text-blue-400 tracking-[0.3em] uppercase mb-4 block">
              20 ans, 6 chapitres
            </span>
            <h3 className="text-2xl font-bold text-white">Parcours</h3>
          </div>
        </SectionReveal>

        <div className="max-w-2xl">
          {timeline.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
