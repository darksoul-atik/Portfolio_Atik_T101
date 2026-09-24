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
  isDevMode?: boolean;
  onUpdate?: (updated: { eyebrow?: string; title?: string; description?: string }) => void;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  isDevMode = false,
  onUpdate,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];
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
    <div ref={ref} className="mx-auto mb-12 max-w-3xl text-center px-4">
      {isDevMode && onUpdate ? (
        <div className="space-y-3 rounded-2xl border-2 border-dashed border-amber-400/40 bg-black/40 p-4">
          <input
            type="text"
            value={eyebrow}
            onChange={(e) => onUpdate({ eyebrow: e.target.value })}
            className="w-full text-center font-mono text-xs uppercase tracking-[0.35em] text-cyanGlow bg-white/10 border border-amber-400/50 rounded px-2 py-1 outline-none"
            placeholder="Eyebrow"
          />
          <input
            type="text"
            value={title}
            onChange={(e) => onUpdate({ title: e.target.value })}
            className="w-full text-center text-xl sm:text-2xl font-black text-white bg-white/10 border border-amber-400/50 rounded px-2 py-1 outline-none"
            placeholder="Section Title"
          />
          <textarea
            rows={2}
            value={description}
            onChange={(e) => onUpdate({ description: e.target.value })}
            className="w-full text-center text-xs sm:text-sm text-white/70 bg-white/10 border border-amber-400/50 rounded p-2 outline-none resize-none"
            placeholder="Section Description"
          />
        </div>
      ) : (
        <>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-slate-400">
            {eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-black tracking-tight text-white md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-7 text-slate-400 md:text-base">
            {description}
          </p>
        </>
      )}
    </div>
  );
}