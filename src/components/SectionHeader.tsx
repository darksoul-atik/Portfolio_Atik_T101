"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];
    // Use CSS transforms and opacity only
    gsap.set(children, { opacity: 0, y: 24 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      once: true,
      onEnter: () => {
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "transform,opacity",
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div ref={ref} className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-slate-400">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-7 text-slate-400 md:text-base">
        {description}
      </p>
    </div>
  );
}