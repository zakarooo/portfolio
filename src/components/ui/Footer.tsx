"use client";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-sm font-bold">
            HB
          </div>
          <div>
            <span className="text-sm font-semibold text-white block">Hicham Basr</span>
            <span className="text-xs text-gray-500">AI Innovation Lab</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 text-center md:text-left max-w-md">
          J&apos;imagine, développe et transforme des idées en plateformes
          d&apos;intelligence artificielle, films et produits numériques. De
          Paris vers le monde.
        </p>

        <span className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} — Tous droits réservés
        </span>
      </div>
    </footer>
  );
}
