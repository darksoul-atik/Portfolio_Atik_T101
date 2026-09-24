"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import "./HeroFloatingIcons.css";
import {
  Code2,
  Braces,
  Hash,
  GitBranch,
  Terminal,
  Database,
  Cloud,
  Cpu,
  Binary,
  Variable,
  Boxes,
  Layers,
  Workflow,
  Server,
  FileCode,
} from "lucide-react";
import { SiReact } from "react-icons/si";

// Wrapper for SiReact to accept size and stroke properties consistently
function ReactIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <SiReact
      style={{ width: size, height: size }}
      className={`shrink-0 ${className}`}
    />
  );
}

const AVAILABLE_ICONS = [
  Code2,
  Braces,
  Hash,
  GitBranch,
  Terminal,
  Database,
  Cloud,
  Cpu,
  Binary,
  Variable,
  Boxes,
  Layers,
  Workflow,
  Server,
  FileCode,
  ReactIcon,
];

function getRandomZonePosition(): { x: number; y: number; maxOpacity: number } {
  // 5 zones to avoid obscuring central readable hero text/CTA:
  // Zone 0 (top strip): x: 4% to 94%, y: 5% to 22%
  // Zone 1 (left flank outside headline): x: 2% to 15%, y: 20% to 85%
  // Zone 2 (right flank outside profile card): x: 82% to 96%, y: 15% to 85%
  // Zone 3 (bottom strip below CTAs and card): x: 5% to 95%, y: 80% to 94%
  // Zone 4 (center gap between columns): x: 47% to 56%, y: 15% to 45% (opacity reduced to ~0.3)
  const roll = Math.random();
  if (roll < 0.28) {
    // Top strip
    return {
      x: 4 + Math.random() * 90,
      y: 4 + Math.random() * 18,
      maxOpacity: 0.65 + Math.random() * 0.1,
    };
  } else if (roll < 0.52) {
    // Left flank
    return {
      x: 2 + Math.random() * 14,
      y: 20 + Math.random() * 65,
      maxOpacity: 0.65 + Math.random() * 0.1,
    };
  } else if (roll < 0.76) {
    // Right flank
    return {
      x: 82 + Math.random() * 14,
      y: 15 + Math.random() * 70,
      maxOpacity: 0.65 + Math.random() * 0.1,
    };
  } else if (roll < 0.90) {
    // Bottom strip
    return {
      x: 5 + Math.random() * 90,
      y: 80 + Math.random() * 14,
      maxOpacity: 0.65 + Math.random() * 0.1,
    };
  } else {
    // Center gap (reduced opacity so it never distracts from text)
    return {
      x: 47 + Math.random() * 8,
      y: 15 + Math.random() * 32,
      maxOpacity: 0.28 + Math.random() * 0.12,
    };
  }
}

function getRandomDrift() {
  const driftUp = Math.random() > 0.18; // 82% drift gently upwards
  const totalY = driftUp
    ? -(30 + Math.random() * 45) // -30px to -75px
    : 30 + Math.random() * 45; // +30px to +75px

  // Non-linear horizontal sway for loose organic S-curve path
  const sway = 14 + Math.random() * 20; // 14px to 34px
  const dir = Math.random() > 0.5 ? 1 : -1;

  const tx1 = dir * sway * (0.6 + Math.random() * 0.3);
  const ty1 = totalY * 0.22 + (Math.random() * 6 - 3);
  const r1 = (Math.random() - 0.5) * 12;

  const tx2 = -dir * sway * (0.5 + Math.random() * 0.3);
  const ty2 = totalY * 0.52 + (Math.random() * 8 - 4);
  const r2 = (Math.random() - 0.5) * 18;

  const tx3 = dir * sway * (0.8 + Math.random() * 0.3);
  const ty3 = totalY * 0.8 + (Math.random() * 6 - 3);
  const r3 = (Math.random() - 0.5) * 14;

  const tx4 = -dir * sway * (0.3 + Math.random() * 0.4);
  const ty4 = totalY;
  const r4 = (Math.random() - 0.5) * 22;

  return { tx1, ty1, r1, tx2, ty2, r2, tx3, ty3, r3, tx4, ty4, r4 };
}

