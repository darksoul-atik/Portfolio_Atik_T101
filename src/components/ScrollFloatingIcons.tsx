"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import "./ScrollFloatingIcons.css";
import {
  Code2,
  Code,
  Braces,
  Hash,
  GitBranch,
  GitPullRequest,
  GitMerge,
  GitCommit,
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
  FileCode2,
  FolderCode,
  Sparkles,
  Zap,
  Globe,
  Bot,
  Shield,
  Atom,
  Radio,
  Sliders,
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNextdotjs,
  SiNestjs,
  SiTailwindcss,
  SiNodedotjs,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiFastapi,
  SiGit,
  SiGithub,
  SiFirebase,
} from "react-icons/si";

type IconComponentType = React.ComponentType<{
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}>;

function wrapSiIcon(
  SiIcon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
): IconComponentType {
  return function Wrapped({ size = 20 }: { size?: number }) {
    return <SiIcon style={{ width: size, height: size }} className="shrink-0" />;
  };
}

const ALL_ICONS: IconComponentType[] = [
  Code2,
  Code,
  Braces,
  Hash,
  GitBranch,
  GitPullRequest,
  GitMerge,
  GitCommit,
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
  FileCode2,
  FolderCode,
  Sparkles,
  Zap,
  Globe,
  Bot,
  Shield,
  Atom,
  Radio,
  Sliders,
  wrapSiIcon(SiReact),
  wrapSiIcon(SiTypescript),
  wrapSiIcon(SiJavascript),
  wrapSiIcon(SiPython),
  wrapSiIcon(SiNextdotjs),
  wrapSiIcon(SiNestjs),
  wrapSiIcon(SiTailwindcss),
  wrapSiIcon(SiNodedotjs),
  wrapSiIcon(SiDocker),
  wrapSiIcon(SiMongodb),
  wrapSiIcon(SiPostgresql),
  wrapSiIcon(SiFastapi),
  wrapSiIcon(SiGit),
  wrapSiIcon(SiGithub),
  wrapSiIcon(SiFirebase),
];

function getRandomZonePosition(): { x: number; y: number; maxOpacity: number } {
  // Covers 100vw x 100vh full-screen area:
  // Zone 0: Far-left gutter (x: 1% to 15%, y: 5% to 92%)
  // Zone 1: Far-right gutter (x: 85% to 99%, y: 5% to 92%)
  // Zone 2: Top horizontal strip (x: 5% to 95%, y: 3% to 15%)
  // Zone 3: Bottom horizontal strip (x: 5% to 95%, y: 84% to 96%)
  // Zone 4: Left-middle band (x: 15% to 32%, y: 15% to 85%)
  // Zone 5: Right-middle band (x: 68% to 85%, y: 15% to 85%)
  // Zone 6: Center content zone (x: 32% to 68%, y: 15% to 84%) - lowered opacity
  const roll = Math.random();

  if (roll < 0.24) {
    // Far-left gutter
    return {
      x: 1 + Math.random() * 14,
      y: 5 + Math.random() * 88,
      maxOpacity: 0.65 + Math.random() * 0.1,
    };
  } else if (roll < 0.48) {
    // Far-right gutter
    return {
      x: 85 + Math.random() * 14,
      y: 5 + Math.random() * 88,
      maxOpacity: 0.65 + Math.random() * 0.1,
    };
  } else if (roll < 0.62) {
    // Top strip
    return {
      x: 5 + Math.random() * 90,
      y: 3 + Math.random() * 13,
      maxOpacity: 0.65 + Math.random() * 0.1,
    };
  } else if (roll < 0.74) {
    // Bottom strip
    return {
      x: 5 + Math.random() * 90,
      y: 84 + Math.random() * 12,
      maxOpacity: 0.65 + Math.random() * 0.1,
    };
  } else if (roll < 0.84) {
    // Left-middle band
    return {
      x: 15 + Math.random() * 16,
      y: 15 + Math.random() * 68,
      maxOpacity: 0.55 + Math.random() * 0.15,
    };
  } else if (roll < 0.94) {
    // Right-middle band
    return {
      x: 68 + Math.random() * 16,
      y: 15 + Math.random() * 68,
      maxOpacity: 0.55 + Math.random() * 0.15,
    };
  } else {
    // Center area (very subtle opacity so text readability is preserved)
    return {
      x: 34 + Math.random() * 32,
      y: 18 + Math.random() * 64,
      maxOpacity: 0.22 + Math.random() * 0.12,
    };
  }
}

