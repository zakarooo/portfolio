"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
}

const projects: Project[] = [
  {
    title: "ECU Master Lab",
    category: "SaaS Platform",
    description:
      "AI-powered automotive ECU analysis platform with real-time binary parsing, map detection, and intelligent diagnostics.",
    tags: ["Next.js", "FastAPI", "Mistral AI", "PostgreSQL"],
    year: "2024",
  },
  {
    title: "Automotive Intelligence Hub",
    category: "Data Analytics",
    description:
      "Intelligent data aggregation and analysis engine for automotive performance metrics and tuning insights.",
    tags: ["Python", "Machine Learning", "WebSocket", "D3.js"],
    year: "2024",
  },
  {
    title: "Digital Workshop Suite",
    category: "Automation Tool",
    description:
      "End-to-end workflow automation for automotive workshops — from file intake to diagnostic reporting.",
    tags: ["React", "Node.js", "Docker", "CI/CD"],
    year: "2023",
  },
  {
    title: "Performance Calibration Engine",
    category: "Embedded Systems",
    description:
      "Real-time ECU calibration tool with visual map editing, checksum verification, and protocol bridging.",
    tags: ["TypeScript", "WebAssembly", "Three.js", "BLE"],
    year: "2023",
  },
  {
    title: "Connected Garage Platform",
    category: "IoT Dashboard",
    description:
      "Cloud-connected garage management system with vehicle telemetry, scheduling, and parts inventory.",
    tags: ["Vue.js", "Rust", "MQTT", "TimescaleDB"],
    year: "2022",
  },
  {
    title: "Smart Diagnostic Assistant",
    category: "AI Application",
    description:
      "Conversational AI assistant for automotive diagnostics — natural language to DTC interpretation.",
    tags: ["GPT-4", "FastAPI", "React", "Redis"],
    year: "2022",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-charcoal-light border border-white/5 rounded-2xl p-6 md:p-8 overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <span className="text-xs font-mono text-accent tracking-wider">
            {project.year}
          </span>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ExternalLink size={16} className="text-accent" />
          </motion.div>
        </div>

        <span className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-2 block">
          {project.category}
        </span>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5 group-hover:border-accent/30 group-hover:text-accent transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="relative py-32 px-6 md:px-12 lg:px-24">
      <SectionReveal>
        <div className="max-w-6xl mx-auto mb-16">
          <span className="text-xs font-mono text-accent tracking-[0.3em] uppercase mb-4 block">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Selected Projects
          </h2>
        </div>
      </SectionReveal>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
