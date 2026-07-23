"use client";

import { useRef, useEffect, useState } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export default function TextReveal({
  text,
  className = "",
  tag = "h2",
  delay = 0,
  stagger = 0.03,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [revealed, setRevealed] = useState<number[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
          setRevealed([]);
        }
      },
      { threshold: 0.2, rootMargin: "-30px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  useEffect(() => {
    if (!visible) return;

    let charIndex = 0;
    const totalChars = text.length;
    const duration = Math.max(totalChars * stagger * 1000, 500);
    const stepTime = duration / totalChars;

    const timer = setTimeout(() => {
      const intervalId = setInterval(() => {
        charIndex++;
        if (charIndex >= totalChars) {
          clearInterval(intervalId);
          setRevealed(Array.from({ length: totalChars }, (_, i) => i));
          return;
        }
        setRevealed(Array.from({ length: charIndex }, (_, i) => i));
      }, stepTime);

      return () => clearInterval(intervalId);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [visible, text, stagger, delay]);

  return (
    <div
      ref={ref}
      className={className}
      role="heading"
      aria-level={tag === "h1" ? 1 : tag === "h2" ? 2 : tag === "h3" ? 3 : undefined}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            opacity: revealed.includes(i) ? 1 : 0.08,
            filter: revealed.includes(i) ? "blur(0px)" : "blur(4px)",
            transition: "opacity 0.4s ease, filter 0.4s ease",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
