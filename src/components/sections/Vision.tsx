"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import { Film, Zap, Code } from "lucide-react";

const pillars = [
  {
    icon: <Film size={24} />,
    title: "Le cinéma donne du sens",
    description:
      "Toute technologie, pour être adoptée, doit raconter une histoire. La grammaire du cinéma — plan, rythme, contrepoint — est la mienne pour structurer des produits numériques qui se ressentent autant qu'ils s'utilisent.",
  },
  {
    icon: <Zap size={24} />,
    title: "L'IA donne de l'échelle",
    description:
      "Un humain seul ne peut plus produire à la cadence du monde. L'IA générative, à condition d'être orchestrée par des agents rigoureux, multiplie la portée d'un créateur sans trahir sa voix.",
  },
  {
    icon: <Code size={24} />,
    title: "Le logiciel donne de la rigueur",
    description:
      "Un produit IA n'est pas une démo. C'est un système avec auth, billing, monitoring, observabilité. Vingt ans de dev logiciel garantissent que mes plateformes tiennent en production.",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="relative py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-blue-400 tracking-[0.3em] uppercase mb-4 block">
              Vision
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Le studio du futur est hybride.
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Pendant des décennies, le cinéma, le logiciel et l&apos;intelligence
              artificielle ont grandi séparément. Aujourd&apos;hui, ils fusionnent.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.title} delay={i * 0.15}>
              <div className="text-center md:text-left">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 mx-auto md:mx-0">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <blockquote className="relative bg-[#111111] border border-white/5 rounded-2xl p-8 md:p-12 text-center">
            <div className="text-4xl text-blue-500/20 mb-4">&ldquo;</div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto italic">
              Imagine. Code. Filme. Automatise.
            </p>
            <p className="text-sm text-gray-400 max-w-xl mx-auto mb-6">
              Cinq verbes. Un seul objectif : transformer une intuition en
              plateforme vivante. Le futur appartient à ceux qui savent tenir une
              caméra, écrire une fonction et orchestrer un agent — dans la même
              journée, sans changer de chaise.
            </p>
            <cite className="text-sm text-gray-500 not-italic">
              <span className="text-white font-medium">Hicham Basr</span> — AI Innovation Lab
            </cite>
          </blockquote>
        </SectionReveal>
      </div>
    </section>
  );
}