interface IconConfig {
  key: string;
  iconIndex: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  maxOpacity: number;
  drift: ReturnType<typeof getRandomDrift>;
}

function generateRandomIconConfig(preferredIconIndex?: number): IconConfig {
  const iconIndex =
    preferredIconIndex !== undefined
      ? preferredIconIndex % AVAILABLE_ICONS.length
      : Math.floor(Math.random() * AVAILABLE_ICONS.length);
  const { x, y, maxOpacity } = getRandomZonePosition();
  const size = Math.floor(16 + Math.random() * 13); // 16 to 28px
  const duration = 7 + Math.random() * 7; // 7s to 14s
  const drift = getRandomDrift();

  return {
    key: Math.random().toString(36).substring(2, 9),
    iconIndex,
    x,
    y,
    size,
    duration,
    maxOpacity,
    drift,
  };
}

function SingleFloatingIcon({
  initialDelay,
  defaultIconIndex,
  prefersReducedMotion,
}: {
  initialDelay: number;
  defaultIconIndex: number;
  prefersReducedMotion: boolean;
}) {
  const [active, setActive] = useState(false);
  const [config, setConfig] = useState<IconConfig | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const spawn = useCallback(() => {
    setConfig(generateRandomIconConfig());
    setActive(true);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      // In reduced motion mode, stay static with subtle opacity
      setConfig(generateRandomIconConfig(defaultIconIndex));
      setActive(true);
      return;
    }

    timerRef.current = setTimeout(() => {
      spawn();
    }, initialDelay * 1000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [initialDelay, spawn, prefersReducedMotion, defaultIconIndex]);

  const handleAnimationEnd = () => {
    if (prefersReducedMotion) return;
    setActive(false);
    // Random rest delay before popping up again at a new random position
    const restDelay = 1000 + Math.random() * 4000; // 1s to 5s
    timerRef.current = setTimeout(() => {
      spawn();
    }, restDelay);
  };

  if (!active || !config) return null;

  const IconComp = AVAILABLE_ICONS[config.iconIndex];

  return (
    <div
      key={config.key}
      className="hero-floating-icon"
      onAnimationEnd={handleAnimationEnd}
      style={{
        left: `${config.x}%`,
        top: `${config.y}%`,
        width: `${config.size}px`,
        height: `${config.size}px`,
        animationDuration: `${config.duration}s`,
        ["--max-opacity" as string]: `${config.maxOpacity}`,
        ["--tx1" as string]: `${config.drift.tx1}px`,
        ["--ty1" as string]: `${config.drift.ty1}px`,
        ["--r1" as string]: `${config.drift.r1}deg`,
        ["--tx2" as string]: `${config.drift.tx2}px`,
        ["--ty2" as string]: `${config.drift.ty2}px`,
        ["--r2" as string]: `${config.drift.r2}deg`,
        ["--tx3" as string]: `${config.drift.tx3}px`,
        ["--ty3" as string]: `${config.drift.ty3}px`,
        ["--r3" as string]: `${config.drift.r3}deg`,
        ["--tx4" as string]: `${config.drift.tx4}px`,
        ["--ty4" as string]: `${config.drift.ty4}px`,
        ["--r4" as string]: `${config.drift.r4}deg`,
      } as React.CSSProperties}
    >
      <IconComp size={config.size} />
    </div>
  );
}

export function HeroFloatingIcons() {
  const [mounted, setMounted] = useState(false);
  const [iconSeeds, setIconSeeds] = useState<
    Array<{ delay: number; iconIndex: number }>
  >([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPrefersReducedMotion(reduced);

    // Randomize icon count between 11 and 16 on page load
    const count = Math.floor(11 + Math.random() * 5);
    const seeds = Array.from({ length: count }, (_, i) => ({
      // Stagger initial delay between 0 and 5s
      delay: Math.random() * 4.8,
      iconIndex: i % AVAILABLE_ICONS.length,
    }));

    setIconSeeds(seeds);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {iconSeeds.map((seed, i) => (
        <SingleFloatingIcon
          key={`hero-floating-icon-${i}`}
          initialDelay={seed.delay}
          defaultIconIndex={seed.iconIndex}
          prefersReducedMotion={prefersReducedMotion}
        />
      ))}
    </div>
  );
}

export default HeroFloatingIcons;
