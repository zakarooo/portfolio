"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import { motion } from "motion/react";
import { Mail, Globe, Briefcase, Link2, Send } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { icon: <Mail size={18} />, label: "Email", value: "hello@hichambasr.com", href: "mailto:hello@hichambasr.com" },
  { icon: <Briefcase size={18} />, label: "LinkedIn", value: "/in/hichambasr", href: "https://www.linkedin.com" },
  { icon: <Globe size={18} />, label: "GitHub", value: "@hichambasr", href: "https://github.com" },
  { icon: <Link2 size={18} />, label: "X (Twitter)", value: "@hichambasr", href: "https://twitter.com" },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", project: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", project: "" });
  }

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-blue-400 tracking-[0.3em] uppercase mb-4 block">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Et si on construisait votre<br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                prochaine plateforme IA
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Que vous ayez besoin d&apos;un film généré par IA, d&apos;une
              plateforme SaaS complète, d&apos;un agent autonome pour vos
              workflows ou d&apos;une campagne vidéo multi-variantes — parlons-en.
              Le premier café est offert.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <SectionReveal delay={0.1}>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#111111] border border-white/5 rounded-xl hover:border-blue-500/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-white block">{link.label}</span>
                    <span className="text-xs text-gray-500">{link.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Votre nom</label>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors placeholder-gray-600"
                  placeholder="Nom complet"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Votre email</label>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors placeholder-gray-600"
                  placeholder="email@exemple.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Votre projet</label>
                <textarea
                  value={formState.project}
                  onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none placeholder-gray-600"
                  placeholder="Décrivez votre projet..."
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                {submitted ? (
                  "Envoyé ! Réponse sous 24-48h"
                ) : (
                  <>
                    Envoyer le brief <Send size={16} />
                  </>
                )}
              </motion.button>
              <p className="text-xs text-gray-600 text-center">
                Réponse sous 24–48h ouvrées. Confidentialité garantie.
              </p>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
