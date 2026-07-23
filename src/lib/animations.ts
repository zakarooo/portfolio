import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const EASE_SMOOTH = "power3.out";
export const EASE_SNAPPY = "power2.out";
export const EASE_ELASTIC = "elastic.out(1, 0.75)";

export function fadeInUp(
  element: string | Element | null,
  options?: {
    y?: number;
    duration?: number;
    delay?: number;
    ease?: string;
  }
) {
  return gsap.fromTo(
    element,
    { opacity: 0, y: options?.y ?? 40 },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? 1,
      delay: options?.delay ?? 0,
      ease: options?.ease ?? EASE_SMOOTH,
    }
  );
}

export function staggerReveal(
  elements: string | Element[] | null,
  options?: {
    stagger?: number;
    duration?: number;
    y?: number;
  }
) {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: options?.y ?? 30 },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? 0.8,
      stagger: options?.stagger ?? 0.1,
      ease: EASE_SNAPPY,
    }
  );
}

export function pinScrub(
  trigger: string | Element | null,
  options?: {
    pin?: boolean;
    scrub?: boolean | number;
    start?: string;
    end?: string;
  }
) {
  return ScrollTrigger.create({
    trigger,
    start: options?.start ?? "top 80%",
    end: options?.end ?? "bottom 20%",
    pin: options?.pin ?? false,
    scrub: options?.scrub ?? true,
  });
}

export function counterAnimation(
  element: string | Element | null,
  target: number,
  options?: {
    duration?: number;
    suffix?: string;
  }
) {
  const obj = { value: 0 };
  return gsap.to(obj, {
    value: target,
    duration: options?.duration ?? 2,
    ease: "power2.out",
    onUpdate: () => {
      if (element && typeof element === "object" && "textContent" in element) {
        element.textContent = `${Math.round(obj.value)}${options?.suffix ?? ""}`;
      }
    },
  });
}

export { gsap, ScrollTrigger };
