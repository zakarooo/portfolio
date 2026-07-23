"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Qui suis-je", href: "#about" },
  { label: "Plateformes", href: "#platforms" },
  { label: "En production", href: "#connected" },
  { label: "Réalisations", href: "#works" },
  { label: "Compétences", href: "#skills" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* ZONE 1: Main row — Logo | Nav | CTA */}
          <div className="flex items-center justify-between h-16">
            {/* ── Logo ── */}
            <a
              href="#hero"
              className="flex items-center gap-2.5 shrink-0 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-sm font-bold text-white">
                HB
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-sm font-semibold text-white tracking-tight">
                  Hicham Basr
                </span>
                <span className="text-gray-600 select-none">|</span>
                <span className="text-xs text-gray-500 tracking-wide italic">
                  Imagine, code &amp; automatise
                </span>
              </div>
            </a>

            {/* ── Nav links (desktop only) ── */}
            <div className="hidden xl:flex items-center gap-0.5 mx-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-[13px] text-gray-400 hover:text-white transition-colors duration-200 rounded-md hover:bg-white/5 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* ── Right zone: availability + CTA + hamburger ── */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Availability badge — hidden on small screens */}
              <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="hidden xl:inline">Disponible</span>
              </div>

              {/* CTA button */}
              <a
                href="#contact"
                className="hidden sm:inline-flex px-4 py-2 text-[13px] font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-colors whitespace-nowrap"
              >
                Travaillons ensemble
              </a>

              {/* Hamburger — mobile/tablet only */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden p-2 -mr-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-2xl xl:hidden"
          >
            <div className="flex flex-col h-full pt-20 px-6 pb-8">
              {/* Mobile logo */}
              <div className="flex items-center gap-2.5 mb-8">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-sm font-bold text-white">
                  HB
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white tracking-tight">
                    Hicham Basr
                  </span>
                  <span className="text-gray-600 select-none">|</span>
                  <span className="text-xs text-gray-500 tracking-wide italic">
                    AI Innovation Lab
                  </span>
                </div>
              </div>

              {/* Nav links */}
              <div className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    onClick={() => setMobileOpen(false)}
                    className="text-xl font-medium text-gray-300 hover:text-white py-3 border-b border-white/5 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Mobile CTA at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-6 border-t border-white/5"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-colors"
                >
                  Travaillons ensemble
                </a>
                <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Disponible pour nouveaux projets
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
