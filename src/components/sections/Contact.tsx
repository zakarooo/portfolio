"use client";

import SectionReveal from "@/components/ui/SectionReveal";
import { motion } from "motion/react";
import { Mail, Globe, Briefcase, Send, Music, Camera, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useRef } from "react";

const socialLinks = [
  { icon: <Mail size={18} />, label: "Email", value: "basrhicham@gmail.com", href: "mailto:basrhicham@gmail.com" },
  { icon: <Briefcase size={18} />, label: "LinkedIn", value: "/in/hichambasr", href: "https://www.linkedin.com" },
  { icon: <Globe size={18} />, label: "GitHub", value: "@hichambasr", href: "https://github.com" },
  { icon: <Music size={18} />, label: "TikTok", value: "@signal.global.2026", href: "https://www.tiktok.com/@signal.global.2026" },
  { icon: <Camera size={18} />, label: "Instagram", value: "@ai_films_studio", href: "https://www.instagram.com/ai_films_studio/" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/basrhicham@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          project: formData.get("project"),
          _subject: "Nouveau message depuis le portfolio",
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
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
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 bg-[#111111] border border-green-500/20 rounded-2xl"
              >
                <CheckCircle size={48} className="text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Message envoyé !</h3>
                <p className="text-sm text-gray-400">
                  Réponse sous 24–48h ouvrées. Merci !
                </p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Votre nom</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors placeholder-gray-600"
                    placeholder="Nom complet"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Votre email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors placeholder-gray-600"
                    placeholder="email@exemple.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Votre projet</label>
                  <textarea
                    name="project"
                    rows={5}
                    className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none placeholder-gray-600"
                    placeholder="Décrivez votre projet..."
                    required
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle size={14} />
                    Une erreur s&apos;est produite. Réessayez.
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </span>
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
            )}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
