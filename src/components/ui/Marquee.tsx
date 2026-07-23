"use client";

const items = [
  "Cinéma", "IA générative", "FastAPI", "Production vidéo",
  "Agents autonomes", "PostgreSQL", "Sound design", "Prompt engineering",
  "Next.js", "Documentaire", "SaaS", "ComfyUI",
  "Réalisation", "RAG", "TypeScript",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-6 border-t border-white/5">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 text-sm text-gray-600 flex items-center gap-2"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/30" />
          </span>
        ))}
      </div>
    </div>
  );
}
