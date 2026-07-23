"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;

    function update(data: { timestamp: number }) {
      lenis?.raf(data.timestamp);
      ScrollTrigger.update();
    }

    lenis.on("scroll", ScrollTrigger.update);

    frame.update(update, true);
    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      cancelFrame(update);
    };
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
