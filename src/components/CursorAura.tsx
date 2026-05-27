"use client";

import { useEffect, useState } from "react";

export function CursorAura() {
  const [position, setPosition] = useState({ x: -120, y: -120 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    const move = (event: PointerEvent) => {
      setVisible(true);
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyanGlow/30 bg-cyanGlow/10 blur-[1px] transition-opacity duration-300 md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        opacity: visible ? 1 : 0
      }}
      aria-hidden="true"
    />
  );
}
