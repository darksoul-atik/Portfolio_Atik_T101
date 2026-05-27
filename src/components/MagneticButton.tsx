"use client";

import Link from "next/link";
import { AnchorHTMLAttributes, MouseEvent, ReactNode, useRef } from "react";

type MagneticButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function MagneticButton({ href, children, variant = "primary", className = "", ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const onMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    element.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const onMouseLeave = () => {
    const element = ref.current;
    if (!element) return;
    element.style.transform = "translate(0px, 0px)";
  };

  const variantClass =
    variant === "primary"
      ? "border-white/20 bg-white text-ink shadow-glow hover:bg-cyanGlow"
      : variant === "secondary"
        ? "border-cyanGlow/30 bg-cyanGlow/10 text-cyan-100 hover:bg-cyanGlow/20"
        : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10";

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${variantClass} ${className}`}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Link>
  );
}