function getRandomDrift() {
  const driftUp = Math.random() > 0.18;
  const totalY = driftUp
    ? -(30 + Math.random() * 45)
    : 30 + Math.random() * 45;

  const sway = 14 + Math.random() * 22;
  const dir = Math.random() > 0.5 ? 1 : -1;

  const tx1 = dir * sway * (0.6 + Math.random() * 0.3);
  const ty1 = totalY * 0.22 + (Math.random() * 6 - 3);
  const r1 = (Math.random() - 0.5) * 14;

  const tx2 = -dir * sway * (0.5 + Math.random() * 0.3);
  const ty2 = totalY * 0.52 + (Math.random() * 8 - 4);
  const r2 = (Math.random() - 0.5) * 20;

  const tx3 = dir * sway * (0.8 + Math.random() * 0.3);
  const ty3 = totalY * 0.8 + (Math.random() * 6 - 3);
  const r3 = (Math.random() - 0.5) * 16;

  const tx4 = -dir * sway * (0.3 + Math.random() * 0.4);
  const ty4 = totalY;
  const r4 = (Math.random() - 0.5) * 24;

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

function generateRandomIconConfig(preferredIndex?: number): IconConfig {
  const iconIndex =
    preferredIndex !== undefined
      ? preferredIndex % ALL_ICONS.length
      : Math.floor(Math.random() * ALL_ICONS.length);
  const { x, y, maxOpacity } = getRandomZonePosition();
  const size = Math.floor(16 + Math.random() * 12); // 16 to 27px
  const duration = 6.5 + Math.random() * 7.5; // 6.5s to 14s
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

function SingleScrollIcon({
  initialDelay,
  defaultIndex,
  prefersReducedMotion,
}: {
  initialDelay: number;
  defaultIndex: number;
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
      setConfig(generateRandomIconConfig(defaultIndex));
      setActive(true);
      return;
    }

    timerRef.current = setTimeout(() => {
      spawn();
    }, initialDelay * 1000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [initialDelay, spawn, prefersReducedMotion, defaultIndex]);

  const handleAnimationEnd = () => {
    if (prefersReducedMotion) return;
    setActive(false);
    const restDelay = 800 + Math.random() * 3200;
    timerRef.current = setTimeout(() => {
      spawn();
    }, restDelay);
  };

  if (!active || !config) return null;

  const IconComp = ALL_ICONS[config.iconIndex];

  return (
    <div
      key={config.key}
      className="scroll-floating-icon"
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

export function ScrollFloatingIcons() {
  const [mounted, setMounted] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [iconSeeds, setIconSeeds] = useState<
    Array<{ delay: number; iconIndex: number }>
  >([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPrefersReducedMotion(reduced);

    // 32 to 38 icons across the entire viewport
    const count = Math.floor(32 + Math.random() * 6);
    const seeds = Array.from({ length: count }, (_, i) => ({
      delay: Math.random() * 4.5,
      iconIndex: i % ALL_ICONS.length,
    }));

    setIconSeeds(seeds);
    setMounted(true);
  }, []);

  // Listen for window scroll to activate/deactivate
  useEffect(() => {
    const onScroll = () => {
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Remains active for 2.2s after scrolling stops before beginning smooth fadeout
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 2200);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`scroll-floating-layer ${
        isScrolling ? "is-scrolling" : "is-idle"
      }`}
    >
      {mounted &&
        iconSeeds.map((seed, i) => (
          <SingleScrollIcon
            key={`scroll-icon-${i}`}
            initialDelay={seed.delay}
            defaultIndex={seed.iconIndex}
            prefersReducedMotion={prefersReducedMotion}
          />
        ))}
    </div>
  );
}

export default ScrollFloatingIcons;
