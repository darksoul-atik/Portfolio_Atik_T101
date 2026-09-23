"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use CSS transform (y) and opacity only for smooth compositor rendering
    gsap.set(el, { opacity: 0, y: 32 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power2.out",
          clearProps: "transform,opacity",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}