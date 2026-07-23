"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };

  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        trailX.set(e.clientX);
        trailY.set(e.clientY);
      });
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        setIsHovering(true);
      }
    };

    const handleOut = () => setIsHovering(false);
    const handleLeave = () => setIsHidden(true);
    const handleEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    window.addEventListener("mouseout", handleOut, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference hidden md:block"
      style={{
        x,
        y,
        opacity: isHidden ? 0 : 1,
      }}
      transition={{ opacity: { duration: 0.3 } }}
    >
      <motion.div
        className="rounded-full bg-white"
        animate={{
          width: isHovering ? 64 : 12,
          height: isHovering ? 64 : 12,
          x: isHovering ? -32 : -6,
          y: isHovering ? -32 : -6,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />
    </motion.div>
  );
}

export function CursorTrail() {
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);
  const x = useSpring(trailX, { damping: 15, stiffness: 120, mass: 0.6 });
  const y = useSpring(trailY, { damping: 15, stiffness: 120, mass: 0.6 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        trailX.set(e.clientX);
        trailY.set(e.clientY);
      });
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        setIsHovering(true);
      }
    };

    const handleOut = () => setIsHovering(false);
    const handleLeave = () => setIsHidden(true);
    const handleEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    window.addEventListener("mouseout", handleOut, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [trailX, trailY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9998] hidden md:block"
      style={{
        x,
        y,
        opacity: isHidden ? 0 : 1,
      }}
    >
      <motion.div
        className="rounded-full"
        animate={{
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
          x: isHovering ? -40 : -20,
          y: isHovering ? -40 : -20,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        style={{
          background: "radial-gradient(circle, rgba(0,102,255,0.15) 0%, transparent 70%)",
          border: "1px solid rgba(0,102,255,0.1)",
        }}
      />
    </motion.div>
  );
}
