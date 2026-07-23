"use client";

import SmoothScroll from "@/components/ui/SmoothScroll";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Platforms from "@/components/sections/Platforms";
import Connected from "@/components/sections/Connected";
import Works from "@/components/sections/Works";
import Skills from "@/components/sections/Skills";
import Vision from "@/components/sections/Vision";
import Contact from "@/components/sections/Contact";
import Marquee from "@/components/ui/Marquee";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#0a0a0a]">
        <Navbar />
        <Hero />
        <About />
        <Platforms />
        <Connected />
        <Works />
        <Skills />
        <Vision />
        <Contact />
        <Marquee />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
